import { describe, expect, it } from 'vitest';
import {
  checkGeometricValidity,
  checkPolygonMultiCurveConsistency,
  runAllChecks,
  runTopologyChecks,
} from '../../../src/1.4.3/index.js';
import type { JvfDtm, ObjektovyTyp, ZaznamObjektu } from 'jvf-dtm-types';

// ---------------------------------------------------------------------------
// Pomocné factory funkce
// ---------------------------------------------------------------------------

function makeDtm(objekty: ObjektovyTyp[]): JvfDtm {
  return {
    verze: '1.4.3',
    datumZapisu: '2024-01-01',
    typZapisu: 'kompletní zápis',
    objekty,
  };
}

function makeObjTyp(
  elementName: string,
  zaznamy: ZaznamObjektu[]
): ObjektovyTyp {
  return {
    elementName,
    nazev: elementName,
    codeBase: 'TEST',
    codeSuffix: '00',
    kategorieObjektu: 'TEST',
    skupinaObjektu: 'TEST',
    obsahovaCast: 'ZPS',
    zaznamy,
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

// ---------------------------------------------------------------------------
// Vrstva 1 — Geometrická validita
// ---------------------------------------------------------------------------

describe('checkGeometricValidity — Point', () => {
  it('platný Point neprodukuje chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('PodrobnyBodZPS', [
        makeZaznam([
          {
            type: 'Point',
            data: { id: 'P1', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [-520813.83, -1164286.0, 267.94] },
          },
        ], 'ID1'),
      ]),
    ]);
    expect(checkGeometricValidity(dtm)).toEqual([]);
  });

  it('detekuje NaN v souřadnicích Pointu', () => {
    const dtm = makeDtm([
      makeObjTyp('BodTest', [
        makeZaznam([
          {
            type: 'Point',
            data: { id: 'P2', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [NaN, -1164286.0, 267.94] },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors).toHaveLength(1);
    expect(errors[0]?.code).toBe('INVALID_COORDINATE');
  });

  it('detekuje Infinity v souřadnicích Pointu', () => {
    const dtm = makeDtm([
      makeObjTyp('BodTest', [
        makeZaznam([
          {
            type: 'Point',
            data: { id: 'P3', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [-520813.83, Infinity, 267.94] },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors[0]?.code).toBe('INVALID_COORDINATE');
  });

  it('detekuje srsDimension mismatch u Pointu', () => {
    const dtm = makeDtm([
      makeObjTyp('BodTest', [
        makeZaznam([
          {
            type: 'Point',
            data: { id: 'P4', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [-520813.83, -1164286.0] },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors[0]?.code).toBe('SRS_DIMENSION_MISMATCH');
  });
});

describe('checkGeometricValidity — LineString', () => {
  it('platný LineString (2 body) neprodukuje chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('OsaTest', [
        makeZaznam([
          {
            type: 'LineString',
            data: {
              id: 'LS1',
              srsName: 'EPSG:5514',
              srsDimension: 3,
              coordinates: [-500000, -1100000, 300, -499000, -1100100, 301],
            },
          },
        ]),
      ]),
    ]);
    expect(checkGeometricValidity(dtm)).toEqual([]);
  });

  it('detekuje LineString s méně než 2 body', () => {
    const dtm = makeDtm([
      makeObjTyp('OsaTest', [
        makeZaznam([
          {
            type: 'LineString',
            data: {
              id: 'LS2',
              srsName: 'EPSG:5514',
              srsDimension: 3,
              coordinates: [-500000, -1100000, 300],
            },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors[0]?.code).toBe('LINESTRING_TOO_FEW_POINTS');
  });
});

describe('checkGeometricValidity — Polygon', () => {
  // Platný čtvercový polygon (S-JTSK-like koordináty)
  const validSquare = [-500000, -1100000, -499000, -1100000, -499000, -1101000, -500000, -1101000, -500000, -1100000];

  it('platný Polygon neprodukuje chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: 'POL1', srsName: 'EPSG:5514', srsDimension: 2, exterior: validSquare, interiors: [] },
          },
        ]),
      ]),
    ]);
    expect(checkGeometricValidity(dtm)).toEqual([]);
  });

  it('detekuje neuzavřený Polygon', () => {
    const open = [-500000, -1100000, -499000, -1100000, -499000, -1101000, -500000, -1101000];
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: 'POL2', srsName: 'EPSG:5514', srsDimension: 2, exterior: open, interiors: [] },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors[0]?.code).toBe('RING_NOT_CLOSED');
  });

  it('detekuje Polygon s méně než 4 body', () => {
    const tiny = [-500000, -1100000, -499000, -1100000, -500000, -1100000]; // 3 body
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: 'POL3', srsName: 'EPSG:5514', srsDimension: 2, exterior: tiny, interiors: [] },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors[0]?.code).toBe('RING_TOO_FEW_POINTS');
  });

  it('detekuje self-intersection exterioru', () => {
    // Tvar motýla (samokřížící se)
    const bowtie = [
      -500000, -1100000,
      -499000, -1101000,
      -499000, -1100000,
      -500000, -1101000,
      -500000, -1100000, // uzavírací
    ];
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: 'POL4', srsName: 'EPSG:5514', srsDimension: 2, exterior: bowtie, interiors: [] },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors.some(e => e.code === 'RING_SELF_INTERSECTION')).toBe(true);
  });

  it('kontroluje i interior ring', () => {
    const open = [-500100, -1100100, -499900, -1100100, -499900, -1100900]; // nekompletní interior
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: {
              id: 'POL5',
              srsName: 'EPSG:5514',
              srsDimension: 2,
              exterior: validSquare,
              interiors: [open],
            },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors.some(e => e.code === 'RING_TOO_FEW_POINTS')).toBe(true);
  });
});

describe('checkGeometricValidity — MultiCurve', () => {
  it('platný MultiCurve neprodukuje chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('TrasaTest', [
        makeZaznam([
          {
            type: 'MultiCurve',
            data: {
              id: 'MC1',
              srsName: 'EPSG:5514',
              srsDimension: 3,
              curves: [
                { id: 'C1', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [-500000, -1100000, 300, -499000, -1100100, 301] },
                { id: 'C2', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [-499000, -1100100, 301, -498000, -1100200, 302] },
              ],
            },
          },
        ]),
      ]),
    ]);
    expect(checkGeometricValidity(dtm)).toEqual([]);
  });

  it('detekuje segment MultiCurve s méně než 2 body', () => {
    const dtm = makeDtm([
      makeObjTyp('TrasaTest', [
        makeZaznam([
          {
            type: 'MultiCurve',
            data: {
              id: 'MC2',
              srsName: 'EPSG:5514',
              srsDimension: 3,
              curves: [
                { id: 'C1', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [-500000, -1100000, 300] },
              ],
            },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors[0]?.code).toBe('LINESTRING_TOO_FEW_POINTS');
  });
});

describe('checkGeometricValidity — objectId a geometryIndex', () => {
  it('správně předává objectId a geometryIndex do chybového záznamu', () => {
    const dtm = makeDtm([
      makeObjTyp('BodTest', [
        makeZaznam(
          [
            {
              type: 'Point',
              data: { id: 'P1', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [NaN, 0, 0] },
            },
          ],
          'GML_ID_42'
        ),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors[0]?.objectId).toBe('GML_ID_42');
    expect(errors[0]?.geometryIndex).toBe(0);
    expect(errors[0]?.objektovyTyp).toBe('BodTest');
  });

  it('pro záznam bez id není objectId v chybě', () => {
    const dtm = makeDtm([
      makeObjTyp('BodTest', [
        makeZaznam([
          {
            type: 'Point',
            data: { id: 'P1', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [NaN, 0, 0] },
          },
        ]),
      ]),
    ]);
    const errors = checkGeometricValidity(dtm);
    expect(errors[0]).not.toHaveProperty('objectId');
  });
});

// ---------------------------------------------------------------------------
// Vrstva 2 — Polygon ↔ MultiCurve konzistence
// ---------------------------------------------------------------------------

describe('checkPolygonMultiCurveConsistency', () => {
  // Čtvercový polygon (bez Z)
  const squareXY = [-500000, -1100000, -499000, -1100000, -499000, -1101000, -500000, -1101000, -500000, -1100000];

  // Stejný čtverec jako MultiCurve (4 segmenty)
  function squareMultiCurve(srsDimension: number): ZaznamObjektu['geometrie'][number] {
    const z = srsDimension === 3 ? 300 : undefined;

    const coords = (pts: [number, number][]): number[] =>
      pts.flatMap(([x, y]) => z !== undefined ? [x, y, z] : [x, y]);

    return {
      type: 'MultiCurve',
      data: {
        id: undefined,
        srsName: 'EPSG:5514',
        srsDimension,
        curves: [
          { id: undefined, srsName: 'EPSG:5514', srsDimension, coordinates: coords([[-500000, -1100000], [-499000, -1100000]]) },
          { id: undefined, srsName: 'EPSG:5514', srsDimension, coordinates: coords([[-499000, -1100000], [-499000, -1101000]]) },
          { id: undefined, srsName: 'EPSG:5514', srsDimension, coordinates: coords([[-499000, -1101000], [-500000, -1101000]]) },
          { id: undefined, srsName: 'EPSG:5514', srsDimension, coordinates: coords([[-500000, -1101000], [-500000, -1100000]]) },
        ],
      },
    };
  }

  it('shodný Polygon a MultiCurve (stejné pořadí) — žádné chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, exterior: squareXY, interiors: [] },
          },
          squareMultiCurve(2),
        ]),
      ]),
    ]);
    expect(checkPolygonMultiCurveConsistency(dtm)).toEqual([]);
  });

  it('shodný Polygon a MultiCurve (3D MultiCurve) — žádné chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, exterior: squareXY, interiors: [] },
          },
          squareMultiCurve(3),
        ]),
      ]),
    ]);
    expect(checkPolygonMultiCurveConsistency(dtm)).toEqual([]);
  });

  it('záznamy pouze s Polygonem (bez MultiCurve) — žádné chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, exterior: squareXY, interiors: [] },
          },
        ]),
      ]),
    ]);
    expect(checkPolygonMultiCurveConsistency(dtm)).toEqual([]);
  });

  it('detekuje rozdílný počet bodů', () => {
    // MultiCurve s trojúhelníkem místo čtverce
    const triangleMC: ZaznamObjektu['geometrie'][number] = {
      type: 'MultiCurve',
      data: {
        id: undefined,
        srsName: 'EPSG:5514',
        srsDimension: 2,
        curves: [
          { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, coordinates: [-500000, -1100000, -499000, -1100000] },
          { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, coordinates: [-499000, -1100000, -499500, -1101000] },
          { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, coordinates: [-499500, -1101000, -500000, -1100000] },
        ],
      },
    };
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, exterior: squareXY, interiors: [] },
          },
          triangleMC,
        ]),
      ]),
    ]);
    const errors = checkPolygonMultiCurveConsistency(dtm);
    expect(errors[0]?.code).toBe('POLYGON_MULTICURVE_POINT_COUNT_MISMATCH');
  });

  it('detekuje rozdílné souřadnice (stejný počet bodů)', () => {
    const shiftedMC: ZaznamObjektu['geometrie'][number] = {
      type: 'MultiCurve',
      data: {
        id: undefined,
        srsName: 'EPSG:5514',
        srsDimension: 2,
        curves: [
          { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, coordinates: [-510000, -1100000, -509000, -1100000] },
          { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, coordinates: [-509000, -1100000, -509000, -1101000] },
          { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, coordinates: [-509000, -1101000, -510000, -1101000] },
          { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, coordinates: [-510000, -1101000, -510000, -1100000] },
        ],
      },
    };
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, exterior: squareXY, interiors: [] },
          },
          shiftedMC,
        ]),
      ]),
    ]);
    const errors = checkPolygonMultiCurveConsistency(dtm);
    expect(errors[0]?.code).toBe('POLYGON_MULTICURVE_COORDS_MISMATCH');
  });
});

