import { extractText, extractAttributeValue } from '../1.4.3/xml-helpers.js';
/** Sdílené atributové skupiny 1.5.0.1 (1.4.3 sada + PSPI). */
const KNOWN_SHARED_BLOCK_NAMES = [
    'SpolecneAtributyObjektuZPS',
    'SpolecneAtributyObjektuDefinicnichBodu',
    'SpolecneAtributyObjektuTI',
    'SpolecneAtributyObjektuPasemTI',
    'SpolecneAtributyObjektuZPS_TI',
    'SpolecneAtributyObjektuDI',
    'SpolecneAtributyObjektuPasemDI',
    'SpolecneAtributyObjektuZameru',
    'SpolecneAtributyObjektuPSPI',
];
/**
 * Je klíč sdílená atributová skupina, kterou zploštit do `attributes`?
 * Kromě známých skupin JVF i dialektové bloky `SpolecneAtributyObjektu…`
 * (např. ŽXML `SpolecneAtributyObjektuZDTSZ`) — jinak by se jejich obsah
 * ztratil jako `null`.
 */
function isSharedBlockName(key) {
    return (KNOWN_SHARED_BLOCK_NAMES.includes(key) ||
        (key.startsWith('SpolecneAtributyObjektu') && key !== 'SpolecneAtributyVsechObjektu'));
}
function parseCommonAttributes(savoEl) {
    const common = {};
    if (savoEl == null || typeof savoEl !== 'object')
        return common;
    const obj = savoEl;
    // Prázdný element (`<ID/>` u nového prvku) = hodnota chybí.
    const set = (key, raw) => {
        const v = extractText(raw)?.trim();
        if (v)
            common[key] = v;
    };
    set('id', obj['ID']);
    set('idZmeny', obj['IDZmeny']);
    set('idEditora', obj['IDEditora']);
    set('popisObjektu', obj['PopisObjektu']);
    set('datumVkladu', obj['DatumVkladu']);
    set('vkladOsoba', obj['VkladOsoba']);
    set('datumZmeny', obj['DatumZmeny']);
    set('zmenaOsoba', obj['ZmenaOsoba']);
    return common;
}
function flattenSharedBlock(block, target) {
    for (const [key, val] of Object.entries(block)) {
        if (key.startsWith('@_'))
            continue;
        const extracted = extractAttributeValue(val);
        if (extracted !== null) {
            target[key] = extracted;
        }
        else if (val != null && typeof val === 'object') {
            target[key] = null;
        }
    }
}
export function parseAtributyObjektu1501(atributyEl) {
    const commonAttributes = {};
    const attributes = {};
    if (atributyEl == null || typeof atributyEl !== 'object') {
        return { commonAttributes, attributes };
    }
    const obj = atributyEl;
    Object.assign(commonAttributes, parseCommonAttributes(obj['SpolecneAtributyVsechObjektu']));
    for (const [key, block] of Object.entries(obj)) {
        if (isSharedBlockName(key) && block != null && typeof block === 'object') {
            flattenSharedBlock(block, attributes);
        }
    }
    for (const [key, val] of Object.entries(obj)) {
        if (key.startsWith('@_'))
            continue;
        if (key === 'SpolecneAtributyVsechObjektu' || isSharedBlockName(key))
            continue;
        const extracted = extractAttributeValue(val);
        if (extracted !== null) {
            attributes[key] = extracted;
        }
        else if (val != null && typeof val === 'object') {
            attributes[key] = null;
        }
    }
    return { commonAttributes, attributes };
}
//# sourceMappingURL=attributes.js.map