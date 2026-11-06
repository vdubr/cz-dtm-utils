import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  KATALOG_SYMBOLOGY,
  KATALOG_VARIANT_ATTR,
  katalogGeomOf,
  parseKatalogLineStyle,
  resolveKatalogAppearance,
  resolveKatalogLook,
  resolveKatalogRepresentativeLook,
  resolveKatalogVariantLooks,
  resolveKatalogVariantValue,
} from '../../src/index.js';
import { ENTITY_CATALOG } from '../../src/1.4.3/generated/entities.js';

/**
 * Vzhled čistého JVF DTM podle Katalogu DTM ČR: podle typu geometrie
 * (přípona kódu) a hodnoty atributu, se značkami z kartografického balíčku
 * ČÚZK (jvf_viewer/public/symboly).
 */

const SYMBOLY = resolve(import.meta.dirname, '../../../jvf_viewer/public/symboly');
const ot = (code: string, suffix: string) => ({ codeBase: code, codeSuffix: suffix });
const attrs = (a: Record<string, unknown>) => ({ attributes: a });

describe('Katalog DTM ČR — data', () => {
  it('kódy objektů mají 10 znaků (úvodní nula)', () => {
    for (const [k, s] of Object.entries(KATALOG_SYMBOLOGY)) {
      expect(k).toMatch(/^\d{10}$/);
      expect(s.code).toBe(k);
    }
    for (const k of Object.keys(KATALOG_VARIANT_ATTR)) expect(k).toMatch(/^\d{10}$/);
  });

  it('všechna odkazovaná SVG existují (kromě čárových vzorů, které se nekreslí)', () => {
    const missing: string[] = [];
    for (const s of Object.values(KATALOG_SYMBOLOGY)) {
      for (const f of [s.pointSvg, s.areaSvg, s.lineSvg, ...(s.variants ?? []).map((v) => v.lineSvg)]) {
        if (f && !existsSync(resolve(SYMBOLY, f))) missing.push(`${s.code}: ${f}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it('každá entita 1.4.3 × hodnota atributu: značka bodu existuje', () => {
    const missing = new Set<string>();
    for (const e of Object.values(ENTITY_CATALOG)) {
      const map = KATALOG_VARIANT_ATTR[e.codeBase];
      const values = map ? Object.keys(map.valueToVariantIndex) : [];
      for (const v of [undefined, ...values]) {
        const look = resolveKatalogLook(e, v === undefined ? undefined : attrs({ [map!.attrName]: v }));
        if (look?.svg && !existsSync(resolve(SYMBOLY, look.svg))) missing.add(look.svg);
      }
    }
    expect([...missing]).toEqual([]);
  });
});

describe('resolveKatalogLook — podle geometrie', () => {
  it('přípona kódu → typ geometrie', () => {
    expect(['01', '02', '03', '04'].map(katalogGeomOf)).toEqual(['bod', 'linie', 'plocha', 'defbod']);
  });

  it('budova: plocha s výplní a obrysem, definiční bod se značkou', () => {
    expect(resolveKatalogLook(ot('0100000001', '03'))).toEqual({ color: '#d6d4d4', fill: '#ebe9e8', widthMm: 1.6 });
    expect(resolveKatalogLook(ot('0100000001', '04'))?.svg).toBe('ZPS_db.svg');
  });

  it('ochranné pásmo: barva Katalogu je obrys, plocha se nevyplňuje', () => {
    expect(resolveKatalogLook(ot('0100000283', '03'))).toEqual({ color: '#4ce600', widthMm: 0.18 });
    expect(resolveKatalogLook(ot('0100000296', '03'), attrs({ TypOPLetiste: 3 }))).toEqual({
      color: '#000000',
      widthMm: 0.25,
    });
  });

  it('les: plocha jen výplní, definiční bod s plošnou značkou lesa', () => {
    expect(resolveKatalogLook(ot('0100000211', '03'))).toEqual({ fill: '#d3e0bc' });
    expect(resolveKatalogLook(ot('0100000211', '04'))?.svg).toBe('ZPS_p_211_zps_pl_les_lab.svg');
  });

  it('varianta podle geometrie: dopravně významné místo — bod značkou, plocha obrysem', () => {
    expect(resolveKatalogLook(ot('0100000040', '01'))?.svg).toBe('DI_b_040_dopr_vyzn_misto_na_draze.svg');
    expect(resolveKatalogLook(ot('0100000040', '03'))).toEqual({ color: '#646464', widthMm: 0.25 });
  });
});

describe('resolveKatalogLook — podle hodnoty atributu', () => {
  it('objekt stokové sítě: bod značkou varianty, plocha obrysem a výplní', () => {
    // 8 = šachta kanalizační
    expect(resolveKatalogLook(ot('0100000337', '01'), attrs({ TypObjektuStokoveSite: 8 }))).toEqual({
      color: '#915904',
      svg: 'TI_b_337_stok_sit_obj_sach.svg',
    });
    expect(resolveKatalogLook(ot('0100000337', '03'), attrs({ TypObjektuStokoveSite: 8 }))).toEqual({
      color: '#915904',
      fill: '#f2e4ce',
      widthMm: 0.13,
    });
  });

  it('drobná kulturní stavba (socha): bod bodovou značkou, definiční bod plošnou', () => {
    expect(resolveKatalogLook(ot('0100000159', '01'), attrs({ TypDrobneKulturniStavby: 4 }))?.svg).toBe(
      'ZPS_b_159_st_kult_socha.svg',
    );
    expect(resolveKatalogLook(ot('0100000159', '04'), attrs({ TypDrobneKulturniStavby: 4 }))?.svg).toBe(
      'ZPS_p_159_zps_pl_dr_kult_st_socha_lab.svg',
    );
  });

  it('opravené odkazy: šachta teplovodu, trasa vodovodu (dřív 9místný kód)', () => {
    expect(resolveKatalogLook(ot('0100000131', '01'), attrs({ TypZarizeniTeplovodniSite: 2 }))?.svg).toBe(
      'TI_b_131_teplo_zar_tepl_sach.svg',
    );
    expect(resolveKatalogLook(ot('0100000113', '02'), attrs({ TypTrasyVodovodniSite: 1 }))).toEqual({
      color: '#005ce6',
      widthMm: 0.35,
      dashMm: [36, 8],
      lineSvg: 'TI_l_113_voda_trasa_priv_rad.svg',
    });
  });

  it('bez barvy v základu i variantě: barva z reprezentativního vzhledu (jako legenda)', () => {
    // Trasa vodovodu bez atributu → barva první varianty (jako legenda).
    expect(resolveKatalogRepresentativeLook(ot('0100000113', '02'))?.color).toBe('#005ce6');
    expect(resolveKatalogLook(ot('0100000113', '02'))).toEqual(resolveKatalogRepresentativeLook(ot('0100000113', '02')));
    // OP silnice II. třídy (4): varianta má v Katalogu jen tloušťku → barva
    // jako v legendě, ne náhradní barva obsahové části.
    expect(resolveKatalogLook(ot('0100000294', '03'), attrs({ TypOPPozemniKomunikace: 4 }))).toEqual({
      color: '#000000',
      widthMm: 0.18,
    });
  });

  it('mapa a legenda mají pro každou entitu × hodnotu atributu barvu (žádný pád na náhradní)', () => {
    const bezBarvy: string[] = [];
    for (const e of Object.values(ENTITY_CATALOG)) {
      const rep = resolveKatalogRepresentativeLook(e);
      if (!rep?.color && !rep?.fill) continue; // objekt bez barvy v Katalogu vůbec
      const map = KATALOG_VARIANT_ATTR[e.codeBase];
      for (const v of [undefined, ...Object.keys(map?.valueToVariantIndex ?? {})]) {
        const look = resolveKatalogLook(e, v === undefined ? undefined : attrs({ [map!.attrName]: v }));
        if (!look?.color && !look?.fill) bezBarvy.push(`${e.elementName}=${v}`);
      }
    }
    expect(bezBarvy).toEqual([]);
  });

  it('Appearance pro CAD: id symbolu dtm-…, výplň', () => {
    expect(resolveKatalogAppearance(ot('0100000218', '01'))).toEqual({
      color: '#646464',
      symbol: 'dtm-ZPS_b_218_podr_bod_zps',
    });
    expect(resolveKatalogAppearance(ot('0100000211', '03'))).toEqual({ color: '#d3e0bc', fill: '#d3e0bc' });
  });
});

describe('Příčky na plné čáře (plot)', () => {
  it('plot = plná čára s příčkami 0,15 mm po 10 mm, ne tečkovaná čára', () => {
    const plot = resolveKatalogLook(ot('0100000162', '02'));
    expect(plot?.dashMm).toBeUndefined();
    expect(plot?.ticksMm).toEqual([0.15, 10]);
    expect(plot?.widthMm).toBe(0.18);
  });

  it('běžné čárkování zůstává přerušovanou čarou', () => {
    const el = resolveKatalogLook(ot('0100000098', '02'), attrs({ MaximalniNapetovaHladina: '1' }));
    expect(el?.dashMm).toEqual([36, 7]);
    expect(el?.ticksMm).toBeUndefined();
  });
});

describe('Značka vložená do linie (*_l_*.svg)', () => {
  it('trasa elektrické sítě NN nese blesk, VN dvojitou šipku', () => {
    const el = (v: string) => resolveKatalogLook(ot('0100000098', '02'), attrs({ MaximalniNapetovaHladina: v }));
    expect(el('1')?.lineSvg).toBe('TI_l_098_el_ved_trasa_nn.svg');
    expect(el('2')?.lineSvg).toBe('TI_l_098_el_ved_trasa_vn.svg');
  });

  it('varianta bez značky nepřebírá značku základu (místní komunikace IV. třídy není „D I")', () => {
    const osa = (v: string) => resolveKatalogLook(ot('0100000004', '02'), attrs({ KategoriePozemniKomunikace: v }))?.lineSvg;
    expect(osa('3')).toBe('DI_l_004_siln_dopr_osa_poz_kom_s1.svg');
    expect(osa('9')).toBeUndefined();
    expect(osa('99')).toBeUndefined();
  });

  it('značka linie u základu objektu (zábradlí) a jen u linií', () => {
    expect(resolveKatalogLook(ot('0100000199', '02'))?.lineSvg).toBe('ZPS_l_199_prisl_st_zabradli.svg');
    expect(resolveKatalogLook(ot('0100000218', '01'))?.lineSvg).toBeUndefined();
  });
});

describe('Varianty vzhledu podle atributu (legenda, panel vrstev)', () => {
  it('podpěrné zařízení: dlaždice pro každý typ, se značkou jako v mapě', () => {
    const vars = resolveKatalogVariantLooks(ot('0100000095', '01'));
    expect(vars.map((v) => v.value)).toContain('nástěnná konzola');
    expect(vars.map((v) => v.value)).toContain('sloup trakčního vedení');
    const konzola = vars.find((v) => v.value === 'nástěnná konzola')!;
    // Stejný vzhled jako záznam s TypPodpernehoZarizeni=5 v mapě.
    expect(konzola.look).toEqual(resolveKatalogLook(ot('0100000095', '01'), attrs({ TypPodpernehoZarizeni: '5' })));
  });

  it('hodnota varianty záznamu', () => {
    expect(resolveKatalogVariantValue(ot('0100000095', '01'), attrs({ TypPodpernehoZarizeni: '5' }))).toBe('nástěnná konzola');
    expect(resolveKatalogVariantValue(ot('0100000095', '01'), attrs({}))).toBeUndefined();
  });

  it('objekt bez variant podle atributu nemá dlaždice variant', () => {
    expect(resolveKatalogVariantLooks(ot('0100000218', '01'))).toEqual([]);
  });

  it('každá varianta legendy odpovídá vzhledu některého záznamu v mapě', () => {
    const chybi: string[] = [];
    for (const e of Object.values(ENTITY_CATALOG)) {
      const map = KATALOG_VARIANT_ATTR[e.codeBase];
      if (!map) continue;
      const mapLooks = Object.keys(map.valueToVariantIndex).map((v) =>
        JSON.stringify(resolveKatalogLook(e, attrs({ [map.attrName]: v }))));
      for (const v of resolveKatalogVariantLooks(e)) {
        if (!mapLooks.includes(JSON.stringify(v.look))) chybi.push(`${e.elementName}: ${v.value}`);
      }
    }
    expect(chybi).toEqual([]);
  });
});

describe('parseKatalogLineStyle', () => {
  it('čárkování v mm, desetinná čárka, číslo vzoru a víc úseků', () => {
    expect(parseKatalogLineStyle('plná')).toBeUndefined();
    expect(parseKatalogLineStyle('čárkovaná')).toBeUndefined();
    expect(parseKatalogLineStyle('čárkovaná 60,0 6,0 [68]')).toEqual([60, 6]);
    expect(parseKatalogLineStyle('čárkovaná 2,0 1,5 /\n3,5 7,0')).toEqual([2, 1.5, 3.5, 7]);
  });
});
