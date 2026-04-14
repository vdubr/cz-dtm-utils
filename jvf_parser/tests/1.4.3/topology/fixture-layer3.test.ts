/**
 * Integrační testy — fixture layer3-errors.xml
 *
 * Parsuje reálný XML soubor a ověřuje, že Vrstva 3 kontrol
 * (checkDefBodInPlocha, checkOsaInObvod, checkDanglingEnds)
 * hlásí všechny záměrně vložené chyby se správnými atributy.
 */

import { beforeAll, describe, expect, it } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import {
  checkDanglingEnds,
  checkDefBodInPlocha,
  checkOsaInObvod,
} from '../../../src/1.4.3/topology.js';
import type { JvfDtm, TopologyError } from '../../../src/1.4.3/index.js';
import { loadSample } from '../helpers/fixtures.js';

describe('Fixture layer3-errors.xml — Vrstva 3', () => {
  let doc: JvfDtm;
  let defbodErrors: TopologyError[];
  let osaErrors: TopologyError[];
  let danglingErrors: TopologyError[];

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('layer3-errors.xml'));
    defbodErrors = checkDefBodInPlocha(doc);
    osaErrors = checkOsaInObvod(doc);
    danglingErrors = checkDanglingEnds(doc);
  });

  // ─── Helper ─────────────────────────────────────────────────────────────────

  function findError(
    errors: TopologyError[],
    code: string,
    objectId?: string
  ): TopologyError | undefined {
    return errors.find(
      e => e.code === code && (objectId === undefined || e.objectId === objectId)
    );
  }

  function findAllErrors(
    errors: TopologyError[],
    code: string
  ): TopologyError[] {
    return errors.filter(e => e.code === code);
  }

  // ─── DEFBOD_OUTSIDE_PLOCHA ─────────────────────────────────────────────────

  describe('DEFBOD_OUTSIDE_PLOCHA', () => {
    it('je nalezena chyba DEFBOD_OUTSIDE_PLOCHA pro ID_DEFBOD_OUTSIDE', () => {
      expect(findError(defbodErrors, 'DEFBOD_OUTSIDE_PLOCHA', 'ID_DEFBOD_OUTSIDE')).toBeDefined();
    });

    it('má severity error', () => {
      expect(findError(defbodErrors, 'DEFBOD_OUTSIDE_PLOCHA', 'ID_DEFBOD_OUTSIDE')?.severity).toBe('error');
    });

    it('má objektovyTyp BudovaDefinicniBod', () => {
      expect(findError(defbodErrors, 'DEFBOD_OUTSIDE_PLOCHA', 'ID_DEFBOD_OUTSIDE')?.objektovyTyp)
        .toBe('BudovaDefinicniBod');
    });

    it('má geometryIndex 0', () => {
      expect(findError(defbodErrors, 'DEFBOD_OUTSIDE_PLOCHA', 'ID_DEFBOD_OUTSIDE')?.geometryIndex).toBe(0);
    });
  });

  // ─── DEFBOD_NO_PLOCHA ──────────────────────────────────────────────────────

  describe('DEFBOD_NO_PLOCHA', () => {
    it('je nalezena chyba DEFBOD_NO_PLOCHA pro ID_DEFBOD_NOPLOCHA', () => {
      expect(findError(defbodErrors, 'DEFBOD_NO_PLOCHA', 'ID_DEFBOD_NOPLOCHA')).toBeDefined();
    });

    it('má severity warning', () => {
      expect(findError(defbodErrors, 'DEFBOD_NO_PLOCHA', 'ID_DEFBOD_NOPLOCHA')?.severity).toBe('warning');
    });

    it('má objektovyTyp JezeroDefinicniBod', () => {
      expect(findError(defbodErrors, 'DEFBOD_NO_PLOCHA', 'ID_DEFBOD_NOPLOCHA')?.objektovyTyp)
        .toBe('JezeroDefinicniBod');
    });
  });

  // ─── OSA_OUTSIDE_OBVOD ─────────────────────────────────────────────────────

  describe('OSA_OUTSIDE_OBVOD', () => {
    it('je nalezena alespoň jedna chyba OSA_OUTSIDE_OBVOD pro ID_OSA_OUTSIDE', () => {
      expect(findError(osaErrors, 'OSA_OUTSIDE_OBVOD', 'ID_OSA_OUTSIDE')).toBeDefined();
    });

    it('má severity error', () => {
      expect(findError(osaErrors, 'OSA_OUTSIDE_OBVOD', 'ID_OSA_OUTSIDE')?.severity).toBe('error');
    });

    it('má objektovyTyp OsaPozemniKomunikace', () => {
      expect(findError(osaErrors, 'OSA_OUTSIDE_OBVOD', 'ID_OSA_OUTSIDE')?.objektovyTyp)
        .toBe('OsaPozemniKomunikace');
    });
  });

  // ─── LINE_DANGLING_END ─────────────────────────────────────────────────────

  describe('LINE_DANGLING_END', () => {
    it('jsou nalezeny přesně 2 chyby LINE_DANGLING_END (start A a end C)', () => {
      expect(findAllErrors(danglingErrors, 'LINE_DANGLING_END').length).toBe(2);
    });

    it('je LINE_DANGLING_END pro ID_LINE_DANGLE_A (volný start)', () => {
      expect(findError(danglingErrors, 'LINE_DANGLING_END', 'ID_LINE_DANGLE_A')).toBeDefined();
    });

    it('je LINE_DANGLING_END pro ID_LINE_DANGLE_C (volný end)', () => {
      expect(findError(danglingErrors, 'LINE_DANGLING_END', 'ID_LINE_DANGLE_C')).toBeDefined();
    });

    it('střední linie ID_LINE_DANGLE_B nemá žádný dangling end', () => {
      expect(findError(danglingErrors, 'LINE_DANGLING_END', 'ID_LINE_DANGLE_B')).toBeUndefined();
    });

    it('mají severity warning', () => {
      for (const err of findAllErrors(danglingErrors, 'LINE_DANGLING_END')) {
        expect(err.severity).toBe('warning');
      }
    });

    it('mají objektovyTyp HraniceStavby', () => {
      for (const err of findAllErrors(danglingErrors, 'LINE_DANGLING_END')) {
        expect(err.objektovyTyp).toBe('HraniceStavby');
      }
    });
  });

  // ─── Žádné falešné pozitivy ────────────────────────────────────────────────

  it('DefBod BudovaDefinicniBod a JezeroDefinicniBod jsou jediné objekty v defbod chybách', () => {
    const types = new Set(defbodErrors.map(e => e.objektovyTyp));
    for (const t of types) {
      expect(['BudovaDefinicniBod', 'JezeroDefinicniBod'].includes(t),
        `Neočekávaný objektovyTyp: ${t}`).toBe(true);
    }
  });

  it('checkOsaInObvod hlásí chyby pouze pro OsaPozemniKomunikace', () => {
    for (const err of osaErrors) {
      expect(err.objektovyTyp).toBe('OsaPozemniKomunikace');
    }
  });

  it('checkDanglingEnds hlásí chyby pouze pro HraniceStavby', () => {
    for (const err of danglingErrors) {
      expect(err.objektovyTyp).toBe('HraniceStavby');
    }
  });
});
