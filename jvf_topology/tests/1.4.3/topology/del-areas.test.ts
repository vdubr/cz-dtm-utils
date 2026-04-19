import { describe, expect, it } from 'vitest';
import { checkDelAreaContainsDefBodPlocha } from '../../../src/1.4.3/index.js';
import type {
  DoprovodneInformace,
  GmlPolygon,
  JvfDtm,
  ObjektovyTyp,
  OblastKompletniZPSTyp,
  OblastKompletniZPSZaznam,
  ZaznamObjektu,
} from 'jvf-dtm-types';

// ---------------------------------------------------------------------------
// Factory helpers (sjednocené s layer3.test.ts, rozšířené o doprovodneInformace)
// ---------------------------------------------------------------------------

function makeDtm(
  objekty: ObjektovyTyp[],
  doprovodneInformace?: DoprovodneInformace
): JvfDtm {
  return {
    verze: '1.4.3',
    datumZapisu: '2024-01-01',
    typZapisu: 'kompletní zápis',
    objekty,
    ...(doprovodneInformace !== undefined ? { doprovodneInformace } : {}),
  };
}

function makeObjTyp(
  elementName: string,
  zaznamy: ZaznamObjektu[],
  obsahovaCast: ObjektovyTyp['obsahovaCast'] = 'ZPS'
): ObjektovyTyp {
  return {
    elementName,
    nazev: elementName,
    codeBase: 'TEST',
    codeSuffix: '00',
    kategorieObjektu: 'TEST',
    skupinaObjektu: 'TEST',
    obsahovaCast,
    zaznamy,
  };
}

function makeZaznam(
  geometrie: ZaznamObjektu['geometrie'],
  id?: string,
  zapisObjektu: ZaznamObjektu['zapisObjektu'] = 'u'
): ZaznamObjektu {
  return {
    zapisObjektu,
    commonAttributes: id !== undefined ? { id } : {},
    attributes: {},
    geometrie,
  };
}

// Čtvercový polygon 100×100 m se středem v (0,0) — XY
const SQUARE_EXTERIOR_2D = [
  -50, -50,
   50, -50,
   50,  50,
  -50,  50,
  -50, -50,
];

function makePolygon(
  exterior = SQUARE_EXTERIOR_2D,
  id?: string
): ZaznamObjektu['geometrie'][number] {
  return {
    type: 'Polygon',
    data: { id, srsName: 'EPSG:5514', srsDimension: 2, exterior, interiors: [] },
  };
}

function makePoint(
  x: number,
  y: number,
  z = 300.0,
  id?: string
): ZaznamObjektu['geometrie'][number] {
  return {
    type: 'Point',
    data: {
      id: id ?? 'P1',
      srsName: 'EPSG:5514',
      srsDimension: 3,
      coordinates: [x, y, z],
    },
  };
}

function makeGmlPolygon(exterior = SQUARE_EXTERIOR_2D): GmlPolygon {
  return {
    id: undefined,
    srsName: 'EPSG:5514',
    srsDimension: 2,
    exterior,
    interiors: [],
  };
}

function makeOblastZaznam(
  typ: OblastKompletniZPSTyp,
  plocha?: GmlPolygon
): OblastKompletniZPSZaznam {
  return {
    typ,
    commonAttributes: {},
    attributes: {},
    ...(plocha !== undefined ? { plocha } : {}),
  };
}

// ---------------------------------------------------------------------------
// checkDelAreaContainsDefBodPlocha
// ---------------------------------------------------------------------------

