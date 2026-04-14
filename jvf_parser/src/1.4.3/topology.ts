/**
 * Topologická validace JVF DTM objektů.
 *
 * Tři vrstvy kontrol (viz CLAUDE.md):
 *  - Vrstva 1: Geometrická validita (bez závislostí mezi objekty)
 *  - Vrstva 2: Konzistence uvnitř záznamu (Polygon ↔ MultiCurve)
 *  - Vrstva 3: Meziobjektová topologie (volné konce, definiční body, osy)
 */

import type {
  GmlLineString,
  GmlMultiCurve,
  GmlPoint,
  GmlPolygon,
  JvfDtm,
} from './types.js';

// ---------------------------------------------------------------------------
// Veřejné typy
// ---------------------------------------------------------------------------

export type TopologyErrorSeverity = 'error' | 'warning';

export interface TopologyError {
  severity: TopologyErrorSeverity;
  /** Kód chyby, např. "POLYGON_NOT_CLOSED" */
  code: string;
  message: string;
  /** Název elementu objektového typu, např. "BudovaPlocha" */
  objektovyTyp: string;
  /** gml:id záznamu (pokud existuje) */
  objectId?: string;
  /** Index geometrie v poli ZaznamObjektu.geometrie (0-based), -1 pro oblastObjektuKI */
  geometryIndex?: number;
}

export type TopologyCheck = (dtm: JvfDtm) => TopologyError[];

// ---------------------------------------------------------------------------
// Pomocné typy
// ---------------------------------------------------------------------------

interface ErrorCtx {
  objektovyTyp: string;
  objectId?: string;
  geometryIndex: number;
}

interface Point2D {
  x: number;
  y: number;
}

// ---------------------------------------------------------------------------
// Pomocné funkce
// ---------------------------------------------------------------------------

function mkError(
  ctx: ErrorCtx,
  severity: TopologyErrorSeverity,
  code: string,
  message: string
): TopologyError {
  const err: TopologyError = {
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
 * Vrátí pole 2D bodů z plochého pole koordinát s danou dimenzí.
 */
function toPoints(coords: number[], dim: number): Point2D[] {
  const pts: Point2D[] = [];
  for (let i = 0; i + 1 < coords.length; i += dim) {
    const x = coords[i];
    const y = coords[i + 1];
    if (x !== undefined && y !== undefined) {
      pts.push({ x, y });
    }
  }
  return pts;
}

/**
 * Vrátí plochý seznam [x0, y0, x1, y1, ...] z pole koordinát s danou dimenzí.
 */
function toXYFlat(coords: number[], dim: number): number[] {
  const out: number[] = [];
  for (let i = 0; i + 1 < coords.length; i += dim) {
    const x = coords[i];
    const y = coords[i + 1];
    if (x !== undefined && y !== undefined) {
      out.push(x, y);
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// Vrstva 1 — Geometrická validita
// ---------------------------------------------------------------------------

function checkNaNInfinity(coords: number[], ctx: ErrorCtx): TopologyError[] {
  for (let i = 0; i < coords.length; i++) {
    const v = coords[i];
    if (v === undefined || !isFinite(v) || isNaN(v)) {
      return [
        mkError(
          ctx,
          'error',
          'INVALID_COORDINATE',
          `Souřadnice na indexu ${i} je NaN nebo Infinity (hodnota: ${String(v)}).`
        ),
      ];
    }
  }
  return [];
}

function checkSrsDimension(coords: number[], dim: number, ctx: ErrorCtx): TopologyError[] {
  if (coords.length % dim !== 0) {
    return [
      mkError(
        ctx,
        'error',
        'SRS_DIMENSION_MISMATCH',
        `Počet koordinát (${coords.length}) není dělitelný srsDimension (${dim}).`
      ),
    ];
  }
  return [];
}

/**
 * Detekce self-intersection 2D polyčáry (O(n²)).
 * Předpokládá, že vstupní body jsou bez uzavíracího bodu (nebo uzavírací je ignorován).
 */
function segmentsIntersect(
  ax: number, ay: number, bx: number, by: number,
  cx: number, cy: number, dx: number, dy: number
): boolean {
  const cross = (
    ox: number, oy: number,
    px: number, py: number,
    qx: number, qy: number
  ): number => (px - ox) * (qy - oy) - (py - oy) * (qx - ox);

  const d1 = cross(cx, cy, dx, dy, ax, ay);
  const d2 = cross(cx, cy, dx, dy, bx, by);
  const d3 = cross(ax, ay, bx, by, cx, cy);
  const d4 = cross(ax, ay, bx, by, dx, dy);

  return (
    ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
    ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))
  );
}

function hasSelfIntersection(pts: Point2D[]): boolean {
  // Vstup: otevřený ring — n vrcholů, n úseček (0→1, 1→2, ..., (n-1)→0).
  // Kontolujeme každý pár (i, j) nesousedních úseček.
  const n = pts.length;
  if (n < 4) return false;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 2; j < n; j++) {
      // Úsečky i a j jsou sousední, pokud sdílejí vrchol.
      // Přeskočit pár (0, n-1): úsečka 0→1 a (n-1)→0 sdílí vrchol 0.
      if (i === 0 && j === n - 1) continue;

      const pi = pts[i];
      const pi1 = pts[(i + 1) % n];
      const pj = pts[j];
      const pj1 = pts[(j + 1) % n];
      if (
        pi === undefined || pi1 === undefined ||
        pj === undefined || pj1 === undefined
      ) continue;
      if (segmentsIntersect(pi.x, pi.y, pi1.x, pi1.y, pj.x, pj.y, pj1.x, pj1.y)) {
        return true;
      }
    }
  }
  return false;
}

function checkRing(
  coords: number[],
  dim: number,
  ringLabel: string,
  ctx: ErrorCtx
): TopologyError[] {
  const errors: TopologyError[] = [];
  const pointCount = coords.length / dim;

  if (pointCount < 4) {
    errors.push(
      mkError(
        ctx,
        'error',
        'RING_TOO_FEW_POINTS',
        `${ringLabel} má pouze ${pointCount} bod(y); minimálně jsou potřeba 4 (3 unikátní + uzavírací).`
      )
    );
    return errors;
  }

  // Uzavřenost: první bod XY == poslední bod XY
  const x0 = coords[0];
  const y0 = coords[1];
  const xN = coords[coords.length - dim];
  const yN = coords[coords.length - dim + 1];
  if (
    x0 === undefined || y0 === undefined ||
    xN === undefined || yN === undefined
  ) {
    errors.push(
      mkError(ctx, 'error', 'INVALID_COORDINATE', `${ringLabel}: chybí souřadnice prvního nebo posledního bodu.`)
    );
    return errors;
  }
  if (x0 !== xN || y0 !== yN) {
    errors.push(
      mkError(
        ctx,
        'error',
        'RING_NOT_CLOSED',
        `${ringLabel} není uzavřen: první bod (${x0}, ${y0}) ≠ poslední bod (${xN}, ${yN}).`
      )
    );
  }

  // Self-intersection exterioru
  const pts = toPoints(coords, dim);
  // Otevřený ring (bez uzavíracího bodu pro algoritmus)
  const ptsOpen =
    pts.length > 1 &&
    pts[0] !== undefined &&
    pts[pts.length - 1] !== undefined &&
    (pts[0] as Point2D).x === (pts[pts.length - 1] as Point2D).x &&
    (pts[0] as Point2D).y === (pts[pts.length - 1] as Point2D).y
      ? pts.slice(0, -1)
      : pts;

  if (hasSelfIntersection(ptsOpen)) {
    errors.push(
      mkError(
        ctx,
        'error',
        'RING_SELF_INTERSECTION',
        `${ringLabel} obsahuje self-intersection (úsečky se kříží).`
      )
    );
  }

  return errors;
}

function checkPoint(geom: GmlPoint, ctx: ErrorCtx): TopologyError[] {
  const errors: TopologyError[] = [];
  errors.push(...checkNaNInfinity(geom.coordinates, ctx));
  errors.push(...checkSrsDimension(geom.coordinates, geom.srsDimension, ctx));
  return errors;
}

function checkLineString(geom: GmlLineString, ctx: ErrorCtx): TopologyError[] {
  const errors: TopologyError[] = [];
  errors.push(...checkNaNInfinity(geom.coordinates, ctx));
  errors.push(...checkSrsDimension(geom.coordinates, geom.srsDimension, ctx));

  const pointCount = geom.coordinates.length / geom.srsDimension;
  if (pointCount < 2) {
    errors.push(
      mkError(
        ctx,
        'error',
        'LINESTRING_TOO_FEW_POINTS',
        `LineString má pouze ${pointCount} bod(y); minimálně jsou potřeba 2.`
      )
    );
  }
  return errors;
}

function checkPolygon(geom: GmlPolygon, ctx: ErrorCtx): TopologyError[] {
  const errors: TopologyError[] = [];
  const dim = geom.srsDimension;

  errors.push(...checkNaNInfinity(geom.exterior, ctx));
  errors.push(...checkSrsDimension(geom.exterior, dim, ctx));
  errors.push(...checkRing(geom.exterior, dim, 'Polygon exterior', ctx));

  for (let i = 0; i < geom.interiors.length; i++) {
    const interior = geom.interiors[i];
    if (interior === undefined) continue;
    errors.push(...checkNaNInfinity(interior, ctx));
    errors.push(...checkSrsDimension(interior, dim, ctx));
    errors.push(...checkRing(interior, dim, `Polygon interior[${i}]`, ctx));
  }

  return errors;
}

function checkMultiCurve(geom: GmlMultiCurve, ctx: ErrorCtx): TopologyError[] {
  const errors: TopologyError[] = [];
  for (const curve of geom.curves) {
    errors.push(...checkLineString(curve, ctx));
  }
  return errors;
}

/**
 * Vrstva 1: Geometrická validita.
 *
 * Zkontroluje každou geometrii každého záznamu:
 * - Žádné NaN / Infinity souřadnice
 * - srsDimension konzistence (coords.length % dim === 0)
 * - LineString: min. 2 body
 * - Polygon ring: min. 4 body, uzavřenost, self-intersection
 */
export function checkGeometricValidity(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;
      const ctxBase: ErrorCtx = {
        objektovyTyp: objTyp.elementName,
        ...(objectId !== undefined ? { objectId } : {}),
        geometryIndex: 0,
      };

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;

        const ctx: ErrorCtx = { ...ctxBase, geometryIndex: gi };

        switch (geom.type) {
          case 'Point':
            errors.push(...checkPoint(geom.data, ctx));
            break;
          case 'LineString':
            errors.push(...checkLineString(geom.data, ctx));
            break;
          case 'Polygon':
            errors.push(...checkPolygon(geom.data, ctx));
            break;
          case 'MultiCurve':
            errors.push(...checkMultiCurve(geom.data, ctx));
            break;
        }
      }

      // oblastObjektuKI (pokud existuje)
      if (zaznam.oblastObjektuKI !== undefined) {
        const ctx: ErrorCtx = { ...ctxBase, geometryIndex: -1 };
        errors.push(...checkPolygon(zaznam.oblastObjektuKI, ctx));
      }
    }
  }

  return errors;
}

