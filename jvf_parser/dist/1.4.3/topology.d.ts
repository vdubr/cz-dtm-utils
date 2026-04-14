/**
 * Topologická validace JVF DTM objektů.
 *
 * Tři vrstvy kontrol (viz CLAUDE.md):
 *  - Vrstva 1: Geometrická validita (bez závislostí mezi objekty)
 *  - Vrstva 2: Konzistence uvnitř záznamu (Polygon ↔ MultiCurve)
 *  - Vrstva 3: Meziobjektová topologie (volné konce, definiční body, osy)
 */
import type { JvfDtm } from './types.js';
export type TopologyErrorSeverity = 'error' | 'warning';
export interface TopologyError {
    severity: TopologyErrorSeverity;
    /** Kód chyby, např. "POLYGON_NOT_CLOSED" */
    code: string;
    message: string;
    /** Název elementu objektového typu, např. "BudovaPlocha" */
    objektovyTyp: string;
    /** gml:id záznamu (pokud existuje) */
    objectId?: string;
    /** Index geometrie v poli ZaznamObjektu.geometrie (0-based), -1 pro oblastObjektuKI */
    geometryIndex?: number;
}
export type TopologyCheck = (dtm: JvfDtm) => TopologyError[];
/**
 * Vrstva 1: Geometrická validita.
 *
 * Zkontroluje každou geometrii každého záznamu:
 * - Žádné NaN / Infinity souřadnice
 * - srsDimension konzistence (coords.length % dim === 0)
 * - LineString: min. 2 body
 * - Polygon ring: min. 4 body, uzavřenost, self-intersection
 */
export declare function checkGeometricValidity(dtm: JvfDtm): TopologyError[];
/**
 * Vrstva 2: Konzistence Polygon ↔ MultiCurve uvnitř záznamu.
 *
 * Pro záznamy, které mají současně Polygon i MultiCurve, ověří shodu XY
 * souřadnic exterioru Polygonu se souřadnicemi MultiCurve (po sloučení
 * segmentů a deduplikaci sousedů).
 *
 * Kontroly:
 * - Počet XY bodů exterioru Polygonu == počet XY bodů MultiCurve (po dedup.)
 * - Souřadnice jsou shodné (přípustný jiný počátek nebo opačné pořadí)
 */
export declare function checkPolygonMultiCurveConsistency(dtm: JvfDtm): TopologyError[];
/**
 * Definované hranice 3. kvadrantu S-JTSK (EPSG:5514) pro území ČR.
 * Zdroj: DTMwiki 1.3.2 Minimální rozměry a tolerance
 */
export declare const SJTSK_BOUNDS: {
    readonly xMin: -904685;
    readonly xMax: -431627;
    readonly yMin: -1227296;
    readonly yMax: -935134;
};
/** Rozsah výšek Z pro ZPS (m n. m.) */
export declare const Z_BOUNDS_ZPS: {
    readonly min: 1;
    readonly max: 1620;
};
/** Rozsah výšek Z pro definiční body (m n. m.) */
export declare const Z_BOUNDS_DEFBOD: {
    readonly min: 0;
    readonly max: 1620;
};
/**
 * Kontrola 1.5: Souřadnice XY musí ležet v rozsahu S-JTSK pro území ČR.
 * Pro objekty ZPS (obsahovaCast === 'ZPS') se kontroluje i rozsah Z.
 *
 * Kódy chyb:
 * - `COORD_OUT_OF_BOUNDS_XY`  — X nebo Y mimo rozsah S-JTSK
 * - `COORD_OUT_OF_BOUNDS_Z`   — Z mimo povolený výškový rozsah
 */
export declare function checkCoordinateBounds(dtm: JvfDtm): TopologyError[];
/**
 * Kontrola 1.6: Souřadnice nesmí mít více než 2 desetinná místa (přesnost na cm).
 * Vyšší přesnost (mm a menší) je zakázána.
 *
 * Kód chyby: `COORD_PRECISION_EXCEEDED`
 */
export declare function checkCoordinatePrecision(dtm: JvfDtm): TopologyError[];
/**
 * Kontrola 3.4: Liniové objekty (LineString, segmenty MultiCurve) se nesmí samy
 * křížit ani překrývat. Kontrola ve 2D.
 *
 * Kód chyby: `LINE_SELF_INTERSECTION`
 *
 * Pozn.: Uzavření (start == end) je povoleno — to není křížení.
 */
export declare function checkLineSelfIntersection(dtm: JvfDtm): TopologyError[];
/**
 * Kontrola 3.5: Délka každého segmentu linie ve 3D nesmí být 0.
 *
 * Kód chyby: `SEGMENT_ZERO_LENGTH`
 */
export declare function checkZeroLengthSegments(dtm: JvfDtm): TopologyError[];
/**
 * Kontrola 3.6 (částečná): Duplicitní liniové objekty ve stejném objektovém typu
 * s identickými XY vrcholy uvnitř jednoho JVF souboru.
 *
 * - Pokud je rozdíl Z = 0 na všech vrcholech: `DUPLICATE_LINE_ERROR` (chyba)
 * - Pokud je rozdíl Z < 0,12 m na všech vrcholech: `DUPLICATE_LINE_WARNING` (varování)
 *
 * Kódy: `DUPLICATE_LINE_ERROR`, `DUPLICATE_LINE_WARNING`
 */
