import { describe, expect, it } from 'vitest';
import {
  checkCoordinateBounds,
  checkCoordinatePrecision,
  checkDuplicateLines,
  checkDuplicatePoints,
  checkLineSelfIntersection,
  checkMinSegmentLength,
  checkPointProximity,
  checkZeroLengthSegments,
  runAllChecks,
  DUPLICATE_Z_TOLERANCE,
  MIN_DISTANCE_TOLERANCE,
  SJTSK_BOUNDS,
} from '../../../src/1.4.3/index.js';
import type { JvfDtm, ObjektovyTyp, ZaznamObjektu } from 'jvf-dtm-types';

// ---------------------------------------------------------------------------
// Factory helpers
// ---------------------------------------------------------------------------

function makeDtm(objekty: ObjektovyTyp[]): JvfDtm {
  return { verze: '1.4.3', datumZapisu: '2024-01-01', typZapisu: 'kompletní zápis', objekty };
}

function makeObjTyp(
  elementName: string,
  zaznamy: ZaznamObjektu[],
  obsahovaCast: ObjektovyTyp['obsahovaCast'] = 'ZPS'
): ObjektovyTyp {
  return {
    elementName, nazev: elementName, codeBase: 'TEST', codeSuffix: '00',
    kategorieObjektu: 'TEST', skupinaObjektu: 'TEST', obsahovaCast, zaznamy,
  };
}

function makeZaznam(
  geometrie: ZaznamObjektu['geometrie'],
  id?: string
): ZaznamObjektu {
  return {
    zapisObjektu: 'i',
    commonAttributes: id !== undefined ? { id } : {},
    attributes: {},
    geometrie,
  };
}

function makePoint(x: number, y: number, z = 300.0, id = 'P1'): ZaznamObjektu['geometrie'][number] {
  return {
    type: 'Point',
    data: { id, srsName: 'EPSG:5514', srsDimension: 3, coordinates: [x, y, z] },
  };
}

function makeLine(pts: [number, number, number][], id?: string): ZaznamObjektu['geometrie'][number] {
  return {
    type: 'LineString',
    data: {
      id,
      srsName: 'EPSG:5514',
      srsDimension: 3,
      coordinates: pts.flatMap(([x, y, z]) => [x, y, z]),
    },
  };
}

// Platný bod uprostřed ČR (S-JTSK)
const VALID_X = -600_000;
const VALID_Y = -1_100_000;
const VALID_Z = 300.0;

// ---------------------------------------------------------------------------
// Kontrola 1.5 — Rozsah souřadnic S-JTSK
// ---------------------------------------------------------------------------

