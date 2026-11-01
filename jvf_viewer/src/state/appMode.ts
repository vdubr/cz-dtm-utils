/**
 * Režim aplikace — s jakým datovým modelem uživatel pracuje.
 *
 *   - `jvf` — JVF DTM (výchozí): symbologie dle Katalogu ČÚZK, ukázky JVF,
 *   - `udm` — Univerzální datový model ČKZ: symbologie UDM, ukázky UDM,
 *     Export do CAD,
 *   - `jzm` — Jednotná železniční mapa: data DTMŽ Správy železnic ve
 *     formátu ŽXML, symbologie SŽ (fotokatalog MOZeK), Export do CAD.
 *
 * Do jiného režimu se uživatel přepíná vědomě (přepínač v hlavičce, nebo
 * nabídka při načtení souboru jiného modelu); přepnutí zavře načtené projekty.
 * Režim je v URL (`?mode=udm`), takže jde sdílet odkaz; bez parametru se
 * aplikace otevře v JVF. Režim dialektu se váže na registr dialektů
 * (`DIALECTS` v jvf-dtm-types) — další režim = nová položka `APP_MODES`.
 */
import {
  LATEST_JVF_VERSION,
  dialectOf,
  getDialect,
  type DialectId,
  type JvfDtm,
  type JvfVersion,
} from 'jvf-parser';

export type AppMode = 'jvf' | 'udm' | 'jzm';

export interface AppModeDef {
  id: AppMode;
  /** Krátký popisek na přepínači. */
  label: string;
  /** Plný název (dialogy, nápověda). */
  title: string;
  /** Dialekt JVF DTM, se kterým režim pracuje (`undefined` = čisté JVF DTM). */
  dialect?: DialectId;
  /** Aktivní verze po přepnutí do režimu (legenda, číselníky). */
  defaultVersion: JvfVersion;
}

/** Režim dialektu — název, výchozí verze a detekce souboru z registru dialektů. */
function dialectMode(id: AppMode, label: string, title: string, dialect: DialectId): AppModeDef {
  return { id, label, title, dialect, defaultVersion: getDialect(dialect).latest };
}

export const APP_MODES: readonly AppModeDef[] = [
  { id: 'jvf', label: 'JVF', title: 'JVF DTM', defaultVersion: LATEST_JVF_VERSION },
  dialectMode('udm', 'UDM', 'UDM — Univerzální datový model ČKZ', 'udm'),
  dialectMode('jzm', 'JŽM', 'JŽM — Jednotná železniční mapa (ŽXML, DTMŽ Správy železnic)', 'zxml'),
];

export const DEFAULT_APP_MODE: AppMode = 'jvf';
const URL_PARAM = 'mode';

export function appModeDef(mode: AppMode): AppModeDef {
  return APP_MODES.find((m) => m.id === mode)!;
}

/** Režim, do kterého patří verze datového modelu (dialekt → jeho režim, jinak `jvf`). */
export function appModeForVersion(version: string): AppMode {
  const dialect = dialectOf(version)?.id;
  return APP_MODES.find((m) => m.dialect !== undefined && m.dialect === dialect)?.id ?? DEFAULT_APP_MODE;
}

/** Režim, do kterého soubor patří. */
export function appModeForDtm(dtm: JvfDtm): AppMode {
  return appModeForVersion(dtm.verze);
}

function isAppMode(v: string | null): v is AppMode {
  return APP_MODES.some((m) => m.id === v);
}

function readModeFromUrl(): AppMode {
  try {
    const v = new URLSearchParams(window.location.search).get(URL_PARAM);
    return isAppMode(v) ? v : DEFAULT_APP_MODE;
  } catch {
    return DEFAULT_APP_MODE;
  }
}

let mode: AppMode = typeof window === 'undefined' ? DEFAULT_APP_MODE : readModeFromUrl();

type Listener = (mode: AppMode) => void;
const listeners = new Set<Listener>();

export function getAppMode(): AppMode {
  return mode;
}

/**
 * Nastaví režim (bez dotazů — potvrzení řeší UI, viz `ui/appModeSwitch.ts`)
 * a zapíše ho do URL. Posluchači (main.ts) zavřou projekty a přestaví UI.
 */
export function setAppMode(next: AppMode): void {
  if (next === mode) return;
  mode = next;
  try {
    const url = new URL(window.location.href);
    if (next === DEFAULT_APP_MODE) url.searchParams.delete(URL_PARAM);
    else url.searchParams.set(URL_PARAM, next);
    window.history.replaceState(null, '', url);
  } catch {
    // URL je jen pohodlí (sdílení odkazu) — bez ní režim funguje dál.
  }
  for (const fn of listeners) fn(next);
}

export function onAppModeChange(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
