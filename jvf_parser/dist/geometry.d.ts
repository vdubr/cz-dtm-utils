import type { GmlLineString, GmlMultiCurve, GmlPoint, GmlPolygon, Geometry } from './types.js';
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
/**
 * Parse all geometries from a `GeometrieObjektu` parsed element.
 * Returns an array because one element can contain multiple geometry properties
 * (e.g. surfaceProperty AND multiCurveProperty).
 */
export declare function parseGeometrieObjektu(geomObj: Record<string, unknown> | undefined | null): Geometry[];
/**
 * Parse OblastObjektuKI which contains a surfaceProperty/Polygon.
 */
export declare function parseOblastObjektuKI(oblastObj: Record<string, unknown> | undefined | null): GmlPolygon | undefined;
//# sourceMappingURL=geometry.d.ts.map