describe('checkCoordinateBounds', () => {
  it('platné souřadnice uvnitř ČR → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'ID1'),
    ])]);
    expect(checkCoordinateBounds(dtm)).toEqual([]);
  });

  it('X mimo rozsah → COORD_OUT_OF_BOUNDS_XY', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(-200_000, VALID_Y, VALID_Z)]),
    ])]);
    const errors = checkCoordinateBounds(dtm);
    expect(errors[0]?.code).toBe('COORD_OUT_OF_BOUNDS_XY');
    expect(errors[0]?.severity).toBe('error');
  });

  it('Y mimo rozsah → COORD_OUT_OF_BOUNDS_XY', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(VALID_X, -500_000, VALID_Z)]),
    ])]);
    expect(checkCoordinateBounds(dtm)[0]?.code).toBe('COORD_OUT_OF_BOUNDS_XY');
  });

  it('Z mimo rozsah pro ZPS → COORD_OUT_OF_BOUNDS_Z', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(VALID_X, VALID_Y, 2000)]), // 2000 m > max 1620 m
    ], 'ZPS')]);
    const errors = checkCoordinateBounds(dtm);
    expect(errors[0]?.code).toBe('COORD_OUT_OF_BOUNDS_Z');
  });

  it('Z mimo rozsah pro ne-ZPS (DI) → žádná Z chyba', () => {
    const dtm = makeDtm([makeObjTyp('ObjektDI', [
      makeZaznam([makePoint(VALID_X, VALID_Y, 2000)]),
    ], 'DI')]);
    // Z se kontroluje pouze pro ZPS
    expect(checkCoordinateBounds(dtm)).toEqual([]);
  });

  it('Z = 0 pro defbod → žádná chyba (min pro defbod je 0)', () => {
    const dtm = makeDtm([makeObjTyp('BudovaDefBod', [
      makeZaznam([makePoint(VALID_X, VALID_Y, 0)]),
    ], 'ZPS')]);
    expect(checkCoordinateBounds(dtm)).toEqual([]);
  });

  it('Z = 0 pro normální ZPS bod → COORD_OUT_OF_BOUNDS_Z (min ZPS = 1 m)', () => {
    const dtm = makeDtm([makeObjTyp('PodrobnyBodZPS', [
      makeZaznam([makePoint(VALID_X, VALID_Y, 0)]),
    ], 'ZPS')]);
    const errors = checkCoordinateBounds(dtm);
    expect(errors[0]?.code).toBe('COORD_OUT_OF_BOUNDS_Z');
  });

  it('krajní hodnoty rozsahu XY jsou povoleny', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(SJTSK_BOUNDS.xMin, SJTSK_BOUNDS.yMin, VALID_Z)]),
      makeZaznam([makePoint(SJTSK_BOUNDS.xMax, SJTSK_BOUNDS.yMax, VALID_Z)]),
    ])]);
    expect(checkCoordinateBounds(dtm)).toEqual([]);
  });

  it('platná linie → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([[VALID_X, VALID_Y, VALID_Z], [VALID_X - 100, VALID_Y - 100, VALID_Z]])]),
    ])]);
    expect(checkCoordinateBounds(dtm)).toEqual([]);
  });

  it('linie s bodem mimo rozsah → chyba', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([[VALID_X, VALID_Y, VALID_Z], [-200_000, VALID_Y, VALID_Z]])]),
    ])]);
    expect(checkCoordinateBounds(dtm)[0]?.code).toBe('COORD_OUT_OF_BOUNDS_XY');
  });
});

// ---------------------------------------------------------------------------
// Kontrola 1.6 — Přesnost souřadnic na cm
// ---------------------------------------------------------------------------

describe('checkCoordinatePrecision', () => {
  it('souřadnice na cm (2 des. místa) → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(-600000.12, -1100000.34, 300.56)]),
    ])]);
    expect(checkCoordinatePrecision(dtm)).toEqual([]);
  });

  it('souřadnice na mm (3 des. místa) → COORD_PRECISION_EXCEEDED', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(-600000.123, VALID_Y, VALID_Z)]),
    ])]);
    const errors = checkCoordinatePrecision(dtm);
    expect(errors[0]?.code).toBe('COORD_PRECISION_EXCEEDED');
    expect(errors[0]?.severity).toBe('error');
  });

  it('celé číslo → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(-600000, -1100000, 300)]),
    ])]);
    expect(checkCoordinatePrecision(dtm)).toEqual([]);
  });

  it('Z s přílišnou přesností → chyba', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(VALID_X, VALID_Y, 300.001)]),
    ])]);
    expect(checkCoordinatePrecision(dtm)[0]?.code).toBe('COORD_PRECISION_EXCEEDED');
  });
});

// ---------------------------------------------------------------------------
// Kontrola 3.4 — Self-intersection linií
// ---------------------------------------------------------------------------

