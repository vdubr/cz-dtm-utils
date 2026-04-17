import { describe, expect, it, beforeAll } from 'vitest';
import { parseJvfDtm } from '../../../src/1.4.3/parser.js';
import type { JvfDtm } from '../../../src/1.4.3/types.js';
import { loadSample } from '../helpers/fixtures.js';

/**
 * Regression test for namespace-prefixed root element.
 * Real-world JVF files use <objtyp:JVFDTM> instead of <JVFDTM>.
 * Parser must handle removeNSPrefix correctly.
 */
describe('NS - namespace-prefixed root element (ukazka_NS.xml)', () => {
  let doc: JvfDtm;

  beforeAll(() => {
    doc = parseJvfDtm(loadSample('ukazka_NS.xml'));
  });

  it('parses without throwing', () => {
    expect(doc).toBeDefined();
  });

  it('has correct version', () => {
    expect(doc.verze).toBe('1.4.3');
  });

  it('has correct typZapisu', () => {
    expect(doc.typZapisu).toBe('kompletní zápis');
  });

  it('contains 3 objektovy typy', () => {
    expect(doc.objekty).toHaveLength(3);
  });

  it('contains PatkaDeskaMonolitPilirDefinicniBod', () => {
    expect(doc.objekty.some(o => o.elementName === 'PatkaDeskaMonolitPilirDefinicniBod')).toBe(true);
  });

  it('contains PodrobnyBodZPS', () => {
    expect(doc.objekty.some(o => o.elementName === 'PodrobnyBodZPS')).toBe(true);
  });

  it('contains HraniceStavby', () => {
    expect(doc.objekty.some(o => o.elementName === 'HraniceStavby')).toBe(true);
  });

  it('PodrobnyBodZPS has correct codeBase', () => {
    const ot = doc.objekty.find(o => o.elementName === 'PodrobnyBodZPS');
    expect(ot?.codeBase).toBe('0100000218');
  });

  it('PodrobnyBodZPS zaznam has Point geometry', () => {
    const ot = doc.objekty.find(o => o.elementName === 'PodrobnyBodZPS');
    expect(ot?.zaznamy[0]?.geometrie.some(g => g.type === 'Point')).toBe(true);
  });

  it('PodrobnyBodZPS Point coordinates are correct', () => {
    const ot = doc.objekty.find(o => o.elementName === 'PodrobnyBodZPS');
    const geom = ot?.zaznamy[0]?.geometrie.find(g => g.type === 'Point');
    if (geom?.type !== 'Point') throw new Error('Expected Point');
    expect(geom.data.coordinates[0]).toBeCloseTo(-617739.38, 2);
    expect(geom.data.coordinates[1]).toBeCloseTo(-1029075.09, 2);
    expect(geom.data.coordinates[2]).toBeCloseTo(296.68, 2);
  });

  it('HraniceStavby zaznam has LineString geometry', () => {
    const ot = doc.objekty.find(o => o.elementName === 'HraniceStavby');
    expect(ot?.zaznamy[0]?.geometrie.some(g => g.type === 'LineString')).toBe(true);
  });

  it('HraniceStavby zapisObjektu = i', () => {
    const ot = doc.objekty.find(o => o.elementName === 'HraniceStavby');
    expect(ot?.zaznamy[0]?.zapisObjektu).toBe('i');
  });
});
