import { describe, expect, it, beforeAll } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import type { JvfDtm, ZapisObjektuType } from '../../../src/1.4.3/types.js';
import { loadSample } from '../helpers/fixtures.js';

/**
 * Testy správné identifikace `ZapisObjektu` v changeset souborech (změnové
 * věty). Fixture `changeset-cimer.xml` je extrakt z reálného JVF DTM 1.4.3
 * souboru `cimer.jvf.xml` (Silnice II/128 Číměř, SUBJ-00004290) a obsahuje
 * záměrně mix `i` / `u` / `d` napříč dvěma objektovými typy:
 *
 *   HraniceDopravniStavbyPlochy: 2× d, 1× u, 2× i
 *   PodrobnyBodZPS:              2× d, 1× i
 *
 * Cílem je ověřit, že:
 *  1. Parser identifikuje `TypZapisu='změnové věty'`.
 *  2. Hodnoty `'d'`, `'u'`, `'i'` v XML se propíšou na `ZaznamObjektu.zapisObjektu`
 *     beze změny — žádný cast na fallback `'r'`, žádné přečíslování.
 *  3. Mazané záznamy (`'d'`) si zachovávají ID i geometrii (downstream
 *     komponenty jako viewer je potřebují pro vizualizaci a topologii).
 *  4. Insert záznamy (`'i'`) mají prázdné `<atr:ID/>` (ID přiděluje IS DMVS)
 *     a parser to tlumí na `null`/prázdný string, nikoli na crash.
 */
