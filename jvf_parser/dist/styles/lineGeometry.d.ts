/**
 * Geometrie pro vzhled linií (`Appearance.lines`, `lineSymbol`) — sdílí ji
 * 2D mapa, 3D scéna i export do CAD, ať souběžné čáry a značky v linii leží
 * všude stejně. Souřadnice [x, y, (z)] v metrech; z se přenáší beze změny.
 */
type Pt = readonly number[];
/**
 * Linie posunutá kolmo o `d` metrů, kladně vlevo ve směru linie (jako SLD
 * PerpendicularOffset). Zlomy s pokosem, u ostrých úhlů omezeným.
 */
export declare function offsetPolyline(pts: readonly Pt[], d: number): number[][];
/** Bod podél linie se směrem úseku (radiány od osy X proti směru hodinových ručiček). */
export interface PointAlong {
    x: number;
    y: number;
    z: number | undefined;
    angle: number;
}
/** Body ve vzdálenostech `start`, `start + interval`, … (metry) podél linie. */
export declare function pointsAlongLine(pts: readonly Pt[], start: number, interval: number): PointAlong[];
/**
 * Úsečky spojující konce osy s konci souběžné čáry (`LineStroke.endTicks`),
 * nebo prázdné pole.
 */
export declare function endConnectors(axis: readonly Pt[], offset: readonly Pt[]): number[][][];
export {};
//# sourceMappingURL=lineGeometry.d.ts.map