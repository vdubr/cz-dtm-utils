/**
 * Přehled používání vieweru (/analytics) — vykreslení z dat PostHogu (`StoredData`).
 *
 * Řádek události = `kód argumenty`. Kódy: pv, at <s>, v3 <s>, sl <ukázka>,
 * fl <režim> [minX minY maxX maxY], svg, ov <dtm|kn>, tl <overlay|toggle|basemap>,
 * bm <none|ortofoto|zm>, fc <typ> <2d|3d>, fp <map_click|button>, th <dark|light>,
 * tc <režim>, ms <2d|3d>, li, ex <režim> [formát], kq <2d|3d>, mc <režim>.
 *
 * Časy jsou český čas; událost o N dní později v téže otevřené kartě má u času „+N“.
 */
import proj4 from 'proj4';
import { KRAJE } from './kraje.js';
import type { StoredData } from './sync.js';

type Extent = [number, number, number, number];

interface Ev {
  /** Sekundy od půlnoci dne přístupu (včetně +N dní). */
  t: number;
  clock: string;
  plus: number;
  code: string;
  a: string[];
}

interface Visit {
  id: string;
  /** Den přístupu `YYYY-MM-DD`. */
  dayIso: string;
  /** Popisek dne `20.11.`. */
  day: string;
  tag: string;
  ev: Ev[];
  /** Nástroje, ve kterých přístup probíhal (z cesty u `pv` a z režimu u načtení / přepnutí). */
  tools: Set<string>;
  /** Odkud uživatel přišel: doména (`$referring_domain`), `$direct` = přímo, `''` = neznámo. */
  ref: string;
}

interface Row {
  i: number;
  t: number;
  off: number;
  code: string;
  cat: string;
  label: string;
  small: string;
  extra?: string;
  bar: { s: number; e: number; kind: 'act' | 'v3d' } | null;
  plus: number;
  clock: string;
}

interface Stats {
  visits: number;
  own: number;
  sample: number;
  clicks: number;
  active: number;
  ext: number;
}

type Gran = 'den' | 'tyden' | 'mesic';
/**
 * Typ přístupu: s načtenou ukázkou / s načtenými vlastními daty. Filtr = sjednocení
 * zapnutých (přístup může mít obojí); nic zapnuté = všechny přístupy, i bez načtení dat.
 */
type Typ = 'ukazka' | 'vlastni';
interface Sel {
  from: number;
  to: number;
}

const OVERLAY: Record<string, string> = { dtm: 'DTM', kn: 'katastr nemovitostí' };
const TERRAIN: Record<string, string> = { overlay: 'přes překryv', toggle: 'přepínačem', basemap: 'kvůli podkladu' };
const BASEMAP: Record<string, string> = { none: 'bez podkladu', ortofoto: 'ortofoto', zm: 'základní mapa' };
const CAT: Record<string, string> = {
  ex: 'soubor', tc: 'soubor', mc: 'soubor', ms: 'mapa', kq: 'mapa', li: 'ui', pv: 'pv', sl: 'soubor', fl: 'soubor',
  fc: 'mapa', fp: 'mapa', ov: 'podklad', bm: 'podklad', tl: 'podklad', v3: '3d', th: 'ui', svg: 'ui', at: 'pv',
};
const COLOR: Record<string, string> = {
  pv: 'var(--c-pv)', soubor: 'var(--c-soubor)', mapa: 'var(--c-mapa)', podklad: 'var(--c-podklad)', '3d': 'var(--c-3d)', ui: 'var(--c-ui)',
};
const CAP = 60; // mezery delší než CAP sekund se na ose zkrátí
const KROVAK =
  '+proj=krovak +lat_0=49.5 +lon_0=24.8333333333333 +alpha=30.2881397527778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +units=m +no_defs +type=crs';
const MONTHS = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'];
const DAY = 86400000;
const GRANS: Gran[] = ['den', 'tyden', 'mesic'];
const TYPY: Typ[] = ['ukazka', 'vlastni'];
const TYP_CODE: Record<Typ, string> = { ukazka: 'sl', vlastni: 'fl' };
/** Filtr nástroje (JŽM = data ŽXML). */
type Tool = 'jvf' | 'jzm';
const TOOLS: Tool[] = ['jvf', 'jzm'];
const TOOL_LABEL: Record<Tool, string> = { jvf: 'JVF', jzm: 'ŽXML' };

