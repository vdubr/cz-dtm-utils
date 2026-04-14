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
//# sourceMappingURL=geometry-primitives.js.map