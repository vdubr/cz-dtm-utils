/**
 * ŽXML (data DTMŽ Správy železnic) — katalog, detekce a parser obou verzí:
 * 1.4.2.1 (nad JVF 1.4.3, oficiální ukázka SŽ) a 1.5.1.6 (nad JVF 1.5.0.2,
 * ukázky generované `scripts/zxml/samplegen.py`, validní proti XSD).
 */
import { describe, it, expect, vi } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  parseJvfDtm,
  resolveDtmVersion,
  resolveDialectVersion,
  getEntityCatalog,
  labelForAttribute,
  formatVersionLabel,
  dialectOf,
} from '../../src/index.js';

const ROOT = resolve(import.meta.dirname, '../..');
const S = (v: string, name: string): string => readFileSync(resolve(ROOT, `samples/${v}`, name), 'utf-8');
const xsdCount = (v: string, dir: string): number =>
  readdirSync(resolve(ROOT, `docs/${v}/xsd/${dir}`)).filter((f) => f.endsWith('.xsd')).length;

const OFFICIAL_1421 = S('zxml-1.4.2.1', 'zxml-prvky-sz.xml');
const MINIMAL = S('zxml-1.5.1.6', 'zxml_minimal.xml');
const NADRAZI = S('zxml-1.5.1.6', 'zxml_nadrazi.xml');

const findTyp = (dtm: ReturnType<typeof parseJvfDtm>, name: string) => {
  const ot = dtm.objekty.find((o) => o.elementName === name);
  if (!ot) throw new Error(`chybí ${name}`);
  return ot;
};

describe('ŽXML — katalog entit', () => {
  it.each([
    ['zxml-1.4.2.1', 357, 136],
    ['zxml-1.5.1.6', 372, 141],
  ])('%s: objekty JVF + objekty SŽ = všechna XSD', (v, jvf, sz) => {
    expect(xsdCount(v, 'objekty')).toBe(jvf);
    expect(xsdCount(v, 'objekty_sz')).toBe(sz);
    const cat = Object.values(getEntityCatalog(v));
    expect(cat).toHaveLength(jvf + sz);
    const szObjects = cat.filter((e) => e.origin === 'zxml');
    expect(szObjects).toHaveLength(sz);
    expect(szObjects.every((e) => e.codeBase.startsWith('999'))).toBe(true);
    expect([...new Set(szObjects.map((e) => e.obsahovaCast))].sort()).toEqual([
      'H3D',
      'ODSZ',
      'SKLEP',
      'ZDD',
      'ZDT',
    ]);
  });

  it('1.5.1.6: kód objektu SŽ a sdílená skupina SŽ', () => {
    const cat = getEntityCatalog('zxml-1.5.1.6');
    expect(cat['Baliza']).toMatchObject({
      codeBase: '9990000447',
      codeSuffix: '01',
      objektovyKod: '100447',
      obsahovaCast: 'ZDT',
      dialectAttrGroup: 'SpolecneAtributyObjektuZDTSZ',
      geomType: 'point',
    });
    // Standardní objekt JVF nese navíc skupinu atributů SŽ.
    expect(cat['BudovaPlocha']).toMatchObject({
      sharedAttrGroup: 'SpolecneAtributyObjektuZPS',
      dialectAttrGroup: 'SpolecneAtributyObjektuZPSSZ',
    });
    expect(cat['BudovaPlocha']?.origin).toBeUndefined();
  });

  it('číselníky SŽ s popisky (atributy_sz.xsd)', () => {
    expect(labelForAttribute('TypBalizy', 100151, 'zxml-1.5.1.6')).toBe('přepínatelná');
    expect(labelForAttribute('TypBalizy', '100152', 'zxml-1.4.2.1')).toBe('nepřepínatelná');
    // Sloučený číselník (1.4.2.1): kódy JVF i SŽ.
    expect(labelForAttribute('ZpusobPorizeniZPS', 1, 'zxml-1.4.2.1')).toBeDefined();
    expect(labelForAttribute('ZpusobPorizeniZPS', 101168, 'zxml-1.4.2.1')).toMatch(/konsolidace/);
  });
});

