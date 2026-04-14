import { parsePoint, parseLineString, parsePolygon, parseMultiCurve, } from './geometry-primitives.js';
/**
 * Parse all geometries from a `GeometrieObjektu` parsed element.
 * Returns an array because one element can contain multiple geometry properties
 * (e.g. surfaceProperty AND multiCurveProperty).
 */
export function parseGeometrieObjektu(geomObj) {
    if (geomObj == null || typeof geomObj !== 'object')
        return [];
    const geometries = [];
    // pointProperty
    const pointProp = geomObj['pointProperty'];
    if (pointProp != null && typeof pointProp === 'object') {
        const ppObj = pointProp;
        const pointEl = ppObj['Point'];
        if (pointEl != null && typeof pointEl === 'object') {
            geometries.push({ type: 'Point', data: parsePoint(pointEl) });
        }
    }
    // curveProperty → LineString (plain or gml: prefixed)
    const curveProp = geomObj['curveProperty'];
    if (curveProp != null && typeof curveProp === 'object') {
        const cpObj = curveProp;
        for (const key of ['LineString', 'gml:LineString']) {
            const lsEl = cpObj[key];
            if (lsEl != null && typeof lsEl === 'object') {
                geometries.push({
                    type: 'LineString',
                    data: parseLineString(lsEl),
                });
                break;
            }
        }
    }
    // surfaceProperty → Polygon
    const surfaceProp = geomObj['surfaceProperty'];
    if (surfaceProp != null && typeof surfaceProp === 'object') {
        const spObj = surfaceProp;
        for (const key of ['Polygon', 'gml:Polygon']) {
            const polygonEl = spObj[key];
            if (polygonEl != null && typeof polygonEl === 'object') {
                geometries.push({
                    type: 'Polygon',
                    data: parsePolygon(polygonEl),
                });
                break;
            }
        }
    }
    // multiCurveProperty → MultiCurve
    const multiCurveProp = geomObj['multiCurveProperty'];
    if (multiCurveProp != null && typeof multiCurveProp === 'object') {
        const mcpObj = multiCurveProp;
        for (const key of ['MultiCurve', 'gml:MultiCurve']) {
            const mcEl = mcpObj[key];
            if (mcEl != null && typeof mcEl === 'object') {
                geometries.push({
                    type: 'MultiCurve',
                    data: parseMultiCurve(mcEl),
                });
                break;
            }
        }
    }
    return geometries;
}
/**
 * Parse OblastObjektuKI which contains a surfaceProperty/Polygon.
 */
export function parseOblastObjektuKI(oblastObj) {
    if (oblastObj == null || typeof oblastObj !== 'object')
        return undefined;
    const surfaceProp = oblastObj['surfaceProperty'];
    if (surfaceProp != null && typeof surfaceProp === 'object') {
        const spObj = surfaceProp;
        for (const key of ['Polygon', 'gml:Polygon']) {
            const polygonEl = spObj[key];
            if (polygonEl != null && typeof polygonEl === 'object') {
                return parsePolygon(polygonEl);
            }
        }
    }
    return undefined;
}
//# sourceMappingURL=geometry.js.map