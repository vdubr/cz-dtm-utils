export type GeomKind = 'point' | 'curve' | 'surface' | 'surface+multiCurve';
export interface EntityMeta {
    elementName: string;
    nazev: string;
    codeBase: string;
    codeSuffix: string;
    kategorieObjektu: string;
    skupinaObjektu: string;
    obsahovaCast: 'ZPS' | 'TI' | 'DI';
    sharedAttrGroup: string | null;
    specificAttrs: readonly string[];
    geomType: GeomKind;
    geomOptional: boolean;
    hasOblastKI: boolean;
}
export interface BPPodzemnihoZasobnikuPlynuAttrs {
    TypPodzemnihoZasobnikuPlynu?: number;
}
export interface OPDrazniStavbyAttrs {
    IDObjektuDrazniStavby?: string;
    TypOPDrazniStavby?: number;
}
export interface OPLeteckychZabezpecovacichZarizeniAttrs {
    TypOPLeteckychZabezpecovacichZarizeni?: number;
}
export interface OPLetisteAttrs {
    IDObjektuLetiste?: string;
    TypOPLetiste?: number;
}
export interface OPPodzemnihoZasobnikuPlynuAttrs {
    TypPodzemnihoZasobnikuPlynu?: number;
}
export interface OPPozemniKomunikaceAttrs {
    IDObjektuSilnicniStavby?: string;
    CisloETahu?: string;
    TypOPPozemniKomunikace?: number;
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
    StavObjektu?: number;
    TlakovaHladinaPlynovodniSite?: number;
    TypTechnologickehoObjektuPlynovodniSite?: number;
}
export interface TechnologickyObjektPlynovodniSitePlochaAttrs {
    StavObjektu?: number;
    TlakovaHladinaPlynovodniSite?: number;
    TypTechnologickehoObjektuPlynovodniSite?: number;
}
export interface TechnologickyObjektSiteEKBodAttrs {
    StavObjektu?: number;
    TypTechnologickehoObjektuSiteEK?: number;
}
export interface TechnologickyObjektSiteEKPlochaAttrs {
    StavObjektu?: number;
    TypTechnologickehoObjektuSiteEK?: number;
}
export interface TechnologickyObjektSiteProduktovoduBodAttrs {
    StavObjektu?: number;
}
export interface TechnologickyObjektSiteProduktovoduPlochaAttrs {
    StavObjektu?: number;
}
export interface TechnologickyObjektTeplovodniSiteBodAttrs {
    StavObjektu?: number;
    TypTechnologickehoObjektuTeplovodniSite?: number;
}
export interface TechnologickyObjektTeplovodniSitePlochaAttrs {
    StavObjektu?: number;
    TypTechnologickehoObjektuTeplovodniSite?: number;
}
export interface ChodnikDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface ChodnikPlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface CyklostezkaDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
    OznaceniCyklostezky?: string;
}
export interface CyklostezkaPlochaAttrs {
    PrevazujiciPovrch?: number;
    OznaceniCyklostezky?: string;
}
export interface DopravneVyznamneMistoDrazeBodAttrs {
    TypDopravneVyznamnehoMistaDraze?: number;
}
export interface DopravneVyznamneMistoDrazePlochaAttrs {
    TypDopravneVyznamnehoMistaDraze?: number;
}
export interface DopravniUzelSilnicniSiteAttrs {
    CisloUzlu?: string;
    CislaKrizujicichKomunikaci?: string;
    TypUzlu?: number;
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
}
export interface DrazniDopravaMistoZameruPlochaAttrs {
    TypDrahy?: number;
}
export interface DrobnaKulturniStavbaBodAttrs {
    TypDrobneKulturniStavby?: number;
}
export interface DrobnaKulturniStavbaDefinicniBodAttrs {
    TypDrobneKulturniStavby?: number;
}
export interface DrobnaKulturniStavbaPlochaAttrs {
    TypDrobneKulturniStavby?: number;
}
export interface DrobnaSakralniStavbaBodAttrs {
    TypDrobneSakralniStavby?: number;
}
export interface DrobnaSakralniStavbaDefinicniBodAttrs {
    TypDrobneSakralniStavby?: number;
}
export interface DrobnaSakralniStavbaPlochaAttrs {
    TypDrobneSakralniStavby?: number;
}
export interface ElektrickaSitKoridorZameruLinieAttrs {
    MaximalniNapetovaHladina?: number;
}
export interface ElektrickaSitKoridorZameruPlochaAttrs {
    MaximalniNapetovaHladina?: number;
}
export interface ElektrickaSitMistoZameruBodAttrs {
    TypObjektuElektrickeSiteZameru?: number;
}
export interface ElektrickaSitMistoZameruPlochaAttrs {
    TypObjektuElektrickeSiteZameru?: number;
}
export interface HeliportBodAttrs {
    OznaceniObjektu?: string;
    OznaceniHeliportu?: string;
    UmisteniHeliportu?: number;
}
export interface HeliportPlochaAttrs {
    OznaceniObjektu?: string;
    OznaceniHeliportu?: string;
    UmisteniHeliportu?: number;
}
export interface HraniceDopravniStavbyPlochyAttrs {
    TypDopravniStavbyNeboPlochy?: number;
}
export interface HraniceOstatniPlochyAttrs {
    TypOstatniPlochy?: number;
}
export interface HranicePrirodnihoPoloprirodnihoObjektuAttrs {
    TypPrirodnihoPoloprirodnihoObjektu?: number;
}
export interface HraniceSchodisteAttrs {
    DruhSchodiste?: number;
}
export interface HraniceStavbyAttrs {
    TypStavby?: number;
}
export interface HraniceVodnihoDilaAttrs {
    TypVodnihoDila?: number;
}
export interface HraniceZdiAttrs {
    TypZdi?: number;
}
export interface IdentickyBodAttrs {
    CisloBodu?: string;
}
export interface JaderneZarizeniBodAttrs {
    StavObjektu?: number;
    TypJadernehoZarizeni?: number;
}
export interface JaderneZarizeniPlochaAttrs {
    StavObjektu?: number;
    TypJadernehoZarizeni?: number;
}
export interface JinaTechnologickaStavbaTIAttrs {
    StavObjektu?: number;
}
export interface JineZarizeniOdstranovaniVyuzivaniSberOdpaduBodAttrs {
    StavObjektu?: number;
    TypZarizeniOdstranovaniOdpadu?: number;
    PovoleniNakladaniNebezpecnymOdpadem?: number;
    Kapacita?: number;
}
export interface JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlochaAttrs {
    StavObjektu?: number;
    TypZarizeniOdstranovaniOdpadu?: number;
    PovoleniNakladaniNebezpecnymOdpadem?: number;
    Kapacita?: number;
}
export interface JineZarizeniStavebTIAttrs {
    StavObjektu?: number;
    TypJinehoZarizeniStavebTI?: number;
    UmisteniObjektu?: number;
}
export interface KanalizaceMistoZameruBodAttrs {
    TypObjektuStokoveSiteZameru?: number;
}
export interface KanalizaceMistoZameruPlochaAttrs {
    TypObjektuStokoveSiteZameru?: number;
}
export interface KolektorAttrs {
    StavObjektu?: number;
}
export interface LeteckaStavbaBodAttrs {
    OznaceniObjektu?: string;
    TypLeteckeStavby?: number;
}
export interface LeteckaStavbaPlochaAttrs {
    OznaceniObjektu?: string;
    TypLeteckeStavby?: number;
}
export interface LetisteAttrs {
    DruhLetiste?: number;
    OznaceniLetiste?: string;
}
export interface ManipulacniPlochaDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface ManipulacniPlochaPlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface NadrzBezVzdouvacihoObjektuDefinicniBodAttrs {
    TypNadrzeBezVzdouvacihoObjektu?: number;
}
export interface NadrzBezVzdouvacihoObjektuPlochaAttrs {
    TypNadrzeBezVzdouvacihoObjektu?: number;
}
export interface NadrzZdrzSeVzdouvacimObjektemDefinicniBodAttrs {
    TypNadrzeZdrzeSeVzdouvacimObjektem?: number;
}
export interface NadrzZdrzSeVzdouvacimObjektemPlochaAttrs {
    TypNadrzeZdrzeSeVzdouvacimObjektem?: number;
}
export interface NajezdDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface NajezdPlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface NastupisteDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface NastupistePlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface NosicTechnickehoZarizeniAttrs {
    TypNosiceTechnickehoZarizeni?: number;
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
}
export interface ObjektOdvodneniStavbyBodAttrs {
    StavObjektu?: number;
    TypObjektuOdvodneniStavby?: number;
}
export interface ObjektOdvodneniStavbyLinieAttrs {
    StavObjektu?: number;
    TypObjektuOdvodneniStavby?: number;
}
export interface ObjektOdvodneniStavbyPlochaAttrs {
    StavObjektu?: number;
    TypObjektuOdvodneniStavby?: number;
}
export interface ObjektStokoveSiteBodAttrs {
    StavObjektu?: number;
    ICME?: string;
    TypObjektuStokoveSite?: number;
}
export interface ObjektStokoveSitePlochaAttrs {
    ICME?: string;
    StavObjektu?: number;
    TypObjektuStokoveSite?: number;
}
export interface ObjektVodovodniSiteBodAttrs {
    ICME?: string;
    StavObjektu?: number;
    TypObjektuVodovodniSite?: number;
    TypMediaVodovodniSite?: number;
}
export interface ObjektVodovodniSitePlochaAttrs {
    ICME?: string;
    StavObjektu?: number;
    TypObjektuVodovodniSite?: number;
    TypMediaVodovodniSite?: number;
}
export interface ObjektZarizeniOchranaPredPovodnemiBodAttrs {
    TypObjektuZarizeniOchranaPredPovodnemi?: number;
}
export interface ObjektZarizeniOchranaPredPovodnemiLinieAttrs {
    TypObjektuZarizeniOchranaPredPovodnemi?: number;
}
export interface ObvodMostuAttrs {
    TypMostu?: number;
    OznaceniKomunikaceTrate?: string;
}
export interface ObvodPozemniKomunikaceAttrs {
    OznaceniKomunikace?: string;
}
export interface OdkalisteBodAttrs {
    StavObjektu?: number;
}
export interface OdkalistePlochaAttrs {
    StavObjektu?: number;
}
export interface OdpadoveHospodarstviZamerBodAttrs {
    TypObjektuOdpadovehoHospodarstviZameru?: number;
}
export interface OdpadoveHospodarstviZamerLinieAttrs {
    TypObjektuOdpadovehoHospodarstviZameru?: number;
}
export interface OdpadoveHospodarstviZamerPlochaAttrs {
    TypObjektuOdpadovehoHospodarstviZameru?: number;
}
export interface OrientacniSloupekTIAttrs {
    StavObjektu?: number;
    TypInzenyrskeSite?: number;
}
export interface OsaKolejeZeleznicniTrateAttrs {
    RokGeodetickehoPorizeni?: number;
    RozchodKoleji?: number;
}
export interface OsaMelioracnihoPrikopuZlabuDrenuAttrs {
    DruhMelioracnichOpatreni?: number;
    RokVystavby?: number;
    Material?: string;
}
export interface OsaPozemniKomunikaceAttrs {
    PrevazujiciPovrch?: number;
    KategoriePozemniKomunikace?: number;
    CisloETahu?: string;
    TypUsekuPozemniKomunikace?: number;
    PocetJizdnichPruhu?: number;
    OznaceniKomunikace?: string;
}
export interface OsaPozemniLanoveDrahyAttrs {
    DruhDopravyLanoveDrahy?: number;
}
export interface OsaProtipovodnoveZabranyAttrs {
    TypProtipovodnoveZabrany?: number;
}
export interface OsaZeleznicniTrateAttrs {
    TypUsekuZeleznicniTrate?: number;
    KategorieZeleznicniTrate?: number;
    TypZeleznicniTrate?: number;
    OznaceniTrate?: string;
    PocetKoleji?: number;
    ElektrizaceZeleznicniTrate?: number;
}
export interface ParkovisteOdstavnaPlochaDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface ParkovisteOdstavnaPlochaPlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface PlotAttrs {
    DruhPlotu?: number;
    HraniceJinehoObjektu?: boolean;
}
export interface PlynovodKoridorZameruLinieAttrs {
    TlakovaHladinaPlynovodniSite?: number;
}
export interface PlynovodKoridorZameruPlochaAttrs {
    TlakovaHladinaPlynovodniSite?: number;
}
export interface PlynovodMistoZameruBodAttrs {
    TypObjektuPlynovodniSiteZameru?: number;
}
export interface PlynovodMistoZameruPlochaAttrs {
    TypObjektuPlynovodniSiteZameru?: number;
}
export interface PodperneZarizeniAttrs {
    StavObjektu?: number;
    TypPodpernehoZarizeni?: number;
    TypSloupu?: number;
}
export interface PodrobnyBodZPSAttrs {
    UrovenUmisteniObjektuZPS?: number;
    TridaPresnostiPoloha?: number;
    TridaPresnostiVyska?: number;
    ZpusobPorizeniPB_ZPS?: number;
    CisloBodu?: string;
}
export interface PovrchovyZnakTIAttrs {
    StavObjektu?: number;
    TypPovrchovehoZnakuTI?: number;
}
export interface PozemniCastPristavuBodAttrs {
    OznaceniObjektu?: string;
    TypPristavu?: number;
    OchrannaFunkce?: boolean;
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
export interface PrivadecNahonOdpadLinieAttrs {
    StavObjektu?: number;
    TypPrivadece?: number;
    Dimenze?: number;
    Material?: string;
}
export interface PrivadecNahonOdpadPlochaAttrs {
    StavObjektu?: number;
    TypPrivadece?: number;
    Dimenze?: number;
    Material?: string;
}
export interface ProtihlukovaStenaAttrs {
    HraniceJinehoObjektu?: boolean;
}
export interface ProtipovodnovaZabranaDefinicniBodAttrs {
    TypProtipovodnoveZabrany?: number;
}
export interface ProtipovodnovaZabranaLinieAttrs {
    TypProtipovodnoveZabrany?: number;
    HraniceJinehoObjektu?: boolean;
}
export interface ProtipovodnovaZabranaPlochaAttrs {
    TypProtipovodnoveZabrany?: number;
}
export interface ProvozniPlochaPozemniKomunikaceDefinicniBodAttrs {
    TypPozemniKomunikace?: number;
    PrevazujiciPovrch?: number;
}
export interface ProvozniPlochaPozemniKomunikacePlochaAttrs {
    TypPozemniKomunikace?: number;
    PrevazujiciPovrch?: number;
}
export interface ProvozniPlochaTuneluDefinicniBodAttrs {
    TypTunelu?: number;
}
export interface ProvozniPlochaTuneluPlochaAttrs {
    TypTunelu?: number;
}
export interface PrubehJineTechnologickeStavbyTIAttrs {
    StavObjektu?: number;
}
export interface PrubehTechnologickeKonstrukceAttrs {
    HraniceJinehoObjektu?: boolean;
}
export interface SchodisteDefinicniBodAttrs {
    DruhSchodiste?: number;
}
export interface SchodistePlochaAttrs {
    DruhSchodiste?: number;
}
export interface SdilenyObjektTIAttrs {
    StavObjektu?: number;
    TypSdilenehoObjektuTI?: number;
}
export interface SilnicniDopravaKoridorZameruLinieAttrs {
    TypObjektuSilnicniDopravyZameru?: number;
}
export interface SilnicniDopravaKoridorZameruPlochaAttrs {
    TypObjektuSilnicniDopravyZameru?: number;
}
export interface SkladkaOdpaduBodAttrs {
    StavSkladkyOdpadu?: number;
    ZpusobRekultivace?: string;
    DatumRekultivace?: string;
    TypOdpadu?: number;
    Kapacita?: number;
}
export interface SkladkaOdpaduPlochaAttrs {
    StavSkladkyOdpadu?: number;
    ZpusobRekultivace?: string;
    DatumRekultivace?: string;
    TypOdpadu?: number;
    Kapacita?: number;
}
export interface SledovanaVodniCestaLinieAttrs {
    NazevSledovaneVodniCesty?: string;
    ZarazeniSledovaneVodniCesty?: number;
    TridaDopravneVyznamneVodniCesty?: number;
    TypSledovaneVodniCesty?: number;
    OznaceniObjektu?: string;
}
export interface SledovanaVodniCestaPlochaAttrs {
    NazevSledovaneVodniCesty?: string;
    ZarazeniSledovaneVodniCesty?: number;
    TridaDopravneVyznamneVodniCesty?: number;
    TypSledovaneVodniCesty?: number;
    OznaceniObjektu?: string;
}
export interface SouhrnnaPlochaZeleznicnichDrahDefinicniBodAttrs {
    TypUsekuZeleznicniTrate?: number;
}
export interface SouhrnnaPlochaZeleznicnichDrahPlochaAttrs {
    TypUsekuZeleznicniTrate?: number;
}
export interface SpalovnaBodAttrs {
    StavObjektu?: number;
    Kapacita?: number;
}
export interface SpalovnaPlochaAttrs {
    StavObjektu?: number;
    Kapacita?: number;
}
export interface StaniceElektrickeSiteBodAttrs {
    StavObjektu?: number;
    MaximalniNapetovaHladina?: number;
    MaximalniProvozniNapeti?: number;
    ProvozniNapeti?: string;
    TypStaniceElektrickeSite?: number;
    DruhStaniceElektrickeSite?: number;
}
export interface StaniceElektrickeSitePlochaAttrs {
    StavObjektu?: number;
    MaximalniNapetovaHladina?: number;
    MaximalniProvozniNapeti?: number;
    ProvozniNapeti?: string;
    TypStaniceElektrickeSite?: number;
    DruhStaniceElektrickeSite?: number;
}
export interface StavebneUpravenyVjezdNaPozemekAttrs {
    PrujezdnaSirka?: number;
    PrujezdnaVyska?: number;
    HraniceJinehoObjektu?: boolean;
}
export interface StojanNabijeniVydejniStojanAttrs {
    TypNabijecihoVydejnihoMedia?: number;
}
export interface SvodidloAttrs {
    TypSvodidla?: number;
}
export interface TechnickyKanalAttrs {
    StavObjektu?: number;
    TypTechnickehoKanalu?: number;
}
export interface TeplovodMistoZameruBodAttrs {
    TypTechnologickehoObjektuTeplovodniSite?: number;
}
export interface TeplovodMistoZameruPlochaAttrs {
    TypTechnologickehoObjektuTeplovodniSite?: number;
}
export interface TerenniHranaAttrs {
    TypTerenniHrany?: number;
}
export interface TrasaProtikorozniOchranyAttrs {
    StavObjektu?: number;
    TypPKO?: number;
    TypInzenyrskeSitePKO?: number;
}
export interface TrasaElektrickeSiteAttrs {
    StavTrasySiteTI?: number;
    PocetVedeniVTrase?: number;
    VedeniSiteVJineStavbe?: number;
    TypTrasyElektrickeSite?: number;
    MaximalniNapetovaHladina?: number;
    MaximalniProvozniNapeti?: number;
    ProvozniNapeti?: string;
    IzolaceVenkovnihoVedeni?: number;
}
export interface TrasaKanalizacniPripojkyAttrs {
    UceloveZarazeniStokoveSite?: number;
    DruhStokoveSite?: number;
    Dimenze?: number;
    Material?: string;
}
export interface TrasaMistniElektrickeSiteAttrs {
    StavTrasySiteTI?: number;
    VedeniSiteVJineStavbe?: number;
    TypTrasyMistniElektrickeSite?: number;
}
export interface TrasaOdbernehoPlynovehoZarizeniAttrs {
    TlakovaHladinaPlynovodniSite?: number;
    Dimenze?: number;
}
export interface TrasaPlynovodniPripojkyAttrs {
    StavTrasySiteTI?: number;
    VedeniSiteVJineStavbe?: number;
    TlakovaHladinaPlynovodniSite?: number;
    Dimenze?: number;
}
export interface TrasaPlynovodniSiteAttrs {
    StavTrasySiteTI?: number;
    VedeniSiteVJineStavbe?: number;
    TlakovaHladinaPlynovodniSite?: number;
    Dimenze?: number;
}
export interface TrasaPotrubniPostyAttrs {
    StavObjektu?: number;
    Dimenze?: number;
}
export interface TrasaRadiovehoSmerovehoSpojeAttrs {
    StavObjektu?: number;
}
export interface TrasaSiteEKAttrs {
    StavTrasySiteTI?: number;
    PocetVedeniVTrase?: number;
    VedeniSiteVJineStavbe?: number;
    MaterialTrasySiteEK?: number;
    ZpusobOchranyVedeniSiteEK?: number;
}
export interface TrasaSiteProduktovoduAttrs {
    StavTrasySiteTI?: number;
    VedeniSiteVJineStavbe?: number;
    Dimenze?: number;
}
export interface TrasaStokoveSiteAttrs {
    ICME?: string;
    StavTrasySiteTI?: number;
    VedeniSiteVJineStavbe?: number;
    TypTrasyStokoveSite?: number;
    UceloveZarazeniStokoveSite?: number;
    DruhStokoveSite?: number;
    Dimenze?: number;
    Material?: string;
}
export interface TrasaTeplovodniSiteAttrs {
    StavTrasySiteTI?: number;
    VedeniSiteVJineStavbe?: number;
    TypTrasyTeplovodniSite?: number;
    TypTeplovodniSite?: number;
    Dimenze?: number;
}
export interface TrasaVodovodniPripojkyAttrs {
    Dimenze?: number;
    Material?: string;
}
export interface TrasaVodovodniSiteAttrs {
    ICME?: string;
    StavTrasySiteTI?: number;
    VedeniSiteVJineStavbe?: number;
    TypTrasyVodovodniSite?: number;
    TypMediaVodovodniSite?: number;
    Dimenze?: number;
    Material?: string;
}
export interface UdrzovanaPlochaZeleneDefinicniBodAttrs {
    TypUdrzovaneZelene?: number;
}
export interface UdrzovanaPlochaZelenePlochaAttrs {
    TypUdrzovaneZelene?: number;
}
export interface VodniCastPristavuBodAttrs {
    OznaceniObjektu?: string;
    TypPristavu?: number;
    OchrannaFunkce?: boolean;
}
export interface VodniCastPristavuPlochaAttrs {
    OznaceniObjektu?: string;
    TypPristavu?: number;
    OchrannaFunkce?: boolean;
}
export interface VodovodMistoZameruBodAttrs {
    TypObjektuVodovodniSiteZameru?: number;
}
export interface VodovodMistoZameruPlochaAttrs {
    TypObjektuVodovodniSiteZameru?: number;
}
export interface VrtAttrs {
    TypVrtu?: number;
}
export interface VyrobnaElektrinyNad50kWBodAttrs {
    StavObjektu?: number;
    TypVyrobnyElektriny?: number;
    InstalovanyVykon?: string;
}
export interface VyrobnaElektrinyNad50kWPlochaAttrs {
    StavObjektu?: number;
    TypVyrobnyElektriny?: number;
    InstalovanyVykon?: string;
}
export interface VyskovyBodNaTerenuAttrs {
    VyskaNaTerenu?: string;
}
export interface VzletovaPristavaciDrahaAttrs {
    TypPovrchuVzletovePristavaciDrahy?: number;
}
export interface ZarizeniProtikorozniOchranyBodAttrs {
    StavObjektu?: number;
    TypInzenyrskeSitePKO?: number;
}
export interface ZarizeniProtikorozniOchranyPlochaAttrs {
    StavObjektu?: number;
    TypInzenyrskeSitePKO?: number;
}
export interface ZarizeniElektrickeSiteAttrs {
    StavObjektu?: number;
    TypZarizeniElektrickeSite?: number;
}
export interface ZarizeniKanalizacniPripojkyBodAttrs {
    TypZarizeniKanalizacniPripojky?: number;
}
export interface ZarizeniKanalizacniPripojkyDefinicniBodAttrs {
    TypZarizeniKanalizacniPripojky?: number;
}
export interface ZarizeniKanalizacniPripojkyPlochaAttrs {
    TypZarizeniKanalizacniPripojky?: number;
}
export interface ZarizeniProLeteckyProvozAttrs {
    OznaceniObjektu?: string;
    TypZarizeniProLeteckyProvoz?: number;
}
export interface ZarizeniPlynovodniSiteAttrs {
    StavObjektu?: number;
    TypZarizeniPlynovodniSite?: number;
    UmisteniObjektu?: number;
}
export interface ZarizeniPotrubniPostyAttrs {
    StavObjektu?: number;
    TypZarizeniPotrubniPosty?: number;
}
export interface ZarizeniPrivadeceAttrs {
    StavObjektu?: number;
    TypZarizeniPrivadece?: number;
}
export interface ZarizeniSiteEKAttrs {
    StavObjektu?: number;
    TypZarizeniSiteEK?: number;
}
export interface ZarizeniSiteProduktovoduBodAttrs {
    StavObjektu?: number;
    TypZarizeniSiteProduktovodu?: number;
}
export interface ZarizeniSiteProduktovoduPlochaAttrs {
    StavObjektu?: number;
    TypZarizeniSiteProduktovodu?: number;
}
export interface ZarizeniTeplovodniSiteAttrs {
    StavObjektu?: number;
    TypZarizeniTeplovodniSite?: number;
}
export interface ZarizeniVodovodniPripojkyBodAttrs {
    TypZarizeniVodovodniPripojky?: number;
}
export interface ZarizeniVodovodniPripojkyDefinicniBodAttrs {
    TypZarizeniVodovodniPripojky?: number;
}
export interface ZarizeniVodovodniPripojkyPlochaAttrs {
    TypZarizeniVodovodniPripojky?: number;
}
export interface ZatrubnenyVodniTokAttrs {
    Dimenze?: number;
    Material?: string;
}
export interface ZedDefinicniBodAttrs {
    TypZdi?: number;
}
export interface ZedLinieAttrs {
    TypZdi?: number;
    HraniceJinehoObjektu?: boolean;
}
export interface ZedPlochaAttrs {
    TypZdi?: number;
}
export interface ZemedelskaPlochaDefinicniBodAttrs {
    TypZemedelskePlochy?: number;
}
export interface ZemedelskaPlochaPlochaAttrs {
    TypZemedelskePlochy?: number;
}
/** Catalog of all 358 JVF DTM entity types, keyed by XML element name */
export declare const ENTITY_CATALOG: Record<string, EntityMeta>;
/** Map of element names to their specific attribute interface types */
export type EntityAttrsMap = {
    "BPPlynovodniSite": Record<string, never>;
    "BPPodzemnihoZasobnikuPlynu": BPPodzemnihoZasobnikuPlynuAttrs;
    "BPZarizeniPKO": Record<string, never>;
    "OPDrazniStavby": OPDrazniStavbyAttrs;
    "OPElektrickeSite": Record<string, never>;
    "OPJadernehoZarizeni": Record<string, never>;
    "OPKolektoruKabelovodu": Record<string, never>;
    "OPLeteckychZabezpecovacichZarizeni": OPLeteckychZabezpecovacichZarizeniAttrs;
    "OPLetiste": OPLetisteAttrs;
    "OPObjektuKanalizace": Record<string, never>;
    "OPObjektuVodovodu": Record<string, never>;
    "OPPlynovodniSite": Record<string, never>;
    "OPPodzemnihoZasobnikuPlynu": OPPodzemnihoZasobnikuPlynuAttrs;
    "OPPozemniKomunikace": OPPozemniKomunikaceAttrs;
    "OPSiteEK": OPSiteEKAttrs;
    "OPSiteProduktovodu": OPSiteProduktovoduAttrs;
    "OPStaniceElektrickeSite": OPStaniceElektrickeSiteAttrs;
    "OPStavbyProVodniDopravu": OPStavbyProVodniDopravuAttrs;
    "OPTeplovodniSite": Record<string, never>;
    "OPVodnihoDilaIAIIKategorieHlediskaTBD": Record<string, never>;
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
    "BudovaDefinicniBod": Record<string, never>;
    "BudovaPlocha": Record<string, never>;
    "CeloPropustkuDefinicniBod": Record<string, never>;
    "CeloPropustkuPlocha": Record<string, never>;
    "ChodnikDefinicniBod": ChodnikDefinicniBodAttrs;
    "ChodnikPlocha": ChodnikPlochaAttrs;
    "CyklistickaDopravaKoridorZameruLinie": Record<string, never>;
    "CyklistickaDopravaKoridorZameruPlocha": Record<string, never>;
    "CyklistickaDopravaMistoZameruBod": Record<string, never>;
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
    "DulLomDefinicniBod": Record<string, never>;
    "DulLomPlocha": Record<string, never>;
    "DvurNadvoriDefinicniBod": Record<string, never>;
    "DvurNadvoriPlocha": Record<string, never>;
    "ElektrickaSitKoridorZameruLinie": ElektrickaSitKoridorZameruLinieAttrs;
    "ElektrickaSitKoridorZameruPlocha": ElektrickaSitKoridorZameruPlochaAttrs;
    "ElektrickaSitMistoZameruBod": ElektrickaSitMistoZameruBodAttrs;
    "ElektrickaSitMistoZameruPlocha": ElektrickaSitMistoZameruPlochaAttrs;
    "ElektronickaKomunikaceKoridorZameruLinie": Record<string, never>;
    "ElektronickaKomunikaceKoridorZameruPlocha": Record<string, never>;
    "ElektronickaKomunikaceMistoZameruBod": Record<string, never>;
    "ElektronickaKomunikaceMistoZameruPlocha": Record<string, never>;
    "HeliportBod": HeliportBodAttrs;
    "HeliportPlocha": HeliportPlochaAttrs;
    "HospodarskyNevyuzivanaPlochaDefinicniBod": Record<string, never>;
    "HospodarskyNevyuzivanaPlochaPlocha": Record<string, never>;
    "HraniceBudovy": Record<string, never>;
    "HraniceDopravniStavbyPlochy": HraniceDopravniStavbyPlochyAttrs;
    "HraniceOstatniPlochy": HraniceOstatniPlochyAttrs;
    "HranicePodzemnihoObjektuZPS": Record<string, never>;
    "HranicePrirodnihoPoloprirodnihoObjektu": HranicePrirodnihoPoloprirodnihoObjektuAttrs;
    "HraniceSchodiste": HraniceSchodisteAttrs;
    "HraniceStavby": HraniceStavbyAttrs;
    "HraniceUdrzovaneZelene": Record<string, never>;
    "HraniceVodnihoDila": HraniceVodnihoDilaAttrs;
    "HraniceZarizeniKanalizacniPripojky": Record<string, never>;
    "HraniceZarizeniVodovodniPripojky": Record<string, never>;
    "HraniceZdi": HraniceZdiAttrs;
    "HrazDefinicniBod": Record<string, never>;
    "HrazPlocha": Record<string, never>;
    "HrbitovDefinicniBod": Record<string, never>;
    "HrbitovPlocha": Record<string, never>;
    "HristeDefinicniBod": Record<string, never>;
    "HristePlocha": Record<string, never>;
    "IdentickyBod": IdentickyBodAttrs;
    "JaderneZarizeniBod": JaderneZarizeniBodAttrs;
    "JaderneZarizeniPlocha": JaderneZarizeniPlochaAttrs;
    "JezDefinicniBod": Record<string, never>;
    "JezPlocha": Record<string, never>;
    "JezeroDefinicniBod": Record<string, never>;
    "JezeroPlocha": Record<string, never>;
    "JinaTechnologickaStavbaTI": JinaTechnologickaStavbaTIAttrs;
    "JineDulniDiloStavbaDefinicniBod": Record<string, never>;
    "JineDulniDiloStavbaPlocha": Record<string, never>;
    "JineZarizeniOdstranovaniVyuzivaniSberOdpaduBod": JineZarizeniOdstranovaniVyuzivaniSberOdpaduBodAttrs;
    "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha": JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlochaAttrs;
    "JineZarizeniStavebTI": JineZarizeniStavebTIAttrs;
    "KanalizaceKoridorZameruLinie": Record<string, never>;
    "KanalizaceKoridorZameruPlocha": Record<string, never>;
    "KanalizaceMistoZameruBod": KanalizaceMistoZameruBodAttrs;
    "KanalizaceMistoZameruPlocha": KanalizaceMistoZameruPlochaAttrs;
    "Kolektor": KolektorAttrs;
    "KominDefinicniBod": Record<string, never>;
    "KominPlocha": Record<string, never>;
    "LesDefinicniBod": Record<string, never>;
    "LesPlocha": Record<string, never>;
    "LeteckaDopravaKoridorZameruLinie": Record<string, never>;
    "LeteckaDopravaKoridorZameruPlocha": Record<string, never>;
    "LeteckaDopravaMistoZameruBod": Record<string, never>;
    "LeteckaDopravaMistoZameruPlocha": Record<string, never>;
    "LeteckaStavbaBod": LeteckaStavbaBodAttrs;
    "LeteckaStavbaPlocha": LeteckaStavbaPlochaAttrs;
    "Letiste": LetisteAttrs;
    "ManipulacniPlochaDefinicniBod": ManipulacniPlochaDefinicniBodAttrs;
    "ManipulacniPlochaPlocha": ManipulacniPlochaPlochaAttrs;
    "MelioracniPrikopZlabDefinicniBod": Record<string, never>;
    "MelioracniPrikopZlabPlocha": Record<string, never>;
    "MelioracniSachta": Record<string, never>;
    "MostniVahaDefinicniBod": Record<string, never>;
    "MostniVahaPlocha": Record<string, never>;
    "NadrzBezVzdouvacihoObjektuDefinicniBod": NadrzBezVzdouvacihoObjektuDefinicniBodAttrs;
    "NadrzBezVzdouvacihoObjektuPlocha": NadrzBezVzdouvacihoObjektuPlochaAttrs;
    "NadrzZdrzSeVzdouvacimObjektemDefinicniBod": NadrzZdrzSeVzdouvacimObjektemDefinicniBodAttrs;
    "NadrzZdrzSeVzdouvacimObjektemPlocha": NadrzZdrzSeVzdouvacimObjektemPlochaAttrs;
    "NajezdDefinicniBod": NajezdDefinicniBodAttrs;
    "NajezdPlocha": NajezdPlochaAttrs;
    "NastupisteDefinicniBod": NastupisteDefinicniBodAttrs;
    "NastupistePlocha": NastupistePlochaAttrs;
    "NeidentifikovanyObjekt": Record<string, never>;
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
    "OchrannaSachtaVrtu": Record<string, never>;
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
    "ParkovisteOdstavnaPlochaDefinicniBod": ParkovisteOdstavnaPlochaDefinicniBodAttrs;
    "ParkovisteOdstavnaPlochaPlocha": ParkovisteOdstavnaPlochaPlochaAttrs;
    "PatkaDeskaMonolitPilirDefinicniBod": Record<string, never>;
    "PatkaDeskaMonolitPilirPlocha": Record<string, never>;
    "PlavebniKomoraBod": Record<string, never>;
    "PlavebniKomoraPlocha": Record<string, never>;
    "PlochaMostniKonstrukceDefinicniBod": Record<string, never>;
    "PlochaMostniKonstrukcePlocha": Record<string, never>;
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
    "PortalTuneluDefinicniBod": Record<string, never>;
    "PortalTuneluPlocha": Record<string, never>;
    "PovrchovyZnakTI": PovrchovyZnakTIAttrs;
    "PozemniCastPristavuBod": PozemniCastPristavuBodAttrs;
    "PozemniCastPristavuPlocha": PozemniCastPristavuPlochaAttrs;
    "PozemniLanovaDrahaDefinicniBod": Record<string, never>;
    "PozemniLanovaDrahaPlocha": Record<string, never>;
    "PridruzenaPlochaPozemniKomunikaceDefinicniBod": PridruzenaPlochaPozemniKomunikaceDefinicniBodAttrs;
    "PridruzenaPlochaPozemniKomunikacePlocha": PridruzenaPlochaPozemniKomunikacePlochaAttrs;
    "PrikopNasepZarezDopravniStavbyDefinicniBod": Record<string, never>;
    "PrikopNasepZarezDopravniStavbyPlocha": Record<string, never>;
    "PrivadecNahonOdpadLinie": PrivadecNahonOdpadLinieAttrs;
    "PrivadecNahonOdpadPlocha": PrivadecNahonOdpadPlochaAttrs;
    "PrivadecPovrchovychVodKoridorZameruLinie": Record<string, never>;
    "PrivadecPovrchovychVodKoridorZameruPlocha": Record<string, never>;
    "ProduktovodKoridorZameruLinie": Record<string, never>;
    "ProduktovodKoridorZameruPlocha": Record<string, never>;
    "ProduktovodMistoZameruBod": Record<string, never>;
    "ProduktovodMistoZameruPlocha": Record<string, never>;
    "ProtihlukovaStena": ProtihlukovaStenaAttrs;
    "ProtipovodnovaZabranaDefinicniBod": ProtipovodnovaZabranaDefinicniBodAttrs;
    "ProtipovodnovaZabranaLinie": ProtipovodnovaZabranaLinieAttrs;
    "ProtipovodnovaZabranaPlocha": ProtipovodnovaZabranaPlochaAttrs;
    "ProtipovodnoveOpatreniKoridorZameruLinie": Record<string, never>;
    "ProtipovodnoveOpatreniKoridorZameruPlocha": Record<string, never>;
    "ProvozniPlochaPodchoduDefinicniBod": Record<string, never>;
    "ProvozniPlochaPodchoduPlocha": Record<string, never>;
    "ProvozniPlochaPozemniKomunikaceDefinicniBod": ProvozniPlochaPozemniKomunikaceDefinicniBodAttrs;
    "ProvozniPlochaPozemniKomunikacePlocha": ProvozniPlochaPozemniKomunikacePlochaAttrs;
    "ProvozniPlochaTuneluDefinicniBod": ProvozniPlochaTuneluDefinicniBodAttrs;
    "ProvozniPlochaTuneluPlocha": ProvozniPlochaTuneluPlochaAttrs;
    "ProvozniProstorElektrickeSite": Record<string, never>;
    "PrubehJineTechnologickeStavbyTI": PrubehJineTechnologickeStavbyTIAttrs;
    "PrubehPropustku": Record<string, never>;
    "PrubehTechnologickeKonstrukce": PrubehTechnologickeKonstrukceAttrs;
    "RampaDefinicniBod": Record<string, never>;
    "RampaPlocha": Record<string, never>;
    "SchodisteDefinicniBod": SchodisteDefinicniBodAttrs;
    "SchodistePlocha": SchodistePlochaAttrs;
    "SdilenaStavbaTIKoridorZameruLinie": Record<string, never>;
    "SdilenaStavbaTIKoridorZameruPlocha": Record<string, never>;
    "SdilenyObjektTI": SdilenyObjektTIAttrs;
    "SilnicniDopravaKoridorZameruLinie": SilnicniDopravaKoridorZameruLinieAttrs;
    "SilnicniDopravaKoridorZameruPlocha": SilnicniDopravaKoridorZameruPlochaAttrs;
    "SilnicniDopravaMistoZameruBod": Record<string, never>;
    "SilnicniDopravaMistoZameruPlocha": Record<string, never>;
    "SkladkaOdpaduBod": SkladkaOdpaduBodAttrs;
    "SkladkaOdpaduPlocha": SkladkaOdpaduPlochaAttrs;
    "SklenikDefinicniBod": Record<string, never>;
    "SklenikPlocha": Record<string, never>;
    "SledovanaVodniCestaLinie": SledovanaVodniCestaLinieAttrs;
    "SledovanaVodniCestaPlocha": SledovanaVodniCestaPlochaAttrs;
    "SloupTechnologickeKonstrukce": Record<string, never>;
    "SouhrnnaPlochaZeleznicnichDrahDefinicniBod": SouhrnnaPlochaZeleznicnichDrahDefinicniBodAttrs;
    "SouhrnnaPlochaZeleznicnichDrahPlocha": SouhrnnaPlochaZeleznicnichDrahPlochaAttrs;
    "SpalovnaBod": SpalovnaBodAttrs;
    "SpalovnaPlocha": SpalovnaPlochaAttrs;
    "SpecialniDrahaDefinicniBod": Record<string, never>;
    "SpecialniDrahaPlocha": Record<string, never>;
    "StaniceElektrickeSiteBod": StaniceElektrickeSiteBodAttrs;
    "StaniceElektrickeSitePlocha": StaniceElektrickeSitePlochaAttrs;
    "StavbaProZpevneniPovrchuDefinicniBod": Record<string, never>;
    "StavbaProZpevneniPovrchuPlocha": Record<string, never>;
    "StavebneUpraveneKorytoDefinicniBod": Record<string, never>;
    "StavebneUpraveneKorytoPlocha": Record<string, never>;
    "StavebneUpravenyVjezdNaPozemek": StavebneUpravenyVjezdNaPozemekAttrs;
    "SterkovaPrehrazkaDefinicniBod": Record<string, never>;
    "SterkovaPrehrazkaPlocha": Record<string, never>;
    "StojanNabijeniVydejniStojan": StojanNabijeniVydejniStojanAttrs;
    "StudnaNaVerejnemProstranstvi": Record<string, never>;
    "StupenBod": Record<string, never>;
    "StupenDefinicniBod": Record<string, never>;
    "StupenPlocha": Record<string, never>;
    "SuchaNadrzDefinicniBod": Record<string, never>;
    "SuchaNadrzPlocha": Record<string, never>;
    "Svodidlo": SvodidloAttrs;
    "TechnickyKanal": TechnickyKanalAttrs;
    "TeplovodKoridorZameruLinie": Record<string, never>;
    "TeplovodKoridorZameruPlocha": Record<string, never>;
    "TeplovodMistoZameruBod": TeplovodMistoZameruBodAttrs;
    "TeplovodMistoZameruPlocha": TeplovodMistoZameruPlochaAttrs;
    "TerasaDefinicniBod": Record<string, never>;
    "TerasaPlocha": Record<string, never>;
    "TerenniHrana": TerenniHranaAttrs;
    "TerminalKombinovaneDopravyMistoZameruBod": Record<string, never>;
    "TerminalKombinovaneDopravyMistoZameruPlocha": Record<string, never>;
    "TramvajovaDrahaDefinicniBod": Record<string, never>;
    "TramvajovaDrahaPlocha": Record<string, never>;
    "TrasaProtikorozniOchrany": TrasaProtikorozniOchranyAttrs;
    "TrasaElektrickeSite": TrasaElektrickeSiteAttrs;
    "TrasaKanalizacniPripojky": TrasaKanalizacniPripojkyAttrs;
    "TrasaMistniElektrickeSite": TrasaMistniElektrickeSiteAttrs;
    "TrasaOdbernehoElektrickehoZarizeni": Record<string, never>;
    "TrasaOdbernehoPlynovehoZarizeni": TrasaOdbernehoPlynovehoZarizeniAttrs;
    "TrasaPlynovodniPripojky": TrasaPlynovodniPripojkyAttrs;
    "TrasaPlynovodniSite": TrasaPlynovodniSiteAttrs;
    "TrasaPotrubniPosty": TrasaPotrubniPostyAttrs;
    "TrasaRadiovehoSmerovehoSpoje": TrasaRadiovehoSmerovehoSpojeAttrs;
    "TrasaSiteEK": TrasaSiteEKAttrs;
    "TrasaSiteProduktovodu": TrasaSiteProduktovoduAttrs;
    "TrasaStokoveSite": TrasaStokoveSiteAttrs;
    "TrasaTeplovodniSite": TrasaTeplovodniSiteAttrs;
    "TrasaVodovodniPripojky": TrasaVodovodniPripojkyAttrs;
    "TrasaVodovodniSite": TrasaVodovodniSiteAttrs;
    "UdrzovanaPlochaZeleneDefinicniBod": UdrzovanaPlochaZeleneDefinicniBodAttrs;
    "UdrzovanaPlochaZelenePlocha": UdrzovanaPlochaZelenePlochaAttrs;
    "UlozneMistoTezebnihoOdpaduDefinicniBod": Record<string, never>;
    "UlozneMistoTezebnihoOdpaduPlocha": Record<string, never>;
    "VegetacniMisaDefinicniBod": Record<string, never>;
    "VegetacniMisaPlocha": Record<string, never>;
    "VisutaLanovaDraha": Record<string, never>;
    "VnitrniCleneniBudovStaveb": Record<string, never>;
    "VnitrniCleneniDopravniPlochy": Record<string, never>;
    "VodniCastPristavuBod": VodniCastPristavuBodAttrs;
    "VodniCastPristavuPlocha": VodniCastPristavuPlochaAttrs;
    "VodniDopravaKoridorZameruLinie": Record<string, never>;
    "VodniDopravaKoridorZameruPlocha": Record<string, never>;
    "VodniDopravaMistoZameruBod": Record<string, never>;
    "VodniDopravaMistoZameruPlocha": Record<string, never>;
    "VodniTokDefinicniBod": Record<string, never>;
    "VodniTokPlocha": Record<string, never>;
    "VodovodKoridorZameruLinie": Record<string, never>;
    "VodovodKoridorZameruPlocha": Record<string, never>;
    "VodovodMistoZameruBod": VodovodMistoZameruBodAttrs;
    "VodovodMistoZameruPlocha": VodovodMistoZameruPlochaAttrs;
    "Vrt": VrtAttrs;
    "VyrobnaElektrinyNad50kWBod": VyrobnaElektrinyNad50kWBodAttrs;
    "VyrobnaElektrinyNad50kWPlocha": VyrobnaElektrinyNad50kWPlochaAttrs;
    "VyskovyBodNaTerenu": VyskovyBodNaTerenuAttrs;
    "VytahVChodniku": Record<string, never>;
    "VzletovaPristavaciDraha": VzletovaPristavaciDrahaAttrs;
    "Zabradli": Record<string, never>;
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
    "ZastreseniDefinicniBod": Record<string, never>;
    "ZastreseniPlocha": Record<string, never>;
    "ZatrubnenyVodniTok": ZatrubnenyVodniTokAttrs;
    "ZedDefinicniBod": ZedDefinicniBodAttrs;
    "ZedLinie": ZedLinieAttrs;
    "ZedPlocha": ZedPlochaAttrs;
    "ZeleznicniPrejezd": Record<string, never>;
    "ZemedelskaPlochaDefinicniBod": ZemedelskaPlochaDefinicniBodAttrs;
    "ZemedelskaPlochaPlocha": ZemedelskaPlochaPlochaAttrs;
};
//# sourceMappingURL=entities.d.ts.map