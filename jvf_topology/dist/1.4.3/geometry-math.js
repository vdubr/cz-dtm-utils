/**
 * Sdílené geometrické pomocné funkce pro topologické kontroly.
 *
 * - Tvorba chyb (`mkError`)
 * - Konverze mezi plochými souřadnicemi a poli bodů (`toPoints`)
 * - Geometrické předikáty (`segmentsIntersect`, `pointInPolygon`, `pointOnSegment`)
 * - Měření vzdálenosti (`dist3D`)
 * - Extrakce dat ze `JvfDtm` (`collectCoordSets`, `extractPolygons`, `buildIndex`)
 */
// ---------------------------------------------------------------------------
// Error helper
// ---------------------------------------------------------------------------
export function mkError(ctx, severity, code, message) {
    const err = {
        severity,
        code,
        message,
        objektovyTyp: ctx.objektovyTyp,
        geometryIndex: ctx.geometryIndex,
    };
    if (ctx.objectId !== undefined) {
        err.objectId = ctx.objectId;
    }
    return err;
}
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
export function getLevel(zaznam) {
    const a = zaznam.attributes;
    const v = a['UrovenUmisteniObjektuZPS'] ??
        a['UrovenUmisteniObjektuTI'] ??
        a['UrovenUmisteniObjektuDI'];
    if (typeof v === 'number' && Number.isFinite(v))
        return v;
    if (typeof v === 'string' && v !== '') {
        const n = Number(v);
        if (Number.isFinite(n))
            return n;
    }
    return null;
}
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
export function isDefBodElementName(elementName) {
    const n = elementName.toLowerCase();
    return n.includes('definicnibod') || n.includes('defbod');
}
// ---------------------------------------------------------------------------
// Konverze souřadnic
// ---------------------------------------------------------------------------
/**
 * Vrátí pole 2D bodů z plochého pole koordinát s danou dimenzí.
 */
export function toPoints(coords, dim) {
    const pts = [];
    for (let i = 0; i + 1 < coords.length; i += dim) {
        const x = coords[i];
        const y = coords[i + 1];
        if (x !== undefined && y !== undefined) {
            pts.push({ x, y });
        }
    }
    return pts;
}
// ---------------------------------------------------------------------------
// Vzdálenost
// ---------------------------------------------------------------------------
/**
 * Vzdálenost 3D mezi dvěma body (x1,y1,z1) a (x2,y2,z2).
 * Pokud není Z k dispozici, použije 2D vzdálenost.
 */
export function dist3D(x1, y1, z1, x2, y2, z2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dz = (z1 !== undefined && z2 !== undefined) ? z2 - z1 : 0;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
// ---------------------------------------------------------------------------
// Geometrické předikáty
// ---------------------------------------------------------------------------
/** Tolerance pro rozpoznání "nulového" křížového součinu (kolinearita/dotyk). */
const CROSS_EPS = 1e-6;
/**
 * Zjistí, zda se dvě úsečky (ax,ay)→(bx,by) a (cx,cy)→(dx,dy) vzájemně kříží,
 * dotýkají (T-junction — vrchol jedné leží na druhé) nebo kolineárně překrývají.
 *
 * DTM spec. (kontrola 3.4) zakazuje linii jak křížení, tak překrytí — obojí
 * proto musí tato funkce detekovat.
 */
export function segmentsIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
    const cross = (ox, oy, px, py, qx, qy) => (px - ox) * (qy - oy) - (py - oy) * (qx - ox);
    const d1 = cross(cx, cy, dx, dy, ax, ay);
    const d2 = cross(cx, cy, dx, dy, bx, by);
    const d3 = cross(ax, ay, bx, by, cx, cy);
    const d4 = cross(ax, ay, bx, by, dx, dy);
    // Běžný "čistý kříž" — oba páry koncových bodů leží na opačných stranách
    // druhé úsečky.
    if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
        ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
        return true;
    }
    // Kolineární překryv a dotyk (T-junction): pokud je vrchol jedné úsečky
    // kolineární s druhou (d≈0), zjistí se, zda leží v jejím rozsahu.
    if (Math.abs(d1) <= CROSS_EPS && pointOnSegment(ax, ay, cx, cy, dx, dy))
        return true;
    if (Math.abs(d2) <= CROSS_EPS && pointOnSegment(bx, by, cx, cy, dx, dy))
        return true;
    if (Math.abs(d3) <= CROSS_EPS && pointOnSegment(cx, cy, ax, ay, bx, by))
        return true;
    if (Math.abs(d4) <= CROSS_EPS && pointOnSegment(dx, dy, ax, ay, bx, by))
        return true;
    return false;
}
/**
 * Self-intersection uzavřeného ringu (O(n²)).
 * Vstupem je otevřená posloupnost vrcholů (bez uzavíracího bodu).
 */
export function hasSelfIntersection(pts) {
    // Vstup: otevřený ring — n vrcholů, n úseček (0→1, 1→2, ..., (n-1)→0).
    // Kontolujeme každý pár (i, j) nesousedních úseček.
    const n = pts.length;
    if (n < 4)
        return false;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 2; j < n; j++) {
            // Úsečky i a j jsou sousední, pokud sdílejí vrchol.
            // Přeskočit pár (0, n-1): úsečka 0→1 a (n-1)→0 sdílí vrchol 0.
            if (i === 0 && j === n - 1)
                continue;
            const pi = pts[i];
            const pi1 = pts[(i + 1) % n];
            const pj = pts[j];
            const pj1 = pts[(j + 1) % n];
            if (pi === undefined || pi1 === undefined ||
                pj === undefined || pj1 === undefined)
                continue;
            if (segmentsIntersect(pi.x, pi.y, pi1.x, pi1.y, pj.x, pj.y, pj1.x, pj1.y)) {
                return true;
            }
        }
    }
    return false;
}
/**
 * Vrátí true, pokud bod (px, py) leží přímo na hranici ringu (posloupnost
 * uzavřených hran, poslední bod se automaticky spojuje s prvním).
 */
