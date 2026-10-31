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
/** DruhDopravyLanoveDrahy */
export declare const DruhDopravyLanoveDrahy: {
    readonly NAKLADNI: 1;
    readonly OSOBNI: 2;
    readonly NEZJISTENO: 99;
};
export type DruhDopravyLanoveDrahyValue = (typeof DruhDopravyLanoveDrahy)[keyof typeof DruhDopravyLanoveDrahy];
/** DruhElektrickehoProudu */
export declare const DruhElektrickehoProudu: {
    readonly AC: 1;
    readonly DC: 2;
    readonly AC_DC: 3;
    readonly NEZJISTENO: 400;
};
export type DruhElektrickehoProuduValue = (typeof DruhElektrickehoProudu)[keyof typeof DruhElektrickehoProudu];
/** DruhElektrickehoProuduTrakcnihoVedeni */
export declare const DruhElektrickehoProuduTrakcnihoVedeni: {
    readonly AC: 1;
    readonly DC: 2;
    readonly NEZJISTENO: 99;
};
export type DruhElektrickehoProuduTrakcnihoVedeniValue = (typeof DruhElektrickehoProuduTrakcnihoVedeni)[keyof typeof DruhElektrickehoProuduTrakcnihoVedeni];
/** DruhHromadneDopravy */
export declare const DruhHromadneDopravy: {
    readonly AUTOBUSOVA: 1;
    readonly TROLEJBUSOVA: 2;
    readonly TRAMVAJOVA: 3;
    readonly LANOVA: 4;
    readonly PRIVOZ: 5;
    readonly SDILENA: 6;
};
export type DruhHromadneDopravyValue = (typeof DruhHromadneDopravy)[keyof typeof DruhHromadneDopravy];
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
/** DruhPlotu */
export declare const DruhPlotu: {
    readonly DREVENY: 1;
    readonly DRATENY: 2;
    readonly KOVOVY: 3;
    readonly ZDENY: 4;
    readonly ZIVY: 5;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
    readonly DREVENY_JEDNOSTRANNE_VLASTNICTVI: 200;
    readonly DRATENY_JEDNOSTRANNE_VLASTNICTVI: 201;
    readonly KOVOVY_JEDNOSTRANNE_VLASTNICTVI: 202;
    readonly ZDENY_JEDNOSTRANNE_VLASTNICTVI: 203;
    readonly ZIVY_JEDNOSTRANNE_VLASTNICTVI: 204;
};
export type DruhPlotuValue = (typeof DruhPlotu)[keyof typeof DruhPlotu];
/** DruhSchodiste */
export declare const DruhSchodiste: {
    readonly VICESTUPNOVE: 1;
    readonly PLATFORMA_S_JEDNIM_STUPNEM: 2;
    readonly NEZJISTENO: 99;
    readonly NAJEZDOVA_RAMPA: 200;
    readonly POJIZDNE_SCHODISTE: 201;
    readonly JINY: 402;
};
export type DruhSchodisteValue = (typeof DruhSchodiste)[keyof typeof DruhSchodiste];
/** DruhStaniceElektrickeSite */
export declare const DruhStaniceElektrickeSite: {
    readonly KOMPAKTNI_A_ZDENA: 1;
    readonly STOZAROVA: 2;
    readonly VEZOVA: 3;
    readonly VENKOVNI: 4;
    readonly VESTAVENA: 5;
    readonly NEZJISTENO: 99;
    readonly NEURCENO: 401;
    readonly JINY: 402;
};
export type DruhStaniceElektrickeSiteValue = (typeof DruhStaniceElektrickeSite)[keyof typeof DruhStaniceElektrickeSite];
/** DruhStokoveSite */
export declare const DruhStokoveSite: {
    readonly GRAVITACNI: 1;
    readonly TLAKOVA: 2;
    readonly PODTLAKOVA: 3;
    readonly NEZJISTENO: 99;
    readonly NEURCENO: 401;
};
export type DruhStokoveSiteValue = (typeof DruhStokoveSite)[keyof typeof DruhStokoveSite];
/** ElektrizaceZeleznicniTrate */
export declare const ElektrizaceZeleznicniTrate: {
    readonly ELEKTRIZOVANA: 1;
    readonly NEELEKTRIZOVANA: 2;
    readonly NEZJISTENO: 99;
};
export type ElektrizaceZeleznicniTrateValue = (typeof ElektrizaceZeleznicniTrate)[keyof typeof ElektrizaceZeleznicniTrate];
/** IzolaceVenkovnihoVedeni */
export declare const IzolaceVenkovnihoVedeni: {
    readonly ZAKLADNI: 1;
    readonly BEZ_IZOLACE: 2;
    readonly NEZJISTENO: 99;
};
export type IzolaceVenkovnihoVedeniValue = (typeof IzolaceVenkovnihoVedeni)[keyof typeof IzolaceVenkovnihoVedeni];
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
/** CKZKategorieVodnihoDilaZHlediskaTBD */
export declare const CKZKategorieVodnihoDilaZHlediskaTBD: {
    readonly I_KATEGORIE: 500;
    readonly II_KATEGORIE: 501;
    readonly III_KATEGORIE: 502;
    readonly IV_KATEGORIE: 503;
    readonly NEZJISTENO: 900;
};
export type CKZKategorieVodnihoDilaZHlediskaTBDValue = (typeof CKZKategorieVodnihoDilaZHlediskaTBD)[keyof typeof CKZKategorieVodnihoDilaZHlediskaTBD];
/** KategorieZeleznicniTrate */
export declare const KategorieZeleznicniTrate: {
    readonly CELOSTATNI: 1;
    readonly REGIONALNI: 2;
    readonly MISTNI: 3;
    readonly VLECKA: 4;
    readonly ZKUSEBNI: 5;
    readonly JINA: 98;
    readonly NEZJISTENO_NEURCENO: 99;
    readonly NEURCENO: 401;
};
export type KategorieZeleznicniTrateValue = (typeof KategorieZeleznicniTrate)[keyof typeof KategorieZeleznicniTrate];
/** MaterialTrasySiteEK */
export declare const MaterialTrasySiteEK: {
    readonly METALICKA: 1;
    readonly OPTICKA: 2;
    readonly METALICKA_OPTICKA: 3;
    readonly NEZJISTENO: 99;
    readonly KZL_KOMBINOVANE_ZEMNICI_LANO: 200;
    readonly HDPE_NEOBSAZENA: 201;
    readonly SVAZEK_MIKROTRUBICEK_NEOBSAZENY: 202;
    readonly NEURCENO: 401;
};
export type MaterialTrasySiteEKValue = (typeof MaterialTrasySiteEK)[keyof typeof MaterialTrasySiteEK];
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
/** PovoleniNakladaniNebezpecnymOdpadem */
export declare const PovoleniNakladaniNebezpecnymOdpadem: {
    readonly POVOLENO: 1;
    readonly BEZ_POVOLENI: 2;
    readonly NEZJISTENO: 99;
};
export type PovoleniNakladaniNebezpecnymOdpademValue = (typeof PovoleniNakladaniNebezpecnymOdpadem)[keyof typeof PovoleniNakladaniNebezpecnymOdpadem];
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
    readonly BETONOVA_DLAZBA: 200;
    readonly BETONOVE_PANELY: 201;
    readonly DLAZBA_30X30: 202;
    readonly DLAZBA_50X50: 203;
    readonly DLAZBA_SLEPECKA: 204;
    readonly DREVO: 205;
    readonly GUMA: 206;
    readonly KOV: 207;
    readonly PANELY: 208;
    readonly PISEK: 209;
    readonly STERK: 210;
    readonly TRAVA: 211;
    readonly VEGETACE: 212;
    readonly ZAMKOVA_DLAZBA: 213;
    readonly ZATRAVNOVACI_DLAZBA: 214;
    readonly ZULOVA_DLAZBA: 215;
    readonly NEURCENO: 401;
    readonly JINY: 402;
};
export type PrevazujiciPovrchValue = (typeof PrevazujiciPovrch)[keyof typeof PrevazujiciPovrch];
/** RozchodKoleji */
export declare const RozchodKoleji: {
    readonly VALUE_1: 1;
    readonly VALUE_2: 2;
    readonly SPLITKA: 3;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type RozchodKolejiValue = (typeof RozchodKoleji)[keyof typeof RozchodKoleji];
/** StavObjektu */
export declare const StavObjektu: {
    readonly PROVOZOVANO: 1;
    readonly NEPROVOZOVANO: 2;
    readonly NEZJISTENO: 99;
};
export type StavObjektuValue = (typeof StavObjektu)[keyof typeof StavObjektu];
/** StavSkladkyOdpadu */
export declare const StavSkladkyOdpadu: {
    readonly V_PROVOZU: 1;
    readonly UZAVRENO: 2;
    readonly NEZJISTENO: 99;
};
export type StavSkladkyOdpaduValue = (typeof StavSkladkyOdpadu)[keyof typeof StavSkladkyOdpadu];
/** StavTrasySiteTI */
export declare const StavTrasySiteTI: {
    readonly PROVOZOVANO: 1;
    readonly NEPROVOZOVANO: 2;
    readonly ZRUSENO: 3;
    readonly NEZJISTENO: 99;
    readonly REZERVA_PRAZDNA_HDPE: 200;
};
export type StavTrasySiteTIValue = (typeof StavTrasySiteTI)[keyof typeof StavTrasySiteTI];
/** TlakovaHladinaPlynovodniSite */
export declare const TlakovaHladinaPlynovodniSite: {
    readonly NTL: 1;
    readonly STL: 2;
    readonly VTL: 3;
    readonly VVTL: 4;
    readonly NEZJISTENO_NEURCENO: 99;
    readonly TECHNICKY_PLYN: 200;
    readonly STLACENY_VZDUCH: 201;
    readonly OCHOZ_NA_PLYNOVODU_JEDNOSTRANNY: 202;
    readonly OCHOZ_NA_PLYNOVODU_OBOUSTRANNY: 203;
};
export type TlakovaHladinaPlynovodniSiteValue = (typeof TlakovaHladinaPlynovodniSite)[keyof typeof TlakovaHladinaPlynovodniSite];
/** TridaDopravneVyznamneVodniCesty */
export declare const TridaDopravneVyznamneVodniCesty: {
    readonly MISTNIHO_VYZNAMU_TRIDY_0: 1;
    readonly MISTNIHO_VYZNAMU_TRIDY_I: 2;
    readonly MEZINARODNIHO_VYZNAMU_TRIDY_IV: 3;
    readonly MEZINARODNIHO_VYZNAMU_TRIDY_VA: 4;
    readonly MEZINARODNIHO_VYZNAMU_TRIDY_VB: 5;
    readonly NEZJISTENO: 400;
    readonly NEURCENO: 401;
};
export type TridaDopravneVyznamneVodniCestyValue = (typeof TridaDopravneVyznamneVodniCesty)[keyof typeof TridaDopravneVyznamneVodniCesty];
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
/** TypDatoveSady */
export declare const TypDatoveSady: {
    readonly ZPS_PODROBNE_BODY: 1;
    readonly ZPS_ODVOZENE_PLOSNE_TYPY_OBJEKTU: 2;
    readonly ZPS_S_VYJIMKOU_PODROBNYCH_BODU_A_ODVOZENYCH_PLOSNYCH_TYPU_OBJEKTU_A_VCETNE_KONSTRUKCNICH_OBJEKTU: 3;
    readonly DOPROVODNE_INFORMACE_K_UZEMI: 4;
    readonly TI_VEREJNA_I_NEVEREJNA_CAST_KOMPLETNI_VYPIS_A_DOPROVODNE_INFORMACE_K_UZEMI: 6;
    readonly DI_VEREJNA_CAST_A_DOPROVODNE_INFORMACE_K_UZEMI: 7;
    readonly DI_VEREJNA_I_NEVEREJNA_CAST_KOMPLETNI_VYPIS_A_DOPROVODNE_INFORMACE_K_UZEMI: 8;
    readonly ZPS_KOMPLETNI_VYPIS_A_DOPROVODNE_INFORMACE_K_UZEMI_POUZE_PRO_AD_HOC_VYDEJ: 9;
    readonly VYDEJ_VLASTNICH_DAT_VSP: 10;
    readonly PSPI_VEREJNA_CAST_A_DOPROVODNE_INFORMACE_K_UZEMI: 11;
    readonly PSPI_VEREJNA_I_NEVEREJNA_CAST_KOMPLETNI_VYPIS_A_DOPROVODNE_INFORMACE_K_UZEMI: 12;
    readonly PSPI_VYDEJ_VLASTNICH_DAT_BS: 13;
    readonly NEZJISTENO: 400;
};
export type TypDatoveSadyValue = (typeof TypDatoveSady)[keyof typeof TypDatoveSady];
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
    readonly NEURCENO: 401;
};
export type TypDopravniStavbyNeboPlochyValue = (typeof TypDopravniStavbyNeboPlochy)[keyof typeof TypDopravniStavbyNeboPlochy];
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
/** TypDrobneSakralniStavby */
export declare const TypDrobneSakralniStavby: {
    readonly KRIZ: 1;
    readonly BOZI_MUKA: 2;
    readonly KAPLICKA: 3;
    readonly NEZJISTENO: 99;
};
export type TypDrobneSakralniStavbyValue = (typeof TypDrobneSakralniStavby)[keyof typeof TypDrobneSakralniStavby];
/** TypHydrantuVodovodniSite */
export declare const TypHydrantuVodovodniSite: {
    readonly GARANTOVANY: 1;
    readonly OBECNY: 2;
    readonly NEZJISTENO: 99;
};
export type TypHydrantuVodovodniSiteValue = (typeof TypHydrantuVodovodniSite)[keyof typeof TypHydrantuVodovodniSite];
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
    readonly ZARIZENI_STAVEB: 200;
    readonly KOLEKTOR: 201;
    readonly SDILENA_STAVBA: 202;
    readonly PROTIKOROZNI_OCHRANA: 203;
    readonly NEURCENO: 401;
};
export type TypInzenyrskeSiteValue = (typeof TypInzenyrskeSite)[keyof typeof TypInzenyrskeSite];
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
/** TypJadernehoZarizeni */
export declare const TypJadernehoZarizeni: {
    readonly REAKTOR: 1;
    readonly SKLAD: 2;
    readonly ULOZISTE: 3;
    readonly JINE: 98;
};
export type TypJadernehoZarizeniValue = (typeof TypJadernehoZarizeni)[keyof typeof TypJadernehoZarizeni];
/** TypJinehoZarizeniStavebTI */
export declare const TypJinehoZarizeniStavebTI: {
    readonly HLASIC_IZS: 1;
    readonly REPRODUKTOR: 2;
    readonly VENKOVNI_HODINY: 3;
    readonly SVITIDLO: 4;
    readonly OSVETLENI: 5;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type TypJinehoZarizeniStavebTIValue = (typeof TypJinehoZarizeniStavebTI)[keyof typeof TypJinehoZarizeniStavebTI];
/** TypPrubehuJineTechnologickeStavbyTI */
export declare const TypPrubehuJineTechnologickeStavbyTI: {
    readonly PREVES_TRAKCNIHO_TROLEJOVEHO_VEDENI_ZELEZNICNI_DRAHY: 1;
    readonly PREVES_TRAKCNIHO_TROLEJOVEHO_VEDENI_JINE_DRAHY: 2;
    readonly JINY: 98;
};
export type TypPrubehuJineTechnologickeStavbyTIValue = (typeof TypPrubehuJineTechnologickeStavbyTI)[keyof typeof TypPrubehuJineTechnologickeStavbyTI];
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
/** TypMediaVodovodniSite */
export declare const TypMediaVodovodniSite: {
    readonly VODA_PITNA: 1;
    readonly VODA_SUROVA: 2;
    readonly VODA_UZITKOVA: 3;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type TypMediaVodovodniSiteValue = (typeof TypMediaVodovodniSite)[keyof typeof TypMediaVodovodniSite];
/** TypMostu */
export declare const TypMostu: {
    readonly SILNICNI: 1;
    readonly ZELEZNICNI: 2;
    readonly PRO_VODNI_DOPRAVU: 3;
    readonly LAVKA_PRO_PESI_A_CYKLISTY: 4;
    readonly PRECHOD_PRO_VOLNE_ZIJICI_ZIVOCICHY: 5;
    readonly SDRUZENY: 6;
    readonly NEZJISTENO: 99;
    readonly JINY: 402;
};
export type TypMostuValue = (typeof TypMostu)[keyof typeof TypMostu];
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
/** TypNadrzeBezVzdouvacihoObjektu */
export declare const TypNadrzeBezVzdouvacihoObjektu: {
    readonly RETENCNI: 1;
    readonly DESTOVA: 2;
    readonly USAZOVACI: 3;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
    readonly VEREJNY_BAZEN: 200;
    readonly NEURCENO: 401;
};
export type TypNadrzeBezVzdouvacihoObjektuValue = (typeof TypNadrzeBezVzdouvacihoObjektu)[keyof typeof TypNadrzeBezVzdouvacihoObjektu];
/** TypNadrzeZdrzeSeVzdouvacimObjektem */
export declare const TypNadrzeZdrzeSeVzdouvacimObjektem: {
    readonly VODNI_NADRZ: 1;
    readonly VYROVNAVACI_NADRZ: 6;
    readonly JEZOVA_ZDRZ: 7;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
    readonly RETENCNI_NADRZ: 200;
};
export type TypNadrzeZdrzeSeVzdouvacimObjektemValue = (typeof TypNadrzeZdrzeSeVzdouvacimObjektem)[keyof typeof TypNadrzeZdrzeSeVzdouvacimObjektem];
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
    readonly MYTNA_BRANA: 200;
    readonly POLOPORTAL: 201;
    readonly PORTAL: 202;
    readonly TUNELOVY_PORTAL: 203;
};
export type TypNosiceTechnickehoZarizeniValue = (typeof TypNosiceTechnickehoZarizeni)[keyof typeof TypNosiceTechnickehoZarizeni];
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
/** TypObjektuOdpadovehoHospodarstviPS */
export declare const TypObjektuOdpadovehoHospodarstviPS: {
    readonly SKLADKA_ODPADU: 1;
    readonly SPALOVNA: 2;
    readonly JINE_ZARIZENI_NA_ODSTRANOVANI_VYUZIVANI_NEBO_SBER_ODPADU: 3;
    readonly ODKALISTE: 4;
    readonly NEURCENO: 99;
};
export type TypObjektuOdpadovehoHospodarstviPSValue = (typeof TypObjektuOdpadovehoHospodarstviPS)[keyof typeof TypObjektuOdpadovehoHospodarstviPS];
/** TypObjektuOdpadovehoHospodarstviZameru */
export declare const TypObjektuOdpadovehoHospodarstviZameru: {
    readonly SKLADKA_ODPADU: 1;
    readonly SPALOVNA: 2;
    readonly JINE_ZARIZENI_NA_ODSTRANOVANI_VYUZIVANI_NEBO_SBER_ODPADU: 3;
    readonly ODKALISTE: 4;
    readonly NEURCENO: 99;
};
export type TypObjektuOdpadovehoHospodarstviZameruValue = (typeof TypObjektuOdpadovehoHospodarstviZameru)[keyof typeof TypObjektuOdpadovehoHospodarstviZameru];
/** TypObjektuOdvodneniStavby */
export declare const TypObjektuOdvodneniStavby: {
    readonly LINIOVY_ODVODNOVAC: 1;
    readonly VPUST_KANALIZACNI_SITE: 2;
    readonly ODTOKOVE_POTRUBI: 3;
    readonly VSAKOVACI_JIMKA: 4;
    readonly JINY: 98;
    readonly BETONOVY_ODVODNOVACI_ZLAB: 200;
    readonly PRIKOP: 201;
    readonly NEZJISTENO: 400;
    readonly NEURCENO: 401;
};
export type TypObjektuOdvodneniStavbyValue = (typeof TypObjektuOdvodneniStavby)[keyof typeof TypObjektuOdvodneniStavby];
/** TypObjektuPlynovodniSitePS */
export declare const TypObjektuPlynovodniSitePS: {
    readonly VYROBNA_PLYNU: 1;
    readonly STANICE: 2;
    readonly ZASOBNIK_PLYNU: 3;
    readonly TRASA_PLYNOVODNI_SITE: 4;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypObjektuPlynovodniSitePSValue = (typeof TypObjektuPlynovodniSitePS)[keyof typeof TypObjektuPlynovodniSitePS];
/** TypObjektuPlynovodniSiteZameru */
export declare const TypObjektuPlynovodniSiteZameru: {
    readonly VYROBNA_PLYNU: 1;
    readonly STANICE: 2;
    readonly ZASOBNIK_PLYNU: 3;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuPlynovodniSiteZameruValue = (typeof TypObjektuPlynovodniSiteZameru)[keyof typeof TypObjektuPlynovodniSiteZameru];
/** TypObjektuSilnicniDopravyPS */
export declare const TypObjektuSilnicniDopravyPS: {
    readonly DALNICE: 1;
    readonly SILNICE: 2;
    readonly MISTNI_KOMUNIKACE: 3;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuSilnicniDopravyPSValue = (typeof TypObjektuSilnicniDopravyPS)[keyof typeof TypObjektuSilnicniDopravyPS];
/** TypObjektuSilnicniDopravyZameru */
export declare const TypObjektuSilnicniDopravyZameru: {
    readonly DALNICE: 1;
    readonly SILNICE: 2;
    readonly MISTNI_KOMUNIKACE: 3;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuSilnicniDopravyZameruValue = (typeof TypObjektuSilnicniDopravyZameru)[keyof typeof TypObjektuSilnicniDopravyZameru];
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
    readonly NEZJISTENO: 400;
    readonly NEURCENO: 401;
};
export type TypObjektuStokoveSiteValue = (typeof TypObjektuStokoveSite)[keyof typeof TypObjektuStokoveSite];
/** TypObjektuStokoveSitePS */
export declare const TypObjektuStokoveSitePS: {
    readonly CISTIRNA_ODPADNICH_VOD: 1;
    readonly TRASA_STOKOVE_SITE: 2;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuStokoveSitePSValue = (typeof TypObjektuStokoveSitePS)[keyof typeof TypObjektuStokoveSitePS];
/** TypObjektuStokoveSiteZameru */
export declare const TypObjektuStokoveSiteZameru: {
    readonly CISTIRNA_ODPADNICH_VOD: 1;
    readonly JINY: 98;
    readonly NEURCENO: 99;
};
export type TypObjektuStokoveSiteZameruValue = (typeof TypObjektuStokoveSiteZameru)[keyof typeof TypObjektuStokoveSiteZameru];
/** TypObjektuTeplovodniSitePS */
export declare const TypObjektuTeplovodniSitePS: {
    readonly TEPLARNA: 1;
    readonly KOTELNA: 2;
    readonly TRASA_TEPLOVODNI_SITE: 3;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypObjektuTeplovodniSitePSValue = (typeof TypObjektuTeplovodniSitePS)[keyof typeof TypObjektuTeplovodniSitePS];
/** TypObjektuVodovodniSite */
export declare const TypObjektuVodovodniSite: {
    readonly VODOJEM_VEZOVY: 1;
    readonly VODOJEM_ZEMNI: 2;
    readonly UPRAVNA_VODY: 3;
    readonly CERPACI_STANICE: 4;
    readonly SACHTA_VODOVODNI_SITE_BEZ_ROZLISENI: 5;
    readonly PITKO: 6;
    readonly JINY: 98;
    readonly NEZJISTENO: 400;
    readonly NEURCENO: 401;
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
/** TypObjektuZarizeniOchranaPredPovodnemi */
export declare const TypObjektuZarizeniOchranaPredPovodnemi: {
    readonly HRADITKO_HRADIDLOVE_SACHTY: 1;
    readonly HRAZENI_UZAVER_VRATA: 2;
    readonly PATKA_PROTIPOVODNOVE_STENY: 3;
    readonly ODLEHCOVACI_KORYTO: 4;
    readonly JINY: 98;
    readonly NEZJISTENO: 400;
};
export type TypObjektuZarizeniOchranaPredPovodnemiValue = (typeof TypObjektuZarizeniOchranaPredPovodnemi)[keyof typeof TypObjektuZarizeniOchranaPredPovodnemi];
/** TypOdpadu */
export declare const TypOdpadu: {
    readonly OSTATNI_ODPAD: 1;
    readonly NEBEZPECNY_ODPAD: 2;
    readonly NEZJISTENO: 99;
    readonly JINY: 402;
};
export type TypOdpaduValue = (typeof TypOdpadu)[keyof typeof TypOdpadu];
/** TypOPDrazniStavby */
export declare const TypOPDrazniStavby: {
    readonly OP_ZELEZNICNI_TRATE: 1;
    readonly OP_TRAMVAJOVE_DRAHY: 2;
    readonly OP_POZEMNI_LANOVE_DRAHY: 3;
    readonly OP_SPECIALNI_DRAHY: 4;
    readonly OP_VISUTE_LANOVE_DRAHY: 5;
    readonly NEZJISTENO: 400;
};
export type TypOPDrazniStavbyValue = (typeof TypOPDrazniStavby)[keyof typeof TypOPDrazniStavby];
/** TypOPLeteckychZabezpecovacichZarizeni */
export declare const TypOPLeteckychZabezpecovacichZarizeni: {
    readonly OP_PREHLEDOVEHO_SYSTEMU: 1;
    readonly OP_RADIONAVIGACNIHO_ZARIZENI: 2;
    readonly OP_RADIOKOMUNIKACNIHO_SYSTEMU: 3;
    readonly OP_SVETELNEHO_ZARIZENI: 4;
    readonly OP_PODZEMNI_LETECKE_STAVBY: 5;
    readonly NEZJISTENO: 400;
};
export type TypOPLeteckychZabezpecovacichZarizeniValue = (typeof TypOPLeteckychZabezpecovacichZarizeni)[keyof typeof TypOPLeteckychZabezpecovacichZarizeni];
/** TypOPLetiste */
export declare const TypOPLetiste: {
    readonly OP_SE_ZAKAZEM_STAVEB: 1;
    readonly OP_S_VYSKOVYM_OMEZENIM_STAVEB: 2;
    readonly OP_PROTI_NEBEZPECNYM_A_KLAMAVYM_SVETLUM: 3;
    readonly OP_SE_ZAKAZEM_LASEROVYCH_ZARIZENI: 4;
    readonly OP_S_OMEZENIM_STAVEB_VZDUSNYCH_VEDENI_VN_A_VVN: 5;
    readonly OP_HLUKOVE: 6;
    readonly OP_ORNITOLOGICKE: 7;
    readonly NEZJISTENO: 400;
};
export type TypOPLetisteValue = (typeof TypOPLetiste)[keyof typeof TypOPLetiste];
/** TypOPPozemniKomunikace */
export declare const TypOPPozemniKomunikace: {
    readonly OP_DALNICE: 1;
    readonly OP_SILNICE_I_TRIDY: 3;
    readonly OP_SILNICE_II_TRIDY: 4;
    readonly OP_SILNICE_III_TRIDY: 5;
    readonly OP_MISTNI_KOMUNIKACE_I_TRIDY: 6;
    readonly OP_MISTNI_KOMUNIKACE_II_TRIDY: 7;
    readonly NEZJISTENO: 400;
};
export type TypOPPozemniKomunikaceValue = (typeof TypOPPozemniKomunikace)[keyof typeof TypOPPozemniKomunikace];
/** TypOPSiteEK */
export declare const TypOPSiteEK: {
    readonly OP_RADIOVEHO_ZARIZENI_A_RADIOVEHO_SMEROVEHO_SPOJE: 1;
    readonly OP_KOMUNIKACNIHO_VEDENI: 2;
    readonly NEZJISTENO: 99;
};
export type TypOPSiteEKValue = (typeof TypOPSiteEK)[keyof typeof TypOPSiteEK];
/** TypOPSiteProduktovodu */
export declare const TypOPSiteProduktovodu: {
    readonly OP_PRODUKTOVODU: 1;
    readonly OP_ROPOVODU: 2;
    readonly NEZJISTENO: 99;
    readonly NEURCENO: 401;
};
export type TypOPSiteProduktovoduValue = (typeof TypOPSiteProduktovodu)[keyof typeof TypOPSiteProduktovodu];
/** TypOPZarizeniOdpadovehoHospodarstvi */
export declare const TypOPZarizeniOdpadovehoHospodarstvi: {
    readonly OP_SKLADKY: 1;
    readonly OP_SPALOVNY: 2;
    readonly OP_ZARIZENI_BRO: 3;
    readonly OP_ZARIZENI_NA_ODSTRANOVANI_NO: 4;
    readonly NEZJISTENO: 400;
};
export type TypOPZarizeniOdpadovehoHospodarstviValue = (typeof TypOPZarizeniOdpadovehoHospodarstvi)[keyof typeof TypOPZarizeniOdpadovehoHospodarstvi];
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
    readonly SKALY: 200;
    readonly VNITRNI_CLENENI_HRBITOVA: 201;
    readonly ZBORENISTE: 202;
    readonly JINY: 402;
};
export type TypOstatniPlochyValue = (typeof TypOstatniPlochy)[keyof typeof TypOstatniPlochy];
/** TypPKO */
export declare const TypPKO: {
    readonly KATODICKA: 1;
    readonly ELEKTROPOLARIZOVANA_DRENAZ: 2;
    readonly ANODA: 3;
    readonly PROPOJOVACI_KABELAZ: 4;
    readonly NEZJISTENO: 99;
};
export type TypPKOValue = (typeof TypPKO)[keyof typeof TypPKO];
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
    readonly LAMPA_ZAVESNA: 200;
    readonly SLOUP_DVOJITY: 201;
    readonly SLOUP_JEDNODUCHY_BETONOVY: 202;
    readonly SLOUP_JEDNODUCHY_DREVENY: 203;
    readonly SLOUP_KOVOVY: 204;
    readonly SLOUP_S_PATKOU: 205;
    readonly NEZJISTENO: 400;
};
export type TypPodpernehoZarizeniValue = (typeof TypPodpernehoZarizeni)[keyof typeof TypPodpernehoZarizeni];
/** TypPodzemnihoZasobnikuPlynu */
export declare const TypPodzemnihoZasobnikuPlynu: {
    readonly SONDA: 1;
    readonly SBERNE_STREDISKO: 2;
    readonly CENTRALNI_AREAL: 3;
    readonly NEZJISTENO: 400;
    readonly JINY: 402;
};
export type TypPodzemnihoZasobnikuPlynuValue = (typeof TypPodzemnihoZasobnikuPlynu)[keyof typeof TypPodzemnihoZasobnikuPlynu];
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
    readonly HYDRANT_NADZEMNI: 200;
    readonly HYDRANT_PODZEMNI: 201;
    readonly ORIENTACNI_PATNIK_OZNACNIK: 202;
    readonly SACHTA_HRANATA: 203;
    readonly SACHTA_KULATA: 204;
    readonly SOUPE: 205;
    readonly VPUST: 206;
    readonly PODOBRUBNIKOVA_VPUST: 207;
    readonly NEURCENO: 401;
};
export type TypPovrchovehoZnakuTIValue = (typeof TypPovrchovehoZnakuTI)[keyof typeof TypPovrchovehoZnakuTI];
/** TypPovrchuVzletovePristavaciDrahy */
export declare const TypPovrchuVzletovePristavaciDrahy: {
    readonly ASFALTOBETON: 1;
    readonly CEMENTOBETON: 2;
    readonly TRAVA: 3;
    readonly NEZJISTENO: 99;
};
export type TypPovrchuVzletovePristavaciDrahyValue = (typeof TypPovrchuVzletovePristavaciDrahy)[keyof typeof TypPovrchuVzletovePristavaciDrahy];
/** TypPozemniKomunikace */
export declare const TypPozemniKomunikace: {
    readonly KOMUNIKACE: 1;
    readonly OKRUZNI_KRIZOVATKA: 2;
    readonly PROSTRANSTVI_BEZPROSTREDNE_SLOUZICI_PROVOZU_A_UDRZBE_POZEMNI_KOMUNIKACE: 3;
    readonly NEZJISTENO: 99;
};
export type TypPozemniKomunikaceValue = (typeof TypPozemniKomunikace)[keyof typeof TypPozemniKomunikace];
/** TypPrirodnihoPoloprirodnihoObjektu */
export declare const TypPrirodnihoPoloprirodnihoObjektu: {
    readonly VODNI_TOK: 1;
    readonly JEZERO: 2;
    readonly ZEMEDELSKA_PLOCHA: 4;
    readonly ZAHRADA: 5;
    readonly LES: 6;
    readonly HOSPODARSKY_NEVYUZIVANA_PLOCHA: 7;
    readonly NEZJISTENO: 99;
    readonly MOCAL_NEROZLISENY: 200;
    readonly MOCAL_PRUCHODNY: 201;
    readonly MOCAL_NEPRUCHODNY: 202;
    readonly JINY: 402;
};
export type TypPrirodnihoPoloprirodnihoObjektuValue = (typeof TypPrirodnihoPoloprirodnihoObjektu)[keyof typeof TypPrirodnihoPoloprirodnihoObjektu];
/** TypPristavu */
export declare const TypPristavu: {
    readonly VEREJNY: 1;
    readonly NEVEREJNY: 2;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypPristavuValue = (typeof TypPristavu)[keyof typeof TypPristavu];
/** TypPrivadece */
export declare const TypPrivadece: {
    readonly ODKRYTY: 1;
    readonly TRUBNI: 2;
    readonly STOLA: 3;
    readonly JINY: 98;
    readonly NEZJISTENO: 99;
};
export type TypPrivadeceValue = (typeof TypPrivadece)[keyof typeof TypPrivadece];
/** TypProtipovodnoveZabrany */
export declare const TypProtipovodnoveZabrany: {
    readonly HRAZ: 1;
    readonly ZED: 3;
    readonly STAVEBNI_ZAKLADY_MOBILNI_ZABRANY: 4;
    readonly JINA: 98;
    readonly NEZJISTENO: 400;
};
export type TypProtipovodnoveZabranyValue = (typeof TypProtipovodnoveZabrany)[keyof typeof TypProtipovodnoveZabrany];
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
    readonly NEURCENO: 401;
};
export type TypSdilenehoObjektuTIValue = (typeof TypSdilenehoObjektuTI)[keyof typeof TypSdilenehoObjektuTI];
/** TypSledovaneVodniCesty */
export declare const TypSledovaneVodniCesty: {
    readonly VEDENA_REKOU: 1;
    readonly VEDENA_PLAVEBNIM_KANALEM: 2;
    readonly JINA_VODNI_PLOCHA: 98;
    readonly NEZJISTENO: 400;
};
export type TypSledovaneVodniCestyValue = (typeof TypSledovaneVodniCesty)[keyof typeof TypSledovaneVodniCesty];
/** TypSloupu */
export declare const TypSloupu: {
    readonly BETONOVY: 1;
    readonly DREVENY: 2;
    readonly KOVOVY: 3;
    readonly NEZJISTENO: 99;
    readonly JINY: 402;
};
export type TypSloupuValue = (typeof TypSloupu)[keyof typeof TypSloupu];
/** TypStaniceElektrickeSite */
export declare const TypStaniceElektrickeSite: {
    readonly TRANSFORMACNI_STANICE: 1;
    readonly STANICE_DISTRIBUCNI_SOUSTAVY: 2;
    readonly SPINACI_STANICE: 3;
    readonly MENIRNA: 4;
    readonly STANICE_PRENOSOVE_SOUSTAVY: 5;
    readonly TRAKCNI_NAPAJECI_STANICE: 6;
    readonly JINA: 98;
};
export type TypStaniceElektrickeSiteValue = (typeof TypStaniceElektrickeSite)[keyof typeof TypStaniceElektrickeSite];
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
    readonly JINY: 402;
};
export type TypStavbyValue = (typeof TypStavby)[keyof typeof TypStavby];
/** TypSvodidla */
export declare const TypSvodidla: {
    readonly JEDNODUCHE: 1;
    readonly ZDVOJENE: 2;
    readonly NEZJISTENO: 99;
    readonly OBOUSTRANNE: 200;
};
export type TypSvodidlaValue = (typeof TypSvodidla)[keyof typeof TypSvodidla];
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
/** TypTechnologickehoObjektuSiteEK */
export declare const TypTechnologickehoObjektuSiteEK: {
    readonly RADIOTELESKOP: 1;
    readonly TECHNOLOGICKA_BUDOVA_EK: 2;
    readonly TELEKOMUNIKACNI_VEZ: 3;
    readonly TECHNOLOGICKY_KONTEJNER_SITE_EK: 4;
    readonly NEZJISTENO: 400;
    readonly JINY: 402;
};
export type TypTechnologickehoObjektuSiteEKValue = (typeof TypTechnologickehoObjektuSiteEK)[keyof typeof TypTechnologickehoObjektuSiteEK];
/** TypTechnologickehoObjektuTeplovodniSite */
export declare const TypTechnologickehoObjektuTeplovodniSite: {
    readonly TEPLARNA: 1;
    readonly KOTELNA: 2;
    readonly JINY: 98;
    readonly NEZJISTENO_NEURCENO: 99;
};
export type TypTechnologickehoObjektuTeplovodniSiteValue = (typeof TypTechnologickehoObjektuTeplovodniSite)[keyof typeof TypTechnologickehoObjektuTeplovodniSite];
/** TypTeplovodniSite */
export declare const TypTeplovodniSite: {
    readonly TEPLOVOD: 1;
    readonly HORKOVOD: 2;
    readonly PAROVOD: 3;
    readonly NEZJISTENO: 99;
    readonly KONDENZAT: 200;
    readonly ODVODNENI_PAROVODU: 201;
    readonly TOPNA_VODA: 202;
    readonly TEPLA_VODA: 203;
    readonly NEURCENO: 401;
};
export type TypTeplovodniSiteValue = (typeof TypTeplovodniSite)[keyof typeof TypTeplovodniSite];
/** TypTerenniHrany */
export declare const TypTerenniHrany: {
    readonly HRANA: 1;
    readonly PATA: 2;
    readonly NEZJISTENO: 99;
    readonly HRANICE_SKAL: 200;
    readonly PROTIHLUKOVY_VAL: 201;
};
export type TypTerenniHranyValue = (typeof TypTerenniHrany)[keyof typeof TypTerenniHrany];
/** TypTrasyElektrickeSite */
export declare const TypTrasyElektrickeSite: {
    readonly SILOVE_VEDENI: 1;
    readonly ZEMNICI_LANO: 2;
    readonly ZEMNIC: 3;
    readonly NEZJISTENO: 99;
    readonly KRAJNI_VODIC: 200;
    readonly SILOVE_VEDENI_ZAVESNY_KABEL: 201;
};
export type TypTrasyElektrickeSiteValue = (typeof TypTrasyElektrickeSite)[keyof typeof TypTrasyElektrickeSite];
/** TypTrasyMistniElektrickeSite */
export declare const TypTrasyMistniElektrickeSite: {
    readonly VEREJNE_OSVETLENI: 1;
    readonly SVETELNA_SIGNALIZACE: 2;
    readonly OSVETLOVACI_SIT_STAVEB: 4;
    readonly NEZJISTENO: 99;
};
export type TypTrasyMistniElektrickeSiteValue = (typeof TypTrasyMistniElektrickeSite)[keyof typeof TypTrasyMistniElektrickeSite];
/** TypTrasyStokoveSite */
export declare const TypTrasyStokoveSite: {
    readonly STOKOVA_SIT: 1;
    readonly PRIVADECI_STOKA: 4;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
    readonly KMENOVA_STOKA: 200;
    readonly ODLEHCOVACI_STOKA: 201;
    readonly VYUSTNI_STOKA: 202;
};
export type TypTrasyStokoveSiteValue = (typeof TypTrasyStokoveSite)[keyof typeof TypTrasyStokoveSite];
/** TypTrasyTeplovodniSite */
export declare const TypTrasyTeplovodniSite: {
    readonly PRIMARNI: 1;
    readonly SEKUNDARNI: 2;
    readonly NEZJISTENO: 99;
};
export type TypTrasyTeplovodniSiteValue = (typeof TypTrasyTeplovodniSite)[keyof typeof TypTrasyTeplovodniSite];
/** TypTrasyVodovodniSite */
export declare const TypTrasyVodovodniSite: {
    readonly PRIVADECI_RAD: 1;
    readonly ROZVODNA_VODOVODNI_SIT: 2;
    readonly JINA: 98;
    readonly NEZJISTENO: 99;
};
export type TypTrasyVodovodniSiteValue = (typeof TypTrasyVodovodniSite)[keyof typeof TypTrasyVodovodniSite];
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
/** TypUdrzovaneZelene */
export declare const TypUdrzovaneZelene: {
    readonly MESTSKA_PARKOVA_ZELEN: 1;
    readonly UDRZOVANA_TRAVNATA_A_OKRASNA_PLOCHA: 2;
    readonly SKUPINA_STROMU_A_KERU: 3;
    readonly SILNICNI_VEGETACE: 4;
    readonly NEZJISTENO: 99;
    readonly JINY: 402;
};
export type TypUdrzovaneZeleneValue = (typeof TypUdrzovaneZelene)[keyof typeof TypUdrzovaneZelene];
/** TypUsekuPozemniKomunikace */
export declare const TypUsekuPozemniKomunikace: {
    readonly ZEMNI_TELESO_KOMUNIKACE: 1;
    readonly MOST: 2;
    readonly TUNEL: 3;
    readonly PRESYPANY_MOST: 4;
    readonly NEZJISTENO: 99;
    readonly LAVKA: 200;
    readonly PODCHOD: 201;
    readonly PREJEZD: 202;
};
export type TypUsekuPozemniKomunikaceValue = (typeof TypUsekuPozemniKomunikace)[keyof typeof TypUsekuPozemniKomunikace];
/** TypUsekuZeleznicniTrate */
export declare const TypUsekuZeleznicniTrate: {
    readonly ZEMNI_TELESO: 1;
    readonly MOST: 2;
    readonly TUNEL: 3;
    readonly NEZJISTENO: 99;
    readonly PEVNA_JIZDNI_DRAHA: 200;
    readonly KOLEJOVE_STERKOVE_LOZE: 201;
    readonly DRAZNI_STEZKA: 202;
    readonly PREJEZD: 203;
    readonly PRECHOD: 204;
    readonly JINY: 402;
};
export type TypUsekuZeleznicniTrateValue = (typeof TypUsekuZeleznicniTrate)[keyof typeof TypUsekuZeleznicniTrate];
/** TypUzlu */
export declare const TypUzlu: {
    readonly KRIZOVATKA: 1;
    readonly ODPOCIVKA: 2;
    readonly HRANICNI_PRECHOD_CR: 3;
    readonly HRANICE_PRIVOZU: 4;
    readonly HRANICE_NEVYBUDOVANEHO_USEKU: 5;
    readonly HRANICE_VOJENSKEHO_PROSTORU: 6;
    readonly KONEC_USEKU: 7;
    readonly NEZJISTENO: 400;
};
export type TypUzluValue = (typeof TypUzlu)[keyof typeof TypUzlu];
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
/** TypVrtu */
export declare const TypVrtu: {
    readonly GEOTERMALNI: 1;
    readonly NEZJISTENO: 99;
    readonly JINY: 402;
};
export type TypVrtuValue = (typeof TypVrtu)[keyof typeof TypVrtu];
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
/** TypZarizeniElektrickeSite */
export declare const TypZarizeniElektrickeSite: {
    readonly SKRIN_ELEKTRICKE_SITE: 1;
    readonly JINE: 98;
    readonly ROZVADEC_VEREJNEHO_OSVETLENI: 200;
    readonly ZAPINACI_BOD: 201;
    readonly PODRUZNY_ROZVADEC: 202;
    readonly NEZJISTENO: 400;
};
export type TypZarizeniElektrickeSiteValue = (typeof TypZarizeniElektrickeSite)[keyof typeof TypZarizeniElektrickeSite];
/** TypZarizeniKanalizacniPripojky */
export declare const TypZarizeniKanalizacniPripojky: {
    readonly REVIZNI_SACHTA: 1;
    readonly MERNA_SACHTA: 2;
    readonly DOMOVNI_CERPACI_STANICE: 3;
    readonly VSAKOVACI_ZARIZENI_S_PREPADEM: 4;
    readonly JINE: 98;
    readonly NEZJISTENO: 400;
};
export type TypZarizeniKanalizacniPripojkyValue = (typeof TypZarizeniKanalizacniPripojky)[keyof typeof TypZarizeniKanalizacniPripojky];
/** TypZarizeniOdstranovaniOdpadu */
export declare const TypZarizeniOdstranovaniOdpadu: {
    readonly ZARIZENI_NA_ODSTRANOVANI_BRO: 1;
    readonly ZARIZENI_NA_ODSTRANOVANI_NEBEZPECNEHO_ODPADU: 2;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type TypZarizeniOdstranovaniOdpaduValue = (typeof TypZarizeniOdstranovaniOdpadu)[keyof typeof TypZarizeniOdstranovaniOdpadu];
/** TypZarizeniPlynovodniSite */
export declare const TypZarizeniPlynovodniSite: {
    readonly SOUPE: 1;
    readonly SKRIN: 2;
    readonly SACHTA: 4;
    readonly JINE: 98;
    readonly NEZJISTENO: 400;
};
export type TypZarizeniPlynovodniSiteValue = (typeof TypZarizeniPlynovodniSite)[keyof typeof TypZarizeniPlynovodniSite];
/** TypZarizeniPotrubniPosty */
export declare const TypZarizeniPotrubniPosty: {
    readonly SOUPE: 1;
    readonly JINE: 98;
    readonly NEZJISTENO: 400;
};
export type TypZarizeniPotrubniPostyValue = (typeof TypZarizeniPotrubniPosty)[keyof typeof TypZarizeniPotrubniPosty];
/** TypZarizeniPrivadece */
export declare const TypZarizeniPrivadece: {
    readonly SACHTA: 1;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
};
export type TypZarizeniPrivadeceValue = (typeof TypZarizeniPrivadece)[keyof typeof TypZarizeniPrivadece];
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
/** TypZarizeniSiteEK */
export declare const TypZarizeniSiteEK: {
    readonly VENKOVNI_ROZVADEC_EK: 2;
    readonly BOD_PRO_PRISTUP_NEBO_PROPOJENI_SITI_EK_UVNITR_BUDOV: 3;
    readonly NEZJISTENO: 400;
    readonly JINY: 402;
};
export type TypZarizeniSiteEKValue = (typeof TypZarizeniSiteEK)[keyof typeof TypZarizeniSiteEK];
/** TypZarizeniSiteProduktovodu */
export declare const TypZarizeniSiteProduktovodu: {
    readonly SACHTA: 1;
    readonly NEZJISTENO: 99;
    readonly JINY: 402;
};
export type TypZarizeniSiteProduktovoduValue = (typeof TypZarizeniSiteProduktovodu)[keyof typeof TypZarizeniSiteProduktovodu];
/** TypZarizeniTeplovodniSite */
export declare const TypZarizeniTeplovodniSite: {
    readonly ODVETRAVANI_TEPLOVODU: 1;
    readonly SACHTA: 2;
    readonly JINE: 98;
    readonly NEZJISTENO: 400;
};
export type TypZarizeniTeplovodniSiteValue = (typeof TypZarizeniTeplovodniSite)[keyof typeof TypZarizeniTeplovodniSite];
/** TypZarizeniVodovodniPripojky */
export declare const TypZarizeniVodovodniPripojky: {
    readonly SACHTA_MERNA_A_KONTROLNI: 2;
    readonly JINE: 98;
    readonly NEZJISTENO: 400;
};
export type TypZarizeniVodovodniPripojkyValue = (typeof TypZarizeniVodovodniPripojky)[keyof typeof TypZarizeniVodovodniPripojky];
/** TypZdi */
export declare const TypZdi: {
    readonly VOLNE_STOJICI: 1;
    readonly OPERNA: 2;
    readonly ZARUBNI: 3;
    readonly MESTSKE_HRADBY: 4;
    readonly NEZJISTENO: 99;
    readonly JINY: 402;
};
export type TypZdiValue = (typeof TypZdi)[keyof typeof TypZdi];
/** TypZeleznicniTrate */
export declare const TypZeleznicniTrate: {
    readonly VYSOKORYCHLOSTNI: 1;
    readonly KONVENCNI: 2;
    readonly NEZJISTENO_NEURCENO: 99;
    readonly JINY: 402;
};
export type TypZeleznicniTrateValue = (typeof TypZeleznicniTrate)[keyof typeof TypZeleznicniTrate];
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
/** UceloveZarazeniStokoveSite */
export declare const UceloveZarazeniStokoveSite: {
    readonly JEDNOTNA: 1;
    readonly SRAZKOVA: 2;
    readonly SPLASKOVA: 3;
    readonly PRUMYSLOVA: 6;
    readonly JINE: 98;
    readonly NEZJISTENO: 99;
    readonly NEURCENO: 401;
};
export type UceloveZarazeniStokoveSiteValue = (typeof UceloveZarazeniStokoveSite)[keyof typeof UceloveZarazeniStokoveSite];
/** UmisteniHeliportu */
export declare const UmisteniHeliportu: {
    readonly UROVNOVY: 1;
    readonly VYVYSENY: 2;
    readonly NEZJISTENO: 99;
};
export type UmisteniHeliportuValue = (typeof UmisteniHeliportu)[keyof typeof UmisteniHeliportu];
/** UmisteniObjektu */
export declare const UmisteniObjektu: {
    readonly SAMOSTATNE_STOJICI: 1;
    readonly NA_OBJEKTU: 2;
    readonly NEZJISTENO: 99;
    readonly NA_PODPERNEM_BODE: 201;
    readonly NA_LAMPE: 202;
    readonly NA_ZAVESNE_KONZOLI: 203;
    readonly NA_SLOUPU: 204;
    readonly NA_SLOUPKU_BEZ_PATICE: 205;
    readonly NA_SLOUPKU_S_PATICI: 206;
    readonly NA_KONZOLI: 207;
    readonly NA_STROPE_TUNELU: 208;
    readonly V_UROVNI_KOMUNIKACE: 209;
    readonly V_UROVNI_TERENU: 210;
    readonly JINY: 402;
};
export type UmisteniObjektuValue = (typeof UmisteniObjektu)[keyof typeof UmisteniObjektu];
/** UmisteniOznacniku */
export declare const UmisteniOznacniku: {
    readonly SAMOSTATNY_NOSIC: 1;
    readonly SDILENE_PODPERNE_ZARIZENI: 2;
    readonly STAVBA_ZASTRESENI: 3;
    readonly JINE: 4;
};
export type UmisteniOznacnikuValue = (typeof UmisteniOznacniku)[keyof typeof UmisteniOznacniku];
/** UrovenUmisteniObjektuDI */
export declare const UrovenUmisteniObjektuDI: {
    readonly VALUE_MINUS_3: -3;
    readonly VALUE_MINUS_2: -2;
    readonly VALUE_MINUS_1: -1;
    readonly NA_POVRCHU: 0;
    readonly VALUE_1: 1;
    readonly VALUE_2: 2;
    readonly VALUE_3: 3;
    readonly NEZJISTENO: 400;
};
export type UrovenUmisteniObjektuDIValue = (typeof UrovenUmisteniObjektuDI)[keyof typeof UrovenUmisteniObjektuDI];
/** UrovenUmisteniObjektuPSPI */
export declare const UrovenUmisteniObjektuPSPI: {
    readonly POD_POVRCHEM: -1;
    readonly NA_POVRCHU: 0;
    readonly NAD_POVRCHEM: 1;
    readonly NEZJISTENO: 400;
};
export type UrovenUmisteniObjektuPSPIValue = (typeof UrovenUmisteniObjektuPSPI)[keyof typeof UrovenUmisteniObjektuPSPI];
/** UrovenUmisteniObjektuTI */
export declare const UrovenUmisteniObjektuTI: {
    readonly POD_POVRCHEM: -1;
    readonly NA_POVRCHU: 0;
    readonly NAD_POVRCHEM: 1;
    readonly NEZJISTENO: 400;
};
export type UrovenUmisteniObjektuTIValue = (typeof UrovenUmisteniObjektuTI)[keyof typeof UrovenUmisteniObjektuTI];
/** UrovenUmisteniObjektuZPS */
export declare const UrovenUmisteniObjektuZPS: {
    readonly VALUE_MINUS_3: -3;
    readonly VALUE_MINUS_2: -2;
    readonly VALUE_MINUS_1: -1;
    readonly NA_POVRCHU: 0;
    readonly VALUE_1: 1;
    readonly VALUE_2: 2;
    readonly VALUE_3: 3;
    readonly NEZJISTENO: 400;
};
export type UrovenUmisteniObjektuZPSValue = (typeof UrovenUmisteniObjektuZPS)[keyof typeof UrovenUmisteniObjektuZPS];
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
    readonly NEURCENO: 401;
};
export type VedeniSiteVJineStavbeValue = (typeof VedeniSiteVJineStavbe)[keyof typeof VedeniSiteVJineStavbe];
/** ZarazeniSledovaneVodniCesty */
export declare const ZarazeniSledovaneVodniCesty: {
    readonly DOPRAVNE_VYZNAMNA_VYUZIVANA: 1;
    readonly DOPRAVNE_VYZNAMNA_VYUZITELNA: 2;
    readonly UCELOVA: 3;
    readonly PLANOVANA: 4;
    readonly NEZJISTENO: 400;
};
export type ZarazeniSledovaneVodniCestyValue = (typeof ZarazeniSledovaneVodniCesty)[keyof typeof ZarazeniSledovaneVodniCesty];
/** ZpusobOchranyVedeniSiteEK */
export declare const ZpusobOchranyVedeniSiteEK: {
    readonly BEZ_OCHRANY_VEDENI: 1;
    readonly PLASTOVA_TRUBKA: 2;
    readonly SVAZEK_MIKROTRUBICEK: 3;
    readonly NEZJISTENO: 99;
    readonly NEURCENO: 401;
    readonly JINY: 402;
};
export type ZpusobOchranyVedeniSiteEKValue = (typeof ZpusobOchranyVedeniSiteEK)[keyof typeof ZpusobOchranyVedeniSiteEK];
/** ZpusobPorizeniDI */
export declare const ZpusobPorizeniDI: {
    readonly GEODETICKY_TERESTRICKY: 1;
    readonly GEODETICKY_FOTOGRAMMETRICKY: 2;
    readonly GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3;
    readonly PRIBLIZNYM_ZAKRESEM: 4;
    readonly ODVOZENIM: 5;
    readonly GEODETICKY_TECHNOLOGII_GNSS: 6;
    readonly NEZJISTENO: 99;
    readonly JINY: 402;
};
export type ZpusobPorizeniDIValue = (typeof ZpusobPorizeniDI)[keyof typeof ZpusobPorizeniDI];
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
};
export type ZpusobPorizeniPB_ZPSValue = (typeof ZpusobPorizeniPB_ZPS)[keyof typeof ZpusobPorizeniPB_ZPS];
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
    readonly JINY: 402;
};
export type ZpusobPorizeniTIValue = (typeof ZpusobPorizeniTI)[keyof typeof ZpusobPorizeniTI];
/** ZpusobPorizeniZPS */
export declare const ZpusobPorizeniZPS: {
    readonly GEODETICKY_TERESTRICKY: 1;
    readonly GEODETICKY_FOTOGRAMMETRICKY: 2;
    readonly GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3;
    readonly PRIBLIZNYM_ZAKRESEM: 4;
    readonly ODVOZENIM: 5;
    readonly GEODETICKY_TECHNOLOGII_GNSS: 6;
    readonly NEZJISTENO: 99;
    readonly JINY: 402;
};
export type ZpusobPorizeniZPSValue = (typeof ZpusobPorizeniZPS)[keyof typeof ZpusobPorizeniZPS];
/** CKZDruhLesa */
export declare const CKZDruhLesa: {
    readonly KOSODREVINA: 500;
    readonly LES_S_KROVINATYM_POROSTEM: 501;
    readonly LES_JEHLICNATY: 502;
    readonly LES_LISTNATY: 503;
    readonly LES_SMISENY: 504;
    readonly MYTINA: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZDruhLesaValue = (typeof CKZDruhLesa)[keyof typeof CKZDruhLesa];
/** CKZDruhUdrzovaneZelene */
export declare const CKZDruhUdrzovaneZelene: {
    readonly KAMENNE_POLE: 500;
    readonly RUDERALNI_PLOCHA: 501;
    readonly SKUPINA_KERU: 502;
    readonly SKUPINA_STROMU: 503;
    readonly TRAVNIK: 504;
    readonly ZAHON: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZDruhUdrzovaneZeleneValue = (typeof CKZDruhUdrzovaneZelene)[keyof typeof CKZDruhUdrzovaneZelene];
/** CKZFunkceKomunikace */
export declare const CKZFunkceKomunikace: {
    readonly RYCHLOSTNI_KOMUNIKACE: 500;
    readonly SBERNE_KOMUNIKACE: 501;
    readonly OBSLUZNE_KOMUNIKACE: 502;
    readonly PESI_ZONY_OBYTNE_ZONY: 503;
    readonly PESI_A_CYKLOSTEZKY: 504;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZFunkceKomunikaceValue = (typeof CKZFunkceKomunikace)[keyof typeof CKZFunkceKomunikace];
/** CKZFunkcniStavObjektu */
export declare const CKZFunkcniStavObjektu: {
    readonly DOBRY: 500;
    readonly HAVARIJNI: 501;
    readonly NEFUNKCNI: 502;
    readonly NEVYHOVUJICI: 503;
    readonly VYBORNY: 504;
    readonly VYHOVUJICI: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZFunkcniStavObjektuValue = (typeof CKZFunkcniStavObjektu)[keyof typeof CKZFunkcniStavObjektu];
/** CKZKonstrukceBudovy */
export declare const CKZKonstrukceBudovy: {
    readonly ZDENA: 500;
    readonly DREVENA: 501;
    readonly BETONOVA: 502;
    readonly KOVOVA: 503;
    readonly KOMBINOVANA: 504;
    readonly PROSKLENA: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZKonstrukceBudovyValue = (typeof CKZKonstrukceBudovy)[keyof typeof CKZKonstrukceBudovy];
/** CKZKonstrukceDZZ */
export declare const CKZKonstrukceDZZ: {
    readonly PORTAL: 500;
    readonly POLOPORTAL: 501;
    readonly TUNELOVY_PORTAL: 502;
    readonly DVOJITY_POLOPORTAL: 503;
    readonly PRIHRADA_FEZN: 504;
    readonly SLOUP_SIGNALIZACE: 505;
    readonly SLOUP_VO: 506;
    readonly SLOUP_ELEKTRICKEHO_VEDENI: 507;
    readonly SLOUP_ZELEZNICNI: 508;
    readonly SLOUP_BETONOVY: 509;
    readonly SLOUP_DREVENY: 510;
    readonly STOJKA_2X: 511;
    readonly SLOUPEK_1X: 512;
    readonly SLOUPEK_2X: 513;
    readonly MAJAK: 514;
    readonly SVODIDLO: 515;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZKonstrukceDZZValue = (typeof CKZKonstrukceDZZ)[keyof typeof CKZKonstrukceDZZ];
/** CKZMaterialUDM */
export declare const CKZMaterialUDM: {
    readonly BETON: 500;
    readonly CIHLA: 501;
    readonly DREVO: 502;
    readonly GABION: 503;
    readonly KAMEN: 504;
    readonly KOMBINACE: 505;
    readonly KOMPOZIT: 506;
    readonly KOV: 507;
    readonly PLAST: 508;
    readonly SKLO: 509;
    readonly ZDENY: 510;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZMaterialUDMValue = (typeof CKZMaterialUDM)[keyof typeof CKZMaterialUDM];
/** CKZMaterialSvodidla */
export declare const CKZMaterialSvodidla: {
    readonly BETONOVE: 500;
    readonly DREVOOCELOVE: 501;
    readonly LANOVE: 502;
    readonly OCELOBETONOVE: 503;
    readonly OCELOVE: 504;
    readonly OCELOVE_OTVIRATELNE: 505;
    readonly OCELOVE_S_OCHRANOU_PROTI_PODJETI_MOTO: 506;
    readonly OCELOVE_STINENE: 507;
    readonly RETEZ: 508;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZMaterialSvodidlaValue = (typeof CKZMaterialSvodidla)[keyof typeof CKZMaterialSvodidla];
/** CKZMaterialTeplovodu */
export declare const CKZMaterialTeplovodu: {
    readonly NEREZ: 500;
    readonly PREDIZOLOVANA_OCEL: 501;
    readonly PREDIZOLOVANA_NEREZ: 502;
    readonly PREDIZOLOVANY_POLYETYLEN: 503;
    readonly OCEL: 504;
    readonly POLYBUTYLEN: 505;
    readonly POLYPROPYLEN: 506;
    readonly LITINA: 507;
    readonly POLYETHYLEN: 508;
    readonly PVC_POLYVINILCHLORID: 509;
    readonly POZINK: 510;
    readonly PLAST: 511;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZMaterialTeplovoduValue = (typeof CKZMaterialTeplovodu)[keyof typeof CKZMaterialTeplovodu];
/** CKZNabehSvodidla */
export declare const CKZNabehSvodidla: {
    readonly DLOUHY: 500;
    readonly KRATKY: 501;
    readonly ODKLON: 502;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNabehSvodidlaValue = (typeof CKZNabehSvodidla)[keyof typeof CKZNabehSvodidla];
/** CKZNazevDZ */
export declare const CKZNazevDZ: {
    readonly Z2_ZABRANA_PRO_OZNACENI_UZAVIRKY: 500;
    readonly Z3_VODICI_TABULE: 501;
    readonly Z4A_SMEROVACI_DESKA_SE_SIKMYMI_PRUHY_SE_SKLONEM_VLEVO: 502;
    readonly Z4B_SMEROVACI_DESKA_SE_SIKMYMI_PRUHY_SE_SKLONEM_VPRAVO: 503;
    readonly Z4C_SMEROVACI_DESKA_STREDOVA: 504;
    readonly Z4D_SMEROVACI_DESKA_SE_SIPKOU_DOLEVA: 505;
    readonly Z4E_SMEROVACI_DESKA_SE_SIPKOU_DOPRAVA: 506;
    readonly Z5A_VODICI_DESKA_SE_SIKMYMI_PRUHY_SE_SKLONEM_VLEVO: 507;
    readonly Z5B_VODICI_DESKA_SE_SIKMYMI_PRUHY_SE_SKLONEM_VPRAVO: 508;
    readonly Z5C_VODICI_DESKA_STREDOVA_SE_SIKMYMI_PRUHY: 509;
    readonly Z5D_VODICI_DESKA_STREDOVA_S_VODOROVNYMI_PRUHY: 510;
    readonly Z6A_VELKA_ZVYRAZNUJICI_DESKA: 511;
    readonly Z6B_MALA_ZVYRAZNUJICI_DESKA: 512;
    readonly Z11A_SMEROVY_SLOUPEK_BILY_LEVY: 513;
    readonly Z11B_SMEROVY_SLOUPEK_BILY_PRAVY: 514;
    readonly Z11C_SMEROVY_SLOUPEK_CERVENY_LEVY: 515;
    readonly Z11D_SMEROVY_SLOUPEK_CERVENY_PRAVY: 516;
    readonly Z11E_SMEROVY_SLOUPEK_MODRY_LEVY: 517;
    readonly Z11F_SMEROVY_SLOUPEK_MODRY_PRAVY: 518;
    readonly Z11G_SMEROVY_SLOUPEK_CERVENY_KULATY: 519;
    readonly Z11H_SMEROVY_SLOUPEK_ZELENY_KULATY_BALISETA: 520;
    readonly Z12_KRATKY_PRICNY_PRAH: 521;
    readonly Z10_DOPRAVNI_KNOFLIK: 522;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevDZValue = (typeof CKZNazevDZ)[keyof typeof CKZNazevDZ];
/** CKZNazevSAS */
export declare const CKZNazevSAS: {
    readonly S1_TRIBAREVNA_SOUSTAVA_S_PLNYMI_SIGNALY: 500;
    readonly S8A_ZAKAZANY_VJEZD_VOZIDEL_DO_JIZDNIHO_PRUHU: 501;
    readonly S8B_VOLNY_VJEZD_VOZIDEL_DO_JIZDNIHO_PRUHU: 502;
    readonly S8C_SVETELNA_SIPKA_VLEVO: 503;
    readonly S8D_SVETELNA_SIPKA_VPRAVO: 504;
    readonly S8E_SVETELNY_KRIZ: 505;
    readonly S9_DVOUBAREVNA_SOUSTAVA_SE_SIGNALY_PRO_CHODCE: 506;
    readonly S10_TRIBAREVNA_SOUSTAVA_SE_SIGNALY_PRO_CYKLISTY: 507;
    readonly S11_TRIBAREVNA_SOUSTAVA_SE_SIGNALY_PRO_CHODCE_A_CYKLISTY: 508;
    readonly S12A_RYCHLOSTNI_SIGNAL_S_PROMENNYM_SIGNALNIM_ZNAKEM: 509;
    readonly S12B_RYCHLOSTNI_SIGNAL_S_VICE_SIGNALNIMI_ZNAKY: 510;
    readonly S2_TRIBAREVNA_SOUSTAVA_SE_SMEROVYMI_SIGNALY: 511;
    readonly S13_SIGNAL_DVOU_VEDLE_SEBE_UMISTENYCH_STRIDAVE_PRERUSOVANYCH_CERVENYCH_SVETEL: 512;
    readonly S14A_DVE_CERVENA_STRIDAVE_PRERUSOVANA_SVETLA_SIGNALU_PREJEZDOVEHO_ZABEZPECOVACIHO_ZARIZENI: 513;
    readonly S14B_PRERUSOVANE_BILE_SVETLO_SIGNALU_PREJEZDOVEHO_ZABEZPECOVACIHO_ZARIZENI: 514;
    readonly S3_TRIBAREVNA_SOUSTAVA_S_KOMBINOVANYMI_SMEROVYMI_SIGNALY: 515;
    readonly S4A_SIGNAL_ZLUTEHO_SVETLA_VE_TVARU_CHODCE: 516;
    readonly S4B_SIGNAL_ZLUTEHO_SVETLA_VE_TVARU_CYKLISTY: 517;
    readonly S4C_SIGNAL_ZLUTEHO_SVETLA_VE_TVARU_CHODCE_A_CYKLISTY: 518;
    readonly S5_DOPLNKOVA_ZELENA_SIPKA: 519;
    readonly S6_SIGNAL_PRO_OPUSTENI_KRIZOVATKY: 520;
    readonly S7_PRERUSOVANE_ZLUTE_SVETLO: 521;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSASValue = (typeof CKZNazevSAS)[keyof typeof CKZNazevSAS];
/** CKZNazevSDZA */
export declare const CKZNazevSDZA: {
    readonly A10_SVETELNE_SIGNALY: 500;
    readonly A11_PRECHOD_PRO_CHODCE: 501;
    readonly A12A_CHODCI: 502;
    readonly A12B_DETI: 503;
    readonly A12C_OSOBY_NA_OSOBNICH_PREPRAVNICICH: 504;
    readonly A13_ZVIRATA: 505;
    readonly A14_ZVER: 506;
    readonly A15_PRACE_NA_SILNICI: 507;
    readonly A16_BOCNI_VITR: 508;
    readonly A17_ODLETAVAJICI_STERK: 509;
    readonly A18_KAMENI_NA_VOZOVCE: 510;
    readonly A19_CYKLISTE: 511;
    readonly A1A_ZATACKA_VPRAVO: 512;
    readonly A1B_ZATACKA_VLEVO: 513;
    readonly A20_LETADLA: 514;
    readonly A21_TUNEL: 515;
    readonly A22_JINE_NEBEZPECI: 516;
    readonly A23_KOLONA: 517;
    readonly A24_NALEDI: 518;
    readonly A25_TRAMVAJ: 519;
    readonly A26_MLHA: 520;
    readonly A27_NEHODA: 521;
    readonly A28_NEBEZPECNA_KRAJNICE: 522;
    readonly A2A_DVOJITA_ZATACKA_PRVNI_VPRAVO: 523;
    readonly A2B_DVOJITA_ZATACKA_PRVNI_VLEVO: 524;
    readonly A3_KRIZOVATKA: 525;
    readonly A33_POHYBLIVY_MOST: 526;
    readonly A34_NABREZI: 527;
    readonly A4_KRIZOVATKA_S_KRUHOVYM_OBJEZDEM: 528;
    readonly A5A_NEBEZPECNE_KLESANI: 529;
    readonly A5B_NEBEZPECNE_STOUPANI: 530;
    readonly A6A_ZUZENA_VOZOVKA_Z_OBOU_STRAN: 531;
    readonly A6B_ZUZENA_VOZOVKA_Z_JEDNE_STRANY: 532;
    readonly A7A_NEROVNOST_VOZOVKY: 533;
    readonly A7B_ZPOMALOVACI_PRAH: 534;
    readonly A8_NEBEZPECI_SMYKU: 535;
    readonly A9_PROVOZ_V_OBOU_SMERECH: 536;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZAValue = (typeof CKZNazevSDZA)[keyof typeof CKZNazevSDZA];
/** CKZNazevSDZAZ */
export declare const CKZNazevSDZAZ: {
    readonly A29_ZELEZNICNI_PREJEZD_SE_ZAVORAMI: 500;
    readonly A30_ZELEZNICNI_PREJEZD_BEZ_ZAVOR: 501;
    readonly A31A_NAVESTNI_DESKA_240_M: 502;
    readonly A31B_NAVESTNI_DESKA_160_M: 503;
    readonly A31C_NAVESTNI_DESKA_80_M: 504;
    readonly A32A_VYSTRAZNY_KRIZ_PRO_ZELEZNICNI_PREJEZD_JEDNOKOLEJNY: 505;
    readonly A32B_VYSTRAZNY_KRIZ_PRO_ZELEZNICNI_PREJEZD_VICEKOLEJNY: 506;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZAZValue = (typeof CKZNazevSDZAZ)[keyof typeof CKZNazevSDZAZ];
/** CKZNazevSDZC */
export declare const CKZNazevSDZC: {
    readonly C1_KRUHOVY_OBJEZD: 500;
    readonly C10A_STEZKA_PRO_CHODCE_A_CYKLISTY_DELENA: 501;
    readonly C10B_KONEC_STEZKY_PRO_CHODCE_A_CYKLISTY_DELENE: 502;
    readonly C11A_STEZKA_PRO_JEZDCE_NA_ZVIRETI: 503;
    readonly C11B_KONEC_STEZKY_PRO_JEZDCE_NA_ZVIRETI: 504;
    readonly C12A_PRIKAZANY_JIZDNI_PRUH: 505;
    readonly C12B_KONEC_PRIKAZANEHO_JIZDNIHO_PRUHU: 506;
    readonly C13A_ROZSVIT_SVETLA: 507;
    readonly C13B_ROZSVIT_SVETLA_KONEC: 508;
    readonly C14A_JINY_PRIKAZ: 509;
    readonly C14B_KONEC_JINEHO_PRIKAZU: 510;
    readonly C15A_ZIMNI_VYBAVA: 511;
    readonly C15B_ZIMNI_VYBAVA_KONEC: 512;
    readonly C2A_PRIKAZANY_SMER_JIZDY_PRIMO: 513;
    readonly C2B_PRIKAZANY_SMER_JIZDY_VPRAVO: 514;
    readonly C2C_PRIKAZANY_SMER_JIZDY_VLEVO: 515;
    readonly C2D_PRIKAZANY_SMER_JIZDY_PRIMO_A_VPRAVO: 516;
    readonly C2E_PRIKAZANY_SMER_JIZDY_PRIMO_A_VLEVO: 517;
    readonly C2F_PRIKAZANY_SMER_JIZDY_VPRAVO_A_VLEVO: 518;
    readonly C3A_PRIKAZANY_SMER_JIZDY_ZDE_VPRAVO: 519;
    readonly C3B_PRIKAZANY_SMER_JIZDY_ZDE_VLEVO: 520;
    readonly C4A_PRIKAZANY_SMER_OBJIZDENI_VPRAVO: 521;
    readonly C4B_PRIKAZANY_SMER_OBJIZDENI_VLEVO: 522;
    readonly C4C_PRIKAZANY_SMER_OBJIZDENI_VPRAVO_A_VLEVO: 523;
    readonly C5A_SNEHOVE_RETEZY: 524;
    readonly C5B_SNEHOVE_RETEZY_KONEC: 525;
    readonly C6A_NEJNIZSI_DOVOLENA_RYCHLOST: 526;
    readonly C6B_KONEC_NEJNIZSI_DOVOLENE_RYCHLOSTI: 527;
    readonly C7A_STEZKA_PRO_CHODCE: 528;
    readonly C7B_KONEC_STEZKY_PRO_CHODCE: 529;
    readonly C8A_STEZKA_PRO_CYKLISTY: 530;
    readonly C8B_KONEC_STEZKY_PRO_CYKLISTY: 531;
    readonly C9A_STEZKA_PRO_CHODCE_A_CYKLISTY_SPOLECNA: 532;
    readonly C9B_KONEC_STEZKY_PRO_CHODCE_A_CYKLISTY_SPOLECNE: 533;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZCValue = (typeof CKZNazevSDZC)[keyof typeof CKZNazevSDZC];
/** CKZNazevSDZE */
export declare const CKZNazevSDZE: {
    readonly E1_POCET: 500;
    readonly E10_TVAR_KRIZENI_POZEMNI_KOMUNIKACE_S_DRAHOU: 501;
    readonly E11A_BEZ_CASOVEHO_POPLATKU: 502;
    readonly E11B_S_CASOVYM_POPLATKEM: 503;
    readonly E11C_BEZ_MYTNEHO: 504;
    readonly E11D_S_MYTNYM: 505;
    readonly E11E_BEZ_CASOVEHO_POPLATKU_A_MYTNEHO: 506;
    readonly E11F_S_CASOVYM_POPLATKEM_A_MYTNYM: 507;
    readonly E12A_JIZDA_CYKLISTU_V_PROTISMERU: 508;
    readonly E12B_VJEZD_CYKLISTU_V_PROTISMERU_POVOLEN: 509;
    readonly E12C_POVOLENY_SMER_JIZDY_CYKLISTU: 510;
    readonly E13_TEXT_NEBO_SYMBOL: 511;
    readonly E14_TRANZIT: 512;
    readonly E15_KATEGORIE_TUNELU: 513;
    readonly E16_VZDALENOST_K_PRISTI_CERPACI_STANICI: 514;
    readonly E17_NEDOSTATECNY_PRUJEZDNI_PROFIL_VOZOVKY: 515;
    readonly E2A_TVAR_KRIZOVATKY: 516;
    readonly E2B_TVAR_KRIZOVATKY: 517;
    readonly E2C_TVAR_KRIZOVATKY: 518;
    readonly E2D_TVAR_DVOU_KRIZOVATEK: 519;
    readonly E3A_VZDALENOST: 520;
    readonly E3B_VZDALENOST: 521;
    readonly E4_DELKA_USEKU: 522;
    readonly E5_NEJVETSI_POVOLENA_HMOTNOST: 523;
    readonly E6_ZA_MOKRA_ZA_DESTE: 524;
    readonly E7A_SMEROVA_SIPKA_PRO_SMER_PRIMO: 525;
    readonly E7B_SMEROVA_SIPKA_PRO_ODBOCENI: 526;
    readonly E8A_ZACATEK_USEKU: 527;
    readonly E8B_PRUBEH_USEKU: 528;
    readonly E8C_KONEC_USEKU: 529;
    readonly E8D_USEK_PLATNOSTI: 530;
    readonly E8E_USEK_PLATNOSTI: 531;
    readonly E9_DRUH_VOZIDLA: 532;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZEValue = (typeof CKZNazevSDZE)[keyof typeof CKZNazevSDZE];
/** CKZNazevSDZIJ */
export declare const CKZNazevSDZIJ: {
    readonly IJ1_POLICIE: 500;
    readonly IJ10_HOTEL_NEBO_MOTEL: 501;
    readonly IJ11A_RESTAURACE: 502;
    readonly IJ11B_OBCERSTVENI: 503;
    readonly IJ12_WC: 504;
    readonly IJ13_MISTO_PRO_ODPOCINEK: 505;
    readonly IJ14A_TABORISTE_PRO_STANY: 506;
    readonly IJ14B_TABORISTE_PRO_OBYTNE_PRIVESY: 507;
    readonly IJ14C_TABORISTE_PRO_STANY_A_PRO_OBYTNE_PRIVESY: 508;
    readonly IJ16_SILNICNI_KAPLE: 509;
    readonly IJ17A_TRUCKPARK: 510;
    readonly IJ17B_NAVEST_PRED_TRUCKPARKEM: 511;
    readonly IJ18A_NAVEST_PRED_ODPOCIVKOU: 512;
    readonly IJ18B_NAVEST_PRED_ODBOCENIM_NA_ODPOCIVKU: 513;
    readonly IJ18C_NAVEST_PRO_ODBOCENI_NA_ODPOCIVKU: 514;
    readonly IJ2_NEMOCNICE: 515;
    readonly IJ3_PRVNI_POMOC: 516;
    readonly IJ4A_OZNACNIK_ZASTAVKY: 517;
    readonly IJ4B_OZNACNIK_ZASTAVKY: 518;
    readonly IJ4C_ZASTAVKA_AUTOBUSU: 519;
    readonly IJ4D_ZASTAVKA_TRAMVAJE: 520;
    readonly IJ4E_ZASTAVKA_TROLEJBUSU: 521;
    readonly IJ5_INFORMACE: 522;
    readonly IJ6_TELEFON: 523;
    readonly IJ7_CERPACI_STANICE: 524;
    readonly IJ8_OPRAVNA: 525;
    readonly IJ9_STANICE_TECHNICKE_KONTROLY: 526;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZIJValue = (typeof CKZNazevSDZIJ)[keyof typeof CKZNazevSDZIJ];
/** CKZNazevSDZIP */
export declare const CKZNazevSDZIP: {
    readonly IP1_OKRUH: 500;
    readonly IP10A_SLEPA_POZEMNI_KOMUNIKACE: 501;
    readonly IP10B_NAVEST_PRED_SLEPOU_POZEMNI_KOMUNIKACI: 502;
    readonly IP16_USPORADANI_JIZDNICH_PRUHU: 503;
    readonly IP17_USPORADANI_JIZDNICH_PRUHU: 504;
    readonly IP18A_ZVYSENI_POCTU_JIZDNICH_PRUHU: 505;
    readonly IP18B_SNIZENI_POCTU_JIZDNICH_PRUHU: 506;
    readonly IP18C_JIZDNI_PRUH_PRO_POMALA_VOZIDLA: 507;
    readonly IP19_RADICI_PRUHY: 508;
    readonly IP2_ZPOMALOVACI_PRAH: 509;
    readonly IP20A_VYHRAZENY_JIZDNI_PRUH: 510;
    readonly IP20B_KONEC_VYHRAZENEHO_JIZDNIHO_PRUHU: 511;
    readonly IP21_OMEZENI_V_JIZDNIM_PRUHU: 512;
    readonly IP22_ZMENA_ORGANIZACE_DOPRAVY: 513;
    readonly IP23A_OBJIZDENI_TRAMVAJE: 514;
    readonly IP23B_OBJIZDENI_TRAMVAJE_JIZDA_PODEL_TRAMVAJE_VLEVO: 515;
    readonly IP23C_SJIZDENI_VOZIDEL_VEREJNE_HROMADNE_DOPRAVY_OSOB_Z_TRAMVAJOVEHO_PASU: 516;
    readonly IP24_UNIKOVY_PRUH: 517;
    readonly IP28A_ZPOPLATNENI_PROVOZU: 518;
    readonly IP28B_NEJVYSSI_DOVOLENE_RYCHLOSTI: 519;
    readonly IP29_STRIDAVE_RAZENI: 520;
    readonly IP3_PODCHOD_NEBO_NADCHOD: 521;
    readonly IP30_STATNI_HRANICE: 522;
    readonly IP31A_MERENI_RYCHLOSTI: 523;
    readonly IP31B_KONEC_MERENI_RYCHLOSTI: 524;
    readonly IP32_BEZPECNY_ODSTUP: 525;
    readonly IP4A_JEDNOSMERNY_PROVOZ: 526;
    readonly IP4B_JEDNOSMERNY_PROVOZ: 527;
    readonly IP5_DOPORUCENA_RYCHLOST: 528;
    readonly IP6_PRECHOD_PRO_CHODCE: 529;
    readonly IP7_PREJEZD_PRO_CYKLISTY: 530;
    readonly IP9_NOUZOVE_STANI: 531;
    readonly IP4C_CYKLO_OBOUSMERNA_KOMUNIKACE: 532;
    readonly IP12_VYHRAZENA_MISTA_PRO_DOBIJENI: 533;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZIPValue = (typeof CKZNazevSDZIP)[keyof typeof CKZNazevSDZIP];
/** CKZNazevSDZIPP */
export declare const CKZNazevSDZIPP: {
    readonly IP11A_PARKOVISTE: 500;
    readonly IP11B_PARKOVISTE_KOLME_NEBO_SIKME_STANI: 501;
    readonly IP11C_PARKOVISTE_PODELNE_STANI: 502;
    readonly IP11D_PARKOVISTE_STANI_NA_CHODNIKU_KOLME_NEBO_SIKME: 503;
    readonly IP11E_PARKOVISTE_STANI_NA_CHODNIKU_PODELNE: 504;
    readonly IP11F_PARKOVISTE_CASTECNE_STANI_NA_CHODNIKU_KOLME_NEBO_SIKME: 505;
    readonly IP11G_PARKOVISTE_CASTECNE_STANI_NA_CHODNIKU_PODELNE: 506;
    readonly IP12_VYHRAZENE_PARKOVISTE: 507;
    readonly IP13A_KRYTE_PARKOVISTE: 508;
    readonly IP13B_PARKOVISTE_S_PARKOVACIM_KOTOUCEM: 509;
    readonly IP13C_PARKOVISTE_S_PARKOVACIM_AUTOMATEM: 510;
    readonly IP13D_PARKOVISTE_P_R: 511;
    readonly IP13E_PARKOVISTE_K_R: 512;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZIPPValue = (typeof CKZNazevSDZIPP)[keyof typeof CKZNazevSDZIPP];
/** CKZNazevSDZISN */
export declare const CKZNazevSDZISN: {
    readonly IS10A_NAVEST_ZMENY_SMERU_JIZDY: 500;
    readonly IS10B_NAVEST_ZMENY_SMERU_JIZDY: 501;
    readonly IS10C_NAVEST_ZMENY_SMERU_JIZDY_PRED_PREKAZKOU: 502;
    readonly IS10D_NAVEST_ZMENY_SMERU_JIZDY_S_OMEZENIM: 503;
    readonly IS11A_NAVEST_PRED_OBJIZDKOU: 504;
    readonly IS13_BLIZKA_NAVEST: 505;
    readonly IS20_NAVEST_PRED_KRIZOVATKOU_PRO_CYKLISTY: 506;
    readonly IS23_NAVEST_PRO_KULTURNI_NEBO_TURISTICKY_CIL: 507;
    readonly IS6B_NAVEST_PRED_KRIZOVATKOU: 508;
    readonly IS6D_NAVEST_PRED_KRIZOVATKOU: 509;
    readonly IS6E_SMEROVA_NAVEST_PRO_SMER_PRIMO: 510;
    readonly IS6F_SMEROVA_NAVEST_PRED_ODBOCENIM: 511;
    readonly IS6G_SMEROVA_NAVEST_PRED_ODBOCENIM: 512;
    readonly IS7A_SMEROVA_NAVEST_PRO_ODBOCENI: 513;
    readonly IS8A_DALKOVA_NAVEST_S_SIPKOU: 514;
    readonly IS8B_DALKOVA_NAVEST_SE_VZDALENOSTMI: 515;
    readonly IS9A_NAVEST_PRED_UROVNOVOU_KRIZOVATKOU: 516;
    readonly IS9B_NAVEST_PRED_OKRUZNI_KRIZOVATKOU: 517;
    readonly IS9C_NAVEST_PRED_KRIZOVATKOU_S_OMEZENIM: 518;
    readonly IS9D_NAVEST_PRED_KRIZOVATKOU_S_OMEZENIM: 519;
    readonly IS9E_NAVEST_PRED_KRIZOVATKOU_S_OMEZENIM: 520;
    readonly IS6C_NAVEST_PRED_KRIZOVATKOU: 521;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZISNValue = (typeof CKZNazevSDZISN)[keyof typeof CKZNazevSDZISN];
/** CKZNazevSDZIS */
export declare const CKZNazevSDZIS: {
    readonly IS14_HRANICE_UZEMNIHO_CELKU: 500;
    readonly IS15A_JINY_NAZEV: 501;
    readonly IS15B_JINY_NAZEV: 502;
    readonly IS16A_CISLO_DALNICE: 503;
    readonly IS16B_CISLO_SILNICE: 504;
    readonly IS17_CISLO_SILNICE_PRO_MEZINARODNI_PROVOZ: 505;
    readonly IS18A_KILOMETROVNIK: 506;
    readonly IS18B_KILOMETROVNIK: 507;
    readonly IS21D_KONEC_CYKLISTICKE_TRASY: 508;
    readonly IS22A_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 509;
    readonly IS22B_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 510;
    readonly IS22C_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 511;
    readonly IS22D_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 512;
    readonly IS22E_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 513;
    readonly IS22F_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 514;
    readonly IS24A_KULTURNI_NEBO_TURISTICKY_CIL: 515;
    readonly IS24C_KOMUNALNI_CIL: 516;
    readonly IS6A_OZNACENI_KRIZOVATKY: 517;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZISValue = (typeof CKZNazevSDZIS)[keyof typeof CKZNazevSDZIS];
/** CKZNazevSDZISS */
export declare const CKZNazevSDZISS: {
    readonly IS11B_SMEROVA_TABULE_PRO_VYZNACENI_OBJIZDKY: 500;
    readonly IS11C_SMEROVA_TABULE_PRO_VYZNACENI_OBJIZDKY: 501;
    readonly IS11D_SMEROVA_TABULE_PRO_VYZNACENI_OBJIZDKY: 502;
    readonly IS19A_SMEROVA_TABULE_PRO_CYKLISTY_PRIMO: 503;
    readonly IS19B_SMEROVA_TABULE_PRO_CYKLISTY_VLEVO: 504;
    readonly IS19C_SMEROVA_TABULE_PRO_CYKLISTY_VPRAVO: 505;
    readonly IS1A_SMEROVA_TABULE_PRO_PRIJEZD_K_DALNICI_PRIMO: 506;
    readonly IS1B_SMEROVA_TABULE_PRO_PRIJEZD_K_DALNICI_VLEVO: 507;
    readonly IS1C_SMEROVA_TABULE_PRO_PRIJEZD_K_DALNICI_VPRAVO: 508;
    readonly IS1D_SMEROVA_TABULE_PRED_NAJEZDEM_NA_DALNICI_JEJI_CIL_CILE_A_CISLO_PRIMO: 509;
    readonly IS1E_SMEROVA_TABULE_PRED_NAJEZDEM_NA_DALNICI_JEJI_CIL_CILE_A_CISLO_VLEVO: 510;
    readonly IS1F_SMEROVA_TABULE_PRED_NAJEZDEM_NA_DALNICI_JEJI_CIL_CILE_A_CISLO_VPRAVO: 511;
    readonly IS21A_SMEROVA_TABULKA_PRO_CYKLISTY_PRIMO: 512;
    readonly IS21B_SMEROVA_TABULKA_PRO_CYKLISTY_VLEVO: 513;
    readonly IS21C_SMEROVA_TABULKA_PRO_CYKLISTY_VPRAVO: 514;
    readonly IS24B_SMEROVA_TABULE_PRO_KULTURNI_NEBO_TURISTICKY_CIL: 515;
    readonly IS2A_SMEROVA_TABULE_PRO_PRIJEZD_K_SILNICI_PRO_MOTOROVA_VOZIDLA_PRIMO: 516;
    readonly IS2B_SMEROVA_TABULE_PRO_PRIJEZD_K_SILNICI_PRO_MOTOROVA_VOZIDLA_VLEVO: 517;
    readonly IS2C_SMEROVA_TABULE_PRO_PRIJEZD_K_SILNICI_PRO_MOTOROVA_VOZIDLA_VPRAVO: 518;
    readonly IS2D_SMEROVA_TABULE_PRED_NAJEZDEM_NA_SILNICI_PRO_MOT_VOZIDLA_JEJI_CIL_CILE_A_CISLO_PRIMO: 519;
    readonly IS2E_SMEROVA_TABULE_PRED_NAJEZDEM_NA_SILNICI_PRO_MOT_VOZIDLA_JEJI_CIL_CILE_A_CISLO_VLEVO: 520;
    readonly IS2F_SMEROVA_TABULE_PRED_NAJEZDEM_NA_SILNICI_PRO_MOT_VOZIDLA_JEJI_CIL_CILE_A_CISLO_VPRAVO: 521;
    readonly IS3A_SMEROVA_TABULE_S_CILEM_PRIMO: 522;
    readonly IS3B_SMEROVA_TABULE_S_CILEM_VLEVO: 523;
    readonly IS3C_SMEROVA_TABULE_S_CILEM_VPRAVO: 524;
    readonly IS4A_SMEROVA_TABULE_S_MISTNIM_CILEM_PRIMO: 525;
    readonly IS4B_SMEROVA_TABULE_S_MISTNIM_CILEM_VLEVO: 526;
    readonly IS4C_SMEROVA_TABULE_S_MISTNIM_CILEM_VPRAVO: 527;
    readonly IS5_SMEROVA_TABULE_S_JINYM_CILEM: 528;
    readonly IS7B_SMEROVA_TABULE_PRO_VYJEZD: 529;
    readonly IS12_NAHRADNI_TRASY_DALNIC: 530;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZISSValue = (typeof CKZNazevSDZISS)[keyof typeof CKZNazevSDZISS];
/** CKZNazevSDZIZ */
export declare const CKZNazevSDZIZ: {
    readonly IZ1A_DALNICE: 500;
    readonly IZ1B_KONEC_DALNICE: 501;
    readonly IZ2A_SILNICE_PRO_MOTOROVA_VOZIDLA: 502;
    readonly IZ2B_KONEC_SILNICE_PRO_MOTOROVA_VOZIDLA: 503;
    readonly IZ3A_TUNEL: 504;
    readonly IZ3B_KONEC_TUNELU: 505;
    readonly IZ4A_OBEC: 506;
    readonly IZ4B_KONEC_OBCE: 507;
    readonly IZ4C_OBEC_V_JAZYCE_NARODNOSTNI_MENSINY: 508;
    readonly IZ4D_KONEC_OBCE_V_JAZYCE_NARODNOSTNI_MENSINY: 509;
    readonly IZ5A_OBYTNA_ZONA: 510;
    readonly IZ5B_KONEC_OBYTNE_ZONY: 511;
    readonly IZ6A_PESI_ZONA: 512;
    readonly IZ6B_KONEC_PESI_ZONY: 513;
    readonly IZ7A_NIZKOEMISNI_ZONA: 514;
    readonly IZ7B_KONEC_NIZKOEMISNI_ZONY: 515;
    readonly IZ8A_ZONA_S_DOPRAVNIM_OMEZENIM: 516;
    readonly IZ8B_KONEC_ZONY_S_DOPRAVNIM_OMEZENIM: 517;
    readonly IZ9A_ZONA_PRO_CYKLISTY: 518;
    readonly IZ9B_KONEC_ZONY_PRO_CYKLISTY: 519;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZIZValue = (typeof CKZNazevSDZIZ)[keyof typeof CKZNazevSDZIZ];
/** CKZNazevSDZP */
export declare const CKZNazevSDZP: {
    readonly P1_KRIZOVATKA_S_VEDLEJSI_POZEMNI_KOMUNIKACI: 500;
    readonly P2_HLAVNI_POZEMNI_KOMUNIKACE: 501;
    readonly P3_KONEC_HLAVNI_POZEMNI_KOMUNIKACE: 502;
    readonly P4_DEJ_PREDNOST_V_JIZDE: 503;
    readonly P5_DEJ_PREDNOST_V_JIZDE_TRAMVAJI: 504;
    readonly P6_STUJ_DEJ_PREDNOST_V_JIZDE: 505;
    readonly P7_PREDNOST_PROTIJEDOUCICH_VOZIDEL: 506;
    readonly P8_PREDNOST_PRED_PROTIJEDOUCIMI_VOZIDLY: 507;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZPValue = (typeof CKZNazevSDZP)[keyof typeof CKZNazevSDZP];
/** CKZNazevSDZB */
export declare const CKZNazevSDZB: {
    readonly B1_ZAKAZ_VJEZDU_VSECH_VOZIDEL_V_OBOU_SMERECH: 500;
    readonly B10_ZAKAZ_VJEZDU_RUCNICH_VOZIKU: 501;
    readonly B11_ZAKAZ_VJEZDU_VSECH_MOTOROVYCH_VOZIDEL: 502;
    readonly B12_ZAKAZ_VJEZDU_VYZNACENYCH_VOZIDEL: 503;
    readonly B13_ZAKAZ_VJEZDU_VOZIDEL_JEJICHZ_OKAMZITA_HMOTNOST_PRESAHUJE_VYZNACENOU_MEZ: 504;
    readonly B14_ZAKAZ_VJEZDU_VOZIDEL_JEJICHZ_OKAMZITA_HMOTNOST_PRIP_NA_NAPRAVU_PRESAHUJE_VYZ_MEZ: 505;
    readonly B15_ZAKAZ_VJEZDU_VOZIDEL_JEJICHZ_SIRKA_PRESAHUJE_VYZNACENOU_MEZ: 506;
    readonly B16_ZAKAZ_VJEZDU_VOZIDEL_JEJICHZ_VYSKA_PRESAHUJE_VYZNACENOU_MEZ: 507;
    readonly B17_ZAKAZ_VJEZDU_VOZIDEL_NEBO_SOUPRAV_JEJICHZ_DELKA_PRESAHUJE_VYZNACENOU_MEZ: 508;
    readonly B18_ZAKAZ_VJEZDU_VOZIDEL_PREPRAVUJICICH_NEBEZPECNY_NAKLAD: 509;
    readonly B19_ZAKAZ_VJEZDU_VOZIDEL_PREPRAVUJICICH_NAKLAD_KTERY_MUZE_ZPUSOBIT_OHROZENI_ZIVOTNIHO_PROSTREDI: 510;
    readonly B2_ZAKAZ_VJEZDU_VSECH_VOZIDEL: 511;
    readonly B20A_NEJVYSSI_DOVOLENA_RYCHLOST: 512;
    readonly B20B_KONEC_NEJVYSSI_DOVOLENE_RYCHLOSTI: 513;
    readonly B21A_ZAKAZ_PREDJIZDENI: 514;
    readonly B21B_KONEC_ZAKAZU_PREDJIZDENI: 515;
    readonly B22A_ZAKAZ_PREDJIZDENI_PRO_NAKLADNI_AUTOMOBILY: 516;
    readonly B22B_KONEC_ZAKAZU_PREDJIZDENI_PRO_NAKLADNI_AUTOMOBILY: 517;
    readonly B23A_ZAKAZ_ZVUKOVYCH_VYSTRAZNYCH_ZNAMENI: 518;
    readonly B23B_KONEC_ZAKAZU_ZVUKOVYCH_VYSTRAZNYCH_ZNAMENI: 519;
    readonly B24A_ZAKAZ_ODBOCOVANI_VPRAVO: 520;
    readonly B24B_ZAKAZ_ODBOCOVANI_VLEVO: 521;
    readonly B25_ZAKAZ_OTACENI: 522;
    readonly B26_KONEC_VSECH_ZAKAZU: 523;
    readonly B27_POVINNOST_ZASTAVIT_VOZIDLO: 524;
    readonly B28_ZAKAZ_ZASTAVENI: 525;
    readonly B29_ZAKAZ_STANI: 526;
    readonly B3_ZAKAZ_VJEZDU_VSECH_MOTOROVYCH_VOZIDEL_S_VYJIMKOU_MOTOCYKLU_BEZ_POSTRANNIHO_VOZIKU: 527;
    readonly B30_ZAKAZ_VSTUPU_CHODCU: 528;
    readonly B30A_ZAKAZ_VJEZDU_OSOBNICH_PREPRAVNIKU: 529;
    readonly B31_ZAKAZ_VJEZDU_PRO_JEZDCE_NA_ZVIRETI: 530;
    readonly B32_JINY_ZAKAZ: 531;
    readonly B33_ZAKAZ_VJEZDU_MOTOROVYCH_VOZIDEL_S_PRIPOJNYM_VOZIDLEM: 532;
    readonly B34_NEJMENSI_VZDALENOST_MEZI_VOZIDLY: 533;
    readonly B4_ZAKAZ_VJEZDU_NAKLADNICH_AUTOMOBILU: 534;
    readonly B5_ZAKAZ_VJEZDU_AUTOBUSU: 535;
    readonly B6_ZAKAZ_VJEZDU_TRAKTORU: 536;
    readonly B7_ZAKAZ_VJEZDU_MOTOCYKLU: 537;
    readonly B8_ZAKAZ_VJEZDU_JIZDNICH_KOL: 538;
    readonly B9_ZAKAZ_VJEZDU_POTAHOVYCH_VOZIDEL: 539;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevSDZBValue = (typeof CKZNazevSDZB)[keyof typeof CKZNazevSDZB];
/** CKZNazevVDZ */
export declare const CKZNazevVDZ: {
    readonly V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_1: 500;
    readonly V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_2: 501;
    readonly V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_3: 502;
    readonly V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_4: 503;
    readonly V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_5: 504;
    readonly V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_6: 505;
    readonly V9A_SMEROVA_SIPKA_ROVNE: 506;
    readonly V9A_SMEROVA_SIPKA_VLEVO: 507;
    readonly V9A_SMEROVA_SIPKA_VLEVO_A_ROVNE: 508;
    readonly V9A_SMEROVA_SIPKA_VPRAVO: 509;
    readonly V9A_SMEROVA_SIPKA_VPRAVO_A_ROVNE: 510;
    readonly V9A_SMEROVA_SIPKA_VPRAVO_A_VLEVO: 511;
    readonly V9B_PREDBEZNA_SIPKA_VLEVO: 512;
    readonly V9B_PREDBEZNA_SIPKA_VPRAVO: 513;
    readonly V9C_PREDBEZNA_SIPKA_VLEVO: 514;
    readonly V9C_PREDBEZNA_SIPKA_VPRAVO: 515;
    readonly V14_JIZDNI_PRUH_PRO_CYKLISTY: 516;
    readonly V15_NAPIS_NA_VOZOVCE_AUTOBUS: 517;
    readonly V15_NAPIS_NA_VOZOVCE_DEJ_PREDNOST_V_JIZDE: 518;
    readonly V15_NAPIS_NA_VOZOVCE_EXIT: 519;
    readonly V15_NAPIS_NA_VOZOVCE_MISTO_PRO_INVALIDY: 520;
    readonly V15_NAPIS_NA_VOZOVCE_NABIJECI_STANICE: 521;
    readonly V15_NAPIS_NA_VOZOVCE_STUJ_STOP: 522;
    readonly V15_NAPIS_NA_VOZOVCE_TRAMVAJ: 523;
    readonly V16_BEZPECNY_ODSTUP: 524;
    readonly V17_TROJUHELNIKY: 525;
    readonly V20_PIKTOGRAMOVY_KORIDOR_PRO_CYKLISTY: 526;
    readonly A11_PRECHOD: 527;
    readonly A12A_CHODCI: 528;
    readonly A12B_DETI: 529;
    readonly A19_CYKLISTE: 530;
    readonly A1A_ZATACKA_VPRAVO: 531;
    readonly A1B_ZATACKA_VLEVO: 532;
    readonly A22_JINE_NEBEZPECI: 533;
    readonly A25_TRAMVAJ: 534;
    readonly A32A_ZELEZNICNI_PREJEZD: 535;
    readonly A3_KRIZOVATKA: 536;
    readonly A4_KRUHOY_OBJEZD: 537;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevVDZValue = (typeof CKZNazevVDZ)[keyof typeof CKZNazevVDZ];
/** CKZNazevVDZLinieAPlocha */
export declare const CKZNazevVDZLinieAPlocha: {
    readonly V1A_PODELNA_CARA_SOUVISLA: 500;
    readonly V1B_DVOJITA_PODELNA_CARA_SOUVISLA: 501;
    readonly V2A_PODELNA_CARA_PRERUSOVANA_S_ROZHLEDEM: 502;
    readonly V2B_PODELNA_CARA_PRERUSOVANA_BEZ_ROZHLEDU: 503;
    readonly V2C_DVOJITA_PODELNA_CARA_PRERUSOVANA: 504;
    readonly V3_PODELNA_CARA_SOUVISLA_DOPLNENA_CAROU_PRERUSOVANOU: 505;
    readonly V4_VODICI_CARA: 506;
    readonly V5_PRICNA_CARA_SOUVISLA: 507;
    readonly V7A_PRECHOD_PRO_CHODCE: 508;
    readonly V7B_MISTO_PRO_PRECHAZENI: 509;
    readonly V8A_PREJEZD_PRO_CYKLISTY: 510;
    readonly V8B_PREJEZD_PRO_CYKLISTY_PRIMKNUTY_K_PRECHODU_PRO_CHODCE: 511;
    readonly V8C_SDRUZENY_PRECHOD_PRO_CHODCE_A_PREJEZD_PRO_CYKLISTY: 512;
    readonly V10A_STANI_PODELNE: 513;
    readonly V10B_STANI_KOLME: 514;
    readonly V10C_STANI_SIKME: 515;
    readonly V10D_PARKOVACI_PRUH: 516;
    readonly V10E_VYHRAZENE_PARKOVISTE: 517;
    readonly V10F_VYHRAZENE_PARKOVISTE_PRO_VOZIDLO_PREPRAV_OSOBU_POSTIZENOU: 518;
    readonly V10G_OMEZENE_STANI: 519;
    readonly V11A_ZASTAVKA_AUTOBUSU_NEBO_TROLEJBUSU: 520;
    readonly V11B_ZASTAVKA_TRAMVAJE: 521;
    readonly V12A_ZLUTA_KLIKATA_CARA: 522;
    readonly V12B_ZLUTE_ZKRIZENE_CARY: 523;
    readonly V12C_ZAKAZ_ZASTAVENI: 524;
    readonly V12D_ZAKAZ_STANI: 525;
    readonly V12E_BILA_KLIKATA_CARA: 526;
    readonly V13_SIKME_ROVNOBEZNE_CARY: 527;
    readonly V18_OPTICKA_PSYCHOLOGICKA_BRZDA: 528;
    readonly V19_PROSTOR_PRO_CYKLISTY: 529;
    readonly PROTISKLUZOVA_PLOCHA: 531;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZNazevVDZLinieAPlochaValue = (typeof CKZNazevVDZLinieAPlocha)[keyof typeof CKZNazevVDZLinieAPlocha];
/** CKZTypObjektuZeleznicniDopravy */
export declare const CKZTypObjektuZeleznicniDopravy: {
    readonly IZOLOVANY_STYK: 501;
    readonly STYK_SVAR_U_VYHYBEK_A_KRIZOVATEK: 502;
    readonly ZACATEK_JAZYKA_VYHYBKY: 503;
    readonly MECHANICKE_NAVESTIDLO: 504;
    readonly INFORMACNI_TABULE_NEELEKTRICKA: 506;
    readonly NAMEZNIK: 507;
    readonly PRESTAVNIK_ZAVORNIK: 508;
    readonly STANICNIK: 510;
    readonly SVETELNA_SIGNALIZACE_VOLNE_STOJICI: 511;
    readonly SVETELNA_SIGNALIZACE_NA_OBJEKTU: 512;
    readonly SVETELNE_NAVESTIDLO_PREDZVEST: 513;
    readonly ZACATEK_A_KONEC_ELEKTRIFIKOVANEHO_USEKU: 518;
    readonly ZARAZEDLO: 519;
    readonly BOD_KRIZOVATKY: 520;
    readonly BALIZA: 521;
    readonly SNIMAC_POCITACE_NAPRAV: 522;
    readonly VYKOLEJKA: 523;
    readonly BOD_ZMENY_KRIVOSTI: 524;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypObjektuZeleznicniDopravyValue = (typeof CKZTypObjektuZeleznicniDopravy)[keyof typeof CKZTypObjektuZeleznicniDopravy];
/** CKZTypObjektuTramvajoveDopravy */
export declare const CKZTypObjektuTramvajoveDopravy: {
    readonly BAHNIK_KOLEJOVA_SACHTA: 501;
    readonly ELEKTROMAGNETICKY_PRESTAVNIK: 502;
    readonly ELEKTRONICKY_INFORMACNI_PANEL: 503;
    readonly IRCOM: 504;
    readonly KOLEJOVA_DILATACE: 505;
    readonly KOLEJOVE_ODVODNENI: 506;
    readonly KOLEJOVY_KONTAKT: 507;
    readonly KOTVA_ZAVES_RUZICE: 508;
    readonly MAZADLO_KOLEJNIC: 509;
    readonly NAMEZNIK: 510;
    readonly OVLADACI_SKRIN_EOV: 511;
    readonly PRIDRZNICE: 512;
    readonly SKRIN_EPD: 513;
    readonly STAVECI_SKRIN: 514;
    readonly TROLEJOVY_KONTAKT: 515;
    readonly UKOLEJNENI: 516;
    readonly VYHYBKA: 517;
    readonly VYSTRAZNA_DESKA: 518;
    readonly VYTAPENI_VYHYBKY: 519;
    readonly ZARAZEDLO: 520;
    readonly ZARAZKA: 521;
    readonly ZASOBNIK_PISKU: 522;
    readonly ZEMNIC: 523;
    readonly RFID_TAG: 524;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypObjektuTramvajoveDopravyValue = (typeof CKZTypObjektuTramvajoveDopravy)[keyof typeof CKZTypObjektuTramvajoveDopravy];
/** CKZOmezeniParkoviste */
export declare const CKZOmezeniParkoviste: {
    readonly BUS: 500;
    readonly INVALIDA: 501;
    readonly K_OBJEKTU: 502;
    readonly NEROZLISENE: 503;
    readonly POPLATEK: 504;
    readonly SPZ: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZOmezeniParkovisteValue = (typeof CKZOmezeniParkoviste)[keyof typeof CKZOmezeniParkoviste];
/** CKZOstatniMapoveZnacky */
export declare const CKZOstatniMapoveZnacky: {
    readonly BUDOVA_DREVENA: 500;
    readonly HLOUBKA_ULOZENI: 501;
    readonly KOSTEL: 502;
    readonly MOCAL: 503;
    readonly MOCAL_PRUCHODNY: 504;
    readonly MOCAL_NEPRUCHODNY: 505;
    readonly PASTVINA: 506;
    readonly RAKOSI: 507;
    readonly SEVERKA_MALA: 508;
    readonly SEVERKA_VELKA: 509;
    readonly SKALY: 510;
    readonly SMER_VODNIHO_TOKU: 511;
    readonly SYNAGOGA: 512;
    readonly SIPKA_K_PARCELNIMU_CISLU: 513;
    readonly VYSKA_VODOROVNE_ROVINY: 514;
    readonly VYSKA_STUPNE: 515;
    readonly VLASTNICKA_HRANICE_LOMOVY_BOD: 516;
    readonly VSTUP_DO_JESKYNE: 517;
    readonly VSTUP_OHRANICENI_VSTUPU: 518;
    readonly ZBORENISTE: 519;
    readonly JINY: 902;
};
export type CKZOstatniMapoveZnackyValue = (typeof CKZOstatniMapoveZnacky)[keyof typeof CKZOstatniMapoveZnacky];
/** CKZRozsirenyTypObjektuElektronickeKomunikace */
export declare const CKZRozsirenyTypObjektuElektronickeKomunikace: {
    readonly BTS_BUNKOVA_STANICE: 500;
    readonly RADIOVA_STANICE_BEZ_ROLISENI: 501;
    readonly VEREJNY_ROZHLAS_BEZDRATOVY: 502;
    readonly VYSILAC: 503;
    readonly PROPOJOVACI_OBJEKT: 504;
    readonly KABELOVA_BUNKA: 505;
    readonly KABELOVA_REZERVA: 506;
    readonly KABELOVA_SKRIN_NA_SLOUPU: 507;
    readonly KABELOVA_SKRIN_NA_ZDI: 508;
    readonly KABELOVA_SKRIN_SAMOSTATNA: 509;
    readonly KABELOVY_DOPLNEK: 510;
    readonly KABELOVY_KONCOVY_KRYT: 511;
    readonly MAGNET: 512;
    readonly MARKER: 513;
    readonly OPTICKA_SITOVA_JEDNOTKA: 514;
    readonly OPTOREZERVA: 515;
    readonly PRECHOD_NADZEMNI_PODZEMNI: 516;
    readonly PREPOJOVACI_BOD: 517;
    readonly PUPINACNI_SKRIN: 518;
    readonly RETRANSLACNI_STANICE: 519;
    readonly SPOJKA_NA_METALICKEM_KABELU: 520;
    readonly SPOJKA_NA_OPTICKEM_KABELU: 521;
    readonly SPOJKA_ROZDELOVACI_NA_METALICKEM_KABELU: 522;
    readonly SPOJKA_ROZDELOVACI_NA_OPTICKEM_KABELU: 523;
    readonly TRUBKOVA_SPOJKA: 524;
    readonly TRUBKOVY_KONCOVY_KRYT: 525;
    readonly UCASTNICKY_ROZVADEC: 526;
    readonly SPECIFICKY_BOD: 527;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZRozsirenyTypObjektuElektronickeKomunikaceValue = (typeof CKZRozsirenyTypObjektuElektronickeKomunikace)[keyof typeof CKZRozsirenyTypObjektuElektronickeKomunikace];
/** CKZRozsirenyTypObjektuElektrickehoVedeni */
export declare const CKZRozsirenyTypObjektuElektrickehoVedeni: {
    readonly BEZPECNOSTNI_TABULKA: 500;
    readonly BEZPECNOSTNI_ZAVES: 501;
    readonly ELEKTROMERNY_ROZVADEC: 502;
    readonly KABELOVA_KONCOVKA: 503;
    readonly KABELOVA_SKRIN_NA_SLOUPU: 504;
    readonly KABELOVA_SKRIN_NA_ZDI: 505;
    readonly KABELOVA_SKRIN_SAMOSTATNA: 506;
    readonly KABELOVA_SPOJKA: 507;
    readonly KABELOVA_T_SPOJKA: 508;
    readonly KABELOVA_REZERVA: 509;
    readonly KOTVA: 510;
    readonly PRECHOD_NADZEMNI_PODZEMNI: 511;
    readonly PRIPOJKOVA_SKRIN: 512;
    readonly PUPINACNI_SKRIN: 513;
    readonly ROZPOJOVACI_SKRIN: 514;
    readonly ROZVADEC_NN: 515;
    readonly DELICI_BOD_VEREJNEHO_OSVETLENI: 516;
    readonly SVODIC_PREPETI: 517;
    readonly TRAFOSTANICE_SLOUPOVA: 518;
    readonly TRAFOSTANICE_VNITRNI: 519;
    readonly USEKOVY_ODPOJOVAC: 520;
    readonly UZEMNENI: 521;
    readonly VZPERA: 522;
    readonly ZAPINACI_BOD_VEREJNEHO_OSVETLENI: 523;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZRozsirenyTypObjektuElektrickehoVedeniValue = (typeof CKZRozsirenyTypObjektuElektrickehoVedeni)[keyof typeof CKZRozsirenyTypObjektuElektrickehoVedeni];
/** CKZRozsirenyTypObjektuStokoveSite */
export declare const CKZRozsirenyTypObjektuStokoveSite: {
    readonly JIMKA_ZUMPA: 500;
    readonly KANALIZACNI_NADRZ: 501;
    readonly LAPAK_SPLAVENIN: 502;
    readonly ODDELOVAC_DESTE: 503;
    readonly ODVODNOVAC: 504;
    readonly REDUKCE_DIMENZE_MIMO_SACHTU: 505;
    readonly SKLUZ: 506;
    readonly SPADISTE: 507;
    readonly SACHTA_NA_TLAKOVE_KANALIZACI: 508;
    readonly SOUPE_TLAKOVE_KANALIZACI: 509;
    readonly UZAVER_KANALIZACNI_SITE: 510;
    readonly VETRACI_SACHTA: 511;
    readonly VPUST_KANALIZACNI_SITE: 512;
    readonly VZDUSNIKOVA_SACHTA: 513;
    readonly ZMENA_MATERIALU_MIMO_SACHTU: 514;
    readonly ZMENA_PRUMERU_MIMO_SACHTU: 515;
    readonly ZPETNA_KLAPKA: 516;
    readonly LAPOL_ODLUCOVAC_TUKU: 517;
    readonly DRENAZNI_SACHTA: 518;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZRozsirenyTypObjektuStokoveSiteValue = (typeof CKZRozsirenyTypObjektuStokoveSite)[keyof typeof CKZRozsirenyTypObjektuStokoveSite];
/** CKZRozsirenyTypObjektuKolektoru */
export declare const CKZRozsirenyTypObjektuKolektoru: {
    readonly KABELOVA_LAVKA: 500;
    readonly KOMORA: 501;
    readonly OSTATNI_VYSTROJ: 502;
    readonly POZARNI_UZAVER: 503;
    readonly VENTIL: 504;
    readonly VSTUP: 505;
    readonly VZDUSNIKOVA_SACHTA: 506;
    readonly ZEBRIK: 507;
    readonly PASAVANT: 508;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZRozsirenyTypObjektuKolektoruValue = (typeof CKZRozsirenyTypObjektuKolektoru)[keyof typeof CKZRozsirenyTypObjektuKolektoru];
/** CKZRozsirenyTypObjektuPlynovodu */
export declare const CKZRozsirenyTypObjektuPlynovodu: {
    readonly ARMATURNI_SACHTA: 500;
    readonly BALONOVACI_HRDLO: 501;
    readonly CICHACKA: 502;
    readonly HLAVNI_UZAVER_PLYNU: 503;
    readonly IZOLACNI_SPOJ: 504;
    readonly KAPAK_ODVODNOVAC: 505;
    readonly KOMPENZATOR: 506;
    readonly KONTROLNI_MERICI_VYVOD: 507;
    readonly KRIZENI: 508;
    readonly MERICI_SONDA_STANICE: 509;
    readonly ODBERNE_MISTO: 510;
    readonly ODFUK: 511;
    readonly ODVZDUSNUJICI_ARMATURA: 512;
    readonly REDUKCE: 513;
    readonly SITOVY_REGULATOR: 514;
    readonly SPAD_PLYNOVODU: 515;
    readonly SPOJKA: 516;
    readonly SVAR: 517;
    readonly UKONCENI_ZASLEPKOU: 518;
    readonly UZAVER: 519;
    readonly VYVOD_SIGNALIZACNIHO_VODICE: 520;
    readonly VZDUSNIK: 521;
    readonly ZMENA_MATERIALU: 522;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZRozsirenyTypObjektuPlynovoduValue = (typeof CKZRozsirenyTypObjektuPlynovodu)[keyof typeof CKZRozsirenyTypObjektuPlynovodu];
/** CKZRozsirenyTypObjektuProduktovodu */
export declare const CKZRozsirenyTypObjektuProduktovodu: {
    readonly KATODOVA_OCHRANA: 500;
    readonly RIDICI_SYSTEM: 501;
    readonly TELEMETRICKA_STANICE: 502;
    readonly TRVALE_VYSTROJENY_VRT_JIMANI_BIOPLYNU: 503;
    readonly UZAVER: 504;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZRozsirenyTypObjektuProduktovoduValue = (typeof CKZRozsirenyTypObjektuProduktovodu)[keyof typeof CKZRozsirenyTypObjektuProduktovodu];
/** CKZRozsirenyTypObjektuTeplovodu */
export declare const CKZRozsirenyTypObjektuTeplovodu: {
    readonly ETAZ_KOLMA: 500;
    readonly ETAZ_SIKMA: 501;
    readonly KLAPKA: 502;
    readonly KOHOUT: 503;
    readonly KOMPENZATOR_UCPAVKOVY: 504;
    readonly KOMPENZATOR_VLNOVCOVY: 505;
    readonly KONEC_POTRUBI: 506;
    readonly MERIDLO: 507;
    readonly ODBERNE_MISTO: 508;
    readonly ODBOCKA_KOLMA: 509;
    readonly ODBOCKA_PARALELNI: 510;
    readonly ODVADEC_KONDENZATU: 511;
    readonly ODVETRANI_TEPLOVODU: 512;
    readonly ODVZDUSNENI: 513;
    readonly PEVNY_BOD: 514;
    readonly PLYNOTESNY_UZAVER: 515;
    readonly PLYNOVA_KOTELNA: 516;
    readonly PREDAVACI_STANICE: 517;
    readonly PRIRUBA: 518;
    readonly REDUKCE: 519;
    readonly REGULACNI_STANICE: 520;
    readonly SPOJKA: 521;
    readonly SVAR: 522;
    readonly ULOZENI_POTRUBI_KLUZNE: 523;
    readonly ULOZENI_POTRUBI_OSOVE: 524;
    readonly VENTIL: 525;
    readonly VYMENIKOVA_STANICE: 526;
    readonly VYTOPNA: 527;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZRozsirenyTypObjektuTeplovoduValue = (typeof CKZRozsirenyTypObjektuTeplovodu)[keyof typeof CKZRozsirenyTypObjektuTeplovodu];
/** CKZRozsirenyTypObjektuVodovodu */
export declare const CKZRozsirenyTypObjektuVodovodu: {
    readonly ATS_VODOVODNI_SITE: 500;
    readonly KALNIK: 503;
    readonly KOMPENZATOR: 504;
    readonly ODBERNE_MISTO: 505;
    readonly PRUTOKOMER: 506;
    readonly PRERUSOVACI_KOMORA: 507;
    readonly REDUKCE_ZMENA_PRUMERU: 508;
    readonly SOUPE_VODOVODNI_SITE: 509;
    readonly TLAKOMER: 510;
    readonly UZAVER: 511;
    readonly VODOMER: 512;
    readonly VODOMERNA_SACHTA: 513;
    readonly VYUSTNI_OBJEKT_VODOVODNI_SITE: 514;
    readonly VZDUSNIKOVA_SACHTA: 515;
    readonly ZMENA_MATERIALU: 516;
    readonly VODOVODNI_VYPUST: 517;
    readonly HLAVNI_LOMOVY_BOD_NA_VODOVODNIM_RADU: 518;
    readonly ZAVLAZOVACI_TRISKA_POSTRIKOVAC: 519;
    readonly CERPADLO: 520;
    readonly OBJEKT_ZASNEZENI: 521;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZRozsirenyTypObjektuVodovoduValue = (typeof CKZRozsirenyTypObjektuVodovodu)[keyof typeof CKZRozsirenyTypObjektuVodovodu];
/** CKZSklonitost */
export declare const CKZSklonitost: {
    readonly DO_1_5: 500;
    readonly NAD_1_2: 501;
    readonly OD_1_5_DO_1_2: 502;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZSklonitostValue = (typeof CKZSklonitost)[keyof typeof CKZSklonitost];
/** CKZStabilizaceBodu */
export declare const CKZStabilizaceBodu: {
    readonly BEZ_STABILIZACE: 500;
    readonly DREVENY_KOLIK: 501;
    readonly GEOBRCKO: 502;
    readonly HLOUBKOVA: 503;
    readonly HREB: 504;
    readonly KAMEN: 505;
    readonly MEZNIK: 506;
    readonly PILIR: 507;
    readonly ROXORA: 508;
    readonly STABILIZACE_DO_STAV_KONSTRUKCE_CEPOVA_ZNACKA: 509;
    readonly STABILIZACE_DO_STAV_KONSTRUKCE_HREBOVA_ZNACKA: 510;
    readonly STABILIZACE_DO_STAV_KONSTRUKCE_STITEK: 511;
    readonly STABILIZACE_DO_STAV_KONSTRUKCE_TERC: 512;
    readonly TEZKA: 513;
    readonly NEZJISTENO: 900;
    readonly JINY: 902;
};
export type CKZStabilizaceBoduValue = (typeof CKZStabilizaceBodu)[keyof typeof CKZStabilizaceBodu];
/** CKZStavHrobovehoMista */
export declare const CKZStavHrobovehoMista: {
    readonly DOBRY: 500;
    readonly HAVARIJNI: 501;
    readonly SPATNY: 502;
    readonly VYBORNY: 503;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZStavHrobovehoMistaValue = (typeof CKZStavHrobovehoMista)[keyof typeof CKZStavHrobovehoMista];
/** CKZStavStromu */
export declare const CKZStavStromu: {
    readonly DOBRY: 500;
    readonly MRTVY: 501;
    readonly NEBEZPECNY: 502;
    readonly SPATNY: 503;
    readonly VYBORNY: 504;
    readonly ZBYTKOVY: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZStavStromuValue = (typeof CKZStavStromu)[keyof typeof CKZStavStromu];
/** CKZTypBodovehoPrvkunaBudove */
export declare const CKZTypBodovehoPrvkunaBudove: {
    readonly ANTENA_SATELIT: 500;
    readonly GAJGR: 501;
    readonly HROMOSVOD: 502;
    readonly KOMIN: 503;
    readonly NEJVYSSI_BOD_STAVBY: 504;
    readonly VYVOD_VODOVODU: 505;
    readonly ZAUSTENI_KANALIZACE: 506;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypBodovehoPrvkunaBudoveValue = (typeof CKZTypBodovehoPrvkunaBudove)[keyof typeof CKZTypBodovehoPrvkunaBudove];
/** CKZTypBranky */
export declare const CKZTypBranky: {
    readonly BRANA: 500;
    readonly BRANKA: 501;
    readonly TEXASKA_BRANA: 502;
    readonly ZAVORA: 503;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypBrankyValue = (typeof CKZTypBranky)[keyof typeof CKZTypBranky];
/** CKZTypDopravnihoZarizeniBod */
export declare const CKZTypDopravnihoZarizeniBod: {
    readonly CLONA_PROTI_OSLNENI: 500;
    readonly ODRAZKA_DOPRAVNI_KNOFLIK: 501;
    readonly DOPRAVNI_ZNACKA_BEZ_ROZLISENI_DRUHU: 502;
    readonly DOPRAVNI_ZRCADLO: 503;
    readonly NASTAVEC_NA_SVODIDLA: 504;
    readonly PARKOVACI_AUTOMAT: 505;
    readonly SMEROVA_VODICI_ZVYRAZNUJICI_DESKA: 506;
    readonly SMEROVY_SLOUPEK_BALISETA: 507;
    readonly VYDEJNI_AUTOMAT_JIZDENEK_MHD: 508;
    readonly VYSTRAZNY_MAJACEK: 509;
    readonly VYSTRAZNIK_PZS: 510;
    readonly ZAVORA: 511;
    readonly ZPOMALOVACI_PRICNY_PRAH_NESTAVEBNI_BOD: 512;
    readonly ANTIPARKOVACI_SLOUPEK: 513;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypDopravnihoZarizeniBodValue = (typeof CKZTypDopravnihoZarizeniBod)[keyof typeof CKZTypDopravnihoZarizeniBod];
/** CKZTypDopravnihoZarizeniLinie */
export declare const CKZTypDopravnihoZarizeniLinie: {
    readonly CLONA_PROTI_OSLNENI: 500;
    readonly HRANA_NASTUPISTE: 501;
    readonly LINIOVE_RIZENI_DOPRAVY: 502;
    readonly VODICI_OBRUBNIK: 503;
    readonly VODICI_PRAH: 504;
    readonly VODICI_STENA: 505;
    readonly ZPOMALOVACI_PRICNY_PRAH_NESTAVEBNI_LINIE: 506;
    readonly ZABRANA: 507;
    readonly ABSORBER: 508;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypDopravnihoZarizeniLinieValue = (typeof CKZTypDopravnihoZarizeniLinie)[keyof typeof CKZTypDopravnihoZarizeniLinie];
/** CKZTypDulnihoObjektu */
export declare const CKZTypDulnihoObjektu: {
    readonly HLINISTE_PISKOVISTE_TEZBA_ZEMINY: 500;
    readonly JAMA: 501;
    readonly LOM_POVRCHOVY_DUL: 502;
    readonly POVRCHOVA_TEZEBNI_CINNOST_BEZ_ROZLISENI: 503;
    readonly PRUZKUMNA_SACHTICE: 504;
    readonly RASELINISTE_SLATINA: 505;
    readonly SONDA_KOPANA: 506;
    readonly SONDA_VRTANA: 507;
    readonly SONDOVA_RYHA: 508;
    readonly TRVALE_VYSTROJENY_VRT: 509;
    readonly USTI_STOLY_NEBO_UKLONNE_JAMY: 510;
    readonly JINE_DULNI_DILO: 511;
    readonly ULOZNE_MISTO_TEZEBNIHO_ODPADU: 512;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypDulnihoObjektuValue = (typeof CKZTypDulnihoObjektu)[keyof typeof CKZTypDulnihoObjektu];
/** CKZTypGeodetickehoBodu */
export declare const CKZTypGeodetickehoBodu: {
    readonly BOD_POLOHOVEHO_BODOVEHO_POLE_TIHOVY_BOD: 500;
    readonly BOD_MIKROSITE: 501;
    readonly BOD_PBPP: 502;
    readonly HLAVNI_BOD: 503;
    readonly HRANICNI_ZNAK_MEZNIK: 504;
    readonly KONSTRUKCNI_BOD: 505;
    readonly KONTROLNI_BOD: 506;
    readonly MERICKY_BOD: 507;
    readonly NIVELACNI_BOD: 508;
    readonly VLICOVACI_BOD: 509;
    readonly VYTYCOVACI_PROFILOVY_BOD: 510;
    readonly JINY: 902;
};
export type CKZTypGeodetickehoBoduValue = (typeof CKZTypGeodetickehoBodu)[keyof typeof CKZTypGeodetickehoBodu];
/** CKZTypHraniceKatastru */
export declare const CKZTypHraniceKatastru: {
    readonly BEPJ: 500;
    readonly DOCASNY_ZABOR: 501;
    readonly NAVRH_HRANICE: 502;
    readonly NAVRH_VB: 503;
    readonly PUPLF: 504;
    readonly RUSENA_HRANICE: 505;
    readonly TRVALY_ZABOR: 506;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypHraniceKatastruValue = (typeof CKZTypHraniceKatastru)[keyof typeof CKZTypHraniceKatastru];
/** CKZTypHraniceDSP */
export declare const CKZTypHraniceDSP: {
    readonly HRANICE_DOPRAVNI_STAVBY: 500;
    readonly HRANICE_OBJEKTU_OBRUBNIK_VYSKOVE_ODLISNY: 501;
    readonly HRANICE_OBJEKTU_NEROZLISENA: 502;
    readonly HRANICE_OBJEKTU_NESTAVEBNI_ZNACENI: 503;
    readonly HRANICE_OBJEKTU_STAVEBNI_ZMENA_POVRCHU: 504;
    readonly VNITRNI_CLENENI_DOPRAVNI_PLOCHY: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypHraniceDSPValue = (typeof CKZTypHraniceDSP)[keyof typeof CKZTypHraniceDSP];
/** CKZTypHranyDs */
export declare const CKZTypHranyDs: {
    readonly PRIKOP: 500;
    readonly ZAREZ: 501;
    readonly NASYP: 502;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypHranyDsValue = (typeof CKZTypHranyDs)[keyof typeof CKZTypHranyDs];
/** CKZTypHrobovehoMista */
export declare const CKZTypHrobovehoMista: {
    readonly JEDNOHROB: 500;
    readonly DVOUHROB: 501;
    readonly URNOVY_HROB: 502;
    readonly KOLUMBARIUM: 503;
    readonly EPITAFNI_DESKA: 504;
    readonly HROBKA: 505;
    readonly VSYPOVA_LOUCKA: 506;
    readonly ROZPTYLOVA_LOUCKA: 507;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypHrobovehoMistaValue = (typeof CKZTypHrobovehoMista)[keyof typeof CKZTypHrobovehoMista];
/** CKZTypITS */
export declare const CKZTypITS: {
    readonly AUTOMATICKY_SCITAC_DOPRAVY: 500;
    readonly DALNICNI_INFORMACNI_SYSTEM: 501;
    readonly INFORMACNI_PORTAL: 502;
    readonly KAMERA: 503;
    readonly MERENI_RYCHLOSTI_SAMOSTATNE: 504;
    readonly ZARIZENI_PRO_DYNAMICKE_VAZENI_VOZIDEL: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypITSValue = (typeof CKZTypITS)[keyof typeof CKZTypITS];
/** CKZTypKatastralniHranice */
export declare const CKZTypKatastralniHranice: {
    readonly PARCELNI_HRANICE: 500;
    readonly HRANICE_KATASTRALNI: 501;
    readonly HRANICE_KRAJSKA: 502;
    readonly HRANICE_OBECNI: 503;
    readonly HRANICE_OKRESNI: 504;
    readonly HRANICE_STATNI: 505;
    readonly HRANICE_ZJEDNODUSENE_EVIDENCE: 506;
    readonly VNITRNI_KRESBA: 507;
    readonly NEZJISTENO: 900;
};
export type CKZTypKatastralniHraniceValue = (typeof CKZTypKatastralniHranice)[keyof typeof CKZTypKatastralniHranice];
/** CKZTypKolektoru */
export declare const CKZTypKolektoru: {
    readonly PATERNI_KOLEKTOR: 500;
    readonly DISTRIBUCNI_KOLEKTOR: 501;
    readonly JEDNOSYSTEMOVY_KOLEKTOR: 502;
    readonly VICESYSTEMOVY_KOLEKTOR: 503;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypKolektoruValue = (typeof CKZTypKolektoru)[keyof typeof CKZTypKolektoru];
/** CKZTypKynety */
export declare const CKZTypKynety: {
    readonly VYKOP: 500;
    readonly PODVRT: 501;
    readonly PREKOP: 502;
    readonly OSA_NADZEMNIHO_VEDENI: 503;
    readonly SHYBKA: 504;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypKynetyValue = (typeof CKZTypKynety)[keyof typeof CKZTypKynety];
/** CKZTyplesa */
export declare const CKZTyplesa: {
    readonly HOSPODARSKY_LES_HOSPODARSKY_CELEK: 500;
    readonly HOSPODARSKY_LES_ODDELENI: 501;
    readonly HOSPODARSKY_LES_DILEC: 502;
    readonly HOSPODARSKY_LES_POROSTNI_SKUPINA: 503;
    readonly OCHRANNY_LES: 504;
    readonly LES_ZVLASTNIHO_URCENI: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
};
export type CKZTyplesaValue = (typeof CKZTyplesa)[keyof typeof CKZTyplesa];
/** CKZTypLinieCleneniBudovAStaveb */
export declare const CKZTypLinieCleneniBudovAStaveb: {
    readonly DVERE: 500;
    readonly HRANA: 501;
    readonly KLENBA: 502;
    readonly KROV: 503;
    readonly OKAP: 504;
    readonly OKNO: 505;
    readonly PODLAHA: 506;
    readonly PREKLAD: 507;
    readonly RIMSA_ATIKA: 508;
    readonly SCHOD: 509;
    readonly SPARA: 510;
    readonly STROP: 511;
    readonly STRECHA_HREBEN: 512;
    readonly STRECHA_PRESAH: 513;
    readonly STUPEN: 514;
    readonly SVISLA_HRANA: 515;
    readonly TERASA_BALKON: 516;
    readonly VODOROVNA_HRANA: 517;
    readonly VSTUP_DO_BUDOVY: 518;
    readonly HRANA_ZUMPY_SEPTIKU: 519;
    readonly VYTAH: 520;
    readonly ZASTRESENI: 521;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypLinieCleneniBudovAStavebValue = (typeof CKZTypLinieCleneniBudovAStaveb)[keyof typeof CKZTypLinieCleneniBudovAStaveb];
/** CKZTypLinieCleneniDopravniPlochy */
export declare const CKZTypLinieCleneniDopravniPlochy: {
    readonly DILATACE: 500;
    readonly MOST_LOZISKO: 502;
    readonly MOST_OPERA: 503;
    readonly MOST_PILIR: 504;
    readonly MOST_PODPERA: 505;
    readonly MOST_RIMSA: 506;
    readonly MOST_SPODNI_STAVBA: 507;
    readonly MOST_ZAVER: 508;
    readonly MOSTOVKA: 509;
    readonly OBRUBNIK_HRANENY: 510;
    readonly OBRUBNIK_KASSELSKY: 511;
    readonly OBRUBNIK_NAJEZDOVY: 512;
    readonly ROZHRANI: 514;
    readonly SVISLA_HRANA: 515;
    readonly HRANA_PROTIHLUKOVE_STENY_CLONY_OSTATNI_KRESBA: 516;
    readonly PROPUSTEK_OSTATNI_KRESBA: 517;
    readonly VYKLENEK_V_TUNELU_HRANA: 518;
    readonly ZELEZNICNI_PREJEZD_OSTATNI_KRESBA: 519;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypLinieCleneniDopravniPlochyValue = (typeof CKZTypLinieCleneniDopravniPlochy)[keyof typeof CKZTypLinieCleneniDopravniPlochy];
/** CKZTypLiniovehoPrvkuZelene */
export declare const CKZTypLiniovehoPrvkuZelene: {
    readonly ALEJ_STROMORADI: 500;
    readonly ZIVY_PLOT: 502;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypLiniovehoPrvkuZeleneValue = (typeof CKZTypLiniovehoPrvkuZelene)[keyof typeof CKZTypLiniovehoPrvkuZelene];
/** CKZTypLiniovehoVDZ */
export declare const CKZTypLiniovehoVDZ: {
    readonly OSTATNI_VODOROVNE_DOPRAVNI_ZNACKY: 500;
    readonly OZNACENI_STANI_A_PARKOVIST: 501;
    readonly OZNACENI_ZAKAZU_ZASTAVENI_A_STANI: 502;
    readonly OZNACENI_ZASTAVEK: 503;
    readonly PODELNE_CARY: 504;
    readonly PRICNE_CARY: 505;
    readonly PODELNY_DELICI_PRAH_ZVYSENY: 506;
    readonly NEZJISTENO: 900;
    readonly JINY: 902;
};
export type CKZTypLiniovehoVDZValue = (typeof CKZTypLiniovehoVDZ)[keyof typeof CKZTypLiniovehoVDZ];
/** CKZTypMobiliare */
export declare const CKZTypMobiliare: {
    readonly HERNI_PRVEK_HOUPACKA: 500;
    readonly HERNI_PRVEK_HRISTE: 501;
    readonly HERNI_PRVEK_KOLOTOC: 502;
    readonly HERNI_PRVEK_NA_PERU: 503;
    readonly HERNI_PRVEK_PISKOVISTE: 504;
    readonly HERNI_PRVEK_PROLEZACKA: 505;
    readonly HERNI_PRVEK_SKLUZAVKA: 506;
    readonly INFO_PANEL_TABULE: 507;
    readonly KONTEJNER: 508;
    readonly KOS_ODPADKOVY: 509;
    readonly KOS_PRO_PSY: 510;
    readonly KLEPAC: 511;
    readonly KVETINAC_ZARDINIERA: 512;
    readonly LAVICKA: 513;
    readonly PYTLIKY_PRO_PSY: 514;
    readonly REKLAMA: 515;
    readonly SMEROVKA: 516;
    readonly SPORTOVNI_PRVEK: 517;
    readonly STOJAN_NA_KOLA: 518;
    readonly STUL: 519;
    readonly TRIDENY_ODPAD: 520;
    readonly VYKLADNI_SKRIN_PROPAGACNI_OBJEKT: 521;
    readonly HERNI_PRVEK_NEURCENO: 522;
    readonly ZASUVKA_USB: 523;
    readonly ZASUVKA_220: 524;
    readonly NEZJISTENO: 900;
    readonly JINY: 902;
};
export type CKZTypMobiliareValue = (typeof CKZTypMobiliare)[keyof typeof CKZTypMobiliare];
/** CKZTypNazvu */
export declare const CKZTypNazvu: {
    readonly CISLO_EVIDENCNI: 500;
    readonly CISLO_ORIENTACNI: 501;
    readonly CISLO_POPISNE: 502;
    readonly CISLO_POPISNE_ORIENTACNI: 503;
    readonly MESTO_OBEC_CTVRT: 504;
    readonly MISTNI_NAZEV: 505;
    readonly NAZEV_KATASTRALNIHO_UZEMI: 506;
    readonly NAZEV_OBJEKTU: 507;
    readonly NAZEV_PRIRODNIHO_OBJEKTU: 508;
    readonly NAZEV_ULICE_SILNICE: 509;
    readonly NAZEV_VODNI_PLOCHY_TOKU: 510;
    readonly NAZEV_VRCHOLU: 511;
    readonly OBLAST: 512;
    readonly OSADA: 513;
    readonly PARCELNI_CISLO_POZEMKOVE: 514;
    readonly PARCELNI_CISLO_STAVEBNI: 515;
    readonly PARCELNI_CISLO_ZJEDNODUSENA_EVIDENCE: 516;
    readonly POMISTNI_NAZEV: 517;
    readonly POPIS_OBJEKTU: 518;
    readonly POPIS_PLOCHY: 519;
    readonly JINY: 902;
};
export type CKZTypNazvuValue = (typeof CKZTypNazvu)[keyof typeof CKZTypNazvu];
/** CKZTypNeviditelneHranice */
export declare const CKZTypNeviditelneHranice: {
    readonly BEZPECNOSTNI_PASMO: 500;
    readonly DOBYVACI_PROSTOR: 501;
    readonly EVROPSKY_VYZNAMNA_LOKALITA: 502;
    readonly HRANICE_UDRZBY: 503;
    readonly HRANICE_VODNIHO_ZDROJE: 504;
    readonly HRANICE_ZASTAVENEHO_UZEMI: 505;
    readonly CHRANENA_KRAJINNA_OBLAST: 506;
    readonly NARODNI_PARK: 507;
    readonly NARODNI_PRIRODNI_PAMATKA: 508;
    readonly NEMOVITA_KULTURNI_PAMATKA: 509;
    readonly NEMOVITA_NARODNI_KULTURNI_PAMATKA: 510;
    readonly OCHRANNE_PASMO_I_STUPNE_LECIVYCH_ZDROJ: 511;
    readonly OCHRANNE_PASMO_II_STUPNE_LECIVYCH_ZDROJU: 512;
    readonly OCHRANNE_PASMO_LESA: 513;
    readonly PAMATKOVA_REZERVACE: 514;
    readonly PAMATKOVA_ZONA: 515;
    readonly PASMO_HYGIENICKE_OCHRANY: 516;
    readonly PLOCHA_MELIORACE_OBVOD: 517;
    readonly PRIRODNI_PAMATKA: 518;
    readonly PRIRODNI_REZERVACE: 519;
    readonly PTACI_OBLAST: 520;
    readonly ZVLASTE_CHRANENE_UZEMI: 521;
    readonly NEZJISTENO: 900;
    readonly JINY: 902;
};
export type CKZTypNeviditelneHraniceValue = (typeof CKZTypNeviditelneHranice)[keyof typeof CKZTypNeviditelneHranice];
/** CKZTypObjektuZabezpeceni */
export declare const CKZTypObjektuZabezpeceni: {
    readonly ALARM: 500;
    readonly CIDLO: 501;
    readonly FOTOPAST: 502;
    readonly KAMERA: 503;
    readonly POZARNI_OCHRANA_S_DIODOVYMI_CLENY: 504;
    readonly POZARNI_OCHRANA_S_IZOL_SPOJEM_A_DIODOVYM_CLENEM: 505;
    readonly POZARNI_OCHRANA_S_IZOL_SPOJEM_A_MERICI_SONDOU: 506;
    readonly POZARNI_OCHRANA_S_VLASTNIM_ZARIZENIM: 507;
    readonly OVLADANI_ZABEZPECOVACIHO_ZARIZENI: 508;
    readonly PREPINAC: 509;
    readonly SNIMAC: 510;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypObjektuZabezpeceniValue = (typeof CKZTypObjektuZabezpeceni)[keyof typeof CKZTypObjektuZabezpeceni];
/** CKZTypPlotuVDoprave */
export declare const CKZTypPlotuVDoprave: {
    readonly BRANKA: 500;
    readonly OPLOCENI_OBJEKTU: 501;
    readonly OPLOCENI_PROTI_VNIKNUTI_ZVERE: 502;
    readonly PACHOVY_OHRADNIK: 503;
    readonly SIT: 504;
    readonly TRVALE_ZASNEZNIKY: 505;
    readonly ZAJISTENI_SKAL_PLOTEM: 506;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypPlotuVDopraveValue = (typeof CKZTypPlotuVDoprave)[keyof typeof CKZTypPlotuVDoprave];
/** CKZTypPodrobnehoBoduTI */
export declare const CKZTypPodrobnehoBoduTI: {
    readonly TI_ELEKTRONICKA_KOMUNIKACE: 502;
    readonly TI_ELEKTRICKA_SIT: 503;
    readonly TI_KANALIZACE: 504;
    readonly TI_PLYNOVOD: 505;
    readonly TI_PRODUKTOVOD: 506;
    readonly TI_SDILENA_STAVBA: 507;
    readonly TI_TEPLOVOD: 508;
    readonly TI_VODOVOD: 509;
    readonly TI_ZARIZENI: 510;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypPodrobnehoBoduTIValue = (typeof CKZTypPodrobnehoBoduTI)[keyof typeof CKZTypPodrobnehoBoduTI];
/** CKZTypPoznamky */
export declare const CKZTypPoznamky: {
    readonly OBECNA: 500;
    readonly KONZULTACE: 501;
    readonly PREDAT_JINAM: 502;
    readonly ZMERIT: 503;
    readonly PREDELAT: 504;
    readonly UPRESNIT: 505;
    readonly NEPRISTUPNE: 506;
    readonly NENALEZENO: 507;
    readonly HOTOVO: 508;
    readonly NEMERIT: 509;
    readonly REKLAMACE: 510;
    readonly JINY: 902;
};
export type CKZTypPoznamkyValue = (typeof CKZTypPoznamky)[keyof typeof CKZTypPoznamky];
/** CKZTypPredradniku */
export declare const CKZTypPredradniku: {
    readonly STANDARDNI: 500;
    readonly STMIVATELNE_ANALOGOVE: 501;
    readonly STMIVATELNE_DIGITALNI: 502;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypPredradnikuValue = (typeof CKZTypPredradniku)[keyof typeof CKZTypPredradniku];
/** CKZTypProvozniPlochyPK */
export declare const CKZTypProvozniPlochyPK: {
    readonly KRAJNICE: 500;
    readonly TELESO: 501;
    readonly ZPOMALOVACI_PRAH_STAVEBNI: 502;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypProvozniPlochyPKValue = (typeof CKZTypProvozniPlochyPK)[keyof typeof CKZTypProvozniPlochyPK];
/** CKZTypRozvoduTeplovodniSite */
export declare const CKZTypRozvoduTeplovodniSite: {
    readonly PRIVOD: 500;
    readonly ZPATECKA: 501;
    readonly CIRKULACE: 502;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypRozvoduTeplovodniSiteValue = (typeof CKZTypRozvoduTeplovodniSite)[keyof typeof CKZTypRozvoduTeplovodniSite];
/** CKZTypSAS */
export declare const CKZTypSAS: {
    readonly SEMAFOR: 500;
    readonly SIGNALIZACE_TRAMVAJOVA: 501;
    readonly SIGNALIZACE_ZELEZNICNIHO_PREJEZDU: 502;
    readonly NEZJISTENO: 900;
    readonly JINY: 902;
};
export type CKZTypSASValue = (typeof CKZTypSAS)[keyof typeof CKZTypSAS];
/** CKZTypSmeru */
export declare const CKZTypSmeru: {
    readonly SMER_VODNIHO_TOKU: 500;
    readonly SMER_KE_VSTUPU: 501;
    readonly SMER_KOMUNIKACE: 502;
    readonly SMER_TRATI: 503;
    readonly SMER_VEDENI: 504;
    readonly UNIKOVY_VYCHOD: 505;
    readonly JINY: 902;
};
export type CKZTypSmeruValue = (typeof CKZTypSmeru)[keyof typeof CKZTypSmeru];
/** CKZTypStaniceni */
export declare const CKZTypStaniceni: {
    readonly DEFINICNI: 500;
    readonly EVIDENCNI: 501;
    readonly PROJEKTOVANE: 502;
    readonly SKUTECNE: 503;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypStaniceniValue = (typeof CKZTypStaniceni)[keyof typeof CKZTypStaniceni];
/** CKZTypSvetelnehoZdroje */
export declare const CKZTypSvetelnehoZdroje: {
    readonly HALOGEN: 500;
    readonly JEDNOCIP_LED: 501;
    readonly JEDNOCIP_LED_MULTICIP_LED: 502;
    readonly LED: 503;
    readonly MULTICIP_LED: 504;
    readonly MULTICIP_LED_SODIKOVA_VYBOJKA: 505;
    readonly RTUTOVA_VYBOJKA: 506;
    readonly SODIKOVA_VYBOJKA: 507;
    readonly ZARIVKA: 508;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypSvetelnehoZdrojeValue = (typeof CKZTypSvetelnehoZdroje)[keyof typeof CKZTypSvetelnehoZdroje];
/** CKZTypSvitidla */
export declare const CKZTypSvitidla: {
    readonly DINGO: 500;
    readonly HRUSKA: 501;
    readonly KOULE: 502;
    readonly LED: 503;
    readonly MODUS: 504;
    readonly OCKO: 505;
    readonly RAMINKO: 506;
    readonly REFLEKTOR: 507;
    readonly SADOVKA: 508;
    readonly VELBLOUD: 509;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypSvitidlaValue = (typeof CKZTypSvitidla)[keyof typeof CKZTypSvitidla];
/** CKZTypSvodidlaUpresneni */
export declare const CKZTypSvodidlaUpresneni: {
    readonly TERMINAL_PRUBEH: 500;
    readonly TERMINAL_NABEH: 501;
    readonly TLUMICE_NARAZU: 502;
    readonly ZEMNI_VAL_HROBECEK: 503;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypSvodidlaUpresneniValue = (typeof CKZTypSvodidlaUpresneni)[keyof typeof CKZTypSvodidlaUpresneni];
/** CKZTypVodohospodarskehoObjektu */
export declare const CKZTypVodohospodarskehoObjektu: {
    readonly LIMNIGRAF: 500;
    readonly PLAVEBNI_SIGNALIZACE_SLOUP: 501;
    readonly POBREZNI_SIGNALNI_SVETLO: 502;
    readonly SBERNA_STUDNA: 503;
    readonly STAVIDLO_PREPAZKA_VOD_TOKU_UZSIHO_NEZ_2_M: 504;
    readonly STUDNA_MIMO_VEREJNY_PROSTOR: 505;
    readonly VODOCET: 506;
    readonly VRIDLO_ZRIDLO_PRAMEN: 507;
    readonly VRIDLO_ZRIDLO_PRAMEN_PRIRODNI_LECIVY_ZDROJ: 508;
    readonly PRISTAVISTE: 509;
    readonly KOTVISTE: 510;
    readonly PREKLADISTE: 511;
    readonly VYVAZISTE: 512;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypVodohospodarskehoObjektuValue = (typeof CKZTypVodohospodarskehoObjektu)[keyof typeof CKZTypVodohospodarskehoObjektu];
/** CKZTypVodovodnihoRadu */
export declare const CKZTypVodovodnihoRadu: {
    readonly SVODNY_RAD: 500;
    readonly NASOSKOVY_RAD: 501;
    readonly PRIVADECI_RAD: 502;
    readonly ZASOBNI_RAD: 503;
    readonly HLAVNI_RAD: 504;
    readonly ROZVADECI_RAD: 505;
    readonly ODLEHCOVACI_RAD: 506;
    readonly PREPAD_Z_VODOJEMU: 507;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypVodovodnihoRaduValue = (typeof CKZTypVodovodnihoRadu)[keyof typeof CKZTypVodovodnihoRadu];
/** CKZTypVrstevnice */
export declare const CKZTypVrstevnice: {
    readonly DOPLNKOVA_VRSTEVNICE: 500;
    readonly OBVOD_UZEMI_S_VRSTEVNICEMI: 501;
    readonly POMOCNA_VRSTEVNICE: 502;
    readonly SPADOVKA: 503;
    readonly VYJMUTE_UZEMI_Z_VRSTEVNIC: 505;
    readonly ZAKLADNI_VRSTEVNICE: 506;
    readonly ZDURAZNENA_VRSTEVNICE: 507;
    readonly NEURCENO: 901;
};
export type CKZTypVrstevniceValue = (typeof CKZTypVrstevnice)[keyof typeof CKZTypVrstevnice];
/** CKZTypVylozniku */
export declare const CKZTypVylozniku: {
    readonly LOMENY: 500;
    readonly OBLOUKOVY: 501;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypVyloznikuValue = (typeof CKZTypVylozniku)[keyof typeof CKZTypVylozniku];
/** CKZTypZPIPDZ */
export declare const CKZTypZPIPDZ: {
    readonly OBSADITELNOST_P: 500;
    readonly TEPLOMER: 501;
    readonly METEO: 502;
    readonly PDZ_ZPI: 503;
    readonly LRD_LINIOVE_RIZENI_DOPRAVY: 504;
    readonly PDZ_HRANOLOVE: 505;
    readonly PDZ_KNIZKOVE: 506;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypZPIPDZValue = (typeof CKZTypZPIPDZ)[keyof typeof CKZTypZPIPDZ];
/** CKZTypUkotveni */
export declare const CKZTypUkotveni: {
    readonly BEZ_PATKY: 501;
    readonly S_PATKOU: 502;
    readonly BETON: 503;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypUkotveniValue = (typeof CKZTypUkotveni)[keyof typeof CKZTypUkotveni];
/** CKZUlozeniteplovodu */
export declare const CKZUlozeniteplovodu: {
    readonly V_OBJEKTU: 500;
    readonly BEZKANALOVE_ULOZENI: 501;
    readonly NEPRULEZNY_KANAL: 502;
    readonly PRULEZNY_KANAL: 503;
    readonly PRUCHOZI_KANAL_KOLEKTOR: 504;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZUlozeniteplovoduValue = (typeof CKZUlozeniteplovodu)[keyof typeof CKZUlozeniteplovodu];
/** CKZTypUmisteniSvodidla */
export declare const CKZTypUmisteniSvodidla: {
    readonly SILNICE: 500;
    readonly MOST: 501;
    readonly PREJEZD_SDP: 502;
    readonly INTEGROVANE_DO_PHS: 503;
    readonly TUNEL: 504;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypUmisteniSvodidlaValue = (typeof CKZTypUmisteniSvodidla)[keyof typeof CKZTypUmisteniSvodidla];
/** CKZZakladniDruhKere */
export declare const CKZZakladniDruhKere: {
    readonly BEZ: 500;
    readonly BRSLEN: 501;
    readonly DRIN: 502;
    readonly DRISTAL: 503;
    readonly HLOH: 504;
    readonly JALOVEC: 505;
    readonly KATALPA: 506;
    readonly KRUSINA: 507;
    readonly MALINIK: 508;
    readonly OSTRUZINIK: 509;
    readonly PAMELNIK: 510;
    readonly RAKYTNIK: 511;
    readonly RUZE: 512;
    readonly RYBIZ: 513;
    readonly TIS: 514;
    readonly TRNKA: 515;
    readonly ZLATICE: 516;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZZakladniDruhKereValue = (typeof CKZZakladniDruhKere)[keyof typeof CKZZakladniDruhKere];
/** CKZZakladniDruhStromu */
export declare const CKZZakladniDruhStromu: {
    readonly BEZ: 500;
    readonly BOROVICE: 501;
    readonly BROSKVON: 502;
    readonly BRIZA: 503;
    readonly BUK: 504;
    readonly DUB: 505;
    readonly HABR: 506;
    readonly HLOH: 507;
    readonly HRUSEN: 508;
    readonly JABLON: 509;
    readonly JASAN: 510;
    readonly JAVOR: 511;
    readonly JEDLE: 512;
    readonly JERAB: 513;
    readonly JILM: 514;
    readonly JINAN: 515;
    readonly JIROVEC: 516;
    readonly KDOULOVEC: 517;
    readonly LIPA: 518;
    readonly LISKA: 519;
    readonly MERUNKA: 520;
    readonly MODRIN: 521;
    readonly OLSE: 522;
    readonly ORESAK: 523;
    readonly PLATAN: 524;
    readonly SLIVON_SVESTKA: 525;
    readonly SMRK: 526;
    readonly SERIK: 527;
    readonly TIS: 528;
    readonly TOPOL: 529;
    readonly TOPOL_OSIKA: 530;
    readonly TRNKA: 531;
    readonly TRNOVNIK_AKAT: 532;
    readonly TRESEN: 533;
    readonly VISEN: 534;
    readonly VRBA: 535;
    readonly ZERAV: 536;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZZakladniDruhStromuValue = (typeof CKZZakladniDruhStromu)[keyof typeof CKZZakladniDruhStromu];
/** CKZZakladniRozdeleniKeru */
export declare const CKZZakladniRozdeleniKeru: {
    readonly JEHLICNATY: 500;
    readonly LISTNATY: 501;
    readonly OVOCNY: 502;
    readonly OKRASNY: 503;
    readonly PAREZ: 504;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZZakladniRozdeleniKeruValue = (typeof CKZZakladniRozdeleniKeru)[keyof typeof CKZZakladniRozdeleniKeru];
/** CKZZakladniRozdeleniStromu */
export declare const CKZZakladniRozdeleniStromu: {
    readonly JEHLICNATY: 500;
    readonly LISTNATY: 501;
    readonly OVOCNY: 502;
    readonly OKRASNY: 503;
    readonly PAREZ: 504;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZZakladniRozdeleniStromuValue = (typeof CKZZakladniRozdeleniStromu)[keyof typeof CKZZakladniRozdeleniStromu];
/** CKZZakladniRozdeleniZelene */
export declare const CKZZakladniRozdeleniZelene: {
    readonly JEHLICNATY: 500;
    readonly LISTNATY: 501;
    readonly OVOCNY: 502;
    readonly OKRASNY_PARKOVY: 503;
    readonly MYTINA: 504;
    readonly SMISENY: 505;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZZakladniRozdeleniZeleneValue = (typeof CKZZakladniRozdeleniZelene)[keyof typeof CKZZakladniRozdeleniZelene];
/** CKZDruhStavbyProZpevneniPovrchu */
export declare const CKZDruhStavbyProZpevneniPovrchu: {
    readonly ZAJISTENI_SKAL: 500;
    readonly ZPEVNENY_SVAH: 501;
    readonly SVAHOVA_DLAZBA: 502;
    readonly NEZJISTENO: 900;
    readonly JINY: 902;
};
export type CKZDruhStavbyProZpevneniPovrchuValue = (typeof CKZDruhStavbyProZpevneniPovrchu)[keyof typeof CKZDruhStavbyProZpevneniPovrchu];
/** CKZTypTechnologickeKonstrukce */
export declare const CKZTypTechnologickeKonstrukce: {
    readonly KONZOLA: 500;
    readonly KRAKOREC: 501;
    readonly LAVKA: 502;
    readonly DOPRAVNIK: 503;
    readonly PRIHRADOVA_KONSTRUKCE: 504;
    readonly NEZJISTENO: 900;
    readonly JINY: 902;
};
export type CKZTypTechnologickeKonstrukceValue = (typeof CKZTypTechnologickeKonstrukce)[keyof typeof CKZTypTechnologickeKonstrukce];
/** CKZDruhZakladaniASanace */
export declare const CKZDruhZakladaniASanace: {
    readonly KOTEVNI_BOD: 500;
    readonly PILOTA: 501;
    readonly TRN: 502;
    readonly VYLOZNIK: 503;
    readonly NEZJISTENO: 900;
    readonly JINY: 902;
};
export type CKZDruhZakladaniASanaceValue = (typeof CKZDruhZakladaniASanace)[keyof typeof CKZDruhZakladaniASanace];
/** CKZHraniceJinehoObjektu */
export declare const CKZHraniceJinehoObjektu: {
    readonly NE: 0;
    readonly ANO: 1;
};
export type CKZHraniceJinehoObjektuValue = (typeof CKZHraniceJinehoObjektu)[keyof typeof CKZHraniceJinehoObjektu];
/** CKZTypObjektuTrolejbusoveDopravy */
export declare const CKZTypObjektuTrolejbusoveDopravy: {
    readonly TROLEJOVY_KONTAKT: 501;
    readonly NAPAJECI_BOD: 502;
    readonly USEKOVY_DELIC: 503;
    readonly NAPINACI_SLOUP: 504;
    readonly KRIZOVATKOVY_SLOUP: 505;
    readonly VYHYBKA: 506;
    readonly KRIZENI: 507;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypObjektuTrolejbusoveDopravyValue = (typeof CKZTypObjektuTrolejbusoveDopravy)[keyof typeof CKZTypObjektuTrolejbusoveDopravy];
/** CKZTypObjektuLanoveDopravy */
export declare const CKZTypObjektuLanoveDopravy: {
    readonly NAPINACI_SACHTA: 501;
    readonly ZACHRANNY_BOD: 502;
    readonly TRATOVY_HLASIC: 503;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypObjektuLanoveDopravyValue = (typeof CKZTypObjektuLanoveDopravy)[keyof typeof CKZTypObjektuLanoveDopravy];
/** CKZTypZelene */
export declare const CKZTypZelene: {
    readonly KACIREK: 500;
    readonly MYTINA: 501;
    readonly OKRASNE_KAMENY: 502;
    readonly SKUPINA_KERU_JEHLICNATA: 503;
    readonly SKUPINA_KERU_LISTNATA: 504;
    readonly SKUPINA_KERU_SMISENA: 505;
    readonly SKUPINA_STROMU_JEHLICNATA: 506;
    readonly SKUPINA_STROMU_JEHLICNATA_S_PODROSTEM_KERU: 507;
    readonly SKUPINA_STROMU_JEHLICNATA_S_PODROSTEM_TRAVNIKU: 508;
    readonly SKUPINA_STROMU_LISTNATA: 509;
    readonly SKUPINA_STROMU_LISTNATA_S_PODROSTEM_KERU: 510;
    readonly SKUPINA_STROMU_LISTNATA_S_PODROSTEM_TRAVNIKU: 511;
    readonly SKUPINA_STROMU_SMISENA: 512;
    readonly SKUPINA_STROMU_SMISENA_S_PODROSTEM_KERU: 513;
    readonly SKUPINA_STROMU_SMISENA_S_PODROSTEM_TRAVNIKU: 514;
    readonly TRAVNIK_EXTENZIVNI: 515;
    readonly TRAVNIK_HRISTOVY: 516;
    readonly TRAVNIK_KOBERCOVY: 517;
    readonly TRAVNIK_LUCNI: 518;
    readonly TRAVNIK_PARKOVY: 519;
    readonly TRAVNIK_PASTVINA: 520;
    readonly TRAVNIK_POROST_RIDKY: 521;
    readonly TRAVNIK_ZATRAVNENY_HROB: 522;
    readonly ZAHON_LETNICEK: 523;
    readonly ZAHON_RUZI: 524;
    readonly ZAHON_S_KAPRADINAMI: 525;
    readonly ZAHON_S_OKRASNYMI_TRAVAMI: 526;
    readonly ZAHON_SKALKOVY: 527;
    readonly ZAHON_TRVALEK: 528;
    readonly ZAHON_VRESOVISTNICH_ROSTLIN: 529;
    readonly NEZJISTENO: 900;
    readonly NEURCENO: 901;
    readonly JINY: 902;
};
export type CKZTypZeleneValue = (typeof CKZTypZelene)[keyof typeof CKZTypZelene];
//# sourceMappingURL=enums.d.ts.map