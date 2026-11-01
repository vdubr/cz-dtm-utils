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
/** UrovenUmisteniObjektuPSPI */
export declare const UrovenUmisteniObjektuPSPI: {
    readonly POD_POVRCHEM: -1;
    readonly NA_POVRCHU: 0;
    readonly NAD_POVRCHEM: 1;
};
export type UrovenUmisteniObjektuPSPIValue = (typeof UrovenUmisteniObjektuPSPI)[keyof typeof UrovenUmisteniObjektuPSPI];
/** PrevazujiciPovrch */
export declare const PrevazujiciPovrch: {
    readonly ASFALT: 1;
    readonly BETON: 2;
    readonly DLAZBA: 3;
    readonly R_MATERIAL: 4;
    readonly PISEK_STERKOPISEK: 5;
    readonly SOTOLINA: 6;
    readonly NEZPEVNENO: 7;
    readonly ZPEVNENY_PROPUSTNY: 8;
    readonly NEZJISTENO: 99;
    readonly ZPEVNENO_NEURCENA: 101106;
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
    readonly NEZJISTENO: 99;
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
/** TypObjektuSilnicniDopravyPS */
export declare const TypObjektuSilnicniDopravyPS: {
    readonly DALNICE: 1;
    readonly SILNICE: 2;
    readonly MISTNI_KOMUNIKACE: 3;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuSilnicniDopravyPSValue = (typeof TypObjektuSilnicniDopravyPS)[keyof typeof TypObjektuSilnicniDopravyPS];
/** TypDrahy */
export declare const TypDrahy: {
    readonly ZELEZNICNI: 1;
    readonly TRAMVAJOVA: 2;
    readonly LANOVA: 3;
    readonly SPECIALNI: 4;
    readonly TROLEJBUSOVA: 5;
    readonly NEZJISTENO_NEURCENO: 99;
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
    readonly NEZJISTENO_NEURCENO: 99;
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
    readonly GEODETICKY_TECHNOLOGII_GNSS: 6;
    readonly NEZJISTENO: 99;
    readonly PREVZATY: 100282;
    readonly KONSTRUKCNE_KONSTRUKCNI_OMERNE: 100283;
    readonly KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 100284;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 100285;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 100286;
    readonly BIM_PUVODNI_Z_PROJEKTU: 100288;
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
    readonly GEODETICKY_TECHNOLOGII_GNSS: 6;
    readonly NEZJISTENO: 99;
    readonly PREVZATY: 100270;
    readonly KONSTRUKCNE_KONSTRUKCNI_OMERNE: 100271;
    readonly KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 100272;
    readonly BIM_PUVODNI_Z_PROJEKTU: 100273;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 100274;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 100275;
};
export type ZpusobPorizeniZPSValue = (typeof ZpusobPorizeniZPS)[keyof typeof ZpusobPorizeniZPS];
/** ZpusobPorizeniPB_ZPS */
export declare const ZpusobPorizeniPB_ZPS: {
    readonly GEODETICKY_TERESTRICKY: 1;
    readonly GEODETICKY_FOTOGRAMMETRICKY: 2;
    readonly GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3;
    readonly PRIBLIZNYM_ZAKRESEM: 4;
    readonly KONSTRUKCNE: 5;
    readonly GEODETICKY_TECHNOLOGII_GNSS: 6;
    readonly GEODETICKY_TECHNOLOGII_GNSS_PRED_ZAHOZEM: 7;
    readonly GEODETICKY_TECHNOLOGII_GNSS_PO_ZAHOZU: 8;
    readonly GEODETICKY_TERESTRICKY_PRED_ZAHOZEM: 9;
    readonly GEODETICKY_TERESTRICKY_PO_ZAHOZU: 10;
    readonly VYHLEDANIM: 11;
    readonly NEZJISTENO: 99;
    readonly PREVZATY: 101391;
    readonly KONSTRUKCNE_KONSTRUKCNI_OMERNE: 101392;
    readonly KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 101393;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 101394;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 101395;
    readonly BIM_PUVODNI_Z_PROJEKTU: 101512;
};
export type ZpusobPorizeniPB_ZPSValue = (typeof ZpusobPorizeniPB_ZPS)[keyof typeof ZpusobPorizeniPB_ZPS];
/** TypDopravneVyznamnehoMistaDraze */
export declare const TypDopravneVyznamnehoMistaDraze: {
    readonly STANICE: 1;
    readonly ZASTAVKA: 2;
    readonly ODBOCKA: 3;
    readonly NAKLADISTE: 4;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
    readonly ZASTAVKA_A_NAKLADISTE: 101521;
};
export type TypDopravneVyznamnehoMistaDrazeValue = (typeof TypDopravneVyznamnehoMistaDraze)[keyof typeof TypDopravneVyznamnehoMistaDraze];
/** ZarazeniSledovaneVodniCesty */
export declare const ZarazeniSledovaneVodniCesty: {
    readonly DOPRAVNE_VYZNAMNA_VYUZIVANA: 1;
    readonly DOPRAVNE_VYZNAMNA_VYUZITELNA: 2;
    readonly UCELOVA: 3;
    readonly PLANOVANA: 4;
    readonly DOPRAVNE_VYZNAMNA_NEVYUZIVANA: 100290;
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
    readonly VYVYSENY: 2;
    readonly NEZJISTENO: 99;
};
export type UmisteniHeliportuValue = (typeof UmisteniHeliportu)[keyof typeof UmisteniHeliportu];
/** TypLeteckeStavby */
export declare const TypLeteckeStavby: {
    readonly PODZEMNI: 1;
    readonly POJEZDOVA_DRAHA: 2;
    readonly ODBAVOVACI_PLOCHA: 3;
    readonly MANIPULACNI_PLOCHA: 4;
    readonly ODBAVOVACI_BUDOVA: 5;
    readonly HANGAR: 6;
    readonly JINA: 98;
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
    readonly VYHLEDANIM: 7;
    readonly ODVOZENIM: 8;
    readonly GEODETICKY_TECHNOLOGII_GNSS: 9;
    readonly GEODETICKY_TECHNOLOGII_GNSS_PRED_ZAHOZEM: 10;
    readonly GEODETICKY_TECHNOLOGII_GNSS_PO_ZAHOZU: 11;
    readonly NEZJISTENO: 99;
    readonly PREVZATY: 100299;
    readonly KONSTRUKCNE_KONSTRUKCNI_OMERNE: 100300;
    readonly KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 100301;
    readonly BIM_PUVODNI_Z_PROJEKTU: 100302;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 100303;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 100304;
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
    readonly NEZJISTENO: 99;
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
    readonly NEZJISTENO: 101413;
};
export type TypObjektuOdvodneniStavbyValue = (typeof TypObjektuOdvodneniStavby)[keyof typeof TypObjektuOdvodneniStavby];
/** StavObjektu */
export declare const StavObjektu: {
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
    readonly TRUBKA_HDPE: 101542;
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
    readonly OSVETLOVACI_VEZ: 100316;
    readonly STOZAR_VYSILACI_RETRANSLACNI_STANICE: 100321;
};
export type TypPodpernehoZarizeniValue = (typeof TypPodpernehoZarizeni)[keyof typeof TypPodpernehoZarizeni];
/** TypSloupu */
export declare const TypSloupu: {
    readonly BETONOVY: 1;
    readonly DREVENY: 2;
    readonly KOVOVY: 3;
    readonly NEZJISTENO: 99;
    readonly OCELOVY_PRIHRADOVY: 100322;
    readonly OCELOVY_TRUBKOVY: 100323;
    readonly OCELOVY_JEDNODUCHY_PROFIL: 100324;
    readonly OCELOVY_TRUBKOVY_DVOJITY: 100325;
    readonly BETONOVY_DVOJITY: 100326;
};
export type TypSloupuValue = (typeof TypSloupu)[keyof typeof TypSloupu];
/** StavTrasySiteTI */
export declare const StavTrasySiteTI: {
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
    readonly UZEMNENI: 0;
    readonly NN: 1;
    readonly VN: 2;
    readonly VVN: 3;
    readonly ZVN: 4;
    readonly UVN: 5;
    readonly NEZJISTENO_NEURCENO: 99;
};
export type MaximalniNapetovaHladinaValue = (typeof MaximalniNapetovaHladina)[keyof typeof MaximalniNapetovaHladina];
/** MaximalniProvozniNapeti */
export declare const MaximalniProvozniNapeti: {
    readonly UZEMNENI: 0;
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
    readonly VALUE_12: 12;
    readonly VALUE_13: 13;
    readonly VALUE_14: 14;
    readonly VALUE_15: 15;
    readonly VALUE_16: 16;
    readonly VALUE_17: 17;
    readonly VALUE_18: 18;
    readonly VALUE_19: 19;
    readonly VALUE_20: 20;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type MaximalniProvozniNapetiValue = (typeof MaximalniProvozniNapeti)[keyof typeof MaximalniProvozniNapeti];
/** DruhElektrickehoProudu */
export declare const DruhElektrickehoProudu: {
    readonly AC: 1;
    readonly DC: 2;
    readonly AC_DC: 3;
};
export type DruhElektrickehoProuduValue = (typeof DruhElektrickehoProudu)[keyof typeof DruhElektrickehoProudu];
/** DruhElektrickehoProuduTrakcnihoVedeni */
export declare const DruhElektrickehoProuduTrakcnihoVedeni: {
    readonly AC: 1;
    readonly DC: 2;
    readonly NEZJISTENO: 99;
};
export type DruhElektrickehoProuduTrakcnihoVedeniValue = (typeof DruhElektrickehoProuduTrakcnihoVedeni)[keyof typeof DruhElektrickehoProuduTrakcnihoVedeni];
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
    readonly STOZAROVY_OBJEKT_ELEKTRO: 100339;
    readonly KABELOVY_OBJEKT_NAPR_MALE_ZASUVKOVE_SKRINE: 100342;
    readonly KABELOVY_OBJEKT_EOV_ELEKTRICKY_OHREV_VYHYBKY_VYKOLEJKY: 100343;
    readonly KABELOVY_OBJEKT_DOUO_DALKOVE_OVLADANI_USEKOVYCH_ODPOJOVACU: 100344;
    readonly USEKOVY_ODPOJOVAC_NA_TRAKCNI_PODPERE: 100345;
    readonly KABELOVY_OBJEKT_EPZ_ELEKTRICKE_PREDTAPECI_ZARIZENI: 100346;
    readonly KABELOVA_REZERVA: 100347;
    readonly ZEMNICI_JIMKA: 100348;
    readonly ZEMNICI_TYC: 100349;
    readonly KABELOVA_SPOJKA_SILOVE_VEDENI: 100350;
    readonly KABELOVY_OZNACNIK_MAGNET_NA_SILOVEM_VEDENI: 100351;
    readonly NEZJISTENO: 101407;
    readonly CIDLO_PRO_EOV_SRAZKOVE_ZAVEJOVE: 101525;
    readonly METEOROLOGICKA_STANICE: 101526;
    readonly PRIPOJNE_MISTO: 101536;
    readonly NABIJECI_STOJAN: 101537;
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
/** TypObjektuElektrickeSitePS */
export declare const TypObjektuElektrickeSitePS: {
    readonly GEOTERMALNI_ELEKTRARNA: 1;
    readonly JADERNA_ELEKTRARNA: 2;
    readonly VODNI_ELEKTRARNA: 3;
    readonly FOTOVOLTAICKA_ELEKTRARNA: 4;
    readonly TEPELNA_ELEKTRARNA: 5;
    readonly VETRNA_ELEKTRARNA: 6;
    readonly BIOPLYNOVA_ELEKTRARNA: 7;
    readonly STANICE_ELEKTRICKE_SITE: 8;
    readonly TRASA_ELEKTRICKE_SITE: 9;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuElektrickeSitePSValue = (typeof TypObjektuElektrickeSitePS)[keyof typeof TypObjektuElektrickeSitePS];
/** TypStaniceElektrickeSite */
export declare const TypStaniceElektrickeSite: {
    readonly TRANSFORMACNI_STANICE: 1;
    readonly STANICE_DISTRIBUCNI_SOUSTAVY: 2;
    readonly SPINACI_STANICE: 3;
    readonly MENIRNA: 4;
    readonly STANICE_PRENOSOVE_SOUSTAVY: 5;
    readonly TRAKCNI_NAPAJECI_STANICE: 6;
    readonly JINA: 98;
    readonly NEZJISTENO: 101408;
    readonly ROZPOJOVACI_STANICE: 101519;
    readonly TRAKCNI_DOBIJECI_STANICE: 101520;
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
    readonly NA_STOZARU: 100035;
    readonly NA_SOKLU: 100036;
    readonly V_ZEMI_POD_POVRCHEM: 100037;
    readonly NADZEMNI: 101123;
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
    readonly SOUPE: 1;
    readonly SKRIN: 2;
    readonly SACHTA: 4;
    readonly JINE: 98;
    readonly ODVZDUSNOVAC_POTRUBI: 100042;
    readonly VYVODY_OSTATNICH_POTRUBI: 100043;
    readonly CICHACKA_NADZEMNI_ZARIZENI: 100044;
    readonly REDUKCE_NA_PLYNOVODNIM_POTRUBI: 100046;
    readonly KOMPENZATOR: 100048;
    readonly ODFUKOVACI_TRUBKA: 100049;
    readonly ODVODNOVAC_KAPAK: 100050;
    readonly OCHOZ_NA_PLYNOVODU_JEDNOSTRANNY: 100051;
    readonly OCHOZ_NA_PLYNOVODU_OBOUSTRANNY: 100052;
    readonly ARMATURA: 100053;
    readonly KONCOVKA: 100054;
    readonly SPOJ: 100055;
    readonly IZOLACNI_SPOJ: 100057;
    readonly KABELOVY_OZNACNIK_MAGNET_PLYNOVODNIHO_POTRUBI: 100058;
    readonly NEZJISTENO: 101409;
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
    readonly NEZJISTENO: 101410;
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
/** TypObjektuPlynovodniSitePS */
export declare const TypObjektuPlynovodniSitePS: {
    readonly VYROBNA_PLYNU: 1;
    readonly STANICE: 2;
    readonly ZASOBNIK_PLYNU: 3;
    readonly TRASA_PLYNOVODNI_SITE: 4;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuPlynovodniSitePSValue = (typeof TypObjektuPlynovodniSitePS)[keyof typeof TypObjektuPlynovodniSitePS];
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
    readonly SOUPE: 101396;
    readonly MERICI_OBJEKT: 101398;
    readonly ODVZDUSNOVAC_POTRUBI: 101399;
    readonly MYCKA_VAGONU: 101400;
    readonly VODNI_JERAB: 101401;
    readonly KABELOVY_OZNACNIK_MAGNET_VODOVODNIHO_VEDENI: 101402;
    readonly KONCOVKA: 101403;
    readonly SPOJ: 101404;
    readonly NEZJISTENO: 101414;
};
export type TypObjektuVodovodniSiteValue = (typeof TypObjektuVodovodniSite)[keyof typeof TypObjektuVodovodniSite];
/** TypObjektuVodovodniSitePS */
export declare const TypObjektuVodovodniSitePS: {
    readonly ZDROJ_VODY: 1;
    readonly VODOJEM: 2;
    readonly UPRAVNA_VODY: 3;
    readonly TRASA_VODOVODNI_SITE: 4;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuVodovodniSitePSValue = (typeof TypObjektuVodovodniSitePS)[keyof typeof TypObjektuVodovodniSitePS];
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
    readonly DRENAZ: 101468;
    readonly KALOVE_POTRUBI: 101469;
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
    readonly NEZJISTENO: 101411;
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
    readonly NEZJISTENO: 101415;
    readonly ODSAVACI_STOJAN_ODPADNICH_VOZOVYCH_VOD_VYVODY_OST_POTRUBI: 101416;
    readonly ZUMPA_SEPTIK: 101417;
    readonly ARMATURA: 101418;
    readonly SPOJ: 101419;
    readonly KABELOVY_OZNACNIK_MAGNET_VEDENI_ODPADNICH_VOD: 101420;
    readonly LAPOL: 101467;
};
export type TypObjektuStokoveSiteValue = (typeof TypObjektuStokoveSite)[keyof typeof TypObjektuStokoveSite];
/** TypObjektuStokoveSiteZameru */
export declare const TypObjektuStokoveSiteZameru: {
    readonly CISTIRNA_ODPADNICH_VOD: 1;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuStokoveSiteZameruValue = (typeof TypObjektuStokoveSiteZameru)[keyof typeof TypObjektuStokoveSiteZameru];
/** TypObjektuStokoveSitePS */
export declare const TypObjektuStokoveSitePS: {
    readonly CISTIRNA_ODPADNICH_VOD: 1;
    readonly TRASA_STOKOVE_SITE: 2;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuStokoveSitePSValue = (typeof TypObjektuStokoveSitePS)[keyof typeof TypObjektuStokoveSitePS];
/** TypZarizeniSiteProduktovodu */
export declare const TypZarizeniSiteProduktovodu: {
    readonly SACHTA: 1;
    readonly NEZJISTENO: 99;
    readonly ARMATURA_NA_PRODUKTOVODU: 100088;
    readonly KONCOVKA_NA_PRODUKTOVODU: 100089;
    readonly SPOJ_NA_PRODUKTOVODU: 100090;
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
    readonly MERICI_OBJEKT_TEPLOMER: 100091;
    readonly ODVZDUSNOVAC_POTRUBI: 100093;
    readonly ARMATURA_TEPLOVODNI: 100094;
    readonly KONCOVKA_TEPLOVODNI: 100095;
    readonly SPOJ_TEPLOVODNI: 100096;
    readonly KOMPENZATOR: 100097;
    readonly NEZJISTENO: 101412;
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
/** TypObjektuTeplovodniSitePS */
export declare const TypObjektuTeplovodniSitePS: {
    readonly TEPLARNA: 1;
    readonly KOTELNA: 2;
    readonly TRASA_TEPLOVODNI_SITE: 3;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuTeplovodniSitePSValue = (typeof TypObjektuTeplovodniSitePS)[keyof typeof TypObjektuTeplovodniSitePS];
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
    readonly SVITIDLO: 4;
    readonly OSVETLENI: 5;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
    readonly OSVETLENI_OSVETLOVACI_VEZ: 101547;
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
    readonly ZAJISTENI_SKAL: 100109;
    readonly DRATENY_KOVOVY_NA_PODEZDIVCE: 100110;
    readonly DREVENY_NA_PODEZDIVCE: 100111;
    readonly TRVALE_ZASNEZKY: 100112;
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
    readonly SPODNI_HRANA_PRIKOPU: 100119;
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
    readonly ZVYSENA_TRIDA_PRESNOSTI_2: 100121;
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
    readonly ZVYSENA_TRIDA_PRESNOSTI_2: 100122;
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
    readonly NEURCENO: 99;
};
export type TypObjektuOdpadovehoHospodarstviZameruValue = (typeof TypObjektuOdpadovehoHospodarstviZameru)[keyof typeof TypObjektuOdpadovehoHospodarstviZameru];
/** TypObjektuOdpadovehoHospodarstviPS */
export declare const TypObjektuOdpadovehoHospodarstviPS: {
    readonly SKLADKA_ODPADU: 1;
    readonly SPALOVNA: 2;
    readonly JINE_ZARIZENI_NA_ODSTRANOVANI_VYUZIVANI_NEBO_SBER_ODPADU: 3;
    readonly ODKALISTE: 4;
    readonly NEURCENO: 99;
};
export type TypObjektuOdpadovehoHospodarstviPSValue = (typeof TypObjektuOdpadovehoHospodarstviPS)[keyof typeof TypObjektuOdpadovehoHospodarstviPS];
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
    readonly PRIKOP_NASEP_ZAREZ_DOPRAVNI_STAVBY: 14;
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
    readonly ROZESTAVENA_PLOCHA: 9;
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
/** TypPrubehuJineTechnologickeStavbyTI */
export declare const TypPrubehuJineTechnologickeStavbyTI: {
    readonly PREVES_TRAKCNIHO_TROLEJOVEHO_VEDENI_ZELEZNICNI_DRAHY: 1;
    readonly PREVES_TRAKCNIHO_TROLEJOVEHO_VEDENI_JINE_DRAHY: 2;
    readonly JINY: 98;
    readonly BRANA_SPOJUJICI_TRAKCNI_PODPERY: 100464;
    readonly TAHLO_KOTVY_K_TRAKCNI_PODPERE: 100465;
    readonly TAHLO_KOTVY_KE_STOZARU_MIMO_TRAKCNI_VEDENI: 100466;
    readonly KABELOVY_OBJEKT_NEURCENY_NADZEMNI_OBVODEM: 100468;
    readonly KABELOVY_OBJEKT_NEURCENY_PODZEMNI_OBVODEM: 100469;
    readonly ZEMNICI_DESKA: 100472;
    readonly NEZJISTENO: 100473;
    readonly MERENI_RADIOAKTIVITY: 101114;
    readonly NADZEMNI_OCHRANA_TRAKCNIHO_VEDENI: 101172;
    readonly KABELOVE_SKRINE_OBVODEM: 101462;
    readonly TRAKCNI_MENIC: 101534;
    readonly METEOROLOGICKA_STANICE: 101535;
};
export type TypPrubehuJineTechnologickeStavbyTIValue = (typeof TypPrubehuJineTechnologickeStavbyTI)[keyof typeof TypPrubehuJineTechnologickeStavbyTI];
/** UmisteniOznacniku */
export declare const UmisteniOznacniku: {
    readonly SAMOSTATNY_NOSIC: 1;
    readonly SDILENE_PODPERNE_ZARIZENI: 2;
    readonly STAVBA_ZASTRESENI: 3;
    readonly JINE: 4;
};
export type UmisteniOznacnikuValue = (typeof UmisteniOznacniku)[keyof typeof UmisteniOznacniku];
/** DruhHromadneDopravy */
export declare const DruhHromadneDopravy: {
    readonly AUTOBUSOVA: 1;
    readonly TROLEJBUSOVA: 2;
    readonly TRAMVAJOVA: 3;
    readonly LANOVA: 4;
    readonly PRIVOZ: 5;
    readonly VALUE_6: 6;
};
export type DruhHromadneDopravyValue = (typeof DruhHromadneDopravy)[keyof typeof DruhHromadneDopravy];
/** TypHydrantuVodovodniSite */
export declare const TypHydrantuVodovodniSite: {
    readonly GARANTOVANY: 1;
    readonly OBECNY: 2;
    readonly NEZJISTENO: 99;
};
export type TypHydrantuVodovodniSiteValue = (typeof TypHydrantuVodovodniSite)[keyof typeof TypHydrantuVodovodniSite];
/** DimenzeHydrantuVodovodniSite */
export declare const DimenzeHydrantuVodovodniSite: {
    readonly DN_80: 1;
    readonly DN_100: 2;
    readonly DN_125: 3;
    readonly DN_150: 4;
    readonly DN_200: 5;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
};
export type DimenzeHydrantuVodovodniSiteValue = (typeof DimenzeHydrantuVodovodniSite)[keyof typeof DimenzeHydrantuVodovodniSite];
/** SpravceTI */
export declare const SpravceTI: {
    readonly SZ: 100752;
    readonly CIZI_ZJISTENO: 100753;
    readonly CIZI_NEZJISTENO: 100754;
    readonly NEURCENO: 100755;
};
export type SpravceTIValue = (typeof SpravceTI)[keyof typeof SpravceTI];
/** TypKolektoru */
export declare const TypKolektoru: {
    readonly KOLEKTOR_NADZEMNI: 100589;
    readonly KOLEKTOR_PODZEMNI: 100590;
    readonly NEURCENO: 100592;
};
export type TypKolektoruValue = (typeof TypKolektoru)[keyof typeof TypKolektoru];
/** TypZakresuKabelovoduChranic */
export declare const TypZakresuKabelovoduChranic: {
    readonly OSA: 100782;
    readonly HRANA: 100783;
    readonly NEZJISTENO: 101011;
};
export type TypZakresuKabelovoduChranicValue = (typeof TypZakresuKabelovoduChranic)[keyof typeof TypZakresuKabelovoduChranic];
/** UmisteniKabelovoduChranicky */
export declare const UmisteniKabelovoduChranicky: {
    readonly NADZEMNI: 100665;
    readonly PODZEMNI: 100666;
    readonly NEURCENO: 100667;
};
export type UmisteniKabelovoduChranickyValue = (typeof UmisteniKabelovoduChranicky)[keyof typeof UmisteniKabelovoduChranicky];
/** TypChranenehoPrvku */
export declare const TypChranenehoPrvku: {
    readonly POTRUBI: 100784;
    readonly KABEL: 100785;
    readonly NEURCENO: 100786;
    readonly OBOJI: 101131;
};
export type TypChranenehoPrvkuValue = (typeof TypChranenehoPrvku)[keyof typeof TypChranenehoPrvku];
/** Obsazenost */
export declare const Obsazenost: {
    readonly OBSAZENA: 100787;
    readonly PRAZDNA: 100788;
    readonly NEURCENO: 100789;
};
export type ObsazenostValue = (typeof Obsazenost)[keyof typeof Obsazenost];
/** UmisteniTrasyElektrickeSite */
export declare const UmisteniTrasyElektrickeSite: {
    readonly NADZEMNI: 100553;
    readonly ZAVESNE: 100554;
    readonly PODZEMNI: 100555;
    readonly NEURCENO: 100556;
};
export type UmisteniTrasyElektrickeSiteValue = (typeof UmisteniTrasyElektrickeSite)[keyof typeof UmisteniTrasyElektrickeSite];
/** VyuzitiTrasySiteEk */
export declare const VyuzitiTrasySiteEk: {
    readonly SDELOVACI: 100557;
    readonly ZABEZPECOVACI: 100558;
    readonly NEURCENE: 100559;
    readonly SDELOVACI_VEDENI_CIZI: 100578;
    readonly NEURCENE_DRATOVE_NEBO_KABELOVE_VEDENI_MIMO_OCHRANNY_PRVEK_I_V_OCHRANNEM_PRVKU: 100579;
    readonly PRAZDNE: 101548;
};
export type VyuzitiTrasySiteEkValue = (typeof VyuzitiTrasySiteEk)[keyof typeof VyuzitiTrasySiteEk];
/** DruhTrasySiteEk */
export declare const DruhTrasySiteEk: {
    readonly MISTNI: 100790;
    readonly TRATOVY: 100791;
    readonly DALKOVY: 100792;
    readonly NEZJISTENO: 101004;
    readonly PRIPOJNY: 101544;
};
export type DruhTrasySiteEkValue = (typeof DruhTrasySiteEk)[keyof typeof DruhTrasySiteEk];
/** UmisteniTrasySiteEk */
export declare const UmisteniTrasySiteEk: {
    readonly NADZEMNI: 100553;
    readonly ZAVESNE: 100554;
    readonly PODZEMNI: 100555;
    readonly NEURCENO: 100556;
};
export type UmisteniTrasySiteEkValue = (typeof UmisteniTrasySiteEk)[keyof typeof UmisteniTrasySiteEk];
/** VyuzitiZarizeniEk */
export declare const VyuzitiZarizeniEk: {
    readonly SDELOVACI: 100557;
    readonly ZABEZPECOVACI: 100558;
    readonly NEURCENE: 100559;
    readonly SDELOVACI_VEDENI_CIZI: 100578;
    readonly NEURCENE_DRATOVE_NEBO_KABELOVE_VEDENI_MIMO_OCHRANNY_PRVEK_I_V_OCHRANNEM_PRVKU: 100579;
    readonly PRAZDNE: 101548;
};
export type VyuzitiZarizeniEkValue = (typeof VyuzitiZarizeniEk)[keyof typeof VyuzitiZarizeniEk];
/** TypDratovodu */
export declare const TypDratovodu: {
    readonly NADZEMNI: 100693;
    readonly VE_ZLABU: 100694;
    readonly VE_ZLABU_NEPRISTUPNEM: 100696;
    readonly NEURCENO: 100697;
};
export type TypDratovoduValue = (typeof TypDratovodu)[keyof typeof TypDratovodu];
/** TypZarizeniDratovodu */
export declare const TypZarizeniDratovodu: {
    readonly SACHTA_DRAT_VEDENI_ZZ: 100698;
    readonly DOTAHOVAC_DRATOVODU: 100699;
    readonly VYROVNAVAC_DRATOVODU: 100700;
    readonly NEURCENO: 100701;
};
export type TypZarizeniDratovoduValue = (typeof TypZarizeniDratovodu)[keyof typeof TypZarizeniDratovodu];
/** UmisteniTrasyPlynovodniSite */
export declare const UmisteniTrasyPlynovodniSite: {
    readonly NADZEMNI: 100653;
    readonly PODZEMNI: 100654;
    readonly NEURCENO: 100655;
};
export type UmisteniTrasyPlynovodniSiteValue = (typeof UmisteniTrasyPlynovodniSite)[keyof typeof UmisteniTrasyPlynovodniSite];
/** UmisteniTrasyVodovodniSite */
export declare const UmisteniTrasyVodovodniSite: {
    readonly NADZEMNI: 100659;
    readonly PODZEMNI: 100660;
    readonly NEURCENO: 100661;
};
export type UmisteniTrasyVodovodniSiteValue = (typeof UmisteniTrasyVodovodniSite)[keyof typeof UmisteniTrasyVodovodniSite];
/** UmisteniTrasyKanalizacniSit */
export declare const UmisteniTrasyKanalizacniSit: {
    readonly NADZEMNI: 100662;
    readonly PODZEMNI: 100663;
    readonly NEURCENO: 100664;
};
export type UmisteniTrasyKanalizacniSitValue = (typeof UmisteniTrasyKanalizacniSit)[keyof typeof UmisteniTrasyKanalizacniSit];
/** UmisteniTrasyProduktovodu */
export declare const UmisteniTrasyProduktovodu: {
    readonly NADZEMNI: 100665;
    readonly PODZEMNI: 100666;
    readonly NEURCENO: 100667;
};
export type UmisteniTrasyProduktovoduValue = (typeof UmisteniTrasyProduktovodu)[keyof typeof UmisteniTrasyProduktovodu];
/** UmisteniTeplovodniSite */
export declare const UmisteniTeplovodniSite: {
    readonly NORMALNI: 100656;
    readonly KANALEM: 100657;
    readonly NEURCENO: 100658;
};
export type UmisteniTeplovodniSiteValue = (typeof UmisteniTeplovodniSite)[keyof typeof UmisteniTeplovodniSite];
/** TypOrientacnihoSloupkuTi */
export declare const TypOrientacnihoSloupkuTi: {
    readonly OZNACOVACI_PATNIK: 100600;
    readonly OZNACOVACI_TYC: 100601;
    readonly NEURCENO: 100606;
};
export type TypOrientacnihoSloupkuTiValue = (typeof TypOrientacnihoSloupkuTi)[keyof typeof TypOrientacnihoSloupkuTi];
/** TypBodovehoZarizeniProtikor */
export declare const TypBodovehoZarizeniProtikor: {
    readonly KATODOVA_STANICE: 100756;
    readonly OCHRANNA_ANODA: 100757;
    readonly NEZJISTENO: 100758;
    readonly PROTIKOROZNI_OCHRANA_ZZ: 101132;
};
export type TypBodovehoZarizeniProtikorValue = (typeof TypBodovehoZarizeniProtikor)[keyof typeof TypBodovehoZarizeniProtikor];
/** TypBudovy */
export declare const TypBudovy: {
    readonly ZDENA_BETONOVA_KOVOVA_NESPALNA: 100541;
    readonly DREVENA: 100542;
    readonly NEROZLISENO: 100543;
};
export type TypBudovyValue = (typeof TypBudovy)[keyof typeof TypBudovy];
/** UcelBudovy */
export declare const UcelBudovy: {
    readonly KABELOVY_DOMEK: 100702;
    readonly RELEOVY_DOMEK: 100703;
    readonly STAVEDLO: 100704;
    readonly VYPRAVNI_BUDOVA: 100705;
    readonly CEKARNA_BUDOVA_I_PRISTRESEK: 100706;
    readonly BUDOVA_ZASTAVKY: 100707;
    readonly SKLADISTE: 100708;
    readonly RESTAURACE: 100709;
    readonly BUFET: 100710;
    readonly ZACHOD: 100711;
    readonly GARAZ: 100712;
    readonly KULNA: 100713;
    readonly BUDOVA_NAKLADISTE: 100714;
    readonly OBYTNY_DUM: 100715;
    readonly BUDOVA_ODBOCKY: 100716;
    readonly HASICSKA_ZACHRANNA_SLUZBA: 100717;
    readonly ADMINISTRATIVNI_BUDOVA: 100718;
    readonly VODOJEM: 100719;
    readonly VODARNA: 100720;
    readonly VYMENIKOVA_STANICE: 100721;
    readonly MENIRNA: 100722;
    readonly ROZVODNA: 100723;
    readonly TECHNOLOGICKA_BUDOVA: 100724;
    readonly TRANSFORMACNI_STANICE: 100725;
    readonly CERPACI_STANICE: 100726;
    readonly ELEKTRARNA: 100727;
    readonly DEPO_KOLEJOVYCH_VOZIDEL: 100728;
    readonly LOKOMOTIVNI_DEPO: 100729;
    readonly VOZOVE_DEPO: 100730;
    readonly HALA_OPRAV: 100731;
    readonly DILNY: 100732;
    readonly NEZJISTENO: 100733;
};
export type UcelBudovyValue = (typeof UcelBudovy)[keyof typeof UcelBudovy];
/** TypKoleje */
export declare const TypKoleje: {
    readonly STANICNI_A_TRATOVA: 100147;
    readonly VLECKOVA: 100148;
    readonly PISKOVA: 100149;
    readonly NEZJISTENO: 100150;
    readonly ZA_DYNAMICKYM_ZARAZEDLEM: 101152;
};
export type TypKolejeValue = (typeof TypKoleje)[keyof typeof TypKoleje];
/** TypPrejezdu */
export declare const TypPrejezdu: {
    readonly ZELEZNICNI_PREJEZD: 100737;
    readonly ZELEZNICNI_PRECHOD: 100738;
    readonly NEURCENO: 100739;
};
export type TypPrejezduValue = (typeof TypPrejezdu)[keyof typeof TypPrejezdu];
/** TypPrikopuNasepuZarezuDopr */
export declare const TypPrikopuNasepuZarezuDopr: {
    readonly PRIKOP_S_NEZPEVNENYM_DNEM: 100478;
    readonly PRIKOP_SE_ZPEVNENYM_DNEM_ZLAB: 100479;
    readonly ODPAROVACI_ZLAB: 100480;
    readonly NASEP: 100481;
    readonly ZAREZ: 100482;
    readonly NEURCENO: 100483;
    readonly SKALY: 101015;
    readonly ZPEVNENY_PRIKOP: 101421;
};
export type TypPrikopuNasepuZarezuDoprValue = (typeof TypPrikopuNasepuZarezuDopr)[keyof typeof TypPrikopuNasepuZarezuDopr];
/** TypManipulacniPlochy */
export declare const TypManipulacniPlochy: {
    readonly BEZ_URCENI: 100519;
    readonly DEZINFEKCNI_PLOCHA_SEPARACNI_VANA: 100520;
};
export type TypManipulacniPlochyValue = (typeof TypManipulacniPlochy)[keyof typeof TypManipulacniPlochy];
/** TypPodchodu */
export declare const TypPodchodu: {
    readonly ZAVAZADLOVY_TUNEL: 100524;
    readonly PODCHOD: 100525;
    readonly NEZJISTENO: 100526;
};
export type TypPodchoduValue = (typeof TypPodchodu)[keyof typeof TypPodchodu];
/** TypProtihlukoveSteny */
export declare const TypProtihlukoveSteny: {
    readonly PLNA: 100544;
    readonly TRANSPARENTNI: 100545;
    readonly KOMBINOVANA: 100546;
    readonly NIZKA_PROTIHLUKOVA_CLONA_NESKLOPNA: 100547;
    readonly NIZKA_PROTIHLUKOVA_CLONA_SKLOPNA: 100548;
    readonly NEURCENO: 100552;
};
export type TypProtihlukoveStenyValue = (typeof TypProtihlukoveSteny)[keyof typeof TypProtihlukoveSteny];
/** ZpusobPorizeniZPSSZ */
export declare const ZpusobPorizeniZPSSZ: {
    readonly GEODETICKY_TERESTRICKY: 100743;
    readonly GEODETICKY_FOTOGRAMMETRICKY: 100744;
    readonly GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 100745;
    readonly PRIBLIZNYM_ZAKRESEM: 100746;
    readonly NEZJISTENO: 100747;
    readonly GEODETICKY_TECHNOLOGII_GNSS: 100748;
    readonly PREVZATY: 100749;
    readonly BIM_PUVODNI_Z_PROJEKTU: 100751;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 101167;
    readonly KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 101168;
    readonly KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 101169;
    readonly KONSTRUKCNE_KONSTRUKCNI_OMERNE: 101170;
    readonly GEODETICKY_TERESTRICKY_PRED_ZAHOZEM: 101175;
    readonly GEODETICKY_TERESTRICKY_PO_ZAHOZU: 101176;
    readonly GEODETICKY_TECHNOLOGII_GNSS_PRED_ZAHOZEM: 101177;
    readonly GEODETICKY_TECHNOLOGII_GNSS_PO_ZAHOZU: 101178;
    readonly VYHLEDANIM: 101179;
    readonly KONSTRUKCNE: 101511;
};
export type ZpusobPorizeniZPSSZValue = (typeof ZpusobPorizeniZPSSZ)[keyof typeof ZpusobPorizeniZPSSZ];
/** TypPresuvny */
export declare const TypPresuvny: {
    readonly ZAPUSTENA: 100530;
    readonly PREVYSENA: 100531;
    readonly NEURCENO: 100532;
};
export type TypPresuvnyValue = (typeof TypPresuvny)[keyof typeof TypPresuvny];
/** DruhZarizeniVratku */
export declare const DruhZarizeniVratku: {
    readonly KUZELKA_VRATKU_NA_POSUN: 100533;
    readonly MOTOR_VRATKU_NA_POSUN: 100534;
    readonly NEURCENO: 100535;
};
export type DruhZarizeniVratkuValue = (typeof DruhZarizeniVratku)[keyof typeof DruhZarizeniVratku];
/** TypJerabu */
export declare const TypJerabu: {
    readonly POZEMNI: 100536;
    readonly NADZEMNI: 100537;
    readonly NEURCENO: 100538;
    readonly PODZEMNI: 101130;
};
export type TypJerabuValue = (typeof TypJerabu)[keyof typeof TypJerabu];
/** TypPredmetuMalehoRozsahu */
export declare const TypPredmetuMalehoRozsahu: {
    readonly NA_OBJEKTU: 100625;
    readonly SAMOSTATNE_STOJICI: 100626;
    readonly NEURCENO: 100628;
};
export type TypPredmetuMalehoRozsahuValue = (typeof TypPredmetuMalehoRozsahu)[keyof typeof TypPredmetuMalehoRozsahu];
/** TypDopravniZnackyObjektu */
export declare const TypDopravniZnackyObjektu: {
    readonly SVETELNE_SIGNALIZACNI_ZARIZENI_SEMAFOR: 100632;
    readonly DOPRAVNI_ZNACKA: 100635;
    readonly ZASTAVKA_VEREJNE_DOPRAVY: 100638;
    readonly OZNACOVAC_CI_PRODEJNI_AUTOMAT_JIZDENEK: 100640;
    readonly ORIENTACNI_TABULE: 100642;
    readonly NEZJISTENO: 100643;
};
export type TypDopravniZnackyObjektuValue = (typeof TypDopravniZnackyObjektu)[keyof typeof TypDopravniZnackyObjektu];
/** TypSpecialnihoBodu */
export declare const TypSpecialnihoBodu: {
    readonly BOD_CESKE_STATNI_TRIGONOMETRICKE_SITE_CSTS_KTERY_NENI_ZAHRNUT_DO_ZBP: 100644;
    readonly BOD_CESKE_STATNI_NIVELACNI_SITE_CSNS: 100646;
    readonly STABILIZOVANY_BOD_TECH_NIVELACE: 100647;
    readonly BOD_ZELEZNICNIHO_BODOVEHO_POLE_ZBP: 100648;
    readonly BOD_POLYGONOVEHO_PORADU_OSTATNI: 100649;
    readonly OCHRANNY_TYCOVY_ZNAK_U_SPEC_BODU: 100650;
    readonly PROFILOVY_BOD_VYTYCOVACI_ZNACKA: 100651;
    readonly JINY: 100652;
    readonly NEZJISTENO: 101010;
};
export type TypSpecialnihoBoduValue = (typeof TypSpecialnihoBodu)[keyof typeof TypSpecialnihoBodu];
/** TypHraniceVnitrniCleneniBu */
export declare const TypHraniceVnitrniCleneniBu: {
    readonly HRANICE_BUDOVY_PODCHODNA: 100539;
    readonly NEURCENO: 100540;
    readonly VNITRNI_CLENENI_BUDOVY_NEBO_STAVBY: 101545;
};
export type TypHraniceVnitrniCleneniBuValue = (typeof TypHraniceVnitrniCleneniBu)[keyof typeof TypHraniceVnitrniCleneniBu];
/** TypBalizy */
export declare const TypBalizy: {
    readonly PREPINATELNA: 100151;
    readonly NEPREPINATELNA: 100152;
    readonly NEZJISTENO: 100154;
};
export type TypBalizyValue = (typeof TypBalizy)[keyof typeof TypBalizy];
/** TypDilatace */
export declare const TypDilatace: {
    readonly KDZ_S_PEVNOU_KOLENOVOU_KOLEJNICI: 100156;
    readonly KDZ_S_PEVNOU_JAZYKOVOU_KOLEJNICI: 100157;
    readonly NEZJISTENO: 100158;
};
export type TypDilataceValue = (typeof TypDilatace)[keyof typeof TypDilatace];
/** TypUhelniku */
export declare const TypUhelniku: {
    readonly POJISTNY_UHELNIK: 100159;
    readonly ZAJISTOVACI_UHELNIK: 100160;
    readonly NEZJISTENO: 100161;
};
export type TypUhelnikuValue = (typeof TypUhelniku)[keyof typeof TypUhelniku];
/** TypIzolovaneKolejnice */
export declare const TypIzolovaneKolejnice: {
    readonly PRAVA: 100162;
    readonly LEVA: 100163;
    readonly NEZJISTENO: 100164;
};
export type TypIzolovaneKolejniceValue = (typeof TypIzolovaneKolejnice)[keyof typeof TypIzolovaneKolejnice];
/** TypBrzdy */
export declare const TypBrzdy: {
    readonly KOLEJOVA_BRZDA_JEDNOSTRANNA_PRAVA: 100165;
    readonly KOLEJOVA_BRZDA_JEDNOSTRANNA_LEVA: 100166;
    readonly KOLEJOVA_BRZDA_OBOUSTRANNA: 100167;
    readonly NEZJISTENO: 100168;
};
export type TypBrzdyValue = (typeof TypBrzdy)[keyof typeof TypBrzdy];
/** TypZarazkoveBrzdy */
export declare const TypZarazkoveBrzdy: {
    readonly ZARAZKOVA_BRZDA_ZPRAVA: 100169;
    readonly ZARAZKOVA_BRZDA_ZLEVA: 100170;
    readonly NEZJISTENO: 100171;
};
export type TypZarazkoveBrzdyValue = (typeof TypZarazkoveBrzdy)[keyof typeof TypZarazkoveBrzdy];
/** TypVykolejky */
export declare const TypVykolejky: {
    readonly LEVOSTRANNA: 100172;
    readonly PRAVOSTRANNA: 100173;
    readonly NEZJISTENO: 100174;
    readonly OBOUSTRANNA: 101531;
};
export type TypVykolejkyValue = (typeof TypVykolejky)[keyof typeof TypVykolejky];
/** NavestTelesoVykolejky */
export declare const NavestTelesoVykolejky: {
    readonly S_NAVEST_TELESEM: 100175;
    readonly BEZ_NAVEST_TELESA: 100176;
    readonly NEZJISTENO: 100177;
};
export type NavestTelesoVykolejkyValue = (typeof NavestTelesoVykolejky)[keyof typeof NavestTelesoVykolejky];
/** PopisCidlaSnimacePrepinace */
export declare const PopisCidlaSnimacePrepinace: {
    readonly ATMOSFERICKY_SENZOR: 100180;
    readonly RADAR: 100183;
    readonly SOLARNI_PANEL: 100186;
    readonly DETEKTOR_HORKOBEZNOSTI: 100187;
    readonly NEZJISTENO: 100188;
    readonly SOUMRAKOVE_CIDLO: 101546;
};
export type PopisCidlaSnimacePrepinaceValue = (typeof PopisCidlaSnimacePrepinace)[keyof typeof PopisCidlaSnimacePrepinace];
/** TypVystrazniku */
export declare const TypVystrazniku: {
    readonly NEZJISTENO: 100196;
    readonly S_POZITIVNI_SIGNALIZACI: 101012;
    readonly BEZ_POZITIVNI_SIGNALIZACE: 101013;
};
export type TypVystraznikuValue = (typeof TypVystrazniku)[keyof typeof TypVystrazniku];
/** TypPohonuMechanickychZavor */
export declare const TypPohonuMechanickychZavor: {
    readonly RUCNI_POHON: 100197;
    readonly MOTOROVY_POHON: 100198;
    readonly NEZJISTENO: 100199;
};
export type TypPohonuMechanickychZavorValue = (typeof TypPohonuMechanickychZavor)[keyof typeof TypPohonuMechanickychZavor];
/** TypVystraznehoKrizeProPrej */
export declare const TypVystraznehoKrizeProPrej: {
    readonly JEDNOKOLEJNY: 100203;
    readonly VICEKOLEJNY: 100204;
    readonly NEZJISTENO: 100206;
};
export type TypVystraznehoKrizeProPrejValue = (typeof TypVystraznehoKrizeProPrej)[keyof typeof TypVystraznehoKrizeProPrej];
/** UmisteniNavestidlaTabulky */
export declare const UmisteniNavestidlaTabulky: {
    readonly NA_STOZARU: 100775;
    readonly NA_SLOUPKU: 100776;
    readonly NA_PODSTAVCI_TRPASLICI_NAVESTIDLO: 100777;
    readonly NA_LAVCE_KRAKORCI_BRANE: 100778;
    readonly ZAVESENE_POD_ZASTRESENIM: 100779;
    readonly ZAVESENE_NA_NOSNEM_LANE: 100780;
    readonly NEURCENO: 100781;
    readonly NA_KONZOLE: 101111;
    readonly NA_ZDI: 101133;
    readonly JINE: 101134;
};
export type UmisteniNavestidlaTabulkyValue = (typeof UmisteniNavestidlaTabulky)[keyof typeof UmisteniNavestidlaTabulky];
/** TypNavestiRychlostnikuPredv */
export declare const TypNavestiRychlostnikuPredv: {
    readonly RYCHLOSTNIK_N_BILA_DESKA: 100207;
    readonly RYCHLOSTNIK_N_S_TABULKOU_LOKOMOTIVY: 100208;
    readonly RYCHLOSTNIK_3_BILY_TERC: 100209;
    readonly RYCHLOSTNIK_N_S_PRUHY: 100210;
    readonly RYCHLOSTNIK_N_S_PRUHY_A_S_TABULKOU_LOKOMOTIVY: 100211;
    readonly RYCHLOSTNIK_R_BILA_DESKA_S_RAMENEM: 100212;
    readonly RYCHLOSTNIK_NS: 100213;
    readonly NAVEST_OCEKAVEJTE_KONEC_PLATNOSTI_RYCHLOSTNIKU_NS: 100214;
    readonly NAVEST_KONEC_PLATNOSTI_RYCHLOSTNIKU_NS: 100215;
    readonly PREDVESTNIK_OCEKAVEJTE_TRATOVOU_RYCHLOST_3_ZLUTY_TERC: 100216;
    readonly PREDVESTNIK_OCEKAVEJTE_TRATOVOU_RYCHLOST_N_ZLUTY_STIT: 100217;
    readonly PREDVESTNIK_OCEKAVEJTE_TRATOVOU_RYCHLOST_R_ZLUTY_STIT_S_RAMENEM: 100218;
    readonly PREDVESTNIK_OCEKAVEJTE_TRATOVOU_RYCHLOST_NS: 100219;
    readonly NEZJISTENO: 100221;
};
export type TypNavestiRychlostnikuPredvValue = (typeof TypNavestiRychlostnikuPredv)[keyof typeof TypNavestiRychlostnikuPredv];
/** TypSvetelnehoNavestidla */
export declare const TypSvetelnehoNavestidla: {
    readonly SVETELNE: 100222;
    readonly VYCKAVACI_NAVESTIDLO: 100227;
    readonly PREJEZDNIK: 100230;
    readonly NEZJISTENO: 100231;
    readonly PRO_ELEKTRICKY_PROVOZ: 101522;
};
export type TypSvetelnehoNavestidlaValue = (typeof TypSvetelnehoNavestidla)[keyof typeof TypSvetelnehoNavestidla];
/** TypMechanickehoNavestidla */
export declare const TypMechanickehoNavestidla: {
    readonly MECHANICKA_PREDVEST: 100232;
    readonly NAVESTIDLO_MECHANICKE_JEDNORAMENNE: 100233;
    readonly NAVESTIDLO_MECHANICKE_DVOURAMENNE: 100234;
    readonly MECHANICKE_NAVESTIDLO_SERADOVACI: 100235;
    readonly MECHANICKE_NAVESTIDLO_PRO_UZAVERU_KOLEJE: 100236;
    readonly NEZJISTENO: 100237;
    readonly MECHANICKE_NAVESTIDLO_S_PRIVOLAVACIM_NAVESTIDLEM_3_SVETLA: 101136;
    readonly MECHANICKE_NAVESTIDLO_S_PRIVOLAVACIM_NAVESTIDLEM_1_SVETLO: 101137;
};
export type TypMechanickehoNavestidlaValue = (typeof TypMechanickehoNavestidla)[keyof typeof TypMechanickehoNavestidla];
/** TypNameznikuKoncovniku */
export declare const TypNameznikuKoncovniku: {
    readonly NAMEZNIK: 100451;
    readonly KONCOVNIK: 100452;
    readonly NEZJISTENO: 100453;
};
export type TypNameznikuKoncovnikuValue = (typeof TypNameznikuKoncovniku)[keyof typeof TypNameznikuKoncovniku];
/** TypDrhliku */
export declare const TypDrhliku: {
    readonly ZAPNETE_CISTICI_ZARIZENI: 100454;
    readonly VYPNETE_CISTICI_ZARIZENI: 100455;
    readonly NEZJISTENO: 100456;
    readonly OBOUSTRANNY: 101163;
};
export type TypDrhlikuValue = (typeof TypDrhliku)[keyof typeof TypDrhliku];
/** TypOvladaniZabezpecovacihoZ */
export declare const TypOvladaniZabezpecovacihoZ: {
    readonly POMOCNE_STAVEDLO: 100459;
    readonly NEZJISTENO: 100462;
};
export type TypOvladaniZabezpecovacihoZValue = (typeof TypOvladaniZabezpecovacihoZ)[keyof typeof TypOvladaniZabezpecovacihoZ];
/** TypDelkyNastupiste */
export declare const TypDelkyNastupiste: {
    readonly ZAMERENA: 100501;
    readonly EVIDENCNI: 100502;
    readonly NEURCENA: 100503;
};
export type TypDelkyNastupisteValue = (typeof TypDelkyNastupiste)[keyof typeof TypDelkyNastupiste];
/** TypVystraznehoZarizeniNaNa */
export declare const TypVystraznehoZarizeniNaNa: {
    readonly VYSTRAZNE_ZARIZENI_PRO_CESTUJICI_PRO_PRECHOD_KOLEJI_NA_NAST_SIGNALIZACE_VZPK: 100498;
    readonly ZAVORA_VYSTRAZNEHO_ZARIZENI_PRO_PRECHOD_KOLEJI_NA_NAST: 100499;
    readonly NEZJISTENO: 100500;
};
export type TypVystraznehoZarizeniNaNaValue = (typeof TypVystraznehoZarizeniNaNa)[keyof typeof TypVystraznehoZarizeniNaNa];
/** TypZarazedla */
export declare const TypZarazedla: {
    readonly KOLEJNICOVE: 100504;
    readonly DYNAMICKE: 100505;
    readonly BETONOVE: 100506;
    readonly ZEMNI: 100507;
    readonly PRICNY_PRAZEC: 100508;
    readonly NEZJISTENO: 100509;
};
export type TypZarazedlaValue = (typeof TypZarazedla)[keyof typeof TypZarazedla];
/** TypZvlastniPlochyLinieVOs */
export declare const TypZvlastniPlochyLinieVOs: {
    readonly GUMOVY_ABSORBER_HLUKU: 100510;
    readonly GUMOVA_ZABRANA_PROTI_PRECHAZENI: 100511;
    readonly ZABRANA_PROTI_PREJETI_PREJEZDU: 100512;
    readonly NEZJISTENO: 100514;
};
export type TypZvlastniPlochyLinieVOsValue = (typeof TypZvlastniPlochyLinieVOs)[keyof typeof TypZvlastniPlochyLinieVOs];
/** TypSchodiste */
export declare const TypSchodiste: {
    readonly SCHODY_MIMO_BUDOVY: 100740;
    readonly SCHODY_U_BUDOVY: 100741;
    readonly NEURCENO: 100742;
};
export type TypSchodisteValue = (typeof TypSchodiste)[keyof typeof TypSchodiste];
/** TypZastreseni */
export declare const TypZastreseni: {
    readonly ZASTRESENI_NASTUPISTE: 100490;
    readonly ZASTRESENI_OSTATNI: 100491;
    readonly NEURCENO: 100494;
};
export type TypZastreseniValue = (typeof TypZastreseni)[keyof typeof TypZastreseni];
/** MaterialRampy */
export declare const MaterialRampy: {
    readonly DREVENA: 100474;
    readonly KOVOVA: 100475;
    readonly BETONOVA: 100476;
    readonly NEZJISTENO: 100477;
    readonly KAMENNA: 101523;
};
export type MaterialRampyValue = (typeof MaterialRampy)[keyof typeof MaterialRampy];
/** TypPatkyDeskyMonolituPilir */
export declare const TypPatkyDeskyMonolituPilir: {
    readonly SOKL_PATKA: 100759;
    readonly PILIR_DESKA_MONOLIT_NAPR_SOUCASTI_MOSTU: 100760;
    readonly NEURCENO: 100761;
};
export type TypPatkyDeskyMonolituPilirValue = (typeof TypPatkyDeskyMonolituPilir)[keyof typeof TypPatkyDeskyMonolituPilir];
/** TypSloupuTechnologickeKonst */
export declare const TypSloupuTechnologickeKonst: {
    readonly PODPERA_ZASTRESENI_NASTUPISTE: 100495;
    readonly PODPERA_ZASTRESENI_PODCHODNE_CASTI_BUDOVY: 100496;
    readonly NEURCENO: 100497;
    readonly PODPERA_TECHNOLOGICKE_KONSTRUKCE: 101524;
};
export type TypSloupuTechnologickeKonstValue = (typeof TypSloupuTechnologickeKonst)[keyof typeof TypSloupuTechnologickeKonst];
/** TypStavbyProZpevneniPovrch */
export declare const TypStavbyProZpevneniPovrch: {
    readonly ZAJISTENI_SKAL: 100515;
    readonly ZPEVNENY_A_UPRAVENY_SVAH: 100516;
    readonly SVAHOVA_DLAZBA: 100517;
    readonly NEZJISTENO: 100518;
};
export type TypStavbyProZpevneniPovrchValue = (typeof TypStavbyProZpevneniPovrch)[keyof typeof TypStavbyProZpevneniPovrch];
/** TypVodnihoToku */
export declare const TypVodnihoToku: {
    readonly TRVALY: 100616;
    readonly OBCASNY_SUCHY_PRIKOP: 100617;
    readonly NEURCENO: 100618;
};
export type TypVodnihoTokuValue = (typeof TypVodnihoToku)[keyof typeof TypVodnihoToku];
/** TypHospodarskyNevyuzivanePl */
export declare const TypHospodarskyNevyuzivanePl: {
    readonly NEPLODNA: 100610;
    readonly MOCAL_RASELINISTE_SLATINA: 100611;
    readonly JINA: 100615;
    readonly NEZJISTENO: 101008;
};
export type TypHospodarskyNevyuzivanePlValue = (typeof TypHospodarskyNevyuzivanePl)[keyof typeof TypHospodarskyNevyuzivanePl];
/** TypZarizeniNeurcenehoTrubko */
export declare const TypZarizeniNeurcenehoTrubko: {
    readonly VZDUSNIK_BEZ_ROZLISENI: 100668;
    readonly KRUHOVY_ZNAK_NA_POVRCHU_POKLOP_BEZ_ROZLISENI_MALY: 100669;
    readonly OVALNY_ZNAK_NA_POVRCHU_POKLOP_BEZ_ROZLISENI_MALY: 100670;
    readonly MERIDLO_VODOMER_PLYNOMER_APOD: 100671;
    readonly VYVODY_OSTATNICH_POTRUBI: 100672;
    readonly ODVZDUSNOVAC_POTRUBI_BEZ_URCENI: 100673;
    readonly SACHTA_BEZ_ROZLISENI_PRULEZNY_KRUHOVY_POKLOP: 100674;
    readonly SACHTA_BEZ_ROZLISENI_PRULEZNY_HRANATY_POKLOP: 100675;
    readonly ARMATURA_NEURCENA: 100676;
    readonly VYTOKOVY_STOJAN_NEURCENY: 100678;
    readonly NEZJISTENO: 100680;
};
export type TypZarizeniNeurcenehoTrubkoValue = (typeof TypZarizeniNeurcenehoTrubko)[keyof typeof TypZarizeniNeurcenehoTrubko];
/** TypBoduKolejnicovehoPasu */
export declare const TypBoduKolejnicovehoPasu: {
    readonly BOD_NEPREVYSENEHO_KOLEJNICOVEHO_PASU: 100772;
    readonly BOD_PREVYSENEHO_KOLEJNICOVEHO_PASU: 100773;
    readonly NEURCENO: 100774;
};
export type TypBoduKolejnicovehoPasuValue = (typeof TypBoduKolejnicovehoPasu)[keyof typeof TypBoduKolejnicovehoPasu];
/** TypVytahu */
export declare const TypVytahu: {
    readonly BEZNY_VYTAH: 101016;
    readonly VYTAH_PRO_IMOBILNI: 101017;
    readonly NEURCENO: 101018;
};
export type TypVytahuValue = (typeof TypVytahu)[keyof typeof TypVytahu];
/** TypVahy */
export declare const TypVahy: {
    readonly KOLEJOVA_VAHA: 100734;
    readonly SILNICNI_VAHA: 100735;
    readonly NEURCENO: 100736;
};
export type TypVahyValue = (typeof TypVahy)[keyof typeof TypVahy];
/** TypPlochyZeleznice */
export declare const TypPlochyZeleznice: {
    readonly PEVNA_JIZDNI_DRAHA: 101019;
    readonly KOLEJOVE_STERKOVE_LOZE: 101020;
    readonly DRAZNI_STEZKA: 101021;
    readonly PREJEZD: 101022;
    readonly PRECHOD: 101023;
    readonly NEZJISTENO: 101024;
    readonly JINY: 101514;
};
export type TypPlochyZelezniceValue = (typeof TypPlochyZeleznice)[keyof typeof TypPlochyZeleznice];
/** SpravceTISZ */
export declare const SpravceTISZ: {
    readonly ST_OR_BRNO: 101038;
    readonly ST_JIHLAVA_OR_BRNO: 101039;
    readonly ST_BLIZE_NEURCENO_OR_BRNO: 101040;
    readonly SSZT_BRNO_OR_BRNO: 101041;
    readonly SSZT_JIHLAVA_OR_BRNO: 101042;
    readonly SSZT_BLIZE_NEURCENO_OR_BRNO: 101043;
    readonly SEE_OR_BRNO: 101044;
    readonly SMT_OR_BRNO: 101045;
    readonly SPS_OR_BRNO: 101046;
    readonly ST_HRADEC_KRALOVE_OR_HRADEC_KRALOVE: 101047;
    readonly ST_PARDUBICE_OR_HRADEC_KRALOVE: 101048;
    readonly ST_LIBEREC_OR_HRADEC_KRALOVE: 101049;
    readonly ST_BLIZE_NEURCENO_OR_HRADEC_KRALOVE: 101050;
    readonly SSZT_HRADEC_KRALOVE_OR_HRADEC_KRALOVE: 101051;
    readonly SSZT_PARDUBICE_OR_HRADEC_KRALOVE: 101052;
    readonly SSZT_BLIZE_NEURCENO_OR_HRADEC_KRALOVE: 101053;
    readonly SEE_HK_OR_HRADEC_KRALOVE: 101054;
    readonly SMT_OR_HRADEC_KRALOVE: 101055;
    readonly SPS_OR_HRADEC_KRALOVE: 101056;
    readonly ST_OSTRAVA_OR_OSTRAVA: 101057;
    readonly ST_OLOMOUC_OR_OSTRAVA: 101058;
    readonly ST_BLIZE_NEURCENO_OR_OSTRAVA: 101059;
    readonly SSZT_OSTRAVA_OR_OSTRAVA: 101060;
    readonly SSZT_OLOMOUC_OR_OSTRAVA: 101061;
    readonly SSZT_BLIZE_NEURCENO_OR_OSTRAVA: 101062;
    readonly SEE_OSTRAVA_OR_OSTRAVA: 101063;
    readonly SEE_OLOMOUC_OR_OSTRAVA: 101064;
    readonly SEE_BLIZE_NEURCENO_OR_OSTRAVA: 101065;
    readonly SMT_OR_OSTRAVA: 101066;
    readonly SPS_OSTRAVA_OR_OSTRAVA: 101067;
    readonly SPS_OLOMOUC_OR_OSTRAVA: 101068;
    readonly SPS_OR_OSTRAVA: 101069;
    readonly ST_PLZEN_OR_PLZEN: 101070;
    readonly ST_CESKE_BUDEJOVICE_OR_PLZEN: 101071;
    readonly ST_BLIZE_NEURCENO_OR_PLZEN: 101072;
    readonly SSZT_PLZEN_OR_PLZEN: 101073;
    readonly SSZT_CESKE_BUDEJOVICE_OR_PLZEN: 101074;
    readonly SSZT_BLIZE_NEURCENO_OR_PLZEN: 101075;
    readonly SEE_PLZEN_OR_PLZEN: 101076;
    readonly SEE_CESKE_BUDEJOVICE_OR_PLZEN: 101077;
    readonly SEE_OR_PLZEN: 101078;
    readonly SMT_OR_PLZEN: 101079;
    readonly SPS_PLZEN_OR_PLZEN: 101080;
    readonly SPS_CESKE_BUDEJOVICE_OR_PLZEN: 101081;
    readonly SPS_OR_PLZEN: 101082;
    readonly ST_PRAHA_ZAPAD_OR_PRAHA: 101083;
    readonly ST_PRAHA_VYCHOD_OR_PRAHA: 101084;
    readonly ST_BLIZE_NEURCENO_OR_PRAHA: 101085;
    readonly SSZT_PRAHA_ZAPAD_OR_PRAHA: 101086;
    readonly SSZT_PRAHA_VYCHOD_OR_PRAHA: 101087;
    readonly SSZT_BLIZE_NEURCENO_OR_PRAHA: 101088;
    readonly SEE_OR_PRAHA: 101089;
    readonly SMT_OR_PRAHA: 101090;
    readonly SPS_OR_PRAHA: 101091;
    readonly ST_USTI_NAD_LABEM_OR_USTI_NAD_LABEM: 101092;
    readonly ST_MOST_OR_USTI_NAD_LABEM: 101093;
    readonly ST_KARLOVY_VARY_OR_USTI_NAD_LABEM: 101094;
    readonly ST_BLIZE_NEURCENO_OR_USTI_NAD_LABEM: 101095;
    readonly SSZT_OBLAST_UL_OR_USTI_NAD_LABEM: 101096;
    readonly SSZT_OBLAST_MOST_OR_USTI_NAD_LABEM: 101097;
    readonly SSZT_OBLAST_KARLOVY_VARY_OR_USTI_NAD_LABEM: 101098;
    readonly SSZT_OR_USTI_NAD_LABEM: 101099;
    readonly SEE_OBLAST_UL_OR_USTI_NAD_LABEM: 101100;
    readonly SEE_OBLAST_MOST_OR_USTI_NAD_LABEM: 101101;
    readonly SEE_OBLAST_KARLOVY_VARY_OR_USTI_NAD_LABEM: 101102;
    readonly SEE_OR_USTI_NAD_LABEM: 101103;
    readonly SMT_OR_USTI_NAD_LABEM: 101104;
    readonly SPS_OR_USTI_NAD_LABEM: 101105;
    readonly NEURCENO: 101129;
    readonly CTD: 101374;
    readonly SZT: 101375;
    readonly CIZI: 101376;
};
export type SpravceTISZValue = (typeof SpravceTISZ)[keyof typeof SpravceTISZ];
/** TypNavestidlaTabulka */
export declare const TypNavestidlaTabulka: {
    readonly OCEKAVEJTE_OTEVRENY_PREJEZD_STIT_OP: 100248;
    readonly NAVESTIDLO_PRO_ELEKTR_PROVOZ: 100249;
    readonly ZKRACENA_VZDALENOST: 100250;
    readonly VYCKAVACI_NAVESTIDLO_BEZ_SVETLA: 100251;
    readonly VZDAL_UPOZORNOV_PRED_PREDV_VJEZD_NAVESTIDEL_1_PRUH: 100253;
    readonly VZDAL_UPOZORNOV_PRED_PREDV_VJEZD_NAVESTIDEL_2_PRUHY: 100254;
    readonly VZDAL_UPOZORNOV_PRED_PREDV_VJEZD_NAVESTIDEL_3_PRUHY: 100255;
    readonly VZDAL_UPOZORNOV_PRED_PREDV_VJEZD_NAVESTIDEL_4_PRUHY: 100256;
    readonly VZDAL_UPOZORNOV_PRED_PREDV_ODDILOVEHO_A_KRYCIHO_NAVEST_1_PRUH: 100257;
    readonly VZDAL_UPOZORNOV_PRED_PREDV_ODD_A_KRYC_NAVEST_2_PRUHY: 100258;
    readonly VZDAL_UPOZORNOV_PRED_PREDV_ODD_A_KRYC_NAVEST_3_PRUHY: 100259;
    readonly VZDAL_UPOZORNOV_PRED_PREDV_ODD_A_KRYC_NAVEST_4_PRUHY: 100260;
    readonly VZDAL_UPOZORNOV_NA_HLAVNI_NAVESTIDLO_1_TROJUHELNIK: 100261;
    readonly VZDAL_UPOZORNOV_NA_HLAVNI_NAVESTIDLO_2_TROJUHELNIK: 100262;
    readonly VZDAL_UPOZORNOV_NA_HLAVNI_NAVESTIDLO_3_TROJUHELNIK: 100263;
    readonly OZNACENI_KOLEJISTE_S_VLOZENYM_NAVESTIDLEM: 100264;
    readonly NAVEST_KONEC_NASTUPISTE: 100265;
    readonly NAVEST_HRANICE_DOPRAVNY_LICHOBEZNIKOVA_TABULKA: 100266;
    readonly NAVEST_VLAK_SE_BLIZI_K_ZASTAVCE_TABULE_PRED_ZASTAVKOU: 100267;
    readonly NAVEST_VYSTRAHA_TABULKA_S_KRIZEM: 100400;
    readonly NAVEST_ZACATEK_OZUBNICE: 100401;
    readonly NAVEST_KONEC_OZUBNICE: 100402;
    readonly NAVEST_SKLONOVNIK_ROVINA: 100403;
    readonly NAVEST_SKLONOVNIK_KLESANI_STOUPANI: 100404;
    readonly NAVEST_MISTO_ZASTAVENI: 100405;
    readonly NAVEST_STANOVISTE_SAM_PREDVESTI_VJ_ODJ_NEBO_CEST_NAV: 100406;
    readonly NAVEST_STANOVISTE_SAM_PREDVESTI_ODDIL_NEBO_KRYCIHO_NAV: 100407;
    readonly NAVEST_HLAVNI_NAVESTIDLO_SLOUCENO_S_PREDVESTI: 100408;
    readonly PREJEZDNIK_BEZ_SVETLA: 100409;
    readonly NAVEST_VLAK_SE_BLIZI_KE_KMENOVEMU_PREJEZDNIKU: 100410;
    readonly NAVEST_ZACNETE_PRACI_PLUHU: 100411;
    readonly NAVEST_ZASTAVTE_PRACI_PLUHU: 100412;
    readonly NAVEST_PREPNETE_KANALOVOU_SKUPINU: 100413;
    readonly NAVEST_PRIPRAVTE_RADIOVE_ZARIZENI_GSM_R_K_REGISTRACI: 100414;
    readonly NAVEST_ZACATEK_RADIOVEHO_SYSTEMU_GSM_R: 100415;
    readonly NAVEST_KONEC_ANALOGOVEHO_VLAKOVEHO_RADIOVEHO_SYSTEMU: 100416;
    readonly NAVEST_KONEC_RADIOVEHO_SYSTEMU_GSM_R: 100417;
    readonly NAVEST_BEZ_PRENOSU_KODU_VZ: 100418;
    readonly HRANICE_PRO_NAVRAT_VOZIDEL_ZE_SIRE_TRATI: 100419;
    readonly NAVEST_ZACATEK_PRACE_POSTRKU: 100420;
    readonly INDIKATOROVA_TABULKA_S_SIPKOU: 100422;
    readonly SMEROVA_SIPKA_LEVA: 100423;
    readonly SMEROVA_SIPKA_ROVNE: 100424;
    readonly NAVEST_ZACATEK_USEKU_S_PRENOSEM_KODU_VZ_PODLE_NAVESTI_SAMOSTATNE_PREDVESTI: 100425;
    readonly NAVEST_ZACATEK_USEKU_S_PRENOSEM_KODU_VZ_PODLE_NAVESTI_HLAVNIHO_NAVESTIDLA: 100426;
    readonly NAVEST_PREDVEST_ZMENY_UROVNE_ETCS: 100427;
    readonly NAVEST_ZMENA_UROVNE_ETCS: 100428;
    readonly NAVEST_VSTUP_DO_OBLASTI_ETCS_UROVNE_2: 100429;
    readonly NAVEST_VYSTUPNI_HRANICE_OBLASTI_ETCS: 100430;
    readonly STOP_ZNACKA_ETCS_SIPKA_LEVA: 100431;
    readonly STOP_ZNACKA_ETCS_SIPKA_PRAVA: 100432;
    readonly STOP_ZNACKA_ETCS_SIPKA_DOLU: 100433;
    readonly LOKALIZACNI_ZNACKA_ETCS_SIPKA_LEVA: 100434;
    readonly LOKALIZACNI_ZNACKA_ETCS_SIPKA_PRAVA: 100435;
    readonly LOKALIZACNI_ZNACKA_ETCS_SIPKA_DOLU: 100436;
    readonly NAVESTIDLO_S_NAV_PREPNETE_VZ_NA_KMITOCET_50HZ: 100437;
    readonly NAVESTIDLO_S_NAV_PREPNETE_VZ_NA_KMITOCET_75HZ: 100438;
    readonly NAVEST_CISLO_DOPRAVNY: 100439;
    readonly VYSTRAZNY_KOLIK: 100440;
    readonly NAVEST_POMALE_JIZDY: 100441;
    readonly NAVEST_OCEKAVEJTE_POMALOU_JIZDU_PREDVESTNI_STIT: 100442;
    readonly UPOZORNOVADLO_NAVESTIDLO_PREDVEST_PREJEZDNIK_NA_OPACNE_STRANE: 100443;
    readonly TABULE_S_CERVENYM_BLESKEM: 100444;
    readonly NEZJISTENO: 100445;
    readonly NAVEST_KONEC_PRACE_POSTRKU: 101149;
    readonly SMEROVA_SIPKA: 101150;
    readonly SMEROVA_SIPKA_PRAVA: 101153;
    readonly HRANICE_OBVODU_NAKLADISTE_NEBO_VLECKY: 101382;
    readonly INDIKATOROVA_TABULKA_S_SIPKOU_LEVA: 101383;
    readonly INDIKATOROVA_TABULKA_S_SIPKOU_PRAVA: 101384;
    readonly NAVESTIDLO_TABULKA_PODLE_ZAHRANICNICH_PREDPISU: 101549;
};
export type TypNavestidlaTabulkaValue = (typeof TypNavestidlaTabulka)[keyof typeof TypNavestidlaTabulka];
/** UmisteniTrasyNeurTrubVed */
export declare const UmisteniTrasyNeurTrubVed: {
    readonly NADZEMNI: 100659;
    readonly PODZEMNI: 100660;
    readonly NEURCENO: 100661;
};
export type UmisteniTrasyNeurTrubVedValue = (typeof UmisteniTrasyNeurTrubVed)[keyof typeof UmisteniTrasyNeurTrubVed];
/** Prubeh */
export declare const Prubeh: {
    readonly JINA_HRANA_PRUBEHU: 101120;
    readonly SPODNI_HRANA_PRUBEHU: 101121;
    readonly NEURCENO: 101122;
};
export type PrubehValue = (typeof Prubeh)[keyof typeof Prubeh];
/** Konstrukce */
export declare const Konstrukce: {
    readonly POJIZDNE: 101124;
    readonly PEVNE: 101125;
    readonly NEURCENO: 101126;
};
export type KonstrukceValue = (typeof Konstrukce)[keyof typeof Konstrukce];
/** TypStanicniku */
export declare const TypStanicniku: {
    readonly ZELEZOBETONOVY_KAMENNY: 101138;
    readonly TABULOVY: 101139;
    readonly NEURCENO: 101140;
    readonly SKOKOVY: 101141;
};
export type TypStanicnikuValue = (typeof TypStanicniku)[keyof typeof TypStanicniku];
/** TypBoduVyhybky */
export declare const TypBoduVyhybky: {
    readonly BOD_ODBOCENI: 100762;
    readonly KRAJNI_BOD: 100764;
    readonly NEVLOZENY_BOD_OSY: 100766;
    readonly NEURCENO: 100767;
};
export type TypBoduVyhybkyValue = (typeof TypBoduVyhybky)[keyof typeof TypBoduVyhybky];
/** UmisteniTrasyNeurKabSite */
export declare const UmisteniTrasyNeurKabSite: {
    readonly NADZEMNI: 100659;
    readonly PODZEMNI: 100660;
    readonly NEURCENO: 100661;
};
export type UmisteniTrasyNeurKabSiteValue = (typeof UmisteniTrasyNeurKabSite)[keyof typeof UmisteniTrasyNeurKabSite];
/** TypZarizeniNeurceneKabeloveSite */
export declare const TypZarizeniNeurceneKabeloveSite: {
    readonly KONTROLNI_MERICI_VYVOD_NAPET_ZEMNI: 101157;
    readonly KONCOVKA_NEURCENA: 101158;
    readonly SPOJ_NEURCENY: 101159;
    readonly KABELOVY_OBJEKT_NEURCENY_SYMBOL_KOLECKO: 101160;
    readonly KABELOVA_SKRIN_BEZ_ROZLISENI: 101161;
    readonly KABELOVA_REZERVA_BEZ_ROZLISENI: 101162;
};
export type TypZarizeniNeurceneKabeloveSiteValue = (typeof TypZarizeniNeurceneKabeloveSite)[keyof typeof TypZarizeniNeurceneKabeloveSite];
/** UmisteniTrasyTeplovodSite */
export declare const UmisteniTrasyTeplovodSite: {
    readonly NADZEMNI: 101377;
    readonly PODZEMNI: 101378;
    readonly NEURCENO: 101379;
};
export type UmisteniTrasyTeplovodSiteValue = (typeof UmisteniTrasyTeplovodSite)[keyof typeof UmisteniTrasyTeplovodSite];
/** KonstrukceJerabu */
export declare const KonstrukceJerabu: {
    readonly POJIZDNY: 101164;
    readonly KOZLIKOVY: 101165;
    readonly NEURCENO: 101166;
};
export type KonstrukceJerabuValue = (typeof KonstrukceJerabu)[keyof typeof KonstrukceJerabu];
/** UzitiSachty */
export declare const UzitiSachty: {
    readonly POTRUBNI: 101154;
    readonly KABELOVA: 101155;
    readonly NEURCENO: 101156;
};
export type UzitiSachtyValue = (typeof UzitiSachty)[keyof typeof UzitiSachty];
/** TypBoduKrizovatky */
export declare const TypBoduKrizovatky: {
    readonly STRED: 101371;
    readonly KRAJNI_BOD: 101372;
    readonly NEURCENO: 101373;
};
export type TypBoduKrizovatkyValue = (typeof TypBoduKrizovatky)[keyof typeof TypBoduKrizovatky];
/** TypSvaru */
export declare const TypSvaru: {
    readonly KRAJNI_BOD_KRIZOVATKY: 101144;
    readonly KRAJNI_BOD_VYHYBKY: 101145;
    readonly KRAJNI_BOD_KRIZOVATKY_I_VYHYBKY: 101146;
    readonly NEURCENO: 101147;
};
export type TypSvaruValue = (typeof TypSvaru)[keyof typeof TypSvaru];
/** TypNeidentLiniovyObjekt */
export declare const TypNeidentLiniovyObjekt: {
    readonly PRIKOP_SE_ZPEVNENYM_DNEM_ZLAB: 101001;
    readonly NEURCENY: 101002;
    readonly REZNA_LINIE: 101142;
    readonly HRANICE_BALICKU_V_KONSOLIDACI: 101173;
    readonly KRATKA_SVISLICE: 101174;
};
export type TypNeidentLiniovyObjektValue = (typeof TypNeidentLiniovyObjekt)[keyof typeof TypNeidentLiniovyObjekt];
/** TypZvlastniPlochy */
export declare const TypZvlastniPlochy: {
    readonly GUMOVY_ABSORBER_HLUKU: 100510;
    readonly GUMOVA_ZABRANA_PROTI_PRECHAZENI: 100511;
    readonly ZABRANA_PROTI_PREJETI_PREJEZDU: 100512;
    readonly NEZJISTENO: 100514;
};
export type TypZvlastniPlochyValue = (typeof TypZvlastniPlochy)[keyof typeof TypZvlastniPlochy];
/** Splitka */
export declare const Splitka: {
    readonly ANO: 101380;
    readonly NE: 101381;
};
export type SplitkaValue = (typeof Splitka)[keyof typeof Splitka];
/** TypMediaPlynovodniSite */
export declare const TypMediaPlynovodniSite: {
    readonly TECHNICKY_PLYN: 100038;
    readonly STLACENY_ZRED_VZDUCH: 100039;
    readonly ZEMNI_PLYN: 101456;
    readonly PROPAN_BUTAN: 101457;
    readonly BIOMETAN: 101458;
    readonly VODIK: 101459;
    readonly OSTATNI_DRUHY_PLYNU: 101460;
    readonly NEZJISTENO: 101461;
};
export type TypMediaPlynovodniSiteValue = (typeof TypMediaPlynovodniSite)[keyof typeof TypMediaPlynovodniSite];
/** TypNastupiste */
export declare const TypNastupiste: {
    readonly SYPANE_BEZ_OBRUBNIKU: 100486;
    readonly S_OBRUBNIKY_JEDNIM_NEBO_OBEMA: 100487;
    readonly S_TVARNICOVYMI_DESKAMI: 100488;
    readonly NEZJISTENO: 101005;
};
export type TypNastupisteValue = (typeof TypNastupiste)[keyof typeof TypNastupiste];
/** TypZarizeniSiteEKSZ */
export declare const TypZarizeniSiteEKSZ: {
    readonly PUPINACNI_SKRINE: 101422;
    readonly MERICI_OBJEKT: 101423;
    readonly KABELOVY_DOPLNEK: 101424;
    readonly KABELOVY_OZNACNIK_MAGNET: 101425;
    readonly KABELOVY_VSTUP_DO_OBJEKTU: 101426;
    readonly INFORMACNI_TABULE_ELEKTRONICKA: 101427;
    readonly KAMERA: 101428;
    readonly ZARIZENI_PRO_OSOBY_SE_ZRAKOVYM_POSTIZENIM: 101429;
    readonly ZARIZENI_PRO_OSOBY_SE_SLUCHOVYM_POSTIZENIM: 101430;
    readonly ANTENA: 101431;
    readonly ZARIZENI_STOZARU_VYSILACI_RETRANSLACNI_STANICE: 101432;
    readonly VENKOVNI_ZVONEK: 101433;
    readonly SIRENA_EPS_EZS: 101434;
    readonly CIDLA_EZS_VENK: 101435;
    readonly TLACITKOVE_HL_EPS_VENK: 101436;
    readonly KABELOVA_REZERVA: 101437;
    readonly KABELOVY_OBJEKT_MALY: 101438;
    readonly MERENI_RADIOAKTIVITY: 101439;
    readonly JISTICI_SOUPRAVA: 101440;
    readonly SPOJKA_DELICI: 101441;
    readonly SPOJKA_IZOLACNI: 101442;
    readonly SPOJKA_NEROZLISENA: 101443;
    readonly SPOJKA_PRUBEZNA: 101444;
    readonly SPOJKA_OPTICKA: 101445;
    readonly UPEVNENI_ZAVESNEHO_KABELU_NA_PODPERU_CIZ_SPRAVCE: 101446;
    readonly EVIDOVANY_LOMOVY_BOD_TRASY: 101447;
    readonly KABELOVA_SACHTA: 101448;
    readonly TELEFONNI_AUTOMAT: 101449;
    readonly NEZJISTENO: 101450;
    readonly ODBOCNA_SPOJKA_HDPE_TRUBEK: 101543;
};
export type TypZarizeniSiteEKSZValue = (typeof TypZarizeniSiteEKSZ)[keyof typeof TypZarizeniSiteEKSZ];
/** TypPodpernehoZarizeniSZNeboJehoPrislusenstvi */
export declare const TypPodpernehoZarizeniSZNeboJehoPrislusenstvi: {
    readonly SOKL: 101451;
    readonly KOTVA_K_TRAKCNI_PODPERE: 101452;
    readonly KOTVA_KE_STOZARU_MIMO_TRAKCNI_VEDENI: 101453;
    readonly ANTENA: 101454;
    readonly NEZJISTENO: 101455;
};
export type TypPodpernehoZarizeniSZNeboJehoPrislusenstviValue = (typeof TypPodpernehoZarizeniSZNeboJehoPrislusenstvi)[keyof typeof TypPodpernehoZarizeniSZNeboJehoPrislusenstvi];
/** PolohaStavecihoZarizeni */
export declare const PolohaStavecihoZarizeni: {
    readonly VLEVO: 101463;
    readonly VPRAVO: 101464;
    readonly NEZJISTENO: 101465;
};
export type PolohaStavecihoZarizeniValue = (typeof PolohaStavecihoZarizeni)[keyof typeof PolohaStavecihoZarizeni];
/** ZdrojDatTI */
export declare const ZdrojDatTI: {
    readonly KONSOLIDACE_UZM_VZ2: 101470;
    readonly KONSOLIDACE_NOVEHO_MAPOVANI_Z_VZ1_VZ2: 101471;
    readonly VYHLEDANI_A_ZAMERENI_SITI_VZ1: 101472;
    readonly RADIORELEOVE_SPOJE_VZ2: 101473;
    readonly ELEKTRICKE_TRAKCNI_VEDENI_VZ2: 101474;
    readonly PREVOD_DIGITALNI_DOKUMENTACE_CAD_VZ2: 101475;
    readonly DIGITALIZACE_ANALOGOVE_DOKUMENTACE_VZ2: 101476;
    readonly PREVOD_DAT_GIS_DB_TELCO_VZ2: 101477;
    readonly KONSOLIDACE_AKTUALIZACNICH_DAT_DSPS_VZ2: 101478;
    readonly NOVE_MERENI_ZXML: 101479;
    readonly DOPLNENO_PRI_HARMONIZACI_VZ2: 101480;
    readonly DOPLNENO_PRI_HARMONIZACI_SPRAVCE_TI: 101481;
    readonly DATA_VZNIKLA_V_KOMPONENTE_SPRAVA_TI_IS: 101482;
    readonly DATA_VZNIKLA_V_KOMPONENTE_SPRAVA_TI_TELCO_SAZ: 101483;
    readonly DATA_VZNIKLA_V_JINEM_IS: 101484;
    readonly NEURCENY_PUVOD_DAT: 101485;
};
export type ZdrojDatTIValue = (typeof ZdrojDatTI)[keyof typeof ZdrojDatTI];
/** StatusHarmonizaceDatTI */
export declare const StatusHarmonizaceDatTI: {
    readonly NAHRANA_DATA_BEZ_VYCISTENI_DUPLICIT_DIRTY: 101486;
    readonly VYCISTENA_NAHRANA_DATA_CLEAN: 101487;
    readonly AUTOMATICKY_SCHVALENA_DATA_CLEAN: 101488;
    readonly DATA_SCHVALENA_SPRAVCEM_TI_CLEAN: 101489;
    readonly CHYBNA_DATA_VRACENO_K_OPRAVE_GEODETUM: 101490;
    readonly CHYBNA_DATA_DATA_K_REVIZI_SPRAVCE_TI: 101491;
    readonly DATA_ZNEPLATNENA_PRI_HARMONIZACI_GIS: 101492;
    readonly DATA_ZNEPLATNENA_PRI_HARMONIZACI_SPRAVCE_TI: 101493;
};
export type StatusHarmonizaceDatTIValue = (typeof StatusHarmonizaceDatTI)[keyof typeof StatusHarmonizaceDatTI];
/** ZdrojDatDI */
export declare const ZdrojDatDI: {
    readonly KONSOLIDACE_UZM_VZ2: 101494;
    readonly KONSOLIDACE_NOVEHO_MAPOVANI_Z_VZ1_VZ2: 101495;
    readonly PRVOTNI_MIGRACE_Z_TPI: 101496;
    readonly PRVOTNI_MIGRACE_OBVODU_DRAHY: 101497;
    readonly DATA_VYTVORENA_V_KDS: 101498;
    readonly DATA_VZNIKLA_V_JINEM_IS: 101499;
    readonly KOMPONENTA_SPRAVA_DI: 101500;
    readonly DATA_POZEMNICH_KOMUNIKACI_OD_SPRAVCE_DI_SZ: 101501;
    readonly NEURCENY_PUVOD_DAT: 101502;
    readonly NOVE_MERENI_ZXML: 101513;
};
export type ZdrojDatDIValue = (typeof ZdrojDatDI)[keyof typeof ZdrojDatDI];
/** SynchronizaceDatDoISDTMKraju */
export declare const SynchronizaceDatDoISDTMKraju: {
    readonly DATA_ZPLATNENA_V_IS_DTMZ_V_PROCESECH_DTI_I_CLEAN: 101503;
    readonly DATA_ZPLATNENA_V_IS_DTMZ_V_MIGRACNIM_RIZENI_Z_KONSOLIDACE: 101504;
    readonly DATA_ZPLATNENA_V_IS_DTMZ_V_PROCESECH_DTI_II_CLEAN: 101505;
    readonly DATA_ZPLATNENA_V_IS_DTMZ_V_PROCESECH_DTI_III_DIRTY: 101506;
    readonly NEVYUZITA_HODNOTA_I: 101507;
    readonly NEVYUZITA_HODNOTA_II: 101508;
    readonly DATA_PRIPRAVENA_V_EXTERNIM_SW: 101509;
    readonly DATA_ZPLATNENA_V_IS_DTM_KRAJE: 101510;
};
export type SynchronizaceDatDoISDTMKrajuValue = (typeof SynchronizaceDatDoISDTMKraju)[keyof typeof SynchronizaceDatDoISDTMKraju];
/** SpravceDI */
export declare const SpravceDI: {
    readonly SZ: 101515;
    readonly CIZI: 101516;
    readonly NEURCENO: 101517;
};
export type SpravceDIValue = (typeof SpravceDI)[keyof typeof SpravceDI];
/** PolohaIzolovanehoStykuVeSmeruStaniceni */
export declare const PolohaIzolovanehoStykuVeSmeruStaniceni: {
    readonly OBOUSTRANNY: 101527;
    readonly VPRAVO: 101528;
    readonly VLEVO: 101529;
    readonly NEZJISTENO: 101530;
};
export type PolohaIzolovanehoStykuVeSmeruStaniceniValue = (typeof PolohaIzolovanehoStykuVeSmeruStaniceni)[keyof typeof PolohaIzolovanehoStykuVeSmeruStaniceni];
/** Ozubnice */
export declare const Ozubnice: {
    readonly ANO: 101532;
    readonly NE: 101533;
};
export type OzubniceValue = (typeof Ozubnice)[keyof typeof Ozubnice];
/** TypTechnologickeKonstrukce */
export declare const TypTechnologickeKonstrukce: {
    readonly PRIHRADOVA_KONSTRUKCE_OCELOVE_STAVBY: 100446;
    readonly NAVESTNI_KONZOLA: 100447;
    readonly NAVESTNI_KRAKOREC: 100448;
    readonly NAVESTNI_LAVKA: 100449;
    readonly NEZJISTENO: 100450;
    readonly DOPRAVNIK_NADZEMNI: 101000;
    readonly DOPRAVNIK_POZEMNI: 101127;
    readonly DOPRAVNIK_PODZEMNI: 101128;
};
export type TypTechnologickeKonstrukceValue = (typeof TypTechnologickeKonstrukce)[keyof typeof TypTechnologickeKonstrukce];
//# sourceMappingURL=enums.d.ts.map