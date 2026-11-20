/**
 * Inkrementální stažení přístupů z PostHogu a jejich sloučení s uloženými daty.
 *
 * Přístup = jeden `distinct_id` (viewer měří bez cookies, každé načtení stránky je nový
 * anonymní návštěvník). Ukládají se jen přístupy, ve kterých se načetla ukázka
 * (`sample_load`) nebo vlastní data (`file_load`); ostatní se jen počítají po dnech.
 *
 * Událost se ukládá jako dvojice [čas, řádek]: český čas `YYYY-MM-DDTHH:MM:SS`
 * a řádek `kód argumenty` (kódy viz `app.ts`). Stahuje se okno od poslední známé
 * události minus hodina (zpožděné dávkové události), a to **celá historie** každého
 * přístupu, který v okně má událost — doplní se tak i dozvuky starších přístupů.
 * Duplicity z překryvu oken se zahodí (stejný čas + stejný řádek).
 */
import { hogql } from './posthog.js';

/** Události jednoho přístupu: [český čas `YYYY-MM-DDTHH:MM:SS`, `kód argumenty`]. */
export type StoredEvent = [string, string];

export interface StoredVisit {
  /** Den přístupu (`YYYY-MM-DD`, den první události, český čas). */
  day: string;
  /** Štítek v rámci dne (A, B, …, AA, …). */
  tag: string;
  ev: StoredEvent[];
}

export interface StoredData {
  version: 1;
  /** Unixový čas (s) poslední stažené události — začátek dalšího okna. */
  lastU: number;
  /** Poslední událost v českém čase (`YYYY-MM-DD HH:MM`), pro zobrazení. */
  lastEvent: string;
  /** Všechny přístupy (i bez dat) po dnech podle první události (`YYYY-MM-DD` → počet). */
  totalByDay: Record<string, number>;
  visits: Record<string, StoredVisit>;
}

/** Začátek měření ve vieweru — dřív se nic nestahuje. */
const DATA_START = '2026-11-01';
const DATA_START_U = Date.UTC(2026, 10, 1) / 1000;
/** Přesah okna (s): `active_time` a `view_3d` se odesílají dávkově a později. */
const OVERLAP = 3600;
const PAGE = 5000;

/** Událost → řádek `kód argumenty` (stejné kódy jako dřívější `visits.txt`). */
const LINE_SQL = `multiIf(
  event = '$pageview', 'pv',
  event = 'active_time', concat('at ', ifNull(toString(properties.seconds), '0')),
  event = 'view_3d', concat('v3 ', ifNull(toString(properties.seconds), '0')),
  event = 'sample_load', concat('sl ', ifNull(toString(properties.sample), '?')),
  event = 'file_load', concat('fl ', ifNull(toString(properties.mode), '?'),
    if(properties.min_x IS NULL, '', concat(' ', toString(properties.min_x), ' ', toString(properties.min_y), ' ',
      toString(properties.max_x), ' ', toString(properties.max_y)))),
  event = 'svg_symbols', 'svg',
  event = 'overlay_toggle', concat('ov ', ifNull(toString(properties.overlay), '?')),
  event = 'terrain_load', concat('tl ', ifNull(toString(properties.via), '?')),
  event = 'basemap_change', concat('bm ', ifNull(toString(properties.basemap), '?')),
  event = 'map_feature_click', concat('fc ', ifNull(toString(properties.type), '?'), ' ', ifNull(toString(properties.view), '?')),
  event = 'features_panel', concat('fp ', ifNull(toString(properties.via), '?')),
  event = 'theme_change', concat('th ', ifNull(toString(properties.theme), '?')),
  event = 'topology_check', concat('tc ', ifNull(toString(properties.mode), '?')),
  event = 'measure', concat('ms ', ifNull(toString(properties.view), '?')),
  event = 'linkedin_click', 'li',
  event = 'export_dxf', concat('ex ', ifNull(toString(properties.mode), '?'), ' ', ifNull(toString(properties.format), '?')),
  event = 'kn_query', concat('kq ', ifNull(toString(properties.view), '?')),
  event = 'mode_change', concat('mc ', ifNull(toString(properties.mode), '?')),
  replaceAll(event, ' ', '_'))`;

/**
 * Události přístupů aktivních od `sinceU`. Stránkování kurzorem podle času
 * (`timestamp >= cursorU`) — OFFSET PostHog s osobním API klíčem nedovoluje.
 * Řádky ze sekundy na hranici stránek přijdou dvakrát, zahodí je deduplikace.
 */
function eventsSql(sinceU: number, cursorU: number, pageSize: number): string {
  return `SELECT distinct_id,
    formatDateTime(toTimeZone(timestamp, 'Europe/Prague'), '%Y-%m-%dT%H:%i:%S') AS ts,
    toUnixTimestamp(timestamp) AS u,
    ${LINE_SQL} AS line
  FROM events
  WHERE timestamp >= toDateTime('${DATA_START} 00:00:00')
    ${cursorU > 0 ? `AND timestamp >= fromUnixTimestamp(${Math.floor(cursorU)})` : ''}
    AND distinct_id IN (SELECT distinct_id FROM events WHERE timestamp >= fromUnixTimestamp(${Math.floor(sinceU)}))
    AND distinct_id IN (SELECT distinct_id FROM events WHERE event IN ('sample_load', 'file_load'))
  ORDER BY timestamp, distinct_id
  LIMIT ${pageSize}`;
}

