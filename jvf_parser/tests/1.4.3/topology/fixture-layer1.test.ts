/**
 * Integrační testy — fixture layer1-errors.xml
 *
 * Parsuje reálný XML soubor a ověřuje, že checkGeometricValidity()
 * a checkPolygonMultiCurveConsistency() hlásí všechny záměrně vložené chyby
 * s očekávaným kódem, severity, objektovyTyp a objectId.
 */

import { beforeAll, describe, expect, it } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import {
  checkGeometricValidity,
  checkPolygonMultiCurveConsistency,
} from '../../../src/1.4.3/topology.js';
import type { JvfDtm, TopologyError } from '../../../src/1.4.3/index.js';
import { loadSample } from '../helpers/fixtures.js';

describe('Fixture layer1-errors.xml — Vrstva 1 + 2', () => {
  let doc: JvfDtm;
  let layer1Errors: TopologyError[];
  let layer2Errors: TopologyError[];

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('layer1-errors.xml'));
    layer1Errors = checkGeometricValidity(doc);
    layer2Errors = checkPolygonMultiCurveConsistency(doc);
  });

  // ─── Helpers ────────────────────────────────────────────────────────────────

  function findError(
    errors: TopologyError[],
    code: string,
    objectId?: string
  ): TopologyError | undefined {
    return errors.find(
      e => e.code === code && (objectId === undefined || e.objectId === objectId)
    );
  }

  // ─── INVALID_COORDINATE ────────────────────────────────────────────────────

  describe('INVALID_COORDINATE', () => {
    it('je nalezena chyba INVALID_COORDINATE pro ID_INVALID_COORD', () => {
      const err = findError(layer1Errors, 'INVALID_COORDINATE', 'ID_INVALID_COORD');
      expect(err).toBeDefined();
    });

    it('má severity error', () => {
      const err = findError(layer1Errors, 'INVALID_COORDINATE', 'ID_INVALID_COORD');
      expect(err?.severity).toBe('error');
    });

    it('má objektovyTyp PodrobnyBodZPS', () => {
      const err = findError(layer1Errors, 'INVALID_COORDINATE', 'ID_INVALID_COORD');
      expect(err?.objektovyTyp).toBe('PodrobnyBodZPS');
    });
  });

  // ─── SRS_DIMENSION_MISMATCH ────────────────────────────────────────────────

  describe('SRS_DIMENSION_MISMATCH', () => {
    it('je nalezena chyba SRS_DIMENSION_MISMATCH pro ID_DIM_MISMATCH', () => {
      const err = findError(layer1Errors, 'SRS_DIMENSION_MISMATCH', 'ID_DIM_MISMATCH');
      expect(err).toBeDefined();
    });

    it('má severity error', () => {
      const err = findError(layer1Errors, 'SRS_DIMENSION_MISMATCH', 'ID_DIM_MISMATCH');
      expect(err?.severity).toBe('error');
    });

    it('má objektovyTyp PodrobnyBodZPS', () => {
      const err = findError(layer1Errors, 'SRS_DIMENSION_MISMATCH', 'ID_DIM_MISMATCH');
      expect(err?.objektovyTyp).toBe('PodrobnyBodZPS');
    });
  });

  // ─── LINESTRING_TOO_FEW_POINTS ─────────────────────────────────────────────

  describe('LINESTRING_TOO_FEW_POINTS', () => {
    it('je nalezena chyba LINESTRING_TOO_FEW_POINTS pro ID_LINE_FEW_PTS', () => {
      const err = findError(layer1Errors, 'LINESTRING_TOO_FEW_POINTS', 'ID_LINE_FEW_PTS');
      expect(err).toBeDefined();
    });

    it('má severity error', () => {
      const err = findError(layer1Errors, 'LINESTRING_TOO_FEW_POINTS', 'ID_LINE_FEW_PTS');
      expect(err?.severity).toBe('error');
    });

    it('má objektovyTyp HraniceStavby', () => {
      const err = findError(layer1Errors, 'LINESTRING_TOO_FEW_POINTS', 'ID_LINE_FEW_PTS');
      expect(err?.objektovyTyp).toBe('HraniceStavby');
    });
  });

  // ─── RING_TOO_FEW_POINTS ───────────────────────────────────────────────────

  describe('RING_TOO_FEW_POINTS', () => {
    it('je nalezena chyba RING_TOO_FEW_POINTS pro ID_RING_FEW_PTS', () => {
      const err = findError(layer1Errors, 'RING_TOO_FEW_POINTS', 'ID_RING_FEW_PTS');
      expect(err).toBeDefined();
    });

    it('má severity error', () => {
      const err = findError(layer1Errors, 'RING_TOO_FEW_POINTS', 'ID_RING_FEW_PTS');
      expect(err?.severity).toBe('error');
    });

    it('má objektovyTyp BudovaPlocha', () => {
      const err = findError(layer1Errors, 'RING_TOO_FEW_POINTS', 'ID_RING_FEW_PTS');
      expect(err?.objektovyTyp).toBe('BudovaPlocha');
    });
  });

  // ─── RING_NOT_CLOSED ───────────────────────────────────────────────────────

  describe('RING_NOT_CLOSED', () => {
    it('je nalezena chyba RING_NOT_CLOSED pro ID_RING_NOT_CLOSED', () => {
      const err = findError(layer1Errors, 'RING_NOT_CLOSED', 'ID_RING_NOT_CLOSED');
      expect(err).toBeDefined();
    });

    it('má severity error', () => {
      const err = findError(layer1Errors, 'RING_NOT_CLOSED', 'ID_RING_NOT_CLOSED');
      expect(err?.severity).toBe('error');
    });

    it('má objektovyTyp BudovaPlocha', () => {
      const err = findError(layer1Errors, 'RING_NOT_CLOSED', 'ID_RING_NOT_CLOSED');
      expect(err?.objektovyTyp).toBe('BudovaPlocha');
    });
  });

  // ─── RING_SELF_INTERSECTION ────────────────────────────────────────────────

  describe('RING_SELF_INTERSECTION', () => {
    it('je nalezena chyba RING_SELF_INTERSECTION pro ID_RING_SELF_INT', () => {
      const err = findError(layer1Errors, 'RING_SELF_INTERSECTION', 'ID_RING_SELF_INT');
      expect(err).toBeDefined();
    });

    it('má severity error', () => {
      const err = findError(layer1Errors, 'RING_SELF_INTERSECTION', 'ID_RING_SELF_INT');
      expect(err?.severity).toBe('error');
    });

    it('má objektovyTyp BudovaPlocha', () => {
      const err = findError(layer1Errors, 'RING_SELF_INTERSECTION', 'ID_RING_SELF_INT');
      expect(err?.objektovyTyp).toBe('BudovaPlocha');
    });
  });

  // ─── POLYGON_MULTICURVE_POINT_COUNT_MISMATCH ───────────────────────────────

  describe('POLYGON_MULTICURVE_POINT_COUNT_MISMATCH', () => {
    it('je nalezena chyba POLYGON_MULTICURVE_POINT_COUNT_MISMATCH pro ID_PMC_COUNT', () => {
      const err = findError(layer2Errors, 'POLYGON_MULTICURVE_POINT_COUNT_MISMATCH', 'ID_PMC_COUNT');
      expect(err).toBeDefined();
    });

    it('má severity error', () => {
      const err = findError(layer2Errors, 'POLYGON_MULTICURVE_POINT_COUNT_MISMATCH', 'ID_PMC_COUNT');
      expect(err?.severity).toBe('error');
    });

    it('má objektovyTyp BudovaPlocha', () => {
      const err = findError(layer2Errors, 'POLYGON_MULTICURVE_POINT_COUNT_MISMATCH', 'ID_PMC_COUNT');
      expect(err?.objektovyTyp).toBe('BudovaPlocha');
    });
  });

  // ─── POLYGON_MULTICURVE_COORDS_MISMATCH ────────────────────────────────────

  describe('POLYGON_MULTICURVE_COORDS_MISMATCH', () => {
    it('je nalezena chyba POLYGON_MULTICURVE_COORDS_MISMATCH pro ID_PMC_COORDS', () => {
      const err = findError(layer2Errors, 'POLYGON_MULTICURVE_COORDS_MISMATCH', 'ID_PMC_COORDS');
      expect(err).toBeDefined();
    });

    it('má severity error', () => {
      const err = findError(layer2Errors, 'POLYGON_MULTICURVE_COORDS_MISMATCH', 'ID_PMC_COORDS');
      expect(err?.severity).toBe('error');
    });

    it('má objektovyTyp BudovaPlocha', () => {
      const err = findError(layer2Errors, 'POLYGON_MULTICURVE_COORDS_MISMATCH', 'ID_PMC_COORDS');
      expect(err?.objektovyTyp).toBe('BudovaPlocha');
    });
  });

  // ─── Souhrnný test: žádné neočekávané objekty nejsou v chybách ─────────────

  it('všechny layer1 chyby pochází z PodrobnyBodZPS, HraniceStavby nebo BudovaPlocha', () => {
    const allowedTypes = new Set(['PodrobnyBodZPS', 'HraniceStavby', 'BudovaPlocha']);
    for (const err of layer1Errors) {
      expect(allowedTypes.has(err.objektovyTyp), `Neočekávaný objektovyTyp: ${err.objektovyTyp}`).toBe(true);
    }
  });

  it('všechny layer2 chyby pochází z BudovaPlocha', () => {
    for (const err of layer2Errors) {
      expect(err.objektovyTyp).toBe('BudovaPlocha');
    }
  });
});
