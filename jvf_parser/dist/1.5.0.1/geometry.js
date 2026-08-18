import { parseLineString, parsePoint, parsePolygon, } from '../1.4.3/geometry-primitives.js';
import { pickChild } from '../1.4.3/xml-helpers.js';
/** Varianty názvu (bez / s `gml:` prefixem — obranně). */
function nameVariants(names) {
    return names.flatMap((n) => [n, `gml:${n}`]);
}
/**
 * Najde GML primitiv uvnitř wrapperu — buď přes `*Property` obal, nebo přímo.
 */
function findPrimitive(wrapper, propertyKey, primitiveNames) {
    const prop = wrapper[propertyKey];
    if (prop != null && typeof prop === 'object') {
        const viaProp = pickChild(prop, nameVariants(primitiveNames));
        if (viaProp)
            return viaProp;
    }
    return pickChild(wrapper, nameVariants(primitiveNames));
}
/** `Obvod3D` (jeden či více `LineString`) → `MultiCurve`. */
function parseObvod3D(obvod) {
    const raw = obvod['LineString'] ?? obvod['gml:LineString'];
    if (raw == null)
        return undefined;
    const list = Array.isArray(raw) ? raw : [raw];
    const curves = [];
    for (const ls of list) {
        if (ls != null && typeof ls === 'object') {
            curves.push(parseLineString(ls));
        }
    }
    if (curves.length === 0)
        return undefined;
    const first = curves[0];
    return {
        id: undefined,
        srsName: first?.srsName ?? '',
        srsDimension: first?.srsDimension ?? 3,
        curves,
    };
}
/**
 * Parse geometrií z `GeometrieObjektu` (1.5.0.1). Vrací pole — jedna plocha
 * ZPS má `Polygon` (Plocha2D) i `MultiCurve` (Obvod3D), stejně jako 1.4.3
 * (surfaceProperty + multiCurveProperty).
 */
export function parseGeometrieObjektu1501(geomObj) {
    if (geomObj == null || typeof geomObj !== 'object')
        return [];
    const geometries = [];
    // Bod2D / Bod3D → Point
    for (const key of ['Bod2D', 'Bod3D']) {
        const wrapper = geomObj[key];
        if (wrapper != null && typeof wrapper === 'object') {
            const el = findPrimitive(wrapper, 'pointProperty', ['Point']);
            if (el)
                geometries.push({ type: 'Point', data: parsePoint(el) });
        }
    }
    // Linie2D / Linie3D → LineString
    for (const key of ['Linie2D', 'Linie3D']) {
        const wrapper = geomObj[key];
        if (wrapper != null && typeof wrapper === 'object') {
            const el = findPrimitive(wrapper, 'curveProperty', ['LineString']);
            if (el)
                geometries.push({ type: 'LineString', data: parseLineString(el) });
        }
    }
    // Plocha2D / Plocha3D → Polygon (přímo u ZPS, přes surfaceProperty u DTI/PSPI)
    for (const key of ['Plocha2D', 'Plocha3D']) {
        const wrapper = geomObj[key];
        if (wrapper != null && typeof wrapper === 'object') {
            const el = findPrimitive(wrapper, 'surfaceProperty', ['Polygon']);
            if (el)
                geometries.push({ type: 'Polygon', data: parsePolygon(el) });
        }
    }
    // Obvod3D → MultiCurve
    const obvod = geomObj['Obvod3D'];
    if (obvod != null && typeof obvod === 'object') {
        const mc = parseObvod3D(obvod);
        if (mc)
            geometries.push({ type: 'MultiCurve', data: mc });
    }
    return geometries;
}
//# sourceMappingURL=geometry.js.map