const $ = (id: string): HTMLElement => document.getElementById(id)!;
const esc = (s: unknown): string =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const mmss = (s: number): string => {
  s = Math.round(s);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}` : `${m}:${String(r).padStart(2, '0')}`;
};
const dur = (s: number): string => (s >= 60 ? mmss(s) + (s >= 3600 ? ' h' : ' min') : Math.round(s) + ' s');
const km = (m: number): string => (m / 1000).toLocaleString('cs-CZ', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
/** Velikost extentu: pod 1 km v metrech („19 × 73 m“), jinak v km („1,2 × 3,4 km“). */
const extSize = (e: Extent): string => {
  const w = e[2] - e[0], h = e[3] - e[1];
  return Math.max(w, h) < 1000 ? `${Math.round(w)} × ${Math.round(h)} m` : `${km(w)} × ${km(h)} km`;
};
const plural = (n: number, one: string, few: string, many: string): string => (n === 1 ? one : n > 1 && n < 5 ? few : many);

/* ── Převod uložených dat ───────────────────────────────────── */
const parseIso = (s: string): number => new Date(s + 'T00:00:00Z').getTime();
const isoDay = (t: number): string => new Date(t).toISOString().slice(0, 10);
const fmtDay = (t: number): string => {
  const d = new Date(t);
  return `${d.getUTCDate()}. ${d.getUTCMonth() + 1}.`;
};

function toVisits(data: StoredData): Visit[] {
  const visits: Visit[] = [];
  for (const [id, sv] of Object.entries(data.visits)) {
    if (!sv.ev.length) continue;
    const d0 = parseIso(sv.day);
    const ev: Ev[] = sv.ev.map(([ts, line]) => {
      const plus = Math.round((parseIso(ts.slice(0, 10)) - d0) / DAY);
      const [h, m, s] = ts.slice(11).split(':').map(Number);
      const p = line.split(' ');
      return { t: h * 3600 + m * 60 + s + plus * 86400, clock: ts.slice(11, 16), plus, code: p[0], a: p.slice(1) };
    });
    const d = new Date(d0);
    visits.push({ id, dayIso: sv.day, day: `${d.getUTCDate()}.${d.getUTCMonth() + 1}.`, tag: sv.tag, ev, tools: toolsOf(ev), ref: ev.find((e) => e.code === 'pv')?.a[1] ?? '' });
  }
  // podle prvního času
  return visits.sort((x, y) => x.dayIso.localeCompare(y.dayIso) || x.ev[0].t - y.ev[0].t);
}

/** Popisek zdroje přístupu (`$direct` → „přímý přístup“). */
const DIRECT = 'přímý přístup';
const refLabel = (ref: string): string => (ref === '$direct' ? DIRECT : ref);

/** Nástroj podle cesty stránky (`/jzm` → jzm, `/udm` → udm, jinak jvf). */
const toolOfPath = (path: string | undefined): string => {
  const seg = (path ?? '/').split('/').filter(Boolean)[0] ?? '';
  return seg === 'jzm' || seg === 'udm' ? seg : 'jvf';
};

/**
 * Nástroje přístupu: cesta u načtení stránky (`pv /jzm`) a režim u načtení souboru / ukázky,
 * kontroly, exportu a přepnutí nástroje (`fl jzm …`, `mc udm`). V produkci jsou zatím
 * vydané jen JVF — adresa nevydaného nástroje se přesměruje na `/` dřív, než se měří.
 */
function toolsOf(ev: Ev[]): Set<string> {
  const tools = new Set<string>();
  for (const e of ev) {
    if (e.code === 'pv') tools.add(toolOfPath(e.a[0]));
    else if (['fl', 'sl', 'tc', 'ex', 'mc'].includes(e.code) && /^(jvf|udm|jzm)$/.test(e.a[0] ?? '')) tools.add(e.a[0]);
  }
  if (!tools.size) tools.add('jvf');
  return tools;
}

/** Extent z argumentů události `fl` (`fl jvf minX minY maxX maxY`), jinak null. */
function extentOf(e: Ev): Extent | null {
  if (e.code !== 'fl' || e.a.length < 5) return null;
  const n = e.a.slice(1, 5).map(Number);
  return n.every(Number.isFinite) ? (n as Extent) : null;
}

function describe(v: Visit): Row[] {
  const t0 = v.ev[0].t, rows: Row[] = [];
  for (const e of v.ev) {
    const a = e.a, prev = rows[rows.length - 1];
    if (e.code === 'fp' && prev && prev.code === 'fc' && prev.t === e.t) {
      prev.extra = 'otevřen Přehled prvků';
      continue;
    }
    let label: string, small = '';
    let bar: Row['bar'] = null;
    switch (e.code) {
      case 'pv':
        label = 'Načtení stránky';
        small = [a[0] && a[0] !== '/' ? a[0] : '', a[1] ? (a[1] === '$direct' ? DIRECT : 'z ' + a[1]) : ''].filter(Boolean).join(' · ');
        break;
      case 'sl': label = 'Načtena ukázka'; small = a[0] ?? ''; break;
      case 'fl': {
        label = 'Načten vlastní soubor';
        small = (a[0] ?? 'jvf').toUpperCase();
        const x = extentOf(e);
        if (x) small += ` · extent ${extSize(x)}`;
        break;
      }
      case 'svg': label = 'Zapnuty SVG symboly (3D)'; break;
      case 'ov': label = 'Přepnut překryv'; small = OVERLAY[a[0]] ?? a[0] ?? ''; break;
      case 'tl': label = 'Načten terén (3D)'; small = TERRAIN[a[0]] ?? a[0] ?? ''; break;
      case 'bm': label = 'Změněn podklad'; small = BASEMAP[a[0]] ?? a[0] ?? ''; break;
      case 'fc': label = 'Klik na prvek'; small = `${a[0] ?? '?'} · ${(a[1] ?? '').toUpperCase()}`; break;
      case 'fp': label = 'Otevřen Přehled prvků'; small = a[0] === 'map_click' ? 'klikem v mapě' : 'tlačítkem'; break;
      case 'th': label = 'Změněn motiv'; small = a[0] === 'dark' ? 'tmavý' : 'světlý'; break;
      case 'tc': label = 'Spuštěna kontrola topologie'; small = (a[0] ?? 'jvf').toUpperCase(); break;
      case 'ms': label = 'Zapnuto měření'; small = (a[0] ?? '').toUpperCase(); break;
      case 'kq': label = 'Dotaz do katastru'; small = (a[0] ?? '').toUpperCase(); break;
      case 'mc': label = 'Přepnut nástroj'; small = (a[0] ?? '').toUpperCase(); break;
      case 'li': label = 'Klik na odkaz autora'; small = 'LinkedIn'; break;
      case 'ex': label = 'Export do CAD (DXF)'; small = a[1] && a[1] !== '?' ? 'DXF ' + a[1] : (a[0] ?? 'jvf').toUpperCase(); break;
      case 'at': label = 'Aktivní čas'; small = a[0] + ' s'; bar = { s: Math.max(t0, e.t - +a[0]), e: e.t, kind: 'act' }; break;
      case 'v3': label = 'Čas ve 3D'; small = a[0] + ' s'; bar = { s: Math.max(t0, e.t - +a[0]), e: e.t, kind: 'v3d' }; break;
      default: label = e.code; small = a.join(' ');
    }
    rows.push({ i: rows.length, t: e.t, off: e.t - t0, code: e.code, cat: CAT[e.code] ?? 'pv', label, small, bar, plus: e.plus, clock: e.clock });
  }
  return rows;
}

/* Zhuštěná osa: mezery nad CAP sekund se zkrátí. */
function buildStrip(rows: Row[], t0: number): string {
  const keys = new Set([t0]);
  rows.forEach((r) => {
    keys.add(r.t);
    if (r.bar) keys.add(r.bar.s);
  });
  const ks = [...keys].sort((x, y) => x - y);
  const pos = new Map<number, number>([[ks[0], 0]]), breaks: number[] = [];
  for (let i = 1; i < ks.length; i++) {
    const d = ks[i] - ks[i - 1], w = Math.min(d, CAP), base = pos.get(ks[i - 1])!;
    if (d > CAP) breaks.push(base + w / 2);
    pos.set(ks[i], base + w);
  }
  const total = Math.max(pos.get(ks[ks.length - 1])!, 1);
  const x = (t: number): number => 1.5 + (97 * pos.get(t)!) / total;
  let h = '<div class="rail"></div>';
  rows.filter((r) => r.bar).forEach((r) => {
    const l = x(r.bar!.s), w = Math.max(x(r.bar!.e) - l, 0.8);
    h += `<div class="${r.bar!.kind}" data-i="${r.i}" style="left:${l}%;width:${w}%" title="+${mmss(r.off)} ${esc(r.label)} ${esc(r.small)}"></div>`;
  });
  breaks.forEach((b) => {
    h += `<div class="brk" style="left:${1.5 + (97 * b) / total}%">⋯</div>`;
  });
  rows.filter((r) => !r.bar && r.code !== 'at').forEach((r) => {
    h += `<div class="dot" data-i="${r.i}" style="left:${x(r.t)}%;background:${COLOR[r.cat]}" title="+${mmss(r.off)} ${esc(r.label)}${r.small ? ' · ' + esc(r.small) : ''}"></div>`;
  });
  return h;
}

/* ── Karty přístupů ─────────────────────────────────────────── */
function renderDays(visits: Visit[]): Stats {
  const stats: Stats = { visits: visits.length, own: 0, sample: 0, clicks: 0, active: 0, ext: 0 };
  const days: Record<string, string[]> = {};
  visits.forEach((v) => {
    const rows = describe(v), t0 = v.ev[0].t, total = v.ev[v.ev.length - 1].t - t0;
    const act = v.ev.filter((e) => e.code === 'at').reduce((s, e) => s + (+e.a[0] || 0), 0);
    const v3 = v.ev.filter((e) => e.code === 'v3').reduce((s, e) => s + (+e.a[0] || 0), 0);
    const inter = rows.filter((r) => !['pv', 'at', 'v3'].includes(r.code));
    stats.own += v.ev.filter((e) => e.code === 'fl').length;
    stats.sample += v.ev.filter((e) => e.code === 'sl').length;
    stats.clicks += v.ev.filter((e) => e.code === 'fc').length;
    stats.ext += v.ev.filter((e) => extentOf(e)).length;
    stats.active += act;

    let list = '';
    rows.forEach((r, i) => {
      if (i > 0) {
        const g = r.t - rows[i - 1].t;
        if (g >= 60) list += `<li class="gap"><span class="off"></span><span></span><span class="txt">⋯ ${dur(g)} bez události</span></li>`;
      }
      const sm = [r.small, r.extra].filter(Boolean).join(' · ');
      list += `<li data-i="${r.i}"><span class="off">+${mmss(r.off)}</span><span class="d" style="background:${COLOR[r.cat]}"></span><span class="txt">${esc(r.label)}${sm ? ' <small>' + esc(sm) + '</small>' : ''}</span></li>`;
    });

    const only = rows.length === 1;
    const meta = only
      ? 'bez interakce'
      : ['otevřeno ' + dur(total), act ? 'aktivní ' + dur(act) : '', v3 ? '3D ' + dur(v3) : '', inter.length ? inter.length + ' akcí' : '']
          .filter(Boolean)
          .join(' · ');
    const exts = v.ev.filter((e) => extentOf(e)).map((e) => ({ x: extentOf(e)!, t: e.clock + (e.plus ? ` (+${e.plus} d)` : '') }));
    const html = `<details class="card" data-vid="${esc(v.id)}">
      <summary class="head"><span class="chev" aria-hidden="true"></span><span class="tag">${esc(v.day)} ${esc(v.tag)}</span><span class="when">${esc(v.ev[0].clock)}</span>${exts.length ? '<span class="pin" title="Má extent">◆</span>' : ''}<span class="meta">${meta} · ${rows.length} událostí</span></summary>
      <div class="cbody">
        ${only ? '' : `<div><div class="strip">${buildStrip(rows, t0)}</div><div class="ends"><span>+0:00</span><span>+${mmss(total)}</span></div></div>`}
        <ol class="ev">${list}</ol>
        ${exts.length ? `<details class="mm" data-ext="${esc(JSON.stringify(exts))}"><summary>Mapa extentu (${exts.length === 1 ? '1 soubor' : exts.length + ' soubory'}) · ZTM 1 : 5 000</summary><div class="mmview"></div></details>` : ''}
      </div>
    </details>`;
    (days[v.day] = days[v.day] || []).push(html);
  });

  if (!visits.length) {
    const where = state.sel ? ' ve vybraném období' : '';
    $('days').innerHTML = anyFilter()
      ? `<p class="note">Žádné přístupy ${esc(filterDesc())}${where}. Přehled bere jen produkční weby (ne preview ani localhost).</p>`
      : `<p class="note">Žádné přístupy${where}.</p>`;
    return stats;
  }
  $('days').innerHTML = Object.entries(days)
    .map(([d, cards]) =>
      `<section class="day"><h2>${esc(d)} · ${cards.length} ${plural(cards.length, 'přístup', 'přístupy', 'přístupů')}</h2><div class="grid">${cards.join('')}</div></section>`)
    .join('');
  return stats;
}

/* ── Stav: vybrané období ───────────────────────────────────── */
const state: { data: StoredData | null; visits: Visit[]; sel: Sel | null; gran: Gran; typ: Set<Typ>; tool: Set<Tool>; zdroj: string } = {
  data: null,
  visits: [],
  sel: null, // půlnoc UTC dnů, včetně
  gran: 'den',
  typ: new Set(), // výchozí nic = všechny přístupy
  tool: new Set(), // výchozí nic = všechny nástroje
  zdroj: '', // text filtru „odkud přišli“ (část domény), prázdný = bez filtru
};

const visitDay = (v: Visit): number => parseIso(v.dayIso);
const inSel = (t: number): boolean => !state.sel || (t >= state.sel.from && t <= state.sel.to);
const isTyp = (v: Visit): boolean => !state.typ.size || [...state.typ].some((t) => v.ev.some((e) => e.code === TYP_CODE[t]));
/** Popis filtru do textů: „přístupů s ukázkou“, … (bez filtru prázdný). */
const isTool = (v: Visit): boolean => !state.tool.size || [...state.tool].some((t) => v.tools.has(t));
/** Zdroj: přesně „přímý přístup“, jinak část domény (bez ohledu na velikost písmen). */
const isZdroj = (v: Visit): boolean => {
  const q = state.zdroj.trim().toLowerCase();
  if (!q) return true;
  return q === DIRECT ? v.ref === '$direct' : refLabel(v.ref).toLowerCase().includes(q);
};
/** Přístup projde všemi filtry (typ, nástroj, zdroj). */
const matches = (v: Visit): boolean => isTyp(v) && isTool(v) && isZdroj(v);
const anyFilter = (): boolean => state.typ.size > 0 || state.tool.size > 0 || state.zdroj.trim() !== '';
/** Popis filtru nástroje: „v JVF“, „v JVF nebo ŽXML“ (bez filtru prázdný). */
const toolDesc = (): string => (state.tool.size ? 'v ' + TOOLS.filter((t) => state.tool.has(t)).map((t) => TOOL_LABEL[t]).join(' nebo ') : '');
const zdrojDesc = (): string => {
  const q = state.zdroj.trim();
  return !q ? '' : q.toLowerCase() === DIRECT ? 'přímo (bez odkazu)' : `z „${q}“`;
};
const filterDesc = (): string => [typDesc(), toolDesc(), zdrojDesc()].filter(Boolean).join(' ');
const typDesc = (): string =>
  state.typ.size === 2 ? 's ukázkou nebo vlastními daty' : state.typ.has('ukazka') ? 's ukázkou' : state.typ.has('vlastni') ? 's vlastními daty' : '';
const yearOf = (t: number): number => new Date(t).getUTCFullYear();

/* ── Přehledová lišta ───────────────────────────────────────── */
function renderStats(stats: Stats, inPeriod: number): void {
  const s = (n: number | string, l: string): string => `<div class="stat"><b>${n}</b><span>${l}</span></div>`;
  $('stats').innerHTML =
    s(stats.visits, `${plural(stats.visits, 'přístup', 'přístupy', 'přístupů')} ${filterDesc()}`.trim()) + s(stats.own, 'vlastních souborů') + s(stats.sample, 'načtených ukázek') +
    s(stats.ext, 'projektů s extentem') + s(stats.clicks, 'kliků na prvek') + s(Math.round(stats.active / 60) + ' min', 'aktivního času celkem');
  const hidden = inPeriod - stats.visits;
  $('skipped').textContent = anyFilter()
    ? `Filtr skrývá ${hidden} ${plural(hidden, 'přístup', 'přístupy', 'přístupů')}${state.sel ? ' ve vybraném období' : ''}. ` +
      'Bez zapnutého filtru se zobrazí všechny přístupy, i ty bez načtení ukázky nebo vlastních dat.'
    : 'Zobrazeny jsou všechny přístupy, i bez načtení ukázky nebo vlastních dat (jen otevření stránky, boti, náhledy odkazů apod.).';
}

/* ── Graf: přístupy s vlastním souborem po dnech + výběr období ─ */
interface Bucket {
  from: number;
  to: number;
  v: number;
  label: string;
  title: string;
}
let chartDays: Bucket[] = []; // kbelíky grafu (vždy celé období, výběr jen zvýrazní)

function chartData(): Bucket[] {
  const data = state.data!;
  // počty přístupů po dnech podle filtru typu (osa vždy přes celé období dat)
  const own = new Map<number, number>();
  state.visits.forEach((v) => {
    if (!matches(v)) return;
    const k = visitDay(v);
    own.set(k, (own.get(k) || 0) + 1);
  });
  const known = state.visits.map((v) => v.dayIso).sort();
  const from0 = parseIso(known[0] ?? isoDay(Date.now()));
  const to0 = Math.max(data.lastEvent ? parseIso(data.lastEvent.slice(0, 10)) : 0, parseIso(known[known.length - 1] ?? isoDay(Date.now())), ...own.keys());
  const buckets: Bucket[] = [];
  const push = (from: number, to: number, label: string, title: string): void => {
    let v = 0;
    for (const [t, n] of own) if (t >= from && t <= to) v += n;
    buckets.push({ from, to, v, label, title });
  };
  if (state.gran === 'tyden') {
    // týdny od pondělí; první týden začíná pondělím před začátkem grafu
    for (let t = from0 - ((new Date(from0).getUTCDay() + 6) % 7) * DAY; t <= to0; t += 7 * DAY) {
      push(t, t + 6 * DAY, fmtDay(t), `týden ${fmtDay(t)} – ${fmtDay(t + 6 * DAY)}`);
    }
  } else if (state.gran === 'mesic') {
    const d0 = new Date(from0);
    for (let y = d0.getUTCFullYear(), m = d0.getUTCMonth(); Date.UTC(y, m, 1) <= to0; m === 11 ? ((m = 0), y++) : m++) {
      push(Date.UTC(y, m, 1), Date.UTC(y, m + 1, 1) - DAY, MONTHS[m], `${MONTHS[m]} ${y}`);
    }
  } else {
    for (let t = from0; t <= to0; t += DAY) push(t, t, `${new Date(t).getUTCDate()}.`, fmtDay(t));
  }
  return buckets;
}

const hitsSel = (d: Bucket): boolean => !!state.sel && d.to >= state.sel.from && d.from <= state.sel.to;

function renderChart(): void {
  const el = $('chart');
  chartDays = chartData();
  const days = chartDays, n = days.length;
  if (!n) {
    el.innerHTML = '';
    return;
  }
  const W = Math.max(320, Math.round(el.clientWidth || 900)), H = 230, L = 34, R = 8, T = 24, B = 40;
  const pw = W - L - R, ph = H - T - B, bw = pw / n;
  const maxv = Math.max(5, ...days.map((d) => d.v)), step = maxv > 30 ? 10 : 5, ymax = Math.ceil(maxv / step) * step;
  const y = (v: number): number => T + ph - (ph * v) / ymax;
  let g = '<g class="grid">';
  for (let v = 0; v <= ymax; v += step) g += `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/><text x="${L - 6}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
  g += '</g>';
  const labelEvery = bw < 22 ? Math.ceil(22 / bw) : 1;
  let cols = '';
  days.forEach((d, i) => {
    const x0 = L + i * bw, cx = x0 + bw / 2, w = Math.min(bw * 0.64, 56), x = cx - w / 2;
    const cls = state.sel ? (hitsSel(d) ? 'col in' : 'col out') : 'col';
    cols += `<g class="${cls}" data-i="${i}"><rect class="hit" x="${x0}" y="${T}" width="${bw}" height="${ph + B - 8}"/>`;
    cols += d.v > 0
      ? `<rect class="bar" x="${x}" y="${y(d.v)}" width="${w}" height="${(ph * d.v) / ymax}" rx="2"/><text class="val" x="${cx}" y="${y(d.v) - 6}" text-anchor="middle">${d.v}</text>`
      : `<line class="zero" x1="${x}" x2="${x + w}" y1="${y(0)}" y2="${y(0)}"/>`;
    if (i % labelEvery === 0) cols += `<text class="dlab" x="${cx}" y="${H - B + 17}" text-anchor="middle">${d.label}</text>`;
    cols += `<title>${d.title}: ${d.v} ${plural(d.v, 'přístup', 'přístupy', 'přístupů')} ${filterDesc()}</title></g>`;
  });
  const years = [...new Set(days.map((d) => yearOf(d.from)))].join('–');
  const months = [...new Set(days.map((d) => MONTHS[new Date(d.from).getUTCMonth()]))];
  const axisText = state.gran === 'mesic' ? years : (state.gran === 'tyden' ? 'týdny od pondělí · ' : '') + `${months.join(' – ')} ${years}`;
  const axis = `<text x="${L + pw / 2}" y="${H - 4}" text-anchor="middle">${axisText}</text>`;
  let selbg = '';
  if (state.sel) {
    const a = days.findIndex(hitsSel), b = days.length - 1 - [...days].reverse().findIndex(hitsSel);
    if (a >= 0 && b >= 0 && b < days.length) selbg = `<rect class="selbg" x="${L + a * bw}" y="${T - 6}" width="${(b - a + 1) * bw}" height="${ph + 6}" rx="4"/>`;
  }
  el.innerHTML = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Sloupcový graf přístupů ${filterDesc()} podle dne; klik nebo tažení vybere období">${g}<g class="selwrap">${selbg}</g>${cols}${axis}</svg>`;
  bindChart(el.querySelector('svg')!, { L, T, ph, bw, n });

  const total = days.reduce((a, d) => a + d.v, 0);
  const selTotal = state.sel ? state.visits.filter((v) => inSel(visitDay(v)) && matches(v)).length : null;
  const what = {
    '': '',
    's ukázkou': 's načtenou ukázkou',
    's vlastními daty': 's načteným vlastním souborem',
    's ukázkou nebo vlastními daty': 's načtenou ukázkou nebo vlastním souborem',
  }[typDesc()];
  $('chart-cap').textContent =
    [`${total} ${plural(total, 'přístup', 'přístupy', 'přístupů')}`, what, toolDesc(), zdrojDesc(), state.typ.size ? '' : '(i bez načtení dat)'].filter(Boolean).join(' ') +
    (selTotal !== null ? `, z toho ${selTotal} ve vybraném období.` : '.');
  $('chart-h').textContent = `Přístupy ${filterDesc()}`.trim();
  renderSelInfo();
  document.querySelectorAll<HTMLButtonElement>('#gran button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.g === state.gran)));
}

