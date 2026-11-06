/**
 * Geometrie pro vzhled linií (`Appearance.lines`, `lineSymbol`) — sdílí ji
 * 2D mapa, 3D scéna i export do CAD, ať souběžné čáry a značky v linii leží
 * všude stejně. Souřadnice [x, y, (z)] v metrech; z se přenáší beze změny.
 */
/** Nejdelší pokos ostrého zlomu (násobek odsazení) — dál se roh ořízne. */
const MAX_MITER = 4;
/**
 * Linie posunutá kolmo o `d` metrů, kladně vlevo ve směru linie (jako SLD
 * PerpendicularOffset). Zlomy s pokosem, u ostrých úhlů omezeným.
 */
export function offsetPolyline(pts, d) {
    const n = pts.length;
    if (n < 2 || d === 0)
        return pts.map((p) => [...p]);
    // Jednotkové normály úseků (vlevo = (-dy, dx)).
    const normals = [];
    for (let i = 0; i + 1 < n; i++) {
        const dx = pts[i + 1][0] - pts[i][0];
        const dy = pts[i + 1][1] - pts[i][1];
        const len = Math.hypot(dx, dy) || 1;
        normals.push([-dy / len, dx / len]);
    }
    return pts.map((p, i) => {
        const a = normals[Math.max(0, i - 1)];
        const b = normals[Math.min(normals.length - 1, i)];
        let mx = a[0] + b[0];
        let my = a[1] + b[1];
        const ml = Math.hypot(mx, my);
        if (ml < 1e-9) {
            [mx, my] = b;
        }
        else {
            mx /= ml;
            my /= ml;
        }
        // Délka pokosu = d / cos(polovina úhlu zlomu).
        const cos = mx * b[0] + my * b[1];
        const k = Math.min(MAX_MITER, 1 / Math.max(cos, 1e-6));
        const out = [p[0] + mx * d * k, p[1] + my * d * k];
        if (p.length > 2)
            out.push(p[2]);
        return out;
    });
}
/** Body ve vzdálenostech `start`, `start + interval`, … (metry) podél linie. */
export function pointsAlongLine(pts, start, interval) {
    const out = [];
    if (pts.length < 2 || interval <= 0)
        return out;
    let next = Math.max(0, start);
    let walked = 0;
    for (let i = 0; i + 1 < pts.length; i++) {
        const a = pts[i];
        const b = pts[i + 1];
        const dx = b[0] - a[0];
        const dy = b[1] - a[1];
        const len = Math.hypot(dx, dy);
        if (len === 0)
            continue;
        const angle = Math.atan2(dy, dx);
        while (next <= walked + len) {
            const t = (next - walked) / len;
            const z = a.length > 2 && b.length > 2 ? a[2] + (b[2] - a[2]) * t : undefined;
            out.push({ x: a[0] + dx * t, y: a[1] + dy * t, z, angle });
            next += interval;
        }
        walked += len;
    }
    return out;
}
/**
 * Úsečky spojující konce osy s konci souběžné čáry (`LineStroke.endTicks`),
 * nebo prázdné pole.
 */
export function endConnectors(axis, offset) {
    if (axis.length < 2 || offset.length !== axis.length)
        return [];
    const last = axis.length - 1;
    return [
        [[...axis[0]], [...offset[0]]],
        [[...axis[last]], [...offset[last]]],
    ];
}
//# sourceMappingURL=lineGeometry.js.map