// ---------------------------------------------------------------------------
// Vrstva 2 — Konzistence záznamu: Polygon ↔ MultiCurve
// ---------------------------------------------------------------------------

/**
 * Vrstva 2: Konzistence Polygon ↔ MultiCurve uvnitř záznamu.
 *
 * Pro záznamy, které mají současně Polygon i MultiCurve, ověří shodu XY
 * souřadnic exterioru Polygonu se souřadnicemi MultiCurve (po sloučení
 * segmentů a deduplikaci sousedů).
 *
 * Kontroly:
 * - Počet XY bodů exterioru Polygonu == počet XY bodů MultiCurve (po dedup.)
 * - Souřadnice jsou shodné (přípustný jiný počátek nebo opačné pořadí)
 */
export function checkPolygonMultiCurveConsistency(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      const polygonEntries = zaznam.geometrie
        .map((g, i) => ({ g, i }))
        .filter((e): e is { g: { type: 'Polygon'; data: GmlPolygon }; i: number } =>
          e.g.type === 'Polygon'
        );

      const multiCurveEntries = zaznam.geometrie
        .map((g, i) => ({ g, i }))
        .filter((e): e is { g: { type: 'MultiCurve'; data: GmlMultiCurve }; i: number } =>
          e.g.type === 'MultiCurve'
        );

      if (polygonEntries.length === 0 || multiCurveEntries.length === 0) continue;

      // Předpokládáme 1:1 párování
      const polyEntry = polygonEntries[0];
      const mcEntry = multiCurveEntries[0];
      if (polyEntry === undefined || mcEntry === undefined) continue;

      const ctx: ErrorCtx = {
        objektovyTyp: objTyp.elementName,
        ...(objectId !== undefined ? { objectId } : {}),
        geometryIndex: polyEntry.i,
      };

      const polyDim = polyEntry.g.data.srsDimension;
      const mcDim = mcEntry.g.data.srsDimension;

      // XY body exterioru polygonu (jako Point2D[])
      const polyPtsAll = toPoints(polyEntry.g.data.exterior, polyDim);
      // Odstranit uzavírací bod
      const firstPoly = polyPtsAll[0];
      const lastPoly = polyPtsAll[polyPtsAll.length - 1];
      const polyPts =
        polyPtsAll.length > 1 &&
        firstPoly !== undefined &&
        lastPoly !== undefined &&
        firstPoly.x === lastPoly.x &&
        firstPoly.y === lastPoly.y
          ? polyPtsAll.slice(0, -1)
          : polyPtsAll;

      // XY body MultiCurve — sloučit všechny segmenty
      const mcAllCoords: number[] = [];
      for (const curve of mcEntry.g.data.curves) {
        mcAllCoords.push(...curve.coordinates);
      }
      const mcPtsRaw = toPoints(mcAllCoords, mcDim);
      // Deduplikace sousedních bodů
      const mcPtsDe: Point2D[] = [];
      for (const pt of mcPtsRaw) {
        const prev = mcPtsDe[mcPtsDe.length - 1];
        if (prev === undefined || prev.x !== pt.x || prev.y !== pt.y) {
          mcPtsDe.push(pt);
        }
      }
      // Odstranit uzavírací bod
      const firstMc = mcPtsDe[0];
      const lastMc = mcPtsDe[mcPtsDe.length - 1];
      const mcPts =
        mcPtsDe.length > 1 &&
        firstMc !== undefined &&
        lastMc !== undefined &&
        firstMc.x === lastMc.x &&
        firstMc.y === lastMc.y
          ? mcPtsDe.slice(0, -1)
          : mcPtsDe;

      if (polyPts.length !== mcPts.length) {
        errors.push(
          mkError(
            ctx,
            'error',
            'POLYGON_MULTICURVE_POINT_COUNT_MISMATCH',
            `Polygon exterior má ${polyPts.length} XY bodů, MultiCurve má ${mcPts.length} XY bodů (po deduplikaci).`
          )
        );
        continue;
      }

      const n = polyPts.length;

      // Hledat shodný offset (normální pořadí)
      const matchesForward = findMatchingOffset(polyPts, mcPts, n);

      // Zkusit opačné pořadí
      const matchesReverse = matchesForward === -1
        ? findMatchingOffset(polyPts, [...mcPts].reverse(), n)
        : 0;

      if (matchesForward === -1 && matchesReverse === -1) {
        errors.push(
          mkError(
            ctx,
            'error',
            'POLYGON_MULTICURVE_COORDS_MISMATCH',
            'XY souřadnice exterioru Polygonu a MultiCurve se neshodují ' +
            '(ani při různém počátku nebo opačném pořadí bodů).'
          )
        );
      }
    }
  }

  return errors;
}

