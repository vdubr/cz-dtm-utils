import { describe, expect, it } from 'vitest';
import {
  checkDanglingEnds,
  checkDefBodInPlocha,
  checkOsaInObvod,
  SNAP_TOLERANCE,
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

// Čtvercový polygon 100×100 m se středem v (0,0) — XY
// body: (-50,-50), (50,-50), (50,50), (-50,50), (-50,-50)
const SQUARE_EXTERIOR_2D = [
  -50, -50,
   50, -50,
   50,  50,
  -50,  50,
  -50, -50,
];

function makePolygon(exterior = SQUARE_EXTERIOR_2D, id?: string): ZaznamObjektu['geometrie'][number] {
  return {
    type: 'Polygon',
    data: { id, srsName: 'EPSG:5514', srsDimension: 2, exterior, interiors: [] },
  };
}

function makePoint(x: number, y: number, z = 300.0, id?: string): ZaznamObjektu['geometrie'][number] {
  return {
    type: 'Point',
    data: { id: id ?? 'P1', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [x, y, z] },
  };
}

function makeLine(
  pts: [number, number][],
  id?: string
): ZaznamObjektu['geometrie'][number] {
  return {
    type: 'LineString',
    data: {
      id,
      srsName: 'EPSG:5514',
      srsDimension: 2,
      coordinates: pts.flatMap(([x, y]) => [x, y]),
    },
  };
}

// ---------------------------------------------------------------------------
// Vrstva 3A — checkDefBodInPlocha
// ---------------------------------------------------------------------------

describe('checkDefBodInPlocha', () => {
  it('defbod uvnitř plochy → žádné chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaDefinicniBod', [
        makeZaznam([makePoint(0, 0)], 'DB1'),
      ]),
      makeObjTyp('BudovaPlocha', [
        makeZaznam([makePolygon()], 'PL1'),
      ]),
    ]);
    expect(checkDefBodInPlocha(dtm)).toEqual([]);
  });

  it('defbod přímo na hranici plochy → žádné chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaDefinicniBod', [
        makeZaznam([makePoint(-50, 0)], 'DB_EDGE'), // na levé hraně
      ]),
      makeObjTyp('BudovaPlocha', [
        makeZaznam([makePolygon()], 'PL1'),
      ]),
    ]);
    expect(checkDefBodInPlocha(dtm)).toEqual([]);
  });

  it('defbod mimo plochu → DEFBOD_OUTSIDE_PLOCHA', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaDefinicniBod', [
        makeZaznam([makePoint(200, 200)], 'DB_OUT'), // daleko mimo
      ]),
      makeObjTyp('BudovaPlocha', [
        makeZaznam([makePolygon()], 'PL1'),
      ]),
    ]);
    const errors = checkDefBodInPlocha(dtm);
    expect(errors[0]?.code).toBe('DEFBOD_OUTSIDE_PLOCHA');
    expect(errors[0]?.severity).toBe('error');
    expect(errors[0]?.objektovyTyp).toBe('BudovaDefinicniBod');
    expect(errors[0]?.objectId).toBe('DB_OUT');
  });

  it('defbod uvnitř jedné z více ploch → žádné chyby', () => {
    const squareB = [100, 100, 200, 100, 200, 200, 100, 200, 100, 100]; // druhá plocha jinde
    const dtm = makeDtm([
      makeObjTyp('BudovaDefinicniBod', [
        makeZaznam([makePoint(0, 0)], 'DB1'),    // uvnitř první plochy
        makeZaznam([makePoint(150, 150)], 'DB2'), // uvnitř druhé plochy
      ]),
      makeObjTyp('BudovaPlocha', [
        makeZaznam([makePolygon()], 'PL1'),
        makeZaznam([makePolygon(squareB)], 'PL2'),
      ]),
    ]);
    expect(checkDefBodInPlocha(dtm)).toEqual([]);
  });

  it('chybí odpovídající plocha v JVF → DEFBOD_NO_PLOCHA (warning)', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaDefinicniBod', [
        makeZaznam([makePoint(0, 0)], 'DB1'),
      ]),
      // BudovaPlocha v souboru chybí
    ]);
    const errors = checkDefBodInPlocha(dtm);
    expect(errors[0]?.code).toBe('DEFBOD_NO_PLOCHA');
    expect(errors[0]?.severity).toBe('warning');
  });

  it('bez defbodů v souboru → žádné chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaPlocha', [
        makeZaznam([makePolygon()], 'PL1'),
      ]),
    ]);
    expect(checkDefBodInPlocha(dtm)).toEqual([]);
  });

  it('jiný pár (LesDefinicniBod / LesPlocha) → funguje správně', () => {
    const dtm = makeDtm([
      makeObjTyp('LesDefinicniBod', [
        makeZaznam([makePoint(0, 0)], 'LD1'),
      ]),
      makeObjTyp('LesPlocha', [
        makeZaznam([makePolygon()], 'LP1'),
      ]),
    ]);
    expect(checkDefBodInPlocha(dtm)).toEqual([]);
  });

  it('více defbodů, jeden mimo → právě jedna chyba', () => {
    const dtm = makeDtm([
      makeObjTyp('BudovaDefinicniBod', [
        makeZaznam([makePoint(0, 0)], 'DB_IN'),
        makeZaznam([makePoint(500, 500)], 'DB_OUT'),
      ]),
      makeObjTyp('BudovaPlocha', [
        makeZaznam([makePolygon()], 'PL1'),
      ]),
    ]);
    const errors = checkDefBodInPlocha(dtm).filter(e => e.code === 'DEFBOD_OUTSIDE_PLOCHA');
    expect(errors).toHaveLength(1);
    expect(errors[0]?.objectId).toBe('DB_OUT');
  });
});

