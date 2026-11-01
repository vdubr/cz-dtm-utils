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
import { type DialectVersion } from './dialects.js';
export declare const JVF_VERSIONS: readonly ["1.4.3", "1.5.0.1", "1.5.0.2"];
export type JvfBaseVersion = (typeof JVF_VERSIONS)[number];
/**
 * Verze JVF DTM (bez dialektů). Viewer bere poslední prvek jako výchozí
 * verzi režimu JVF.
 * @deprecated použij `JVF_VERSIONS`.
 */
export declare const SUPPORTED_VERSIONS: readonly ["1.4.3", "1.5.0.1", "1.5.0.2"];
/** Id datového modelu, se kterým umí monorepo pracovat (JVF DTM nebo dialekt). */
export type JvfVersion = JvfBaseVersion | DialectVersion;
/**
 * Výchozí verze — fallback pro nedetekovatelnou strukturu (router) a výchozí
 * argument `labelForAttribute`.
 */
export declare const DEFAULT_VERSION: JvfVersion;
/** Nejnovější podporovaná verze JVF DTM. */
export declare const LATEST_JVF_VERSION: JvfBaseVersion;
export declare function isJvfBaseVersion(v: string): v is JvfBaseVersion;
/**
 * Type guard — ověří, že daný řetězec je id podporovaného datového modelu
 * (JVF DTM i dialekty).
 */
export declare function isSupportedVersion(v: string): v is JvfVersion;
/** Všechna podporovaná id (JVF i dialekty) — pro hlášky a výběry v UI. */
export declare function allSupportedVersions(): JvfVersion[];
/**
 * Verze JVF DTM, nad kterou je id postaveno (`zxml-1.4.2.1` → `1.4.3`,
 * `1.5.0.2` → `1.5.0.2`). Neznámé id → `undefined`.
 */
export declare function baseJvfVersionOf(v: string): JvfBaseVersion | undefined;
/**
 * Čitelný popisek verze pro UI: `1.5.0.2` → `JVF 1.5.0.2`,
 * `udm-2.1.1` → `UDM 2.1.1`, `zxml-1.5.1.6` → `ŽXML 1.5.1.6`.
 */
export declare function formatVersionLabel(v: string): string;
//# sourceMappingURL=versions.d.ts.map