function renderSelInfo(): void {
  const box = $('sel-info');
  if (!state.sel) {
    const [one, many] = ({ den: ['den', 'dní'], tyden: ['týden', 'týdnů'], mesic: ['měsíc', 'měsíců'] } as const)[state.gran];
    box.innerHTML = `<span>Klikněte na ${one} nebo táhněte přes více ${many} — výběr profiltruje statistiky, mapu i přístupy.</span>`;
    return;
  }
  const nDays = Math.round((state.sel.to - state.sel.from) / DAY) + 1;
  const range = nDays === 1 ? `${fmtDay(state.sel.from)} ${yearOf(state.sel.from)}` : `${fmtDay(state.sel.from)} – ${fmtDay(state.sel.to)} ${yearOf(state.sel.to)}`;
  box.innerHTML = `<strong>Vybráno: ${range}</strong> <span>(${nDays} ${plural(nDays, 'den', 'dny', 'dní')})</span> <button type="button" id="sel-clear">Zrušit výběr</button>`;
  $('sel-clear').addEventListener('click', () => setSel(null));
}

/* Klik = jeden den (druhý klik na týž den výběr zruší), tažení = rozsah dní. */
function bindChart(svg: SVGSVGElement, geo: { L: number; T: number; ph: number; bw: number; n: number }): void {
  let drag: { a: number; b: number } | null = null;
  const idxAt = (e: PointerEvent): number => {
    const r = svg.getBoundingClientRect();
    const x = ((e.clientX - r.left) * svg.viewBox.baseVal.width) / r.width;
    return Math.max(0, Math.min(geo.n - 1, Math.floor((x - geo.L) / geo.bw)));
  };
  const preview = (a: number, b: number): void => {
    const [lo, hi] = a <= b ? [a, b] : [b, a];
    svg.querySelectorAll<SVGGElement>('.col').forEach((c) => {
      const i = +c.dataset.i!;
      c.classList.toggle('in', i >= lo && i <= hi);
      c.classList.toggle('out', i < lo || i > hi);
    });
    svg.querySelector('.selwrap')!.innerHTML = `<rect class="selbg" x="${geo.L + lo * geo.bw}" y="${geo.T - 6}" width="${(hi - lo + 1) * geo.bw}" height="${geo.ph + 6}" rx="4"/>`;
  };
  svg.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    const i = idxAt(e);
    drag = { a: i, b: i };
    try {
      svg.setPointerCapture(e.pointerId);
    } catch {
      // např. syntetické události
    }
    preview(i, i);
    e.preventDefault();
  });
  svg.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const i = idxAt(e);
    if (i !== drag.b) {
      drag.b = i;
      preview(drag.a, i);
    }
  });
  const finish = (e: PointerEvent): void => {
    if (!drag) return;
    const lo = Math.min(drag.a, drag.b), hi = Math.max(drag.a, drag.b);
    drag = null;
    if (e.type === 'pointercancel') {
      renderChart();
      return;
    }
    const from = chartDays[lo].from, to = chartDays[hi].to;
    const same = state.sel && state.sel.from === from && state.sel.to === to;
    setSel(same && lo === hi ? null : { from, to });
  };
  svg.addEventListener('pointerup', finish);
  svg.addEventListener('pointercancel', finish);
}