describe('checkLineSelfIntersection', () => {
  it('přímá linie → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([
        [VALID_X, VALID_Y, VALID_Z],
        [VALID_X - 100, VALID_Y, VALID_Z],
        [VALID_X - 200, VALID_Y, VALID_Z],
      ])]),
    ])]);
    expect(checkLineSelfIntersection(dtm)).toEqual([]);
  });

  it('samokřížící se linie → LINE_SELF_INTERSECTION', () => {
    // Tvar Z-kříže
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([
        [VALID_X, VALID_Y, VALID_Z],
        [VALID_X - 200, VALID_Y - 200, VALID_Z],
        [VALID_X - 200, VALID_Y, VALID_Z],
        [VALID_X, VALID_Y - 200, VALID_Z],
      ])]),
    ])]);
    const errors = checkLineSelfIntersection(dtm);
    expect(errors[0]?.code).toBe('LINE_SELF_INTERSECTION');
    expect(errors[0]?.severity).toBe('error');
  });

  it('Polygon ring se touto kontrolou netýká', () => {
    const squareXY = [VALID_X, VALID_Y, VALID_X - 100, VALID_Y, VALID_X - 100, VALID_Y - 100, VALID_X, VALID_Y - 100, VALID_X, VALID_Y];
    const dtm = makeDtm([makeObjTyp('BudovaPlocha', [
      makeZaznam([{
        type: 'Polygon',
        data: { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, exterior: squareXY, interiors: [] },
      }]),
    ])]);
    expect(checkLineSelfIntersection(dtm)).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Kontrola 3.5 — Nulová délka segmentu
// ---------------------------------------------------------------------------

describe('checkZeroLengthSegments', () => {
  it('normální linie → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([
        [VALID_X, VALID_Y, VALID_Z],
        [VALID_X - 100, VALID_Y, VALID_Z],
      ])]),
    ])]);
    expect(checkZeroLengthSegments(dtm)).toEqual([]);
  });

  it('segment s nulovým bodem → SEGMENT_ZERO_LENGTH', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([
        [VALID_X, VALID_Y, VALID_Z],
        [VALID_X, VALID_Y, VALID_Z], // duplikát
        [VALID_X - 100, VALID_Y, VALID_Z],
      ])]),
    ])]);
    const errors = checkZeroLengthSegments(dtm);
    expect(errors[0]?.code).toBe('SEGMENT_ZERO_LENGTH');
    expect(errors[0]?.severity).toBe('error');
  });

  it('pouze polygon → žádné chyby z této kontroly', () => {
    const dtm = makeDtm([makeObjTyp('BudovaPlocha', [
      makeZaznam([{
        type: 'Polygon',
        data: {
          id: undefined, srsName: 'EPSG:5514', srsDimension: 2,
          exterior: [VALID_X, VALID_Y, VALID_X - 100, VALID_Y, VALID_X - 100, VALID_Y - 100, VALID_X, VALID_Y - 100, VALID_X, VALID_Y],
          interiors: [],
        },
      }]),
    ])]);
    expect(checkZeroLengthSegments(dtm)).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Kontrola 3.6 — Duplicity liniových prvků
// ---------------------------------------------------------------------------

describe('checkDuplicateLines', () => {
  const lineA: ZaznamObjektu['geometrie'][number] = makeLine([
    [VALID_X, VALID_Y, VALID_Z],
    [VALID_X - 100, VALID_Y, VALID_Z],
  ]);

  it('dvě různé linie → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([lineA], 'L1'),
      makeZaznam([makeLine([[VALID_X - 200, VALID_Y, VALID_Z], [VALID_X - 300, VALID_Y, VALID_Z]])], 'L2'),
    ])]);
    expect(checkDuplicateLines(dtm)).toEqual([]);
  });

  it('dvě identické linie (XYZ) → DUPLICATE_LINE_ERROR', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([lineA], 'L1'),
      makeZaznam([lineA], 'L2'),
    ])]);
    const errors = checkDuplicateLines(dtm);
    expect(errors[0]?.code).toBe('DUPLICATE_LINE_ERROR');
    expect(errors[0]?.severity).toBe('error');
  });

  it('dvě linie s identickými XY, malý Z rozdíl → DUPLICATE_LINE_WARNING', () => {
    const lineAlt: ZaznamObjektu['geometrie'][number] = makeLine([
      [VALID_X, VALID_Y, VALID_Z + 0.05], // Z diff = 0.05 < 0.12
      [VALID_X - 100, VALID_Y, VALID_Z + 0.05],
    ]);
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([lineA], 'L1'),
      makeZaznam([lineAlt], 'L2'),
    ])]);
    const errors = checkDuplicateLines(dtm);
    expect(errors[0]?.code).toBe('DUPLICATE_LINE_WARNING');
    expect(errors[0]?.severity).toBe('warning');
  });

  it('dvě linie s identickými XY, Z rozdíl >= 0.12 → žádné chyby', () => {
    const lineAlt: ZaznamObjektu['geometrie'][number] = makeLine([
      [VALID_X, VALID_Y, VALID_Z + DUPLICATE_Z_TOLERANCE],
      [VALID_X - 100, VALID_Y, VALID_Z + DUPLICATE_Z_TOLERANCE],
    ]);
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([lineA], 'L1'),
      makeZaznam([lineAlt], 'L2'),
    ])]);
    expect(checkDuplicateLines(dtm)).toEqual([]);
  });

  it('linie v opačném pořadí bodů → DUPLICATE_LINE_ERROR', () => {
    const lineRev: ZaznamObjektu['geometrie'][number] = makeLine([
      [VALID_X - 100, VALID_Y, VALID_Z],
      [VALID_X, VALID_Y, VALID_Z],
    ]);
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([lineA], 'L1'),
      makeZaznam([lineRev], 'L2'),
    ])]);
    const errors = checkDuplicateLines(dtm);
    expect(errors[0]?.code).toBe('DUPLICATE_LINE_ERROR');
  });
});

