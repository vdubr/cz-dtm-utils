import type { Geometry, GmlPolygon } from './types.js';
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