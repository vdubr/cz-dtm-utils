import { describe, expect, it } from 'vitest';
import {
  DEFBOD_PLOCHA_PAIRS,
  OSA_OBVOD_PAIRS,
} from '../../../src/1.4.3/index.js';
import { ENTITY_CATALOG } from 'jvf-parser';

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
