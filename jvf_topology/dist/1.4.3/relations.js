/**
 * Vrstva 3 — Meziobjektová topologie.
 *
 * - 3A: Definiční bod leží v odpovídající ploše (`DEFBOD_PLOCHA_PAIRS`)
 * - 3B: Osa pozemní komunikace leží uvnitř Obvodu pozemní komunikace (`OSA_OBVOD_PAIRS`)
 * - 3C: Volné konce liniových prvků stejného objektového typu (`SNAP_TOLERANCE`)
 */
import { DEFBOD_PLOCHA_PAIRS, OSA_OBVOD_PAIRS, SNAP_TOLERANCE, } from './constants.js';
import { buildIndex, dist3D, extractPolygons, getLevel, mkError, pointInPolygon, toPoints, } from './geometry-math.js';
// ---------------------------------------------------------------------------
// Vrstva 3A — DefBod leží v odpovídající Ploše
// ---------------------------------------------------------------------------
/**
 * Vrstva 3A: Každý definiční bod musí ležet uvnitř (nebo na hranici) své
 * odpovídající plochy (2D, stejné LEVEL-agnostické párování dle elementName).
 *
 * Kódy:
 * - `DEFBOD_OUTSIDE_PLOCHA`   — bod leží mimo jakoukoliv plochu svého typu
 * - `DEFBOD_NO_PLOCHA`        — v JVF souboru není žádná plocha odpovídajícího typu
 */
export function checkDefBodInPlocha(dtm) {
    const errors = [];
    const index = buildIndex(dtm);
    for (const pair of DEFBOD_PLOCHA_PAIRS) {
        const defbodTyp = index.get(pair.defbod);
        const plochaTyp = index.get(pair.plocha);
        if (defbodTyp === undefined || defbodTyp.zaznamy.length === 0)
            continue;
        if (plochaTyp === undefined || plochaTyp.zaznamy.length === 0) {
            // Plocha chybí v souboru — ohlásit pro každý defbod
            for (const zaznam of defbodTyp.zaznamy) {
                const objectId = zaznam.commonAttributes.id;
                errors.push(mkError({ objektovyTyp: pair.defbod, ...(objectId !== undefined ? { objectId } : {}), geometryIndex: 0 }, 'warning', 'DEFBOD_NO_PLOCHA', `Pro definiční bod ${pair.defbod} není v JVF souboru žádná plocha ${pair.plocha}.`));
            }
            continue;
        }
        // Předpřipravit polygony plochy
        const polygons = extractPolygons(plochaTyp);
        for (const zaznam of defbodTyp.zaznamy) {
            const objectId = zaznam.commonAttributes.id;
            const ptGeom = zaznam.geometrie.find(g => g.type === 'Point');
            if (ptGeom?.type !== 'Point')
                continue;
            const coords = ptGeom.data.coordinates;
            const px = coords[0], py = coords[1];
            if (px === undefined || py === undefined)
                continue;
            const inside = polygons.some(({ exterior, dim }) => pointInPolygon(px, py, exterior, dim));
            if (!inside) {
                errors.push(mkError({ objektovyTyp: pair.defbod, ...(objectId !== undefined ? { objectId } : {}), geometryIndex: 0 }, 'error', 'DEFBOD_OUTSIDE_PLOCHA', `Definiční bod (${px}, ${py}) neleží uvnitř žádné plochy ${pair.plocha} v JVF souboru.`));
            }
        }
    }
    return errors;
}
// ---------------------------------------------------------------------------
// Vrstva 3B — Osa pozemní komunikace leží uvnitř Obvodu PK
// ---------------------------------------------------------------------------
/**
 * Vrstva 3B: Všechny vrcholy linie Osy musí ležet uvnitř (nebo na hranici)
 * alespoň jednoho Obvodu stejné DI skupiny (2D).
 *
 * Kódy:
 * - `OSA_OUTSIDE_OBVOD`  — bod osy leží mimo jakýkoliv obvod
 * - `OSA_NO_OBVOD`       — v JVF souboru není žádný obvod odpovídajícího typu
 */
