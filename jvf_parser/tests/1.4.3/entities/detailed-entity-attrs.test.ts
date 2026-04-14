import { describe, it, expect } from 'vitest';
import { ENTITY_CATALOG } from '../../../src/1.4.3/generated/entities.js';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import { loadSample } from '../helpers/fixtures.js';

describe('Detailed entity attribute parsing', () => {
  describe('DI — OsaPozemniKomunikace', () => {
    const xml = loadSample('ukazka_DI.xml');
    const parsed = parseJvfDtm(xml);
    const osaOT = parsed.objekty.find((o) => o.elementName === 'OsaPozemniKomunikace');

    it('is found in parsed data', () => {
      expect(osaOT).toBeDefined();
    });

    it('has expected specific attributes', () => {
      if (!osaOT) return;
      const meta = ENTITY_CATALOG['OsaPozemniKomunikace']!;
      expect(meta.specificAttrs).toContain('PrevazujiciPovrch');
      expect(meta.specificAttrs).toContain('KategoriePozemniKomunikace');
      expect(meta.specificAttrs).toContain('TypUsekuPozemniKomunikace');
      expect(meta.specificAttrs).toContain('PocetJizdnichPruhu');
      expect(meta.specificAttrs).toContain('OznaceniKomunikace');
      expect(meta.specificAttrs).toContain('CisloETahu');
    });

    it('parses specific attributes with correct types', () => {
      if (!osaOT || osaOT.zaznamy.length === 0) return;
      const attrs = osaOT.zaznamy[0]!.attributes;

      if (attrs['UrovenUmisteniObjektuDI'] !== undefined) {
        expect(typeof attrs['UrovenUmisteniObjektuDI']).toBe('number');
      }
      if (attrs['TridaPresnostiPoloha'] !== undefined) {
        expect(typeof attrs['TridaPresnostiPoloha']).toBe('number');
      }
      if (attrs['PrevazujiciPovrch'] !== undefined) {
        expect(typeof attrs['PrevazujiciPovrch']).toBe('number');
      }
      if (attrs['KategoriePozemniKomunikace'] !== undefined) {
        expect(typeof attrs['KategoriePozemniKomunikace']).toBe('number');
      }
    });

    it('has curve geometry (linie)', () => {
      if (!osaOT) return;
      for (const z of osaOT.zaznamy) {
        for (const g of z.geometrie) {
          expect(['LineString', 'MultiCurve']).toContain(g.type);
        }
      }
    });
  });

  describe('DI — ObvodPozemniKomunikace', () => {
    const xml = loadSample('ukazka_DI.xml');
    const parsed = parseJvfDtm(xml);
    const obvodOT = parsed.objekty.find((o) => o.elementName === 'ObvodPozemniKomunikace');

    it('is found in parsed data', () => {
      expect(obvodOT).toBeDefined();
    });

    it('has surface geometry (plocha)', () => {
      if (!obvodOT) return;
      for (const z of obvodOT.zaznamy) {
        expect(z.geometrie.length).toBeGreaterThan(0);
        const hasPolygon = z.geometrie.some((g) => g.type === 'Polygon');
        expect(hasPolygon).toBe(true);
      }
    });
  });

  describe('TI — TrasaElektrickeSite', () => {
    const xml = loadSample('ukazka_KI.xml');
    const parsed = parseJvfDtm(xml);
    const trasaOT = parsed.objekty.find((o) => o.elementName === 'TrasaElektrickeSite');

    it('is found in parsed data', () => {
      expect(trasaOT).toBeDefined();
    });

    it('has TI shared attributes', () => {
      const meta = ENTITY_CATALOG['TrasaElektrickeSite']!;
      expect(meta.sharedAttrGroup).toBe('SpolecneAtributyObjektuTI');
      expect(meta.obsahovaCast).toBe('TI');
    });

    it('has expected specific attributes in catalog', () => {
      const meta = ENTITY_CATALOG['TrasaElektrickeSite']!;
      expect(meta.specificAttrs).toContain('StavTrasySiteTI');
      expect(meta.specificAttrs).toContain('TypTrasyElektrickeSite');
      expect(meta.specificAttrs).toContain('MaximalniNapetovaHladina');
      expect(meta.specificAttrs).toContain('MaximalniProvozniNapeti');
    });

    it('parses TI shared attrs correctly', () => {
      if (!trasaOT || trasaOT.zaznamy.length === 0) return;
      const attrs = trasaOT.zaznamy[0]!.attributes;

      if (attrs['NeuplnaData'] !== undefined) {
        // fast-xml-parser parses 0/1 as numbers, not booleans
        expect(typeof attrs['NeuplnaData']).toBe('number');
      }
      if (attrs['UrovenUmisteniObjektuTI'] !== undefined) {
        expect(typeof attrs['UrovenUmisteniObjektuTI']).toBe('number');
      }
    });
  });

  describe('TI — PodperneZarizeni', () => {
    const xml = loadSample('ukazka_KI.xml');
    const parsed = parseJvfDtm(xml);
    const podperneOT = parsed.objekty.find((o) => o.elementName === 'PodperneZarizeni');

    it('is found in parsed data', () => {
      expect(podperneOT).toBeDefined();
    });

    it('has point geometry', () => {
      if (!podperneOT) return;
      for (const z of podperneOT.zaznamy) {
        if (z.geometrie.length > 0) {
          expect(z.geometrie[0]!.type).toBe('Point');
        }
      }
    });

    it('catalog allows optional geometry (TI)', () => {
      const meta = ENTITY_CATALOG['PodperneZarizeni']!;
      expect(meta.geomOptional).toBe(true);
      expect(meta.hasOblastKI).toBe(true);
    });
  });

  describe('ZPS — PodrobnyBodZPS', () => {
    const xml = loadSample('ukazka_ZPS.xml');
    const parsed = parseJvfDtm(xml);
    const pbOT = parsed.objekty.find((o) => o.elementName === 'PodrobnyBodZPS');

    it('is found in parsed data', () => {
      expect(pbOT).toBeDefined();
    });

    it('has point geometry', () => {
      if (!pbOT) return;
      for (const z of pbOT.zaznamy) {
        expect(z.geometrie.length).toBeGreaterThan(0);
        expect(z.geometrie[0]!.type).toBe('Point');
      }
    });

    it('has ZPS accuracy attributes', () => {
      if (!pbOT || pbOT.zaznamy.length === 0) return;
      const attrs = pbOT.zaznamy[0]!.attributes;
      expect(attrs).toHaveProperty('TridaPresnostiPoloha');
      expect(attrs).toHaveProperty('TridaPresnostiVyska');
    });
  });

  describe('ZPS — HraniceBudovy', () => {
    const xml = loadSample('ukazka_ZPS.xml');
    const parsed = parseJvfDtm(xml);
    const hraniceOT = parsed.objekty.find((o) => o.elementName === 'HraniceBudovy');

    it('is found in parsed data', () => {
      expect(hraniceOT).toBeDefined();
    });

    it('has curve geometry (linie)', () => {
      if (!hraniceOT) return;
      for (const z of hraniceOT.zaznamy) {
        for (const g of z.geometrie) {
          expect(['LineString', 'MultiCurve']).toContain(g.type);
        }
      }
    });

    it('has ZPS shared attrs in catalog', () => {
      const meta = ENTITY_CATALOG['HraniceBudovy']!;
      expect(meta.sharedAttrGroup).toBe('SpolecneAtributyObjektuZPS');
      expect(meta.obsahovaCast).toBe('ZPS');
    });
  });

  describe('ZPS — BudovaDefinicniBod', () => {
    const xml = loadSample('ukazka_ZPS.xml');
    const parsed = parseJvfDtm(xml);
    const budDefOT = parsed.objekty.find((o) => o.elementName === 'BudovaDefinicniBod');

    it('is found in parsed data', () => {
      expect(budDefOT).toBeDefined();
    });

    it('uses DefBod shared attrs', () => {
      const meta = ENTITY_CATALOG['BudovaDefinicniBod']!;
      expect(meta.sharedAttrGroup).toBe('SpolecneAtributyObjektuDefinicnichBodu');
      expect(meta.codeSuffix).toBe('04');
    });
  });

  describe('OPL — BudovaPlocha', () => {
    const xml = loadSample('ukazka_OPL.xml');
    const parsed = parseJvfDtm(xml);
    const budPlochaOT = parsed.objekty.find((o) => o.elementName === 'BudovaPlocha');

    it('is found in parsed data', () => {
      expect(budPlochaOT).toBeDefined();
    });

    it('has surface+multiCurve geometry in catalog', () => {
      const meta = ENTITY_CATALOG['BudovaPlocha']!;
      expect(meta.geomType).toBe('surface+multiCurve');
      expect(meta.codeSuffix).toBe('03');
    });

    it('has polygon geometry in parsed data', () => {
      if (!budPlochaOT) return;
      for (const z of budPlochaOT.zaznamy) {
        const hasPolygon = z.geometrie.some((g) => g.type === 'Polygon');
        expect(hasPolygon).toBe(true);
      }
    });
  });

  describe('GAD — HraniceVodnihoDila', () => {
    const xml = loadSample('ukazka_GAD.xml');
    const parsed = parseJvfDtm(xml);
    const hvdOT = parsed.objekty.find((o) => o.elementName === 'HraniceVodnihoDila');

    it('is found in parsed data', () => {
      expect(hvdOT).toBeDefined();
    });

    it('is a ZPS curve entity', () => {
      const meta = ENTITY_CATALOG['HraniceVodnihoDila']!;
      expect(meta.obsahovaCast).toBe('ZPS');
      expect(meta.geomType).toBe('curve');
    });
  });
});
