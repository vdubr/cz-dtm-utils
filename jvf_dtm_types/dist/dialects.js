/** Podporované verze UDM (id `udm-<VerzeJVFUDM>`). */
export const UDM_VERSIONS = ['udm-2.1.1'];
/**
 * Podporované verze ŽXML (id `zxml-<VerzeZXML>`).
 * `1.4.2.1` platí od 1. 2. 2025 (nad JVF 1.4.3), `1.5.1.6` od 23. 11. 2026
 * (nad JVF 1.5.0.2, datový model DTMŽ 1.5.0.2 V23).
 */
export const ZXML_VERSIONS = ['zxml-1.4.2.1', 'zxml-1.5.1.6'];
export const DIALECTS = [
    {
        id: 'udm',
        label: 'UDM',
        title: 'UDM — Univerzální datový model ČKZ',
        headerElement: 'VerzeJVFUDM',
        versions: UDM_VERSIONS,
        latest: 'udm-2.1.1',
        baseJvfVersion: { 'udm-2.1.1': '1.5.0.2' },
    },
    {
        id: 'zxml',
        label: 'ŽXML',
        title: 'ŽXML — železniční XML Správy železnic (DTMŽ)',
        headerElement: 'VerzeZXML',
        versions: ZXML_VERSIONS,
        latest: 'zxml-1.5.1.6',
        baseJvfVersion: { 'zxml-1.4.2.1': '1.4.3', 'zxml-1.5.1.6': '1.5.0.2' },
    },
];
/** Definice dialektu podle id. */
export function getDialect(id) {
    const d = DIALECTS.find((x) => x.id === id);
    if (!d)
        throw new Error(`jvf-dtm-types: neznámý dialekt "${id}"`);
    return d;
}
/** Dialekt, do kterého patří id verze (`udm-2.1.1` → UDM), jinak `undefined` (čisté JVF). */
export function dialectOf(version) {
    return DIALECTS.find((d) => version.startsWith(`${d.id}-`));
}
/** Id verze dialektu ze surové hodnoty hlavičky (`'udm'`, `'2.1.1'` → `udm-2.1.1`). */
export function dialectVersionId(id, raw) {
    return `${id}-${raw.trim()}`;
}
/** Surové číslo verze dialektu (`zxml-1.5.1.6` → `1.5.1.6`). */
export function rawDialectVersion(version) {
    const d = dialectOf(version);
    return d ? version.slice(d.id.length + 1) : version;
}
/** Je id podporovaná verze některého dialektu? */
export function isDialectVersion(v) {
    return DIALECTS.some((d) => d.versions.includes(v));
}
/** Je id verze UDM (`udm-…`)? */
export function isUdmVersion(v) {
    return UDM_VERSIONS.includes(v);
}
/** Je id verze ŽXML (`zxml-…`)? */
export function isZxmlVersion(v) {
    return ZXML_VERSIONS.includes(v);
}
/** Nejnovější podporovaná verze UDM (fallback pro neznámou `VerzeJVFUDM`). */
export const LATEST_UDM_VERSION = 'udm-2.1.1';
/** Nejnovější podporovaná verze ŽXML. */
export const LATEST_ZXML_VERSION = 'zxml-1.5.1.6';
/**
 * Id verze UDM z hodnoty `<VerzeJVFUDM>` (např. `2.1.1` → `udm-2.1.1`).
 * @deprecated použij `dialectVersionId('udm', raw)`.
 */
export function udmVersionId(verzeJvfUdm) {
    return dialectVersionId('udm', verzeJvfUdm);
}
//# sourceMappingURL=dialects.js.map