/**
 * Režim aplikace — s jakým datovým modelem uživatel pracuje.
 *
 *   - `jvf` — JVF DTM (výchozí): symbologie dle Katalogu ČÚZK, ukázky JVF,
 *   - `udm` — Univerzální datový model ČKZ: symbologie UDM, ukázky UDM,
 *     Export do CAD,
 *   - `jzm` — Jednotná železniční mapa: data DTMŽ Správy železnic ve
 *     formátu ŽXML, symbologie SŽ (fotokatalog MOZeK), Export do CAD.
 *
 * Každý režim je samostatný nástroj na vlastní adrese — `/` (JVF), `/udm`,
 * `/jzm` — s vlastním názvem a barevným schématem (app-themes.css). Do jiného
 * nástroje se uživatel přepíná vědomě (spouštěč nástrojů v hlavičce, nebo
 * nabídka při načtení souboru jiného modelu); přepnutí zavře načtené
 * projekty. Starý tvar `?mode=udm` se při načtení převede na cestu. Režim
 * dialektu se váže na registr dialektů (`DIALECTS` v jvf-dtm-types) — další
 * režim = nová položka `APP_MODES`.
 */
import {
  JVF_VERSIONS,
  LATEST_JVF_VERSION,
  UDM_VERSIONS,
  ZXML_VERSIONS,
  dialectOf,
  formatVersionLabel,
  getDialect,
  type DialectId,
  type JvfDtm,
  type JvfVersion,
} from 'jvf-parser';

export type AppMode = 'jvf' | 'udm' | 'jzm';

export interface AppModeDef {
  id: AppMode;
  /** Krátký popisek (odznak nástroje, dialogy). */
  label: string;
  /** Plný název (dialogy, nápověda). */
  title: string;
  /** Název nástroje v hlavičce. */
  appName: string;
  /** Správce datového modelu (popisek ve spouštěči). */
  org: string;
  /** Cesta nástroje za `BASE_URL` (`''` = výchozí JVF na `/`). */
  path: string;
  /** Titulek stránky (záložka prohlížeče). */
  docTitle: string;
  /** Stručný popis nástroje a formátu (spouštěč nástrojů). */
  description: string;
  /** Dialekt JVF DTM, se kterým režim pracuje (`undefined` = čisté JVF DTM). */
  dialect?: DialectId;
  /** Aktivní verze po přepnutí do režimu (legenda, číselníky). */
  defaultVersion: JvfVersion;
}

type ToolInfo = Pick<AppModeDef, 'appName' | 'org' | 'path' | 'docTitle' | 'description'>;

/** Podporované verze formátu z registru (`1.4.3, 1.5.0.1`, `ŽXML 1.4.2.1, …`). */
const versionList = (versions: readonly string[]): string => versions.map(formatVersionLabel).join(', ');

/** Režim dialektu — název, výchozí verze a detekce souboru z registru dialektů. */
function dialectMode(id: AppMode, label: string, title: string, dialect: DialectId, tool: ToolInfo): AppModeDef {
  return { id, label, title, ...tool, dialect, defaultVersion: getDialect(dialect).latest };
}

export const APP_MODES: readonly AppModeDef[] = [
  {
    id: 'jvf',
    label: 'JVF',
    title: 'JVF DTM',
    appName: 'JVF Prohlížeč',
    org: 'ČÚZK',
    path: '',
    docTitle: 'JVF DTM Prohlížeč — vizualizace a validace JVF souborů Digitální technické mapy ČR',
    description:
      `Digitální technická mapa ČR — změnové věty a výdeje krajských DTM pro IS DMVS (ČÚZK). ` +
      `Formát JVF DTM ${JVF_VERSIONS.join(', ')} (XML), vzhled podle Katalogu DTM ČR.`,
    defaultVersion: LATEST_JVF_VERSION,
  },
  dialectMode('udm', 'UDM', 'UDM — Univerzální datový model ČKZ', 'udm', {
    appName: 'UDM Prohlížeč',
    org: 'ČKZ',
    path: 'udm',
    docTitle: 'UDM Prohlížeč — Univerzální datový model ČKZ · DTM Prohlížeč',
    description:
      `Univerzální datový model České komory zeměměřičů — geodetická zaměření nad JVF DTM ` +
      `rozšířená o další objekty. Formát ${versionList(UDM_VERSIONS)} (XML), vzhled podle knihovny ČKZ.`,
  }),
  dialectMode('jzm', 'JŽM', 'JŽM — Jednotná železniční mapa (ŽXML, DTMŽ Správy železnic)', 'zxml', {
    appName: 'JŽM Prohlížeč',
    org: 'SŽ',
    path: 'jzm',
    docTitle: 'JŽM Prohlížeč — Jednotná železniční mapa (ŽXML, Správa železnic) · DTM Prohlížeč',
    description:
      `Jednotná železniční mapa Správy železnic — data DTMŽ (koleje, nástupiště, zabezpečovací ` +
      `zařízení, staničení). Formát ${versionList(ZXML_VERSIONS)} (XML), znaky SŽ.`,
  }),
];

export const DEFAULT_APP_MODE: AppMode = 'jvf';
/** Starý tvar odkazu (`?mode=udm`) — při načtení se převede na cestu. */
const LEGACY_PARAM = 'mode';

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

/** Adresa nástroje (`/`, `/udm`, `/jzm` — za `BASE_URL`). */
export function appModeHref(target: AppMode): string {
  return import.meta.env.BASE_URL + appModeDef(target).path;
}

/** Režim podle cesty (první segment za `BASE_URL`), nebo `null`. */
export function appModeFromPath(pathname: string): AppMode | null {
  const base = import.meta.env.BASE_URL;
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, '');
  const segment = rest.split('/').filter(Boolean)[0] ?? '';
  return APP_MODES.find((m) => m.path !== '' && m.path === segment)?.id ?? null;
}

function readModeFromUrl(): AppMode {
  try {
    const fromPath = appModeFromPath(window.location.pathname);
    if (fromPath) return fromPath;
    const legacy = new URLSearchParams(window.location.search).get(LEGACY_PARAM);
    return isAppMode(legacy) ? legacy : DEFAULT_APP_MODE;
  } catch {
    return DEFAULT_APP_MODE;
  }
}

/** Zapíše adresu nástroje do URL (bez nového záznamu historie). */
function writeModeToUrl(target: AppMode): void {
  try {
    const url = new URL(window.location.href);
    url.pathname = appModeHref(target);
    url.searchParams.delete(LEGACY_PARAM);
    if (url.href !== window.location.href) window.history.replaceState(null, '', url);
  } catch {
    // URL je jen pohodlí (sdílení odkazu) — bez ní režim funguje dál.
  }
}

let mode: AppMode = typeof window === 'undefined' ? DEFAULT_APP_MODE : readModeFromUrl();
// Starý odkaz `?mode=udm` → `/udm`.
if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has(LEGACY_PARAM)) {
  writeModeToUrl(mode);
}

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
  writeModeToUrl(next);
  for (const fn of listeners) fn(next);
}

export function onAppModeChange(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
