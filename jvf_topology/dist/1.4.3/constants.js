/**
 * Konstanty pro topologické kontroly.
 *
 * - Hranice a tolerance dle DTMwiki 1.3.2
 * - Páry objektových typů pro meziobjektovou topologii (Vrstva 3)
 */
// ---------------------------------------------------------------------------
// Rozsahy souřadnic S-JTSK (EPSG:5514)
// ---------------------------------------------------------------------------
/**
 * Definované hranice 3. kvadrantu S-JTSK (EPSG:5514) pro území ČR.
 * Zdroj: DTMwiki 1.3.2 Minimální rozměry a tolerance
 */
export const SJTSK_BOUNDS = {
    xMin: -904_685.0,
    xMax: -431_627.0,
    yMin: -1_227_296.0,
    yMax: -935_134.0,
};
/** Rozsah výšek Z pro ZPS (m n. m.) */
export const Z_BOUNDS_ZPS = { min: 1.0, max: 1620.0 };
/** Rozsah výšek Z pro definiční body (m n. m.) */
export const Z_BOUNDS_DEFBOD = { min: 0.0, max: 1620.0 };
// ---------------------------------------------------------------------------
// Tolerance
// ---------------------------------------------------------------------------
/** Rozsah tolerance Z pro duplicitní linie (m) — DTMwiki 1.3.2 */
export const DUPLICATE_Z_TOLERANCE = 0.12;
/** Minimální tolerance vzdálenosti (m) — DTMwiki 1.3.2 */
export const MIN_DISTANCE_TOLERANCE = 0.05;
/** Snap tolerance pro sdílení koncových bodů linií (m) */
export const SNAP_TOLERANCE = MIN_DISTANCE_TOLERANCE;
// ---------------------------------------------------------------------------
// Vrstva 3A — Páry DefBod ↔ Plocha
// ---------------------------------------------------------------------------
/**
 * Mapa: kořen názvu objektu → { defbod elementName, plocha elementName }
 *
 * Generuje se ze konvence názvů: `{Kořen}DefinicniBod` + `{Kořen}Plocha`.
 * Zahrnuje všechny páry, kde obě strany existují v DTM katalogu.
 */
