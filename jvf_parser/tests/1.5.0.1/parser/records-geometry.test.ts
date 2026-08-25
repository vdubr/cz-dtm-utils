import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseJvfDtm1501 } from '../../../src/1.5.0.1/parser.js';
import { RECORD_KIND_MAP, resolveRecordKind } from '../../../src/1.5.0.1/records.js';

const SAMPLES = resolve(import.meta.dirname, '../../../samples/1.5.0.1');
const readSample = (name: string): string => readFileSync(resolve(SAMPLES, name), 'utf-8');

describe('RECORD_KIND_MAP (bezztrátovost, R2)', () => {
  it('má 14 druhů, každý s platným zapisObjektu a konzistentním kontextem', () => {
    const keys = Object.keys(RECORD_KIND_MAP);
    expect(keys.length).toBe(14);
    for (const [key, info] of Object.entries(RECORD_KIND_MAP)) {
      expect(['i', 'u', 'd', 'r']).toContain(info.zapisObjektu);
      // recordKind = klíč bez prefixu ZaznamObjektu
      expect(key).toBe(`ZaznamObjektu${info.recordKind}`);
      // operace odpovídá koncovce (kromě čistých referenčních stavů RefV/RefN)
      if (info.recordKind.endsWith('Ins')) expect(info.zapisObjektu).toBe('i');
      else if (info.recordKind.endsWith('Upd')) expect(info.zapisObjektu).toBe('u');
      else if (info.recordKind.endsWith('Del')) expect(info.zapisObjektu).toBe('d');
      else expect(info.zapisObjektu).toBe('r');
    }
  });

  it('RefV/RefN nesou visibility, Pe* mají context peer', () => {
    expect(RECORD_KIND_MAP.ZaznamObjektuRefV.visibility).toBe('public');
    expect(RECORD_KIND_MAP.ZaznamObjektuRefN.visibility).toBe('nonpublic');
    expect(RECORD_KIND_MAP.ZaznamObjektuPeIns.context).toBe('peer');
    expect(RECORD_KIND_MAP.ZaznamObjektuRefVIns.context).toBe('refChange');
    expect(RECORD_KIND_MAP.ZaznamObjektuIns.context).toBe('input');
  });

  it('resolveRecordKind zvládne neznámou variantu defenzivně', () => {
    const r = resolveRecordKind('ZaznamObjektuFutureDel');
    expect(r.zapisObjektu).toBe('d');
  });
});

describe('parser 1.5.0.1 — ZPS (ukazkaZPS)', () => {
  const dtm = parseJvfDtm1501(readSample('ukazkaZPS.jvf.xml'));

  it('hlavička: verze 1.5.0.1, kompletní zápis', () => {
    expect(dtm.verze).toBe('1.5.0.1');
    expect(dtm.typZapisu).toBe('kompletní zápis');
  });

  it('1 objektový typ, code_base 0100000005, 2 záznamy RefV', () => {
    expect(dtm.objekty.length).toBe(1);
    const o = dtm.objekty[0];
    expect(o.elementName).toBe('ProvozniPlochaPozemniKomunikacePlocha');
    expect(o.codeBase).toBe('0100000005');
    expect(o.obsahovaCast).toBe('ZPS');
    expect(o.zaznamy.length).toBe(2);
    for (const z of o.zaznamy) {
      expect(z.zapisObjektu).toBe('r');
      expect(z.recordKind).toBe('RefV');
      expect(z.context).toBe('refState');
      expect(z.visibility).toBe('public');
    }
  });

  it('geometrie ZPS plochy: Polygon (Plocha2D) + MultiCurve (Obvod3D)', () => {
    const g = dtm.objekty[0].zaznamy[0].geometrie;
    const types = g.map((x) => x.type);
    expect(types).toEqual(['Polygon', 'MultiCurve']);
    const poly = g.find((x) => x.type === 'Polygon')!;
    if (poly.type === 'Polygon') {
      // 5 vrcholů × 2 souřadnice
      expect(poly.data.exterior.length).toBe(10);
      expect(poly.data.srsDimension).toBe(2);
    }
    const mc = g.find((x) => x.type === 'MultiCurve')!;
    if (mc.type === 'MultiCurve') {
      expect(mc.data.curves.length).toBe(1);
      expect(mc.data.curves[0].srsDimension).toBe(3);
    }
  });

  it('druhý záznam má interior ring + 2 křivky v Obvod3D', () => {
    const g = dtm.objekty[0].zaznamy[1].geometrie;
    const poly = g.find((x) => x.type === 'Polygon')!;
    if (poly.type === 'Polygon') expect(poly.data.interiors.length).toBe(1);
    const mc = g.find((x) => x.type === 'MultiCurve')!;
    if (mc.type === 'MultiCurve') expect(mc.data.curves.length).toBe(2);
  });
});

describe('parser 1.5.0.1 — PSPI import', () => {
  const dtm = parseJvfDtm1501(readSample('ukazka_PSPI_import.jvf.xml'));

  it('změnové věty, 2 PSPI objekty s Ins záznamem', () => {
    expect(dtm.typZapisu).toBe('změnové věty');
    expect(dtm.objekty.length).toBe(2);
    const codes = dtm.objekty.map((o) => o.codeBase).sort();
    expect(codes).toEqual(['0200000001', '0200000008']);
    for (const o of dtm.objekty) {
      expect(o.zaznamy.length).toBe(1);
      const z = o.zaznamy[0];
      expect(z.zapisObjektu).toBe('i');
      expect(z.recordKind).toBe('Ins');
      // PSPI plocha (DTI/PSPI): Polygon přes surfaceProperty
      expect(z.geometrie.map((x) => x.type)).toEqual(['Polygon']);
    }
  });

  it('PSPI atributy: UrovenUmisteniObjektuPSPI a IDExterni jsou čitelné', () => {
    const z = dtm.objekty.find((o) => o.codeBase === '0200000001')!.zaznamy[0];
    expect(z.attributes.UrovenUmisteniObjektuPSPI).toBe(0);
    expect(String(z.attributes.IDExterni)).toBe('123456');
  });
});

describe('parser 1.5.0.1 — TI (bod + linie)', () => {
  const dtm = parseJvfDtm1501(readSample('ukazka_TI.jvf.xml'));

  it('obsahuje Point (Bod3D) i LineString (Linie3D)', () => {
    const allGeom = dtm.objekty.flatMap((o) => o.zaznamy.flatMap((z) => z.geometrie.map((g) => g.type)));
    expect(allGeom).toContain('Point');
    expect(allGeom).toContain('LineString');
  });
});