function pointOnRing(px, py, pts) {
    const n = pts.length;
    for (let i = 0; i < n; i++) {
        const a = pts[i];
        const b = pts[(i + 1) % n];
        if (a === undefined || b === undefined)
            continue;
        if (pointOnSegment(px, py, a.x, a.y, b.x, b.y))
            return true;
    }
    return false;
}
/**
 * Ray-casting test bez ošetření hranice: vrátí true pokud bod (px, py) leží
 * striktně uvnitř ringu (nekontroluje hraniční případ).
 */
function rayCastInRing(px, py, pts) {
    const n = pts.length;
    let inside = false;
    for (let i = 0, j = n - 1; i < n; j = i++) {
        const pi = pts[i];
        const pj = pts[j];
        if (pi === undefined || pj === undefined)
            continue;
        const xi = pi.x, yi = pi.y, xj = pj.x, yj = pj.y;
        const intersect = yi > py !== yj > py &&
            px < ((xj - xi) * (py - yi)) / (yj - yi) + xi;
        if (intersect)
            inside = !inside;
    }
    return inside;
}
/**
 * Ray-casting algoritmus: vrátí true pokud bod (px, py) leží uvnitř polygonu.
 * `exterior` je plochý seznam [x0,y0, x1,y1, ...] (2D, uzavřený nebo ne).
 *
 * Volitelné `interiors` (díry polygonu, GML `interiors`) se z výsledku
 * odečítají — bod striktně uvnitř díry se považuje za "mimo" polygon.
 * Bod na hranici (exterioru i libovolné díry) je považován za "uvnitř"
 * (vrací true) — hranice náleží polygonu.
 */
export function pointInPolygon(px, py, exterior, dim, interiors) {
    const pts = toPoints(exterior, dim);
    if (pts.length < 3)
        return false;
    if (pointOnRing(px, py, pts))
        return true;
    if (!rayCastInRing(px, py, pts))
        return false;
    if (interiors !== undefined) {
        for (const interior of interiors) {
            const holePts = toPoints(interior, dim);
            if (holePts.length < 3)
                continue;
            if (pointOnRing(px, py, holePts))
                return true;
            if (rayCastInRing(px, py, holePts))
                return false;
        }
    }
    return true;
}
/**
 * Vrátí true pokud bod (px, py) leží na úsečce (ax,ay)→(bx,by)
 * s tolerancí pro numerické chyby.
 */
export function pointOnSegment(px, py, ax, ay, bx, by) {
    // Křížový součin nula → kolineární
    const cross = (bx - ax) * (py - ay) - (by - ay) * (px - ax);
    if (Math.abs(cross) > 1e-6)
        return false;
    // Bod musí být v bounding boxu úsečky
    return (Math.min(ax, bx) - 1e-9 <= px && px <= Math.max(ax, bx) + 1e-9 &&
        Math.min(ay, by) - 1e-9 <= py && py <= Math.max(ay, by) + 1e-9);
}
// ---------------------------------------------------------------------------
// Extrakce souřadnic z geometrií
// ---------------------------------------------------------------------------
/**
 * Vrátí seznam dvojic (coords, dim) pro všechny souřadnicové pole dané geometrie.
 * U Polygonu vrací exterior + všechny interiors, u MultiCurve všechny segmenty.
 */
export function collectCoordSets(geom) {
    switch (geom.type) {
        case 'Point': {
            const d = geom.data;
            return [{ coords: d.coordinates, dim: d.srsDimension }];
        }
        case 'LineString': {
            const d = geom.data;
            return [{ coords: d.coordinates, dim: d.srsDimension }];
        }
        case 'Polygon': {
            const d = geom.data;
            const sets = [{ coords: d.exterior, dim: d.srsDimension }];
            for (const interior of d.interiors) {
                sets.push({ coords: interior, dim: d.srsDimension });
            }
            return sets;
        }
        case 'MultiCurve': {
            const d = geom.data;
            return d.curves.map(c => ({ coords: c.coordinates, dim: c.srsDimension }));
        }
        default:
            return [];
    }
}
/**
 * Extrahuje exterior + interiors (díry) všech polygonů daného objektového typu.
 * Používáno ve Vrstvě 3 (DefBod↔Plocha, Osa↔Obvod).
 */
export function extractPolygons(objTyp) {
    const result = [];
    for (const zaznam of objTyp.zaznamy) {
        for (const geom of zaznam.geometrie) {
            if (geom.type === 'Polygon') {
                result.push({
                    exterior: geom.data.exterior,
                    dim: geom.data.srsDimension,
                    interiors: geom.data.interiors,
                });
            }
        }
    }
    return result;
}
/** Plochý index: elementName → ObjektovyTyp */
export function buildIndex(dtm) {
    const idx = new Map();
    for (const objTyp of dtm.objekty) {
        idx.set(objTyp.elementName, objTyp);
    }
    return idx;
}
//# sourceMappingURL=geometry-math.js.map