/**
 * Veřejné API knihovny jvf-parser (verze JVF DTM 1.4.3).
 *
 * Top-level obsahuje:
 *   - Parser a doménové typy
 *   - Katalog entit a sdílené atributy
 *
 * Topologická validace žije v samostatném balíčku `jvf-topology`
 * (viz `jvf_topology/`).
 */
export { parseJvfDtm } from './parser.js';
export type { CommonAttributes, DoprovodneInformace, Geometry, GmlLineString, GmlMultiCurve, GmlPoint, GmlPolygon, JvfDtm, ObjektovyTyp, ObsahovaCast, OblastKompletniZPSTyp, OblastKompletniZPSZaznam, TypZapisu, ZaznamObjektu, ZapisObjektuType, } from './types.js';
export { ENTITY_CATALOG } from './generated/entities.js';
export type { EntityMeta, EntityAttrsMap, GeomKind, } from './generated/entities.js';
export * from './generated/enums.js';
export type { SharedAttrsZPS, SharedAttrsDefBod, SharedAttrsTI, SharedAttrsPasemTI, SharedAttrsZPS_TI, SharedAttrsDI, SharedAttrsPasemDI, SharedAttrsZameru, } from './generated/shared-attrs.js';
//# sourceMappingURL=index.d.ts.map