/**
 * Parser pro `DoprovodneInformace` — metadatová sekce sourozenec `Data`
 * uvnitř `DataJVFDTM`. Aktuálně extrahuje jen `OblastiKompletniZPS`, protože
 * jen tu potřebují topologické kontroly.
 *
 * XSD: `jvf_parser/docs/1.4.3/xsd/common/doprovodne_informace.xsd`.
 */
import { parseAtributyObjektu } from './attributes.js';
import { parseMultiCurve, parsePoint, parsePolygon, } from './geometry-primitives.js';
import { pickChild } from './xml-helpers.js';
function parseGeometriePlocha(geomEl) {
    if (geomEl == null || typeof geomEl !== 'object')
        return {};
    const result = {};
    // PlochaZPS → surfaceProperty/Polygon
    const plochaZPS = geomEl['PlochaZPS'];
    if (plochaZPS != null && typeof plochaZPS === 'object') {
        const sp = plochaZPS['surfaceProperty'];
        if (sp != null && typeof sp === 'object') {
            const polyEl = pickChild(sp, ['Polygon', 'gml:Polygon']);
            if (polyEl != null)
                result.plocha = parsePolygon(polyEl);
        }
    }
    // ObvodZPS → MultiCurve
    const obvodZPS = geomEl['ObvodZPS'];
    if (obvodZPS != null && typeof obvodZPS === 'object') {
        const mcEl = pickChild(obvodZPS, ['MultiCurve', 'gml:MultiCurve']);
        if (mcEl != null)
            result.obvod = parseMultiCurve(mcEl);
    }
    // DefBodZPS → pointProperty/Point
    const defBodZPS = geomEl['DefBodZPS'];
    if (defBodZPS != null && typeof defBodZPS === 'object') {
        const pp = defBodZPS['pointProperty'];
        if (pp != null && typeof pp === 'object') {
            const ptEl = pickChild(pp, ['Point', 'gml:Point']);
            if (ptEl != null)
                result.defBod = parsePoint(ptEl);
        }
    }
    return result;
}
/**
 * Rozhodne typ NEW/DEL z `PopisObjektu` (case-insensitive).
 */
function resolveTyp(popis) {
    if (popis == null)
        return 'unknown';
    const upper = popis.trim().toUpperCase();
    if (upper === 'NEW')
        return 'NEW';
    if (upper === 'DEL')
        return 'DEL';
    return 'unknown';
}
function parseZaznamZPS(zaznamEl) {
    const { commonAttributes, attributes } = parseAtributyObjektu(zaznamEl['AtributyObjektu']);
    const geom = parseGeometriePlocha(zaznamEl['GeometrieObjektu']);
    const typ = resolveTyp(commonAttributes.popisObjektu);
    const result = {
        typ,
        commonAttributes,
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
/**
 * Parse `DoprovodneInformace` element. Returns `undefined`, když element chybí
 * nebo je prázdný (nic smysluplného neextrahováno).
 */
export function parseDoprovodneInformace(el) {
    if (el == null || typeof el !== 'object')
        return undefined;
    const oblastiKompletniZPS = [];
    const oblastiEl = el['OblastiKompletniZPS'];
    if (oblastiEl != null && typeof oblastiEl === 'object') {
        const zaznamList = oblastiEl['ZaznamZPS'];
        const items = Array.isArray(zaznamList)
            ? zaznamList
            : zaznamList != null
                ? [zaznamList]
                : [];
        for (const item of items) {
            if (typeof item === 'object' && item !== null) {
                oblastiKompletniZPS.push(parseZaznamZPS(item));
            }
        }
    }
    if (oblastiKompletniZPS.length === 0)
        return undefined;
    return { oblastiKompletniZPS };
}
//# sourceMappingURL=doprovodne-informace.js.map