function writeHash(): void {
  const parts: string[] = [];
  if (state.sel) parts.push(`od=${isoDay(state.sel.from)}`, `do=${isoDay(state.sel.to)}`);
  if (state.gran !== 'den') parts.push(`po=${state.gran}`);
  if (state.typ.size) parts.push(`typ=${TYPY.filter((t) => state.typ.has(t)).join(',')}`);
  if (state.tool.size) parts.push(`nastroj=${TOOLS.filter((t) => state.tool.has(t)).join(',')}`);
  if (state.zdroj.trim()) parts.push(`zdroj=${encodeURIComponent(state.zdroj.trim())}`);
  try {
    history.replaceState(null, '', parts.length ? '#' + parts.join('&') : location.pathname + location.search);
  } catch {
    // adresa je jen pohodlí
  }
}

function setSel(sel: Sel | null): void {
  state.sel = sel;
  writeHash();
  renderAll();
}

function setGran(g: string | undefined): void {
  if (!GRANS.includes(g as Gran) || g === state.gran) return;
  state.gran = g as Gran;
  writeHash();
  renderChart(); // výběr (dny) zůstává, jen se jinak seskupí graf
}

/** Zapne/vypne typ přístupu (vypnuté všechny = bez filtru). */
/** Zapne/vypne nástroj (vypnuté všechny = bez filtru). */
function toggleTool(t: string | undefined): void {
  if (!TOOLS.includes(t as Tool)) return;
  const tool = t as Tool;
  if (state.tool.has(tool)) state.tool.delete(tool);
  else state.tool.add(tool);
  writeHash();
  renderAll();
}

