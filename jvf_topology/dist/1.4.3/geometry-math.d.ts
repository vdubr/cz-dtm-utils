/**
 * Sdílené geometrické pomocné funkce pro topologické kontroly.
 *
 * - Tvorba chyb (`mkError`)
 * - Konverze mezi plochými souřadnicemi a poli bodů (`toPoints`)
 * - Geometrické předikáty (`segmentsIntersect`, `pointInPolygon`, `pointOnSegment`)
 * - Měření vzdálenosti (`dist3D`)
 * - Extrakce dat ze `JvfDtm` (`collectCoordSets`, `extractPolygons`, `buildIndex`)
 */
import type { GmlLineString, GmlMultiCurve, GmlPoint, GmlPolygon, JvfDtm, ObjektovyTyp, ZaznamObjektu } from 'jvf-dtm-types';
import type { CoordSet, ErrorCtx, ExtractedPolygon, Point2D, TopologyError, TopologyErrorSeverity } from './types.js';
export declare function mkError(ctx: ErrorCtx, severity: TopologyErrorSeverity, code: string, message: string): TopologyError;
/**
 * Vrátí úroveň umístění objektu (LEVEL: −3 až +3) ze specifických atributů záznamu.
 *
 * DTM rozlišuje tři atributy podle obsahové části:
 * - `UrovenUmisteniObjektuZPS` (ZPS)
 * - `UrovenUmisteniObjektuTI` (technická infrastruktura)
 * - `UrovenUmisteniObjektuDI` (dopravní infrastruktura)
 *
 * Záznam může mít pouze jeden z nich. Pokud atribut chybí nebo není číslem,
 * vrací `null` — kontroly takové záznamy typicky zahrnou do společné skupiny.
 *
 * Topologické kontroly dle specifikace probíhají **per LEVEL** — dva prvky
 * v různých úrovních (např. povrch vs. podzemí) nejsou v kolizi.
 */
export declare function getLevel(zaznam: ZaznamObjektu): number | null;
/**
 * Rozhodne, zda elementName v DTM označuje definiční bod.
 *
 * DTM používá konvenci `{Kořen}DefinicniBod` (např. `BudovaDefinicniBod`,
 * `LesDefinicniBod`). Pro robustnost se povoluje i zkrácená forma `DefBod`,
 * která se historicky vyskytovala v některých testech / interních dokumentech,
 * ale v reálných datech (JVF 1.4.3) se nepoužívá.
 *
 * Case-insensitive porovnání — XSD garantuje PascalCase, ale ověřujeme přes
 * lowercase pro odolnost vůči možným variacím.
 */
export declare function isDefBodElementName(elementName: string): boolean;
/**
 * Vrátí pole 2D bodů z plochého pole koordinát s danou dimenzí.
 */
export declare function toPoints(coords: number[], dim: number): Point2D[];
/**
 * Vzdálenost 3D mezi dvěma body (x1,y1,z1) a (x2,y2,z2).
 * Pokud není Z k dispozici, použije 2D vzdálenost.
 */
export declare function dist3D(x1: number, y1: number, z1: number | undefined, x2: number, y2: number, z2: number | undefined): number;
/**
 * Zjistí, zda se dvě úsečky (ax,ay)→(bx,by) a (cx,cy)→(dx,dy) vzájemně kříží,
 * dotýkají (T-junction — vrchol jedné leží na druhé) nebo kolineárně překrývají.
 *
 * DTM spec. (kontrola 3.4) zakazuje linii jak křížení, tak překrytí — obojí
 * proto musí tato funkce detekovat.
 */
export declare function segmentsIntersect(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, dx: number, dy: number): boolean;
/**
 * Self-intersection uzavřeného ringu (O(n²)).
 * Vstupem je otevřená posloupnost vrcholů (bez uzavíracího bodu).
 */
export declare function hasSelfIntersection(pts: Point2D[]): boolean;
/**
 * Ray-casting algoritmus: vrátí true pokud bod (px, py) leží uvnitř polygonu.
 * `exterior` je plochý seznam [x0,y0, x1,y1, ...] (2D, uzavřený nebo ne).
 *
 * Volitelné `interiors` (díry polygonu, GML `interiors`) se z výsledku
 * odečítají — bod striktně uvnitř díry se považuje za "mimo" polygon.
 * Bod na hranici (exterioru i libovolné díry) je považován za "uvnitř"
 * (vrací true) — hranice náleží polygonu.
 */
export declare function pointInPolygon(px: number, py: number, exterior: number[], dim: number, interiors?: number[][]): boolean;
/**
 * Vrátí true pokud bod (px, py) leží na úsečce (ax,ay)→(bx,by)
 * s tolerancí pro numerické chyby.
 */
export declare function pointOnSegment(px: number, py: number, ax: number, ay: number, bx: number, by: number): boolean;
/**
 * Vrátí seznam dvojic (coords, dim) pro všechny souřadnicové pole dané geometrie.
 * U Polygonu vrací exterior + všechny interiors, u MultiCurve všechny segmenty.
 */
export declare function collectCoordSets(geom: {
    type: string;
    data: GmlPoint | GmlLineString | GmlPolygon | GmlMultiCurve;
}): CoordSet[];
/**
 * Extrahuje exterior + interiors (díry) všech polygonů daného objektového typu.
 * Používáno ve Vrstvě 3 (DefBod↔Plocha, Osa↔Obvod).
 */
export declare function extractPolygons(objTyp: ObjektovyTyp): ExtractedPolygon[];
/** Plochý index: elementName → ObjektovyTyp */
export declare function buildIndex(dtm: JvfDtm): Map<string, ObjektovyTyp>;
//# sourceMappingURL=geometry-math.d.ts.map