// Auto-generated from ŽXML 1.5.1.6 XSD — DO NOT EDIT
// Run: npx tsx scripts/generate-types.ts <version>

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

/** UrovenUmisteniObjektuPSPI */
export const UrovenUmisteniObjektuPSPI = {
  POD_POVRCHEM: -1, // pod povrchem
  NA_POVRCHU: 0, // na povrchu
  NAD_POVRCHEM: 1, // nad povrchem
} as const;
export type UrovenUmisteniObjektuPSPIValue = (typeof UrovenUmisteniObjektuPSPI)[keyof typeof UrovenUmisteniObjektuPSPI];

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
  ZPEVNENO_NEURCENA: 101106, // zpevněno - neurčená
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
  NEZJISTENO: 99, // nezjištěno
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

/** TypObjektuSilnicniDopravyPS */
export const TypObjektuSilnicniDopravyPS = {
  DALNICE: 1, // dálnice
  SILNICE: 2, // silnice
  MISTNI_KOMUNIKACE: 3, // místní komunikace
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuSilnicniDopravyPSValue = (typeof TypObjektuSilnicniDopravyPS)[keyof typeof TypObjektuSilnicniDopravyPS];

/** TypDrahy */
export const TypDrahy = {
  ZELEZNICNI: 1, // železniční
  TRAMVAJOVA: 2, // tramvajová
  LANOVA: 3, // lanová
  SPECIALNI: 4, // speciální
  TROLEJBUSOVA: 5, // trolejbusová
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
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
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
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
  GEODETICKY_TECHNOLOGII_GNSS: 6, // geodeticky - technologií GNSS
  NEZJISTENO: 99, // nezjištěno
  PREVZATY: 100282, // převzatý
  KONSTRUKCNE_KONSTRUKCNI_OMERNE: 100283, // konstrukčně (konstrukční oměrné)
  KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 100284, // konstrukčně (z geodetického měření - např. body na oblouku, průsečíky, průměty)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 100285, // konstrukčně v rámci konsolidace (automaticky - např. body na oblouku, průsečíky)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 100286, // konstrukčně v rámci konsolidace (manuálně)
  BIM_PUVODNI_Z_PROJEKTU: 100288, // BIM (původní z projektu)
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
  GEODETICKY_TECHNOLOGII_GNSS: 6, // geodeticky - technologií GNSS
  NEZJISTENO: 99, // nezjištěno
  PREVZATY: 100270, // převzatý
  KONSTRUKCNE_KONSTRUKCNI_OMERNE: 100271, // konstrukčně (konstrukční oměrné)
  KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 100272, // konstrukčně (z geodetického měření - např. body na oblouku, průsečíky, průměty)
  BIM_PUVODNI_Z_PROJEKTU: 100273, // BIM (původní z projektu)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 100274, // konstrukčně v rámci konsolidace (automaticky - např. body na oblouku, průsečíky)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 100275, // konstrukčně v rámci konsolidace (manuálně)
} as const;
export type ZpusobPorizeniZPSValue = (typeof ZpusobPorizeniZPS)[keyof typeof ZpusobPorizeniZPS];

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
  PREVZATY: 101391, // převzatý
  KONSTRUKCNE_KONSTRUKCNI_OMERNE: 101392, // konstrukčně (konstrukční oměrné)
  KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 101393, // konstrukčně (z geodetického měření - např. body na oblouku, průsečíky, průměty)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 101394, // konstrukčně v rámci konsolidace (manuálně)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 101395, // konstrukčně v rámci konsolidace (automaticky - např. body na oblouku, průsečíky)
  BIM_PUVODNI_Z_PROJEKTU: 101512, // BIM (původní z projektu)
} as const;
export type ZpusobPorizeniPB_ZPSValue = (typeof ZpusobPorizeniPB_ZPS)[keyof typeof ZpusobPorizeniPB_ZPS];

/** TypDopravneVyznamnehoMistaDraze */
export const TypDopravneVyznamnehoMistaDraze = {
  STANICE: 1, // stanice
  ZASTAVKA: 2, // zastávka
  ODBOCKA: 3, // odbočka
  NAKLADISTE: 4, // nákladiště
  JINE: 98, // jiné
  NEZJISTENO: 99, // nezjištěno
  ZASTAVKA_A_NAKLADISTE: 101521, // zastávka a nákladiště
} as const;
export type TypDopravneVyznamnehoMistaDrazeValue = (typeof TypDopravneVyznamnehoMistaDraze)[keyof typeof TypDopravneVyznamnehoMistaDraze];

/** ZarazeniSledovaneVodniCesty */
export const ZarazeniSledovaneVodniCesty = {
  DOPRAVNE_VYZNAMNA_VYUZIVANA: 1, // dopravně významná využívaná
  DOPRAVNE_VYZNAMNA_VYUZITELNA: 2, // dopravně významná využitelná
  UCELOVA: 3, // účelová
  PLANOVANA: 4, // plánovaná
  DOPRAVNE_VYZNAMNA_NEVYUZIVANA: 100290, // dopravně významná nevyužívaná
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
  VYVYSENY: 2, // vyvýšený
  NEZJISTENO: 99, // nezjištěno
} as const;
export type UmisteniHeliportuValue = (typeof UmisteniHeliportu)[keyof typeof UmisteniHeliportu];

/** TypLeteckeStavby */
export const TypLeteckeStavby = {
  PODZEMNI: 1, // podzemní
  POJEZDOVA_DRAHA: 2, // pojezdová dráha
  ODBAVOVACI_PLOCHA: 3, // odbavovací plocha
  MANIPULACNI_PLOCHA: 4, // manipulační plocha
  ODBAVOVACI_BUDOVA: 5, // odbavovací budova
  HANGAR: 6, // hangár
  JINA: 98, // jiná
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
  VYHLEDANIM: 7, // vyhledáním
  ODVOZENIM: 8, // odvozením
  GEODETICKY_TECHNOLOGII_GNSS: 9, // geodeticky - technologií GNSS
  GEODETICKY_TECHNOLOGII_GNSS_PRED_ZAHOZEM: 10, // geodeticky - technologií GNSS před záhozem
  GEODETICKY_TECHNOLOGII_GNSS_PO_ZAHOZU: 11, // geodeticky - technologií GNSS po záhozu
  NEZJISTENO: 99, // nezjištěno
  PREVZATY: 100299, // převzatý
  KONSTRUKCNE_KONSTRUKCNI_OMERNE: 100300, // konstrukčně (konstrukční oměrné)
  KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 100301, // konstrukčně (z geodetického měření - např. body na oblouku, průsečíky, průměty)
  BIM_PUVODNI_Z_PROJEKTU: 100302, // BIM (původní z projektu)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 100303, // konstrukčně v rámci konsolidace (automaticky - např. body na oblouku, průsečíky)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 100304, // konstrukčně v rámci konsolidace (manuálně)
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
  NEZJISTENO: 99, // nezjištěno
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
  NEZJISTENO: 101413, // nezjištěno
} as const;
export type TypObjektuOdvodneniStavbyValue = (typeof TypObjektuOdvodneniStavby)[keyof typeof TypObjektuOdvodneniStavby];

/** StavObjektu */
export const StavObjektu = {
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
  TRUBKA_HDPE: 101542, // trubka HDPE
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
  OSVETLOVACI_VEZ: 100316, // osvětlovací věž
  STOZAR_VYSILACI_RETRANSLACNI_STANICE: 100321, // stožár vysílací, retranslační stanice
} as const;
export type TypPodpernehoZarizeniValue = (typeof TypPodpernehoZarizeni)[keyof typeof TypPodpernehoZarizeni];

/** TypSloupu */
export const TypSloupu = {
  BETONOVY: 1, // betonový
  DREVENY: 2, // dřevěný
  KOVOVY: 3, // kovový
  NEZJISTENO: 99, // nezjištěno
  OCELOVY_PRIHRADOVY: 100322, // ocelový příhradový
  OCELOVY_TRUBKOVY: 100323, // ocelový trubkový
  OCELOVY_JEDNODUCHY_PROFIL: 100324, // ocelový jednoduchý profil
  OCELOVY_TRUBKOVY_DVOJITY: 100325, // ocelový trubkový dvojitý
  BETONOVY_DVOJITY: 100326, // betonový dvojitý
} as const;
export type TypSloupuValue = (typeof TypSloupu)[keyof typeof TypSloupu];

/** StavTrasySiteTI */
export const StavTrasySiteTI = {
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
  UZEMNENI: 0, // uzemnění
  NN: 1, // NN
  VN: 2, // VN
  VVN: 3, // VVN
  ZVN: 4, // ZVN
  UVN: 5, // UVN
  NEZJISTENO_NEURCENO: 99, // nezjištěno/neurčeno
} as const;
export type MaximalniNapetovaHladinaValue = (typeof MaximalniNapetovaHladina)[keyof typeof MaximalniNapetovaHladina];

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
} as const;
export type MaximalniProvozniNapetiValue = (typeof MaximalniProvozniNapeti)[keyof typeof MaximalniProvozniNapeti];

/** DruhElektrickehoProudu */
export const DruhElektrickehoProudu = {
  AC: 1, // AC
  DC: 2, // DC
  AC_DC: 3, // AC/DC
} as const;
export type DruhElektrickehoProuduValue = (typeof DruhElektrickehoProudu)[keyof typeof DruhElektrickehoProudu];

/** DruhElektrickehoProuduTrakcnihoVedeni */
export const DruhElektrickehoProuduTrakcnihoVedeni = {
  AC: 1, // AC
  DC: 2, // DC
  NEZJISTENO: 99, // nezjištěno
} as const;
export type DruhElektrickehoProuduTrakcnihoVedeniValue = (typeof DruhElektrickehoProuduTrakcnihoVedeni)[keyof typeof DruhElektrickehoProuduTrakcnihoVedeni];

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
  STOZAROVY_OBJEKT_ELEKTRO: 100339, // stožárový objekt elektro
  KABELOVY_OBJEKT_NAPR_MALE_ZASUVKOVE_SKRINE: 100342, // kabelový objekt (např.malé zásuvkové skříně)
  KABELOVY_OBJEKT_EOV_ELEKTRICKY_OHREV_VYHYBKY_VYKOLEJKY: 100343, // kabelový objekt - EOV (elektrický ohřev výhybky, výkolejky)
  KABELOVY_OBJEKT_DOUO_DALKOVE_OVLADANI_USEKOVYCH_ODPOJOVACU: 100344, // kabelový objekt - DOUO (dálkové ovládání úsekových odpojovačů)
  USEKOVY_ODPOJOVAC_NA_TRAKCNI_PODPERE: 100345, // úsekový odpojovač na trakční podpěře
  KABELOVY_OBJEKT_EPZ_ELEKTRICKE_PREDTAPECI_ZARIZENI: 100346, // kabelový objekt - EPZ (elektrické předtápěcí zařízení)
  KABELOVA_REZERVA: 100347, // kabelová rezerva
  ZEMNICI_JIMKA: 100348, // zemnící jímka
  ZEMNICI_TYC: 100349, // zemnící tyč
  KABELOVA_SPOJKA_SILOVE_VEDENI: 100350, // kabelová spojka - silové vedení
  KABELOVY_OZNACNIK_MAGNET_NA_SILOVEM_VEDENI: 100351, // kabelový označník - magnet na silovém vedení
  NEZJISTENO: 101407, // nezjištěno
  CIDLO_PRO_EOV_SRAZKOVE_ZAVEJOVE: 101525, // čidlo pro EOV (srážkové, závějové)
  METEOROLOGICKA_STANICE: 101526, // meteorologická stanice
  PRIPOJNE_MISTO: 101536, // přípojné místo
  NABIJECI_STOJAN: 101537, // nabíjecí stojan
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
} as const;
export type TypObjektuElektrickeSitePSValue = (typeof TypObjektuElektrickeSitePS)[keyof typeof TypObjektuElektrickeSitePS];