/**
 * Vrátí nalezený offset (0..n-1) nebo -1 pokud žádný nesedí.
 */
function findMatchingOffset(
  polyPts: Point2D[],
  mcPts: Point2D[],
  n: number
): number {
  for (let offset = 0; offset < n; offset++) {
    let match = true;
    for (let k = 0; k < n; k++) {
      const pp = polyPts[k];
      const mp = mcPts[(k + offset) % n];
      if (pp === undefined || mp === undefined || pp.x !== mp.x || pp.y !== mp.y) {
        match = false;
        break;
      }
    }
    if (match) return offset;
  }
  return -1;
}

// ---------------------------------------------------------------------------
// Kontrola 1.5 — Rozsah souřadnic S-JTSK
// ---------------------------------------------------------------------------

/**
 * Definované hranice 3. kvadrantu S-JTSK (EPSG:5514) pro území ČR.
 * Zdroj: DTMwiki 1.3.2 Minimální rozměry a tolerance
 */
export const SJTSK_BOUNDS = {
  xMin: -904_685.0,
  xMax: -431_627.0,
  yMin: -1_227_296.0,
  yMax: -935_134.0,
} as const;

/** Rozsah výšek Z pro ZPS (m n. m.) */
export const Z_BOUNDS_ZPS = { min: 1.0, max: 1620.0 } as const;
/** Rozsah výšek Z pro definiční body (m n. m.) */
export const Z_BOUNDS_DEFBOD = { min: 0.0, max: 1620.0 } as const;

/**
 * Kontrola 1.5: Souřadnice XY musí ležet v rozsahu S-JTSK pro území ČR.
 * Pro objekty ZPS (obsahovaCast === 'ZPS') se kontroluje i rozsah Z.
 *
 * Kódy chyb:
 * - `COORD_OUT_OF_BOUNDS_XY`  — X nebo Y mimo rozsah S-JTSK
 * - `COORD_OUT_OF_BOUNDS_Z`   — Z mimo povolený výškový rozsah
 */
export function checkCoordinateBounds(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    const isZps = objTyp.obsahovaCast === 'ZPS';
    const isDefBod = objTyp.elementName.toLowerCase().includes('defbod');
    const zBounds = isDefBod ? Z_BOUNDS_DEFBOD : Z_BOUNDS_ZPS;

    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;
        const ctx: ErrorCtx = {
          objektovyTyp: objTyp.elementName,
          ...(objectId !== undefined ? { objectId } : {}),
          geometryIndex: gi,
        };

        const coordSets = collectCoordSets(geom);
        for (const { coords, dim } of coordSets) {
          errors.push(...validateCoordsRange(coords, dim, isZps, zBounds, ctx));
        }
      }
    }
  }

  return errors;
}

interface CoordSet { coords: number[]; dim: number }

function collectCoordSets(geom: { type: string; data: GmlPoint | GmlLineString | GmlPolygon | GmlMultiCurve }): CoordSet[] {
  switch (geom.type) {
    case 'Point': {
      const d = geom.data as GmlPoint;
      return [{ coords: d.coordinates, dim: d.srsDimension }];
    }
    case 'LineString': {
      const d = geom.data as GmlLineString;
      return [{ coords: d.coordinates, dim: d.srsDimension }];
    }
    case 'Polygon': {
      const d = geom.data as GmlPolygon;
      const sets: CoordSet[] = [{ coords: d.exterior, dim: d.srsDimension }];
      for (const interior of d.interiors) {
        sets.push({ coords: interior, dim: d.srsDimension });
      }
      return sets;
    }
    case 'MultiCurve': {
      const d = geom.data as GmlMultiCurve;
      return d.curves.map(c => ({ coords: c.coordinates, dim: c.srsDimension }));
    }
    default:
      return [];
  }
}

function validateCoordsRange(
  coords: number[],
  dim: number,
  checkZ: boolean,
  zBounds: { min: number; max: number },
  ctx: ErrorCtx
): TopologyError[] {
  const errors: TopologyError[] = [];
  for (let i = 0; i + 1 < coords.length; i += dim) {
    const x = coords[i];
    const y = coords[i + 1];
    if (x === undefined || y === undefined) continue;
    if (
      x < SJTSK_BOUNDS.xMin || x > SJTSK_BOUNDS.xMax ||
      y < SJTSK_BOUNDS.yMin || y > SJTSK_BOUNDS.yMax
    ) {
      errors.push(
        mkError(
          ctx,
          'error',
          'COORD_OUT_OF_BOUNDS_XY',
          `Souřadnice (${x}, ${y}) leží mimo povolený rozsah S-JTSK ` +
          `(X: ${SJTSK_BOUNDS.xMin}..${SJTSK_BOUNDS.xMax}, Y: ${SJTSK_BOUNDS.yMin}..${SJTSK_BOUNDS.yMax}).`
        )
      );
      break; // jedna chyba na geometrii stačí
    }
    if (checkZ && dim >= 3) {
      const z = coords[i + 2];
      if (z !== undefined && (z < zBounds.min || z > zBounds.max)) {
        errors.push(
          mkError(
            ctx,
            'error',
            'COORD_OUT_OF_BOUNDS_Z',
            `Výška Z=${z} m leží mimo povolený rozsah (${zBounds.min}–${zBounds.max} m n. m.).`
          )
        );
        break;
      }
    }
  }
  return errors;
}

// ---------------------------------------------------------------------------
// Kontrola 1.6 — Přesnost souřadnic na cm
// ---------------------------------------------------------------------------

/**
 * Kontrola 1.6: Souřadnice nesmí mít více než 2 desetinná místa (přesnost na cm).
 * Vyšší přesnost (mm a menší) je zakázána.
 *
 * Kód chyby: `COORD_PRECISION_EXCEEDED`
 */
export function checkCoordinatePrecision(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;
        const ctx: ErrorCtx = {
          objektovyTyp: objTyp.elementName,
          ...(objectId !== undefined ? { objectId } : {}),
          geometryIndex: gi,
        };

        const coordSets = collectCoordSets(geom);
        for (const { coords } of coordSets) {
          const bad = findPrecisionViolation(coords);
          if (bad !== undefined) {
            errors.push(
              mkError(
                ctx,
                'error',
                'COORD_PRECISION_EXCEEDED',
                `Souřadnice ${bad} má více než 2 desetinná místa (povolena přesnost max. na cm).`
              )
            );
            break;
          }
        }
      }
    }
  }

  return errors;
}

/**
 * Vrátí první souřadnici s více než 2 desetinnými místy, nebo undefined.
 * Používá přísné desetinné počítání (string-based), aby se vyhnul float zaokrouhlování.
 */
