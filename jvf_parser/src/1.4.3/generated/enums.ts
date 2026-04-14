// Auto-generated from JVF DTM 1.4.3 XSD — DO NOT EDIT
// Run: npx tsx scripts/generate-types.ts

/** UrovenUmisteniObjektuZPS */
export const UrovenUmisteniObjektuZPS = {
  VALUE_MINUS_3: -3, // 3. úroveň pod povrchem (nejníže)
  VALUE_MINUS_2: -2, // 2. úroveň pod povrchem
  VALUE_MINUS_1: -1, // 1. úroveň pod povrchem
  NA_POVRCHU: 0, // na povrchu
  VALUE_1: 1, // 1. úroveň nad povrchem
  VALUE_2: 2, // 2. úroveň nad povrchem
  VALUE_3: 3, // 3. úroveň nad povrchem (nejvýše)
} as const;
export type UrovenUmisteniObjektuZPSValue = (typeof UrovenUmisteniObjektuZPS)[keyof typeof UrovenUmisteniObjektuZPS];

/** UrovenUmisteniObjektuTI */
export const UrovenUmisteniObjektuTI = {
  POD_POVRCHEM: -1, // pod povrchem
  NA_POVRCHU: 0, // na povrchu
  NAD_POVRCHEM: 1, // nad povrchem
} as const;
export type UrovenUmisteniObjektuTIValue = (typeof UrovenUmisteniObjektuTI)[keyof typeof UrovenUmisteniObjektuTI];

/** UrovenUmisteniObjektuDI */
export const UrovenUmisteniObjektuDI = {
  VALUE_MINUS_3: -3, // 3. úroveň pod povrchem (nejníže)
  VALUE_MINUS_2: -2, // 2. úroveň pod povrchem
  VALUE_MINUS_1: -1, // 1. úroveň pod povrchem
  NA_POVRCHU: 0, // na povrchu
  VALUE_1: 1, // 1. úroveň nad povrchem
  VALUE_2: 2, // 2. úroveň nad povrchem
  VALUE_3: 3, // 3. úroveň nad povrchem (nejvýše)
} as const;
export type UrovenUmisteniObjektuDIValue = (typeof UrovenUmisteniObjektuDI)[keyof typeof UrovenUmisteniObjektuDI];

/** PrevazujiciPovrch */
export const PrevazujiciPovrch = {
  ASFALT: 1, // asfalt
  BETON: 2, // beton
  DLAZBA: 3, // dlažba
  R_MATERIAL: 4, // R-materiál
  PISEK_STERKOPISEK: 5, // písek, štěrkopísek
  SOTOLINA: 6, // šotolina
  NEZPEVNENO: 7, // nezpevněno
  NEZJISTENO: 99, // nezjištěno
} as const;
export type PrevazujiciPovrchValue = (typeof PrevazujiciPovrch)[keyof typeof PrevazujiciPovrch];

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
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
} as const;
export type KategoriePozemniKomunikaceValue = (typeof KategoriePozemniKomunikace)[keyof typeof KategoriePozemniKomunikace];

