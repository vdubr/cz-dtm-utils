/**
 * Režim aplikace — s jakým datovým modelem uživatel pracuje.
 *
 *   - `jvf` — JVF DTM (výchozí): symbologie dle Katalogu ČÚZK, ukázky JVF,
 *   - `udm` — Univerzální datový model ČKZ: symbologie UDM, ukázky UDM,
 *     Export do CAD.
 *
 * Do jiného režimu se uživatel přepíná vědomě (přepínač v hlavičce, nebo
 * nabídka při načtení souboru jiného modelu); přepnutí zavře načtené projekty.
 * Režim je v URL (`?mode=udm`), takže jde sdílet odkaz; bez parametru se
 * aplikace otevře v JVF. Další režim (např. JŽM) = nová položka `APP_MODES`
 * s vlastní detekcí `matches`.
 */
import { isUdmVersion, type JvfDtm } from 'jvf-parser';

export type AppMode = 'jvf' | 'udm';

export interface AppModeDef {
  id: AppMode;
  /** Krátký popisek na přepínači. */
  label: string;
  /** Plný název (dialogy, nápověda). */
  title: string;
  /** Patří načtený soubor do tohoto režimu? (`jvf` je záchytný.) */
  matches(dtm: JvfDtm): boolean;
}

export const APP_MODES: readonly AppModeDef[] = [
  { id: 'jvf', label: 'JVF', title: 'JVF DTM', matches: () => true },
  {
    id: 'udm',
    label: 'UDM',
    title: 'UDM — Univerzální datový model ČKZ',
    matches: (dtm) => isUdmVersion(dtm.verze),
  },
];

export const DEFAULT_APP_MODE: AppMode = 'jvf';
const URL_PARAM = 'mode';

export function appModeDef(mode: AppMode): AppModeDef {
  return APP_MODES.find((m) => m.id === mode)!;
}

/** Režim, do kterého soubor patří (nejspecifičtější shoda; `jvf` nakonec). */
export function appModeForDtm(dtm: JvfDtm): AppMode {
  const specific = APP_MODES.find((m) => m.id !== DEFAULT_APP_MODE && m.matches(dtm));
  return specific?.id ?? DEFAULT_APP_MODE;
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