function findPrecisionViolation(coords: number[]): number | undefined {
  for (const v of coords) {
    if (v === undefined) continue;
    const s = v.toString();
    const dot = s.indexOf('.');
    if (dot !== -1 && s.length - dot - 1 > 2) {
      return v;
    }
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Kontroly 3.4 + 3.5 — Self-intersection linií a nulová délka segmentu
// ---------------------------------------------------------------------------

/**
 * Vzdálenost 3D mezi dvěma body (x1,y1,z1) a (x2,y2,z2).
 * Pokud není Z k dispozici, použije 2D vzdálenost.
 */
function dist3D(
  x1: number, y1: number, z1: number | undefined,
  x2: number, y2: number, z2: number | undefined
): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = (z1 !== undefined && z2 !== undefined) ? z2 - z1 : 0;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Kontrola 3.4: Liniové objekty (LineString, segmenty MultiCurve) se nesmí samy
 * křížit ani překrývat. Kontrola ve 2D.
 *
 * Kód chyby: `LINE_SELF_INTERSECTION`
 *
 * Pozn.: Uzavření (start == end) je povoleno — to není křížení.
 */
export function checkLineSelfIntersection(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;
        const ctx: ErrorCtx = {
          objektovyTyp: objTyp.elementName,
          ...(objectId !== undefined ? { objectId } : {}),
          geometryIndex: gi,
        };

        if (geom.type === 'LineString') {
          if (lineStringHasSelfIntersection(geom.data)) {
            errors.push(
              mkError(ctx, 'error', 'LINE_SELF_INTERSECTION',
                'LineString se kříží nebo překrývá sám se sebou (2D).')
            );
          }
        } else if (geom.type === 'MultiCurve') {
          for (const curve of geom.data.curves) {
            if (lineStringHasSelfIntersection(curve)) {
              errors.push(
                mkError(ctx, 'error', 'LINE_SELF_INTERSECTION',
                  'Segment MultiCurve se kříží nebo překrývá sám se sebou (2D).')
              );
              break;
            }
          }
        }
      }
    }
  }

  return errors;
}

function lineStringHasSelfIntersection(geom: GmlLineString): boolean {
  const pts = toPoints(geom.coordinates, geom.srsDimension);
  if (pts.length < 4) return false;
  // LineString: otevřená polyčára — úsečky i→i+1, žádná "uzavírací" hrana
  const n = pts.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 2; j < n - 1; j++) {
      const pi = pts[i];
      const pi1 = pts[i + 1];
      const pj = pts[j];
      const pj1 = pts[j + 1];
      if (
        pi === undefined || pi1 === undefined ||
        pj === undefined || pj1 === undefined
      ) continue;
      if (segmentsIntersect(pi.x, pi.y, pi1.x, pi1.y, pj.x, pj.y, pj1.x, pj1.y)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Kontrola 3.5: Délka každého segmentu linie ve 3D nesmí být 0.
 *
 * Kód chyby: `SEGMENT_ZERO_LENGTH`
 */
export function checkZeroLengthSegments(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;
        const ctx: ErrorCtx = {
          objektovyTyp: objTyp.elementName,
          ...(objectId !== undefined ? { objectId } : {}),
          geometryIndex: gi,
        };

        if (geom.type === 'LineString') {
          const err = findZeroSegment(geom.data.coordinates, geom.data.srsDimension, ctx);
          if (err !== undefined) errors.push(err);
        } else if (geom.type === 'MultiCurve') {
          for (const curve of geom.data.curves) {
            const err = findZeroSegment(curve.coordinates, curve.srsDimension, ctx);
            if (err !== undefined) { errors.push(err); break; }
          }
        }
      }
    }
  }

  return errors;
}

function findZeroSegment(coords: number[], dim: number, ctx: ErrorCtx): TopologyError | undefined {
  for (let i = 0; i + dim < coords.length; i += dim) {
    const x1 = coords[i], y1 = coords[i + 1], z1 = dim >= 3 ? coords[i + 2] : undefined;
    const x2 = coords[i + dim], y2 = coords[i + dim + 1], z2 = dim >= 3 ? coords[i + dim + 2] : undefined;
    if (x1 === undefined || y1 === undefined || x2 === undefined || y2 === undefined) continue;
    if (dist3D(x1, y1, z1, x2, y2, z2) === 0) {
      return mkError(
        ctx, 'error', 'SEGMENT_ZERO_LENGTH',
        `Segment linie mezi body (${x1}, ${y1}) a (${x2}, ${y2}) má nulovou délku.`
      );
    }
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Kontrola 3.6 — Duplicity liniových prvků uvnitř JVF souboru
// ---------------------------------------------------------------------------

/**
 * Kontrola 3.6 (částečná): Duplicitní liniové objekty ve stejném objektovém typu
 * s identickými XY vrcholy uvnitř jednoho JVF souboru.
 *
 * - Pokud je rozdíl Z = 0 na všech vrcholech: `DUPLICATE_LINE_ERROR` (chyba)
 * - Pokud je rozdíl Z < 0,12 m na všech vrcholech: `DUPLICATE_LINE_WARNING` (varování)
 *
 * Kódy: `DUPLICATE_LINE_ERROR`, `DUPLICATE_LINE_WARNING`
 */
export const DUPLICATE_Z_TOLERANCE = 0.12; // m — dle DTMwiki 1.3.2

export function checkDuplicateLines(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    // Pracujeme jen s liniovými a multi-curve objekty
    const lineZaznamy = objTyp.zaznamy.filter(z =>
      z.geometrie.some(g => g.type === 'LineString' || g.type === 'MultiCurve')
    );
    if (lineZaznamy.length < 2) continue;

    // Normalizovaný klíč: seřazené XY vrcholy → string
    const keys = lineZaznamy.map(z => ({
      zaznam: z,
      xyKey: extractLineXYKey(z),
      zCoords: extractLineZCoords(z),
    }));

    for (let i = 0; i < keys.length; i++) {
      for (let j = i + 1; j < keys.length; j++) {
        const a = keys[i];
        const b = keys[j];
        if (a === undefined || b === undefined) continue;
        if (a.xyKey !== b.xyKey || a.xyKey === '') continue;

        const objectIdA = a.zaznam.commonAttributes.id;
        const ctx: ErrorCtx = {
          objektovyTyp: objTyp.elementName,
          ...(objectIdA !== undefined ? { objectId: objectIdA } : {}),
          geometryIndex: 0,
        };
        const objectIdB = b.zaznam.commonAttributes.id;

        const maxZDiff = maxZDifference(a.zCoords, b.zCoords);
        if (maxZDiff === 0) {
          errors.push(
            mkError(ctx, 'error', 'DUPLICATE_LINE_ERROR',
              `Duplicitní linie (identické XYZ) s objektem ${objectIdB ?? '(bez id)'}.`)
          );
        } else if (maxZDiff < DUPLICATE_Z_TOLERANCE) {
          errors.push(
            mkError(ctx, 'warning', 'DUPLICATE_LINE_WARNING',
              `Duplicitní linie (identické XY, max. rozdíl Z=${maxZDiff.toFixed(3)} m < ${DUPLICATE_Z_TOLERANCE} m) s objektem ${objectIdB ?? '(bez id)'}.`)
          );
        }
      }
    }
  }

  return errors;
}

/** Vrátí kanonický string z XY souřadnic linie (normalizováno: nejmenší směr). */
function extractLineXYKey(zaznam: ZaznamObjektu): string {
  const allXY: string[] = [];
  for (const geom of zaznam.geometrie) {
    if (geom.type === 'LineString') {
      const pts = toPoints(geom.data.coordinates, geom.data.srsDimension);
      for (const p of pts) allXY.push(`${p.x},${p.y}`);
    } else if (geom.type === 'MultiCurve') {
      for (const curve of geom.data.curves) {
        const pts = toPoints(curve.coordinates, curve.srsDimension);
        for (const p of pts) allXY.push(`${p.x},${p.y}`);
      }
    }
  }
  if (allXY.length === 0) return '';
  // Deduplikace sousedů (spojnice segmentů MultiCurve)
  const dedup: string[] = [];
  for (const k of allXY) {
    if (dedup[dedup.length - 1] !== k) dedup.push(k);
  }
  // Kanonická orientace: menší z (první, poslední)
  const fwd = dedup.join('|');
  const rev = [...dedup].reverse().join('|');
  return fwd < rev ? fwd : rev;
}

/** Vrátí Z souřadnice linie jako pole čísel (bez sousedních duplikátů). */
function extractLineZCoords(zaznam: ZaznamObjektu): number[] {
  const zs: number[] = [];
  for (const geom of zaznam.geometrie) {
    if (geom.type === 'LineString') {
      const dim = geom.data.srsDimension;
      if (dim < 3) return [];
      for (let i = 2; i < geom.data.coordinates.length; i += dim) {
        const z = geom.data.coordinates[i];
        if (z !== undefined) zs.push(z);
      }
    } else if (geom.type === 'MultiCurve') {
      for (const curve of geom.data.curves) {
        const dim = curve.srsDimension;
        if (dim < 3) return [];
        for (let i = 2; i < curve.coordinates.length; i += dim) {
          const z = curve.coordinates[i];
          if (z !== undefined) zs.push(z);
        }
      }
    }
  }
  // Deduplikace sousedů
  const dedup: number[] = [];
  for (const z of zs) {
    if (dedup[dedup.length - 1] !== z) dedup.push(z);
  }
  return dedup;
}

function maxZDifference(a: number[], b: number[]): number {
  if (a.length !== b.length || a.length === 0) return Infinity;
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    const az = a[i], bz = b[i];
    if (az === undefined || bz === undefined) return Infinity;
    max = Math.max(max, Math.abs(az - bz));
  }
  return max;
}

