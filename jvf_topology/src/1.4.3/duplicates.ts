/**
 * Kontroly 3.6, 3.8 a 3.9 — Duplicita a blízkost prvků (IS DTM).
 *
 * - 3.6 Duplicitní liniové prvky uvnitř JVF souboru
 *   (identické XYZ → chyba, identické XY s |ΔZ| < DUPLICATE_Z_TOLERANCE → varování)
 * - 3.8 Duplicita bodových prvků uvnitř JVF souboru (XY pro defbody, XYZ pro ZPS)
 * - 3.9 Blízkost bodů stejného typu (vzdálenost < MIN_DISTANCE_TOLERANCE, 3D)
 */

import type { JvfDtm, ZaznamObjektu } from 'jvf-dtm-types';
import type { ErrorCtx, TopologyError } from './types.js';
import { DUPLICATE_Z_TOLERANCE, MIN_DISTANCE_TOLERANCE } from './constants.js';
import { dist3D, getLevel, mkError, toPoints } from './geometry-math.js';

/**
 * Dvojice záznamů s `ZapisObjektu = 'd'` + `'i'`/`'u'` nepředstavuje duplicitu —
 * jde o vzor změnového souboru, kde se starý záznam maže a vzápětí vkládá nový
 * (často jen se změnou atributů, geometrie zůstává stejná).
 *
 * Vrací `true`, když má dvojice být přeskočena z duplicitních kontrol.
 */
function isChangesetDeleteInsertPair(a: ZaznamObjektu, b: ZaznamObjektu): boolean {
  const za = a.zapisObjektu;
  const zb = b.zapisObjektu;
  return (
    (za === 'd' && (zb === 'i' || zb === 'u')) ||
    (zb === 'd' && (za === 'i' || za === 'u'))
  );
}

/**
 * Kontrola 3.6 (částečná): Duplicitní liniové objekty ve stejném objektovém typu
 * s identickými XY vrcholy uvnitř jednoho JVF souboru.
 *
 * - Pokud je rozdíl Z = 0 na všech vrcholech: `DUPLICATE_LINE_ERROR` (chyba)
 * - Pokud je rozdíl Z < 0,12 m na všech vrcholech: `DUPLICATE_LINE_WARNING` (varování)
 *
 * Kódy: `DUPLICATE_LINE_ERROR`, `DUPLICATE_LINE_WARNING`
 */
export function checkDuplicateLines(dtm: JvfDtm): TopologyError[] {
  const errors: TopologyError[] = [];

  for (const objTyp of dtm.objekty) {
    // Pracujeme jen s liniovými a multi-curve objekty
    const lineZaznamy = objTyp.zaznamy.filter(z =>
      z.geometrie.some(g => g.type === 'LineString' || g.type === 'MultiCurve')
    );
    if (lineZaznamy.length < 2) continue;

    // Normalizovaný klíč: LEVEL + seřazené XY vrcholy → string.
     // Duplicitní kontrola dle spec. probíhá per LEVEL (objekty na různých
     // úrovních — podzemí vs. povrch — nejsou duplicitní).
    const keys = lineZaznamy.map(z => ({
      zaznam: z,
      level: getLevel(z),
      xyKey: extractLineXYKey(z),
      zCoords: extractLineZCoords(z),
    }));

    for (let i = 0; i < keys.length; i++) {
      for (let j = i + 1; j < keys.length; j++) {
        const a = keys[i];
        const b = keys[j];
        if (a === undefined || b === undefined) continue;
        if (a.xyKey !== b.xyKey || a.xyKey === '') continue;
        if (a.level !== b.level) continue;
        if (isChangesetDeleteInsertPair(a.zaznam, b.zaznam)) continue;

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

    const seen = new Map<string, { id: string | undefined; zaznam: ZaznamObjektu }>();

    for (const zaznam of pointZaznamy) {
      const objectId = zaznam.commonAttributes.id;
      const level = getLevel(zaznam);
      for (let gi = 0; gi < zaznam.geometrie.length; gi++) {
        const geom = zaznam.geometrie[gi];
        if (geom === undefined || geom.type !== 'Point') continue;
        const { coordinates } = geom.data;
        const x = coordinates[0], y = coordinates[1], z = coordinates[2];
        if (x === undefined || y === undefined) continue;

        // Klíč zahrnuje LEVEL — kontrola per úroveň umístění dle spec.
        const levelKey = level === null ? 'null' : String(level);
        const key = isDefBod
          ? `${levelKey}|${x},${y}`
          : `${levelKey}|${x},${y},${z ?? ''}`;

        const prev = seen.get(key);
        if (prev !== undefined) {
          if (isChangesetDeleteInsertPair(prev.zaznam, zaznam)) continue;
          const ctx: ErrorCtx = {
            objektovyTyp: objTyp.elementName,
            ...(objectId !== undefined ? { objectId } : {}),
            geometryIndex: gi,
          };
          errors.push(
            mkError(ctx, 'error', 'DUPLICATE_POINT',
              `Duplicitní bod ${isDefBod ? 'XY' : 'XYZ'} (${isDefBod ? `${x}, ${y}` : `${x}, ${y}, ${z ?? '?'}`}) ` +
              `nalezen také v záznamu ${prev.id ?? '(bez id)'}.`)
          );
        } else {
          seen.set(key, { id: objectId, zaznam });
        }
      }
    }
  }

  return errors;
}

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

    // Extrahovat body s pozicí a úrovní umístění (LEVEL)
    const pts = pointZaznamy.map(z => {
      const geom = z.geometrie.find(g => g.type === 'Point');
      if (geom?.type !== 'Point') return undefined;
      const c = geom.data.coordinates;
      return {
        zaznam: z,
        id: z.commonAttributes.id,
        level: getLevel(z),
        x: c[0] ?? 0,
        y: c[1] ?? 0,
        z: c[2],
      };
    }).filter((p): p is NonNullable<typeof p> => p !== undefined);

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j];
        if (a === undefined || b === undefined) continue;
        if (a.level !== b.level) continue;
        const d = dist3D(a.x, a.y, a.z, b.x, b.y, b.z);
        if (d > 0 && d < MIN_DISTANCE_TOLERANCE) {
          if (isChangesetDeleteInsertPair(a.zaznam, b.zaznam)) continue;
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