/** TypStaniceElektrickeSite */
export const TypStaniceElektrickeSite = {
  TRANSFORMACNI_STANICE: 1, // transformační stanice
  STANICE_DISTRIBUCNI_SOUSTAVY: 2, // stanice distribuční soustavy
  SPINACI_STANICE: 3, // spínací stanice
  MENIRNA: 4, // měnírna
  STANICE_PRENOSOVE_SOUSTAVY: 5, // stanice přenosové soustavy
  TRAKCNI_NAPAJECI_STANICE: 6, // trakční napájecí stanice
  JINA: 98, // jiná
  NEZJISTENO: 101408, // nezjištěno
  ROZPOJOVACI_STANICE: 101519, // rozpojovací stanice
  TRAKCNI_DOBIJECI_STANICE: 101520, // trakční dobíjecí stanice
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
  NA_STOZARU: 100035, // na stožáru
  NA_SOKLU: 100036, // na soklu
  V_ZEMI_POD_POVRCHEM: 100037, // v zemi / pod povrchem
  NADZEMNI: 101123, // nadzemní
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
  SOUPE: 1, // šoupě
  SKRIN: 2, // skříň
  SACHTA: 4, // šachta
  JINE: 98, // jiné
  ODVZDUSNOVAC_POTRUBI: 100042, // odvzdušňovač potrubí
  VYVODY_OSTATNICH_POTRUBI: 100043, // vývody ostatních potrubí
  CICHACKA_NADZEMNI_ZARIZENI: 100044, // čichačka nadzemní (zařízení)
  REDUKCE_NA_PLYNOVODNIM_POTRUBI: 100046, // redukce na plynovodním potrubí
  KOMPENZATOR: 100048, // kompenzátor
  ODFUKOVACI_TRUBKA: 100049, // odfukovací trubka
  ODVODNOVAC_KAPAK: 100050, // odvodňovač - kapák
  OCHOZ_NA_PLYNOVODU_JEDNOSTRANNY: 100051, // ochoz na plynovodu jednostranný
  OCHOZ_NA_PLYNOVODU_OBOUSTRANNY: 100052, // ochoz na plynovodu oboustranný
  ARMATURA: 100053, // armatura
  KONCOVKA: 100054, // koncovka
  SPOJ: 100055, // spoj
  IZOLACNI_SPOJ: 100057, // izolační spoj
  KABELOVY_OZNACNIK_MAGNET_PLYNOVODNIHO_POTRUBI: 100058, // kabelový označník- magnet plynovodního potrubí
  NEZJISTENO: 101409, // nezjištěno
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
  NEZJISTENO: 101410, // nezjištěno
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

/** TypObjektuPlynovodniSitePS */
export const TypObjektuPlynovodniSitePS = {
  VYROBNA_PLYNU: 1, // výrobna plynu
  STANICE: 2, // stanice
  ZASOBNIK_PLYNU: 3, // zásobník plynu
  TRASA_PLYNOVODNI_SITE: 4, // trasa plynovodní sítě
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuPlynovodniSitePSValue = (typeof TypObjektuPlynovodniSitePS)[keyof typeof TypObjektuPlynovodniSitePS];

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
  SOUPE: 101396, // šoupě
  MERICI_OBJEKT: 101398, // měřící objekt
  ODVZDUSNOVAC_POTRUBI: 101399, // odvzdušňovač potrubí
  MYCKA_VAGONU: 101400, // myčka vagónů
  VODNI_JERAB: 101401, // vodní jeřáb
  KABELOVY_OZNACNIK_MAGNET_VODOVODNIHO_VEDENI: 101402, // kabelový označník - magnet vodovodního vedení
  KONCOVKA: 101403, // koncovka
  SPOJ: 101404, // spoj
  NEZJISTENO: 101414, // nezjištěno
} as const;
export type TypObjektuVodovodniSiteValue = (typeof TypObjektuVodovodniSite)[keyof typeof TypObjektuVodovodniSite];

/** TypObjektuVodovodniSitePS */
export const TypObjektuVodovodniSitePS = {
  ZDROJ_VODY: 1, // zdroj vody
  VODOJEM: 2, // vodojem
  UPRAVNA_VODY: 3, // úpravna vody
  TRASA_VODOVODNI_SITE: 4, // trasa vodovodní sítě
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuVodovodniSitePSValue = (typeof TypObjektuVodovodniSitePS)[keyof typeof TypObjektuVodovodniSitePS];

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
  DRENAZ: 101468, // drenáž
  KALOVE_POTRUBI: 101469, // kalové potrubí
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
  NEZJISTENO: 101411, // nezjištěno
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
  NEZJISTENO: 101415, // nezjištěno
  ODSAVACI_STOJAN_ODPADNICH_VOZOVYCH_VOD_VYVODY_OST_POTRUBI: 101416, // odsávací stojan odpadních vozových vod, vývody ost.potrubí
  ZUMPA_SEPTIK: 101417, // žumpa,septik
  ARMATURA: 101418, // armatura
  SPOJ: 101419, // spoj
  KABELOVY_OZNACNIK_MAGNET_VEDENI_ODPADNICH_VOD: 101420, // kabelový označník - magnet vedení odpadních vod
  LAPOL: 101467, // lapol
} as const;
export type TypObjektuStokoveSiteValue = (typeof TypObjektuStokoveSite)[keyof typeof TypObjektuStokoveSite];

/** TypObjektuStokoveSiteZameru */
export const TypObjektuStokoveSiteZameru = {
  CISTIRNA_ODPADNICH_VOD: 1, // čistírna odpadních vod
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuStokoveSiteZameruValue = (typeof TypObjektuStokoveSiteZameru)[keyof typeof TypObjektuStokoveSiteZameru];

/** TypObjektuStokoveSitePS */
export const TypObjektuStokoveSitePS = {
  CISTIRNA_ODPADNICH_VOD: 1, // čistírna odpadních vod
  TRASA_STOKOVE_SITE: 2, // trasa stokové sítě
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuStokoveSitePSValue = (typeof TypObjektuStokoveSitePS)[keyof typeof TypObjektuStokoveSitePS];

/** TypZarizeniSiteProduktovodu */
export const TypZarizeniSiteProduktovodu = {
  SACHTA: 1, // šachta
  NEZJISTENO: 99, // nezjištěno
  ARMATURA_NA_PRODUKTOVODU: 100088, // armatura na produktovodu
  KONCOVKA_NA_PRODUKTOVODU: 100089, // koncovka na produktovodu
  SPOJ_NA_PRODUKTOVODU: 100090, // spoj na produktovodu
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
  MERICI_OBJEKT_TEPLOMER: 100091, // měřící objekt - teploměr
  ODVZDUSNOVAC_POTRUBI: 100093, // odvzdušňovač potrubí
  ARMATURA_TEPLOVODNI: 100094, // armatura teplovodní
  KONCOVKA_TEPLOVODNI: 100095, // koncovka teplovodní
  SPOJ_TEPLOVODNI: 100096, // spoj teplovodní
  KOMPENZATOR: 100097, // kompenzátor
  NEZJISTENO: 101412, // nezjištěno
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

/** TypObjektuTeplovodniSitePS */
export const TypObjektuTeplovodniSitePS = {
  TEPLARNA: 1, // teplárna
  KOTELNA: 2, // kotelna
  TRASA_TEPLOVODNI_SITE: 3, // trasa teplovodní sítě
  JINY: 98, // jiný
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuTeplovodniSitePSValue = (typeof TypObjektuTeplovodniSitePS)[keyof typeof TypObjektuTeplovodniSitePS];

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
  SVITIDLO: 4, // svítidlo
  OSVETLENI: 5, // osvětlení
  JINE: 98, // jiné
  NEZJISTENO: 99, // nezjištěno
  OSVETLENI_OSVETLOVACI_VEZ: 101547, // osvětlení - osvětlovací věž
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
  ZAJISTENI_SKAL: 100109, // zajištění skal
  DRATENY_KOVOVY_NA_PODEZDIVCE: 100110, // drátěný, kovový na podezdívce
  DREVENY_NA_PODEZDIVCE: 100111, // dřevěný na podezdívce
  TRVALE_ZASNEZKY: 100112, // trvalé zásněžky
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
  SPODNI_HRANA_PRIKOPU: 100119, // spodní hrana příkopu
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
  ZVYSENA_TRIDA_PRESNOSTI_2: 100121, // zvýšená třída přesnosti (2+)
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
  ZVYSENA_TRIDA_PRESNOSTI_2: 100122, // zvýšená třída přesnosti (2+)
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
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuOdpadovehoHospodarstviZameruValue = (typeof TypObjektuOdpadovehoHospodarstviZameru)[keyof typeof TypObjektuOdpadovehoHospodarstviZameru];

/** TypObjektuOdpadovehoHospodarstviPS */
export const TypObjektuOdpadovehoHospodarstviPS = {
  SKLADKA_ODPADU: 1, // skládka odpadů
  SPALOVNA: 2, // spalovna
  JINE_ZARIZENI_NA_ODSTRANOVANI_VYUZIVANI_NEBO_SBER_ODPADU: 3, // jiné zařízení na odstraňování, využívání nebo sběr odpadů
  ODKALISTE: 4, // odkaliště
  NEURCENO: 99, // neurčeno
} as const;
export type TypObjektuOdpadovehoHospodarstviPSValue = (typeof TypObjektuOdpadovehoHospodarstviPS)[keyof typeof TypObjektuOdpadovehoHospodarstviPS];

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
} as const;
export type TypDopravniStavbyNeboPlochyValue = (typeof TypDopravniStavbyNeboPlochy)[keyof typeof TypDopravniStavbyNeboPlochy];

/** TypPrirodnihoPoloprirodnihoObjektu */
export const TypPrirodnihoPoloprirodnihoObjektu = {
  VODNI_TOK: 1, // vodní tok
  JEZERO: 2, // jezero
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
  ROZESTAVENA_PLOCHA: 9, // rozestavěná plocha
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

/** TypPrubehuJineTechnologickeStavbyTI */
export const TypPrubehuJineTechnologickeStavbyTI = {
  PREVES_TRAKCNIHO_TROLEJOVEHO_VEDENI_ZELEZNICNI_DRAHY: 1, // převěs trakčního trolejového vedení železniční dráhy
  PREVES_TRAKCNIHO_TROLEJOVEHO_VEDENI_JINE_DRAHY: 2, // převěs trakčního trolejového vedení jiné dráhy
  JINY: 98, // jiný
  BRANA_SPOJUJICI_TRAKCNI_PODPERY: 100464, // brána spojující trakční podpěry
  TAHLO_KOTVY_K_TRAKCNI_PODPERE: 100465, // táhlo kotvy k trakční podpěře
  TAHLO_KOTVY_KE_STOZARU_MIMO_TRAKCNI_VEDENI: 100466, // táhlo kotvy ke stožáru (mimo trakční vedení)
  KABELOVY_OBJEKT_NEURCENY_NADZEMNI_OBVODEM: 100468, // kabelový objekt neurčený nadzemní obvodem
  KABELOVY_OBJEKT_NEURCENY_PODZEMNI_OBVODEM: 100469, // kabelový objekt neurčený podzemní obvodem
  ZEMNICI_DESKA: 100472, // zemnící deska
  NEZJISTENO: 100473, // nezjištěno
  MERENI_RADIOAKTIVITY: 101114, // měření radioaktivity
  NADZEMNI_OCHRANA_TRAKCNIHO_VEDENI: 101172, // nadzemní ochrana trakčního vedení
  KABELOVE_SKRINE_OBVODEM: 101462, // kabelové skříně obvodem
  TRAKCNI_MENIC: 101534, // trakční měnič
  METEOROLOGICKA_STANICE: 101535, // meteorologická stanice
} as const;
export type TypPrubehuJineTechnologickeStavbyTIValue = (typeof TypPrubehuJineTechnologickeStavbyTI)[keyof typeof TypPrubehuJineTechnologickeStavbyTI];

/** UmisteniOznacniku */
export const UmisteniOznacniku = {
  SAMOSTATNY_NOSIC: 1, // samostatný nosič
  SDILENE_PODPERNE_ZARIZENI: 2, // sdílené podpěrné zařízení
  STAVBA_ZASTRESENI: 3, // stavba zastřešení
  JINE: 4, // jiné
} as const;
export type UmisteniOznacnikuValue = (typeof UmisteniOznacniku)[keyof typeof UmisteniOznacniku];

/** DruhHromadneDopravy */
export const DruhHromadneDopravy = {
  AUTOBUSOVA: 1, // autobusová
  TROLEJBUSOVA: 2, // trolejbusová
  TRAMVAJOVA: 3, // tramvajová
  LANOVA: 4, // lanová
  PRIVOZ: 5, // přívoz
  VALUE_6: 6,
} as const;
export type DruhHromadneDopravyValue = (typeof DruhHromadneDopravy)[keyof typeof DruhHromadneDopravy];

/** TypHydrantuVodovodniSite */
export const TypHydrantuVodovodniSite = {
  GARANTOVANY: 1, // garantovaný
  OBECNY: 2, // obecný
  NEZJISTENO: 99, // nezjištěno
} as const;
export type TypHydrantuVodovodniSiteValue = (typeof TypHydrantuVodovodniSite)[keyof typeof TypHydrantuVodovodniSite];

/** DimenzeHydrantuVodovodniSite */
export const DimenzeHydrantuVodovodniSite = {
  DN_80: 1, // DN 80
  DN_100: 2, // DN 100
  DN_125: 3, // DN 125
  DN_150: 4, // DN 150
  DN_200: 5, // DN 200
  JINA: 98, // jiná
  NEZJISTENO: 99, // nezjištěno
} as const;
export type DimenzeHydrantuVodovodniSiteValue = (typeof DimenzeHydrantuVodovodniSite)[keyof typeof DimenzeHydrantuVodovodniSite];

/** SpravceTI */
export const SpravceTI = {
  SZ: 100752, // SŽ
  CIZI_ZJISTENO: 100753, // cizí (zjištěno)
  CIZI_NEZJISTENO: 100754, // cizí (nezjištěno)
  NEURCENO: 100755, // neurčeno
} as const;
export type SpravceTIValue = (typeof SpravceTI)[keyof typeof SpravceTI];

/** TypKolektoru */
export const TypKolektoru = {
  KOLEKTOR_NADZEMNI: 100589, // kolektor nadzemní
  KOLEKTOR_PODZEMNI: 100590, // kolektor podzemní
  NEURCENO: 100592, // neurčeno
} as const;
export type TypKolektoruValue = (typeof TypKolektoru)[keyof typeof TypKolektoru];

/** TypZakresuKabelovoduChranic */
export const TypZakresuKabelovoduChranic = {
  OSA: 100782, // osa
  HRANA: 100783, // hrana
  NEZJISTENO: 101011, // nezjištěno
} as const;
export type TypZakresuKabelovoduChranicValue = (typeof TypZakresuKabelovoduChranic)[keyof typeof TypZakresuKabelovoduChranic];

/** UmisteniKabelovoduChranicky */
export const UmisteniKabelovoduChranicky = {
  NADZEMNI: 100665, // nadzemní
  PODZEMNI: 100666, // podzemní
  NEURCENO: 100667, // neurčeno
} as const;
export type UmisteniKabelovoduChranickyValue = (typeof UmisteniKabelovoduChranicky)[keyof typeof UmisteniKabelovoduChranicky];

/** TypChranenehoPrvku */
export const TypChranenehoPrvku = {
  POTRUBI: 100784, // potrubí
  KABEL: 100785, // kabel
  NEURCENO: 100786, // neurčeno
  OBOJI: 101131, // obojí
} as const;
export type TypChranenehoPrvkuValue = (typeof TypChranenehoPrvku)[keyof typeof TypChranenehoPrvku];

/** Obsazenost */
export const Obsazenost = {
  OBSAZENA: 100787, // obsazená
  PRAZDNA: 100788, // prázdná
  NEURCENO: 100789, // neurčeno
} as const;
export type ObsazenostValue = (typeof Obsazenost)[keyof typeof Obsazenost];

/** UmisteniTrasyElektrickeSite */
export const UmisteniTrasyElektrickeSite = {
  NADZEMNI: 100553, // nadzemní
  ZAVESNE: 100554, // závěsné
  PODZEMNI: 100555, // podzemní
  NEURCENO: 100556, // neurčeno
} as const;
export type UmisteniTrasyElektrickeSiteValue = (typeof UmisteniTrasyElektrickeSite)[keyof typeof UmisteniTrasyElektrickeSite];

/** VyuzitiTrasySiteEk */
export const VyuzitiTrasySiteEk = {
  SDELOVACI: 100557, // sdělovací
  ZABEZPECOVACI: 100558, // zabezpečovací
  NEURCENE: 100559, // neurčené
  SDELOVACI_VEDENI_CIZI: 100578, // sdělovací vedení cizí
  NEURCENE_DRATOVE_NEBO_KABELOVE_VEDENI_MIMO_OCHRANNY_PRVEK_I_V_OCHRANNEM_PRVKU: 100579, // neurčené drátové nebo kabelové vedení (mimo ochranný prvek i v ochranném prvku)
  PRAZDNE: 101548, // prázdné
} as const;
export type VyuzitiTrasySiteEkValue = (typeof VyuzitiTrasySiteEk)[keyof typeof VyuzitiTrasySiteEk];

/** DruhTrasySiteEk */
export const DruhTrasySiteEk = {
  MISTNI: 100790, // místní
  TRATOVY: 100791, // traťový
  DALKOVY: 100792, // dálkový
  NEZJISTENO: 101004, // nezjištěno
  PRIPOJNY: 101544, // přípojný
} as const;
export type DruhTrasySiteEkValue = (typeof DruhTrasySiteEk)[keyof typeof DruhTrasySiteEk];

/** UmisteniTrasySiteEk */
export const UmisteniTrasySiteEk = {
  NADZEMNI: 100553, // nadzemní
  ZAVESNE: 100554, // závěsné
  PODZEMNI: 100555, // podzemní
  NEURCENO: 100556, // neurčeno
} as const;
export type UmisteniTrasySiteEkValue = (typeof UmisteniTrasySiteEk)[keyof typeof UmisteniTrasySiteEk];

/** VyuzitiZarizeniEk */
export const VyuzitiZarizeniEk = {
  SDELOVACI: 100557, // sdělovací
  ZABEZPECOVACI: 100558, // zabezpečovací
  NEURCENE: 100559, // neurčené
  SDELOVACI_VEDENI_CIZI: 100578, // sdělovací vedení cizí
  NEURCENE_DRATOVE_NEBO_KABELOVE_VEDENI_MIMO_OCHRANNY_PRVEK_I_V_OCHRANNEM_PRVKU: 100579, // neurčené drátové nebo kabelové vedení (mimo ochranný prvek i v ochranném prvku)
  PRAZDNE: 101548, // prázdné
} as const;
export type VyuzitiZarizeniEkValue = (typeof VyuzitiZarizeniEk)[keyof typeof VyuzitiZarizeniEk];

/** TypDratovodu */
export const TypDratovodu = {
  NADZEMNI: 100693, // nadzemní
  VE_ZLABU: 100694, // ve žlabu
  VE_ZLABU_NEPRISTUPNEM: 100696, // ve žlabu - nepřístupném
  NEURCENO: 100697, // neurčeno
} as const;
export type TypDratovoduValue = (typeof TypDratovodu)[keyof typeof TypDratovodu];

/** TypZarizeniDratovodu */
export const TypZarizeniDratovodu = {
  SACHTA_DRAT_VEDENI_ZZ: 100698, // šachta drát.vedení ZZ
  DOTAHOVAC_DRATOVODU: 100699, // dotahovač drátovodu
  VYROVNAVAC_DRATOVODU: 100700, // vyrovnávač drátovodu
  NEURCENO: 100701, // neurčeno
} as const;
export type TypZarizeniDratovoduValue = (typeof TypZarizeniDratovodu)[keyof typeof TypZarizeniDratovodu];

/** UmisteniTrasyPlynovodniSite */
export const UmisteniTrasyPlynovodniSite = {
  NADZEMNI: 100653, // nadzemní
  PODZEMNI: 100654, // podzemní
  NEURCENO: 100655, // neurčeno
} as const;
export type UmisteniTrasyPlynovodniSiteValue = (typeof UmisteniTrasyPlynovodniSite)[keyof typeof UmisteniTrasyPlynovodniSite];

/** UmisteniTrasyVodovodniSite */
export const UmisteniTrasyVodovodniSite = {
  NADZEMNI: 100659, // nadzemní
  PODZEMNI: 100660, // podzemní
  NEURCENO: 100661, // neurčeno
} as const;
export type UmisteniTrasyVodovodniSiteValue = (typeof UmisteniTrasyVodovodniSite)[keyof typeof UmisteniTrasyVodovodniSite];

/** UmisteniTrasyKanalizacniSit */
export const UmisteniTrasyKanalizacniSit = {
  NADZEMNI: 100662, // nadzemní
  PODZEMNI: 100663, // podzemní
  NEURCENO: 100664, // neurčeno
} as const;
export type UmisteniTrasyKanalizacniSitValue = (typeof UmisteniTrasyKanalizacniSit)[keyof typeof UmisteniTrasyKanalizacniSit];

/** UmisteniTrasyProduktovodu */
export const UmisteniTrasyProduktovodu = {
  NADZEMNI: 100665, // nadzemní
  PODZEMNI: 100666, // podzemní
  NEURCENO: 100667, // neurčeno
} as const;
export type UmisteniTrasyProduktovoduValue = (typeof UmisteniTrasyProduktovodu)[keyof typeof UmisteniTrasyProduktovodu];

/** UmisteniTeplovodniSite */
export const UmisteniTeplovodniSite = {
  NORMALNI: 100656, // normální
  KANALEM: 100657, // kanálem
  NEURCENO: 100658, // neurčeno
} as const;
export type UmisteniTeplovodniSiteValue = (typeof UmisteniTeplovodniSite)[keyof typeof UmisteniTeplovodniSite];

/** TypOrientacnihoSloupkuTi */
export const TypOrientacnihoSloupkuTi = {
  OZNACOVACI_PATNIK: 100600, // označovací patník
  OZNACOVACI_TYC: 100601, // označovací tyč
  NEURCENO: 100606, // neurčeno
} as const;
export type TypOrientacnihoSloupkuTiValue = (typeof TypOrientacnihoSloupkuTi)[keyof typeof TypOrientacnihoSloupkuTi];

/** TypBodovehoZarizeniProtikor */
export const TypBodovehoZarizeniProtikor = {
  KATODOVA_STANICE: 100756, // katodová stanice
  OCHRANNA_ANODA: 100757, // ochranná anoda
  NEZJISTENO: 100758, // nezjištěno
  PROTIKOROZNI_OCHRANA_ZZ: 101132, // protikorozní ochrana ZZ
} as const;
export type TypBodovehoZarizeniProtikorValue = (typeof TypBodovehoZarizeniProtikor)[keyof typeof TypBodovehoZarizeniProtikor];

/** TypBudovy */
export const TypBudovy = {
  ZDENA_BETONOVA_KOVOVA_NESPALNA: 100541, // zděná, betonová, kovová, nespalná
  DREVENA: 100542, // dřevěná
  NEROZLISENO: 100543, // nerozlišeno
} as const;
export type TypBudovyValue = (typeof TypBudovy)[keyof typeof TypBudovy];

/** UcelBudovy */
export const UcelBudovy = {
  KABELOVY_DOMEK: 100702, // kabelový domek
  RELEOVY_DOMEK: 100703, // reléový domek
  STAVEDLO: 100704, // stavědlo
  VYPRAVNI_BUDOVA: 100705, // výpravní budova
  CEKARNA_BUDOVA_I_PRISTRESEK: 100706, // čekárna (budova i přístřešek)
  BUDOVA_ZASTAVKY: 100707, // budova zastávky
  SKLADISTE: 100708, // skladiště
  RESTAURACE: 100709, // restaurace
  BUFET: 100710, // bufet
  ZACHOD: 100711, // záchod
  GARAZ: 100712, // garáž
  KULNA: 100713, // kůlna
  BUDOVA_NAKLADISTE: 100714, // budova nákladiště
  OBYTNY_DUM: 100715, // obytný dům
  BUDOVA_ODBOCKY: 100716, // budova odbočky
  HASICSKA_ZACHRANNA_SLUZBA: 100717, // hasičská záchranná služba
  ADMINISTRATIVNI_BUDOVA: 100718, // administrativní budova
  VODOJEM: 100719, // vodojem
  VODARNA: 100720, // vodárna
  VYMENIKOVA_STANICE: 100721, // výměníková stanice
  MENIRNA: 100722, // měnírna
  ROZVODNA: 100723, // rozvodna
  TECHNOLOGICKA_BUDOVA: 100724, // technologická budova
  TRANSFORMACNI_STANICE: 100725, // transformační stanice
  CERPACI_STANICE: 100726, // čerpací stanice
  ELEKTRARNA: 100727, // elektrárna
  DEPO_KOLEJOVYCH_VOZIDEL: 100728, // depo kolejových vozidel
  LOKOMOTIVNI_DEPO: 100729, // lokomotivní depo
  VOZOVE_DEPO: 100730, // vozové depo
  HALA_OPRAV: 100731, // hala oprav
  DILNY: 100732, // dílny
  NEZJISTENO: 100733, // nezjištěno
} as const;
export type UcelBudovyValue = (typeof UcelBudovy)[keyof typeof UcelBudovy];

/** TypKoleje */
export const TypKoleje = {
  STANICNI_A_TRATOVA: 100147, // staniční a traťová
  VLECKOVA: 100148, // vlečková
  PISKOVA: 100149, // písková
  NEZJISTENO: 100150, // nezjištěno
  ZA_DYNAMICKYM_ZARAZEDLEM: 101152, // za dynamickým zarážedlem
} as const;
export type TypKolejeValue = (typeof TypKoleje)[keyof typeof TypKoleje];

/** TypPrejezdu */
export const TypPrejezdu = {
  ZELEZNICNI_PREJEZD: 100737, // železniční přejezd
  ZELEZNICNI_PRECHOD: 100738, // železniční přechod
  NEURCENO: 100739, // neurčeno
} as const;
export type TypPrejezduValue = (typeof TypPrejezdu)[keyof typeof TypPrejezdu];

/** TypPrikopuNasepuZarezuDopr */
export const TypPrikopuNasepuZarezuDopr = {
  PRIKOP_S_NEZPEVNENYM_DNEM: 100478, // příkop s nezpevněným dnem
  PRIKOP_SE_ZPEVNENYM_DNEM_ZLAB: 100479, // příkop se zpevněným dnem (žlab)
  ODPAROVACI_ZLAB: 100480, // odpařovací žlab
  NASEP: 100481, // násep
  ZAREZ: 100482, // zářez
  NEURCENO: 100483, // neurčeno
  SKALY: 101015, // skály
  ZPEVNENY_PRIKOP: 101421, // zpevněný příkop
} as const;
export type TypPrikopuNasepuZarezuDoprValue = (typeof TypPrikopuNasepuZarezuDopr)[keyof typeof TypPrikopuNasepuZarezuDopr];

/** TypManipulacniPlochy */
export const TypManipulacniPlochy = {
  BEZ_URCENI: 100519, // bez určení
  DEZINFEKCNI_PLOCHA_SEPARACNI_VANA: 100520, // dezinfekční plocha/ separační vana
} as const;
export type TypManipulacniPlochyValue = (typeof TypManipulacniPlochy)[keyof typeof TypManipulacniPlochy];

/** TypPodchodu */
export const TypPodchodu = {
  ZAVAZADLOVY_TUNEL: 100524, // zavazadlový tunel
  PODCHOD: 100525, // podchod
  NEZJISTENO: 100526, // nezjištěno
} as const;
export type TypPodchoduValue = (typeof TypPodchodu)[keyof typeof TypPodchodu];

/** TypProtihlukoveSteny */
export const TypProtihlukoveSteny = {
  PLNA: 100544, // plná
  TRANSPARENTNI: 100545, // transparentní
  KOMBINOVANA: 100546, // kombinovaná
  NIZKA_PROTIHLUKOVA_CLONA_NESKLOPNA: 100547, // nízká protihluková clona nesklopná
  NIZKA_PROTIHLUKOVA_CLONA_SKLOPNA: 100548, // nízká protihluková clona sklopná
  NEURCENO: 100552, // neurčeno
} as const;
export type TypProtihlukoveStenyValue = (typeof TypProtihlukoveSteny)[keyof typeof TypProtihlukoveSteny];

/** ZpusobPorizeniZPSSZ */
export const ZpusobPorizeniZPSSZ = {
  GEODETICKY_TERESTRICKY: 100743, // geodeticky - terestricky
  GEODETICKY_FOTOGRAMMETRICKY: 100744, // geodeticky - fotogrammetricky
  GEODETICKY_POZEMNIM_LASEROVYM_SKENOVANIM: 100745, // geodeticky - pozemním laserovým skenováním
  PRIBLIZNYM_ZAKRESEM: 100746, // přibližným zákresem
  NEZJISTENO: 100747, // nezjištěno
  GEODETICKY_TECHNOLOGII_GNSS: 100748, // geodeticky - technologií GNSS
  PREVZATY: 100749, // převzatý
  BIM_PUVODNI_Z_PROJEKTU: 100751, // BIM (původní z projektu)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_MANUALNE: 101167, // konstrukčně v rámci konsolidace (manuálně)
  KONSTRUKCNE_V_RAMCI_KONSOLIDACE_AUTOMATICKY_NAPR_BODY_NA_OBLOUKU_PRUSECIKY: 101168, // konstrukčně v rámci konsolidace (automaticky - např. body na oblouku, průsečíky)
  KONSTRUKCNE_Z_GEODETICKEHO_MERENI_NAPR_BODY_NA_OBLOUKU_PRUSECIKY_PRUMETY: 101169, // konstrukčně (z geodetického měření - např. body na oblouku, průsečíky, průměty)
  KONSTRUKCNE_KONSTRUKCNI_OMERNE: 101170, // konstrukčně (konstrukční oměrné)
  GEODETICKY_TERESTRICKY_PRED_ZAHOZEM: 101175, // geodeticky - terestricky před záhozem
  GEODETICKY_TERESTRICKY_PO_ZAHOZU: 101176, // geodeticky - terestricky po záhozu
  GEODETICKY_TECHNOLOGII_GNSS_PRED_ZAHOZEM: 101177, // geodeticky - technologií GNSS před záhozem
  GEODETICKY_TECHNOLOGII_GNSS_PO_ZAHOZU: 101178, // geodeticky - technologií GNSS po záhozu
  VYHLEDANIM: 101179, // vyhledáním
  KONSTRUKCNE: 101511, // konstrukčně
} as const;
export type ZpusobPorizeniZPSSZValue = (typeof ZpusobPorizeniZPSSZ)[keyof typeof ZpusobPorizeniZPSSZ];

/** TypPresuvny */
export const TypPresuvny = {
  ZAPUSTENA: 100530, // zapuštěná
  PREVYSENA: 100531, // převýšená
  NEURCENO: 100532, // neurčeno
} as const;
export type TypPresuvnyValue = (typeof TypPresuvny)[keyof typeof TypPresuvny];

/** DruhZarizeniVratku */
export const DruhZarizeniVratku = {
  KUZELKA_VRATKU_NA_POSUN: 100533, // kuželka vrátku na posun
  MOTOR_VRATKU_NA_POSUN: 100534, // motor vrátku na posun
  NEURCENO: 100535, // neurčeno
} as const;
export type DruhZarizeniVratkuValue = (typeof DruhZarizeniVratku)[keyof typeof DruhZarizeniVratku];

/** TypJerabu */
export const TypJerabu = {
  POZEMNI: 100536, // pozemní
  NADZEMNI: 100537, // nadzemní
  NEURCENO: 100538, // neurčeno
  PODZEMNI: 101130, // podzemní
} as const;
export type TypJerabuValue = (typeof TypJerabu)[keyof typeof TypJerabu];

/** TypPredmetuMalehoRozsahu */
export const TypPredmetuMalehoRozsahu = {
  NA_OBJEKTU: 100625, // na objektu
  SAMOSTATNE_STOJICI: 100626, // samostatně stojící
  NEURCENO: 100628, // neurčeno
} as const;
export type TypPredmetuMalehoRozsahuValue = (typeof TypPredmetuMalehoRozsahu)[keyof typeof TypPredmetuMalehoRozsahu];

/** TypDopravniZnackyObjektu */
export const TypDopravniZnackyObjektu = {
  SVETELNE_SIGNALIZACNI_ZARIZENI_SEMAFOR: 100632, // světelné signalizační zařízení - semafor
  DOPRAVNI_ZNACKA: 100635, // dopravní značka
  ZASTAVKA_VEREJNE_DOPRAVY: 100638, // zastávka veřejné dopravy
  OZNACOVAC_CI_PRODEJNI_AUTOMAT_JIZDENEK: 100640, // označovač či prodejní automat jízdenek
  ORIENTACNI_TABULE: 100642, // orientační tabule
  NEZJISTENO: 100643, // nezjištěno
} as const;
export type TypDopravniZnackyObjektuValue = (typeof TypDopravniZnackyObjektu)[keyof typeof TypDopravniZnackyObjektu];

/** TypSpecialnihoBodu */
export const TypSpecialnihoBodu = {
  BOD_CESKE_STATNI_TRIGONOMETRICKE_SITE_CSTS_KTERY_NENI_ZAHRNUT_DO_ZBP: 100644, // bod české státní trigonometrické sítě  (ČSTS),který není zahrnut do ŽBP
  BOD_CESKE_STATNI_NIVELACNI_SITE_CSNS: 100646, // bod české státní nivelační sítě (ČSNS)
  STABILIZOVANY_BOD_TECH_NIVELACE: 100647, // stabilizovaný bod tech. nivelace
  BOD_ZELEZNICNIHO_BODOVEHO_POLE_ZBP: 100648, // bod železničního bodového pole (ŽBP)
  BOD_POLYGONOVEHO_PORADU_OSTATNI: 100649, // bod polygonového pořadu ostatní
  OCHRANNY_TYCOVY_ZNAK_U_SPEC_BODU: 100650, // ochranný tyčový znak u spec.bodů
  PROFILOVY_BOD_VYTYCOVACI_ZNACKA: 100651, // profilový bod, vytyčovací značka
  JINY: 100652, // jiný
  NEZJISTENO: 101010, // nezjištěno
} as const;
export type TypSpecialnihoBoduValue = (typeof TypSpecialnihoBodu)[keyof typeof TypSpecialnihoBodu];

/** TypHraniceVnitrniCleneniBu */
export const TypHraniceVnitrniCleneniBu = {
  HRANICE_BUDOVY_PODCHODNA: 100539, // hranice budovy podchodná
  NEURCENO: 100540, // neurčeno
  VNITRNI_CLENENI_BUDOVY_NEBO_STAVBY: 101545, // vnitřní členění budovy nebo stavby
} as const;
export type TypHraniceVnitrniCleneniBuValue = (typeof TypHraniceVnitrniCleneniBu)[keyof typeof TypHraniceVnitrniCleneniBu];

/** TypBalizy */
export const TypBalizy = {
  PREPINATELNA: 100151, // přepínatelná
  NEPREPINATELNA: 100152, // nepřepínatelná
  NEZJISTENO: 100154, // nezjištěno
} as const;
export type TypBalizyValue = (typeof TypBalizy)[keyof typeof TypBalizy];

/** TypDilatace */
export const TypDilatace = {
  KDZ_S_PEVNOU_KOLENOVOU_KOLEJNICI: 100156, // KDZ s pevnou kolenovou kolejnicí
  KDZ_S_PEVNOU_JAZYKOVOU_KOLEJNICI: 100157, // KDZ s pevnou jazykovou kolejnicí
  NEZJISTENO: 100158, // nezjištěno
} as const;
export type TypDilataceValue = (typeof TypDilatace)[keyof typeof TypDilatace];

/** TypUhelniku */
export const TypUhelniku = {
  POJISTNY_UHELNIK: 100159, // pojistný úhelník
  ZAJISTOVACI_UHELNIK: 100160, // zajišťovací úhelník
  NEZJISTENO: 100161, // nezjištěno
} as const;
export type TypUhelnikuValue = (typeof TypUhelniku)[keyof typeof TypUhelniku];

/** TypIzolovaneKolejnice */
export const TypIzolovaneKolejnice = {
  PRAVA: 100162, // pravá
  LEVA: 100163, // levá
  NEZJISTENO: 100164, // nezjištěno
} as const;
export type TypIzolovaneKolejniceValue = (typeof TypIzolovaneKolejnice)[keyof typeof TypIzolovaneKolejnice];

/** TypBrzdy */
export const TypBrzdy = {
  KOLEJOVA_BRZDA_JEDNOSTRANNA_PRAVA: 100165, // kolejová brzda jednostranná pravá
  KOLEJOVA_BRZDA_JEDNOSTRANNA_LEVA: 100166, // kolejová brzda jednostranná levá
  KOLEJOVA_BRZDA_OBOUSTRANNA: 100167, // kolejová brzda oboustranná
  NEZJISTENO: 100168, // nezjištěno
} as const;
export type TypBrzdyValue = (typeof TypBrzdy)[keyof typeof TypBrzdy];

/** TypZarazkoveBrzdy */
export const TypZarazkoveBrzdy = {
  ZARAZKOVA_BRZDA_ZPRAVA: 100169, // zarážková brzda zprava
  ZARAZKOVA_BRZDA_ZLEVA: 100170, // zarážková brzda zleva
  NEZJISTENO: 100171, // nezjištěno
} as const;
export type TypZarazkoveBrzdyValue = (typeof TypZarazkoveBrzdy)[keyof typeof TypZarazkoveBrzdy];

/** TypVykolejky */
export const TypVykolejky = {
  LEVOSTRANNA: 100172, // levostranná
  PRAVOSTRANNA: 100173, // pravostranná
  NEZJISTENO: 100174, // nezjištěno
  OBOUSTRANNA: 101531, // oboustranná
} as const;
export type TypVykolejkyValue = (typeof TypVykolejky)[keyof typeof TypVykolejky];

/** NavestTelesoVykolejky */
export const NavestTelesoVykolejky = {
  S_NAVEST_TELESEM: 100175, // s návěst. tělesem
  BEZ_NAVEST_TELESA: 100176, // bez návěst. tělesa
  NEZJISTENO: 100177, // nezjištěno
} as const;
export type NavestTelesoVykolejkyValue = (typeof NavestTelesoVykolejky)[keyof typeof NavestTelesoVykolejky];

/** PopisCidlaSnimacePrepinace */
export const PopisCidlaSnimacePrepinace = {
  ATMOSFERICKY_SENZOR: 100180, // atmosférický senzor
  RADAR: 100183, // radar
  SOLARNI_PANEL: 100186, // solární panel
  DETEKTOR_HORKOBEZNOSTI: 100187, // detektor horkoběžnosti
  NEZJISTENO: 100188, // nezjištěno
  SOUMRAKOVE_CIDLO: 101546, // soumrakové čidlo
} as const;
export type PopisCidlaSnimacePrepinaceValue = (typeof PopisCidlaSnimacePrepinace)[keyof typeof PopisCidlaSnimacePrepinace];

/** TypVystrazniku */
export const TypVystrazniku = {
  NEZJISTENO: 100196, // nezjištěno
  S_POZITIVNI_SIGNALIZACI: 101012, // s pozitivní signalizací
  BEZ_POZITIVNI_SIGNALIZACE: 101013, // bez pozitivní signalizace
} as const;
export type TypVystraznikuValue = (typeof TypVystrazniku)[keyof typeof TypVystrazniku];

/** TypPohonuMechanickychZavor */
export const TypPohonuMechanickychZavor = {
  RUCNI_POHON: 100197, // ruční pohon
  MOTOROVY_POHON: 100198, // motorový pohon
  NEZJISTENO: 100199, // nezjištěno
} as const;
export type TypPohonuMechanickychZavorValue = (typeof TypPohonuMechanickychZavor)[keyof typeof TypPohonuMechanickychZavor];

/** TypVystraznehoKrizeProPrej */
export const TypVystraznehoKrizeProPrej = {
  JEDNOKOLEJNY: 100203, // jednokolejný
  VICEKOLEJNY: 100204, // vícekolejný
  NEZJISTENO: 100206, // nezjištěno
} as const;
export type TypVystraznehoKrizeProPrejValue = (typeof TypVystraznehoKrizeProPrej)[keyof typeof TypVystraznehoKrizeProPrej];

/** UmisteniNavestidlaTabulky */
export const UmisteniNavestidlaTabulky = {
  NA_STOZARU: 100775, // na stožáru
  NA_SLOUPKU: 100776, // na sloupku
  NA_PODSTAVCI_TRPASLICI_NAVESTIDLO: 100777, // na podstavci (trpasličí návěstidlo)
  NA_LAVCE_KRAKORCI_BRANE: 100778, // na lávce/krakorci/bráně
  ZAVESENE_POD_ZASTRESENIM: 100779, // zavěšené pod zastřešením
  ZAVESENE_NA_NOSNEM_LANE: 100780, // zavěšené na nosném laně
  NEURCENO: 100781, // neurčeno
  NA_KONZOLE: 101111, // na konzole
  NA_ZDI: 101133, // na zdi
  JINE: 101134, // jiné
} as const;
export type UmisteniNavestidlaTabulkyValue = (typeof UmisteniNavestidlaTabulky)[keyof typeof UmisteniNavestidlaTabulky];

/** TypNavestiRychlostnikuPredv */
export const TypNavestiRychlostnikuPredv = {
  RYCHLOSTNIK_N_BILA_DESKA: 100207, // rychlostník N (bílá deska)
  RYCHLOSTNIK_N_S_TABULKOU_LOKOMOTIVY: 100208, // rychlostník N s tabulkou lokomotivy
  RYCHLOSTNIK_3_BILY_TERC: 100209, // rychlostník 3 (bílý terč)
  RYCHLOSTNIK_N_S_PRUHY: 100210, // rychlostník N s pruhy
  RYCHLOSTNIK_N_S_PRUHY_A_S_TABULKOU_LOKOMOTIVY: 100211, // rychlostník N s pruhy a s tabulkou lokomotivy
  RYCHLOSTNIK_R_BILA_DESKA_S_RAMENEM: 100212, // rychlostník R (bílá deska s ramenem)
  RYCHLOSTNIK_NS: 100213, // rychlostník NS
  NAVEST_OCEKAVEJTE_KONEC_PLATNOSTI_RYCHLOSTNIKU_NS: 100214, // návěst Očekávejte konec platnosti rychlostníků NS
  NAVEST_KONEC_PLATNOSTI_RYCHLOSTNIKU_NS: 100215, // návěst Konec platnosti rychlostníků NS
  PREDVESTNIK_OCEKAVEJTE_TRATOVOU_RYCHLOST_3_ZLUTY_TERC: 100216, // předvěstník Očekávejte traťovou rychlost 3 (žlutý terč)
  PREDVESTNIK_OCEKAVEJTE_TRATOVOU_RYCHLOST_N_ZLUTY_STIT: 100217, // předvěstník Očekávejte traťovou rychlost N (žlutý štít)
  PREDVESTNIK_OCEKAVEJTE_TRATOVOU_RYCHLOST_R_ZLUTY_STIT_S_RAMENEM: 100218, // předvěstník Očekávejte traťovou rychlost R (žlutý štít s ramenem)
  PREDVESTNIK_OCEKAVEJTE_TRATOVOU_RYCHLOST_NS: 100219, // předvěstník Očekávejte traťovou rychlost NS
  NEZJISTENO: 100221, // nezjištěno
} as const;
export type TypNavestiRychlostnikuPredvValue = (typeof TypNavestiRychlostnikuPredv)[keyof typeof TypNavestiRychlostnikuPredv];

/** TypSvetelnehoNavestidla */
export const TypSvetelnehoNavestidla = {
  SVETELNE: 100222, // světelné
  VYCKAVACI_NAVESTIDLO: 100227, // vyčkávací návěstidlo
  PREJEZDNIK: 100230, // přejezdník
  NEZJISTENO: 100231, // nezjištěno
  PRO_ELEKTRICKY_PROVOZ: 101522, // pro elektrický provoz
} as const;
export type TypSvetelnehoNavestidlaValue = (typeof TypSvetelnehoNavestidla)[keyof typeof TypSvetelnehoNavestidla];

/** TypMechanickehoNavestidla */
export const TypMechanickehoNavestidla = {
  MECHANICKA_PREDVEST: 100232, // mechanická předvěst
  NAVESTIDLO_MECHANICKE_JEDNORAMENNE: 100233, // návěstidlo mechanické jednoramenné
  NAVESTIDLO_MECHANICKE_DVOURAMENNE: 100234, // návěstidlo mechanické dvouramenné
  MECHANICKE_NAVESTIDLO_SERADOVACI: 100235, // mechanické návěstidlo seřaďovací
  MECHANICKE_NAVESTIDLO_PRO_UZAVERU_KOLEJE: 100236, // mechanické návěstidlo pro uzávěru koleje
  NEZJISTENO: 100237, // nezjištěno
  MECHANICKE_NAVESTIDLO_S_PRIVOLAVACIM_NAVESTIDLEM_3_SVETLA: 101136, // mechanické návěstidlo s přivolávacím návěstidlem - 3 světla
  MECHANICKE_NAVESTIDLO_S_PRIVOLAVACIM_NAVESTIDLEM_1_SVETLO: 101137, // mechanické návěstidlo s přivolávacím návěstidlem - 1 světlo
} as const;
export type TypMechanickehoNavestidlaValue = (typeof TypMechanickehoNavestidla)[keyof typeof TypMechanickehoNavestidla];

/** TypNameznikuKoncovniku */
export const TypNameznikuKoncovniku = {
  NAMEZNIK: 100451, // námezník
  KONCOVNIK: 100452, // koncovník
  NEZJISTENO: 100453, // nezjištěno
} as const;
export type TypNameznikuKoncovnikuValue = (typeof TypNameznikuKoncovniku)[keyof typeof TypNameznikuKoncovniku];

/** TypDrhliku */
export const TypDrhliku = {
  ZAPNETE_CISTICI_ZARIZENI: 100454, // zapněte čistící zařízení
  VYPNETE_CISTICI_ZARIZENI: 100455, // vypněte čistící zařízení
  NEZJISTENO: 100456, // nezjištěno
  OBOUSTRANNY: 101163, // oboustranný
} as const;
export type TypDrhlikuValue = (typeof TypDrhliku)[keyof typeof TypDrhliku];

/** TypOvladaniZabezpecovacihoZ */
export const TypOvladaniZabezpecovacihoZ = {
  POMOCNE_STAVEDLO: 100459, // pomocné stavědlo
  NEZJISTENO: 100462, // nezjištěno
} as const;
export type TypOvladaniZabezpecovacihoZValue = (typeof TypOvladaniZabezpecovacihoZ)[keyof typeof TypOvladaniZabezpecovacihoZ];

/** TypDelkyNastupiste */
export const TypDelkyNastupiste = {
  ZAMERENA: 100501, // zaměřená
  EVIDENCNI: 100502, // evidenční
  NEURCENA: 100503, // neurčená
} as const;
export type TypDelkyNastupisteValue = (typeof TypDelkyNastupiste)[keyof typeof TypDelkyNastupiste];

/** TypVystraznehoZarizeniNaNa */
export const TypVystraznehoZarizeniNaNa = {
  VYSTRAZNE_ZARIZENI_PRO_CESTUJICI_PRO_PRECHOD_KOLEJI_NA_NAST_SIGNALIZACE_VZPK: 100498, // výstražné zařízení pro cestující pro přechod kolejí na nást.(signalizace VZPK)
  ZAVORA_VYSTRAZNEHO_ZARIZENI_PRO_PRECHOD_KOLEJI_NA_NAST: 100499, // závora výstražného zařízení pro přechod kolejí na nást.
  NEZJISTENO: 100500, // nezjištěno
} as const;
export type TypVystraznehoZarizeniNaNaValue = (typeof TypVystraznehoZarizeniNaNa)[keyof typeof TypVystraznehoZarizeniNaNa];

/** TypZarazedla */
export const TypZarazedla = {
  KOLEJNICOVE: 100504, // kolejnicové
  DYNAMICKE: 100505, // dynamické
  BETONOVE: 100506, // betonové
  ZEMNI: 100507, // zemní
  PRICNY_PRAZEC: 100508, // příčný pražec
  NEZJISTENO: 100509, // nezjištěno
} as const;
export type TypZarazedlaValue = (typeof TypZarazedla)[keyof typeof TypZarazedla];

/** TypZvlastniPlochyLinieVOs */
export const TypZvlastniPlochyLinieVOs = {
  GUMOVY_ABSORBER_HLUKU: 100510, // gumový absorbér hluku
  GUMOVA_ZABRANA_PROTI_PRECHAZENI: 100511, // gumová zábrana proti přecházení
  ZABRANA_PROTI_PREJETI_PREJEZDU: 100512, // zábrana proti přejetí přejezdu
  NEZJISTENO: 100514, // nezjištěno
} as const;
export type TypZvlastniPlochyLinieVOsValue = (typeof TypZvlastniPlochyLinieVOs)[keyof typeof TypZvlastniPlochyLinieVOs];

/** TypSchodiste */
export const TypSchodiste = {
  SCHODY_MIMO_BUDOVY: 100740, // schody mimo budovy
  SCHODY_U_BUDOVY: 100741, // schody u budovy
  NEURCENO: 100742, // neurčeno
} as const;
export type TypSchodisteValue = (typeof TypSchodiste)[keyof typeof TypSchodiste];

/** TypZastreseni */
export const TypZastreseni = {
  ZASTRESENI_NASTUPISTE: 100490, // zastřešení nástupiště
  ZASTRESENI_OSTATNI: 100491, // zastřešení ostatní
  NEURCENO: 100494, // neurčeno
} as const;
export type TypZastreseniValue = (typeof TypZastreseni)[keyof typeof TypZastreseni];

/** MaterialRampy */
export const MaterialRampy = {
  DREVENA: 100474, // dřevěná
  KOVOVA: 100475, // kovová
  BETONOVA: 100476, // betonová
  NEZJISTENO: 100477, // nezjištěno
  KAMENNA: 101523, // kamenná
} as const;
export type MaterialRampyValue = (typeof MaterialRampy)[keyof typeof MaterialRampy];

/** TypPatkyDeskyMonolituPilir */
export const TypPatkyDeskyMonolituPilir = {
  SOKL_PATKA: 100759, // sokl, patka
  PILIR_DESKA_MONOLIT_NAPR_SOUCASTI_MOSTU: 100760, // pilíř, deska, monolit (např. součásti mostu)
  NEURCENO: 100761, // neurčeno
} as const;
export type TypPatkyDeskyMonolituPilirValue = (typeof TypPatkyDeskyMonolituPilir)[keyof typeof TypPatkyDeskyMonolituPilir];

/** TypSloupuTechnologickeKonst */
export const TypSloupuTechnologickeKonst = {
  PODPERA_ZASTRESENI_NASTUPISTE: 100495, // podpěra zastřešení nástupiště
  PODPERA_ZASTRESENI_PODCHODNE_CASTI_BUDOVY: 100496, // podpěra zastřešení (podchodné části) budovy
  NEURCENO: 100497, // neurčeno
  PODPERA_TECHNOLOGICKE_KONSTRUKCE: 101524, // podpěra technologické konstrukce
} as const;
export type TypSloupuTechnologickeKonstValue = (typeof TypSloupuTechnologickeKonst)[keyof typeof TypSloupuTechnologickeKonst];

/** TypStavbyProZpevneniPovrch */
export const TypStavbyProZpevneniPovrch = {
  ZAJISTENI_SKAL: 100515, // zajištění skal
  ZPEVNENY_A_UPRAVENY_SVAH: 100516, // zpevněný a upravený svah
  SVAHOVA_DLAZBA: 100517, // svahová dlažba
  NEZJISTENO: 100518, // nezjištěno
} as const;
export type TypStavbyProZpevneniPovrchValue = (typeof TypStavbyProZpevneniPovrch)[keyof typeof TypStavbyProZpevneniPovrch];

/** TypVodnihoToku */
export const TypVodnihoToku = {
  TRVALY: 100616, // trvalý
  OBCASNY_SUCHY_PRIKOP: 100617, // občasný, suchý příkop
  NEURCENO: 100618, // neurčeno
} as const;
export type TypVodnihoTokuValue = (typeof TypVodnihoToku)[keyof typeof TypVodnihoToku];

/** TypHospodarskyNevyuzivanePl */
export const TypHospodarskyNevyuzivanePl = {
  NEPLODNA: 100610, // neplodná
  MOCAL_RASELINISTE_SLATINA: 100611, // močál, rašeliniště, slatina
  JINA: 100615, // jiná
  NEZJISTENO: 101008, // nezjištěno
} as const;
export type TypHospodarskyNevyuzivanePlValue = (typeof TypHospodarskyNevyuzivanePl)[keyof typeof TypHospodarskyNevyuzivanePl];

/** TypZarizeniNeurcenehoTrubko */
export const TypZarizeniNeurcenehoTrubko = {
  VZDUSNIK_BEZ_ROZLISENI: 100668, // vzdušník bez rozlišení
  KRUHOVY_ZNAK_NA_POVRCHU_POKLOP_BEZ_ROZLISENI_MALY: 100669, // kruhový znak na povrchu (poklop bez rozlišení malý)
  OVALNY_ZNAK_NA_POVRCHU_POKLOP_BEZ_ROZLISENI_MALY: 100670, // oválný znak na povrchu (poklop bez rozlišení malý)
  MERIDLO_VODOMER_PLYNOMER_APOD: 100671, // měřidlo - Vodoměr,plynoměr apod.
  VYVODY_OSTATNICH_POTRUBI: 100672, // vývody ostatních potrubí
  ODVZDUSNOVAC_POTRUBI_BEZ_URCENI: 100673, // odvzdušňovač potrubí - bez určení
  SACHTA_BEZ_ROZLISENI_PRULEZNY_KRUHOVY_POKLOP: 100674, // šachta bez rozlišení (průlezný kruhový poklop)
  SACHTA_BEZ_ROZLISENI_PRULEZNY_HRANATY_POKLOP: 100675, // šachta bez rozlišení (průlezný hranatý poklop)
  ARMATURA_NEURCENA: 100676, // armatura neurčená
  VYTOKOVY_STOJAN_NEURCENY: 100678, // výtokový stojan - neurčený
  NEZJISTENO: 100680, // nezjištěno
} as const;
export type TypZarizeniNeurcenehoTrubkoValue = (typeof TypZarizeniNeurcenehoTrubko)[keyof typeof TypZarizeniNeurcenehoTrubko];

/** TypBoduKolejnicovehoPasu */
export const TypBoduKolejnicovehoPasu = {
  BOD_NEPREVYSENEHO_KOLEJNICOVEHO_PASU: 100772, // bod nepřevýšeného kolejnicového pásu
  BOD_PREVYSENEHO_KOLEJNICOVEHO_PASU: 100773, // bod převýšeného kolejnicového pásu
  NEURCENO: 100774, // neurčeno
} as const;
export type TypBoduKolejnicovehoPasuValue = (typeof TypBoduKolejnicovehoPasu)[keyof typeof TypBoduKolejnicovehoPasu];

/** TypVytahu */
export const TypVytahu = {
  BEZNY_VYTAH: 101016, // běžný výtah
  VYTAH_PRO_IMOBILNI: 101017, // výtah pro imobilní
  NEURCENO: 101018, // neurčeno
} as const;
export type TypVytahuValue = (typeof TypVytahu)[keyof typeof TypVytahu];

/** TypVahy */
export const TypVahy = {
  KOLEJOVA_VAHA: 100734, // kolejová váha
  SILNICNI_VAHA: 100735, // silniční váha
  NEURCENO: 100736, // neurčeno
} as const;
export type TypVahyValue = (typeof TypVahy)[keyof typeof TypVahy];

/** TypPlochyZeleznice */
export const TypPlochyZeleznice = {
  PEVNA_JIZDNI_DRAHA: 101019, // pevná jízdní dráha
  KOLEJOVE_STERKOVE_LOZE: 101020, // kolejové (štěrkové) lože
  DRAZNI_STEZKA: 101021, // drážní stezka
  PREJEZD: 101022, // přejezd
  PRECHOD: 101023, // přechod
  NEZJISTENO: 101024, // nezjištěno
  JINY: 101514, // jiný
} as const;
export type TypPlochyZelezniceValue = (typeof TypPlochyZeleznice)[keyof typeof TypPlochyZeleznice];

/** SpravceTISZ */
export const SpravceTISZ = {
  ST_OR_BRNO: 101038, // ST OŘ Brno
  ST_JIHLAVA_OR_BRNO: 101039, // ST Jihlava OŘ Brno
  ST_BLIZE_NEURCENO_OR_BRNO: 101040, // ST (blíže neurčeno) OŘ Brno
  SSZT_BRNO_OR_BRNO: 101041, // SSZT Brno OŘ Brno
  SSZT_JIHLAVA_OR_BRNO: 101042, // SSZT Jihlava OŘ Brno
  SSZT_BLIZE_NEURCENO_OR_BRNO: 101043, // SSZT (blíže neurčeno) OŘ Brno
  SEE_OR_BRNO: 101044, // SEE OŘ Brno
  SMT_OR_BRNO: 101045, // SMT OŘ Brno
  SPS_OR_BRNO: 101046, // SPS OŘ Brno
  ST_HRADEC_KRALOVE_OR_HRADEC_KRALOVE: 101047, // ST Hradec Králové OŘ Hradec Králové
  ST_PARDUBICE_OR_HRADEC_KRALOVE: 101048, // ST Pardubice OŘ Hradec Králové
  ST_LIBEREC_OR_HRADEC_KRALOVE: 101049, // ST Liberec OŘ Hradec Králové
  ST_BLIZE_NEURCENO_OR_HRADEC_KRALOVE: 101050, // ST (blíže neurčeno) OŘ Hradec Králové
  SSZT_HRADEC_KRALOVE_OR_HRADEC_KRALOVE: 101051, // SSZT Hradec Králové OŘ Hradec Králové
  SSZT_PARDUBICE_OR_HRADEC_KRALOVE: 101052, // SSZT Pardubice OŘ Hradec Králové
  SSZT_BLIZE_NEURCENO_OR_HRADEC_KRALOVE: 101053, // SSZT (blíže neurčeno) OŘ Hradec Králové
  SEE_HK_OR_HRADEC_KRALOVE: 101054, // SEE HK OŘ Hradec Králové
  SMT_OR_HRADEC_KRALOVE: 101055, // SMT OŘ Hradec Králové
  SPS_OR_HRADEC_KRALOVE: 101056, // SPS OŘ Hradec Králové
  ST_OSTRAVA_OR_OSTRAVA: 101057, // ST Ostrava OŘ Ostrava
  ST_OLOMOUC_OR_OSTRAVA: 101058, // ST Olomouc OŘ Ostrava
  ST_BLIZE_NEURCENO_OR_OSTRAVA: 101059, // ST (blíže neurčeno) OŘ Ostrava
  SSZT_OSTRAVA_OR_OSTRAVA: 101060, // SSZT Ostrava OŘ Ostrava
  SSZT_OLOMOUC_OR_OSTRAVA: 101061, // SSZT Olomouc OŘ Ostrava
  SSZT_BLIZE_NEURCENO_OR_OSTRAVA: 101062, // SSZT (blíže neurčeno) OŘ Ostrava
  SEE_OSTRAVA_OR_OSTRAVA: 101063, // SEE Ostrava OŘ Ostrava
  SEE_OLOMOUC_OR_OSTRAVA: 101064, // SEE Olomouc OŘ Ostrava
  SEE_BLIZE_NEURCENO_OR_OSTRAVA: 101065, // SEE (blíže neurčeno) OŘ Ostrava
  SMT_OR_OSTRAVA: 101066, // SMT OŘ Ostrava
  SPS_OSTRAVA_OR_OSTRAVA: 101067, // SPS Ostrava OŘ Ostrava
  SPS_OLOMOUC_OR_OSTRAVA: 101068, // SPS Olomouc  OŘ Ostrava
  SPS_OR_OSTRAVA: 101069, // SPS OŘ Ostrava
  ST_PLZEN_OR_PLZEN: 101070, // ST Plzeň OŘ Plzeň
  ST_CESKE_BUDEJOVICE_OR_PLZEN: 101071, // ST České Budějovice OŘ Plzeň
  ST_BLIZE_NEURCENO_OR_PLZEN: 101072, // ST (blíže neurčeno) OŘ Plzeň
  SSZT_PLZEN_OR_PLZEN: 101073, // SSZT Plzeň OŘ Plzeň
  SSZT_CESKE_BUDEJOVICE_OR_PLZEN: 101074, // SSZT České Budějovice OŘ Plzeň
  SSZT_BLIZE_NEURCENO_OR_PLZEN: 101075, // SSZT (blíže neurčeno) OŘ Plzeň
  SEE_PLZEN_OR_PLZEN: 101076, // SEE Plzeň OŘ Plzeň
  SEE_CESKE_BUDEJOVICE_OR_PLZEN: 101077, // SEE České Budějovice OŘ Plzeň
  SEE_OR_PLZEN: 101078, // SEE OŘ Plzeň
  SMT_OR_PLZEN: 101079, // SMT OŘ Plzeň
  SPS_PLZEN_OR_PLZEN: 101080, // SPS Plzeň OŘ Plzeň
  SPS_CESKE_BUDEJOVICE_OR_PLZEN: 101081, // SPS České Budějovice OŘ Plzeň
  SPS_OR_PLZEN: 101082, // SPS OŘ Plzeň
  ST_PRAHA_ZAPAD_OR_PRAHA: 101083, // ST Praha západ OŘ Praha
  ST_PRAHA_VYCHOD_OR_PRAHA: 101084, // ST Praha východ OŘ Praha
  ST_BLIZE_NEURCENO_OR_PRAHA: 101085, // ST (blíže neurčeno) OŘ Praha
  SSZT_PRAHA_ZAPAD_OR_PRAHA: 101086, // SSZT Praha západ OŘ Praha
  SSZT_PRAHA_VYCHOD_OR_PRAHA: 101087, // SSZT Praha východ OŘ Praha
  SSZT_BLIZE_NEURCENO_OR_PRAHA: 101088, // SSZT (blíže neurčeno) OŘ Praha
  SEE_OR_PRAHA: 101089, // SEE OŘ Praha
  SMT_OR_PRAHA: 101090, // SMT OŘ Praha
  SPS_OR_PRAHA: 101091, // SPS OŘ Praha
  ST_USTI_NAD_LABEM_OR_USTI_NAD_LABEM: 101092, // ST Ústí nad Labem OŘ Ústí nad Labem
  ST_MOST_OR_USTI_NAD_LABEM: 101093, // ST Most OŘ Ústí nad Labem
  ST_KARLOVY_VARY_OR_USTI_NAD_LABEM: 101094, // ST Karlovy Vary OŘ Ústí nad Labem
  ST_BLIZE_NEURCENO_OR_USTI_NAD_LABEM: 101095, // ST (blíže neurčeno) OŘ Ústí nad Labem
  SSZT_OBLAST_UL_OR_USTI_NAD_LABEM: 101096, // SSZT oblast UL OŘ Ústí nad Labem
  SSZT_OBLAST_MOST_OR_USTI_NAD_LABEM: 101097, // SSZT oblast Most OŘ Ústí nad Labem
  SSZT_OBLAST_KARLOVY_VARY_OR_USTI_NAD_LABEM: 101098, // SSZT oblast Karlovy Vary OŘ Ústí nad Labem
  SSZT_OR_USTI_NAD_LABEM: 101099, // SSZT OŘ Ústí nad Labem
  SEE_OBLAST_UL_OR_USTI_NAD_LABEM: 101100, // SEE oblast UL OŘ Ústí nad Labem
  SEE_OBLAST_MOST_OR_USTI_NAD_LABEM: 101101, // SEE oblast Most OŘ Ústí nad Labem
  SEE_OBLAST_KARLOVY_VARY_OR_USTI_NAD_LABEM: 101102, // SEE oblast Karlovy Vary OŘ Ústí nad Labem
  SEE_OR_USTI_NAD_LABEM: 101103, // SEE OŘ Ústí nad Labem
  SMT_OR_USTI_NAD_LABEM: 101104, // SMT OŘ Ústí nad Labem
  SPS_OR_USTI_NAD_LABEM: 101105, // SPS OŘ Ústí nad Labem
  NEURCENO: 101129, // neurčeno
  CTD: 101374, // CTD
  SZT: 101375, // SŽT
  CIZI: 101376, // cizí
} as const;
export type SpravceTISZValue = (typeof SpravceTISZ)[keyof typeof SpravceTISZ];

/** TypNavestidlaTabulka */
export const TypNavestidlaTabulka = {
  OCEKAVEJTE_OTEVRENY_PREJEZD_STIT_OP: 100248, // očekávejte otevřený přejezd (štít Op)
  NAVESTIDLO_PRO_ELEKTR_PROVOZ: 100249, // návěstidlo pro elektr. provoz
  ZKRACENA_VZDALENOST: 100250, // zkrácená vzdálenost
  VYCKAVACI_NAVESTIDLO_BEZ_SVETLA: 100251, // vyčkávací návěstidlo bez světla
  VZDAL_UPOZORNOV_PRED_PREDV_VJEZD_NAVESTIDEL_1_PRUH: 100253, // vzdál.upozorňov.před předv.vjezd.návěstidel 1 pruh
  VZDAL_UPOZORNOV_PRED_PREDV_VJEZD_NAVESTIDEL_2_PRUHY: 100254, // vzdál.upozorňov.před předv.vjezd.návěstidel 2 pruhy
  VZDAL_UPOZORNOV_PRED_PREDV_VJEZD_NAVESTIDEL_3_PRUHY: 100255, // vzdál.upozorňov.před předv.vjezd.návěstidel 3 pruhy
  VZDAL_UPOZORNOV_PRED_PREDV_VJEZD_NAVESTIDEL_4_PRUHY: 100256, // vzdál.upozorňov.před předv.vjezd.návěstidel 4 pruhy
  VZDAL_UPOZORNOV_PRED_PREDV_ODDILOVEHO_A_KRYCIHO_NAVEST_1_PRUH: 100257, // vzdál.upozorňov.před předv.oddílového.a krycího.návěst.1 pruh
  VZDAL_UPOZORNOV_PRED_PREDV_ODD_A_KRYC_NAVEST_2_PRUHY: 100258, // vzdál.upozorňov.před předv.odd.a kryc.návěst.2 pruhy
  VZDAL_UPOZORNOV_PRED_PREDV_ODD_A_KRYC_NAVEST_3_PRUHY: 100259, // vzdál.upozorňov.před předv.odd.a kryc.návěst.3 pruhy
  VZDAL_UPOZORNOV_PRED_PREDV_ODD_A_KRYC_NAVEST_4_PRUHY: 100260, // vzdál.upozorňov.před předv.odd.a kryc.návěst.4 pruhy
  VZDAL_UPOZORNOV_NA_HLAVNI_NAVESTIDLO_1_TROJUHELNIK: 100261, // vzdál.upozorňov. na hlavní návěstidlo 1 trojúhelník
  VZDAL_UPOZORNOV_NA_HLAVNI_NAVESTIDLO_2_TROJUHELNIK: 100262, // vzdál.upozorňov. na hlavní návěstidlo 2 trojúhelník
  VZDAL_UPOZORNOV_NA_HLAVNI_NAVESTIDLO_3_TROJUHELNIK: 100263, // vzdál.upozorňov. na hlavní návěstidlo 3 trojúhelník
  OZNACENI_KOLEJISTE_S_VLOZENYM_NAVESTIDLEM: 100264, // označení kolejiště s vloženým návěstidlem
  NAVEST_KONEC_NASTUPISTE: 100265, // návěst konec nástupiště
  NAVEST_HRANICE_DOPRAVNY_LICHOBEZNIKOVA_TABULKA: 100266, // návěst Hranice dopravny (lichoběžníková tabulka)
  NAVEST_VLAK_SE_BLIZI_K_ZASTAVCE_TABULE_PRED_ZASTAVKOU: 100267, // návěst Vlak se blíží k zastávce (tabule před zastávkou)
  NAVEST_VYSTRAHA_TABULKA_S_KRIZEM: 100400, // návěst Výstraha (tabulka s křížem)
  NAVEST_ZACATEK_OZUBNICE: 100401, // návěst začátek ozubnice
  NAVEST_KONEC_OZUBNICE: 100402, // návěst konec ozubnice
  NAVEST_SKLONOVNIK_ROVINA: 100403, // návěst sklonovník rovina
  NAVEST_SKLONOVNIK_KLESANI_STOUPANI: 100404, // návěst sklonovník klesání - stoupání
  NAVEST_MISTO_ZASTAVENI: 100405, // návěst místo zastavení
  NAVEST_STANOVISTE_SAM_PREDVESTI_VJ_ODJ_NEBO_CEST_NAV: 100406, // návěst stanoviště sam.předvěsti vj.,odj. nebo cest.náv.
  NAVEST_STANOVISTE_SAM_PREDVESTI_ODDIL_NEBO_KRYCIHO_NAV: 100407, // návěst stanoviště sam.předvěsti oddíl. nebo krycího náv.
  NAVEST_HLAVNI_NAVESTIDLO_SLOUCENO_S_PREDVESTI: 100408, // návěst hlavní návěstidlo sloučeno s předvěstí
  PREJEZDNIK_BEZ_SVETLA: 100409, // přejezdník bez světla
  NAVEST_VLAK_SE_BLIZI_KE_KMENOVEMU_PREJEZDNIKU: 100410, // návěst Vlak se blíží ke kmenovému přejezdníku
  NAVEST_ZACNETE_PRACI_PLUHU: 100411, // návěst začněte práci pluhu
  NAVEST_ZASTAVTE_PRACI_PLUHU: 100412, // návěst zastavte práci pluhu
  NAVEST_PREPNETE_KANALOVOU_SKUPINU: 100413, // návěst Přepněte kanálovou skupinu
  NAVEST_PRIPRAVTE_RADIOVE_ZARIZENI_GSM_R_K_REGISTRACI: 100414, // návěst připravte rádiové zařízení GSM-R k registraci
  NAVEST_ZACATEK_RADIOVEHO_SYSTEMU_GSM_R: 100415, // návěst Začátek rádiového systému GSM-R
  NAVEST_KONEC_ANALOGOVEHO_VLAKOVEHO_RADIOVEHO_SYSTEMU: 100416, // návěst Konec analogového vlakového rádiového systému
  NAVEST_KONEC_RADIOVEHO_SYSTEMU_GSM_R: 100417, // návěst Konec rádiového systému GSM-R
  NAVEST_BEZ_PRENOSU_KODU_VZ: 100418, // návěst bez přenosu kódu VZ
  HRANICE_PRO_NAVRAT_VOZIDEL_ZE_SIRE_TRATI: 100419, // Hranice pro návrat vozidel ze širé trati
  NAVEST_ZACATEK_PRACE_POSTRKU: 100420, // návěst začátek práce postrku
  INDIKATOROVA_TABULKA_S_SIPKOU: 100422, // indikátorová tabulka s šipkou
  SMEROVA_SIPKA_LEVA: 100423, // směrová šipka - levá
  SMEROVA_SIPKA_ROVNE: 100424, // směrová šipka - rovně
  NAVEST_ZACATEK_USEKU_S_PRENOSEM_KODU_VZ_PODLE_NAVESTI_SAMOSTATNE_PREDVESTI: 100425, // návěst začátek úseku s přenosem kódu VZ podle návěsti samostatné předvěsti
  NAVEST_ZACATEK_USEKU_S_PRENOSEM_KODU_VZ_PODLE_NAVESTI_HLAVNIHO_NAVESTIDLA: 100426, // návěst začátek úseku s přenosem kódu VZ podle návěsti hlavního návěstidla
  NAVEST_PREDVEST_ZMENY_UROVNE_ETCS: 100427, // návěst předvěst změny úrovně ETCS
  NAVEST_ZMENA_UROVNE_ETCS: 100428, // návěst změna úrovně ETCS
  NAVEST_VSTUP_DO_OBLASTI_ETCS_UROVNE_2: 100429, // návěst vstup do oblasti ETCS úrovně 2
  NAVEST_VYSTUPNI_HRANICE_OBLASTI_ETCS: 100430, // návěst výstupní hranice oblasti ETCS
  STOP_ZNACKA_ETCS_SIPKA_LEVA: 100431, // stop značka ETCS-šipka levá
  STOP_ZNACKA_ETCS_SIPKA_PRAVA: 100432, // stop značka ETCS-šipka pravá
  STOP_ZNACKA_ETCS_SIPKA_DOLU: 100433, // stop značka ETCS-šipka dolů
  LOKALIZACNI_ZNACKA_ETCS_SIPKA_LEVA: 100434, // lokalizační značka ETCS-šipka levá
  LOKALIZACNI_ZNACKA_ETCS_SIPKA_PRAVA: 100435, // lokalizační značka ETCS-šipka pravá
  LOKALIZACNI_ZNACKA_ETCS_SIPKA_DOLU: 100436, // lokalizační značka ETCS-šipka dolů
  NAVESTIDLO_S_NAV_PREPNETE_VZ_NA_KMITOCET_50HZ: 100437, // návěstidlo s náv. - přepněte VZ na kmitočet 50Hz
  NAVESTIDLO_S_NAV_PREPNETE_VZ_NA_KMITOCET_75HZ: 100438, // návěstidlo s náv. - přepněte VZ na kmitočet 75Hz
  NAVEST_CISLO_DOPRAVNY: 100439, // návěst Číslo dopravny
  VYSTRAZNY_KOLIK: 100440, // výstražný kolík
  NAVEST_POMALE_JIZDY: 100441, // návěst pomalé jízdy
  NAVEST_OCEKAVEJTE_POMALOU_JIZDU_PREDVESTNI_STIT: 100442, // návěst Očekávejte pomalou jízdu (předvěstní štít)
  UPOZORNOVADLO_NAVESTIDLO_PREDVEST_PREJEZDNIK_NA_OPACNE_STRANE: 100443, // upozorňovadlo návěstidlo,předvěst,přejezdník na opačné straně
  TABULE_S_CERVENYM_BLESKEM: 100444, // tabule s červeným bleskem
  NEZJISTENO: 100445, // nezjištěno
  NAVEST_KONEC_PRACE_POSTRKU: 101149, // návěst konec práce postrku
  SMEROVA_SIPKA: 101150, // směrová šipka
  SMEROVA_SIPKA_PRAVA: 101153, // směrová šipka - pravá
  HRANICE_OBVODU_NAKLADISTE_NEBO_VLECKY: 101382, // Hranice obvodu nákladiště nebo vlečky
  INDIKATOROVA_TABULKA_S_SIPKOU_LEVA: 101383, // indikátorová tabulka s šipkou - levá
  INDIKATOROVA_TABULKA_S_SIPKOU_PRAVA: 101384, // indikátorová tabulka s šipkou - pravá
  NAVESTIDLO_TABULKA_PODLE_ZAHRANICNICH_PREDPISU: 101549, // návěstidlo tabulka podle zahraničních předpisů
} as const;
export type TypNavestidlaTabulkaValue = (typeof TypNavestidlaTabulka)[keyof typeof TypNavestidlaTabulka];

/** UmisteniTrasyNeurTrubVed */
export const UmisteniTrasyNeurTrubVed = {
  NADZEMNI: 100659, // nadzemní
  PODZEMNI: 100660, // podzemní
  NEURCENO: 100661, // neurčeno
} as const;
export type UmisteniTrasyNeurTrubVedValue = (typeof UmisteniTrasyNeurTrubVed)[keyof typeof UmisteniTrasyNeurTrubVed];

/** Prubeh */
export const Prubeh = {
  JINA_HRANA_PRUBEHU: 101120, // jiná hrana průběhu
  SPODNI_HRANA_PRUBEHU: 101121, // spodní hrana průběhu
  NEURCENO: 101122, // neurčeno
} as const;
export type PrubehValue = (typeof Prubeh)[keyof typeof Prubeh];

/** Konstrukce */
export const Konstrukce = {
  POJIZDNE: 101124, // pojízdné
  PEVNE: 101125, // pevné
  NEURCENO: 101126, // neurčeno
} as const;
export type KonstrukceValue = (typeof Konstrukce)[keyof typeof Konstrukce];

/** TypStanicniku */
export const TypStanicniku = {
  ZELEZOBETONOVY_KAMENNY: 101138, // železobetonový, kamenný
  TABULOVY: 101139, // tabulový
  NEURCENO: 101140, // neurčeno
  SKOKOVY: 101141, // skokový
} as const;
export type TypStanicnikuValue = (typeof TypStanicniku)[keyof typeof TypStanicniku];

/** TypBoduVyhybky */
export const TypBoduVyhybky = {
  BOD_ODBOCENI: 100762, // bod odbočení
  KRAJNI_BOD: 100764, // krajní bod
  NEVLOZENY_BOD_OSY: 100766, // nevložený bod osy
  NEURCENO: 100767, // neurčeno
} as const;
export type TypBoduVyhybkyValue = (typeof TypBoduVyhybky)[keyof typeof TypBoduVyhybky];

/** UmisteniTrasyNeurKabSite */
export const UmisteniTrasyNeurKabSite = {
  NADZEMNI: 100659, // nadzemní
  PODZEMNI: 100660, // podzemní
  NEURCENO: 100661, // neurčeno
} as const;
export type UmisteniTrasyNeurKabSiteValue = (typeof UmisteniTrasyNeurKabSite)[keyof typeof UmisteniTrasyNeurKabSite];

/** TypZarizeniNeurceneKabeloveSite */
export const TypZarizeniNeurceneKabeloveSite = {
  KONTROLNI_MERICI_VYVOD_NAPET_ZEMNI: 101157, // Kontrolní měřicí vývod napěť. zemní
  KONCOVKA_NEURCENA: 101158, // koncovka neurčená
  SPOJ_NEURCENY: 101159, // Spoj neurčený
  KABELOVY_OBJEKT_NEURCENY_SYMBOL_KOLECKO: 101160, // Kabelový objekt neurčený-symbol kolečko
  KABELOVA_SKRIN_BEZ_ROZLISENI: 101161, // Kabelová skříň bez rozlišení
  KABELOVA_REZERVA_BEZ_ROZLISENI: 101162, // Kabelová rezerva bez rozlišení
} as const;
export type TypZarizeniNeurceneKabeloveSiteValue = (typeof TypZarizeniNeurceneKabeloveSite)[keyof typeof TypZarizeniNeurceneKabeloveSite];

/** UmisteniTrasyTeplovodSite */
export const UmisteniTrasyTeplovodSite = {
  NADZEMNI: 101377, // nadzemní
  PODZEMNI: 101378, // podzemní
  NEURCENO: 101379, // neurčeno
} as const;
export type UmisteniTrasyTeplovodSiteValue = (typeof UmisteniTrasyTeplovodSite)[keyof typeof UmisteniTrasyTeplovodSite];

/** KonstrukceJerabu */
export const KonstrukceJerabu = {
  POJIZDNY: 101164, // pojízdný
  KOZLIKOVY: 101165, // kozlíkový
  NEURCENO: 101166, // neurčeno
} as const;
export type KonstrukceJerabuValue = (typeof KonstrukceJerabu)[keyof typeof KonstrukceJerabu];

/** UzitiSachty */
export const UzitiSachty = {
  POTRUBNI: 101154, // Potrubní
  KABELOVA: 101155, // Kabelová
  NEURCENO: 101156, // Neurčeno
} as const;
export type UzitiSachtyValue = (typeof UzitiSachty)[keyof typeof UzitiSachty];

/** TypBoduKrizovatky */
export const TypBoduKrizovatky = {
  STRED: 101371, // střed
  KRAJNI_BOD: 101372, // krajní bod
  NEURCENO: 101373, // neurčeno
} as const;
export type TypBoduKrizovatkyValue = (typeof TypBoduKrizovatky)[keyof typeof TypBoduKrizovatky];

/** TypSvaru */
export const TypSvaru = {
  KRAJNI_BOD_KRIZOVATKY: 101144, // krajní bod křižovatky
  KRAJNI_BOD_VYHYBKY: 101145, // krajní bod výhybky
  KRAJNI_BOD_KRIZOVATKY_I_VYHYBKY: 101146, // krajní bod křižovatky i výhybky
  NEURCENO: 101147, // neurčeno
} as const;
export type TypSvaruValue = (typeof TypSvaru)[keyof typeof TypSvaru];

/** TypNeidentLiniovyObjekt */
export const TypNeidentLiniovyObjekt = {
  PRIKOP_SE_ZPEVNENYM_DNEM_ZLAB: 101001, // příkop se zpevněným dnem (žlab)
  NEURCENY: 101002, // neurčený
  REZNA_LINIE: 101142, // řezná linie
  HRANICE_BALICKU_V_KONSOLIDACI: 101173, // hranice balíčku v konsolidaci
  KRATKA_SVISLICE: 101174, // krátká svislice
} as const;
export type TypNeidentLiniovyObjektValue = (typeof TypNeidentLiniovyObjekt)[keyof typeof TypNeidentLiniovyObjekt];

/** TypZvlastniPlochy */
export const TypZvlastniPlochy = {
  GUMOVY_ABSORBER_HLUKU: 100510, // gumový absorbér hluku
  GUMOVA_ZABRANA_PROTI_PRECHAZENI: 100511, // gumová zábrana proti přecházení
  ZABRANA_PROTI_PREJETI_PREJEZDU: 100512, // zábrana proti přejetí přejezdu
  NEZJISTENO: 100514, // nezjištěno
} as const;
export type TypZvlastniPlochyValue = (typeof TypZvlastniPlochy)[keyof typeof TypZvlastniPlochy];

/** Splitka */
export const Splitka = {
  ANO: 101380, // ano
  NE: 101381, // ne
} as const;
export type SplitkaValue = (typeof Splitka)[keyof typeof Splitka];

/** TypMediaPlynovodniSite */
export const TypMediaPlynovodniSite = {
  TECHNICKY_PLYN: 100038, // technický plyn
  STLACENY_ZRED_VZDUCH: 100039, // stlačený (zřeď.) vzduch
  ZEMNI_PLYN: 101456, // zemní plyn
  PROPAN_BUTAN: 101457, // propan-butan
  BIOMETAN: 101458, // biometan
  VODIK: 101459, // vodík
  OSTATNI_DRUHY_PLYNU: 101460, // ostatní druhy plynu
  NEZJISTENO: 101461, // nezjištěno
} as const;
export type TypMediaPlynovodniSiteValue = (typeof TypMediaPlynovodniSite)[keyof typeof TypMediaPlynovodniSite];

/** TypNastupiste */
export const TypNastupiste = {
  SYPANE_BEZ_OBRUBNIKU: 100486, // sypané bez obrubníků
  S_OBRUBNIKY_JEDNIM_NEBO_OBEMA: 100487, // s obrubníky (jedním nebo oběma)
  S_TVARNICOVYMI_DESKAMI: 100488, // s tvárnicovými deskami
  NEZJISTENO: 101005, // nezjištěno
} as const;
export type TypNastupisteValue = (typeof TypNastupiste)[keyof typeof TypNastupiste];

/** TypZarizeniSiteEKSZ */
export const TypZarizeniSiteEKSZ = {
  PUPINACNI_SKRINE: 101422, // pupinační skříně
  MERICI_OBJEKT: 101423, // měřící objekt
  KABELOVY_DOPLNEK: 101424, // kabelový doplněk
  KABELOVY_OZNACNIK_MAGNET: 101425, // kabelový označník – magnet
  KABELOVY_VSTUP_DO_OBJEKTU: 101426, // kabelový vstup do objektu
  INFORMACNI_TABULE_ELEKTRONICKA: 101427, // informační tabule elektronická
  KAMERA: 101428, // kamera
  ZARIZENI_PRO_OSOBY_SE_ZRAKOVYM_POSTIZENIM: 101429, // zařízení pro osoby se zrakovým postižením
  ZARIZENI_PRO_OSOBY_SE_SLUCHOVYM_POSTIZENIM: 101430, // zařízení pro osoby se sluchovým postižením
  ANTENA: 101431, // anténa
  ZARIZENI_STOZARU_VYSILACI_RETRANSLACNI_STANICE: 101432, // zařízení stožáru vysílací, retranslační stanice
  VENKOVNI_ZVONEK: 101433, // venkovní zvonek
  SIRENA_EPS_EZS: 101434, // siréna (EPS,EZS)
  CIDLA_EZS_VENK: 101435, // čidla EZS venk.
  TLACITKOVE_HL_EPS_VENK: 101436, // tlačítkové hl. EPS venk.
  KABELOVA_REZERVA: 101437, // kabelová rezerva
  KABELOVY_OBJEKT_MALY: 101438, // kabelový objekt malý
  MERENI_RADIOAKTIVITY: 101439, // měření radioaktivity
  JISTICI_SOUPRAVA: 101440, // jistící souprava
  SPOJKA_DELICI: 101441, // spojka dělící
  SPOJKA_IZOLACNI: 101442, // spojka izolační
  SPOJKA_NEROZLISENA: 101443, // spojka nerozlišená
  SPOJKA_PRUBEZNA: 101444, // spojka průběžná
  SPOJKA_OPTICKA: 101445, // spojka optická
  UPEVNENI_ZAVESNEHO_KABELU_NA_PODPERU_CIZ_SPRAVCE: 101446, // upevnění závěsného kabelu na podpěru ciz.správce
  EVIDOVANY_LOMOVY_BOD_TRASY: 101447, // evidovaný (lomový) bod trasy
  KABELOVA_SACHTA: 101448, // kabelová šachta
  TELEFONNI_AUTOMAT: 101449, // telefonní automat
  NEZJISTENO: 101450, // nezjištěno
  ODBOCNA_SPOJKA_HDPE_TRUBEK: 101543, // odbočná spojka HDPE trubek
} as const;
export type TypZarizeniSiteEKSZValue = (typeof TypZarizeniSiteEKSZ)[keyof typeof TypZarizeniSiteEKSZ];

/** TypPodpernehoZarizeniSZNeboJehoPrislusenstvi */
export const TypPodpernehoZarizeniSZNeboJehoPrislusenstvi = {
  SOKL: 101451, // sokl
  KOTVA_K_TRAKCNI_PODPERE: 101452, // kotva k trakční podpěře
  KOTVA_KE_STOZARU_MIMO_TRAKCNI_VEDENI: 101453, // kotva ke stožáru (mimo trakční vedení)
  ANTENA: 101454, // anténa
  NEZJISTENO: 101455, // nezjištěno
} as const;
export type TypPodpernehoZarizeniSZNeboJehoPrislusenstviValue = (typeof TypPodpernehoZarizeniSZNeboJehoPrislusenstvi)[keyof typeof TypPodpernehoZarizeniSZNeboJehoPrislusenstvi];

/** PolohaStavecihoZarizeni */
export const PolohaStavecihoZarizeni = {
  VLEVO: 101463, // vlevo
  VPRAVO: 101464, // vpravo
  NEZJISTENO: 101465, // nezjištěno
} as const;
export type PolohaStavecihoZarizeniValue = (typeof PolohaStavecihoZarizeni)[keyof typeof PolohaStavecihoZarizeni];

/** ZdrojDatTI */
export const ZdrojDatTI = {
  KONSOLIDACE_UZM_VZ2: 101470, // konsolidace ÚŽM VZ2
  KONSOLIDACE_NOVEHO_MAPOVANI_Z_VZ1_VZ2: 101471, // konsolidace nového mapování z VZ1 - VZ2
  VYHLEDANI_A_ZAMERENI_SITI_VZ1: 101472, // vyhledání a zaměření sítí VZ1
  RADIORELEOVE_SPOJE_VZ2: 101473, // radioreléové spoje VZ2
  ELEKTRICKE_TRAKCNI_VEDENI_VZ2: 101474, // elektrické trakční vedení VZ2
  PREVOD_DIGITALNI_DOKUMENTACE_CAD_VZ2: 101475, // převod digitální dokumentace CAD VZ2
  DIGITALIZACE_ANALOGOVE_DOKUMENTACE_VZ2: 101476, // digitalizace analogové dokumentace VZ2
  PREVOD_DAT_GIS_DB_TELCO_VZ2: 101477, // převod dat GIS/DB Telco VZ2
  KONSOLIDACE_AKTUALIZACNICH_DAT_DSPS_VZ2: 101478, // konsolidace aktualizačních dat DSPS VZ2
  NOVE_MERENI_ZXML: 101479, // nové měření ŽXML
  DOPLNENO_PRI_HARMONIZACI_VZ2: 101480, // doplněno při harmonizaci VZ2
  DOPLNENO_PRI_HARMONIZACI_SPRAVCE_TI: 101481, // doplněno při harmonizaci Správce TI
  DATA_VZNIKLA_V_KOMPONENTE_SPRAVA_TI_IS: 101482, // data vzniklá v komponentě Správa TI - IS
  DATA_VZNIKLA_V_KOMPONENTE_SPRAVA_TI_TELCO_SAZ: 101483, // data vzniklá v komponentě Správa TI - Telco/SaZ
  DATA_VZNIKLA_V_JINEM_IS: 101484, // data vzniklá v jiném IS
  NEURCENY_PUVOD_DAT: 101485, // neurčený původ dat
} as const;
export type ZdrojDatTIValue = (typeof ZdrojDatTI)[keyof typeof ZdrojDatTI];

/** StatusHarmonizaceDatTI */
export const StatusHarmonizaceDatTI = {
  NAHRANA_DATA_BEZ_VYCISTENI_DUPLICIT_DIRTY: 101486, // nahraná data bez vyčištění duplicit (DIRTY)
  VYCISTENA_NAHRANA_DATA_CLEAN: 101487, // vyčištěná nahraná data (CLEAN)
  AUTOMATICKY_SCHVALENA_DATA_CLEAN: 101488, // automaticky schválená data (CLEAN)
  DATA_SCHVALENA_SPRAVCEM_TI_CLEAN: 101489, // data schválená Správcem TI (CLEAN)
  CHYBNA_DATA_VRACENO_K_OPRAVE_GEODETUM: 101490, // chybná data / vráceno k opravě geodetům
  CHYBNA_DATA_DATA_K_REVIZI_SPRAVCE_TI: 101491, // chybná data / data k revizi (správce TI)
  DATA_ZNEPLATNENA_PRI_HARMONIZACI_GIS: 101492, // data zneplatněná při harmonizaci - GIS
  DATA_ZNEPLATNENA_PRI_HARMONIZACI_SPRAVCE_TI: 101493, // data zneplatněná při harmonizaci - Správce TI
} as const;
export type StatusHarmonizaceDatTIValue = (typeof StatusHarmonizaceDatTI)[keyof typeof StatusHarmonizaceDatTI];

/** ZdrojDatDI */
export const ZdrojDatDI = {
  KONSOLIDACE_UZM_VZ2: 101494, // konsolidace ÚŽM VZ2
  KONSOLIDACE_NOVEHO_MAPOVANI_Z_VZ1_VZ2: 101495, // konsolidace nového mapování z VZ1 - VZ2
  PRVOTNI_MIGRACE_Z_TPI: 101496, // prvotní migrace z TPI
  PRVOTNI_MIGRACE_OBVODU_DRAHY: 101497, // prvotní migrace obvodu dráhy
  DATA_VYTVORENA_V_KDS: 101498, // data vytvořená v KDS
  DATA_VZNIKLA_V_JINEM_IS: 101499, // data vzniklá v jiném IS
  KOMPONENTA_SPRAVA_DI: 101500, // komponenta Správa DI
  DATA_POZEMNICH_KOMUNIKACI_OD_SPRAVCE_DI_SZ: 101501, // data pozemních komunikací od Správce DI (SŽ)
  NEURCENY_PUVOD_DAT: 101502, // neurčený původ dat
  NOVE_MERENI_ZXML: 101513, // nové měření ŽXML
} as const;
export type ZdrojDatDIValue = (typeof ZdrojDatDI)[keyof typeof ZdrojDatDI];

/** SynchronizaceDatDoISDTMKraju */
export const SynchronizaceDatDoISDTMKraju = {
  DATA_ZPLATNENA_V_IS_DTMZ_V_PROCESECH_DTI_I_CLEAN: 101503, // data zplatněná v IS DTMŽ v procesech DTI I (CLEAN)
  DATA_ZPLATNENA_V_IS_DTMZ_V_MIGRACNIM_RIZENI_Z_KONSOLIDACE: 101504, // data zplatněná v IS DTMŽ v migračním řízení z konsolidace
  DATA_ZPLATNENA_V_IS_DTMZ_V_PROCESECH_DTI_II_CLEAN: 101505, // data zplatněná v IS DTMŽ v procesech DTI II (CLEAN)
  DATA_ZPLATNENA_V_IS_DTMZ_V_PROCESECH_DTI_III_DIRTY: 101506, // data zplatněná v IS DTMŽ v procesech DTI III (DIRTY)
  NEVYUZITA_HODNOTA_I: 101507, // nevyužitá hodnota I
  NEVYUZITA_HODNOTA_II: 101508, // nevyužitá hodnota II
  DATA_PRIPRAVENA_V_EXTERNIM_SW: 101509, // data připravená v externím SW
  DATA_ZPLATNENA_V_IS_DTM_KRAJE: 101510, // data zplatněná v IS DTM kraje
} as const;
export type SynchronizaceDatDoISDTMKrajuValue = (typeof SynchronizaceDatDoISDTMKraju)[keyof typeof SynchronizaceDatDoISDTMKraju];

/** SpravceDI */
export const SpravceDI = {
  SZ: 101515, // SŽ
  CIZI: 101516, // cizí
  NEURCENO: 101517, // neurčeno
} as const;
export type SpravceDIValue = (typeof SpravceDI)[keyof typeof SpravceDI];

/** PolohaIzolovanehoStykuVeSmeruStaniceni */
export const PolohaIzolovanehoStykuVeSmeruStaniceni = {
  OBOUSTRANNY: 101527, // oboustranný
  VPRAVO: 101528, // vpravo
  VLEVO: 101529, // vlevo
  NEZJISTENO: 101530, // nezjištěno
} as const;
export type PolohaIzolovanehoStykuVeSmeruStaniceniValue = (typeof PolohaIzolovanehoStykuVeSmeruStaniceni)[keyof typeof PolohaIzolovanehoStykuVeSmeruStaniceni];

/** Ozubnice */
export const Ozubnice = {
  ANO: 101532, // ano
  NE: 101533, // ne
} as const;
export type OzubniceValue = (typeof Ozubnice)[keyof typeof Ozubnice];

/** TypTechnologickeKonstrukce */
export const TypTechnologickeKonstrukce = {
  PRIHRADOVA_KONSTRUKCE_OCELOVE_STAVBY: 100446, // příhradová konstrukce, ocelové stavby
  NAVESTNI_KONZOLA: 100447, // návěstní konzola
  NAVESTNI_KRAKOREC: 100448, // návěstní krakorec
  NAVESTNI_LAVKA: 100449, // návěstní lávka
  NEZJISTENO: 100450, // nezjištěno
  DOPRAVNIK_NADZEMNI: 101000, // dopravník nadzemní
  DOPRAVNIK_POZEMNI: 101127, // dopravník pozemní
  DOPRAVNIK_PODZEMNI: 101128, // dopravník podzemní
} as const;
export type TypTechnologickeKonstrukceValue = (typeof TypTechnologickeKonstrukce)[keyof typeof TypTechnologickeKonstrukce];
