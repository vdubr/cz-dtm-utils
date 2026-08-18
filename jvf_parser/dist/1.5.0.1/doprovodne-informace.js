import { parseMultiCurve, parsePoint, parsePolygon } from '../1.4.3/geometry-primitives.js';
import { pickChild, extractText, extractAttributeValue } from '../1.4.3/xml-helpers.js';
/** Prefix názvů variant doprovodných informací. */
const DOPROVODNE_PREFIX = 'DoprovodneInformace';
function resolveTyp(raw) {
    if (raw == null)
        return 'unknown';
    const upper = raw.trim().toUpperCase();
    if (upper === 'NEW')
        return 'NEW';
    if (upper === 'DEL')
        return 'DEL';
    if (upper === 'REF')
        return 'REF';
    return 'unknown';
}
/** Geometrie záznamu OKZPS: PlochaZPS (surfaceProperty) / ObvodZPS / DefBodZPS. */
function parseOKGeometrie(geomEl) {
    if (geomEl == null || typeof geomEl !== 'object')
        return {};
    const result = {};
    const plochaZPS = geomEl['PlochaZPS'];
    if (plochaZPS != null && typeof plochaZPS === 'object') {
        const wrapper = plochaZPS;
        // Polygon přes surfaceProperty i přímo (obranně, R6).
        const sp = wrapper['surfaceProperty'];
        let polyEl;
        if (sp != null && typeof sp === 'object') {
            polyEl = pickChild(sp, ['Polygon', 'gml:Polygon']);
        }
        if (!polyEl)
            polyEl = pickChild(wrapper, ['Polygon', 'gml:Polygon']);
        if (polyEl)
            result.plocha = parsePolygon(polyEl);
    }
    const obvodZPS = geomEl['ObvodZPS'];
    if (obvodZPS != null && typeof obvodZPS === 'object') {
        const mcEl = pickChild(obvodZPS, ['MultiCurve', 'gml:MultiCurve']);
        if (mcEl != null)
            result.obvod = parseMultiCurve(mcEl);
    }
    const defBodZPS = geomEl['DefBodZPS'];
    if (defBodZPS != null && typeof defBodZPS === 'object') {
        const wrapper = defBodZPS;
        const pp = wrapper['pointProperty'];
        let ptEl;
        if (pp != null && typeof pp === 'object') {
            ptEl = pickChild(pp, ['Point', 'gml:Point']);
        }
        if (!ptEl)
            ptEl = pickChild(wrapper, ['Point', 'gml:Point']);
        if (ptEl)
            result.defBod = parsePoint(ptEl);
    }
    return result;
}
function parseZaznamOKZPS(zaznamEl) {
    const typ = resolveTyp(extractText(zaznamEl['TypZaznamuOKZPS']));
    const geom = parseOKGeometrie(zaznamEl['GeometrieObjektu']);
    const attributes = {};
    const uroven = extractAttributeValue(zaznamEl['UrovenUmisteniObjektuZPS']);
    if (uroven !== null)
        attributes.UrovenUmisteniObjektuZPS = uroven;
    const result = {
        typ,
        commonAttributes: {},
        attributes,
    };
    if (geom.plocha !== undefined)
        result.plocha = geom.plocha;
    if (geom.obvod !== undefined)
        result.obvod = geom.obvod;
    if (geom.defBod !== undefined)
        result.defBod = geom.defBod;
    return result;
}
function collectOblasti(dopEl, out) {
    const oblastiEl = dopEl['OblastiKompletniZPS'];
    if (oblastiEl == null || typeof oblastiEl !== 'object')
        return;
    const raw = oblastiEl['ZaznamOKZPS'];
    const items = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
    for (const item of items) {
        if (typeof item === 'object' && item !== null) {
            out.push(parseZaznamOKZPS(item));
        }
    }
}
function extractTypDatoveSady(dopEl) {
    const udaje = dopEl['UdajeOVydeji'];
    if (udaje == null || typeof udaje !== 'object')
        return undefined;
    const raw = extractText(udaje['TypDatoveSady']);
    if (raw == null || raw === '')
        return undefined;
    const n = Number(raw);
    return Number.isFinite(n) ? n : undefined;
}
/**
 * Projde všechny sourozence `DoprovodneInformace*` v `DataJVFDTM` a sesbírá
 * oblasti kompletní ZPS + typ datové sady.
 */
export function parseDoprovodneInformace1501(dataJvfDtm) {
    const oblastiKompletniZPS = [];
    let typDatoveSady;
    for (const [key, val] of Object.entries(dataJvfDtm)) {
        if (!key.startsWith(DOPROVODNE_PREFIX))
            continue;
        if (val == null || typeof val !== 'object')
            continue;
        const list = Array.isArray(val) ? val : [val];
        for (const dop of list) {
            if (dop == null || typeof dop !== 'object')
                continue;
            const dopEl = dop;
            collectOblasti(dopEl, oblastiKompletniZPS);
            if (typDatoveSady === undefined) {
                typDatoveSady = extractTypDatoveSady(dopEl);
            }
        }
    }
    const result = {};
    if (oblastiKompletniZPS.length > 0) {
        result.doprovodneInformace = { oblastiKompletniZPS };
    }
    if (typDatoveSady !== undefined)
        result.typDatoveSady = typDatoveSady;
    return result;
}
//# sourceMappingURL=doprovodne-informace.js.map