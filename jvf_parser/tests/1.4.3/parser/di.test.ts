import { describe, expect, it, beforeAll } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import type { JvfDtm } from '../../../src/1.4.3/types.js';
import { loadSample } from '../helpers/fixtures.js';

describe('DI - ObvodPozemniKomunikace + OsaPozemniKomunikace (ukazka_DI.xml)', () => {
  let doc: JvfDtm;

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('ukazka_DI.xml'));
  });

  it('parses TypZapisu as kompletní zápis', () => {
    expect(doc.typZapisu).toBe('kompletní zápis');
  });

  it('contains ObvodPozemniKomunikace and OsaPozemniKomunikace object types', () => {
    const names = doc.objekty.map(o => o.elementName);
    expect(names).toContain('ObvodPozemniKomunikace');
    expect(names).toContain('OsaPozemniKomunikace');
  });

  it('first object type is ObvodPozemniKomunikace', () => {
    expect(doc.objekty[0]?.elementName).toBe('ObvodPozemniKomunikace');
  });

  it('second object type is OsaPozemniKomunikace', () => {
    expect(doc.objekty[1]?.elementName).toBe('OsaPozemniKomunikace');
  });

  describe('ObvodPozemniKomunikace', () => {
    it('has Polygon geometry', () => {
      const geom = doc.objekty[0]?.zaznamy[0]?.geometrie;
      expect(geom?.some((g) => g.type === 'Polygon')).toBe(true);
    });

    it('Polygon has srsName EPSG:5514', () => {
      const polygonGeom = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'Polygon');
      expect(polygonGeom?.data.srsName).toBe('EPSG:5514');
    });

    it('Polygon has parsed exterior coordinates', () => {
      const polygonGeom = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'Polygon');
      if (polygonGeom?.type !== 'Polygon') throw new Error('Expected Polygon');
      expect(polygonGeom.data.exterior.length).toBeGreaterThan(0);
    });

    it('attributes.OznaceniKomunikace = 49010', () => {
      expect(doc.objekty[0]?.zaznamy[0]?.attributes['OznaceniKomunikace']).toBe(49010);
    });
  });

  describe('OsaPozemniKomunikace', () => {
    it('has LineString geometry', () => {
      const geom = doc.objekty[1]?.zaznamy[0]?.geometrie;
      expect(geom?.some((g) => g.type === 'LineString')).toBe(true);
    });

    it('LineString has parsed coordinates', () => {
      const lsGeom = doc.objekty[1]?.zaznamy[0]?.geometrie.find((g) => g.type === 'LineString');
      if (lsGeom?.type !== 'LineString') throw new Error('Expected LineString');
      expect(lsGeom.data.coordinates.length).toBeGreaterThan(0);
    });
  });
});
