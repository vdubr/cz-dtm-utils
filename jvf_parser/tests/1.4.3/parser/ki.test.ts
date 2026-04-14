import { describe, expect, it, beforeAll } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import type { JvfDtm } from '../../../src/1.4.3/types.js';
import { loadSample } from '../helpers/fixtures.js';

describe('TI - KI file (ukazka_KI.xml)', () => {
  let doc: JvfDtm;

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('ukazka_KI.xml'));
  });

  it('parses TypZapisu as změnové věty', () => {
    expect(doc.typZapisu).toBe('změnové věty');
  });

  it('has two object types', () => {
    expect(doc.objekty).toHaveLength(2);
  });

  it('first object type is PodperneZarizeni', () => {
    expect(doc.objekty[0]?.elementName).toBe('PodperneZarizeni');
  });

  it('second object type is TrasaElektrickeSite', () => {
    expect(doc.objekty[1]?.elementName).toBe('TrasaElektrickeSite');
  });

  describe('PodperneZarizeni', () => {
    it('has zapisObjektu = i', () => {
      expect(doc.objekty[0]?.zaznamy[0]?.zapisObjektu).toBe('i');
    });

    it('has Point geometry', () => {
      const geom = doc.objekty[0]?.zaznamy[0]?.geometrie;
      expect(geom?.some((g) => g.type === 'Point')).toBe(true);
    });

    it('Point has correct coordinates', () => {
      const pointGeom = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'Point');
      if (pointGeom?.type !== 'Point') throw new Error('Expected Point');
      expect(pointGeom.data.coordinates[0]).toBeCloseTo(-671692.46, 2);
      expect(pointGeom.data.coordinates[1]).toBeCloseTo(-1115410.82, 2);
      expect(pointGeom.data.coordinates[2]).toBeCloseTo(379.43, 2);
    });

    it('has OblastObjektuKI polygon', () => {
      expect(doc.objekty[0]?.zaznamy[0]?.oblastObjektuKI).toBeDefined();
    });

    it('OblastObjektuKI polygon has srsDimension = 2', () => {
      expect(doc.objekty[0]?.zaznamy[0]?.oblastObjektuKI?.srsDimension).toBe(2);
    });

    it('OblastObjektuKI polygon has srsName = EPSG:5514', () => {
      expect(doc.objekty[0]?.zaznamy[0]?.oblastObjektuKI?.srsName).toBe('EPSG:5514');
    });

    it('OblastObjektuKI polygon has parsed exterior coordinates', () => {
      const ext = doc.objekty[0]?.zaznamy[0]?.oblastObjektuKI?.exterior;
      expect(ext).toBeDefined();
      expect((ext?.length ?? 0)).toBeGreaterThan(0);
      expect(ext?.[0]).toBeCloseTo(-671705.06, 2);
    });

    it('TI attributes include IDVlastnika = SUBJ-00100001', () => {
      expect(doc.objekty[0]?.zaznamy[0]?.attributes['IDVlastnika']).toBe('SUBJ-00100001');
    });

    it('TI attributes include KritickaTI = 1', () => {
      expect(doc.objekty[0]?.zaznamy[0]?.attributes['KritickaTI']).toBe(1);
    });
  });

  describe('TrasaElektrickeSite', () => {
    it('has LineString geometry', () => {
      const geom = doc.objekty[1]?.zaznamy[0]?.geometrie;
      expect(geom?.some((g) => g.type === 'LineString')).toBe(true);
    });

    it('LineString has correct first coordinate', () => {
      const lsGeom = doc.objekty[1]?.zaznamy[0]?.geometrie.find((g) => g.type === 'LineString');
      if (lsGeom?.type !== 'LineString') throw new Error('Expected LineString');
      expect(lsGeom.data.coordinates[0]).toBeCloseTo(-671658.08, 2);
    });

    it('has OblastObjektuKI polygon', () => {
      expect(doc.objekty[1]?.zaznamy[0]?.oblastObjektuKI).toBeDefined();
    });

    it('OblastObjektuKI polygon has parsed exterior', () => {
      const ext = doc.objekty[1]?.zaznamy[0]?.oblastObjektuKI?.exterior;
      expect((ext?.length ?? 0)).toBeGreaterThan(0);
    });
  });
});
