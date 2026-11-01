/**
 * Centrální definice podporovaných verzí JVF DTM a jejich dialektů.
 *
 * `JVF_VERSIONS` jsou verze specifikace JVF DTM (ČÚZK), pro které má monorepo
 * implementaci. Verze dialektů (UDM, ŽXML) jsou v registru `dialects.ts`.
 * `JvfVersion` = id libovolného podporovaného datového modelu — po
 * parsování nese vyřešené id `JvfDtm.verze` (router parseru).
 *
 * `1.5.0.2` je produkční verze IS DMVS od 18. 11. 2026; `1.5.0.1` (opravená
 * verzí 1.5.0.2, do produkce nenasazena) se dál přijímá.
 */
import {
  DIALECTS,
  dialectOf,
  isDialectVersion,
  rawDialectVersion,
  type DialectVersion,
} from './dialects.js';

export const JVF_VERSIONS = ['1.4.3', '1.5.0.1', '1.5.0.2'] as const;
export type JvfBaseVersion = (typeof JVF_VERSIONS)[number];

/**
 * Verze JVF DTM (bez dialektů). Viewer bere poslední prvek jako výchozí
 * verzi režimu JVF.
 * @deprecated použij `JVF_VERSIONS`.
 */
export const SUPPORTED_VERSIONS = JVF_VERSIONS;

/** Id datového modelu, se kterým umí monorepo pracovat (JVF DTM nebo dialekt). */
export type JvfVersion = JvfBaseVersion | DialectVersion;

/**
 * Výchozí verze — fallback pro nedetekovatelnou strukturu (router) a výchozí
 * argument `labelForAttribute`.
 */
export const DEFAULT_VERSION: JvfVersion = '1.4.3';

/** Nejnovější podporovaná verze JVF DTM. */
export const LATEST_JVF_VERSION: JvfBaseVersion = '1.5.0.2';

export function isJvfBaseVersion(v: string): v is JvfBaseVersion {
  return (JVF_VERSIONS as readonly string[]).includes(v);
}

/**
 * Type guard — ověří, že daný řetězec je id podporovaného datového modelu
 * (JVF DTM i dialekty).
 */
export function isSupportedVersion(v: string): v is JvfVersion {
  return isJvfBaseVersion(v) || isDialectVersion(v);
}

/** Všechna podporovaná id (JVF i dialekty) — pro hlášky a výběry v UI. */
export function allSupportedVersions(): JvfVersion[] {
  return [...JVF_VERSIONS, ...DIALECTS.flatMap((d) => d.versions)];
}

/**
 * Verze JVF DTM, nad kterou je id postaveno (`zxml-1.4.2.1` → `1.4.3`,
 * `1.5.0.2` → `1.5.0.2`). Neznámé id → `undefined`.
 */
export function baseJvfVersionOf(v: string): JvfBaseVersion | undefined {
  if (isJvfBaseVersion(v)) return v;
  const d = dialectOf(v);
  return d?.baseJvfVersion[v as DialectVersion];
}

/**
 * Čitelný popisek verze pro UI: `1.5.0.2` → `JVF 1.5.0.2`,
 * `udm-2.1.1` → `UDM 2.1.1`, `zxml-1.5.1.6` → `ŽXML 1.5.1.6`.
 */
export function formatVersionLabel(v: string): string {
  const d = dialectOf(v);
  return d ? `${d.label} ${rawDialectVersion(v)}` : `JVF ${v}`;
}
