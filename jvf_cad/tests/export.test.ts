import { describe, it, expect, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseJvfDtm } from 'jvf-parser';
import { exportDxf, type DxfVersion } from '../src/index.js';

const SAMPLES = resolve(import.meta.dirname, '../../jvf_parser/samples/udm-2.1.1');
const load = (name: string) => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  try {
    return parseJvfDtm(readFileSync(resolve(SAMPLES, name), 'utf-8'));
  } finally {
    warn.mockRestore();
  }
};

type Pair = [string, string];

/** DXF → dvojice (kód, hodnota). */
function pairs(dxf: string): Pair[] {
  const lines = dxf.split('\n');
  const out: Pair[] = [];
  for (let i = 0; i + 1 < lines.length; i += 2) out.push([lines[i]!.trim(), lines[i + 1]!]);
  return out;
}

/** Záznamy (od `0`) v sekci. */
function records(p: Pair[], section: string): Pair[][] {
  const start = p.findIndex(([c, v], i) => c === '0' && v === 'SECTION' && p[i + 1]?.[1] === section);
  const out: Pair[][] = [];
  for (let i = start + 2; i < p.length && !(p[i]![0] === '0' && p[i]![1] === 'ENDSEC'); i++) {
    if (p[i]![0] === '0') out.push([]);
    out[out.length - 1]?.push(p[i]!);
  }
  return out;
}

const value = (rec: Pair[], code: string) => rec.find(([c]) => c === code)?.[1];

/** Strukturní kontroly, na které je AutoCAD citlivý. */
function checkStructure(dxf: string) {
  const p = pairs(dxf);
  // Handly (kód 5, v tabulkách DIMSTYLE kód 105) jsou jedinečné a pod $HANDSEED.
  const handles = p.filter(([c], i) => (c === '5' || c === '105') && p[i - 1]?.[0] !== '9').map(([, v]) => parseInt(v, 16));
  expect(new Set(handles).size).toBe(handles.length);
  const seedIdx = p.findIndex(([c, v]) => c === '9' && v === '$HANDSEED');
  expect(parseInt(p[seedIdx + 1]![1], 16)).toBeGreaterThan(Math.max(...handles));
  // Počet záznamů tabulek (70) odpovídá skutečnosti.
  for (const table of ['LAYER', 'LTYPE', 'BLOCK_RECORD']) {
    const start = p.findIndex(([c, v], i) => c === '0' && v === 'TABLE' && p[i + 1]?.[1] === table);
    const end = p.findIndex(([c, v], i) => i > start && c === '0' && v === 'ENDTAB');
    const count = Number(p.slice(start, end).find(([c]) => c === '70')![1]);
    const entries = p.slice(start, end).filter(([c, v]) => c === '0' && v === table).length;
    expect(entries, table).toBe(count);
  }
  // Každý INSERT odkazuje na definovaný blok; každá hladina entit existuje.
  const blocks = new Set(records(p, 'BLOCKS').filter((r) => r[0]![1] === 'BLOCK').map((r) => value(r, '2')));
  const layers = new Set(records(p, 'TABLES').filter((r) => r[0]![1] === 'LAYER').map((r) => value(r, '2')));
  const ents = records(p, 'ENTITIES');
  for (const e of ents.filter((r) => r[0]![1] === 'INSERT')) expect(blocks.has(value(e, '2'))).toBe(true);
  for (const e of ents) expect(layers.has(value(e, '8')), value(e, '8')).toBe(true);
  return { p, ents };
}

