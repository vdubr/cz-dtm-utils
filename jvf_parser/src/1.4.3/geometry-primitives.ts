import type { GmlLineString, GmlMultiCurve, GmlPoint, GmlPolygon } from './types.js';

/**
 * Parse a whitespace-separated coordinate string into a number array.
 * Works for both `pos` (single point) and `posList` (multiple points).
 */
export function parseCoordinates(text: string | undefined | null): number[] {
  if (text == null || text === '') return [];
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
export function extractGmlId(obj: Record<string, unknown>): string | undefined {
  const withNs = obj['@_gml:id'];
  if (typeof withNs === 'string') return withNs;
  const plain = obj['@_id'];
  if (typeof plain === 'string') return plain;
  return undefined;
}

function extractSrsName(obj: Record<string, unknown>): string {
  const v = obj['@_srsName'];
  return typeof v === 'string' ? v : '';
}

function extractSrsDimension(obj: Record<string, unknown>): number {
  const v = obj['@_srsDimension'];
  if (typeof v === 'number') return v;
  if (typeof v === 'string') return parseInt(v, 10);
  return 2;
}

/**
 * Get the text content of a `pos` or `posList` element from a GML geometry node.
 * The element may appear as `pos`, `posList`, `gml:pos`, or `gml:posList`.
 */
function getPosList(geomEl: Record<string, unknown>): string {
  for (const key of ['pos', 'posList', 'gml:pos', 'gml:posList']) {
    const val = geomEl[key];
    if (typeof val === 'string') return val;
    if (typeof val === 'number') return String(val);
  }
  return '';
}

// ---------------------------------------------------------------------------
// Point
// ---------------------------------------------------------------------------

export function parsePoint(pointEl: Record<string, unknown>): GmlPoint {
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

export function parseLineString(lsEl: Record<string, unknown>): GmlLineString {
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

function parseLinearRing(ringEl: Record<string, unknown>): number[] {
  return parseCoordinates(getPosList(ringEl));
}

export function parsePolygon(polygonEl: Record<string, unknown>): GmlPolygon {
  const exteriorRaw = polygonEl['exterior'];
  const exterior: number[] = [];

  if (exteriorRaw != null && typeof exteriorRaw === 'object') {
    const extObj = exteriorRaw as Record<string, unknown>;
    const ring = extObj['LinearRing'];
    if (ring != null && typeof ring === 'object') {
      exterior.push(...parseLinearRing(ring as Record<string, unknown>));
    }
  }

  const interiors: number[][] = [];
  const interiorRaw = polygonEl['interior'];
  if (interiorRaw != null) {
    const interiorList = Array.isArray(interiorRaw) ? interiorRaw : [interiorRaw];
    for (const interior of interiorList) {
      if (typeof interior === 'object' && interior !== null) {
        const intObj = interior as Record<string, unknown>;
        const ring = intObj['LinearRing'];
        if (ring != null && typeof ring === 'object') {
          interiors.push(parseLinearRing(ring as Record<string, unknown>));
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

export function parseMultiCurve(mcEl: Record<string, unknown>): GmlMultiCurve {
  const curves: GmlLineString[] = [];

  const memberRaw = mcEl['curveMember'];
  if (memberRaw != null) {
    const memberList = Array.isArray(memberRaw) ? memberRaw : [memberRaw];
    for (const member of memberList) {
      if (typeof member === 'object' && member !== null) {
        const memberObj = member as Record<string, unknown>;
        // LineString může být s nebo bez `gml:` prefixu (fast-xml-parser má
        // `removeNSPrefix: true`, ale obranně kontrolujeme obě varianty).
        // Break po prvním nálezu — stejné chování jako ostatní GML parsery výše.
        for (const key of ['LineString', 'gml:LineString']) {
          const ls = memberObj[key];
          if (ls != null && typeof ls === 'object') {
            curves.push(parseLineString(ls as Record<string, unknown>));
            break;
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
