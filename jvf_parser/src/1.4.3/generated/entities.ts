// Auto-generated from JVF DTM 1.4.3 XSD — DO NOT EDIT
// Run: npx tsx scripts/generate-types.ts

import type { Geometry, GmlPolygon, CommonAttributes } from '../types.js';
import type {
  SharedAttrsPasemTI,
  SharedAttrsPasemDI,
  SharedAttrsTI,
  SharedAttrsDefBod,
  SharedAttrsZPS,
  SharedAttrsZameru,
  SharedAttrsDI,
  SharedAttrsZPS_TI,
} from './shared-attrs.js';

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
export const ENTITY_CATALOG: Record<string, EntityMeta> = {
  "BPPlynovodniSite": {
    elementName: "BPPlynovodniSite",
    nazev: "bezpečnostní pásmo plynovodní sítě",
    codeBase: "0100000290",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "BPPodzemnihoZasobnikuPlynu": {
    elementName: "BPPodzemnihoZasobnikuPlynu",
    nazev: "bezpečnostní pásmo podzemního zásobníku plynu",
    codeBase: "0100000369",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypPodzemnihoZasobnikuPlynu"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "BPZarizeniPKO": {
    elementName: "BPZarizeniPKO",
    nazev: "bezpečnostní pásmo zařízení PKO",
    codeBase: "0100000291",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPDrazniStavby": {
    elementName: "OPDrazniStavby",
    nazev: "ochranné pásmo drážní stavby",
    codeBase: "0100000295",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["IDObjektuDrazniStavby","TypOPDrazniStavby"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPElektrickeSite": {
    elementName: "OPElektrickeSite",
    nazev: "ochranné pásmo elektrické sítě",
    codeBase: "0100000281",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPJadernehoZarizeni": {
    elementName: "OPJadernehoZarizeni",
    nazev: "ochranné pásmo jaderného zařízení",
    codeBase: "0100000288",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPKolektoruKabelovodu": {
    elementName: "OPKolektoruKabelovodu",
    nazev: "ochranné pásmo kolektoru, kabelovodu",
    codeBase: "0100000287",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPLeteckychZabezpecovacichZarizeni": {
    elementName: "OPLeteckychZabezpecovacichZarizeni",
    nazev: "ochranné pásmo leteckých zabezpečovacích zařízení",
    codeBase: "0100000297",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["TypOPLeteckychZabezpecovacichZarizeni"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPLetiste": {
    elementName: "OPLetiste",
    nazev: "ochranné pásmo letiště",
    codeBase: "0100000296",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["IDObjektuLetiste","TypOPLetiste"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPObjektuKanalizace": {
    elementName: "OPObjektuKanalizace",
    nazev: "ochranné pásmo objektu kanalizace",
    codeBase: "0100000280",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPObjektuVodovodu": {
    elementName: "OPObjektuVodovodu",
    nazev: "ochranné pásmo objektu vodovodu",
    codeBase: "0100000279",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPPlynovodniSite": {
    elementName: "OPPlynovodniSite",
    nazev: "ochranné pásmo plynovodní sítě",
    codeBase: "0100000283",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPPodzemnihoZasobnikuPlynu": {
    elementName: "OPPodzemnihoZasobnikuPlynu",
    nazev: "ochranné pásmo podzemního zásobníku plynu",
    codeBase: "0100000368",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypPodzemnihoZasobnikuPlynu"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPPozemniKomunikace": {
    elementName: "OPPozemniKomunikace",
    nazev: "ochranné pásmo pozemní komunikace",
    codeBase: "0100000294",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["IDObjektuSilnicniStavby","CisloETahu","TypOPPozemniKomunikace"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPSiteEK": {
    elementName: "OPSiteEK",
    nazev: "ochranné pásmo sítě EK",
    codeBase: "0100000286",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypOPSiteEK"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPSiteProduktovodu": {
    elementName: "OPSiteProduktovodu",
    nazev: "ochranné pásmo sítě produktovodu",
    codeBase: "0100000284",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypOPSiteProduktovodu"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPStaniceElektrickeSite": {
    elementName: "OPStaniceElektrickeSite",
    nazev: "ochranné pásmo stanice elektrické sítě",
    codeBase: "0100000317",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypStaniceElektrickeSite"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPStavbyProVodniDopravu": {
    elementName: "OPStavbyProVodniDopravu",
    nazev: "ochranné pásmo stavby pro vodní dopravu",
    codeBase: "0100000298",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["IDObjektuStavbyProVodniDopravu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPTeplovodniSite": {
    elementName: "OPTeplovodniSite",
    nazev: "ochranné pásmo teplovodní sítě",
    codeBase: "0100000285",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPVodnihoDilaIAIIKategorieHlediskaTBD": {
    elementName: "OPVodnihoDilaIAIIKategorieHlediskaTBD",
    nazev: "ochranné pásmo vodního díla I. a II. kategorie z hlediska technickobezpečnostního dohledu",
    codeBase: "0100000293",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPVyrobnyElektriny": {
    elementName: "OPVyrobnyElektriny",
    nazev: "ochranné pásmo výrobny elektřiny",
    codeBase: "0100000282",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypVyrobnyElektriny"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPZarizeniPKO": {
    elementName: "OPZarizeniPKO",
    nazev: "ochranné pásmo zařízení PKO",
    codeBase: "0100000289",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OPZarizeniOdpadovehoHospodarstvi": {
    elementName: "OPZarizeniOdpadovehoHospodarstvi",
    nazev: "ochranné pásmo zařízení odpadového hospodářství",
    codeBase: "0100000292",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypOPZarizeniOdpadovehoHospodarstvi"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TechnologickyObjektPlynovodniSiteBod": {
    elementName: "TechnologickyObjektPlynovodniSiteBod",
    nazev: "technologický objekt plynovodní sítě",
    codeBase: "0100000112",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TlakovaHladinaPlynovodniSite","TypTechnologickehoObjektuPlynovodniSite"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TechnologickyObjektPlynovodniSitePlocha": {
    elementName: "TechnologickyObjektPlynovodniSitePlocha",
    nazev: "technologický objekt plynovodní sítě",
    codeBase: "0100000112",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TlakovaHladinaPlynovodniSite","TypTechnologickehoObjektuPlynovodniSite"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TechnologickyObjektSiteEKBod": {
    elementName: "TechnologickyObjektSiteEKBod",
    nazev: "technologický objekt sítě EK",
    codeBase: "0100000108",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypTechnologickehoObjektuSiteEK"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TechnologickyObjektSiteEKPlocha": {
    elementName: "TechnologickyObjektSiteEKPlocha",
    nazev: "technologický objekt sítě EK",
    codeBase: "0100000108",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypTechnologickehoObjektuSiteEK"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TechnologickyObjektSiteProduktovoduBod": {
    elementName: "TechnologickyObjektSiteProduktovoduBod",
    nazev: "technologický objekt sítě produktovodu",
    codeBase: "0100000129",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TechnologickyObjektSiteProduktovoduPlocha": {
    elementName: "TechnologickyObjektSiteProduktovoduPlocha",
    nazev: "technologický objekt sítě produktovodu",
    codeBase: "0100000129",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TechnologickyObjektTeplovodniSiteBod": {
    elementName: "TechnologickyObjektTeplovodniSiteBod",
    nazev: "technologický objekt teplovodní sítě",
    codeBase: "0100000132",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypTechnologickehoObjektuTeplovodniSite"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TechnologickyObjektTeplovodniSitePlocha": {
    elementName: "TechnologickyObjektTeplovodniSitePlocha",
    nazev: "technologický objekt teplovodní sítě",
    codeBase: "0100000132",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypTechnologickehoObjektuTeplovodniSite"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "BudovaDefinicniBod": {
    elementName: "BudovaDefinicniBod",
    nazev: "budova",
    codeBase: "0100000001",
    codeSuffix: "04",
    kategorieObjektu: "Budovy",
    skupinaObjektu: "Objekt budovy",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "BudovaPlocha": {
    elementName: "BudovaPlocha",
    nazev: "budova",
    codeBase: "0100000001",
    codeSuffix: "03",
    kategorieObjektu: "Budovy",
    skupinaObjektu: "Objekt budovy",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CeloPropustkuDefinicniBod": {
    elementName: "CeloPropustkuDefinicniBod",
    nazev: "čelo propustku",
    codeBase: "0100000193",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CeloPropustkuPlocha": {
    elementName: "CeloPropustkuPlocha",
    nazev: "čelo propustku",
    codeBase: "0100000193",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ChodnikDefinicniBod": {
    elementName: "ChodnikDefinicniBod",
    nazev: "chodník",
    codeBase: "0100000007",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ChodnikPlocha": {
    elementName: "ChodnikPlocha",
    nazev: "chodník",
    codeBase: "0100000007",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklistickaDopravaKoridorZameruLinie": {
    elementName: "CyklistickaDopravaKoridorZameruLinie",
    nazev: "cyklistická doprava – koridor záměru",
    codeBase: "0100000347",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklistickaDopravaKoridorZameruPlocha": {
    elementName: "CyklistickaDopravaKoridorZameruPlocha",
    nazev: "cyklistická doprava – koridor záměru",
    codeBase: "0100000347",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklistickaDopravaMistoZameruBod": {
    elementName: "CyklistickaDopravaMistoZameruBod",
    nazev: "cyklistická doprava – místo záměru",
    codeBase: "0100000348",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklistickaDopravaMistoZameruPlocha": {
    elementName: "CyklistickaDopravaMistoZameruPlocha",
    nazev: "cyklistická doprava – místo záměru",
    codeBase: "0100000348",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklostezkaDefinicniBod": {
    elementName: "CyklostezkaDefinicniBod",
    nazev: "cyklostezka",
    codeBase: "0100000009",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch","OznaceniCyklostezky"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklostezkaPlocha": {
    elementName: "CyklostezkaPlocha",
    nazev: "cyklostezka",
    codeBase: "0100000009",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","OznaceniCyklostezky"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DeliciPasDefinicniBod": {
    elementName: "DeliciPasDefinicniBod",
    nazev: "dělící pás",
    codeBase: "0100000015",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DeliciPasPlocha": {
    elementName: "DeliciPasPlocha",
    nazev: "dělící pás",
    codeBase: "0100000015",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DopravneVyznamneMistoDrazeBod": {
    elementName: "DopravneVyznamneMistoDrazeBod",
    nazev: "dopravně významné místo na dráze",
    codeBase: "0100000040",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypDopravneVyznamnehoMistaDraze"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DopravneVyznamneMistoDrazePlocha": {
    elementName: "DopravneVyznamneMistoDrazePlocha",
    nazev: "dopravně významné místo na dráze",
    codeBase: "0100000040",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypDopravneVyznamnehoMistaDraze"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DopravniOstruvekDefinicniBod": {
    elementName: "DopravniOstruvekDefinicniBod",
    nazev: "dopravní ostrůvek",
    codeBase: "0100000013",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DopravniOstruvekPlocha": {
    elementName: "DopravniOstruvekPlocha",
    nazev: "dopravní ostrůvek",
    codeBase: "0100000013",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DopravniUzelSilnicniSite": {
    elementName: "DopravniUzelSilnicniSite",
    nazev: "dopravní uzel silniční sítě",
    codeBase: "0100000311",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["CisloUzlu","CislaKrizujicichKomunikaci","TypUzlu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrazniDopravaKoridorZameruLinie": {
    elementName: "DrazniDopravaKoridorZameruLinie",
    nazev: "drážní doprava – koridor záměru",
    codeBase: "0100000341",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypDrahy","KategorieZeleznicniTrate","TypZeleznicniTrate"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrazniDopravaKoridorZameruPlocha": {
    elementName: "DrazniDopravaKoridorZameruPlocha",
    nazev: "drážní doprava – koridor záměru",
    codeBase: "0100000341",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypDrahy","KategorieZeleznicniTrate","TypZeleznicniTrate"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrazniDopravaMistoZameruBod": {
    elementName: "DrazniDopravaMistoZameruBod",
    nazev: "drážní doprava – místo záměru",
    codeBase: "0100000342",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypDrahy"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrazniDopravaMistoZameruPlocha": {
    elementName: "DrazniDopravaMistoZameruPlocha",
    nazev: "drážní doprava – místo záměru",
    codeBase: "0100000342",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypDrahy"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrobnaKulturniStavbaBod": {
    elementName: "DrobnaKulturniStavbaBod",
    nazev: "drobná kulturní stavba",
    codeBase: "0100000159",
    codeSuffix: "01",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDrobneKulturniStavby"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrobnaKulturniStavbaDefinicniBod": {
    elementName: "DrobnaKulturniStavbaDefinicniBod",
    nazev: "drobná kulturní stavba",
    codeBase: "0100000159",
    codeSuffix: "04",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypDrobneKulturniStavby"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrobnaKulturniStavbaPlocha": {
    elementName: "DrobnaKulturniStavbaPlocha",
    nazev: "drobná kulturní stavba",
    codeBase: "0100000159",
    codeSuffix: "03",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDrobneKulturniStavby"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrobnaSakralniStavbaBod": {
    elementName: "DrobnaSakralniStavbaBod",
    nazev: "drobná sakrální stavba",
    codeBase: "0100000154",
    codeSuffix: "01",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDrobneSakralniStavby"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrobnaSakralniStavbaDefinicniBod": {
    elementName: "DrobnaSakralniStavbaDefinicniBod",
    nazev: "drobná sakrální stavba",
    codeBase: "0100000154",
    codeSuffix: "04",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypDrobneSakralniStavby"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrobnaSakralniStavbaPlocha": {
    elementName: "DrobnaSakralniStavbaPlocha",
    nazev: "drobná sakrální stavba",
    codeBase: "0100000154",
    codeSuffix: "03",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDrobneSakralniStavby"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DulLomDefinicniBod": {
    elementName: "DulLomDefinicniBod",
    nazev: "důl, lom",
    codeBase: "0100000140",
    codeSuffix: "04",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DulLomPlocha": {
    elementName: "DulLomPlocha",
    nazev: "důl, lom",
    codeBase: "0100000140",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DvurNadvoriDefinicniBod": {
    elementName: "DvurNadvoriDefinicniBod",
    nazev: "dvůr, nádvoří",
    codeBase: "0100000189",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DvurNadvoriPlocha": {
    elementName: "DvurNadvoriPlocha",
    nazev: "dvůr, nádvoří",
    codeBase: "0100000189",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektrickaSitKoridorZameruLinie": {
    elementName: "ElektrickaSitKoridorZameruLinie",
    nazev: "elektrická síť – koridor záměru",
    codeBase: "0100000350",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["MaximalniNapetovaHladina"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektrickaSitKoridorZameruPlocha": {
    elementName: "ElektrickaSitKoridorZameruPlocha",
    nazev: "elektrická síť – koridor záměru",
    codeBase: "0100000350",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["MaximalniNapetovaHladina"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektrickaSitMistoZameruBod": {
    elementName: "ElektrickaSitMistoZameruBod",
    nazev: "elektrická síť – místo záměru",
    codeBase: "0100000351",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuElektrickeSiteZameru"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektrickaSitMistoZameruPlocha": {
    elementName: "ElektrickaSitMistoZameruPlocha",
    nazev: "elektrická síť – místo záměru",
    codeBase: "0100000351",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuElektrickeSiteZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektronickaKomunikaceKoridorZameruLinie": {
    elementName: "ElektronickaKomunikaceKoridorZameruLinie",
    nazev: "elektronická komunikace – koridor záměru",
    codeBase: "0100000352",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektronickaKomunikaceKoridorZameruPlocha": {
    elementName: "ElektronickaKomunikaceKoridorZameruPlocha",
    nazev: "elektronická komunikace – koridor záměru",
    codeBase: "0100000352",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektronickaKomunikaceMistoZameruBod": {
    elementName: "ElektronickaKomunikaceMistoZameruBod",
    nazev: "elektronická komunikace – místo záměru",
    codeBase: "0100000353",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektronickaKomunikaceMistoZameruPlocha": {
    elementName: "ElektronickaKomunikaceMistoZameruPlocha",
    nazev: "elektronická komunikace – místo záměru",
    codeBase: "0100000353",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HeliportBod": {
    elementName: "HeliportBod",
    nazev: "heliport",
    codeBase: "0100000048",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","OznaceniHeliportu","UmisteniHeliportu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HeliportPlocha": {
    elementName: "HeliportPlocha",
    nazev: "heliport",
    codeBase: "0100000048",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","OznaceniHeliportu","UmisteniHeliportu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HospodarskyNevyuzivanaPlochaDefinicniBod": {
    elementName: "HospodarskyNevyuzivanaPlochaDefinicniBod",
    nazev: "hospodářsky nevyužívaná plocha",
    codeBase: "0100000213",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HospodarskyNevyuzivanaPlochaPlocha": {
    elementName: "HospodarskyNevyuzivanaPlochaPlocha",
    nazev: "hospodářsky nevyužívaná plocha",
    codeBase: "0100000213",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceBudovy": {
    elementName: "HraniceBudovy",
    nazev: "hranice budovy",
    codeBase: "0100000299",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceDopravniStavbyPlochy": {
    elementName: "HraniceDopravniStavbyPlochy",
    nazev: "hranice dopravní stavby nebo plochy",
    codeBase: "0100000304",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDopravniStavbyNeboPlochy"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceOstatniPlochy": {
    elementName: "HraniceOstatniPlochy",
    nazev: "hranice ostatní plochy",
    codeBase: "0100000307",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypOstatniPlochy"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HranicePodzemnihoObjektuZPS": {
    elementName: "HranicePodzemnihoObjektuZPS",
    nazev: "hranice podzemního objektu ZPS",
    codeBase: "0100000309",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HranicePrirodnihoPoloprirodnihoObjektu": {
    elementName: "HranicePrirodnihoPoloprirodnihoObjektu",
    nazev: "hranice přírodního a polopřírodního objektu",
    codeBase: "0100000305",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypPrirodnihoPoloprirodnihoObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceSchodiste": {
    elementName: "HraniceSchodiste",
    nazev: "hranice schodiště",
    codeBase: "0100000301",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["DruhSchodiste"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceStavby": {
    elementName: "HraniceStavby",
    nazev: "hranice stavby",
    codeBase: "0100000300",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypStavby"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceUdrzovaneZelene": {
    elementName: "HraniceUdrzovaneZelene",
    nazev: "hranice udržované zeleně",
    codeBase: "0100000308",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceVodnihoDila": {
    elementName: "HraniceVodnihoDila",
    nazev: "hranice vodního díla",
    codeBase: "0100000306",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypVodnihoDila"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceZarizeniKanalizacniPripojky": {
    elementName: "HraniceZarizeniKanalizacniPripojky",
    nazev: "hranice zařízení kanalizační přípojky",
    codeBase: "0100000371",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceZarizeniVodovodniPripojky": {
    elementName: "HraniceZarizeniVodovodniPripojky",
    nazev: "hranice zařízení vodovodní přípojky",
    codeBase: "0100000370",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HraniceZdi": {
    elementName: "HraniceZdi",
    nazev: "hranice zdi",
    codeBase: "0100000302",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZdi"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HrazDefinicniBod": {
    elementName: "HrazDefinicniBod",
    nazev: "hráz",
    codeBase: "0100000331",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HrazPlocha": {
    elementName: "HrazPlocha",
    nazev: "hráz",
    codeBase: "0100000331",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HrbitovDefinicniBod": {
    elementName: "HrbitovDefinicniBod",
    nazev: "hřbitov",
    codeBase: "0100000157",
    codeSuffix: "04",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HrbitovPlocha": {
    elementName: "HrbitovPlocha",
    nazev: "hřbitov",
    codeBase: "0100000157",
    codeSuffix: "03",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HristeDefinicniBod": {
    elementName: "HristeDefinicniBod",
    nazev: "hřiště",
    codeBase: "0100000152",
    codeSuffix: "04",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Sportoviště a hřiště pro rekreaci",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HristePlocha": {
    elementName: "HristePlocha",
    nazev: "hřiště",
    codeBase: "0100000152",
    codeSuffix: "03",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Sportoviště a hřiště pro rekreaci",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "IdentickyBod": {
    elementName: "IdentickyBod",
    nazev: "identický bod",
    codeBase: "0100000220",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Podrobný bod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["CisloBodu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JaderneZarizeniBod": {
    elementName: "JaderneZarizeniBod",
    nazev: "jaderné zařízení",
    codeBase: "0100000104",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypJadernehoZarizeni"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "JaderneZarizeniPlocha": {
    elementName: "JaderneZarizeniPlocha",
    nazev: "jaderné zařízení",
    codeBase: "0100000104",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypJadernehoZarizeni"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "JezDefinicniBod": {
    elementName: "JezDefinicniBod",
    nazev: "jez",
    codeBase: "0100000332",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JezPlocha": {
    elementName: "JezPlocha",
    nazev: "jez",
    codeBase: "0100000332",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JezeroDefinicniBod": {
    elementName: "JezeroDefinicniBod",
    nazev: "jezero",
    codeBase: "0100000205",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JezeroPlocha": {
    elementName: "JezeroPlocha",
    nazev: "jezero",
    codeBase: "0100000205",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JinaTechnologickaStavbaTI": {
    elementName: "JinaTechnologickaStavbaTI",
    nazev: "jiná technologická stavba TI",
    codeBase: "0100000096",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "JineDulniDiloStavbaDefinicniBod": {
    elementName: "JineDulniDiloStavbaDefinicniBod",
    nazev: "jiné důlní dílo, důlní stavba",
    codeBase: "0100000146",
    codeSuffix: "04",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JineDulniDiloStavbaPlocha": {
    elementName: "JineDulniDiloStavbaPlocha",
    nazev: "jiné důlní dílo, důlní stavba",
    codeBase: "0100000146",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JineZarizeniOdstranovaniVyuzivaniSberOdpaduBod": {
    elementName: "JineZarizeniOdstranovaniVyuzivaniSberOdpaduBod",
    nazev: "jiné zařízení na odstraňování, využívání nebo sběr odpadů",
    codeBase: "0100000150",
    codeSuffix: "01",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniOdstranovaniOdpadu","PovoleniNakladaniNebezpecnymOdpadem","Kapacita"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha": {
    elementName: "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha",
    nazev: "jiné zařízení na odstraňování, využívání nebo sběr odpadů",
    codeBase: "0100000150",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniOdstranovaniOdpadu","PovoleniNakladaniNebezpecnymOdpadem","Kapacita"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "JineZarizeniStavebTI": {
    elementName: "JineZarizeniStavebTI",
    nazev: "jiné zařízení staveb TI",
    codeBase: "0100000139",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypJinehoZarizeniStavebTI","UmisteniObjektu"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "KanalizaceKoridorZameruLinie": {
    elementName: "KanalizaceKoridorZameruLinie",
    nazev: "kanalizace – koridor záměru",
    codeBase: "0100000358",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KanalizaceKoridorZameruPlocha": {
    elementName: "KanalizaceKoridorZameruPlocha",
    nazev: "kanalizace – koridor záměru",
    codeBase: "0100000358",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KanalizaceMistoZameruBod": {
    elementName: "KanalizaceMistoZameruBod",
    nazev: "kanalizace – místo záměru",
    codeBase: "0100000359",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuStokoveSiteZameru"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KanalizaceMistoZameruPlocha": {
    elementName: "KanalizaceMistoZameruPlocha",
    nazev: "kanalizace – koridor záměru",
    codeBase: "0100000359",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuStokoveSiteZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Kolektor": {
    elementName: "Kolektor",
    nazev: "kolektor",
    codeBase: "0100000091",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "KominDefinicniBod": {
    elementName: "KominDefinicniBod",
    nazev: "komín",
    codeBase: "0100000177",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KominPlocha": {
    elementName: "KominPlocha",
    nazev: "komín",
    codeBase: "0100000177",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LesDefinicniBod": {
    elementName: "LesDefinicniBod",
    nazev: "les",
    codeBase: "0100000211",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LesPlocha": {
    elementName: "LesPlocha",
    nazev: "les",
    codeBase: "0100000211",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaDopravaKoridorZameruLinie": {
    elementName: "LeteckaDopravaKoridorZameruLinie",
    nazev: "letecká doprava – koridor záměru",
    codeBase: "0100000345",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaDopravaKoridorZameruPlocha": {
    elementName: "LeteckaDopravaKoridorZameruPlocha",
    nazev: "letecká doprava – koridor záměru",
    codeBase: "0100000345",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaDopravaMistoZameruBod": {
    elementName: "LeteckaDopravaMistoZameruBod",
    nazev: "letecká doprava – místo záměru",
    codeBase: "0100000346",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaDopravaMistoZameruPlocha": {
    elementName: "LeteckaDopravaMistoZameruPlocha",
    nazev: "letecká doprava – místo záměru",
    codeBase: "0100000346",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaStavbaBod": {
    elementName: "LeteckaStavbaBod",
    nazev: "letecká stavba",
    codeBase: "0100000049",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypLeteckeStavby"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaStavbaPlocha": {
    elementName: "LeteckaStavbaPlocha",
    nazev: "letecká stavba",
    codeBase: "0100000049",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypLeteckeStavby"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Letiste": {
    elementName: "Letiste",
    nazev: "letiště",
    codeBase: "0100000047",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["DruhLetiste","OznaceniLetiste"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ManipulacniPlochaDefinicniBod": {
    elementName: "ManipulacniPlochaDefinicniBod",
    nazev: "manipulační plocha",
    codeBase: "0100000055",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ManipulacniPlochaPlocha": {
    elementName: "ManipulacniPlochaPlocha",
    nazev: "manipulační plocha",
    codeBase: "0100000055",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "MelioracniPrikopZlabDefinicniBod": {
    elementName: "MelioracniPrikopZlabDefinicniBod",
    nazev: "meliorační příkop, žlab",
    codeBase: "0100000080",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba k melioracím pozemků",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "MelioracniPrikopZlabPlocha": {
    elementName: "MelioracniPrikopZlabPlocha",
    nazev: "meliorační příkop, žlab",
    codeBase: "0100000080",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba k melioracím pozemků",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "MelioracniSachta": {
    elementName: "MelioracniSachta",
    nazev: "meliorační šachta",
    codeBase: "0100000083",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba k melioracím pozemků",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "MostniVahaDefinicniBod": {
    elementName: "MostniVahaDefinicniBod",
    nazev: "mostní váha",
    codeBase: "0100000070",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "MostniVahaPlocha": {
    elementName: "MostniVahaPlocha",
    nazev: "mostní váha",
    codeBase: "0100000070",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NadrzBezVzdouvacihoObjektuDefinicniBod": {
    elementName: "NadrzBezVzdouvacihoObjektuDefinicniBod",
    nazev: "nádrž bez vzdouvacího objektu",
    codeBase: "0100000330",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Nádrž",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypNadrzeBezVzdouvacihoObjektu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NadrzBezVzdouvacihoObjektuPlocha": {
    elementName: "NadrzBezVzdouvacihoObjektuPlocha",
    nazev: "nádrž bez vzdouvacího objektu",
    codeBase: "0100000330",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Nádrž",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNadrzeBezVzdouvacihoObjektu"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NadrzZdrzSeVzdouvacimObjektemDefinicniBod": {
    elementName: "NadrzZdrzSeVzdouvacimObjektemDefinicniBod",
    nazev: "nádrž, zdrž se vzdouvacím objektem",
    codeBase: "0100000072",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Nádrž",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypNadrzeZdrzeSeVzdouvacimObjektem"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NadrzZdrzSeVzdouvacimObjektemPlocha": {
    elementName: "NadrzZdrzSeVzdouvacimObjektemPlocha",
    nazev: "nádrž, zdrž se vzdouvacím objektem",
    codeBase: "0100000072",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Nádrž",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNadrzeZdrzeSeVzdouvacimObjektem"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NajezdDefinicniBod": {
    elementName: "NajezdDefinicniBod",
    nazev: "nájezd",
    codeBase: "0100000017",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NajezdPlocha": {
    elementName: "NajezdPlocha",
    nazev: "nájezd",
    codeBase: "0100000017",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NastupisteDefinicniBod": {
    elementName: "NastupisteDefinicniBod",
    nazev: "nástupiště",
    codeBase: "0100000053",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NastupistePlocha": {
    elementName: "NastupistePlocha",
    nazev: "nástupiště",
    codeBase: "0100000053",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NeidentifikovanyObjekt": {
    elementName: "NeidentifikovanyObjekt",
    nazev: "neidentifikovaný objekt",
    codeBase: "0100000202",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Doplňkové zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NosicTechnickehoZarizeni": {
    elementName: "NosicTechnickehoZarizeni",
    nazev: "nosič technického zařízení",
    codeBase: "0100000201",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNosiceTechnickehoZarizeni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "O6": {
    elementName: "O6",
    nazev: "o6",
    codeBase: "",
    codeSuffix: "",
    kategorieObjektu: "",
    skupinaObjektu: "",
    obsahovaCast: "" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","EvidencniCisloObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObjektOdvodneniStavbyBod": {
    elementName: "ObjektOdvodneniStavbyBod",
    nazev: "objekt odvodnění stavby",
    codeBase: "0100000329",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypObjektuOdvodneniStavby"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ObjektOdvodneniStavbyLinie": {
    elementName: "ObjektOdvodneniStavbyLinie",
    nazev: "objekt odvodnění stavby",
    codeBase: "0100000329",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypObjektuOdvodneniStavby"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ObjektOdvodneniStavbyPlocha": {
    elementName: "ObjektOdvodneniStavbyPlocha",
    nazev: "objekt odvodnění stavby",
    codeBase: "0100000329",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypObjektuOdvodneniStavby"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ObjektStokoveSiteBod": {
    elementName: "ObjektStokoveSiteBod",
    nazev: "objekt stokové sítě",
    codeBase: "0100000337",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","ICME","TypObjektuStokoveSite"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ObjektStokoveSitePlocha": {
    elementName: "ObjektStokoveSitePlocha",
    nazev: "objekt stokové sítě",
    codeBase: "0100000337",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["ICME","StavObjektu","TypObjektuStokoveSite"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ObjektVodovodniSiteBod": {
    elementName: "ObjektVodovodniSiteBod",
    nazev: "objekt vodovodní sítě",
    codeBase: "0100000336",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["ICME","StavObjektu","TypObjektuVodovodniSite","TypMediaVodovodniSite"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ObjektVodovodniSitePlocha": {
    elementName: "ObjektVodovodniSitePlocha",
    nazev: "objekt vodovodní sítě",
    codeBase: "0100000336",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["ICME","StavObjektu","TypObjektuVodovodniSite","TypMediaVodovodniSite"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ObjektZarizeniOchranaPredPovodnemiBod": {
    elementName: "ObjektZarizeniOchranaPredPovodnemiBod",
    nazev: "objekt nebo zařízení k ochraně před povodněmi",
    codeBase: "0100000089",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypObjektuZarizeniOchranaPredPovodnemi"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ObjektZarizeniOchranaPredPovodnemiLinie": {
    elementName: "ObjektZarizeniOchranaPredPovodnemiLinie",
    nazev: "objekt nebo zařízení k ochraně před povodněmi",
    codeBase: "0100000089",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypObjektuZarizeniOchranaPredPovodnemi"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ObvodDrahy": {
    elementName: "ObvodDrahy",
    nazev: "obvod dráhy",
    codeBase: "0100000019",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObvodMostu": {
    elementName: "ObvodMostu",
    nazev: "obvod mostu",
    codeBase: "0100000057",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypMostu","OznaceniKomunikaceTrate"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObvodPozemniKomunikace": {
    elementName: "ObvodPozemniKomunikace",
    nazev: "obvod pozemní komunikace",
    codeBase: "0100000003",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniKomunikace"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OchrannaSachtaVrtu": {
    elementName: "OchrannaSachtaVrtu",
    nazev: "ochranná šachta vrtu",
    codeBase: "0100000192",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OdkalisteBod": {
    elementName: "OdkalisteBod",
    nazev: "odkaliště",
    codeBase: "0100000151",
    codeSuffix: "01",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OdkalistePlocha": {
    elementName: "OdkalistePlocha",
    nazev: "odkaliště",
    codeBase: "0100000151",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OdpadoveHospodarstviZamerBod": {
    elementName: "OdpadoveHospodarstviZamerBod",
    nazev: "odpadové hospodářství - záměr",
    codeBase: "0100000364",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuOdpadovehoHospodarstviZameru"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OdpadoveHospodarstviZamerLinie": {
    elementName: "OdpadoveHospodarstviZamerLinie",
    nazev: "odpadové hospodářství - záměr",
    codeBase: "0100000364",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuOdpadovehoHospodarstviZameru"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OdpadoveHospodarstviZamerPlocha": {
    elementName: "OdpadoveHospodarstviZamerPlocha",
    nazev: "odpadové hospodářství - záměr",
    codeBase: "0100000364",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuOdpadovehoHospodarstviZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OrientacniSloupekTI": {
    elementName: "OrientacniSloupekTI",
    nazev: "orientační sloupek TI",
    codeBase: "0100000136",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypInzenyrskeSite"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OsaKolejePozemniLanoveDrahy": {
    elementName: "OsaKolejePozemniLanoveDrahy",
    nazev: "osa koleje pozemní lanové dráhy",
    codeBase: "0100000031",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaKolejeSpecialniDrahy": {
    elementName: "OsaKolejeSpecialniDrahy",
    nazev: "osa koleje speciální dráhy",
    codeBase: "0100000038",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaKolejeTramvajoveDrahy": {
    elementName: "OsaKolejeTramvajoveDrahy",
    nazev: "osa koleje tramvajové dráhy",
    codeBase: "0100000027",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaKolejeZeleznicniTrate": {
    elementName: "OsaKolejeZeleznicniTrate",
    nazev: "osa koleje železniční tratě",
    codeBase: "0100000021",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["RokGeodetickehoPorizeni","RozchodKoleji"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaMelioracnihoPrikopuZlabuDrenu": {
    elementName: "OsaMelioracnihoPrikopuZlabuDrenu",
    nazev: "osa melioračního příkopu, žlabu, drénu",
    codeBase: "0100000082",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba k melioracím pozemků",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["DruhMelioracnichOpatreni","RokVystavby","Material"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OsaPozemniKomunikace": {
    elementName: "OsaPozemniKomunikace",
    nazev: "osa pozemní komunikace",
    codeBase: "0100000004",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PrevazujiciPovrch","KategoriePozemniKomunikace","CisloETahu","TypUsekuPozemniKomunikace","PocetJizdnichPruhu","OznaceniKomunikace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaPozemniLanoveDrahy": {
    elementName: "OsaPozemniLanoveDrahy",
    nazev: "osa pozemní lanové dráhy",
    codeBase: "0100000030",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["DruhDopravyLanoveDrahy"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaProtipovodnoveZabrany": {
    elementName: "OsaProtipovodnoveZabrany",
    nazev: "osa protipovodňové zábrany",
    codeBase: "0100000335",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypProtipovodnoveZabrany"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "OsaSpecialniDrahy": {
    elementName: "OsaSpecialniDrahy",
    nazev: "osa speciální dráhy",
    codeBase: "0100000037",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaTramvajoveDrahy": {
    elementName: "OsaTramvajoveDrahy",
    nazev: "osa tramvajové dráhy",
    codeBase: "0100000026",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaZeleznicniTrate": {
    elementName: "OsaZeleznicniTrate",
    nazev: "osa železniční tratě",
    codeBase: "0100000020",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypUsekuZeleznicniTrate","KategorieZeleznicniTrate","TypZeleznicniTrate","OznaceniTrate","PocetKoleji","ElektrizaceZeleznicniTrate"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OstatniZastresenaStavbaDefinicniBod": {
    elementName: "OstatniZastresenaStavbaDefinicniBod",
    nazev: "ostatní zastřešená stavba",
    codeBase: "0100000314",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OstatniZastresenaStavbaPlocha": {
    elementName: "OstatniZastresenaStavbaPlocha",
    nazev: "ostatní zastřešená stavba",
    codeBase: "0100000314",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ParkovisteOdstavnaPlochaDefinicniBod": {
    elementName: "ParkovisteOdstavnaPlochaDefinicniBod",
    nazev: "parkoviště, odstavná plocha",
    codeBase: "0100000011",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ParkovisteOdstavnaPlochaPlocha": {
    elementName: "ParkovisteOdstavnaPlochaPlocha",
    nazev: "parkoviště, odstavná plocha",
    codeBase: "0100000011",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PatkaDeskaMonolitPilirDefinicniBod": {
    elementName: "PatkaDeskaMonolitPilirDefinicniBod",
    nazev: "patka, deska, monolit, pilíř",
    codeBase: "0100000183",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PatkaDeskaMonolitPilirPlocha": {
    elementName: "PatkaDeskaMonolitPilirPlocha",
    nazev: "patka, deska, monolit, pilíř",
    codeBase: "0100000183",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlavebniKomoraBod": {
    elementName: "PlavebniKomoraBod",
    nazev: "plavební komora",
    codeBase: "0100000041",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlavebniKomoraPlocha": {
    elementName: "PlavebniKomoraPlocha",
    nazev: "plavební komora",
    codeBase: "0100000041",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlochaMostniKonstrukceDefinicniBod": {
    elementName: "PlochaMostniKonstrukceDefinicniBod",
    nazev: "plocha mostní konstrukce",
    codeBase: "0100000058",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlochaMostniKonstrukcePlocha": {
    elementName: "PlochaMostniKonstrukcePlocha",
    nazev: "plocha mostní konstrukce",
    codeBase: "0100000058",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlochaRekultivaceDefinicniBod": {
    elementName: "PlochaRekultivaceDefinicniBod",
    nazev: "plocha rekultivace",
    codeBase: "0100000142",
    codeSuffix: "04",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlochaRekultivacePlocha": {
    elementName: "PlochaRekultivacePlocha",
    nazev: "plocha rekultivace",
    codeBase: "0100000142",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Plot": {
    elementName: "Plot",
    nazev: "plot",
    codeBase: "0100000162",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["DruhPlotu","HraniceJinehoObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlynovodKoridorZameruLinie": {
    elementName: "PlynovodKoridorZameruLinie",
    nazev: "plynovod – koridor záměru",
    codeBase: "0100000354",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TlakovaHladinaPlynovodniSite"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlynovodKoridorZameruPlocha": {
    elementName: "PlynovodKoridorZameruPlocha",
    nazev: "plynovod – koridor záměru",
    codeBase: "0100000354",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TlakovaHladinaPlynovodniSite"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlynovodMistoZameruBod": {
    elementName: "PlynovodMistoZameruBod",
    nazev: "plynovod – místo záměru",
    codeBase: "0100000355",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuPlynovodniSiteZameru"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlynovodMistoZameruPlocha": {
    elementName: "PlynovodMistoZameruPlocha",
    nazev: "plynovod – místo záměru",
    codeBase: "0100000355",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuPlynovodniSiteZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PodezdivkaDefinicniBod": {
    elementName: "PodezdivkaDefinicniBod",
    nazev: "podezdívka",
    codeBase: "0100000163",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PodezdivkaPlocha": {
    elementName: "PodezdivkaPlocha",
    nazev: "podezdívka",
    codeBase: "0100000163",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PodperneZarizeni": {
    elementName: "PodperneZarizeni",
    nazev: "podpěrné zařízení",
    codeBase: "0100000095",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypPodpernehoZarizeni","TypSloupu"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "PodrobnyBodZPS": {
    elementName: "PodrobnyBodZPS",
    nazev: "podrobný bod ZPS",
    codeBase: "0100000218",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Podrobný bod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniPB_ZPS","CisloBodu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PodzemniObjektZPSDefinicniBod": {
    elementName: "PodzemniObjektZPSDefinicniBod",
    nazev: "podzemní objekt ZPS",
    codeBase: "0100000197",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PodzemniObjektZPSPlocha": {
    elementName: "PodzemniObjektZPSPlocha",
    nazev: "podzemní objekt ZPS",
    codeBase: "0100000197",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PortalPodchoduDefinicniBod": {
    elementName: "PortalPodchoduDefinicniBod",
    nazev: "portál podchodu",
    codeBase: "0100000064",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PortalPodchoduPlocha": {
    elementName: "PortalPodchoduPlocha",
    nazev: "portál podchodu",
    codeBase: "0100000064",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PortalTuneluDefinicniBod": {
    elementName: "PortalTuneluDefinicniBod",
    nazev: "portál tunelu",
    codeBase: "0100000060",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PortalTuneluPlocha": {
    elementName: "PortalTuneluPlocha",
    nazev: "portál tunelu",
    codeBase: "0100000060",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PovrchovyZnakTI": {
    elementName: "PovrchovyZnakTI",
    nazev: "povrchový znak TI",
    codeBase: "0100000135",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypPovrchovehoZnakuTI"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "PozemniCastPristavuBod": {
    elementName: "PozemniCastPristavuBod",
    nazev: "pozemní část přístavu",
    codeBase: "0100000325",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PozemniCastPristavuPlocha": {
    elementName: "PozemniCastPristavuPlocha",
    nazev: "pozemní část přístavu",
    codeBase: "0100000325",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PozemniLanovaDrahaDefinicniBod": {
    elementName: "PozemniLanovaDrahaDefinicniBod",
    nazev: "pozemní lanová dráha",
    codeBase: "0100000028",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PozemniLanovaDrahaPlocha": {
    elementName: "PozemniLanovaDrahaPlocha",
    nazev: "pozemní lanová dráha",
    codeBase: "0100000028",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PridruzenaPlochaPozemniKomunikaceDefinicniBod": {
    elementName: "PridruzenaPlochaPozemniKomunikaceDefinicniBod",
    nazev: "přidružená plocha pozemní komunikace",
    codeBase: "0100000320",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PridruzenaPlochaPozemniKomunikacePlocha": {
    elementName: "PridruzenaPlochaPozemniKomunikacePlocha",
    nazev: "přidružená plocha pozemní komunikace",
    codeBase: "0100000320",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrikopNasepZarezDopravniStavbyDefinicniBod": {
    elementName: "PrikopNasepZarezDopravniStavbyDefinicniBod",
    nazev: "příkop, násep, zářez dopravní stavby",
    codeBase: "0100000051",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrikopNasepZarezDopravniStavbyPlocha": {
    elementName: "PrikopNasepZarezDopravniStavbyPlocha",
    nazev: "příkop, násep, zářez dopravní stavby",
    codeBase: "0100000051",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrivadecNahonOdpadLinie": {
    elementName: "PrivadecNahonOdpadLinie",
    nazev: "přivaděč, náhon, odpad",
    codeBase: "0100000118",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Přivaděč povrchových vod, náhon, odpad",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypPrivadece","Dimenze","Material"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "PrivadecNahonOdpadPlocha": {
    elementName: "PrivadecNahonOdpadPlocha",
    nazev: "přivaděč, náhon, odpad",
    codeBase: "0100000118",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Přivaděč povrchových vod, náhon, odpad",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypPrivadece","Dimenze","Material"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "PrivadecPovrchovychVodKoridorZameruLinie": {
    elementName: "PrivadecPovrchovychVodKoridorZameruLinie",
    nazev: "přivaděč povrchových vod - koridor záměru",
    codeBase: "0100000366",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrivadecPovrchovychVodKoridorZameruPlocha": {
    elementName: "PrivadecPovrchovychVodKoridorZameruPlocha",
    nazev: "přivaděč povrchových vod - koridor záměru",
    codeBase: "0100000366",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProduktovodKoridorZameruLinie": {
    elementName: "ProduktovodKoridorZameruLinie",
    nazev: "produktovod – koridor záměru",
    codeBase: "0100000360",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProduktovodKoridorZameruPlocha": {
    elementName: "ProduktovodKoridorZameruPlocha",
    nazev: "produktovod – koridor záměru",
    codeBase: "0100000360",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProduktovodMistoZameruBod": {
    elementName: "ProduktovodMistoZameruBod",
    nazev: "produktovod – místo záměru",
    codeBase: "0100000361",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProduktovodMistoZameruPlocha": {
    elementName: "ProduktovodMistoZameruPlocha",
    nazev: "produktovod – místo záměru",
    codeBase: "0100000361",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProtihlukovaStena": {
    elementName: "ProtihlukovaStena",
    nazev: "protihluková stěna",
    codeBase: "0100000319",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["HraniceJinehoObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProtipovodnovaZabranaDefinicniBod": {
    elementName: "ProtipovodnovaZabranaDefinicniBod",
    nazev: "protipovodňová zábrana",
    codeBase: "0100000085",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypProtipovodnoveZabrany"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProtipovodnovaZabranaLinie": {
    elementName: "ProtipovodnovaZabranaLinie",
    nazev: "protipovodňová zábrana",
    codeBase: "0100000085",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypProtipovodnoveZabrany","HraniceJinehoObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProtipovodnovaZabranaPlocha": {
    elementName: "ProtipovodnovaZabranaPlocha",
    nazev: "protipovodňová zábrana",
    codeBase: "0100000085",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypProtipovodnoveZabrany"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProtipovodnoveOpatreniKoridorZameruLinie": {
    elementName: "ProtipovodnoveOpatreniKoridorZameruLinie",
    nazev: "protipovodňové opatření - koridor záměru",
    codeBase: "0100000365",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProtipovodnoveOpatreniKoridorZameruPlocha": {
    elementName: "ProtipovodnoveOpatreniKoridorZameruPlocha",
    nazev: "protipovodňové opatření - koridor záměru",
    codeBase: "0100000365",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProvozniPlochaPodchoduDefinicniBod": {
    elementName: "ProvozniPlochaPodchoduDefinicniBod",
    nazev: "provozní plocha podchodu",
    codeBase: "0100000066",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProvozniPlochaPodchoduPlocha": {
    elementName: "ProvozniPlochaPodchoduPlocha",
    nazev: "provozní plocha podchodu",
    codeBase: "0100000066",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProvozniPlochaPozemniKomunikaceDefinicniBod": {
    elementName: "ProvozniPlochaPozemniKomunikaceDefinicniBod",
    nazev: "provozní plocha pozemní komunikace",
    codeBase: "0100000005",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypPozemniKomunikace","PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProvozniPlochaPozemniKomunikacePlocha": {
    elementName: "ProvozniPlochaPozemniKomunikacePlocha",
    nazev: "provozní plocha pozemní komunikace",
    codeBase: "0100000005",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypPozemniKomunikace","PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProvozniPlochaTuneluDefinicniBod": {
    elementName: "ProvozniPlochaTuneluDefinicniBod",
    nazev: "provozní plocha tunelu",
    codeBase: "0100000062",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypTunelu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProvozniPlochaTuneluPlocha": {
    elementName: "ProvozniPlochaTuneluPlocha",
    nazev: "provozní plocha tunelu",
    codeBase: "0100000062",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypTunelu"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProvozniProstorElektrickeSite": {
    elementName: "ProvozniProstorElektrickeSite",
    nazev: "provozní prostor elektrické sítě",
    codeBase: "0100000322",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "PrubehJineTechnologickeStavbyTI": {
    elementName: "PrubehJineTechnologickeStavbyTI",
    nazev: "průběh jiné technologické stavby TI",
    codeBase: "0100000097",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "PrubehPropustku": {
    elementName: "PrubehPropustku",
    nazev: "průběh propustku",
    codeBase: "0100000195",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrubehTechnologickeKonstrukce": {
    elementName: "PrubehTechnologickeKonstrukce",
    nazev: "průběh technologické konstrukce",
    codeBase: "0100000185",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["HraniceJinehoObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "RampaDefinicniBod": {
    elementName: "RampaDefinicniBod",
    nazev: "rampa",
    codeBase: "0100000173",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "RampaPlocha": {
    elementName: "RampaPlocha",
    nazev: "rampa",
    codeBase: "0100000173",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SchodisteDefinicniBod": {
    elementName: "SchodisteDefinicniBod",
    nazev: "schodiště",
    codeBase: "0100000166",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["DruhSchodiste"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SchodistePlocha": {
    elementName: "SchodistePlocha",
    nazev: "schodiště",
    codeBase: "0100000166",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["DruhSchodiste"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SdilenaStavbaTIKoridorZameruLinie": {
    elementName: "SdilenaStavbaTIKoridorZameruLinie",
    nazev: "sdílená stavba TI - koridor záměru",
    codeBase: "0100000367",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SdilenaStavbaTIKoridorZameruPlocha": {
    elementName: "SdilenaStavbaTIKoridorZameruPlocha",
    nazev: "sdílená stavba TI - koridor záměru",
    codeBase: "0100000367",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SdilenyObjektTI": {
    elementName: "SdilenyObjektTI",
    nazev: "sdílený objekt TI",
    codeBase: "0100000093",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypSdilenehoObjektuTI"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "SilnicniDopravaKoridorZameruLinie": {
    elementName: "SilnicniDopravaKoridorZameruLinie",
    nazev: "silniční doprava – koridor záměru",
    codeBase: "0100000339",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuSilnicniDopravyZameru"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SilnicniDopravaKoridorZameruPlocha": {
    elementName: "SilnicniDopravaKoridorZameruPlocha",
    nazev: "silniční doprava – koridor záměru",
    codeBase: "0100000339",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuSilnicniDopravyZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SilnicniDopravaMistoZameruBod": {
    elementName: "SilnicniDopravaMistoZameruBod",
    nazev: "silniční doprava – místo záměru",
    codeBase: "0100000340",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SilnicniDopravaMistoZameruPlocha": {
    elementName: "SilnicniDopravaMistoZameruPlocha",
    nazev: "silniční doprava – místo záměru",
    codeBase: "0100000340",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SkladkaOdpaduBod": {
    elementName: "SkladkaOdpaduBod",
    nazev: "skládka odpadu",
    codeBase: "0100000148",
    codeSuffix: "01",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavSkladkyOdpadu","ZpusobRekultivace","DatumRekultivace","TypOdpadu","Kapacita"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "SkladkaOdpaduPlocha": {
    elementName: "SkladkaOdpaduPlocha",
    nazev: "skládka odpadu",
    codeBase: "0100000148",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavSkladkyOdpadu","ZpusobRekultivace","DatumRekultivace","TypOdpadu","Kapacita"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "SklenikDefinicniBod": {
    elementName: "SklenikDefinicniBod",
    nazev: "skleník",
    codeBase: "0100000179",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SklenikPlocha": {
    elementName: "SklenikPlocha",
    nazev: "skleník",
    codeBase: "0100000179",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SledovanaVodniCestaLinie": {
    elementName: "SledovanaVodniCestaLinie",
    nazev: "sledovaná vodní cesta",
    codeBase: "0100000043",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["NazevSledovaneVodniCesty","ZarazeniSledovaneVodniCesty","TridaDopravneVyznamneVodniCesty","TypSledovaneVodniCesty","OznaceniObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SledovanaVodniCestaPlocha": {
    elementName: "SledovanaVodniCestaPlocha",
    nazev: "sledovaná vodní cesta",
    codeBase: "0100000043",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["NazevSledovaneVodniCesty","ZarazeniSledovaneVodniCesty","TridaDopravneVyznamneVodniCesty","TypSledovaneVodniCesty","OznaceniObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SloupTechnologickeKonstrukce": {
    elementName: "SloupTechnologickeKonstrukce",
    nazev: "sloup technologické konstrukce",
    codeBase: "0100000186",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SouhrnnaPlochaZeleznicnichDrahDefinicniBod": {
    elementName: "SouhrnnaPlochaZeleznicnichDrahDefinicniBod",
    nazev: "souhrnná plocha železničních drah",
    codeBase: "0100000312",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypUsekuZeleznicniTrate"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SouhrnnaPlochaZeleznicnichDrahPlocha": {
    elementName: "SouhrnnaPlochaZeleznicnichDrahPlocha",
    nazev: "souhrnná plocha železničních drah",
    codeBase: "0100000312",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypUsekuZeleznicniTrate"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SpalovnaBod": {
    elementName: "SpalovnaBod",
    nazev: "spalovna",
    codeBase: "0100000149",
    codeSuffix: "01",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","Kapacita"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "SpalovnaPlocha": {
    elementName: "SpalovnaPlocha",
    nazev: "spalovna",
    codeBase: "0100000149",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","Kapacita"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "SpecialniDrahaDefinicniBod": {
    elementName: "SpecialniDrahaDefinicniBod",
    nazev: "speciální dráha",
    codeBase: "0100000035",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SpecialniDrahaPlocha": {
    elementName: "SpecialniDrahaPlocha",
    nazev: "speciální dráha",
    codeBase: "0100000035",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StaniceElektrickeSiteBod": {
    elementName: "StaniceElektrickeSiteBod",
    nazev: "stanice elektrické sítě",
    codeBase: "0100000103",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","TypStaniceElektrickeSite","DruhStaniceElektrickeSite"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "StaniceElektrickeSitePlocha": {
    elementName: "StaniceElektrickeSitePlocha",
    nazev: "stanice elektrické sítě",
    codeBase: "0100000103",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","TypStaniceElektrickeSite","DruhStaniceElektrickeSite"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "StavbaProZpevneniPovrchuDefinicniBod": {
    elementName: "StavbaProZpevneniPovrchuDefinicniBod",
    nazev: "stavba pro zpevnění povrchu",
    codeBase: "0100000187",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StavbaProZpevneniPovrchuPlocha": {
    elementName: "StavbaProZpevneniPovrchuPlocha",
    nazev: "stavba pro zpevnění povrchu",
    codeBase: "0100000187",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StavebneUpraveneKorytoDefinicniBod": {
    elementName: "StavebneUpraveneKorytoDefinicniBod",
    nazev: "stavebně upravené koryto",
    codeBase: "0100000078",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StavebneUpraveneKorytoPlocha": {
    elementName: "StavebneUpraveneKorytoPlocha",
    nazev: "stavebně upravené koryto",
    codeBase: "0100000078",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StavebneUpravenyVjezdNaPozemek": {
    elementName: "StavebneUpravenyVjezdNaPozemek",
    nazev: "stavebně upravený vjezd na pozemek",
    codeBase: "0100000165",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrujezdnaSirka","PrujezdnaVyska","HraniceJinehoObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SterkovaPrehrazkaDefinicniBod": {
    elementName: "SterkovaPrehrazkaDefinicniBod",
    nazev: "štěrková přehrážka",
    codeBase: "0100000333",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SterkovaPrehrazkaPlocha": {
    elementName: "SterkovaPrehrazkaPlocha",
    nazev: "štěrková přehrážka",
    codeBase: "0100000333",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StojanNabijeniVydejniStojan": {
    elementName: "StojanNabijeniVydejniStojan",
    nazev: "stojan nabíjení, výdejní stojan",
    codeBase: "0100000068",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNabijecihoVydejnihoMedia"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StudnaNaVerejnemProstranstvi": {
    elementName: "StudnaNaVerejnemProstranstvi",
    nazev: "studna na veřejném prostranství",
    codeBase: "0100000084",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StupenBod": {
    elementName: "StupenBod",
    nazev: "stupeň",
    codeBase: "0100000076",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StupenDefinicniBod": {
    elementName: "StupenDefinicniBod",
    nazev: "stupeň",
    codeBase: "0100000076",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StupenPlocha": {
    elementName: "StupenPlocha",
    nazev: "stupeň",
    codeBase: "0100000076",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SuchaNadrzDefinicniBod": {
    elementName: "SuchaNadrzDefinicniBod",
    nazev: "suchá nádrž",
    codeBase: "0100000087",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SuchaNadrzPlocha": {
    elementName: "SuchaNadrzPlocha",
    nazev: "suchá nádrž",
    codeBase: "0100000087",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Svodidlo": {
    elementName: "Svodidlo",
    nazev: "svodidlo",
    codeBase: "0100000318",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypSvodidla"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnickyKanal": {
    elementName: "TechnickyKanal",
    nazev: "technický kanál",
    codeBase: "0100000092",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypTechnickehoKanalu"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TeplovodKoridorZameruLinie": {
    elementName: "TeplovodKoridorZameruLinie",
    nazev: "teplovod – koridor záměru",
    codeBase: "0100000362",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TeplovodKoridorZameruPlocha": {
    elementName: "TeplovodKoridorZameruPlocha",
    nazev: "teplovod – koridor záměru",
    codeBase: "0100000362",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TeplovodMistoZameruBod": {
    elementName: "TeplovodMistoZameruBod",
    nazev: "teplovod – místo záměru",
    codeBase: "0100000363",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypTechnologickehoObjektuTeplovodniSite"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TeplovodMistoZameruPlocha": {
    elementName: "TeplovodMistoZameruPlocha",
    nazev: "teplovod – místo záměru",
    codeBase: "0100000363",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypTechnologickehoObjektuTeplovodniSite"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TerasaDefinicniBod": {
    elementName: "TerasaDefinicniBod",
    nazev: "terasa",
    codeBase: "0100000175",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TerasaPlocha": {
    elementName: "TerasaPlocha",
    nazev: "terasa",
    codeBase: "0100000175",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TerenniHrana": {
    elementName: "TerenniHrana",
    nazev: "terénní hrana",
    codeBase: "0100000217",
    codeSuffix: "02",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Terénní útvar",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypTerenniHrany"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TerminalKombinovaneDopravyMistoZameruBod": {
    elementName: "TerminalKombinovaneDopravyMistoZameruBod",
    nazev: "terminál kombinované dopravy – místo záměru",
    codeBase: "0100000349",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TerminalKombinovaneDopravyMistoZameruPlocha": {
    elementName: "TerminalKombinovaneDopravyMistoZameruPlocha",
    nazev: "terminál kombinované dopravy – místo záměru",
    codeBase: "0100000349",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TramvajovaDrahaDefinicniBod": {
    elementName: "TramvajovaDrahaDefinicniBod",
    nazev: "tramvajová dráha",
    codeBase: "0100000024",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TramvajovaDrahaPlocha": {
    elementName: "TramvajovaDrahaPlocha",
    nazev: "tramvajová dráha",
    codeBase: "0100000024",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaProtikorozniOchrany": {
    elementName: "TrasaProtikorozniOchrany",
    nazev: "trasa protikorozní ochrany",
    codeBase: "0100000137",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypPKO","TypInzenyrskeSitePKO"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaElektrickeSite": {
    elementName: "TrasaElektrickeSite",
    nazev: "trasa elektrické sítě",
    codeBase: "0100000098",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","PocetVedeniVTrase","VedeniSiteVJineStavbe","TypTrasyElektrickeSite","MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","IzolaceVenkovnihoVedeni"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaKanalizacniPripojky": {
    elementName: "TrasaKanalizacniPripojky",
    nazev: "trasa kanalizační přípojky",
    codeBase: "0100000122",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["UceloveZarazeniStokoveSite","DruhStokoveSite","Dimenze","Material"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaMistniElektrickeSite": {
    elementName: "TrasaMistniElektrickeSite",
    nazev: "trasa místní elektrické sítě",
    codeBase: "0100000099",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","VedeniSiteVJineStavbe","TypTrasyMistniElektrickeSite"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaOdbernehoElektrickehoZarizeni": {
    elementName: "TrasaOdbernehoElektrickehoZarizeni",
    nazev: "trasa odběrného elektrického zařízení",
    codeBase: "0100000100",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaOdbernehoPlynovehoZarizeni": {
    elementName: "TrasaOdbernehoPlynovehoZarizeni",
    nazev: "trasa odběrného plynového zařízení",
    codeBase: "0100000110",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TlakovaHladinaPlynovodniSite","Dimenze"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaPlynovodniPripojky": {
    elementName: "TrasaPlynovodniPripojky",
    nazev: "trasa plynovodní přípojky",
    codeBase: "0100000328",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","VedeniSiteVJineStavbe","TlakovaHladinaPlynovodniSite","Dimenze"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaPlynovodniSite": {
    elementName: "TrasaPlynovodniSite",
    nazev: "trasa plynovodní sítě",
    codeBase: "0100000109",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","VedeniSiteVJineStavbe","TlakovaHladinaPlynovodniSite","Dimenze"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaPotrubniPosty": {
    elementName: "TrasaPotrubniPosty",
    nazev: "trasa potrubní pošty",
    codeBase: "0100000133",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubní pošta",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","Dimenze"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaRadiovehoSmerovehoSpoje": {
    elementName: "TrasaRadiovehoSmerovehoSpoje",
    nazev: "trasa rádiového směrového spoje",
    codeBase: "0100000106",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaSiteEK": {
    elementName: "TrasaSiteEK",
    nazev: "trasa sítě EK",
    codeBase: "0100000105",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","PocetVedeniVTrase","VedeniSiteVJineStavbe","MaterialTrasySiteEK","ZpusobOchranyVedeniSiteEK"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaSiteProduktovodu": {
    elementName: "TrasaSiteProduktovodu",
    nazev: "trasa sítě produktovodu",
    codeBase: "0100000127",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","VedeniSiteVJineStavbe","Dimenze"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaStokoveSite": {
    elementName: "TrasaStokoveSite",
    nazev: "trasa stokové sítě",
    codeBase: "0100000121",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["ICME","StavTrasySiteTI","VedeniSiteVJineStavbe","TypTrasyStokoveSite","UceloveZarazeniStokoveSite","DruhStokoveSite","Dimenze","Material"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaTeplovodniSite": {
    elementName: "TrasaTeplovodniSite",
    nazev: "trasa teplovodní sítě",
    codeBase: "0100000130",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","VedeniSiteVJineStavbe","TypTrasyTeplovodniSite","TypTeplovodniSite","Dimenze"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "TrasaVodovodniPripojky": {
    elementName: "TrasaVodovodniPripojky",
    nazev: "trasa vodovodní přípojky",
    codeBase: "0100000114",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["Dimenze","Material"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaVodovodniSite": {
    elementName: "TrasaVodovodniSite",
    nazev: "trasa vodovodní sítě",
    codeBase: "0100000113",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["ICME","StavTrasySiteTI","VedeniSiteVJineStavbe","TypTrasyVodovodniSite","TypMediaVodovodniSite","Dimenze","Material"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "UdrzovanaPlochaZeleneDefinicniBod": {
    elementName: "UdrzovanaPlochaZeleneDefinicniBod",
    nazev: "udržovaná plocha zeleně",
    codeBase: "0100000215",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Udržovaná zeleň",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypUdrzovaneZelene"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "UdrzovanaPlochaZelenePlocha": {
    elementName: "UdrzovanaPlochaZelenePlocha",
    nazev: "udržovaná plocha zeleně",
    codeBase: "0100000215",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Udržovaná zeleň",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypUdrzovaneZelene"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "UlozneMistoTezebnihoOdpaduDefinicniBod": {
    elementName: "UlozneMistoTezebnihoOdpaduDefinicniBod",
    nazev: "úložné místo těžebního odpadu",
    codeBase: "0100000144",
    codeSuffix: "04",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "UlozneMistoTezebnihoOdpaduPlocha": {
    elementName: "UlozneMistoTezebnihoOdpaduPlocha",
    nazev: "úložné místo těžebního odpadu",
    codeBase: "0100000144",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VegetacniMisaDefinicniBod": {
    elementName: "VegetacniMisaDefinicniBod",
    nazev: "vegetační mísa",
    codeBase: "0100000338",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VegetacniMisaPlocha": {
    elementName: "VegetacniMisaPlocha",
    nazev: "vegetační mísa",
    codeBase: "0100000338",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VisutaLanovaDraha": {
    elementName: "VisutaLanovaDraha",
    nazev: "visutá lanová dráha",
    codeBase: "0100000039",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VnitrniCleneniBudovStaveb": {
    elementName: "VnitrniCleneniBudovStaveb",
    nazev: "vnitřní členění budov a staveb",
    codeBase: "0100000310",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Doplňkový konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VnitrniCleneniDopravniPlochy": {
    elementName: "VnitrniCleneniDopravniPlochy",
    nazev: "vnitřní členění dopravní plochy",
    codeBase: "0100000323",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Doplňkový konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniCastPristavuBod": {
    elementName: "VodniCastPristavuBod",
    nazev: "vodní část přístavu",
    codeBase: "0100000045",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniCastPristavuPlocha": {
    elementName: "VodniCastPristavuPlocha",
    nazev: "vodní část přístavu",
    codeBase: "0100000045",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniDopravaKoridorZameruLinie": {
    elementName: "VodniDopravaKoridorZameruLinie",
    nazev: "vodní doprava – koridor záměru",
    codeBase: "0100000343",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniDopravaKoridorZameruPlocha": {
    elementName: "VodniDopravaKoridorZameruPlocha",
    nazev: "vodní doprava – koridor záměru",
    codeBase: "0100000343",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniDopravaMistoZameruBod": {
    elementName: "VodniDopravaMistoZameruBod",
    nazev: "vodní doprava – místo záměru",
    codeBase: "0100000344",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniDopravaMistoZameruPlocha": {
    elementName: "VodniDopravaMistoZameruPlocha",
    nazev: "vodní doprava – místo záměru",
    codeBase: "0100000344",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniTokDefinicniBod": {
    elementName: "VodniTokDefinicniBod",
    nazev: "vodní tok",
    codeBase: "0100000203",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniTokPlocha": {
    elementName: "VodniTokPlocha",
    nazev: "vodní tok",
    codeBase: "0100000203",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodovodKoridorZameruLinie": {
    elementName: "VodovodKoridorZameruLinie",
    nazev: "vodovod – koridor záměru",
    codeBase: "0100000356",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodovodKoridorZameruPlocha": {
    elementName: "VodovodKoridorZameruPlocha",
    nazev: "vodovod – koridor záměru",
    codeBase: "0100000356",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodovodMistoZameruBod": {
    elementName: "VodovodMistoZameruBod",
    nazev: "vodovod – místo záměru",
    codeBase: "0100000357",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuVodovodniSiteZameru"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodovodMistoZameruPlocha": {
    elementName: "VodovodMistoZameruPlocha",
    nazev: "vodovod – místo záměru",
    codeBase: "0100000357",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuVodovodniSiteZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Vrt": {
    elementName: "Vrt",
    nazev: "vrt",
    codeBase: "0100000191",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypVrtu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VyrobnaElektrinyNad50kWBod": {
    elementName: "VyrobnaElektrinyNad50kWBod",
    nazev: "výrobna elektřiny nad 50 kW",
    codeBase: "0100000102",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypVyrobnyElektriny","InstalovanyVykon"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "VyrobnaElektrinyNad50kWPlocha": {
    elementName: "VyrobnaElektrinyNad50kWPlocha",
    nazev: "výrobna elektřiny nad 50 kW",
    codeBase: "0100000102",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypVyrobnyElektriny","InstalovanyVykon"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "VyskovyBodNaTerenu": {
    elementName: "VyskovyBodNaTerenu",
    nazev: "výškový bod na terénu",
    codeBase: "0100000219",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Podrobný bod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["VyskaNaTerenu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VytahVChodniku": {
    elementName: "VytahVChodniku",
    nazev: "výtah v chodníku",
    codeBase: "0100000200",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VzletovaPristavaciDraha": {
    elementName: "VzletovaPristavaciDraha",
    nazev: "vzletová a přistávací dráha",
    codeBase: "0100000046",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypPovrchuVzletovePristavaciDrahy"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Zabradli": {
    elementName: "Zabradli",
    nazev: "zábradlí",
    codeBase: "0100000199",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZahradaDefinicniBod": {
    elementName: "ZahradaDefinicniBod",
    nazev: "zahrada",
    codeBase: "0100000209",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZahradaPlocha": {
    elementName: "ZahradaPlocha",
    nazev: "zahrada",
    codeBase: "0100000209",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZahradniBazenDefinicniBod": {
    elementName: "ZahradniBazenDefinicniBod",
    nazev: "zahradní bazén",
    codeBase: "0100000181",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZahradniBazenPlocha": {
    elementName: "ZahradniBazenPlocha",
    nazev: "zahradní bazén",
    codeBase: "0100000181",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniProtikorozniOchranyBod": {
    elementName: "ZarizeniProtikorozniOchranyBod",
    nazev: "zařízení protikorozní ochrany",
    codeBase: "0100000138",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypInzenyrskeSitePKO"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniProtikorozniOchranyPlocha": {
    elementName: "ZarizeniProtikorozniOchranyPlocha",
    nazev: "zařízení protikorozní ochrany",
    codeBase: "0100000138",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypInzenyrskeSitePKO"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniElektrickeSite": {
    elementName: "ZarizeniElektrickeSite",
    nazev: "zařízení elektrické sítě",
    codeBase: "0100000101",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniElektrickeSite"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniKanalizacniPripojkyBod": {
    elementName: "ZarizeniKanalizacniPripojkyBod",
    nazev: "zařízení kanalizační přípojky",
    codeBase: "0100000124",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniKanalizacniPripojky"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniKanalizacniPripojkyDefinicniBod": {
    elementName: "ZarizeniKanalizacniPripojkyDefinicniBod",
    nazev: "zařízení kanalizační přípojky",
    codeBase: "0100000124",
    codeSuffix: "04",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniKanalizacniPripojky"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniKanalizacniPripojkyPlocha": {
    elementName: "ZarizeniKanalizacniPripojkyPlocha",
    nazev: "zařízení kanalizační přípojky",
    codeBase: "0100000124",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniKanalizacniPripojky"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniProLeteckyProvoz": {
    elementName: "ZarizeniProLeteckyProvoz",
    nazev: "zařízení pro letecký provoz",
    codeBase: "0100000050",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypZarizeniProLeteckyProvoz"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniPlynovodniSite": {
    elementName: "ZarizeniPlynovodniSite",
    nazev: "zařízení plynovodní sítě",
    codeBase: "0100000111",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniPlynovodniSite","UmisteniObjektu"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniPotrubniPosty": {
    elementName: "ZarizeniPotrubniPosty",
    nazev: "zařízení potrubní pošty",
    codeBase: "0100000134",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubní pošta",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniPotrubniPosty"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniPrivadece": {
    elementName: "ZarizeniPrivadece",
    nazev: "zařízení přivaděče",
    codeBase: "0100000119",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Přivaděč povrchových vod, náhon, odpad",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniPrivadece"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniSiteEK": {
    elementName: "ZarizeniSiteEK",
    nazev: "zařízení sítě EK",
    codeBase: "0100000107",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniSiteEK"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniSiteProduktovoduBod": {
    elementName: "ZarizeniSiteProduktovoduBod",
    nazev: "zařízení sítě produktovodu",
    codeBase: "0100000128",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniSiteProduktovodu"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniSiteProduktovoduPlocha": {
    elementName: "ZarizeniSiteProduktovoduPlocha",
    nazev: "zařízení sítě produktovodu",
    codeBase: "0100000128",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniSiteProduktovodu"],
    geomType: "surface",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniTeplovodniSite": {
    elementName: "ZarizeniTeplovodniSite",
    nazev: "zařízení teplovodní sítě",
    codeBase: "0100000131",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniTeplovodniSite"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZarizeniVodovodniPripojkyBod": {
    elementName: "ZarizeniVodovodniPripojkyBod",
    nazev: "zařízení vodovodní přípojky",
    codeBase: "0100000116",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniVodovodniPripojky"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniVodovodniPripojkyDefinicniBod": {
    elementName: "ZarizeniVodovodniPripojkyDefinicniBod",
    nazev: "zařízení vodovodní přípojky",
    codeBase: "0100000116",
    codeSuffix: "04",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniVodovodniPripojky"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniVodovodniPripojkyPlocha": {
    elementName: "ZarizeniVodovodniPripojkyPlocha",
    nazev: "zařízení vodovodní přípojky",
    codeBase: "0100000116",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniVodovodniPripojky"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZastreseniDefinicniBod": {
    elementName: "ZastreseniDefinicniBod",
    nazev: "zastřešení",
    codeBase: "0100000315",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZastreseniPlocha": {
    elementName: "ZastreseniPlocha",
    nazev: "zastřešení",
    codeBase: "0100000315",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZatrubnenyVodniTok": {
    elementName: "ZatrubnenyVodniTok",
    nazev: "zatrubněný vodní tok",
    codeBase: "0100000334",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Dimenze","Material"],
    geomType: "curve",
    geomOptional: true,
    hasOblastKI: true,
  },
  "ZedDefinicniBod": {
    elementName: "ZedDefinicniBod",
    nazev: "zeď",
    codeBase: "0100000168",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypZdi"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZedLinie": {
    elementName: "ZedLinie",
    nazev: "zeď",
    codeBase: "0100000168",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZdi","HraniceJinehoObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZedPlocha": {
    elementName: "ZedPlocha",
    nazev: "zeď",
    codeBase: "0100000168",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZdi"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZeleznicniPrejezd": {
    elementName: "ZeleznicniPrejezd",
    nazev: "železniční přejezd",
    codeBase: "0100000022",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZemedelskaPlochaDefinicniBod": {
    elementName: "ZemedelskaPlochaDefinicniBod",
    nazev: "zemědělská plocha",
    codeBase: "0100000207",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypZemedelskePlochy"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZemedelskaPlochaPlocha": {
    elementName: "ZemedelskaPlochaPlocha",
    nazev: "zemědělská plocha",
    codeBase: "0100000207",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZemedelskePlochy"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
};

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
