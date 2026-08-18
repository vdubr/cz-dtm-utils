import { describe, expect, it } from 'vitest';
import type { JvfDtm, ObjektovyTyp, ZaznamObjektu } from 'jvf-dtm-types';
import { runAllChecks } from '../../../src/1.4.3/index.js';

// --- minimální stavitelé syntetického DTM ---------------------------------

function defbodZaznam(x: number, y: number): ZaznamObjektu {
  return {
    zapisObjektu: 'i',
    commonAttributes: { id: `def-${x}-${y}` },
    attributes: {},
    geometrie: [{ type: 'Point', data: { id: 'p', srsName: 'EPSG:5514', srsDimension: 2, coordinates: [x, y] } }],
  };
}

function plochaZaznam(exterior: number[]): ZaznamObjektu {
  return {
    zapisObjektu: 'i',
    commonAttributes: { id: 'plo' },
    attributes: {},
    geometrie: [
      { type: 'Polygon', data: { id: 'g', srsName: 'EPSG:5514', srsDimension: 2, exterior, interiors: [] } },
    ],
  };
}

function objTyp(elementName: string, zaznamy: ZaznamObjektu[]): ObjektovyTyp {
  return {
    elementName,
    nazev: elementName,
    codeBase: '0100000000',
    codeSuffix: '03',
    kategorieObjektu: '',
    skupinaObjektu: '',
    obsahovaCast: 'ZPS',
    zaznamy,
  };
}

const SQUARE = [0, 0, 10, 0, 10, 10, 0, 10, 0, 0];

/** DTM s definičním bodem MIMO odpovídající plochu daného páru. */
function dtmDefbodOutside(
  defbodName: string,
  plochaName: string,
  overrides: Partial<JvfDtm> = {}
): JvfDtm {
  return {
    verze: '1.5.0.1',
    datumZapisu: '',
    typZapisu: 'kompletní zápis',
    objekty: [
      objTyp(defbodName, [defbodZaznam(100, 100)]),
      objTyp(plochaName, [plochaZaznam(SQUARE)]),
    ],
    ...overrides,
  };
}

describe('runAllChecks — verzní routing (T7, R7)', () => {
  it('1.5.0.1: pár RozestavenaPlocha (jen v 1501) → DEFBOD_OUTSIDE_PLOCHA', () => {
    const dtm = dtmDefbodOutside('RozestavenaPlochaDefinicniBod', 'RozestavenaPlochaPlocha');
    const errors = runAllChecks(dtm, { version: '1.5.0.1', mode: 'complete' });
    expect(errors.some((e) => e.code === 'DEFBOD_OUTSIDE_PLOCHA')).toBe(true);
  });

  it('1.4.3: pár RozestavenaPlocha neexistuje → žádná DEFBOD chyba', () => {
    const dtm = dtmDefbodOutside('RozestavenaPlochaDefinicniBod', 'RozestavenaPlochaPlocha');
    const errors = runAllChecks(dtm, { version: '1.4.3', mode: 'complete' });
    expect(errors.some((e) => e.code === 'DEFBOD_OUTSIDE_PLOCHA')).toBe(false);
  });

  it('neznámá verze (9.9.9) → meziobjektové checky přeskočeny (R7)', () => {
    const dtm = dtmDefbodOutside('BudovaDefinicniBod', 'BudovaPlocha');
    const errors = runAllChecks(dtm, { version: '9.9.9', mode: 'complete' });
    expect(errors.some((e) => e.code === 'DEFBOD_OUTSIDE_PLOCHA')).toBe(false);
  });
});

describe('resolveMode — Výdej PSPI (TypDatoveSady=11) jako complete', () => {
  it('změnové věty + TypDatoveSady=11 → complete → meziobjektové běží', () => {
    const dtm = dtmDefbodOutside('BudovaDefinicniBod', 'BudovaPlocha', {
      verze: '1.4.3',
      typZapisu: 'změnové věty',
      typDatoveSady: 11,
    });
    const errors = runAllChecks(dtm); // auto
    expect(errors.some((e) => e.code === 'DEFBOD_OUTSIDE_PLOCHA')).toBe(true);
  });

  it('změnové věty bez TypDatoveSady → changeset → meziobjektové přeskočeny', () => {
    const dtm = dtmDefbodOutside('BudovaDefinicniBod', 'BudovaPlocha', {
      verze: '1.4.3',
      typZapisu: 'změnové věty',
    });
    const errors = runAllChecks(dtm); // auto
    expect(errors.some((e) => e.code === 'DEFBOD_OUTSIDE_PLOCHA')).toBe(false);
  });
});