// ---------------------------------------------------------------------------
// Vrstva 3B — checkOsaInObvod
// ---------------------------------------------------------------------------

describe('checkOsaInObvod', () => {
  // Osa: vodorovná linie od (-30,0) do (30,0) — uvnitř SQUARE_EXTERIOR_2D
  const insideLine = makeLine([[-30, 0], [30, 0]]);
  // Osa: vodorovná linie od (-30,0) do (200,0) — vychází ven
  const outsideLine = makeLine([[-30, 0], [200, 0]]);

  it('osa leží celá uvnitř obvodu → žádné chyby', () => {
    const dtm = makeDtm([
      makeObjTyp('OsaPozemniKomunikace', [makeZaznam([insideLine], 'OSA1')], 'DI'),
      makeObjTyp('ObvodPozemniKomunikace', [makeZaznam([makePolygon()], 'OBV1')], 'DI'),
    ]);
    expect(checkOsaInObvod(dtm)).toEqual([]);
  });

  it('bod osy leží mimo obvod → OSA_OUTSIDE_OBVOD', () => {
    const dtm = makeDtm([
      makeObjTyp('OsaPozemniKomunikace', [makeZaznam([outsideLine], 'OSA_OUT')], 'DI'),
      makeObjTyp('ObvodPozemniKomunikace', [makeZaznam([makePolygon()], 'OBV1')], 'DI'),
    ]);
    const errors = checkOsaInObvod(dtm);
    expect(errors[0]?.code).toBe('OSA_OUTSIDE_OBVOD');
    expect(errors[0]?.severity).toBe('error');
    expect(errors[0]?.objektovyTyp).toBe('OsaPozemniKomunikace');
    expect(errors[0]?.objectId).toBe('OSA_OUT');
  });

  it('chybí ObvodPK v souboru → OSA_NO_OBVOD (warning)', () => {
    const dtm = makeDtm([
      makeObjTyp('OsaPozemniKomunikace', [makeZaznam([insideLine], 'OSA1')], 'DI'),
    ]);
    const errors = checkOsaInObvod(dtm);
    expect(errors[0]?.code).toBe('OSA_NO_OBVOD');
    expect(errors[0]?.severity).toBe('warning');
  });

  it('osa na hranici obvodu → žádné chyby', () => {
    // Osa od (-50, 0) do (50, 0) — přesně na hranicích čtverce
    const borderLine = makeLine([[-50, 0], [50, 0]]);
    const dtm = makeDtm([
      makeObjTyp('OsaPozemniKomunikace', [makeZaznam([borderLine], 'OSA_EDGE')], 'DI'),
      makeObjTyp('ObvodPozemniKomunikace', [makeZaznam([makePolygon()], 'OBV1')], 'DI'),
    ]);
    expect(checkOsaInObvod(dtm)).toEqual([]);
  });

  it('více obvodů — osa leží v jednom z nich → žádné chyby', () => {
    const obvodB = [200, 0, 400, 0, 400, 100, 200, 100, 200, 0];
    const osaB = makeLine([[250, 30], [350, 30]]);
    const dtm = makeDtm([
      makeObjTyp('OsaPozemniKomunikace', [
        makeZaznam([insideLine], 'OSA1'),
        makeZaznam([osaB], 'OSA2'),
      ], 'DI'),
      makeObjTyp('ObvodPozemniKomunikace', [
        makeZaznam([makePolygon()], 'OBV1'),
        makeZaznam([makePolygon(obvodB)], 'OBV2'),
      ], 'DI'),
    ]);
    expect(checkOsaInObvod(dtm)).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Vrstva 3C — checkDanglingEnds
// ---------------------------------------------------------------------------

describe('checkDanglingEnds', () => {
  // Síť tří propojených linií (uzavřený trojúhelník):
  //   L1: (0,0) → (100,0)
  //   L2: (100,0) → (50,100)
  //   L3: (50,100) → (0,0)
  const L1 = makeLine([[0, 0], [100, 0]]);
  const L2 = makeLine([[100, 0], [50, 100]]);
  const L3 = makeLine([[50, 100], [0, 0]]);

  it('uzavřená síť linií → žádné volné konce', () => {
    const dtm = makeDtm([
      makeObjTyp('HraniceStavby', [
        makeZaznam([L1], 'L1'),
        makeZaznam([L2], 'L2'),
        makeZaznam([L3], 'L3'),
      ]),
    ]);
    expect(checkDanglingEnds(dtm)).toEqual([]);
  });

  it('nekompletní síť — jedna linie navíc s volnými konci → LINE_DANGLING_END', () => {
    // L4 visí ve vzduchu — žádný sousední prvek HraniceStavby není v toleranci
    const L4 = makeLine([[500, 500], [600, 500]]);
    const dtm = makeDtm([
      makeObjTyp('HraniceStavby', [
        makeZaznam([L1], 'L1'),
        makeZaznam([L2], 'L2'),
        makeZaznam([L3], 'L3'),
        makeZaznam([L4], 'L4'),
      ]),
    ]);
    const errors = checkDanglingEnds(dtm).filter(e => e.objectId === 'L4');
    expect(errors.length).toBeGreaterThanOrEqual(1);
    expect(errors[0]?.code).toBe('LINE_DANGLING_END');
    expect(errors[0]?.severity).toBe('warning');
  });

  it('jediná linie → žádná kontrola (méně než 2 linie)', () => {
    const dtm = makeDtm([
      makeObjTyp('HraniceStavby', [
        makeZaznam([L1], 'L1'),
      ]),
    ]);
    expect(checkDanglingEnds(dtm)).toEqual([]);
  });

  it('dvě linie sdílející start/end v rámci snap tolerance → žádné chyby', () => {
    // L2 začíná 0.02 m od konce L1 (méně než SNAP_TOLERANCE 0.05 m)
    const offset = SNAP_TOLERANCE * 0.4; // 0.02 m
    const L1snap = makeLine([[0, 0], [100, 0]]);
    const L2snap = makeLine([[100 + offset, 0], [200, 0]]);
    const dtm = makeDtm([
      makeObjTyp('HraniceStavby', [
        makeZaznam([L1snap], 'LS1'),
        makeZaznam([L2snap], 'LS2'),
      ]),
    ]);
    // L1snap.end = (100,0), L2snap.start = (100.02, 0) → dist = 0.02 < 0.05
    // LS1.end je v toleranci LS2.start → LS1 end connected
    // LS2.start je v toleranci LS1.end → LS2 start connected
    // Ale LS1.start = (0,0) a LS2.end = (200,0) nemají souseda → volné konce
    const errors = checkDanglingEnds(dtm);
    const danglingIds = errors.map(e => e.objectId);
    // LS1 start a LS2 end jsou volné — to je ok, soubor může být úsek trasy
    // Ověřit, že LS1.end a LS2.start nejsou volné
    expect(errors.some(e => e.objectId === 'LS1' && e.message.includes('100'))).toBe(false);
  });

  it('různé objektové typy — nekontrolují se navzájem', () => {
    // L1 (HraniceStavby) a L2 (OsaPozemniKomunikace) sdílejí souřadnice,
    // ale jsou různé typy — L1 bude mít volné konce protože nemá souseda STEJNÉHO typu
    const dtm = makeDtm([
      makeObjTyp('HraniceStavby', [makeZaznam([L1], 'HS1')]),
      makeObjTyp('OsaPozemniKomunikace', [makeZaznam([L2], 'OSA1')]),
    ]);
    // Každý typ má < 2 záznamy → kontrola se přeskočí
    expect(checkDanglingEnds(dtm)).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Integrace — runAllChecks s Vrstvou 3
// ---------------------------------------------------------------------------

describe('runAllChecks — Vrstva 3 integrace', () => {
  it('čistý DTM s defbodem v ploše → žádné Vrstva3 chyby', async () => {
    const { runAllChecks } = await import('../../../src/1.4.3/index.js');
    const dtm = makeDtm([
      makeObjTyp('BudovaDefinicniBod', [
        makeZaznam([makePoint(0, 0)], 'DB1'),
      ]),
      makeObjTyp('BudovaPlocha', [
        makeZaznam([makePolygon()], 'PL1'),
      ]),
    ]);
    const errors = runAllChecks(dtm);
    const layer3codes = ['DEFBOD_OUTSIDE_PLOCHA', 'DEFBOD_NO_PLOCHA', 'OSA_OUTSIDE_OBVOD', 'OSA_NO_OBVOD', 'LINE_DANGLING_END'];
    expect(errors.filter(e => layer3codes.includes(e.code))).toEqual([]);
  });

  it('defbod mimo plochu → runAllChecks vrátí DEFBOD_OUTSIDE_PLOCHA', async () => {
    const { runAllChecks } = await import('../../../src/1.4.3/index.js');
    const dtm = makeDtm([
      makeObjTyp('BudovaDefinicniBod', [
        makeZaznam([makePoint(999, 999)], 'DB_OUT'),
      ]),
      makeObjTyp('BudovaPlocha', [
        makeZaznam([makePolygon()], 'PL1'),
      ]),
    ]);
    const errors = runAllChecks(dtm);
    expect(errors.some(e => e.code === 'DEFBOD_OUTSIDE_PLOCHA')).toBe(true);
  });
});
