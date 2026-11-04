/**
 * Katalog mapových služeb DTM ČR (IS DMVS, ČÚZK) pro překryvnou vrstvu.
 *
 * Služby jsou veřejné, bez přihlášení, v EPSG:5514 a posílají
 * `Access-Control-Allow-Origin: *`:
 *   - WMTS (cachované dlaždice celé služby):
 *     https://dmvs.cuzk.gov.cz/api/wmts/{svc}/rest/{svc}/default/grid_5514/{z}/{row}/{col}.png
 *   - WMS 1.3.0 (výběr podvrstev parametrem LAYERS):
 *     https://dmvs.cuzk.gov.cz/api/wms/{svc}
 *
 * Podvrstvy, názvy a `maxScale` (MaxScaleDenominator — nad tímto měřítkem
 * služba nic nekreslí) jsou přepsané z WMS GetCapabilities služeb
 * (staženo 2026-11-04). Vektorová služba DTM celostátně neexistuje.
 * Šedá varianta ploch (`dtm_zps_plochy_seda`) je vynechaná.
 *
 * Pořadí služeb = pořadí vykreslování (první dole): plochy → DI → TI →
 * přípojky → ZPS linie a body.
 */
export interface DtmSublayer {
  /** Název vrstvy ve službě (parametr LAYERS). */
  name: string;
  title: string;
  /** Největší měřítkové číslo, při kterém služba vrstvu kreslí. */
  maxScale: number;
}

export interface DtmService {
  /** Identifikátor služby v URL (`{svc}`). */
  id: string;
  title: string;
  /** Má služba WMTS (cachované dlaždice)? Přípojky ne — jen WMS. */
  wmts: boolean;
  sublayers: DtmSublayer[];
}

export const DTM_WMS_BASE = 'https://dmvs.cuzk.gov.cz/api/wms/';
export const DTM_WMTS_BASE = 'https://dmvs.cuzk.gov.cz/api/wmts/';
export const DTM_ATTRIBUTION = '© ČÚZK – IS DMVS, data krajských DTM';

export const DTM_SERVICES: readonly DtmService[] = [
  {
    id: 'dtm_zps_plochy_bar',
    title: 'ZPS – plochy',
    wmts: true,
    sublayers: [
      { name: 'bud', title: 'Budovy', maxScale: 37001 },
      { name: 'dopr_st', title: 'Dopravní stavby', maxScale: 37001 },
      { name: 'vod_dila', title: 'Vodní díla', maxScale: 37001 },
      { name: 'prum_st', title: 'Průmyslové účely a hospodářství', maxScale: 37001 },
      { name: 'rek_kult_st', title: 'Rekreační, kulturní, sakrální stavby', maxScale: 37001 },
      { name: 'prisl_st', title: 'Součásti a příslušenství staveb', maxScale: 14001 },
      { name: 'vod_veg', title: 'Vodstvo, vegetace a terén', maxScale: 37001 },
    ],
  },
  {
    id: 'dtm_di_ver',
    title: 'Dopravní infrastruktura',
    wmts: true,
    sublayers: [
      { name: 'siln_dopr', title: 'Silniční doprava', maxScale: 150001 },
      { name: 'dr_dopr', title: 'Drážní doprava', maxScale: 150001 },
      { name: 'vod_dopr', title: 'Vodní doprava', maxScale: 150001 },
      { name: 'let_dopr', title: 'Letecká doprava', maxScale: 150001 },
      { name: 'dopr_st_skup', title: 'Dopravní stavby společné pro více skupin', maxScale: 37001 },
    ],
  },
  {
    id: 'dtm_ti_ver',
    title: 'Technická infrastruktura',
    wmts: true,
    sublayers: [
      { name: 'el_ved', title: 'Elektrické vedení', maxScale: 150001 },
      { name: 'el_kom', title: 'Elektronická komunikace', maxScale: 150001 },
      { name: 'plyn', title: 'Plynovod', maxScale: 150001 },
      { name: 'voda', title: 'Vodovod', maxScale: 150001 },
      { name: 'kan', title: 'Kanalizace', maxScale: 37001 },
      { name: 'teplo', title: 'Teplovod', maxScale: 37001 },
      { name: 'produkt', title: 'Produktovod', maxScale: 75001 },
      { name: 'potrub_posta', title: 'Potrubní pošta', maxScale: 37001 },
      { name: 'priv_vody', title: 'Přivaděč povrchových vod, náhon, odpad', maxScale: 150001 },
      { name: 'odp_hosp', title: 'Odpadové hospodářství', maxScale: 150001 },
      { name: 'sdil_st_ti', title: 'Sdílená stavba / objekt TI', maxScale: 37001 },
      { name: 'zar_st_ti', title: 'Zařízení staveb TI', maxScale: 801 },
      { name: 'zar_dopr_st', title: 'Zařízení dopravních staveb', maxScale: 801 },
      { name: 'st_kor_vod_tok', title: 'Stavba v korytě vodního toku', maxScale: 7001 },
      { name: 'st_ochr_pov', title: 'Ochrana před povodněmi', maxScale: 7001 },
      { name: 'st_mel_poz', title: 'Stavba k melioracím pozemků', maxScale: 801 },
    ],
  },
  {
    id: 'dtm_pripojky',
    title: 'Přípojky inženýrských sítí',
    // WMTS GetCapabilities služby je prázdné, dlaždice vrací 400 (ověřeno 2026-11-04).
    wmts: false,
    sublayers: [
      { name: 'el_ved_prip', title: 'Elektrické vedení', maxScale: 801 },
      { name: 'plyn_prip', title: 'Plynovod', maxScale: 801 },
      { name: 'vod_prip', title: 'Vodovod', maxScale: 801 },
      { name: 'kan_prip', title: 'Kanalizace', maxScale: 801 },
    ],
  },
  {
    id: 'dtm_zps_linie_body',
    title: 'ZPS – linie a body',
    wmts: true,
    sublayers: [
      { name: 'bud', title: 'Budovy', maxScale: 37001 },
      { name: 'prisl_st', title: 'Součásti a příslušenství staveb', maxScale: 7001 },
      { name: 'st_kult_sakr', title: 'Rekreační, kulturní a sakrální stavby', maxScale: 801 },
      { name: 'dopr_st', title: 'Dopravní stavby', maxScale: 37001 },
      { name: 'vod_dila', title: 'Vodní díla', maxScale: 37001 },
      { name: 'prir_obj', title: 'Přírodní a polopřírodní objekty', maxScale: 37001 },
      { name: 'udrz_zelen', title: 'Udržovaná zeleň', maxScale: 7001 },
      { name: 'ost_pl', title: 'Ostatní plochy', maxScale: 37001 },
      { name: 'podz_obj', title: 'Podzemní objekty', maxScale: 801 },
      { name: 'dop_konstr', title: 'Doplňkové konstrukční prvky', maxScale: 801 },
      { name: 'teren_hrana', title: 'Terénní hrany', maxScale: 7001 },
      { name: 'def_bod', title: 'Definiční body', maxScale: 801 },
    ],
  },
];

/** Klíč podvrstvy v rámci celé DTM (`svc:name`). */
export function dtmKey(serviceId: string, name: string): string {
  return `${serviceId}:${name}`;
}

/** Velikost pixelu OGC (0,28 mm) — převod měřítka na rozlišení mapy. */
export const OGC_PIXEL_M = 0.00028;
