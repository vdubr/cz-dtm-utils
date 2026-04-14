/**
 * Integrační testy — fixture is-dtm-errors.xml
 *
 * Parsuje reálný XML soubor a ověřuje, že IS DTM kontroly
 * (checkCoordinateBounds, checkCoordinatePrecision, checkLineSelfIntersection,
 *  checkZeroLengthSegments, checkDuplicateLines, checkDuplicatePoints,
 *  checkPointProximity, checkMinSegmentLength)
 * hlásí všechny záměrně vložené chyby se správnými atributy.
 */

import { beforeAll, describe, expect, it } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import {
  checkCoordinateBounds,
  checkCoordinatePrecision,
  checkDuplicateLines,
  checkDuplicatePoints,
  checkLineSelfIntersection,
  checkMinSegmentLength,
  checkPointProximity,
  checkZeroLengthSegments,
} from '../../../src/1.4.3/topology.js';
import type { JvfDtm, TopologyError } from '../../../src/1.4.3/index.js';
import { loadSample } from '../helpers/fixtures.js';

describe('Fixture is-dtm-errors.xml — IS DTM kontroly', () => {
  let doc: JvfDtm;
  let boundsErrors: TopologyError[];
  let precisionErrors: TopologyError[];
  let lineSIErrors: TopologyError[];
  let zeroSegErrors: TopologyError[];
  let dupLineErrors: TopologyError[];
  let dupPointErrors: TopologyError[];
  let proximityErrors: TopologyError[];
  let shortSegErrors: TopologyError[];

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('is-dtm-errors.xml'));
    boundsErrors = checkCoordinateBounds(doc);
    precisionErrors = checkCoordinatePrecision(doc);
    lineSIErrors = checkLineSelfIntersection(doc);
    zeroSegErrors = checkZeroLengthSegments(doc);
    dupLineErrors = checkDuplicateLines(doc);
    dupPointErrors = checkDuplicatePoints(doc);
    proximityErrors = checkPointProximity(doc);
    shortSegErrors = checkMinSegmentLength(doc);
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

  // ─── COORD_OUT_OF_BOUNDS_XY ────────────────────────────────────────────────

  describe('COORD_OUT_OF_BOUNDS_XY', () => {
    it('je nalezena chyba COORD_OUT_OF_BOUNDS_XY pro ID_OOB_XY', () => {
      expect(findError(boundsErrors, 'COORD_OUT_OF_BOUNDS_XY', 'ID_OOB_XY')).toBeDefined();
    });

    it('má severity error', () => {
      expect(findError(boundsErrors, 'COORD_OUT_OF_BOUNDS_XY', 'ID_OOB_XY')?.severity).toBe('error');
    });

    it('má objektovyTyp PodrobnyBodZPS', () => {
      expect(findError(boundsErrors, 'COORD_OUT_OF_BOUNDS_XY', 'ID_OOB_XY')?.objektovyTyp).toBe('PodrobnyBodZPS');
    });
  });

  // ─── COORD_OUT_OF_BOUNDS_Z ─────────────────────────────────────────────────

  describe('COORD_OUT_OF_BOUNDS_Z', () => {
    it('je nalezena chyba COORD_OUT_OF_BOUNDS_Z pro ID_OOB_Z', () => {
      expect(findError(boundsErrors, 'COORD_OUT_OF_BOUNDS_Z', 'ID_OOB_Z')).toBeDefined();
    });

    it('má severity error', () => {
      expect(findError(boundsErrors, 'COORD_OUT_OF_BOUNDS_Z', 'ID_OOB_Z')?.severity).toBe('error');
    });

    it('má objektovyTyp PodrobnyBodZPS', () => {
      expect(findError(boundsErrors, 'COORD_OUT_OF_BOUNDS_Z', 'ID_OOB_Z')?.objektovyTyp).toBe('PodrobnyBodZPS');
    });
  });

  // ─── COORD_PRECISION_EXCEEDED ──────────────────────────────────────────────

  describe('COORD_PRECISION_EXCEEDED', () => {
    it('je nalezena chyba COORD_PRECISION_EXCEEDED pro ID_PRECISION', () => {
      expect(findError(precisionErrors, 'COORD_PRECISION_EXCEEDED', 'ID_PRECISION')).toBeDefined();
    });

    it('má severity error', () => {
      expect(findError(precisionErrors, 'COORD_PRECISION_EXCEEDED', 'ID_PRECISION')?.severity).toBe('error');
    });

    it('má objektovyTyp PodrobnyBodZPS', () => {
      expect(findError(precisionErrors, 'COORD_PRECISION_EXCEEDED', 'ID_PRECISION')?.objektovyTyp).toBe('PodrobnyBodZPS');
    });
  });

  // ─── DUPLICATE_POINT ───────────────────────────────────────────────────────

  describe('DUPLICATE_POINT', () => {
    it('je nalezena chyba DUPLICATE_POINT pro ID_DUP_PT_B', () => {
      expect(findError(dupPointErrors, 'DUPLICATE_POINT', 'ID_DUP_PT_B')).toBeDefined();
    });

    it('má severity error', () => {
      expect(findError(dupPointErrors, 'DUPLICATE_POINT', 'ID_DUP_PT_B')?.severity).toBe('error');
    });

    it('má objektovyTyp PodrobnyBodZPS', () => {
      expect(findError(dupPointErrors, 'DUPLICATE_POINT', 'ID_DUP_PT_B')?.objektovyTyp).toBe('PodrobnyBodZPS');
    });
  });

  // ─── POINTS_TOO_CLOSE ──────────────────────────────────────────────────────

  describe('POINTS_TOO_CLOSE', () => {
    it('je nalezena alespoň jedna chyba POINTS_TOO_CLOSE', () => {
      expect(findAllErrors(proximityErrors, 'POINTS_TOO_CLOSE').length).toBeGreaterThanOrEqual(1);
    });

    it('má severity warning', () => {
      const err = findAllErrors(proximityErrors, 'POINTS_TOO_CLOSE')[0];
      expect(err?.severity).toBe('warning');
    });

    it('má objektovyTyp PodrobnyBodZPS', () => {
      const err = findAllErrors(proximityErrors, 'POINTS_TOO_CLOSE')[0];
      expect(err?.objektovyTyp).toBe('PodrobnyBodZPS');
    });

    it('obsahuje ID_CLOSE_A nebo ID_CLOSE_B jako objectId', () => {
      const ids = findAllErrors(proximityErrors, 'POINTS_TOO_CLOSE').map(e => e.objectId);
      const hasExpected = ids.some(id => id === 'ID_CLOSE_A' || id === 'ID_CLOSE_B');
      expect(hasExpected).toBe(true);
    });
  });

  // ─── LINE_SELF_INTERSECTION ────────────────────────────────────────────────

  describe('LINE_SELF_INTERSECTION', () => {
    it('je nalezena chyba LINE_SELF_INTERSECTION pro ID_LINE_SI', () => {
      expect(findError(lineSIErrors, 'LINE_SELF_INTERSECTION', 'ID_LINE_SI')).toBeDefined();
    });

    it('má severity error', () => {
      expect(findError(lineSIErrors, 'LINE_SELF_INTERSECTION', 'ID_LINE_SI')?.severity).toBe('error');
    });

    it('má objektovyTyp HraniceStavby', () => {
      expect(findError(lineSIErrors, 'LINE_SELF_INTERSECTION', 'ID_LINE_SI')?.objektovyTyp).toBe('HraniceStavby');
    });
  });

  // ─── SEGMENT_ZERO_LENGTH ───────────────────────────────────────────────────

  describe('SEGMENT_ZERO_LENGTH', () => {
    it('je nalezena chyba SEGMENT_ZERO_LENGTH pro ID_ZERO_SEG', () => {
      expect(findError(zeroSegErrors, 'SEGMENT_ZERO_LENGTH', 'ID_ZERO_SEG')).toBeDefined();
    });

    it('má severity error', () => {
      expect(findError(zeroSegErrors, 'SEGMENT_ZERO_LENGTH', 'ID_ZERO_SEG')?.severity).toBe('error');
    });

    it('má objektovyTyp HraniceStavby', () => {
      expect(findError(zeroSegErrors, 'SEGMENT_ZERO_LENGTH', 'ID_ZERO_SEG')?.objektovyTyp).toBe('HraniceStavby');
    });
  });

  // ─── DUPLICATE_LINE_ERROR ──────────────────────────────────────────────────

  describe('DUPLICATE_LINE_ERROR', () => {
    it('je nalezena chyba DUPLICATE_LINE_ERROR pro ID_DUP_LINE_A', () => {
      expect(findError(dupLineErrors, 'DUPLICATE_LINE_ERROR', 'ID_DUP_LINE_A')).toBeDefined();
    });

    it('má severity error', () => {
      expect(findError(dupLineErrors, 'DUPLICATE_LINE_ERROR', 'ID_DUP_LINE_A')?.severity).toBe('error');
    });

    it('má objektovyTyp HraniceStavby', () => {
      expect(findError(dupLineErrors, 'DUPLICATE_LINE_ERROR', 'ID_DUP_LINE_A')?.objektovyTyp).toBe('HraniceStavby');
    });
  });

  // ─── DUPLICATE_LINE_WARNING ────────────────────────────────────────────────

  describe('DUPLICATE_LINE_WARNING', () => {
    it('je nalezena chyba DUPLICATE_LINE_WARNING pro ID_DUP_LINE_C nebo ID_DUP_LINE_D', () => {
      const warnC = findError(dupLineErrors, 'DUPLICATE_LINE_WARNING', 'ID_DUP_LINE_C');
      const warnD = findError(dupLineErrors, 'DUPLICATE_LINE_WARNING', 'ID_DUP_LINE_D');
      expect(warnC ?? warnD).toBeDefined();
    });

    it('má severity warning', () => {
      const warn =
        findError(dupLineErrors, 'DUPLICATE_LINE_WARNING', 'ID_DUP_LINE_C') ??
        findError(dupLineErrors, 'DUPLICATE_LINE_WARNING', 'ID_DUP_LINE_D');
      expect(warn?.severity).toBe('warning');
    });

    it('má objektovyTyp HraniceStavby', () => {
      const warn =
        findError(dupLineErrors, 'DUPLICATE_LINE_WARNING', 'ID_DUP_LINE_C') ??
        findError(dupLineErrors, 'DUPLICATE_LINE_WARNING', 'ID_DUP_LINE_D');
      expect(warn?.objektovyTyp).toBe('HraniceStavby');
    });
  });

  // ─── SEGMENT_TOO_SHORT ─────────────────────────────────────────────────────

  describe('SEGMENT_TOO_SHORT', () => {
    it('je nalezena chyba SEGMENT_TOO_SHORT pro ID_SHORT_SEG', () => {
      expect(findError(shortSegErrors, 'SEGMENT_TOO_SHORT', 'ID_SHORT_SEG')).toBeDefined();
    });

    it('má severity warning', () => {
      expect(findError(shortSegErrors, 'SEGMENT_TOO_SHORT', 'ID_SHORT_SEG')?.severity).toBe('warning');
    });

    it('má objektovyTyp HraniceStavby', () => {
      expect(findError(shortSegErrors, 'SEGMENT_TOO_SHORT', 'ID_SHORT_SEG')?.objektovyTyp).toBe('HraniceStavby');
    });
  });
});
