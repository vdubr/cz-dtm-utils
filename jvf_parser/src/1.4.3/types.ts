export type TypZapisu = 'kompletní zápis' | 'změnové věty';
export type ZapisObjektuType = 'i' | 'u' | 'd' | 'r';
export type ObsahovaCast = 'ZPS' | 'TI' | 'DI' | 'GAD' | 'OPL';

// GML Geometry types
export interface GmlPoint {
  id: string;
  srsName: string;
  srsDimension: number;
  coordinates: number[];
}

export interface GmlLineString {
  id: string | undefined;
  srsName: string;
  srsDimension: number;
  coordinates: number[];
}

export interface GmlPolygon {
  id: string | undefined;
  srsName: string;
  srsDimension: number;
  exterior: number[];
  interiors: number[][];
}

export interface GmlMultiCurve {
  id: string | undefined;
  srsName: string;
  srsDimension: number;
  curves: GmlLineString[];
}

export type Geometry =
  | { type: 'Point'; data: GmlPoint }
  | { type: 'LineString'; data: GmlLineString }
  | { type: 'Polygon'; data: GmlPolygon }
  | { type: 'MultiCurve'; data: GmlMultiCurve };

// Common attributes shared by all objects
export interface CommonAttributes {
  id?: string;
  idZmeny?: string;
  idEditora?: string;
  popisObjektu?: string;
  datumVkladu?: string;
  vkladOsoba?: string;
  datumZmeny?: string;
  zmenaOsoba?: string;
}

// ZaznamObjektu (a single record/feature)
export interface ZaznamObjektu {
  zapisObjektu: ZapisObjektuType;
  commonAttributes: CommonAttributes;
  attributes: Record<string, string | number | boolean | null>;
  geometrie: Geometry[];
  oblastObjektuKI?: GmlPolygon;
}

// A group of records for one object type
export interface ObjektovyTyp {
  elementName: string;
  nazev: string;
  codeBase: string;
  codeSuffix: string;
  kategorieObjektu: string;
  skupinaObjektu: string;
  obsahovaCast: ObsahovaCast | string;
  zaznamy: ZaznamObjektu[];
}

// Top-level parsed document
export interface JvfDtm {
  verze: string;
  datumZapisu: string;
  typZapisu: TypZapisu;
  objekty: ObjektovyTyp[];
}