function toggleTyp(t: string | undefined): void {
  if (!TYPY.includes(t as Typ)) return;
  const typ = t as Typ;
  if (state.typ.has(typ)) state.typ.delete(typ);
  else state.typ.add(typ);
  writeHash();
  renderAll();
}

function readHash(): Sel | null {
  const h = location.hash;
  const g = /po=(den|tyden|mesic)/.exec(h);
  state.gran = g ? (g[1] as Gran) : 'den';
  const t = /typ=([a-z,]+)/.exec(h);
  state.typ = new Set((t ? t[1].split(',') : []).filter((x): x is Typ => TYPY.includes(x as Typ)));
  const n = /nastroj=([a-z,]+)/.exec(h);
  state.tool = new Set((n ? n[1].split(',') : []).filter((x): x is Tool => TOOLS.includes(x as Tool)));
  const z = /zdroj=([^&]*)/.exec(h);
  try {
    state.zdroj = z ? decodeURIComponent(z[1]) : '';
  } catch {
    state.zdroj = '';
  }
  const input = document.getElementById('zdroj') as HTMLInputElement | null;
  if (input && input.value !== state.zdroj) input.value = state.zdroj;
  const m = /od=(\d{4}-\d\d-\d\d)&do=(\d{4}-\d\d-\d\d)/.exec(h);
  if (!m) return null;
  const from = parseIso(m[1]), to = parseIso(m[2]);
  return Number.isFinite(from) && Number.isFinite(to) && from <= to ? { from, to } : null;
}

