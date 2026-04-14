import { describe, expect, it, beforeAll } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import type { JvfDtm } from '../../../src/1.4.3/types.js';
import { loadSample } from '../helpers/fixtures.js';

describe('ZPS - PodrobnyBodZPS (ukazka_ZPS.xml)', () => {
  let doc: JvfDtm;

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('ukazka_ZPS.xml'));
  });

  it('contains PodrobnyBodZPS object type', () => {
    expect(doc.objekty.some(o => o.elementName === 'PodrobnyBodZPS')).toBe(true);
  });

  it('has correct elementName', () => {
    expect(doc.objekty[0]?.elementName).toBe('PodrobnyBodZPS');
  });

  it('has correct nazev', () => {
    expect(doc.objekty[0]?.nazev).toBe('podrobný bod ZPS');
  });

  it('has correct codeBase', () => {
    expect(doc.objekty[0]?.codeBase).toBe('0100000218');
  });

  it('has correct codeSuffix', () => {
    expect(doc.objekty[0]?.codeSuffix).toBe('01');
  });

  it('has correct kategorieObjektu', () => {
    expect(doc.objekty[0]?.kategorieObjektu).toBe('Geodetické prvky');
  });

  it('has correct skupinaObjektu', () => {
    expect(doc.objekty[0]?.skupinaObjektu).toBe('Podrobný bod');
  });

  it('has correct obsahovaCast = ZPS', () => {
    expect(doc.objekty[0]?.obsahovaCast).toBe('ZPS');
  });

  it('has multiple zaznamy', () => {
    const count = doc.objekty[0]?.zaznamy.length ?? 0;
    expect(count).toBeGreaterThan(1);
  });

  it('first zaznam has zapisObjektu = r', () => {
    expect(doc.objekty[0]?.zaznamy[0]?.zapisObjektu).toBe('r');
  });

  it('first zaznam has Point geometry', () => {
    const geom = doc.objekty[0]?.zaznamy[0]?.geometrie;
    expect(geom).toBeDefined();
    expect(geom?.some((g) => g.type === 'Point')).toBe(true);
  });

  it('first Point geometry has correct srsName', () => {
    const pointGeom = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'Point');
    expect(pointGeom?.data.srsName).toBe('EPSG:5514');
  });

  it('first Point geometry has srsDimension = 3', () => {
    const pointGeom = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'Point');
    expect(pointGeom?.data.srsDimension).toBe(3);
  });

  it('first Point geometry has correct coordinates', () => {
    const pointGeom = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'Point');
    if (pointGeom?.type !== 'Point') throw new Error('Expected Point');
    expect(pointGeom.data.coordinates[0]).toBeCloseTo(-520813.83, 2);
    expect(pointGeom.data.coordinates[1]).toBeCloseTo(-1164286.0, 2);
    expect(pointGeom.data.coordinates[2]).toBeCloseTo(267.94, 2);
  });

  it('first zaznam commonAttributes.id = 72000330010094405', () => {
    expect(doc.objekty[0]?.zaznamy[0]?.commonAttributes.id).toBe('72000330010094405');
  });

  it('first zaznam commonAttributes.idEditora = SUBJ-00002879', () => {
    expect(doc.objekty[0]?.zaznamy[0]?.commonAttributes.idEditora).toBe('SUBJ-00002879');
  });

  it('first zaznam attributes.TridaPresnostiPoloha = 3', () => {
    expect(doc.objekty[0]?.zaznamy[0]?.attributes['TridaPresnostiPoloha']).toBe(3);
  });
});
