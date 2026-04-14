/** UrovenUmisteniObjektuZPS */
export declare const UrovenUmisteniObjektuZPS: {
    readonly VALUE_MINUS_3: -3;
    readonly VALUE_MINUS_2: -2;
    readonly VALUE_MINUS_1: -1;
    readonly NA_POVRCHU: 0;
    readonly VALUE_1: 1;
    readonly VALUE_2: 2;
    readonly VALUE_3: 3;
};
export type UrovenUmisteniObjektuZPSValue = (typeof UrovenUmisteniObjektuZPS)[keyof typeof UrovenUmisteniObjektuZPS];
/** UrovenUmisteniObjektuTI */
export declare const UrovenUmisteniObjektuTI: {
    readonly POD_POVRCHEM: -1;
    readonly NA_POVRCHU: 0;
    readonly NAD_POVRCHEM: 1;
};
export type UrovenUmisteniObjektuTIValue = (typeof UrovenUmisteniObjektuTI)[keyof typeof UrovenUmisteniObjektuTI];
/** UrovenUmisteniObjektuDI */
export declare const UrovenUmisteniObjektuDI: {
    readonly VALUE_MINUS_3: -3;
    readonly VALUE_MINUS_2: -2;
    readonly VALUE_MINUS_1: -1;
    readonly NA_POVRCHU: 0;
    readonly VALUE_1: 1;
    readonly VALUE_2: 2;
    readonly VALUE_3: 3;
};
export type UrovenUmisteniObjektuDIValue = (typeof UrovenUmisteniObjektuDI)[keyof typeof UrovenUmisteniObjektuDI];
/** PrevazujiciPovrch */
export declare const PrevazujiciPovrch: {
    readonly ASFALT: 1;
    readonly BETON: 2;
    readonly DLAZBA: 3;
    readonly R_MATERIAL: 4;
    readonly PISEK_STERKOPISEK: 5;
    readonly SOTOLINA: 6;
    readonly NEZPEVNENO: 7;
    readonly NEZJISTENO: 99;
};
export type PrevazujiciPovrchValue = (typeof PrevazujiciPovrch)[keyof typeof PrevazujiciPovrch];
/** KategoriePozemniKomunikace */
export declare const KategoriePozemniKomunikace: {
    readonly DALNICE_I_TRIDY: 1;
    readonly DALNICE_II_TRIDY: 2;
    readonly SILNICE_I_TRIDY: 3;
    readonly SILNICE_II_TRIDY: 4;
    readonly SILNICE_III_TRIDY: 5;
    readonly MISTNI_KOMUNIKACE_I_TRIDY: 6;
    readonly MISTNI_KOMUNIKACE_II_TRIDY: 7;
    readonly MISTNI_KOMUNIKACE_III_TRIDY: 8;
    readonly MISTNI_KOMUNIKACE_IV_TRIDY: 9;
    readonly UCELOVA_KOMUNIKACE: 10;
    readonly NEVEREJNE_PRISTUPNA_UCELOVA_KOMUNIKACE: 11;
    readonly NEZJISTENO_NEURCENO: 99;
};
export type KategoriePozemniKomunikaceValue = (typeof KategoriePozemniKomunikace)[keyof typeof KategoriePozemniKomunikace];
/** TypUsekuPozemniKomunikace */
export declare const TypUsekuPozemniKomunikace: {
    readonly ZEMNI_TELESO_KOMUNIKACE: 1;
    readonly MOST: 2;
    readonly TUNEL: 3;
    readonly PRESYPANY_MOST: 4;
    readonly NEZJISTENO: 99;
};
export type TypUsekuPozemniKomunikaceValue = (typeof TypUsekuPozemniKomunikace)[keyof typeof TypUsekuPozemniKomunikace];
/** TypPozemniKomunikace */
export declare const TypPozemniKomunikace: {
    readonly KOMUNIKACE: 1;
    readonly OKRUZNI_KRIZOVATKA: 2;
    readonly PROSTRANSTVI_BEZPROSTREDNE_SLOUZICI_PROVOZU_A_UDRZBE_POZEMNI_KOMUNIKACE: 3;
    readonly NEZJISTENO: 99;
};
export type TypPozemniKomunikaceValue = (typeof TypPozemniKomunikace)[keyof typeof TypPozemniKomunikace];
/** TypObjektuSilnicniDopravyZameru */
export declare const TypObjektuSilnicniDopravyZameru: {
    readonly DALNICE: 1;
    readonly SILNICE: 2;
    readonly MISTNI_KOMUNIKACE: 3;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuSilnicniDopravyZameruValue = (typeof TypObjektuSilnicniDopravyZameru)[keyof typeof TypObjektuSilnicniDopravyZameru];
/** TypDrahy */
export declare const TypDrahy: {
    readonly ZELEZNICNI: 1;
    readonly TRAMVAJOVA: 2;
    readonly LANOVA: 3;
    readonly SPECIALNI: 4;
};
export type TypDrahyValue = (typeof TypDrahy)[keyof typeof TypDrahy];
/** TypUsekuZeleznicniTrate */
export declare const TypUsekuZeleznicniTrate: {
    readonly ZEMNI_TELESO: 1;
    readonly MOST: 2;
    readonly TUNEL: 3;
    readonly NEZJISTENO: 99;
};
export type TypUsekuZeleznicniTrateValue = (typeof TypUsekuZeleznicniTrate)[keyof typeof TypUsekuZeleznicniTrate];
/** KategorieZeleznicniTrate */
export declare const KategorieZeleznicniTrate: {
    readonly CELOSTATNI: 1;
    readonly REGIONALNI: 2;
    readonly MISTNI: 3;
    readonly VLECKA: 4;
    readonly ZKUSEBNI: 5;
    readonly JINA: 98;
    readonly NEZJISTENO_NEURCENO: 99;
};
export type KategorieZeleznicniTrateValue = (typeof KategorieZeleznicniTrate)[keyof typeof KategorieZeleznicniTrate];
/** TypZeleznicniTrate */
export declare const TypZeleznicniTrate: {
    readonly VYSOKORYCHLOSTNI: 1;
    readonly KONVENCNI: 2;
    readonly NEZJISTENO: 99;
};
export type TypZeleznicniTrateValue = (typeof TypZeleznicniTrate)[keyof typeof TypZeleznicniTrate];
/** ElektrizaceZeleznicniTrate */
export declare const ElektrizaceZeleznicniTrate: {
    readonly ELEKTRIZOVANA: 1;
    readonly NEELEKTRIZOVANA: 2;
    readonly NEZJISTENO: 99;
};
export type ElektrizaceZeleznicniTrateValue = (typeof ElektrizaceZeleznicniTrate)[keyof typeof ElektrizaceZeleznicniTrate];
/** ZpusobPorizeniDI */
export declare const ZpusobPorizeniDI: {
    readonly GEODETICKY_TERESTRICKY: 1;
    readonly GEODETICKY_FOTOGRAMMETRICKY: 2;
    readonly GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3;
    readonly PRIBLIZNYM_ZAKRESEM: 4;
    readonly ODVOZENIM: 5;
    readonly NEZJISTENO: 99;
};
export type ZpusobPorizeniDIValue = (typeof ZpusobPorizeniDI)[keyof typeof ZpusobPorizeniDI];
/** RozchodKoleji */
export declare const RozchodKoleji: {
    readonly VALUE_1: 1;
    readonly VALUE_2: 2;
    readonly SPLITKA: 3;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type RozchodKolejiValue = (typeof RozchodKoleji)[keyof typeof RozchodKoleji];
/** DruhDopravyLanoveDrahy */
export declare const DruhDopravyLanoveDrahy: {
    readonly NAKLADNI: 1;
    readonly OSOBNI: 2;
    readonly NEZJISTENO: 99;
};
export type DruhDopravyLanoveDrahyValue = (typeof DruhDopravyLanoveDrahy)[keyof typeof DruhDopravyLanoveDrahy];
/** ZpusobPorizeniZPS */
export declare const ZpusobPorizeniZPS: {
    readonly GEODETICKY_TERESTRICKY: 1;
    readonly GEODETICKY_FOTOGRAMMETRICKY: 2;
    readonly GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3;
    readonly PRIBLIZNYM_ZAKRESEM: 4;
    readonly ODVOZENIM: 5;
    readonly NEZJISTENO: 99;
};
export type ZpusobPorizeniZPSValue = (typeof ZpusobPorizeniZPS)[keyof typeof ZpusobPorizeniZPS];
/** ZpusobPorizeniPB_ZPS */
export declare const ZpusobPorizeniPB_ZPS: {
    readonly GEODETICKY_TERESTRICKY: 1;
    readonly GEODETICKY_FOTOGRAMMETRICKY: 2;
    readonly GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3;
    readonly PRIBLIZNYM_ZAKRESEM: 4;
    readonly KONSTRUKCNE: 5;
    readonly NEZJISTENO: 99;
};
export type ZpusobPorizeniPB_ZPSValue = (typeof ZpusobPorizeniPB_ZPS)[keyof typeof ZpusobPorizeniPB_ZPS];
/** TypDopravneVyznamnehoMistaDraze */
export declare const TypDopravneVyznamnehoMistaDraze: {
    readonly STANICE: 1;
    readonly ZASTAVKA: 2;
    readonly ODBOCKA: 3;
    readonly NAKLADISTE: 4;
    readonly JINE: 98;
    readonly NEZJISTENO_NEURCENO: 99;
};
export type TypDopravneVyznamnehoMistaDrazeValue = (typeof TypDopravneVyznamnehoMistaDraze)[keyof typeof TypDopravneVyznamnehoMistaDraze];
/** ZarazeniSledovaneVodniCesty */
export declare const ZarazeniSledovaneVodniCesty: {
    readonly DOPRAVNE_VYZNAMNA_VYUZIVANA: 1;
    readonly DOPRAVNE_VYZNAMNA_VYUZITELNA: 2;
    readonly UCELOVA: 3;
    readonly PLANOVANA: 4;
};
export type ZarazeniSledovaneVodniCestyValue = (typeof ZarazeniSledovaneVodniCesty)[keyof typeof ZarazeniSledovaneVodniCesty];
/** TridaDopravneVyznamneVodniCesty */
export declare const TridaDopravneVyznamneVodniCesty: {
    readonly MISTNIHO_VYZNAMU_TRIDY_0: 1;
    readonly MISTNIHO_VYZNAMU_TRIDY_I: 2;
    readonly MEZINARODNIHO_VYZNAMU_TRIDY_IV: 3;
    readonly MEZINARODNIHO_VYZNAMU_TRIDY_VA: 4;
    readonly MEZINARODNIHO_VYZNAMU_TRIDY_VB: 5;
};
export type TridaDopravneVyznamneVodniCestyValue = (typeof TridaDopravneVyznamneVodniCesty)[keyof typeof TridaDopravneVyznamneVodniCesty];
/** TypSledovaneVodniCesty */
export declare const TypSledovaneVodniCesty: {
    readonly VEDENA_REKOU: 1;
    readonly VEDENA_PLAVEBNIM_KANALEM: 2;
    readonly JINA_VODNI_PLOCHA: 98;
};
export type TypSledovaneVodniCestyValue = (typeof TypSledovaneVodniCesty)[keyof typeof TypSledovaneVodniCesty];
/** TypPristavu */
export declare const TypPristavu: {
    readonly VEREJNY: 1;
    readonly NEVEREJNY: 2;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypPristavuValue = (typeof TypPristavu)[keyof typeof TypPristavu];
/** TypPovrchuVzletovePristavaciDrahy */
export declare const TypPovrchuVzletovePristavaciDrahy: {
    readonly ASFALTOBETON: 1;
    readonly CEMENTOBETON: 2;
    readonly TRAVA: 3;
    readonly NEZJISTENO: 99;
};
export type TypPovrchuVzletovePristavaciDrahyValue = (typeof TypPovrchuVzletovePristavaciDrahy)[keyof typeof TypPovrchuVzletovePristavaciDrahy];
/** DruhLetiste */
export declare const DruhLetiste: {
    readonly VEREJNE_S_VNITROSTATNIM_PROVOZEM: 1;
    readonly VEREJNE_S_MEZINARODNIM_PROVOZEM: 2;
    readonly NEVEREJNE_S_VNITROSTATNIM_PROVOZEM: 3;
    readonly NEVEREJNE_S_MEZINARODNIM_PROVOZEM: 4;
    readonly VOJENSKE: 5;
    readonly NEZJISTENO: 99;
};
export type DruhLetisteValue = (typeof DruhLetiste)[keyof typeof DruhLetiste];
/** UmisteniHeliportu */
export declare const UmisteniHeliportu: {
    readonly UROVNOVY: 1;
    readonly MIMOUROVNOVY: 2;
    readonly NEZJISTENO: 99;
};
export type UmisteniHeliportuValue = (typeof UmisteniHeliportu)[keyof typeof UmisteniHeliportu];
/** TypLeteckeStavby */
export declare const TypLeteckeStavby: {
    readonly PODZEMNI: 1;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
};
export type TypLeteckeStavbyValue = (typeof TypLeteckeStavby)[keyof typeof TypLeteckeStavby];
/** TypZarizeniProLeteckyProvoz */
export declare const TypZarizeniProLeteckyProvoz: {
    readonly PREHLEDOVY_SYSTEM: 1;
    readonly RADIONAVIGACNI_ZARIZENI: 2;
    readonly RADIOKOMUNIKACNI_SYSTEM: 3;
    readonly SVETELNE_ZARIZENI: 4;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type TypZarizeniProLeteckyProvozValue = (typeof TypZarizeniProLeteckyProvoz)[keyof typeof TypZarizeniProLeteckyProvoz];
/** TypMostu */
export declare const TypMostu: {
    readonly SILNICNI: 1;
    readonly ZELEZNICNI: 2;
    readonly PRO_VODNI_DOPRAVU: 3;
    readonly LAVKA_PRO_PESI_A_CYKLISTY: 4;
    readonly PRECHOD_PRO_VOLNE_ZIJICI_ZIVOCICHY: 5;
    readonly SDRUZENY: 6;
    readonly NEZJISTENO: 99;
};
export type TypMostuValue = (typeof TypMostu)[keyof typeof TypMostu];
/** TypTunelu */
export declare const TypTunelu: {
    readonly ZELEZNICNI: 1;
    readonly SILNICNI: 2;
    readonly PRO_CYKLISTY_A_CHODCE: 3;
    readonly PRO_VODNI_DOPRAVU: 4;
    readonly SDRUZENY: 5;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypTuneluValue = (typeof TypTunelu)[keyof typeof TypTunelu];
/** TypNabijecihoVydejnihoMedia */
export declare const TypNabijecihoVydejnihoMedia: {
    readonly NABIJENI_ELEKTROMOBILNICH_ZARIZENI_VC_PLAVIDEL: 1;
    readonly CNG: 2;
    readonly LPG: 3;
    readonly LNG: 4;
    readonly BENZIN_NAFTA: 5;
    readonly VODIK: 6;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type TypNabijecihoVydejnihoMediaValue = (typeof TypNabijecihoVydejnihoMedia)[keyof typeof TypNabijecihoVydejnihoMedia];
/** TypSvodidla */
export declare const TypSvodidla: {
    readonly JEDNODUCHE: 1;
    readonly ZDVOJENE: 2;
    readonly NEZJISTENO: 99;
};
export type TypSvodidlaValue = (typeof TypSvodidla)[keyof typeof TypSvodidla];
/** TypNadrzeZdrzeSeVzdouvacimObjektem */
export declare const TypNadrzeZdrzeSeVzdouvacimObjektem: {
    readonly VODNI_NADRZ: 1;
    readonly VYROVNAVACI_NADRZ: 6;
    readonly JEZOVA_ZDRZ: 7;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
};
export type TypNadrzeZdrzeSeVzdouvacimObjektemValue = (typeof TypNadrzeZdrzeSeVzdouvacimObjektem)[keyof typeof TypNadrzeZdrzeSeVzdouvacimObjektem];
/** TypNadrzeBezVzdouvacihoObjektu */
export declare const TypNadrzeBezVzdouvacihoObjektu: {
    readonly RETENCNI: 1;
    readonly DESTOVA: 2;
    readonly USAZOVACI: 3;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
};
export type TypNadrzeBezVzdouvacihoObjektuValue = (typeof TypNadrzeBezVzdouvacihoObjektu)[keyof typeof TypNadrzeBezVzdouvacihoObjektu];
/** ZpusobPorizeniTI */
export declare const ZpusobPorizeniTI: {
    readonly GEODETICKY_TERESTRICKY: 1;
    readonly GEODETICKY_TERESTRICKY_PRED_ZAHOZEM: 2;
    readonly GEODETICKY_TERESTRICKY_PO_ZAHOZU: 3;
    readonly GEODETICKY_FOTOGRAMMETRICKY: 4;
    readonly GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 5;
    readonly PRIBLIZNYM_ZAKRESEM: 6;
    readonly VYHLEDANO: 7;
    readonly ODVOZENIM: 8;
    readonly NEZJISTENO: 99;
};
export type ZpusobPorizeniTIValue = (typeof ZpusobPorizeniTI)[keyof typeof ZpusobPorizeniTI];
/** DruhMelioracnichOpatreni */
export declare const DruhMelioracnichOpatreni: {
    readonly ODVODNENI: 1;
    readonly ZAVLAHA: 2;
    readonly OPATRENI_PROTI_VODNI_EROZI_PRIKOP: 3;
    readonly OPATRENI_PROTI_VODNI_EROZI_PRULEH: 4;
    readonly OPATRENI_PROTI_VETRNE_EROZI: 5;
    readonly REVITALIZACE_PUDY: 6;
    readonly VSAKOVACI_OBJEKT: 7;
    readonly NEZJISTENO_NEURCENO: 99;
};
export type DruhMelioracnichOpatreniValue = (typeof DruhMelioracnichOpatreni)[keyof typeof DruhMelioracnichOpatreni];
/** TypProtipovodnoveZabrany */
export declare const TypProtipovodnoveZabrany: {
    readonly HRAZ: 1;
    readonly ZED: 3;
    readonly STAVEBNI_ZAKLADY_MOBILNI_ZABRANY: 4;
    readonly JINA: 98;
};
export type TypProtipovodnoveZabranyValue = (typeof TypProtipovodnoveZabrany)[keyof typeof TypProtipovodnoveZabrany];
/** TypObjektuZarizeniOchranaPredPovodnemi */
export declare const TypObjektuZarizeniOchranaPredPovodnemi: {
    readonly HRADITKO_HRADIDLOVE_SACHTY: 1;
    readonly HRAZENI_UZAVER_VRATA: 2;
    readonly PATKA_PROTIPOVODNOVE_STENY: 3;
    readonly ODLEHCOVACI_KORYTO: 4;
    readonly JINY: 98;
};
export type TypObjektuZarizeniOchranaPredPovodnemiValue = (typeof TypObjektuZarizeniOchranaPredPovodnemi)[keyof typeof TypObjektuZarizeniOchranaPredPovodnemi];
/** TypObjektuOdvodneniStavby */
export declare const TypObjektuOdvodneniStavby: {
    readonly LINIOVY_ODVODNOVAC: 1;
    readonly VPUST_KANALIZACNI_SITE: 2;
    readonly ODTOKOVE_POTRUBI: 3;
    readonly VSAKOVACI_JIMKA: 4;
    readonly JINY: 98;
};
export type TypObjektuOdvodneniStavbyValue = (typeof TypObjektuOdvodneniStavby)[keyof typeof TypObjektuOdvodneniStavby];
/** StavObjektu */
export declare const StavObjektu: {
    readonly NEVEREJNY_UDAJ: 0;
    readonly PROVOZOVANO: 1;
    readonly NEPROVOZOVANO: 2;
    readonly NEZJISTENO: 99;
};
export type StavObjektuValue = (typeof StavObjektu)[keyof typeof StavObjektu];
/** TypTechnickehoKanalu */
export declare const TypTechnickehoKanalu: {
    readonly CHRANICKA: 4;
    readonly KABELOVOD: 5;
    readonly TECHNICKY_PODPOVRCHOVY_KANAL: 6;
    readonly KABELOVA_LAVKA_ZLAB: 7;
    readonly JINA_OCHRANNA_KONSTRUKCE: 98;
    readonly NEZJISTENO: 99;
};
export type TypTechnickehoKanaluValue = (typeof TypTechnickehoKanalu)[keyof typeof TypTechnickehoKanalu];
/** TypSdilenehoObjektuTI */
export declare const TypSdilenehoObjektuTI: {
    readonly SDRUZENA_ROZVODNA_SKRIN: 1;
    readonly SACHTA_VSTUPNI: 5;
    readonly SACHTA_KABELOVA: 6;
    readonly ODBOCKA: 7;
    readonly TECHNICKA_KOMORA: 8;
    readonly INSPEKCNI_KOMORA: 9;
    readonly KABELOVA_KOMORA: 10;
    readonly ARMATURNI_KOMORA: 11;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypSdilenehoObjektuTIValue = (typeof TypSdilenehoObjektuTI)[keyof typeof TypSdilenehoObjektuTI];
/** TypPodpernehoZarizeni */
export declare const TypPodpernehoZarizeni: {
    readonly STOZAR_PRIHRADOVY: 1;
    readonly SLOUP_TRAKCNIHO_VEDENI: 4;
    readonly NASTENNA_KONZOLA: 5;
    readonly STRESNIK: 6;
    readonly PORTAL: 7;
    readonly HAK: 8;
    readonly STOZAR_JINY: 9;
    readonly SLOUP_ELEKTRICKEHO_VEREJNEHO_OSVETLENI: 10;
    readonly SLOUP_PLYNOVEHO_VEREJNEHO_OSVETLENI: 11;
    readonly SLOUP_JINY: 12;
};
export type TypPodpernehoZarizeniValue = (typeof TypPodpernehoZarizeni)[keyof typeof TypPodpernehoZarizeni];
/** TypSloupu */
export declare const TypSloupu: {
    readonly BETONOVY: 1;
    readonly DREVENY: 2;
    readonly KOVOVY: 3;
    readonly NEZJISTENO: 99;
};
export type TypSloupuValue = (typeof TypSloupu)[keyof typeof TypSloupu];
/** StavTrasySiteTI */
export declare const StavTrasySiteTI: {
    readonly NEVEREJNY_UDAJ: 0;
    readonly PROVOZOVANO: 1;
    readonly NEPROVOZOVANO: 2;
    readonly ZRUSENO: 3;
    readonly NEZJISTENO: 99;
};
export type StavTrasySiteTIValue = (typeof StavTrasySiteTI)[keyof typeof StavTrasySiteTI];
/** VedeniSiteVJineStavbe */
export declare const VedeniSiteVJineStavbe: {
    readonly KOLEKTOR: 1;
    readonly TECHNICKY_KANAL: 2;
    readonly TEPLOVOD: 3;
    readonly KANALIZACE: 4;
    readonly TUNEL: 5;
    readonly MOST: 6;
    readonly PORTAL: 7;
    readonly JINA_STAVBA: 97;
    readonly NEVEDE_V_JINE_STAVBE: 98;
    readonly NEZJISTENO: 99;
};
export type VedeniSiteVJineStavbeValue = (typeof VedeniSiteVJineStavbe)[keyof typeof VedeniSiteVJineStavbe];
/** TypTrasyElektrickeSite */
export declare const TypTrasyElektrickeSite: {
    readonly SILOVE_VEDENI: 1;
    readonly ZEMNICI_LANO: 2;
    readonly ZEMNIC: 3;
    readonly NEZJISTENO: 99;
};
export type TypTrasyElektrickeSiteValue = (typeof TypTrasyElektrickeSite)[keyof typeof TypTrasyElektrickeSite];
/** MaximalniNapetovaHladina */
export declare const MaximalniNapetovaHladina: {
    readonly NN: 1;
    readonly VN: 2;
    readonly VVN: 3;
    readonly ZVN: 4;
    readonly NEZJISTENO_NEURCENO: 99;
};
export type MaximalniNapetovaHladinaValue = (typeof MaximalniNapetovaHladina)[keyof typeof MaximalniNapetovaHladina];
/** MaximalniProvozniNapeti */
export declare const MaximalniProvozniNapeti: {
    readonly VALUE_1: 1;
    readonly VALUE_2: 2;
    readonly VALUE_3: 3;
    readonly VALUE_4: 4;
    readonly VALUE_5: 5;
    readonly VALUE_6: 6;
    readonly VALUE_7: 7;
    readonly VALUE_8: 8;
    readonly VALUE_9: 9;
    readonly VALUE_10: 10;
    readonly VALUE_11: 11;
    readonly NEZJISTENO: 99;
};
export type MaximalniProvozniNapetiValue = (typeof MaximalniProvozniNapeti)[keyof typeof MaximalniProvozniNapeti];
/** IzolaceVenkovnihoVedeni */
export declare const IzolaceVenkovnihoVedeni: {
    readonly ZAKLADNI: 1;
    readonly BEZ_IZOLACE: 2;
    readonly NEZJISTENO: 99;
};
export type IzolaceVenkovnihoVedeniValue = (typeof IzolaceVenkovnihoVedeni)[keyof typeof IzolaceVenkovnihoVedeni];
/** TypTrasyMistniElektrickeSite */
export declare const TypTrasyMistniElektrickeSite: {
    readonly VEREJNE_OSVETLENI: 1;
    readonly SVETELNA_SIGNALIZACE: 2;
    readonly OSVETLOVACI_SIT_STAVEB: 4;
    readonly NEZJISTENO: 99;
};
export type TypTrasyMistniElektrickeSiteValue = (typeof TypTrasyMistniElektrickeSite)[keyof typeof TypTrasyMistniElektrickeSite];
/** TypZarizeniElektrickeSite */
export declare const TypZarizeniElektrickeSite: {
    readonly SKRIN_ELEKTRICKE_SITE: 1;
    readonly JINE: 98;
};
export type TypZarizeniElektrickeSiteValue = (typeof TypZarizeniElektrickeSite)[keyof typeof TypZarizeniElektrickeSite];
/** TypVyrobnyElektriny */
export declare const TypVyrobnyElektriny: {
    readonly GEOTERMALNI: 1;
    readonly JADERNA: 2;
    readonly VODNI: 3;
    readonly FOTOVOLTAICKA: 4;
    readonly TEPELNA: 5;
    readonly VETRNA: 6;
    readonly BIOPLYNOVA: 7;
    readonly NEZJISTENO: 99;
};
export type TypVyrobnyElektrinyValue = (typeof TypVyrobnyElektriny)[keyof typeof TypVyrobnyElektriny];
/** TypObjektuElektrickeSiteZameru */
export declare const TypObjektuElektrickeSiteZameru: {
    readonly GEOTERMALNI_ELEKTRARNA: 1;
    readonly JADERNA_ELEKTRARNA: 2;
    readonly VODNI_ELEKTRARNA: 3;
    readonly FOTOVOLTAICKA_ELEKTRARNA: 4;
    readonly TEPELNA_ELEKTRARNA: 5;
    readonly VETRNA_ELEKTRARNA: 6;
    readonly BIOPLYNOVA_ELEKTRARNA: 7;
    readonly STANICE_ELEKTRICKE_SITE: 8;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuElektrickeSiteZameruValue = (typeof TypObjektuElektrickeSiteZameru)[keyof typeof TypObjektuElektrickeSiteZameru];
/** TypStaniceElektrickeSite */
export declare const TypStaniceElektrickeSite: {
    readonly TRANSFORMACNI_STANICE: 1;
    readonly STANICE_DISTRIBUCNI_SOUSTAVY: 2;
    readonly SPINACI_STANICE: 3;
    readonly MENIRNA: 4;
    readonly STANICE_PRENOSOVE_SOUSTAVY: 5;
    readonly JINA: 98;
};
export type TypStaniceElektrickeSiteValue = (typeof TypStaniceElektrickeSite)[keyof typeof TypStaniceElektrickeSite];
/** DruhStaniceElektrickeSite */
export declare const DruhStaniceElektrickeSite: {
    readonly KOMPAKTNI_A_ZDENA: 1;
    readonly STOZAROVA: 2;
    readonly VEZOVA: 3;
    readonly VENKOVNI: 4;
    readonly VESTAVENA: 5;
    readonly NEZJISTENO: 99;
};
export type DruhStaniceElektrickeSiteValue = (typeof DruhStaniceElektrickeSite)[keyof typeof DruhStaniceElektrickeSite];
/** TypJadernehoZarizeni */
export declare const TypJadernehoZarizeni: {
    readonly REAKTOR: 1;
    readonly SKLAD: 2;
    readonly ULOZISTE: 3;
    readonly JINE: 98;
};
export type TypJadernehoZarizeniValue = (typeof TypJadernehoZarizeni)[keyof typeof TypJadernehoZarizeni];
/** MaterialTrasySiteEK */
export declare const MaterialTrasySiteEK: {
    readonly NEVEREJNY_UDAJ: 0;
    readonly METALICKA: 1;
    readonly OPTICKA: 2;
    readonly METALICKA_OPTICKA: 3;
    readonly NEZJISTENO: 99;
};
export type MaterialTrasySiteEKValue = (typeof MaterialTrasySiteEK)[keyof typeof MaterialTrasySiteEK];
/** ZpusobOchranyVedeniSiteEK */
export declare const ZpusobOchranyVedeniSiteEK: {
    readonly BEZ_OCHRANY_VEDENI: 1;
    readonly PLASTOVA_TRUBKA: 2;
    readonly SVAZEK_MIKROTRUBICEK: 3;
    readonly NEZJISTENO: 99;
};
export type ZpusobOchranyVedeniSiteEKValue = (typeof ZpusobOchranyVedeniSiteEK)[keyof typeof ZpusobOchranyVedeniSiteEK];
/** TypZarizeniSiteEK */
export declare const TypZarizeniSiteEK: {
    readonly VENKOVNI_ROZVADEC_EK: 2;
    readonly BOD_PRO_PRISTUP_NEBO_PROPOJENI_SITI_EK_UVNITR_BUDOV: 3;
};
export type TypZarizeniSiteEKValue = (typeof TypZarizeniSiteEK)[keyof typeof TypZarizeniSiteEK];
/** UmisteniObjektu */
export declare const UmisteniObjektu: {
    readonly SAMOSTATNE_STOJICI: 1;
    readonly NA_OBJEKTU: 2;
    readonly NEZJISTENO: 99;
};
export type UmisteniObjektuValue = (typeof UmisteniObjektu)[keyof typeof UmisteniObjektu];
/** TypTechnologickehoObjektuSiteEK */
export declare const TypTechnologickehoObjektuSiteEK: {
    readonly RADIOTELESKOP: 1;
    readonly TECHNOLOGICKA_BUDOVA_EK: 2;
    readonly TELEKOMUNIKACNI_VEZ: 3;
    readonly TECHNOLOGICKY_KONTEJNER_SITE_EK: 4;
};
export type TypTechnologickehoObjektuSiteEKValue = (typeof TypTechnologickehoObjektuSiteEK)[keyof typeof TypTechnologickehoObjektuSiteEK];
/** TlakovaHladinaPlynovodniSite */
export declare const TlakovaHladinaPlynovodniSite: {
    readonly NTL: 1;
    readonly STL: 2;
    readonly VTL: 3;
    readonly VVTL: 4;
    readonly NEZJISTENO_NEURCENO: 99;
};
export type TlakovaHladinaPlynovodniSiteValue = (typeof TlakovaHladinaPlynovodniSite)[keyof typeof TlakovaHladinaPlynovodniSite];
/** TypZarizeniPlynovodniSite */
export declare const TypZarizeniPlynovodniSite: {
    readonly NEVEREJNY_UDAJ: 0;
    readonly SOUPE: 1;
    readonly SKRIN: 2;
    readonly SACHTA: 4;
    readonly JINE: 98;
};
export type TypZarizeniPlynovodniSiteValue = (typeof TypZarizeniPlynovodniSite)[keyof typeof TypZarizeniPlynovodniSite];
/** TypTechnologickehoObjektuPlynovodniSite */
export declare const TypTechnologickehoObjektuPlynovodniSite: {
    readonly KOMPRESNI_STANICE: 1;
    readonly REGULACNI_STANICE: 2;
    readonly DISTRIBUCNI_REGULATOR: 3;
    readonly ODORIZACNI_STANICE: 4;
    readonly VYROBNA_PLYNU: 5;
    readonly STANICE_KATODOVE_OCHRANY: 6;
    readonly PODZEMNI_ZASOBNIK_PLYNU: 7;
    readonly PLNIRNA_PLYNU: 8;
    readonly ARMATURNI_UZEL: 10;
    readonly NADZEMNI_ZASOBNIK_PLYNU: 11;
    readonly POMOCNE_ROZVODY: 12;
    readonly SONDA: 13;
    readonly JINY: 98;
};
export type TypTechnologickehoObjektuPlynovodniSiteValue = (typeof TypTechnologickehoObjektuPlynovodniSite)[keyof typeof TypTechnologickehoObjektuPlynovodniSite];
/** TypObjektuPlynovodniSiteZameru */
export declare const TypObjektuPlynovodniSiteZameru: {
    readonly VYROBNA_PLYNU: 1;
    readonly STANICE: 2;
    readonly ZASOBNIK_PLYNU: 3;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuPlynovodniSiteZameruValue = (typeof TypObjektuPlynovodniSiteZameru)[keyof typeof TypObjektuPlynovodniSiteZameru];
/** TypPodzemnihoZasobnikuPlynu */
export declare const TypPodzemnihoZasobnikuPlynu: {
    readonly SONDA: 1;
    readonly SBERNE_STREDISKO: 2;
    readonly CENTRALNI_AREAL: 3;
};
export type TypPodzemnihoZasobnikuPlynuValue = (typeof TypPodzemnihoZasobnikuPlynu)[keyof typeof TypPodzemnihoZasobnikuPlynu];
/** TypTrasyVodovodniSite */
export declare const TypTrasyVodovodniSite: {
    readonly PRIVADECI_RAD: 1;
    readonly ROZVODNA_VODOVODNI_SIT: 2;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
};
export type TypTrasyVodovodniSiteValue = (typeof TypTrasyVodovodniSite)[keyof typeof TypTrasyVodovodniSite];
/** TypMediaVodovodniSite */
export declare const TypMediaVodovodniSite: {
    readonly VODA_PITNA: 1;
    readonly VODA_SUROVA: 2;
    readonly VODA_UZITKOVA: 3;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type TypMediaVodovodniSiteValue = (typeof TypMediaVodovodniSite)[keyof typeof TypMediaVodovodniSite];
/** TypZarizeniVodovodniPripojky */
export declare const TypZarizeniVodovodniPripojky: {
    readonly SACHTA_MERNA_A_KONTROLNI: 2;
    readonly JINE: 98;
};
export type TypZarizeniVodovodniPripojkyValue = (typeof TypZarizeniVodovodniPripojky)[keyof typeof TypZarizeniVodovodniPripojky];
/** TypObjektuVodovodniSite */
export declare const TypObjektuVodovodniSite: {
    readonly VODOJEM_VEZOVY: 1;
    readonly VODOJEM_ZEMNI: 2;
    readonly UPRAVNA_VODY: 3;
    readonly CERPACI_STANICE: 4;
    readonly SACHTA_VODOVODNI_SITE: 5;
    readonly PITKO: 6;
    readonly JINY: 98;
};
export type TypObjektuVodovodniSiteValue = (typeof TypObjektuVodovodniSite)[keyof typeof TypObjektuVodovodniSite];
/** TypObjektuVodovodniSiteZameru */
export declare const TypObjektuVodovodniSiteZameru: {
    readonly ZDROJ_VODY: 1;
    readonly VODOJEM: 2;
    readonly UPRAVNA_VODY: 3;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuVodovodniSiteZameruValue = (typeof TypObjektuVodovodniSiteZameru)[keyof typeof TypObjektuVodovodniSiteZameru];
/** TypPrivadece */
export declare const TypPrivadece: {
    readonly ODKRYTY: 1;
    readonly TRUBNI: 2;
    readonly STOLA: 3;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypPrivadeceValue = (typeof TypPrivadece)[keyof typeof TypPrivadece];
/** TypZarizeniPrivadece */
export declare const TypZarizeniPrivadece: {
    readonly SACHTA: 1;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type TypZarizeniPrivadeceValue = (typeof TypZarizeniPrivadece)[keyof typeof TypZarizeniPrivadece];
/** TypTrasyStokoveSite */
export declare const TypTrasyStokoveSite: {
    readonly STOKOVA_SIT: 1;
    readonly PRIVADECI_STOKA: 4;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
};
export type TypTrasyStokoveSiteValue = (typeof TypTrasyStokoveSite)[keyof typeof TypTrasyStokoveSite];
/** UceloveZarazeniStokoveSite */
export declare const UceloveZarazeniStokoveSite: {
    readonly JEDNOTNA: 1;
    readonly SRAZKOVA: 2;
    readonly SPLASKOVA: 3;
    readonly PRUMYSLOVA: 6;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type UceloveZarazeniStokoveSiteValue = (typeof UceloveZarazeniStokoveSite)[keyof typeof UceloveZarazeniStokoveSite];
/** DruhStokoveSite */
export declare const DruhStokoveSite: {
    readonly GRAVITACNI: 1;
    readonly TLAKOVA: 2;
    readonly PODTLAKOVA: 3;
    readonly NEZJISTENO: 99;
};
export type DruhStokoveSiteValue = (typeof DruhStokoveSite)[keyof typeof DruhStokoveSite];
/** TypZarizeniKanalizacniPripojky */
export declare const TypZarizeniKanalizacniPripojky: {
    readonly REVIZNI_SACHTA: 1;
    readonly MERNA_SACHTA: 2;
    readonly DOMOVNI_CERPACI_STANICE: 3;
    readonly VSAKOVACI_ZARIZENI_S_PREPADEM: 4;
    readonly JINE: 98;
};
export type TypZarizeniKanalizacniPripojkyValue = (typeof TypZarizeniKanalizacniPripojky)[keyof typeof TypZarizeniKanalizacniPripojky];
/** TypObjektuStokoveSite */
export declare const TypObjektuStokoveSite: {
    readonly CISTIRNA_ODPADNICH_VOD: 1;
    readonly CERPACI_STANICE: 2;
    readonly KOMORA_ODLEHCOVACI: 3;
    readonly KOMORA_JINA: 4;
    readonly KANALIZACNI_VYUST: 5;
    readonly RETENCNI_NADRZ_NA_STOKOVE_SITI: 6;
    readonly PODTLAKOVA_STANICE: 7;
    readonly SACHTA_KANALIZACNI: 8;
    readonly ODLUCOVAC_LEHKYCH_KAPALIN: 9;
    readonly JINY: 98;
};
export type TypObjektuStokoveSiteValue = (typeof TypObjektuStokoveSite)[keyof typeof TypObjektuStokoveSite];
/** TypObjektuStokoveSiteZameru */
export declare const TypObjektuStokoveSiteZameru: {
    readonly CISTIRNA_ODPADNICH_VOD: 1;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuStokoveSiteZameruValue = (typeof TypObjektuStokoveSiteZameru)[keyof typeof TypObjektuStokoveSiteZameru];
/** TypZarizeniSiteProduktovodu */
export declare const TypZarizeniSiteProduktovodu: {
    readonly SACHTA: 1;
    readonly NEZJISTENO: 99;
};
export type TypZarizeniSiteProduktovoduValue = (typeof TypZarizeniSiteProduktovodu)[keyof typeof TypZarizeniSiteProduktovodu];
/** TypTrasyTeplovodniSite */
export declare const TypTrasyTeplovodniSite: {
    readonly PRIMARNI: 1;
    readonly SEKUNDARNI: 2;
    readonly NEZJISTENO: 99;
};
export type TypTrasyTeplovodniSiteValue = (typeof TypTrasyTeplovodniSite)[keyof typeof TypTrasyTeplovodniSite];
/** TypTeplovodniSite */
export declare const TypTeplovodniSite: {
    readonly TEPLOVOD: 1;
    readonly HORKOVOD: 2;
    readonly PAROVOD: 3;
    readonly NEZJISTENO: 99;
};
export type TypTeplovodniSiteValue = (typeof TypTeplovodniSite)[keyof typeof TypTeplovodniSite];
/** TypZarizeniTeplovodniSite */
export declare const TypZarizeniTeplovodniSite: {
    readonly ODVETRAVANI_TEPLOVODU: 1;
    readonly SACHTA: 2;
    readonly JINE: 98;
};
export type TypZarizeniTeplovodniSiteValue = (typeof TypZarizeniTeplovodniSite)[keyof typeof TypZarizeniTeplovodniSite];
/** TypTechnologickehoObjektuTeplovodniSite */
export declare const TypTechnologickehoObjektuTeplovodniSite: {
    readonly TEPLARNA: 1;
    readonly KOTELNA: 2;
    readonly JINY: 98;
    readonly NEZJISTENO_NEURCENO: 99;
};
export type TypTechnologickehoObjektuTeplovodniSiteValue = (typeof TypTechnologickehoObjektuTeplovodniSite)[keyof typeof TypTechnologickehoObjektuTeplovodniSite];
/** TypZarizeniPotrubniPosty */
export declare const TypZarizeniPotrubniPosty: {
    readonly SOUPE: 1;
    readonly JINE: 98;
};
export type TypZarizeniPotrubniPostyValue = (typeof TypZarizeniPotrubniPosty)[keyof typeof TypZarizeniPotrubniPosty];
/** TypPovrchovehoZnakuTI */
export declare const TypPovrchovehoZnakuTI: {
    readonly SACHTA_VSTUPNI: 1;
    readonly SACHTA_KABELOVODNI: 2;
    readonly ZARIZENI_ELEKTRICKE_SITE: 3;
    readonly ZARIZENI_SITE_EK: 4;
    readonly ZARIZENI_PLYNOVODNI_SITE: 5;
    readonly OBJEKT_VODOVODNI_SITE: 6;
    readonly OBJEKT_STOKOVE_SITE: 7;
    readonly ZARIZENI_SITE_PRODUKTOVODU: 8;
    readonly ZARIZENI_TEPLOVODNI_SITE: 9;
    readonly JINY: 98;
};
export type TypPovrchovehoZnakuTIValue = (typeof TypPovrchovehoZnakuTI)[keyof typeof TypPovrchovehoZnakuTI];
/** TypInzenyrskeSite */
export declare const TypInzenyrskeSite: {
    readonly ELEKTRICKE_VEDENI: 1;
    readonly ELEKTRONICKA_KOMUNIKACE: 2;
    readonly PLYNOVOD: 3;
    readonly VODOVOD: 4;
    readonly KANALIZACE: 5;
    readonly PRODUKTOVOD: 6;
    readonly TEPLOVOD: 7;
    readonly NEZJISTENO: 99;
};
export type TypInzenyrskeSiteValue = (typeof TypInzenyrskeSite)[keyof typeof TypInzenyrskeSite];
/** TypPKO */
export declare const TypPKO: {
    readonly KATODICKA: 1;
    readonly ELEKTROPOLARIZOVANA_DRENAZ: 2;
    readonly ANODA: 3;
    readonly PROPOJOVACI_KABELAZ: 4;
    readonly NEZJISTENO: 99;
};
export type TypPKOValue = (typeof TypPKO)[keyof typeof TypPKO];
/** TypInzenyrskeSitePKO */
export declare const TypInzenyrskeSitePKO: {
    readonly PLYNOVOD: 1;
    readonly VODOVOD: 2;
    readonly KANALIZACE: 3;
    readonly PRODUKTOVOD: 4;
    readonly TEPLOVOD: 5;
    readonly SIT_ELEKTRONICKYCH_KOMUNIKACI: 6;
    readonly SDILENA: 7;
    readonly NEZJISTENO: 99;
};
export type TypInzenyrskeSitePKOValue = (typeof TypInzenyrskeSitePKO)[keyof typeof TypInzenyrskeSitePKO];
/** TypJinehoZarizeniStavebTI */
export declare const TypJinehoZarizeniStavebTI: {
    readonly HLASIC_IZS: 1;
    readonly REPRODUKTOR: 2;
    readonly VENKOVNI_HODINY: 3;
    readonly NEZJISTENO: 99;
};
export type TypJinehoZarizeniStavebTIValue = (typeof TypJinehoZarizeniStavebTI)[keyof typeof TypJinehoZarizeniStavebTI];
/** StavSkladkyOdpadu */
export declare const StavSkladkyOdpadu: {
    readonly V_PROVOZU: 1;
    readonly UZAVRENO: 2;
    readonly NEZJISTENO: 99;
};
export type StavSkladkyOdpaduValue = (typeof StavSkladkyOdpadu)[keyof typeof StavSkladkyOdpadu];
/** TypOdpadu */
export declare const TypOdpadu: {
    readonly OSTATNI_ODPAD: 1;
    readonly NEBEZPECNY_ODPAD: 2;
    readonly NEZJISTENO: 99;
};
export type TypOdpaduValue = (typeof TypOdpadu)[keyof typeof TypOdpadu];
/** TypZarizeniOdstranovaniOdpadu */
export declare const TypZarizeniOdstranovaniOdpadu: {
    readonly ZARIZENI_NA_ODSTRANOVANI_BRO: 1;
    readonly ZARIZENI_NA_ODSTRANOVANI_NEBEZPECNEHO_ODPADU: 2;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type TypZarizeniOdstranovaniOdpaduValue = (typeof TypZarizeniOdstranovaniOdpadu)[keyof typeof TypZarizeniOdstranovaniOdpadu];
/** PovoleniNakladaniNebezpecnymOdpadem */
export declare const PovoleniNakladaniNebezpecnymOdpadem: {
    readonly POVOLENO: 1;
    readonly BEZ_POVOLENI: 2;
    readonly NEZJISTENO: 99;
};
export type PovoleniNakladaniNebezpecnymOdpademValue = (typeof PovoleniNakladaniNebezpecnymOdpadem)[keyof typeof PovoleniNakladaniNebezpecnymOdpadem];
/** TypDrobneSakralniStavby */
export declare const TypDrobneSakralniStavby: {
    readonly KRIZ: 1;
    readonly BOZI_MUKA: 2;
    readonly KAPLICKA: 3;
    readonly NEZJISTENO: 99;
};
export type TypDrobneSakralniStavbyValue = (typeof TypDrobneSakralniStavby)[keyof typeof TypDrobneSakralniStavby];
/** TypDrobneKulturniStavby */
export declare const TypDrobneKulturniStavby: {
    readonly KASNA: 1;
    readonly VODOTRYSK_FONTANA: 2;
    readonly POMNIK: 3;
    readonly SOCHA: 4;
    readonly MOHYLA: 5;
    readonly ZVONICE: 6;
    readonly NEZJISTENO: 99;
};
export type TypDrobneKulturniStavbyValue = (typeof TypDrobneKulturniStavby)[keyof typeof TypDrobneKulturniStavby];
/** DruhPlotu */
export declare const DruhPlotu: {
    readonly DREVENY: 1;
    readonly DRATENY: 2;
    readonly KOVOVY: 3;
    readonly ZDENY: 4;
    readonly ZIVY: 5;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type DruhPlotuValue = (typeof DruhPlotu)[keyof typeof DruhPlotu];
/** DruhSchodiste */
export declare const DruhSchodiste: {
    readonly VICESTUPNOVE: 1;
    readonly PLATFORMA_S_JEDNIM_STUPNEM: 2;
    readonly NEZJISTENO: 99;
};
export type DruhSchodisteValue = (typeof DruhSchodiste)[keyof typeof DruhSchodiste];
/** TypVrtu */
export declare const TypVrtu: {
    readonly GEOTERMALNI: 1;
    readonly NEZJISTENO: 99;
};
export type TypVrtuValue = (typeof TypVrtu)[keyof typeof TypVrtu];
/** TypNosiceTechnickehoZarizeni */
export declare const TypNosiceTechnickehoZarizeni: {
    readonly INFORMACNI_TABULE: 1;
    readonly BILLBOARD: 2;
    readonly NOSIC_KAMEROVEHO_SYSTEMU: 3;
    readonly REKLAMNI_SLOUP: 4;
    readonly VLAJKOVY_STOZAR: 5;
    readonly SDRUZENY: 6;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypNosiceTechnickehoZarizeniValue = (typeof TypNosiceTechnickehoZarizeni)[keyof typeof TypNosiceTechnickehoZarizeni];
/** TypZemedelskePlochy */
export declare const TypZemedelskePlochy: {
    readonly ORNA_PUDA: 1;
    readonly VINICE: 2;
    readonly CHMELNICE: 3;
    readonly OVOCNY_SAD: 4;
    readonly TRVALY_TRAVNI_POROST: 5;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
};
export type TypZemedelskePlochyValue = (typeof TypZemedelskePlochy)[keyof typeof TypZemedelskePlochy];
/** TypUdrzovaneZelene */
export declare const TypUdrzovaneZelene: {
    readonly MESTSKA_PARKOVA_ZELEN: 1;
    readonly UDRZOVANA_TRAVNATA_A_OKRASNA_PLOCHA: 2;
    readonly SKUPINA_STROMU_A_KERU: 3;
    readonly SILNICNI_VEGETACE: 4;
    readonly NEZJISTENO: 99;
};
export type TypUdrzovaneZeleneValue = (typeof TypUdrzovaneZelene)[keyof typeof TypUdrzovaneZelene];
/** TypTerenniHrany */
export declare const TypTerenniHrany: {
    readonly HRANA: 1;
    readonly PATA: 2;
    readonly NEZJISTENO: 99;
};
export type TypTerenniHranyValue = (typeof TypTerenniHrany)[keyof typeof TypTerenniHrany];
/** TridaPresnostiPoloha */
export declare const TridaPresnostiPoloha: {
    readonly TRIDA_PRESNOSTI_1: 1;
    readonly TRIDA_PRESNOSTI_2: 2;
    readonly TRIDA_PRESNOSTI_3: 3;
    readonly TRIDA_PRESNOSTI_4: 4;
    readonly TRIDA_PRESNOSTI_5: 5;
    readonly PRESNOST_NEVYHOVUJE_ANI_TRIDE_PRESNOSTI_5_NEBO_NENI_ZNAMA: 9;
};
export type TridaPresnostiPolohaValue = (typeof TridaPresnostiPoloha)[keyof typeof TridaPresnostiPoloha];
/** TridaPresnostiVyska */
export declare const TridaPresnostiVyska: {
    readonly TRIDA_PRESNOSTI_1: 1;
    readonly TRIDA_PRESNOSTI_2: 2;
    readonly TRIDA_PRESNOSTI_3: 3;
    readonly TRIDA_PRESNOSTI_4: 4;
    readonly TRIDA_PRESNOSTI_5: 5;
    readonly PRESNOST_NEVYHOVUJE_ANI_TRIDE_PRESNOSTI_5_NEBO_NENI_ZNAMA: 9;
};
export type TridaPresnostiVyskaValue = (typeof TridaPresnostiVyska)[keyof typeof TridaPresnostiVyska];
/** TypOPSiteProduktovodu */
export declare const TypOPSiteProduktovodu: {
    readonly OP_PRODUKTOVODU: 1;
    readonly OP_ROPOVODU: 2;
    readonly NEZJISTENO: 99;
};
export type TypOPSiteProduktovoduValue = (typeof TypOPSiteProduktovodu)[keyof typeof TypOPSiteProduktovodu];
/** TypOPSiteEK */
export declare const TypOPSiteEK: {
    readonly OP_RADIOVEHO_ZARIZENI_A_RADIOVEHO_SMEROVEHO_SPOJE: 1;
    readonly OP_KOMUNIKACNIHO_VEDENI: 2;
    readonly NEZJISTENO: 99;
};
export type TypOPSiteEKValue = (typeof TypOPSiteEK)[keyof typeof TypOPSiteEK];
/** TypOPZarizeniOdpadovehoHospodarstvi */
export declare const TypOPZarizeniOdpadovehoHospodarstvi: {
    readonly OP_SKLADKY: 1;
    readonly OP_SPALOVNY: 2;
    readonly OP_ZARIZENI_BRO: 3;
    readonly OP_ZARIZENI_NA_ODSTRANOVANI_NO: 4;
};
export type TypOPZarizeniOdpadovehoHospodarstviValue = (typeof TypOPZarizeniOdpadovehoHospodarstvi)[keyof typeof TypOPZarizeniOdpadovehoHospodarstvi];
/** TypObjektuOdpadovehoHospodarstviZameru */
export declare const TypObjektuOdpadovehoHospodarstviZameru: {
    readonly SKLADKA_ODPADU: 1;
    readonly SPALOVNA: 2;
    readonly JINE_ZARIZENI_NA_ODSTRANOVANI_VYUZIVANI_NEBO_SBER_ODPADU: 3;
    readonly ODKALISTE: 4;
};
export type TypObjektuOdpadovehoHospodarstviZameruValue = (typeof TypObjektuOdpadovehoHospodarstviZameru)[keyof typeof TypObjektuOdpadovehoHospodarstviZameru];
/** TypOPPozemniKomunikace */
export declare const TypOPPozemniKomunikace: {
    readonly OP_DALNICE: 1;
    readonly OP_SILNICE_I_TRIDY: 3;
    readonly OP_SILNICE_II_TRIDY: 4;
    readonly OP_SILNICE_III_TRIDY: 5;
    readonly OP_MISTNI_KOMUNIKACE_I_TRIDY: 6;
    readonly OP_MISTNI_KOMUNIKACE_II_TRIDY: 7;
};
export type TypOPPozemniKomunikaceValue = (typeof TypOPPozemniKomunikace)[keyof typeof TypOPPozemniKomunikace];
/** TypOPDrazniStavby */
export declare const TypOPDrazniStavby: {
    readonly OP_ZELEZNICNI_TRATE: 1;
    readonly OP_TRAMVAJOVE_DRAHY: 2;
    readonly OP_POZEMNI_LANOVE_DRAHY: 3;
    readonly OP_SPECIALNI_DRAHY: 4;
    readonly OP_VISUTE_LANOVE_DRAHY: 5;
    readonly OP_TROLEJBUSOVE_DRAHY: 6;
};
export type TypOPDrazniStavbyValue = (typeof TypOPDrazniStavby)[keyof typeof TypOPDrazniStavby];
/** TypOPLetiste */
export declare const TypOPLetiste: {
    readonly OP_SE_ZAKAZEM_STAVEB: 1;
    readonly OP_S_VYSKOVYM_OMEZENIM_STAVEB: 2;
    readonly OP_PROTI_NEBEZPECNYM_A_KLAMAVYM_SVETLUM: 3;
    readonly OP_SE_ZAKAZEM_LASEROVYCH_ZARIZENI: 4;
    readonly OP_S_OMEZENIM_STAVEB_VZDUSNYCH_VEDENI_VN_A_VVN: 5;
    readonly OP_HLUKOVE: 6;
    readonly OP_ORNITOLOGICKE: 7;
};
export type TypOPLetisteValue = (typeof TypOPLetiste)[keyof typeof TypOPLetiste];
/** TypOPLeteckychZabezpecovacichZarizeni */
export declare const TypOPLeteckychZabezpecovacichZarizeni: {
    readonly OP_PREHLEDOVEHO_SYSTEMU: 1;
    readonly OP_RADIONAVIGACNIHO_ZARIZENI: 2;
    readonly OP_RADIOKOMUNIKACNIHO_SYSTEMU: 3;
    readonly OP_SVETELNEHO_ZARIZENI: 4;
    readonly OP_PODZEMNI_LETECKE_STAVBY: 5;
};
export type TypOPLeteckychZabezpecovacichZarizeniValue = (typeof TypOPLeteckychZabezpecovacichZarizeni)[keyof typeof TypOPLeteckychZabezpecovacichZarizeni];
/** TypStavby */
export declare const TypStavby: {
    readonly PODEZDIVKA: 1;
    readonly RAMPA: 2;
    readonly TERASA: 3;
    readonly KOMIN: 4;
    readonly SKLENIK: 5;
    readonly ZAHRADNI_BAZEN: 6;
    readonly PATKA_DESKA_MONOLIT_PILIR: 7;
    readonly STAVBA_PRO_ZPEVNENI_POVRCHU: 8;
    readonly CELO_PROPUSTKU: 9;
    readonly DROBNA_SAKRALNI_STAVBA: 10;
    readonly DROBNA_KULTURNI_STAVBA: 11;
    readonly OSTATNI_ZASTRESENA_STAVBA: 12;
    readonly ZASTRESENI: 13;
    readonly NEZJISTENO: 99;
};
export type TypStavbyValue = (typeof TypStavby)[keyof typeof TypStavby];
/** TypZdi */
export declare const TypZdi: {
    readonly VOLNE_STOJICI: 1;
    readonly OPERNA: 2;
    readonly ZARUBNI: 3;
    readonly MESTSKE_HRADBY: 4;
    readonly NEZJISTENO: 99;
};
export type TypZdiValue = (typeof TypZdi)[keyof typeof TypZdi];
/** TypDopravniStavbyNeboPlochy */
export declare const TypDopravniStavbyNeboPlochy: {
    readonly POZEMNI_KOMUNIKACE: 1;
    readonly CHODNIK: 2;
    readonly CYKLOSTEZKA: 3;
    readonly PARKOVISTE_ODSTAVNA_PLOCHA: 4;
    readonly DOPRAVNI_OSTRUVEK: 5;
    readonly DELICI_PAS: 6;
    readonly NAJEZD: 7;
    readonly PRIDRUZENA_PLOCHA_POZEMNI_KOMUNIKACE: 8;
    readonly TRAMVAJOVA_DRAHA: 9;
    readonly POZEMNI_LANOVA_DRAHA: 10;
    readonly SPECIALNI_DRAHA: 11;
    readonly MANIPULACNI_PLOCHA: 12;
    readonly MOSTNI_VAHA: 13;
    readonly PRIKOP_NASYP_ZAREZ_DOPRAVNI_STAVBY: 14;
    readonly NASTUPISTE: 15;
    readonly PLOCHA_MOSTNI_KONSTRUKCE: 16;
    readonly PORTAL_TUNELU: 17;
    readonly PROVOZNI_PLOCHA_TUNELU: 18;
    readonly PORTAL_PODCHODU: 19;
    readonly PROVOZNI_PLOCHA_PODCHODU: 20;
    readonly SOUHRNNA_PLOCHA_ZELEZNICNICH_DRAH: 21;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypDopravniStavbyNeboPlochyValue = (typeof TypDopravniStavbyNeboPlochy)[keyof typeof TypDopravniStavbyNeboPlochy];
/** TypPrirodnihoPoloprirodnihoObjektu */
export declare const TypPrirodnihoPoloprirodnihoObjektu: {
    readonly VODNI_TOK: 1;
    readonly JEZERO: 2;
    readonly VODNI_PLOCHA_NEURCENA: 3;
    readonly ZEMEDELSKA_PLOCHA: 4;
    readonly ZAHRADA: 5;
    readonly LES: 6;
    readonly HOSPODARSKY_NEVYUZIVANA_PLOCHA: 7;
    readonly NEZJISTENO: 99;
};
export type TypPrirodnihoPoloprirodnihoObjektuValue = (typeof TypPrirodnihoPoloprirodnihoObjektu)[keyof typeof TypPrirodnihoPoloprirodnihoObjektu];
/** TypVodnihoDila */
export declare const TypVodnihoDila: {
    readonly STUPEN: 9;
    readonly STAVEBNE_UPRAVENE_KORYTO: 10;
    readonly MELIORACNI_PRIKOP_ZLAB: 11;
    readonly SUCHA_NADRZ: 17;
    readonly NADRZ_ZDRZ_SE_VZDOUVACIM_OBJEKTEM: 18;
    readonly NADRZ_BEZ_VZDOUVACIHO_OBJEKTU: 19;
    readonly HRAZ: 20;
    readonly JEZ: 21;
    readonly STERKOVA_PREHRAZKA: 22;
    readonly PROTIPOVODNOVA_ZABRANA: 23;
    readonly NEZJISTENO: 99;
};
export type TypVodnihoDilaValue = (typeof TypVodnihoDila)[keyof typeof TypVodnihoDila];
/** TypOstatniPlochy */
export declare const TypOstatniPlochy: {
    readonly DUL_LOM: 1;
    readonly PLOCHA_REKULTIVACE: 2;
    readonly ULOZNE_MISTO_TEZEBNIHO_ODPADU: 3;
    readonly JINE_DULNI_DILO_DULNI_STAVBA: 4;
    readonly HRISTE: 5;
    readonly HRBITOV: 6;
    readonly DVUR_NADVORI: 7;
    readonly VEGETACNI_MISA: 8;
    readonly NEZJISTENO: 99;
};
export type TypOstatniPlochyValue = (typeof TypOstatniPlochy)[keyof typeof TypOstatniPlochy];
/** TypUzlu */
export declare const TypUzlu: {
    readonly KRIZOVATKA: 1;
    readonly ODPOCIVKA: 2;
    readonly HRANICNI_PRECHOD_CR: 3;
    readonly HRANICE_PRIVOZU: 4;
    readonly HRANICE_NEVYBUDOVANEHO_USEKU: 5;
    readonly HRANICE_VOJENSKEHO_PROSTORU: 6;
    readonly KONEC_USEKU: 7;
};
export type TypUzluValue = (typeof TypUzlu)[keyof typeof TypUzlu];
//# sourceMappingURL=enums.d.ts.map