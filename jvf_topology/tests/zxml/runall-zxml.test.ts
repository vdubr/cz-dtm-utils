/**
 * Topologie ŽXML: meziobjektové kontroly podle základní verze JVF (objekty SŽ
 * do párů DefBod↔Plocha nevstupují), kontrola Z i pro H3D (3D hrany ZPS).
 */
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseJvfDtm } from 'jvf-parser';
import type { JvfDtm } from 'jvf-dtm-types';
import { runAllChecks } from '../../src/1.4.3/index.js';

const sample = (v: string, name: string): JvfDtm =>
  parseJvfDtm(readFileSync(resolve(import.meta.dirname, '../../../jvf_parser/samples', v, name), 'utf-8'));

describe('ŽXML — runAllChecks', () => {
  it('ukázkové nádraží 1.5.1.6 (kompletní zápis) je bez chyb', () => {
    const dtm = sample('zxml-1.5.1.6', 'zxml_nadrazi.xml');
    const errors = runAllChecks(dtm).filter((e) => e.severity === 'error');
    expect(errors).toEqual([]);
  });

  it('def. bod mimo plochu se hlásí i v ŽXML (páry JVF 1.5)', () => {
    const dtm = sample('zxml-1.5.1.6', 'zxml_nadrazi.xml');
    const db = dtm.objekty.find((o) => o.elementName === 'BudovaDefinicniBod')!;
    const g = db.zaznamy[0]!.geometrie[0]!;
    if (g.type !== 'Point') throw new Error('čekán bod');
    g.data.coordinates[0]! += 500;
    expect(runAllChecks(dtm).some((e) => e.code === 'DEFBOD_OUTSIDE_PLOCHA')).toBe(true);
  });

  it('H3D: výška mimo rozsah ZPS → COORD_OUT_OF_BOUNDS_Z', () => {
    const dtm = sample('zxml-1.4.2.1', 'zxml-prvky-sz.xml');
    const h3d = dtm.objekty.find((o) => o.obsahovaCast === 'H3D')!;
    const g = h3d.zaznamy[0]!.geometrie[0]!;
    if (g.type !== 'LineString') throw new Error('čekána linie');
    g.data.coordinates[2] = 5000;
    expect(runAllChecks(dtm).some((e) => e.code === 'COORD_OUT_OF_BOUNDS_Z')).toBe(true);
  });
});
