// Generováno skriptem scripts/viewer/build-line-symbols.py — neupravovat ručně.
//
// Značky vložené do linií (Katalog DTM ČR, *_l_*.svg): poměr stran (šířka /
// výška), úroveň čáry, na kterou značka navazuje (0 = horní okraj, 1 = dolní),
// a tloušťka této čáry vůči výšce značky (0 = značka bez vlastní čáry).

export interface LineSymbolMetrics {
  aspect: number;
  baseline: number;
  stroke: number;
}

export const LINE_SYMBOLS: Readonly<Record<string, LineSymbolMetrics>> = {
  'DI_l_004_siln_dopr_osa_poz_kom_d1.svg': { aspect: 1.594, baseline: 0.500, stroke: 0.000 },
  'DI_l_004_siln_dopr_osa_poz_kom_d2.svg': { aspect: 1.982, baseline: 0.500, stroke: 0.000 },
  'DI_l_004_siln_dopr_osa_poz_kom_mk1.svg': { aspect: 2.759, baseline: 0.500, stroke: 0.000 },
  'DI_l_004_siln_dopr_osa_poz_kom_mk2.svg': { aspect: 3.147, baseline: 0.500, stroke: 0.000 },
  'DI_l_004_siln_dopr_osa_poz_kom_s1.svg': { aspect: 1.514, baseline: 0.500, stroke: 0.000 },
  'DI_l_004_siln_dopr_osa_poz_kom_s2.svg': { aspect: 1.889, baseline: 0.500, stroke: 0.000 },
  'DI_l_004_siln_dopr_osa_poz_kom_s3.svg': { aspect: 2.264, baseline: 0.500, stroke: 0.000 },
  'DI_l_030_dr_dopr_poz_lan_dr.svg': { aspect: 1.893, baseline: 0.054, stroke: 0.107 },
  'DI_l_043_vod_dopr_osa_sled_vod_cesty.svg': { aspect: 2.818, baseline: 0.500, stroke: 0.000 },
  'TI_l_091_sdil_st_ti_kol.svg': { aspect: 2.282, baseline: 0.500, stroke: 0.038 },
  'TI_l_092_sdil_st_ti_tech_kanal_chran.svg': { aspect: 2.190, baseline: 0.500, stroke: 0.107 },
  'TI_l_092_sdil_st_ti_tech_kanal_jina.svg': { aspect: 2.282, baseline: 0.500, stroke: 0.038 },
  'TI_l_092_sdil_st_ti_tech_kanal_kabelovod.svg': { aspect: 2.190, baseline: 0.500, stroke: 0.107 },
  'TI_l_092_sdil_st_ti_tech_kanal_nezj.svg': { aspect: 2.282, baseline: 0.500, stroke: 0.038 },
  'TI_l_092_sdil_st_ti_tech_kanal_zlab.svg': { aspect: 2.282, baseline: 0.500, stroke: 0.038 },
  'TI_l_098_el_ved_trasa_nn.svg': { aspect: 3.273, baseline: 0.567, stroke: 0.064 },
  'TI_l_098_el_ved_trasa_vn.svg': { aspect: 3.273, baseline: 0.567, stroke: 0.064 },
  'TI_l_098_el_ved_trasa_vvn.svg': { aspect: 3.273, baseline: 0.567, stroke: 0.064 },
  'TI_l_098_el_ved_trasa_zvn.svg': { aspect: 3.196, baseline: 0.593, stroke: 0.181 },
  'TI_l_109_plyn_trasa_ntl.svg': { aspect: 6.357, baseline: 0.054, stroke: 0.107 },
  'TI_l_109_plyn_trasa_stl.svg': { aspect: 6.357, baseline: 0.054, stroke: 0.107 },
  'TI_l_109_plyn_trasa_tlak_vvtl.svg': { aspect: 3.957, baseline: 0.097, stroke: 0.194 },
  'TI_l_109_plyn_trasa_vtl.svg': { aspect: 4.395, baseline: 0.037, stroke: 0.074 },
  'TI_l_113_voda_trasa_priv_rad.svg': { aspect: 3.957, baseline: 0.500, stroke: 0.194 },
  'TI_l_113_voda_trasa_rozv_rad.svg': { aspect: 4.395, baseline: 0.500, stroke: 0.074 },
  'TI_l_121_stok_sit_jed_stoka.svg': { aspect: 3.415, baseline: 0.500, stroke: 0.170 },
  'TI_l_121_stok_sit_nezj_stoka.svg': { aspect: 3.415, baseline: 0.500, stroke: 0.170 },
  'TI_l_121_stok_sit_prumysl.svg': { aspect: 3.415, baseline: 0.500, stroke: 0.170 },
  'TI_l_121_stok_sit_splas_stoka.svg': { aspect: 3.415, baseline: 0.500, stroke: 0.170 },
  'TI_l_121_stok_sit_srazk_stoka.svg': { aspect: 3.415, baseline: 0.500, stroke: 0.170 },
  'TI_l_127_produkt_trasa.svg': { aspect: 4.395, baseline: 0.500, stroke: 0.000 },
  'TI_l_130_teplo_trasa_prim_hork.svg': { aspect: 4.543, baseline: 0.500, stroke: 0.222 },
  'TI_l_130_teplo_trasa_prim_nezj.svg': { aspect: 4.543, baseline: 0.500, stroke: 0.222 },
  'TI_l_130_teplo_trasa_prim_paro.svg': { aspect: 4.395, baseline: 0.500, stroke: 0.222 },
  'TI_l_130_teplo_trasa_prim_tepl.svg': { aspect: 4.543, baseline: 0.500, stroke: 0.222 },
  'TI_l_130_teplo_trasa_sek_hork.svg': { aspect: 4.395, baseline: 0.500, stroke: 0.074 },
  'TI_l_130_teplo_trasa_sek_nezj.svg': { aspect: 4.395, baseline: 0.500, stroke: 0.074 },
  'TI_l_130_teplo_trasa_sek_paro.svg': { aspect: 4.395, baseline: 0.500, stroke: 0.074 },
  'TI_l_130_teplo_trasa_sek_tepl.svg': { aspect: 4.395, baseline: 0.500, stroke: 0.074 },
  'TI_l_133_potrub_posta_trasa.svg': { aspect: 4.395, baseline: 0.500, stroke: 0.074 },
  'ZPS_l_039_dopr_st_vis_lan_dr.svg': { aspect: 1.893, baseline: 0.054, stroke: 0.107 },
  'ZPS_l_199_prisl_st_zabradli.svg': { aspect: 1.000, baseline: 0.500, stroke: 0.000 },
};
