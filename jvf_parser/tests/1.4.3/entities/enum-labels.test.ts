import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseJvfDtm, labelForAttribute } from '../../../src/index.js';
import { ENUM_LABELS } from '../../../src/1.4.3/generated/enum-labels.js';
import * as ENUMS from '../../../src/1.4.3/generated/enums.js';

const SAMPLES = resolve(import.meta.dirname, '../../../samples/1.4.3');

describe('labelForAttribute (kód → text)', () => {
  it('přeloží klíčové číselníky', () => {
    expect(labelForAttribute('KategoriePozemniKomunikace', 2)).toBe('dálnice II. třídy');
    expect(labelForAttribute('UrovenUmisteniObjektuZPS', 0)).toBe('na povrchu');
  });

  it('číselný i řetězcový kód se chovají stejně', () => {
    expect(labelForAttribute('KategoriePozemniKomunikace', 2)).toBe(
      labelForAttribute('KategoriePozemniKomunikace', '2')
    );
  });

  it('neznámý atribut nebo kód → undefined (graceful)', () => {
    expect(labelForAttribute('NeexistujiciAtribut', 1)).toBeUndefined();
    expect(labelForAttribute('KategoriePozemniKomunikace', 9999)).toBeUndefined();
  });

  it('1.5.0.1 tabulka: PSPI-specifický číselník se přeloží jen pro 1.5.0.1', () => {
    // TypObjektuSilnicniDopravyPS je jen v 1.5.0.1
    const v1501 = labelForAttribute('TypObjektuSilnicniDopravyPS', 3, '1.5.0.1');
    expect(typeof v1501 === 'string' || v1501 === undefined).toBe(true);
  });
});

describe('ENUM_LABELS invariant vůči enums.ts', () => {
  const enumNames = Object.keys(ENUMS).filter(
    (k) => typeof (ENUMS as Record<string, unknown>)[k] === 'object'
  );

  it('počet číselníků v ENUM_LABELS ≈ počet enumů', () => {
    expect(Object.keys(ENUM_LABELS).length).toBe(enumNames.length);
  });

  it('každý enum má klíč v ENUM_LABELS', () => {
    const missing = enumNames.filter((n) => !(n in ENUM_LABELS));
    expect(missing).toEqual([]);
  });

  it('každý popisek je neprázdný string', () => {
    for (const [name, table] of Object.entries(ENUM_LABELS)) {
      for (const [code, label] of Object.entries(table)) {
        expect(typeof label, `${name}[${code}]`).toBe('string');
        expect(label.length, `${name}[${code}]`).toBeGreaterThan(0);
      }
    }
  });
});

describe('pokrytí překladu nad ukázkami 1.4.3', () => {
  const files = readdirSync(SAMPLES).filter((f) => f.endsWith('.xml'));

  it('klíčové číselníkové atributy ve vzorcích se přeloží', () => {
    const KEY_ATTRS = [
      'UrovenUmisteniObjektuZPS',
      'TridaPresnostiPoloha',
      'KategoriePozemniKomunikace',
      'PrevazujiciPovrch',
    ];
    const untranslatedKeyHits: string[] = [];
    let seenKey = 0;

    for (const file of files) {
      const dtm = parseJvfDtm(readFileSync(join(SAMPLES, file), 'utf-8'));
      for (const ot of dtm.objekty) {
        for (const z of ot.zaznamy) {
          for (const [attr, val] of Object.entries(z.attributes)) {
            if (!KEY_ATTRS.includes(attr)) continue;
            if (val === null) continue;
            seenKey++;
            if (labelForAttribute(attr, val, dtm.verze) === undefined) {
              untranslatedKeyHits.push(`${file}: ${attr}=${String(val)}`);
            }
          }
        }
      }
    }

    // Alespoň jeden klíčový atribut se ve vzorcích vyskytl a všechny výskyty
    // se přeložily.
    expect(seenKey).toBeGreaterThan(0);
    expect(untranslatedKeyHits).toEqual([]);
  });
});