describe.each<DxfVersion>(['R2013', 'R2000'])('exportDxf — %s', (version) => {
  it('udm_minimal: hladiny podle objektů, entity s XDATA, validní struktura', () => {
    const r = exportDxf(load('udm_minimal.xml'), { version, includeDeleted: true });
    const { p, ents } = checkStructure(r.dxf);
    expect(value(p, '1')).toBe(version === 'R2013' ? 'AC1027' : 'AC1015');
    expect(r.skipped).toBe(0);
    // HraniceBudovy Ins + Upd + Del, Strom, DopravniZarizeniLinie, ZajmovaPlocha.
    expect(r.entities).toBe(6);
    const entLayers = ents.map((e) => value(e, '8'));
    expect(entLayers).toContain('ZPS_HraniceBudovy');
    expect(entLayers).toContain('ZPS_HraniceBudovy_DEL');
    expect(entLayers).toContain('ZPSUDM_Strom');
    expect(entLayers).toContain('OST_ZajmovaPlocha');
    // XDATA s identitou a atributy (popisky číselníků).
    const strom = ents.find((e) => value(e, '8') === 'ZPSUDM_Strom')!;
    expect(strom[0]![1]).toBe('INSERT');
    const xdata = strom.filter(([c]) => c === '1000').map(([, v]) => v);
    expect(xdata).toContain('ObjektovyTyp=Strom');
    // R2000 (kódová stránka) zapisuje znaky mimo ASCII jako \U+XXXX.
    expect(xdata).toContain(version === 'R2013' ? 'StavStromu=500 (dobrý)' : 'StavStromu=500 (dobr\\U+00FD)');
  });

  it('bez includeDeleted se mazané záznamy neexportují', () => {
    const r = exportDxf(load('udm_minimal.xml'), { version });
    expect(r.entities).toBe(5);
    expect(r.dxf).not.toContain('ZPS_HraniceBudovy_DEL');
  });

  it('UDM_ukazka-1: všech 821 záznamů, bloky symbolů, text Nádražní ul.', () => {
    const r = exportDxf(load('UDM_ukazka-1.xml'), { version });
    const { ents } = checkStructure(r.dxf);
    expect(r.entities).toBe(821);
    expect(r.skipped).toBe(0);
    expect(r.blocks).toBeGreaterThan(10);
    const nazev = ents.find((e) => e[0]![1] === 'TEXT' && value(e, '8') === 'OST_Nazvy' && value(e, '50') === '69')!;
    expect(nazev).toBeDefined();
    expect(value(nazev, '40')).toBe('6'); // název ulice = 6 m (UDM kap. 15.2)
    expect(value(nazev, '1')).toBe(version === 'R2013' ? 'Nádražní ul.' : 'N\\U+00E1dra\\U+017En\\U+00ED ul.');
  });

  it('vzorník ČKZ (404 typů): bez chyb a bez přeskočených geometrií', () => {
    const r = exportDxf(load('Vzornik_JVFUDM_02010100.xml'), { version });
    checkStructure(r.dxf);
    expect(r.layers).toBe(404);
    expect(r.skipped).toBe(0);
  });
});

describe('exportDxf — vzhled UDM', () => {
  it('hladina hranice budovy: červená, 0,25 mm; R2013 true color, R2000 ACI', () => {
    const dtm = load('udm_minimal.xml');
    for (const version of ['R2013', 'R2000'] as const) {
      const p = pairs(exportDxf(dtm, { version }).dxf);
      const rec = records(p, 'TABLES').find((r) => r[0]![1] === 'LAYER' && value(r, '2') === 'ZPS_HraniceBudovy')!;
      expect(value(rec, '62')).toBe('1');
      expect(value(rec, '370')).toBe('25');
      expect(value(rec, '420')).toBe(version === 'R2013' ? String(0xff0000) : undefined);
    }
  });

  it('flatten2D: všechny souřadnice Z = 0', () => {
    const p = pairs(exportDxf(load('udm_pontonovy_most.xml'), { flatten2D: true }).dxf);
    const ents = records(p, 'ENTITIES');
    const z = ents.flatMap((e) => e.filter(([c]) => c === '30' || c === '38').map(([, v]) => Number(v)));
    expect(z.every((v) => v === 0)).toBe(true);
  });
});

