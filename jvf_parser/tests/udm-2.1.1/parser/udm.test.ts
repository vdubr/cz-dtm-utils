import { describe, it, expect, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  parseJvfDtm,
  parseUdm,
  resolveDtmVersion,
  resolveUdmVersion,
  detectUdmVersionString,
  getEntityCatalog,
  labelForAttribute,
} from '../../../src/index.js';

const S = (v: string, name: string): string =>
  readFileSync(resolve(import.meta.dirname, `../../../samples/${v}`, name), 'utf-8');

const MINIMAL = S('udm-2.1.1', 'udm_minimal.xml');

const findTyp = (dtm: ReturnType<typeof parseJvfDtm>, name: string) => {
  const ot = dtm.objekty.find((o) => o.elementName === name);
  if (!ot) throw new Error(`chybí ${name}`);
  return ot;
};

describe('UDM — detekce verze (router)', () => {
  it('VerzeJVFUDM → udm-2.1.1 (bez ohledu na VerzeJVFDTM 1.5.0.2)', () => {
    expect(detectUdmVersionString(MINIMAL)).toBe('2.1.1');
    expect(resolveUdmVersion(MINIMAL)).toBe('udm-2.1.1');
    expect(resolveDtmVersion(MINIMAL)).toBe('udm-2.1.1');
  });

  it('čisté JVF soubory nejsou UDM', () => {
    expect(resolveUdmVersion(S('1.5.0.1', 'ukazkaZPS.jvf.xml'))).toBeNull();
    expect(resolveDtmVersion(S('1.5.0.1', 'ukazkaZPS.jvf.xml'))).toBe('1.5.0.1');
    expect(resolveDtmVersion(S('1.4.3', 'ukazka_ZPS.xml'))).toBe('1.4.3');
  });

  it('neznámá verze UDM se strukturou 1.5.0.x → nejnovější UDM + warn', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const xml = MINIMAL.replace('<cmn:VerzeJVFUDM>2.1.1<', '<cmn:VerzeJVFUDM>2.1<');
    expect(resolveUdmVersion(xml)).toBe('udm-2.1.1');
    const dtm = parseJvfDtm(xml);
    expect(dtm.verze).toBe('udm-2.1.1');
    expect(dtm.verzeUdm).toBe('2.1');
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  it('UDM se strukturou 1.4.3 (UDM 1.x) → parsuje se jako JVF', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const xml =
      '<JVFDTM><DataJVFDTM><VerzeJVFDTM>1.4.3</VerzeJVFDTM><VerzeJVFUDM>1.1</VerzeJVFUDM><ZaznamObjektu>x</ZaznamObjektu></DataJVFDTM></JVFDTM>';
    expect(resolveUdmVersion(xml)).toBeNull();
    expect(resolveDtmVersion(xml)).toBe('1.4.3');
    warn.mockRestore();
  });
});

describe('UDM — parsování (udm_minimal.xml)', () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  const dtm = parseJvfDtm(MINIMAL);
  warn.mockRestore();

  it('hlavička: verze, verzeJvfDtm, verzeUdm, typ zápisu; bez varování', () => {
    expect(dtm.verze).toBe('udm-2.1.1');
    expect(dtm.verzeJvfDtm).toBe('1.5.0.2');
    expect(dtm.verzeUdm).toBe('2.1.1');
    expect(dtm.typZapisu).toBe('změnové věty');
    expect(warn).not.toHaveBeenCalled();
  });

  it('parseUdm (přímý vstup) dává stejný výsledek jako router', () => {
    expect(parseUdm(MINIMAL)).toEqual(dtm);
  });

  it('objekt DTM s UDM atributy: Ins/Upd/Del + zploštělé systémové atributy', () => {
    const hb = findTyp(dtm, 'HraniceBudovy');
    expect(hb.codeBase).toBe('0100000299');
    expect(hb.zaznamy.map((z) => z.recordKind)).toEqual(['Ins', 'Upd', 'Del']);
    expect(hb.zaznamy.map((z) => z.zapisObjektu)).toEqual(['i', 'u', 'd']);

    const [ins, upd, del] = hb.zaznamy;
    expect(ins.commonAttributes.popisObjektu).toBe('severní stěna');
    expect(ins.attributes['PopisObjektu']).toBeUndefined();
    expect(ins.attributes['MaterialUDM']).toBe(501);
    expect(ins.attributes['VstupDoDTM']).toBe(1);
    expect(ins.attributes['UrovenUmisteniObjektuZPS']).toBe(0);
    expect(ins.attributes['Prilohy']).toBe('foto1.jpg; TZ.pdf');
    expect(upd.commonAttributes).toMatchObject({ id: 'HB-2' });
    expect(upd.attributes['ID']).toBeUndefined();
    expect(del.commonAttributes.id).toBe('HB-3');
    expect(ins.geometrie[0].type).toBe('LineString');
  });

  it('objekty nad rámec DTM (94…): bod, linie, plocha', () => {
    const strom = findTyp(dtm, 'Strom');
    expect(strom.codeBase).toBe('9400001066');
    expect(strom.obsahovaCast).toBe('ZPSUDM');
    const z = strom.zaznamy[0];
    expect(z.commonAttributes.id).toBeUndefined(); // prázdné <ID/>
    expect(z.attributes['ID']).toBeUndefined();
    expect(z.attributes['StavStromu']).toBe(500);
    expect(z.attributes['PrumerKorunyM']).toBe('4,5'); // UDM: desetinná čárka, Text25
    expect(z.geometrie[0]).toMatchObject({ type: 'Point' });

    const dz = findTyp(dtm, 'DopravniZarizeniLinie');
    expect(dz.obsahovaCast).toBe('DIUDM');
    expect(dz.zaznamy[0].commonAttributes).toMatchObject({ id: 'DZ-1', idZmeny: 'Z-77' });
    expect(dz.zaznamy[0].geometrie[0].type).toBe('LineString');

    const zp = findTyp(dtm, 'ZajmovaPlocha');
    expect(zp.obsahovaCast).toBe('OST');
    expect(zp.zaznamy[0].geometrie[0].type).toBe('Polygon');
    expect(zp.zaznamy[0].commonAttributes.popisObjektu).toBe('hranice zakázky');
  });

  it('katalog a popisky číselníků podle verze udm-2.1.1', () => {
    const catalog = getEntityCatalog('udm-2.1.1');
    for (const ot of dtm.objekty) expect(catalog[ot.elementName]).toBeDefined();
    expect(labelForAttribute('StavStromu', 500, 'udm-2.1.1')).toBe('dobrý');
    expect(labelForAttribute('MaterialUDM', 501, 'udm-2.1.1')).toBe('cihla');
    expect(labelForAttribute('VstupDoDTM', 1, 'udm-2.1.1')).toBe('ano');
    // V JVF katalogu UDM objekty ani UDM číselníky nejsou.
    expect(getEntityCatalog('1.5.0.1')['Strom']).toBeUndefined();
    expect(labelForAttribute('StavStromu', 500, '1.5.0.1')).toBeUndefined();
  });
});

