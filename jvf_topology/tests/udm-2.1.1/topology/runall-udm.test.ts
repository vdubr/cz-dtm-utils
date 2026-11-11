import { describe, expect, it } from 'vitest';
import type { JvfDtm, ObjektovyTyp, ZaznamObjektu } from 'jvf-dtm-types';
import { runAllChecks } from '../../../src/1.4.3/index.js';

function zaznam(geom: ZaznamObjektu['geometrie'][number]): ZaznamObjektu {
  return { zapisObjektu: 'i', commonAttributes: { id: 'x' }, attributes: {}, geometrie: [geom] };
}

function objTyp(elementName: string, obsahovaCast: string, zaznamy: ZaznamObjektu[]): ObjektovyTyp {
  return {
    elementName,
    nazev: elementName,
    codeBase: '',
    codeSuffix: '',
    kategorieObjektu: '',
    skupinaObjektu: '',
    obsahovaCast,
    zaznamy,
  };
}

// Reálné S-JTSK souřadnice (XY v rozsahu ČR).
const X = -794990;
const Y = -1138650;
const point = (z: number) =>
  zaznam({ type: 'Point', data: { id: 'p', srsName: 'EPSG:5514', srsDimension: 3, coordinates: [X, Y, z] } });
const square = (): ZaznamObjektu =>
  zaznam({
    type: 'Polygon',
    data: {
      id: 'g',
      srsName: 'EPSG:5514',
      srsDimension: 2,
      exterior: [X, Y, X + 10, Y, X + 10, Y + 10, X, Y + 10, X, Y],
      interiors: [],
    },
  });

function udmDtm(objekty: ObjektovyTyp[]): JvfDtm {
  return { verze: 'udm-2.1.1', verzeUdm: '2.1.1', datumZapisu: '', typZapisu: 'kompletní zápis', objekty };
}

describe('runAllChecks — UDM (udm-2.1.1)', () => {
  it('meziobjektové kontroly se pro UDM nespouští (i při complete, verze z dtm.verze)', () => {
    // Definiční bod budovy mimo plochu — v JVF by to byla DEFBOD_OUTSIDE_PLOCHA.
    const dtm = udmDtm([
      objTyp('BudovaDefinicniBod', 'ZPS', [point(450)]),
      objTyp('BudovaPlocha', 'ZPS', [
        zaznam({
          type: 'Polygon',
          data: { id: 'g', srsName: 'EPSG:5514', srsDimension: 2, exterior: [0, 0, 1, 0, 1, 1, 0, 0], interiors: [] },
        }),
      ]),
    ]);
    const codes = runAllChecks(dtm, { mode: 'complete' }).map((e) => e.code);
    expect(codes).not.toContain('DEFBOD_OUTSIDE_PLOCHA');
    expect(codes).not.toContain('DEFBOD_NO_PLOCHA');
  });

  it('rozsah Z se kontroluje i u objektů ZPSUDM', () => {
    const dtm = udmDtm([objTyp('Strom', 'ZPSUDM', [point(5000)])]);
    const codes = runAllChecks(dtm, { mode: 'complete' }).map((e) => e.code);
    expect(codes).toContain('COORD_OUT_OF_BOUNDS_Z');
  });

  it('objekty DIUDM/OST: geometrická validita běží, Z se nekontroluje', () => {
    const dtm = udmDtm([
      objTyp('DopravniZarizeniBod', 'DIUDM', [point(5000)]),
      objTyp('ZajmovaPlocha', 'OST', [square()]),
    ]);
    expect(runAllChecks(dtm, { mode: 'complete' })).toEqual([]);
  });
});
