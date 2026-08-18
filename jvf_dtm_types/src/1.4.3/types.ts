export type TypZapisu = 'kompletní zápis' | 'změnové věty';
export type ZapisObjektuType = 'i' | 'u' | 'd' | 'r';

/**
 * Obsahová část DTM.
 *
 * `'PSPI'` (Plánované stavební práce infrastruktury) přibylo v JVF DTM
 * 1.5.0.1 — neveřejná kategorie, jen 2D plocha, `ObsahovaCast` DI/TI
 * (viz zadání „jvf version", změna #6). Ostatní hodnoty jsou sdílené napříč
 * verzemi.
 */
export type ObsahovaCast = 'ZPS' | 'TI' | 'DI' | 'GAD' | 'OPL' | 'PSPI';

/**
 * Surový druh záznamu podle názvu elementu v JVF DTM 1.5.0.1.
 *
 * V 1.4.3 nesla operaci hodnota atributu `ZapisObjektu` (`i/u/d/r`) uvnitř
 * jednoho elementu `<ZaznamObjektu>`. V 1.5.0.1 je operace **součástí názvu
 * elementu** (`<ZaznamObjektuIns>`, `<ZaznamObjektuRefV>`, …). `recordKind`
 * ponese tento surový suffix bezztrátově (R2); normalizovaný
 * {@link ZapisObjektuType} (`i/u/d/r`) zůstává hlavním downstream klíčem.
 *
 * - `Ins`/`Upd`/`Del` — vložení / aktualizace / smazání (vstupní data).
 * - `RefV`/`RefN` — referenční stav objektu (V = veřejný, N = neveřejný).
 * - `RefVIns`/`RefVUpd`/`RefVDel`, `RefNIns`/`RefNUpd`/`RefNDel` — referenční
 *   změnová věta (veřejná / neveřejná varianta).
 * - `PeIns`/`PeUpd`/`PeDel` — přeshraniční (peer) věty, jen ZPS.
 */
export type RecordKind =
  | 'Ins'
  | 'Upd'
  | 'Del'
  | 'RefV'
  | 'RefN'
  | 'RefVIns'
  | 'RefVUpd'
  | 'RefVDel'
  | 'RefNIns'
  | 'RefNUpd'
  | 'RefNDel'
  | 'PeIns'
  | 'PeUpd'
  | 'PeDel';

/** Viditelnost záznamu odvozená z {@link RecordKind} (R2). */
export type RecordVisibility = 'public' | 'nonpublic';

/**
 * Kontext záznamu odvozený z {@link RecordKind} (R2):
 * - `input` — vstupní data (`Ins/Upd/Del`),
 * - `refState` — referenční stav (`RefV/RefN`),
 * - `refChange` — referenční změnová věta (`RefV*`/`RefN*` + operace),
 * - `peer` — přeshraniční věty (`Pe*`).
 */
export type RecordContext = 'input' | 'refState' | 'refChange' | 'peer';

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
  /**
   * Surový druh záznamu z 1.5.0.1 (název elementu, R2). Ve 1.4.3 zůstává
   * `undefined` — downstream se řídí `zapisObjektu`.
   */
  recordKind?: RecordKind;
  /** Viditelnost odvozená z `recordKind` (1.5.0.1, R2). */
  visibility?: RecordVisibility;
  /** Kontext záznamu odvozený z `recordKind` (1.5.0.1, R2). */
  context?: RecordContext;
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

// --------------------------------------------------------------------------
// DoprovodneInformace — metadata mimo hlavní `Data` sekci
// --------------------------------------------------------------------------

/**
 * Typ oblasti kompletní ZPS.
 *
 * Hodnota se v JVF přenáší přes `SpolecneAtributyVsechObjektu/PopisObjektu`
 * s hodnotou `"NEW"` nebo `"DEL"`:
 * - `NEW` — nově předávaná oblast kompletní ZPS (přidat do DB).
 * - `DEL` — oblast, která má být z kompletní ZPS odstraněna.
 *   Pokud se uvnitř takové oblasti nachází plocha definičního bodu
 *   (viz `DEFBOD_PLOCHA_PAIRS`), dojde po přijetí ke zmenšení ZPS a objekt
 *   je potřeba nahlásit jako upozornění (`DEL_AREA_CONTAINS_DEFBOD_PLOCHA`).
 */
