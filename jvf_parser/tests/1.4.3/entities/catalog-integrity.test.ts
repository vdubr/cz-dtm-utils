import { describe, it, expect } from 'vitest';
import { ENTITY_CATALOG } from '../../../src/1.4.3/generated/entities.js';

describe('ENTITY_CATALOG data integrity', () => {
  const entries = Object.values(ENTITY_CATALOG);

  it('all entries have non-empty elementName', () => {
    const bad = entries.filter((e) => !e.elementName);
    expect(bad).toEqual([]);
  });

  it('all entries have non-empty nazev', () => {
    const bad = entries.filter((e) => !e.nazev);
    expect(bad).toEqual([]);
  });

  // O6 is a special entity with no code_base/suffix, kategorie, skupina, or obsahovaCast
  const SPECIAL_ENTITIES = new Set(['O6']);

  it('all entries have valid codeBase (10-digit)', () => {
    const bad = entries.filter((e) => !SPECIAL_ENTITIES.has(e.elementName) && !/^\d{10}$/.test(e.codeBase));
    expect(bad.map((e) => e.elementName)).toEqual([]);
  });

  it('all entries have valid codeSuffix (01-04)', () => {
    const bad = entries.filter((e) => !SPECIAL_ENTITIES.has(e.elementName) && !['01', '02', '03', '04'].includes(e.codeSuffix));
    expect(bad.map((e) => e.elementName)).toEqual([]);
  });

  it('all entries have valid obsahovaCast', () => {
    const bad = entries.filter((e) => !SPECIAL_ENTITIES.has(e.elementName) && !['ZPS', 'TI', 'DI'].includes(e.obsahovaCast));
    expect(bad.map((e) => `${e.elementName}: "${e.obsahovaCast}"`)).toEqual([]);
  });

  it('all entries have non-empty kategorieObjektu', () => {
    const bad = entries.filter((e) => !SPECIAL_ENTITIES.has(e.elementName) && !e.kategorieObjektu);
    expect(bad.map((e) => e.elementName)).toEqual([]);
  });

  it('all entries have non-empty skupinaObjektu', () => {
    const bad = entries.filter((e) => !SPECIAL_ENTITIES.has(e.elementName) && !e.skupinaObjektu);
    expect(bad.map((e) => e.elementName)).toEqual([]);
  });

  it('all entries have valid geomType', () => {
    const valid = new Set(['point', 'curve', 'surface', 'surface+multiCurve']);
    const bad = entries.filter((e) => !valid.has(e.geomType));
    expect(bad.map((e) => e.elementName)).toEqual([]);
  });

  it('all sharedAttrGroup values are valid or null', () => {
    const validGroups = new Set([
      null,
      'SpolecneAtributyObjektuZPS',
      'SpolecneAtributyObjektuDefinicnichBodu',
      'SpolecneAtributyObjektuTI',
      'SpolecneAtributyObjektuPasemTI',
      'SpolecneAtributyObjektuZPS_TI',
      'SpolecneAtributyObjektuDI',
      'SpolecneAtributyObjektuPasemDI',
      'SpolecneAtributyObjektuZameru',
    ]);
    const bad = entries.filter((e) => !validGroups.has(e.sharedAttrGroup));
    expect(bad.map((e) => `${e.elementName}: ${e.sharedAttrGroup}`)).toEqual([]);
  });

  it('codeSuffix 01 correlates with point geometry', () => {
    const bods = entries.filter((e) => e.codeSuffix === '01');
    const bad = bods.filter((e) => e.geomType !== 'point');
    expect(bad.map((e) => `${e.elementName}: ${e.geomType}`)).toEqual([]);
  });

  it('codeSuffix 02 correlates with curve geometry', () => {
    const lines = entries.filter((e) => e.codeSuffix === '02');
    const bad = lines.filter((e) => e.geomType !== 'curve');
    expect(bad.map((e) => `${e.elementName}: ${e.geomType}`)).toEqual([]);
  });

  it('codeSuffix 03 correlates with surface geometry', () => {
    const plochy = entries.filter((e) => e.codeSuffix === '03');
    const bad = plochy.filter(
      (e) => e.geomType !== 'surface' && e.geomType !== 'surface+multiCurve'
    );
    expect(bad.map((e) => `${e.elementName}: ${e.geomType}`)).toEqual([]);
  });

  it('codeSuffix 04 correlates with point geometry (defbod)', () => {
    const defbods = entries.filter((e) => e.codeSuffix === '04');
    const bad = defbods.filter((e) => e.geomType !== 'point');
    expect(bad.map((e) => `${e.elementName}: ${e.geomType}`)).toEqual([]);
  });

  it('elementName is unique (no duplicates)', () => {
    const names = entries.map((e) => e.elementName);
    const dupes = names.filter((n, i) => names.indexOf(n) !== i);
    expect(dupes).toEqual([]);
  });

  it('codeBase+codeSuffix combination is unique', () => {
    const keys = entries.map((e) => `${e.codeBase}/${e.codeSuffix}`);
    const dupes = keys.filter((k, i) => keys.indexOf(k) !== i);
    expect(dupes).toEqual([]);
  });
});
