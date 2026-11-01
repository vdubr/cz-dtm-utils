/**
 * JVF DTM 1.5.0.2 — opravná verze 1.5.0.1 (ČÚZK 9. 9. 2026, produkce IS DMVS
 * od 18. 11. 2026). Stejná struktura, sdílený parser 1.5.0.1, vlastní katalog.
 */
import { describe, it, expect, vi } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  parseJvfDtm,
  resolveDtmVersion,
  getEntityCatalog,
  labelForAttribute,
  isSupportedVersion,
  LATEST_JVF_VERSION,
  baseJvfVersionOf,
} from '../../src/index.js';

const ROOT = resolve(import.meta.dirname, '../..');
const FIXTURE = readFileSync(resolve(ROOT, '../jvf_viewer/public/fixtures/test_verze_1.5.0.2.xml'), 'utf-8');

describe('JVF DTM 1.5.0.2', () => {
  it('je podporovaná a nejnovější verze JVF', () => {
    expect(isSupportedVersion('1.5.0.2')).toBe(true);
    expect(LATEST_JVF_VERSION).toBe('1.5.0.2');
    expect(baseJvfVersionOf('udm-2.1.1')).toBe('1.5.0.2');
    expect(baseJvfVersionOf('zxml-1.5.1.6')).toBe('1.5.0.2');
  });

  it('katalog = všech 393 XSD objektů, O6 s IDRDTI (změna 1.5.0.2)', () => {
    const n = readdirSync(resolve(ROOT, 'docs/1.5.0.2/xsd/objekty')).filter((f) => f.endsWith('.xsd')).length;
    const cat = getEntityCatalog('1.5.0.2');
    expect(Object.keys(cat)).toHaveLength(n);
    expect(n).toBe(393);
    expect(cat['O6']?.specificAttrs).toContain('IDRDTI');
    expect(getEntityCatalog('1.5.0.1')['O6']?.specificAttrs).not.toContain('IDRDTI');
  });

  it('opravený popisek číselníku (příkop, násep, zářez)', () => {
    expect(labelForAttribute('TypDopravniStavbyNeboPlochy', 14, '1.5.0.2')).toBe(
      'příkop, násep, zářez dopravní stavby'
    );
  });

  it('router: deklarovaná 1.5.0.2 → parser 1.5, verze vyřešená, bez varování', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(resolveDtmVersion(FIXTURE)).toBe('1.5.0.2');
    const dtm = parseJvfDtm(FIXTURE);
    expect(dtm.verze).toBe('1.5.0.2');
    expect(dtm.verzeJvfDtm).toBe('1.5.0.2');
    expect(dtm.dialect).toBeUndefined();
    expect(dtm.objekty.length).toBeGreaterThan(0);
    expect(dtm.objekty[0]?.zaznamy[0]?.recordKind).toBeDefined();
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });
});
