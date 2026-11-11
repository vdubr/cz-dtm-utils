// Auto-generated from UDM 2.1.1 XSD — DO NOT EDIT
// Run: npx tsx scripts/generate-types.ts <version>
/** DimenzeHydrantuVodovodniSite */
export const DimenzeHydrantuVodovodniSite = {
    DN_80: 1, // DN 80
    DN_100: 2, // DN 100
    DN_125: 3, // DN 125
    DN_150: 4, // DN 150
    DN_200: 5, // DN 200
    JINA: 98, // jiná
    NEZJISTENO: 99, // nezjištěno
};
/** DruhDopravyLanoveDrahy */
export const DruhDopravyLanoveDrahy = {
    NAKLADNI: 1, // nákladní
    OSOBNI: 2, // osobní
    NEZJISTENO: 99, // nezjištěno
};
/** DruhElektrickehoProudu */
export const DruhElektrickehoProudu = {
    AC: 1, // AC
    DC: 2, // DC
    AC_DC: 3, // AC/DC
    NEZJISTENO: 400, // nezjištěno
};
/** DruhElektrickehoProuduTrakcnihoVedeni */
export const DruhElektrickehoProuduTrakcnihoVedeni = {
    AC: 1, // AC
    DC: 2, // DC
    NEZJISTENO: 99, // nezjištěno
};
/** DruhHromadneDopravy */
export const DruhHromadneDopravy = {
    AUTOBUSOVA: 1, // autobusová
    TROLEJBUSOVA: 2, // trolejbusová
    TRAMVAJOVA: 3, // tramvajová
    LANOVA: 4, // lanová
    PRIVOZ: 5, // přívoz
    SDILENA: 6, // sdílená
};
/** DruhLetiste */
export const DruhLetiste = {
    VEREJNE_S_VNITROSTATNIM_PROVOZEM: 1, // veřejné s vnitrostátním provozem
    VEREJNE_S_MEZINARODNIM_PROVOZEM: 2, // veřejné s mezinárodním provozem
    NEVEREJNE_S_VNITROSTATNIM_PROVOZEM: 3, // neveřejné s vnitrostátním provozem
    NEVEREJNE_S_MEZINARODNIM_PROVOZEM: 4, // neveřejné s mezinárodním provozem
    VOJENSKE: 5, // vojenské
    NEZJISTENO: 99, // nezjištěno
};
/** DruhMelioracnichOpatreni */
export const DruhMelioracnichOpatreni = {
    ODVODNENI: 1, // odvodnění
    ZAVLAHA: 2, // závlaha
    OPATRENI_PROTI_VODNI_EROZI_PRIKOP: 3, // opatření proti vodní erozi - příkop
    OPATRENI_PROTI_VODNI_EROZI_PRULEH: 4, // opatření proti vodní erozi - průleh
    OPATRENI_PROTI_VETRNE_EROZI: 5, // opatření proti větrné erozi
    REVITALIZACE_PUDY: 6, // revitalizace půdy
    VSAKOVACI_OBJEKT: 7, // vsakovací objekt
    NEZJISTENO: 99, // nezjištěno
};
/** DruhPlotu */
export const DruhPlotu = {
    DREVENY: 1, // dřevěný
    DRATENY: 2, // drátěný
    KOVOVY: 3, // kovový
    ZDENY: 4, // zděný
    ZIVY: 5, // živý
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
    DREVENY_JEDNOSTRANNE_VLASTNICTVI: 200, // dřevěný - jednostranné vlastnictví
    DRATENY_JEDNOSTRANNE_VLASTNICTVI: 201, // drátěný - jednostranné vlastnictví
    KOVOVY_JEDNOSTRANNE_VLASTNICTVI: 202, // kovový - jednostranné vlastnictví
    ZDENY_JEDNOSTRANNE_VLASTNICTVI: 203, // zděný - jednostranné vlastnictví
    ZIVY_JEDNOSTRANNE_VLASTNICTVI: 204, // živý - jednostranné vlastnictví
};
/** DruhSchodiste */
export const DruhSchodiste = {
    VICESTUPNOVE: 1, // vícestupňové
    PLATFORMA_S_JEDNIM_STUPNEM: 2, // platforma s jedním stupněm
    NEZJISTENO: 99, // nezjištěno
    NAJEZDOVA_RAMPA: 200, // nájezdová rampa
    POJIZDNE_SCHODISTE: 201, // pojízdné schodiště
    JINY: 402, // jiný
};
/** DruhStaniceElektrickeSite */
export const DruhStaniceElektrickeSite = {
    KOMPAKTNI_A_ZDENA: 1, // kompaktní a zděná
    STOZAROVA: 2, // stožárová
    VEZOVA: 3, // věžová
    VENKOVNI: 4, // venkovní
    VESTAVENA: 5, // vestavěná
    NEZJISTENO: 99, // nezjištěno
    NEURCENO: 401, // neurčeno
    JINY: 402, // jiný
};
/** DruhStokoveSite */
export const DruhStokoveSite = {
    GRAVITACNI: 1, // gravitační
    TLAKOVA: 2, // tlaková
    PODTLAKOVA: 3, // podtlaková
    NEZJISTENO: 99, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** ElektrizaceZeleznicniTrate */
export const ElektrizaceZeleznicniTrate = {
    ELEKTRIZOVANA: 1, // elektrizovaná
    NEELEKTRIZOVANA: 2, // neelektrizovaná
    NEZJISTENO: 99, // nezjištěno
};
/** IzolaceVenkovnihoVedeni */
export const IzolaceVenkovnihoVedeni = {
    ZAKLADNI: 1, // základní
    BEZ_IZOLACE: 2, // bez izolace
    NEZJISTENO: 99, // nezjištěno
};
/** KategoriePozemniKomunikace */
export const KategoriePozemniKomunikace = {
    DALNICE_I_TRIDY: 1, // dálnice I. třídy
    DALNICE_II_TRIDY: 2, // dálnice II. třídy
    SILNICE_I_TRIDY: 3, // silnice I. třídy
    SILNICE_II_TRIDY: 4, // silnice II. třídy
    SILNICE_III_TRIDY: 5, // silnice III. třídy
    MISTNI_KOMUNIKACE_I_TRIDY: 6, // místní komunikace I. třídy
    MISTNI_KOMUNIKACE_II_TRIDY: 7, // místní komunikace II. třídy
    MISTNI_KOMUNIKACE_III_TRIDY: 8, // místní komunikace III. třídy
    MISTNI_KOMUNIKACE_IV_TRIDY: 9, // místní komunikace IV. třídy
    UCELOVA_KOMUNIKACE: 10, // účelová komunikace
    NEVEREJNE_PRISTUPNA_UCELOVA_KOMUNIKACE: 11, // neveřejně přístupná účelová komunikace
    NEZJISTENO: 99, // nezjištěno
};
/** CKZKategorieVodnihoDilaZHlediskaTBD */
export const CKZKategorieVodnihoDilaZHlediskaTBD = {
    I_KATEGORIE: 500, // I. kategorie
    II_KATEGORIE: 501, // II. kategorie
    III_KATEGORIE: 502, // III. kategorie
    IV_KATEGORIE: 503, // IV. kategorie
    NEZJISTENO: 900, // nezjištěno
};
/** KategorieZeleznicniTrate */
export const KategorieZeleznicniTrate = {
    CELOSTATNI: 1, // celostátní
    REGIONALNI: 2, // regionální
    MISTNI: 3, // místní
    VLECKA: 4, // vlečka
    ZKUSEBNI: 5, // zkušební
    JINA: 98, // jiná
    NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
    NEURCENO: 401, // neurčeno
};
/** MaterialTrasySiteEK */
export const MaterialTrasySiteEK = {
    METALICKA: 1, // metalická
    OPTICKA: 2, // optická
    METALICKA_OPTICKA: 3, // metalická + optická
    NEZJISTENO: 99, // nezjištěno
    KZL_KOMBINOVANE_ZEMNICI_LANO: 200, // KZL (kombinované zemnící lano)
    HDPE_NEOBSAZENA: 201, // HDPE  neobsazená
    SVAZEK_MIKROTRUBICEK_NEOBSAZENY: 202, // svazek mikrotrubiček - neobsazený
    NEURCENO: 401, // neurčeno
};
/** MaximalniNapetovaHladina */
export const MaximalniNapetovaHladina = {
    UZEMNENI: 0, // uzemnění
    NN: 1, // NN
    VN: 2, // VN
    VVN: 3, // VVN
    ZVN: 4, // ZVN
    UVN: 5, // UVN
    NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
};
/** MaximalniProvozniNapeti */
export const MaximalniProvozniNapeti = {
    UZEMNENI: 0, // uzemnění
    VALUE_1: 1, // 0,4 kV
    VALUE_2: 2, // 0,5 kV
    VALUE_3: 3, // 3 kV
    VALUE_4: 4, // 5 kV
    VALUE_5: 5, // 6 kV
    VALUE_6: 6, // 10 kV
    VALUE_7: 7, // 22 kV
    VALUE_8: 8, // 35 kV
    VALUE_9: 9, // 110 kV
    VALUE_10: 10, // 220 kV
    VALUE_11: 11, // 400 kV
    VALUE_12: 12, // 0,11 kV
    VALUE_13: 13, // 0,23 kV
    VALUE_14: 14, // 0,6 kV
    VALUE_15: 15, // 0,75 kV
    VALUE_16: 16, // 1,5 kV
    VALUE_17: 17, // 15 kV
    VALUE_18: 18, // 25 kV
    VALUE_19: 19, // 2x25 kV
    VALUE_20: 20, // 800 kV
    JINE: 98, // jiné
    NEZJISTENO: 99, // nezjištěno
};
/** PovoleniNakladaniNebezpecnymOdpadem */
export const PovoleniNakladaniNebezpecnymOdpadem = {
    POVOLENO: 1, // povoleno
    BEZ_POVOLENI: 2, // bez povolení
    NEZJISTENO: 99, // nezjištěno
};
/** PrevazujiciPovrch */
export const PrevazujiciPovrch = {
    ASFALT: 1, // asfalt
    BETON: 2, // beton
    DLAZBA: 3, // dlažba
    R_MATERIAL: 4, // R-materiál
    PISEK_STERKOPISEK: 5, // písek, štěrkopísek
    SOTOLINA: 6, // šotolina
    NEZPEVNENO: 7, // nezpevněno
    ZPEVNENY_PROPUSTNY: 8, // zpevněný propustný
    NEZJISTENO: 99, // nezjištěno
    BETONOVA_DLAZBA: 200, // betonová dlažba
    BETONOVE_PANELY: 201, // betonové panely
    DLAZBA_30X30: 202, // dlažba 30x30
    DLAZBA_50X50: 203, // dlažba 50x50
    DLAZBA_SLEPECKA: 204, // dlažba slepecká
    DREVO: 205, // dřevo
    GUMA: 206, // guma
    KOV: 207, // kov
    PANELY: 208, // panely
    PISEK: 209, // písek
    STERK: 210, // štěrk
    TRAVA: 211, // tráva
    VEGETACE: 212, // vegetace
    ZAMKOVA_DLAZBA: 213, // zámková dlažba
    ZATRAVNOVACI_DLAZBA: 214, // zatravňovací dlažba
    ZULOVA_DLAZBA: 215, // žulová dlažba
    NEURCENO: 401, // neurčeno
    JINY: 402, // jiný
};
/** RozchodKoleji */
export const RozchodKoleji = {
    VALUE_1: 1, // 1435 mm
    VALUE_2: 2, // 760 mm
    SPLITKA: 3, // splítka
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
};
/** StavObjektu */
export const StavObjektu = {
    PROVOZOVANO: 1, // provozováno
    NEPROVOZOVANO: 2, // neprovozováno
    NEZJISTENO: 99, // nezjištěno
};
/** StavSkladkyOdpadu */
export const StavSkladkyOdpadu = {
    V_PROVOZU: 1, // v provozu
    UZAVRENO: 2, // uzavřeno
    NEZJISTENO: 99, // nezjištěno
};
/** StavTrasySiteTI */
export const StavTrasySiteTI = {
    PROVOZOVANO: 1, // provozováno
    NEPROVOZOVANO: 2, // neprovozováno
    ZRUSENO: 3, // zrušeno
    NEZJISTENO: 99, // nezjištěno
    REZERVA_PRAZDNA_HDPE: 200, // rezerva (prázdná HDPE)
};
/** TlakovaHladinaPlynovodniSite */
export const TlakovaHladinaPlynovodniSite = {
    NTL: 1, // NTL
    STL: 2, // STL
    VTL: 3, // VTL
    VVTL: 4, // VVTL
    NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
    TECHNICKY_PLYN: 200, // technický plyn
    STLACENY_VZDUCH: 201, // stlačený vzduch
    OCHOZ_NA_PLYNOVODU_JEDNOSTRANNY: 202, // ochoz na plynovodu - jednostranný
    OCHOZ_NA_PLYNOVODU_OBOUSTRANNY: 203, // ochoz na plynovodu - oboustranný
};
/** TridaDopravneVyznamneVodniCesty */
export const TridaDopravneVyznamneVodniCesty = {
    MISTNIHO_VYZNAMU_TRIDY_0: 1, // místního významu třídy 0
    MISTNIHO_VYZNAMU_TRIDY_I: 2, // místního významu třídy I
    MEZINARODNIHO_VYZNAMU_TRIDY_IV: 3, // mezinárodního významu třídy IV
    MEZINARODNIHO_VYZNAMU_TRIDY_VA: 4, // mezinárodního významu třídy Va
    MEZINARODNIHO_VYZNAMU_TRIDY_VB: 5, // mezinárodního významu třídy Vb
    NEZJISTENO: 400, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** TridaPresnostiPoloha */
export const TridaPresnostiPoloha = {
    TRIDA_PRESNOSTI_1: 1, // třída přesnosti 1
    TRIDA_PRESNOSTI_2: 2, // třída přesnosti 2
    TRIDA_PRESNOSTI_3: 3, // třída přesnosti 3
    TRIDA_PRESNOSTI_4: 4, // třída přesnosti 4
    TRIDA_PRESNOSTI_5: 5, // třída přesnosti 5
    PRESNOST_NEVYHOVUJE_ANI_TRIDE_PRESNOSTI_5_NEBO_NENI_ZNAMA: 9, // přesnost nevyhovuje ani třídě přesnosti 5, nebo není známa
};
/** TridaPresnostiVyska */
export const TridaPresnostiVyska = {
    TRIDA_PRESNOSTI_1: 1, // třída přesnosti 1
    TRIDA_PRESNOSTI_2: 2, // třída přesnosti 2
    TRIDA_PRESNOSTI_3: 3, // třída přesnosti 3
    TRIDA_PRESNOSTI_4: 4, // třída přesnosti 4
    TRIDA_PRESNOSTI_5: 5, // třída přesnosti 5
    PRESNOST_NEVYHOVUJE_ANI_TRIDE_PRESNOSTI_5_NEBO_NENI_ZNAMA: 9, // přesnost nevyhovuje ani třídě přesnosti 5, nebo není známa
};
/** TypDatoveSady */
export const TypDatoveSady = {
    ZPS_PODROBNE_BODY: 1, // ZPS - podrobné body
    ZPS_ODVOZENE_PLOSNE_TYPY_OBJEKTU: 2, // ZPS - odvozené plošné typy objektů
    ZPS_S_VYJIMKOU_PODROBNYCH_BODU_A_ODVOZENYCH_PLOSNYCH_TYPU_OBJEKTU_A_VCETNE_KONSTRUKCNICH_OBJEKTU: 3, // ZPS s výjimkou podrobných bodů a odvozených plošných typů objektů a včetně konstrukčních objektů
    DOPROVODNE_INFORMACE_K_UZEMI: 4, // doprovodné informace k území
    TI_VEREJNA_I_NEVEREJNA_CAST_KOMPLETNI_VYPIS_A_DOPROVODNE_INFORMACE_K_UZEMI: 6, // TI - veřejná i neveřejná část (kompletní výpis) a doprovodné informace k území
    DI_VEREJNA_CAST_A_DOPROVODNE_INFORMACE_K_UZEMI: 7, // DI - veřejná část a doprovodné informace k území
    DI_VEREJNA_I_NEVEREJNA_CAST_KOMPLETNI_VYPIS_A_DOPROVODNE_INFORMACE_K_UZEMI: 8, // DI - veřejná i neveřejná část (kompletní výpis) a doprovodné informace k území
    ZPS_KOMPLETNI_VYPIS_A_DOPROVODNE_INFORMACE_K_UZEMI_POUZE_PRO_AD_HOC_VYDEJ: 9, // ZPS - kompletní výpis a doprovodné informace k území (pouze pro ad hoc výdej)
    VYDEJ_VLASTNICH_DAT_VSP: 10, // výdej vlastních dat VSP
    PSPI_VEREJNA_CAST_A_DOPROVODNE_INFORMACE_K_UZEMI: 11, // PSPI - veřejná část a doprovodné informace k území
    PSPI_VEREJNA_I_NEVEREJNA_CAST_KOMPLETNI_VYPIS_A_DOPROVODNE_INFORMACE_K_UZEMI: 12, // PSPI - veřejná i neveřejná část (kompletní výpis) a doprovodné informace k území
    PSPI_VYDEJ_VLASTNICH_DAT_BS: 13, // PSPI - výdej vlastních dat BS
    NEZJISTENO: 400, // nezjištěno
};
/** TypDopravneVyznamnehoMistaDraze */
export const TypDopravneVyznamnehoMistaDraze = {
    STANICE: 1, // stanice
    ZASTAVKA: 2, // zastávka
    ODBOCKA: 3, // odbočka
    NAKLADISTE: 4, // nákladiště
    JINE: 98, // jiné
    NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
};
/** TypDopravniStavbyNeboPlochy */
export const TypDopravniStavbyNeboPlochy = {
    POZEMNI_KOMUNIKACE: 1, // pozemní komunikace
    CHODNIK: 2, // chodník
    CYKLOSTEZKA: 3, // cyklostezka
    PARKOVISTE_ODSTAVNA_PLOCHA: 4, // parkoviště, odstavná plocha
    DOPRAVNI_OSTRUVEK: 5, // dopravní ostrůvek
    DELICI_PAS: 6, // dělící pás
    NAJEZD: 7, // nájezd
    PRIDRUZENA_PLOCHA_POZEMNI_KOMUNIKACE: 8, // přidružená plocha pozemní komunikace
    TRAMVAJOVA_DRAHA: 9, // tramvajová dráha
    POZEMNI_LANOVA_DRAHA: 10, // pozemní lanová dráha
    SPECIALNI_DRAHA: 11, // speciální dráha
    MANIPULACNI_PLOCHA: 12, // manipulační plocha
    MOSTNI_VAHA: 13, // mostní váha
    PRIKOP_NASEP_ZAREZ_DOPRAVNI_STAVBY: 14, // příkop, násep, zářez dopravní stavby
    NASTUPISTE: 15, // nástupiště
    PLOCHA_MOSTNI_KONSTRUKCE: 16, // plocha mostní konstrukce
    PORTAL_TUNELU: 17, // portál tunelu
    PROVOZNI_PLOCHA_TUNELU: 18, // provozní plocha tunelu
    PORTAL_PODCHODU: 19, // portál podchodu
    PROVOZNI_PLOCHA_PODCHODU: 20, // provozní plocha podchodu
    SOUHRNNA_PLOCHA_ZELEZNICNICH_DRAH: 21, // souhrnná plocha železničních drah
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** TypDrahy */
export const TypDrahy = {
    ZELEZNICNI: 1, // železniční
    TRAMVAJOVA: 2, // tramvajová
    LANOVA: 3, // lanová
    SPECIALNI: 4, // speciální
    TROLEJBUSOVA: 5, // trolejbusová
    NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
};
/** TypDrobneKulturniStavby */
export const TypDrobneKulturniStavby = {
    KASNA: 1, // kašna
    VODOTRYSK_FONTANA: 2, // vodotrysk, fontána
    POMNIK: 3, // pomník
    SOCHA: 4, // socha
    MOHYLA: 5, // mohyla
    ZVONICE: 6, // zvonice
    NEZJISTENO: 99, // nezjištěno
};
/** TypDrobneSakralniStavby */
export const TypDrobneSakralniStavby = {
    KRIZ: 1, // kříž
    BOZI_MUKA: 2, // boží muka
    KAPLICKA: 3, // kaplička
    NEZJISTENO: 99, // nezjištěno
};
/** TypHydrantuVodovodniSite */
export const TypHydrantuVodovodniSite = {
    GARANTOVANY: 1, // garantovaný
    OBECNY: 2, // obecný
    NEZJISTENO: 99, // nezjištěno
};
/** TypInzenyrskeSite */
export const TypInzenyrskeSite = {
    ELEKTRICKE_VEDENI: 1, // elektrické vedení
    ELEKTRONICKA_KOMUNIKACE: 2, // elektronická komunikace
    PLYNOVOD: 3, // plynovod
    VODOVOD: 4, // vodovod
    KANALIZACE: 5, // kanalizace
    PRODUKTOVOD: 6, // produktovod
    TEPLOVOD: 7, // teplovod
    NEZJISTENO: 99, // nezjištěno
    ZARIZENI_STAVEB: 200, // zařízení staveb
    KOLEKTOR: 201, // kolektor
    SDILENA_STAVBA: 202, // sdílená stavba
    PROTIKOROZNI_OCHRANA: 203, // protikorozní ochrana
    NEURCENO: 401, // neurčeno
};
/** TypInzenyrskeSitePKO */
export const TypInzenyrskeSitePKO = {
    PLYNOVOD: 1, // plynovod
    VODOVOD: 2, // vodovod
    KANALIZACE: 3, // kanalizace
    PRODUKTOVOD: 4, // produktovod
    TEPLOVOD: 5, // teplovod
    SIT_ELEKTRONICKYCH_KOMUNIKACI: 6, // síť elektronických komunikací
    SDILENA: 7, // sdílená
    NEZJISTENO: 99, // nezjištěno
};
/** TypJadernehoZarizeni */
export const TypJadernehoZarizeni = {
    REAKTOR: 1, // reaktor
    SKLAD: 2, // sklad
    ULOZISTE: 3, // úložiště
    JINE: 98, // jiné
};
/** TypJinehoZarizeniStavebTI */
export const TypJinehoZarizeniStavebTI = {
    HLASIC_IZS: 1, // hlásič IZS
    REPRODUKTOR: 2, // reproduktor
    VENKOVNI_HODINY: 3, // venkovní hodiny
    SVITIDLO: 4, // svítidlo
    OSVETLENI: 5, // osvětlení
    JINE: 98, // jiné
    NEZJISTENO: 99, // nezjištěno
};
/** TypPrubehuJineTechnologickeStavbyTI */
export const TypPrubehuJineTechnologickeStavbyTI = {
    PREVES_TRAKCNIHO_TROLEJOVEHO_VEDENI_ZELEZNICNI_DRAHY: 1, // převěs trakčního trolejového vedení železniční dráhy
    PREVES_TRAKCNIHO_TROLEJOVEHO_VEDENI_JINE_DRAHY: 2, // převěs trakčního trolejového vedení jiné dráhy
    JINY: 98, // jiný
};
/** TypLeteckeStavby */
export const TypLeteckeStavby = {
    PODZEMNI: 1, // podzemní
    POJEZDOVA_DRAHA: 2, // pojezdová dráha
    ODBAVOVACI_PLOCHA: 3, // odbavovací plocha
    MANIPULACNI_PLOCHA: 4, // manipulační plocha
    ODBAVOVACI_BUDOVA: 5, // odbavovací budova
    HANGAR: 6, // hangár
    JINA: 98, // jiná
};
/** TypMediaVodovodniSite */
export const TypMediaVodovodniSite = {
    VODA_PITNA: 1, // voda pitná
    VODA_SUROVA: 2, // voda surová
    VODA_UZITKOVA: 3, // voda užitková
    JINE: 98, // jiné
    NEZJISTENO: 99, // nezjištěno
};
/** TypMostu */
export const TypMostu = {
    SILNICNI: 1, // silniční
    ZELEZNICNI: 2, // železniční
    PRO_VODNI_DOPRAVU: 3, // pro vodní dopravu
    LAVKA_PRO_PESI_A_CYKLISTY: 4, // lávka pro pěší a cyklisty
    PRECHOD_PRO_VOLNE_ZIJICI_ZIVOCICHY: 5, // přechod pro volně žijící živočichy
    SDRUZENY: 6, // sdružený
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** TypNabijecihoVydejnihoMedia */
export const TypNabijecihoVydejnihoMedia = {
    NABIJENI_ELEKTROMOBILNICH_ZARIZENI_VC_PLAVIDEL: 1, // nabíjení elektromobilních zařízení (vč. plavidel)
    CNG: 2, // CNG
    LPG: 3, // LPG
    LNG: 4, // LNG
    BENZIN_NAFTA: 5, // benzín/nafta
    VODIK: 6, // vodík
    JINE: 98, // jiné
    NEZJISTENO: 99, // nezjištěno
};
/** TypNadrzeBezVzdouvacihoObjektu */
export const TypNadrzeBezVzdouvacihoObjektu = {
    RETENCNI: 1, // retenční
    DESTOVA: 2, // dešťová
    USAZOVACI: 3, // usazovací
    JINA: 98, // jiná
    NEZJISTENO: 99, // nezjištěno
    VEREJNY_BAZEN: 200, // veřejný bazén
    NEURCENO: 401, // neurčeno
};
/** TypNadrzeZdrzeSeVzdouvacimObjektem */
export const TypNadrzeZdrzeSeVzdouvacimObjektem = {
    VODNI_NADRZ: 1, // vodní nádrž
    VYROVNAVACI_NADRZ: 6, // vyrovnávací nádrž
    JEZOVA_ZDRZ: 7, // jezová zdrž
    JINA: 98, // jiná
    NEZJISTENO: 99, // nezjištěno
    RETENCNI_NADRZ: 200, // retenční nádrž
};
/** TypNosiceTechnickehoZarizeni */
export const TypNosiceTechnickehoZarizeni = {
    INFORMACNI_TABULE: 1, // informační tabule
    BILLBOARD: 2, // billboard
    NOSIC_KAMEROVEHO_SYSTEMU: 3, // nosič kamerového systému
    REKLAMNI_SLOUP: 4, // reklamní sloup
    VLAJKOVY_STOZAR: 5, // vlajkový stožár
    SDRUZENY: 6, // sdružený
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
    MYTNA_BRANA: 200, // mýtná brána
    POLOPORTAL: 201, // poloportál
    PORTAL: 202, // portál
    TUNELOVY_PORTAL: 203, // tunelový portál
};
/** TypObjektuElektrickeSitePS */
export const TypObjektuElektrickeSitePS = {
    GEOTERMALNI_ELEKTRARNA: 1, // geotermální elektrárna
    JADERNA_ELEKTRARNA: 2, // jaderná elektrárna
    VODNI_ELEKTRARNA: 3, // vodní elektrárna
    FOTOVOLTAICKA_ELEKTRARNA: 4, // fotovoltaická elektrárna
    TEPELNA_ELEKTRARNA: 5, // tepelná elektrárna
    VETRNA_ELEKTRARNA: 6, // větrná elektrárna
    BIOPLYNOVA_ELEKTRARNA: 7, // bioplynová elektrárna
    STANICE_ELEKTRICKE_SITE: 8, // stanice elektrické sítě
    TRASA_ELEKTRICKE_SITE: 9, // trasa elektrické sítě
    JINY: 98, // jiný
    NEURCENO: 99, // neurčeno
};
/** TypObjektuElektrickeSiteZameru */
export const TypObjektuElektrickeSiteZameru = {
    GEOTERMALNI_ELEKTRARNA: 1, // geotermální elektrárna
    JADERNA_ELEKTRARNA: 2, // jaderná elektrárna
    VODNI_ELEKTRARNA: 3, // vodní elektrárna
    FOTOVOLTAICKA_ELEKTRARNA: 4, // fotovoltaická elektrárna
    TEPELNA_ELEKTRARNA: 5, // tepelná elektrárna
    VETRNA_ELEKTRARNA: 6, // větrná elektrárna
    BIOPLYNOVA_ELEKTRARNA: 7, // bioplynová elektrárna
    STANICE_ELEKTRICKE_SITE: 8, // stanice elektrické sítě
    JINY: 98, // jiný
    NEURCENO: 99, // neurčeno
};
/** TypObjektuOdpadovehoHospodarstviPS */
export const TypObjektuOdpadovehoHospodarstviPS = {
    SKLADKA_ODPADU: 1, // skládka odpadů
    SPALOVNA: 2, // spalovna
    JINE_ZARIZENI_NA_ODSTRANOVANI_VYUZIVANI_NEBO_SBER_ODPADU: 3, // jiné zařízení na odstraňování, využívání nebo sběr odpadů
    ODKALISTE: 4, // odkaliště
    NEURCENO: 99, // neurčeno
};
/** TypObjektuOdpadovehoHospodarstviZameru */
export const TypObjektuOdpadovehoHospodarstviZameru = {
    SKLADKA_ODPADU: 1, // skládka odpadů
    SPALOVNA: 2, // spalovna
    JINE_ZARIZENI_NA_ODSTRANOVANI_VYUZIVANI_NEBO_SBER_ODPADU: 3, // jiné zařízení na odstraňování, využívání nebo sběr odpadů
    ODKALISTE: 4, // odkaliště
    NEURCENO: 99, // neurčeno
};
/** TypObjektuOdvodneniStavby */
export const TypObjektuOdvodneniStavby = {
    LINIOVY_ODVODNOVAC: 1, // liniový odvodňovač
    VPUST_KANALIZACNI_SITE: 2, // vpusť kanalizační sítě
    ODTOKOVE_POTRUBI: 3, // odtokové potrubí
    VSAKOVACI_JIMKA: 4, // vsakovací jímka
    JINY: 98, // jiný
    BETONOVY_ODVODNOVACI_ZLAB: 200, // betonový odvoďňovací žlab
    PRIKOP: 201, // příkop
    NEZJISTENO: 400, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** TypObjektuPlynovodniSitePS */
export const TypObjektuPlynovodniSitePS = {
    VYROBNA_PLYNU: 1, // výrobna plynu
    STANICE: 2, // stanice
    ZASOBNIK_PLYNU: 3, // zásobník plynu
    TRASA_PLYNOVODNI_SITE: 4, // trasa plynovodní sítě
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
};
/** TypObjektuPlynovodniSiteZameru */
export const TypObjektuPlynovodniSiteZameru = {
    VYROBNA_PLYNU: 1, // výrobna plynu
    STANICE: 2, // stanice
    ZASOBNIK_PLYNU: 3, // zásobník plynu
    JINY: 98, // jiný
    NEURCENO: 99, // neurčeno
};
/** TypObjektuSilnicniDopravyPS */
export const TypObjektuSilnicniDopravyPS = {
    DALNICE: 1, // dálnice
    SILNICE: 2, // silnice
    MISTNI_KOMUNIKACE: 3, // místní komunikace
    JINY: 98, // jiný
    NEURCENO: 99, // neurčeno
};
/** TypObjektuSilnicniDopravyZameru */
export const TypObjektuSilnicniDopravyZameru = {
    DALNICE: 1, // dálnice
    SILNICE: 2, // silnice
    MISTNI_KOMUNIKACE: 3, // místní komunikace
    JINY: 98, // jiný
    NEURCENO: 99, // neurčeno
};
/** TypObjektuStokoveSite */
export const TypObjektuStokoveSite = {
    CISTIRNA_ODPADNICH_VOD: 1, // čistírna odpadních vod
    CERPACI_STANICE: 2, // čerpací stanice
    KOMORA_ODLEHCOVACI: 3, // komora odlehčovací
    KOMORA_JINA: 4, // komora jiná
    KANALIZACNI_VYUST: 5, // kanalizační výusť
    RETENCNI_NADRZ_NA_STOKOVE_SITI: 6, // retenční nádrž na stokové síti
    PODTLAKOVA_STANICE: 7, // podtlaková stanice
    SACHTA_KANALIZACNI: 8, // šachta kanalizační
    ODLUCOVAC_LEHKYCH_KAPALIN: 9, // odlučovač lehkých kapalin
    JINY: 98, // jiný
    NEZJISTENO: 400, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** TypObjektuStokoveSitePS */
export const TypObjektuStokoveSitePS = {
    CISTIRNA_ODPADNICH_VOD: 1, // čistírna odpadních vod
    TRASA_STOKOVE_SITE: 2, // trasa stokové sítě
    JINY: 98, // jiný
    NEURCENO: 99, // neurčeno
};
/** TypObjektuStokoveSiteZameru */
export const TypObjektuStokoveSiteZameru = {
    CISTIRNA_ODPADNICH_VOD: 1, // čistírna odpadních vod
    JINY: 98, // jiný
    NEURCENO: 99, // neurčeno
};
/** TypObjektuTeplovodniSitePS */
export const TypObjektuTeplovodniSitePS = {
    TEPLARNA: 1, // teplárna
    KOTELNA: 2, // kotelna
    TRASA_TEPLOVODNI_SITE: 3, // trasa teplovodní sítě
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
};
/** TypObjektuVodovodniSite */
export const TypObjektuVodovodniSite = {
    VODOJEM_VEZOVY: 1, // vodojem věžový
    VODOJEM_ZEMNI: 2, // vodojem zemní
    UPRAVNA_VODY: 3, // úpravna vody
    CERPACI_STANICE: 4, // čerpací stanice
    SACHTA_VODOVODNI_SITE_BEZ_ROZLISENI: 5, // šachta vodovodní sítě (bez rozlišení)
    PITKO: 6, // pítko
    JINY: 98, // jiný
    NEZJISTENO: 400, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** TypObjektuVodovodniSitePS */
export const TypObjektuVodovodniSitePS = {
    ZDROJ_VODY: 1, // zdroj vody
    VODOJEM: 2, // vodojem
    UPRAVNA_VODY: 3, // úpravna vody
    TRASA_VODOVODNI_SITE: 4, // trasa vodovodní sítě
    JINY: 98, // jiný
    NEURCENO: 99, // neurčeno
};
/** TypObjektuVodovodniSiteZameru */
export const TypObjektuVodovodniSiteZameru = {
    ZDROJ_VODY: 1, // zdroj vody
    VODOJEM: 2, // vodojem
    UPRAVNA_VODY: 3, // úpravna vody
    JINY: 98, // jiný
    NEURCENO: 99, // neurčeno
};
/** TypObjektuZarizeniOchranaPredPovodnemi */
export const TypObjektuZarizeniOchranaPredPovodnemi = {
    HRADITKO_HRADIDLOVE_SACHTY: 1, // hradítko hradidlové šachty
    HRAZENI_UZAVER_VRATA: 2, // hrazení, uzávěr, vrata
    PATKA_PROTIPOVODNOVE_STENY: 3, // patka protipovodňové stěny
    ODLEHCOVACI_KORYTO: 4, // odlehčovací koryto
    JINY: 98, // jiný
    NEZJISTENO: 400, // nezjištěno
};
/** TypOdpadu */
export const TypOdpadu = {
    OSTATNI_ODPAD: 1, // ostatní odpad
    NEBEZPECNY_ODPAD: 2, // nebezpečný odpad
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** TypOPDrazniStavby */
export const TypOPDrazniStavby = {
    OP_ZELEZNICNI_TRATE: 1, // OP železniční tratě
    OP_TRAMVAJOVE_DRAHY: 2, // OP tramvajové dráhy
    OP_POZEMNI_LANOVE_DRAHY: 3, // OP pozemní lanové dráhy
    OP_SPECIALNI_DRAHY: 4, // OP speciální dráhy
    OP_VISUTE_LANOVE_DRAHY: 5, // OP visuté lanové dráhy
    NEZJISTENO: 400, // nezjištěno
};
/** TypOPLeteckychZabezpecovacichZarizeni */
export const TypOPLeteckychZabezpecovacichZarizeni = {
    OP_PREHLEDOVEHO_SYSTEMU: 1, // OP přehledového systému
    OP_RADIONAVIGACNIHO_ZARIZENI: 2, // OP radionavigačního zařízení
    OP_RADIOKOMUNIKACNIHO_SYSTEMU: 3, // OP radiokomunikačního systému
    OP_SVETELNEHO_ZARIZENI: 4, // OP světelného zařízení
    OP_PODZEMNI_LETECKE_STAVBY: 5, // OP podzemní letecké stavby
    NEZJISTENO: 400, // nezjištěno
};
/** TypOPLetiste */
export const TypOPLetiste = {
    OP_SE_ZAKAZEM_STAVEB: 1, // OP se zákazem staveb
    OP_S_VYSKOVYM_OMEZENIM_STAVEB: 2, // OP s výškovým omezením staveb
    OP_PROTI_NEBEZPECNYM_A_KLAMAVYM_SVETLUM: 3, // OP proti nebezpečným a klamavým světlům
    OP_SE_ZAKAZEM_LASEROVYCH_ZARIZENI: 4, // OP se zákazem laserových zařízení
    OP_S_OMEZENIM_STAVEB_VZDUSNYCH_VEDENI_VN_A_VVN: 5, // OP s omezením staveb vzdušných - vedení VN a VVN
    OP_HLUKOVE: 6, // OP hlukové
    OP_ORNITOLOGICKE: 7, // OP ornitologické
    NEZJISTENO: 400, // nezjištěno
};
/** TypOPPozemniKomunikace */
export const TypOPPozemniKomunikace = {
    OP_DALNICE: 1, // OP dálnice
    OP_SILNICE_I_TRIDY: 3, // OP silnice I. třídy
    OP_SILNICE_II_TRIDY: 4, // OP silnice II. třídy
    OP_SILNICE_III_TRIDY: 5, // OP silnice III. třídy
    OP_MISTNI_KOMUNIKACE_I_TRIDY: 6, // OP místní komunikace I. třídy
    OP_MISTNI_KOMUNIKACE_II_TRIDY: 7, // OP místní komunikace II. třídy
    NEZJISTENO: 400, // nezjištěno
};
/** TypOPSiteEK */
export const TypOPSiteEK = {
    OP_RADIOVEHO_ZARIZENI_A_RADIOVEHO_SMEROVEHO_SPOJE: 1, // OP rádiového zařízení a rádiového směrového spoje
    OP_KOMUNIKACNIHO_VEDENI: 2, // OP komunikačního vedení
    NEZJISTENO: 99, // nezjištěno
};
/** TypOPSiteProduktovodu */
export const TypOPSiteProduktovodu = {
    OP_PRODUKTOVODU: 1, // OP produktovodu
    OP_ROPOVODU: 2, // OP ropovodu
    NEZJISTENO: 99, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** TypOPZarizeniOdpadovehoHospodarstvi */
export const TypOPZarizeniOdpadovehoHospodarstvi = {
    OP_SKLADKY: 1, // OP skládky
    OP_SPALOVNY: 2, // OP spalovny
    OP_ZARIZENI_BRO: 3, // OP zařízení BRO
    OP_ZARIZENI_NA_ODSTRANOVANI_NO: 4, // OP zařízení na odstraňování NO
    NEZJISTENO: 400, // nezjištěno
};
/** TypOstatniPlochy */
export const TypOstatniPlochy = {
    DUL_LOM: 1, // důl, lom
    PLOCHA_REKULTIVACE: 2, // plocha rekultivace
    ULOZNE_MISTO_TEZEBNIHO_ODPADU: 3, // úložné místo těžebního odpadu
    JINE_DULNI_DILO_DULNI_STAVBA: 4, // jiné důlní dílo, důlní stavba
    HRISTE: 5, // hřiště
    HRBITOV: 6, // hřbitov
    DVUR_NADVORI: 7, // dvůr, nádvoří
    VEGETACNI_MISA: 8, // vegetační mísa
    ROZESTAVENA_PLOCHA: 9, // rozestavěná plocha
    NEZJISTENO: 99, // nezjištěno
    SKALY: 200, // skály
    VNITRNI_CLENENI_HRBITOVA: 201, // vnitřní členění hřbitova
    ZBORENISTE: 202, // zbořeniště
    JINY: 402, // jiný
};
/** TypPKO */
export const TypPKO = {
    KATODICKA: 1, // katodická
    ELEKTROPOLARIZOVANA_DRENAZ: 2, // elektropolarizovaná drenáž
    ANODA: 3, // anoda
    PROPOJOVACI_KABELAZ: 4, // propojovací kabeláž
    NEZJISTENO: 99, // nezjištěno
};
/** TypPodpernehoZarizeni */
export const TypPodpernehoZarizeni = {
    STOZAR_PRIHRADOVY: 1, // stožár příhradový
    SLOUP_TRAKCNIHO_VEDENI: 4, // sloup trakčního vedení
    NASTENNA_KONZOLA: 5, // nástěnná konzola
    STRESNIK: 6, // střešník
    PORTAL: 7, // portál
    HAK: 8, // hák
    STOZAR_JINY: 9, // stožár jiný
    SLOUP_ELEKTRICKEHO_VEREJNEHO_OSVETLENI: 10, // sloup elektrického veřejného osvětlení
    SLOUP_PLYNOVEHO_VEREJNEHO_OSVETLENI: 11, // sloup plynového veřejného osvětlení
    SLOUP_JINY: 12, // sloup jiný
    LAMPA_ZAVESNA: 200, // lampa závěsná
    SLOUP_DVOJITY: 201, // sloup dvojitý
    SLOUP_JEDNODUCHY_BETONOVY: 202, // sloup jednoduchý - betonový
    SLOUP_JEDNODUCHY_DREVENY: 203, // sloup jednoduchý - dřevěný
    SLOUP_KOVOVY: 204, // sloup kovový
    SLOUP_S_PATKOU: 205, // sloup s patkou
    NEZJISTENO: 400, // nezjištěno
};
/** TypPodzemnihoZasobnikuPlynu */
export const TypPodzemnihoZasobnikuPlynu = {
    SONDA: 1, // sonda
    SBERNE_STREDISKO: 2, // sběrné středisko
    CENTRALNI_AREAL: 3, // centrální areál
    NEZJISTENO: 400, // nezjištěno
    JINY: 402, // jiný
};
/** TypPovrchovehoZnakuTI */
export const TypPovrchovehoZnakuTI = {
    SACHTA_VSTUPNI: 1, // šachta vstupní
    SACHTA_KABELOVODNI: 2, // šachta kabelovodní
    ZARIZENI_ELEKTRICKE_SITE: 3, // zařízení elektrické sítě
    ZARIZENI_SITE_EK: 4, // zařízení sítě EK
    ZARIZENI_PLYNOVODNI_SITE: 5, // zařízení plynovodní sítě
    OBJEKT_VODOVODNI_SITE: 6, // objekt vodovodní sítě
    OBJEKT_STOKOVE_SITE: 7, // objekt stokové sítě
    ZARIZENI_SITE_PRODUKTOVODU: 8, // zařízení sítě produktovodu
    ZARIZENI_TEPLOVODNI_SITE: 9, // zařízení teplovodní sítě
    JINY: 98, // jiný
    HYDRANT_NADZEMNI: 200, // hydrant nadzemní
    HYDRANT_PODZEMNI: 201, // hydrant podzemní
    ORIENTACNI_PATNIK_OZNACNIK: 202, // orientační patník (označník)
    SACHTA_HRANATA: 203, // šachta hranatá
    SACHTA_KULATA: 204, // šachta kulatá
    SOUPE: 205, // šoupě
    VPUST: 206, // vpusť
    PODOBRUBNIKOVA_VPUST: 207, // podobrubníková vpust
    NEURCENO: 401, // neurčeno
};
/** TypPovrchuVzletovePristavaciDrahy */
export const TypPovrchuVzletovePristavaciDrahy = {
    ASFALTOBETON: 1, // asfaltobeton
    CEMENTOBETON: 2, // cementobeton
    TRAVA: 3, // tráva
    NEZJISTENO: 99, // nezjištěno
};
/** TypPozemniKomunikace */
export const TypPozemniKomunikace = {
    KOMUNIKACE: 1, // komunikace
    OKRUZNI_KRIZOVATKA: 2, // okružní křižovatka
    PROSTRANSTVI_BEZPROSTREDNE_SLOUZICI_PROVOZU_A_UDRZBE_POZEMNI_KOMUNIKACE: 3, // prostranství bezprostředně sloužící provozu a údržbě pozemní komunikace
    NEZJISTENO: 99, // nezjištěno
};
/** TypPrirodnihoPoloprirodnihoObjektu */
export const TypPrirodnihoPoloprirodnihoObjektu = {
    VODNI_TOK: 1, // vodní tok
    JEZERO: 2, // jezero
    ZEMEDELSKA_PLOCHA: 4, // zemědělská plocha
    ZAHRADA: 5, // zahrada
    LES: 6, // les
    HOSPODARSKY_NEVYUZIVANA_PLOCHA: 7, // hospodářsky nevyužívaná plocha
    NEZJISTENO: 99, // nezjištěno
    MOCAL_NEROZLISENY: 200, // močál nerozlišený
    MOCAL_PRUCHODNY: 201, // močál průchodný
    MOCAL_NEPRUCHODNY: 202, // močál neprůchodný
    JINY: 402, // jiný
};
/** TypPristavu */
export const TypPristavu = {
    VEREJNY: 1, // veřejný
    NEVEREJNY: 2, // neveřejný
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
};
/** TypPrivadece */
export const TypPrivadece = {
    ODKRYTY: 1, // odkrytý
    TRUBNI: 2, // trubní
    STOLA: 3, // štola
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
};
/** TypProtipovodnoveZabrany */
export const TypProtipovodnoveZabrany = {
    HRAZ: 1, // hráz
    ZED: 3, // zeď
    STAVEBNI_ZAKLADY_MOBILNI_ZABRANY: 4, // stavební základy mobilní zábrany
    JINA: 98, // jiná
    NEZJISTENO: 400, // nezjištěno
};
/** TypSdilenehoObjektuTI */
export const TypSdilenehoObjektuTI = {
    SDRUZENA_ROZVODNA_SKRIN: 1, // sdružená rozvodná skříň
    SACHTA_VSTUPNI: 5, // šachta vstupní
    SACHTA_KABELOVA: 6, // šachta kabelová
    ODBOCKA: 7, // odbočka
    TECHNICKA_KOMORA: 8, // technická komora
    INSPEKCNI_KOMORA: 9, // inspekční komora
    KABELOVA_KOMORA: 10, // kabelová komora
    ARMATURNI_KOMORA: 11, // armaturní komora
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** TypSledovaneVodniCesty */
export const TypSledovaneVodniCesty = {
    VEDENA_REKOU: 1, // vedená řekou
    VEDENA_PLAVEBNIM_KANALEM: 2, // vedená plavebním kanálem
    JINA_VODNI_PLOCHA: 98, // jiná vodní plocha
    NEZJISTENO: 400, // nezjištěno
};
/** TypSloupu */
export const TypSloupu = {
    BETONOVY: 1, // betonový
    DREVENY: 2, // dřevěný
    KOVOVY: 3, // kovový
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** TypStaniceElektrickeSite */
export const TypStaniceElektrickeSite = {
    TRANSFORMACNI_STANICE: 1, // transformační stanice
    STANICE_DISTRIBUCNI_SOUSTAVY: 2, // stanice distribuční soustavy
    SPINACI_STANICE: 3, // spínací stanice
    MENIRNA: 4, // měnírna
    STANICE_PRENOSOVE_SOUSTAVY: 5, // stanice přenosové soustavy
    TRAKCNI_NAPAJECI_STANICE: 6, // trakční napájecí stanice
    JINA: 98, // jiná
};
/** TypStavby */
export const TypStavby = {
    PODEZDIVKA: 1, // podezdívka
    RAMPA: 2, // rampa
    TERASA: 3, // terasa
    KOMIN: 4, // komín
    SKLENIK: 5, // skleník
    ZAHRADNI_BAZEN: 6, // zahradní bazén
    PATKA_DESKA_MONOLIT_PILIR: 7, // patka, deska, monolit, pilíř
    STAVBA_PRO_ZPEVNENI_POVRCHU: 8, // stavba pro zpevnění povrchu
    CELO_PROPUSTKU: 9, // čelo propustku
    DROBNA_SAKRALNI_STAVBA: 10, // drobná sakrální stavba
    DROBNA_KULTURNI_STAVBA: 11, // drobná kulturní stavba
    OSTATNI_ZASTRESENA_STAVBA: 12, // ostatní zastřešená stavba
    ZASTRESENI: 13, // zastřešení
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** TypSvodidla */
export const TypSvodidla = {
    JEDNODUCHE: 1, // jednoduché
    ZDVOJENE: 2, // zdvojené
    NEZJISTENO: 99, // nezjištěno
    OBOUSTRANNE: 200, // oboustranné
};
/** TypTechnickehoKanalu */
export const TypTechnickehoKanalu = {
    CHRANICKA: 4, // chránička
    KABELOVOD: 5, // kabelovod
    TECHNICKY_PODPOVRCHOVY_KANAL: 6, // technický podpovrchový kanál
    KABELOVA_LAVKA_ZLAB: 7, // kabelová lávka / žlab
    JINA_OCHRANNA_KONSTRUKCE: 98, // jiná ochranná konstrukce
    NEZJISTENO: 99, // nezjištěno
};
/** TypTechnologickehoObjektuPlynovodniSite */
export const TypTechnologickehoObjektuPlynovodniSite = {
    KOMPRESNI_STANICE: 1, // kompresní stanice
    REGULACNI_STANICE: 2, // regulační stanice
    DISTRIBUCNI_REGULATOR: 3, // distribuční regulátor
    ODORIZACNI_STANICE: 4, // odorizační stanice
    VYROBNA_PLYNU: 5, // výrobna plynu
    STANICE_KATODOVE_OCHRANY: 6, // stanice katodové ochrany
    PODZEMNI_ZASOBNIK_PLYNU: 7, // podzemní zásobník plynu
    PLNIRNA_PLYNU: 8, // plnírna plynu
    ARMATURNI_UZEL: 10, // armaturní uzel
    NADZEMNI_ZASOBNIK_PLYNU: 11, // nadzemní zásobník plynu
    POMOCNE_ROZVODY: 12, // pomocné rozvody
    SONDA: 13, // sonda
    JINY: 98, // jiný
};
/** TypTechnologickehoObjektuSiteEK */
export const TypTechnologickehoObjektuSiteEK = {
    RADIOTELESKOP: 1, // radioteleskop
    TECHNOLOGICKA_BUDOVA_EK: 2, // technologická budova EK
    TELEKOMUNIKACNI_VEZ: 3, // telekomunikační věž
    TECHNOLOGICKY_KONTEJNER_SITE_EK: 4, // technologický kontejner sítě EK
    NEZJISTENO: 400, // nezjištěno
    JINY: 402, // jiný
};
/** TypTechnologickehoObjektuTeplovodniSite */
export const TypTechnologickehoObjektuTeplovodniSite = {
    TEPLARNA: 1, // teplárna
    KOTELNA: 2, // kotelna
    JINY: 98, // jiný
    NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
};
/** TypTeplovodniSite */
export const TypTeplovodniSite = {
    TEPLOVOD: 1, // teplovod
    HORKOVOD: 2, // horkovod
    PAROVOD: 3, // parovod
    NEZJISTENO: 99, // nezjištěno
    KONDENZAT: 200, // kondenzát
    ODVODNENI_PAROVODU: 201, // odvodnění parovodu
    TOPNA_VODA: 202, // topná voda
    TEPLA_VODA: 203, // teplá voda
    NEURCENO: 401, // neurčeno
};
/** TypTerenniHrany */
export const TypTerenniHrany = {
    HRANA: 1, // hrana
    PATA: 2, // pata
    NEZJISTENO: 99, // nezjištěno
    HRANICE_SKAL: 200, // hranice skal
    PROTIHLUKOVY_VAL: 201, // protihlukový val
};
/** TypTrasyElektrickeSite */
export const TypTrasyElektrickeSite = {
    SILOVE_VEDENI: 1, // silové vedení
    ZEMNICI_LANO: 2, // zemnící lano
    ZEMNIC: 3, // zemnič
    NEZJISTENO: 99, // nezjištěno
    KRAJNI_VODIC: 200, // krajní vodič
    SILOVE_VEDENI_ZAVESNY_KABEL: 201, // silové vedení - závěsný kabel
};
/** TypTrasyMistniElektrickeSite */
export const TypTrasyMistniElektrickeSite = {
    VEREJNE_OSVETLENI: 1, // veřejné osvětlení
    SVETELNA_SIGNALIZACE: 2, // světelná signalizace
    OSVETLOVACI_SIT_STAVEB: 4, // osvětlovací síť staveb
    NEZJISTENO: 99, // nezjištěno
};
/** TypTrasyStokoveSite */
export const TypTrasyStokoveSite = {
    STOKOVA_SIT: 1, // stoková síť
    PRIVADECI_STOKA: 4, // přiváděcí stoka
    JINA: 98, // jiná
    NEZJISTENO: 99, // nezjištěno
    KMENOVA_STOKA: 200, // kmenová stoka
    ODLEHCOVACI_STOKA: 201, // odlehčovací stoka
    VYUSTNI_STOKA: 202, // výustní stoka
};
/** TypTrasyTeplovodniSite */
export const TypTrasyTeplovodniSite = {
    PRIMARNI: 1, // primární
    SEKUNDARNI: 2, // sekundární
    NEZJISTENO: 99, // nezjištěno
};
/** TypTrasyVodovodniSite */
export const TypTrasyVodovodniSite = {
    PRIVADECI_RAD: 1, // přiváděcí řad
    ROZVODNA_VODOVODNI_SIT: 2, // rozvodná vodovodní síť
    JINA: 98, // jiná
    NEZJISTENO: 99, // nezjištěno
};
/** TypTunelu */
export const TypTunelu = {
    ZELEZNICNI: 1, // železniční
    SILNICNI: 2, // silniční
    PRO_CYKLISTY_A_CHODCE: 3, // pro cyklisty a chodce
    PRO_VODNI_DOPRAVU: 4, // pro vodní dopravu
    SDRUZENY: 5, // sdružený
    JINY: 98, // jiný
    NEZJISTENO: 99, // nezjištěno
};
/** TypUdrzovaneZelene */
export const TypUdrzovaneZelene = {
    MESTSKA_PARKOVA_ZELEN: 1, // městská parková zeleň
    UDRZOVANA_TRAVNATA_A_OKRASNA_PLOCHA: 2, // udržovaná travnatá a okrasná plocha
    SKUPINA_STROMU_A_KERU: 3, // skupina stromů a keřů
    SILNICNI_VEGETACE: 4, // silniční vegetace
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** TypUsekuPozemniKomunikace */
export const TypUsekuPozemniKomunikace = {
    ZEMNI_TELESO_KOMUNIKACE: 1, // zemní těleso komunikace
    MOST: 2, // most
    TUNEL: 3, // tunel
    PRESYPANY_MOST: 4, // přesypaný most
    NEZJISTENO: 99, // nezjištěno
    LAVKA: 200, // lávka
    PODCHOD: 201, // podchod
    PREJEZD: 202, // přejezd
};
/** TypUsekuZeleznicniTrate */
export const TypUsekuZeleznicniTrate = {
    ZEMNI_TELESO: 1, // zemní těleso
    MOST: 2, // most
    TUNEL: 3, // tunel
    NEZJISTENO: 99, // nezjištěno
    PEVNA_JIZDNI_DRAHA: 200, // pevná jízdní dráha
    KOLEJOVE_STERKOVE_LOZE: 201, // kolejové (štěrkové) lože
    DRAZNI_STEZKA: 202, // drážní stezka
    PREJEZD: 203, // přejezd
    PRECHOD: 204, // přechod
    JINY: 402, // jiný
};
/** TypUzlu */
export const TypUzlu = {
    KRIZOVATKA: 1, // křižovatka
    ODPOCIVKA: 2, // odpočívka
    HRANICNI_PRECHOD_CR: 3, // hraniční přechod ČR
    HRANICE_PRIVOZU: 4, // hranice přívozu
    HRANICE_NEVYBUDOVANEHO_USEKU: 5, // hranice nevybudovaného úseku
    HRANICE_VOJENSKEHO_PROSTORU: 6, // hranice vojenského prostoru
    KONEC_USEKU: 7, // konec úseku
    NEZJISTENO: 400, // nezjištěno
};
/** TypVodnihoDila */
export const TypVodnihoDila = {
    STUPEN: 9, // stupeň
    STAVEBNE_UPRAVENE_KORYTO: 10, // stavebně upravené koryto
    MELIORACNI_PRIKOP_ZLAB: 11, // meliorační příkop, žlab
    SUCHA_NADRZ: 17, // suchá nádrž
    NADRZ_ZDRZ_SE_VZDOUVACIM_OBJEKTEM: 18, // nádrž, zdrž se vzdouvacím objektem
    NADRZ_BEZ_VZDOUVACIHO_OBJEKTU: 19, // nádrž bez vzdouvacího objektu
    HRAZ: 20, // hráz
    JEZ: 21, // jez
    STERKOVA_PREHRAZKA: 22, // štěrková přehrážka
    PROTIPOVODNOVA_ZABRANA: 23, // protipovodňová zábrana
    NEZJISTENO: 99, // nezjištěno
};
/** TypVrtu */
export const TypVrtu = {
    GEOTERMALNI: 1, // geotermální
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** TypVyrobnyElektriny */
export const TypVyrobnyElektriny = {
    GEOTERMALNI: 1, // geotermální
    JADERNA: 2, // jaderná
    VODNI: 3, // vodní
    FOTOVOLTAICKA: 4, // fotovoltaická
    TEPELNA: 5, // tepelná
    VETRNA: 6, // větrná
    BIOPLYNOVA: 7, // bioplynová
    NEZJISTENO: 99, // nezjištěno
};
/** TypZarizeniElektrickeSite */
export const TypZarizeniElektrickeSite = {
    SKRIN_ELEKTRICKE_SITE: 1, // skříň elektrické sítě
    JINE: 98, // jiné
    ROZVADEC_VEREJNEHO_OSVETLENI: 200, // rozvaděč veřejného osvětlení
    ZAPINACI_BOD: 201, // zapínací bod
    PODRUZNY_ROZVADEC: 202, // podružný rozvaděč
    NEZJISTENO: 400, // nezjištěno
};
/** TypZarizeniKanalizacniPripojky */
export const TypZarizeniKanalizacniPripojky = {
    REVIZNI_SACHTA: 1, // revizní šachta
    MERNA_SACHTA: 2, // měrná šachta
    DOMOVNI_CERPACI_STANICE: 3, // domovní čerpací stanice
    VSAKOVACI_ZARIZENI_S_PREPADEM: 4, // vsakovací zařízení s přepadem
    JINE: 98, // jiné
    NEZJISTENO: 400, // nezjištěno
};
/** TypZarizeniOdstranovaniOdpadu */
export const TypZarizeniOdstranovaniOdpadu = {
    ZARIZENI_NA_ODSTRANOVANI_BRO: 1, // zařízení na odstraňování BRO
    ZARIZENI_NA_ODSTRANOVANI_NEBEZPECNEHO_ODPADU: 2, // zařízení na odstraňování nebezpečného odpadu
    JINE: 98, // jiné
    NEZJISTENO: 99, // nezjištěno
};
/** TypZarizeniPlynovodniSite */
export const TypZarizeniPlynovodniSite = {
    SOUPE: 1, // šoupě
    SKRIN: 2, // skříň
    SACHTA: 4, // šachta
    JINE: 98, // jiné
    NEZJISTENO: 400, // nezjištěno
};
/** TypZarizeniPotrubniPosty */
export const TypZarizeniPotrubniPosty = {
    SOUPE: 1, // šoupě
    JINE: 98, // jiné
    NEZJISTENO: 400, // nezjištěno
};
/** TypZarizeniPrivadece */
export const TypZarizeniPrivadece = {
    SACHTA: 1, // šachta
    JINE: 98, // jiné
    NEZJISTENO: 99, // nezjištěno
};
/** TypZarizeniProLeteckyProvoz */
export const TypZarizeniProLeteckyProvoz = {
    PREHLEDOVY_SYSTEM: 1, // přehledový systém
    RADIONAVIGACNI_ZARIZENI: 2, // radionavigační zařízení
    RADIOKOMUNIKACNI_SYSTEM: 3, // radiokomunikační systém
    SVETELNE_ZARIZENI: 4, // světelné zařízení
    JINE: 98, // jiné
    NEZJISTENO: 99, // nezjištěno
};
/** TypZarizeniSiteEK */
export const TypZarizeniSiteEK = {
    VENKOVNI_ROZVADEC_EK: 2, // venkovní rozvaděč EK
    BOD_PRO_PRISTUP_NEBO_PROPOJENI_SITI_EK_UVNITR_BUDOV: 3, // bod pro přístup nebo propojení sítí EK uvnitř budov
    NEZJISTENO: 400, // nezjištěno
    JINY: 402, // jiný
};
/** TypZarizeniSiteProduktovodu */
export const TypZarizeniSiteProduktovodu = {
    SACHTA: 1, // šachta
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** TypZarizeniTeplovodniSite */
export const TypZarizeniTeplovodniSite = {
    ODVETRAVANI_TEPLOVODU: 1, // odvětrávání teplovodu
    SACHTA: 2, // šachta
    JINE: 98, // jiné
    NEZJISTENO: 400, // nezjištěno
};
/** TypZarizeniVodovodniPripojky */
export const TypZarizeniVodovodniPripojky = {
    SACHTA_MERNA_A_KONTROLNI: 2, // šachta měrná a kontrolní
    JINE: 98, // jiné
    NEZJISTENO: 400, // nezjištěno
};
/** TypZdi */
export const TypZdi = {
    VOLNE_STOJICI: 1, // volně stojící
    OPERNA: 2, // opěrná
    ZARUBNI: 3, // zárubní
    MESTSKE_HRADBY: 4, // městské hradby
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** TypZeleznicniTrate */
export const TypZeleznicniTrate = {
    VYSOKORYCHLOSTNI: 1, // vysokorychlostní
    KONVENCNI: 2, // konvenční
    NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
    JINY: 402, // jiný
};
/** TypZemedelskePlochy */
export const TypZemedelskePlochy = {
    ORNA_PUDA: 1, // orná půda
    VINICE: 2, // vinice
    CHMELNICE: 3, // chmelnice
    OVOCNY_SAD: 4, // ovocný sad
    TRVALY_TRAVNI_POROST: 5, // trvalý travní porost
    JINA: 98, // jiná
    NEZJISTENO: 99, // nezjištěno
};
/** UceloveZarazeniStokoveSite */
export const UceloveZarazeniStokoveSite = {
    JEDNOTNA: 1, // jednotná
    SRAZKOVA: 2, // srážková
    SPLASKOVA: 3, // splašková
    PRUMYSLOVA: 6, // průmyslová
    JINE: 98, // jiné
    NEZJISTENO: 99, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** UmisteniHeliportu */
export const UmisteniHeliportu = {
    UROVNOVY: 1, // úrovňový
    VYVYSENY: 2, // vyvýšený
    NEZJISTENO: 99, // nezjištěno
};
/** UmisteniObjektu */
export const UmisteniObjektu = {
    SAMOSTATNE_STOJICI: 1, // samostatně stojící
    NA_OBJEKTU: 2, // na objektu
    NEZJISTENO: 99, // nezjištěno
    NA_PODPERNEM_BODE: 201, // na podpěrném bodě
    NA_LAMPE: 202, // na lampě
    NA_ZAVESNE_KONZOLI: 203, // na závěsné konzoli
    NA_SLOUPU: 204, // na sloupu
    NA_SLOUPKU_BEZ_PATICE: 205, // na sloupku bez patice
    NA_SLOUPKU_S_PATICI: 206, // na sloupku s paticí
    NA_KONZOLI: 207, // na konzoli
    NA_STROPE_TUNELU: 208, // na stropě tunelu
    V_UROVNI_KOMUNIKACE: 209, // v úrovni komunikace
    V_UROVNI_TERENU: 210, // v úrovni terénu
    JINY: 402, // jiný
};
/** UmisteniOznacniku */
export const UmisteniOznacniku = {
    SAMOSTATNY_NOSIC: 1, // samostatný nosič
    SDILENE_PODPERNE_ZARIZENI: 2, // sdílené podpěrné zařízení
    STAVBA_ZASTRESENI: 3, // stavba zastřešení
    JINE: 4, // jiné
};
/** UrovenUmisteniObjektuDI */
export const UrovenUmisteniObjektuDI = {
    VALUE_MINUS_3: -3, // 3. úroveň pod povrchem (nejníže)
    VALUE_MINUS_2: -2, // 2. úroveň pod povrchem
    VALUE_MINUS_1: -1, // 1. úroveň pod povrchem
    NA_POVRCHU: 0, // na povrchu
    VALUE_1: 1, // 1. úroveň nad povrchem
    VALUE_2: 2, // 2. úroveň nad povrchem
    VALUE_3: 3, // 3. úroveň nad povrchem (nejvýše)
    NEZJISTENO: 400, // nezjištěno
};
/** UrovenUmisteniObjektuPSPI */
export const UrovenUmisteniObjektuPSPI = {
    POD_POVRCHEM: -1, // pod povrchem
    NA_POVRCHU: 0, // na povrchu
    NAD_POVRCHEM: 1, // nad povrchem
    NEZJISTENO: 400, // nezjištěno
};
/** UrovenUmisteniObjektuTI */
export const UrovenUmisteniObjektuTI = {
    POD_POVRCHEM: -1, // pod povrchem
    NA_POVRCHU: 0, // na povrchu
    NAD_POVRCHEM: 1, // nad povrchem
    NEZJISTENO: 400, // nezjištěno
};
/** UrovenUmisteniObjektuZPS */
export const UrovenUmisteniObjektuZPS = {
    VALUE_MINUS_3: -3, // 3. úroveň pod povrchem (nejníže)
    VALUE_MINUS_2: -2, // 2. úroveň pod povrchem
    VALUE_MINUS_1: -1, // 1. úroveň pod povrchem
    NA_POVRCHU: 0, // na povrchu
    VALUE_1: 1, // 1. úroveň nad povrchem
    VALUE_2: 2, // 2. úroveň nad povrchem
    VALUE_3: 3, // 3. úroveň nad povrchem (nejvýše)
    NEZJISTENO: 400, // nezjištěno
};
/** VedeniSiteVJineStavbe */
export const VedeniSiteVJineStavbe = {
    KOLEKTOR: 1, // kolektor
    TECHNICKY_KANAL: 2, // technický kanál
    TEPLOVOD: 3, // teplovod
    KANALIZACE: 4, // kanalizace
    TUNEL: 5, // tunel
    MOST: 6, // most
    PORTAL: 7, // portál
    JINA_STAVBA: 97, // jiná stavba
    NEVEDE_V_JINE_STAVBE: 98, // nevede v jiné stavbě
    NEZJISTENO: 99, // nezjištěno
    NEURCENO: 401, // neurčeno
};
/** ZarazeniSledovaneVodniCesty */
export const ZarazeniSledovaneVodniCesty = {
    DOPRAVNE_VYZNAMNA_VYUZIVANA: 1, // dopravně významná využívaná
    DOPRAVNE_VYZNAMNA_VYUZITELNA: 2, // dopravně významná využitelná
    UCELOVA: 3, // účelová
    PLANOVANA: 4, // plánovaná
    NEZJISTENO: 400, // nezjištěno
};
/** ZpusobOchranyVedeniSiteEK */
export const ZpusobOchranyVedeniSiteEK = {
    BEZ_OCHRANY_VEDENI: 1, // bez ochrany vedení
    PLASTOVA_TRUBKA: 2, // plastová trubka
    SVAZEK_MIKROTRUBICEK: 3, // svazek mikrotrubiček
    NEZJISTENO: 99, // nezjištěno
    NEURCENO: 401, // neurčeno
    JINY: 402, // jiný
};
/** ZpusobPorizeniDI */
export const ZpusobPorizeniDI = {
    GEODETICKY_TERESTRICKY: 1, // geodeticky - terestricky
    GEODETICKY_FOTOGRAMMETRICKY: 2, // geodeticky - fotogrammetricky
    GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3, // geodeticky - pozemním laserovým skenováním
    PRIBLIZNYM_ZAKRESEM: 4, // přibližným zákresem
    ODVOZENIM: 5, // odvozením
    GEODETICKY_TECHNOLOGII_GNSS: 6, // geodeticky - technologií GNSS
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** ZpusobPorizeniPB_ZPS */
export const ZpusobPorizeniPB_ZPS = {
    GEODETICKY_TERESTRICKY: 1, // geodeticky - terestricky
    GEODETICKY_FOTOGRAMMETRICKY: 2, // geodeticky - fotogrammetricky
    GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3, // geodeticky - pozemním laserovým skenováním
    PRIBLIZNYM_ZAKRESEM: 4, // přibližným zákresem
    KONSTRUKCNE: 5, // konstrukčně
    GEODETICKY_TECHNOLOGII_GNSS: 6, // geodeticky - technologií GNSS
    GEODETICKY_TECHNOLOGII_GNSS_PRED_ZAHOZEM: 7, // geodeticky - technologií GNSS před záhozem
    GEODETICKY_TECHNOLOGII_GNSS_PO_ZAHOZU: 8, // geodeticky - technologií GNSS po záhozu
    GEODETICKY_TERESTRICKY_PRED_ZAHOZEM: 9, // geodeticky - terestricky před záhozem
    GEODETICKY_TERESTRICKY_PO_ZAHOZU: 10, // geodeticky - terestricky po záhozu
    VYHLEDANIM: 11, // vyhledáním
    NEZJISTENO: 99, // nezjištěno
};
/** ZpusobPorizeniTI */
export const ZpusobPorizeniTI = {
    GEODETICKY_TERESTRICKY: 1, // geodeticky - terestricky
    GEODETICKY_TERESTRICKY_PRED_ZAHOZEM: 2, // geodeticky - terestricky před záhozem
    GEODETICKY_TERESTRICKY_PO_ZAHOZU: 3, // geodeticky - terestricky po záhozu
    GEODETICKY_FOTOGRAMMETRICKY: 4, // geodeticky - fotogrammetricky
    GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 5, // geodeticky - pozemním laserovým skenováním
    PRIBLIZNYM_ZAKRESEM: 6, // přibližným zákresem
    VYHLEDANIM: 7, // vyhledáním
    ODVOZENIM: 8, // odvozením
    GEODETICKY_TECHNOLOGII_GNSS: 9, // geodeticky - technologií GNSS
    GEODETICKY_TECHNOLOGII_GNSS_PRED_ZAHOZEM: 10, // geodeticky - technologií GNSS před záhozem
    GEODETICKY_TECHNOLOGII_GNSS_PO_ZAHOZU: 11, // geodeticky - technologií GNSS po záhozu
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** ZpusobPorizeniZPS */
export const ZpusobPorizeniZPS = {
    GEODETICKY_TERESTRICKY: 1, // geodeticky - terestricky
    GEODETICKY_FOTOGRAMMETRICKY: 2, // geodeticky - fotogrammetricky
    GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3, // geodeticky - pozemním laserovým skenováním
    PRIBLIZNYM_ZAKRESEM: 4, // přibližným zákresem
    ODVOZENIM: 5, // odvozením
    GEODETICKY_TECHNOLOGII_GNSS: 6, // geodeticky - technologií GNSS
    NEZJISTENO: 99, // nezjištěno
    JINY: 402, // jiný
};
/** CKZDruhLesa */
export const CKZDruhLesa = {
    KOSODREVINA: 500, // kosodřevina
    LES_S_KROVINATYM_POROSTEM: 501, // les s křovinatým porostem
    LES_JEHLICNATY: 502, // les jehličnatý
    LES_LISTNATY: 503, // les listnatý
    LES_SMISENY: 504, // les smíšený
    MYTINA: 505, // mýtina
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZDruhUdrzovaneZelene */
export const CKZDruhUdrzovaneZelene = {
    KAMENNE_POLE: 500, // kamenné pole
    RUDERALNI_PLOCHA: 501, // ruderální plocha
    SKUPINA_KERU: 502, // skupina keřů
    SKUPINA_STROMU: 503, // skupina stromů
    TRAVNIK: 504, // trávník
    ZAHON: 505, // záhon
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZFunkceKomunikace */
export const CKZFunkceKomunikace = {
    RYCHLOSTNI_KOMUNIKACE: 500, // rychlostní komunikace
    SBERNE_KOMUNIKACE: 501, // sběrné komunikace
    OBSLUZNE_KOMUNIKACE: 502, // obslužné komunikace
    PESI_ZONY_OBYTNE_ZONY: 503, // pěší zóny, obytné zóny
    PESI_A_CYKLOSTEZKY: 504, // pěší a cyklostezky
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZFunkcniStavObjektu */
export const CKZFunkcniStavObjektu = {
    DOBRY: 500, // dobrý
    HAVARIJNI: 501, // havarijní
    NEFUNKCNI: 502, // nefunkční
    NEVYHOVUJICI: 503, // nevyhovující
    VYBORNY: 504, // výborný
    VYHOVUJICI: 505, // vyhovující
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZKonstrukceBudovy */
export const CKZKonstrukceBudovy = {
    ZDENA: 500, // zděná
    DREVENA: 501, // dřevěná
    BETONOVA: 502, // betonová
    KOVOVA: 503, // kovová
    KOMBINOVANA: 504, // kombinovaná
    PROSKLENA: 505, // prosklená
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZKonstrukceDZZ */
export const CKZKonstrukceDZZ = {
    PORTAL: 500, // portál
    POLOPORTAL: 501, // poloportál
    TUNELOVY_PORTAL: 502, // tunelový portál
    DVOJITY_POLOPORTAL: 503, // dvojitý poloportál
    PRIHRADA_FEZN: 504, // příhrada - FeZn
    SLOUP_SIGNALIZACE: 505, // sloup signalizace
    SLOUP_VO: 506, // sloup VO
    SLOUP_ELEKTRICKEHO_VEDENI: 507, // sloup elektrického vedení
    SLOUP_ZELEZNICNI: 508, // sloup železniční
    SLOUP_BETONOVY: 509, // sloup betonový
    SLOUP_DREVENY: 510, // sloup dřevěný
    STOJKA_2X: 511, // stojka 2x
    SLOUPEK_1X: 512, // sloupek 1x
    SLOUPEK_2X: 513, // sloupek 2x
    MAJAK: 514, // maják
    SVODIDLO: 515, // svodidlo
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZMaterialUDM */
export const CKZMaterialUDM = {
    BETON: 500, // beton
    CIHLA: 501, // cihla
    DREVO: 502, // dřevo
    GABION: 503, // gabion
    KAMEN: 504, // kámen
    KOMBINACE: 505, // kombinace
    KOMPOZIT: 506, // kompozit
    KOV: 507, // kov
    PLAST: 508, // plast
    SKLO: 509, // sklo
    ZDENY: 510, // zděný
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZMaterialSvodidla */
export const CKZMaterialSvodidla = {
    BETONOVE: 500, // betonové
    DREVOOCELOVE: 501, // dřevoocelové
    LANOVE: 502, // lanové
    OCELOBETONOVE: 503, // ocelobetonové
    OCELOVE: 504, // ocelové
    OCELOVE_OTVIRATELNE: 505, // ocelové otvíratelné
    OCELOVE_S_OCHRANOU_PROTI_PODJETI_MOTO: 506, // ocelové s ochranou proti podjetí (moto)
    OCELOVE_STINENE: 507, // ocelové stíněné
    RETEZ: 508, // řetěz
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZMaterialTeplovodu */
export const CKZMaterialTeplovodu = {
    NEREZ: 500, // nerez
    PREDIZOLOVANA_OCEL: 501, // předizolovaná ocel
    PREDIZOLOVANA_NEREZ: 502, // předizolovaná nerez
    PREDIZOLOVANY_POLYETYLEN: 503, // předizolovaný polyetylen
    OCEL: 504, // ocel
    POLYBUTYLEN: 505, // polybutylén
    POLYPROPYLEN: 506, // polypropylén
    LITINA: 507, // litina
    POLYETHYLEN: 508, // polyethylén
    PVC_POLYVINILCHLORID: 509, // PVC (polyvinilchlorid)
    POZINK: 510, // pozink
    PLAST: 511, // plast
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNabehSvodidla */
export const CKZNabehSvodidla = {
    DLOUHY: 500, // dlouhý
    KRATKY: 501, // krátký
    ODKLON: 502, // odklon
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevDZ */
export const CKZNazevDZ = {
    Z2_ZABRANA_PRO_OZNACENI_UZAVIRKY: 500, // Z2 - Zábrana pro označení uzavírky
    Z3_VODICI_TABULE: 501, // Z3 - Vodicí tabule
    Z4A_SMEROVACI_DESKA_SE_SIKMYMI_PRUHY_SE_SKLONEM_VLEVO: 502, // Z4a - Směrovací deska se šikmými pruhy se sklonem vlevo
    Z4B_SMEROVACI_DESKA_SE_SIKMYMI_PRUHY_SE_SKLONEM_VPRAVO: 503, // Z4b - Směrovací deska se šikmými pruhy se sklonem vpravo
    Z4C_SMEROVACI_DESKA_STREDOVA: 504, // Z4c - Směrovací deska středová
    Z4D_SMEROVACI_DESKA_SE_SIPKOU_DOLEVA: 505, // Z4d - Směrovací deska se šipkou doleva
    Z4E_SMEROVACI_DESKA_SE_SIPKOU_DOPRAVA: 506, // Z4e - Směrovací deska se šipkou doprava
    Z5A_VODICI_DESKA_SE_SIKMYMI_PRUHY_SE_SKLONEM_VLEVO: 507, // Z5a - Vodicí deska se šikmými pruhy se sklonem vlevo
    Z5B_VODICI_DESKA_SE_SIKMYMI_PRUHY_SE_SKLONEM_VPRAVO: 508, // Z5b - Vodicí deska se šikmými pruhy se sklonem vpravo
    Z5C_VODICI_DESKA_STREDOVA_SE_SIKMYMI_PRUHY: 509, // Z5c - Vodicí deska středová se šikmými pruhy
    Z5D_VODICI_DESKA_STREDOVA_S_VODOROVNYMI_PRUHY: 510, // Z5d - Vodicí deska středová s vodorovnými pruhy
    Z6A_VELKA_ZVYRAZNUJICI_DESKA: 511, // Z6a - Velká zvýrazňující deska
    Z6B_MALA_ZVYRAZNUJICI_DESKA: 512, // Z6b - Malá zvýrazňující deska
    Z11A_SMEROVY_SLOUPEK_BILY_LEVY: 513, // Z11a - Směrový sloupek bílý levý
    Z11B_SMEROVY_SLOUPEK_BILY_PRAVY: 514, // Z11b - Směrový sloupek bílý pravý
    Z11C_SMEROVY_SLOUPEK_CERVENY_LEVY: 515, // Z11c - Směrový sloupek červený levý
    Z11D_SMEROVY_SLOUPEK_CERVENY_PRAVY: 516, // Z11d - Směrový sloupek červený pravý
    Z11E_SMEROVY_SLOUPEK_MODRY_LEVY: 517, // Z11e - Směrový sloupek modrý levý
    Z11F_SMEROVY_SLOUPEK_MODRY_PRAVY: 518, // Z11f - Směrový sloupek modrý pravý
    Z11G_SMEROVY_SLOUPEK_CERVENY_KULATY: 519, // Z11g - Směrový sloupek červený kulatý
    Z11H_SMEROVY_SLOUPEK_ZELENY_KULATY_BALISETA: 520, // Z11h - Směrový sloupek zelený kulatý - baliseta
    Z12_KRATKY_PRICNY_PRAH: 521, // Z12 - Krátký příčný práh
    Z10_DOPRAVNI_KNOFLIK: 522, // Z10 - Dopravní knoflík
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSAS */
export const CKZNazevSAS = {
    S1_TRIBAREVNA_SOUSTAVA_S_PLNYMI_SIGNALY: 500, // S1 - Tříbarevná soustava s plnými signály
    S8A_ZAKAZANY_VJEZD_VOZIDEL_DO_JIZDNIHO_PRUHU: 501, // S8a - Zakázaný vjezd vozidel do jízdního pruhu
    S8B_VOLNY_VJEZD_VOZIDEL_DO_JIZDNIHO_PRUHU: 502, // S8b - Volný vjezd vozidel do jízdního pruhu
    S8C_SVETELNA_SIPKA_VLEVO: 503, // S8c - Světelná šipka vlevo
    S8D_SVETELNA_SIPKA_VPRAVO: 504, // S8d - Světelná šipka vpravo
    S8E_SVETELNY_KRIZ: 505, // S8e - Světelný kříž
    S9_DVOUBAREVNA_SOUSTAVA_SE_SIGNALY_PRO_CHODCE: 506, // S9 - Dvoubarevná soustava se signály pro chodce
    S10_TRIBAREVNA_SOUSTAVA_SE_SIGNALY_PRO_CYKLISTY: 507, // S10 - Tříbarevná soustava se signály pro cyklisty
    S11_TRIBAREVNA_SOUSTAVA_SE_SIGNALY_PRO_CHODCE_A_CYKLISTY: 508, // S11 - Tříbarevná soustava se signály pro chodce a cyklisty
    S12A_RYCHLOSTNI_SIGNAL_S_PROMENNYM_SIGNALNIM_ZNAKEM: 509, // S12a - Rychlostní signál s proměnným signálním znakem
    S12B_RYCHLOSTNI_SIGNAL_S_VICE_SIGNALNIMI_ZNAKY: 510, // S12b - Rychlostní signál s více signálními znaky
    S2_TRIBAREVNA_SOUSTAVA_SE_SMEROVYMI_SIGNALY: 511, // S2 - Tříbarevná soustava se směrovými signály
    S13_SIGNAL_DVOU_VEDLE_SEBE_UMISTENYCH_STRIDAVE_PRERUSOVANYCH_CERVENYCH_SVETEL: 512, // S13 - Signál dvou vedle sebe umístěných střídavě přerušovaných červených světel
    S14A_DVE_CERVENA_STRIDAVE_PRERUSOVANA_SVETLA_SIGNALU_PREJEZDOVEHO_ZABEZPECOVACIHO_ZARIZENI: 513, // S14a - Dvě červená střídavě přerušovaná světla signálu přejezdového zabezpečovacího zařízení
    S14B_PRERUSOVANE_BILE_SVETLO_SIGNALU_PREJEZDOVEHO_ZABEZPECOVACIHO_ZARIZENI: 514, // S14b - Přerušované bílé světlo signálu přejezdového zabezpečovacího zařízení
    S3_TRIBAREVNA_SOUSTAVA_S_KOMBINOVANYMI_SMEROVYMI_SIGNALY: 515, // S3 - Tříbarevná soustava s kombinovanými směrovými signály
    S4A_SIGNAL_ZLUTEHO_SVETLA_VE_TVARU_CHODCE: 516, // S4a - Signál žlutého světla ve tvaru chodce
    S4B_SIGNAL_ZLUTEHO_SVETLA_VE_TVARU_CYKLISTY: 517, // S4b - Signál žlutého světla ve tvaru cyklisty
    S4C_SIGNAL_ZLUTEHO_SVETLA_VE_TVARU_CHODCE_A_CYKLISTY: 518, // S4c - Signál žlutého světla ve tvaru chodce a cyklisty
    S5_DOPLNKOVA_ZELENA_SIPKA: 519, // S5 - Doplňková zelená šipka
    S6_SIGNAL_PRO_OPUSTENI_KRIZOVATKY: 520, // S6 - Signál pro opuštění křižovatky
    S7_PRERUSOVANE_ZLUTE_SVETLO: 521, // S7 - Přerušované žluté světlo
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZA */
export const CKZNazevSDZA = {
    A10_SVETELNE_SIGNALY: 500, // A10 - Světelné signály
    A11_PRECHOD_PRO_CHODCE: 501, // A11 - Přechod pro chodce
    A12A_CHODCI: 502, // A12a - Chodci
    A12B_DETI: 503, // A12b - Děti
    A12C_OSOBY_NA_OSOBNICH_PREPRAVNICICH: 504, // A12c - Osoby na osobních přepravnících
    A13_ZVIRATA: 505, // A13 - Zvířata
    A14_ZVER: 506, // A14 - Zvěř
    A15_PRACE_NA_SILNICI: 507, // A15 - Práce na silnici
    A16_BOCNI_VITR: 508, // A16 - Boční vítr
    A17_ODLETAVAJICI_STERK: 509, // A17 - Odlétávající štěrk
    A18_KAMENI_NA_VOZOVCE: 510, // A18 - Kamení na vozovce
    A19_CYKLISTE: 511, // A19 - Cyklisté
    A1A_ZATACKA_VPRAVO: 512, // A1a - Zatáčka vpravo
    A1B_ZATACKA_VLEVO: 513, // A1b - Zatáčka vlevo
    A20_LETADLA: 514, // A20 - Letadla
    A21_TUNEL: 515, // A21 - Tunel
    A22_JINE_NEBEZPECI: 516, // A22 - Jiné nebezpečí
    A23_KOLONA: 517, // A23 - Kolona
    A24_NALEDI: 518, // A24 - Náledí
    A25_TRAMVAJ: 519, // A25 - Tramvaj
    A26_MLHA: 520, // A26 - Mlha
    A27_NEHODA: 521, // A27 - Nehoda
    A28_NEBEZPECNA_KRAJNICE: 522, // A28 - Nebezpečná krajnice
    A2A_DVOJITA_ZATACKA_PRVNI_VPRAVO: 523, // A2a - Dvojitá zatáčka, první vpravo
    A2B_DVOJITA_ZATACKA_PRVNI_VLEVO: 524, // A2b - Dvojitá zatáčka, první vlevo
    A3_KRIZOVATKA: 525, // A3 - Křižovatka
    A33_POHYBLIVY_MOST: 526, // A33 - Pohyblivý most
    A34_NABREZI: 527, // A34 - Nábřeží
    A4_KRIZOVATKA_S_KRUHOVYM_OBJEZDEM: 528, // A4 - Křižovatka s kruhovým objezdem
    A5A_NEBEZPECNE_KLESANI: 529, // A5a - Nebezpečné klesání
    A5B_NEBEZPECNE_STOUPANI: 530, // A5b - Nebezpečné stoupání
    A6A_ZUZENA_VOZOVKA_Z_OBOU_STRAN: 531, // A6a - Zúžená vozovka z obou stran
    A6B_ZUZENA_VOZOVKA_Z_JEDNE_STRANY: 532, // A6b - Zúžená vozovka z jedné strany
    A7A_NEROVNOST_VOZOVKY: 533, // A7a - Nerovnost vozovky
    A7B_ZPOMALOVACI_PRAH: 534, // A7b - Zpomalovací práh
    A8_NEBEZPECI_SMYKU: 535, // A8 - Nebezpečí smyku
    A9_PROVOZ_V_OBOU_SMERECH: 536, // A9 - Provoz v obou směrech
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZAZ */
export const CKZNazevSDZAZ = {
    A29_ZELEZNICNI_PREJEZD_SE_ZAVORAMI: 500, // A29 - Železniční přejezd se závorami
    A30_ZELEZNICNI_PREJEZD_BEZ_ZAVOR: 501, // A30 - Železniční přejezd bez závor
    A31A_NAVESTNI_DESKA_240_M: 502, // A31a - Návěstní deska (240 m)
    A31B_NAVESTNI_DESKA_160_M: 503, // A31b - Návěstní deska (160 m)
    A31C_NAVESTNI_DESKA_80_M: 504, // A31c - Návěstní deska (80 m)
    A32A_VYSTRAZNY_KRIZ_PRO_ZELEZNICNI_PREJEZD_JEDNOKOLEJNY: 505, // A32a - Výstražný kříž pro železniční přejezd jednokolejný
    A32B_VYSTRAZNY_KRIZ_PRO_ZELEZNICNI_PREJEZD_VICEKOLEJNY: 506, // A32b - Výstražný kříž pro železniční přejezd vícekolejný
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZC */
export const CKZNazevSDZC = {
    C1_KRUHOVY_OBJEZD: 500, // C1 - Kruhový objezd
    C10A_STEZKA_PRO_CHODCE_A_CYKLISTY_DELENA: 501, // C10a - Stezka pro chodce a cyklisty dělená
    C10B_KONEC_STEZKY_PRO_CHODCE_A_CYKLISTY_DELENE: 502, // C10b - Konec stezky pro chodce a cyklisty dělené
    C11A_STEZKA_PRO_JEZDCE_NA_ZVIRETI: 503, // C11a - Stezka pro jezdce na zvířeti
    C11B_KONEC_STEZKY_PRO_JEZDCE_NA_ZVIRETI: 504, // C11b - Konec stezky pro jezdce na zvířeti
    C12A_PRIKAZANY_JIZDNI_PRUH: 505, // C12a - Přikázaný jízdní pruh
    C12B_KONEC_PRIKAZANEHO_JIZDNIHO_PRUHU: 506, // C12b - Konec přikázaného jízdního pruhu
    C13A_ROZSVIT_SVETLA: 507, // C13a - Rozsviť světla
    C13B_ROZSVIT_SVETLA_KONEC: 508, // C13b - Rozsviť světla - konec
    C14A_JINY_PRIKAZ: 509, // C14a - Jiný příkaz
    C14B_KONEC_JINEHO_PRIKAZU: 510, // C14b - Konec jiného příkazu
    C15A_ZIMNI_VYBAVA: 511, // C15a - Zimní výbava
    C15B_ZIMNI_VYBAVA_KONEC: 512, // C15b - Zimní výbava - konec
    C2A_PRIKAZANY_SMER_JIZDY_PRIMO: 513, // C2a - Přikázaný směr jízdy přímo
    C2B_PRIKAZANY_SMER_JIZDY_VPRAVO: 514, // C2b - Přikázaný směr jízdy vpravo
    C2C_PRIKAZANY_SMER_JIZDY_VLEVO: 515, // C2c - Přikázaný směr jízdy vlevo
    C2D_PRIKAZANY_SMER_JIZDY_PRIMO_A_VPRAVO: 516, // C2d - Přikázaný směr jízdy přímo a vpravo
    C2E_PRIKAZANY_SMER_JIZDY_PRIMO_A_VLEVO: 517, // C2e - Přikázaný směr jízdy přímo a vlevo
    C2F_PRIKAZANY_SMER_JIZDY_VPRAVO_A_VLEVO: 518, // C2f - Přikázaný směr jízdy vpravo a vlevo
    C3A_PRIKAZANY_SMER_JIZDY_ZDE_VPRAVO: 519, // C3a - Přikázaný směr jízdy zde vpravo
    C3B_PRIKAZANY_SMER_JIZDY_ZDE_VLEVO: 520, // C3b - Přikázaný směr jízdy zde vlevo
    C4A_PRIKAZANY_SMER_OBJIZDENI_VPRAVO: 521, // C4a - Přikázaný směr objíždění vpravo
    C4B_PRIKAZANY_SMER_OBJIZDENI_VLEVO: 522, // C4b - Přikázaný směr objíždění vlevo
    C4C_PRIKAZANY_SMER_OBJIZDENI_VPRAVO_A_VLEVO: 523, // C4c - Přikázaný směr objíždění vpravo a vlevo
    C5A_SNEHOVE_RETEZY: 524, // C5a - Sněhové řetězy
    C5B_SNEHOVE_RETEZY_KONEC: 525, // C5b - Sněhové řetězy - konec
    C6A_NEJNIZSI_DOVOLENA_RYCHLOST: 526, // C6a - Nejnižší dovolená rychlost
    C6B_KONEC_NEJNIZSI_DOVOLENE_RYCHLOSTI: 527, // C6b - Konec nejnižší dovolené rychlosti
    C7A_STEZKA_PRO_CHODCE: 528, // C7a - Stezka pro chodce
    C7B_KONEC_STEZKY_PRO_CHODCE: 529, // C7b - Konec stezky pro chodce
    C8A_STEZKA_PRO_CYKLISTY: 530, // C8a - Stezka pro cyklisty
    C8B_KONEC_STEZKY_PRO_CYKLISTY: 531, // C8b - Konec stezky pro cyklisty
    C9A_STEZKA_PRO_CHODCE_A_CYKLISTY_SPOLECNA: 532, // C9a - Stezka pro chodce a cyklisty společná
    C9B_KONEC_STEZKY_PRO_CHODCE_A_CYKLISTY_SPOLECNE: 533, // C9b - Konec stezky pro chodce a cyklisty společné
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZE */
export const CKZNazevSDZE = {
    E1_POCET: 500, // E1 - Počet
    E10_TVAR_KRIZENI_POZEMNI_KOMUNIKACE_S_DRAHOU: 501, // E10 - Tvar křížení pozemní komunikace s dráhou
    E11A_BEZ_CASOVEHO_POPLATKU: 502, // E11a - Bez časového poplatku
    E11B_S_CASOVYM_POPLATKEM: 503, // E11b - S časovým poplatkem
    E11C_BEZ_MYTNEHO: 504, // E11c - Bez mýtného
    E11D_S_MYTNYM: 505, // E11d - S mýtným
    E11E_BEZ_CASOVEHO_POPLATKU_A_MYTNEHO: 506, // E11e - Bez časového poplatku a mýtného
    E11F_S_CASOVYM_POPLATKEM_A_MYTNYM: 507, // E11f - S časovým poplatkem a mýtným
    E12A_JIZDA_CYKLISTU_V_PROTISMERU: 508, // E12a - Jízda cyklistů v protisměru
    E12B_VJEZD_CYKLISTU_V_PROTISMERU_POVOLEN: 509, // E12b - Vjezd cyklistů v protisměru povolen
    E12C_POVOLENY_SMER_JIZDY_CYKLISTU: 510, // E12c - Povolený směr jízdy cyklistů
    E13_TEXT_NEBO_SYMBOL: 511, // E13 - Text nebo symbol
    E14_TRANZIT: 512, // E14 - Tranzit
    E15_KATEGORIE_TUNELU: 513, // E15 - Kategorie tunelu
    E16_VZDALENOST_K_PRISTI_CERPACI_STANICI: 514, // E16 - Vzdálenost k příští čerpací stanici
    E17_NEDOSTATECNY_PRUJEZDNI_PROFIL_VOZOVKY: 515, // E17 - Nedostatečný průjezdní profil vozovky
    E2A_TVAR_KRIZOVATKY: 516, // E2a - Tvar křižovatky
    E2B_TVAR_KRIZOVATKY: 517, // E2b - Tvar křižovatky
    E2C_TVAR_KRIZOVATKY: 518, // E2c - Tvar křižovatky
    E2D_TVAR_DVOU_KRIZOVATEK: 519, // E2d - Tvar dvou křižovatek
    E3A_VZDALENOST: 520, // E3a - Vzdálenost
    E3B_VZDALENOST: 521, // E3b - Vzdálenost
    E4_DELKA_USEKU: 522, // E4 - Délka úseku
    E5_NEJVETSI_POVOLENA_HMOTNOST: 523, // E5 - Největší povolená hmotnost
    E6_ZA_MOKRA_ZA_DESTE: 524, // E6 - Za mokra (za deště)
    E7A_SMEROVA_SIPKA_PRO_SMER_PRIMO: 525, // E7a - Směrová šipka pro směr přímo
    E7B_SMEROVA_SIPKA_PRO_ODBOCENI: 526, // E7b - Směrová šipka pro odbočení
    E8A_ZACATEK_USEKU: 527, // E8a - Začátek úseku
    E8B_PRUBEH_USEKU: 528, // E8b - Průběh úseku
    E8C_KONEC_USEKU: 529, // E8c - Konec úseku
    E8D_USEK_PLATNOSTI: 530, // E8d - Úsek platnosti
    E8E_USEK_PLATNOSTI: 531, // E8e - Úsek platnosti
    E9_DRUH_VOZIDLA: 532, // E9 - Druh vozidla
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZIJ */
export const CKZNazevSDZIJ = {
    IJ1_POLICIE: 500, // IJ1 - Policie
    IJ10_HOTEL_NEBO_MOTEL: 501, // IJ10 - Hotel nebo motel
    IJ11A_RESTAURACE: 502, // IJ11a - Restaurace
    IJ11B_OBCERSTVENI: 503, // IJ11b - Občerstvení
    IJ12_WC: 504, // IJ12 - WC
    IJ13_MISTO_PRO_ODPOCINEK: 505, // IJ13 - Místo pro odpočinek
    IJ14A_TABORISTE_PRO_STANY: 506, // IJ14a - Tábořiště pro stany
    IJ14B_TABORISTE_PRO_OBYTNE_PRIVESY: 507, // IJ14b - Tábořiště pro obytné přívěsy
    IJ14C_TABORISTE_PRO_STANY_A_PRO_OBYTNE_PRIVESY: 508, // IJ14c - Tábořiště pro stany a pro obytné přívěsy
    IJ16_SILNICNI_KAPLE: 509, // IJ16 - Silniční kaple
    IJ17A_TRUCKPARK: 510, // IJ17a - Truckpark
    IJ17B_NAVEST_PRED_TRUCKPARKEM: 511, // IJ17b - Návěst před truckparkem
    IJ18A_NAVEST_PRED_ODPOCIVKOU: 512, // IJ18a - Návěst před odpočívkou
    IJ18B_NAVEST_PRED_ODBOCENIM_NA_ODPOCIVKU: 513, // IJ18b - Návěst před odbočením na odpočívku
    IJ18C_NAVEST_PRO_ODBOCENI_NA_ODPOCIVKU: 514, // IJ18c - Návěst pro odbočení na odpočívku
    IJ2_NEMOCNICE: 515, // IJ2 - Nemocnice
    IJ3_PRVNI_POMOC: 516, // IJ3 - První pomoc
    IJ4A_OZNACNIK_ZASTAVKY: 517, // IJ4a - Označník zastávky
    IJ4B_OZNACNIK_ZASTAVKY: 518, // IJ4b - Označník zastávky
    IJ4C_ZASTAVKA_AUTOBUSU: 519, // IJ4c - Zastávka autobusu
    IJ4D_ZASTAVKA_TRAMVAJE: 520, // IJ4d - Zastávka tramvaje
    IJ4E_ZASTAVKA_TROLEJBUSU: 521, // IJ4e - Zastávka trolejbusu
    IJ5_INFORMACE: 522, // IJ5 - Informace
    IJ6_TELEFON: 523, // IJ6 - Telefon
    IJ7_CERPACI_STANICE: 524, // IJ7 - Čerpací stanice
    IJ8_OPRAVNA: 525, // IJ8 - Opravna
    IJ9_STANICE_TECHNICKE_KONTROLY: 526, // IJ9 - Stanice technické kontroly
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZIP */
export const CKZNazevSDZIP = {
    IP1_OKRUH: 500, // IP1 - Okruh
    IP10A_SLEPA_POZEMNI_KOMUNIKACE: 501, // IP10a - Slepá pozemní komunikace
    IP10B_NAVEST_PRED_SLEPOU_POZEMNI_KOMUNIKACI: 502, // IP10b - Návěst před slepou pozemní komunikací
    IP16_USPORADANI_JIZDNICH_PRUHU: 503, // IP16 - Uspořádání jízdních pruhů
    IP17_USPORADANI_JIZDNICH_PRUHU: 504, // IP17 - Uspořádání jízdních pruhů
    IP18A_ZVYSENI_POCTU_JIZDNICH_PRUHU: 505, // IP18a - Zvýšení počtu jízdních pruhů
    IP18B_SNIZENI_POCTU_JIZDNICH_PRUHU: 506, // IP18b - Snížení počtu jízdních pruhů
    IP18C_JIZDNI_PRUH_PRO_POMALA_VOZIDLA: 507, // IP18c - Jízdní pruh pro pomalá vozidla
    IP19_RADICI_PRUHY: 508, // IP19 - Řadící pruhy
    IP2_ZPOMALOVACI_PRAH: 509, // IP2 - Zpomalovací práh
    IP20A_VYHRAZENY_JIZDNI_PRUH: 510, // IP20a - Vyhrazený jízdní pruh
    IP20B_KONEC_VYHRAZENEHO_JIZDNIHO_PRUHU: 511, // IP20b - Konec vyhrazeného jízdního pruhu
    IP21_OMEZENI_V_JIZDNIM_PRUHU: 512, // IP21 - Omezení v jízdním pruhu
    IP22_ZMENA_ORGANIZACE_DOPRAVY: 513, // IP22 - Změna organizace dopravy
    IP23A_OBJIZDENI_TRAMVAJE: 514, // IP23a - Objíždění tramvaje
    IP23B_OBJIZDENI_TRAMVAJE_JIZDA_PODEL_TRAMVAJE_VLEVO: 515, // IP23b - Objíždění tramvaje (jízda podél tramvaje vlevo)
    IP23C_SJIZDENI_VOZIDEL_VEREJNE_HROMADNE_DOPRAVY_OSOB_Z_TRAMVAJOVEHO_PASU: 516, // IP23c - Sjíždění vozidel veřejné hromadné dopravy osob z tramvajového pásu
    IP24_UNIKOVY_PRUH: 517, // IP24 - Únikový pruh
    IP28A_ZPOPLATNENI_PROVOZU: 518, // IP28a - Zpoplatnění provozu
    IP28B_NEJVYSSI_DOVOLENE_RYCHLOSTI: 519, // IP28b - Nejvyšší dovolené rychlosti
    IP29_STRIDAVE_RAZENI: 520, // IP29 - Střídavé řazení
    IP3_PODCHOD_NEBO_NADCHOD: 521, // IP3 - Podchod nebo nadchod
    IP30_STATNI_HRANICE: 522, // IP30 - Státní hranice
    IP31A_MERENI_RYCHLOSTI: 523, // IP31a - Měření rychlosti
    IP31B_KONEC_MERENI_RYCHLOSTI: 524, // IP31b - Konec měření rychlosti
    IP32_BEZPECNY_ODSTUP: 525, // IP32 - Bezpečný odstup
    IP4A_JEDNOSMERNY_PROVOZ: 526, // IP4a - Jednosměrný provoz
    IP4B_JEDNOSMERNY_PROVOZ: 527, // IP4b - Jednosměrný provoz
    IP5_DOPORUCENA_RYCHLOST: 528, // IP5 - Doporučená rychlost
    IP6_PRECHOD_PRO_CHODCE: 529, // IP6 - Přechod pro chodce
    IP7_PREJEZD_PRO_CYKLISTY: 530, // IP7 - Přejezd pro cyklisty
    IP9_NOUZOVE_STANI: 531, // IP9 - Nouzové stání
    IP4C_CYKLO_OBOUSMERNA_KOMUNIKACE: 532, // IP4c - Cyklo obousměrná komunikace
    IP12_VYHRAZENA_MISTA_PRO_DOBIJENI: 533, // IP12 - Vyhrazená místa pro dobíjení
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZIPP */
export const CKZNazevSDZIPP = {
    IP11A_PARKOVISTE: 500, // IP11a - Parkoviště
    IP11B_PARKOVISTE_KOLME_NEBO_SIKME_STANI: 501, // IP11b - Parkoviště kolmé nebo šikmé stání
    IP11C_PARKOVISTE_PODELNE_STANI: 502, // IP11c - Parkoviště podélné stání
    IP11D_PARKOVISTE_STANI_NA_CHODNIKU_KOLME_NEBO_SIKME: 503, // IP11d - Parkoviště stání na chodníku kolmé nebo šikmé
    IP11E_PARKOVISTE_STANI_NA_CHODNIKU_PODELNE: 504, // IP11e - Parkoviště stání na chodníku podélné
    IP11F_PARKOVISTE_CASTECNE_STANI_NA_CHODNIKU_KOLME_NEBO_SIKME: 505, // IP11f - Parkoviště částečné stání na chodníku kolmé nebo šikmé
    IP11G_PARKOVISTE_CASTECNE_STANI_NA_CHODNIKU_PODELNE: 506, // IP11g - Parkoviště částečné stání na chodníku podélné
    IP12_VYHRAZENE_PARKOVISTE: 507, // IP12 - Vyhrazené parkoviště
    IP13A_KRYTE_PARKOVISTE: 508, // IP13a - Kryté parkoviště
    IP13B_PARKOVISTE_S_PARKOVACIM_KOTOUCEM: 509, // IP13b - Parkoviště s parkovacím kotoučem
    IP13C_PARKOVISTE_S_PARKOVACIM_AUTOMATEM: 510, // IP13c - Parkoviště s parkovacím automatem
    IP13D_PARKOVISTE_P_R: 511, // IP13d - Parkoviště P+R
    IP13E_PARKOVISTE_K_R: 512, // IP13e - Parkoviště K+R
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZISN */
export const CKZNazevSDZISN = {
    IS10A_NAVEST_ZMENY_SMERU_JIZDY: 500, // IS10a - Návěst změny směru jízdy
    IS10B_NAVEST_ZMENY_SMERU_JIZDY: 501, // IS10b - Návěst změny směru jízdy
    IS10C_NAVEST_ZMENY_SMERU_JIZDY_PRED_PREKAZKOU: 502, // IS10c - Návěst změny směru jízdy před překážkou
    IS10D_NAVEST_ZMENY_SMERU_JIZDY_S_OMEZENIM: 503, // IS10d - Návěst změny směru jízdy s omezením
    IS11A_NAVEST_PRED_OBJIZDKOU: 504, // IS11a - Návěst před objížďkou
    IS13_BLIZKA_NAVEST: 505, // IS13 - Blízká návěst
    IS20_NAVEST_PRED_KRIZOVATKOU_PRO_CYKLISTY: 506, // IS20 - Návěst před křižovatkou pro cyklisty
    IS23_NAVEST_PRO_KULTURNI_NEBO_TURISTICKY_CIL: 507, // IS23 - Návěst pro kulturní nebo turistický cíl
    IS6B_NAVEST_PRED_KRIZOVATKOU: 508, // IS6b - Návěst před křižovatkou
    IS6D_NAVEST_PRED_KRIZOVATKOU: 509, // IS6d - Návěst před křižovatkou
    IS6E_SMEROVA_NAVEST_PRO_SMER_PRIMO: 510, // IS6e - Směrová návěst pro směr přímo
    IS6F_SMEROVA_NAVEST_PRED_ODBOCENIM: 511, // IS6f - Směrová návěst před odbočením
    IS6G_SMEROVA_NAVEST_PRED_ODBOCENIM: 512, // IS6g - Směrová návěst před odbočením
    IS7A_SMEROVA_NAVEST_PRO_ODBOCENI: 513, // IS7a - Směrová návěst pro odbočení
    IS8A_DALKOVA_NAVEST_S_SIPKOU: 514, // IS8a - Dálková návěst s šipkou
    IS8B_DALKOVA_NAVEST_SE_VZDALENOSTMI: 515, // IS8b - Dálková návěst se vzdálenostmi
    IS9A_NAVEST_PRED_UROVNOVOU_KRIZOVATKOU: 516, // IS9a - Návěst před úrovňovou křižovatkou
    IS9B_NAVEST_PRED_OKRUZNI_KRIZOVATKOU: 517, // IS9b - Návěst před okružní křižovatkou
    IS9C_NAVEST_PRED_KRIZOVATKOU_S_OMEZENIM: 518, // IS9c - Návěst před křižovatkou s omezením
    IS9D_NAVEST_PRED_KRIZOVATKOU_S_OMEZENIM: 519, // IS9d - Návěst před křižovatkou s omezením
    IS9E_NAVEST_PRED_KRIZOVATKOU_S_OMEZENIM: 520, // IS9e - Návěst před křižovatkou s omezením
    IS6C_NAVEST_PRED_KRIZOVATKOU: 521, // IS6c - Návěst před křižovatkou
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZIS */
export const CKZNazevSDZIS = {
    IS14_HRANICE_UZEMNIHO_CELKU: 500, // IS14 - Hranice územního celku
    IS15A_JINY_NAZEV: 501, // IS15a - Jiný název
    IS15B_JINY_NAZEV: 502, // IS15b - Jiný název
    IS16A_CISLO_DALNICE: 503, // IS16a - Číslo dálnice
    IS16B_CISLO_SILNICE: 504, // IS16b - Číslo silnice
    IS17_CISLO_SILNICE_PRO_MEZINARODNI_PROVOZ: 505, // IS17 - Číslo silnice pro mezinárodní provoz
    IS18A_KILOMETROVNIK: 506, // IS18a - Kilometrovník
    IS18B_KILOMETROVNIK: 507, // IS18b - Kilometrovník
    IS21D_KONEC_CYKLISTICKE_TRASY: 508, // IS21d - Konec cyklistické trasy
    IS22A_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 509, // IS22a - Označení názvu ulice nebo jiného veřejného prostranství
    IS22B_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 510, // IS22b - Označení názvu ulice nebo jiného veřejného prostranství
    IS22C_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 511, // IS22c - Označení názvu ulice nebo jiného veřejného prostranství
    IS22D_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 512, // IS22d - Označení názvu ulice nebo jiného veřejného prostranství
    IS22E_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 513, // IS22e - Označení názvu ulice nebo jiného veřejného prostranství
    IS22F_OZNACENI_NAZVU_ULICE_NEBO_JINEHO_VEREJNEHO_PROSTRANSTVI: 514, // IS22f - Označení názvu ulice nebo jiného veřejného prostranství
    IS24A_KULTURNI_NEBO_TURISTICKY_CIL: 515, // IS24a - Kulturní nebo turistický cíl
    IS24C_KOMUNALNI_CIL: 516, // IS24c - Komunální cíl
    IS6A_OZNACENI_KRIZOVATKY: 517, // IS6a - Označení křižovatky
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZISS */
export const CKZNazevSDZISS = {
    IS11B_SMEROVA_TABULE_PRO_VYZNACENI_OBJIZDKY: 500, // IS11b - Směrová tabule pro vyznačení objížďky
    IS11C_SMEROVA_TABULE_PRO_VYZNACENI_OBJIZDKY: 501, // IS11c - Směrová tabule pro vyznačení objížďky
    IS11D_SMEROVA_TABULE_PRO_VYZNACENI_OBJIZDKY: 502, // IS11d - Směrová tabule pro vyznačení objížďky
    IS19A_SMEROVA_TABULE_PRO_CYKLISTY_PRIMO: 503, // IS19a - Směrová tabule pro cyklisty (přímo)
    IS19B_SMEROVA_TABULE_PRO_CYKLISTY_VLEVO: 504, // IS19b - Směrová tabule pro cyklisty (vlevo)
    IS19C_SMEROVA_TABULE_PRO_CYKLISTY_VPRAVO: 505, // IS19c - Směrová tabule pro cyklisty (vpravo)
    IS1A_SMEROVA_TABULE_PRO_PRIJEZD_K_DALNICI_PRIMO: 506, // IS1a - Směrová tabule pro příjezd k dálnici (přímo)
    IS1B_SMEROVA_TABULE_PRO_PRIJEZD_K_DALNICI_VLEVO: 507, // IS1b - Směrová tabule pro příjezd k dálnici (vlevo)
    IS1C_SMEROVA_TABULE_PRO_PRIJEZD_K_DALNICI_VPRAVO: 508, // IS1c - Směrová tabule pro příjezd k dálnici (vpravo)
    IS1D_SMEROVA_TABULE_PRED_NAJEZDEM_NA_DALNICI_JEJI_CIL_CILE_A_CISLO_PRIMO: 509, // IS1d - Směrová tabule před nájezdem na dálnici, její cíl (cíle) a číslo (přímo)
    IS1E_SMEROVA_TABULE_PRED_NAJEZDEM_NA_DALNICI_JEJI_CIL_CILE_A_CISLO_VLEVO: 510, // IS1e - Směrová tabule před nájezdem na dálnici, její cíl (cíle) a číslo (vlevo)
    IS1F_SMEROVA_TABULE_PRED_NAJEZDEM_NA_DALNICI_JEJI_CIL_CILE_A_CISLO_VPRAVO: 511, // IS1f - Směrová tabule před nájezdem na dálnici, její cíl (cíle) a číslo (vpravo)
    IS21A_SMEROVA_TABULKA_PRO_CYKLISTY_PRIMO: 512, // IS21a - Směrová tabulka pro cyklisty (přímo)
    IS21B_SMEROVA_TABULKA_PRO_CYKLISTY_VLEVO: 513, // IS21b - Směrová tabulka pro cyklisty (vlevo)
    IS21C_SMEROVA_TABULKA_PRO_CYKLISTY_VPRAVO: 514, // IS21c - Směrová tabulka pro cyklisty (vpravo)
    IS24B_SMEROVA_TABULE_PRO_KULTURNI_NEBO_TURISTICKY_CIL: 515, // IS24b - Směrová tabule pro kulturní nebo turistický cíl
    IS2A_SMEROVA_TABULE_PRO_PRIJEZD_K_SILNICI_PRO_MOTOROVA_VOZIDLA_PRIMO: 516, // IS2a - Směrová tabule pro příjezd k silnici pro motorová vozidla (přímo)
    IS2B_SMEROVA_TABULE_PRO_PRIJEZD_K_SILNICI_PRO_MOTOROVA_VOZIDLA_VLEVO: 517, // IS2b - Směrová tabule pro příjezd k silnici pro motorová vozidla (vlevo)
    IS2C_SMEROVA_TABULE_PRO_PRIJEZD_K_SILNICI_PRO_MOTOROVA_VOZIDLA_VPRAVO: 518, // IS2c - Směrová tabule pro příjezd k silnici pro motorová vozidla (vpravo)
    IS2D_SMEROVA_TABULE_PRED_NAJEZDEM_NA_SILNICI_PRO_MOT_VOZIDLA_JEJI_CIL_CILE_A_CISLO_PRIMO: 519, // IS2d - Směrová tabule před nájezdem na silnici pro mot. vozidla, její cíl (cíle) a číslo. (přímo)
    IS2E_SMEROVA_TABULE_PRED_NAJEZDEM_NA_SILNICI_PRO_MOT_VOZIDLA_JEJI_CIL_CILE_A_CISLO_VLEVO: 520, // IS2e - Směrová tabule před nájezdem na silnici pro mot. vozidla, její cíl (cíle) a číslo. (vlevo)
    IS2F_SMEROVA_TABULE_PRED_NAJEZDEM_NA_SILNICI_PRO_MOT_VOZIDLA_JEJI_CIL_CILE_A_CISLO_VPRAVO: 521, // IS2f - Směrová tabule před nájezdem na silnici pro mot. vozidla, její cíl (cíle) a číslo. (vpravo)
    IS3A_SMEROVA_TABULE_S_CILEM_PRIMO: 522, // IS3a - Směrová tabule s cílem (přímo)
    IS3B_SMEROVA_TABULE_S_CILEM_VLEVO: 523, // IS3b - Směrová tabule s cílem (vlevo)
    IS3C_SMEROVA_TABULE_S_CILEM_VPRAVO: 524, // IS3c - Směrová tabule s cílem (vpravo)
    IS4A_SMEROVA_TABULE_S_MISTNIM_CILEM_PRIMO: 525, // IS4a - Směrová tabule s místním cílem (přímo)
    IS4B_SMEROVA_TABULE_S_MISTNIM_CILEM_VLEVO: 526, // IS4b - Směrová tabule s místním cílem (vlevo)
    IS4C_SMEROVA_TABULE_S_MISTNIM_CILEM_VPRAVO: 527, // IS4c - Směrová tabule s místním cílem (vpravo)
    IS5_SMEROVA_TABULE_S_JINYM_CILEM: 528, // IS5 - Směrová tabule s jiným cílem
    IS7B_SMEROVA_TABULE_PRO_VYJEZD: 529, // IS7b - Směrová tabule pro výjezd
    IS12_NAHRADNI_TRASY_DALNIC: 530, // IS12 - Náhradní trasy dálnic
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZIZ */
export const CKZNazevSDZIZ = {
    IZ1A_DALNICE: 500, // IZ1a - Dálnice
    IZ1B_KONEC_DALNICE: 501, // IZ1b - Konec dálnice
    IZ2A_SILNICE_PRO_MOTOROVA_VOZIDLA: 502, // IZ2a - Silnice pro motorová vozidla
    IZ2B_KONEC_SILNICE_PRO_MOTOROVA_VOZIDLA: 503, // IZ2b - Konec silnice pro motorová vozidla
    IZ3A_TUNEL: 504, // IZ3a - Tunel
    IZ3B_KONEC_TUNELU: 505, // IZ3b - Konec tunelu
    IZ4A_OBEC: 506, // IZ4a - Obec
    IZ4B_KONEC_OBCE: 507, // IZ4b - Konec obce
    IZ4C_OBEC_V_JAZYCE_NARODNOSTNI_MENSINY: 508, // IZ4c - Obec v jazyce národnostní menšiny
    IZ4D_KONEC_OBCE_V_JAZYCE_NARODNOSTNI_MENSINY: 509, // IZ4d - Konec obce v jazyce národnostní menšiny
    IZ5A_OBYTNA_ZONA: 510, // IZ5a - Obytná zóna
    IZ5B_KONEC_OBYTNE_ZONY: 511, // IZ5b - Konec obytné zóny
    IZ6A_PESI_ZONA: 512, // IZ6a - Pěší zóna
    IZ6B_KONEC_PESI_ZONY: 513, // IZ6b - Konec pěší zóny
    IZ7A_NIZKOEMISNI_ZONA: 514, // IZ7a - Nízkoemisní zóna
    IZ7B_KONEC_NIZKOEMISNI_ZONY: 515, // IZ7b - Konec nízkoemisní zóny
    IZ8A_ZONA_S_DOPRAVNIM_OMEZENIM: 516, // IZ8a - Zóna s dopravním omezením
    IZ8B_KONEC_ZONY_S_DOPRAVNIM_OMEZENIM: 517, // IZ8b - Konec zóny s dopravním omezením
    IZ9A_ZONA_PRO_CYKLISTY: 518, // IZ9a - Zóna pro cyklisty
    IZ9B_KONEC_ZONY_PRO_CYKLISTY: 519, // IZ9b - Konec zóny pro cyklisty
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZP */
export const CKZNazevSDZP = {
    P1_KRIZOVATKA_S_VEDLEJSI_POZEMNI_KOMUNIKACI: 500, // P1 - Křižovatka s vedlejší pozemní komunikací
    P2_HLAVNI_POZEMNI_KOMUNIKACE: 501, // P2 - Hlavní pozemní komunikace
    P3_KONEC_HLAVNI_POZEMNI_KOMUNIKACE: 502, // P3 - Konec hlavní pozemní komunikace
    P4_DEJ_PREDNOST_V_JIZDE: 503, // P4 - Dej přednost v jízdě!
    P5_DEJ_PREDNOST_V_JIZDE_TRAMVAJI: 504, // P5 - Dej přednost v jízdě tramvaji!
    P6_STUJ_DEJ_PREDNOST_V_JIZDE: 505, // P6 - Stůj, dej přednost v jízdě!
    P7_PREDNOST_PROTIJEDOUCICH_VOZIDEL: 506, // P7 - Přednost protijedoucích vozidel
    P8_PREDNOST_PRED_PROTIJEDOUCIMI_VOZIDLY: 507, // P8 - Přednost před protijedoucími vozidly
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevSDZB */
export const CKZNazevSDZB = {
    B1_ZAKAZ_VJEZDU_VSECH_VOZIDEL_V_OBOU_SMERECH: 500, // B1 - Zákaz vjezdu všech vozidel v obou směrech
    B10_ZAKAZ_VJEZDU_RUCNICH_VOZIKU: 501, // B10 - Zákaz vjezdu ručních vozíků
    B11_ZAKAZ_VJEZDU_VSECH_MOTOROVYCH_VOZIDEL: 502, // B11 - Zákaz vjezdu všech motorových vozidel
    B12_ZAKAZ_VJEZDU_VYZNACENYCH_VOZIDEL: 503, // B12 - Zákaz vjezdu vyznačených vozidel
    B13_ZAKAZ_VJEZDU_VOZIDEL_JEJICHZ_OKAMZITA_HMOTNOST_PRESAHUJE_VYZNACENOU_MEZ: 504, // B13 - Zákaz vjezdu vozidel, jejichž okamžitá hmotnost přesahuje vyznačenou mez
    B14_ZAKAZ_VJEZDU_VOZIDEL_JEJICHZ_OKAMZITA_HMOTNOST_PRIP_NA_NAPRAVU_PRESAHUJE_VYZ_MEZ: 505, // B14 - Zákaz vjezdu vozidel, jejichž okamžitá hmotnost přip. na nápravu přesahuje vyz. mez
    B15_ZAKAZ_VJEZDU_VOZIDEL_JEJICHZ_SIRKA_PRESAHUJE_VYZNACENOU_MEZ: 506, // B15 - Zákaz vjezdu vozidel, jejichž šířka přesahuje vyznačenou mez
    B16_ZAKAZ_VJEZDU_VOZIDEL_JEJICHZ_VYSKA_PRESAHUJE_VYZNACENOU_MEZ: 507, // B16 - Zákaz vjezdu vozidel, jejichž výška přesahuje vyznačenou mez
    B17_ZAKAZ_VJEZDU_VOZIDEL_NEBO_SOUPRAV_JEJICHZ_DELKA_PRESAHUJE_VYZNACENOU_MEZ: 508, // B17 - Zákaz vjezdu vozidel nebo souprav, jejichž délka přesahuje vyznačenou mez
    B18_ZAKAZ_VJEZDU_VOZIDEL_PREPRAVUJICICH_NEBEZPECNY_NAKLAD: 509, // B18 - Zákaz vjezdu vozidel přepravujících nebezpečný náklad
    B19_ZAKAZ_VJEZDU_VOZIDEL_PREPRAVUJICICH_NAKLAD_KTERY_MUZE_ZPUSOBIT_OHROZENI_ZIVOTNIHO_PROSTREDI: 510, // B19 - Zákaz vjezdu vozidel přepravujících náklad, který může způsobit ohrožení životního prostředí
    B2_ZAKAZ_VJEZDU_VSECH_VOZIDEL: 511, // B2 - Zákaz vjezdu všech vozidel
    B20A_NEJVYSSI_DOVOLENA_RYCHLOST: 512, // B20a - Nejvyšší dovolená rychlost
    B20B_KONEC_NEJVYSSI_DOVOLENE_RYCHLOSTI: 513, // B20b - Konec nejvyšší dovolené rychlosti
    B21A_ZAKAZ_PREDJIZDENI: 514, // B21a - Zákaz předjíždění
    B21B_KONEC_ZAKAZU_PREDJIZDENI: 515, // B21b - Konec zákazu předjíždění
    B22A_ZAKAZ_PREDJIZDENI_PRO_NAKLADNI_AUTOMOBILY: 516, // B22a - Zákaz předjíždění pro nákladní automobily
    B22B_KONEC_ZAKAZU_PREDJIZDENI_PRO_NAKLADNI_AUTOMOBILY: 517, // B22b - Konec zákazu předjíždění pro nákladní automobily
    B23A_ZAKAZ_ZVUKOVYCH_VYSTRAZNYCH_ZNAMENI: 518, // B23a - Zákaz zvukových výstražných znamení
    B23B_KONEC_ZAKAZU_ZVUKOVYCH_VYSTRAZNYCH_ZNAMENI: 519, // B23b - Konec zákazu zvukových výstražných znamení
    B24A_ZAKAZ_ODBOCOVANI_VPRAVO: 520, // B24a - Zákaz odbočování vpravo
    B24B_ZAKAZ_ODBOCOVANI_VLEVO: 521, // B24b - Zákaz odbočování vlevo
    B25_ZAKAZ_OTACENI: 522, // B25 - Zákaz otáčení
    B26_KONEC_VSECH_ZAKAZU: 523, // B26 - Konec všech zákazů
    B27_POVINNOST_ZASTAVIT_VOZIDLO: 524, // B27 - Povinnost zastavit vozidlo
    B28_ZAKAZ_ZASTAVENI: 525, // B28 - Zákaz zastavení
    B29_ZAKAZ_STANI: 526, // B29 - Zákaz stání
    B3_ZAKAZ_VJEZDU_VSECH_MOTOROVYCH_VOZIDEL_S_VYJIMKOU_MOTOCYKLU_BEZ_POSTRANNIHO_VOZIKU: 527, // B3 - Zákaz vjezdu všech motorových vozidel s výjimkou motocyklů bez postranního vozíku
    B30_ZAKAZ_VSTUPU_CHODCU: 528, // B30 - Zákaz vstupu chodců
    B30A_ZAKAZ_VJEZDU_OSOBNICH_PREPRAVNIKU: 529, // B30a - Zákaz vjezdu osobních přepravníků
    B31_ZAKAZ_VJEZDU_PRO_JEZDCE_NA_ZVIRETI: 530, // B31 - Zákaz vjezdu pro jezdce na zvířeti
    B32_JINY_ZAKAZ: 531, // B32 - Jiný zákaz
    B33_ZAKAZ_VJEZDU_MOTOROVYCH_VOZIDEL_S_PRIPOJNYM_VOZIDLEM: 532, // B33 - Zákaz vjezdu motorových vozidel s přípojným vozidlem
    B34_NEJMENSI_VZDALENOST_MEZI_VOZIDLY: 533, // B34 - Nejmenší vzdálenost mezi vozidly
    B4_ZAKAZ_VJEZDU_NAKLADNICH_AUTOMOBILU: 534, // B4 - Zákaz vjezdu nákladních automobilů
    B5_ZAKAZ_VJEZDU_AUTOBUSU: 535, // B5 - Zákaz vjezdu autobusů
    B6_ZAKAZ_VJEZDU_TRAKTORU: 536, // B6 - Zákaz vjezdu traktorů
    B7_ZAKAZ_VJEZDU_MOTOCYKLU: 537, // B7 - Zákaz vjezdu motocyklů
    B8_ZAKAZ_VJEZDU_JIZDNICH_KOL: 538, // B8 - Zákaz vjezdu jízdních kol
    B9_ZAKAZ_VJEZDU_POTAHOVYCH_VOZIDEL: 539, // B9 - Zákaz vjezdu potahových vozidel
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevVDZ */
export const CKZNazevVDZ = {
    V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_1: 500, // V9a - Směrová šipka - kruhový objezd verze 1
    V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_2: 501, // V9a - Směrová šipka - kruhový objezd verze 2
    V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_3: 502, // V9a - Směrová šipka - kruhový objezd verze 3
    V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_4: 503, // V9a - Směrová šipka - kruhový objezd verze 4
    V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_5: 504, // V9a - Směrová šipka - kruhový objezd verze 5
    V9A_SMEROVA_SIPKA_KRUHOVY_OBJEZD_VERZE_6: 505, // V9a - Směrová šipka - kruhový objezd verze 6
    V9A_SMEROVA_SIPKA_ROVNE: 506, // V9a - Směrová šipka - rovně
    V9A_SMEROVA_SIPKA_VLEVO: 507, // V9a - Směrová šipka - vlevo
    V9A_SMEROVA_SIPKA_VLEVO_A_ROVNE: 508, // V9a - Směrová šipka - vlevo a rovně
    V9A_SMEROVA_SIPKA_VPRAVO: 509, // V9a - Směrová šipka - vpravo
    V9A_SMEROVA_SIPKA_VPRAVO_A_ROVNE: 510, // V9a - Směrová šipka - vpravo a rovně
    V9A_SMEROVA_SIPKA_VPRAVO_A_VLEVO: 511, // V9a - Směrová šipka - vpravo a vlevo
    V9B_PREDBEZNA_SIPKA_VLEVO: 512, // V9b - Předběžná šipka - vlevo
    V9B_PREDBEZNA_SIPKA_VPRAVO: 513, // V9b - Předběžná šipka - vpravo
    V9C_PREDBEZNA_SIPKA_VLEVO: 514, // V9c - Předběžná šipka - vlevo
    V9C_PREDBEZNA_SIPKA_VPRAVO: 515, // V9c - Předběžná šipka - vpravo
    V14_JIZDNI_PRUH_PRO_CYKLISTY: 516, // V14 - Jízdní pruh pro cyklisty
    V15_NAPIS_NA_VOZOVCE_AUTOBUS: 517, // V15 - Nápis na vozovce - autobus
    V15_NAPIS_NA_VOZOVCE_DEJ_PREDNOST_V_JIZDE: 518, // V15 - Nápis na vozovce - dej přednost v jízdě
    V15_NAPIS_NA_VOZOVCE_EXIT: 519, // V15 - Nápis na vozovce - exit
    V15_NAPIS_NA_VOZOVCE_MISTO_PRO_INVALIDY: 520, // V15 - Nápis na vozovce - místo pro invalidy
    V15_NAPIS_NA_VOZOVCE_NABIJECI_STANICE: 521, // V15 - Nápis na vozovce - nabíjecí stanice
    V15_NAPIS_NA_VOZOVCE_STUJ_STOP: 522, // V15 - Nápis na vozovce - stůj (stop)
    V15_NAPIS_NA_VOZOVCE_TRAMVAJ: 523, // V15 - Nápis na vozovce - tramvaj
    V16_BEZPECNY_ODSTUP: 524, // V16 - Bezpečný odstup
    V17_TROJUHELNIKY: 525, // V17 - Trojúhelníky
    V20_PIKTOGRAMOVY_KORIDOR_PRO_CYKLISTY: 526, // V20 - Piktogramový koridor pro cyklisty
    A11_PRECHOD: 527, // A11 - přechod
    A12A_CHODCI: 528, // A12a - chodci
    A12B_DETI: 529, // A12b - děti
    A19_CYKLISTE: 530, // A19 - cyklisté
    A1A_ZATACKA_VPRAVO: 531, // A1a - zatáčka vpravo
    A1B_ZATACKA_VLEVO: 532, // A1b - zatáčka vlevo
    A22_JINE_NEBEZPECI: 533, // A22 - jiné nebezpečí
    A25_TRAMVAJ: 534, // A25 - tramvaj
    A32A_ZELEZNICNI_PREJEZD: 535, // A32a - železniční přejezd
    A3_KRIZOVATKA: 536, // A3 - křižovatka
    A4_KRUHOY_OBJEZD: 537, // A4 - kruhoý objezd
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZNazevVDZLinieAPlocha */
export const CKZNazevVDZLinieAPlocha = {
    V1A_PODELNA_CARA_SOUVISLA: 500, // V1a - Podélná čára souvislá
    V1B_DVOJITA_PODELNA_CARA_SOUVISLA: 501, // V1b - Dvojitá podélná čára souvislá
    V2A_PODELNA_CARA_PRERUSOVANA_S_ROZHLEDEM: 502, // V2a - Podélná čára přerušovaná s rozhledem
    V2B_PODELNA_CARA_PRERUSOVANA_BEZ_ROZHLEDU: 503, // V2b - Podélná čára přerušovaná bez rozhledu
    V2C_DVOJITA_PODELNA_CARA_PRERUSOVANA: 504, // V2c - Dvojitá podélná čára přerušovaná
    V3_PODELNA_CARA_SOUVISLA_DOPLNENA_CAROU_PRERUSOVANOU: 505, // V3 - Podélná čára souvislá doplněná čárou přerušovanou
    V4_VODICI_CARA: 506, // V4 - Vodicí čára
    V5_PRICNA_CARA_SOUVISLA: 507, // V5 - Příčná čára souvislá
    V7A_PRECHOD_PRO_CHODCE: 508, // V7a - Přechod pro chodce
    V7B_MISTO_PRO_PRECHAZENI: 509, // V7b - Místo pro přecházení
    V8A_PREJEZD_PRO_CYKLISTY: 510, // V8a - Přejezd pro cyklisty
    V8B_PREJEZD_PRO_CYKLISTY_PRIMKNUTY_K_PRECHODU_PRO_CHODCE: 511, // V8b - Přejezd pro cyklisty přimknutý k přechodu pro chodce
    V8C_SDRUZENY_PRECHOD_PRO_CHODCE_A_PREJEZD_PRO_CYKLISTY: 512, // V8c - Sdružený přechod pro chodce a přejezd pro cyklisty
    V10A_STANI_PODELNE: 513, // V10a - Stání podélné
    V10B_STANI_KOLME: 514, // V10b - Stání kolmé
    V10C_STANI_SIKME: 515, // V10c - Stání šikmé
    V10D_PARKOVACI_PRUH: 516, // V10d - Parkovací pruh
    V10E_VYHRAZENE_PARKOVISTE: 517, // V10e - Vyhrazené parkoviště
    V10F_VYHRAZENE_PARKOVISTE_PRO_VOZIDLO_PREPRAV_OSOBU_POSTIZENOU: 518, // V10f - Vyhrazené parkoviště pro vozidlo přeprav. osobu postiženou
    V10G_OMEZENE_STANI: 519, // V10g - Omezené stání
    V11A_ZASTAVKA_AUTOBUSU_NEBO_TROLEJBUSU: 520, // V11a - Zastávka autobusu nebo trolejbusu
    V11B_ZASTAVKA_TRAMVAJE: 521, // V11b - Zastávka tramvaje
    V12A_ZLUTA_KLIKATA_CARA: 522, // V12a - Žlutá klikatá čára
    V12B_ZLUTE_ZKRIZENE_CARY: 523, // V12b - Žluté zkřížené čáry
    V12C_ZAKAZ_ZASTAVENI: 524, // V12c - Zákaz zastavení
    V12D_ZAKAZ_STANI: 525, // V12d - Zákaz stání
    V12E_BILA_KLIKATA_CARA: 526, // V12e - Bílá klikatá čára
    V13_SIKME_ROVNOBEZNE_CARY: 527, // V13 - Šikmé rovnoběžné čáry
    V18_OPTICKA_PSYCHOLOGICKA_BRZDA: 528, // V18 - Optická psychologická brzda
    V19_PROSTOR_PRO_CYKLISTY: 529, // V19 - Prostor pro cyklisty
    PROTISKLUZOVA_PLOCHA: 531, // protiskluzová plocha
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypObjektuZeleznicniDopravy */
export const CKZTypObjektuZeleznicniDopravy = {
    IZOLOVANY_STYK: 501, // izolovaný styk
    STYK_SVAR_U_VYHYBEK_A_KRIZOVATEK: 502, // styk, svar u výhybek a křižovatek
    ZACATEK_JAZYKA_VYHYBKY: 503, // začátek jazyka výhybky
    MECHANICKE_NAVESTIDLO: 504, // mechanické návestidlo
    INFORMACNI_TABULE_NEELEKTRICKA: 506, // informační tabule neelektrická
    NAMEZNIK: 507, // námezník
    PRESTAVNIK_ZAVORNIK: 508, // přestavník, závorník
    STANICNIK: 510, // staničník
    SVETELNA_SIGNALIZACE_VOLNE_STOJICI: 511, // světelná signalizace volně stojící
    SVETELNA_SIGNALIZACE_NA_OBJEKTU: 512, // světelná signalizace na objektu
    SVETELNE_NAVESTIDLO_PREDZVEST: 513, // světelné návěstidlo, předzvěst
    ZACATEK_A_KONEC_ELEKTRIFIKOVANEHO_USEKU: 518, // začátek a konec elektrifikovaného úseku
    ZARAZEDLO: 519, // zarážedlo
    BOD_KRIZOVATKY: 520, // bod křižovatky
    BALIZA: 521, // balíza
    SNIMAC_POCITACE_NAPRAV: 522, // snímač počítače náprav
    VYKOLEJKA: 523, // výkolejka
    BOD_ZMENY_KRIVOSTI: 524, // bod změny křivosti
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypObjektuTramvajoveDopravy */
export const CKZTypObjektuTramvajoveDopravy = {
    BAHNIK_KOLEJOVA_SACHTA: 501, // bahník (kolejová šachta)
    ELEKTROMAGNETICKY_PRESTAVNIK: 502, // elektromagnetický přestavník
    ELEKTRONICKY_INFORMACNI_PANEL: 503, // elektronický informační panel
    IRCOM: 504, // ircom
    KOLEJOVA_DILATACE: 505, // kolejová dilatace
    KOLEJOVE_ODVODNENI: 506, // kolejové odvodnění
    KOLEJOVY_KONTAKT: 507, // kolejový kontakt
    KOTVA_ZAVES_RUZICE: 508, // kotva, závěs, růžice
    MAZADLO_KOLEJNIC: 509, // mazadlo kolejnic
    NAMEZNIK: 510, // námezník
    OVLADACI_SKRIN_EOV: 511, // ovládací skříň EOV
    PRIDRZNICE: 512, // přídržnice
    SKRIN_EPD: 513, // skříň EPD
    STAVECI_SKRIN: 514, // stavěcí skříň
    TROLEJOVY_KONTAKT: 515, // trolejový kontakt
    UKOLEJNENI: 516, // ukolejnění
    VYHYBKA: 517, // výhybka
    VYSTRAZNA_DESKA: 518, // výstražná deska
    VYTAPENI_VYHYBKY: 519, // vytápění výhybky
    ZARAZEDLO: 520, // zarážedlo
    ZARAZKA: 521, // zarážka
    ZASOBNIK_PISKU: 522, // zásobník písku
    ZEMNIC: 523, // zemnič
    RFID_TAG: 524, // RFID tag
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZOmezeniParkoviste */
export const CKZOmezeniParkoviste = {
    BUS: 500, // BUS
    INVALIDA: 501, // invalida
    K_OBJEKTU: 502, // k objektu
    NEROZLISENE: 503, // nerozlišené
    POPLATEK: 504, // poplatek
    SPZ: 505, // SPZ
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZOstatniMapoveZnacky */
export const CKZOstatniMapoveZnacky = {
    BUDOVA_DREVENA: 500, // budova dřevěná
    HLOUBKA_ULOZENI: 501, // hloubka uložení
    KOSTEL: 502, // kostel
    MOCAL: 503, // močál
    MOCAL_PRUCHODNY: 504, // močál - průchodný
    MOCAL_NEPRUCHODNY: 505, // močál - neprůchodný
    PASTVINA: 506, // pastvina
    RAKOSI: 507, // rákosí
    SEVERKA_MALA: 508, // severka - malá
    SEVERKA_VELKA: 509, // severka - velká
    SKALY: 510, // skály
    SMER_VODNIHO_TOKU: 511, // směr vodního toku
    SYNAGOGA: 512, // synagoga
    SIPKA_K_PARCELNIMU_CISLU: 513, // šipka k parcelnímu číslu
    VYSKA_VODOROVNE_ROVINY: 514, // výška vodorovné roviny
    VYSKA_STUPNE: 515, // výška stupně
    VLASTNICKA_HRANICE_LOMOVY_BOD: 516, // vlastnická hranice - lomový bod
    VSTUP_DO_JESKYNE: 517, // vstup do jeskyně
    VSTUP_OHRANICENI_VSTUPU: 518, // vstup - ohraničení vstupu
    ZBORENISTE: 519, // zbořeniště
    JINY: 902, // jiný
};
/** CKZRozsirenyTypObjektuElektronickeKomunikace */
export const CKZRozsirenyTypObjektuElektronickeKomunikace = {
    BTS_BUNKOVA_STANICE: 500, // BTS (buňková stanice)
    RADIOVA_STANICE_BEZ_ROLISENI: 501, // radiová stanice bez rolišení
    VEREJNY_ROZHLAS_BEZDRATOVY: 502, // veřejný rozhlas - bezdrátový
    VYSILAC: 503, // vysílač
    PROPOJOVACI_OBJEKT: 504, // propojovací objekt
    KABELOVA_BUNKA: 505, // kabelová buňka
    KABELOVA_REZERVA: 506, // kabelová rezerva
    KABELOVA_SKRIN_NA_SLOUPU: 507, // kabelová skříň na sloupu
    KABELOVA_SKRIN_NA_ZDI: 508, // kabelová skříň na zdi
    KABELOVA_SKRIN_SAMOSTATNA: 509, // kabelová skříň samostatná
    KABELOVY_DOPLNEK: 510, // kabelový doplněk
    KABELOVY_KONCOVY_KRYT: 511, // kabelový koncový kryt
    MAGNET: 512, // magnet
    MARKER: 513, // marker
    OPTICKA_SITOVA_JEDNOTKA: 514, // optická síťová jednotka
    OPTOREZERVA: 515, // optorezerva
    PRECHOD_NADZEMNI_PODZEMNI: 516, // přechod nadzemní - podzemní
    PREPOJOVACI_BOD: 517, // přepojovací bod
    PUPINACNI_SKRIN: 518, // pupinační skříň
    RETRANSLACNI_STANICE: 519, // retranslační stanice
    SPOJKA_NA_METALICKEM_KABELU: 520, // spojka na metalickém kabelu
    SPOJKA_NA_OPTICKEM_KABELU: 521, // spojka na optickém kabelu
    SPOJKA_ROZDELOVACI_NA_METALICKEM_KABELU: 522, // spojka rozdělovací na metalickém kabelu
    SPOJKA_ROZDELOVACI_NA_OPTICKEM_KABELU: 523, // spojka rozdělovací na optickém kabelu
    TRUBKOVA_SPOJKA: 524, // trubková spojka
    TRUBKOVY_KONCOVY_KRYT: 525, // trubkový koncový kryt
    UCASTNICKY_ROZVADEC: 526, // účastnický rozvaděč
    SPECIFICKY_BOD: 527, // specifický bod
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZRozsirenyTypObjektuElektrickehoVedeni */
export const CKZRozsirenyTypObjektuElektrickehoVedeni = {
    BEZPECNOSTNI_TABULKA: 500, // bezpečnostní tabulka
    BEZPECNOSTNI_ZAVES: 501, // bezpečnostní závěs
    ELEKTROMERNY_ROZVADEC: 502, // elektroměrný rozvaděč
    KABELOVA_KONCOVKA: 503, // kabelová koncovka
    KABELOVA_SKRIN_NA_SLOUPU: 504, // kabelová skříň na sloupu
    KABELOVA_SKRIN_NA_ZDI: 505, // kabelová skříň na zdi
    KABELOVA_SKRIN_SAMOSTATNA: 506, // kabelová skříň samostatná
    KABELOVA_SPOJKA: 507, // kabelová spojka
    KABELOVA_T_SPOJKA: 508, // kabelová T-spojka
    KABELOVA_REZERVA: 509, // kabelová rezerva
    KOTVA: 510, // kotva
    PRECHOD_NADZEMNI_PODZEMNI: 511, // přechod nadzemní/podzemní
    PRIPOJKOVA_SKRIN: 512, // přípojková skříň
    PUPINACNI_SKRIN: 513, // pupinační skříň
    ROZPOJOVACI_SKRIN: 514, // rozpojovací skříň
    ROZVADEC_NN: 515, // rozvaděč NN
    DELICI_BOD_VEREJNEHO_OSVETLENI: 516, // dělící bod veřejného osvětlení
    SVODIC_PREPETI: 517, // svodič přepětí
    TRAFOSTANICE_SLOUPOVA: 518, // trafostanice sloupová
    TRAFOSTANICE_VNITRNI: 519, // trafostanice vnitřní
    USEKOVY_ODPOJOVAC: 520, // úsekový odpojovač
    UZEMNENI: 521, // uzemnění
    VZPERA: 522, // vzpěra
    ZAPINACI_BOD_VEREJNEHO_OSVETLENI: 523, // zapínací bod veřejného osvětlení
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZRozsirenyTypObjektuStokoveSite */
export const CKZRozsirenyTypObjektuStokoveSite = {
    JIMKA_ZUMPA: 500, // jímka, žumpa
    KANALIZACNI_NADRZ: 501, // kanalizační nádrž
    LAPAK_SPLAVENIN: 502, // lapák splavenin
    ODDELOVAC_DESTE: 503, // oddělovač deště
    ODVODNOVAC: 504, // odvodňovač
    REDUKCE_DIMENZE_MIMO_SACHTU: 505, // redukce dimenze mimo šachtu
    SKLUZ: 506, // skluz
    SPADISTE: 507, // spadiště
    SACHTA_NA_TLAKOVE_KANALIZACI: 508, // šachta na tlakové kanalizaci
    SOUPE_TLAKOVE_KANALIZACI: 509, // šoupě tlakové kanalizaci
    UZAVER_KANALIZACNI_SITE: 510, // uzávěr kanalizační sítě
    VETRACI_SACHTA: 511, // větrací šachta
    VPUST_KANALIZACNI_SITE: 512, // vpusť kanalizační sítě
    VZDUSNIKOVA_SACHTA: 513, // vzdušníková šachta
    ZMENA_MATERIALU_MIMO_SACHTU: 514, // změna materiálu mimo šachtu
    ZMENA_PRUMERU_MIMO_SACHTU: 515, // změna průměru mimo šachtu
    ZPETNA_KLAPKA: 516, // zpětná klapka
    LAPOL_ODLUCOVAC_TUKU: 517, // lapol - odlučovač tuků
    DRENAZNI_SACHTA: 518, // drenážní šachta
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZRozsirenyTypObjektuKolektoru */
export const CKZRozsirenyTypObjektuKolektoru = {
    KABELOVA_LAVKA: 500, // kabelová lávka
    KOMORA: 501, // komora
    OSTATNI_VYSTROJ: 502, // ostatní výstroj
    POZARNI_UZAVER: 503, // požární uzávěr
    VENTIL: 504, // ventil
    VSTUP: 505, // vstup
    VZDUSNIKOVA_SACHTA: 506, // vzdušníková šachta
    ZEBRIK: 507, // žebřík
    PASAVANT: 508, // pasavant
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZRozsirenyTypObjektuPlynovodu */
export const CKZRozsirenyTypObjektuPlynovodu = {
    ARMATURNI_SACHTA: 500, // armaturní šachta
    BALONOVACI_HRDLO: 501, // balonovací hrdlo
    CICHACKA: 502, // čichačka
    HLAVNI_UZAVER_PLYNU: 503, // hlavní uzávěr plynu
    IZOLACNI_SPOJ: 504, // izolační spoj
    KAPAK_ODVODNOVAC: 505, // kapák (odvodňovač)
    KOMPENZATOR: 506, // kompenzátor
    KONTROLNI_MERICI_VYVOD: 507, // kontrolní měřící vývod
    KRIZENI: 508, // křížení
    MERICI_SONDA_STANICE: 509, // měřící sonda (stanice)
    ODBERNE_MISTO: 510, // odběrné místo
    ODFUK: 511, // odfuk
    ODVZDUSNUJICI_ARMATURA: 512, // odvzdušňující armatura
    REDUKCE: 513, // redukce
    SITOVY_REGULATOR: 514, // síťový regulátor
    SPAD_PLYNOVODU: 515, // spád plynovodu
    SPOJKA: 516, // spojka
    SVAR: 517, // svár
    UKONCENI_ZASLEPKOU: 518, // ukončení záslepkou
    UZAVER: 519, // uzávěr
    VYVOD_SIGNALIZACNIHO_VODICE: 520, // vývod signalizačního vodiče
    VZDUSNIK: 521, // vzdušník
    ZMENA_MATERIALU: 522, // změna materiálu
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZRozsirenyTypObjektuProduktovodu */
export const CKZRozsirenyTypObjektuProduktovodu = {
    KATODOVA_OCHRANA: 500, // katodová ochrana
    RIDICI_SYSTEM: 501, // řídicí systém
    TELEMETRICKA_STANICE: 502, // telemetrická stanice
    TRVALE_VYSTROJENY_VRT_JIMANI_BIOPLYNU: 503, // trvale vystrojený vrt - jímání bioplynu
    UZAVER: 504, // uzávěr
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZRozsirenyTypObjektuTeplovodu */
export const CKZRozsirenyTypObjektuTeplovodu = {
    ETAZ_KOLMA: 500, // etáž kolmá
    ETAZ_SIKMA: 501, // etáž šikmá
    KLAPKA: 502, // klapka
    KOHOUT: 503, // kohout
    KOMPENZATOR_UCPAVKOVY: 504, // kompenzátor ucpávkový
    KOMPENZATOR_VLNOVCOVY: 505, // kompenzátor vlnovcový
    KONEC_POTRUBI: 506, // konec potrubí
    MERIDLO: 507, // měřidlo
    ODBERNE_MISTO: 508, // odběrné místo
    ODBOCKA_KOLMA: 509, // odbočka kolmá
    ODBOCKA_PARALELNI: 510, // odbočka paralelní
    ODVADEC_KONDENZATU: 511, // odvaděč kondenzátu
    ODVETRANI_TEPLOVODU: 512, // odvětrání teplovodu
    ODVZDUSNENI: 513, // odvzdušnění
    PEVNY_BOD: 514, // pevný bod
    PLYNOTESNY_UZAVER: 515, // plynotěsný uzávěr
    PLYNOVA_KOTELNA: 516, // plynová kotelna
    PREDAVACI_STANICE: 517, // předávací stanice
    PRIRUBA: 518, // příruba
    REDUKCE: 519, // redukce
    REGULACNI_STANICE: 520, // regulační stanice
    SPOJKA: 521, // spojka
    SVAR: 522, // svár
    ULOZENI_POTRUBI_KLUZNE: 523, // uložení potrubí kluzné
    ULOZENI_POTRUBI_OSOVE: 524, // uložení potrubí osové
    VENTIL: 525, // ventil
    VYMENIKOVA_STANICE: 526, // výměníková stanice
    VYTOPNA: 527, // výtopna
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZRozsirenyTypObjektuVodovodu */
export const CKZRozsirenyTypObjektuVodovodu = {
    ATS_VODOVODNI_SITE: 500, // ATS vodovodní sítě
    KALNIK: 503, // kalník
    KOMPENZATOR: 504, // kompenzátor
    ODBERNE_MISTO: 505, // odběrné místo
    PRUTOKOMER: 506, // průtokoměr
    PRERUSOVACI_KOMORA: 507, // přerušovací komora
    REDUKCE_ZMENA_PRUMERU: 508, // redukce (změna průměru)
    SOUPE_VODOVODNI_SITE: 509, // šoupě vodovodní sítě
    TLAKOMER: 510, // tlakoměr
    UZAVER: 511, // uzávěr
    VODOMER: 512, // vodoměr
    VODOMERNA_SACHTA: 513, // vodoměrná šachta
    VYUSTNI_OBJEKT_VODOVODNI_SITE: 514, // výústní objekt vodovodní sítě
    VZDUSNIKOVA_SACHTA: 515, // vzdušníková šachta
    ZMENA_MATERIALU: 516, // změna materiálu
    VODOVODNI_VYPUST: 517, // vodovodní výpust
    HLAVNI_LOMOVY_BOD_NA_VODOVODNIM_RADU: 518, // hlavní lomový bod na vodovodním řadu
    ZAVLAZOVACI_TRISKA_POSTRIKOVAC: 519, // zavlažovací triska, postřikovač
    CERPADLO: 520, // čerpadlo
    OBJEKT_ZASNEZENI: 521, // objekt zasněžení
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZSklonitost */
export const CKZSklonitost = {
    DO_1_5: 500, // do 1:5
    NAD_1_2: 501, // nad 1:2
    OD_1_5_DO_1_2: 502, // od 1:5 do 1:2
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZStabilizaceBodu */
export const CKZStabilizaceBodu = {
    BEZ_STABILIZACE: 500, // bez stabilizace
    DREVENY_KOLIK: 501, // dřevěný kolík
    GEOBRCKO: 502, // geobrčko
    HLOUBKOVA: 503, // hloubková
    HREB: 504, // hřeb
    KAMEN: 505, // kámen
    MEZNIK: 506, // mezník
    PILIR: 507, // pilíř
    ROXORA: 508, // roxora
    STABILIZACE_DO_STAV_KONSTRUKCE_CEPOVA_ZNACKA: 509, // stabilizace do stáv. konstrukce - čepová značka
    STABILIZACE_DO_STAV_KONSTRUKCE_HREBOVA_ZNACKA: 510, // stabilizace do stáv. konstrukce - hřebová značka
    STABILIZACE_DO_STAV_KONSTRUKCE_STITEK: 511, // stabilizace do stáv. konstrukce - štítek
    STABILIZACE_DO_STAV_KONSTRUKCE_TERC: 512, // stabilizace do stáv. konstrukce - terč
    TEZKA: 513, // těžká
    NEZJISTENO: 900, // nezjištěno
    JINY: 902, // jiný
};
/** CKZStavHrobovehoMista */
export const CKZStavHrobovehoMista = {
    DOBRY: 500, // dobrý
    HAVARIJNI: 501, // havarijní
    SPATNY: 502, // špatný
    VYBORNY: 503, // výborný
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZStavStromu */
export const CKZStavStromu = {
    DOBRY: 500, // dobrý
    MRTVY: 501, // mrtvý
    NEBEZPECNY: 502, // nebezpečný
    SPATNY: 503, // špatný
    VYBORNY: 504, // výborný
    ZBYTKOVY: 505, // zbytkový
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypBodovehoPrvkunaBudove */
export const CKZTypBodovehoPrvkunaBudove = {
    ANTENA_SATELIT: 500, // anténa, satelit
    GAJGR: 501, // gajgr
    HROMOSVOD: 502, // hromosvod
    KOMIN: 503, // komín
    NEJVYSSI_BOD_STAVBY: 504, // nejvyšší bod stavby
    VYVOD_VODOVODU: 505, // vývod vodovodu
    ZAUSTENI_KANALIZACE: 506, // zaústění kanalizace
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypBranky */
export const CKZTypBranky = {
    BRANA: 500, // brána
    BRANKA: 501, // branka
    TEXASKA_BRANA: 502, // texaská brána
    ZAVORA: 503, // závora
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypDopravnihoZarizeniBod */
export const CKZTypDopravnihoZarizeniBod = {
    CLONA_PROTI_OSLNENI: 500, // clona proti oslnění
    ODRAZKA_DOPRAVNI_KNOFLIK: 501, // odrazka, dopravní knoflík
    DOPRAVNI_ZNACKA_BEZ_ROZLISENI_DRUHU: 502, // dopravní značka - bez rozlišení druhu
    DOPRAVNI_ZRCADLO: 503, // dopravní zrcadlo
    NASTAVEC_NA_SVODIDLA: 504, // nástavec na svodidla
    PARKOVACI_AUTOMAT: 505, // parkovací automat
    SMEROVA_VODICI_ZVYRAZNUJICI_DESKA: 506, // směrová, vodící, zvýrazňující deska
    SMEROVY_SLOUPEK_BALISETA: 507, // směrový sloupek, baliseta
    VYDEJNI_AUTOMAT_JIZDENEK_MHD: 508, // výdejní automat jízdenek MHD
    VYSTRAZNY_MAJACEK: 509, // výstražný majáček
    VYSTRAZNIK_PZS: 510, // výstražník PZS
    ZAVORA: 511, // závora
    ZPOMALOVACI_PRICNY_PRAH_NESTAVEBNI_BOD: 512, // zpomalovací (příčný) práh nestavební - bod
    ANTIPARKOVACI_SLOUPEK: 513, // antiparkovací sloupek
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypDopravnihoZarizeniLinie */
export const CKZTypDopravnihoZarizeniLinie = {
    CLONA_PROTI_OSLNENI: 500, // clona proti oslnění
    HRANA_NASTUPISTE: 501, // hrana nástupiště
    LINIOVE_RIZENI_DOPRAVY: 502, // liniové řízení dopravy
    VODICI_OBRUBNIK: 503, // vodící obrubník
    VODICI_PRAH: 504, // vodící práh
    VODICI_STENA: 505, // vodící stěna
    ZPOMALOVACI_PRICNY_PRAH_NESTAVEBNI_LINIE: 506, // zpomalovací (příčný) práh nestavební - linie
    ZABRANA: 507, // zábrana
    ABSORBER: 508, // absorbér
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypDulnihoObjektu */
export const CKZTypDulnihoObjektu = {
    HLINISTE_PISKOVISTE_TEZBA_ZEMINY: 500, // hliniště, pískoviště, těžba zeminy
    JAMA: 501, // jáma
    LOM_POVRCHOVY_DUL: 502, // lom, povrchový důl
    POVRCHOVA_TEZEBNI_CINNOST_BEZ_ROZLISENI: 503, // povrchová těžební činnost bez rozlišení
    PRUZKUMNA_SACHTICE: 504, // průzkumná šachtice
    RASELINISTE_SLATINA: 505, // rašeliniště, slatina
    SONDA_KOPANA: 506, // sonda kopaná
    SONDA_VRTANA: 507, // sonda vrtaná
    SONDOVA_RYHA: 508, // sondová rýha
    TRVALE_VYSTROJENY_VRT: 509, // trvale vystrojený vrt
    USTI_STOLY_NEBO_UKLONNE_JAMY: 510, // ústí štoly nebo úklonné jámy
    JINE_DULNI_DILO: 511, // jiné důlní dílo
    ULOZNE_MISTO_TEZEBNIHO_ODPADU: 512, // úložné místo těžebního odpadu
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypGeodetickehoBodu */
export const CKZTypGeodetickehoBodu = {
    BOD_POLOHOVEHO_BODOVEHO_POLE_TIHOVY_BOD: 500, // bod polohového bodového pole, tíhový bod
    BOD_MIKROSITE: 501, // bod mikrosítě
    BOD_PBPP: 502, // bod PBPP
    HLAVNI_BOD: 503, // hlavní bod
    HRANICNI_ZNAK_MEZNIK: 504, // hraniční znak (mezník)
    KONSTRUKCNI_BOD: 505, // konstrukční bod
    KONTROLNI_BOD: 506, // kontrolní bod
    MERICKY_BOD: 507, // měřický bod
    NIVELACNI_BOD: 508, // nivelační bod
    VLICOVACI_BOD: 509, // vlícovací bod
    VYTYCOVACI_PROFILOVY_BOD: 510, // vytyčovací, profilový bod
    JINY: 902, // jiný
};
/** CKZTypHraniceKatastru */
export const CKZTypHraniceKatastru = {
    BEPJ: 500, // BEPJ
    DOCASNY_ZABOR: 501, // dočasný zábor
    NAVRH_HRANICE: 502, // návrh hranice
    NAVRH_VB: 503, // návrh VB
    PUPLF: 504, // PUPLF
    RUSENA_HRANICE: 505, // rušená hranice
    TRVALY_ZABOR: 506, // trvalý zábor
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypHraniceDSP */
export const CKZTypHraniceDSP = {
    HRANICE_DOPRAVNI_STAVBY: 500, // hranice dopravní stavby
    HRANICE_OBJEKTU_OBRUBNIK_VYSKOVE_ODLISNY: 501, // hranice objektu - obrubník (výškově odlišný)
    HRANICE_OBJEKTU_NEROZLISENA: 502, // hranice objektu nerozlišená
    HRANICE_OBJEKTU_NESTAVEBNI_ZNACENI: 503, // hranice objektu nestavební (značení)
    HRANICE_OBJEKTU_STAVEBNI_ZMENA_POVRCHU: 504, // hranice objektu stavební ( změna povrchů)
    VNITRNI_CLENENI_DOPRAVNI_PLOCHY: 505, // vnitřní členění dopravní plochy
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypHranyDs */
export const CKZTypHranyDs = {
    PRIKOP: 500, // příkop
    ZAREZ: 501, // zářez
    NASYP: 502, // násyp
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypHrobovehoMista */
export const CKZTypHrobovehoMista = {
    JEDNOHROB: 500, // jednohrob
    DVOUHROB: 501, // dvouhrob
    URNOVY_HROB: 502, // urnový hrob
    KOLUMBARIUM: 503, // kolumbárium
    EPITAFNI_DESKA: 504, // epitafní deska
    HROBKA: 505, // hrobka
    VSYPOVA_LOUCKA: 506, // vsypová loučka
    ROZPTYLOVA_LOUCKA: 507, // rozptylová loučka
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypITS */
export const CKZTypITS = {
    AUTOMATICKY_SCITAC_DOPRAVY: 500, // automatický sčítač dopravy
    DALNICNI_INFORMACNI_SYSTEM: 501, // dálniční informační systém
    INFORMACNI_PORTAL: 502, // informační portál
    KAMERA: 503, // kamera
    MERENI_RYCHLOSTI_SAMOSTATNE: 504, // měření rychlosti - samostatné
    ZARIZENI_PRO_DYNAMICKE_VAZENI_VOZIDEL: 505, // zařízení pro dynamické vážení vozidel
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypKatastralniHranice */
export const CKZTypKatastralniHranice = {
    PARCELNI_HRANICE: 500, // parcelní hranice
    HRANICE_KATASTRALNI: 501, // hranice katastrální
    HRANICE_KRAJSKA: 502, // hranice krajská
    HRANICE_OBECNI: 503, // hranice obecní
    HRANICE_OKRESNI: 504, // hranice okresní
    HRANICE_STATNI: 505, // hranice státní
    HRANICE_ZJEDNODUSENE_EVIDENCE: 506, // hranice zjednodušené evidence
    VNITRNI_KRESBA: 507, // vnitřní kresba
    NEZJISTENO: 900, // nezjištěno
};
/** CKZTypKolektoru */
export const CKZTypKolektoru = {
    PATERNI_KOLEKTOR: 500, // páteřní kolektor
    DISTRIBUCNI_KOLEKTOR: 501, // distribuční kolektor
    JEDNOSYSTEMOVY_KOLEKTOR: 502, // jednosystémový kolektor
    VICESYSTEMOVY_KOLEKTOR: 503, // vícesystémový kolektor
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypKynety */
export const CKZTypKynety = {
    VYKOP: 500, // výkop
    PODVRT: 501, // podvrt
    PREKOP: 502, // překop
    OSA_NADZEMNIHO_VEDENI: 503, // osa nadzemního vedení
    SHYBKA: 504, // shybka
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTyplesa */
export const CKZTyplesa = {
    HOSPODARSKY_LES_HOSPODARSKY_CELEK: 500, // hospodářský les - hospodářský celek
    HOSPODARSKY_LES_ODDELENI: 501, // hospodářský les - oddělení
    HOSPODARSKY_LES_DILEC: 502, // hospodářský les - dílec
    HOSPODARSKY_LES_POROSTNI_SKUPINA: 503, // hospodářský les - porostní skupina
    OCHRANNY_LES: 504, // ochranný les
    LES_ZVLASTNIHO_URCENI: 505, // les zvláštního určení
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
};
/** CKZTypLinieCleneniBudovAStaveb */
export const CKZTypLinieCleneniBudovAStaveb = {
    DVERE: 500, // dveře
    HRANA: 501, // hrana
    KLENBA: 502, // klenba
    KROV: 503, // krov
    OKAP: 504, // okap
    OKNO: 505, // okno
    PODLAHA: 506, // podlaha
    PREKLAD: 507, // překlad
    RIMSA_ATIKA: 508, // římsa, atika
    SCHOD: 509, // schod
    SPARA: 510, // spára
    STROP: 511, // strop
    STRECHA_HREBEN: 512, // střecha - hřeben
    STRECHA_PRESAH: 513, // střecha - přesah
    STUPEN: 514, // stupeň
    SVISLA_HRANA: 515, // svislá hrana
    TERASA_BALKON: 516, // terasa, balkon
    VODOROVNA_HRANA: 517, // vodorovná hrana
    VSTUP_DO_BUDOVY: 518, // vstup do budovy
    HRANA_ZUMPY_SEPTIKU: 519, // hrana žumpy, septiku
    VYTAH: 520, // výtah
    ZASTRESENI: 521, // zastřešení
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypLinieCleneniDopravniPlochy */
export const CKZTypLinieCleneniDopravniPlochy = {
    DILATACE: 500, // dilatace
    MOST_LOZISKO: 502, // most - ložisko
    MOST_OPERA: 503, // most - opěra
    MOST_PILIR: 504, // most - pilíř
    MOST_PODPERA: 505, // most - podpěra
    MOST_RIMSA: 506, // most - římsa
    MOST_SPODNI_STAVBA: 507, // most - spodní stavba
    MOST_ZAVER: 508, // most - závěr
    MOSTOVKA: 509, // mostovka
    OBRUBNIK_HRANENY: 510, // obrubník - hraněný
    OBRUBNIK_KASSELSKY: 511, // obrubník - kasselský
    OBRUBNIK_NAJEZDOVY: 512, // obrubník - nájezdový
    ROZHRANI: 514, // rozhraní
    SVISLA_HRANA: 515, // svislá hrana
    HRANA_PROTIHLUKOVE_STENY_CLONY_OSTATNI_KRESBA: 516, // hrana protihlukové stěny, clony - ostatní kresba
    PROPUSTEK_OSTATNI_KRESBA: 517, // propustek - ostatní kresba
    VYKLENEK_V_TUNELU_HRANA: 518, // výklenek v tunelu - hrana
    ZELEZNICNI_PREJEZD_OSTATNI_KRESBA: 519, // železniční přejezd - ostatní kresba
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypLiniovehoPrvkuZelene */
export const CKZTypLiniovehoPrvkuZelene = {
    ALEJ_STROMORADI: 500, // alej, stromořadí
    ZIVY_PLOT: 502, // živý plot
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypLiniovehoVDZ */
export const CKZTypLiniovehoVDZ = {
    OSTATNI_VODOROVNE_DOPRAVNI_ZNACKY: 500, // ostatní vodorovné dopravní značky
    OZNACENI_STANI_A_PARKOVIST: 501, // označení stání a parkovišť
    OZNACENI_ZAKAZU_ZASTAVENI_A_STANI: 502, // označení zákazů zastavení a stání
    OZNACENI_ZASTAVEK: 503, // označení zastávek
    PODELNE_CARY: 504, // podélné čáry
    PRICNE_CARY: 505, // příčné čáry
    PODELNY_DELICI_PRAH_ZVYSENY: 506, // podélný dělicí práh (zvýšený)
    NEZJISTENO: 900, // nezjištěno
    JINY: 902, // jiný
};
/** CKZTypMobiliare */
export const CKZTypMobiliare = {
    HERNI_PRVEK_HOUPACKA: 500, // herní prvek - houpačka
    HERNI_PRVEK_HRISTE: 501, // herní prvek - hřiště
    HERNI_PRVEK_KOLOTOC: 502, // herní prvek - kolotoč
    HERNI_PRVEK_NA_PERU: 503, // herní prvek - na péru
    HERNI_PRVEK_PISKOVISTE: 504, // herní prvek - pískoviště
    HERNI_PRVEK_PROLEZACKA: 505, // herní prvek - prolézačka
    HERNI_PRVEK_SKLUZAVKA: 506, // herní prvek - skluzavka
    INFO_PANEL_TABULE: 507, // info panel, tabule
    KONTEJNER: 508, // kontejner
    KOS_ODPADKOVY: 509, // koš odpadkový
    KOS_PRO_PSY: 510, // koš pro psy
    KLEPAC: 511, // klepač
    KVETINAC_ZARDINIERA: 512, // květináč, žardiniéra
    LAVICKA: 513, // lavička
    PYTLIKY_PRO_PSY: 514, // pytlíky pro psy
    REKLAMA: 515, // reklama
    SMEROVKA: 516, // směrovka
    SPORTOVNI_PRVEK: 517, // sportovní prvek
    STOJAN_NA_KOLA: 518, // stojan na kola
    STUL: 519, // stůl
    TRIDENY_ODPAD: 520, // tříděný odpad
    VYKLADNI_SKRIN_PROPAGACNI_OBJEKT: 521, // výkladní skříň, propagační objekt
    HERNI_PRVEK_NEURCENO: 522, // herní prvek - neurčeno
    ZASUVKA_USB: 523, // zásuvka USB
    ZASUVKA_220: 524, // zásuvka 220
    NEZJISTENO: 900, // nezjištěno
    JINY: 902, // jiný
};
/** CKZTypNazvu */
export const CKZTypNazvu = {
    CISLO_EVIDENCNI: 500, // číslo evidenční
    CISLO_ORIENTACNI: 501, // číslo orientační
    CISLO_POPISNE: 502, // číslo popisné
    CISLO_POPISNE_ORIENTACNI: 503, // číslo popisné/orientační
    MESTO_OBEC_CTVRT: 504, // město, obec, čtvrť
    MISTNI_NAZEV: 505, // místní název
    NAZEV_KATASTRALNIHO_UZEMI: 506, // název katastrálního území
    NAZEV_OBJEKTU: 507, // název objektu
    NAZEV_PRIRODNIHO_OBJEKTU: 508, // název přírodního objektu
    NAZEV_ULICE_SILNICE: 509, // název ulice, silnice
    NAZEV_VODNI_PLOCHY_TOKU: 510, // název vodní plochy, toku
    NAZEV_VRCHOLU: 511, // název vrcholu
    OBLAST: 512, // oblast
    OSADA: 513, // osada
    PARCELNI_CISLO_POZEMKOVE: 514, // parcelní číslo - pozemkové
    PARCELNI_CISLO_STAVEBNI: 515, // parcelní číslo - stavební
    PARCELNI_CISLO_ZJEDNODUSENA_EVIDENCE: 516, // parcelní číslo - zjednodušená evidence
    POMISTNI_NAZEV: 517, // pomístní název
    POPIS_OBJEKTU: 518, // popis objektu
    POPIS_PLOCHY: 519, // popis plochy
    JINY: 902, // jiný
};
/** CKZTypNeviditelneHranice */
export const CKZTypNeviditelneHranice = {
    BEZPECNOSTNI_PASMO: 500, // bezpečnostní pásmo
    DOBYVACI_PROSTOR: 501, // dobývací prostor
    EVROPSKY_VYZNAMNA_LOKALITA: 502, // evropsky významná lokalita
    HRANICE_UDRZBY: 503, // hranice údržby
    HRANICE_VODNIHO_ZDROJE: 504, // hranice vodního zdroje
    HRANICE_ZASTAVENEHO_UZEMI: 505, // hranice zastavěného území
    CHRANENA_KRAJINNA_OBLAST: 506, // chráněná krajinná oblast
    NARODNI_PARK: 507, // národní park
    NARODNI_PRIRODNI_PAMATKA: 508, // národní přírodní památka
    NEMOVITA_KULTURNI_PAMATKA: 509, // nemovitá kulturní památka
    NEMOVITA_NARODNI_KULTURNI_PAMATKA: 510, // nemovitá národní kulturní památka
    OCHRANNE_PASMO_I_STUPNE_LECIVYCH_ZDROJ: 511, // ochranné pásmo I. stupně léčivých zdroj
    OCHRANNE_PASMO_II_STUPNE_LECIVYCH_ZDROJU: 512, // ochranné pásmo II. stupně léčivých zdrojů
    OCHRANNE_PASMO_LESA: 513, // ochranné pásmo lesa
    PAMATKOVA_REZERVACE: 514, // památková rezervace
    PAMATKOVA_ZONA: 515, // památková zóna
    PASMO_HYGIENICKE_OCHRANY: 516, // pásmo hygienické ochrany
    PLOCHA_MELIORACE_OBVOD: 517, // plocha meliorace (obvod)
    PRIRODNI_PAMATKA: 518, // přírodní památka
    PRIRODNI_REZERVACE: 519, // přírodní rezervace
    PTACI_OBLAST: 520, // ptačí oblast
    ZVLASTE_CHRANENE_UZEMI: 521, // zvláště chráněné území
    NEZJISTENO: 900, // nezjištěno
    JINY: 902, // jiný
};
/** CKZTypObjektuZabezpeceni */
export const CKZTypObjektuZabezpeceni = {
    ALARM: 500, // alarm
    CIDLO: 501, // čidlo
    FOTOPAST: 502, // fotopast
    KAMERA: 503, // kamera
    POZARNI_OCHRANA_S_DIODOVYMI_CLENY: 504, // požární ochrana s diodovými členy
    POZARNI_OCHRANA_S_IZOL_SPOJEM_A_DIODOVYM_CLENEM: 505, // požární ochrana s izol. spojem a diodovým členem
    POZARNI_OCHRANA_S_IZOL_SPOJEM_A_MERICI_SONDOU: 506, // požární ochrana s izol. spojem a měřící sondou
    POZARNI_OCHRANA_S_VLASTNIM_ZARIZENIM: 507, // požární ochrana s vlastním zařízením
    OVLADANI_ZABEZPECOVACIHO_ZARIZENI: 508, // ovládání zabezpečovacího zařízení
    PREPINAC: 509, // přepínač
    SNIMAC: 510, // snímač
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypPlotuVDoprave */
export const CKZTypPlotuVDoprave = {
    BRANKA: 500, // branka
    OPLOCENI_OBJEKTU: 501, // oplocení objektů
    OPLOCENI_PROTI_VNIKNUTI_ZVERE: 502, // oplocení proti vniknutí zvěře
    PACHOVY_OHRADNIK: 503, // pachový ohradník
    SIT: 504, // síť
    TRVALE_ZASNEZNIKY: 505, // trvalé zásněžníky
    ZAJISTENI_SKAL_PLOTEM: 506, // zajištění skal plotem
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypPodrobnehoBoduTI */
export const CKZTypPodrobnehoBoduTI = {
    TI_ELEKTRONICKA_KOMUNIKACE: 502, // TI - elektronická komunikace
    TI_ELEKTRICKA_SIT: 503, // TI - elektrická síť
    TI_KANALIZACE: 504, // TI - kanalizace
    TI_PLYNOVOD: 505, // TI - plynovod
    TI_PRODUKTOVOD: 506, // TI - produktovod
    TI_SDILENA_STAVBA: 507, // TI - sdílená stavba
    TI_TEPLOVOD: 508, // TI - teplovod
    TI_VODOVOD: 509, // TI - vodovod
    TI_ZARIZENI: 510, // TI - zařízení
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypPoznamky */
export const CKZTypPoznamky = {
    OBECNA: 500, // obecná
    KONZULTACE: 501, // konzultace
    PREDAT_JINAM: 502, // předat jinam
    ZMERIT: 503, // změřit
    PREDELAT: 504, // předělat
    UPRESNIT: 505, // upřesnit
    NEPRISTUPNE: 506, // nepřístupné
    NENALEZENO: 507, // nenalezeno
    HOTOVO: 508, // hotovo
    NEMERIT: 509, // neměřit
    REKLAMACE: 510, // reklamace
    JINY: 902, // jiný
};
/** CKZTypPredradniku */
export const CKZTypPredradniku = {
    STANDARDNI: 500, // standardní
    STMIVATELNE_ANALOGOVE: 501, // stmívatelné analogové
    STMIVATELNE_DIGITALNI: 502, // stmívatelné digitální
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypProvozniPlochyPK */
export const CKZTypProvozniPlochyPK = {
    KRAJNICE: 500, // krajnice
    TELESO: 501, // těleso
    ZPOMALOVACI_PRAH_STAVEBNI: 502, // zpomalovací práh stavební
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypRozvoduTeplovodniSite */
export const CKZTypRozvoduTeplovodniSite = {
    PRIVOD: 500, // přívod
    ZPATECKA: 501, // zpátečka
    CIRKULACE: 502, // cirkulace
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypSAS */
export const CKZTypSAS = {
    SEMAFOR: 500, // semafor
    SIGNALIZACE_TRAMVAJOVA: 501, // signalizace tramvajová
    SIGNALIZACE_ZELEZNICNIHO_PREJEZDU: 502, // signalizace železničního přejezdu
    NEZJISTENO: 900, // nezjištěno
    JINY: 902, // jiný
};
/** CKZTypSmeru */
export const CKZTypSmeru = {
    SMER_VODNIHO_TOKU: 500, // směr vodního toku
    SMER_KE_VSTUPU: 501, // směr ke vstupu
    SMER_KOMUNIKACE: 502, // směr komunikace
    SMER_TRATI: 503, // směr trati
    SMER_VEDENI: 504, // směr vedení
    UNIKOVY_VYCHOD: 505, // únikový východ
    JINY: 902, // jiný
};
/** CKZTypStaniceni */
export const CKZTypStaniceni = {
    DEFINICNI: 500, // definiční
    EVIDENCNI: 501, // evidenční
    PROJEKTOVANE: 502, // projektované
    SKUTECNE: 503, // skutečné
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypSvetelnehoZdroje */
export const CKZTypSvetelnehoZdroje = {
    HALOGEN: 500, // halogen
    JEDNOCIP_LED: 501, // jednočip LED
    JEDNOCIP_LED_MULTICIP_LED: 502, // jednočip LED + multičip LED
    LED: 503, // LED
    MULTICIP_LED: 504, // multičip LED
    MULTICIP_LED_SODIKOVA_VYBOJKA: 505, // multičip LED + sodíková výbojka
    RTUTOVA_VYBOJKA: 506, // rtuťová výbojka
    SODIKOVA_VYBOJKA: 507, // sodíková výbojka
    ZARIVKA: 508, // zářivka
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypSvitidla */
export const CKZTypSvitidla = {
    DINGO: 500, // dingo
    HRUSKA: 501, // hruška
    KOULE: 502, // koule
    LED: 503, // LED
    MODUS: 504, // modus
    OCKO: 505, // očko
    RAMINKO: 506, // ramínko
    REFLEKTOR: 507, // reflektor
    SADOVKA: 508, // sadovka
    VELBLOUD: 509, // velbloud
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypSvodidlaUpresneni */
export const CKZTypSvodidlaUpresneni = {
    TERMINAL_PRUBEH: 500, // terminál - průběh
    TERMINAL_NABEH: 501, // terminál - náběh
    TLUMICE_NARAZU: 502, // tlumiče nárazu
    ZEMNI_VAL_HROBECEK: 503, // zemní val (hrobeček)
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypVodohospodarskehoObjektu */
export const CKZTypVodohospodarskehoObjektu = {
    LIMNIGRAF: 500, // limnigraf
    PLAVEBNI_SIGNALIZACE_SLOUP: 501, // plavební signalizace - sloup
    POBREZNI_SIGNALNI_SVETLO: 502, // pobřežní signální světlo
    SBERNA_STUDNA: 503, // sběrná studna
    STAVIDLO_PREPAZKA_VOD_TOKU_UZSIHO_NEZ_2_M: 504, // stavidlo, přepážka vod. toku užšího než 2 m
    STUDNA_MIMO_VEREJNY_PROSTOR: 505, // studna (mimo veřejný prostor)
    VODOCET: 506, // vodočet
    VRIDLO_ZRIDLO_PRAMEN: 507, // vřídlo, zřídlo, pramen
    VRIDLO_ZRIDLO_PRAMEN_PRIRODNI_LECIVY_ZDROJ: 508, // vřídlo, zřídlo, pramen - přírodní léčivý zdroj
    PRISTAVISTE: 509, // přístaviště
    KOTVISTE: 510, // kotviště
    PREKLADISTE: 511, // překladiště
    VYVAZISTE: 512, // vývaziště
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypVodovodnihoRadu */
export const CKZTypVodovodnihoRadu = {
    SVODNY_RAD: 500, // svodný řad
    NASOSKOVY_RAD: 501, // násoskový řad
    PRIVADECI_RAD: 502, // přiváděcí řad
    ZASOBNI_RAD: 503, // zásobní řad
    HLAVNI_RAD: 504, // hlavní řad
    ROZVADECI_RAD: 505, // rozváděcí řad
    ODLEHCOVACI_RAD: 506, // odlehčovací řad
    PREPAD_Z_VODOJEMU: 507, // přepad z vodojemu
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypVrstevnice */
export const CKZTypVrstevnice = {
    DOPLNKOVA_VRSTEVNICE: 500, // doplňková vrstevnice
    OBVOD_UZEMI_S_VRSTEVNICEMI: 501, // obvod území s vrstevnicemi
    POMOCNA_VRSTEVNICE: 502, // pomocná vrstevnice
    SPADOVKA: 503, // spádovka
    VYJMUTE_UZEMI_Z_VRSTEVNIC: 505, // vyjmuté území z vrstevnic
    ZAKLADNI_VRSTEVNICE: 506, // základní vrstevnice
    ZDURAZNENA_VRSTEVNICE: 507, // zdůrazněná vrstevnice
    NEURCENO: 901, // neurčeno
};
/** CKZTypVylozniku */
export const CKZTypVylozniku = {
    LOMENY: 500, // lomený
    OBLOUKOVY: 501, // obloukový
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypZPIPDZ */
export const CKZTypZPIPDZ = {
    OBSADITELNOST_P: 500, // Obsaditelnost P
    TEPLOMER: 501, // teploměr
    METEO: 502, // Meteo
    PDZ_ZPI: 503, // PDZ + ZPI
    LRD_LINIOVE_RIZENI_DOPRAVY: 504, // LRD(liniové řízení dopravy)
    PDZ_HRANOLOVE: 505, // PDZ - hranolové
    PDZ_KNIZKOVE: 506, // PDZ - knížkové
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypUkotveni */
export const CKZTypUkotveni = {
    BEZ_PATKY: 501, // bez patky
    S_PATKOU: 502, // s patkou
    BETON: 503, // beton
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZUlozeniteplovodu */
export const CKZUlozeniteplovodu = {
    V_OBJEKTU: 500, // v objektu
    BEZKANALOVE_ULOZENI: 501, // bezkanálové uložení
    NEPRULEZNY_KANAL: 502, // neprůlezný kanál
    PRULEZNY_KANAL: 503, // průlezný kanál
    PRUCHOZI_KANAL_KOLEKTOR: 504, // průchozí kanál - kolektor
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypUmisteniSvodidla */
export const CKZTypUmisteniSvodidla = {
    SILNICE: 500, // silnice
    MOST: 501, // most
    PREJEZD_SDP: 502, // přejezd SDP
    INTEGROVANE_DO_PHS: 503, // integrované do PHS
    TUNEL: 504, // tunel
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZZakladniDruhKere */
export const CKZZakladniDruhKere = {
    BEZ: 500, // bez
    BRSLEN: 501, // brslen
    DRIN: 502, // dřín
    DRISTAL: 503, // dřišťál
    HLOH: 504, // hloh
    JALOVEC: 505, // jalovec
    KATALPA: 506, // katalpa
    KRUSINA: 507, // krušina
    MALINIK: 508, // maliník
    OSTRUZINIK: 509, // ostružiník
    PAMELNIK: 510, // pámelník
    RAKYTNIK: 511, // rakytník
    RUZE: 512, // růže
    RYBIZ: 513, // rybíz
    TIS: 514, // tis
    TRNKA: 515, // trnka
    ZLATICE: 516, // zlatice
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZZakladniDruhStromu */
export const CKZZakladniDruhStromu = {
    BEZ: 500, // bez
    BOROVICE: 501, // borovice
    BROSKVON: 502, // broskvoň
    BRIZA: 503, // bříza
    BUK: 504, // buk
    DUB: 505, // dub
    HABR: 506, // habr
    HLOH: 507, // hloh
    HRUSEN: 508, // hrušeň
    JABLON: 509, // jabloň
    JASAN: 510, // jasan
    JAVOR: 511, // javor
    JEDLE: 512, // jedle
    JERAB: 513, // jeřáb
    JILM: 514, // jilm
    JINAN: 515, // jinan
    JIROVEC: 516, // jírovec
    KDOULOVEC: 517, // kdoulovec
    LIPA: 518, // lípa
    LISKA: 519, // líska
    MERUNKA: 520, // meruňka
    MODRIN: 521, // modřín
    OLSE: 522, // olše
    ORESAK: 523, // ořešák
    PLATAN: 524, // platan
    SLIVON_SVESTKA: 525, // slivoň (švestka)
    SMRK: 526, // smrk
    SERIK: 527, // šeřík
    TIS: 528, // tis
    TOPOL: 529, // topol
    TOPOL_OSIKA: 530, // topol - osika
    TRNKA: 531, // trnka
    TRNOVNIK_AKAT: 532, // trnovník (akát)
    TRESEN: 533, // třešeň
    VISEN: 534, // višeň
    VRBA: 535, // vrba
    ZERAV: 536, // zerav
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZZakladniRozdeleniKeru */
export const CKZZakladniRozdeleniKeru = {
    JEHLICNATY: 500, // jehličnatý
    LISTNATY: 501, // listnatý
    OVOCNY: 502, // ovocný
    OKRASNY: 503, // okrasný
    PAREZ: 504, // pařez
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZZakladniRozdeleniStromu */
export const CKZZakladniRozdeleniStromu = {
    JEHLICNATY: 500, // jehličnatý
    LISTNATY: 501, // listnatý
    OVOCNY: 502, // ovocný
    OKRASNY: 503, // okrasný
    PAREZ: 504, // pařez
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZZakladniRozdeleniZelene */
export const CKZZakladniRozdeleniZelene = {
    JEHLICNATY: 500, // jehličnatý
    LISTNATY: 501, // listnatý
    OVOCNY: 502, // ovocný
    OKRASNY_PARKOVY: 503, // okrasný, parkový
    MYTINA: 504, // mýtina
    SMISENY: 505, // smíšený
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZDruhStavbyProZpevneniPovrchu */
export const CKZDruhStavbyProZpevneniPovrchu = {
    ZAJISTENI_SKAL: 500, // zajištění skal
    ZPEVNENY_SVAH: 501, // zpevněný svah
    SVAHOVA_DLAZBA: 502, // svahová dlažba
    NEZJISTENO: 900, // nezjištěno
    JINY: 902, // jiný
};
/** CKZTypTechnologickeKonstrukce */
export const CKZTypTechnologickeKonstrukce = {
    KONZOLA: 500, // konzola
    KRAKOREC: 501, // krakorec
    LAVKA: 502, // lávka
    DOPRAVNIK: 503, // dopravník
    PRIHRADOVA_KONSTRUKCE: 504, // příhradová konstrukce
    NEZJISTENO: 900, // nezjištěno
    JINY: 902, // jiný
};
/** CKZDruhZakladaniASanace */
export const CKZDruhZakladaniASanace = {
    KOTEVNI_BOD: 500, // kotevní bod
    PILOTA: 501, // pilota
    TRN: 502, // trn
    VYLOZNIK: 503, // výložník
    NEZJISTENO: 900, // nezjištěno
    JINY: 902, // jiný
};
/** CKZHraniceJinehoObjektu */
export const CKZHraniceJinehoObjektu = {
    NE: 0, // ne
    ANO: 1, // ano
};
/** CKZTypObjektuTrolejbusoveDopravy */
export const CKZTypObjektuTrolejbusoveDopravy = {
    TROLEJOVY_KONTAKT: 501, // trolejový kontakt
    NAPAJECI_BOD: 502, // napájecí bod
    USEKOVY_DELIC: 503, // úsekový dělič
    NAPINACI_SLOUP: 504, // napínací sloup
    KRIZOVATKOVY_SLOUP: 505, // křižovatkový sloup
    VYHYBKA: 506, // výhybka
    KRIZENI: 507, // křížení
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypObjektuLanoveDopravy */
export const CKZTypObjektuLanoveDopravy = {
    NAPINACI_SACHTA: 501, // napínací šachta
    ZACHRANNY_BOD: 502, // záchranný bod
    TRATOVY_HLASIC: 503, // traťový hlásič
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
/** CKZTypZelene */
export const CKZTypZelene = {
    KACIREK: 500, // kačírek
    MYTINA: 501, // mýtina
    OKRASNE_KAMENY: 502, // okrasné kameny
    SKUPINA_KERU_JEHLICNATA: 503, // skupina keřů - jehličnatá
    SKUPINA_KERU_LISTNATA: 504, // skupina keřů - listnatá
    SKUPINA_KERU_SMISENA: 505, // skupina keřů - smíšená
    SKUPINA_STROMU_JEHLICNATA: 506, // skupina stromů -  jehličnatá
    SKUPINA_STROMU_JEHLICNATA_S_PODROSTEM_KERU: 507, // skupina stromů -  jehličnatá s podrostem keřů
    SKUPINA_STROMU_JEHLICNATA_S_PODROSTEM_TRAVNIKU: 508, // skupina stromů -  jehličnatá s podrostem trávníku
    SKUPINA_STROMU_LISTNATA: 509, // skupina stromů -  listnatá
    SKUPINA_STROMU_LISTNATA_S_PODROSTEM_KERU: 510, // skupina stromů -  listnatá  s podrostem keřů
    SKUPINA_STROMU_LISTNATA_S_PODROSTEM_TRAVNIKU: 511, // skupina stromů -  listnatá  s podrostem trávníku
    SKUPINA_STROMU_SMISENA: 512, // skupina stromů -  smíšená
    SKUPINA_STROMU_SMISENA_S_PODROSTEM_KERU: 513, // skupina stromů -  smíšená  s podrostem keřů
    SKUPINA_STROMU_SMISENA_S_PODROSTEM_TRAVNIKU: 514, // skupina stromů -  smíšená  s podrostem trávníku
    TRAVNIK_EXTENZIVNI: 515, // trávník - extenzivní
    TRAVNIK_HRISTOVY: 516, // trávník - hřišťový
    TRAVNIK_KOBERCOVY: 517, // trávník - kobercový
    TRAVNIK_LUCNI: 518, // trávník - luční
    TRAVNIK_PARKOVY: 519, // trávník - parkový
    TRAVNIK_PASTVINA: 520, // trávník - pastvina
    TRAVNIK_POROST_RIDKY: 521, // travník - porost řídký
    TRAVNIK_ZATRAVNENY_HROB: 522, // trávník - zatravněný hrob
    ZAHON_LETNICEK: 523, // záhon - letniček
    ZAHON_RUZI: 524, // záhon - růží
    ZAHON_S_KAPRADINAMI: 525, // záhon - s kapradinami
    ZAHON_S_OKRASNYMI_TRAVAMI: 526, // záhon - s okrasnými travami
    ZAHON_SKALKOVY: 527, // záhon - skalkový
    ZAHON_TRVALEK: 528, // záhon - trvalek
    ZAHON_VRESOVISTNICH_ROSTLIN: 529, // záhon - vřesovištních rostlin
    NEZJISTENO: 900, // nezjištěno
    NEURCENO: 901, // neurčeno
    JINY: 902, // jiný
};
//# sourceMappingURL=enums.js.map