function renderAll(): void {
  const inPeriod = state.visits.filter((v) => inSel(visitDay(v)));
  const vis = inPeriod.filter(matches);
  const stats = renderDays(vis);
  renderStats(stats, inPeriod.length);
  renderMap(vis);
  renderChart();
  document.querySelectorAll<HTMLButtonElement>('#typ button').forEach((b) => b.setAttribute('aria-pressed', String(state.typ.has(b.dataset.t as Typ))));
  document.querySelectorAll<HTMLButtonElement>('#tool button').forEach((b) => b.setAttribute('aria-pressed', String(state.tool.has(b.dataset.n as Tool))));
}

/* ── Mapa: střed extentu projektů (SVG kraje, bez dlaždic) ──── */
const MAP = { lon0: 12.09, lon1: 18.86, lat0: 48.55, lat1: 51.06, scale: 200, pad: 10 };
const MAP_KX = Math.cos((49.8 * Math.PI) / 180) * MAP.scale; // šířka stupně délky v jednotkách SVG
const MAP_W = (MAP.lon1 - MAP.lon0) * MAP_KX;
const MAP_H = (MAP.lat1 - MAP.lat0) * MAP.scale;
const mapX = (lon: number): number => MAP.pad + (lon - MAP.lon0) * MAP_KX;
const mapY = (lat: number): number => MAP.pad + (MAP.lat1 - lat) * MAP.scale;
proj4.defs('EPSG:5514', KROVAK);

