/**
 * Parsování geometrie JVF DTM 1.5.0.1 (R6 — defenzivní).
 *
 * 1.5.0.1 obaluje GML primitivy verzními wrappery:
 *   - `Bod2D`/`Bod3D`     → `pointProperty` → `Point`
 *   - `Linie2D`/`Linie3D` → `curveProperty` → `LineString`
 *   - `Plocha2D`/`Plocha3D`:
 *       - ZPS:     `Polygon` **přímo** (bez `surfaceProperty`)
 *       - DTI/PSPI: `surfaceProperty` → `Polygon`
 *   - `Obvod3D`           → jeden či více `LineString` → `MultiCurve`
 *
 * Primitivy se reusují z 1.4.3 (`geometry-primitives.ts`) — sdílené, ne
 * kopírované. Uvnitř wrapperu se primitiv hledá přímo i přes volitelný
 * `*Property`, aby parser zvládl obě varianty ZPS vs DTI/PSPI.
 */
import type { Geometry } from './types.js';
/**
 * Parse geometrií z `GeometrieObjektu` (1.5.0.1). Vrací pole — jedna plocha
 * ZPS má `Polygon` (Plocha2D) i `MultiCurve` (Obvod3D), stejně jako 1.4.3
 * (surfaceProperty + multiCurveProperty).
 */
export declare function parseGeometrieObjektu1501(geomObj: Record<string, unknown> | undefined | null): Geometry[];
//# sourceMappingURL=geometry.d.ts.map