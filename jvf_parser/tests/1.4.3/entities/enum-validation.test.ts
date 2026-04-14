import { describe, it, expect } from 'vitest';
import * as Enums from '../../../src/1.4.3/generated/enums.js';

describe('Generated enums', () => {
  it('PrevazujiciPovrch has 8 values', () => {
    expect(Object.keys(Enums.PrevazujiciPovrch).length).toBe(8);
    expect(Enums.PrevazujiciPovrch.ASFALT).toBe(1);
    expect(Enums.PrevazujiciPovrch.NEZJISTENO).toBe(99);
  });

  it('KategoriePozemniKomunikace has 12 values', () => {
    expect(Object.keys(Enums.KategoriePozemniKomunikace).length).toBe(12);
  });

  it('UrovenUmisteniObjektuZPS has 7 values (-3..3)', () => {
    expect(Object.keys(Enums.UrovenUmisteniObjektuZPS).length).toBe(7);
    expect(Enums.UrovenUmisteniObjektuZPS.VALUE_MINUS_3).toBe(-3);
    expect(Enums.UrovenUmisteniObjektuZPS.NA_POVRCHU).toBe(0);
  });

  it('UrovenUmisteniObjektuTI has 3 values (-1, 0, 1)', () => {
    expect(Object.keys(Enums.UrovenUmisteniObjektuTI).length).toBe(3);
    expect(Enums.UrovenUmisteniObjektuTI.POD_POVRCHEM).toBe(-1);
    expect(Enums.UrovenUmisteniObjektuTI.NAD_POVRCHEM).toBe(1);
  });

  it('TridaPresnostiPoloha has 6 values', () => {
    expect(Object.keys(Enums.TridaPresnostiPoloha).length).toBe(6);
  });

  it('TypDrahy has 4 values', () => {
    expect(Object.keys(Enums.TypDrahy).length).toBe(4);
  });

  it('StavObjektu has values for neverejny, provozovano, neprovozovano, nezjisteno', () => {
    expect(Enums.StavObjektu.NEVEREJNY_UDAJ).toBe(0);
    expect(Enums.StavObjektu.PROVOZOVANO).toBe(1);
    expect(Enums.StavObjektu.NEPROVOZOVANO).toBe(2);
    expect(Enums.StavObjektu.NEZJISTENO).toBe(99);
  });

  it('MaximalniNapetovaHladina includes NN, VN, VVN, ZVN', () => {
    expect(Enums.MaximalniNapetovaHladina.NN).toBe(1);
    expect(Enums.MaximalniNapetovaHladina.VN).toBe(2);
    expect(Enums.MaximalniNapetovaHladina.VVN).toBe(3);
    expect(Enums.MaximalniNapetovaHladina.ZVN).toBe(4);
  });
});
