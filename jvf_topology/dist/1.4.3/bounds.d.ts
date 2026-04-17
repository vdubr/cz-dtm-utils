/**
 * Kontroly 1.5 a 1.6 — Rozsah a přesnost souřadnic (IS DTM).
 *
 * - Kontrola 1.5: souřadnice musí ležet v rozsahu S-JTSK pro území ČR.
 *   Pro ZPS objekty navíc i rozsah Z (výška m n. m.).
 * - Kontrola 1.6: souřadnice nesmí mít více než 2 desetinná místa (přesnost na cm).
 *
 * Kódy chyb:
 * - `COORD_OUT_OF_BOUNDS_XY`
 * - `COORD_OUT_OF_BOUNDS_Z`
 * - `COORD_PRECISION_EXCEEDED`
 */
import type { JvfDtm } from 'jvf-dtm-types';
import type { TopologyError } from './types.js';
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
//# sourceMappingURL=bounds.d.ts.map