describe('UDM — ukázka pontonového mostu (udm_pontonovy_most.xml)', () => {
  it('3 objektové typy, most „jiný" + upřesnění, povrch dřevo', () => {
    const dtm = parseJvfDtm(S('udm-2.1.1', 'udm_pontonovy_most.xml'));
    expect(dtm.verze).toBe('udm-2.1.1');
    expect(dtm.objekty.map((o) => o.elementName)).toEqual([
      'ObvodMostu',
      'ProvozniPlochaPozemniKomunikacePlocha',
      'ProvozniPlochaPozemniKomunikaceDefinicniBod',
    ]);
    const most = dtm.objekty[0].zaznamy[0];
    expect(most.attributes['TypMostu']).toBe(402);
    expect(labelForAttribute('TypMostu', 402, 'udm-2.1.1')).toBe('jiný');
    expect(most.attributes['Upresneni']).toBe('pontonový most');
    expect(most.attributes['OznaceniMostu']).toBe('pontonový most přes Volyňku');
    expect(most.geometrie[0].type).toBe('Polygon');
    // Povrch plochy i definičního bodu: 205 = dřevo (rozšíření UDM), ne asfalt (1).
    for (const ot of dtm.objekty.slice(1)) {
      expect(ot.zaznamy[0].attributes['PrevazujiciPovrch']).toBe(205);
    }
    expect(labelForAttribute('PrevazujiciPovrch', 205, 'udm-2.1.1')).toBe('dřevo');
  });
});

describe('UDM — oficiální ukázky ČKZ', () => {
  const quiet = <T>(fn: () => T): T => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      return fn();
    } finally {
      warn.mockRestore();
    }
  };

  it('UDM_ukazka-1.xml: 30 typů (10 UDM), 821 záznamů, vše v katalogu, všechny s geometrií', () => {
    const dtm = quiet(() => parseJvfDtm(S('udm-2.1.1', 'UDM_ukazka-1.xml')));
    expect(dtm.verze).toBe('udm-2.1.1');
    expect(dtm.objekty.length).toBe(30);
    expect(dtm.objekty.filter((o) => o.codeBase.startsWith('94')).length).toBe(10);
    const zaznamy = dtm.objekty.flatMap((o) => o.zaznamy);
    expect(zaznamy.length).toBe(821);
    expect(zaznamy.every((z) => z.geometrie.length > 0)).toBe(true);
    const catalog = getEntityCatalog(dtm.verze as 'udm-2.1.1');
    expect(dtm.objekty.filter((o) => !catalog[o.elementName]).map((o) => o.elementName)).toEqual([]);
  });

  it('Vzornik (všechny objekty UDM): 404 typů, 77 objektů 94…, vše v katalogu', () => {
    const dtm = quiet(() => parseJvfDtm(S('udm-2.1.1', 'Vzornik_JVFUDM_02010100.xml')));
    expect(dtm.objekty.length).toBe(404);
    expect(dtm.objekty.filter((o) => o.codeBase.startsWith('94')).length).toBe(77);
    const catalog = getEntityCatalog('udm-2.1.1');
    const unknown = dtm.objekty.filter((o) => !catalog[o.elementName]).map((o) => o.elementName);
    expect(unknown).toEqual([]);
    // Atributy, které nejsou v katalogu objektu (mimo systémové) → drift XSD vs. data.
    const drift: string[] = [];
    for (const ot of dtm.objekty) {
      const allowed = new Set(catalog[ot.elementName].specificAttrs);
      for (const z of ot.zaznamy) {
        for (const k of Object.keys(z.attributes)) {
          if (!allowed.has(k)) drift.push(`${ot.elementName}.${k}`);
        }
      }
    }
    expect([...new Set(drift)]).toEqual([]);
  });
});
