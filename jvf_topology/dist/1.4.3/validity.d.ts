/**
 * Vrstva 1 — Geometrická validita (bez závislostí mezi objekty).
 *
 * Kontroly:
 * - `INVALID_COORDINATE` — NaN nebo Infinity v souřadnicích
 * - `SRS_DIMENSION_MISMATCH` — počet souřadnic % srsDimension ≠ 0
 * - `LINESTRING_TOO_FEW_POINTS` — méně než 2 body
 * - `RING_TOO_FEW_POINTS` — ring s méně než 4 body
 * - `RING_NOT_CLOSED` — první ≠ poslední bod (XY)
 * - `RING_SELF_INTERSECTION` — self-intersection exterioru
 */
import type { JvfDtm } from 'jvf-dtm-types';
import type { TopologyError } from './types.js';
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
//# sourceMappingURL=validity.d.ts.map