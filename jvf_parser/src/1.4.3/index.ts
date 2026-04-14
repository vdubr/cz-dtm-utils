export { parseJvfDtm } from './parser.js';
export type {
  CommonAttributes,
  Geometry,
  GmlLineString,
  GmlMultiCurve,
  GmlPoint,
  GmlPolygon,
  JvfDtm,
  ObsahovaCast,
  ObjektovyTyp,
  TypZapisu,
  ZaznamObjektu,
  ZapisObjektuType,
} from './types.js';

export { ENTITY_CATALOG } from './generated/entities.js';
export type {
  EntityMeta,
  EntityAttrsMap,
  GeomKind,
} from './generated/entities.js';

export * from './generated/enums.js';

export type {
  SharedAttrsZPS,
  SharedAttrsDefBod,
  SharedAttrsTI,
  SharedAttrsPasemTI,
  SharedAttrsZPS_TI,
  SharedAttrsDI,
  SharedAttrsPasemDI,
  SharedAttrsZameru,
} from './generated/shared-attrs.js';
