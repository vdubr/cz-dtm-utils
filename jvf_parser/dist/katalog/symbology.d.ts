export interface SymbolVariant {
    /** Attribute key (e.g. 'kategorie pozemní komunikace') */
    attrKey: string | null;
    /** Attribute value (e.g. 'dálnice I. třídy') */
    attrValue: string;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    lineStyle?: string;
    lineSvg?: string;
}
export interface ObjectSymbology {
    /** 10-digit DTM object type code */
    code: string;
    /** Czech name from katalog */
    objectType: string;
    /** Obsahová část: ZPS, DI, TI, GAD, OPL */
    containsPart: string;
    /** Primary geometry type in katalog */
    geometryType: string;
    /** Polygon fill color (hex) */
    fillColor?: string;
    /** Stroke/border color (hex) */
    strokeColor?: string;
    /** Line style description */
    lineStyle?: string;
    /** Stroke width in mm */
    strokeWidth?: number;
    /** SVG filename for point symbol (from kartografický balíček) */
    pointSvg?: string;
    /** SVG filename for line symbol */
    lineSvg?: string;
    /**
     * Plošná značka (`*_p_*_lab.svg`) — kreslí se v definičním bodě plochy
     * (les, zahrada, hřbitov, …). Doplněno ručně podle kódu v názvu souboru.
     */
    areaSvg?: string;
    /** Per-attribute-value style variants (e.g. road category) */
    variants?: SymbolVariant[];
}
/**
 * Symbology lookup by DTM object type codeBase (10-digit string).
 * Matches ObjektovyTyp.codeBase from jvf-parser.
 */
export declare const SYMBOLOGY: Record<string, ObjectSymbology>;
/**
 * Default colors per ObjektovyTyp.obsahovaCast,
 * used as fallback when codeBase is not found in SYMBOLOGY.
 */
export declare const FALLBACK_COLORS: Record<string, string>;
export declare const DEFAULT_COLOR = "#90a4ae";
/**
 * Look up symbology for a given codeBase.
 * Returns undefined if not in katalog. (Objekty souborů UDM se kreslí
 * vlastní symbologií UDM — viz `udmStyle.ts`.)
 */
export declare function getSymbology(codeBase: string): ObjectSymbology | undefined;
//# sourceMappingURL=symbology.d.ts.map