/** Počty všech přístupů po dnech (podle první události), od dne `fromDay`. */
function totalsSql(fromDay: string): string {
  return `SELECT toString(d) AS den, count() AS n
  FROM (SELECT distinct_id, toDate(toTimeZone(min(timestamp), 'Europe/Prague')) AS d
        FROM events WHERE timestamp >= toDateTime('${DATA_START} 00:00:00') GROUP BY distinct_id)
  WHERE d >= toDate('${fromDay}')
  GROUP BY d ORDER BY d`;
}

/** Štítky A … Z, AA … ZZ. */
function* labelSeq(): Generator<string> {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  yield* abc;
  for (const a of abc) for (const c of abc) yield a + c;
}

const ISO_DAY = /^\d{4}-\d\d-\d\d$/;
const TS = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d$/;

export interface SyncResult {
  data: StoredData;
  /** Nově přidané události (bez duplicit z překryvu). */
  added: number;
  /** Nové přístupy s daty. */
  newVisits: number;
}

/**
 * Stáhne novinky od `prev.lastU − OVERLAP` (bez `prev` vše od začátku měření)
 * a vrátí sloučená data. `prev` se nemění.
 */
export async function syncData(
  key: string,
  prev: StoredData | null,
  onProgress?: (msg: string) => void,
  pageSize = PAGE,
): Promise<SyncResult> {
  const data: StoredData = prev
    ? structuredClone(prev)
    : { version: 1, lastU: 0, lastEvent: '', totalByDay: {}, visits: {} };
  const sinceU = prev && prev.lastU > 0 ? prev.lastU - OVERLAP : DATA_START_U;

  // ── události (stránkování) ─────────────────────────────────
  const rows: [string, string, number, string][] = [];
  for (let cursor = 0; ; ) {
    onProgress?.(rows.length ? `Stahuji události (${rows.length}+)…` : 'Stahuji události…');
    const page = await hogql(key, eventsSql(sinceU, cursor, pageSize));
    let last = cursor;
    for (const r of page) {
      const [id, ts, u, line] = r;
      if (typeof id !== 'string' || typeof ts !== 'string' || !TS.test(ts) || typeof line !== 'string') continue;
      rows.push([id, ts, Number(u), line.trim().replace(/\s+/g, ' ')]);
      if (Number(u) > last) last = Number(u);
    }
    if (page.length < pageSize) break;
    // celá stránka v jedné sekundě → kurzor by se nepohnul; posun o sekundu (nereálný případ)
    cursor = last > cursor ? last : cursor + 1;
  }

  // ── sloučení podle distinct_id, deduplikace ────────────────
  let added = 0;
  let newVisits = 0;
  let maxU = data.lastU;
  let maxTs = '';
  const touched = new Set<string>();
  const seen = new Map<string, Set<string>>();
  for (const [id, ts, u, line] of rows) {
    let v = data.visits[id];
    if (!v) {
      v = data.visits[id] = { day: '', tag: '', ev: [] };
      newVisits++;
    }
    let s = seen.get(id);
    if (!s) seen.set(id, (s = new Set(v.ev.map(([t, l]) => `${t}|${l}`))));
    if (Number.isFinite(u) && u > maxU) maxU = u;
    if (ts > maxTs) maxTs = ts;
    if (s.has(`${ts}|${line}`)) continue;
    s.add(`${ts}|${line}`);
    v.ev.push([ts, line]);
    touched.add(id);
    added++;
  }

  // ── seřazení událostí, den přístupu ────────────────────────
  for (const id of touched) {
    const v = data.visits[id];
    // stabilní řazení: stejný čas zachová pořadí z PostHogu
    v.ev.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
    const day = v.ev[0][0].slice(0, 10);
    if (day !== v.day) {
      v.day = day;
      v.tag = ''; // nový den → nový štítek
    }
  }

  // ── štítky (A, B, … v rámci dne, podle prvního času) ──────
  const used = new Map<string, Set<string>>();
  const ordered = Object.values(data.visits).sort((a, b) => (a.ev[0][0] < b.ev[0][0] ? -1 : 1));
  for (const v of ordered) if (v.tag) (used.get(v.day) ?? used.set(v.day, new Set()).get(v.day)!).add(v.tag);
  for (const v of ordered) {
    if (v.tag) continue;
    const taken = used.get(v.day) ?? used.set(v.day, new Set()).get(v.day)!;
    for (const t of labelSeq()) {
      if (!taken.has(t)) {
        v.tag = t;
        taken.add(t);
        break;
      }
    }
  }

  // ── počty všech přístupů po dnech (jen dny od posledního známého) ──
  onProgress?.('Stahuji počty přístupů…');
  const known = Object.keys(data.totalByDay).sort();
  const fromDay = known.length ? known[known.length - 1] : DATA_START;
  for (const d of known) if (d >= fromDay) delete data.totalByDay[d];
  for (const [den, n] of await hogql(key, totalsSql(fromDay))) {
    if (typeof den === 'string' && ISO_DAY.test(den)) data.totalByDay[den] = Number(n) || 0;
  }

  data.lastU = maxU;
  if (maxTs && maxTs.replace('T', ' ').slice(0, 16) > data.lastEvent) data.lastEvent = maxTs.replace('T', ' ').slice(0, 16);
  return { data, added, newVisits };
}
