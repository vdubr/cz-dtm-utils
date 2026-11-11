// Auto-generated from ŽXML 1.5.1.6 XSD — DO NOT EDIT
// Run: npx tsx scripts/generate-types.ts <version>

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
export const ENTITY_CATALOG: Record<string, EntityMeta> = {
  "BPPlynovodniSite": {
    elementName: "BPPlynovodniSite",
    nazev: "bezpečnostní pásmo plynovodní sítě",
    codeBase: "0100000290",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TlakovaHladinaPlynovodniSite"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "290",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "BPPodzemnihoZasobnikuPlynu": {
    elementName: "BPPodzemnihoZasobnikuPlynu",
    nazev: "bezpečnostní pásmo podzemního zásobníku plynu",
    codeBase: "0100000369",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypPodzemnihoZasobnikuPlynu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "546",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "BPZarizeniPKO": {
    elementName: "BPZarizeniPKO",
    nazev: "bezpečnostní pásmo zařízení PKO",
    codeBase: "0100000291",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "291",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPDalniceProReklamniZarizeni": {
    elementName: "OPDalniceProReklamniZarizeni",
    nazev: "ochranné pásmo dálnice pro reklamní zařízení",
    codeBase: "0100000388",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["IDObjektuSilnicniStavby","CisloETahu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "744",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OPDrazniStavby": {
    elementName: "OPDrazniStavby",
    nazev: "ochranné pásmo drážní stavby",
    codeBase: "0100000295",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["IDObjektuDrazniStavby","TypOPDrazniStavby"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "295",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OPElektrickeSite": {
    elementName: "OPElektrickeSite",
    nazev: "ochranné pásmo elektrické sítě",
    codeBase: "0100000281",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["MaximalniNapetovaHladina"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "281",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPJadernehoZarizeni": {
    elementName: "OPJadernehoZarizeni",
    nazev: "ochranné pásmo jaderného zařízení",
    codeBase: "0100000288",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "288",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPKolektoruKabelovodu": {
    elementName: "OPKolektoruKabelovodu",
    nazev: "ochranné pásmo kolektoru, kabelovodu",
    codeBase: "0100000287",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "287",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPLeteckychZabezpecovacichZarizeni": {
    elementName: "OPLeteckychZabezpecovacichZarizeni",
    nazev: "ochranné pásmo leteckých zabezpečovacích zařízení",
    codeBase: "0100000297",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["TypOPLeteckychZabezpecovacichZarizeni"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "297",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OPLetiste": {
    elementName: "OPLetiste",
    nazev: "ochranné pásmo letiště",
    codeBase: "0100000296",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["TypOPLetiste","IDObjektuLetiste"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "296",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OPObjektuKanalizace": {
    elementName: "OPObjektuKanalizace",
    nazev: "ochranné pásmo objektu kanalizace",
    codeBase: "0100000280",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "280",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPObjektuVodovodu": {
    elementName: "OPObjektuVodovodu",
    nazev: "ochranné pásmo objektu vodovodu",
    codeBase: "0100000279",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "279",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPPlynovodniSite": {
    elementName: "OPPlynovodniSite",
    nazev: "ochranné pásmo plynovodní sítě",
    codeBase: "0100000283",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TlakovaHladinaPlynovodniSite"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "283",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPPodzemnihoZasobnikuPlynu": {
    elementName: "OPPodzemnihoZasobnikuPlynu",
    nazev: "ochranné pásmo podzemního zásobníku plynu",
    codeBase: "0100000368",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypPodzemnihoZasobnikuPlynu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "545",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPPozemniKomunikace": {
    elementName: "OPPozemniKomunikace",
    nazev: "ochranné pásmo pozemní komunikace",
    codeBase: "0100000294",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["TypOPPozemniKomunikace","IDObjektuSilnicniStavby","CisloETahu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "294",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OPSiteEK": {
    elementName: "OPSiteEK",
    nazev: "ochranné pásmo sítě EK",
    codeBase: "0100000286",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypOPSiteEK"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "286",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPSiteProduktovodu": {
    elementName: "OPSiteProduktovodu",
    nazev: "ochranné pásmo sítě produktovodu",
    codeBase: "0100000284",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypOPSiteProduktovodu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "284",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPStaniceElektrickeSite": {
    elementName: "OPStaniceElektrickeSite",
    nazev: "ochranné pásmo stanice elektrické sítě",
    codeBase: "0100000317",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypStaniceElektrickeSite"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "448",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPStavbyProVodniDopravu": {
    elementName: "OPStavbyProVodniDopravu",
    nazev: "ochranné pásmo stavby pro vodní dopravu",
    codeBase: "0100000298",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["IDObjektuStavbyProVodniDopravu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "298",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OPTeplovodniSite": {
    elementName: "OPTeplovodniSite",
    nazev: "ochranné pásmo teplovodní sítě",
    codeBase: "0100000285",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "285",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPVodnihoDila": {
    elementName: "OPVodnihoDila",
    nazev: "ochranné pásmo vodního díla",
    codeBase: "0100000293",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "293",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPVyrobnyElektriny": {
    elementName: "OPVyrobnyElektriny",
    nazev: "ochranné pásmo výrobny elektřiny",
    codeBase: "0100000282",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypVyrobnyElektriny"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "282",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPZarizeniPKO": {
    elementName: "OPZarizeniPKO",
    nazev: "ochranné pásmo zařízení PKO",
    codeBase: "0100000289",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "289",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "OPZarizeniOdpadovehoHospodarstvi": {
    elementName: "OPZarizeniOdpadovehoHospodarstvi",
    nazev: "ochranné pásmo zařízení odpadového hospodářství",
    codeBase: "0100000292",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypOPZarizeniOdpadovehoHospodarstvi"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "292",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "TechnologickyObjektPlynovodniSiteBod": {
    elementName: "TechnologickyObjektPlynovodniSiteBod",
    nazev: "technologický objekt plynovodní sítě",
    codeBase: "0100000112",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TlakovaHladinaPlynovodniSite","TypTechnologickehoObjektuPlynovodniSite","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "380",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TechnologickyObjektPlynovodniSitePlocha": {
    elementName: "TechnologickyObjektPlynovodniSitePlocha",
    nazev: "technologický objekt plynovodní sítě",
    codeBase: "0100000112",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TlakovaHladinaPlynovodniSite","TypTechnologickehoObjektuPlynovodniSite","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "112",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TechnologickyObjektSiteEKBod": {
    elementName: "TechnologickyObjektSiteEKBod",
    nazev: "technologický objekt sítě EK",
    codeBase: "0100000108",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTechnologickehoObjektuSiteEK","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "379",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TechnologickyObjektSiteEKPlocha": {
    elementName: "TechnologickyObjektSiteEKPlocha",
    nazev: "technologický objekt sítě EK",
    codeBase: "0100000108",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTechnologickehoObjektuSiteEK","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "108",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TechnologickyObjektSiteProduktovoduBod": {
    elementName: "TechnologickyObjektSiteProduktovoduBod",
    nazev: "technologický objekt sítě produktovodu",
    codeBase: "0100000129",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "384",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TechnologickyObjektSiteProduktovoduPlocha": {
    elementName: "TechnologickyObjektSiteProduktovoduPlocha",
    nazev: "technologický objekt sítě produktovodu",
    codeBase: "0100000129",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "129",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TechnologickyObjektTeplovodniSiteBod": {
    elementName: "TechnologickyObjektTeplovodniSiteBod",
    nazev: "technologický objekt teplovodní sítě",
    codeBase: "0100000132",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTechnologickehoObjektuTeplovodniSite","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "385",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TechnologickyObjektTeplovodniSitePlocha": {
    elementName: "TechnologickyObjektTeplovodniSitePlocha",
    nazev: "technologický objekt teplovodní sítě",
    codeBase: "0100000132",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTechnologickehoObjektuTeplovodniSite","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "132",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "BudovaDefinicniBod": {
    elementName: "BudovaDefinicniBod",
    nazev: "budova",
    codeBase: "0100000001",
    codeSuffix: "04",
    kategorieObjektu: "Budovy",
    skupinaObjektu: "Objekt budovy",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PopisBudovy","TypBudovy","UcelBudovy"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "2",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "BudovaPlocha": {
    elementName: "BudovaPlocha",
    nazev: "budova",
    codeBase: "0100000001",
    codeSuffix: "03",
    kategorieObjektu: "Budovy",
    skupinaObjektu: "Objekt budovy",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["UcelBudovy","PopisBudovy","TypBudovy"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "1",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "CeloPropustkuDefinicniBod": {
    elementName: "CeloPropustkuDefinicniBod",
    nazev: "čelo propustku",
    codeBase: "0100000193",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["NerozlisenaKilometraz","PopisPropustku","EvidencniKilometraz"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "194",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "CeloPropustkuPlocha": {
    elementName: "CeloPropustkuPlocha",
    nazev: "čelo propustku",
    codeBase: "0100000193",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["EvidencniKilometraz","NerozlisenaKilometraz","PopisPropustku"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "193",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ChodnikDefinicniBod": {
    elementName: "ChodnikDefinicniBod",
    nazev: "chodník",
    codeBase: "0100000007",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "8",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ChodnikPlocha": {
    elementName: "ChodnikPlocha",
    nazev: "chodník",
    codeBase: "0100000007",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "7",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "CyklistickaDopravaKoridorZameruLinie": {
    elementName: "CyklistickaDopravaKoridorZameruLinie",
    nazev: "cyklistická doprava - koridor záměru",
    codeBase: "0100000347",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "502",
  },
  "CyklistickaDopravaKoridorZameruPlocha": {
    elementName: "CyklistickaDopravaKoridorZameruPlocha",
    nazev: "cyklistická doprava - koridor záměru",
    codeBase: "0100000347",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "503",
  },
  "CyklistickaDopravaMistoZameruBod": {
    elementName: "CyklistickaDopravaMistoZameruBod",
    nazev: "cyklistická doprava - místo záměru",
    codeBase: "0100000348",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "505",
  },
  "CyklistickaDopravaMistoZameruPlocha": {
    elementName: "CyklistickaDopravaMistoZameruPlocha",
    nazev: "cyklistická doprava - místo záměru",
    codeBase: "0100000348",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "504",
  },
  "CyklostezkaDefinicniBod": {
    elementName: "CyklostezkaDefinicniBod",
    nazev: "cyklostezka",
    codeBase: "0100000009",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["OznaceniCyklostezky","PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "10",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "CyklostezkaPlocha": {
    elementName: "CyklostezkaPlocha",
    nazev: "cyklostezka",
    codeBase: "0100000009",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","OznaceniCyklostezky"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "9",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "DeliciPasDefinicniBod": {
    elementName: "DeliciPasDefinicniBod",
    nazev: "dělící pás",
    codeBase: "0100000015",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "16",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "DeliciPasPlocha": {
    elementName: "DeliciPasPlocha",
    nazev: "dělící pás",
    codeBase: "0100000015",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "15",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "DopravneVyznamneMistoDrazeBod": {
    elementName: "DopravneVyznamneMistoDrazeBod",
    nazev: "dopravně významné místo na dráze",
    codeBase: "0100000040",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypDopravneVyznamnehoMistaDraze","Natoceni","PopisZeleznicniStaniceNebo"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "370",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "DopravneVyznamneMistoDrazePlocha": {
    elementName: "DopravneVyznamneMistoDrazePlocha",
    nazev: "dopravně významné místo na dráze",
    codeBase: "0100000040",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypDopravneVyznamnehoMistaDraze","PopisZeleznicniStaniceNebo"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "40",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "DopravniOstruvekDefinicniBod": {
    elementName: "DopravniOstruvekDefinicniBod",
    nazev: "dopravní ostrůvek",
    codeBase: "0100000013",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "14",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "DopravniOstruvekPlocha": {
    elementName: "DopravniOstruvekPlocha",
    nazev: "dopravní ostrůvek",
    codeBase: "0100000013",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "13",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "DopravniUzelSilnicniSite": {
    elementName: "DopravniUzelSilnicniSite",
    nazev: "dopravní uzel silniční sítě",
    codeBase: "0100000311",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["CisloUzlu","CislaKrizujicichKomunikaci","TypUzlu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "311",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "DrazniDopravaKoridorZameruLinie": {
    elementName: "DrazniDopravaKoridorZameruLinie",
    nazev: "drážní doprava - koridor záměru",
    codeBase: "0100000341",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypDrahy","KategorieZeleznicniTrate","TypZeleznicniTrate"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "490",
  },
  "DrazniDopravaKoridorZameruPlocha": {
    elementName: "DrazniDopravaKoridorZameruPlocha",
    nazev: "drážní doprava - koridor záměru",
    codeBase: "0100000341",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypDrahy","KategorieZeleznicniTrate","TypZeleznicniTrate"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "491",
  },
  "DrazniDopravaMistoZameruBod": {
    elementName: "DrazniDopravaMistoZameruBod",
    nazev: "drážní doprava - místo záměru",
    codeBase: "0100000342",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypDrahy","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "492",
  },
  "DrazniDopravaMistoZameruPlocha": {
    elementName: "DrazniDopravaMistoZameruPlocha",
    nazev: "drážní doprava - místo záměru",
    codeBase: "0100000342",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypDrahy"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "493",
  },
  "DrobnaKulturniStavbaBod": {
    elementName: "DrobnaKulturniStavbaBod",
    nazev: "drobná kulturní stavba",
    codeBase: "0100000159",
    codeSuffix: "01",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDrobneKulturniStavby","ZpusobPorizeniZPS","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "159",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "DrobnaKulturniStavbaDefinicniBod": {
    elementName: "DrobnaKulturniStavbaDefinicniBod",
    nazev: "drobná kulturní stavba",
    codeBase: "0100000159",
    codeSuffix: "04",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypDrobneKulturniStavby"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "161",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "DrobnaKulturniStavbaPlocha": {
    elementName: "DrobnaKulturniStavbaPlocha",
    nazev: "drobná kulturní stavba",
    codeBase: "0100000159",
    codeSuffix: "03",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDrobneKulturniStavby"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "160",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "DrobnaSakralniStavbaBod": {
    elementName: "DrobnaSakralniStavbaBod",
    nazev: "drobná sakrální stavba",
    codeBase: "0100000154",
    codeSuffix: "01",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS","TypDrobneSakralniStavby","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "154",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "DrobnaSakralniStavbaDefinicniBod": {
    elementName: "DrobnaSakralniStavbaDefinicniBod",
    nazev: "drobná sakrální stavba",
    codeBase: "0100000154",
    codeSuffix: "04",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypDrobneSakralniStavby"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "156",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "DrobnaSakralniStavbaPlocha": {
    elementName: "DrobnaSakralniStavbaPlocha",
    nazev: "drobná sakrální stavba",
    codeBase: "0100000154",
    codeSuffix: "03",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDrobneSakralniStavby"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "155",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "DulLomDefinicniBod": {
    elementName: "DulLomDefinicniBod",
    nazev: "důl, lom",
    codeBase: "0100000140",
    codeSuffix: "04",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["NazevDoluPopis"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "141",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "DulLomPlocha": {
    elementName: "DulLomPlocha",
    nazev: "důl, lom",
    codeBase: "0100000140",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["NazevDoluPopis"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "140",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "DvurNadvoriDefinicniBod": {
    elementName: "DvurNadvoriDefinicniBod",
    nazev: "dvůr, nádvoří",
    codeBase: "0100000189",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "190",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "DvurNadvoriPlocha": {
    elementName: "DvurNadvoriPlocha",
    nazev: "dvůr, nádvoří",
    codeBase: "0100000189",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "189",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ElektrickaSitKoridorZameruLinie": {
    elementName: "ElektrickaSitKoridorZameruLinie",
    nazev: "elektrická síť - koridor záměru",
    codeBase: "0100000350",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["MaximalniNapetovaHladina"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "509",
  },
  "ElektrickaSitKoridorZameruPlocha": {
    elementName: "ElektrickaSitKoridorZameruPlocha",
    nazev: "elektrická síť - koridor záměru",
    codeBase: "0100000350",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["MaximalniNapetovaHladina"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "508",
  },
  "ElektrickaSitMistoZameruBod": {
    elementName: "ElektrickaSitMistoZameruBod",
    nazev: "elektrická síť - místo záměru",
    codeBase: "0100000351",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuElektrickeSiteZameru","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "510",
  },
  "ElektrickaSitMistoZameruPlocha": {
    elementName: "ElektrickaSitMistoZameruPlocha",
    nazev: "elektrická síť - místo záměru",
    codeBase: "0100000351",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuElektrickeSiteZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "511",
  },
  "ElektronickaKomunikaceKoridorZameruLinie": {
    elementName: "ElektronickaKomunikaceKoridorZameruLinie",
    nazev: "elektronická komunikace - koridor záměru",
    codeBase: "0100000352",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "512",
  },
  "ElektronickaKomunikaceKoridorZameruPlocha": {
    elementName: "ElektronickaKomunikaceKoridorZameruPlocha",
    nazev: "elektronická komunikace - koridor záměru",
    codeBase: "0100000352",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "513",
  },
  "ElektronickaKomunikaceMistoZameruBod": {
    elementName: "ElektronickaKomunikaceMistoZameruBod",
    nazev: "elektronická komunikace - místo záměru",
    codeBase: "0100000353",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "514",
  },
  "ElektronickaKomunikaceMistoZameruPlocha": {
    elementName: "ElektronickaKomunikaceMistoZameruPlocha",
    nazev: "elektronická komunikace - místo záměru",
    codeBase: "0100000353",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "515",
  },
  "HeliportBod": {
    elementName: "HeliportBod",
    nazev: "heliport",
    codeBase: "0100000048",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","OznaceniHeliportu","UmisteniHeliportu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "373",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "HeliportPlocha": {
    elementName: "HeliportPlocha",
    nazev: "heliport",
    codeBase: "0100000048",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniHeliportu","UmisteniHeliportu","OznaceniObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "48",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "HorniHranaObrubyLinie": {
    elementName: "HorniHranaObrubyLinie",
    nazev: "horní hrana obruby",
    codeBase: "0100000380",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "719",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HospodarskyNevyuzivanaPlochaDefinicniBod": {
    elementName: "HospodarskyNevyuzivanaPlochaDefinicniBod",
    nazev: "hospodářsky nevyužívaná plocha",
    codeBase: "0100000213",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypHospodarskyNevyuzivanePl"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "214",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "HospodarskyNevyuzivanaPlochaPlocha": {
    elementName: "HospodarskyNevyuzivanaPlochaPlocha",
    nazev: "hospodářsky nevyužívaná plocha",
    codeBase: "0100000213",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypHospodarskyNevyuzivanePl"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "213",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceBudovy": {
    elementName: "HraniceBudovy",
    nazev: "hranice budovy",
    codeBase: "0100000299",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "299",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceDopravniStavbyPlochy": {
    elementName: "HraniceDopravniStavbyPlochy",
    nazev: "hranice dopravní stavby nebo plochy",
    codeBase: "0100000304",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDopravniStavbyNeboPlochy","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "304",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceOstatniPlochy": {
    elementName: "HraniceOstatniPlochy",
    nazev: "hranice ostatní plochy",
    codeBase: "0100000307",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypOstatniPlochy","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "307",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HranicePodzemnihoObjektuZPS": {
    elementName: "HranicePodzemnihoObjektuZPS",
    nazev: "hranice podzemního objektu ZPS",
    codeBase: "0100000309",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "309",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HranicePrirodnihoPoloprirodnihoObjektu": {
    elementName: "HranicePrirodnihoPoloprirodnihoObjektu",
    nazev: "hranice přírodního a polopřírodního objektu",
    codeBase: "0100000305",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypPrirodnihoPoloprirodnihoObjektu","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "305",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceSchodiste": {
    elementName: "HraniceSchodiste",
    nazev: "hranice schodiště",
    codeBase: "0100000301",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["DruhSchodiste","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "301",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceStavby": {
    elementName: "HraniceStavby",
    nazev: "hranice stavby",
    codeBase: "0100000300",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypStavby","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "300",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceUdrzovaneZelene": {
    elementName: "HraniceUdrzovaneZelene",
    nazev: "hranice udržované zeleně",
    codeBase: "0100000308",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "308",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceVodnihoDila": {
    elementName: "HraniceVodnihoDila",
    nazev: "hranice vodního díla",
    codeBase: "0100000306",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypVodnihoDila","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "306",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceZarizeniKanalizacniPripojky": {
    elementName: "HraniceZarizeniKanalizacniPripojky",
    nazev: "hranice zařízení kanalizační přípojky",
    codeBase: "0100000371",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "548",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceZarizeniVodovodniPripojky": {
    elementName: "HraniceZarizeniVodovodniPripojky",
    nazev: "hranice zařízení vodovodní přípojky",
    codeBase: "0100000370",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "547",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HraniceZdi": {
    elementName: "HraniceZdi",
    nazev: "hranice zdi",
    codeBase: "0100000302",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Základní konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZdi","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "302",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HrazDefinicniBod": {
    elementName: "HrazDefinicniBod",
    nazev: "hráz",
    codeBase: "0100000331",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "472",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "HrazPlocha": {
    elementName: "HrazPlocha",
    nazev: "hráz",
    codeBase: "0100000331",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "473",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HrbitovDefinicniBod": {
    elementName: "HrbitovDefinicniBod",
    nazev: "hřbitov",
    codeBase: "0100000157",
    codeSuffix: "04",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "158",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "HrbitovPlocha": {
    elementName: "HrbitovPlocha",
    nazev: "hřbitov",
    codeBase: "0100000157",
    codeSuffix: "03",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Stavba kulturní, sakrální",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "157",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HristeDefinicniBod": {
    elementName: "HristeDefinicniBod",
    nazev: "hřiště",
    codeBase: "0100000152",
    codeSuffix: "04",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Sportoviště a hřiště pro rekreaci",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "153",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "HristePlocha": {
    elementName: "HristePlocha",
    nazev: "hřiště",
    codeBase: "0100000152",
    codeSuffix: "03",
    kategorieObjektu: "Rekreační, kulturní a sakrální stavby",
    skupinaObjektu: "Sportoviště a hřiště pro rekreaci",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "152",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "HydrantVodovodniSiteBod": {
    elementName: "HydrantVodovodniSiteBod",
    nazev: "hydrant vodovodní sítě",
    codeBase: "0100000387",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["ICME","TypHydrantuVodovodniSite","TypMediaVodovodniSite","StavObjektu","DimenzeHydrantuVodovodniSite","PopisHydrantuVodovodniSite","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "711",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "IdentickyBod": {
    elementName: "IdentickyBod",
    nazev: "identický bod",
    codeBase: "0100000220",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Podrobný bod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["CisloBodu","ZpusobPorizeniZPS","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "220",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "JaderneZarizeniBod": {
    elementName: "JaderneZarizeniBod",
    nazev: "jaderné zařízení",
    codeBase: "0100000104",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypJadernehoZarizeni","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "378",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "JaderneZarizeniPlocha": {
    elementName: "JaderneZarizeniPlocha",
    nazev: "jaderné zařízení",
    codeBase: "0100000104",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypJadernehoZarizeni","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "104",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "JezDefinicniBod": {
    elementName: "JezDefinicniBod",
    nazev: "jez",
    codeBase: "0100000332",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "475",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "JezPlocha": {
    elementName: "JezPlocha",
    nazev: "jez",
    codeBase: "0100000332",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "474",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "JezeroDefinicniBod": {
    elementName: "JezeroDefinicniBod",
    nazev: "jezero",
    codeBase: "0100000205",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PopisJezera"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "206",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "JezeroPlocha": {
    elementName: "JezeroPlocha",
    nazev: "jezero",
    codeBase: "0100000205",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PopisJezera"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "205",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "JinaTechnologickaStavbaTI": {
    elementName: "JinaTechnologickaStavbaTI",
    nazev: "jiná technologická stavba TI",
    codeBase: "0100000096",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "96",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "JinaTechnologickaStavbaTIPlocha": {
    elementName: "JinaTechnologickaStavbaTIPlocha",
    nazev: "jiná technologická stavba TI",
    codeBase: "0100000096",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "716",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "JineDulniDiloStavbaDefinicniBod": {
    elementName: "JineDulniDiloStavbaDefinicniBod",
    nazev: "jiné důlní dílo, důlní stavba",
    codeBase: "0100000146",
    codeSuffix: "04",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "147",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "JineDulniDiloStavbaPlocha": {
    elementName: "JineDulniDiloStavbaPlocha",
    nazev: "jiné důlní dílo, důlní stavba",
    codeBase: "0100000146",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "146",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "JineZarizeniOdstranovaniVyuzivaniSberOdpaduBod": {
    elementName: "JineZarizeniOdstranovaniVyuzivaniSberOdpaduBod",
    nazev: "jiné zařízení na odstraňování, využívání nebo sběr odpadů",
    codeBase: "0100000150",
    codeSuffix: "01",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniOdstranovaniOdpadu","PovoleniNakladaniNebezpecnymOdpadem","Kapacita","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "388",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha": {
    elementName: "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha",
    nazev: "jiné zařízení na odstraňování, využívání nebo sběr odpadů",
    codeBase: "0100000150",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniOdstranovaniOdpadu","PovoleniNakladaniNebezpecnymOdpadem","Kapacita","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "150",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "JineZarizeniStavebTI": {
    elementName: "JineZarizeniStavebTI",
    nazev: "jiné zařízení staveb TI",
    codeBase: "0100000139",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["UmisteniObjektu","TypJinehoZarizeniStavebTI","StavObjektu","PopisJinehoZarizStavebTi","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "139",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "JineZarizeniStavebTILinie": {
    elementName: "JineZarizeniStavebTILinie",
    nazev: "jiné zařízení staveb TI",
    codeBase: "0100000139",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypJinehoZarizeniStavebTI","StavObjektu","UmisteniObjektu","PopisJinehoZarizStavebTi"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "717",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "JineZarizeniStavebTIPlocha": {
    elementName: "JineZarizeniStavebTIPlocha",
    nazev: "jiné zařízení staveb TI",
    codeBase: "0100000139",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypJinehoZarizeniStavebTI","StavObjektu","UmisteniObjektu","PopisJinehoZarizStavebTi"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "718",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "KanalizaceKoridorZameruLinie": {
    elementName: "KanalizaceKoridorZameruLinie",
    nazev: "kanalizace - koridor záměru",
    codeBase: "0100000358",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "524",
  },
  "KanalizaceKoridorZameruPlocha": {
    elementName: "KanalizaceKoridorZameruPlocha",
    nazev: "kanalizace - koridor záměru",
    codeBase: "0100000358",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "525",
  },
  "KanalizaceMistoZameruBod": {
    elementName: "KanalizaceMistoZameruBod",
    nazev: "kanalizace - místo záměru",
    codeBase: "0100000359",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuStokoveSiteZameru","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "527",
  },
  "KanalizaceMistoZameruPlocha": {
    elementName: "KanalizaceMistoZameruPlocha",
    nazev: "kanalizace - místo záměru",
    codeBase: "0100000359",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuStokoveSiteZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "526",
  },
  "Kolektor": {
    elementName: "Kolektor",
    nazev: "kolektor",
    codeBase: "0100000091",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["VedeniSiteVJineStavbe","TypKolektoru","StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "91",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "KolektorPlocha": {
    elementName: "KolektorPlocha",
    nazev: "kolektor",
    codeBase: "0100000091",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["VedeniSiteVJineStavbe","TypKolektoru","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "715",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "KominDefinicniBod": {
    elementName: "KominDefinicniBod",
    nazev: "komín",
    codeBase: "0100000177",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "178",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "KominPlocha": {
    elementName: "KominPlocha",
    nazev: "komín",
    codeBase: "0100000177",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "177",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "LesDefinicniBod": {
    elementName: "LesDefinicniBod",
    nazev: "les",
    codeBase: "0100000211",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "212",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "LesPlocha": {
    elementName: "LesPlocha",
    nazev: "les",
    codeBase: "0100000211",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "211",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "LeteckaDopravaKoridorZameruLinie": {
    elementName: "LeteckaDopravaKoridorZameruLinie",
    nazev: "letecká doprava - koridor záměru",
    codeBase: "0100000345",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "498",
  },
  "LeteckaDopravaKoridorZameruPlocha": {
    elementName: "LeteckaDopravaKoridorZameruPlocha",
    nazev: "letecká doprava - koridor záměru",
    codeBase: "0100000345",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "499",
  },
  "LeteckaDopravaMistoZameruBod": {
    elementName: "LeteckaDopravaMistoZameruBod",
    nazev: "letecká doprava - místo záměru",
    codeBase: "0100000346",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "500",
  },
  "LeteckaDopravaMistoZameruPlocha": {
    elementName: "LeteckaDopravaMistoZameruPlocha",
    nazev: "letecká doprava - místo záměru",
    codeBase: "0100000346",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "501",
  },
  "LeteckaStavbaBod": {
    elementName: "LeteckaStavbaBod",
    nazev: "letecká stavba",
    codeBase: "0100000049",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypLeteckeStavby","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "374",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "LeteckaStavbaPlocha": {
    elementName: "LeteckaStavbaPlocha",
    nazev: "letecká stavba",
    codeBase: "0100000049",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypLeteckeStavby"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "49",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "Letiste": {
    elementName: "Letiste",
    nazev: "letiště",
    codeBase: "0100000047",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["DruhLetiste","ICAOKodLetiste"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "47",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "ManipulacniPlochaDefinicniBod": {
    elementName: "ManipulacniPlochaDefinicniBod",
    nazev: "manipulační plocha",
    codeBase: "0100000055",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch","TypManipulacniPlochy","PopisManipulacniPlochy"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "56",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ManipulacniPlochaPlocha": {
    elementName: "ManipulacniPlochaPlocha",
    nazev: "manipulační plocha",
    codeBase: "0100000055",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","PopisManipulacniPlochy","TypManipulacniPlochy"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "55",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "MelioracniPrikopZlabDefinicniBod": {
    elementName: "MelioracniPrikopZlabDefinicniBod",
    nazev: "meliorační příkop, žlab",
    codeBase: "0100000080",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba k melioracím pozemků",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "81",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "MelioracniPrikopZlabPlocha": {
    elementName: "MelioracniPrikopZlabPlocha",
    nazev: "meliorační příkop, žlab",
    codeBase: "0100000080",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba k melioracím pozemků",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "80",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "MelioracniSachta": {
    elementName: "MelioracniSachta",
    nazev: "meliorační šachta",
    codeBase: "0100000083",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba k melioracím pozemků",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "83",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "MostniVahaDefinicniBod": {
    elementName: "MostniVahaDefinicniBod",
    nazev: "mostní váha",
    codeBase: "0100000070",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["Vazivost","EvidencniKilometraz","NerozlisenaKilometraz","TypVahy"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "71",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "MostniVahaPlocha": {
    elementName: "MostniVahaPlocha",
    nazev: "mostní váha",
    codeBase: "0100000070",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["Vazivost","EvidencniKilometraz","NerozlisenaKilometraz","TypVahy"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "70",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "NadrzBezVzdouvacihoObjektuDefinicniBod": {
    elementName: "NadrzBezVzdouvacihoObjektuDefinicniBod",
    nazev: "nádrž bez vzdouvacího objektu",
    codeBase: "0100000330",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Nádrž",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypNadrzeBezVzdouvacihoObjektu","PopisVodniNadrze"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "471",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "NadrzBezVzdouvacihoObjektuPlocha": {
    elementName: "NadrzBezVzdouvacihoObjektuPlocha",
    nazev: "nádrž bez vzdouvacího objektu",
    codeBase: "0100000330",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Nádrž",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNadrzeBezVzdouvacihoObjektu","PopisVodniNadrze"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "470",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "NadrzZdrzSeVzdouvacimObjektemDefinicniBod": {
    elementName: "NadrzZdrzSeVzdouvacimObjektemDefinicniBod",
    nazev: "nádrž, zdrž se vzdouvacím objektem",
    codeBase: "0100000072",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Nádrž",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypNadrzeZdrzeSeVzdouvacimObjektem","PopisVodniNadrze"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "73",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "NadrzZdrzSeVzdouvacimObjektemPlocha": {
    elementName: "NadrzZdrzSeVzdouvacimObjektemPlocha",
    nazev: "nádrž, zdrž se vzdouvacím objektem",
    codeBase: "0100000072",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Nádrž",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNadrzeZdrzeSeVzdouvacimObjektem","PopisVodniNadrze"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "72",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "NajezdDefinicniBod": {
    elementName: "NajezdDefinicniBod",
    nazev: "nájezd",
    codeBase: "0100000017",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "18",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "NajezdPlocha": {
    elementName: "NajezdPlocha",
    nazev: "nájezd",
    codeBase: "0100000017",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "17",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "NastupisteDefinicniBod": {
    elementName: "NastupisteDefinicniBod",
    nazev: "nástupiště",
    codeBase: "0100000053",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypNastupiste","PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "54",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "NastupistePlocha": {
    elementName: "NastupistePlocha",
    nazev: "nástupiště",
    codeBase: "0100000053",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNastupiste","PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "53",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "NeidentifikovanyObjekt": {
    elementName: "NeidentifikovanyObjekt",
    nazev: "neidentifikovaný objekt",
    codeBase: "0100000202",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Doplňkové zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNeidentLiniovyObjekt","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "202",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "NosicTechnickehoZarizeni": {
    elementName: "NosicTechnickehoZarizeni",
    nazev: "nosič technického zařízení",
    codeBase: "0100000201",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNosiceTechnickehoZarizeni","ZpusobPorizeniZPS","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "201",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "O6": {
    elementName: "O6",
    nazev: "o6",
    codeBase: "0100000372",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","EvidencniCisloObjektu","IDRDTI"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "746",
  },
  "ObjektOdvodneniStavbyBod": {
    elementName: "ObjektOdvodneniStavbyBod",
    nazev: "objekt odvodnění stavby",
    codeBase: "0100000329",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypObjektuOdvodneniStavby","PopisZarizeniKanalizacniSit","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "468",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ObjektOdvodneniStavbyLinie": {
    elementName: "ObjektOdvodneniStavbyLinie",
    nazev: "objekt odvodnění stavby",
    codeBase: "0100000329",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypObjektuOdvodneniStavby","PopisZarizeniKanalizacniSit","StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "469",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ObjektOdvodneniStavbyPlocha": {
    elementName: "ObjektOdvodneniStavbyPlocha",
    nazev: "objekt odvodnění stavby",
    codeBase: "0100000329",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypObjektuOdvodneniStavby","PopisZarizeniKanalizacniSit","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "467",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ObjektStokoveSiteBod": {
    elementName: "ObjektStokoveSiteBod",
    nazev: "objekt stokové sítě",
    codeBase: "0100000337",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["ICME","StavObjektu","TypObjektuStokoveSite","PopisZarizeniKanalizacniSit","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "483",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ObjektStokoveSitePlocha": {
    elementName: "ObjektStokoveSitePlocha",
    nazev: "objekt stokové sítě",
    codeBase: "0100000337",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["ICME","StavObjektu","TypObjektuStokoveSite","PopisZarizeniKanalizacniSit"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "482",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ObjektVodovodniSiteBod": {
    elementName: "ObjektVodovodniSiteBod",
    nazev: "objekt vodovodní sítě",
    codeBase: "0100000336",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypObjektuVodovodniSite","TypMediaVodovodniSite","PopisZarizeniVodovodniSite","ICME","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "481",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ObjektVodovodniSitePlocha": {
    elementName: "ObjektVodovodniSitePlocha",
    nazev: "objekt vodovodní sítě",
    codeBase: "0100000336",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypObjektuVodovodniSite","TypMediaVodovodniSite","PopisZarizeniVodovodniSite","ICME"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "480",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ObjektZarizeniOchranaPredPovodnemiBod": {
    elementName: "ObjektZarizeniOchranaPredPovodnemiBod",
    nazev: "objekt nebo zařízení k ochraně před povodněmi",
    codeBase: "0100000089",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypObjektuZarizeniOchranaPredPovodnemi","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "89",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ObjektZarizeniOchranaPredPovodnemiLinie": {
    elementName: "ObjektZarizeniOchranaPredPovodnemiLinie",
    nazev: "objekt nebo zařízení k ochraně před povodněmi",
    codeBase: "0100000089",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypObjektuZarizeniOchranaPredPovodnemi"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "456",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ObvodDrahy": {
    elementName: "ObvodDrahy",
    nazev: "obvod dráhy",
    codeBase: "0100000019",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "19",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "ObvodMostu": {
    elementName: "ObvodMostu",
    nazev: "obvod mostu",
    codeBase: "0100000057",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["NerozlisenaKilometraz","OznaceniKomunikaceTrate","PopisMostu","EvidencniKilometraz","TypMostu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "57",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "ObvodPozemniKomunikace": {
    elementName: "ObvodPozemniKomunikace",
    nazev: "obvod pozemní komunikace",
    codeBase: "0100000003",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniKomunikace"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "3",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "ObvodTunelu": {
    elementName: "ObvodTunelu",
    nazev: "obvod tunelu",
    codeBase: "0100000379",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["EvidencniCisloTunelu","EvidencniKilometraz","PopisTunelu","OznaceniTunelu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "714",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OchrannaSachtaVrtu": {
    elementName: "OchrannaSachtaVrtu",
    nazev: "ochranná šachta vrtu",
    codeBase: "0100000192",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "192",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "OdkalisteBod": {
    elementName: "OdkalisteBod",
    nazev: "odkaliště",
    codeBase: "0100000151",
    codeSuffix: "01",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "389",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "OdkalistePlocha": {
    elementName: "OdkalistePlocha",
    nazev: "odkaliště",
    codeBase: "0100000151",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "151",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "OdpadoveHospodarstviZamerBod": {
    elementName: "OdpadoveHospodarstviZamerBod",
    nazev: "odpadové hospodářství - záměr",
    codeBase: "0100000364",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuOdpadovehoHospodarstviZameru","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "537",
  },
  "OdpadoveHospodarstviZamerLinie": {
    elementName: "OdpadoveHospodarstviZamerLinie",
    nazev: "odpadové hospodářství - záměr",
    codeBase: "0100000364",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuOdpadovehoHospodarstviZameru"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "536",
  },
  "OdpadoveHospodarstviZamerPlocha": {
    elementName: "OdpadoveHospodarstviZamerPlocha",
    nazev: "odpadové hospodářství - záměr",
    codeBase: "0100000364",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuOdpadovehoHospodarstviZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "538",
  },
  "OrientacniSloupekTI": {
    elementName: "OrientacniSloupekTI",
    nazev: "orientační sloupek TI",
    codeBase: "0100000136",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypInzenyrskeSite","StavObjektu","TypOrientacnihoSloupkuTi","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "136",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "OsaKolejePozemniLanoveDrahy": {
    elementName: "OsaKolejePozemniLanoveDrahy",
    nazev: "osa koleje pozemní lanové dráhy",
    codeBase: "0100000031",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "31",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OsaKolejeSpecialniDrahy": {
    elementName: "OsaKolejeSpecialniDrahy",
    nazev: "osa koleje speciální dráhy",
    codeBase: "0100000038",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "38",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OsaKolejeTramvajoveDrahy": {
    elementName: "OsaKolejeTramvajoveDrahy",
    nazev: "osa koleje tramvajové dráhy",
    codeBase: "0100000027",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "27",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OsaKolejeZeleznicniTrate": {
    elementName: "OsaKolejeZeleznicniTrate",
    nazev: "osa koleje železniční tratě",
    codeBase: "0100000021",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["Splitka","PopisKoleje","RokGeodetickehoPorizeni","RozchodKoleji","Ozubnice","TypKoleje","SpravceDI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "21",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OsaMelioracnihoPrikopuZlabuDrenu": {
    elementName: "OsaMelioracnihoPrikopuZlabuDrenu",
    nazev: "osa melioračního příkopu, žlabu, drénu",
    codeBase: "0100000082",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba k melioracím pozemků",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["RokVystavby","Material","DruhMelioracnichOpatreni"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "82",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "OsaPozemniKomunikace": {
    elementName: "OsaPozemniKomunikace",
    nazev: "osa pozemní komunikace",
    codeBase: "0100000004",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PocetJizdnichPruhu","CisloETahu","PrevazujiciPovrch","KategoriePozemniKomunikace","TypUsekuPozemniKomunikace","OznaceniKomunikace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "4",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OsaPozemniLanoveDrahy": {
    elementName: "OsaPozemniLanoveDrahy",
    nazev: "osa pozemní lanové dráhy",
    codeBase: "0100000030",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["DruhDopravyLanoveDrahy"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "30",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OsaProtipovodnoveZabrany": {
    elementName: "OsaProtipovodnoveZabrany",
    nazev: "osa protipovodňové zábrany",
    codeBase: "0100000335",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypProtipovodnoveZabrany","PopisProtipovodnoveZabrany"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "479",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "OsaSpecialniDrahy": {
    elementName: "OsaSpecialniDrahy",
    nazev: "osa speciální dráhy",
    codeBase: "0100000037",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "37",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OsaTramvajoveDrahy": {
    elementName: "OsaTramvajoveDrahy",
    nazev: "osa tramvajové dráhy",
    codeBase: "0100000026",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "26",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OsaZeleznicniTrate": {
    elementName: "OsaZeleznicniTrate",
    nazev: "osa železniční tratě",
    codeBase: "0100000020",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PocetKoleji","ElektrizaceZeleznicniTrate","KategorieZeleznicniTrate","TypUsekuZeleznicniTrate","TypZeleznicniTrate","OznaceniTrate"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "20",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "OstatniZastresenaStavbaDefinicniBod": {
    elementName: "OstatniZastresenaStavbaDefinicniBod",
    nazev: "ostatní zastřešená stavba",
    codeBase: "0100000314",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "439",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "OstatniZastresenaStavbaPlocha": {
    elementName: "OstatniZastresenaStavbaPlocha",
    nazev: "ostatní zastřešená stavba",
    codeBase: "0100000314",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "314",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "OznacnikZastavkyHromadneDopravyBod": {
    elementName: "OznacnikZastavkyHromadneDopravyBod",
    nazev: "označník zastávky hromadné dopravy",
    codeBase: "0100000374",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["UmisteniOznacniku","DruhHromadneDopravy","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "702",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "ParkovisteOdstavnaPlochaDefinicniBod": {
    elementName: "ParkovisteOdstavnaPlochaDefinicniBod",
    nazev: "parkoviště, odstavná plocha",
    codeBase: "0100000011",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "12",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ParkovisteOdstavnaPlochaPlocha": {
    elementName: "ParkovisteOdstavnaPlochaPlocha",
    nazev: "parkoviště, odstavná plocha",
    codeBase: "0100000011",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "11",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PatkaDeskaMonolitPilirDefinicniBod": {
    elementName: "PatkaDeskaMonolitPilirDefinicniBod",
    nazev: "patka, deska, monolit, pilíř",
    codeBase: "0100000183",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypPatkyDeskyMonolituPilir"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "184",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PatkaDeskaMonolitPilirPlocha": {
    elementName: "PatkaDeskaMonolitPilirPlocha",
    nazev: "patka, deska, monolit, pilíř",
    codeBase: "0100000183",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypPatkyDeskyMonolituPilir"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "183",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PlavebniKomoraBod": {
    elementName: "PlavebniKomoraBod",
    nazev: "plavební komora",
    codeBase: "0100000041",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "371",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "PlavebniKomoraPlocha": {
    elementName: "PlavebniKomoraPlocha",
    nazev: "plavební komora",
    codeBase: "0100000041",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "41",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "PlochaMostniKonstrukceDefinicniBod": {
    elementName: "PlochaMostniKonstrukceDefinicniBod",
    nazev: "plocha mostní konstrukce",
    codeBase: "0100000058",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["EvidencniKilometraz","TypMostu","PopisMostu","NerozlisenaKilometraz"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "59",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PlochaMostniKonstrukcePlocha": {
    elementName: "PlochaMostniKonstrukcePlocha",
    nazev: "plocha mostní konstrukce",
    codeBase: "0100000058",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypMostu","NerozlisenaKilometraz","PopisMostu","EvidencniKilometraz"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "58",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PlochaRekultivaceDefinicniBod": {
    elementName: "PlochaRekultivaceDefinicniBod",
    nazev: "plocha rekultivace",
    codeBase: "0100000142",
    codeSuffix: "04",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "143",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PlochaRekultivacePlocha": {
    elementName: "PlochaRekultivacePlocha",
    nazev: "plocha rekultivace",
    codeBase: "0100000142",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "142",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "Plot": {
    elementName: "Plot",
    nazev: "plot",
    codeBase: "0100000162",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["DruhPlotu","HraniceJinehoObjektu","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "162",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PlynovodKoridorZameruLinie": {
    elementName: "PlynovodKoridorZameruLinie",
    nazev: "plynovod - koridor záměru",
    codeBase: "0100000354",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TlakovaHladinaPlynovodniSite"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "516",
  },
  "PlynovodKoridorZameruPlocha": {
    elementName: "PlynovodKoridorZameruPlocha",
    nazev: "plynovod - koridor záměru",
    codeBase: "0100000354",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TlakovaHladinaPlynovodniSite"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "517",
  },
  "PlynovodMistoZameruBod": {
    elementName: "PlynovodMistoZameruBod",
    nazev: "plynovod - místo záměru",
    codeBase: "0100000355",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuPlynovodniSiteZameru","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "518",
  },
  "PlynovodMistoZameruPlocha": {
    elementName: "PlynovodMistoZameruPlocha",
    nazev: "plynovod - místo záměru",
    codeBase: "0100000355",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuPlynovodniSiteZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "519",
  },
  "PodezdivkaDefinicniBod": {
    elementName: "PodezdivkaDefinicniBod",
    nazev: "podezdívka",
    codeBase: "0100000163",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "164",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PodezdivkaPlocha": {
    elementName: "PodezdivkaPlocha",
    nazev: "podezdívka",
    codeBase: "0100000163",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "163",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PodperneZarizeni": {
    elementName: "PodperneZarizeni",
    nazev: "podpěrné zařízení",
    codeBase: "0100000095",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypPodpernehoZarizeni","TypSloupu","StavObjektu","CisloTrakcniPodperyKotvyKo","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "95",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "PodrobnyBodZPS": {
    elementName: "PodrobnyBodZPS",
    nazev: "podrobný bod ZPS",
    codeBase: "0100000218",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Podrobný bod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloBodu","TridaPresnostiVyska","TridaPresnostiPoloha","ZpusobPorizeniPB_ZPS","UrovenUmisteniObjektuZPS","KonsolidacniText","Od","Datum","Osoba","Organizace","Poznamka","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "218",
  },
  "PodzemniObjektZPSDefinicniBod": {
    elementName: "PodzemniObjektZPSDefinicniBod",
    nazev: "podzemní objekt ZPS",
    codeBase: "0100000197",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "198",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PodzemniObjektZPSPlocha": {
    elementName: "PodzemniObjektZPSPlocha",
    nazev: "podzemní objekt ZPS",
    codeBase: "0100000197",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "197",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PortalPodchoduDefinicniBod": {
    elementName: "PortalPodchoduDefinicniBod",
    nazev: "portál podchodu",
    codeBase: "0100000064",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "65",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PortalPodchoduPlocha": {
    elementName: "PortalPodchoduPlocha",
    nazev: "portál podchodu",
    codeBase: "0100000064",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "64",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PortalTuneluDefinicniBod": {
    elementName: "PortalTuneluDefinicniBod",
    nazev: "portál tunelu",
    codeBase: "0100000060",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["EvidencniCisloTunelu","EvidencniKilometraz","CisloPortalu","NerozlisenaKilometraz"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "61",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PortalTuneluPlocha": {
    elementName: "PortalTuneluPlocha",
    nazev: "portál tunelu",
    codeBase: "0100000060",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["CisloPortalu","EvidencniCisloTunelu","EvidencniKilometraz","NerozlisenaKilometraz"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "60",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PovrchovyZnakTI": {
    elementName: "PovrchovyZnakTI",
    nazev: "povrchový znak TI",
    codeBase: "0100000135",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypPovrchovehoZnakuTI","StavObjektu","VyskovaKotaVstupniSachty","PopisPovrchovehoZnakuTi","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "135",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "PozemniCastPristavuBod": {
    elementName: "PozemniCastPristavuBod",
    nazev: "pozemní část přístavu",
    codeBase: "0100000325",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "464",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "PozemniCastPristavuPlocha": {
    elementName: "PozemniCastPristavuPlocha",
    nazev: "pozemní část přístavu",
    codeBase: "0100000325",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "465",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "PozemniLanovaDrahaDefinicniBod": {
    elementName: "PozemniLanovaDrahaDefinicniBod",
    nazev: "pozemní lanová dráha",
    codeBase: "0100000028",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "29",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PozemniLanovaDrahaPlocha": {
    elementName: "PozemniLanovaDrahaPlocha",
    nazev: "pozemní lanová dráha",
    codeBase: "0100000028",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "28",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PridruzenaPlochaPozemniKomunikaceDefinicniBod": {
    elementName: "PridruzenaPlochaPozemniKomunikaceDefinicniBod",
    nazev: "přidružená plocha pozemní komunikace",
    codeBase: "0100000320",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "435",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PridruzenaPlochaPozemniKomunikacePlocha": {
    elementName: "PridruzenaPlochaPozemniKomunikacePlocha",
    nazev: "přidružená plocha pozemní komunikace",
    codeBase: "0100000320",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "434",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PrikopNasepZarezDopravniStavbyDefinicniBod": {
    elementName: "PrikopNasepZarezDopravniStavbyDefinicniBod",
    nazev: "příkop, násep, zářez dopravní stavby",
    codeBase: "0100000051",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypPrikopuNasepuZarezuDopr","PopisPrikopuNasepuZarezuDo"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "52",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "PrikopNasepZarezDopravniStavbyPlocha": {
    elementName: "PrikopNasepZarezDopravniStavbyPlocha",
    nazev: "příkop, násep, zářez dopravní stavby",
    codeBase: "0100000051",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PopisPrikopuNasepuZarezuDo","TypPrikopuNasepuZarezuDopr"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "51",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "PrivadecNahonOdpadLinie": {
    elementName: "PrivadecNahonOdpadLinie",
    nazev: "přivaděč, náhon, odpad",
    codeBase: "0100000118",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Přivaděč povrchových vod, náhon, odpad",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Dimenze","Material","TypPrivadece","StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "118",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "PrivadecNahonOdpadPlocha": {
    elementName: "PrivadecNahonOdpadPlocha",
    nazev: "přivaděč, náhon, odpad",
    codeBase: "0100000118",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Přivaděč povrchových vod, náhon, odpad",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypPrivadece","Dimenze","Material"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "459",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "PrivadecPovrchovychVodKoridorZameruLinie": {
    elementName: "PrivadecPovrchovychVodKoridorZameruLinie",
    nazev: "přivaděč povrchových vod - koridor záměru",
    codeBase: "0100000366",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "542",
  },
  "PrivadecPovrchovychVodKoridorZameruPlocha": {
    elementName: "PrivadecPovrchovychVodKoridorZameruPlocha",
    nazev: "přivaděč povrchových vod - koridor záměru",
    codeBase: "0100000366",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "541",
  },
  "ProduktovodKoridorZameruLinie": {
    elementName: "ProduktovodKoridorZameruLinie",
    nazev: "produktovod - koridor záměru",
    codeBase: "0100000360",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "529",
  },
  "ProduktovodKoridorZameruPlocha": {
    elementName: "ProduktovodKoridorZameruPlocha",
    nazev: "produktovod - koridor záměru",
    codeBase: "0100000360",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "528",
  },
  "ProduktovodMistoZameruBod": {
    elementName: "ProduktovodMistoZameruBod",
    nazev: "produktovod - místo záměru",
    codeBase: "0100000361",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "531",
  },
  "ProduktovodMistoZameruPlocha": {
    elementName: "ProduktovodMistoZameruPlocha",
    nazev: "produktovod - místo záměru",
    codeBase: "0100000361",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "530",
  },
  "ProtihlukovaStena": {
    elementName: "ProtihlukovaStena",
    nazev: "protihluková stěna",
    codeBase: "0100000319",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["HraniceJinehoObjektu","TypProtihlukoveSteny","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "438",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ProtipovodnovaZabranaDefinicniBod": {
    elementName: "ProtipovodnovaZabranaDefinicniBod",
    nazev: "protipovodňová zábrana",
    codeBase: "0100000085",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypProtipovodnoveZabrany","PopisProtipovodnoveZabrany"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "86",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ProtipovodnovaZabranaLinie": {
    elementName: "ProtipovodnovaZabranaLinie",
    nazev: "protipovodňová zábrana",
    codeBase: "0100000085",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypProtipovodnoveZabrany","HraniceJinehoObjektu","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "90",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ProtipovodnovaZabranaPlocha": {
    elementName: "ProtipovodnovaZabranaPlocha",
    nazev: "protipovodňová zábrana",
    codeBase: "0100000085",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypProtipovodnoveZabrany","PopisProtipovodnoveZabrany"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "85",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ProtipovodnoveOpatreniZamerLinie": {
    elementName: "ProtipovodnoveOpatreniZamerLinie",
    nazev: "protipovodňové a ostatní opatření v krajině - záměr",
    codeBase: "0100000365",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "539",
  },
  "ProtipovodnoveOpatreniZamerPlocha": {
    elementName: "ProtipovodnoveOpatreniZamerPlocha",
    nazev: "protipovodňové a ostatní opatření v krajině - záměr",
    codeBase: "0100000365",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "540",
  },
  "ProvozniPlochaPodchoduDefinicniBod": {
    elementName: "ProvozniPlochaPodchoduDefinicniBod",
    nazev: "provozní plocha podchodu",
    codeBase: "0100000066",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypPodchodu","PopisPodchodu","NerozlisenaKilometraz","EvidencniKilometraz"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "67",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ProvozniPlochaPodchoduPlocha": {
    elementName: "ProvozniPlochaPodchoduPlocha",
    nazev: "provozní plocha podchodu",
    codeBase: "0100000066",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypPodchodu","EvidencniKilometraz","NerozlisenaKilometraz","PopisPodchodu"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "66",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ProvozniPlochaPozemniKomunikaceDefinicniBod": {
    elementName: "ProvozniPlochaPozemniKomunikaceDefinicniBod",
    nazev: "provozní plocha pozemní komunikace",
    codeBase: "0100000005",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch","TypPozemniKomunikace"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "6",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ProvozniPlochaPozemniKomunikacePlocha": {
    elementName: "ProvozniPlochaPozemniKomunikacePlocha",
    nazev: "provozní plocha pozemní komunikace",
    codeBase: "0100000005",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","TypPozemniKomunikace"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "5",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ProvozniPlochaTuneluDefinicniBod": {
    elementName: "ProvozniPlochaTuneluDefinicniBod",
    nazev: "provozní plocha tunelu",
    codeBase: "0100000062",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypTunelu","NerozlisenaKilometraz","PopisTunelu","EvidencniKilometraz","EvidencniCisloTunelu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "63",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ProvozniPlochaTuneluPlocha": {
    elementName: "ProvozniPlochaTuneluPlocha",
    nazev: "provozní plocha tunelu",
    codeBase: "0100000062",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["EvidencniKilometraz","NerozlisenaKilometraz","TypTunelu","EvidencniCisloTunelu","PopisTunelu"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "62",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ProvozniProstorElektrickeSite": {
    elementName: "ProvozniProstorElektrickeSite",
    nazev: "provozní prostor elektrické sítě",
    codeBase: "0100000322",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "449",
    dialectAttrGroup: "SpolecneAtributyObjektuPasemTISZ",
  },
  "PrubehJineTechnologickeStavbyTI": {
    elementName: "PrubehJineTechnologickeStavbyTI",
    nazev: "průběh jiné technologické stavby TI",
    codeBase: "0100000097",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["VedeniSiteVJineStavbe","StavObjektu","TypPrubehuJineTechnologickeStavbyTI","PopisPrubehuJineTStavby"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "97",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "PrubehPropustku": {
    elementName: "PrubehPropustku",
    nazev: "průběh propustku",
    codeBase: "0100000195",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["EvidencniKilometraz","ZpusobPorizeniZPS","Prubeh"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "195",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "RampaDefinicniBod": {
    elementName: "RampaDefinicniBod",
    nazev: "rampa",
    codeBase: "0100000173",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["RelatVyskaRampyKTemKolej","MaterialRampy"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "174",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "RampaPlocha": {
    elementName: "RampaPlocha",
    nazev: "rampa",
    codeBase: "0100000173",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["RelatVyskaRampyKTemKolej","MaterialRampy"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "173",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "RozestavenaPlochaDefinicniBod": {
    elementName: "RozestavenaPlochaDefinicniBod",
    nazev: "rozestavěná plocha",
    codeBase: "0100000381",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "720",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "RozestavenaPlochaPlocha": {
    elementName: "RozestavenaPlochaPlocha",
    nazev: "rozestavěná plocha",
    codeBase: "0100000381",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "721",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "SchodisteDefinicniBod": {
    elementName: "SchodisteDefinicniBod",
    nazev: "schodiště",
    codeBase: "0100000166",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["DruhSchodiste","TypSchodiste","Konstrukce"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "167",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "SchodistePlocha": {
    elementName: "SchodistePlocha",
    nazev: "schodiště",
    codeBase: "0100000166",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypSchodiste","DruhSchodiste","Konstrukce"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "166",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "SdilenaStavbaTIKoridorZameruLinie": {
    elementName: "SdilenaStavbaTIKoridorZameruLinie",
    nazev: "sdílená stavba TI - koridor záměru",
    codeBase: "0100000367",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "543",
  },
  "SdilenaStavbaTIKoridorZameruPlocha": {
    elementName: "SdilenaStavbaTIKoridorZameruPlocha",
    nazev: "sdílená stavba TI - koridor záměru",
    codeBase: "0100000367",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "544",
  },
  "SdilenyObjektTI": {
    elementName: "SdilenyObjektTI",
    nazev: "sdílený objekt TI",
    codeBase: "0100000093",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["UmisteniObjektu","TypSdilenehoObjektuTI","StavObjektu","PopisSdilenehoObjektuTI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "94",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "SilnicniDopravaKoridorZameruLinie": {
    elementName: "SilnicniDopravaKoridorZameruLinie",
    nazev: "silniční doprava - koridor záměru",
    codeBase: "0100000339",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuSilnicniDopravyZameru"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "487",
  },
  "SilnicniDopravaKoridorZameruPlocha": {
    elementName: "SilnicniDopravaKoridorZameruPlocha",
    nazev: "silniční doprava - koridor záměru",
    codeBase: "0100000339",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuSilnicniDopravyZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "486",
  },
  "SilnicniDopravaMistoZameruBod": {
    elementName: "SilnicniDopravaMistoZameruBod",
    nazev: "silniční doprava - místo záměru",
    codeBase: "0100000340",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "488",
  },
  "SilnicniDopravaMistoZameruPlocha": {
    elementName: "SilnicniDopravaMistoZameruPlocha",
    nazev: "silniční doprava - místo záměru",
    codeBase: "0100000340",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "489",
  },
  "SkladkaOdpaduBod": {
    elementName: "SkladkaOdpaduBod",
    nazev: "skládka odpadu",
    codeBase: "0100000148",
    codeSuffix: "01",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavSkladkyOdpadu","ZpusobRekultivace","DatumRekultivace","TypOdpadu","Kapacita","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "386",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "SkladkaOdpaduPlocha": {
    elementName: "SkladkaOdpaduPlocha",
    nazev: "skládka odpadu",
    codeBase: "0100000148",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["DatumRekultivace","Kapacita","StavSkladkyOdpadu","TypOdpadu","ZpusobRekultivace"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "148",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "SklenikDefinicniBod": {
    elementName: "SklenikDefinicniBod",
    nazev: "skleník",
    codeBase: "0100000179",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "180",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "SklenikPlocha": {
    elementName: "SklenikPlocha",
    nazev: "skleník",
    codeBase: "0100000179",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "179",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "SledovanaVodniCestaLinie": {
    elementName: "SledovanaVodniCestaLinie",
    nazev: "sledovaná vodní cesta",
    codeBase: "0100000043",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","NazevSledovaneVodniCesty","ZarazeniSledovaneVodniCesty","TridaDopravneVyznamneVodniCesty","TypSledovaneVodniCesty"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "43",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "SledovanaVodniCestaPlocha": {
    elementName: "SledovanaVodniCestaPlocha",
    nazev: "sledovaná vodní cesta",
    codeBase: "0100000043",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["NazevSledovaneVodniCesty","OznaceniObjektu","TypSledovaneVodniCesty","ZarazeniSledovaneVodniCesty","TridaDopravneVyznamneVodniCesty"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "42",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "SloupTechnologickeKonstrukce": {
    elementName: "SloupTechnologickeKonstrukce",
    nazev: "sloup technologické konstrukce",
    codeBase: "0100000186",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS","TypSloupuTechnologickeKonst","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "186",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "SouhrnnaPlochaZeleznicnichDrahDefinicniBod": {
    elementName: "SouhrnnaPlochaZeleznicnichDrahDefinicniBod",
    nazev: "souhrnná plocha železničních drah",
    codeBase: "0100000312",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypUsekuZeleznicniTrate","TypPlochyZeleznice"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "312",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "SouhrnnaPlochaZeleznicnichDrahPlocha": {
    elementName: "SouhrnnaPlochaZeleznicnichDrahPlocha",
    nazev: "souhrnná plocha železničních drah",
    codeBase: "0100000312",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypUsekuZeleznicniTrate","TypPlochyZeleznice"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "445",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "SpalovnaBod": {
    elementName: "SpalovnaBod",
    nazev: "spalovna",
    codeBase: "0100000149",
    codeSuffix: "01",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Kapacita","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "387",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "SpalovnaPlocha": {
    elementName: "SpalovnaPlocha",
    nazev: "spalovna",
    codeBase: "0100000149",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Kapacita","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "149",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "SpecialniDrahaDefinicniBod": {
    elementName: "SpecialniDrahaDefinicniBod",
    nazev: "speciální dráha",
    codeBase: "0100000035",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "36",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "SpecialniDrahaPlocha": {
    elementName: "SpecialniDrahaPlocha",
    nazev: "speciální dráha",
    codeBase: "0100000035",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "35",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "StaniceElektrickeSiteBod": {
    elementName: "StaniceElektrickeSiteBod",
    nazev: "stanice elektrické sítě",
    codeBase: "0100000103",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","TypStaniceElektrickeSite","DruhStaniceElektrickeSite","StavObjektu","DruhElektrickehoProudu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "377",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "StaniceElektrickeSitePlocha": {
    elementName: "StaniceElektrickeSitePlocha",
    nazev: "stanice elektrické sítě",
    codeBase: "0100000103",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","TypStaniceElektrickeSite","DruhStaniceElektrickeSite","StavObjektu","DruhElektrickehoProudu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "103",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "StavbaProZpevneniPovrchuDefinicniBod": {
    elementName: "StavbaProZpevneniPovrchuDefinicniBod",
    nazev: "stavba pro zpevnění povrchu",
    codeBase: "0100000187",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PopisStavbyProZpevneniPovr","TypStavbyProZpevneniPovrch"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "188",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "StavbaProZpevneniPovrchuPlocha": {
    elementName: "StavbaProZpevneniPovrchuPlocha",
    nazev: "stavba pro zpevnění povrchu",
    codeBase: "0100000187",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PopisStavbyProZpevneniPovr","TypStavbyProZpevneniPovrch"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "187",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "StavebneUpraveneKorytoDefinicniBod": {
    elementName: "StavebneUpraveneKorytoDefinicniBod",
    nazev: "stavebně upravené koryto",
    codeBase: "0100000078",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "79",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "StavebneUpraveneKorytoPlocha": {
    elementName: "StavebneUpraveneKorytoPlocha",
    nazev: "stavebně upravené koryto",
    codeBase: "0100000078",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "78",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "StavebneUpravenyVjezdNaPozemek": {
    elementName: "StavebneUpravenyVjezdNaPozemek",
    nazev: "stavebně upravený vjezd na pozemek",
    codeBase: "0100000165",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrujezdnaSirka","PrujezdnaVyska","HraniceJinehoObjektu","ZpusobPorizeniZPS","PopisVjezdu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "165",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "SterkovaPrehrazkaDefinicniBod": {
    elementName: "SterkovaPrehrazkaDefinicniBod",
    nazev: "štěrková přehrážka",
    codeBase: "0100000333",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "477",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "SterkovaPrehrazkaPlocha": {
    elementName: "SterkovaPrehrazkaPlocha",
    nazev: "štěrková přehrážka",
    codeBase: "0100000333",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "476",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "StojanNabijeniVydejniStojan": {
    elementName: "StojanNabijeniVydejniStojan",
    nazev: "stojan nabíjení, výdejní stojan",
    codeBase: "0100000068",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNabijecihoVydejnihoMedia","ZpusobPorizeniZPS","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "68",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "StudnaNaVerejnemProstranstvi": {
    elementName: "StudnaNaVerejnemProstranstvi",
    nazev: "studna na veřejném prostranství",
    codeBase: "0100000084",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "84",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "StupenBod": {
    elementName: "StupenBod",
    nazev: "stupeň",
    codeBase: "0100000076",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "455",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "StupenDefinicniBod": {
    elementName: "StupenDefinicniBod",
    nazev: "stupeň",
    codeBase: "0100000076",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "77",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "StupenPlocha": {
    elementName: "StupenPlocha",
    nazev: "stupeň",
    codeBase: "0100000076",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "76",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "SuchaNadrzDefinicniBod": {
    elementName: "SuchaNadrzDefinicniBod",
    nazev: "suchá nádrž",
    codeBase: "0100000087",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "88",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "SuchaNadrzPlocha": {
    elementName: "SuchaNadrzPlocha",
    nazev: "suchá nádrž",
    codeBase: "0100000087",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "87",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "Svodidlo": {
    elementName: "Svodidlo",
    nazev: "svodidlo",
    codeBase: "0100000318",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypSvodidla","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "437",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "TechnickyKanal": {
    elementName: "TechnickyKanal",
    nazev: "technický kanál",
    codeBase: "0100000092",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["VedeniSiteVJineStavbe","TypTechnickehoKanalu","PopisKabelovoduPotrubniChra","StavObjektu","Obsazenost","TypChranenehoPrvku","TypZakresuKabelovoduChranic","UmisteniKabelovoduChranicky"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "92",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TechnologickyPortalLinie": {
    elementName: "TechnologickyPortalLinie",
    nazev: "technologický portál",
    codeBase: "0100000373",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypTechnologickeKonstrukce","SpravceDI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "700",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "TechnologickyPortalPlocha": {
    elementName: "TechnologickyPortalPlocha",
    nazev: "technologický portál",
    codeBase: "0100000373",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypTechnologickeKonstrukce","SpravceDI"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "701",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "TeplovodKoridorZameruLinie": {
    elementName: "TeplovodKoridorZameruLinie",
    nazev: "teplovod - koridor záměru",
    codeBase: "0100000362",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "533",
  },
  "TeplovodKoridorZameruPlocha": {
    elementName: "TeplovodKoridorZameruPlocha",
    nazev: "teplovod - koridor záměru",
    codeBase: "0100000362",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "532",
  },
  "TeplovodMistoZameruBod": {
    elementName: "TeplovodMistoZameruBod",
    nazev: "teplovod - místo záměru",
    codeBase: "0100000363",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypTechnologickehoObjektuTeplovodniSite","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "534",
  },
  "TeplovodMistoZameruPlocha": {
    elementName: "TeplovodMistoZameruPlocha",
    nazev: "teplovod - místo záměru",
    codeBase: "0100000363",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypTechnologickehoObjektuTeplovodniSite"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "535",
  },
  "TerasaDefinicniBod": {
    elementName: "TerasaDefinicniBod",
    nazev: "terasa",
    codeBase: "0100000175",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "176",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "TerasaPlocha": {
    elementName: "TerasaPlocha",
    nazev: "terasa",
    codeBase: "0100000175",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "175",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "TerenniHrana": {
    elementName: "TerenniHrana",
    nazev: "terénní hrana",
    codeBase: "0100000217",
    codeSuffix: "02",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Terénní útvar",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypTerenniHrany","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "217",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "TerminalKombinovaneDopravyMistoZameruBod": {
    elementName: "TerminalKombinovaneDopravyMistoZameruBod",
    nazev: "terminál kombinované dopravy - místo záměru",
    codeBase: "0100000349",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "507",
  },
  "TerminalKombinovaneDopravyMistoZameruPlocha": {
    elementName: "TerminalKombinovaneDopravyMistoZameruPlocha",
    nazev: "terminál kombinované dopravy - místo záměru",
    codeBase: "0100000349",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "506",
  },
  "TramvajovaDrahaDefinicniBod": {
    elementName: "TramvajovaDrahaDefinicniBod",
    nazev: "tramvajová dráha",
    codeBase: "0100000024",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "25",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "TramvajovaDrahaPlocha": {
    elementName: "TramvajovaDrahaPlocha",
    nazev: "tramvajová dráha",
    codeBase: "0100000024",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "24",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "TrasaProtikorozniOchrany": {
    elementName: "TrasaProtikorozniOchrany",
    nazev: "trasa protikorozní ochrany",
    codeBase: "0100000137",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PopisProtikorozniOchrany","TypPKO","TypInzenyrskeSitePKO","StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "137",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaElektrickeSite": {
    elementName: "TrasaElektrickeSite",
    nazev: "trasa elektrické sítě",
    codeBase: "0100000098",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTrasyElektrickeSite","IzolaceVenkovnihoVedeni","MaximalniNapetovaHladina","StavTrasySiteTI","MaximalniProvozniNapeti","ProvozniNapeti","PopisTrasyElektrickeSite","PocetVedeniVTrase","VedeniSiteVJineStavbe","UmisteniTrasyElektrickeSite","DruhElektrickehoProudu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "98",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaKanalizacniPripojky": {
    elementName: "TrasaKanalizacniPripojky",
    nazev: "trasa kanalizační přípojky",
    codeBase: "0100000122",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["UceloveZarazeniStokoveSite","Material","DruhStokoveSite","Dimenze","StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "122",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "TrasaMistniElektrickeSite": {
    elementName: "TrasaMistniElektrickeSite",
    nazev: "trasa místní elektrické sítě",
    codeBase: "0100000099",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","TypTrasyMistniElektrickeSite","VedeniSiteVJineStavbe","UmisteniTrasyElektrickeSite"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "99",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaOdbernehoElektrickehoZarizeni": {
    elementName: "TrasaOdbernehoElektrickehoZarizeni",
    nazev: "trasa odběrného elektrického zařízení",
    codeBase: "0100000100",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "100",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "TrasaOdbernehoPlynovehoZarizeni": {
    elementName: "TrasaOdbernehoPlynovehoZarizeni",
    nazev: "trasa odběrného plynového zařízení",
    codeBase: "0100000110",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["Dimenze","TlakovaHladinaPlynovodniSite","StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "110",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "TrasaPlynovodniPripojky": {
    elementName: "TrasaPlynovodniPripojky",
    nazev: "trasa plynovodní přípojky",
    codeBase: "0100000328",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","VedeniSiteVJineStavbe","TlakovaHladinaPlynovodniSite","Dimenze"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "466",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaPlynovodniSite": {
    elementName: "TrasaPlynovodniSite",
    nazev: "trasa plynovodní sítě",
    codeBase: "0100000109",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","TypMediaPlynovodniSite","TlakovaHladinaPlynovodniSite","Dimenze","VedeniSiteVJineStavbe","PopisTrasyPlynovodniSite","UmisteniTrasyPlynovodniSite"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "109",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaPotrubniPosty": {
    elementName: "TrasaPotrubniPosty",
    nazev: "trasa potrubní pošty",
    codeBase: "0100000133",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubní pošta",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Dimenze","StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "133",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaRadiovehoSmerovehoSpoje": {
    elementName: "TrasaRadiovehoSmerovehoSpoje",
    nazev: "trasa rádiového směrového spoje",
    codeBase: "0100000106",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "106",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaSiteEK": {
    elementName: "TrasaSiteEK",
    nazev: "trasa sítě EK",
    codeBase: "0100000105",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","MaterialTrasySiteEK","PopisTrasySiteEk","ZpusobOchranyVedeniSiteEK","UmisteniTrasySiteEk","PrehledKabeluVTrasePocetX","VyuzitiTrasySiteEk","VedeniSiteVJineStavbe","PocetVedeniVTrase","DelkaUsekuTrasyZavesKabelu","DruhTrasySiteEk"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "105",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaSiteProduktovodu": {
    elementName: "TrasaSiteProduktovodu",
    nazev: "trasa sítě produktovodu",
    codeBase: "0100000127",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","PopisTrasyProduktovodu","Dimenze","VedeniSiteVJineStavbe","UmisteniTrasyProduktovodu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "127",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaStokoveSite": {
    elementName: "TrasaStokoveSite",
    nazev: "trasa stokové sítě",
    codeBase: "0100000121",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTrasyStokoveSite","DruhStokoveSite","UceloveZarazeniStokoveSite","StavTrasySiteTI","Dimenze","Material","ICME","VedeniSiteVJineStavbe","PopisTrasyKanalizacniSite","UmisteniTrasyKanalizacniSit"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "121",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaTeplovodniSite": {
    elementName: "TrasaTeplovodniSite",
    nazev: "trasa teplovodní sítě",
    codeBase: "0100000130",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Dimenze","StavTrasySiteTI","TypTrasyTeplovodniSite","TypTeplovodniSite","VedeniSiteVJineStavbe","PopisTrasyTeplovodniSite","UmisteniTeplovodniSite","UmisteniTrasyTeplovodSite"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "130",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaTrakcnihoTrolejovehoVedeni": {
    elementName: "TrasaTrakcnihoTrolejovehoVedeni",
    nazev: "trasa trakčního trolejového vedení",
    codeBase: "0100000382",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PopisTrakcnihoVedeni","StavTrasySiteTI","ProvozniNapeti","DruhElektrickehoProuduTrakcnihoVedeni","TypDrahy"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "712",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "TrasaVodovodniPripojky": {
    elementName: "TrasaVodovodniPripojky",
    nazev: "trasa vodovodní přípojky",
    codeBase: "0100000114",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["Material","Dimenze","StavObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "114",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "TrasaVodovodniSite": {
    elementName: "TrasaVodovodniSite",
    nazev: "trasa vodovodní sítě",
    codeBase: "0100000113",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTrasyVodovodniSite","TypMediaVodovodniSite","Dimenze","Material","StavTrasySiteTI","VedeniSiteVJineStavbe","ICME","PopisTrasyVodovodniSite","UmisteniTrasyVodovodniSite"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "113",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "UdrzovanaPlochaZeleneDefinicniBod": {
    elementName: "UdrzovanaPlochaZeleneDefinicniBod",
    nazev: "udržovaná plocha zeleně",
    codeBase: "0100000215",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Udržovaná zeleň",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypUdrzovaneZelene"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "216",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "UdrzovanaPlochaZelenePlocha": {
    elementName: "UdrzovanaPlochaZelenePlocha",
    nazev: "udržovaná plocha zeleně",
    codeBase: "0100000215",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Udržovaná zeleň",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypUdrzovaneZelene"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "215",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "UlozneMistoTezebnihoOdpaduDefinicniBod": {
    elementName: "UlozneMistoTezebnihoOdpaduDefinicniBod",
    nazev: "úložné místo těžebního odpadu",
    codeBase: "0100000144",
    codeSuffix: "04",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "145",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "UlozneMistoTezebnihoOdpaduPlocha": {
    elementName: "UlozneMistoTezebnihoOdpaduPlocha",
    nazev: "úložné místo těžebního odpadu",
    codeBase: "0100000144",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "144",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VegetacniMisaDefinicniBod": {
    elementName: "VegetacniMisaDefinicniBod",
    nazev: "vegetační mísa",
    codeBase: "0100000338",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "484",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "VegetacniMisaPlocha": {
    elementName: "VegetacniMisaPlocha",
    nazev: "vegetační mísa",
    codeBase: "0100000338",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "485",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VisutaLanovaDraha": {
    elementName: "VisutaLanovaDraha",
    nazev: "visutá lanová dráha",
    codeBase: "0100000039",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "39",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VnitrniCleneniBudovStaveb": {
    elementName: "VnitrniCleneniBudovStaveb",
    nazev: "vnitřní členění budov a staveb",
    codeBase: "0100000310",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Doplňkový konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypHraniceVnitrniCleneniBu","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "310",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VnitrniCleneniDopravniPlochy": {
    elementName: "VnitrniCleneniDopravniPlochy",
    nazev: "vnitřní členění dopravní plochy",
    codeBase: "0100000323",
    codeSuffix: "02",
    kategorieObjektu: "Konstrukční prvky objektů",
    skupinaObjektu: "Doplňkový konstrukční prvek",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "450",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VodniCastPristavuBod": {
    elementName: "VodniCastPristavuBod",
    nazev: "vodní část přístavu",
    codeBase: "0100000045",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "372",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "VodniCastPristavuPlocha": {
    elementName: "VodniCastPristavuPlocha",
    nazev: "vodní část přístavu",
    codeBase: "0100000045",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "45",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "VodniDopravaKoridorZameruLinie": {
    elementName: "VodniDopravaKoridorZameruLinie",
    nazev: "vodní doprava - koridor záměru",
    codeBase: "0100000343",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "495",
  },
  "VodniDopravaKoridorZameruPlocha": {
    elementName: "VodniDopravaKoridorZameruPlocha",
    nazev: "vodní doprava - koridor záměru",
    codeBase: "0100000343",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "494",
  },
  "VodniDopravaMistoZameruBod": {
    elementName: "VodniDopravaMistoZameruBod",
    nazev: "vodní doprava - místo záměru",
    codeBase: "0100000344",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "496",
  },
  "VodniDopravaMistoZameruPlocha": {
    elementName: "VodniDopravaMistoZameruPlocha",
    nazev: "vodní doprava - místo záměru",
    codeBase: "0100000344",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "497",
  },
  "VodniTokDefinicniBod": {
    elementName: "VodniTokDefinicniBod",
    nazev: "vodní tok",
    codeBase: "0100000203",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PopisVodnihoToku","TypVodnihoToku"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "204",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "VodniTokLinie": {
    elementName: "VodniTokLinie",
    nazev: "vodní tok",
    codeBase: "0100000203",
    codeSuffix: "02",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS","HraniceJinehoObjektu","TypVodnihoToku"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "722",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VodniTokPlocha": {
    elementName: "VodniTokPlocha",
    nazev: "vodní tok",
    codeBase: "0100000203",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PopisVodnihoToku","TypVodnihoToku"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "203",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VodovodKoridorZameruLinie": {
    elementName: "VodovodKoridorZameruLinie",
    nazev: "vodovod - koridor záměru",
    codeBase: "0100000356",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "521",
  },
  "VodovodKoridorZameruPlocha": {
    elementName: "VodovodKoridorZameruPlocha",
    nazev: "vodovod - koridor záměru",
    codeBase: "0100000356",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: [],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "520",
  },
  "VodovodMistoZameruBod": {
    elementName: "VodovodMistoZameruBod",
    nazev: "vodovod - místo záměru",
    codeBase: "0100000357",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuVodovodniSiteZameru","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "522",
  },
  "VodovodMistoZameruPlocha": {
    elementName: "VodovodMistoZameruPlocha",
    nazev: "vodovod - místo záměru",
    codeBase: "0100000357",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["TypObjektuVodovodniSiteZameru"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "523",
  },
  "Vrt": {
    elementName: "Vrt",
    nazev: "vrt",
    codeBase: "0100000191",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypVrtu","ZpusobPorizeniZPS","PopisVrtu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "191",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VyrobnaElektrinyNad100kWBod": {
    elementName: "VyrobnaElektrinyNad100kWBod",
    nazev: "výrobna elektřiny nad 100 kW",
    codeBase: "0100000102",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypVyrobnyElektriny","InstalovanyVykon","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "376",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "VyrobnaElektrinyNad100kWPlocha": {
    elementName: "VyrobnaElektrinyNad100kWPlocha",
    nazev: "výrobna elektřiny nad 100 kW",
    codeBase: "0100000102",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypVyrobnyElektriny","InstalovanyVykon","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "102",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "VyskovyBodNaTerenu": {
    elementName: "VyskovyBodNaTerenu",
    nazev: "výškový bod na terénu",
    codeBase: "0100000219",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Podrobný bod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["VyskaNaTerenu","ZpusobPorizeniZPS","CisloBodu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "219",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VytahVChodniku": {
    elementName: "VytahVChodniku",
    nazev: "výtah v chodníku",
    codeBase: "0100000200",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "200",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "VzletovaPristavaciDraha": {
    elementName: "VzletovaPristavaciDraha",
    nazev: "vzletová a přistávací dráha",
    codeBase: "0100000046",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypPovrchuVzletovePristavaciDrahy"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "46",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "Zabradli": {
    elementName: "Zabradli",
    nazev: "zábradlí",
    codeBase: "0100000199",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "199",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZahradaDefinicniBod": {
    elementName: "ZahradaDefinicniBod",
    nazev: "zahrada",
    codeBase: "0100000209",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "210",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ZahradaPlocha": {
    elementName: "ZahradaPlocha",
    nazev: "zahrada",
    codeBase: "0100000209",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "209",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZahradniBazenDefinicniBod": {
    elementName: "ZahradniBazenDefinicniBod",
    nazev: "zahradní bazén",
    codeBase: "0100000181",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: [],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "182",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ZahradniBazenPlocha": {
    elementName: "ZahradniBazenPlocha",
    nazev: "zahradní bazén",
    codeBase: "0100000181",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: [],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "181",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZarizeniProtikorozniOchranyBod": {
    elementName: "ZarizeniProtikorozniOchranyBod",
    nazev: "zařízení protikorozní ochrany",
    codeBase: "0100000138",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypBodovehoZarizeniProtikor","TypInzenyrskeSitePKO","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "138",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniProtikorozniOchranyPlocha": {
    elementName: "ZarizeniProtikorozniOchranyPlocha",
    nazev: "zařízení protikorozní ochrany",
    codeBase: "0100000138",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypInzenyrskeSitePKO"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "463",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniElektrickeSite": {
    elementName: "ZarizeniElektrickeSite",
    nazev: "zařízení elektrické sítě",
    codeBase: "0100000101",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniElektrickeSite","PopisZarizeniElektrickeSite","StavObjektu","UmisteniObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "101",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniKanalizacniPripojkyBod": {
    elementName: "ZarizeniKanalizacniPripojkyBod",
    nazev: "zařízení kanalizační přípojky",
    codeBase: "0100000124",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniKanalizacniPripojky","StavObjektu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "124",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZarizeniKanalizacniPripojkyDefinicniBod": {
    elementName: "ZarizeniKanalizacniPripojkyDefinicniBod",
    nazev: "zařízení kanalizační přípojky",
    codeBase: "0100000124",
    codeSuffix: "04",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["StavObjektu","TypZarizeniKanalizacniPripojky"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "461",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ZarizeniKanalizacniPripojkyPlocha": {
    elementName: "ZarizeniKanalizacniPripojkyPlocha",
    nazev: "zařízení kanalizační přípojky",
    codeBase: "0100000124",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["StavObjektu","TypZarizeniKanalizacniPripojky"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "460",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZarizeniProLeteckyProvoz": {
    elementName: "ZarizeniProLeteckyProvoz",
    nazev: "zařízení pro letecký provoz",
    codeBase: "0100000050",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypZarizeniProLeteckyProvoz","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "50",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "ZarizeniPlynovodniSite": {
    elementName: "ZarizeniPlynovodniSite",
    nazev: "zařízení plynovodní sítě",
    codeBase: "0100000111",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniPlynovodniSite","UmisteniObjektu","StavObjektu","PopisZarizeniPlynovodniSite","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "111",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniPotrubniPosty": {
    elementName: "ZarizeniPotrubniPosty",
    nazev: "zařízení potrubní pošty",
    codeBase: "0100000134",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubní pošta",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniPotrubniPosty","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "134",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniPrivadece": {
    elementName: "ZarizeniPrivadece",
    nazev: "zařízení přivaděče",
    codeBase: "0100000119",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Přivaděč povrchových vod, náhon, odpad",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniPrivadece","StavObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "119",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniSiteEK": {
    elementName: "ZarizeniSiteEK",
    nazev: "zařízení sítě EK",
    codeBase: "0100000107",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniSiteEK","VyuzitiZarizeniEk","UmisteniObjektu","StavObjektu","PopisZarizeniSiteEk","DruhTrasySiteEk","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "107",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniSiteProduktovoduBod": {
    elementName: "ZarizeniSiteProduktovoduBod",
    nazev: "zařízení sítě produktovodu",
    codeBase: "0100000128",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniSiteProduktovodu","StavObjektu","PopisZarizeniProduktovodu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "128",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniSiteProduktovoduPlocha": {
    elementName: "ZarizeniSiteProduktovoduPlocha",
    nazev: "zařízení sítě produktovodu",
    codeBase: "0100000128",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypZarizeniSiteProduktovodu","PopisZarizeniProduktovodu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "462",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniTeplovodniSite": {
    elementName: "ZarizeniTeplovodniSite",
    nazev: "zařízení teplovodní sítě",
    codeBase: "0100000131",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniTeplovodniSite","StavObjektu","PopisZarizeniTeplovodniSite","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "131",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZarizeniVodovodniPripojkyBod": {
    elementName: "ZarizeniVodovodniPripojkyBod",
    nazev: "zařízení vodovodní přípojky",
    codeBase: "0100000116",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniVodovodniPripojky","StavObjektu"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "116",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZarizeniVodovodniPripojkyDefinicniBod": {
    elementName: "ZarizeniVodovodniPripojkyDefinicniBod",
    nazev: "zařízení vodovodní přípojky",
    codeBase: "0100000116",
    codeSuffix: "04",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["StavObjektu","TypZarizeniVodovodniPripojky"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "457",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ZarizeniVodovodniPripojkyPlocha": {
    elementName: "ZarizeniVodovodniPripojkyPlocha",
    nazev: "zařízení vodovodní přípojky",
    codeBase: "0100000116",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["StavObjektu","TypZarizeniVodovodniPripojky"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "458",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZastreseniDefinicniBod": {
    elementName: "ZastreseniDefinicniBod",
    nazev: "zastřešení",
    codeBase: "0100000315",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypZastreseni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "442",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ZastreseniPlocha": {
    elementName: "ZastreseniPlocha",
    nazev: "zastřešení",
    codeBase: "0100000315",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZastreseni"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "441",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZatrubnenyVodniTok": {
    elementName: "ZatrubnenyVodniTok",
    nazev: "zatrubněný vodní tok",
    codeBase: "0100000334",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba v korytě vodního toku",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Dimenze","Material"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "478",
    dialectAttrGroup: "SpolecneAtributyObjektuTISZ",
  },
  "ZedDefinicniBod": {
    elementName: "ZedDefinicniBod",
    nazev: "zeď",
    codeBase: "0100000168",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypZdi","VyskaOperneZdi","PopisOperneZdi"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "169",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ZedLinie": {
    elementName: "ZedLinie",
    nazev: "zeď",
    codeBase: "0100000168",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["HraniceJinehoObjektu","TypZdi","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "313",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZedPlocha": {
    elementName: "ZedPlocha",
    nazev: "zeď",
    codeBase: "0100000168",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZdi","PopisOperneZdi","VyskaOperneZdi"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "168",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "ZeleznicniPrejezd": {
    elementName: "ZeleznicniPrejezd",
    nazev: "železniční přejezd",
    codeBase: "0100000022",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PopisPrejezdu","TypPrejezdu","EvidencniKilometraz","NerozlisenaKilometraz"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "22",
    dialectAttrGroup: "SpolecneAtributyObjektuDISZ",
  },
  "ZemedelskaPlochaDefinicniBod": {
    elementName: "ZemedelskaPlochaDefinicniBod",
    nazev: "zemědělská plocha",
    codeBase: "0100000207",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypZemedelskePlochy"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "208",
    dialectAttrGroup: "SpolecneAtributyObjektuDefinicnichBoduSZ",
  },
  "ZemedelskaPlochaPlocha": {
    elementName: "ZemedelskaPlochaPlocha",
    nazev: "zemědělská plocha",
    codeBase: "0100000207",
    codeSuffix: "03",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZemedelskePlochy"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
    objektovyKod: "207",
    dialectAttrGroup: "SpolecneAtributyObjektuZPSSZ",
  },
  "Baliza": {
    elementName: "Baliza",
    nazev: "Balíza (do 1,0 m délky)",
    codeBase: "9990000447",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypBalizy","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100447",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "Brzda": {
    elementName: "Brzda",
    nazev: "Brzda",
    codeBase: "9990000461",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Brzdy",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypBrzdy"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100461",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "BudovaOstatniKresba": {
    elementName: "BudovaOstatniKresba",
    nazev: "Budova - ostatní kresba",
    codeBase: "9990000472",
    codeSuffix: "02",
    kategorieObjektu: "Budovy",
    skupinaObjektu: "Objekt budovy",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100472",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "ChybaVDatech": {
    elementName: "ChybaVDatech",
    nazev: "Chyba v datech",
    codeBase: "9990000581",
    codeSuffix: "02",
    kategorieObjektu: "Chyba v datech",
    skupinaObjektu: "Chyba v datech",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisChyby"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100581",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "CidloSnimacPrepinacObecnyMimoKoleje": {
    elementName: "CidloSnimacPrepinacObecnyMimoKoleje",
    nazev: "Čidlo, snímač, přepínač obecný, mimo koleje",
    codeBase: "9990000469",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisCidlaSnimacePrepinace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100469",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "CidloSnimacPrepinacObecnyVKoleji": {
    elementName: "CidloSnimacPrepinacObecnyVKoleji",
    nazev: "Čidlo, snímač, přepínač obecný, v koleji",
    codeBase: "9990000444",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100444",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "DetektorVolnostiPrejezdu": {
    elementName: "DetektorVolnostiPrejezdu",
    nazev: "Detektor volnosti přejezdu (bez rozlišení principu)",
    codeBase: "9990000483",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100483",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "DiagnostickySystemDetektorCPMASDEK": {
    elementName: "DiagnostickySystemDetektorCPMASDEK",
    nazev: "Diagnostický systém (detektor CPM - ASDEK)-v ose koleje",
    codeBase: "9990000449",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisDiagnostickehoSystemu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100449",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "DiagnostickySystemHrana": {
    elementName: "DiagnostickySystemHrana",
    nazev: "Diagnostický systém - hrana (např. kontrolní brána - měř.obvodem)",
    codeBase: "9990000448",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisDiagnostickehoSystemu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100448",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "DnoSachtyKolektoru": {
    elementName: "DnoSachtyKolektoru",
    nazev: "Dno šachty (kolektoru)",
    codeBase: "9990000555",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni","UzitiSachty"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100555",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "DopravniStavbaNeboPlochaOstatniKresba": {
    elementName: "DopravniStavbaNeboPlochaOstatniKresba",
    nazev: "Dopravní stavba nebo plocha - ostatní kresba",
    codeBase: "9990000475",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100475",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "DopravniZnackaObjekt": {
    elementName: "DopravniZnackaObjekt",
    nazev: "Dopravní značka, objekt",
    codeBase: "9990000544",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypDopravniZnackyObjektu","UmisteniObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100544",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "Drhlik": {
    elementName: "Drhlik",
    nazev: "Drhlík (kolík čistícího přítlaku)",
    codeBase: "9990000494",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypDrhliku","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100494",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "DvereVProtihlukoveSteneClone": {
    elementName: "DvereVProtihlukoveSteneClone",
    nazev: "Dveře (únikový východ) v protihlukové stěně, cloně",
    codeBase: "9990000533",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100533",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "ElektroMagnetickyZamek": {
    elementName: "ElektroMagnetickyZamek",
    nazev: "Elektromagnetický zámek",
    codeBase: "9990000465",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100465",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "HranaProtihlukoveStenyClonyOstatniKresba": {
    elementName: "HranaProtihlukoveStenyClonyOstatniKresba",
    nazev: "Hrana protihlukové stěny, clony - ostatní kresba",
    codeBase: "9990000532",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100532",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "HranaZumpySeptiku": {
    elementName: "HranaZumpySeptiku",
    nazev: "Hrana žumpy, septiku",
    codeBase: "9990000547",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100547",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "Hriz": {
    elementName: "Hriz",
    nazev: "Hříž",
    codeBase: "9990000514",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DelkaMostuVMetrech","HmotnostNaNapravuVTunach"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100514",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "HydrogeologickyVrt": {
    elementName: "HydrogeologickyVrt",
    nazev: "Hydrogeologický vrt",
    codeBase: "9990000592",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloVrtu","PopisVrtu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100592",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "InformacniTabuleElektronickaLinie": {
    elementName: "InformacniTabuleElektronickaLinie",
    nazev: "Informační tabule elektronická-linie (delší než 3 m)",
    codeBase: "9990000534",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Informační tabule",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100534",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "InformacniTabuleNeelektronickeBod": {
    elementName: "InformacniTabuleNeelektronickeBod",
    nazev: "Informační tabule neelektronické - bod",
    codeBase: "9990000527",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Informační tabule",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100527",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "InformacniTabuleNeelektronickeLinie": {
    elementName: "InformacniTabuleNeelektronickeLinie",
    nazev: "Informační tabule neelektronické - linie",
    codeBase: "9990000528",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Informační tabule",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100528",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "IzolovanaKolejnice": {
    elementName: "IzolovanaKolejnice",
    nazev: "Izolovaná kolejnice",
    codeBase: "9990000460",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Izolované části",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypIzolovaneKolejnice"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100460",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "IzolovaneKolejovePole": {
    elementName: "IzolovaneKolejovePole",
    nazev: "Izolované kolejové pole",
    codeBase: "9990000459",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Izolované části",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100459",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "IzolovanyStyk": {
    elementName: "IzolovanyStyk",
    nazev: "Izolovaný styk",
    codeBase: "9990000452",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Izolované části",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PolohaIzolovanehoStykuVeSmeruStaniceni","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100452",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "JednotlivyStrom": {
    elementName: "JednotlivyStrom",
    nazev: "Jednotlivý strom",
    codeBase: "9990000574",
    codeSuffix: "01",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Stromy",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100574",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "Jerab": {
    elementName: "Jerab",
    nazev: "Jeřáb",
    codeBase: "9990000518",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisPojizdnehoJerabu","NosnostProMaximalniDelkuVy","MaximalniDelkaVylozniku","TypJerabu","KonstrukceJerabu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100518",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "KabelovyVstupVystupDoSachtyKolektoru": {
    elementName: "KabelovyVstupVystupDoSachtyKolektoru",
    nazev: "Kabelový vstup/výstup do šachty(kolektoru)",
    codeBase: "9990000556",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100556",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "KDZ": {
    elementName: "KDZ",
    nazev: "KDZ",
    codeBase: "9990000453",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "KDZ",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypDilatace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100453",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "KDZZacatekPohybliveCasti": {
    elementName: "KDZZacatekPohybliveCasti",
    nazev: "KDZ - začátek pohyblivé části",
    codeBase: "9990000454",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "KDZ",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100454",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "KolejnicePojizdnehoJerabu": {
    elementName: "KolejnicePojizdnehoJerabu",
    nazev: "Kolejnice pojízdného jeřábu",
    codeBase: "9990000519",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypJerabu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100519",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "KolejnicovyMaznik": {
    elementName: "KolejnicovyMaznik",
    nazev: "Kolejnicový mazník",
    codeBase: "9990000442",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100442",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "BodKolejnicovehoPasu": {
    elementName: "BodKolejnicovehoPasu",
    nazev: "Bod kolejnicového pásu",
    codeBase: "9990000564",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Bod kolejnicového pásu",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypBoduKolejnicovehoPasu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100564",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "KonecKDZ": {
    elementName: "KonecKDZ",
    nazev: "Konec KDZ",
    codeBase: "9990000455",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "KDZ",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100455",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "KonecKolejovehoObvodu": {
    elementName: "KonecKolejovehoObvodu",
    nazev: "Konec kolejového obvodu - napájecí či přijímačový",
    codeBase: "9990000468",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisKonceKolejovehoObvodu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100468",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "KozlikovyJerab": {
    elementName: "KozlikovyJerab",
    nazev: "Kozlíkový jeřáb",
    codeBase: "9990000566",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisNosnostVTunach","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100566",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "BodKrizovatky": {
    elementName: "BodKrizovatky",
    nazev: "Bod křižovatky",
    codeBase: "9990000441",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Výhybky a křižovatky",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloKolejoveKrizovatky","TypBoduKrizovatky","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100441",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "LicSloupuStozaruPodperyLampy": {
    elementName: "LicSloupuStozaruPodperyLampy",
    nazev: "Líc objektu (sloup, lampa, zábradlí, konstrukce)",
    codeBase: "9990000531",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Zařízení staveb",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100531",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "MagnetickaZnacka": {
    elementName: "MagnetickaZnacka",
    nazev: "Magnetická značka",
    codeBase: "9990000445",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100445",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "MagnetickeInformacniBody": {
    elementName: "MagnetickeInformacniBody",
    nazev: "Magnetické informační body (MIB)",
    codeBase: "9990000446",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisMagnetickychInformacnic"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100446",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "MechanickaZavoraSamostatnyZavorovyStojan": {
    elementName: "MechanickaZavoraSamostatnyZavorovyStojan",
    nazev: "Mechanická závora, samostatný závorový stojan",
    codeBase: "9990000477",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Přejezdy",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100477",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "MelioracniPrikopZlabOstatniKresba": {
    elementName: "MelioracniPrikopZlabOstatniKresba",
    nazev: "Meliorační příkop, žlab – ostatní kresba",
    codeBase: "9990000588",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba k melioracím pozemků",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100588",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "MericKategorieHmotnosti": {
    elementName: "MericKategorieHmotnosti",
    nazev: "Měřič kategorie hmotnosti",
    codeBase: "9990000450",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100450",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "Meznik": {
    elementName: "Meznik",
    nazev: "Mezník",
    codeBase: "9990000545",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Mezník",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100545",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "MostOstatniKresba": {
    elementName: "MostOstatniKresba",
    nazev: "Most - ostatní kresba",
    codeBase: "9990000508",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100508",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "MostniSachta": {
    elementName: "MostniSachta",
    nazev: "Mostní šachta",
    codeBase: "9990000510",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100510",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "NadzemniKanalizaceMerenaObvodem": {
    elementName: "NadzemniKanalizaceMerenaObvodem",
    nazev: "Nadzemní kanalizace (např. dešťová) měřená obvodem",
    codeBase: "9990000548",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100548",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "NameznikKoncovnik": {
    elementName: "NameznikKoncovnik",
    nazev: "Námezník / koncovník",
    codeBase: "9990000491",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypNameznikuKoncovniku","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100491",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "NastupisteNastupniPlocha": {
    elementName: "NastupisteNastupniPlocha",
    nazev: "Nástupiště - nástupní plocha",
    codeBase: "9990000500",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Nástupiště",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DelkaNastupiste","TypDelkyNastupiste"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100500",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "NastupisteOstatniKresba": {
    elementName: "NastupisteOstatniKresba",
    nazev: "Nástupiště - ostatní kresba",
    codeBase: "9990000501",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Nástupiště",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100501",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "NavestHraniceIzolovanehoUseku": {
    elementName: "NavestHraniceIzolovanehoUseku",
    nazev: "Návěst hranice izolovaného úseku",
    codeBase: "9990000492",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100492",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "NavestHraniceProvozovateleDrahy": {
    elementName: "NavestHraniceProvozovateleDrahy",
    nazev: "Návěst hranice provozovatele dráhy",
    codeBase: "9990000493",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100493",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "NavestRychlostnikPredvestnik": {
    elementName: "NavestRychlostnikPredvestnik",
    nazev: "Návěst (rychlostník, předvěstník)",
    codeBase: "9990000484",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UmisteniNavestidlaTabulky","RychlostObsahNavesti","TypNavestiRychlostnikuPredv","Poradi","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100484",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "NavestidloMechanicke": {
    elementName: "NavestidloMechanicke",
    nazev: "Návěstidlo mechanické",
    codeBase: "9990000486",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypMechanickehoNavestidla","PopisMechanickehoNavestidla","UmisteniNavestidlaTabulky","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100486",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "NavestidloSvetelne": {
    elementName: "NavestidloSvetelne",
    nazev: "Návěstidlo světelné",
    codeBase: "9990000485",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypSvetelnehoNavestidla","PopisSvetelnehoNavestidla","UmisteniNavestidlaTabulky","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100485",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "NavestidloTabulka": {
    elementName: "NavestidloTabulka",
    nazev: "Návěstidlo tabulka",
    codeBase: "9990000487",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisNavestidlaTabulka","UmisteniNavestidlaTabulky","Natoceni","TypNavestidlaTabulka"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100487",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "Obrysnice": {
    elementName: "Obrysnice",
    nazev: "Obrysnice",
    codeBase: "9990000515",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100515",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "OvladaniZabezpecovacihoZarizeni": {
    elementName: "OvladaniZabezpecovacihoZarizeni",
    nazev: "Ovládání zabezpečovacího zařízení",
    codeBase: "9990000495",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Ovládání zabezpečovacího zařízení",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisOvladaniZabezpecovaciho","TypOvladaniZabezpecovacihoZ","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100495",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "Oznacnik": {
    elementName: "Oznacnik",
    nazev: "Označník (Posun zakázán)",
    codeBase: "9990000488",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100488",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "PatkaSoklOstatniKresba": {
    elementName: "PatkaSoklOstatniKresba",
    nazev: "Patka, sokl - ostatní kresba",
    codeBase: "9990000561",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100561",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "PlosinaProOsobyImobilni": {
    elementName: "PlosinaProOsobyImobilni",
    nazev: "Plošina pro osoby imobilní",
    codeBase: "9990000572",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100572",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "PodchodOstatniKresba": {
    elementName: "PodchodOstatniKresba",
    nazev: "Podchod - ostatní kresba",
    codeBase: "9990000509",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100509",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "PodperneZarizeniSZ": {
    elementName: "PodperneZarizeniSZ",
    nazev: "Podpěrné zařízení SŽ nebo jeho příslušenství",
    codeBase: "9990000586",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypPodpernehoZarizeniSZNeboJehoPrislusenstvi","OznaceniPodpernehoZarizeniSZNeboJehoPrislusenstvi","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100586",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "PohonMechanickychZavor": {
    elementName: "PohonMechanickychZavor",
    nazev: "Pohon mechanických závor",
    codeBase: "9990000479",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Přejezdy",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypPohonuMechanickychZavor","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100479",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "PortalTuneluGalerieOstatniKresba": {
    elementName: "PortalTuneluGalerieOstatniKresba",
    nazev: "Portál tunelu, galerie - ostatní kresba",
    codeBase: "9990000520",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloPortalu","EvidencniKilometraz","NerozlisenaKilometraz"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100520",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "PotrubniObjektNeurceny": {
    elementName: "PotrubniObjektNeurceny",
    nazev: "Potrubní objekt neurčený",
    codeBase: "9990000553",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubí",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100553",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "PrazcoveKotvy": {
    elementName: "PrazcoveKotvy",
    nazev: "Pražcové kotvy",
    codeBase: "9990000458",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100458",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "PredmetMalehoRozsahu": {
    elementName: "PredmetMalehoRozsahu",
    nazev: "Předmět malého rozsahu",
    codeBase: "9990000541",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Doplňkové zařízení staveb",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisPredmetuMalehoRozsahu","TypPredmetuMalehoRozsahu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100541",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "PrestavnikZavornik": {
    elementName: "PrestavnikZavornik",
    nazev: "Přestavník,závorník",
    codeBase: "9990000466",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100466",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "Presuvna": {
    elementName: "Presuvna",
    nazev: "Přesuvna",
    codeBase: "9990000513",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["HmotnostNaNapravuVTunach","DelkaMostuVMetrech","TypPresuvny"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100513",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "PrikopSeZpevnenymDnem": {
    elementName: "PrikopSeZpevnenymDnem",
    nazev: "Příkop se zpevněným dnem (žlab)",
    codeBase: "9990000558",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100558",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "PripojneMisto": {
    elementName: "PripojneMisto",
    nazev: "Přípojné místo",
    codeBase: "9990000593",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100593",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "PritokNeboOdtokPotrubiDoSachty": {
    elementName: "PritokNeboOdtokPotrubiDoSachty",
    nazev: "Přítok nebo odtok potrubí do šachty",
    codeBase: "9990000557",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubí",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100557",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "ProhlidkovaCisticiNeboOdkalovaciJamaHrana": {
    elementName: "ProhlidkovaCisticiNeboOdkalovaciJamaHrana",
    nazev: "Prohlídková, čistící nebo odkalovací jáma - hrana",
    codeBase: "9990000507",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisProhlidCisticiNeboOdkalJamy"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100507",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "PropustekOstatniKresba": {
    elementName: "PropustekOstatniKresba",
    nazev: "Propustek - ostatní kresba",
    codeBase: "9990000511",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["EvidencniKilometraz","NerozlisenaKilometraz"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100511",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "PruzkumnaSachtice": {
    elementName: "PruzkumnaSachtice",
    nazev: "Průzkumná šachtice",
    codeBase: "9990000536",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisPruzkumneSachtice","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100536",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "RampaOstatniKresba": {
    elementName: "RampaOstatniKresba",
    nazev: "Rampa - ostatní kresba",
    codeBase: "9990000563",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100563",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "RevizniSachtaTuneloveStoky": {
    elementName: "RevizniSachtaTuneloveStoky",
    nazev: "Revizní šachta tunelové stoky",
    codeBase: "9990000524",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloSachty","PopisSachty","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100524",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "RevizniSachtaTuneloveStokyHrana": {
    elementName: "RevizniSachtaTuneloveStokyHrana",
    nazev: "Revizní šachta tunelové stoky - hrana",
    codeBase: "9990000525",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisSachty","CisloSachty"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100525",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "Schodiste": {
    elementName: "Schodiste",
    nazev: "Schodiště – ostatní kresba",
    codeBase: "9990000529",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100529",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "SklepBod": {
    elementName: "SklepBod",
    nazev: "Sklep - bod",
    codeBase: "9990000582",
    codeSuffix: "01",
    kategorieObjektu: "Konsolidace dat",
    skupinaObjektu: "Sklep",
    obsahovaCast: "SKLEP" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100582",
    dialectAttrGroup: "SpolecneAtributyObjektuSKLEPSZ",
  },
  "SklepLinie": {
    elementName: "SklepLinie",
    nazev: "Sklep - linie",
    codeBase: "9990000583",
    codeSuffix: "02",
    kategorieObjektu: "Konsolidace dat",
    skupinaObjektu: "Sklep",
    obsahovaCast: "SKLEP" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100583",
    dialectAttrGroup: "SpolecneAtributyObjektuSKLEPSZ",
  },
  "SklepText": {
    elementName: "SklepText",
    nazev: "Sklep - text",
    codeBase: "9990000584",
    codeSuffix: "01",
    kategorieObjektu: "Konsolidace dat",
    skupinaObjektu: "Sklep",
    obsahovaCast: "SKLEP" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100584",
    dialectAttrGroup: "SpolecneAtributyObjektuSKLEPSZ",
  },
  "SnimacPocitaceNaprav": {
    elementName: "SnimacPocitaceNaprav",
    nazev: "Snímač počítače náprav",
    codeBase: "9990000443",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100443",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "SnimacPolohyJazyku": {
    elementName: "SnimacPolohyJazyku",
    nazev: "Snímač polohy jazyků",
    codeBase: "9990000467",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100467",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "Sonda": {
    elementName: "Sonda",
    nazev: "Sonda",
    codeBase: "9990000537",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100537",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "SouvislyPorostOstatniKresba": {
    elementName: "SouvislyPorostOstatniKresba",
    nazev: "Souvislý porost  - ostatní kresba",
    codeBase: "9990000476",
    codeSuffix: "02",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100476",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "SpecialniBod": {
    elementName: "SpecialniBod",
    nazev: "Speciální bod",
    codeBase: "9990000546",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Speciální bod",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypSpecialnihoBodu","PopisSpecialnihoBodu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100546",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "SpojkaNaHDPTrubce": {
    elementName: "SpojkaNaHDPTrubce",
    nazev: "Spojka na HDP trubce - spojka chráničky",
    codeBase: "9990000554",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100554",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "SrafovaniSkloniteTerenniPlochy": {
    elementName: "SrafovaniSkloniteTerenniPlochy",
    nazev: "Šrafování sklonité terénní plochy",
    codeBase: "9990000575",
    codeSuffix: "02",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Šrafy",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100575",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "Stanicnik": {
    elementName: "Stanicnik",
    nazev: "Staničník",
    codeBase: "9990000489",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisDruhehoKilometrickehoU","PopisStaniceni","Natoceni","TypStanicniku"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100489",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "StavbaProZpevneniPovrchuOstatniKresba": {
    elementName: "StavbaProZpevneniPovrchuOstatniKresba",
    nazev: "Stavba pro zpevnění povrchu - ostatní kresba",
    codeBase: "9990000497",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisZajisteniSkalOchranna"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100497",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "StojanNaVozoveZarazky": {
    elementName: "StojanNaVozoveZarazky",
    nazev: "Stojan na vozové zarážky",
    codeBase: "9990000470",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100470",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "Svar": {
    elementName: "Svar",
    nazev: "Svar",
    codeBase: "9990000576",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Místa na trati",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisSvaru","Natoceni","TypSvaru"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100576",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "Tocnice": {
    elementName: "Tocnice",
    nazev: "Točnice",
    codeBase: "9990000512",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["HmotnostNaNapravuVTunach","DelkaMostuVMetrech"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100512",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "TrasaDratovodu": {
    elementName: "TrasaDratovodu",
    nazev: "Trasa drátovodu",
    codeBase: "9990000150",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Drátovod",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypDratovodu","PopisTrasyDratovodu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100150",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "TrasaNeurceneKabeloveSite": {
    elementName: "TrasaNeurceneKabeloveSite",
    nazev: "Trasa neurčené kabelové sítě",
    codeBase: "9990000579",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kabel",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisTrasyNeurcenehKabeloveSite","UmisteniTrasyNeurKabSite"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100579",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "TrasaNeurcenehoTrubkovehoVedeni": {
    elementName: "TrasaNeurcenehoTrubkovehoVedeni",
    nazev: "Trasa neurčeného trubkového vedení",
    codeBase: "9990000551",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubí",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Material","PopisTrasyNeurcenehoTrubkov","Dimenze","UmisteniTrasyNeurTrubVed"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100551",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "TunelovaStoka": {
    elementName: "TunelovaStoka",
    nazev: "Tunelová stoka - hrana",
    codeBase: "9990000526",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisTuneloveStoky"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100526",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "TunelovaTroubaOstatniKresba": {
    elementName: "TunelovaTroubaOstatniKresba",
    nazev: "Tunelová trouba - ostatní kresba",
    codeBase: "9990000521",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100521",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "TunelovyPas": {
    elementName: "TunelovyPas",
    nazev: "Tunelový pás",
    codeBase: "9990000522",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100522",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "Uhelnik": {
    elementName: "Uhelnik",
    nazev: "Úhelník",
    codeBase: "9990000456",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypUhelniku"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100456",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "UstiStolyNeboUklonneJamyVstupDoPodzProstoru": {
    elementName: "UstiStolyNeboUklonneJamyVstupDoPodzProstoru",
    nazev: "Ústí štoly nebo úklonné jámy, vstup do podz. prostoru",
    codeBase: "9990000538",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100538",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "VjezdNeboVstupDoBudovy": {
    elementName: "VjezdNeboVstupDoBudovy",
    nazev: "Vjezd nebo vstup do budovy",
    codeBase: "9990000530",
    codeSuffix: "02",
    kategorieObjektu: "Budovy",
    skupinaObjektu: "Objekt budovy",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100530",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "VnejsiKonecPricnehoVarovnehoPasuNaNastupisti": {
    elementName: "VnejsiKonecPricnehoVarovnehoPasuNaNastupisti",
    nazev: "Vnější konec příčného varovného pásu na nástupišti",
    codeBase: "9990000594",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100594",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "VodniTok": {
    elementName: "VodniTok",
    nazev: "Vodní tok, plocha – osa, ostatní kresba",
    codeBase: "9990000473",
    codeSuffix: "02",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100473",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "VratekNaPosun": {
    elementName: "VratekNaPosun",
    nazev: "Vrátek na posun",
    codeBase: "9990000517",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DruhZarizeniVratku","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100517",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "VrcholSvaznehoPahrbku": {
    elementName: "VrcholSvaznehoPahrbku",
    nazev: "Vrchol svážného pahrbku",
    codeBase: "9990000463",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Místa na trati",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100463",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "VyhledavaciVodic": {
    elementName: "VyhledavaciVodic",
    nazev: "Vyhledávací vodič",
    codeBase: "9990000591",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypInzenyrskeSitePKO"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100591",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "BodVyhybky": {
    elementName: "BodVyhybky",
    nazev: "Bod výhybky",
    codeBase: "9990000440",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Výhybky a křižovatky",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni","TypBoduVyhybky"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100440",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "VyklenekVTuneluBod": {
    elementName: "VyklenekVTuneluBod",
    nazev: "Výklenek v tunelu - bod",
    codeBase: "9990000523",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100567",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "VyklenekVTuneluHrana": {
    elementName: "VyklenekVTuneluHrana",
    nazev: "Výklenek v tunelu - hrana",
    codeBase: "9990000523",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100523",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "Vykolejka": {
    elementName: "Vykolejka",
    nazev: "Výkolejka",
    codeBase: "9990000464",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Výkolejky",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypVykolejky","NavestTelesoVykolejky","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100464",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "VyrobnaElektrinyDo100kWBod": {
    elementName: "VyrobnaElektrinyDo100kWBod",
    nazev: "Výrobna elektřiny do 100 kW (včetně)",
    codeBase: "9990000590",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypVyrobnyElektriny","InstalovanyVykon","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100590",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "VyrobnaElektrinyDo100kWPlocha": {
    elementName: "VyrobnaElektrinyDo100kWPlocha",
    nazev: "Výrobna elektřiny do 100 kW (včetně)",
    codeBase: "9990000589",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypVyrobnyElektriny","InstalovanyVykon"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100589",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "VystrazneZarizeniNaNastupisti": {
    elementName: "VystrazneZarizeniNaNastupisti",
    nazev: "Výstražné zařízení na nástupišti",
    codeBase: "9990000503",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Výstražné zařízení na nástupišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypVystraznehoZarizeniNaNa","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100503",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "VystraznikPZS": {
    elementName: "VystraznikPZS",
    nazev: "Výstražník PZS",
    codeBase: "9990000478",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Přejezdy",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypVystrazniku","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100478",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "VystraznyKrizProPrejezd": {
    elementName: "VystraznyKrizProPrejezd",
    nazev: "Výstražný kříž pro přejezd",
    codeBase: "9990000481",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Přejezdy",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypVystraznehoKrizeProPrej","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100481",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "Vytah": {
    elementName: "Vytah",
    nazev: "Výtah",
    codeBase: "9990000502",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Nástupiště",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypVytahu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100502",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "ZabradliHorniHrana": {
    elementName: "ZabradliHorniHrana",
    nazev: "Zábradlí - horní hrana",
    codeBase: "9990000277",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Zařízení staveb",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100277",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "ZacatekKonecElektrizovanehoUsekuTrati": {
    elementName: "ZacatekKonecElektrizovanehoUsekuTrati",
    nazev: "Začátek, konec elektrizovaného úseku trati",
    codeBase: "9990000451",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100451",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "ZacatekJazykaVyhybky": {
    elementName: "ZacatekJazykaVyhybky",
    nazev: "Začátek jazyka výhybky",
    codeBase: "9990000587",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Výhybky a křižovatky",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloVyhybky","PolohaStavecihoZarizeni","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100587",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "ZajisteniSkalKotevniLano": {
    elementName: "ZajisteniSkalKotevniLano",
    nazev: "Zajištění skal - kotevní lano",
    codeBase: "9990000573",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100573",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "ZajisteniSkalZemniKotvaSkalniTrn": {
    elementName: "ZajisteniSkalZemniKotvaSkalniTrn",
    nazev: "Zajištění skal - zemní kotva, skalní trn apod.",
    codeBase: "9990000498",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100498",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "ZajistovaciZnacka": {
    elementName: "ZajistovaciZnacka",
    nazev: "Zajišťovací značka",
    codeBase: "9990000490",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Místa na trati",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisZajistovaciZnacky","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100490",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "ZarazedloBod": {
    elementName: "ZarazedloBod",
    nazev: "Zarážedlo - bod",
    codeBase: "9990000504",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypZarazedla","PopisZarazedla","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100504",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "Zarazedlo": {
    elementName: "Zarazedlo",
    nazev: "Zarážedlo",
    codeBase: "9990000505",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisZarazedla","TypZarazedla"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100505",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "ZarazkovaBrzda": {
    elementName: "ZarazkovaBrzda",
    nazev: "Zarážková brzda",
    codeBase: "9990000462",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Brzdy",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypZarazkoveBrzdy","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100462",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "ZarizeniDratovodu": {
    elementName: "ZarizeniDratovodu",
    nazev: "Zařízení drátovodů (bodové)",
    codeBase: "9990000151",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Drátovod",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisZarizeniDratovodu","TypZarizeniDratovodu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100151",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "ZarizeniNeurceneKabeloveSite": {
    elementName: "ZarizeniNeurceneKabeloveSite",
    nazev: "Zařízení neurčené kabelové sítě (bodové)",
    codeBase: "9990000580",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kabel",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypZarizeniNeurceneKabeloveSite","UmisteniObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100580",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "ZarizeniNeurcenehoTrubkovehoVedeni": {
    elementName: "ZarizeniNeurcenehoTrubkovehoVedeni",
    nazev: "Zařízení neurčeného trubkového vedení (bodové)",
    codeBase: "9990000552",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubí",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisZarizeniNeurcenehoTrub","TypZarizeniNeurcenehoTrubko","VyskovaKotaVstupniSachty","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100552",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "ZarizeniSiteEKSZ": {
    elementName: "ZarizeniSiteEKSZ",
    nazev: "Zařízení sítě EK SŽ",
    codeBase: "9990000585",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypZarizeniSiteEKSZ","VyuzitiZarizeniEk","UmisteniObjektu","PopisZarizeniSiteEkSZ","DruhTrasySiteEk","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100585",
    dialectAttrGroup: "SpolecneAtributyObjektuZDTSZ",
  },
  "ZastreseniOstatniKresba": {
    elementName: "ZastreseniOstatniKresba",
    nazev: "Zastřešení  - ostatní kresba",
    codeBase: "9990000474",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100474",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "ZdvihaciZarizeniVozovychSkrini": {
    elementName: "ZdvihaciZarizeniVozovychSkrini",
    nazev: "Zdvihací zařízení vozových skříní",
    codeBase: "9990000516",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100516",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "ZedOstatniKresba": {
    elementName: "ZedOstatniKresba",
    nazev: "Zeď - ostatní kresba",
    codeBase: "9990000562",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100562",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "ZeleznicniPrejezdOstatniKresba": {
    elementName: "ZeleznicniPrejezdOstatniKresba",
    nazev: "Železniční přejezd - ostatní kresba",
    codeBase: "9990000560",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Přejezdy",
    obsahovaCast: "H3D" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100560",
    dialectAttrGroup: "SpolecneAtributyObjektuH3DSZ",
  },
  "ZmenaUsekoveVlastnostiKoleje": {
    elementName: "ZmenaUsekoveVlastnostiKoleje",
    nazev: "Změna úsekové vlastnosti koleje (pražců i typu kolejnice)",
    codeBase: "9990000565",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisZmenyUsekoveVlastnosti","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100565",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "ZridloPramenPrirLecivyZdroj": {
    elementName: "ZridloPramenPrirLecivyZdroj",
    nazev: "Zřídlo,pramen,přír.léčivý zdroj",
    codeBase: "9990000539",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Odběr, jímání vody",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["PopisZdroje","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100539",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "ZtuzujiciKolejnice": {
    elementName: "ZtuzujiciKolejnice",
    nazev: "Ztužující kolejnice",
    codeBase: "9990000457",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: [],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100457",
    dialectAttrGroup: "SpolecneAtributyObjektuZDDSZ",
  },
  "ZvlastniPlochaObrys": {
    elementName: "ZvlastniPlochaObrys",
    nazev: "Zvláštní plocha (zábrany, absorbér) - obrys",
    codeBase: "9990000559",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypZvlastniPlochy"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100559",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
  "ZvlastniPlochaLinieVOseKoleje": {
    elementName: "ZvlastniPlochaLinieVOseKoleje",
    nazev: "Zvláštní plocha - linie v ose koleje",
    codeBase: "9990000506",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení spodku",
    obsahovaCast: "ODSZ" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["TypZvlastniPlochyLinieVOs"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
    objektovyKod: "100506",
    dialectAttrGroup: "SpolecneAtributyObjektuODSZSZ",
  },
};

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
