import { describe, it, expect } from 'vitest';
import type { ZaznamObjektu } from 'jvf-dtm-types';
import {
  UDM_STYLES,
  getUdmStyle,
  resolveUdmAppearance,
  resolveUdmRepresentativeAppearance,
} from '../../src/index.js';

const zaznam = (attributes: ZaznamObjektu['attributes']): ZaznamObjektu => ({
  zapisObjektu: 'i',
  commonAttributes: {},
  attributes,
  geometrie: [],
});

/**
 * Regrese symbologie UDM (scripts/udm/build-udm-styles.py): barvy, tloušťky
 * a čárkování změřené ze vzorníku ČKZ (scripts/udm/line-patterns.json).
 */
describe('UDM_STYLES — symbologie UDM 2.1.1', () => {
  it('pokrývá objekty DTM (s doplněnou úvodní nulou kódu) i nad rámec DTM', () => {
    const keys = Object.keys(UDM_STYLES);
    expect(keys.length).toBe(469);
    expect(keys.every((k) => /^\d{10}-\d{2}$/.test(k))).toBe(true);
    expect(getUdmStyle({ codeBase: '0100000299', codeSuffix: '02' })?.base.color).toBe('#ff0000'); // hranice budovy
    expect(getUdmStyle({ codeBase: '9400001066', codeSuffix: '01' })).toBeDefined(); // strom
  });

  it('čárkování ze vzorníku: „čárkovaná 1" (n0.03) = 4 / 2 mm při 1:500', () => {
    expect(getUdmStyle({ codeBase: '0100000195', codeSuffix: '02' })?.base.dashMm).toEqual([4, 2]);
  });

  it('VDZ podle číselníku: přerušovaná 3/3 m a 3/1,5 m (mm papíru = m × 2)', () => {
    const vdz = { codeBase: '9400001024', codeSuffix: '02' };
    expect(resolveUdmAppearance(vdz, zaznam({ NazevVDZLinieAPlocha: 502 }))?.dashMm).toEqual([6, 6]);
    expect(resolveUdmAppearance(vdz, zaznam({ NazevVDZLinieAPlocha: 503 }))?.dashMm).toEqual([6, 3]);
    // bez hodnoty číselníku jen základní vzhled (tloušťka), reprezentativní doplní barvu
    expect(resolveUdmAppearance(vdz)?.dashMm).toBeUndefined();
    expect(resolveUdmRepresentativeAppearance(vdz)?.color).toBeDefined();
  });

  it('všechna čárkování mají sudý počet prvků (čárka, mezera, …) a kladné délky', () => {
    const patterns = Object.values(UDM_STYLES).flatMap((s) => [
      s.base.dashMm,
      ...(s.rules ?? []).flatMap((r) => Object.values(r.values).map((v) => v.dashMm)),
    ]);
    for (const p of patterns.filter((p): p is number[] => !!p)) {
      expect(p.length % 2).toBe(0);
      expect(p.every((v) => v > 0)).toBe(true);
    }
  });
});