describe('checkDelAreaContainsDefBodPlocha', () => {
  it('bez doprovodneInformace → žádné chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaDefinicniBod', [makeZaznam([makePoint(0, 0)], 'DB1')]),
    ]);
    expect(checkDelAreaContainsDefBodPlocha(dtm)).toEqual([]);
  });

  it('DEL oblast + def. bod uvnitř → DEL_AREA_CONTAINS_DEFBOD_PLOCHA', () => {
    const dtm = makeDtm(
      [makeObjTyp('BudovaDefinicniBod', [makeZaznam([makePoint(0, 0)], 'DB1')])],
      { oblastiKompletniZPS: [makeOblastZaznam('DEL', makeGmlPolygon())] }
    );
    const errors = checkDelAreaContainsDefBodPlocha(dtm);
    expect(errors).toHaveLength(1);
    expect(errors[0]?.code).toBe('DEL_AREA_CONTAINS_DEFBOD_PLOCHA');
    expect(errors[0]?.severity).toBe('warning');
    expect(errors[0]?.objektovyTyp).toBe('BudovaDefinicniBod');
    expect(errors[0]?.objectId).toBe('DB1');
  });

  it('DEL oblast + def. bod mimo → žádné chyby', () => {
    const dtm = makeDtm(
      [makeObjTyp('BudovaDefinicniBod', [makeZaznam([makePoint(200, 200)], 'DB_FAR')])],
      { oblastiKompletniZPS: [makeOblastZaznam('DEL', makeGmlPolygon())] }
    );
    expect(checkDelAreaContainsDefBodPlocha(dtm)).toEqual([]);
  });

  it('NEW oblast s bodem uvnitř → žádné chyby (kontroluje se jen DEL)', () => {
    const dtm = makeDtm(
      [makeObjTyp('BudovaDefinicniBod', [makeZaznam([makePoint(0, 0)], 'DB1')])],
      { oblastiKompletniZPS: [makeOblastZaznam('NEW', makeGmlPolygon())] }
    );
    expect(checkDelAreaContainsDefBodPlocha(dtm)).toEqual([]);
  });

  it('insert záznam (zapisObjektu="i") v DEL oblasti → skip', () => {
    const dtm = makeDtm(
      [
        makeObjTyp('BudovaDefinicniBod', [
          // insert bez ID — ref IS DMVS takové záznamy nehlásí
          makeZaznam([makePoint(0, 0)], undefined, 'i'),
        ]),
      ],
      { oblastiKompletniZPS: [makeOblastZaznam('DEL', makeGmlPolygon())] }
    );
    expect(checkDelAreaContainsDefBodPlocha(dtm)).toEqual([]);
  });

  it('update záznam bez ID v DEL oblasti → warning bez objectId', () => {
    const dtm = makeDtm(
      [
        makeObjTyp('BudovaDefinicniBod', [
          makeZaznam([makePoint(0, 0)], undefined, 'u'),
        ]),
      ],
      { oblastiKompletniZPS: [makeOblastZaznam('DEL', makeGmlPolygon())] }
    );
    const errors = checkDelAreaContainsDefBodPlocha(dtm);
    expect(errors).toHaveLength(1);
    expect(errors[0]?.objectId).toBeUndefined();
  });

  it('více DEL oblastí — bod uvnitř jedné z nich → právě jeden warning', () => {
    const secondSquare = [100, 100, 200, 100, 200, 200, 100, 200, 100, 100];
    const dtm = makeDtm(
      [
        makeObjTyp('BudovaDefinicniBod', [
          makeZaznam([makePoint(150, 150)], 'DB_IN_SECOND'),
        ]),
      ],
      {
        oblastiKompletniZPS: [
          makeOblastZaznam('DEL', makeGmlPolygon()),
          makeOblastZaznam('DEL', makeGmlPolygon(secondSquare)),
        ],
      }
    );
    const errors = checkDelAreaContainsDefBodPlocha(dtm);
    expect(errors).toHaveLength(1);
    expect(errors[0]?.objectId).toBe('DB_IN_SECOND');
  });

  it('více def. bodů — jen ty uvnitř DEL jsou reportovány', () => {
    const dtm = makeDtm(
      [
        makeObjTyp('BudovaDefinicniBod', [
          makeZaznam([makePoint(0, 0)], 'DB_IN'),
          makeZaznam([makePoint(500, 500)], 'DB_OUT'),
          makeZaznam([makePoint(10, 10)], 'DB_IN2'),
        ]),
      ],
      { oblastiKompletniZPS: [makeOblastZaznam('DEL', makeGmlPolygon())] }
    );
    const errors = checkDelAreaContainsDefBodPlocha(dtm);
    const ids = errors.map((e) => e.objectId).sort();
    expect(ids).toEqual(['DB_IN', 'DB_IN2']);
  });

  it('jiný DefBod typ (LesDefinicniBod) uvnitř DEL → také hlášen', () => {
    const dtm = makeDtm(
      [
        makeObjTyp('LesDefinicniBod', [makeZaznam([makePoint(0, 0)], 'LD1')]),
      ],
      { oblastiKompletniZPS: [makeOblastZaznam('DEL', makeGmlPolygon())] }
    );
    const errors = checkDelAreaContainsDefBodPlocha(dtm);
    expect(errors).toHaveLength(1);
    expect(errors[0]?.objektovyTyp).toBe('LesDefinicniBod');
  });

  it('DEL oblast bez plochy (jen obvod/defBod) → kontrola neselhává', () => {
    const dtm = makeDtm(
      [makeObjTyp('BudovaDefinicniBod', [makeZaznam([makePoint(0, 0)], 'DB1')])],
      { oblastiKompletniZPS: [makeOblastZaznam('DEL', undefined)] }
    );
    expect(checkDelAreaContainsDefBodPlocha(dtm)).toEqual([]);
  });

  it('prázdný oblastiKompletniZPS → žádné chyby', () => {
    const dtm = makeDtm(
      [makeObjTyp('BudovaDefinicniBod', [makeZaznam([makePoint(0, 0)], 'DB1')])],
      { oblastiKompletniZPS: [] }
    );
    expect(checkDelAreaContainsDefBodPlocha(dtm)).toEqual([]);
  });

  it('jiný objektový typ než DefBod (BudovaPlocha) v DEL oblasti → ignoruje se', () => {
    const dtm = makeDtm(
      [makeObjTyp('BudovaPlocha', [makeZaznam([makePolygon()], 'PL1')])],
      { oblastiKompletniZPS: [makeOblastZaznam('DEL', makeGmlPolygon())] }
    );
    expect(checkDelAreaContainsDefBodPlocha(dtm)).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Integrace s runAllChecks
// ---------------------------------------------------------------------------

describe('runAllChecks — DEL oblasti integrace', () => {
  it('DEL oblast s def. bodem uvnitř → runAllChecks vrátí varování', async () => {
    const { runAllChecks } = await import('../../../src/1.4.3/index.js');
    const dtm = makeDtm(
      [makeObjTyp('BudovaDefinicniBod', [makeZaznam([makePoint(0, 0)], 'DB1')])],
      { oblastiKompletniZPS: [makeOblastZaznam('DEL', makeGmlPolygon())] }
    );
    const errors = runAllChecks(dtm);
    expect(errors.some((e) => e.code === 'DEL_AREA_CONTAINS_DEFBOD_PLOCHA')).toBe(true);
  });

  it('changeset režim — DEL kontrola stále běží (je v BASE_CHECKS)', async () => {
    const { runAllChecks } = await import('../../../src/1.4.3/index.js');
    const dtm: JvfDtm = {
      verze: '1.4.3',
      datumZapisu: '2024-01-01',
      typZapisu: 'změnové věty',
      objekty: [
        makeObjTyp('BudovaDefinicniBod', [makeZaznam([makePoint(0, 0)], 'DB1')]),
      ],
      doprovodneInformace: {
        oblastiKompletniZPS: [makeOblastZaznam('DEL', makeGmlPolygon())],
      },
    };
    const errors = runAllChecks(dtm);
    expect(errors.some((e) => e.code === 'DEL_AREA_CONTAINS_DEFBOD_PLOCHA')).toBe(true);
  });
});