function renderMap(visits: Visit[]): void {
  const el = $('map');
  let paths = '', labels = '';
  const klabels: { x: number; y: number; text: string }[] = []; // popisky krajů až po bodech (kolize)
  KRAJE.forEach((k) => {
    const d = k.rings.map((r) => 'M' + r.map(([lon, lat]) => `${mapX(lon).toFixed(1)} ${mapY(lat).toFixed(1)}`).join('L') + 'Z').join('');
    paths += `<path class="kraj" d="${d}"><title>${esc(k.name)}</title></path>`;
    if (k.name.startsWith('Hlavní město')) return; // Praha je malá enkláva, popisek by překrýval okolí
    const ring = k.rings.reduce((m, r) => (r.length > m.length ? r : m), k.rings[0]);
    const cx = ring.reduce((a, q) => a + q[0], 0) / ring.length, cy = ring.reduce((a, q) => a + q[1], 0) / ring.length;
    klabels.push({ x: mapX(cx), y: mapY(cy), text: k.name.replace(/ kraj$/, '').replace(/^Kraj /, '') });
  });

  let withExt = 0, ownFiles = 0, dots = '';
  const pts: [number, number][] = [];
  visits.forEach((v) =>
    v.ev.forEach((e) => {
      if (e.code !== 'fl') return;
      ownFiles++;
      const x = extentOf(e);
      if (!x) return;
      const [lon, lat] = proj4('EPSG:5514', 'EPSG:4326', [(x[0] + x[2]) / 2, (x[1] + x[3]) / 2]);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;
      withExt++;
      const tip = `Klikněte pro kartu přístupu · ${v.day} ${v.tag} · ${e.clock}${e.plus ? ' (+' + e.plus + ' d)' : ''} · extent ${extSize(x)} · ${lat.toFixed(4)}, ${lon.toFixed(4)}`;
      pts.push([mapX(lon), mapY(lat)]);
      dots += `<circle class="bod" data-vid="${esc(v.id)}" cx="${mapX(lon).toFixed(1)}" cy="${mapY(lat).toFixed(1)}" r="6"><title>${esc(tip)}</title></circle>`;
    }),
  );

  klabels.forEach((l) => {
    // bod v dosahu popisku → popisek posunout nad něj
    const hit = pts.some(([px, py]) => Math.abs(px - l.x) < l.text.length * 3 + 8 && Math.abs(py - l.y) < 12);
    labels += `<text class="klabel" x="${l.x.toFixed(1)}" y="${(l.y - (hit ? 16 : 0)).toFixed(1)}" text-anchor="middle">${esc(l.text)}</text>`;
  });

  const W = MAP_W + 2 * MAP.pad, H = MAP_H + 2 * MAP.pad;
  el.innerHTML = `<svg viewBox="0 0 ${W.toFixed(0)} ${H.toFixed(0)}" role="img" aria-label="Mapa krajů České republiky se středy extentů načtených projektů">${paths}${labels}${dots}</svg>`;
  $('map-cap').textContent =
    `${withExt} ${plural(withExt, 'projekt', 'projekty', 'projektů')} s extentem z ${ownFiles} načtených vlastních souborů ` +
    '(najetím na bod se ukáže přístup a velikost extentu). Extent se loguje od vydání 2026.11.19 (jen vlastní soubory, ne ukázky), starší záznamy ho nemají. ' +
    'Poloha je přibližná (převod z S-JTSK bez transformačního klíče). Podklad: hranice krajů © geoBoundaries (CC BY 4.0).';
}

/* ── Mapička extentu v kartě: WMTS ČÚZK ZTM 1 : 5 000 (S-JTSK) ─
 * Mřížka dlaždic = cache ČÚZK: počátek (-925000, -920000), dlaždice 256 px, rozlišení 2048,26 m/px / 2^z,
 * úrovně 0–13 (TileMatrixSet default028mm). Dlaždice se stahují až po rozbalení mapičky. */
const ZTM5 = {
  url: (z: number, row: number, col: number): string =>
    `https://ags.cuzk.cz/arcgis1/rest/services/ZTM/ZTM5/MapServer/WMTS/tile/1.0.0/ZTM_ZTM5/default/default028mm/${z}/${row}/${col}`,
  ox: -925000,
  oy: -920000,
  tile: 256,
  res: Array.from({ length: 14 }, (_, z) => 2048.260096520193 / 2 ** z),
};

/** HTML jednoho pohledu mapy (W × H px) se zvýrazněnými extenty `xs`. */
function mapView(xs: Extent[], W: number, H: number, labels = false): string {
  const minx = Math.min(...xs.map((e) => e[0])), miny = Math.min(...xs.map((e) => e[1]));
  const maxx = Math.max(...xs.map((e) => e[2])), maxy = Math.max(...xs.map((e) => e[3]));
  const cx = (minx + maxx) / 2, cy = (miny + maxy) / 2;
  // nejpodrobnější úroveň, do které se extent (+ okraj) vejde; malé extenty max. úroveň 13 (0,25 m/px)
  const need = Math.max((maxx - minx) / W, (maxy - miny) / H) * 1.3;
  let z = ZTM5.res.length - 1;
  while (z > 0 && ZTM5.res[z] < need) z--;
  const R = ZTM5.res[z], T = ZTM5.tile * R;
  const x0 = cx - (W / 2) * R, y0 = cy + (H / 2) * R; // levý horní roh pohledu (S-JTSK, y roste na sever)
  const c0 = Math.floor((x0 - ZTM5.ox) / T), c1 = Math.floor((x0 + W * R - ZTM5.ox) / T);
  const r0 = Math.floor((ZTM5.oy - y0) / T), r1 = Math.floor((ZTM5.oy - (y0 - H * R)) / T);
  let tiles = '';
  for (let r = r0; r <= r1; r++) {
    for (let c = c0; c <= c1; c++) {
      const left = (ZTM5.ox + c * T - x0) / R, top = (y0 - (ZTM5.oy - r * T)) / R;
      tiles += `<img src="${ZTM5.url(z, r, c)}" alt="" style="left:${left.toFixed(1)}px;top:${top.toFixed(1)}px">`;
    }
  }
  const rects = xs
    .map((e, i) => {
      const x = (e[0] - x0) / R, y = (y0 - e[3]) / R, w = Math.max((e[2] - e[0]) / R, 6), h = Math.max((e[3] - e[1]) / R, 6);
      const lab = labels ? `<text x="${(x + w / 2).toFixed(1)}" y="${(y - 4).toFixed(1)}" text-anchor="middle">${i + 1}</text>` : '';
      return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}"><title>${extSize(e)}</title></rect>${lab}`;
    })
    .join('');
  const target = (W / 4) * R, pow = 10 ** Math.floor(Math.log10(target));
  const len = [1, 2, 5, 10].map((k) => k * pow).filter((d) => d <= target).pop() || pow;
  return `<div class="mmone" style="width:${W}px;height:${H}px"><div class="mmtiles" style="width:${W}px;height:${H}px">${tiles}</div>
    <svg class="mmext" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${rects}</svg>
    <div class="mmscale"><span style="width:${(len / R).toFixed(0)}px"></span>${len >= 1000 ? len / 1000 + ' km' : len + ' m'}</div>
    <div class="mmattr">© ČÚZK, ZTM 1 : 5 000</div></div>`;
}