/** TypUsekuPozemniKomunikace */
export const TypUsekuPozemniKomunikace = {
  ZEMNI_TELESO_KOMUNIKACE: 1, // zemní těleso komunikace
  MOST: 2, // most
  TUNEL: 3, // tunel
  PRESYPANY_MOST: 4, // přesypaný most
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypUsekuPozemniKomunikaceValue = (typeof TypUsekuPozemniKomunikace)[keyof typeof TypUsekuPozemniKomunikace];

/** TypPozemniKomunikace */
export const TypPozemniKomunikace = {
  KOMUNIKACE: 1, // komunikace
  OKRUZNI_KRIZOVATKA: 2, // okružní křižovatka
  PROSTRANSTVI_BEZPROSTREDNE_SLOUZICI_PROVOZU_A_UDRZBE_POZEMNI_KOMUNIKACE: 3, // prostranství bezprostředně sloužící provozu a údržbě pozemní komunikace
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypPozemniKomunikaceValue = (typeof TypPozemniKomunikace)[keyof typeof TypPozemniKomunikace];

/** TypObjektuSilnicniDopravyZameru */
export const TypObjektuSilnicniDopravyZameru = {
  DALNICE: 1, // dálnice
  SILNICE: 2, // silnice
  MISTNI_KOMUNIKACE: 3, // místní komunikace
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuSilnicniDopravyZameruValue = (typeof TypObjektuSilnicniDopravyZameru)[keyof typeof TypObjektuSilnicniDopravyZameru];

/** TypDrahy */
export const TypDrahy = {
  ZELEZNICNI: 1, // železniční
  TRAMVAJOVA: 2, // tramvajová
  LANOVA: 3, // lanová
  SPECIALNI: 4, // speciální
} as const;
export type TypDrahyValue = (typeof TypDrahy)[keyof typeof TypDrahy];

/** TypUsekuZeleznicniTrate */
export const TypUsekuZeleznicniTrate = {
  ZEMNI_TELESO: 1, // zemní těleso
  MOST: 2, // most
  TUNEL: 3, // tunel
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypUsekuZeleznicniTrateValue = (typeof TypUsekuZeleznicniTrate)[keyof typeof TypUsekuZeleznicniTrate];

/** KategorieZeleznicniTrate */
export const KategorieZeleznicniTrate = {
  CELOSTATNI: 1, // celostátní
  REGIONALNI: 2, // regionální
  MISTNI: 3, // místní
  VLECKA: 4, // vlečka
  ZKUSEBNI: 5, // zkušební
  JINA: 98, // jiná
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
} as const;
export type KategorieZeleznicniTrateValue = (typeof KategorieZeleznicniTrate)[keyof typeof KategorieZeleznicniTrate];

/** TypZeleznicniTrate */
export const TypZeleznicniTrate = {
  VYSOKORYCHLOSTNI: 1, // vysokorychlostní
  KONVENCNI: 2, // konvenční
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypZeleznicniTrateValue = (typeof TypZeleznicniTrate)[keyof typeof TypZeleznicniTrate];

/** ElektrizaceZeleznicniTrate */
export const ElektrizaceZeleznicniTrate = {
  ELEKTRIZOVANA: 1, // elektrizovaná
  NEELEKTRIZOVANA: 2, // neelektrizovaná
  NEZJISTENO: 99, // nezjištěno
} as const;
export type ElektrizaceZeleznicniTrateValue = (typeof ElektrizaceZeleznicniTrate)[keyof typeof ElektrizaceZeleznicniTrate];

/** ZpusobPorizeniDI */
export const ZpusobPorizeniDI = {
  GEODETICKY_TERESTRICKY: 1, // geodeticky - terestricky
  GEODETICKY_FOTOGRAMMETRICKY: 2, // geodeticky - fotogrammetricky
  GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3, // geodeticky - pozemním laserovým skenováním
  PRIBLIZNYM_ZAKRESEM: 4, // přibližným zákresem
  ODVOZENIM: 5, // odvozením
  NEZJISTENO: 99, // nezjištěno
} as const;
export type ZpusobPorizeniDIValue = (typeof ZpusobPorizeniDI)[keyof typeof ZpusobPorizeniDI];

/** RozchodKoleji */
export const RozchodKoleji = {
  VALUE_1: 1, // 1435 mm
  VALUE_2: 2, // 760 mm
  SPLITKA: 3, // splítka
  JINY: 98, // jiný
  NEZJISTENO: 99, // nezjištěno
} as const;
export type RozchodKolejiValue = (typeof RozchodKoleji)[keyof typeof RozchodKoleji];

/** DruhDopravyLanoveDrahy */
export const DruhDopravyLanoveDrahy = {
  NAKLADNI: 1, // nákladní
  OSOBNI: 2, // osobní
  NEZJISTENO: 99, // nezjištěno
} as const;
export type DruhDopravyLanoveDrahyValue = (typeof DruhDopravyLanoveDrahy)[keyof typeof DruhDopravyLanoveDrahy];

/** ZpusobPorizeniZPS */
export const ZpusobPorizeniZPS = {
  GEODETICKY_TERESTRICKY: 1, // geodeticky - terestricky
  GEODETICKY_FOTOGRAMMETRICKY: 2, // geodeticky - fotogrammetricky
  GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3, // geodeticky - pozemním laserovým skenováním
  PRIBLIZNYM_ZAKRESEM: 4, // přibližným zákresem
  ODVOZENIM: 5, // odvozením
  NEZJISTENO: 99, // nezjištěno
} as const;
export type ZpusobPorizeniZPSValue = (typeof ZpusobPorizeniZPS)[keyof typeof ZpusobPorizeniZPS];

/** ZpusobPorizeniPB_ZPS */
export const ZpusobPorizeniPB_ZPS = {
  GEODETICKY_TERESTRICKY: 1, // geodeticky - terestricky
  GEODETICKY_FOTOGRAMMETRICKY: 2, // geodeticky - fotogrammetricky
  GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 3, // geodeticky - pozemním laserovým skenováním
  PRIBLIZNYM_ZAKRESEM: 4, // přibližným zákresem
  KONSTRUKCNE: 5, // konstrukčně
  NEZJISTENO: 99, // nezjištěno
} as const;
export type ZpusobPorizeniPB_ZPSValue = (typeof ZpusobPorizeniPB_ZPS)[keyof typeof ZpusobPorizeniPB_ZPS];

/** TypDopravneVyznamnehoMistaDraze */
export const TypDopravneVyznamnehoMistaDraze = {
  STANICE: 1, // stanice
  ZASTAVKA: 2, // zastávka
  ODBOCKA: 3, // odbočka
  NAKLADISTE: 4, // nákladiště
  JINE: 98, // jiné
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
} as const;
export type TypDopravneVyznamnehoMistaDrazeValue = (typeof TypDopravneVyznamnehoMistaDraze)[keyof typeof TypDopravneVyznamnehoMistaDraze];

/** ZarazeniSledovaneVodniCesty */
export const ZarazeniSledovaneVodniCesty = {
  DOPRAVNE_VYZNAMNA_VYUZIVANA: 1, // dopravně významná využívaná
  DOPRAVNE_VYZNAMNA_VYUZITELNA: 2, // dopravně významná využitelná
  UCELOVA: 3, // účelová
  PLANOVANA: 4, // plánovaná
} as const;
export type ZarazeniSledovaneVodniCestyValue = (typeof ZarazeniSledovaneVodniCesty)[keyof typeof ZarazeniSledovaneVodniCesty];

/** TridaDopravneVyznamneVodniCesty */
export const TridaDopravneVyznamneVodniCesty = {
  MISTNIHO_VYZNAMU_TRIDY_0: 1, // místního významu třídy 0
  MISTNIHO_VYZNAMU_TRIDY_I: 2, // místního významu třídy I
  MEZINARODNIHO_VYZNAMU_TRIDY_IV: 3, // mezinárodního významu třídy IV
  MEZINARODNIHO_VYZNAMU_TRIDY_VA: 4, // mezinárodního významu třídy Va
  MEZINARODNIHO_VYZNAMU_TRIDY_VB: 5, // mezinárodního významu třídy Vb
} as const;
export type TridaDopravneVyznamneVodniCestyValue = (typeof TridaDopravneVyznamneVodniCesty)[keyof typeof TridaDopravneVyznamneVodniCesty];

/** TypSledovaneVodniCesty */
export const TypSledovaneVodniCesty = {
  VEDENA_REKOU: 1, // vedená řekou
  VEDENA_PLAVEBNIM_KANALEM: 2, // vedená plavebním kanálem
  JINA_VODNI_PLOCHA: 98, // jiná vodní plocha
} as const;
export type TypSledovaneVodniCestyValue = (typeof TypSledovaneVodniCesty)[keyof typeof TypSledovaneVodniCesty];

/** TypPristavu */
export const TypPristavu = {
  VEREJNY: 1, // veřejný
  NEVEREJNY: 2, // neveřejný
  JINY: 98, // jiný
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypPristavuValue = (typeof TypPristavu)[keyof typeof TypPristavu];

/** TypPovrchuVzletovePristavaciDrahy */
export const TypPovrchuVzletovePristavaciDrahy = {
  ASFALTOBETON: 1, // asfaltobeton
  CEMENTOBETON: 2, // cementobeton
  TRAVA: 3, // tráva
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypPovrchuVzletovePristavaciDrahyValue = (typeof TypPovrchuVzletovePristavaciDrahy)[keyof typeof TypPovrchuVzletovePristavaciDrahy];

/** DruhLetiste */
export const DruhLetiste = {
  VEREJNE_S_VNITROSTATNIM_PROVOZEM: 1, // veřejné s vnitrostátním provozem
  VEREJNE_S_MEZINARODNIM_PROVOZEM: 2, // veřejné s mezinárodním provozem
  NEVEREJNE_S_VNITROSTATNIM_PROVOZEM: 3, // neveřejné s vnitrostátním provozem
  NEVEREJNE_S_MEZINARODNIM_PROVOZEM: 4, // neveřejné s mezinárodním provozem
  VOJENSKE: 5, // vojenské
  NEZJISTENO: 99, // nezjištěno
} as const;
export type DruhLetisteValue = (typeof DruhLetiste)[keyof typeof DruhLetiste];

/** UmisteniHeliportu */
export const UmisteniHeliportu = {
  UROVNOVY: 1, // úrovňový
  MIMOUROVNOVY: 2, // mimoúrovňový
  NEZJISTENO: 99, // nezjištěno
} as const;
export type UmisteniHeliportuValue = (typeof UmisteniHeliportu)[keyof typeof UmisteniHeliportu];

/** TypLeteckeStavby */
export const TypLeteckeStavby = {
  PODZEMNI: 1, // podzemní
  JINA: 98, // jiná
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypLeteckeStavbyValue = (typeof TypLeteckeStavby)[keyof typeof TypLeteckeStavby];

/** TypZarizeniProLeteckyProvoz */
export const TypZarizeniProLeteckyProvoz = {
  PREHLEDOVY_SYSTEM: 1, // přehledový systém
  RADIONAVIGACNI_ZARIZENI: 2, // radionavigační zařízení
  RADIOKOMUNIKACNI_SYSTEM: 3, // radiokomunikační systém
  SVETELNE_ZARIZENI: 4, // světelné zařízení
  JINE: 98, // jiné
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypZarizeniProLeteckyProvozValue = (typeof TypZarizeniProLeteckyProvoz)[keyof typeof TypZarizeniProLeteckyProvoz];

/** TypMostu */
export const TypMostu = {
  SILNICNI: 1, // silniční
  ZELEZNICNI: 2, // železniční
  PRO_VODNI_DOPRAVU: 3, // pro vodní dopravu
  LAVKA_PRO_PESI_A_CYKLISTY: 4, // lávka pro pěší a cyklisty
  PRECHOD_PRO_VOLNE_ZIJICI_ZIVOCICHY: 5, // přechod pro volně žijící živočichy
  SDRUZENY: 6, // sdružený
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypMostuValue = (typeof TypMostu)[keyof typeof TypMostu];

/** TypTunelu */
export const TypTunelu = {
  ZELEZNICNI: 1, // železniční
  SILNICNI: 2, // silniční
  PRO_CYKLISTY_A_CHODCE: 3, // pro cyklisty a chodce
  PRO_VODNI_DOPRAVU: 4, // pro vodní dopravu
  SDRUZENY: 5, // sdružený
  JINY: 98, // jiný
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypTuneluValue = (typeof TypTunelu)[keyof typeof TypTunelu];

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
} as const;
export type TypNabijecihoVydejnihoMediaValue = (typeof TypNabijecihoVydejnihoMedia)[keyof typeof TypNabijecihoVydejnihoMedia];

/** TypSvodidla */
export const TypSvodidla = {
  JEDNODUCHE: 1, // jednoduché
  ZDVOJENE: 2, // zdvojené
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypSvodidlaValue = (typeof TypSvodidla)[keyof typeof TypSvodidla];

/** TypNadrzeZdrzeSeVzdouvacimObjektem */
export const TypNadrzeZdrzeSeVzdouvacimObjektem = {
  VODNI_NADRZ: 1, // vodní nádrž
  VYROVNAVACI_NADRZ: 6, // vyrovnávací nádrž
  JEZOVA_ZDRZ: 7, // jezová zdrž
  JINA: 98, // jiná
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypNadrzeZdrzeSeVzdouvacimObjektemValue = (typeof TypNadrzeZdrzeSeVzdouvacimObjektem)[keyof typeof TypNadrzeZdrzeSeVzdouvacimObjektem];

/** TypNadrzeBezVzdouvacihoObjektu */
export const TypNadrzeBezVzdouvacihoObjektu = {
  RETENCNI: 1, // retenční
  DESTOVA: 2, // dešťová
  USAZOVACI: 3, // usazovací
  JINA: 98, // jiná
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypNadrzeBezVzdouvacihoObjektuValue = (typeof TypNadrzeBezVzdouvacihoObjektu)[keyof typeof TypNadrzeBezVzdouvacihoObjektu];

/** ZpusobPorizeniTI */
export const ZpusobPorizeniTI = {
  GEODETICKY_TERESTRICKY: 1, // geodeticky - terestricky
  GEODETICKY_TERESTRICKY_PRED_ZAHOZEM: 2, // geodeticky - terestricky před záhozem
  GEODETICKY_TERESTRICKY_PO_ZAHOZU: 3, // geodeticky - terestricky po záhozu
  GEODETICKY_FOTOGRAMMETRICKY: 4, // geodeticky - fotogrammetricky
  GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 5, // geodeticky - pozemním laserovým skenováním
  PRIBLIZNYM_ZAKRESEM: 6, // přibližným zákresem
  VYHLEDANO: 7, // vyhledáno
  ODVOZENIM: 8, // odvozením
  NEZJISTENO: 99, // nezjištěno
} as const;
export type ZpusobPorizeniTIValue = (typeof ZpusobPorizeniTI)[keyof typeof ZpusobPorizeniTI];

/** DruhMelioracnichOpatreni */
export const DruhMelioracnichOpatreni = {
  ODVODNENI: 1, // odvodnění
  ZAVLAHA: 2, // závlaha
  OPATRENI_PROTI_VODNI_EROZI_PRIKOP: 3, // opatření proti vodní erozi - příkop
  OPATRENI_PROTI_VODNI_EROZI_PRULEH: 4, // opatření proti vodní erozi - průleh
  OPATRENI_PROTI_VETRNE_EROZI: 5, // opatření proti větrné erozi
  REVITALIZACE_PUDY: 6, // revitalizace půdy
  VSAKOVACI_OBJEKT: 7, // vsakovací objekt
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
} as const;
export type DruhMelioracnichOpatreniValue = (typeof DruhMelioracnichOpatreni)[keyof typeof DruhMelioracnichOpatreni];

/** TypProtipovodnoveZabrany */
export const TypProtipovodnoveZabrany = {
  HRAZ: 1, // hráz
  ZED: 3, // zeď
  STAVEBNI_ZAKLADY_MOBILNI_ZABRANY: 4, // stavební základy mobilní zábrany
  JINA: 98, // jiná
} as const;
export type TypProtipovodnoveZabranyValue = (typeof TypProtipovodnoveZabrany)[keyof typeof TypProtipovodnoveZabrany];

/** TypObjektuZarizeniOchranaPredPovodnemi */
export const TypObjektuZarizeniOchranaPredPovodnemi = {
  HRADITKO_HRADIDLOVE_SACHTY: 1, // hradítko hradidlové šachty
  HRAZENI_UZAVER_VRATA: 2, // hrazení, uzávěr, vrata
  PATKA_PROTIPOVODNOVE_STENY: 3, // patka protipovodňové stěny
  ODLEHCOVACI_KORYTO: 4, // odlehčovací koryto
  JINY: 98, // jiný
} as const;
export type TypObjektuZarizeniOchranaPredPovodnemiValue = (typeof TypObjektuZarizeniOchranaPredPovodnemi)[keyof typeof TypObjektuZarizeniOchranaPredPovodnemi];

/** TypObjektuOdvodneniStavby */
export const TypObjektuOdvodneniStavby = {
  LINIOVY_ODVODNOVAC: 1, // liniový odvodňovač
  VPUST_KANALIZACNI_SITE: 2, // vpusť kanalizační sítě
  ODTOKOVE_POTRUBI: 3, // odtokové potrubí
  VSAKOVACI_JIMKA: 4, // vsakovací jímka
  JINY: 98, // jiný
} as const;
export type TypObjektuOdvodneniStavbyValue = (typeof TypObjektuOdvodneniStavby)[keyof typeof TypObjektuOdvodneniStavby];

/** StavObjektu */
export const StavObjektu = {
  NEVEREJNY_UDAJ: 0, // neveřejný údaj
  PROVOZOVANO: 1, // provozováno
  NEPROVOZOVANO: 2, // neprovozováno
  NEZJISTENO: 99, // nezjištěno
} as const;
export type StavObjektuValue = (typeof StavObjektu)[keyof typeof StavObjektu];

/** TypTechnickehoKanalu */
export const TypTechnickehoKanalu = {
  CHRANICKA: 4, // chránička
  KABELOVOD: 5, // kabelovod
  TECHNICKY_PODPOVRCHOVY_KANAL: 6, // technický podpovrchový kanál
  KABELOVA_LAVKA_ZLAB: 7, // kabelová lávka / žlab
  JINA_OCHRANNA_KONSTRUKCE: 98, // jiná ochranná konstrukce
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypTechnickehoKanaluValue = (typeof TypTechnickehoKanalu)[keyof typeof TypTechnickehoKanalu];

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
} as const;
export type TypSdilenehoObjektuTIValue = (typeof TypSdilenehoObjektuTI)[keyof typeof TypSdilenehoObjektuTI];

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
} as const;
export type TypPodpernehoZarizeniValue = (typeof TypPodpernehoZarizeni)[keyof typeof TypPodpernehoZarizeni];

/** TypSloupu */
export const TypSloupu = {
  BETONOVY: 1, // betonový
  DREVENY: 2, // dřevěný
  KOVOVY: 3, // kovový
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypSloupuValue = (typeof TypSloupu)[keyof typeof TypSloupu];

/** StavTrasySiteTI */
export const StavTrasySiteTI = {
  NEVEREJNY_UDAJ: 0, // neveřejný údaj
  PROVOZOVANO: 1, // provozováno
  NEPROVOZOVANO: 2, // neprovozováno
  ZRUSENO: 3, // zrušeno
  NEZJISTENO: 99, // nezjištěno
} as const;
export type StavTrasySiteTIValue = (typeof StavTrasySiteTI)[keyof typeof StavTrasySiteTI];

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
} as const;
export type VedeniSiteVJineStavbeValue = (typeof VedeniSiteVJineStavbe)[keyof typeof VedeniSiteVJineStavbe];

/** TypTrasyElektrickeSite */
export const TypTrasyElektrickeSite = {
  SILOVE_VEDENI: 1, // silové vedení
  ZEMNICI_LANO: 2, // zemnící lano
  ZEMNIC: 3, // zemnič
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypTrasyElektrickeSiteValue = (typeof TypTrasyElektrickeSite)[keyof typeof TypTrasyElektrickeSite];

/** MaximalniNapetovaHladina */
export const MaximalniNapetovaHladina = {
  NN: 1, // NN
  VN: 2, // VN
  VVN: 3, // VVN
  ZVN: 4, // ZVN
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
} as const;
export type MaximalniNapetovaHladinaValue = (typeof MaximalniNapetovaHladina)[keyof typeof MaximalniNapetovaHladina];

/** MaximalniProvozniNapeti */
export const MaximalniProvozniNapeti = {
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
  NEZJISTENO: 99, // nezjištěno
} as const;
export type MaximalniProvozniNapetiValue = (typeof MaximalniProvozniNapeti)[keyof typeof MaximalniProvozniNapeti];

/** IzolaceVenkovnihoVedeni */
export const IzolaceVenkovnihoVedeni = {
  ZAKLADNI: 1, // základní
  BEZ_IZOLACE: 2, // bez izolace
  NEZJISTENO: 99, // nezjištěno
} as const;
export type IzolaceVenkovnihoVedeniValue = (typeof IzolaceVenkovnihoVedeni)[keyof typeof IzolaceVenkovnihoVedeni];

/** TypTrasyMistniElektrickeSite */
export const TypTrasyMistniElektrickeSite = {
  VEREJNE_OSVETLENI: 1, // veřejné osvětlení
  SVETELNA_SIGNALIZACE: 2, // světelná signalizace
  OSVETLOVACI_SIT_STAVEB: 4, // osvětlovací síť staveb
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypTrasyMistniElektrickeSiteValue = (typeof TypTrasyMistniElektrickeSite)[keyof typeof TypTrasyMistniElektrickeSite];

/** TypZarizeniElektrickeSite */
export const TypZarizeniElektrickeSite = {
  SKRIN_ELEKTRICKE_SITE: 1, // skříň elektrické sítě
  JINE: 98, // jiné
} as const;
export type TypZarizeniElektrickeSiteValue = (typeof TypZarizeniElektrickeSite)[keyof typeof TypZarizeniElektrickeSite];

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
} as const;
export type TypVyrobnyElektrinyValue = (typeof TypVyrobnyElektriny)[keyof typeof TypVyrobnyElektriny];

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
} as const;
export type TypObjektuElektrickeSiteZameruValue = (typeof TypObjektuElektrickeSiteZameru)[keyof typeof TypObjektuElektrickeSiteZameru];

/** TypStaniceElektrickeSite */
export const TypStaniceElektrickeSite = {
  TRANSFORMACNI_STANICE: 1, // transformační stanice
  STANICE_DISTRIBUCNI_SOUSTAVY: 2, // stanice distribuční soustavy
  SPINACI_STANICE: 3, // spínací stanice
  MENIRNA: 4, // měnírna
  STANICE_PRENOSOVE_SOUSTAVY: 5, // stanice přenosové soustavy
  JINA: 98, // jiná
} as const;
export type TypStaniceElektrickeSiteValue = (typeof TypStaniceElektrickeSite)[keyof typeof TypStaniceElektrickeSite];

/** DruhStaniceElektrickeSite */
export const DruhStaniceElektrickeSite = {
  KOMPAKTNI_A_ZDENA: 1, // kompaktní a zděná
  STOZAROVA: 2, // stožárová
  VEZOVA: 3, // věžová
  VENKOVNI: 4, // venkovní
  VESTAVENA: 5, // vestavěná
  NEZJISTENO: 99, // nezjištěno
} as const;
export type DruhStaniceElektrickeSiteValue = (typeof DruhStaniceElektrickeSite)[keyof typeof DruhStaniceElektrickeSite];

/** TypJadernehoZarizeni */
export const TypJadernehoZarizeni = {
  REAKTOR: 1, // reaktor
  SKLAD: 2, // sklad
  ULOZISTE: 3, // úložiště
  JINE: 98, // jiné
} as const;
export type TypJadernehoZarizeniValue = (typeof TypJadernehoZarizeni)[keyof typeof TypJadernehoZarizeni];

/** MaterialTrasySiteEK */
export const MaterialTrasySiteEK = {
  NEVEREJNY_UDAJ: 0, // neveřejný údaj
  METALICKA: 1, // metalická
  OPTICKA: 2, // optická
  METALICKA_OPTICKA: 3, // metalická + optická
  NEZJISTENO: 99, // nezjištěno
} as const;
export type MaterialTrasySiteEKValue = (typeof MaterialTrasySiteEK)[keyof typeof MaterialTrasySiteEK];

/** ZpusobOchranyVedeniSiteEK */
export const ZpusobOchranyVedeniSiteEK = {
  BEZ_OCHRANY_VEDENI: 1, // bez ochrany vedení
  PLASTOVA_TRUBKA: 2, // plastová trubka
  SVAZEK_MIKROTRUBICEK: 3, // svazek mikrotrubiček
  NEZJISTENO: 99, // nezjištěno
} as const;
export type ZpusobOchranyVedeniSiteEKValue = (typeof ZpusobOchranyVedeniSiteEK)[keyof typeof ZpusobOchranyVedeniSiteEK];

/** TypZarizeniSiteEK */
export const TypZarizeniSiteEK = {
  VENKOVNI_ROZVADEC_EK: 2, // venkovní rozvaděč EK
  BOD_PRO_PRISTUP_NEBO_PROPOJENI_SITI_EK_UVNITR_BUDOV: 3, // bod pro přístup nebo propojení sítí EK uvnitř budov
} as const;
export type TypZarizeniSiteEKValue = (typeof TypZarizeniSiteEK)[keyof typeof TypZarizeniSiteEK];

/** UmisteniObjektu */
export const UmisteniObjektu = {
  SAMOSTATNE_STOJICI: 1, // samostatně stojící
  NA_OBJEKTU: 2, // na objektu
  NEZJISTENO: 99, // nezjištěno
} as const;
export type UmisteniObjektuValue = (typeof UmisteniObjektu)[keyof typeof UmisteniObjektu];

/** TypTechnologickehoObjektuSiteEK */
export const TypTechnologickehoObjektuSiteEK = {
  RADIOTELESKOP: 1, // radioteleskop
  TECHNOLOGICKA_BUDOVA_EK: 2, // technologická budova EK
  TELEKOMUNIKACNI_VEZ: 3, // telekomunikační věž
  TECHNOLOGICKY_KONTEJNER_SITE_EK: 4, // technologický kontejner sítě EK
} as const;
export type TypTechnologickehoObjektuSiteEKValue = (typeof TypTechnologickehoObjektuSiteEK)[keyof typeof TypTechnologickehoObjektuSiteEK];

/** TlakovaHladinaPlynovodniSite */
export const TlakovaHladinaPlynovodniSite = {
  NTL: 1, // NTL
  STL: 2, // STL
  VTL: 3, // VTL
  VVTL: 4, // VVTL
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
} as const;
export type TlakovaHladinaPlynovodniSiteValue = (typeof TlakovaHladinaPlynovodniSite)[keyof typeof TlakovaHladinaPlynovodniSite];

/** TypZarizeniPlynovodniSite */
export const TypZarizeniPlynovodniSite = {
  NEVEREJNY_UDAJ: 0, // neveřejný údaj
  SOUPE: 1, // šoupě
  SKRIN: 2, // skříň
  SACHTA: 4, // šachta
  JINE: 98, // jiné
} as const;
export type TypZarizeniPlynovodniSiteValue = (typeof TypZarizeniPlynovodniSite)[keyof typeof TypZarizeniPlynovodniSite];

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
} as const;
export type TypTechnologickehoObjektuPlynovodniSiteValue = (typeof TypTechnologickehoObjektuPlynovodniSite)[keyof typeof TypTechnologickehoObjektuPlynovodniSite];

/** TypObjektuPlynovodniSiteZameru */
export const TypObjektuPlynovodniSiteZameru = {
  VYROBNA_PLYNU: 1, // výrobna plynu
  STANICE: 2, // stanice
  ZASOBNIK_PLYNU: 3, // zásobník plynu
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuPlynovodniSiteZameruValue = (typeof TypObjektuPlynovodniSiteZameru)[keyof typeof TypObjektuPlynovodniSiteZameru];

/** TypPodzemnihoZasobnikuPlynu */
export const TypPodzemnihoZasobnikuPlynu = {
  SONDA: 1, // sonda
  SBERNE_STREDISKO: 2, // sběrné středisko
  CENTRALNI_AREAL: 3, // centrální areál
} as const;
export type TypPodzemnihoZasobnikuPlynuValue = (typeof TypPodzemnihoZasobnikuPlynu)[keyof typeof TypPodzemnihoZasobnikuPlynu];

/** TypTrasyVodovodniSite */
export const TypTrasyVodovodniSite = {
  PRIVADECI_RAD: 1, // přiváděcí řad
  ROZVODNA_VODOVODNI_SIT: 2, // rozvodná vodovodní síť
  JINA: 98, // jiná
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypTrasyVodovodniSiteValue = (typeof TypTrasyVodovodniSite)[keyof typeof TypTrasyVodovodniSite];

/** TypMediaVodovodniSite */
export const TypMediaVodovodniSite = {
  VODA_PITNA: 1, // voda pitná
  VODA_SUROVA: 2, // voda surová
  VODA_UZITKOVA: 3, // voda užitková
  JINE: 98, // jiné
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypMediaVodovodniSiteValue = (typeof TypMediaVodovodniSite)[keyof typeof TypMediaVodovodniSite];

/** TypZarizeniVodovodniPripojky */
export const TypZarizeniVodovodniPripojky = {
  SACHTA_MERNA_A_KONTROLNI: 2, // šachta měrná a kontrolní
  JINE: 98, // jiné
} as const;
export type TypZarizeniVodovodniPripojkyValue = (typeof TypZarizeniVodovodniPripojky)[keyof typeof TypZarizeniVodovodniPripojky];

/** TypObjektuVodovodniSite */
export const TypObjektuVodovodniSite = {
  VODOJEM_VEZOVY: 1, // vodojem věžový
  VODOJEM_ZEMNI: 2, // vodojem zemní
  UPRAVNA_VODY: 3, // úpravna vody
  CERPACI_STANICE: 4, // čerpací stanice
  SACHTA_VODOVODNI_SITE: 5, // šachta vodovodní sítě
  PITKO: 6, // pítko
  JINY: 98, // jiný
} as const;
export type TypObjektuVodovodniSiteValue = (typeof TypObjektuVodovodniSite)[keyof typeof TypObjektuVodovodniSite];

/** TypObjektuVodovodniSiteZameru */
export const TypObjektuVodovodniSiteZameru = {
  ZDROJ_VODY: 1, // zdroj vody
  VODOJEM: 2, // vodojem
  UPRAVNA_VODY: 3, // úpravna vody
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuVodovodniSiteZameruValue = (typeof TypObjektuVodovodniSiteZameru)[keyof typeof TypObjektuVodovodniSiteZameru];

/** TypPrivadece */
export const TypPrivadece = {
  ODKRYTY: 1, // odkrytý
  TRUBNI: 2, // trubní
  STOLA: 3, // štola
  JINY: 98, // jiný
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypPrivadeceValue = (typeof TypPrivadece)[keyof typeof TypPrivadece];

/** TypZarizeniPrivadece */
export const TypZarizeniPrivadece = {
  SACHTA: 1, // šachta
  JINE: 98, // jiné
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypZarizeniPrivadeceValue = (typeof TypZarizeniPrivadece)[keyof typeof TypZarizeniPrivadece];

/** TypTrasyStokoveSite */
export const TypTrasyStokoveSite = {
  STOKOVA_SIT: 1, // stoková síť
  PRIVADECI_STOKA: 4, // přiváděcí stoka
  JINA: 98, // jiná
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypTrasyStokoveSiteValue = (typeof TypTrasyStokoveSite)[keyof typeof TypTrasyStokoveSite];

/** UceloveZarazeniStokoveSite */
export const UceloveZarazeniStokoveSite = {
  JEDNOTNA: 1, // jednotná
  SRAZKOVA: 2, // srážková
  SPLASKOVA: 3, // splašková
  PRUMYSLOVA: 6, // průmyslová
  JINE: 98, // jiné
  NEZJISTENO: 99, // nezjištěno
} as const;
export type UceloveZarazeniStokoveSiteValue = (typeof UceloveZarazeniStokoveSite)[keyof typeof UceloveZarazeniStokoveSite];

/** DruhStokoveSite */
export const DruhStokoveSite = {
  GRAVITACNI: 1, // gravitační
  TLAKOVA: 2, // tlaková
  PODTLAKOVA: 3, // podtlaková
  NEZJISTENO: 99, // nezjištěno
} as const;
export type DruhStokoveSiteValue = (typeof DruhStokoveSite)[keyof typeof DruhStokoveSite];

/** TypZarizeniKanalizacniPripojky */
export const TypZarizeniKanalizacniPripojky = {
  REVIZNI_SACHTA: 1, // revizní šachta
  MERNA_SACHTA: 2, // měrná šachta
  DOMOVNI_CERPACI_STANICE: 3, // domovní čerpací stanice
  VSAKOVACI_ZARIZENI_S_PREPADEM: 4, // vsakovací zařízení s přepadem
  JINE: 98, // jiné
} as const;
export type TypZarizeniKanalizacniPripojkyValue = (typeof TypZarizeniKanalizacniPripojky)[keyof typeof TypZarizeniKanalizacniPripojky];

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
} as const;
export type TypObjektuStokoveSiteValue = (typeof TypObjektuStokoveSite)[keyof typeof TypObjektuStokoveSite];

/** TypObjektuStokoveSiteZameru */
export const TypObjektuStokoveSiteZameru = {
  CISTIRNA_ODPADNICH_VOD: 1, // čistírna odpadních vod
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuStokoveSiteZameruValue = (typeof TypObjektuStokoveSiteZameru)[keyof typeof TypObjektuStokoveSiteZameru];

/** TypZarizeniSiteProduktovodu */
export const TypZarizeniSiteProduktovodu = {
  SACHTA: 1, // šachta
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypZarizeniSiteProduktovoduValue = (typeof TypZarizeniSiteProduktovodu)[keyof typeof TypZarizeniSiteProduktovodu];

/** TypTrasyTeplovodniSite */
export const TypTrasyTeplovodniSite = {
  PRIMARNI: 1, // primární
  SEKUNDARNI: 2, // sekundární
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypTrasyTeplovodniSiteValue = (typeof TypTrasyTeplovodniSite)[keyof typeof TypTrasyTeplovodniSite];

/** TypTeplovodniSite */
export const TypTeplovodniSite = {
  TEPLOVOD: 1, // teplovod
  HORKOVOD: 2, // horkovod
  PAROVOD: 3, // parovod
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypTeplovodniSiteValue = (typeof TypTeplovodniSite)[keyof typeof TypTeplovodniSite];

/** TypZarizeniTeplovodniSite */
export const TypZarizeniTeplovodniSite = {
  ODVETRAVANI_TEPLOVODU: 1, // odvětrávání teplovodu
  SACHTA: 2, // šachta
  JINE: 98, // jiné
} as const;
export type TypZarizeniTeplovodniSiteValue = (typeof TypZarizeniTeplovodniSite)[keyof typeof TypZarizeniTeplovodniSite];

/** TypTechnologickehoObjektuTeplovodniSite */
export const TypTechnologickehoObjektuTeplovodniSite = {
  TEPLARNA: 1, // teplárna
  KOTELNA: 2, // kotelna
  JINY: 98, // jiný
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
} as const;
export type TypTechnologickehoObjektuTeplovodniSiteValue = (typeof TypTechnologickehoObjektuTeplovodniSite)[keyof typeof TypTechnologickehoObjektuTeplovodniSite];

/** TypZarizeniPotrubniPosty */
export const TypZarizeniPotrubniPosty = {
  SOUPE: 1, // šoupě
  JINE: 98, // jiné
} as const;
export type TypZarizeniPotrubniPostyValue = (typeof TypZarizeniPotrubniPosty)[keyof typeof TypZarizeniPotrubniPosty];

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
} as const;
export type TypPovrchovehoZnakuTIValue = (typeof TypPovrchovehoZnakuTI)[keyof typeof TypPovrchovehoZnakuTI];

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
} as const;
export type TypInzenyrskeSiteValue = (typeof TypInzenyrskeSite)[keyof typeof TypInzenyrskeSite];

/** TypPKO */
export const TypPKO = {
  KATODICKA: 1, // katodická
  ELEKTROPOLARIZOVANA_DRENAZ: 2, // elektropolarizovaná drenáž
  ANODA: 3, // anoda
  PROPOJOVACI_KABELAZ: 4, // propojovací kabeláž
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypPKOValue = (typeof TypPKO)[keyof typeof TypPKO];

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
} as const;
export type TypInzenyrskeSitePKOValue = (typeof TypInzenyrskeSitePKO)[keyof typeof TypInzenyrskeSitePKO];

/** TypJinehoZarizeniStavebTI */
export const TypJinehoZarizeniStavebTI = {
  HLASIC_IZS: 1, // hlásič IZS
  REPRODUKTOR: 2, // reproduktor
  VENKOVNI_HODINY: 3, // venkovní hodiny
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypJinehoZarizeniStavebTIValue = (typeof TypJinehoZarizeniStavebTI)[keyof typeof TypJinehoZarizeniStavebTI];

/** StavSkladkyOdpadu */
export const StavSkladkyOdpadu = {
  V_PROVOZU: 1, // v provozu
  UZAVRENO: 2, // uzavřeno
  NEZJISTENO: 99, // nezjištěno
} as const;
export type StavSkladkyOdpaduValue = (typeof StavSkladkyOdpadu)[keyof typeof StavSkladkyOdpadu];

/** TypOdpadu */
export const TypOdpadu = {
  OSTATNI_ODPAD: 1, // ostatní odpad
  NEBEZPECNY_ODPAD: 2, // nebezpečný odpad
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypOdpaduValue = (typeof TypOdpadu)[keyof typeof TypOdpadu];

/** TypZarizeniOdstranovaniOdpadu */
export const TypZarizeniOdstranovaniOdpadu = {
  ZARIZENI_NA_ODSTRANOVANI_BRO: 1, // zařízení na odstraňování BRO
  ZARIZENI_NA_ODSTRANOVANI_NEBEZPECNEHO_ODPADU: 2, // zařízení na odstraňování nebezpečného odpadu
  JINE: 98, // jiné
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypZarizeniOdstranovaniOdpaduValue = (typeof TypZarizeniOdstranovaniOdpadu)[keyof typeof TypZarizeniOdstranovaniOdpadu];

/** PovoleniNakladaniNebezpecnymOdpadem */
export const PovoleniNakladaniNebezpecnymOdpadem = {
  POVOLENO: 1, // povoleno
  BEZ_POVOLENI: 2, // bez povolení
  NEZJISTENO: 99, // nezjištěno
} as const;
export type PovoleniNakladaniNebezpecnymOdpademValue = (typeof PovoleniNakladaniNebezpecnymOdpadem)[keyof typeof PovoleniNakladaniNebezpecnymOdpadem];

/** TypDrobneSakralniStavby */
export const TypDrobneSakralniStavby = {
  KRIZ: 1, // kříž
  BOZI_MUKA: 2, // boží muka
  KAPLICKA: 3, // kaplička
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypDrobneSakralniStavbyValue = (typeof TypDrobneSakralniStavby)[keyof typeof TypDrobneSakralniStavby];

/** TypDrobneKulturniStavby */
export const TypDrobneKulturniStavby = {
  KASNA: 1, // kašna
  VODOTRYSK_FONTANA: 2, // vodotrysk, fontána
  POMNIK: 3, // pomník
  SOCHA: 4, // socha
  MOHYLA: 5, // mohyla
  ZVONICE: 6, // zvonice
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypDrobneKulturniStavbyValue = (typeof TypDrobneKulturniStavby)[keyof typeof TypDrobneKulturniStavby];

/** DruhPlotu */
export const DruhPlotu = {
  DREVENY: 1, // dřevěný
  DRATENY: 2, // drátěný
  KOVOVY: 3, // kovový
  ZDENY: 4, // zděný
  ZIVY: 5, // živý
  JINY: 98, // jiný
  NEZJISTENO: 99, // nezjištěno
} as const;
export type DruhPlotuValue = (typeof DruhPlotu)[keyof typeof DruhPlotu];

/** DruhSchodiste */
export const DruhSchodiste = {
  VICESTUPNOVE: 1, // vícestupňové
  PLATFORMA_S_JEDNIM_STUPNEM: 2, // platforma s jedním stupněm
  NEZJISTENO: 99, // nezjištěno
} as const;
export type DruhSchodisteValue = (typeof DruhSchodiste)[keyof typeof DruhSchodiste];

/** TypVrtu */
export const TypVrtu = {
  GEOTERMALNI: 1, // geotermální
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypVrtuValue = (typeof TypVrtu)[keyof typeof TypVrtu];

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
} as const;
export type TypNosiceTechnickehoZarizeniValue = (typeof TypNosiceTechnickehoZarizeni)[keyof typeof TypNosiceTechnickehoZarizeni];

/** TypZemedelskePlochy */
export const TypZemedelskePlochy = {
  ORNA_PUDA: 1, // orná půda
  VINICE: 2, // vinice
  CHMELNICE: 3, // chmelnice
  OVOCNY_SAD: 4, // ovocný sad
  TRVALY_TRAVNI_POROST: 5, // trvalý travní porost
  JINA: 98, // jiná
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypZemedelskePlochyValue = (typeof TypZemedelskePlochy)[keyof typeof TypZemedelskePlochy];

/** TypUdrzovaneZelene */
export const TypUdrzovaneZelene = {
  MESTSKA_PARKOVA_ZELEN: 1, // městská parková zeleň
  UDRZOVANA_TRAVNATA_A_OKRASNA_PLOCHA: 2, // udržovaná travnatá a okrasná plocha
  SKUPINA_STROMU_A_KERU: 3, // skupina stromů a keřů
  SILNICNI_VEGETACE: 4, // silniční vegetace
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypUdrzovaneZeleneValue = (typeof TypUdrzovaneZelene)[keyof typeof TypUdrzovaneZelene];

/** TypTerenniHrany */
export const TypTerenniHrany = {
  HRANA: 1, // hrana
  PATA: 2, // pata
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypTerenniHranyValue = (typeof TypTerenniHrany)[keyof typeof TypTerenniHrany];

/** TridaPresnostiPoloha */
export const TridaPresnostiPoloha = {
  TRIDA_PRESNOSTI_1: 1, // třída přesnosti 1
  TRIDA_PRESNOSTI_2: 2, // třída přesnosti 2
  TRIDA_PRESNOSTI_3: 3, // třída přesnosti 3
  TRIDA_PRESNOSTI_4: 4, // třída přesnosti 4
  TRIDA_PRESNOSTI_5: 5, // třída přesnosti 5
  PRESNOST_NEVYHOVUJE_ANI_TRIDE_PRESNOSTI_5_NEBO_NENI_ZNAMA: 9, // přesnost nevyhovuje ani třídě přesnosti 5, nebo není známa
} as const;
export type TridaPresnostiPolohaValue = (typeof TridaPresnostiPoloha)[keyof typeof TridaPresnostiPoloha];

/** TridaPresnostiVyska */
export const TridaPresnostiVyska = {
  TRIDA_PRESNOSTI_1: 1, // třída přesnosti 1
  TRIDA_PRESNOSTI_2: 2, // třída přesnosti 2
  TRIDA_PRESNOSTI_3: 3, // třída přesnosti 3
  TRIDA_PRESNOSTI_4: 4, // třída přesnosti 4
  TRIDA_PRESNOSTI_5: 5, // třída přesnosti 5
  PRESNOST_NEVYHOVUJE_ANI_TRIDE_PRESNOSTI_5_NEBO_NENI_ZNAMA: 9, // přesnost nevyhovuje ani třídě přesnosti 5, nebo není známa
} as const;
export type TridaPresnostiVyskaValue = (typeof TridaPresnostiVyska)[keyof typeof TridaPresnostiVyska];

/** TypOPSiteProduktovodu */
export const TypOPSiteProduktovodu = {
  OP_PRODUKTOVODU: 1, // OP produktovodu
  OP_ROPOVODU: 2, // OP ropovodu
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypOPSiteProduktovoduValue = (typeof TypOPSiteProduktovodu)[keyof typeof TypOPSiteProduktovodu];

/** TypOPSiteEK */
export const TypOPSiteEK = {
  OP_RADIOVEHO_ZARIZENI_A_RADIOVEHO_SMEROVEHO_SPOJE: 1, // OP rádiového zařízení a rádiového směrového spoje
  OP_KOMUNIKACNIHO_VEDENI: 2, // OP komunikačního vedení
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypOPSiteEKValue = (typeof TypOPSiteEK)[keyof typeof TypOPSiteEK];

/** TypOPZarizeniOdpadovehoHospodarstvi */
export const TypOPZarizeniOdpadovehoHospodarstvi = {
  OP_SKLADKY: 1, // OP skládky
  OP_SPALOVNY: 2, // OP spalovny
  OP_ZARIZENI_BRO: 3, // OP zařízení BRO
  OP_ZARIZENI_NA_ODSTRANOVANI_NO: 4, // OP zařízení na odstraňování NO
} as const;
export type TypOPZarizeniOdpadovehoHospodarstviValue = (typeof TypOPZarizeniOdpadovehoHospodarstvi)[keyof typeof TypOPZarizeniOdpadovehoHospodarstvi];

/** TypObjektuOdpadovehoHospodarstviZameru */
export const TypObjektuOdpadovehoHospodarstviZameru = {
  SKLADKA_ODPADU: 1, // skládka odpadů
  SPALOVNA: 2, // spalovna
  JINE_ZARIZENI_NA_ODSTRANOVANI_VYUZIVANI_NEBO_SBER_ODPADU: 3, // jiné zařízení na odstraňování, využívání nebo sběr odpadů
  ODKALISTE: 4, // odkaliště
} as const;
export type TypObjektuOdpadovehoHospodarstviZameruValue = (typeof TypObjektuOdpadovehoHospodarstviZameru)[keyof typeof TypObjektuOdpadovehoHospodarstviZameru];

/** TypOPPozemniKomunikace */
export const TypOPPozemniKomunikace = {
  OP_DALNICE: 1, // OP dálnice
  OP_SILNICE_I_TRIDY: 3, // OP silnice I. třídy
  OP_SILNICE_II_TRIDY: 4, // OP silnice II. třídy
  OP_SILNICE_III_TRIDY: 5, // OP silnice III. třídy
  OP_MISTNI_KOMUNIKACE_I_TRIDY: 6, // OP místní komunikace I. třídy
  OP_MISTNI_KOMUNIKACE_II_TRIDY: 7, // OP místní komunikace II. třídy
} as const;
export type TypOPPozemniKomunikaceValue = (typeof TypOPPozemniKomunikace)[keyof typeof TypOPPozemniKomunikace];

/** TypOPDrazniStavby */
export const TypOPDrazniStavby = {
  OP_ZELEZNICNI_TRATE: 1, // OP železniční tratě
  OP_TRAMVAJOVE_DRAHY: 2, // OP tramvajové dráhy
  OP_POZEMNI_LANOVE_DRAHY: 3, // OP pozemní lanové dráhy
  OP_SPECIALNI_DRAHY: 4, // OP speciální dráhy
  OP_VISUTE_LANOVE_DRAHY: 5, // OP visuté lanové dráhy
  OP_TROLEJBUSOVE_DRAHY: 6, // OP trolejbusové dráhy
} as const;
export type TypOPDrazniStavbyValue = (typeof TypOPDrazniStavby)[keyof typeof TypOPDrazniStavby];

/** TypOPLetiste */
export const TypOPLetiste = {
  OP_SE_ZAKAZEM_STAVEB: 1, // OP se zákazem staveb
  OP_S_VYSKOVYM_OMEZENIM_STAVEB: 2, // OP s výškovým omezením staveb
  OP_PROTI_NEBEZPECNYM_A_KLAMAVYM_SVETLUM: 3, // OP proti nebezpečným a klamavým světlům
  OP_SE_ZAKAZEM_LASEROVYCH_ZARIZENI: 4, // OP se zákazem laserových zařízení
  OP_S_OMEZENIM_STAVEB_VZDUSNYCH_VEDENI_VN_A_VVN: 5, // OP s omezením staveb vzdušných - vedení VN a VVN
  OP_HLUKOVE: 6, // OP hlukové
  OP_ORNITOLOGICKE: 7, // OP ornitologické
} as const;
export type TypOPLetisteValue = (typeof TypOPLetiste)[keyof typeof TypOPLetiste];

/** TypOPLeteckychZabezpecovacichZarizeni */
export const TypOPLeteckychZabezpecovacichZarizeni = {
  OP_PREHLEDOVEHO_SYSTEMU: 1, // OP přehledového systému
  OP_RADIONAVIGACNIHO_ZARIZENI: 2, // OP radionavigačního zařízení
  OP_RADIOKOMUNIKACNIHO_SYSTEMU: 3, // OP radiokomunikačního systému
  OP_SVETELNEHO_ZARIZENI: 4, // OP světelného zařízení
  OP_PODZEMNI_LETECKE_STAVBY: 5, // OP podzemní letecké stavby
} as const;
export type TypOPLeteckychZabezpecovacichZarizeniValue = (typeof TypOPLeteckychZabezpecovacichZarizeni)[keyof typeof TypOPLeteckychZabezpecovacichZarizeni];

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
} as const;
export type TypStavbyValue = (typeof TypStavby)[keyof typeof TypStavby];

/** TypZdi */
export const TypZdi = {
  VOLNE_STOJICI: 1, // volně stojící
  OPERNA: 2, // opěrná
  ZARUBNI: 3, // zárubní
  MESTSKE_HRADBY: 4, // městské hradby
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypZdiValue = (typeof TypZdi)[keyof typeof TypZdi];

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
  PRIKOP_NASYP_ZAREZ_DOPRAVNI_STAVBY: 14, // příkop, násyp, zářez dopravní stavby
  NASTUPISTE: 15, // nástupiště
  PLOCHA_MOSTNI_KONSTRUKCE: 16, // plocha mostní konstrukce
  PORTAL_TUNELU: 17, // portál tunelu
  PROVOZNI_PLOCHA_TUNELU: 18, // provozní plocha tunelu
  PORTAL_PODCHODU: 19, // portál podchodu
  PROVOZNI_PLOCHA_PODCHODU: 20, // provozní plocha podchodu
  SOUHRNNA_PLOCHA_ZELEZNICNICH_DRAH: 21, // souhrnná plocha železničních drah
  JINY: 98, // jiný
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypDopravniStavbyNeboPlochyValue = (typeof TypDopravniStavbyNeboPlochy)[keyof typeof TypDopravniStavbyNeboPlochy];

/** TypPrirodnihoPoloprirodnihoObjektu */
export const TypPrirodnihoPoloprirodnihoObjektu = {
  VODNI_TOK: 1, // vodní tok
  JEZERO: 2, // jezero
  VODNI_PLOCHA_NEURCENA: 3, // vodní plocha neurčená
  ZEMEDELSKA_PLOCHA: 4, // zemědělská plocha
  ZAHRADA: 5, // zahrada
  LES: 6, // les
  HOSPODARSKY_NEVYUZIVANA_PLOCHA: 7, // hospodářsky nevyužívaná plocha
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypPrirodnihoPoloprirodnihoObjektuValue = (typeof TypPrirodnihoPoloprirodnihoObjektu)[keyof typeof TypPrirodnihoPoloprirodnihoObjektu];

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
} as const;
export type TypVodnihoDilaValue = (typeof TypVodnihoDila)[keyof typeof TypVodnihoDila];

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
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypOstatniPlochyValue = (typeof TypOstatniPlochy)[keyof typeof TypOstatniPlochy];

/** TypUzlu */
export const TypUzlu = {
  KRIZOVATKA: 1, // křižovatka
  ODPOCIVKA: 2, // odpočívka
  HRANICNI_PRECHOD_CR: 3, // hraniční přechod ČR
  HRANICE_PRIVOZU: 4, // hranice přívozu
  HRANICE_NEVYBUDOVANEHO_USEKU: 5, // hranice nevybudovaného úseku
  HRANICE_VOJENSKEHO_PROSTORU: 6, // hranice vojenského prostoru
  KONEC_USEKU: 7, // konec úseku
} as const;
export type TypUzluValue = (typeof TypUzlu)[keyof typeof TypUzlu];