describe('Changeset s mazanými záznamy (changeset-cimer.xml)', () => {
  let doc: JvfDtm;

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('changeset-cimer.xml'));
  });

  describe('hlavička', () => {
    it('verze JVF DTM = 1.4.3', () => {
      expect(doc.verze).toBe('1.4.3');
    });

    it('typ zápisu = změnové věty', () => {
      expect(doc.typZapisu).toBe('změnové věty');
    });
  });

  describe('struktura objektových typů', () => {
    it('obsahuje 2 objektové typy', () => {
      expect(doc.objekty).toHaveLength(2);
    });

    it('obsahuje HraniceDopravniStavbyPlochy', () => {
      expect(doc.objekty.some((o) => o.elementName === 'HraniceDopravniStavbyPlochy')).toBe(true);
    });

    it('obsahuje PodrobnyBodZPS', () => {
      expect(doc.objekty.some((o) => o.elementName === 'PodrobnyBodZPS')).toBe(true);
    });
  });

  describe('zapisObjektu — HraniceDopravniStavbyPlochy', () => {
    let hradsp: { zaznamy: { zapisObjektu: ZapisObjektuType }[] };

    beforeAll(() => {
      const found = doc.objekty.find((o) => o.elementName === 'HraniceDopravniStavbyPlochy');
      expect(found).toBeDefined();
      hradsp = found!;
    });

    it('má 5 záznamů', () => {
      expect(hradsp.zaznamy).toHaveLength(5);
    });

    it('obsahuje 2× delete', () => {
      const dCount = hradsp.zaznamy.filter((z) => z.zapisObjektu === 'd').length;
      expect(dCount).toBe(2);
    });

    it('obsahuje 1× update', () => {
      const uCount = hradsp.zaznamy.filter((z) => z.zapisObjektu === 'u').length;
      expect(uCount).toBe(1);
    });

    it('obsahuje 2× insert', () => {
      const iCount = hradsp.zaznamy.filter((z) => z.zapisObjektu === 'i').length;
      expect(iCount).toBe(2);
    });

    it('žádný záznam nemá fallback `r` (neznámá hodnota)', () => {
      const rCount = hradsp.zaznamy.filter((z) => z.zapisObjektu === 'r').length;
      expect(rCount).toBe(0);
    });

    it('všechny zapisObjektu hodnoty jsou v povolené množině {i, u, d}', () => {
      for (const z of hradsp.zaznamy) {
        expect(['i', 'u', 'd']).toContain(z.zapisObjektu);
      }
    });
  });

  describe('zapisObjektu — PodrobnyBodZPS', () => {
    let pobzps: { zaznamy: { zapisObjektu: ZapisObjektuType }[] };

    beforeAll(() => {
      const found = doc.objekty.find((o) => o.elementName === 'PodrobnyBodZPS');
      expect(found).toBeDefined();
      pobzps = found!;
    });

    it('má 3 záznamy', () => {
      expect(pobzps.zaznamy).toHaveLength(3);
    });

    it('obsahuje 2× delete', () => {
      const dCount = pobzps.zaznamy.filter((z) => z.zapisObjektu === 'd').length;
      expect(dCount).toBe(2);
    });

    it('obsahuje 1× insert', () => {
      const iCount = pobzps.zaznamy.filter((z) => z.zapisObjektu === 'i').length;
      expect(iCount).toBe(1);
    });
  });

  describe('mazané záznamy (`d`) si zachovávají ID a geometrii', () => {
    it('všechny mazané záznamy mají vyplněné non-prázdné ID', () => {
      const allDeleted = doc.objekty.flatMap((o) =>
        o.zaznamy.filter((z) => z.zapisObjektu === 'd'),
      );
      expect(allDeleted.length).toBeGreaterThan(0);
      for (const z of allDeleted) {
        expect(z.commonAttributes?.id).toBeTruthy();
        expect(typeof z.commonAttributes?.id).toBe('string');
      }
    });

    it('všechny mazané záznamy mají alespoň jednu geometrii', () => {
      const allDeleted = doc.objekty.flatMap((o) =>
        o.zaznamy.filter((z) => z.zapisObjektu === 'd'),
      );
      for (const z of allDeleted) {
        expect(z.geometrie.length).toBeGreaterThan(0);
      }
    });

    it('konkrétní mazaný záznam HraniceDopravniStavbyPlochy ID 31000190001146044 má LineString se 3 body', () => {
      const ot = doc.objekty.find((o) => o.elementName === 'HraniceDopravniStavbyPlochy')!;
      const z = ot.zaznamy.find(
        (z) => z.commonAttributes?.id === '31000190001146044',
      );
      expect(z).toBeDefined();
      expect(z!.zapisObjektu).toBe('d');
      expect(z!.geometrie).toHaveLength(1);
      expect(z!.geometrie[0]?.type).toBe('LineString');
      // 3 body × 3 souřadnice (XYZ) = 9 hodnot
      const ls = z!.geometrie[0];
      if (ls?.type === 'LineString') {
        expect(ls.data.coordinates).toHaveLength(9);
      }
    });

    it('konkrétní mazaný záznam PodrobnyBodZPS ID 31000330007092952 má Point se Z souřadnicí', () => {
      const ot = doc.objekty.find((o) => o.elementName === 'PodrobnyBodZPS')!;
      const z = ot.zaznamy.find(
        (z) => z.commonAttributes?.id === '31000330007092952',
      );
      expect(z).toBeDefined();
      expect(z!.zapisObjektu).toBe('d');
      expect(z!.geometrie).toHaveLength(1);
      const pt = z!.geometrie[0];
      expect(pt?.type).toBe('Point');
      if (pt?.type === 'Point') {
        // [X, Y, Z]
        expect(pt.data.coordinates).toHaveLength(3);
        expect(pt.data.coordinates[2]).toBeCloseTo(538.6, 1);
      }
    });
  });

  describe('insert záznamy (`i`) — chybějící ID', () => {
    it('mají buď null, prázdný string, nebo undefined ID (ID přiděluje IS DMVS)', () => {
      const allInserts = doc.objekty.flatMap((o) =>
        o.zaznamy.filter((z) => z.zapisObjektu === 'i'),
      );
      expect(allInserts.length).toBeGreaterThan(0);
      for (const z of allInserts) {
        const id = z.commonAttributes?.id;
        // <atr:ID/> může být parserem zpracovaný jako null, undefined, nebo prázdný string —
        // všechny tři varianty jsou pro insert legitimní.
        expect(id === null || id === undefined || id === '').toBe(true);
      }
    });

    it('insert záznamy mají geometrii (vkládá se nový objekt)', () => {
      const allInserts = doc.objekty.flatMap((o) =>
        o.zaznamy.filter((z) => z.zapisObjektu === 'i'),
      );
      for (const z of allInserts) {
        expect(z.geometrie.length).toBeGreaterThan(0);
      }
    });
  });

  describe('agregované statistiky', () => {
    it('celkem 8 záznamů napříč všemi objektovými typy', () => {
      const total = doc.objekty.reduce((sum, o) => sum + o.zaznamy.length, 0);
      expect(total).toBe(8);
    });

    it('celkem 4 mazané záznamy (`d`) napříč souborem', () => {
      const total = doc.objekty.reduce(
        (sum, o) => sum + o.zaznamy.filter((z) => z.zapisObjektu === 'd').length,
        0,
      );
      expect(total).toBe(4);
    });

    it('detekce přítomnosti mazaných záznamů (helper pattern pro UI viewer)', () => {
      // Tento pattern používá viewer pro enable/disable checkboxu
      // „Zobrazit mazané": hasDeleted = doc.objekty.some(...).
      const hasDeleted = doc.objekty.some((o) =>
        o.zaznamy.some((z) => z.zapisObjektu === 'd'),
      );
      expect(hasDeleted).toBe(true);
    });
  });
});