function renderMiniMap(box: HTMLElement, exts: { x: Extent; t: string }[]): void {
  const W = Math.max(240, Math.round(box.clientWidth || 400));
  const xs = exts.map((e) => e.x);
  if (xs.length === 1) {
    box.innerHTML = mapView(xs, W, 260);
  } else {
    // víc souborů: daleko od sebe → přehled + detail každého souboru, blízko → jeden společný pohled
    const diag = (e: Extent): number => Math.hypot(e[2] - e[0], e[3] - e[1]);
    const union: Extent = [Math.min(...xs.map((e) => e[0])), Math.min(...xs.map((e) => e[1])), Math.max(...xs.map((e) => e[2])), Math.max(...xs.map((e) => e[3]))];
    const spread = diag(union) > 8 * Math.max(...xs.map(diag)) && diag(union) > 1500;
    box.innerHTML = !spread
      ? mapView(xs, W, 260, true)
      : `<p class="mmcap">Přehled ${xs.length} souborů</p>${mapView(xs, W, 220, true)}` +
        exts.map((e, i) => `<p class="mmcap">Soubor ${i + 1} · ${esc(e.t)} · ${extSize(e.x)}</p>${mapView([e.x], W, 220)}`).join('');
  }
  // chybějící dlaždice (mimo pokrytí) odstranit
  box.querySelectorAll('img').forEach((img) => img.addEventListener('error', () => img.remove(), { once: true }));
}

function openCard(vid: string): void {
  const card = [...document.querySelectorAll<HTMLDetailsElement>('details.card')].find((c) => c.dataset.vid === vid);
  if (!card) return;
  card.open = true;
  const mm = card.querySelector<HTMLDetailsElement>('details.mm');
  if (mm) mm.open = true;
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  card.classList.remove('flash');
  void card.offsetWidth; // restart animace
  card.classList.add('flash');
}

function bindMaps(): void {
  // rozbalení mapičky → vykreslit (toggle nebublá, proto zachytávání)
  $('days').addEventListener(
    'toggle',
    (e) => {
      const d = e.target as HTMLDetailsElement;
      if (!d.matches || !d.matches('details.mm') || !d.open) return;
      const box = d.querySelector<HTMLElement>('.mmview')!;
      if (!box.childElementCount) renderMiniMap(box, JSON.parse(d.dataset.ext!));
    },
    true,
  );
  // přehledová mapa → karta přístupu
  $('map').addEventListener('click', (e) => {
    const dot = (e.target as Element).closest?.<SVGCircleElement>('circle.bod');
    if (dot) openCard(dot.dataset.vid!);
  });
}

/* ── Propojení výpisu událostí a časové osy ─────────────────────
 * Najetí na řádek výpisu zvýrazní bod / pruh na ose a naopak; klik událost připne
 * (klik na osu navíc rozbalí výpis a odroluje na řádek), druhý klik připnutí zruší. */
function bindInteraction(): void {
  const root = $('days');
  const mark = (target: EventTarget | null, on: boolean): void => {
    const el = (target as Element | null)?.closest?.<HTMLElement>('[data-i]');
    if (!el) return;
    el.closest('.card')?.querySelectorAll(`[data-i="${el.dataset.i}"]`).forEach((n) => n.classList.toggle('hl', on));
  };
  root.addEventListener('mouseover', (e) => mark(e.target, true));
  root.addEventListener('mouseout', (e) => mark(e.target, false));
  root.addEventListener('click', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('[data-i]');
    if (!el) return;
    const card = el.closest('.card')!, i = el.dataset.i;
    const li = card.querySelector(`li[data-i="${i}"]`);
    const wasPinned = li?.classList.contains('sel');
    card.querySelectorAll('.sel').forEach((n) => n.classList.remove('sel'));
    if (wasPinned) return;
    card.querySelectorAll(`[data-i="${i}"]`).forEach((n) => n.classList.add('sel'));
    if (!el.matches('li') && li) li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
}

/* ── Veřejné API ────────────────────────────────────────────── */
let bound = false;

/** Vykreslí (nebo překreslí) přehled z dat; posluchače se navážou jen poprvé. */
export function renderApp(data: StoredData): void {
  state.data = data;
  state.visits = toVisits(data);
  if (!bound) {
    bound = true;
    state.sel = readHash();
    bindInteraction();
    bindMaps();
    window.addEventListener('hashchange', () => {
      state.sel = readHash();
      renderAll();
    });
    document.querySelectorAll<HTMLButtonElement>('#gran button').forEach((b) => b.addEventListener('click', () => setGran(b.dataset.g)));
    document.querySelectorAll<HTMLButtonElement>('#typ button').forEach((b) => b.addEventListener('click', () => toggleTyp(b.dataset.t)));
    document.querySelectorAll<HTMLButtonElement>('#tool button').forEach((b) => b.addEventListener('click', () => toggleTool(b.dataset.n)));
    let zid: ReturnType<typeof setTimeout> | undefined;
    $('zdroj').addEventListener('input', (e) => {
      clearTimeout(zid);
      const value = (e.target as HTMLInputElement).value;
      zid = setTimeout(() => {
        state.zdroj = value;
        writeHash();
        renderAll();
      }, 150);
    });
    let tid: ReturnType<typeof setTimeout> | undefined;
    window.addEventListener('resize', () => {
      clearTimeout(tid);
      tid = setTimeout(renderChart, 120);
    });
  }
  renderZdrojList();
  renderAll();
}

/** Našeptávač zdrojů: domény podle počtu přístupů (všech, bez ohledu na filtry). */
function renderZdrojList(): void {
  const counts = new Map<string, number>();
  state.visits.forEach((v) => {
    if (v.ref) counts.set(refLabel(v.ref), (counts.get(refLabel(v.ref)) ?? 0) + 1);
  });
  $('zdroj-list').innerHTML = [...counts]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([r, n]) => `<option value="${esc(r)}" label="${n} ${plural(n, 'přístup', 'přístupy', 'přístupů')}"></option>`)
    .join('');
}
