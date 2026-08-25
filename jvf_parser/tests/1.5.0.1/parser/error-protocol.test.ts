import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseErrorProtocol } from '../../../src/index.js';

const XML = readFileSync(
  resolve(import.meta.dirname, '../../../samples/1.5.0.1/ukazka_protokol_chyb.jvf.xml'),
  'utf-8'
);

describe('parseErrorProtocol (1.5.0.1, R5)', () => {
  const proto = parseErrorProtocol(XML);

  it('rozdělí kontroly na DTI (3) a ZPS (2)', () => {
    expect(proto.dti.length).toBe(3);
    expect(proto.zps.length).toBe(2);
  });

  it('DTI první kontrola: kód 2.1, 1 chyba s IDExterni a objektId', () => {
    const k = proto.dti[0];
    expect(k.kod).toBe('2.1');
    expect(k.chyby.length).toBe(1);
    expect(k.chyby[0].popis).toContain('IDExterni');
    expect(k.chyby[0].objektId).toBe('100000006');
    // ostatní atributy kontroly (Skupina/StavKontrola) v attributes
    expect(k.attributes.Skupina).toBe('ATR');
  });

  it('ZPS první kontrola má 2 chyby; druhá je TOP 3.7 „Volné konce linie."', () => {
    expect(proto.zps[0].chyby.length).toBe(2);
    const top = proto.zps[1];
    expect(top.kod).toBe('3.7');
    expect(top.attributes.Skupina).toBe('TOP');
    expect(top.chyby[0].popis).toBe('Volné konce linie.');
    expect(top.chyby[0].objektId).toBe('100000007');
  });

  it('celkový počet chyb DTI=3, ZPS=3', () => {
    const countDti = proto.dti.reduce((n, k) => n + k.chyby.length, 0);
    const countZps = proto.zps.reduce((n, k) => n + k.chyby.length, 0);
    expect(countDti).toBe(3);
    expect(countZps).toBe(3);
  });
});
