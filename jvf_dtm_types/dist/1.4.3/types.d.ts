export type TypZapisu = 'kompletní zápis' | 'změnové věty';
export type ZapisObjektuType = 'i' | 'u' | 'd' | 'r';
export type ObsahovaCast = 'ZPS' | 'TI' | 'DI' | 'GAD' | 'OPL';
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
export type Geometry = {
    type: 'Point';
    data: GmlPoint;
} | {
    type: 'LineString';
    data: GmlLineString;
} | {
    type: 'Polygon';
    data: GmlPolygon;
} | {
    type: 'MultiCurve';
    data: GmlMultiCurve;
};
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
export interface ZaznamObjektu {
    zapisObjektu: ZapisObjektuType;
    commonAttributes: CommonAttributes;
    attributes: Record<string, string | number | boolean | null>;
    geometrie: Geometry[];
    oblastObjektuKI?: GmlPolygon;
}
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
export interface JvfDtm {
    verze: string;
    datumZapisu: string;
    typZapisu: TypZapisu;
    objekty: ObjektovyTyp[];
    doprovodneInformace?: DoprovodneInformace;
}
//# sourceMappingURL=types.d.ts.map