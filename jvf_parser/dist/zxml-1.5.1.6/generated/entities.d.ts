export type GeomKind = 'point' | 'curve' | 'surface' | 'surface+multiCurve';
export interface EntityMeta {
    elementName: string;
    nazev: string;
    codeBase: string;
    codeSuffix: string;
    kategorieObjektu: string;
    skupinaObjektu: string;
    obsahovaCast: 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '';
    sharedAttrGroup: string | null;
    specificAttrs: readonly string[];
    geomType: GeomKind;
    geomOptional: boolean;
    hasOblastKI: boolean;
    /** Dialekt, ze kterého objekt pochází; u objektů JVF DTM chybí. */
    origin?: string;
    /** Kód objektu v datovém modelu dialektu (ŽXML `ObjektovyKod`). */
    objektovyKod?: string;
    /** Sdílená skupina atributů dialektu (ŽXML `SpolecneAtributyObjektu…SZ`). */
    dialectAttrGroup?: string;
}
export interface BPPlynovodniSiteAttrs {
    TlakovaHladinaPlynovodniSite?: number;
}
export interface BPPodzemnihoZasobnikuPlynuAttrs {
    TypPodzemnihoZasobnikuPlynu?: number;
}
export interface OPDalniceProReklamniZarizeniAttrs {
    IDObjektuSilnicniStavby?: string;
    CisloETahu?: string;
}
export interface OPDrazniStavbyAttrs {
    IDObjektuDrazniStavby?: string;
    TypOPDrazniStavby?: number;
}
export interface OPElektrickeSiteAttrs {
    MaximalniNapetovaHladina?: number;
}
export interface OPLeteckychZabezpecovacichZarizeniAttrs {
    TypOPLeteckychZabezpecovacichZarizeni?: number;
}
export interface OPLetisteAttrs {
    TypOPLetiste?: number;
    IDObjektuLetiste?: string;
}
export interface OPPlynovodniSiteAttrs {
    TlakovaHladinaPlynovodniSite?: number;
}
export interface OPPodzemnihoZasobnikuPlynuAttrs {
    TypPodzemnihoZasobnikuPlynu?: number;
}
export interface OPPozemniKomunikaceAttrs {
    TypOPPozemniKomunikace?: number;
    IDObjektuSilnicniStavby?: string;
    CisloETahu?: string;
}
export interface OPSiteEKAttrs {
    TypOPSiteEK?: number;
}
export interface OPSiteProduktovoduAttrs {
    TypOPSiteProduktovodu?: number;
}
export interface OPStaniceElektrickeSiteAttrs {
    TypStaniceElektrickeSite?: number;
}
export interface OPStavbyProVodniDopravuAttrs {
    IDObjektuStavbyProVodniDopravu?: string;
}
export interface OPVyrobnyElektrinyAttrs {
    TypVyrobnyElektriny?: number;
}
export interface OPZarizeniOdpadovehoHospodarstviAttrs {
    TypOPZarizeniOdpadovehoHospodarstvi?: number;
}
export interface TechnologickyObjektPlynovodniSiteBodAttrs {
    TlakovaHladinaPlynovodniSite?: number;
    TypTechnologickehoObjektuPlynovodniSite?: number;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface TechnologickyObjektPlynovodniSitePlochaAttrs {
    TlakovaHladinaPlynovodniSite?: number;
    TypTechnologickehoObjektuPlynovodniSite?: number;
    StavObjektu?: number;
}
export interface TechnologickyObjektSiteEKBodAttrs {
    TypTechnologickehoObjektuSiteEK?: number;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface TechnologickyObjektSiteEKPlochaAttrs {
    TypTechnologickehoObjektuSiteEK?: number;
    StavObjektu?: number;
}
export interface TechnologickyObjektSiteProduktovoduBodAttrs {
    StavObjektu?: number;
    Natoceni?: number;
}
export interface TechnologickyObjektSiteProduktovoduPlochaAttrs {
    StavObjektu?: number;
}
export interface TechnologickyObjektTeplovodniSiteBodAttrs {
    TypTechnologickehoObjektuTeplovodniSite?: number;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface TechnologickyObjektTeplovodniSitePlochaAttrs {
    TypTechnologickehoObjektuTeplovodniSite?: number;
    StavObjektu?: number;
}
export interface BudovaDefinicniBodAttrs {
    PopisBudovy?: string;
    TypBudovy?: number;
    UcelBudovy?: number;
}
export interface BudovaPlochaAttrs {
    UcelBudovy?: number;
    PopisBudovy?: string;
    TypBudovy?: number;
}
export interface CeloPropustkuDefinicniBodAttrs {
    NerozlisenaKilometraz?: string;
    PopisPropustku?: string;
    EvidencniKilometraz?: string;
}
export interface CeloPropustkuPlochaAttrs {
    EvidencniKilometraz?: string;
    NerozlisenaKilometraz?: string;
    PopisPropustku?: string;
}
export interface ChodnikDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface ChodnikPlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface CyklistickaDopravaMistoZameruBodAttrs {
    Natoceni?: number;
}
export interface CyklostezkaDefinicniBodAttrs {
    OznaceniCyklostezky?: string;
    PrevazujiciPovrch?: number;
}
export interface CyklostezkaPlochaAttrs {
    PrevazujiciPovrch?: number;
    OznaceniCyklostezky?: string;
}
export interface DopravneVyznamneMistoDrazeBodAttrs {
    TypDopravneVyznamnehoMistaDraze?: number;
    Natoceni?: number;
    PopisZeleznicniStaniceNebo?: string;
}
export interface DopravneVyznamneMistoDrazePlochaAttrs {
    TypDopravneVyznamnehoMistaDraze?: number;
    PopisZeleznicniStaniceNebo?: string;
}
export interface DopravniUzelSilnicniSiteAttrs {
    CisloUzlu?: string;
    CislaKrizujicichKomunikaci?: string;
    TypUzlu?: number;
    Natoceni?: number;
}
export interface DrazniDopravaKoridorZameruLinieAttrs {
    TypDrahy?: number;
    KategorieZeleznicniTrate?: number;
    TypZeleznicniTrate?: number;
}
export interface DrazniDopravaKoridorZameruPlochaAttrs {
    TypDrahy?: number;
    KategorieZeleznicniTrate?: number;
    TypZeleznicniTrate?: number;
}
export interface DrazniDopravaMistoZameruBodAttrs {
    TypDrahy?: number;
    Natoceni?: number;
}
export interface DrazniDopravaMistoZameruPlochaAttrs {
    TypDrahy?: number;
}
export interface DrobnaKulturniStavbaBodAttrs {
    TypDrobneKulturniStavby?: number;
    ZpusobPorizeniZPS?: number;
    Natoceni?: number;
}
export interface DrobnaKulturniStavbaDefinicniBodAttrs {
    TypDrobneKulturniStavby?: number;
}
export interface DrobnaKulturniStavbaPlochaAttrs {
    TypDrobneKulturniStavby?: number;
}
export interface DrobnaSakralniStavbaBodAttrs {
    ZpusobPorizeniZPS?: number;
    TypDrobneSakralniStavby?: number;
    Natoceni?: number;
}
export interface DrobnaSakralniStavbaDefinicniBodAttrs {
    TypDrobneSakralniStavby?: number;
}
export interface DrobnaSakralniStavbaPlochaAttrs {
    TypDrobneSakralniStavby?: number;
}
export interface DulLomDefinicniBodAttrs {
    NazevDoluPopis?: string;
}
export interface DulLomPlochaAttrs {
    NazevDoluPopis?: string;
}
export interface ElektrickaSitKoridorZameruLinieAttrs {
    MaximalniNapetovaHladina?: number;
}
export interface ElektrickaSitKoridorZameruPlochaAttrs {
    MaximalniNapetovaHladina?: number;
}
export interface ElektrickaSitMistoZameruBodAttrs {
    TypObjektuElektrickeSiteZameru?: number;
    Natoceni?: number;
}
export interface ElektrickaSitMistoZameruPlochaAttrs {
    TypObjektuElektrickeSiteZameru?: number;
}
export interface ElektronickaKomunikaceMistoZameruBodAttrs {
    Natoceni?: number;
}
export interface HeliportBodAttrs {
    OznaceniObjektu?: string;
    OznaceniHeliportu?: string;
    UmisteniHeliportu?: number;
    Natoceni?: number;
}
export interface HeliportPlochaAttrs {
    OznaceniHeliportu?: string;
    UmisteniHeliportu?: number;
    OznaceniObjektu?: string;
}
export interface HorniHranaObrubyLinieAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface HospodarskyNevyuzivanaPlochaDefinicniBodAttrs {
    TypHospodarskyNevyuzivanePl?: number;
}
export interface HospodarskyNevyuzivanaPlochaPlochaAttrs {
    TypHospodarskyNevyuzivanePl?: number;
}
export interface HraniceBudovyAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface HraniceDopravniStavbyPlochyAttrs {
    TypDopravniStavbyNeboPlochy?: number;
    ZpusobPorizeniZPS?: number;
}
export interface HraniceOstatniPlochyAttrs {
    TypOstatniPlochy?: number;
    ZpusobPorizeniZPS?: number;
}
export interface HranicePodzemnihoObjektuZPSAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface HranicePrirodnihoPoloprirodnihoObjektuAttrs {
    TypPrirodnihoPoloprirodnihoObjektu?: number;
    ZpusobPorizeniZPS?: number;
}
export interface HraniceSchodisteAttrs {
    DruhSchodiste?: number;
    ZpusobPorizeniZPS?: number;
}
export interface HraniceStavbyAttrs {
    TypStavby?: number;
    ZpusobPorizeniZPS?: number;
}
export interface HraniceUdrzovaneZeleneAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface HraniceVodnihoDilaAttrs {
    TypVodnihoDila?: number;
    ZpusobPorizeniZPS?: number;
}
export interface HraniceZarizeniKanalizacniPripojkyAttrs {
    StavObjektu?: number;
}
export interface HraniceZarizeniVodovodniPripojkyAttrs {
    StavObjektu?: number;
}
export interface HraniceZdiAttrs {
    TypZdi?: number;
    ZpusobPorizeniZPS?: number;
}
export interface HydrantVodovodniSiteBodAttrs {
    ICME?: string;
    TypHydrantuVodovodniSite?: number;
    TypMediaVodovodniSite?: number;
    StavObjektu?: number;
    DimenzeHydrantuVodovodniSite?: number;
    PopisHydrantuVodovodniSite?: string;
    Natoceni?: number;
}
export interface IdentickyBodAttrs {
    CisloBodu?: string;
    ZpusobPorizeniZPS?: number;
    Natoceni?: number;
}
export interface JaderneZarizeniBodAttrs {
    TypJadernehoZarizeni?: number;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface JaderneZarizeniPlochaAttrs {
    TypJadernehoZarizeni?: number;
    StavObjektu?: number;
}
export interface JezeroDefinicniBodAttrs {
    PopisJezera?: string;
}
export interface JezeroPlochaAttrs {
    PopisJezera?: string;
}
export interface JinaTechnologickaStavbaTIAttrs {
    StavObjektu?: number;
    Natoceni?: number;
}
export interface JinaTechnologickaStavbaTIPlochaAttrs {
    StavObjektu?: number;
}
export interface JineZarizeniOdstranovaniVyuzivaniSberOdpaduBodAttrs {
    TypZarizeniOdstranovaniOdpadu?: number;
    PovoleniNakladaniNebezpecnymOdpadem?: number;
    Kapacita?: number;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlochaAttrs {
    TypZarizeniOdstranovaniOdpadu?: number;
    PovoleniNakladaniNebezpecnymOdpadem?: number;
    Kapacita?: number;
    StavObjektu?: number;
}
export interface JineZarizeniStavebTIAttrs {
    UmisteniObjektu?: number;
    TypJinehoZarizeniStavebTI?: number;
    StavObjektu?: number;
    PopisJinehoZarizStavebTi?: string;
    Natoceni?: number;
}
export interface JineZarizeniStavebTILinieAttrs {
    TypJinehoZarizeniStavebTI?: number;
    StavObjektu?: number;
    UmisteniObjektu?: number;
    PopisJinehoZarizStavebTi?: string;
}
export interface JineZarizeniStavebTIPlochaAttrs {
    TypJinehoZarizeniStavebTI?: number;
    StavObjektu?: number;
    UmisteniObjektu?: number;
    PopisJinehoZarizStavebTi?: string;
}
export interface KanalizaceMistoZameruBodAttrs {
    TypObjektuStokoveSiteZameru?: number;
    Natoceni?: number;
}
export interface KanalizaceMistoZameruPlochaAttrs {
    TypObjektuStokoveSiteZameru?: number;
}
export interface KolektorAttrs {
    VedeniSiteVJineStavbe?: number;
    TypKolektoru?: number;
    StavObjektu?: number;
}
export interface KolektorPlochaAttrs {
    VedeniSiteVJineStavbe?: number;
    TypKolektoru?: number;
    StavObjektu?: number;
}
export interface LeteckaDopravaMistoZameruBodAttrs {
    Natoceni?: number;
}
export interface LeteckaStavbaBodAttrs {
    OznaceniObjektu?: string;
    TypLeteckeStavby?: number;
    Natoceni?: number;
}
export interface LeteckaStavbaPlochaAttrs {
    OznaceniObjektu?: string;
    TypLeteckeStavby?: number;
}
export interface LetisteAttrs {
    DruhLetiste?: number;
    ICAOKodLetiste?: string;
}
export interface ManipulacniPlochaDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
    TypManipulacniPlochy?: number;
    PopisManipulacniPlochy?: string;
}
export interface ManipulacniPlochaPlochaAttrs {
    PrevazujiciPovrch?: number;
    PopisManipulacniPlochy?: string;
    TypManipulacniPlochy?: number;
}
export interface MelioracniSachtaAttrs {
    ZpusobPorizeniZPS?: number;
    Natoceni?: number;
}
export interface MostniVahaDefinicniBodAttrs {
    Vazivost?: number;
    EvidencniKilometraz?: string;
    NerozlisenaKilometraz?: string;
    TypVahy?: number;
}
export interface MostniVahaPlochaAttrs {
    Vazivost?: number;
    EvidencniKilometraz?: string;
    NerozlisenaKilometraz?: string;
    TypVahy?: number;
}
export interface NadrzBezVzdouvacihoObjektuDefinicniBodAttrs {
    TypNadrzeBezVzdouvacihoObjektu?: number;
    PopisVodniNadrze?: string;
}
export interface NadrzBezVzdouvacihoObjektuPlochaAttrs {
    TypNadrzeBezVzdouvacihoObjektu?: number;
    PopisVodniNadrze?: string;
}
export interface NadrzZdrzSeVzdouvacimObjektemDefinicniBodAttrs {
    TypNadrzeZdrzeSeVzdouvacimObjektem?: number;
    PopisVodniNadrze?: string;
}
export interface NadrzZdrzSeVzdouvacimObjektemPlochaAttrs {
    TypNadrzeZdrzeSeVzdouvacimObjektem?: number;
    PopisVodniNadrze?: string;
}
export interface NajezdDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface NajezdPlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface NastupisteDefinicniBodAttrs {
    TypNastupiste?: number;
    PrevazujiciPovrch?: number;
}
export interface NastupistePlochaAttrs {
    TypNastupiste?: number;
    PrevazujiciPovrch?: number;
}
export interface NeidentifikovanyObjektAttrs {
    TypNeidentLiniovyObjekt?: number;
    ZpusobPorizeniZPS?: number;
}
export interface NosicTechnickehoZarizeniAttrs {
    TypNosiceTechnickehoZarizeni?: number;
    ZpusobPorizeniZPS?: number;
    Natoceni?: number;
}
export interface O6Attrs {
    IDVlastnika?: string;
    IDProvozovateleZeZakona?: string;
    IDSpravce?: string;
    IDProvozovatele?: string;
    IDExterni?: string;
    NeuplnaData?: boolean;
    TridaPresnostiPoloha?: number;
    EvidencniCisloObjektu?: string;
    IDRDTI?: string;
}
export interface ObjektOdvodneniStavbyBodAttrs {
    TypObjektuOdvodneniStavby?: number;
    PopisZarizeniKanalizacniSit?: string;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface ObjektOdvodneniStavbyLinieAttrs {
    TypObjektuOdvodneniStavby?: number;
    PopisZarizeniKanalizacniSit?: string;
    StavObjektu?: number;
}
export interface ObjektOdvodneniStavbyPlochaAttrs {
    TypObjektuOdvodneniStavby?: number;
    PopisZarizeniKanalizacniSit?: string;
    StavObjektu?: number;
}
export interface ObjektStokoveSiteBodAttrs {
    ICME?: string;
    StavObjektu?: number;
    TypObjektuStokoveSite?: number;
    PopisZarizeniKanalizacniSit?: string;
    Natoceni?: number;
}
export interface ObjektStokoveSitePlochaAttrs {
    ICME?: string;
    StavObjektu?: number;
    TypObjektuStokoveSite?: number;
    PopisZarizeniKanalizacniSit?: string;
}
export interface ObjektVodovodniSiteBodAttrs {
    StavObjektu?: number;
    TypObjektuVodovodniSite?: number;
    TypMediaVodovodniSite?: number;
    PopisZarizeniVodovodniSite?: string;
    ICME?: string;
    Natoceni?: number;
}
export interface ObjektVodovodniSitePlochaAttrs {
    StavObjektu?: number;
    TypObjektuVodovodniSite?: number;
    TypMediaVodovodniSite?: number;
    PopisZarizeniVodovodniSite?: string;
    ICME?: string;
}
export interface ObjektZarizeniOchranaPredPovodnemiBodAttrs {
    TypObjektuZarizeniOchranaPredPovodnemi?: number;
    Natoceni?: number;
}
export interface ObjektZarizeniOchranaPredPovodnemiLinieAttrs {
    TypObjektuZarizeniOchranaPredPovodnemi?: number;
}
export interface ObvodMostuAttrs {
    NerozlisenaKilometraz?: string;
    OznaceniKomunikaceTrate?: string;
    PopisMostu?: string;
    EvidencniKilometraz?: string;
    TypMostu?: number;
}
export interface ObvodPozemniKomunikaceAttrs {
    OznaceniKomunikace?: string;
}
export interface ObvodTuneluAttrs {
    EvidencniCisloTunelu?: string;
    EvidencniKilometraz?: string;
    PopisTunelu?: string;
    OznaceniTunelu?: string;
}
export interface OchrannaSachtaVrtuAttrs {
    ZpusobPorizeniZPS?: number;
    Natoceni?: number;
}
export interface OdkalisteBodAttrs {
    StavObjektu?: number;
    Natoceni?: number;
}
export interface OdkalistePlochaAttrs {
    StavObjektu?: number;
}
export interface OdpadoveHospodarstviZamerBodAttrs {
    TypObjektuOdpadovehoHospodarstviZameru?: number;
    Natoceni?: number;
}
export interface OdpadoveHospodarstviZamerLinieAttrs {
    TypObjektuOdpadovehoHospodarstviZameru?: number;
}
export interface OdpadoveHospodarstviZamerPlochaAttrs {
    TypObjektuOdpadovehoHospodarstviZameru?: number;
}
export interface OrientacniSloupekTIAttrs {
    TypInzenyrskeSite?: number;
    StavObjektu?: number;
    TypOrientacnihoSloupkuTi?: number;
    Natoceni?: number;
}
export interface OsaKolejeZeleznicniTrateAttrs {
    Splitka?: number;
    PopisKoleje?: string;
    RokGeodetickehoPorizeni?: number;
    RozchodKoleji?: number;
    Ozubnice?: number;
    TypKoleje?: number;
    SpravceDI?: number;
}
export interface OsaMelioracnihoPrikopuZlabuDrenuAttrs {
    RokVystavby?: number;
    Material?: string;
    DruhMelioracnichOpatreni?: number;
}
export interface OsaPozemniKomunikaceAttrs {
    PocetJizdnichPruhu?: number;
    CisloETahu?: string;
    PrevazujiciPovrch?: number;
    KategoriePozemniKomunikace?: number;
    TypUsekuPozemniKomunikace?: number;
    OznaceniKomunikace?: string;
}
export interface OsaPozemniLanoveDrahyAttrs {
    DruhDopravyLanoveDrahy?: number;
}
export interface OsaProtipovodnoveZabranyAttrs {
    TypProtipovodnoveZabrany?: number;
    PopisProtipovodnoveZabrany?: string;
}
export interface OsaZeleznicniTrateAttrs {
    PocetKoleji?: number;
    ElektrizaceZeleznicniTrate?: number;
    KategorieZeleznicniTrate?: number;
    TypUsekuZeleznicniTrate?: number;
    TypZeleznicniTrate?: number;
    OznaceniTrate?: string;
}
export interface OznacnikZastavkyHromadneDopravyBodAttrs {
    UmisteniOznacniku?: number;
    DruhHromadneDopravy?: number;
    Natoceni?: number;
}
export interface ParkovisteOdstavnaPlochaDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface ParkovisteOdstavnaPlochaPlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface PatkaDeskaMonolitPilirDefinicniBodAttrs {
    TypPatkyDeskyMonolituPilir?: number;
}
export interface PatkaDeskaMonolitPilirPlochaAttrs {
    TypPatkyDeskyMonolituPilir?: number;
}
export interface PlavebniKomoraBodAttrs {
    OznaceniObjektu?: string;
    Natoceni?: number;
}
export interface PlavebniKomoraPlochaAttrs {
    OznaceniObjektu?: string;
}
export interface PlochaMostniKonstrukceDefinicniBodAttrs {
    EvidencniKilometraz?: string;
    TypMostu?: number;
    PopisMostu?: string;
    NerozlisenaKilometraz?: string;
}
export interface PlochaMostniKonstrukcePlochaAttrs {
    TypMostu?: number;
    NerozlisenaKilometraz?: string;
    PopisMostu?: string;
    EvidencniKilometraz?: string;
}
export interface PlotAttrs {
    DruhPlotu?: number;
    HraniceJinehoObjektu?: boolean;
    ZpusobPorizeniZPS?: number;
}
export interface PlynovodKoridorZameruLinieAttrs {
    TlakovaHladinaPlynovodniSite?: number;
}
export interface PlynovodKoridorZameruPlochaAttrs {
    TlakovaHladinaPlynovodniSite?: number;
}
export interface PlynovodMistoZameruBodAttrs {
    TypObjektuPlynovodniSiteZameru?: number;
    Natoceni?: number;
}
export interface PlynovodMistoZameruPlochaAttrs {
    TypObjektuPlynovodniSiteZameru?: number;
}
export interface PodperneZarizeniAttrs {
    TypPodpernehoZarizeni?: number;
    TypSloupu?: number;
    StavObjektu?: number;
    CisloTrakcniPodperyKotvyKo?: string;
    Natoceni?: number;
}
export interface PodrobnyBodZPSAttrs {
    CisloBodu?: string;
    TridaPresnostiVyska?: number;
    TridaPresnostiPoloha?: number;
    ZpusobPorizeniPB_ZPS?: number;
    UrovenUmisteniObjektuZPS?: number;
    KonsolidacniText?: string;
    Od?: string;
    Datum?: string;
    Osoba?: string;
    Organizace?: string;
    Poznamka?: string;
    CisStaOb?: string;
    NazStaOb?: string;
    PrvekM20ZKonsolidace?: number;
    Natoceni?: number;
}
export interface PortalTuneluDefinicniBodAttrs {
    EvidencniCisloTunelu?: string;
    EvidencniKilometraz?: string;
    CisloPortalu?: string;
    NerozlisenaKilometraz?: string;
}
export interface PortalTuneluPlochaAttrs {
    CisloPortalu?: string;
    EvidencniCisloTunelu?: string;
    EvidencniKilometraz?: string;
    NerozlisenaKilometraz?: string;
}
export interface PovrchovyZnakTIAttrs {
    TypPovrchovehoZnakuTI?: number;
    StavObjektu?: number;
    VyskovaKotaVstupniSachty?: string;
    PopisPovrchovehoZnakuTi?: string;
    Natoceni?: number;
}
export interface PozemniCastPristavuBodAttrs {
    OznaceniObjektu?: string;
    TypPristavu?: number;
    OchrannaFunkce?: boolean;
    Natoceni?: number;
}
export interface PozemniCastPristavuPlochaAttrs {
    OznaceniObjektu?: string;
    TypPristavu?: number;
    OchrannaFunkce?: boolean;
}
export interface PridruzenaPlochaPozemniKomunikaceDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface PridruzenaPlochaPozemniKomunikacePlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface PrikopNasepZarezDopravniStavbyDefinicniBodAttrs {
    TypPrikopuNasepuZarezuDopr?: number;
    PopisPrikopuNasepuZarezuDo?: string;
}
export interface PrikopNasepZarezDopravniStavbyPlochaAttrs {
    PopisPrikopuNasepuZarezuDo?: string;
    TypPrikopuNasepuZarezuDopr?: number;
}
export interface PrivadecNahonOdpadLinieAttrs {
    Dimenze?: number;
    Material?: string;
    TypPrivadece?: number;
    StavObjektu?: number;
}
export interface PrivadecNahonOdpadPlochaAttrs {
    StavObjektu?: number;
    TypPrivadece?: number;
    Dimenze?: number;
    Material?: string;
}
export interface ProduktovodMistoZameruBodAttrs {
    Natoceni?: number;
}
export interface ProtihlukovaStenaAttrs {
    HraniceJinehoObjektu?: boolean;
    TypProtihlukoveSteny?: number;
    ZpusobPorizeniZPS?: number;
}
export interface ProtipovodnovaZabranaDefinicniBodAttrs {
    TypProtipovodnoveZabrany?: number;
    PopisProtipovodnoveZabrany?: string;
}
export interface ProtipovodnovaZabranaLinieAttrs {
    TypProtipovodnoveZabrany?: number;
    HraniceJinehoObjektu?: boolean;
    ZpusobPorizeniZPS?: number;
}
export interface ProtipovodnovaZabranaPlochaAttrs {
    TypProtipovodnoveZabrany?: number;
    PopisProtipovodnoveZabrany?: string;
}
export interface ProvozniPlochaPodchoduDefinicniBodAttrs {
    TypPodchodu?: number;
    PopisPodchodu?: string;
    NerozlisenaKilometraz?: string;
    EvidencniKilometraz?: string;
}
export interface ProvozniPlochaPodchoduPlochaAttrs {
    TypPodchodu?: number;
    EvidencniKilometraz?: string;
    NerozlisenaKilometraz?: string;
    PopisPodchodu?: string;
}
export interface ProvozniPlochaPozemniKomunikaceDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
    TypPozemniKomunikace?: number;
}
export interface ProvozniPlochaPozemniKomunikacePlochaAttrs {
    PrevazujiciPovrch?: number;
    TypPozemniKomunikace?: number;
}
export interface ProvozniPlochaTuneluDefinicniBodAttrs {
    TypTunelu?: number;
    NerozlisenaKilometraz?: string;
    PopisTunelu?: string;
    EvidencniKilometraz?: string;
    EvidencniCisloTunelu?: string;
}
export interface ProvozniPlochaTuneluPlochaAttrs {
    EvidencniKilometraz?: string;
    NerozlisenaKilometraz?: string;
    TypTunelu?: number;
    EvidencniCisloTunelu?: string;
    PopisTunelu?: string;
}
export interface PrubehJineTechnologickeStavbyTIAttrs {
    VedeniSiteVJineStavbe?: number;
    StavObjektu?: number;
    TypPrubehuJineTechnologickeStavbyTI?: number;
    PopisPrubehuJineTStavby?: string;
}
export interface PrubehPropustkuAttrs {
    EvidencniKilometraz?: string;
    ZpusobPorizeniZPS?: number;
    Prubeh?: number;
}
export interface RampaDefinicniBodAttrs {
    RelatVyskaRampyKTemKolej?: number;
    MaterialRampy?: number;
}
export interface RampaPlochaAttrs {
    RelatVyskaRampyKTemKolej?: number;
    MaterialRampy?: number;
}
export interface SchodisteDefinicniBodAttrs {
    DruhSchodiste?: number;
    TypSchodiste?: number;
    Konstrukce?: number;
}
export interface SchodistePlochaAttrs {
    TypSchodiste?: number;
    DruhSchodiste?: number;
    Konstrukce?: number;
}
export interface SdilenyObjektTIAttrs {
    UmisteniObjektu?: number;
    TypSdilenehoObjektuTI?: number;
    StavObjektu?: number;
    PopisSdilenehoObjektuTI?: string;
    Natoceni?: number;
}
export interface SilnicniDopravaKoridorZameruLinieAttrs {
    TypObjektuSilnicniDopravyZameru?: number;
}
export interface SilnicniDopravaKoridorZameruPlochaAttrs {
    TypObjektuSilnicniDopravyZameru?: number;
}
export interface SilnicniDopravaMistoZameruBodAttrs {
    Natoceni?: number;
}
export interface SkladkaOdpaduBodAttrs {
    StavSkladkyOdpadu?: number;
    ZpusobRekultivace?: string;
    DatumRekultivace?: string;
    TypOdpadu?: number;
    Kapacita?: number;
    Natoceni?: number;
}
export interface SkladkaOdpaduPlochaAttrs {
    DatumRekultivace?: string;
    Kapacita?: number;
    StavSkladkyOdpadu?: number;
    TypOdpadu?: number;
    ZpusobRekultivace?: string;
}
export interface SledovanaVodniCestaLinieAttrs {
    OznaceniObjektu?: string;
    NazevSledovaneVodniCesty?: string;
    ZarazeniSledovaneVodniCesty?: number;
    TridaDopravneVyznamneVodniCesty?: number;
    TypSledovaneVodniCesty?: number;
}
export interface SledovanaVodniCestaPlochaAttrs {
    NazevSledovaneVodniCesty?: string;
    OznaceniObjektu?: string;
    TypSledovaneVodniCesty?: number;
    ZarazeniSledovaneVodniCesty?: number;
    TridaDopravneVyznamneVodniCesty?: number;
}
export interface SloupTechnologickeKonstrukceAttrs {
    ZpusobPorizeniZPS?: number;
    TypSloupuTechnologickeKonst?: number;
    Natoceni?: number;
}
export interface SouhrnnaPlochaZeleznicnichDrahDefinicniBodAttrs {
    TypUsekuZeleznicniTrate?: number;
    TypPlochyZeleznice?: number;
}
export interface SouhrnnaPlochaZeleznicnichDrahPlochaAttrs {
    TypUsekuZeleznicniTrate?: number;
    TypPlochyZeleznice?: number;
}
export interface SpalovnaBodAttrs {
    Kapacita?: number;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface SpalovnaPlochaAttrs {
    Kapacita?: number;
    StavObjektu?: number;
}
export interface StaniceElektrickeSiteBodAttrs {
    MaximalniNapetovaHladina?: number;
    MaximalniProvozniNapeti?: number;
    ProvozniNapeti?: string;
    TypStaniceElektrickeSite?: number;
    DruhStaniceElektrickeSite?: number;
    StavObjektu?: number;
    DruhElektrickehoProudu?: number;
    Natoceni?: number;
}
export interface StaniceElektrickeSitePlochaAttrs {
    MaximalniNapetovaHladina?: number;
    MaximalniProvozniNapeti?: number;
    ProvozniNapeti?: string;
    TypStaniceElektrickeSite?: number;
    DruhStaniceElektrickeSite?: number;
    StavObjektu?: number;
    DruhElektrickehoProudu?: number;
}
export interface StavbaProZpevneniPovrchuDefinicniBodAttrs {
    PopisStavbyProZpevneniPovr?: string;
    TypStavbyProZpevneniPovrch?: number;
}
export interface StavbaProZpevneniPovrchuPlochaAttrs {
    PopisStavbyProZpevneniPovr?: string;
    TypStavbyProZpevneniPovrch?: number;
}
export interface StavebneUpravenyVjezdNaPozemekAttrs {
    PrujezdnaSirka?: number;
    PrujezdnaVyska?: number;
    HraniceJinehoObjektu?: boolean;
    ZpusobPorizeniZPS?: number;
    PopisVjezdu?: string;
}
export interface StojanNabijeniVydejniStojanAttrs {
    TypNabijecihoVydejnihoMedia?: number;
    ZpusobPorizeniZPS?: number;
    Natoceni?: number;
}
export interface StudnaNaVerejnemProstranstviAttrs {
    ZpusobPorizeniZPS?: number;
    Natoceni?: number;
}
export interface StupenBodAttrs {
    ZpusobPorizeniZPS?: number;
    Natoceni?: number;
}
export interface SvodidloAttrs {
    TypSvodidla?: number;
    ZpusobPorizeniZPS?: number;
}
export interface TechnickyKanalAttrs {
    VedeniSiteVJineStavbe?: number;
    TypTechnickehoKanalu?: number;
    PopisKabelovoduPotrubniChra?: string;
    StavObjektu?: number;
    Obsazenost?: number;
    TypChranenehoPrvku?: number;
    TypZakresuKabelovoduChranic?: number;
    UmisteniKabelovoduChranicky?: number;
}
export interface TechnologickyPortalLinieAttrs {
    TypTechnologickeKonstrukce?: number;
    SpravceDI?: number;
}
export interface TechnologickyPortalPlochaAttrs {
    TypTechnologickeKonstrukce?: number;
    SpravceDI?: number;
}
export interface TeplovodMistoZameruBodAttrs {
    TypTechnologickehoObjektuTeplovodniSite?: number;
    Natoceni?: number;
}
export interface TeplovodMistoZameruPlochaAttrs {
    TypTechnologickehoObjektuTeplovodniSite?: number;
}
export interface TerenniHranaAttrs {
    TypTerenniHrany?: number;
    ZpusobPorizeniZPS?: number;
}
export interface TerminalKombinovaneDopravyMistoZameruBodAttrs {
    Natoceni?: number;
}
export interface TrasaProtikorozniOchranyAttrs {
    PopisProtikorozniOchrany?: string;
    TypPKO?: number;
    TypInzenyrskeSitePKO?: number;
    StavObjektu?: number;
}
export interface TrasaElektrickeSiteAttrs {
    TypTrasyElektrickeSite?: number;
    IzolaceVenkovnihoVedeni?: number;
    MaximalniNapetovaHladina?: number;
    StavTrasySiteTI?: number;
    MaximalniProvozniNapeti?: number;
    ProvozniNapeti?: string;
    PopisTrasyElektrickeSite?: string;
    PocetVedeniVTrase?: number;
    VedeniSiteVJineStavbe?: number;
    UmisteniTrasyElektrickeSite?: number;
    DruhElektrickehoProudu?: number;
}
export interface TrasaKanalizacniPripojkyAttrs {
    UceloveZarazeniStokoveSite?: number;
    Material?: string;
    DruhStokoveSite?: number;
    Dimenze?: number;
    StavObjektu?: number;
}
export interface TrasaMistniElektrickeSiteAttrs {
    StavTrasySiteTI?: number;
    TypTrasyMistniElektrickeSite?: number;
    VedeniSiteVJineStavbe?: number;
    UmisteniTrasyElektrickeSite?: number;
}
export interface TrasaOdbernehoElektrickehoZarizeniAttrs {
    StavObjektu?: number;
}
export interface TrasaOdbernehoPlynovehoZarizeniAttrs {
    Dimenze?: number;
    TlakovaHladinaPlynovodniSite?: number;
    StavObjektu?: number;
}
export interface TrasaPlynovodniPripojkyAttrs {
    StavTrasySiteTI?: number;
    VedeniSiteVJineStavbe?: number;
    TlakovaHladinaPlynovodniSite?: number;
    Dimenze?: number;
}
export interface TrasaPlynovodniSiteAttrs {
    StavTrasySiteTI?: number;
    TypMediaPlynovodniSite?: number;
    TlakovaHladinaPlynovodniSite?: number;
    Dimenze?: number;
    VedeniSiteVJineStavbe?: number;
    PopisTrasyPlynovodniSite?: string;
    UmisteniTrasyPlynovodniSite?: number;
}
export interface TrasaPotrubniPostyAttrs {
    Dimenze?: number;
    StavObjektu?: number;
}
export interface TrasaRadiovehoSmerovehoSpojeAttrs {
    StavObjektu?: number;
}
export interface TrasaSiteEKAttrs {
    StavTrasySiteTI?: number;
    MaterialTrasySiteEK?: number;
    PopisTrasySiteEk?: string;
    ZpusobOchranyVedeniSiteEK?: number;
    UmisteniTrasySiteEk?: number;
    PrehledKabeluVTrasePocetX?: string;
    VyuzitiTrasySiteEk?: number;
    VedeniSiteVJineStavbe?: number;
    PocetVedeniVTrase?: number;
    DelkaUsekuTrasyZavesKabelu?: number;
    DruhTrasySiteEk?: number;
}
export interface TrasaSiteProduktovoduAttrs {
    StavTrasySiteTI?: number;
    PopisTrasyProduktovodu?: string;
    Dimenze?: number;
    VedeniSiteVJineStavbe?: number;
    UmisteniTrasyProduktovodu?: number;
}
export interface TrasaStokoveSiteAttrs {
    TypTrasyStokoveSite?: number;
    DruhStokoveSite?: number;
    UceloveZarazeniStokoveSite?: number;
    StavTrasySiteTI?: number;
    Dimenze?: number;
    Material?: string;
    ICME?: string;
    VedeniSiteVJineStavbe?: number;
    PopisTrasyKanalizacniSite?: string;
    UmisteniTrasyKanalizacniSit?: number;
}
export interface TrasaTeplovodniSiteAttrs {
    Dimenze?: number;
    StavTrasySiteTI?: number;
    TypTrasyTeplovodniSite?: number;
    TypTeplovodniSite?: number;
    VedeniSiteVJineStavbe?: number;
    PopisTrasyTeplovodniSite?: string;
    UmisteniTeplovodniSite?: number;
    UmisteniTrasyTeplovodSite?: number;
}
export interface TrasaTrakcnihoTrolejovehoVedeniAttrs {
    PopisTrakcnihoVedeni?: string;
    StavTrasySiteTI?: number;
    ProvozniNapeti?: string;
    DruhElektrickehoProuduTrakcnihoVedeni?: number;
    TypDrahy?: number;
}
export interface TrasaVodovodniPripojkyAttrs {
    Material?: string;
    Dimenze?: number;
    StavObjektu?: number;
}
export interface TrasaVodovodniSiteAttrs {
    TypTrasyVodovodniSite?: number;
    TypMediaVodovodniSite?: number;
    Dimenze?: number;
    Material?: string;
    StavTrasySiteTI?: number;
    VedeniSiteVJineStavbe?: number;
    ICME?: string;
    PopisTrasyVodovodniSite?: string;
    UmisteniTrasyVodovodniSite?: number;
}
export interface UdrzovanaPlochaZeleneDefinicniBodAttrs {
    TypUdrzovaneZelene?: number;
}
export interface UdrzovanaPlochaZelenePlochaAttrs {
    TypUdrzovaneZelene?: number;
}
export interface VisutaLanovaDrahaAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface VnitrniCleneniBudovStavebAttrs {
    TypHraniceVnitrniCleneniBu?: number;
    ZpusobPorizeniZPS?: number;
}
export interface VnitrniCleneniDopravniPlochyAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface VodniCastPristavuBodAttrs {
    OznaceniObjektu?: string;
    TypPristavu?: number;
    OchrannaFunkce?: boolean;
    Natoceni?: number;
}
export interface VodniCastPristavuPlochaAttrs {
    OznaceniObjektu?: string;
    TypPristavu?: number;
    OchrannaFunkce?: boolean;
}
export interface VodniDopravaMistoZameruBodAttrs {
    Natoceni?: number;
}
export interface VodniTokDefinicniBodAttrs {
    PopisVodnihoToku?: string;
    TypVodnihoToku?: number;
}
export interface VodniTokLinieAttrs {
    ZpusobPorizeniZPS?: number;
    HraniceJinehoObjektu?: boolean;
    TypVodnihoToku?: number;
}
export interface VodniTokPlochaAttrs {
    PopisVodnihoToku?: string;
    TypVodnihoToku?: number;
}
export interface VodovodMistoZameruBodAttrs {
    TypObjektuVodovodniSiteZameru?: number;
    Natoceni?: number;
}
export interface VodovodMistoZameruPlochaAttrs {
    TypObjektuVodovodniSiteZameru?: number;
}
export interface VrtAttrs {
    TypVrtu?: number;
    ZpusobPorizeniZPS?: number;
    PopisVrtu?: string;
    Natoceni?: number;
}
export interface VyrobnaElektrinyNad100kWBodAttrs {
    TypVyrobnyElektriny?: number;
    InstalovanyVykon?: string;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface VyrobnaElektrinyNad100kWPlochaAttrs {
    TypVyrobnyElektriny?: number;
    InstalovanyVykon?: string;
    StavObjektu?: number;
}
export interface VyskovyBodNaTerenuAttrs {
    VyskaNaTerenu?: string;
    ZpusobPorizeniZPS?: number;
    CisloBodu?: string;
    Natoceni?: number;
}
export interface VytahVChodnikuAttrs {
    ZpusobPorizeniZPS?: number;
    Natoceni?: number;
}
export interface VzletovaPristavaciDrahaAttrs {
    TypPovrchuVzletovePristavaciDrahy?: number;
}
export interface ZabradliAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface ZarizeniProtikorozniOchranyBodAttrs {
    TypBodovehoZarizeniProtikor?: number;
    TypInzenyrskeSitePKO?: number;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface ZarizeniProtikorozniOchranyPlochaAttrs {
    StavObjektu?: number;
    TypInzenyrskeSitePKO?: number;
}
export interface ZarizeniElektrickeSiteAttrs {
    TypZarizeniElektrickeSite?: number;
    PopisZarizeniElektrickeSite?: string;
    StavObjektu?: number;
    UmisteniObjektu?: number;
    Natoceni?: number;
}
export interface ZarizeniKanalizacniPripojkyBodAttrs {
    TypZarizeniKanalizacniPripojky?: number;
    StavObjektu?: number;
}
export interface ZarizeniKanalizacniPripojkyDefinicniBodAttrs {
    StavObjektu?: number;
    TypZarizeniKanalizacniPripojky?: number;
}
export interface ZarizeniKanalizacniPripojkyPlochaAttrs {
    StavObjektu?: number;
    TypZarizeniKanalizacniPripojky?: number;
}
export interface ZarizeniProLeteckyProvozAttrs {
    OznaceniObjektu?: string;
    TypZarizeniProLeteckyProvoz?: number;
    Natoceni?: number;
}
export interface ZarizeniPlynovodniSiteAttrs {
    TypZarizeniPlynovodniSite?: number;
    UmisteniObjektu?: number;
    StavObjektu?: number;
    PopisZarizeniPlynovodniSite?: string;
    Natoceni?: number;
}
export interface ZarizeniPotrubniPostyAttrs {
    TypZarizeniPotrubniPosty?: number;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface ZarizeniPrivadeceAttrs {
    TypZarizeniPrivadece?: number;
    StavObjektu?: number;
    Natoceni?: number;
}
export interface ZarizeniSiteEKAttrs {
    TypZarizeniSiteEK?: number;
    VyuzitiZarizeniEk?: number;
    UmisteniObjektu?: number;
    StavObjektu?: number;
    PopisZarizeniSiteEk?: string;
    DruhTrasySiteEk?: number;
    Natoceni?: number;
}
export interface ZarizeniSiteProduktovoduBodAttrs {
    TypZarizeniSiteProduktovodu?: number;
    StavObjektu?: number;
    PopisZarizeniProduktovodu?: string;
    Natoceni?: number;
}
export interface ZarizeniSiteProduktovoduPlochaAttrs {
    StavObjektu?: number;
    TypZarizeniSiteProduktovodu?: number;
    PopisZarizeniProduktovodu?: string;
}
export interface ZarizeniTeplovodniSiteAttrs {
    TypZarizeniTeplovodniSite?: number;
    StavObjektu?: number;
    PopisZarizeniTeplovodniSite?: string;
    Natoceni?: number;
}
export interface ZarizeniVodovodniPripojkyBodAttrs {
    TypZarizeniVodovodniPripojky?: number;
    StavObjektu?: number;
}
export interface ZarizeniVodovodniPripojkyDefinicniBodAttrs {
    StavObjektu?: number;
    TypZarizeniVodovodniPripojky?: number;
}
export interface ZarizeniVodovodniPripojkyPlochaAttrs {
    StavObjektu?: number;
    TypZarizeniVodovodniPripojky?: number;
}
export interface ZastreseniDefinicniBodAttrs {
    TypZastreseni?: number;
}
export interface ZastreseniPlochaAttrs {
    TypZastreseni?: number;
}
export interface ZatrubnenyVodniTokAttrs {
    Dimenze?: number;
    Material?: string;
}
export interface ZedDefinicniBodAttrs {
    TypZdi?: number;
    VyskaOperneZdi?: string;
    PopisOperneZdi?: string;
}
export interface ZedLinieAttrs {
    HraniceJinehoObjektu?: boolean;
    TypZdi?: number;
    ZpusobPorizeniZPS?: number;
}
export interface ZedPlochaAttrs {
    TypZdi?: number;
    PopisOperneZdi?: string;
    VyskaOperneZdi?: string;
}
export interface ZeleznicniPrejezdAttrs {
    PopisPrejezdu?: string;
    TypPrejezdu?: number;
    EvidencniKilometraz?: string;
    NerozlisenaKilometraz?: string;
}
export interface ZemedelskaPlochaDefinicniBodAttrs {
    TypZemedelskePlochy?: number;
}
export interface ZemedelskaPlochaPlochaAttrs {
    TypZemedelskePlochy?: number;
}
export interface BalizaAttrs {
    TypBalizy?: number;
    Natoceni?: number;
}
export interface BrzdaAttrs {
    TypBrzdy?: number;
}
export interface ChybaVDatechAttrs {
    PopisChyby?: string;
}
export interface CidloSnimacPrepinacObecnyMimoKolejeAttrs {
    PopisCidlaSnimacePrepinace?: number;
    Natoceni?: number;
}
export interface CidloSnimacPrepinacObecnyVKolejiAttrs {
    Natoceni?: number;
}
export interface DetektorVolnostiPrejezduAttrs {
    Natoceni?: number;
}
export interface DiagnostickySystemDetektorCPMASDEKAttrs {
    PopisDiagnostickehoSystemu?: string;
}
export interface DiagnostickySystemHranaAttrs {
    PopisDiagnostickehoSystemu?: string;
}
export interface DnoSachtyKolektoruAttrs {
    Natoceni?: number;
    UzitiSachty?: number;
}
export interface DopravniZnackaObjektAttrs {
    TypDopravniZnackyObjektu?: number;
    UmisteniObjektu?: number;
    Natoceni?: number;
}
export interface DrhlikAttrs {
    TypDrhliku?: number;
    Natoceni?: number;
}
export interface DvereVProtihlukoveSteneCloneAttrs {
    Natoceni?: number;
}
export interface ElektroMagnetickyZamekAttrs {
    Natoceni?: number;
}
export interface HrizAttrs {
    DelkaMostuVMetrech?: number;
    HmotnostNaNapravuVTunach?: number;
}
export interface HydrogeologickyVrtAttrs {
    CisloVrtu?: string;
    PopisVrtu?: string;
    Natoceni?: number;
}
export interface InformacniTabuleNeelektronickeBodAttrs {
    Natoceni?: number;
}
export interface IzolovanaKolejniceAttrs {
    TypIzolovaneKolejnice?: number;
}
export interface IzolovanyStykAttrs {
    PolohaIzolovanehoStykuVeSmeruStaniceni?: number;
    Natoceni?: number;
}
export interface JednotlivyStromAttrs {
    Natoceni?: number;
}
export interface JerabAttrs {
    PopisPojizdnehoJerabu?: string;
    NosnostProMaximalniDelkuVy?: number;
    MaximalniDelkaVylozniku?: number;
    TypJerabu?: number;
    KonstrukceJerabu?: number;
}
export interface KabelovyVstupVystupDoSachtyKolektoruAttrs {
    Natoceni?: number;
}
export interface KDZAttrs {
    TypDilatace?: number;
    Natoceni?: number;
}
export interface KDZZacatekPohybliveCastiAttrs {
    Natoceni?: number;
}
export interface KolejnicePojizdnehoJerabuAttrs {
    TypJerabu?: number;
}
export interface KolejnicovyMaznikAttrs {
    Natoceni?: number;
}
export interface BodKolejnicovehoPasuAttrs {
    TypBoduKolejnicovehoPasu?: number;
    Natoceni?: number;
}
export interface KonecKDZAttrs {
    Natoceni?: number;
}
export interface KonecKolejovehoObvoduAttrs {
    PopisKonceKolejovehoObvodu?: string;
    Natoceni?: number;
}
export interface KozlikovyJerabAttrs {
    PopisNosnostVTunach?: string;
    Natoceni?: number;
}
export interface BodKrizovatkyAttrs {
    CisloKolejoveKrizovatky?: string;
    TypBoduKrizovatky?: number;
    Natoceni?: number;
}
export interface LicSloupuStozaruPodperyLampyAttrs {
    Natoceni?: number;
}
export interface MagnetickaZnackaAttrs {
    Natoceni?: number;
}
export interface MagnetickeInformacniBodyAttrs {
    PopisMagnetickychInformacnic?: string;
}
export interface MechanickaZavoraSamostatnyZavorovyStojanAttrs {
    Natoceni?: number;
}
export interface MericKategorieHmotnostiAttrs {
    Natoceni?: number;
}
export interface MeznikAttrs {
    Natoceni?: number;
}
export interface MostniSachtaAttrs {
    Natoceni?: number;
}
export interface NameznikKoncovnikAttrs {
    TypNameznikuKoncovniku?: number;
    Natoceni?: number;
}
export interface NastupisteNastupniPlochaAttrs {
    DelkaNastupiste?: number;
    TypDelkyNastupiste?: number;
}
export interface NavestHraniceIzolovanehoUsekuAttrs {
    Natoceni?: number;
}
export interface NavestHraniceProvozovateleDrahyAttrs {
    Natoceni?: number;
}
export interface NavestRychlostnikPredvestnikAttrs {
    UmisteniNavestidlaTabulky?: number;
    RychlostObsahNavesti?: string;
    TypNavestiRychlostnikuPredv?: number;
    Poradi?: number;
    Natoceni?: number;
}
export interface NavestidloMechanickeAttrs {
    TypMechanickehoNavestidla?: number;
    PopisMechanickehoNavestidla?: string;
    UmisteniNavestidlaTabulky?: number;
    Natoceni?: number;
}
export interface NavestidloSvetelneAttrs {
    TypSvetelnehoNavestidla?: number;
    PopisSvetelnehoNavestidla?: string;
    UmisteniNavestidlaTabulky?: number;
    Natoceni?: number;
}
export interface NavestidloTabulkaAttrs {
    PopisNavestidlaTabulka?: string;
    UmisteniNavestidlaTabulky?: number;
    Natoceni?: number;
    TypNavestidlaTabulka?: number;
}
export interface ObrysniceAttrs {
    Natoceni?: number;
}
export interface OvladaniZabezpecovacihoZarizeniAttrs {
    PopisOvladaniZabezpecovaciho?: string;
    TypOvladaniZabezpecovacihoZ?: number;
    Natoceni?: number;
}
export interface OznacnikAttrs {
    Natoceni?: number;
}
export interface PodperneZarizeniSZAttrs {
    TypPodpernehoZarizeniSZNeboJehoPrislusenstvi?: number;
    OznaceniPodpernehoZarizeniSZNeboJehoPrislusenstvi?: string;
    Natoceni?: number;
}
export interface PohonMechanickychZavorAttrs {
    TypPohonuMechanickychZavor?: number;
    Natoceni?: number;
}
export interface PortalTuneluGalerieOstatniKresbaAttrs {
    CisloPortalu?: string;
    EvidencniKilometraz?: string;
    NerozlisenaKilometraz?: string;
}
export interface PredmetMalehoRozsahuAttrs {
    PopisPredmetuMalehoRozsahu?: string;
    TypPredmetuMalehoRozsahu?: number;
    Natoceni?: number;
}
export interface PrestavnikZavornikAttrs {
    Natoceni?: number;
}
export interface PresuvnaAttrs {
    HmotnostNaNapravuVTunach?: number;
    DelkaMostuVMetrech?: number;
    TypPresuvny?: number;
}
export interface PripojneMistoAttrs {
    Natoceni?: number;
}
export interface PritokNeboOdtokPotrubiDoSachtyAttrs {
    Natoceni?: number;
}
export interface ProhlidkovaCisticiNeboOdkalovaciJamaHranaAttrs {
    PopisProhlidCisticiNeboOdkalJamy?: string;
}
export interface PropustekOstatniKresbaAttrs {
    EvidencniKilometraz?: string;
    NerozlisenaKilometraz?: string;
}
export interface PruzkumnaSachticeAttrs {
    PopisPruzkumneSachtice?: string;
    Natoceni?: number;
}
export interface RevizniSachtaTuneloveStokyAttrs {
    CisloSachty?: string;
    PopisSachty?: string;
    Natoceni?: number;
}
export interface RevizniSachtaTuneloveStokyHranaAttrs {
    PopisSachty?: string;
    CisloSachty?: string;
}
export interface SklepBodAttrs {
    Natoceni?: number;
}
export interface SklepTextAttrs {
    Natoceni?: number;
}
export interface SnimacPocitaceNapravAttrs {
    Natoceni?: number;
}
export interface SnimacPolohyJazykuAttrs {
    Natoceni?: number;
}
export interface SondaAttrs {
    Natoceni?: number;
}
export interface SpecialniBodAttrs {
    TypSpecialnihoBodu?: number;
    PopisSpecialnihoBodu?: string;
    Natoceni?: number;
}
export interface SpojkaNaHDPTrubceAttrs {
    Natoceni?: number;
}
export interface StanicnikAttrs {
    PopisDruhehoKilometrickehoU?: string;
    PopisStaniceni?: string;
    Natoceni?: number;
    TypStanicniku?: number;
}
export interface StavbaProZpevneniPovrchuOstatniKresbaAttrs {
    PopisZajisteniSkalOchranna?: string;
}
export interface StojanNaVozoveZarazkyAttrs {
    Natoceni?: number;
}
export interface SvarAttrs {
    PopisSvaru?: string;
    Natoceni?: number;
    TypSvaru?: number;
}
export interface TocniceAttrs {
    HmotnostNaNapravuVTunach?: number;
    DelkaMostuVMetrech?: number;
}
export interface TrasaDratovoduAttrs {
    TypDratovodu?: number;
    PopisTrasyDratovodu?: string;
}
export interface TrasaNeurceneKabeloveSiteAttrs {
    PopisTrasyNeurcenehKabeloveSite?: string;
    UmisteniTrasyNeurKabSite?: number;
}
export interface TrasaNeurcenehoTrubkovehoVedeniAttrs {
    Material?: string;
    PopisTrasyNeurcenehoTrubkov?: string;
    Dimenze?: number;
    UmisteniTrasyNeurTrubVed?: number;
}
export interface TunelovaStokaAttrs {
    PopisTuneloveStoky?: string;
}
export interface UhelnikAttrs {
    TypUhelniku?: number;
}
export interface UstiStolyNeboUklonneJamyVstupDoPodzProstoruAttrs {
    Natoceni?: number;
}
export interface VnejsiKonecPricnehoVarovnehoPasuNaNastupistiAttrs {
    Natoceni?: number;
}
export interface VratekNaPosunAttrs {
    DruhZarizeniVratku?: number;
    Natoceni?: number;
}
export interface VrcholSvaznehoPahrbkuAttrs {
    Natoceni?: number;
}
export interface VyhledavaciVodicAttrs {
    TypInzenyrskeSitePKO?: number;
}
export interface BodVyhybkyAttrs {
    Natoceni?: number;
    TypBoduVyhybky?: number;
}
export interface VyklenekVTuneluBodAttrs {
    Natoceni?: number;
}
export interface VykolejkaAttrs {
    TypVykolejky?: number;
    NavestTelesoVykolejky?: number;
    Natoceni?: number;
}
export interface VyrobnaElektrinyDo100kWBodAttrs {
    TypVyrobnyElektriny?: number;
    InstalovanyVykon?: string;
    Natoceni?: number;
}
export interface VyrobnaElektrinyDo100kWPlochaAttrs {
    TypVyrobnyElektriny?: number;
    InstalovanyVykon?: string;
}
export interface VystrazneZarizeniNaNastupistiAttrs {
    TypVystraznehoZarizeniNaNa?: number;
    Natoceni?: number;
}
export interface VystraznikPZSAttrs {
    TypVystrazniku?: number;
    Natoceni?: number;
}
export interface VystraznyKrizProPrejezdAttrs {
    TypVystraznehoKrizeProPrej?: number;
    Natoceni?: number;
}
export interface VytahAttrs {
    TypVytahu?: number;
}
export interface ZacatekKonecElektrizovanehoUsekuTratiAttrs {
    Natoceni?: number;
}
export interface ZacatekJazykaVyhybkyAttrs {
    CisloVyhybky?: string;
    PolohaStavecihoZarizeni?: number;
    Natoceni?: number;
}
export interface ZajisteniSkalZemniKotvaSkalniTrnAttrs {
    Natoceni?: number;
}
export interface ZajistovaciZnackaAttrs {
    PopisZajistovaciZnacky?: string;
    Natoceni?: number;
}
export interface ZarazedloBodAttrs {
    TypZarazedla?: number;
    PopisZarazedla?: string;
    Natoceni?: number;
}
export interface ZarazedloAttrs {
    PopisZarazedla?: string;
    TypZarazedla?: number;
}
export interface ZarazkovaBrzdaAttrs {
    TypZarazkoveBrzdy?: number;
    Natoceni?: number;
}
export interface ZarizeniDratovoduAttrs {
    PopisZarizeniDratovodu?: string;
    TypZarizeniDratovodu?: number;
    Natoceni?: number;
}
export interface ZarizeniNeurceneKabeloveSiteAttrs {
    TypZarizeniNeurceneKabeloveSite?: number;
    UmisteniObjektu?: number;
    Natoceni?: number;
}
export interface ZarizeniNeurcenehoTrubkovehoVedeniAttrs {
    PopisZarizeniNeurcenehoTrub?: string;
    TypZarizeniNeurcenehoTrubko?: number;
    VyskovaKotaVstupniSachty?: string;
    Natoceni?: number;
}
export interface ZarizeniSiteEKSZAttrs {
    TypZarizeniSiteEKSZ?: number;
    VyuzitiZarizeniEk?: number;
    UmisteniObjektu?: number;
    PopisZarizeniSiteEkSZ?: string;
    DruhTrasySiteEk?: number;
    Natoceni?: number;
}
export interface ZdvihaciZarizeniVozovychSkriniAttrs {
    Natoceni?: number;
}
export interface ZmenaUsekoveVlastnostiKolejeAttrs {
    PopisZmenyUsekoveVlastnosti?: string;
    Natoceni?: number;
}
export interface ZridloPramenPrirLecivyZdrojAttrs {
    PopisZdroje?: string;
    Natoceni?: number;
}
export interface ZvlastniPlochaObrysAttrs {
    TypZvlastniPlochy?: number;
}
export interface ZvlastniPlochaLinieVOseKolejeAttrs {
    TypZvlastniPlochyLinieVOs?: number;
}
/** Catalog of all 513 ŽXML 1.5.1.6 entity types, keyed by XML element name */
export declare const ENTITY_CATALOG: Record<string, EntityMeta>;
/** Map of element names to their specific attribute interface types */
export type EntityAttrsMap = {
    "BPPlynovodniSite": BPPlynovodniSiteAttrs;
    "BPPodzemnihoZasobnikuPlynu": BPPodzemnihoZasobnikuPlynuAttrs;
    "BPZarizeniPKO": Record<string, never>;
    "OPDalniceProReklamniZarizeni": OPDalniceProReklamniZarizeniAttrs;
    "OPDrazniStavby": OPDrazniStavbyAttrs;
    "OPElektrickeSite": OPElektrickeSiteAttrs;
    "OPJadernehoZarizeni": Record<string, never>;
    "OPKolektoruKabelovodu": Record<string, never>;
    "OPLeteckychZabezpecovacichZarizeni": OPLeteckychZabezpecovacichZarizeniAttrs;
    "OPLetiste": OPLetisteAttrs;
    "OPObjektuKanalizace": Record<string, never>;
    "OPObjektuVodovodu": Record<string, never>;
    "OPPlynovodniSite": OPPlynovodniSiteAttrs;
    "OPPodzemnihoZasobnikuPlynu": OPPodzemnihoZasobnikuPlynuAttrs;
    "OPPozemniKomunikace": OPPozemniKomunikaceAttrs;
    "OPSiteEK": OPSiteEKAttrs;
    "OPSiteProduktovodu": OPSiteProduktovoduAttrs;
    "OPStaniceElektrickeSite": OPStaniceElektrickeSiteAttrs;
    "OPStavbyProVodniDopravu": OPStavbyProVodniDopravuAttrs;
    "OPTeplovodniSite": Record<string, never>;
    "OPVodnihoDila": Record<string, never>;
    "OPVyrobnyElektriny": OPVyrobnyElektrinyAttrs;
    "OPZarizeniPKO": Record<string, never>;
    "OPZarizeniOdpadovehoHospodarstvi": OPZarizeniOdpadovehoHospodarstviAttrs;
    "TechnologickyObjektPlynovodniSiteBod": TechnologickyObjektPlynovodniSiteBodAttrs;
    "TechnologickyObjektPlynovodniSitePlocha": TechnologickyObjektPlynovodniSitePlochaAttrs;
    "TechnologickyObjektSiteEKBod": TechnologickyObjektSiteEKBodAttrs;
    "TechnologickyObjektSiteEKPlocha": TechnologickyObjektSiteEKPlochaAttrs;
    "TechnologickyObjektSiteProduktovoduBod": TechnologickyObjektSiteProduktovoduBodAttrs;
    "TechnologickyObjektSiteProduktovoduPlocha": TechnologickyObjektSiteProduktovoduPlochaAttrs;
    "TechnologickyObjektTeplovodniSiteBod": TechnologickyObjektTeplovodniSiteBodAttrs;
    "TechnologickyObjektTeplovodniSitePlocha": TechnologickyObjektTeplovodniSitePlochaAttrs;
    "BudovaDefinicniBod": BudovaDefinicniBodAttrs;
    "BudovaPlocha": BudovaPlochaAttrs;
    "CeloPropustkuDefinicniBod": CeloPropustkuDefinicniBodAttrs;
    "CeloPropustkuPlocha": CeloPropustkuPlochaAttrs;
    "ChodnikDefinicniBod": ChodnikDefinicniBodAttrs;
    "ChodnikPlocha": ChodnikPlochaAttrs;
    "CyklistickaDopravaKoridorZameruLinie": Record<string, never>;
    "CyklistickaDopravaKoridorZameruPlocha": Record<string, never>;
    "CyklistickaDopravaMistoZameruBod": CyklistickaDopravaMistoZameruBodAttrs;
    "CyklistickaDopravaMistoZameruPlocha": Record<string, never>;
    "CyklostezkaDefinicniBod": CyklostezkaDefinicniBodAttrs;
    "CyklostezkaPlocha": CyklostezkaPlochaAttrs;
    "DeliciPasDefinicniBod": Record<string, never>;
    "DeliciPasPlocha": Record<string, never>;
    "DopravneVyznamneMistoDrazeBod": DopravneVyznamneMistoDrazeBodAttrs;
    "DopravneVyznamneMistoDrazePlocha": DopravneVyznamneMistoDrazePlochaAttrs;
    "DopravniOstruvekDefinicniBod": Record<string, never>;
    "DopravniOstruvekPlocha": Record<string, never>;
    "DopravniUzelSilnicniSite": DopravniUzelSilnicniSiteAttrs;
    "DrazniDopravaKoridorZameruLinie": DrazniDopravaKoridorZameruLinieAttrs;
    "DrazniDopravaKoridorZameruPlocha": DrazniDopravaKoridorZameruPlochaAttrs;
    "DrazniDopravaMistoZameruBod": DrazniDopravaMistoZameruBodAttrs;
    "DrazniDopravaMistoZameruPlocha": DrazniDopravaMistoZameruPlochaAttrs;
    "DrobnaKulturniStavbaBod": DrobnaKulturniStavbaBodAttrs;
    "DrobnaKulturniStavbaDefinicniBod": DrobnaKulturniStavbaDefinicniBodAttrs;
    "DrobnaKulturniStavbaPlocha": DrobnaKulturniStavbaPlochaAttrs;
    "DrobnaSakralniStavbaBod": DrobnaSakralniStavbaBodAttrs;
    "DrobnaSakralniStavbaDefinicniBod": DrobnaSakralniStavbaDefinicniBodAttrs;
    "DrobnaSakralniStavbaPlocha": DrobnaSakralniStavbaPlochaAttrs;
    "DulLomDefinicniBod": DulLomDefinicniBodAttrs;
    "DulLomPlocha": DulLomPlochaAttrs;
    "DvurNadvoriDefinicniBod": Record<string, never>;
    "DvurNadvoriPlocha": Record<string, never>;
    "ElektrickaSitKoridorZameruLinie": ElektrickaSitKoridorZameruLinieAttrs;
    "ElektrickaSitKoridorZameruPlocha": ElektrickaSitKoridorZameruPlochaAttrs;
    "ElektrickaSitMistoZameruBod": ElektrickaSitMistoZameruBodAttrs;
    "ElektrickaSitMistoZameruPlocha": ElektrickaSitMistoZameruPlochaAttrs;
    "ElektronickaKomunikaceKoridorZameruLinie": Record<string, never>;
    "ElektronickaKomunikaceKoridorZameruPlocha": Record<string, never>;
    "ElektronickaKomunikaceMistoZameruBod": ElektronickaKomunikaceMistoZameruBodAttrs;
    "ElektronickaKomunikaceMistoZameruPlocha": Record<string, never>;
    "HeliportBod": HeliportBodAttrs;
    "HeliportPlocha": HeliportPlochaAttrs;
    "HorniHranaObrubyLinie": HorniHranaObrubyLinieAttrs;
    "HospodarskyNevyuzivanaPlochaDefinicniBod": HospodarskyNevyuzivanaPlochaDefinicniBodAttrs;
    "HospodarskyNevyuzivanaPlochaPlocha": HospodarskyNevyuzivanaPlochaPlochaAttrs;
    "HraniceBudovy": HraniceBudovyAttrs;
    "HraniceDopravniStavbyPlochy": HraniceDopravniStavbyPlochyAttrs;
    "HraniceOstatniPlochy": HraniceOstatniPlochyAttrs;
    "HranicePodzemnihoObjektuZPS": HranicePodzemnihoObjektuZPSAttrs;
    "HranicePrirodnihoPoloprirodnihoObjektu": HranicePrirodnihoPoloprirodnihoObjektuAttrs;
    "HraniceSchodiste": HraniceSchodisteAttrs;
    "HraniceStavby": HraniceStavbyAttrs;
    "HraniceUdrzovaneZelene": HraniceUdrzovaneZeleneAttrs;
    "HraniceVodnihoDila": HraniceVodnihoDilaAttrs;
    "HraniceZarizeniKanalizacniPripojky": HraniceZarizeniKanalizacniPripojkyAttrs;
    "HraniceZarizeniVodovodniPripojky": HraniceZarizeniVodovodniPripojkyAttrs;
    "HraniceZdi": HraniceZdiAttrs;
    "HrazDefinicniBod": Record<string, never>;
    "HrazPlocha": Record<string, never>;
    "HrbitovDefinicniBod": Record<string, never>;
    "HrbitovPlocha": Record<string, never>;
    "HristeDefinicniBod": Record<string, never>;
    "HristePlocha": Record<string, never>;
    "HydrantVodovodniSiteBod": HydrantVodovodniSiteBodAttrs;
    "IdentickyBod": IdentickyBodAttrs;
    "JaderneZarizeniBod": JaderneZarizeniBodAttrs;
    "JaderneZarizeniPlocha": JaderneZarizeniPlochaAttrs;
    "JezDefinicniBod": Record<string, never>;
    "JezPlocha": Record<string, never>;
    "JezeroDefinicniBod": JezeroDefinicniBodAttrs;
    "JezeroPlocha": JezeroPlochaAttrs;
    "JinaTechnologickaStavbaTI": JinaTechnologickaStavbaTIAttrs;
    "JinaTechnologickaStavbaTIPlocha": JinaTechnologickaStavbaTIPlochaAttrs;
    "JineDulniDiloStavbaDefinicniBod": Record<string, never>;
    "JineDulniDiloStavbaPlocha": Record<string, never>;
    "JineZarizeniOdstranovaniVyuzivaniSberOdpaduBod": JineZarizeniOdstranovaniVyuzivaniSberOdpaduBodAttrs;
    "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha": JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlochaAttrs;
    "JineZarizeniStavebTI": JineZarizeniStavebTIAttrs;
    "JineZarizeniStavebTILinie": JineZarizeniStavebTILinieAttrs;
    "JineZarizeniStavebTIPlocha": JineZarizeniStavebTIPlochaAttrs;
    "KanalizaceKoridorZameruLinie": Record<string, never>;
    "KanalizaceKoridorZameruPlocha": Record<string, never>;
    "KanalizaceMistoZameruBod": KanalizaceMistoZameruBodAttrs;
    "KanalizaceMistoZameruPlocha": KanalizaceMistoZameruPlochaAttrs;
    "Kolektor": KolektorAttrs;
    "KolektorPlocha": KolektorPlochaAttrs;
    "KominDefinicniBod": Record<string, never>;
    "KominPlocha": Record<string, never>;
    "LesDefinicniBod": Record<string, never>;
    "LesPlocha": Record<string, never>;
    "LeteckaDopravaKoridorZameruLinie": Record<string, never>;
    "LeteckaDopravaKoridorZameruPlocha": Record<string, never>;
    "LeteckaDopravaMistoZameruBod": LeteckaDopravaMistoZameruBodAttrs;
    "LeteckaDopravaMistoZameruPlocha": Record<string, never>;
    "LeteckaStavbaBod": LeteckaStavbaBodAttrs;
    "LeteckaStavbaPlocha": LeteckaStavbaPlochaAttrs;
    "Letiste": LetisteAttrs;
    "ManipulacniPlochaDefinicniBod": ManipulacniPlochaDefinicniBodAttrs;
    "ManipulacniPlochaPlocha": ManipulacniPlochaPlochaAttrs;
    "MelioracniPrikopZlabDefinicniBod": Record<string, never>;
    "MelioracniPrikopZlabPlocha": Record<string, never>;
    "MelioracniSachta": MelioracniSachtaAttrs;
    "MostniVahaDefinicniBod": MostniVahaDefinicniBodAttrs;
    "MostniVahaPlocha": MostniVahaPlochaAttrs;
    "NadrzBezVzdouvacihoObjektuDefinicniBod": NadrzBezVzdouvacihoObjektuDefinicniBodAttrs;
    "NadrzBezVzdouvacihoObjektuPlocha": NadrzBezVzdouvacihoObjektuPlochaAttrs;
    "NadrzZdrzSeVzdouvacimObjektemDefinicniBod": NadrzZdrzSeVzdouvacimObjektemDefinicniBodAttrs;
    "NadrzZdrzSeVzdouvacimObjektemPlocha": NadrzZdrzSeVzdouvacimObjektemPlochaAttrs;
    "NajezdDefinicniBod": NajezdDefinicniBodAttrs;
    "NajezdPlocha": NajezdPlochaAttrs;
    "NastupisteDefinicniBod": NastupisteDefinicniBodAttrs;
    "NastupistePlocha": NastupistePlochaAttrs;
    "NeidentifikovanyObjekt": NeidentifikovanyObjektAttrs;
    "NosicTechnickehoZarizeni": NosicTechnickehoZarizeniAttrs;
    "O6": O6Attrs;
    "ObjektOdvodneniStavbyBod": ObjektOdvodneniStavbyBodAttrs;
    "ObjektOdvodneniStavbyLinie": ObjektOdvodneniStavbyLinieAttrs;
    "ObjektOdvodneniStavbyPlocha": ObjektOdvodneniStavbyPlochaAttrs;
    "ObjektStokoveSiteBod": ObjektStokoveSiteBodAttrs;
    "ObjektStokoveSitePlocha": ObjektStokoveSitePlochaAttrs;
    "ObjektVodovodniSiteBod": ObjektVodovodniSiteBodAttrs;
    "ObjektVodovodniSitePlocha": ObjektVodovodniSitePlochaAttrs;
    "ObjektZarizeniOchranaPredPovodnemiBod": ObjektZarizeniOchranaPredPovodnemiBodAttrs;
    "ObjektZarizeniOchranaPredPovodnemiLinie": ObjektZarizeniOchranaPredPovodnemiLinieAttrs;
    "ObvodDrahy": Record<string, never>;
    "ObvodMostu": ObvodMostuAttrs;
    "ObvodPozemniKomunikace": ObvodPozemniKomunikaceAttrs;
    "ObvodTunelu": ObvodTuneluAttrs;
    "OchrannaSachtaVrtu": OchrannaSachtaVrtuAttrs;
    "OdkalisteBod": OdkalisteBodAttrs;
    "OdkalistePlocha": OdkalistePlochaAttrs;
    "OdpadoveHospodarstviZamerBod": OdpadoveHospodarstviZamerBodAttrs;
    "OdpadoveHospodarstviZamerLinie": OdpadoveHospodarstviZamerLinieAttrs;
    "OdpadoveHospodarstviZamerPlocha": OdpadoveHospodarstviZamerPlochaAttrs;
    "OrientacniSloupekTI": OrientacniSloupekTIAttrs;
    "OsaKolejePozemniLanoveDrahy": Record<string, never>;
    "OsaKolejeSpecialniDrahy": Record<string, never>;
    "OsaKolejeTramvajoveDrahy": Record<string, never>;
    "OsaKolejeZeleznicniTrate": OsaKolejeZeleznicniTrateAttrs;
    "OsaMelioracnihoPrikopuZlabuDrenu": OsaMelioracnihoPrikopuZlabuDrenuAttrs;
    "OsaPozemniKomunikace": OsaPozemniKomunikaceAttrs;
    "OsaPozemniLanoveDrahy": OsaPozemniLanoveDrahyAttrs;
    "OsaProtipovodnoveZabrany": OsaProtipovodnoveZabranyAttrs;
    "OsaSpecialniDrahy": Record<string, never>;
    "OsaTramvajoveDrahy": Record<string, never>;
    "OsaZeleznicniTrate": OsaZeleznicniTrateAttrs;
    "OstatniZastresenaStavbaDefinicniBod": Record<string, never>;
    "OstatniZastresenaStavbaPlocha": Record<string, never>;
    "OznacnikZastavkyHromadneDopravyBod": OznacnikZastavkyHromadneDopravyBodAttrs;
    "ParkovisteOdstavnaPlochaDefinicniBod": ParkovisteOdstavnaPlochaDefinicniBodAttrs;
    "ParkovisteOdstavnaPlochaPlocha": ParkovisteOdstavnaPlochaPlochaAttrs;
    "PatkaDeskaMonolitPilirDefinicniBod": PatkaDeskaMonolitPilirDefinicniBodAttrs;
    "PatkaDeskaMonolitPilirPlocha": PatkaDeskaMonolitPilirPlochaAttrs;
    "PlavebniKomoraBod": PlavebniKomoraBodAttrs;
    "PlavebniKomoraPlocha": PlavebniKomoraPlochaAttrs;
    "PlochaMostniKonstrukceDefinicniBod": PlochaMostniKonstrukceDefinicniBodAttrs;
    "PlochaMostniKonstrukcePlocha": PlochaMostniKonstrukcePlochaAttrs;
    "PlochaRekultivaceDefinicniBod": Record<string, never>;
    "PlochaRekultivacePlocha": Record<string, never>;
    "Plot": PlotAttrs;
    "PlynovodKoridorZameruLinie": PlynovodKoridorZameruLinieAttrs;
    "PlynovodKoridorZameruPlocha": PlynovodKoridorZameruPlochaAttrs;
    "PlynovodMistoZameruBod": PlynovodMistoZameruBodAttrs;
    "PlynovodMistoZameruPlocha": PlynovodMistoZameruPlochaAttrs;
    "PodezdivkaDefinicniBod": Record<string, never>;
    "PodezdivkaPlocha": Record<string, never>;
    "PodperneZarizeni": PodperneZarizeniAttrs;
    "PodrobnyBodZPS": PodrobnyBodZPSAttrs;
    "PodzemniObjektZPSDefinicniBod": Record<string, never>;
    "PodzemniObjektZPSPlocha": Record<string, never>;
    "PortalPodchoduDefinicniBod": Record<string, never>;
    "PortalPodchoduPlocha": Record<string, never>;
    "PortalTuneluDefinicniBod": PortalTuneluDefinicniBodAttrs;
    "PortalTuneluPlocha": PortalTuneluPlochaAttrs;
    "PovrchovyZnakTI": PovrchovyZnakTIAttrs;
    "PozemniCastPristavuBod": PozemniCastPristavuBodAttrs;
    "PozemniCastPristavuPlocha": PozemniCastPristavuPlochaAttrs;
    "PozemniLanovaDrahaDefinicniBod": Record<string, never>;
    "PozemniLanovaDrahaPlocha": Record<string, never>;
    "PridruzenaPlochaPozemniKomunikaceDefinicniBod": PridruzenaPlochaPozemniKomunikaceDefinicniBodAttrs;
    "PridruzenaPlochaPozemniKomunikacePlocha": PridruzenaPlochaPozemniKomunikacePlochaAttrs;
    "PrikopNasepZarezDopravniStavbyDefinicniBod": PrikopNasepZarezDopravniStavbyDefinicniBodAttrs;
    "PrikopNasepZarezDopravniStavbyPlocha": PrikopNasepZarezDopravniStavbyPlochaAttrs;
    "PrivadecNahonOdpadLinie": PrivadecNahonOdpadLinieAttrs;
    "PrivadecNahonOdpadPlocha": PrivadecNahonOdpadPlochaAttrs;
    "PrivadecPovrchovychVodKoridorZameruLinie": Record<string, never>;
    "PrivadecPovrchovychVodKoridorZameruPlocha": Record<string, never>;
    "ProduktovodKoridorZameruLinie": Record<string, never>;
    "ProduktovodKoridorZameruPlocha": Record<string, never>;
    "ProduktovodMistoZameruBod": ProduktovodMistoZameruBodAttrs;
    "ProduktovodMistoZameruPlocha": Record<string, never>;
    "ProtihlukovaStena": ProtihlukovaStenaAttrs;
    "ProtipovodnovaZabranaDefinicniBod": ProtipovodnovaZabranaDefinicniBodAttrs;
    "ProtipovodnovaZabranaLinie": ProtipovodnovaZabranaLinieAttrs;
    "ProtipovodnovaZabranaPlocha": ProtipovodnovaZabranaPlochaAttrs;
    "ProtipovodnoveOpatreniZamerLinie": Record<string, never>;
    "ProtipovodnoveOpatreniZamerPlocha": Record<string, never>;
    "ProvozniPlochaPodchoduDefinicniBod": ProvozniPlochaPodchoduDefinicniBodAttrs;
    "ProvozniPlochaPodchoduPlocha": ProvozniPlochaPodchoduPlochaAttrs;
    "ProvozniPlochaPozemniKomunikaceDefinicniBod": ProvozniPlochaPozemniKomunikaceDefinicniBodAttrs;
    "ProvozniPlochaPozemniKomunikacePlocha": ProvozniPlochaPozemniKomunikacePlochaAttrs;
    "ProvozniPlochaTuneluDefinicniBod": ProvozniPlochaTuneluDefinicniBodAttrs;
    "ProvozniPlochaTuneluPlocha": ProvozniPlochaTuneluPlochaAttrs;
    "ProvozniProstorElektrickeSite": Record<string, never>;
    "PrubehJineTechnologickeStavbyTI": PrubehJineTechnologickeStavbyTIAttrs;
    "PrubehPropustku": PrubehPropustkuAttrs;
    "RampaDefinicniBod": RampaDefinicniBodAttrs;
    "RampaPlocha": RampaPlochaAttrs;
    "RozestavenaPlochaDefinicniBod": Record<string, never>;
    "RozestavenaPlochaPlocha": Record<string, never>;
    "SchodisteDefinicniBod": SchodisteDefinicniBodAttrs;
    "SchodistePlocha": SchodistePlochaAttrs;
    "SdilenaStavbaTIKoridorZameruLinie": Record<string, never>;
    "SdilenaStavbaTIKoridorZameruPlocha": Record<string, never>;
    "SdilenyObjektTI": SdilenyObjektTIAttrs;
    "SilnicniDopravaKoridorZameruLinie": SilnicniDopravaKoridorZameruLinieAttrs;
    "SilnicniDopravaKoridorZameruPlocha": SilnicniDopravaKoridorZameruPlochaAttrs;
    "SilnicniDopravaMistoZameruBod": SilnicniDopravaMistoZameruBodAttrs;
    "SilnicniDopravaMistoZameruPlocha": Record<string, never>;
    "SkladkaOdpaduBod": SkladkaOdpaduBodAttrs;
    "SkladkaOdpaduPlocha": SkladkaOdpaduPlochaAttrs;
    "SklenikDefinicniBod": Record<string, never>;
    "SklenikPlocha": Record<string, never>;
    "SledovanaVodniCestaLinie": SledovanaVodniCestaLinieAttrs;
    "SledovanaVodniCestaPlocha": SledovanaVodniCestaPlochaAttrs;
    "SloupTechnologickeKonstrukce": SloupTechnologickeKonstrukceAttrs;
    "SouhrnnaPlochaZeleznicnichDrahDefinicniBod": SouhrnnaPlochaZeleznicnichDrahDefinicniBodAttrs;
    "SouhrnnaPlochaZeleznicnichDrahPlocha": SouhrnnaPlochaZeleznicnichDrahPlochaAttrs;
    "SpalovnaBod": SpalovnaBodAttrs;
    "SpalovnaPlocha": SpalovnaPlochaAttrs;
    "SpecialniDrahaDefinicniBod": Record<string, never>;
    "SpecialniDrahaPlocha": Record<string, never>;
    "StaniceElektrickeSiteBod": StaniceElektrickeSiteBodAttrs;
    "StaniceElektrickeSitePlocha": StaniceElektrickeSitePlochaAttrs;
    "StavbaProZpevneniPovrchuDefinicniBod": StavbaProZpevneniPovrchuDefinicniBodAttrs;
    "StavbaProZpevneniPovrchuPlocha": StavbaProZpevneniPovrchuPlochaAttrs;
    "StavebneUpraveneKorytoDefinicniBod": Record<string, never>;
    "StavebneUpraveneKorytoPlocha": Record<string, never>;
    "StavebneUpravenyVjezdNaPozemek": StavebneUpravenyVjezdNaPozemekAttrs;
    "SterkovaPrehrazkaDefinicniBod": Record<string, never>;
    "SterkovaPrehrazkaPlocha": Record<string, never>;
    "StojanNabijeniVydejniStojan": StojanNabijeniVydejniStojanAttrs;
    "StudnaNaVerejnemProstranstvi": StudnaNaVerejnemProstranstviAttrs;
    "StupenBod": StupenBodAttrs;
    "StupenDefinicniBod": Record<string, never>;
    "StupenPlocha": Record<string, never>;
    "SuchaNadrzDefinicniBod": Record<string, never>;
    "SuchaNadrzPlocha": Record<string, never>;
    "Svodidlo": SvodidloAttrs;
    "TechnickyKanal": TechnickyKanalAttrs;
    "TechnologickyPortalLinie": TechnologickyPortalLinieAttrs;
    "TechnologickyPortalPlocha": TechnologickyPortalPlochaAttrs;
    "TeplovodKoridorZameruLinie": Record<string, never>;
    "TeplovodKoridorZameruPlocha": Record<string, never>;
    "TeplovodMistoZameruBod": TeplovodMistoZameruBodAttrs;
    "TeplovodMistoZameruPlocha": TeplovodMistoZameruPlochaAttrs;
    "TerasaDefinicniBod": Record<string, never>;
    "TerasaPlocha": Record<string, never>;
    "TerenniHrana": TerenniHranaAttrs;
    "TerminalKombinovaneDopravyMistoZameruBod": TerminalKombinovaneDopravyMistoZameruBodAttrs;
    "TerminalKombinovaneDopravyMistoZameruPlocha": Record<string, never>;
    "TramvajovaDrahaDefinicniBod": Record<string, never>;
    "TramvajovaDrahaPlocha": Record<string, never>;
    "TrasaProtikorozniOchrany": TrasaProtikorozniOchranyAttrs;
    "TrasaElektrickeSite": TrasaElektrickeSiteAttrs;
    "TrasaKanalizacniPripojky": TrasaKanalizacniPripojkyAttrs;
    "TrasaMistniElektrickeSite": TrasaMistniElektrickeSiteAttrs;
    "TrasaOdbernehoElektrickehoZarizeni": TrasaOdbernehoElektrickehoZarizeniAttrs;
    "TrasaOdbernehoPlynovehoZarizeni": TrasaOdbernehoPlynovehoZarizeniAttrs;
    "TrasaPlynovodniPripojky": TrasaPlynovodniPripojkyAttrs;
    "TrasaPlynovodniSite": TrasaPlynovodniSiteAttrs;
    "TrasaPotrubniPosty": TrasaPotrubniPostyAttrs;
    "TrasaRadiovehoSmerovehoSpoje": TrasaRadiovehoSmerovehoSpojeAttrs;
    "TrasaSiteEK": TrasaSiteEKAttrs;
    "TrasaSiteProduktovodu": TrasaSiteProduktovoduAttrs;
    "TrasaStokoveSite": TrasaStokoveSiteAttrs;
    "TrasaTeplovodniSite": TrasaTeplovodniSiteAttrs;
    "TrasaTrakcnihoTrolejovehoVedeni": TrasaTrakcnihoTrolejovehoVedeniAttrs;
    "TrasaVodovodniPripojky": TrasaVodovodniPripojkyAttrs;
    "TrasaVodovodniSite": TrasaVodovodniSiteAttrs;
    "UdrzovanaPlochaZeleneDefinicniBod": UdrzovanaPlochaZeleneDefinicniBodAttrs;
    "UdrzovanaPlochaZelenePlocha": UdrzovanaPlochaZelenePlochaAttrs;
    "UlozneMistoTezebnihoOdpaduDefinicniBod": Record<string, never>;
    "UlozneMistoTezebnihoOdpaduPlocha": Record<string, never>;
    "VegetacniMisaDefinicniBod": Record<string, never>;
    "VegetacniMisaPlocha": Record<string, never>;
    "VisutaLanovaDraha": VisutaLanovaDrahaAttrs;
    "VnitrniCleneniBudovStaveb": VnitrniCleneniBudovStavebAttrs;
    "VnitrniCleneniDopravniPlochy": VnitrniCleneniDopravniPlochyAttrs;
    "VodniCastPristavuBod": VodniCastPristavuBodAttrs;
    "VodniCastPristavuPlocha": VodniCastPristavuPlochaAttrs;
    "VodniDopravaKoridorZameruLinie": Record<string, never>;
    "VodniDopravaKoridorZameruPlocha": Record<string, never>;
    "VodniDopravaMistoZameruBod": VodniDopravaMistoZameruBodAttrs;
    "VodniDopravaMistoZameruPlocha": Record<string, never>;
    "VodniTokDefinicniBod": VodniTokDefinicniBodAttrs;
    "VodniTokLinie": VodniTokLinieAttrs;
    "VodniTokPlocha": VodniTokPlochaAttrs;
    "VodovodKoridorZameruLinie": Record<string, never>;
    "VodovodKoridorZameruPlocha": Record<string, never>;
    "VodovodMistoZameruBod": VodovodMistoZameruBodAttrs;
    "VodovodMistoZameruPlocha": VodovodMistoZameruPlochaAttrs;
    "Vrt": VrtAttrs;
    "VyrobnaElektrinyNad100kWBod": VyrobnaElektrinyNad100kWBodAttrs;
    "VyrobnaElektrinyNad100kWPlocha": VyrobnaElektrinyNad100kWPlochaAttrs;
    "VyskovyBodNaTerenu": VyskovyBodNaTerenuAttrs;
    "VytahVChodniku": VytahVChodnikuAttrs;
    "VzletovaPristavaciDraha": VzletovaPristavaciDrahaAttrs;
    "Zabradli": ZabradliAttrs;
    "ZahradaDefinicniBod": Record<string, never>;
    "ZahradaPlocha": Record<string, never>;
    "ZahradniBazenDefinicniBod": Record<string, never>;
    "ZahradniBazenPlocha": Record<string, never>;
    "ZarizeniProtikorozniOchranyBod": ZarizeniProtikorozniOchranyBodAttrs;
    "ZarizeniProtikorozniOchranyPlocha": ZarizeniProtikorozniOchranyPlochaAttrs;
    "ZarizeniElektrickeSite": ZarizeniElektrickeSiteAttrs;
    "ZarizeniKanalizacniPripojkyBod": ZarizeniKanalizacniPripojkyBodAttrs;
    "ZarizeniKanalizacniPripojkyDefinicniBod": ZarizeniKanalizacniPripojkyDefinicniBodAttrs;
    "ZarizeniKanalizacniPripojkyPlocha": ZarizeniKanalizacniPripojkyPlochaAttrs;
    "ZarizeniProLeteckyProvoz": ZarizeniProLeteckyProvozAttrs;
    "ZarizeniPlynovodniSite": ZarizeniPlynovodniSiteAttrs;
    "ZarizeniPotrubniPosty": ZarizeniPotrubniPostyAttrs;
    "ZarizeniPrivadece": ZarizeniPrivadeceAttrs;
    "ZarizeniSiteEK": ZarizeniSiteEKAttrs;
    "ZarizeniSiteProduktovoduBod": ZarizeniSiteProduktovoduBodAttrs;
    "ZarizeniSiteProduktovoduPlocha": ZarizeniSiteProduktovoduPlochaAttrs;
    "ZarizeniTeplovodniSite": ZarizeniTeplovodniSiteAttrs;
    "ZarizeniVodovodniPripojkyBod": ZarizeniVodovodniPripojkyBodAttrs;
    "ZarizeniVodovodniPripojkyDefinicniBod": ZarizeniVodovodniPripojkyDefinicniBodAttrs;
    "ZarizeniVodovodniPripojkyPlocha": ZarizeniVodovodniPripojkyPlochaAttrs;
    "ZastreseniDefinicniBod": ZastreseniDefinicniBodAttrs;
    "ZastreseniPlocha": ZastreseniPlochaAttrs;
    "ZatrubnenyVodniTok": ZatrubnenyVodniTokAttrs;
    "ZedDefinicniBod": ZedDefinicniBodAttrs;
    "ZedLinie": ZedLinieAttrs;
    "ZedPlocha": ZedPlochaAttrs;
    "ZeleznicniPrejezd": ZeleznicniPrejezdAttrs;
    "ZemedelskaPlochaDefinicniBod": ZemedelskaPlochaDefinicniBodAttrs;
    "ZemedelskaPlochaPlocha": ZemedelskaPlochaPlochaAttrs;
    "Baliza": BalizaAttrs;
    "Brzda": BrzdaAttrs;
    "BudovaOstatniKresba": Record<string, never>;
    "ChybaVDatech": ChybaVDatechAttrs;
    "CidloSnimacPrepinacObecnyMimoKoleje": CidloSnimacPrepinacObecnyMimoKolejeAttrs;
    "CidloSnimacPrepinacObecnyVKoleji": CidloSnimacPrepinacObecnyVKolejiAttrs;
    "DetektorVolnostiPrejezdu": DetektorVolnostiPrejezduAttrs;
    "DiagnostickySystemDetektorCPMASDEK": DiagnostickySystemDetektorCPMASDEKAttrs;
    "DiagnostickySystemHrana": DiagnostickySystemHranaAttrs;
    "DnoSachtyKolektoru": DnoSachtyKolektoruAttrs;
    "DopravniStavbaNeboPlochaOstatniKresba": Record<string, never>;
    "DopravniZnackaObjekt": DopravniZnackaObjektAttrs;
    "Drhlik": DrhlikAttrs;
    "DvereVProtihlukoveSteneClone": DvereVProtihlukoveSteneCloneAttrs;
    "ElektroMagnetickyZamek": ElektroMagnetickyZamekAttrs;
    "HranaProtihlukoveStenyClonyOstatniKresba": Record<string, never>;
    "HranaZumpySeptiku": Record<string, never>;
    "Hriz": HrizAttrs;
    "HydrogeologickyVrt": HydrogeologickyVrtAttrs;
    "InformacniTabuleElektronickaLinie": Record<string, never>;
    "InformacniTabuleNeelektronickeBod": InformacniTabuleNeelektronickeBodAttrs;
    "InformacniTabuleNeelektronickeLinie": Record<string, never>;
    "IzolovanaKolejnice": IzolovanaKolejniceAttrs;
    "IzolovaneKolejovePole": Record<string, never>;
    "IzolovanyStyk": IzolovanyStykAttrs;
    "JednotlivyStrom": JednotlivyStromAttrs;
    "Jerab": JerabAttrs;
    "KabelovyVstupVystupDoSachtyKolektoru": KabelovyVstupVystupDoSachtyKolektoruAttrs;
    "KDZ": KDZAttrs;
    "KDZZacatekPohybliveCasti": KDZZacatekPohybliveCastiAttrs;
    "KolejnicePojizdnehoJerabu": KolejnicePojizdnehoJerabuAttrs;
    "KolejnicovyMaznik": KolejnicovyMaznikAttrs;
    "BodKolejnicovehoPasu": BodKolejnicovehoPasuAttrs;
    "KonecKDZ": KonecKDZAttrs;
    "KonecKolejovehoObvodu": KonecKolejovehoObvoduAttrs;
    "KozlikovyJerab": KozlikovyJerabAttrs;
    "BodKrizovatky": BodKrizovatkyAttrs;
    "LicSloupuStozaruPodperyLampy": LicSloupuStozaruPodperyLampyAttrs;
    "MagnetickaZnacka": MagnetickaZnackaAttrs;
    "MagnetickeInformacniBody": MagnetickeInformacniBodyAttrs;
    "MechanickaZavoraSamostatnyZavorovyStojan": MechanickaZavoraSamostatnyZavorovyStojanAttrs;
    "MelioracniPrikopZlabOstatniKresba": Record<string, never>;
    "MericKategorieHmotnosti": MericKategorieHmotnostiAttrs;
    "Meznik": MeznikAttrs;
    "MostOstatniKresba": Record<string, never>;
    "MostniSachta": MostniSachtaAttrs;
    "NadzemniKanalizaceMerenaObvodem": Record<string, never>;
    "NameznikKoncovnik": NameznikKoncovnikAttrs;
    "NastupisteNastupniPlocha": NastupisteNastupniPlochaAttrs;
    "NastupisteOstatniKresba": Record<string, never>;
    "NavestHraniceIzolovanehoUseku": NavestHraniceIzolovanehoUsekuAttrs;
    "NavestHraniceProvozovateleDrahy": NavestHraniceProvozovateleDrahyAttrs;
    "NavestRychlostnikPredvestnik": NavestRychlostnikPredvestnikAttrs;
    "NavestidloMechanicke": NavestidloMechanickeAttrs;
    "NavestidloSvetelne": NavestidloSvetelneAttrs;
    "NavestidloTabulka": NavestidloTabulkaAttrs;
    "Obrysnice": ObrysniceAttrs;
    "OvladaniZabezpecovacihoZarizeni": OvladaniZabezpecovacihoZarizeniAttrs;
    "Oznacnik": OznacnikAttrs;
    "PatkaSoklOstatniKresba": Record<string, never>;
    "PlosinaProOsobyImobilni": Record<string, never>;
    "PodchodOstatniKresba": Record<string, never>;
    "PodperneZarizeniSZ": PodperneZarizeniSZAttrs;
    "PohonMechanickychZavor": PohonMechanickychZavorAttrs;
    "PortalTuneluGalerieOstatniKresba": PortalTuneluGalerieOstatniKresbaAttrs;
    "PotrubniObjektNeurceny": Record<string, never>;
    "PrazcoveKotvy": Record<string, never>;
    "PredmetMalehoRozsahu": PredmetMalehoRozsahuAttrs;
    "PrestavnikZavornik": PrestavnikZavornikAttrs;
    "Presuvna": PresuvnaAttrs;
    "PrikopSeZpevnenymDnem": Record<string, never>;
    "PripojneMisto": PripojneMistoAttrs;
    "PritokNeboOdtokPotrubiDoSachty": PritokNeboOdtokPotrubiDoSachtyAttrs;
    "ProhlidkovaCisticiNeboOdkalovaciJamaHrana": ProhlidkovaCisticiNeboOdkalovaciJamaHranaAttrs;
    "PropustekOstatniKresba": PropustekOstatniKresbaAttrs;
    "PruzkumnaSachtice": PruzkumnaSachticeAttrs;
    "RampaOstatniKresba": Record<string, never>;
    "RevizniSachtaTuneloveStoky": RevizniSachtaTuneloveStokyAttrs;
    "RevizniSachtaTuneloveStokyHrana": RevizniSachtaTuneloveStokyHranaAttrs;
    "Schodiste": Record<string, never>;
    "SklepBod": SklepBodAttrs;
    "SklepLinie": Record<string, never>;
    "SklepText": SklepTextAttrs;
    "SnimacPocitaceNaprav": SnimacPocitaceNapravAttrs;
    "SnimacPolohyJazyku": SnimacPolohyJazykuAttrs;
    "Sonda": SondaAttrs;
    "SouvislyPorostOstatniKresba": Record<string, never>;
    "SpecialniBod": SpecialniBodAttrs;
    "SpojkaNaHDPTrubce": SpojkaNaHDPTrubceAttrs;
    "SrafovaniSkloniteTerenniPlochy": Record<string, never>;
    "Stanicnik": StanicnikAttrs;
    "StavbaProZpevneniPovrchuOstatniKresba": StavbaProZpevneniPovrchuOstatniKresbaAttrs;
    "StojanNaVozoveZarazky": StojanNaVozoveZarazkyAttrs;
    "Svar": SvarAttrs;
    "Tocnice": TocniceAttrs;
    "TrasaDratovodu": TrasaDratovoduAttrs;
    "TrasaNeurceneKabeloveSite": TrasaNeurceneKabeloveSiteAttrs;
    "TrasaNeurcenehoTrubkovehoVedeni": TrasaNeurcenehoTrubkovehoVedeniAttrs;
    "TunelovaStoka": TunelovaStokaAttrs;
    "TunelovaTroubaOstatniKresba": Record<string, never>;
    "TunelovyPas": Record<string, never>;
    "Uhelnik": UhelnikAttrs;
    "UstiStolyNeboUklonneJamyVstupDoPodzProstoru": UstiStolyNeboUklonneJamyVstupDoPodzProstoruAttrs;
    "VjezdNeboVstupDoBudovy": Record<string, never>;
    "VnejsiKonecPricnehoVarovnehoPasuNaNastupisti": VnejsiKonecPricnehoVarovnehoPasuNaNastupistiAttrs;
    "VodniTok": Record<string, never>;
    "VratekNaPosun": VratekNaPosunAttrs;
    "VrcholSvaznehoPahrbku": VrcholSvaznehoPahrbkuAttrs;
    "VyhledavaciVodic": VyhledavaciVodicAttrs;
    "BodVyhybky": BodVyhybkyAttrs;
    "VyklenekVTuneluBod": VyklenekVTuneluBodAttrs;
    "VyklenekVTuneluHrana": Record<string, never>;
    "Vykolejka": VykolejkaAttrs;
    "VyrobnaElektrinyDo100kWBod": VyrobnaElektrinyDo100kWBodAttrs;
    "VyrobnaElektrinyDo100kWPlocha": VyrobnaElektrinyDo100kWPlochaAttrs;
    "VystrazneZarizeniNaNastupisti": VystrazneZarizeniNaNastupistiAttrs;
    "VystraznikPZS": VystraznikPZSAttrs;
    "VystraznyKrizProPrejezd": VystraznyKrizProPrejezdAttrs;
    "Vytah": VytahAttrs;
    "ZabradliHorniHrana": Record<string, never>;
    "ZacatekKonecElektrizovanehoUsekuTrati": ZacatekKonecElektrizovanehoUsekuTratiAttrs;
    "ZacatekJazykaVyhybky": ZacatekJazykaVyhybkyAttrs;
    "ZajisteniSkalKotevniLano": Record<string, never>;
    "ZajisteniSkalZemniKotvaSkalniTrn": ZajisteniSkalZemniKotvaSkalniTrnAttrs;
    "ZajistovaciZnacka": ZajistovaciZnackaAttrs;
    "ZarazedloBod": ZarazedloBodAttrs;
    "Zarazedlo": ZarazedloAttrs;
    "ZarazkovaBrzda": ZarazkovaBrzdaAttrs;
    "ZarizeniDratovodu": ZarizeniDratovoduAttrs;
    "ZarizeniNeurceneKabeloveSite": ZarizeniNeurceneKabeloveSiteAttrs;
    "ZarizeniNeurcenehoTrubkovehoVedeni": ZarizeniNeurcenehoTrubkovehoVedeniAttrs;
    "ZarizeniSiteEKSZ": ZarizeniSiteEKSZAttrs;
    "ZastreseniOstatniKresba": Record<string, never>;
    "ZdvihaciZarizeniVozovychSkrini": ZdvihaciZarizeniVozovychSkriniAttrs;
    "ZedOstatniKresba": Record<string, never>;
    "ZeleznicniPrejezdOstatniKresba": Record<string, never>;
    "ZmenaUsekoveVlastnostiKoleje": ZmenaUsekoveVlastnostiKolejeAttrs;
    "ZridloPramenPrirLecivyZdroj": ZridloPramenPrirLecivyZdrojAttrs;
    "ZtuzujiciKolejnice": Record<string, never>;
    "ZvlastniPlochaObrys": ZvlastniPlochaObrysAttrs;
    "ZvlastniPlochaLinieVOseKoleje": ZvlastniPlochaLinieVOseKolejeAttrs;
};
//# sourceMappingURL=entities.d.ts.map