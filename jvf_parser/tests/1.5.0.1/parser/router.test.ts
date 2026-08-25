import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  parseJvfDtm,
  getEntityCatalog,
  resolveDtmVersion,
  sniffVersionByStructure,
  isErrorProtocolXml,
} from '../../../src/index.js';

const S = (v: string, name: string): string =>
  readFileSync(resolve(import.meta.dirname, `../../../samples/${v}`, name), 'utf-8');

describe('router parseJvfDtm (R3/R4)', () => {
  it('1.5.0.1 soubor → 1.5.0.1 parser (recordKind naplněn)', () => {
    const dtm = parseJvfDtm(S('1.5.0.1', 'ukazkaZPS.jvf.xml'));
    expect(dtm.verze).toBe('1.5.0.1');
    expect(dtm.objekty[0].zaznamy[0].recordKind).toBe('RefV');
  });

  it('1.4.3 soubor → 1.4.3 parser (recordKind undefined, back-compat)', () => {
    const dtm = parseJvfDtm(S('1.4.3', 'ukazka_ZPS.xml'));
    expect(dtm.verze).toBe('1.4.3');
    expect(dtm.objekty.length).toBeGreaterThan(0);
    expect(dtm.objekty[0].zaznamy[0].recordKind).toBeUndefined();
  });

  it('resolveDtmVersion podle deklarované verze', () => {
    expect(resolveDtmVersion(S('1.5.0.1', 'ukazkaZPS.jvf.xml'))).toBe('1.5.0.1');
    expect(resolveDtmVersion(S('1.4.3', 'ukazka_ZPS.xml'))).toBe('1.4.3');
  });

  it('strukturní sniff bez deklarované verze', () => {
    expect(sniffVersionByStructure('<Data><ZaznamObjektuIns/></Data>')).toBe('1.5.0.1');
    expect(sniffVersionByStructure('<Data><ZaznamObjektu>x</ZaznamObjektu></Data>')).toBe('1.4.3');
    expect(sniffVersionByStructure('<foo/>')).toBe('1.4.3'); // DEFAULT_VERSION
  });

  it('neznámá deklarovaná verze → fallback na sniff', () => {
    const xml = '<JVFDTM><DataJVFDTM><VerzeJVFDTM>9.9.9</VerzeJVFDTM><ZaznamObjektuIns/></DataJVFDTM></JVFDTM>';
    expect(resolveDtmVersion(xml)).toBe('1.5.0.1');
  });

  it('ServisJVFDTM (protokol chyb) → detekce + parseJvfDtm vyhodí chybu', () => {
    const xml = S('1.5.0.1', 'ukazka_protokol_chyb.jvf.xml');
    expect(isErrorProtocolXml(xml)).toBe(true);
    expect(() => parseJvfDtm(xml)).toThrow(/protokol chyb/);
  });

  it('getEntityCatalog rozlišuje verze (PSPI jen v 1.5.0.1)', () => {
    const c1501 = getEntityCatalog('1.5.0.1');
    const c143 = getEntityCatalog('1.4.3');
    const has1501Pspi = Object.values(c1501).some((e) => e.codeBase.startsWith('0200000'));
    const has143Pspi = Object.values(c143).some((e) => e.codeBase.startsWith('0200000'));
    expect(has1501Pspi).toBe(true);
    expect(has143Pspi).toBe(false);
  });
});
