export { parseJvfDtm } from './parser.js';
export type { CommonAttributes, Geometry, GmlLineString, GmlMultiCurve, GmlPoint, GmlPolygon, JvfDtm, ObsahovaCast, ObjektovyTyp, TypZapisu, ZaznamObjektu, ZapisObjektuType, } from './types.js';
export { checkCoordinateBounds, checkCoordinatePrecision, checkDanglingEnds, checkDefBodInPlocha, checkDuplicateLines, checkDuplicatePoints, checkGeometricValidity, checkLineSelfIntersection, checkMinSegmentLength, checkOsaInObvod, checkPointProximity, checkPolygonMultiCurveConsistency, checkZeroLengthSegments, runAllChecks, runTopologyChecks, DEFBOD_PLOCHA_PAIRS, DUPLICATE_Z_TOLERANCE, MIN_DISTANCE_TOLERANCE, OSA_OBVOD_PAIRS, SNAP_TOLERANCE, SJTSK_BOUNDS, Z_BOUNDS_DEFBOD, Z_BOUNDS_ZPS, } from './topology.js';
export type { TopologyCheck, TopologyError, TopologyErrorSeverity } from './topology.js';
export { ENTITY_CATALOG } from './generated/entities.js';
export type { EntityMeta, EntityAttrsMap, GeomKind, } from './generated/entities.js';
export * from './generated/enums.js';
export type { SharedAttrsZPS, SharedAttrsDefBod, SharedAttrsTI, SharedAttrsPasemTI, SharedAttrsZPS_TI, SharedAttrsDI, SharedAttrsPasemDI, SharedAttrsZameru, } from './generated/shared-attrs.js';
//# sourceMappingURL=index.d.ts.map