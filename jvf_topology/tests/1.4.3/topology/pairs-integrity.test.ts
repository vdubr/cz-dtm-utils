import { describe, expect, it } from 'vitest';
import {
  DEFBOD_PLOCHA_PAIRS,
  DEFBOD_PLOCHA_PAIRS_1501,
  OSA_OBVOD_PAIRS,
  OSA_OBVOD_PAIRS_1501,
} from '../../../src/1.4.3/index.js';
import { ENTITY_CATALOG, getEntityCatalog } from 'jvf-parser';

/**
 * Regresní test: všechny elementName v DEFBOD_PLOCHA_PAIRS a OSA_OBVOD_PAIRS
 * musí odpovídat reálným entitám v ENTITY_CATALOG (generovaný z XSD).
 *
 * Motivace: překlep typu "StavbaProZpevneniPovrchu DefinicniBod" (mezera)
 * vedl k tomu, že se topologická kontrola pro daný pár nikdy nespustila.
 */
describe('topology pair integrity vs ENTITY_CATALOG', () => {
  it('všechny DEFBOD_PLOCHA_PAIRS.defbod existují v katalogu', () => {
    const missing = DEFBOD_PLOCHA_PAIRS
      .map((p) => p.defbod)
      .filter((name) => !(name in ENTITY_CATALOG));
    expect(missing, `Chybějící defbod entity: ${missing.join(', ')}`).toEqual([]);
  });

  it('všechny DEFBOD_PLOCHA_PAIRS.plocha existují v katalogu', () => {
    const missing = DEFBOD_PLOCHA_PAIRS
      .map((p) => p.plocha)
      .filter((name) => !(name in ENTITY_CATALOG));
    expect(missing, `Chybějící plocha entity: ${missing.join(', ')}`).toEqual([]);
  });

  it('všechny OSA_OBVOD_PAIRS.osa a .obvod existují v katalogu', () => {
    const missing: string[] = [];
    for (const p of OSA_OBVOD_PAIRS) {
      if (!(p.osa in ENTITY_CATALOG)) missing.push(p.osa);
      if (!(p.obvod in ENTITY_CATALOG)) missing.push(p.obvod);
    }
    expect(missing).toEqual([]);
  });

  it('žádný název v párech neobsahuje whitespace', () => {
    const hasWs = (s: string): boolean => /\s/.test(s);
    const bad: string[] = [];
    for (const p of DEFBOD_PLOCHA_PAIRS) {
      if (hasWs(p.defbod)) bad.push(p.defbod);
      if (hasWs(p.plocha)) bad.push(p.plocha);
    }
    for (const p of OSA_OBVOD_PAIRS) {
      if (hasWs(p.osa)) bad.push(p.osa);
      if (hasWs(p.obvod)) bad.push(p.obvod);
    }
    expect(bad).toEqual([]);
  });
});

describe('topology pair integrity — 1.5.0.1 vs katalog 1.5.0.1', () => {
  const CATALOG_1501 = getEntityCatalog('1.5.0.1');

  it('66 párů DefBod↔Plocha, všechny existují v katalogu 1.5.0.1', () => {
    expect(DEFBOD_PLOCHA_PAIRS_1501.length).toBe(66);
    const missing: string[] = [];
    for (const p of DEFBOD_PLOCHA_PAIRS_1501) {
      if (!(p.defbod in CATALOG_1501)) missing.push(p.defbod);
      if (!(p.plocha in CATALOG_1501)) missing.push(p.plocha);
    }
    expect(missing).toEqual([]);
  });

  it('obsahuje nový pár RozestavenaPlocha (0100000381)', () => {
    const hasRozest = DEFBOD_PLOCHA_PAIRS_1501.some(
      (p) => p.defbod === 'RozestavenaPlochaDefinicniBod' && p.plocha === 'RozestavenaPlochaPlocha'
    );
    expect(hasRozest).toBe(true);
  });

  it('OSA_OBVOD_PAIRS_1501 existují v katalogu 1.5.0.1', () => {
    const missing: string[] = [];
    for (const p of OSA_OBVOD_PAIRS_1501) {
      if (!(p.osa in CATALOG_1501)) missing.push(p.osa);
      if (!(p.obvod in CATALOG_1501)) missing.push(p.obvod);
    }
    expect(missing).toEqual([]);
  });

  it('žádný pár neobsahuje PSPI objekt (code_base 0200000*)', () => {
    const pspi = DEFBOD_PLOCHA_PAIRS_1501.filter(
      (p) =>
        CATALOG_1501[p.defbod]?.codeBase.startsWith('0200000') ||
        CATALOG_1501[p.plocha]?.codeBase.startsWith('0200000')
    );
    expect(pspi).toEqual([]);
  });
});
