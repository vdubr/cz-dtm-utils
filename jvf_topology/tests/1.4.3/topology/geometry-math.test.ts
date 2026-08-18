/**
 * Přímé unit testy geometrických primitiv z `geometry-math.ts`.
 *
 * Dosud byly tyto funkce pokryty jen nepřímo přes vyšší kontroly
 * (`checkLineSelfIntersection`, `checkDefBodInPlocha`, ...). Testy zde cílí
 * hlavně na opravy:
 * - `segmentsIntersect`: detekce kolineárního překryvu a dotyku (T-junction),
 *   dřív vracelo `false` kvůli striktním nerovnostem (d==0 case).
 * - `pointInPolygon`: podpora interior ringů (děr) — bod v díře plochy musí
 *   být vyhodnocen jako "mimo" polygon.
 */

import { describe, expect, it } from 'vitest';
import {
  dist3D,
  hasSelfIntersection,
  pointInPolygon,
  pointOnSegment,
  segmentsIntersect,
} from '../../../src/1.4.3/geometry-math.js';

// ---------------------------------------------------------------------------
// segmentsIntersect
// ---------------------------------------------------------------------------

describe('segmentsIntersect', () => {
  it('běžný "čistý kříž" (X tvar) → true', () => {
    // (0,0)-(2,2) x (0,2)-(2,0)
    expect(segmentsIntersect(0, 0, 2, 2, 0, 2, 2, 0)).toBe(true);
  });

  it('rovnoběžné, nedotýkající se úsečky → false', () => {
    expect(segmentsIntersect(0, 0, 1, 0, 0, 1, 1, 1)).toBe(false);
  });

  it('kolmé, ale disjunktní úsečky → false', () => {
    expect(segmentsIntersect(0, 0, 1, 0, 5, 5, 5, 6)).toBe(false);
  });

  it('kolineární překrývající se úsečky (overlap) → true', () => {
    // Obě úsečky leží na ose X, [0,3] a [2,5] se překrývají v [2,3].
    expect(segmentsIntersect(0, 0, 3, 0, 2, 0, 5, 0)).toBe(true);
  });

  it('kolineární, ale nepřekrývající se úsečky (mezera mezi nimi) → false', () => {
    expect(segmentsIntersect(0, 0, 1, 0, 2, 0, 3, 0)).toBe(false);
  });

  it('kolineární úsečky dotýkající se přesně v jednom bodě → true', () => {
    expect(segmentsIntersect(0, 0, 1, 0, 1, 0, 2, 0)).toBe(true);
  });

  it('T-junction: vrchol jedné úsečky leží uprostřed druhé → true', () => {
    // Vrchol (1,0) leží přesně na úsečce (0,-1)-(2,1)? Zvolme jednodušší:
    // úsečka A: (0,0)-(2,0); bod (1,0) je vnitřní bod A.
    // úsečka B: (1,0)-(1,5) — začíná přesně na A, ale nekříží ji "čistě".
    expect(segmentsIntersect(0, 0, 2, 0, 1, 0, 1, 5)).toBe(true);
  });

  it('sdílený koncový bod (navazující linie) → true', () => {
    expect(segmentsIntersect(0, 0, 1, 1, 1, 1, 2, 0)).toBe(true);
  });

  it('zcela oddělené úsečky → false', () => {
    expect(segmentsIntersect(0, 0, 1, 1, 10, 10, 11, 11)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// hasSelfIntersection
// ---------------------------------------------------------------------------

describe('hasSelfIntersection', () => {
  it('jednoduchý čtverec (konvexní) → false', () => {
    const square = [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ];
    expect(hasSelfIntersection(square)).toBe(false);
  });

  it('"motýlek" (bowtie), hrany se kříží → true', () => {
    const bowtie = [
      { x: 0, y: 0 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
      { x: 0, y: 10 },
    ];
    expect(hasSelfIntersection(bowtie)).toBe(true);
  });

  it('méně než 4 body → false (příliš krátký na self-intersection)', () => {
    expect(hasSelfIntersection([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }])).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// pointInPolygon
// ---------------------------------------------------------------------------

describe('pointInPolygon', () => {
  // Čtverec 0..10 x 0..10
  const square = [0, 0, 10, 0, 10, 10, 0, 10];

  it('bod uvnitř polygonu → true', () => {
    expect(pointInPolygon(5, 5, square, 2)).toBe(true);
  });

  it('bod mimo polygon → false', () => {
    expect(pointInPolygon(15, 5, square, 2)).toBe(false);
  });

  it('bod přesně na vrcholu polygonu → true', () => {
    expect(pointInPolygon(0, 0, square, 2)).toBe(true);
  });

  it('bod přesně na hraně polygonu → true', () => {
    expect(pointInPolygon(5, 0, square, 2)).toBe(true);
  });

  it('degenerovaný polygon (méně než 3 body) → false', () => {
    expect(pointInPolygon(1, 1, [0, 0, 1, 1], 2)).toBe(false);
  });

  describe('s interior ringem (dírou)', () => {
    // Díra 3..7 x 3..7 uprostřed čtverce.
    const hole = [3, 3, 7, 3, 7, 7, 3, 7];

    it('bod uvnitř díry → false (mimo polygon)', () => {
      expect(pointInPolygon(5, 5, square, 2, [hole])).toBe(false);
    });

    it('bod mezi exteriorem a dírou (v "mezikruží") → true', () => {
      expect(pointInPolygon(1, 1, square, 2, [hole])).toBe(true);
    });

    it('bod přesně na hranici díry → true (hranice náleží polygonu)', () => {
      expect(pointInPolygon(3, 5, square, 2, [hole])).toBe(true);
    });

    it('bez zadaných interiors se chová jako plný polygon (zpětná kompatibilita)', () => {
      expect(pointInPolygon(5, 5, square, 2)).toBe(true);
    });
  });
});

// ---------------------------------------------------------------------------
// pointOnSegment
// ---------------------------------------------------------------------------

describe('pointOnSegment', () => {
  it('bod uprostřed úsečky → true', () => {
    expect(pointOnSegment(5, 0, 0, 0, 10, 0)).toBe(true);
  });

  it('bod na konci úsečky (koncový bod) → true', () => {
    expect(pointOnSegment(10, 0, 0, 0, 10, 0)).toBe(true);
  });

  it('bod mimo přímku úsečky → false', () => {
    expect(pointOnSegment(5, 1, 0, 0, 10, 0)).toBe(false);
  });

  it('bod kolineární, ale mimo úsek (za koncem) → false', () => {
    expect(pointOnSegment(15, 0, 0, 0, 10, 0)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// dist3D
// ---------------------------------------------------------------------------

describe('dist3D', () => {
  it('3D vzdálenost mezi dvěma body', () => {
    expect(dist3D(0, 0, 0, 3, 4, 0)).toBeCloseTo(5);
  });

  it('zahrnuje Z složku, pokud je k dispozici', () => {
    expect(dist3D(0, 0, 0, 0, 0, 5)).toBeCloseTo(5);
  });

  it('bez Z souřadnic počítá jen 2D vzdálenost', () => {
    expect(dist3D(0, 0, undefined, 3, 4, undefined)).toBeCloseTo(5);
  });

  it('vzdálenost totožných bodů je 0', () => {
    expect(dist3D(1, 1, 1, 1, 1, 1)).toBe(0);
  });
});
