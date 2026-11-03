import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseJvfDtm } from '../../../src/index.js';

/**
 * Identifikátory záznamů (`ID`, `IDZmeny`, …) se čtou doslova jako text:
 * bez převodu na číslo (úvodní nuly, „1e5") a prázdný element (`<ID/>`,
 * nový prvek bez přiděleného ID) = ID chybí. Viewer podle chybějícího ID
 * přiděluje prvku interní klíč pro párování mapy a Přehledu prvků.
 */

const XML_143 = (idElement: string): string => `<?xml version="1.0" encoding="UTF-8"?>
<JVFDTM xmlns="objtyp" xmlns:gml="http://www.opengis.net/gml/3.2">
  <DataJVFDTM>
    <VerzeJVFDTM xmlns="cmn">1.4.3</VerzeJVFDTM>
    <DatumZapisu xmlns="cmn">2026-01-01T12:00:00</DatumZapisu>
    <TypZapisu xmlns="cmn">změnové věty</TypZapisu>
    <Data>
      <BudovaPlocha>
        <ObjektovyTypNazev code_base="0100000001" code_suffix="03" xmlns="budpol">budova</ObjektovyTypNazev>
        <ObsahovaCast xmlns="budpol">ZPS</ObsahovaCast>
        <ZaznamyObjektu xmlns="budpol">
          <ZaznamObjektu>
            <ZapisObjektu xmlns="cmn">i</ZapisObjektu>
            <AtributyObjektu>
              <SpolecneAtributyVsechObjektu xmlns="atr">${idElement}<IDZmeny>000777</IDZmeny></SpolecneAtributyVsechObjektu>
            </AtributyObjektu>
            <GeometrieObjektu>
              <surfaceProperty xmlns="http://www.opengis.net/gml/3.2">
                <Polygon gml:id="P1" srsDimension="2" srsName="EPSG:5514">
                  <exterior><LinearRing><posList>-1 -1 -2 -1 -2 -2 -1 -1</posList></LinearRing></exterior>
                </Polygon>
              </surfaceProperty>
            </GeometrieObjektu>
          </ZaznamObjektu>
        </ZaznamyObjektu>
      </BudovaPlocha>
    </Data>
  </DataJVFDTM>
</JVFDTM>`;

const firstId = (xml: string): string | undefined =>
  parseJvfDtm(xml).objekty[0]?.zaznamy[0]?.commonAttributes?.id;

describe('identifikátory záznamů — JVF 1.4.3', () => {
  it.each(['<ID/>', '<ID></ID>', '<ID>   </ID>'])('prázdné %s = chybějící ID', (el) => {
    expect(firstId(XML_143(el))).toBeUndefined();
  });

  it.each([
    ['00123', '00123'],
    ['1e5', '1e5'],
    ['0x1F', '0x1F'],
    ['720001900017365979999', '720001900017365979999'],
    ['  42003010000244994 ', '42003010000244994'],
  ])('ID %j zůstane doslova jako text', (raw, expected) => {
    const id = firstId(XML_143(`<ID>${raw}</ID>`));
    expect(typeof id).toBe('string');
    expect(id).toBe(expected);
  });

  it('i ostatní identifikátory (IDZmeny) zůstávají textem s úvodními nulami', () => {
    const dtm = parseJvfDtm(XML_143('<ID>1</ID>'));
    expect(dtm.objekty[0]?.zaznamy[0]?.commonAttributes?.idZmeny).toBe('000777');
  });
});

describe('identifikátory záznamů — JVF 1.5.0.1', () => {
  const sample = readFileSync(
    resolve(import.meta.dirname, '../../../samples/1.5.0.1/ukazkaZPS.jvf.xml'),
    'utf-8',
  );

  it('prázdné <atr:ID/> = chybějící ID', () => {
    const xml = sample.replace(/<atr:ID>[^<]*<\/atr:ID>/, '<atr:ID/>');
    const ids = parseJvfDtm(xml).objekty.flatMap((o) => o.zaznamy.map((z) => z.commonAttributes?.id));
    expect(ids).toContain(undefined);
    expect(ids).not.toContain('');
  });

  it('ID s úvodními nulami zůstane doslova', () => {
    const xml = sample.replace(/<atr:ID>[^<]*<\/atr:ID>/, '<atr:ID>000420</atr:ID>');
    const ids = parseJvfDtm(xml).objekty.flatMap((o) => o.zaznamy.map((z) => z.commonAttributes?.id));
    expect(ids).toContain('000420');
  });
});
