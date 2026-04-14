/**
 * Parse a whitespace-separated coordinate string into a number array.
 * Works for both `pos` (single point) and `posList` (multiple points).
 */
export function parseCoordinates(text) {
    if (text == null || text === '')
        return [];
    return text
        .trim()
        .split(/\s+/)
        .filter((s) => s.length > 0)
        .map(Number);
}
/**
 * Extract the gml:id (or plain id) attribute from a parsed element object.
 * fast-xml-parser exposes namespaced attributes as "@_gml:id" and plain as "@_id".
 */
export function extractGmlId(obj) {
    const withNs = obj['@_gml:id'];
    if (typeof withNs === 'string')
        return withNs;
    const plain = obj['@_id'];
    if (typeof plain === 'string')
        return plain;
    return undefined;
}
function extractSrsName(obj) {
    const v = obj['@_srsName'];
    return typeof v === 'string' ? v : '';
}
function extractSrsDimension(obj) {
    const v = obj['@_srsDimension'];
    if (typeof v === 'number')
        return v;
    if (typeof v === 'string')
        return parseInt(v, 10);
    return 2;
}
/**
 * Get the text content of a `pos` or `posList` element from a GML geometry node.
 * The element may appear as `pos`, `posList`, `gml:pos`, or `gml:posList`.
 */
function getPosList(geomEl) {
    for (const key of ['pos', 'posList', 'gml:pos', 'gml:posList']) {
        const val = geomEl[key];
        if (typeof val === 'string')
            return val;
        if (typeof val === 'number')
            return String(val);
    }
    return '';
}
// ---------------------------------------------------------------------------
// Point
// ---------------------------------------------------------------------------
export function parsePoint(pointEl) {
    return {
        id: extractGmlId(pointEl) ?? '',
        srsName: extractSrsName(pointEl),
        srsDimension: extractSrsDimension(pointEl),
        coordinates: parseCoordinates(getPosList(pointEl)),
    };
}
// ---------------------------------------------------------------------------
// LineString
// ---------------------------------------------------------------------------
export function parseLineString(lsEl) {
    return {
        id: extractGmlId(lsEl),
        srsName: extractSrsName(lsEl),
        srsDimension: extractSrsDimension(lsEl),
        coordinates: parseCoordinates(getPosList(lsEl)),
    };
}
// ---------------------------------------------------------------------------
// Polygon
// ---------------------------------------------------------------------------
function parseLinearRing(ringEl) {
    return parseCoordinates(getPosList(ringEl));
}
export function parsePolygon(polygonEl) {
    const exteriorRaw = polygonEl['exterior'];
    const exterior = [];
    if (exteriorRaw != null && typeof exteriorRaw === 'object') {
        const extObj = exteriorRaw;
        const ring = extObj['LinearRing'];
        if (ring != null && typeof ring === 'object') {
            exterior.push(...parseLinearRing(ring));
        }
    }
    const interiors = [];
    const interiorRaw = polygonEl['interior'];
    if (interiorRaw != null) {
        const interiorList = Array.isArray(interiorRaw) ? interiorRaw : [interiorRaw];
        for (const interior of interiorList) {
            if (typeof interior === 'object' && interior !== null) {
                const intObj = interior;
                const ring = intObj['LinearRing'];
                if (ring != null && typeof ring === 'object') {
                    interiors.push(parseLinearRing(ring));
                }
            }
        }
    }
    return {
        id: extractGmlId(polygonEl),
        srsName: extractSrsName(polygonEl),
        srsDimension: extractSrsDimension(polygonEl),
        exterior,
        interiors,
    };
}
// ---------------------------------------------------------------------------
// MultiCurve
// ---------------------------------------------------------------------------
export function parseMultiCurve(mcEl) {
    const curves = [];
    const memberRaw = mcEl['curveMember'];
    if (memberRaw != null) {
        const memberList = Array.isArray(memberRaw) ? memberRaw : [memberRaw];
        for (const member of memberList) {
            if (typeof member === 'object' && member !== null) {
                const memberObj = member;
                // LineString may appear with or without gml: prefix
                for (const key of ['LineString', 'gml:LineString']) {
                    const ls = memberObj[key];
                    if (ls != null && typeof ls === 'object') {
                        curves.push(parseLineString(ls));
                    }
                }
            }
        }
    }
    return {
        id: extractGmlId(mcEl),
        srsName: extractSrsName(mcEl),
        srsDimension: extractSrsDimension(mcEl),
        curves,
    };
}
// ---------------------------------------------------------------------------
// GeometrieObjektu → Geometry[]
// ---------------------------------------------------------------------------
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