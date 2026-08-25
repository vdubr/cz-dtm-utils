export type GeomKind = 'point' | 'curve' | 'surface' | 'surface+multiCurve';
export interface EntityMeta {
    elementName: string;
    nazev: string;
    codeBase: string;
    codeSuffix: string;
    kategorieObjektu: string;
    skupinaObjektu: string;
    obsahovaCast: 'ZPS' | 'TI' | 'DI' | 'PSPI' | '';
    sharedAttrGroup: string | null;
    specificAttrs: readonly string[];
    geomType: GeomKind;
    geomOptional: boolean;
    hasOblastKI: boolean;
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
    IDObjektuLetiste?: string;
    TypOPLetiste?: number;
}
export interface OPPlynovodniSiteAttrs {
    TlakovaHladinaPlynovodniSite?: number;
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
export interface DrazniDopravaPSAttrs {
    TypDrahy?: number;
    KategorieZeleznicniTrate?: number;
    TypZeleznicniTrate?: number;
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
    ZpusobPorizeniZPS?: number;
    TypDrobneKulturniStavby?: number;
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
}
export interface DrobnaSakralniStavbaDefinicniBodAttrs {
    TypDrobneSakralniStavby?: number;
}
export interface DrobnaSakralniStavbaPlochaAttrs {
    TypDrobneSakralniStavby?: number;
}
export interface ElektrickaSitPSAttrs {
    TypObjektuElektrickeSitePS?: number;
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
export interface HorniHranaObrubyLinieAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface HraniceBudovyAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface HraniceDopravniStavbyPlochyAttrs {
    ZpusobPorizeniZPS?: number;
    TypDopravniStavbyNeboPlochy?: number;
}
export interface HraniceOstatniPlochyAttrs {
    ZpusobPorizeniZPS?: number;
    TypOstatniPlochy?: number;
}
export interface HranicePodzemnihoObjektuZPSAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface HranicePrirodnihoPoloprirodnihoObjektuAttrs {
    ZpusobPorizeniZPS?: number;
    TypPrirodnihoPoloprirodnihoObjektu?: number;
}
export interface HraniceSchodisteAttrs {
    ZpusobPorizeniZPS?: number;
    DruhSchodiste?: number;
}
export interface HraniceStavbyAttrs {
    ZpusobPorizeniZPS?: number;
    TypStavby?: number;
}
export interface HraniceUdrzovaneZeleneAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface HraniceVodnihoDilaAttrs {
    ZpusobPorizeniZPS?: number;
    TypVodnihoDila?: number;
}
export interface HraniceZdiAttrs {
    ZpusobPorizeniZPS?: number;
    TypZdi?: number;
}
export interface HydrantVodovodniSiteBodAttrs {
    ICME?: string;
    StavObjektu?: number;
    TypHydrantuVodovodniSite?: number;
    TypMediaVodovodniSite?: number;
    DimenzeHydrantuVodovodniSite?: number;
}
export interface IdentickyBodAttrs {
    ZpusobPorizeniZPS?: number;
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
export interface JinaTechnologickaStavbaTIPlochaAttrs {
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
export interface JineZarizeniStavebTILinieAttrs {
    StavObjektu?: number;
    TypJinehoZarizeniStavebTI?: number;
    UmisteniObjektu?: number;
}
export interface JineZarizeniStavebTIPlochaAttrs {
    StavObjektu?: number;
    TypJinehoZarizeniStavebTI?: number;
    UmisteniObjektu?: number;
}
export interface KanalizacePSAttrs {
    TypObjektuStokoveSitePS?: number;
}
export interface KanalizaceMistoZameruBodAttrs {
    TypObjektuStokoveSiteZameru?: number;
}
export interface KanalizaceMistoZameruPlochaAttrs {
    TypObjektuStokoveSiteZameru?: number;
}
export interface KolektorAttrs {
    StavObjektu?: number;
    VedeniSiteVJineStavbe?: number;
}
export interface KolektorPlochaAttrs {
    StavObjektu?: number;
    VedeniSiteVJineStavbe?: number;
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
    ICAOKodLetiste?: string;
}
export interface ManipulacniPlochaDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface ManipulacniPlochaPlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface MelioracniSachtaAttrs {
    ZpusobPorizeniZPS?: number;
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
export interface NeidentifikovanyObjektAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface NosicTechnickehoZarizeniAttrs {
    ZpusobPorizeniZPS?: number;
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
export interface ObvodTuneluAttrs {
    OznaceniTunelu?: string;
}
export interface OchrannaSachtaVrtuAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface OdkalisteBodAttrs {
    StavObjektu?: number;
}
export interface OdkalistePlochaAttrs {
    StavObjektu?: number;
}
export interface OdpadoveHospodarstviPSAttrs {
    TypObjektuOdpadovehoHospodarstviPS?: number;
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
export interface OznacnikZastavkyHromadneDopravyBodAttrs {
    UmisteniOznacniku?: number;
    DruhHromadneDopravy?: number;
}
export interface ParkovisteOdstavnaPlochaDefinicniBodAttrs {
    PrevazujiciPovrch?: number;
}
export interface ParkovisteOdstavnaPlochaPlochaAttrs {
    PrevazujiciPovrch?: number;
}
export interface PlavebniKomoraBodAttrs {
    OznaceniObjektu?: string;
}
export interface PlavebniKomoraPlochaAttrs {
    OznaceniObjektu?: string;
}
export interface PlotAttrs {
    ZpusobPorizeniZPS?: number;
    DruhPlotu?: number;
    HraniceJinehoObjektu?: boolean;
}
export interface PlynovodPSAttrs {
    TypObjektuPlynovodniSitePS?: number;
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
    ZpusobPorizeniZPS?: number;
    HraniceJinehoObjektu?: boolean;
}
export interface ProtipovodnovaZabranaDefinicniBodAttrs {
    TypProtipovodnoveZabrany?: number;
}
export interface ProtipovodnovaZabranaLinieAttrs {
    ZpusobPorizeniZPS?: number;
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
    TypPrubehuJineTechnologickeStavbyTI?: number;
    VedeniSiteVJineStavbe?: number;
}
export interface PrubehPropustkuAttrs {
    ZpusobPorizeniZPS?: number;
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
export interface SilnicniDopravaPSAttrs {
    TypObjektuSilnicniDopravyPS?: number;
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
export interface SloupTechnologickeKonstrukceAttrs {
    ZpusobPorizeniZPS?: number;
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
    ZpusobPorizeniZPS?: number;
    PrujezdnaSirka?: number;
    PrujezdnaVyska?: number;
    HraniceJinehoObjektu?: boolean;
}
export interface StojanNabijeniVydejniStojanAttrs {
    ZpusobPorizeniZPS?: number;
    TypNabijecihoVydejnihoMedia?: number;
}
export interface StudnaNaVerejnemProstranstviAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface StupenBodAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface SvodidloAttrs {
    ZpusobPorizeniZPS?: number;
    TypSvodidla?: number;
}
export interface TechnickyKanalAttrs {
    StavObjektu?: number;
    TypTechnickehoKanalu?: number;
    VedeniSiteVJineStavbe?: number;
}
export interface TeplovodPSAttrs {
    TypObjektuTeplovodniSitePS?: number;
}
export interface TeplovodMistoZameruBodAttrs {
    TypTechnologickehoObjektuTeplovodniSite?: number;
}
export interface TeplovodMistoZameruPlochaAttrs {
    TypTechnologickehoObjektuTeplovodniSite?: number;
}
export interface TerenniHranaAttrs {
    ZpusobPorizeniZPS?: number;
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
    DruhElektrickehoProudu?: number;
}
export interface TrasaKanalizacniPripojkyAttrs {
    StavObjektu?: number;
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
export interface TrasaOdbernehoElektrickehoZarizeniAttrs {
    StavObjektu?: number;
}
export interface TrasaOdbernehoPlynovehoZarizeniAttrs {
    StavObjektu?: number;
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
export interface TrasaTrakcnihoTrolejovehoVedeniAttrs {
    StavTrasySiteTI?: number;
    ProvozniNapeti?: string;
    DruhElektrickehoProuduTrakcnihoVedeni?: number;
    TypDrahy?: number;
}
export interface TrasaVodovodniPripojkyAttrs {
    StavObjektu?: number;
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
export interface VisutaLanovaDrahaAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface VnitrniCleneniBudovStavebAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface VnitrniCleneniDopravniPlochyAttrs {
    ZpusobPorizeniZPS?: number;
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
export interface VodniTokLinieAttrs {
    ZpusobPorizeniZPS?: number;
    HraniceJinehoObjektu?: boolean;
}
export interface VodovodPSAttrs {
    TypObjektuVodovodniSitePS?: number;
}
export interface VodovodMistoZameruBodAttrs {
    TypObjektuVodovodniSiteZameru?: number;
}
export interface VodovodMistoZameruPlochaAttrs {
    TypObjektuVodovodniSiteZameru?: number;
}
export interface VrtAttrs {
    ZpusobPorizeniZPS?: number;
    TypVrtu?: number;
}
export interface VyrobnaElektrinyNad100kWBodAttrs {
    StavObjektu?: number;
    TypVyrobnyElektriny?: number;
    InstalovanyVykon?: string;
}
export interface VyrobnaElektrinyNad100kWPlochaAttrs {
    StavObjektu?: number;
    TypVyrobnyElektriny?: number;
    InstalovanyVykon?: string;
}
export interface VyskovyBodNaTerenuAttrs {
    ZpusobPorizeniZPS?: number;
    VyskaNaTerenu?: string;
}
export interface VytahVChodnikuAttrs {
    ZpusobPorizeniZPS?: number;
}
export interface VzletovaPristavaciDrahaAttrs {
    TypPovrchuVzletovePristavaciDrahy?: number;
}
export interface ZabradliAttrs {
    ZpusobPorizeniZPS?: number;
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
    StavObjektu?: number;
    TypZarizeniKanalizacniPripojky?: number;
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
    StavObjektu?: number;
    TypZarizeniVodovodniPripojky?: number;
}
export interface ZarizeniVodovodniPripojkyDefinicniBodAttrs {
    StavObjektu?: number;
    TypZarizeniVodovodniPripojky?: number;
}
export interface ZarizeniVodovodniPripojkyPlochaAttrs {
    StavObjektu?: number;
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
    ZpusobPorizeniZPS?: number;
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
/** Catalog of all 393 JVF DTM entity types, keyed by XML element name */
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
    "BudovaDefinicniBod": Record<string, never>;
    "BudovaPlocha": Record<string, never>;
    "CeloPropustkuDefinicniBod": Record<string, never>;
    "CeloPropustkuPlocha": Record<string, never>;
    "ChodnikDefinicniBod": ChodnikDefinicniBodAttrs;
    "ChodnikPlocha": ChodnikPlochaAttrs;
    "CyklistickaDopravaPS": Record<string, never>;
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
    "DrazniDopravaPS": DrazniDopravaPSAttrs;
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
    "ElektrickaSitPS": ElektrickaSitPSAttrs;
    "ElektrickaSitKoridorZameruLinie": ElektrickaSitKoridorZameruLinieAttrs;
    "ElektrickaSitKoridorZameruPlocha": ElektrickaSitKoridorZameruPlochaAttrs;
    "ElektrickaSitMistoZameruBod": ElektrickaSitMistoZameruBodAttrs;
    "ElektrickaSitMistoZameruPlocha": ElektrickaSitMistoZameruPlochaAttrs;
    "ElektronickaKomunikacePS": Record<string, never>;
    "ElektronickaKomunikaceKoridorZameruLinie": Record<string, never>;
    "ElektronickaKomunikaceKoridorZameruPlocha": Record<string, never>;
    "ElektronickaKomunikaceMistoZameruBod": Record<string, never>;
    "ElektronickaKomunikaceMistoZameruPlocha": Record<string, never>;
    "HeliportBod": HeliportBodAttrs;
    "HeliportPlocha": HeliportPlochaAttrs;
    "HorniHranaObrubyLinie": HorniHranaObrubyLinieAttrs;
    "HospodarskyNevyuzivanaPlochaDefinicniBod": Record<string, never>;
    "HospodarskyNevyuzivanaPlochaPlocha": Record<string, never>;
    "HraniceBudovy": HraniceBudovyAttrs;
    "HraniceDopravniStavbyPlochy": HraniceDopravniStavbyPlochyAttrs;
    "HraniceOstatniPlochy": HraniceOstatniPlochyAttrs;
    "HranicePodzemnihoObjektuZPS": HranicePodzemnihoObjektuZPSAttrs;
    "HranicePrirodnihoPoloprirodnihoObjektu": HranicePrirodnihoPoloprirodnihoObjektuAttrs;
    "HraniceSchodiste": HraniceSchodisteAttrs;
    "HraniceStavby": HraniceStavbyAttrs;
    "HraniceUdrzovaneZelene": HraniceUdrzovaneZeleneAttrs;
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
    "HydrantVodovodniSiteBod": HydrantVodovodniSiteBodAttrs;
    "IdentickyBod": IdentickyBodAttrs;
    "JaderneZarizeniBod": JaderneZarizeniBodAttrs;
    "JaderneZarizeniPlocha": JaderneZarizeniPlochaAttrs;
    "JezDefinicniBod": Record<string, never>;
    "JezPlocha": Record<string, never>;
    "JezeroDefinicniBod": Record<string, never>;
    "JezeroPlocha": Record<string, never>;
    "JinaStavbaDIPS": Record<string, never>;
    "JinaStavbaTIPS": Record<string, never>;
    "JinaTechnologickaStavbaTI": JinaTechnologickaStavbaTIAttrs;
    "JinaTechnologickaStavbaTIPlocha": JinaTechnologickaStavbaTIPlochaAttrs;
    "JineDulniDiloStavbaDefinicniBod": Record<string, never>;
    "JineDulniDiloStavbaPlocha": Record<string, never>;
    "JineZarizeniOdstranovaniVyuzivaniSberOdpaduBod": JineZarizeniOdstranovaniVyuzivaniSberOdpaduBodAttrs;
    "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha": JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlochaAttrs;
    "JineZarizeniStavebTI": JineZarizeniStavebTIAttrs;
    "JineZarizeniStavebTILinie": JineZarizeniStavebTILinieAttrs;
    "JineZarizeniStavebTIPlocha": JineZarizeniStavebTIPlochaAttrs;
    "KanalizacePS": KanalizacePSAttrs;
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
    "LeteckaDopravaPS": Record<string, never>;
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
    "MelioracniSachta": MelioracniSachtaAttrs;
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
    "OdpadoveHospodarstviPS": OdpadoveHospodarstviPSAttrs;
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
    "PatkaDeskaMonolitPilirDefinicniBod": Record<string, never>;
    "PatkaDeskaMonolitPilirPlocha": Record<string, never>;
    "PlavebniKomoraBod": PlavebniKomoraBodAttrs;
    "PlavebniKomoraPlocha": PlavebniKomoraPlochaAttrs;
    "PlochaMostniKonstrukceDefinicniBod": Record<string, never>;
    "PlochaMostniKonstrukcePlocha": Record<string, never>;
    "PlochaRekultivaceDefinicniBod": Record<string, never>;
    "PlochaRekultivacePlocha": Record<string, never>;
    "Plot": PlotAttrs;
    "PlynovodPS": PlynovodPSAttrs;
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
    "PrivadecPovrchovychVodPS": Record<string, never>;
    "PrivadecPovrchovychVodKoridorZameruLinie": Record<string, never>;
    "PrivadecPovrchovychVodKoridorZameruPlocha": Record<string, never>;
    "ProduktovodPS": Record<string, never>;
    "ProduktovodKoridorZameruLinie": Record<string, never>;
    "ProduktovodKoridorZameruPlocha": Record<string, never>;
    "ProduktovodMistoZameruBod": Record<string, never>;
    "ProduktovodMistoZameruPlocha": Record<string, never>;
    "ProtihlukovaStena": ProtihlukovaStenaAttrs;
    "ProtipovodnovaZabranaDefinicniBod": ProtipovodnovaZabranaDefinicniBodAttrs;
    "ProtipovodnovaZabranaLinie": ProtipovodnovaZabranaLinieAttrs;
    "ProtipovodnovaZabranaPlocha": ProtipovodnovaZabranaPlochaAttrs;
    "ProtipovodnoveOpatreniPS": Record<string, never>;
    "ProtipovodnoveOpatreniZamerLinie": Record<string, never>;
    "ProtipovodnoveOpatreniZamerPlocha": Record<string, never>;
    "ProvozniPlochaPodchoduDefinicniBod": Record<string, never>;
    "ProvozniPlochaPodchoduPlocha": Record<string, never>;
    "ProvozniPlochaPozemniKomunikaceDefinicniBod": ProvozniPlochaPozemniKomunikaceDefinicniBodAttrs;
    "ProvozniPlochaPozemniKomunikacePlocha": ProvozniPlochaPozemniKomunikacePlochaAttrs;
    "ProvozniPlochaTuneluDefinicniBod": ProvozniPlochaTuneluDefinicniBodAttrs;
    "ProvozniPlochaTuneluPlocha": ProvozniPlochaTuneluPlochaAttrs;
    "ProvozniProstorElektrickeSite": Record<string, never>;
    "PrubehJineTechnologickeStavbyTI": PrubehJineTechnologickeStavbyTIAttrs;
    "PrubehPropustku": PrubehPropustkuAttrs;
    "RampaDefinicniBod": Record<string, never>;
    "RampaPlocha": Record<string, never>;
    "RozestavenaPlochaDefinicniBod": Record<string, never>;
    "RozestavenaPlochaPlocha": Record<string, never>;
    "SchodisteDefinicniBod": SchodisteDefinicniBodAttrs;
    "SchodistePlocha": SchodistePlochaAttrs;
    "SdilenaStavbaTIPS": Record<string, never>;
    "SdilenaStavbaTIKoridorZameruLinie": Record<string, never>;
    "SdilenaStavbaTIKoridorZameruPlocha": Record<string, never>;
    "SdilenyObjektTI": SdilenyObjektTIAttrs;
    "SilnicniDopravaPS": SilnicniDopravaPSAttrs;
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
    "SloupTechnologickeKonstrukce": SloupTechnologickeKonstrukceAttrs;
    "SouhrnnaPlochaZeleznicnichDrahDefinicniBod": SouhrnnaPlochaZeleznicnichDrahDefinicniBodAttrs;
    "SouhrnnaPlochaZeleznicnichDrahPlocha": SouhrnnaPlochaZeleznicnichDrahPlochaAttrs;
    "SpalovnaBod": SpalovnaBodAttrs;
    "SpalovnaPlocha": SpalovnaPlochaAttrs;
    "SpecialniDrahaDefinicniBod": Record<string, never>;
    "SpecialniDrahaPlocha": Record<string, never>;
    "StaniceElektrickeSiteBod": StaniceElektrickeSiteBodAttrs;
    "StaniceElektrickeSitePlocha": StaniceElektrickeSitePlochaAttrs;
    "StavbaProPesiPS": Record<string, never>;
    "StavbaProZpevneniPovrchuDefinicniBod": Record<string, never>;
    "StavbaProZpevneniPovrchuPlocha": Record<string, never>;
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
    "TechnologickyPortalLinie": Record<string, never>;
    "TechnologickyPortalPlocha": Record<string, never>;
    "TeplovodPS": TeplovodPSAttrs;
    "TeplovodKoridorZameruLinie": Record<string, never>;
    "TeplovodKoridorZameruPlocha": Record<string, never>;
    "TeplovodMistoZameruBod": TeplovodMistoZameruBodAttrs;
    "TeplovodMistoZameruPlocha": TeplovodMistoZameruPlochaAttrs;
    "TerasaDefinicniBod": Record<string, never>;
    "TerasaPlocha": Record<string, never>;
    "TerenniHrana": TerenniHranaAttrs;
    "TerminalKombinovaneDopravyPS": Record<string, never>;
    "TerminalKombinovaneDopravyMistoZameruBod": Record<string, never>;
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
    "VerejneProstranstviPS": Record<string, never>;
    "VisutaLanovaDraha": VisutaLanovaDrahaAttrs;
    "VnitrniCleneniBudovStaveb": VnitrniCleneniBudovStavebAttrs;
    "VnitrniCleneniDopravniPlochy": VnitrniCleneniDopravniPlochyAttrs;
    "VodniCastPristavuBod": VodniCastPristavuBodAttrs;
    "VodniCastPristavuPlocha": VodniCastPristavuPlochaAttrs;
    "VodniDopravaPS": Record<string, never>;
    "VodniDopravaKoridorZameruLinie": Record<string, never>;
    "VodniDopravaKoridorZameruPlocha": Record<string, never>;
    "VodniDopravaMistoZameruBod": Record<string, never>;
    "VodniDopravaMistoZameruPlocha": Record<string, never>;
    "VodniTokDefinicniBod": Record<string, never>;
    "VodniTokLinie": VodniTokLinieAttrs;
    "VodniTokPlocha": Record<string, never>;
    "VodovodPS": VodovodPSAttrs;
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