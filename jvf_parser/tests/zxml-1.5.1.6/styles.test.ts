import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { ZXML_STYLES } from '../../src/zxml-1.5.1.6/generated/styles.js';
import { ZXML_STYLES as ZXML_STYLES_1421 } from '../../src/zxml-1.4.2.1/generated/styles.js';

const SYMBOL_DIR = resolve(import.meta.dirname, '../../../jvf_viewer/public/symboly/zxml');

/**
 * Regrese symbologie ŽXML (scripts/zxml/build-zxml-styles.py): značky
 * vektorizované z fotokatalogu MOZeK, vzory linií změřené z jeho vzorků,
 * pravidla podle číselníků LDM DTMŽ 1.5.0.2.
 */
describe('ZXML_STYLES — symbologie ŽXML (fotokatalog MOZeK)', () => {
  const entries = Object.entries(ZXML_STYLES);

  it('pokrývá objekty LDM s klíčem <codeBase>-<suffix>', () => {
    expect(entries.length).toBeGreaterThan(500);
    expect(entries.every(([k]) => /^\d{10}-\d{2}$/.test(k))).toBe(true);
    expect(entries.every(([, s]) => /^#[0-9a-f]{6}$/.test(s.base.color ?? ''))).toBe(true);
  });

  it('1.4.2.1 a 1.5.1.6 sdílí stejnou tabulku', () => {
    expect(ZXML_STYLES_1421).toEqual(ZXML_STYLES);
  });

  it('každá použitá značka má černou variantu SVG ve vieweru', () => {
    const symbols = new Set<string>();
    for (const [, s] of entries) {
      if (s.base.symbol) symbols.add(s.base.symbol);
      for (const r of s.rules ?? []) {
        for (const v of Object.values(r.values)) if (v.symbol) symbols.add(v.symbol);
      }
    }
    expect(symbols.size).toBeGreaterThan(100);
    for (const sym of symbols) {
      expect(sym).toMatch(/^sz-[0-9a-f]{8}$/);
      expect(existsSync(resolve(SYMBOL_DIR, `${sym}_000000.svg`)), sym).toBe(true);
    }
  });

  it('všechna čárkování mají sudý počet prvků a kladné délky', () => {
    const patterns = entries.flatMap(([, s]) => [
      s.base.dashMm,
      ...(s.rules ?? []).flatMap((r) => Object.values(r.values).map((v) => v.dashMm)),
    ]);
    for (const p of patterns.filter((p): p is number[] => !!p)) {
      expect(p.length % 2).toBe(0);
      expect(p.every((v) => v > 0)).toBe(true);
    }
  });

  it('trasa drátovodu (SŽ-ZDT): čárkování podle TypDratovodu, barva ZDT', () => {
    const s = ZXML_STYLES['9990000150-02'];
    expect(s?.base.color).toBe('#0070c0');
    const rule = s?.rules?.find((r) => r.attr === 'TypDratovodu');
    // „ve žlabu" (100694): čárka – tečka (13,4 / 2,3 / 0,9 / 2,3 mm)
    expect(rule?.values['100694']?.dashMm).toEqual([13.4, 2.3, 0.9, 2.3]);
    expect(rule?.values['100693']?.dashMm?.length).toBe(8);
  });

  it('návěstidlo tabulka (SŽ-ZDD): symbol podle TypNavestidlaTabulka a natočení', () => {
    const s = ZXML_STYLES['9990000487-01'];
    expect(s?.base.rotationAttr).toBe('Natoceni');
    const rule = s?.rules?.find((r) => r.attr === 'TypNavestidlaTabulka');
    expect(Object.keys(rule?.values ?? {}).length).toBeGreaterThan(30);
  });
});