// ---------------------------------------------------------------------------
// Kontrola 3.8 — Duplicita bodů
// ---------------------------------------------------------------------------

describe('checkDuplicatePoints', () => {
  it('dva různé body → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('PodrobnyBodZPS', [
      makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B1'),
      makeZaznam([makePoint(VALID_X - 10, VALID_Y, VALID_Z)], 'B2'),
    ])]);
    expect(checkDuplicatePoints(dtm)).toEqual([]);
  });

  it('dva body se stejnými XYZ → DUPLICATE_POINT', () => {
    const dtm = makeDtm([makeObjTyp('PodrobnyBodZPS', [
      makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B1'),
      makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B2'),
    ])]);
    const errors = checkDuplicatePoints(dtm);
    expect(errors[0]?.code).toBe('DUPLICATE_POINT');
    expect(errors[0]?.severity).toBe('error');
  });

  it('dva definiční body se stejnými XY, různým Z → DUPLICATE_POINT (2D kontrola)', () => {
    const dtm = makeDtm([makeObjTyp('BudovaDefBod', [
      makeZaznam([makePoint(VALID_X, VALID_Y, 300)], 'D1'),
      makeZaznam([makePoint(VALID_X, VALID_Y, 350)], 'D2'), // různé Z, ale defbod = 2D
    ])]);
    const errors = checkDuplicatePoints(dtm);
    expect(errors[0]?.code).toBe('DUPLICATE_POINT');
  });

  it('dva normální body se stejnými XY, různými Z → žádné chyby (3D kontrola)', () => {
    const dtm = makeDtm([makeObjTyp('PodrobnyBodZPS', [
      makeZaznam([makePoint(VALID_X, VALID_Y, 300)], 'B1'),
      makeZaznam([makePoint(VALID_X, VALID_Y, 400)], 'B2'), // různé Z
    ])]);
    expect(checkDuplicatePoints(dtm)).toEqual([]);
  });

  it('duplicita ve dvou různých objektových typech → žádná křížová chyba', () => {
    // Kontrola je per-objektový-typ, ne globální
    const dtm = makeDtm([
      makeObjTyp('PodrobnyBodZPS', [makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B1')]),
      makeObjTyp('BodovyObjekt', [makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B2')]),
    ]);
    expect(checkDuplicatePoints(dtm)).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Kontrola 3.9 — Blízkost bodů
// ---------------------------------------------------------------------------

describe('checkPointProximity', () => {
  it('body dostatečně daleko → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B1'),
      makeZaznam([makePoint(VALID_X - 1.0, VALID_Y, VALID_Z)], 'B2'), // 1 m
    ])]);
    expect(checkPointProximity(dtm)).toEqual([]);
  });

  it('body blíže než 0,05 m → POINTS_TOO_CLOSE (warning)', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B1'),
      makeZaznam([makePoint(VALID_X - 0.03, VALID_Y, VALID_Z)], 'B2'), // 3 cm
    ])]);
    const errors = checkPointProximity(dtm);
    expect(errors[0]?.code).toBe('POINTS_TOO_CLOSE');
    expect(errors[0]?.severity).toBe('warning');
  });

  it('přesně na hranici tolerance → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B1'),
      makeZaznam([makePoint(VALID_X - MIN_DISTANCE_TOLERANCE, VALID_Y, VALID_Z)], 'B2'),
    ])]);
    expect(checkPointProximity(dtm)).toEqual([]);
  });

  it('identické body (d=0) → žádné POINTS_TOO_CLOSE (řeší 3.8)', () => {
    // d > 0 je podmínka — nulová vzdálenost je duplicita, ne blízkost
    const dtm = makeDtm([makeObjTyp('BodTest', [
      makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B1'),
      makeZaznam([makePoint(VALID_X, VALID_Y, VALID_Z)], 'B2'),
    ])]);
    const errors = checkPointProximity(dtm).filter(e => e.code === 'POINTS_TOO_CLOSE');
    expect(errors).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Kontrola 3.10 — Minimální délka segmentu
// ---------------------------------------------------------------------------

describe('checkMinSegmentLength', () => {
  it('normální segment → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([[VALID_X, VALID_Y, VALID_Z], [VALID_X - 1.0, VALID_Y, VALID_Z]])]),
    ])]);
    expect(checkMinSegmentLength(dtm)).toEqual([]);
  });

  it('segment kratší než 0,05 m → SEGMENT_TOO_SHORT (warning)', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([[VALID_X, VALID_Y, VALID_Z], [VALID_X - 0.03, VALID_Y, VALID_Z]])]),
    ])]);
    const errors = checkMinSegmentLength(dtm);
    expect(errors[0]?.code).toBe('SEGMENT_TOO_SHORT');
    expect(errors[0]?.severity).toBe('warning');
  });

  it('přesně na hranici tolerance → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([[VALID_X, VALID_Y, VALID_Z], [VALID_X - MIN_DISTANCE_TOLERANCE, VALID_Y, VALID_Z]])]),
    ])]);
    expect(checkMinSegmentLength(dtm)).toEqual([]);
  });

  it('segment nulové délky → žádné SEGMENT_TOO_SHORT (řeší 3.5)', () => {
    // d === 0 nesplňuje podmínku d > 0
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([[VALID_X, VALID_Y, VALID_Z], [VALID_X, VALID_Y, VALID_Z]])]),
    ])]);
    const errors = checkMinSegmentLength(dtm).filter(e => e.code === 'SEGMENT_TOO_SHORT');
    expect(errors).toHaveLength(0);
  });

  it('polygon → žádné chyby z této kontroly', () => {
    const dtm = makeDtm([makeObjTyp('BudovaPlocha', [
      makeZaznam([{
        type: 'Polygon',
        data: {
          id: undefined, srsName: 'EPSG:5514', srsDimension: 2,
          exterior: [VALID_X, VALID_Y, VALID_X - 100, VALID_Y, VALID_X - 100, VALID_Y - 100, VALID_X, VALID_Y - 100, VALID_X, VALID_Y],
          interiors: [],
        },
      }]),
    ])]);
    expect(checkMinSegmentLength(dtm)).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// runAllChecks — integrace
// ---------------------------------------------------------------------------

describe('runAllChecks — integrace', () => {
  it('čistý DTM → žádné chyby', () => {
    const dtm = makeDtm([makeObjTyp('OsaTest', [
      makeZaznam([makeLine([[VALID_X, VALID_Y, VALID_Z], [VALID_X - 100, VALID_Y, VALID_Z]])], 'L1'),
    ])]);
    expect(runAllChecks(dtm)).toEqual([]);
  });

  it('DTM s více vadami → vrátí chyby ze všech kontrol', () => {
    const dtm = makeDtm([
      // Bod mimo rozsah (1.5)
      makeObjTyp('BodTest', [makeZaznam([makePoint(-200_000, VALID_Y, VALID_Z)], 'BAD_XY')]),
      // Bod s přesností na mm (1.6)
      makeObjTyp('BodTest2', [makeZaznam([makePoint(VALID_X + 0.001, VALID_Y, VALID_Z)], 'BAD_PREC')]),
    ]);
    const errors = runAllChecks(dtm);
    const codes = errors.map(e => e.code);
    expect(codes).toContain('COORD_OUT_OF_BOUNDS_XY');
    expect(codes).toContain('COORD_PRECISION_EXCEEDED');
  });
});
