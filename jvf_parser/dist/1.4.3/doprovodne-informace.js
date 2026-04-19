/**
 * Parser pro `DoprovodneInformace` — metadatová sekce sourozenec `Data`
 * uvnitř `DataJVFDTM`. Aktuálně extrahuje jen `OblastiKompletniZPS`, protože
 * jen tu potřebují topologické kontroly.
 *
 * XSD: `jvf_parser/docs/1.4.3/xsd/common/doprovodne_informace.xsd`.
 */
import { parseAtributyObjektu } from './attributes.js';
import { parseMultiCurve, parsePoint, parsePolygon, } from './geometry-primitives.js';
function parseGeometriePlocha(geomEl) {
    if (geomEl == null || typeof geomEl !== 'object')
        return {};
    const result = {};
    // PlochaZPS → surfaceProperty/Polygon
    const plochaZPS = geomEl['PlochaZPS'];
    if (plochaZPS != null && typeof plochaZPS === 'object') {
        const sp = plochaZPS['surfaceProperty'];
        if (sp != null && typeof sp === 'object') {
            const spObj = sp;
            for (const key of ['Polygon', 'gml:Polygon']) {
                const polyEl = spObj[key];
                if (polyEl != null && typeof polyEl === 'object') {
                    result.plocha = parsePolygon(polyEl);
                    break;
                }
            }
        }
    }
    // ObvodZPS → MultiCurve
    const obvodZPS = geomEl['ObvodZPS'];
    if (obvodZPS != null && typeof obvodZPS === 'object') {
        const obvodObj = obvodZPS;
        for (const key of ['MultiCurve', 'gml:MultiCurve']) {
            const mcEl = obvodObj[key];
            if (mcEl != null && typeof mcEl === 'object') {
                result.obvod = parseMultiCurve(mcEl);
                break;
            }
        }
    }
    // DefBodZPS → pointProperty/Point
    const defBodZPS = geomEl['DefBodZPS'];
    if (defBodZPS != null && typeof defBodZPS === 'object') {
        const pp = defBodZPS['pointProperty'];
        if (pp != null && typeof pp === 'object') {
            const ppObj = pp;
            for (const key of ['Point', 'gml:Point']) {
                const ptEl = ppObj[key];
                if (ptEl != null && typeof ptEl === 'object') {
                    result.defBod = parsePoint(ptEl);
                    break;
                }
            }
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