import type { GmlLineString, GmlMultiCurve, GmlPoint, GmlPolygon } from './types.js';
/**
 * Parse a whitespace-separated coordinate string into a number array.
 * Works for both `pos` (single point) and `posList` (multiple points).
 */
export declare function parseCoordinates(text: string | undefined | null): number[];
/**
 * Extract the gml:id (or plain id) attribute from a parsed element object.
 * fast-xml-parser exposes namespaced attributes as "@_gml:id" and plain as "@_id".
 */
export declare function extractGmlId(obj: Record<string, unknown>): string | undefined;
export declare function parsePoint(pointEl: Record<string, unknown>): GmlPoint;
export declare function parseLineString(lsEl: Record<string, unknown>): GmlLineString;
export declare function parsePolygon(polygonEl: Record<string, unknown>): GmlPolygon;
export declare function parseMultiCurve(mcEl: Record<string, unknown>): GmlMultiCurve;
//# sourceMappingURL=geometry-primitives.d.ts.map