// ---------------------------------------------------------------------------
// Kontrola 3.8 — Duplicita bodů uvnitř JVF souboru
// ---------------------------------------------------------------------------

/**
 * Kontrola 3.8 (částečná): Podrobné body ZPS a bodové objekty ZPS musí mít
 * unikátní XYZ (3D) napříč záznamy uvnitř JVF souboru.
 * Definiční body musí mít unikátní XY (2D).
 *
 * Kód chyby: `DUPLICATE_POINT`
 */
export function checkDuplicatePoints(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    const isDefBod = objTyp.elementName.toLowerCase().includes('defbod');

    // Sbíráme záznamy s Point geometrií
    const pointZaznamy = objTyp.zaznamy.filter(z =>
      z.geometrie.some(g => g.type === 'Point')
    );
    if (pointZaznamy.length < 2) continue;

    const seen = new Map<string, string | undefined>(); // key → objectId

    for (const zaznam of pointZaznamy) {
      const objectId = zaznam.commonAttributes.id;
      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined || geom.type !== 'Point') continue;
        const { coordinates, srsDimension } = geom.data;
        const x = coordinates[0], y = coordinates[1], z = coordinates[2];
        if (x === undefined || y === undefined) continue;

        const key = isDefBod
          ? `${x},${y}`
          : `${x},${y},${z ?? ''}`;

        const prevId = seen.get(key);
        if (prevId !== undefined || seen.has(key)) {
          const ctx: ErrorCtx = {
            objektovyTyp: objTyp.elementName,
            ...(objectId !== undefined ? { objectId } : {}),
            geometryIndex: gi,
          };
          errors.push(
            mkError(ctx, 'error', 'DUPLICATE_POINT',
              `Duplicitní bod ${isDefBod ? 'XY' : 'XYZ'} (${isDefBod ? `${x}, ${y}` : `${x}, ${y}, ${z ?? '?'}`}) ` +
              `nalezen také v záznamu ${prevId ?? '(bez id)'}.`)
          );
        } else {
          seen.set(key, objectId);
        }
      }
    }
  }

  return errors;
}

// ---------------------------------------------------------------------------
// Kontroly 3.9 + 3.10 — Blízkost bodů a minimální délka segmentu
// ---------------------------------------------------------------------------

/** Minimální tolerance vzdálenosti (m) — DTMwiki 1.3.2 */
export const MIN_DISTANCE_TOLERANCE = 0.05; // m

/**
 * Kontrola 3.9: Dva a více bodových objektů stejného typu ve vzdálenosti
 * menší než MIN_DISTANCE_TOLERANCE (3D). Výstup: varování.
 *
 * Kód: `POINTS_TOO_CLOSE`
 */
export function checkPointProximity(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    const pointZaznamy = objTyp.zaznamy.filter(z =>
      z.geometrie.some(g => g.type === 'Point')
    );
    if (pointZaznamy.length < 2) continue;

    // Extrahovat body s pozicí
    const pts = pointZaznamy.map(z => {
      const geom = z.geometrie.find(g => g.type === 'Point');
      if (geom?.type !== 'Point') return undefined;
      const c = geom.data.coordinates;
      return {
        id: z.commonAttributes.id,
        x: c[0] ?? 0,
        y: c[1] ?? 0,
        z: c[2],
      };
    }).filter((p): p is NonNullable<typeof p> => p !== undefined);

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j];
        if (a === undefined || b === undefined) continue;
        const d = dist3D(a.x, a.y, a.z, b.x, b.y, b.z);
        if (d > 0 && d < MIN_DISTANCE_TOLERANCE) {
          const ctx: ErrorCtx = {
            objektovyTyp: objTyp.elementName,
            ...(a.id !== undefined ? { objectId: a.id } : {}),
            geometryIndex: 0,
          };
          errors.push(
            mkError(ctx, 'warning', 'POINTS_TOO_CLOSE',
              `Bod je ve vzdálenosti ${d.toFixed(4)} m od bodu ${b.id ?? '(bez id)'} — méně než tolerance ${MIN_DISTANCE_TOLERANCE} m (3D).`)
          );
        }
      }
    }
  }

  return errors;
}

/**
 * Kontrola 3.10: Délka segmentu linie > 0, ale < MIN_DISTANCE_TOLERANCE (3D).
 * Výstup: varování.
 *
 * Kód: `SEGMENT_TOO_SHORT`
 */
export function checkMinSegmentLength(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    for (const zaznam of objTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;
        const ctx: ErrorCtx = {
          objektovyTyp: objTyp.elementName,
          ...(objectId !== undefined ? { objectId } : {}),
          geometryIndex: gi,
        };

        if (geom.type === 'LineString') {
          const err = findShortSegment(geom.data.coordinates, geom.data.srsDimension, ctx);
          if (err !== undefined) errors.push(err);
        } else if (geom.type === 'MultiCurve') {
          for (const curve of geom.data.curves) {
            const err = findShortSegment(curve.coordinates, curve.srsDimension, ctx);
            if (err !== undefined) { errors.push(err); break; }
          }
        }
      }
    }
  }

  return errors;
}

