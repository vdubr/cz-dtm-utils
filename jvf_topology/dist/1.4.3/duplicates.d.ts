/**
 * Kontroly 3.6, 3.8 a 3.9 — Duplicita a blízkost prvků (IS DTM).
 *
 * - 3.6 Duplicitní liniové prvky uvnitř JVF souboru
 *   (identické XYZ → chyba, identické XY s |ΔZ| < DUPLICATE_Z_TOLERANCE → varování)
 * - 3.8 Duplicita bodových prvků uvnitř JVF souboru (XY pro defbody, XYZ pro ZPS)
 * - 3.9 Blízkost bodů stejného typu (vzdálenost < MIN_DISTANCE_TOLERANCE, 3D)
 */
import type { JvfDtm } from 'jvf-dtm-types';
import type { TopologyError } from './types.js';
/**
 * Kontrola 3.6 (částečná): Duplicitní liniové objekty ve stejném objektovém typu
 * s identickými XY vrcholy uvnitř jednoho JVF souboru.
 *
 * - Pokud je rozdíl Z = 0 na všech vrcholech: `DUPLICATE_LINE_ERROR` (chyba)
 * - Pokud je rozdíl Z < 0,12 m na všech vrcholech: `DUPLICATE_LINE_WARNING` (varování)
 *
 * Kódy: `DUPLICATE_LINE_ERROR`, `DUPLICATE_LINE_WARNING`
 */
export declare function checkDuplicateLines(dtm: JvfDtm): TopologyError[];
/**
 * Kontrola 3.8 (částečná): Podrobné body ZPS a bodové objekty ZPS musí mít
 * unikátní XYZ (3D) napříč záznamy uvnitř JVF souboru.
 * Definiční body musí mít unikátní XY (2D).
 *
 * Kód chyby: `DUPLICATE_POINT`
 */
export declare function checkDuplicatePoints(dtm: JvfDtm): TopologyError[];
/**
 * Kontrola 3.9: Dva a více bodových objektů stejného typu ve vzdálenosti
 * menší než MIN_DISTANCE_TOLERANCE (3D). Výstup: varování.
 *
 * Kód: `POINTS_TOO_CLOSE`
 */
export declare function checkPointProximity(dtm: JvfDtm): TopologyError[];
//# sourceMappingURL=duplicates.d.ts.map