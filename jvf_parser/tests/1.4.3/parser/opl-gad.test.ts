import { describe, expect, it, beforeAll } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import type { JvfDtm } from '../../../src/1.4.3/types.js';
import { loadSample } from '../helpers/fixtures.js';

describe('OPL - BudovaPlocha (ukazka_OPL.xml)', () => {
  let doc: JvfDtm;

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('ukazka_OPL.xml'));
  });

  it('parses TypZapisu as kompletní zápis', () => {
    expect(doc.typZapisu).toBe('kompletní zápis');
  });

  it('has one object type: BudovaPlocha', () => {
    expect(doc.objekty[0]?.elementName).toBe('BudovaPlocha');
  });

  it('has multiple zaznamy', () => {
    expect((doc.objekty[0]?.zaznamy.length ?? 0)).toBeGreaterThan(1);
  });

  it('first zaznam has Polygon geometry', () => {
    const geom = doc.objekty[0]?.zaznamy[0]?.geometrie;
    expect(geom?.some((g) => g.type === 'Polygon')).toBe(true);
  });

  it('first zaznam has MultiCurve geometry', () => {
    const geom = doc.objekty[0]?.zaznamy[0]?.geometrie;
    expect(geom?.some((g) => g.type === 'MultiCurve')).toBe(true);
  });

  it('MultiCurve has at least 1 curve member', () => {
    const mc = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'MultiCurve');
    if (mc?.type !== 'MultiCurve') throw new Error('Expected MultiCurve');
    expect(mc.data.curves.length).toBeGreaterThanOrEqual(1);
  });

  it('MultiCurve curve has parsed coordinates', () => {
    const mc = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'MultiCurve');
    if (mc?.type !== 'MultiCurve') throw new Error('Expected MultiCurve');
    expect(mc.data.curves[0]?.coordinates.length).toBeGreaterThan(0);
  });

  it('MultiCurve gml:id is parsed', () => {
    const mc = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'MultiCurve');
    if (mc?.type !== 'MultiCurve') throw new Error('Expected MultiCurve');
    expect(mc.data.id).toBe('ID72003010000458529_05');
  });

  it('commonAttributes has id for first zaznam', () => {
    expect(doc.objekty[0]?.zaznamy[0]?.commonAttributes.id).toBe('72003010000458529');
  });

  it('commonAttributes has idEditora for first zaznam', () => {
    expect(doc.objekty[0]?.zaznamy[0]?.commonAttributes.idEditora).toBe('SUBJ-00002879');
  });
});

describe('GAD - PodrobnyBodZPS (ukazka_GAD.xml)', () => {
  let doc: JvfDtm;

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('ukazka_GAD.xml'));
  });

  it('parses TypZapisu as změnové věty', () => {
    expect(doc.typZapisu).toBe('změnové věty');
  });

  it('has PodrobnyBodZPS object type', () => {
    expect(doc.objekty[0]?.elementName).toBe('PodrobnyBodZPS');
  });

  it('first zaznam has zapisObjektu = i', () => {
    expect(doc.objekty[0]?.zaznamy[0]?.zapisObjektu).toBe('i');
  });

  it('empty SpolecneAtributyVsechObjektu results in empty commonAttributes', () => {
    const ca = doc.objekty[0]?.zaznamy[0]?.commonAttributes;
    expect(ca?.id).toBeUndefined();
  });

  it('has Point geometry with correct srsName', () => {
    const pointGeom = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'Point');
    expect(pointGeom?.data.srsName).toBe('EPSG:5514');
  });

  it('first Point has correct coordinates', () => {
    const pointGeom = doc.objekty[0]?.zaznamy[0]?.geometrie.find((g) => g.type === 'Point');
    if (pointGeom?.type !== 'Point') throw new Error('Expected Point');
    expect(pointGeom.data.coordinates[0]).toBeCloseTo(-719901.07, 2);
    expect(pointGeom.data.coordinates[1]).toBeCloseTo(-1051449.96, 2);
    expect(pointGeom.data.coordinates[2]).toBeCloseTo(326.33, 2);
  });
});