export const DEFBOD_PLOCHA_PAIRS = [
    { defbod: 'BudovaDefinicniBod', plocha: 'BudovaPlocha' },
    { defbod: 'CeloPropustkuDefinicniBod', plocha: 'CeloPropustkuPlocha' },
    { defbod: 'ChodnikDefinicniBod', plocha: 'ChodnikPlocha' },
    { defbod: 'CyklostezkaDefinicniBod', plocha: 'CyklostezkaPlocha' },
    { defbod: 'DeliciPasDefinicniBod', plocha: 'DeliciPasPlocha' },
    { defbod: 'DopravniOstruvekDefinicniBod', plocha: 'DopravniOstruvekPlocha' },
    { defbod: 'DrobnaKulturniStavbaDefinicniBod', plocha: 'DrobnaKulturniStavbaPlocha' },
    { defbod: 'DrobnaSakralniStavbaDefinicniBod', plocha: 'DrobnaSakralniStavbaPlocha' },
    { defbod: 'DulLomDefinicniBod', plocha: 'DulLomPlocha' },
    { defbod: 'DvurNadvoriDefinicniBod', plocha: 'DvurNadvoriPlocha' },
    { defbod: 'HospodarskyNevyuzivanaPlochaDefinicniBod', plocha: 'HospodarskyNevyuzivanaPlochaPlocha' },
    { defbod: 'HrazDefinicniBod', plocha: 'HrazPlocha' },
    { defbod: 'HrbitovDefinicniBod', plocha: 'HrbitovPlocha' },
    { defbod: 'HristeDefinicniBod', plocha: 'HristePlocha' },
    { defbod: 'JezDefinicniBod', plocha: 'JezPlocha' },
    { defbod: 'JezeroDefinicniBod', plocha: 'JezeroPlocha' },
    { defbod: 'JineDulniDiloStavbaDefinicniBod', plocha: 'JineDulniDiloStavbaPlocha' },
    { defbod: 'KominDefinicniBod', plocha: 'KominPlocha' },
    { defbod: 'LesDefinicniBod', plocha: 'LesPlocha' },
    { defbod: 'ManipulacniPlochaDefinicniBod', plocha: 'ManipulacniPlochaPlocha' },
    { defbod: 'MelioracniPrikopZlabDefinicniBod', plocha: 'MelioracniPrikopZlabPlocha' },
    { defbod: 'MostniVahaDefinicniBod', plocha: 'MostniVahaPlocha' },
    { defbod: 'NadrzBezVzdouvacihoObjektuDefinicniBod', plocha: 'NadrzBezVzdouvacihoObjektuPlocha' },
    { defbod: 'NadrzZdrzSeVzdouvacimObjektemDefinicniBod', plocha: 'NadrzZdrzSeVzdouvacimObjektemPlocha' },
    { defbod: 'NajezdDefinicniBod', plocha: 'NajezdPlocha' },
    { defbod: 'NastupisteDefinicniBod', plocha: 'NastupistePlocha' },
    { defbod: 'OstatniZastresenaStavbaDefinicniBod', plocha: 'OstatniZastresenaStavbaPlocha' },
    { defbod: 'ParkovisteOdstavnaPlochaDefinicniBod', plocha: 'ParkovisteOdstavnaPlochaPlocha' },
    { defbod: 'PatkaDeskaMonolitPilirDefinicniBod', plocha: 'PatkaDeskaMonolitPilirPlocha' },
    { defbod: 'PlochaMostniKonstrukceDefinicniBod', plocha: 'PlochaMostniKonstrukcePlocha' },
    { defbod: 'PlochaRekultivaceDefinicniBod', plocha: 'PlochaRekultivacePlocha' },
    { defbod: 'PodezdivkaDefinicniBod', plocha: 'PodezdivkaPlocha' },
    { defbod: 'PodzemniObjektZPSDefinicniBod', plocha: 'PodzemniObjektZPSPlocha' },
    { defbod: 'PortalPodchoduDefinicniBod', plocha: 'PortalPodchoduPlocha' },
    { defbod: 'PortalTuneluDefinicniBod', plocha: 'PortalTuneluPlocha' },
    { defbod: 'PridruzenaPlochaPozemniKomunikaceDefinicniBod', plocha: 'PridruzenaPlochaPozemniKomunikacePlocha' },
    { defbod: 'PrikopNasepZarezDopravniStavbyDefinicniBod', plocha: 'PrikopNasepZarezDopravniStavbyPlocha' },
    { defbod: 'ProtipovodnovaZabranaDefinicniBod', plocha: 'ProtipovodnovaZabranaPlocha' },
    { defbod: 'ProvozniPlochaPodchoduDefinicniBod', plocha: 'ProvozniPlochaPodchoduPlocha' },
    { defbod: 'ProvozniPlochaPozemniKomunikaceDefinicniBod', plocha: 'ProvozniPlochaPozemniKomunikacePlocha' },
    { defbod: 'ProvozniPlochaTuneluDefinicniBod', plocha: 'ProvozniPlochaTuneluPlocha' },
    { defbod: 'RampaDefinicniBod', plocha: 'RampaPlocha' },
    { defbod: 'SchodisteDefinicniBod', plocha: 'SchodistePlocha' },
    { defbod: 'SklenikDefinicniBod', plocha: 'SklenikPlocha' },
    { defbod: 'SouhrnnaPlochaZeleznicnichDrahDefinicniBod', plocha: 'SouhrnnaPlochaZeleznicnichDrahPlocha' },
    { defbod: 'SpecialniDrahaDefinicniBod', plocha: 'SpecialniDrahaPlocha' },
    { defbod: 'StavbaProZpevneniPovrchuDefinicniBod', plocha: 'StavbaProZpevneniPovrchuPlocha' },
    { defbod: 'StavebneUpraveneKorytoDefinicniBod', plocha: 'StavebneUpraveneKorytoPlocha' },
    { defbod: 'SterkovaPrehrazkaDefinicniBod', plocha: 'SterkovaPrehrazkaPlocha' },
    { defbod: 'StupenDefinicniBod', plocha: 'StupenPlocha' },
    { defbod: 'SuchaNadrzDefinicniBod', plocha: 'SuchaNadrzPlocha' },
    { defbod: 'TerasaDefinicniBod', plocha: 'TerasaPlocha' },
    { defbod: 'TramvajovaDrahaDefinicniBod', plocha: 'TramvajovaDrahaPlocha' },
    { defbod: 'UdrzovanaPlochaZeleneDefinicniBod', plocha: 'UdrzovanaPlochaZelenePlocha' },
    { defbod: 'UlozneMistoTezebnihoOdpaduDefinicniBod', plocha: 'UlozneMistoTezebnihoOdpaduPlocha' },
    { defbod: 'VegetacniMisaDefinicniBod', plocha: 'VegetacniMisaPlocha' },
    { defbod: 'VodniTokDefinicniBod', plocha: 'VodniTokPlocha' },
    { defbod: 'ZahradaDefinicniBod', plocha: 'ZahradaPlocha' },
    { defbod: 'ZahradniBazenDefinicniBod', plocha: 'ZahradniBazenPlocha' },
    { defbod: 'ZarizeniKanalizacniPripojkyDefinicniBod', plocha: 'ZarizeniKanalizacniPripojkyPlocha' },
    { defbod: 'ZarizeniVodovodniPripojkyDefinicniBod', plocha: 'ZarizeniVodovodniPripojkyPlocha' },
    { defbod: 'ZastreseniDefinicniBod', plocha: 'ZastreseniPlocha' },
    { defbod: 'ZedDefinicniBod', plocha: 'ZedPlocha' },
    { defbod: 'ZemedelskaPlochaDefinicniBod', plocha: 'ZemedelskaPlochaPlocha' },
    { defbod: 'PozemniLanovaDrahaDefinicniBod', plocha: 'PozemniLanovaDrahaPlocha' },
];
// ---------------------------------------------------------------------------
// Vrstva 3B — Páry Osa ↔ Obvod pro DI objekty
// ---------------------------------------------------------------------------
/**
 * Páry Osa → Obvod pro DI objekty.
 * V JVF DTM 1.4.3: OsaPozemniKomunikace leží uvnitř ObvodPozemniKomunikace.
 */
export const OSA_OBVOD_PAIRS = [
    { osa: 'OsaPozemniKomunikace', obvod: 'ObvodPozemniKomunikace' },
];
//# sourceMappingURL=constants.js.map