describe('ŽXML — detekce verze (router)', () => {
  it('VerzeZXML → zxml-<verze>', () => {
    expect(resolveDtmVersion(OFFICIAL_1421)).toBe('zxml-1.4.2.1');
    expect(resolveDtmVersion(MINIMAL)).toBe('zxml-1.5.1.6');
    expect(dialectOf('zxml-1.5.1.6')?.id).toBe('zxml');
    expect(formatVersionLabel('zxml-1.5.1.6')).toBe('ŽXML 1.5.1.6');
  });

  it('neznámá verze ŽXML → nejnovější verze se stejnou strukturou (+ warn)', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(resolveDialectVersion(MINIMAL.replace('<cmn:VerzeZXML>1.5.1.6', '<cmn:VerzeZXML>1.5.2.0'))).toBe(
      'zxml-1.5.1.6'
    );
    expect(resolveDialectVersion(OFFICIAL_1421.replace('<cmn:VerzeZXML>1.4.2.1', '<cmn:VerzeZXML>1.4.9'))).toBe(
      'zxml-1.4.2.1'
    );
    expect(warn).toHaveBeenCalledTimes(2);
    warn.mockRestore();
  });

  it('čistý JVF ani UDM nejsou ŽXML', () => {
    const jvf = OFFICIAL_1421.replace(/<cmn:VerzeZXML>[^<]*<\/cmn:VerzeZXML>/, '');
    expect(resolveDialectVersion(jvf)).toBeNull();
    expect(resolveDtmVersion(jvf)).toBe('1.4.3');
  });
});

describe('ŽXML 1.4.2.1 — oficiální ukázka SŽ', () => {
  const dtm = parseJvfDtm(OFFICIAL_1421);

  it('hlavička', () => {
    expect(dtm.verze).toBe('zxml-1.4.2.1');
    expect(dtm.verzeJvfDtm).toBe('1.4.3');
    expect(dtm.dialect).toEqual({ id: 'zxml', version: '1.4.2.1' });
  });

  it('objekty SŽ se zploštělými atributy atrsz:*', () => {
    const maznik = findTyp(dtm, 'KolejnicovyMaznik');
    expect(maznik).toMatchObject({ codeBase: '9990000442', obsahovaCast: 'ZDD' });
    expect(maznik.zaznamy[0]?.attributes['ZdrojDatDI']).toBe(101494);
    expect(maznik.zaznamy[0]?.geometrie[0]?.type).toBe('Point');
    const prejezd = findTyp(dtm, 'ZeleznicniPrejezdOstatniKresba');
    expect(prejezd.obsahovaCast).toBe('H3D');
    expect(prejezd.zaznamy[0]?.geometrie[0]?.type).toBe('LineString');
  });
});

describe('ŽXML 1.5.1.6 — ukázky', () => {
  it('minimální: druhy záznamů, bloky SŽ, staničení', () => {
    const dtm = parseJvfDtm(MINIMAL);
    expect(dtm.verze).toBe('zxml-1.5.1.6');
    expect(dtm.verzeJvfDtm).toBe('1.5.0.2');
    expect(dtm.typZapisu).toBe('změnové věty');

    const baliza = findTyp(dtm, 'Baliza');
    const z = baliza.zaznamy[0]!;
    expect(z.recordKind).toBe('Ins');
    // Blok SpolecneAtributyObjektuZDTSZ zploštěn do attributes.
    expect(z.attributes['SpravceTI']).toBeDefined();
    expect(z.attributes['StatusHarmonizaceDatTI']).toBeDefined();
    expect(z.attributes['TypBalizy']).toBe(100151);
    expect(typeof z.attributes['Natoceni']).toBe('number');

    expect(findTyp(dtm, 'Brzda').zaznamy[0]).toMatchObject({ zapisObjektu: 'u', commonAttributes: { id: '900000001' } });
    expect(findTyp(dtm, 'SklepBod').zaznamy[0]).toMatchObject({ zapisObjektu: 'd', geometrie: [] });
    // Plocha JVF: Plocha2D + Obvod3D.
    expect(findTyp(dtm, 'NastupistePlocha').zaznamy[0]?.geometrie.map((g) => g.type)).toEqual([
      'Polygon',
      'MultiCurve',
    ]);

    const st = dtm.ext?.staniceni;
    expect(st).toHaveLength(1);
    expect(st?.[0]).toMatchObject({ id: '900000001' });
    expect(st?.[0]?.staniceni[0]).toMatchObject({ tudu: '351102', staniceni: 22.418, typStaniceni: '1' });
    expect(st?.[0]?.staniceni[0]?.bod?.coordinates).toHaveLength(3);
  });

  it('nádraží: všechny objekty jsou v katalogu a mají geometrii', () => {
    const dtm = parseJvfDtm(NADRAZI);
    const cat = getEntityCatalog(dtm.verze);
    expect(dtm.objekty.length).toBeGreaterThanOrEqual(18);
    for (const ot of dtm.objekty) {
      expect(cat[ot.elementName], ot.elementName).toBeDefined();
      for (const z of ot.zaznamy) expect(z.geometrie.length, ot.elementName).toBeGreaterThan(0);
    }
    const parts = new Set(dtm.objekty.map((o) => o.obsahovaCast));
    for (const p of ['ZPS', 'DI', 'ZDT', 'ZDD', 'H3D', 'ODSZ', 'SKLEP']) expect(parts.has(p), p).toBe(true);
    expect(dtm.ext?.staniceni).toHaveLength(3);
  });
});