// ---------------------------------------------------------------------------
// runTopologyChecks + runAllChecks
// ---------------------------------------------------------------------------

describe('runTopologyChecks', () => {
  it('vrátí prázdné pole pro prázdný DTM', () => {
    const dtm = makeDtm([]);
    expect(runTopologyChecks(dtm, [checkGeometricValidity])).toEqual([]);
    expect(runTopologyChecks(dtm, [checkPolygonMultiCurveConsistency])).toEqual([]);
  });

  it('agreguje chyby z více kontrol', () => {
    // Point s NaN → chyba z Vrstvy 1
    const dtm = makeDtm([
      makeObjTyp('BodTest', [
        makeZaznam([
          {
            type: 'Point',
            data: { id: 'P', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [NaN, 0, 0] },
          },
        ]),
      ]),
    ]);
    const errors = runTopologyChecks(dtm, [
      checkGeometricValidity,
      checkPolygonMultiCurveConsistency,
    ]);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]?.code).toBe('INVALID_COORDINATE');
  });
});

describe('runAllChecks', () => {
  it('čistý DTM → žádné chyby', () => {
    const squareXY = [-500000, -1100000, -499000, -1100000, -499000, -1101000, -500000, -1101000, -500000, -1100000];
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([
          {
            type: 'Polygon',
            data: { id: undefined, srsName: 'EPSG:5514', srsDimension: 2, exterior: squareXY, interiors: [] },
          },
        ], 'OBJ1'),
      ]),
    ]);
    expect(runAllChecks(dtm)).toEqual([]);
  });
});
