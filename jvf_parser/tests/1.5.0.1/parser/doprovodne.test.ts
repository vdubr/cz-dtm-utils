import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { TYP_DATOVE_SADY_VYDEJ_PSPI } from 'jvf-dtm-types';
import { parseJvfDtm1501 } from '../../../src/1.5.0.1/parser.js';

const SAMPLES = resolve(import.meta.dirname, '../../../samples/1.5.0.1');
const parse = (name: string) => parseJvfDtm1501(readFileSync(resolve(SAMPLES, name), 'utf-8'));

describe('doprovodné informace + TypDatoveSady (1.5.0.1)', () => {
  it('ZPS: OblastiKompletniZPS (typ REF, plocha) + TypDatoveSady=3', () => {
    const dtm = parse('ukazkaZPS.jvf.xml');
    expect(dtm.typDatoveSady).toBe(3);
    expect(dtm.doprovodneInformace).toBeDefined();
    const oblasti = dtm.doprovodneInformace!.oblastiKompletniZPS;
    expect(oblasti.length).toBe(1);
    expect(oblasti[0].typ).toBe('REF');
    expect(oblasti[0].plocha).toBeDefined();
    expect(oblasti[0].plocha!.exterior.length).toBe(10);
  });

  it('PSPI export: TypDatoveSady=11 (Výdej PSPI)', () => {
    const dtm = parse('ukazka_PSPI_export.jvf.xml');
    expect(dtm.typDatoveSady).toBe(TYP_DATOVE_SADY_VYDEJ_PSPI);
    expect(dtm.typDatoveSady).toBe(11);
  });

  it('OPL: TypDatoveSady=2 + oblast kompletní ZPS', () => {
    const dtm = parse('ukazka_OPL.jvf.xml');
    expect(dtm.typDatoveSady).toBe(2);
    expect(dtm.doprovodneInformace?.oblastiKompletniZPS.length).toBe(1);
  });

  it('DI: bez UdajeOVydeji → typDatoveSady undefined, bez oblastí', () => {
    const dtm = parse('ukazka_DI.jvf.xml');
    expect(dtm.typDatoveSady).toBeUndefined();
    expect(dtm.doprovodneInformace).toBeUndefined();
  });

  it('KI: objekty 1.5.0.1 nemají oblastObjektuKI (zrušeno, změna #8)', () => {
    const dtm = parse('ukazkaZPS.jvf.xml');
    for (const o of dtm.objekty) {
      for (const z of o.zaznamy) {
        expect(z.oblastObjektuKI).toBeUndefined();
      }
    }
  });
});
