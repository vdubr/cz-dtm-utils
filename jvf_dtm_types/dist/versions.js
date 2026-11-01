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
import { DIALECTS, dialectOf, isDialectVersion, rawDialectVersion, } from './dialects.js';
export const JVF_VERSIONS = ['1.4.3', '1.5.0.1', '1.5.0.2'];
/**
 * Verze JVF DTM (bez dialektů). Viewer bere poslední prvek jako výchozí
 * verzi režimu JVF.
 * @deprecated použij `JVF_VERSIONS`.
 */
export const SUPPORTED_VERSIONS = JVF_VERSIONS;
/**
 * Výchozí verze — fallback pro nedetekovatelnou strukturu (router) a výchozí
 * argument `labelForAttribute`.
 */
export const DEFAULT_VERSION = '1.4.3';
/** Nejnovější podporovaná verze JVF DTM. */
export const LATEST_JVF_VERSION = '1.5.0.2';
export function isJvfBaseVersion(v) {
    return JVF_VERSIONS.includes(v);
}
/**
 * Type guard — ověří, že daný řetězec je id podporovaného datového modelu
 * (JVF DTM i dialekty).
 */
export function isSupportedVersion(v) {
    return isJvfBaseVersion(v) || isDialectVersion(v);
}
/** Všechna podporovaná id (JVF i dialekty) — pro hlášky a výběry v UI. */
export function allSupportedVersions() {
    return [...JVF_VERSIONS, ...DIALECTS.flatMap((d) => d.versions)];
}
/**
 * Verze JVF DTM, nad kterou je id postaveno (`zxml-1.4.2.1` → `1.4.3`,
 * `1.5.0.2` → `1.5.0.2`). Neznámé id → `undefined`.
 */
export function baseJvfVersionOf(v) {
    if (isJvfBaseVersion(v))
        return v;
    const d = dialectOf(v);
    return d?.baseJvfVersion[v];
}
/**
 * Čitelný popisek verze pro UI: `1.5.0.2` → `JVF 1.5.0.2`,
 * `udm-2.1.1` → `UDM 2.1.1`, `zxml-1.5.1.6` → `ŽXML 1.5.1.6`.
 */
export function formatVersionLabel(v) {
    const d = dialectOf(v);
    return d ? `${d.label} ${rawDialectVersion(v)}` : `JVF ${v}`;
}
//# sourceMappingURL=versions.js.map