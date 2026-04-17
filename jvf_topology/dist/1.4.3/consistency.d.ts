/**
 * Vrstva 2 — Konzistence záznamu: Polygon ↔ MultiCurve.
 *
 * Pro záznamy, které mají současně Polygon i MultiCurve, ověří shodu XY
 * souřadnic exterioru Polygonu se souřadnicemi MultiCurve (po sloučení
 * segmentů a deduplikaci sousedů).
 *
 * Kontroly:
 * - `POLYGON_MULTICURVE_POINT_COUNT_MISMATCH`
 * - `POLYGON_MULTICURVE_COORDS_MISMATCH`
 */
import type { JvfDtm } from 'jvf-dtm-types';
import type { TopologyError } from './types.js';
/**
 * Vrstva 2: Konzistence Polygon ↔ MultiCurve uvnitř záznamu.
 *
 * Kontroluje:
 * - Počet XY bodů exterioru Polygonu == počet XY bodů MultiCurve (po dedup.)
 * - Souřadnice jsou shodné (přípustný jiný počátek nebo opačné pořadí)
 */
export declare function checkPolygonMultiCurveConsistency(dtm: JvfDtm): TopologyError[];
//# sourceMappingURL=consistency.d.ts.map