export type OblastKompletniZPSTyp = 'NEW' | 'DEL' | 'unknown';

/**
 * Jeden záznam v `DoprovodneInformace/OblastiKompletniZPS`.
 *
 * Každý záznam popisuje jednu plošnou oblast (případně její obvod nebo
 * referenční def. bod). `PopisObjektu` rozhoduje, zda jde o NEW/DEL záznam.
 */
export interface OblastKompletniZPSZaznam {
  typ: OblastKompletniZPSTyp;
  commonAttributes: CommonAttributes;
  attributes: Record<string, string | number | boolean | null>;
  plocha?: GmlPolygon;
  obvod?: GmlMultiCurve;
  defBod?: GmlPoint;
}

export interface DoprovodneInformace {
  oblastiKompletniZPS: OblastKompletniZPSZaznam[];
}

// --------------------------------------------------------------------------
// TypDatoveSady — typ datové sady (metadata hlavičky JVF)
// --------------------------------------------------------------------------

/**
 * Typ datové sady JVF DTM (`TypDatoveSady`). V 1.5.0.1 přibyla hodnota
 * `11` = „Výdej PSPI" (Plánované stavební práce infrastruktury), která má
 * dopad na režim topologie (chová se jako kompletní výdej, ZPS meziobjektové
 * checky se PSPI netýkají — viz zadání „jvf version", změna #10).
 *
 * Typ je záměrně `number` — plná enumerace kódů se čte přímo z JVF a přesná
 * sada se odvozuje z distribučního XSD; kód knihovny se řídí jen známými
 * hodnotami (viz {@link TYP_DATOVE_SADY_VYDEJ_PSPI}).
 */
export type TypDatoveSady = number;

/** Kód datové sady „Výdej PSPI" (1.5.0.1, změna #10). */
export const TYP_DATOVE_SADY_VYDEJ_PSPI = 11 as const;

// --------------------------------------------------------------------------
// ErrorProtocol — integrovaný protokol chyb (1.5.0.1, R5)
// --------------------------------------------------------------------------

/**
 * Jedna chyba v protokolu chyb (`SeznamChyb/Chyba`). Atributy/elementy
 * chyby se uchovávají bezztrátově v `attributes`; nejčastější (`popis`,
 * `objektId`) jsou vytažené pro pohodlí UI.
 */
export interface ProtokolChyba {
  popis?: string;
  objektId?: string;
  attributes: Record<string, string | number | boolean | null>;
}

/**
 * Jedna kontrola (`Kontroly/Kontrola`) se seznamem chyb. `nazev`/`kod`
 * jsou vytažené, zbytek zůstává v `attributes`.
 */
export interface ProtokolKontrola {
  nazev?: string;
  kod?: string;
  chyby: ProtokolChyba[];
  attributes: Record<string, string | number | boolean | null>;
}

/**
 * Integrovaný protokol chyb JVF DTM 1.5.0.1 — kořen
 * `ServisJVFDTM/ProtokolChyb/{ProtokolChybDTI,ProtokolChybZPS}` (R5).
 *
 * Samostatný artefakt oddělený od {@link JvfDtm}: viewer ho zobrazí jako
 * report, nikoli mapovou vrstvu. `dti` = kontroly z `ProtokolChybDTI`,
 * `zps` = kontroly z `ProtokolChybZPS`.
 */
export interface ErrorProtocol {
  verze?: string;
  dti: ProtokolKontrola[];
  zps: ProtokolKontrola[];
}

// Top-level parsed document
export interface JvfDtm {
  verze: string;
  datumZapisu: string;
  typZapisu: TypZapisu;
  /** Typ datové sady z hlavičky JVF (1.5.0.1+). Ve 1.4.3 typicky `undefined`. */
  typDatoveSady?: TypDatoveSady;
  objekty: ObjektovyTyp[];
  doprovodneInformace?: DoprovodneInformace;
}