function findShortSegment(coords: number[], dim: number, ctx: ErrorCtx): TopologyError | undefined {
  for (let i = 0; i + dim < coords.length; i += dim) {
    const x1 = coords[i], y1 = coords[i + 1], z1 = dim >= 3 ? coords[i + 2] : undefined;
    const x2 = coords[i + dim], y2 = coords[i + dim + 1], z2 = dim >= 3 ? coords[i + dim + 2] : undefined;
    if (x1 === undefined || y1 === undefined || x2 === undefined || y2 === undefined) continue;
    const d = dist3D(x1, y1, z1, x2, y2, z2);
    if (d > 0 && d < MIN_DISTANCE_TOLERANCE) {
      return mkError(
        ctx, 'warning', 'SEGMENT_TOO_SHORT',
        `Segment linie délky ${d.toFixed(4)} m je kratší než tolerance ${MIN_DISTANCE_TOLERANCE} m (3D).`
      );
    }
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Pomocné importy pro kontroly duplicit
// ---------------------------------------------------------------------------

import type { ZaznamObjektu } from './types.js';

// ---------------------------------------------------------------------------
// Vrstva 3 — Meziobjektová topologie
// ---------------------------------------------------------------------------

/**
 * Ray-casting algoritmus: vrátí true pokud bod (px, py) leží uvnitř polygonu.
 * Polygon je zadán jako plochý seznam [x0,y0, x1,y1, ...] (2D, uzavřený nebo ne).
 *
 * Bod na hranici je považován za "uvnitř" (vrací true).
 */
function pointInPolygon(px: number, py: number, exterior: number[], dim: number): boolean {
  const pts = toPoints(exterior, dim);
  const n = pts.length;
  if (n < 3) return false;

  // Nejprve zkontrolovat, zda bod leží přímo na hranici
  for (let i = 0; i < n; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % n];
    if (a === undefined || b === undefined) continue;
    if (pointOnSegment(px, py, a.x, a.y, b.x, b.y)) return true;
  }

  // Ray-casting: paprsek ve směru +X
  let inside = false;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const pi = pts[i];
    const pj = pts[j];
    if (pi === undefined || pj === undefined) continue;
    const xi = pi.x, yi = pi.y, xj = pj.x, yj = pj.y;
    const intersect =
      yi > py !== yj > py &&
      px < ((xj - xi) * (py - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

/**
 * Vrátí true pokud bod (px, py) leží na úsečce (ax,ay)→(bx,by)
 * s tolerancí pro numerické chyby.
 */
function pointOnSegment(
  px: number, py: number,
  ax: number, ay: number,
  bx: number, by: number,
): boolean {
  // Křížový součin nula → kolineární
  const cross = (bx - ax) * (py - ay) - (by - ay) * (px - ax);
  if (Math.abs(cross) > 1e-6) return false;
  // Bod musí být v bounding boxu úsečky
  return (
    Math.min(ax, bx) - 1e-9 <= px && px <= Math.max(ax, bx) + 1e-9 &&
    Math.min(ay, by) - 1e-9 <= py && py <= Math.max(ay, by) + 1e-9
  );
}

/**
 * Vrátí true pokud všechny body polyčáry leží uvnitř (nebo na hranici) polygonu.
 */
function lineInPolygon(
  lineCoords: number[], lineDim: number,
  polyExterior: number[], polyDim: number
): boolean {
  for (let i = 0; i + 1 < lineCoords.length; i += lineDim) {
    const x = lineCoords[i], y = lineCoords[i + 1];
    if (x === undefined || y === undefined) continue;
    if (!pointInPolygon(x, y, polyExterior, polyDim)) return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Vrstva 3A — DefBod leží v odpovídající Ploše
// ---------------------------------------------------------------------------

/**
 * Mapa: kořen názvu objektu → { defbod elementName, plocha elementName }
 *
 * Generuje se ze konvence názvů: `{Kořen}DefinicniBod` + `{Kořen}Plocha`.
 * Zahrnuje všechny páry, kde obě strany existují v DTM katalogu.
 */
export const DEFBOD_PLOCHA_PAIRS: ReadonlyArray<{
  defbod: string;
  plocha: string;
}> = [
  { defbod: 'BudovaDefinicniBod',                         plocha: 'BudovaPlocha' },
  { defbod: 'CeloPropustkuDefinicniBod',                  plocha: 'CeloPropustkuPlocha' },
  { defbod: 'ChodnikDefinicniBod',                        plocha: 'ChodnikPlocha' },
  { defbod: 'CyklostezkaDefinicniBod',                    plocha: 'CyklostezkaPlocha' },
  { defbod: 'DeliciPasDefinicniBod',                      plocha: 'DeliciPasPlocha' },
  { defbod: 'DopravniOstruvekDefinicniBod',               plocha: 'DopravniOstruvekPlocha' },
  { defbod: 'DrobnaKulturniStavbaDefinicniBod',           plocha: 'DrobnaKulturniStavbaPlocha' },
  { defbod: 'DrobnaSakralniStavbaDefinicniBod',           plocha: 'DrobnaSakralniStavbaPlocha' },
  { defbod: 'DulLomDefinicniBod',                         plocha: 'DulLomPlocha' },
  { defbod: 'DvurNadvoriDefinicniBod',                    plocha: 'DvurNadvoriPlocha' },
  { defbod: 'HospodarskyNevyuzivanaPlochaDefinicniBod',   plocha: 'HospodarskyNevyuzivanaPlochaPlocha' },
  { defbod: 'HrazDefinicniBod',                           plocha: 'HrazPlocha' },
  { defbod: 'HrbitovDefinicniBod',                        plocha: 'HrbitovPlocha' },
  { defbod: 'HristeDefinicniBod',                         plocha: 'HristePlocha' },
  { defbod: 'JezDefinicniBod',                            plocha: 'JezPlocha' },
  { defbod: 'JezeroDefinicniBod',                         plocha: 'JezeroPlocha' },
  { defbod: 'JineDulniDiloStavbaDefinicniBod',            plocha: 'JineDulniDiloStavbaPlocha' },
  { defbod: 'KominDefinicniBod',                          plocha: 'KominPlocha' },
  { defbod: 'LesDefinicniBod',                            plocha: 'LesPlocha' },
  { defbod: 'ManipulacniPlochaDefinicniBod',              plocha: 'ManipulacniPlochaPlocha' },
  { defbod: 'MelioracniPrikopZlabDefinicniBod',           plocha: 'MelioracniPrikopZlabPlocha' },
  { defbod: 'MostniVahaDefinicniBod',                     plocha: 'MostniVahaPlocha' },
  { defbod: 'NadrzBezVzdouvacihoObjektuDefinicniBod',     plocha: 'NadrzBezVzdouvacihoObjektuPlocha' },
  { defbod: 'NadrzZdrzSeVzdouvacimObjektemDefinicniBod',  plocha: 'NadrzZdrzSeVzdouvacimObjektemPlocha' },
  { defbod: 'NajezdDefinicniBod',                         plocha: 'NajezdPlocha' },
  { defbod: 'NastupisteDefinicniBod',                     plocha: 'NastupistePlocha' },
  { defbod: 'OstatniZastresenaStavbaDefinicniBod',        plocha: 'OstatniZastresenaStavbaPlocha' },
  { defbod: 'ParkovisteOdstavnaPlochaDefinicniBod',       plocha: 'ParkovisteOdstavnaPlochaPlocha' },
  { defbod: 'PatkaDeskaMonolitPilirDefinicniBod',         plocha: 'PatkaDeskaMonolitPilirPlocha' },
  { defbod: 'PlochaMostniKonstrukceDefinicniBod',         plocha: 'PlochaMostniKonstrukcePlocha' },
  { defbod: 'PlochaRekultivaceDefinicniBod',              plocha: 'PlochaRekultivacePlocha' },
  { defbod: 'PodezdivkaDefinicniBod',                     plocha: 'PodezdivkaPlocha' },
  { defbod: 'PodzemniObjektZPSDefinicniBod',              plocha: 'PodzemniObjektZPSPlocha' },
  { defbod: 'PortalPodchoduDefinicniBod',                 plocha: 'PortalPodchoduPlocha' },
  { defbod: 'PortalTuneluDefinicniBod',                   plocha: 'PortalTuneluPlocha' },
  { defbod: 'PridruzenaPlochaPozemniKomunikaceDefinicniBod', plocha: 'PridruzenaPlochaPozemniKomunikacePlocha' },
  { defbod: 'PrikopNasepZarezDopravniStavbyDefinicniBod', plocha: 'PrikopNasepZarezDopravniStavbyPlocha' },
  { defbod: 'ProtipovodnovaZabranaDefinicniBod',          plocha: 'ProtipovodnovaZabranaPlocha' },
  { defbod: 'ProvozniPlochaPodchoduDefinicniBod',         plocha: 'ProvozniPlochaPodchoduPlocha' },
  { defbod: 'ProvozniPlochaPozemniKomunikaceDefinicniBod', plocha: 'ProvozniPlochaPozemniKomunikacePlocha' },
  { defbod: 'ProvozniPlochaTuneluDefinicniBod',           plocha: 'ProvozniPlochaTuneluPlocha' },
  { defbod: 'RampaDefinicniBod',                          plocha: 'RampaPlocha' },
  { defbod: 'SchodisteDefinicniBod',                      plocha: 'SchodistePlocha' },
  { defbod: 'SklenikDefinicniBod',                        plocha: 'SklenikPlocha' },
  { defbod: 'SouhrnnaPlochaZeleznicnichDrahDefinicniBod', plocha: 'SouhrnnaPlochaZeleznicnichDrahPlocha' },
  { defbod: 'SpecialniDrahaDefinicniBod',                 plocha: 'SpecialniDrahaPlocha' },
  { defbod: 'StavbaProZpevneniPovrchu DefinicniBod',      plocha: 'StavbaProZpevneniPovrchuPlocha' },
  { defbod: 'StavebneUpraveneKorytoDefinicniBod',         plocha: 'StavebneUpraveneKorytoPlocha' },
  { defbod: 'SterkovaPrehrazdaDefinicniBod',              plocha: 'SterkovaPrehrazdaPlocha' },
  { defbod: 'StupenDefinicniBod',                         plocha: 'StupenPlocha' },
  { defbod: 'SuchaNadrzDefinicniBod',                     plocha: 'SuchaNadrzPlocha' },
  { defbod: 'TerasaDefinicniBod',                         plocha: 'TerasaPlocha' },
  { defbod: 'TramvajovaDrahaDefinicniBod',                plocha: 'TramvajovaDrahaPlocha' },
  { defbod: 'UdrzovanaPlochaZeleneDefinicniBod',          plocha: 'UdrzovanaPlochaZelenePlocha' },
  { defbod: 'UlozneMistoTezebnihoOdpaduDefinicniBod',     plocha: 'UlozneMistoTezebnihoOdpaduPlocha' },
  { defbod: 'VegetacniMisaDefinicniBod',                  plocha: 'VegetacniMisaPlocha' },
  { defbod: 'VodniTokDefinicniBod',                       plocha: 'VodniTokPlocha' },
  { defbod: 'ZahradaDefinicniBod',                        plocha: 'ZahradaPlocha' },
  { defbod: 'ZahradniBazenDefinicniBod',                  plocha: 'ZahradniBazenPlocha' },
  { defbod: 'ZarizeniKanalizacniPripojkyDefinicniBod',    plocha: 'ZarizeniKanalizacniPripojkyPlocha' },
  { defbod: 'ZarizeniVodovodniPripojkyDefinicniBod',      plocha: 'ZarizeniVodovodniPripojkyPlocha' },
  { defbod: 'ZastreseniDefinicniBod',                     plocha: 'ZastreseniPlocha' },
  { defbod: 'ZedDefinicniBod',                            plocha: 'ZedPlocha' },
  { defbod: 'ZemedelskaPlochaDefinicniBod',               plocha: 'ZemedelskaPlocha' },
  { defbod: 'PozemniLanovaDrahaDefinicniBod',             plocha: 'PozemniLanovaDrahaPlocha' },
];

/** Plochý index: elementName → ObjektovyTyp */
function buildIndex(dtm: JvfDtm): Map<string, ObjektovyTyp> {
  const idx = new Map<string, ObjektovyTyp>();
  for (const objTyp of dtm.objekty) {
    idx.set(objTyp.elementName, objTyp);
  }
  return idx;
}

import type { ObjektovyTyp } from './types.js';

/**
 * Vrstva 3A: Každý definiční bod musí ležet uvnitř (nebo na hranici) své
 * odpovídající plochy (2D, stejné LEVEL-agnostické párování dle elementName).
 *
 * Kódy:
 * - `DEFBOD_OUTSIDE_PLOCHA`   — bod leží mimo jakoukoliv plochu svého typu
 * - `DEFBOD_NO_PLOCHA`        — v JVF souboru není žádná plocha odpovídajícího typu
 */
export function checkDefBodInPlocha(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];
  const index = buildIndex(dtm);

  for (const pair of DEFBOD_PLOCHA_PAIRS) {
    const defbodTyp = index.get(pair.defbod);
    const plochaTyp = index.get(pair.plocha);

    if (defbodTyp === undefined || defbodTyp.zaznamy.length === 0) continue;
    if (plochaTyp === undefined || plochaTyp.zaznamy.length === 0) {
      // Plocha chybí v souboru — ohlásit pro každý defbod
      for (const zaznam of defbodTyp.zaznamy) {
        const objectId = zaznam.commonAttributes.id;
        errors.push(mkError(
          { objektovyTyp: pair.defbod, ...(objectId !== undefined ? { objectId } : {}), geometryIndex: 0 },
          'warning',
          'DEFBOD_NO_PLOCHA',
          `Pro definiční bod ${pair.defbod} není v JVF souboru žádná plocha ${pair.plocha}.`
        ));
      }
      continue;
    }

    // Předpřipravit polygony plochy
    const polygons = extractPolygons(plochaTyp);

    for (const zaznam of defbodTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;
      const ptGeom = zaznam.geometrie.find(g => g.type === 'Point');
      if (ptGeom?.type !== 'Point') continue;

      const coords = ptGeom.data.coordinates;
      const px = coords[0], py = coords[1];
      if (px === undefined || py === undefined) continue;

      const inside = polygons.some(({ exterior, dim }) =>
        pointInPolygon(px, py, exterior, dim)
      );

      if (!inside) {
        errors.push(mkError(
          { objektovyTyp: pair.defbod, ...(objectId !== undefined ? { objectId } : {}), geometryIndex: 0 },
          'error',
          'DEFBOD_OUTSIDE_PLOCHA',
          `Definiční bod (${px}, ${py}) neleží uvnitř žádné plochy ${pair.plocha} v JVF souboru.`
        ));
      }
    }
  }

  return errors;
}

interface ExtractedPolygon { exterior: number[]; dim: number }

function extractPolygons(objTyp: ObjektovyTyp): ExtractedPolygon[] {
  const result: ExtractedPolygon[] = [];
  for (const zaznam of objTyp.zaznamy) {
    for (const geom of zaznam.geometrie) {
      if (geom.type === 'Polygon') {
        result.push({ exterior: geom.data.exterior, dim: geom.data.srsDimension });
      }
    }
  }
  return result;
}

// ---------------------------------------------------------------------------
// Vrstva 3B — Osa pozemní komunikace leží uvnitř Obvodu PK
// ---------------------------------------------------------------------------

/**
 * Páry Osa → Obvod pro DI objekty.
 * V JVF DTM 1.4.3: OsaPozemniKomunikace leží uvnitř ObvodPozemniKomunikace.
 */
export const OSA_OBVOD_PAIRS: ReadonlyArray<{ osa: string; obvod: string }> = [
  { osa: 'OsaPozemniKomunikace', obvod: 'ObvodPozemniKomunikace' },
];

/**
 * Vrstva 3B: Všechny vrcholy linie Osy musí ležet uvnitř (nebo na hranici)
 * alespoň jednoho Obvodu stejné DI skupiny (2D).
 *
 * Kódy:
 * - `OSA_OUTSIDE_OBVOD`  — bod osy leží mimo jakýkoliv obvod
 * - `OSA_NO_OBVOD`       — v JVF souboru není žádný obvod odpovídajícího typu
 */
export function checkOsaInObvod(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];
  const index = buildIndex(dtm);

  for (const pair of OSA_OBVOD_PAIRS) {
    const osaTyp = index.get(pair.osa);
    const obvodTyp = index.get(pair.obvod);

    if (osaTyp === undefined || osaTyp.zaznamy.length === 0) continue;

    if (obvodTyp === undefined || obvodTyp.zaznamy.length === 0) {
      for (const zaznam of osaTyp.zaznamy) {
        const objectId = zaznam.commonAttributes.id;
        errors.push(mkError(
          { objektovyTyp: pair.osa, ...(objectId !== undefined ? { objectId } : {}), geometryIndex: 0 },
          'warning',
          'OSA_NO_OBVOD',
          `Pro osu ${pair.osa} není v JVF souboru žádný obvod ${pair.obvod}.`
        ));
      }
      continue;
    }

    const polygons = extractPolygons(obvodTyp);

    for (const zaznam of osaTyp.zaznamy) {
      const objectId = zaznam.commonAttributes.id;

      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined) continue;
        if (geom.type !== 'LineString' && geom.type !== 'MultiCurve') continue;

        const ctx: ErrorCtx = {
          objektovyTyp: pair.osa,
          ...(objectId !== undefined ? { objectId } : {}),
          geometryIndex: gi,
        };

        const coordSets: { coords: number[]; dim: number }[] =
          geom.type === 'LineString'
            ? [{ coords: geom.data.coordinates, dim: geom.data.srsDimension }]
            : geom.data.curves.map(c => ({ coords: c.coordinates, dim: c.srsDimension }));

        for (const { coords, dim } of coordSets) {
          const outsidePt = findPointOutsidePolygons(coords, dim, polygons);
          if (outsidePt !== undefined) {
            errors.push(mkError(
              ctx,
              'error',
              'OSA_OUTSIDE_OBVOD',
              `Bod osy (${outsidePt.x}, ${outsidePt.y}) neleží uvnitř žádného obvodu ${pair.obvod}.`
            ));
            break;
          }
        }
      }
    }
  }

  return errors;
}

function findPointOutsidePolygons(
  coords: number[],
  dim: number,
  polygons: ExtractedPolygon[]
): Point2D | undefined {
  for (let i = 0; i + 1 < coords.length; i += dim) {
    const x = coords[i], y = coords[i + 1];
    if (x === undefined || y === undefined) continue;
    const inside = polygons.some(({ exterior, dim: pd }) =>
      pointInPolygon(x, y, exterior, pd)
    );
    if (!inside) return { x, y };
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
export const SNAP_TOLERANCE = MIN_DISTANCE_TOLERANCE; // 0.05 m

export function checkDanglingEnds(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    // Pracujeme jen s liniovými typy
    const lineZaznamy = objTyp.zaznamy.filter(z =>
      z.geometrie.some(g => g.type === 'LineString' || g.type === 'MultiCurve')
    );
    if (lineZaznamy.length < 2) continue;

    // Extrahovat start/end každé linie
    const endpoints = lineZaznamy.map(z => {
      const start = extractLineStart(z);
      const end = extractLineEnd(z);
      return { zaznam: z, start, end };
    }).filter((e): e is { zaznam: ZaznamObjektu; start: Point2D; end: Point2D } =>
      e.start !== undefined && e.end !== undefined
    );

    if (endpoints.length < 2) continue;

    for (let i = 0; i < endpoints.length; i++) {
      const curr = endpoints[i];
      if (curr === undefined) continue;

      // Zkontrolovat start tohoto prvku
      const startConnected = endpoints.some((other, j) => {
        if (j === i || other === undefined) return false;
        return (
          dist3D(curr.start.x, curr.start.y, undefined, other.start.x, other.start.y, undefined) <= SNAP_TOLERANCE ||
          dist3D(curr.start.x, curr.start.y, undefined, other.end.x, other.end.y, undefined) <= SNAP_TOLERANCE
        );
      });

      // Zkontrolovat end tohoto prvku
      const endConnected = endpoints.some((other, j) => {
        if (j === i || other === undefined) return false;
        return (
          dist3D(curr.end.x, curr.end.y, undefined, other.start.x, other.start.y, undefined) <= SNAP_TOLERANCE ||
          dist3D(curr.end.x, curr.end.y, undefined, other.end.x, other.end.y, undefined) <= SNAP_TOLERANCE
        );
      });

      const objectId = curr.zaznam.commonAttributes.id;
      const ctx: ErrorCtx = {
        objektovyTyp: objTyp.elementName,
        ...(objectId !== undefined ? { objectId } : {}),
        geometryIndex: 0,
      };

      if (!startConnected) {
        errors.push(mkError(
          ctx,
          'warning',
          'LINE_DANGLING_END',
          `Volný začátek linie (${curr.start.x}, ${curr.start.y}) — žádná sousední linie ${objTyp.elementName} v toleranci ${SNAP_TOLERANCE} m.`
        ));
      }
      if (!endConnected) {
        errors.push(mkError(
          ctx,
          'warning',
          'LINE_DANGLING_END',
          `Volný konec linie (${curr.end.x}, ${curr.end.y}) — žádná sousední linie ${objTyp.elementName} v toleranci ${SNAP_TOLERANCE} m.`
        ));
      }
    }
  }

  return errors;
}

function extractLineStart(zaznam: ZaznamObjektu): Point2D | undefined {
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

function extractLineEnd(zaznam: ZaznamObjektu): Point2D | undefined {
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

// ---------------------------------------------------------------------------
// Hlavní vstupní bod
// ---------------------------------------------------------------------------

/**
 * Spustí zadané kontroly nad DTM dokumentem a vrátí souhrnný seznam chyb.
 */
export function runTopologyChecks(
  dtm: JvfDtm,
  checks: TopologyCheck[]
): TopologyError[] {
  return checks.flatMap((check) => check(dtm));
}

/**
 * Spustí všechny implementované kontroly.
 *
 * Vrstva 1: Geometrická validita
 * Vrstva 2: Konzistence Polygon ↔ MultiCurve
 * IS DTM 1.5: Rozsah souřadnic S-JTSK
 * IS DTM 1.6: Přesnost souřadnic na cm
 * IS DTM 3.4: Self-intersection liniových prvků
 * IS DTM 3.5: Nulová délka segmentu
 * IS DTM 3.6: Duplicity liniových prvků (v rámci JVF)
 * IS DTM 3.8: Duplicita bodů (v rámci JVF)
 * IS DTM 3.9: Blízkost bodů
 * IS DTM 3.10: Minimální délka segmentu
 * Vrstva 3A: Definiční bod leží v odpovídající ploše
 * Vrstva 3B: Osa PK leží uvnitř Obvodu PK
 * Vrstva 3C: Volné konce liniových prvků
 */
export function runAllChecks(dtm: JvfDtm): TopologyError[] {
  return runTopologyChecks(dtm, [
    checkGeometricValidity,
    checkPolygonMultiCurveConsistency,
    checkCoordinateBounds,
    checkCoordinatePrecision,
    checkLineSelfIntersection,
    checkZeroLengthSegments,
    checkDuplicateLines,
    checkDuplicatePoints,
    checkPointProximity,
    checkMinSegmentLength,
    checkDefBodInPlocha,
    checkOsaInObvod,
    checkDanglingEnds,
  ]);
}