export function checkOsaInObvod(dtm) {
    const errors = [];
    const index = buildIndex(dtm);
    for (const pair of OSA_OBVOD_PAIRS) {
        const osaTyp = index.get(pair.osa);
        const obvodTyp = index.get(pair.obvod);
        if (osaTyp === undefined || osaTyp.zaznamy.length === 0)
            continue;
        if (obvodTyp === undefined || obvodTyp.zaznamy.length === 0) {
            for (const zaznam of osaTyp.zaznamy) {
                const objectId = zaznam.commonAttributes.id;
                errors.push(mkError({ objektovyTyp: pair.osa, ...(objectId !== undefined ? { objectId } : {}), geometryIndex: 0 }, 'warning', 'OSA_NO_OBVOD', `Pro osu ${pair.osa} není v JVF souboru žádný obvod ${pair.obvod}.`));
            }
            continue;
        }
        const polygons = extractPolygons(obvodTyp);
        for (const zaznam of osaTyp.zaznamy) {
            const objectId = zaznam.commonAttributes.id;
            for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
                const geom = zaznam.geometrie[gi];
                if (geom === undefined)
                    continue;
                if (geom.type !== 'LineString' && geom.type !== 'MultiCurve')
                    continue;
                const ctx = {
                    objektovyTyp: pair.osa,
                    ...(objectId !== undefined ? { objectId } : {}),
                    geometryIndex: gi,
                };
                const coordSets = geom.type === 'LineString'
                    ? [{ coords: geom.data.coordinates, dim: geom.data.srsDimension }]
                    : geom.data.curves.map(c => ({ coords: c.coordinates, dim: c.srsDimension }));
                for (const { coords, dim } of coordSets) {
                    const outsidePt = findPointOutsidePolygons(coords, dim, polygons);
                    if (outsidePt !== undefined) {
                        errors.push(mkError(ctx, 'error', 'OSA_OUTSIDE_OBVOD', `Bod osy (${outsidePt.x}, ${outsidePt.y}) neleží uvnitř žádného obvodu ${pair.obvod}.`));
                        break;
                    }
                }
            }
        }
    }
    return errors;
}
function findPointOutsidePolygons(coords, dim, polygons) {
    for (let i = 0; i + 1 < coords.length; i += dim) {
        const x = coords[i], y = coords[i + 1];
        if (x === undefined || y === undefined)
            continue;
        const inside = polygons.some(({ exterior, dim: pd }) => pointInPolygon(x, y, exterior, pd));
        if (!inside)
            return { x, y };
    }
    return undefined;
}
// ---------------------------------------------------------------------------
// Vrstva 3C — Volné konce liniových prvků
// ---------------------------------------------------------------------------
/**
 * Vrstva 3C: Sdílené body sousedních linií stejného objektového typu.
 * Konec jedné linie musí být ve snap toleranci od začátku nebo konce jiné linie.
 * Volný konec = žádná jiná linie ze stejného objektového typu v JVF souboru
 * nezačíná ani nekončí blíže než SNAP_TOLERANCE.
 *
 * Kód: `LINE_DANGLING_END`
 *
 * Závažnost: warning — DTM spec. neřeší linie jako topologicky uzavřené sítě
 * na úrovni JVF souboru (to je DB záležitost), ale v praxi jsou volné konce
 * indikátorem chyby digitalizace.
 */
export function checkDanglingEnds(dtm) {
    const errors = [];
    for (const objTyp of dtm.objekty) {
        // Pracujeme jen s liniovými typy
        const lineZaznamy = objTyp.zaznamy.filter(z => z.geometrie.some(g => g.type === 'LineString' || g.type === 'MultiCurve'));
        if (lineZaznamy.length < 2)
            continue;
        // Extrahovat start/end každé linie a její úroveň umístění (LEVEL)
        const endpoints = lineZaznamy.map(z => {
            const start = extractLineStart(z);
            const end = extractLineEnd(z);
            return { zaznam: z, level: getLevel(z), start, end };
        }).filter((e) => e.start !== undefined && e.end !== undefined);
        if (endpoints.length < 2)
            continue;
        for (let i = 0; i < endpoints.length; i++) {
            const curr = endpoints[i];
            if (curr === undefined)
                continue;
            // Zkontrolovat start tohoto prvku — jen sousedé na stejné úrovni umístění
            const startConnected = endpoints.some((other, j) => {
                if (j === i || other === undefined)
                    return false;
                if (other.level !== curr.level)
                    return false;
                return (dist3D(curr.start.x, curr.start.y, undefined, other.start.x, other.start.y, undefined) <= SNAP_TOLERANCE ||
                    dist3D(curr.start.x, curr.start.y, undefined, other.end.x, other.end.y, undefined) <= SNAP_TOLERANCE);
            });
            // Zkontrolovat end tohoto prvku — jen sousedé na stejné úrovni umístění
            const endConnected = endpoints.some((other, j) => {
                if (j === i || other === undefined)
                    return false;
                if (other.level !== curr.level)
                    return false;
                return (dist3D(curr.end.x, curr.end.y, undefined, other.start.x, other.start.y, undefined) <= SNAP_TOLERANCE ||
                    dist3D(curr.end.x, curr.end.y, undefined, other.end.x, other.end.y, undefined) <= SNAP_TOLERANCE);
            });
            const objectId = curr.zaznam.commonAttributes.id;
            const ctx = {
                objektovyTyp: objTyp.elementName,
                ...(objectId !== undefined ? { objectId } : {}),
                geometryIndex: 0,
            };
            if (!startConnected) {
                errors.push(mkError(ctx, 'warning', 'LINE_DANGLING_END', `Volný začátek linie (${curr.start.x}, ${curr.start.y}) — žádná sousední linie ${objTyp.elementName} v toleranci ${SNAP_TOLERANCE} m.`));
            }
            if (!endConnected) {
                errors.push(mkError(ctx, 'warning', 'LINE_DANGLING_END', `Volný konec linie (${curr.end.x}, ${curr.end.y}) — žádná sousední linie ${objTyp.elementName} v toleranci ${SNAP_TOLERANCE} m.`));
            }
        }
    }
    return errors;
}
function extractLineStart(zaznam) {
    for (const geom of zaznam.geometrie) {
        if (geom.type === 'LineString') {
            const pts = toPoints(geom.data.coordinates, geom.data.srsDimension);
            return pts[0];
        }
        if (geom.type === 'MultiCurve' && geom.data.curves.length > 0) {
            const first = geom.data.curves[0];
            if (first !== undefined) {
                const pts = toPoints(first.coordinates, first.srsDimension);
                return pts[0];
            }
        }
    }
    return undefined;
}
function extractLineEnd(zaznam) {
    for (const geom of zaznam.geometrie) {
        if (geom.type === 'LineString') {
            const pts = toPoints(geom.data.coordinates, geom.data.srsDimension);
            return pts[pts.length - 1];
        }
        if (geom.type === 'MultiCurve' && geom.data.curves.length > 0) {
            const last = geom.data.curves[geom.data.curves.length - 1];
            if (last !== undefined) {
                const pts = toPoints(last.coordinates, last.srsDimension);
                return pts[pts.length - 1];
            }
        }
    }
    return undefined;
}
//# sourceMappingURL=relations.js.map