export declare const DUPLICATE_Z_TOLERANCE = 0.12;
export declare function checkDuplicateLines(dtm: JvfDtm): TopologyError[];
/**
 * Kontrola 3.8 (částečná): Podrobné body ZPS a bodové objekty ZPS musí mít
 * unikátní XYZ (3D) napříč záznamy uvnitř JVF souboru.
 * Definiční body musí mít unikátní XY (2D).
 *
 * Kód chyby: `DUPLICATE_POINT`
 */
export declare function checkDuplicatePoints(dtm: JvfDtm): TopologyError[];
/** Minimální tolerance vzdálenosti (m) — DTMwiki 1.3.2 */
export declare const MIN_DISTANCE_TOLERANCE = 0.05;
/**
 * Kontrola 3.9: Dva a více bodových objektů stejného typu ve vzdálenosti
 * menší než MIN_DISTANCE_TOLERANCE (3D). Výstup: varování.
 *
 * Kód: `POINTS_TOO_CLOSE`
 */
export declare function checkPointProximity(dtm: JvfDtm): TopologyError[];
/**
 * Kontrola 3.10: Délka segmentu linie > 0, ale < MIN_DISTANCE_TOLERANCE (3D).
 * Výstup: varování.
 *
 * Kód: `SEGMENT_TOO_SHORT`
 */
export declare function checkMinSegmentLength(dtm: JvfDtm): TopologyError[];
/**
 * Mapa: kořen názvu objektu → { defbod elementName, plocha elementName }
 *
 * Generuje se ze konvence názvů: `{Kořen}DefinicniBod` + `{Kořen}Plocha`.
 * Zahrnuje všechny páry, kde obě strany existují v DTM katalogu.
 */
export declare const DEFBOD_PLOCHA_PAIRS: ReadonlyArray<{
    defbod: string;
    plocha: string;
}>;
/**
 * Vrstva 3A: Každý definiční bod musí ležet uvnitř (nebo na hranici) své
 * odpovídající plochy (2D, stejné LEVEL-agnostické párování dle elementName).
 *
 * Kódy:
 * - `DEFBOD_OUTSIDE_PLOCHA`   — bod leží mimo jakoukoliv plochu svého typu
 * - `DEFBOD_NO_PLOCHA`        — v JVF souboru není žádná plocha odpovídajícího typu
 */
export declare function checkDefBodInPlocha(dtm: JvfDtm): TopologyError[];
/**
 * Páry Osa → Obvod pro DI objekty.
 * V JVF DTM 1.4.3: OsaPozemniKomunikace leží uvnitř ObvodPozemniKomunikace.
 */
export declare const OSA_OBVOD_PAIRS: ReadonlyArray<{
    osa: string;
    obvod: string;
}>;
/**
 * Vrstva 3B: Všechny vrcholy linie Osy musí ležet uvnitř (nebo na hranici)
 * alespoň jednoho Obvodu stejné DI skupiny (2D).
 *
 * Kódy:
 * - `OSA_OUTSIDE_OBVOD`  — bod osy leží mimo jakýkoliv obvod
 * - `OSA_NO_OBVOD`       — v JVF souboru není žádný obvod odpovídajícího typu
 */
export declare function checkOsaInObvod(dtm: JvfDtm): TopologyError[];
/**
 * Vrstva 3C: Sdílené body sousedních linií stejného objektového typu.
 * Konec jedné linie musí být ve snap toleranci od začátku nebo konce jiné linie.
 * Volný konec = žádná jiná linie ze stejného objektového typu v JVF souboru
 * nezačíná ani nekončí blíže než SNAP_TOLERANCE.
 *
 * Kód: `LINE_DANGLING_END`
 *
 * Závažnost: warning — DTM spec. neřeší linie jako topologicky uzavřené sítě
 * na úrovni JVF souboru (to je DB záležitost), ale v praxi jsou volné konce
 * indikátorem chyby digitalizace.
 */
export declare const SNAP_TOLERANCE = 0.05;
export declare function checkDanglingEnds(dtm: JvfDtm): TopologyError[];
/**
 * Spustí zadané kontroly nad DTM dokumentem a vrátí souhrnný seznam chyb.
 */
export declare function runTopologyChecks(dtm: JvfDtm, checks: TopologyCheck[]): TopologyError[];
/**
 * Spustí všechny implementované kontroly.
 *
 * Vrstva 1: Geometrická validita
 * Vrstva 2: Konzistence Polygon ↔ MultiCurve
 * IS DTM 1.5: Rozsah souřadnic S-JTSK
 * IS DTM 1.6: Přesnost souřadnic na cm
 * IS DTM 3.4: Self-intersection liniových prvků
 * IS DTM 3.5: Nulová délka segmentu
 * IS DTM 3.6: Duplicity liniových prvků (v rámci JVF)
 * IS DTM 3.8: Duplicita bodů (v rámci JVF)
 * IS DTM 3.9: Blízkost bodů
 * IS DTM 3.10: Minimální délka segmentu
 * Vrstva 3A: Definiční bod leží v odpovídající ploše
 * Vrstva 3B: Osa PK leží uvnitř Obvodu PK
 * Vrstva 3C: Volné konce liniových prvků
 */
export declare function runAllChecks(dtm: JvfDtm): TopologyError[];
//# sourceMappingURL=topology.d.ts.map