describe('exportDxf — čisté JVF DTM ve vzhledu Katalogu DTM ČR', () => {
  const loadJvf = (path: string) => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      return parseJvfDtm(readFileSync(resolve(import.meta.dirname, '../..', path), 'utf-8'));
    } finally {
      warn.mockRestore();
    }
  };
  const KATALOG = 'jvf_viewer/public/fixtures/test_katalog_vzhled.xml';

  it.each(['ukazka_ZPS.xml', 'ukazka_DI.xml', 'ukazka_GAD.xml', 'ukazka_KI.xml', 'ukazka_NS.xml', 'ukazka_OPL.xml'])(
    '%s: validní struktura, bez přeskočených geometrií, bloky Katalogu',
    (name) => {
      for (const version of ['R2013', 'R2000'] as const) {
        const r = exportDxf(loadJvf(`jvf_parser/samples/1.4.3/${name}`), { version });
        checkStructure(r.dxf);
        expect(r.skipped).toBe(0);
        expect(r.dxf).not.toMatch(/\n {2}2\nUDM_/);
      }
    },
  );

  it('ŽXML: objekt JVF bez vlastního vzhledu SŽ má vzhled Katalogu (jako viewer)', () => {
    const p = pairs(exportDxf(loadJvf('jvf_parser/samples/zxml-1.5.1.6/zxml_nadrazi.xml')).dxf);
    const layer = records(p, 'TABLES').find((r) => r[0]![1] === 'LAYER' && value(r, '2')?.endsWith('ObvodDrahy'))!;
    // Barva Katalogu DTM ČR (#646464), ne barva obsahové části ŽXML (#ffeb3b).
    expect(value(layer, '420')).toBe(String(0x646464));
  });

  it('podrobný bod ZPS: blok značky Katalogu v barvě SVG', () => {
    const p = pairs(exportDxf(loadJvf('jvf_parser/samples/1.4.3/ukazka_ZPS.xml')).dxf);
    const bod = records(p, 'ENTITIES').find((e) => value(e, '8') === 'ZPS_PodrobnyBodZPS')!;
    expect(bod[0]![1]).toBe('INSERT');
    expect(value(bod, '2')).toBe('DTM_ZPS_b_218_podr_bod_zps');
    expect(value(bod, '420')).toBe(String(0x646464));
  });

  it('varianty podle atributu a geometrie: značky bodů, plošná značka v definičním bodě', () => {
    const ents = records(pairs(exportDxf(loadJvf(KATALOG)).dxf), 'ENTITIES');
    const block = (layer: string) => value(ents.find((e) => value(e, '8') === layer && e[0]![1] === 'INSERT')!, '2');
    expect(block('ZPS_LesDefinicniBod')).toBe('DTM_ZPS_p_211_zps_pl_les_lab');
    expect(block('ZPS_DrobnaKulturniStavbaBod')).toBe('DTM_ZPS_b_159_st_kult_socha');
    expect(block('TI_ObjektStokoveSiteBod')).toBe('DTM_TI_b_337_stok_sit_obj_sach');
    expect(block('TI_ZarizeniTeplovodniSite')).toBe('DTM_TI_b_131_teplo_zar_tepl_sach');
  });

  it('plochy: les vyplněný (HATCH pod obrysy), ochranné pásmo jen obrysem', () => {
    const { p, ents } = checkStructure(exportDxf(loadJvf(KATALOG)).dxf);
    const hatches = ents.filter((e) => e[0]![1] === 'HATCH');
    expect(hatches.map((h) => value(h, '8'))).toEqual(['ZPS_LesPlocha']);
    expect(value(hatches[0]!, '420')).toBe(String(0xd3e0bc));
    // Výplň je první entita (pod obrysy).
    expect(ents[0]![0]![1]).toBe('HATCH');
    const op = records(p, 'TABLES').find((r) => r[0]![1] === 'LAYER' && value(r, '2') === 'TI_OPPlynovodniSite')!;
    expect(value(op, '420')).toBe(String(0x4ce600));
    // Bez výplní.
    const bez = exportDxf(loadJvf(KATALOG), { fillAreas: false }).dxf;
    expect(records(pairs(bez), 'ENTITIES').some((e) => e[0]![1] === 'HATCH')).toBe(false);
  });
});
