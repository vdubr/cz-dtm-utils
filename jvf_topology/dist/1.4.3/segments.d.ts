/**
 * Kontroly 3.4, 3.5 a 3.10 — Validace jednotlivých segmentů linie (IS DTM).
 *
 * - 3.4 Self-intersection liniových prvků
 * - 3.5 Nulová délka segmentu
 * - 3.10 Minimální délka segmentu (> 0, < MIN_DISTANCE_TOLERANCE)
 */
import type { JvfDtm } from 'jvf-dtm-types';
import type { TopologyError } from './types.js';
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
 * Kontrola 3.10: Délka segmentu linie > 0, ale < MIN_DISTANCE_TOLERANCE (3D).
 * Výstup: varování.
 *
 * Kód: `SEGMENT_TOO_SHORT`
 */
export declare function checkMinSegmentLength(dtm: JvfDtm): TopologyError[];
//# sourceMappingURL=segments.d.ts.map