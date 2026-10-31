/** Vzhled objektu nebo položky číselníku dle UDM. */
export interface UdmAppearance {
    color?: string;
    /** Tloušťka čáry v mm (papír, 1:500). */
    widthMm?: number;
    /** Čárkování v mm (papír, 1:500) — aproximace vzoru linie UDM. */
    dashMm?: number[];
    /** Kód symbolu `AAAA-B[-CCC]` (SVG v public/symboly/udm/). */
    symbol?: string;
}
/** Vzhled podle hodnoty atributu (číselníku): `values[kód] → vzhled`. */
export interface UdmAttrRule {
    attr: string;
    values: Record<string, UdmAppearance>;
}
export interface UdmObjectStyle {
    base: UdmAppearance;
    rules?: UdmAttrRule[];
}
export declare const UDM_STYLES: Record<string, UdmObjectStyle>;
//# sourceMappingURL=styles.d.ts.map