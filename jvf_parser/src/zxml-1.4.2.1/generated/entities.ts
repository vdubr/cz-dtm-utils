// Auto-generated from ŽXML 1.4.2.1 XSD — DO NOT EDIT
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
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface BPPodzemnihoZasobnikuPlynuAttrs {
  PrvekM20ZKonsolidace?: number;
  TypPodzemnihoZasobnikuPlynu?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface BPZarizeniPKOAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPDrazniStavbyAttrs {
  IDObjektuDrazniStavby?: string;
  TypOPDrazniStavby?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPElektrickeSiteAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPJadernehoZarizeniAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPKolektoruKabelovoduAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPLeteckychZabezpecovacichZarizeniAttrs {
  TypOPLeteckychZabezpecovacichZarizeni?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPLetisteAttrs {
  TypOPLetiste?: number;
  IDObjektuLetiste?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPObjektuKanalizaceAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPObjektuVodovoduAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPPlynovodniSiteAttrs {
  SpravceTi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPPodzemnihoZasobnikuPlynuAttrs {
  PrvekM20ZKonsolidace?: number;
  TypPodzemnihoZasobnikuPlynu?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface OPPozemniKomunikaceAttrs {
  TypOPPozemniKomunikace?: number;
  IDObjektuSilnicniStavby?: string;
  CisloETahu?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPSiteEKAttrs {
  TypOPSiteEK?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPSiteProduktovoduAttrs {
  TypOPSiteProduktovodu?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPStaniceElektrickeSiteAttrs {
  KonsolidacniText?: string;
  TypStaniceElektrickeSite?: number;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPStavbyProVodniDopravuAttrs {
  IDObjektuStavbyProVodniDopravu?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPTeplovodniSiteAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPVodnihoDilaIAIIKategorieHlediskaTBDAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPVyrobnyElektrinyAttrs {
  TypVyrobnyElektriny?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPZarizeniPKOAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface OPZarizeniOdpadovehoHospodarstviAttrs {
  TypOPZarizeniOdpadovehoHospodarstvi?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface TechnologickyObjektPlynovodniSiteBodAttrs {
  TlakovaHladinaPlynovodniSite?: number;
  KonsolidacniText?: string;
  TypTechnologickehoObjektuPlynovodniSite?: number;
  SpravceTi?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TechnologickyObjektPlynovodniSitePlochaAttrs {
  TlakovaHladinaPlynovodniSite?: number;
  TypTechnologickehoObjektuPlynovodniSite?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  SpravceTINazev?: string;
  SpravceTiSz?: number;
  StavObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TechnologickyObjektSiteEKBodAttrs {
  SpravceTi?: number;
  KonsolidacniText?: string;
  TypTechnologickehoObjektuSiteEK?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TechnologickyObjektSiteEKPlochaAttrs {
  SpravceTINazev?: string;
  KonsolidacniText?: string;
  SpravceTi?: number;
  TypTechnologickehoObjektuSiteEK?: number;
  StavObjektu?: number;
  SpravceTiSz?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TechnologickyObjektSiteProduktovoduBodAttrs {
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TechnologickyObjektSiteProduktovoduPlochaAttrs {
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TechnologickyObjektTeplovodniSiteBodAttrs {
  TypTechnologickehoObjektuTeplovodniSite?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TechnologickyObjektTeplovodniSitePlochaAttrs {
  TypTechnologickehoObjektuTeplovodniSite?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface BudovaDefinicniBodAttrs {
  KonsolidacniText?: string;
  PopisBudovy?: string;
  TypBudovy?: number;
  UcelBudovy?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface BudovaPlochaAttrs {
  UcelBudovy?: number;
  PopisBudovy?: string;
  TypBudovy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface CeloPropustkuDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  NerozlisenaKilometraz?: string;
  PopisPropustku?: string;
  EvidencniKilometraz?: string;
}

export interface CeloPropustkuPlochaAttrs {
  EvidencniKilometraz?: string;
  NerozlisenaKilometraz?: string;
  PopisPropustku?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ChodnikDefinicniBodAttrs {
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ChodnikPlochaAttrs {
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface CyklistickaDopravaKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface CyklistickaDopravaKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface CyklistickaDopravaMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface CyklistickaDopravaMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface CyklostezkaDefinicniBodAttrs {
  OznaceniCyklostezky?: string;
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface CyklostezkaPlochaAttrs {
  PrevazujiciPovrch?: number;
  OznaceniCyklostezky?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DeliciPasDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DeliciPasPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DopravneVyznamneMistoDrazeBodAttrs {
  TypDopravneVyznamnehoMistaDraze?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
  PopisZeleznicniStaniceNebo?: string;
}

export interface DopravneVyznamneMistoDrazePlochaAttrs {
  TypDopravneVyznamnehoMistaDraze?: number;
  KonsolidacniText?: string;
  PopisZeleznicniStaniceNebo?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DopravniOstruvekDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DopravniOstruvekPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DopravniUzelSilnicniSiteAttrs {
  CisloUzlu?: string;
  CislaKrizujicichKomunikaci?: string;
  KonsolidacniText?: string;
  TypUzlu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DrazniDopravaKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypDrahy?: number;
  KategorieZeleznicniTrate?: number;
  TypZeleznicniTrate?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface DrazniDopravaKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypDrahy?: number;
  KategorieZeleznicniTrate?: number;
  TypZeleznicniTrate?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface DrazniDopravaMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypDrahy?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface DrazniDopravaMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypDrahy?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface DrobnaKulturniStavbaBodAttrs {
  TypDrobneKulturniStavby?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface DrobnaKulturniStavbaDefinicniBodAttrs {
  TypDrobneKulturniStavby?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DrobnaKulturniStavbaPlochaAttrs {
  TypDrobneKulturniStavby?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DrobnaSakralniStavbaBodAttrs {
  KonsolidacniText?: string;
  TypDrobneSakralniStavby?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface DrobnaSakralniStavbaDefinicniBodAttrs {
  TypDrobneSakralniStavby?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DrobnaSakralniStavbaPlochaAttrs {
  KonsolidacniText?: string;
  TypDrobneSakralniStavby?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DulLomDefinicniBodAttrs {
  NazevDoluPopis?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DulLomPlochaAttrs {
  NazevDoluPopis?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DvurNadvoriDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface DvurNadvoriPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ElektrickaSitKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  MaximalniNapetovaHladina?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ElektrickaSitKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  MaximalniNapetovaHladina?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ElektrickaSitMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuElektrickeSiteZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface ElektrickaSitMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuElektrickeSiteZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ElektronickaKomunikaceKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ElektronickaKomunikaceKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ElektronickaKomunikaceMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface ElektronickaKomunikaceMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface HeliportBodAttrs {
  OznaceniObjektu?: string;
  OznaceniHeliportu?: string;
  UmisteniHeliportu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HeliportPlochaAttrs {
  OznaceniHeliportu?: string;
  UmisteniHeliportu?: number;
  OznaceniObjektu?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HospodarskyNevyuzivanaPlochaDefinicniBodAttrs {
  TypHospodarskyNevyuzivanePl?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HospodarskyNevyuzivanaPlochaPlochaAttrs {
  TypHospodarskyNevyuzivanePl?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HraniceBudovyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HraniceDopravniStavbyPlochyAttrs {
  TypDopravniStavbyNeboPlochy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HraniceOstatniPlochyAttrs {
  TypOstatniPlochy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HranicePodzemnihoObjektuZPSAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HranicePrirodnihoPoloprirodnihoObjektuAttrs {
  TypPrirodnihoPoloprirodnihoObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HraniceSchodisteAttrs {
  DruhSchodiste?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HraniceStavbyAttrs {
  TypStavby?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HraniceUdrzovaneZeleneAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HraniceVodnihoDilaAttrs {
  TypVodnihoDila?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HraniceZarizeniKanalizacniPripojkyAttrs {
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface HraniceZarizeniVodovodniPripojkyAttrs {
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface HraniceZdiAttrs {
  TypZdi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HrazDefinicniBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface HrazPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface HrbitovDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HrbitovPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HristeDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface HristePlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface IdentickyBodAttrs {
  CisloBodu?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface JaderneZarizeniBodAttrs {
  TypJadernehoZarizeni?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface JaderneZarizeniPlochaAttrs {
  TypJadernehoZarizeni?: number;
  SpravceTINazev?: string;
  KonsolidacniText?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface JezDefinicniBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface JezPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface JezeroDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  PopisJezera?: string;
}

export interface JezeroPlochaAttrs {
  PopisJezera?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface JinaTechnologickaStavbaTIAttrs {
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTi?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface JineDulniDiloStavbaDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface JineDulniDiloStavbaPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface JineZarizeniOdstranovaniVyuzivaniSberOdpaduBodAttrs {
  SpravceTi?: number;
  TypZarizeniOdstranovaniOdpadu?: number;
  PovoleniNakladaniNebezpecnymOdpadem?: number;
  Kapacita?: number;
  SpravceTiSz?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlochaAttrs {
  SpravceTINazev?: string;
  SpravceTi?: number;
  TypZarizeniOdstranovaniOdpadu?: number;
  PovoleniNakladaniNebezpecnymOdpadem?: number;
  Kapacita?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface JineZarizeniStavebTIAttrs {
  UmisteniObjektu?: number;
  SpravceTi?: number;
  TypJinehoZarizeniStavebTI?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  PopisJinehoZarizStavebTi?: string;
  Natoceni?: number;
}

export interface KanalizaceKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface KanalizaceKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface KanalizaceMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuStokoveSiteZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface KanalizaceMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuStokoveSiteZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface KolektorAttrs {
  TypKolektoru?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTi?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface KominDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface KominPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface LesDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface LesPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface LeteckaDopravaKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface LeteckaDopravaKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface LeteckaDopravaMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface LeteckaDopravaMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface LeteckaStavbaBodAttrs {
  OznaceniObjektu?: string;
  TypLeteckeStavby?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface LeteckaStavbaPlochaAttrs {
  OznaceniObjektu?: string;
  TypLeteckeStavby?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface LetisteAttrs {
  DruhLetiste?: number;
  OznaceniLetiste?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ManipulacniPlochaDefinicniBodAttrs {
  PrevazujiciPovrch?: number;
  TypManipulacniPlochy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  PopisManipulacniPlochy?: string;
}

export interface ManipulacniPlochaPlochaAttrs {
  PrevazujiciPovrch?: number;
  PopisManipulacniPlochy?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  TypManipulacniPlochy?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface MelioracniPrikopZlabDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface MelioracniPrikopZlabPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface MelioracniSachtaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface MostniVahaDefinicniBodAttrs {
  KonsolidacniText?: string;
  Vazivost?: number;
  EvidencniKilometraz?: string;
  NerozlisenaKilometraz?: string;
  TypVahy?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface MostniVahaPlochaAttrs {
  KonsolidacniText?: string;
  Vazivost?: number;
  EvidencniKilometraz?: string;
  NerozlisenaKilometraz?: string;
  TypVahy?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface NadrzBezVzdouvacihoObjektuDefinicniBodAttrs {
  PrvekM20ZKonsolidace?: number;
  TypNadrzeBezVzdouvacihoObjektu?: number;
  KonsolidacniText?: string;
  PopisVodniNadrze?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface NadrzBezVzdouvacihoObjektuPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  TypNadrzeBezVzdouvacihoObjektu?: number;
  KonsolidacniText?: string;
  PopisVodniNadrze?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface NadrzZdrzSeVzdouvacimObjektemDefinicniBodAttrs {
  TypNadrzeZdrzeSeVzdouvacimObjektem?: number;
  KonsolidacniText?: string;
  PopisVodniNadrze?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface NadrzZdrzSeVzdouvacimObjektemPlochaAttrs {
  TypNadrzeZdrzeSeVzdouvacimObjektem?: number;
  KonsolidacniText?: string;
  PopisVodniNadrze?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface NajezdDefinicniBodAttrs {
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface NajezdPlochaAttrs {
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface NastupisteDefinicniBodAttrs {
  TypNastupiste?: number;
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface NastupistePlochaAttrs {
  TypNastupiste?: number;
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface NeidentifikovanyObjektAttrs {
  TypNeidentLiniovyObjekt?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface NosicTechnickehoZarizeniAttrs {
  TypNosiceTechnickehoZarizeni?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface ObjektOdvodneniStavbyBodAttrs {
  PrvekM20ZKonsolidace?: number;
  TypObjektuOdvodneniStavby?: number;
  PopisZarizeniKanalizacniSit?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  UmisteniObjektu?: number;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  Natoceni?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ObjektOdvodneniStavbyLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  TypObjektuOdvodneniStavby?: number;
  PopisZarizeniKanalizacniSit?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  UmisteniObjektu?: number;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ObjektOdvodneniStavbyPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  TypObjektuOdvodneniStavby?: number;
  PopisZarizeniKanalizacniSit?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  UmisteniObjektu?: number;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ObjektStokoveSiteBodAttrs {
  PrvekM20ZKonsolidace?: number;
  ICME?: string;
  StavObjektu?: number;
  TypObjektuStokoveSite?: number;
  PopisZarizeniKanalizacniSit?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  UmisteniObjektu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  Natoceni?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ObjektStokoveSitePlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  ICME?: string;
  StavObjektu?: number;
  TypObjektuStokoveSite?: number;
  PopisZarizeniKanalizacniSit?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  UmisteniObjektu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ObjektVodovodniSiteBodAttrs {
  StavObjektu?: number;
  TypObjektuVodovodniSite?: number;
  TypMediaVodovodniSite?: number;
  SpravceTi?: number;
  PopisZarizeniVodovodniSite?: string;
  SpravceTINazev?: string;
  KonsolidacniText?: string;
  ICME?: string;
  SpravceTiSz?: number;
  UmisteniObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ObjektVodovodniSitePlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  StavObjektu?: number;
  TypObjektuVodovodniSite?: number;
  TypMediaVodovodniSite?: number;
  SpravceTi?: number;
  PopisZarizeniVodovodniSite?: string;
  SpravceTINazev?: string;
  KonsolidacniText?: string;
  ICME?: string;
  SpravceTiSz?: number;
  UmisteniObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ObjektZarizeniOchranaPredPovodnemiBodAttrs {
  TypObjektuZarizeniOchranaPredPovodnemi?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ObjektZarizeniOchranaPredPovodnemiLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  TypObjektuZarizeniOchranaPredPovodnemi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ObvodDrahyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ObvodMostuAttrs {
  NerozlisenaKilometraz?: string;
  OznaceniKomunikaceTrate?: string;
  PopisMostu?: string;
  EvidencniKilometraz?: string;
  TypMostu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ObvodPozemniKomunikaceAttrs {
  OznaceniKomunikace?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OchrannaSachtaVrtuAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface OdkalisteBodAttrs {
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OdkalistePlochaAttrs {
  SpravceTINazev?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface OdpadoveHospodarstviZamerBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuOdpadovehoHospodarstviZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface OdpadoveHospodarstviZamerLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuOdpadovehoHospodarstviZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface OdpadoveHospodarstviZamerPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuOdpadovehoHospodarstviZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface OrientacniSloupekTIAttrs {
  SpravceTINazev?: string;
  TypInzenyrskeSite?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  TypOrientacnihoSloupkuTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface OsaKolejePozemniLanoveDrahyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OsaKolejeSpecialniDrahyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OsaKolejeTramvajoveDrahyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OsaKolejeZeleznicniTrateAttrs {
  Splitka?: number;
  PopisKoleje?: string;
  RokGeodetickehoPorizeni?: number;
  RozchodKoleji?: number;
  KonsolidacniText?: string;
  TypKoleje?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  SpravceDI?: number;
}

export interface OsaMelioracnihoPrikopuZlabuDrenuAttrs {
  RokVystavby?: number;
  Material?: string;
  DruhMelioracnichOpatreni?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OsaPozemniKomunikaceAttrs {
  PocetJizdnichPruhu?: number;
  CisloETahu?: string;
  PrevazujiciPovrch?: number;
  KategoriePozemniKomunikace?: number;
  KonsolidacniText?: string;
  TypUsekuPozemniKomunikace?: number;
  OznaceniKomunikace?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OsaPozemniLanoveDrahyAttrs {
  DruhDopravyLanoveDrahy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OsaProtipovodnoveZabranyAttrs {
  PrvekM20ZKonsolidace?: number;
  TypProtipovodnoveZabrany?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PopisProtipovodnoveZabrany?: string;
  ZdrojDatTI?: number;
}

export interface OsaSpecialniDrahyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OsaTramvajoveDrahyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OsaZeleznicniTrateAttrs {
  PocetKoleji?: number;
  ElektrizaceZeleznicniTrate?: number;
  KategorieZeleznicniTrate?: number;
  TypUsekuZeleznicniTrate?: number;
  TypZeleznicniTrate?: number;
  OznaceniTrate?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OstatniZastresenaStavbaDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface OstatniZastresenaStavbaPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ParkovisteOdstavnaPlochaDefinicniBodAttrs {
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ParkovisteOdstavnaPlochaPlochaAttrs {
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PatkaDeskaMonolitPilirDefinicniBodAttrs {
  TypPatkyDeskyMonolituPilir?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PatkaDeskaMonolitPilirPlochaAttrs {
  TypPatkyDeskyMonolituPilir?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PlavebniKomoraBodAttrs {
  KonsolidacniText?: string;
  OznaceniObjektu?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PlavebniKomoraPlochaAttrs {
  KonsolidacniText?: string;
  OznaceniObjektu?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PlochaMostniKonstrukceDefinicniBodAttrs {
  EvidencniKilometraz?: string;
  TypMostu?: number;
  OznaceniKomunikaceTrate?: string;
  PopisMostu?: string;
  KonsolidacniText?: string;
  NerozlisenaKilometraz?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PlochaMostniKonstrukcePlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  TypMostu?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  NerozlisenaKilometraz?: string;
  PopisMostu?: string;
  PrvekM20ZKonsolidace?: number;
  OznaceniKomunikaceTrate?: string;
  EvidencniKilometraz?: string;
}

export interface PlochaRekultivaceDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PlochaRekultivacePlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PlotAttrs {
  DruhPlotu?: number;
  HraniceJinehoObjektu?: boolean;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PlynovodKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TlakovaHladinaPlynovodniSite?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface PlynovodKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TlakovaHladinaPlynovodniSite?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface PlynovodMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuPlynovodniSiteZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface PlynovodMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuPlynovodniSiteZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface PodezdivkaDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PodezdivkaPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PodperneZarizeniAttrs {
  TypPodpernehoZarizeni?: number;
  TypSloupu?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  CisloTrakcniPodperyKotvyKo?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
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
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface PodzemniObjektZPSDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PodzemniObjektZPSPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PortalPodchoduDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PortalPodchoduPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PortalTuneluDefinicniBodAttrs {
  EvidencniCisloTunelu?: string;
  EvidencniKilometraz?: string;
  CisloPortalu?: string;
  KonsolidacniText?: string;
  NerozlisenaKilometraz?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PortalTuneluPlochaAttrs {
  CisloPortalu?: string;
  EvidencniCisloTunelu?: string;
  EvidencniKilometraz?: string;
  KonsolidacniText?: string;
  NerozlisenaKilometraz?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PovrchovyZnakTIAttrs {
  SpravceTi?: number;
  SpravceTINazev?: string;
  TypPovrchovehoZnakuTI?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  VyskovaKotaVstupniSachty?: string;
  PopisPovrchovehoZnakuTi?: string;
  Natoceni?: number;
}

export interface PozemniCastPristavuBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  OznaceniObjektu?: string;
  TypPristavu?: number;
  OchrannaFunkce?: boolean;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  Natoceni?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface PozemniCastPristavuPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  OznaceniObjektu?: string;
  TypPristavu?: number;
  OchrannaFunkce?: boolean;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface PozemniLanovaDrahaDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PozemniLanovaDrahaPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PridruzenaPlochaPozemniKomunikaceDefinicniBodAttrs {
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PridruzenaPlochaPozemniKomunikacePlochaAttrs {
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PrikopNasepZarezDopravniStavbyDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  TypPrikopuNasepuZarezuDopr?: number;
  PrvekM20ZKonsolidace?: number;
  PopisPrikopuNasepuZarezuDo?: string;
}

export interface PrikopNasepZarezDopravniStavbyPlochaAttrs {
  PopisPrikopuNasepuZarezuDo?: string;
  KonsolidacniText?: string;
  TypPrikopuNasepuZarezuDopr?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PrivadecNahonOdpadLinieAttrs {
  Dimenze?: number;
  Material?: string;
  TypPrivadece?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface PrivadecNahonOdpadPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  TypPrivadece?: number;
  Dimenze?: number;
  Material?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface PrivadecPovrchovychVodKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface PrivadecPovrchovychVodKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ProduktovodKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ProduktovodKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ProduktovodMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface ProduktovodMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ProtihlukovaStenaAttrs {
  HraniceJinehoObjektu?: boolean;
  TypProtihlukoveSteny?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ProtipovodnovaZabranaDefinicniBodAttrs {
  TypProtipovodnoveZabrany?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  PopisProtipovodnoveZabrany?: string;
}

export interface ProtipovodnovaZabranaLinieAttrs {
  TypProtipovodnoveZabrany?: number;
  HraniceJinehoObjektu?: boolean;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ProtipovodnovaZabranaPlochaAttrs {
  KonsolidacniText?: string;
  TypProtipovodnoveZabrany?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  PopisProtipovodnoveZabrany?: string;
}

export interface ProtipovodnoveOpatreniKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ProtipovodnoveOpatreniKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface ProvozniPlochaPodchoduDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  TypPodchodu?: number;
  PopisPodchodu?: string;
  PrvekM20ZKonsolidace?: number;
  NerozlisenaKilometraz?: string;
  EvidencniKilometraz?: string;
}

export interface ProvozniPlochaPodchoduPlochaAttrs {
  TypPodchodu?: number;
  EvidencniKilometraz?: string;
  NerozlisenaKilometraz?: string;
  PopisPodchodu?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ProvozniPlochaPozemniKomunikaceDefinicniBodAttrs {
  PrevazujiciPovrch?: number;
  KategoriePozemniKomunikace?: number;
  KonsolidacniText?: string;
  TypPozemniKomunikace?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ProvozniPlochaPozemniKomunikacePlochaAttrs {
  KategoriePozemniKomunikace?: number;
  PrevazujiciPovrch?: number;
  KonsolidacniText?: string;
  TypPozemniKomunikace?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ProvozniPlochaTuneluDefinicniBodAttrs {
  TypTunelu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  NerozlisenaKilometraz?: string;
  PopisTunelu?: string;
  PrvekM20ZKonsolidace?: number;
  EvidencniKilometraz?: string;
  EvidencniCisloTunelu?: string;
}

export interface ProvozniPlochaTuneluPlochaAttrs {
  EvidencniKilometraz?: string;
  NerozlisenaKilometraz?: string;
  TypTunelu?: number;
  EvidencniCisloTunelu?: string;
  KonsolidacniText?: string;
  PopisTunelu?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ProvozniProstorElektrickeSiteAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface PrubehJineTechnologickeStavbyTIAttrs {
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTi?: number;
  SpravceTINazev?: string;
  TypJineTechnologickeStavby?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  PopisPrubehuJineTStavby?: string;
}

export interface PrubehPropustkuAttrs {
  EvidencniKilometraz?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Prubeh?: number;
}

export interface PrubehTechnologickeKonstrukceAttrs {
  TypTechnologickeKonstrukce?: number;
  HraniceJinehoObjektu?: boolean;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface RampaDefinicniBodAttrs {
  RelatVyskaRampyKTemKolej?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  MaterialRampy?: number;
}

export interface RampaPlochaAttrs {
  RelatVyskaRampyKTemKolej?: number;
  MaterialRampy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SchodisteDefinicniBodAttrs {
  DruhSchodiste?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  TypSchodiste?: number;
  Konstrukce?: number;
}

export interface SchodistePlochaAttrs {
  TypSchodiste?: number;
  DruhSchodiste?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Konstrukce?: number;
}

export interface SdilenaStavbaTIKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface SdilenaStavbaTIKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface SdilenyObjektTIAttrs {
  KonsolidacniText?: string;
  SpravceTi?: number;
  SpravceTINazev?: string;
  UmisteniObjektu?: number;
  TypSdilenehoObjektuTI?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  PopisSdilenehoObjektuTI?: string;
  Natoceni?: number;
}

export interface SilnicniDopravaKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuSilnicniDopravyZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface SilnicniDopravaKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuSilnicniDopravyZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface SilnicniDopravaMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface SilnicniDopravaMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface SkladkaOdpaduBodAttrs {
  SpravceTi?: number;
  StavSkladkyOdpadu?: number;
  ZpusobRekultivace?: string;
  DatumRekultivace?: string;
  TypOdpadu?: number;
  Kapacita?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SkladkaOdpaduPlochaAttrs {
  SpravceTi?: number;
  DatumRekultivace?: string;
  Kapacita?: number;
  StavSkladkyOdpadu?: number;
  TypOdpadu?: number;
  ZpusobRekultivace?: string;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface SklenikDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SklenikPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SledovanaVodniCestaLinieAttrs {
  OznaceniObjektu?: string;
  NazevSledovaneVodniCesty?: string;
  ZarazeniSledovaneVodniCesty?: number;
  TridaDopravneVyznamneVodniCesty?: number;
  TypSledovaneVodniCesty?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SledovanaVodniCestaPlochaAttrs {
  NazevSledovaneVodniCesty?: string;
  OznaceniObjektu?: string;
  KonsolidacniText?: string;
  TypSledovaneVodniCesty?: number;
  ZarazeniSledovaneVodniCesty?: number;
  TridaDopravneVyznamneVodniCesty?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SloupTechnologickeKonstrukceAttrs {
  TypSloupuTechnologickeKonst?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface SouhrnnaPlochaZeleznicnichDrahDefinicniBodAttrs {
  TypUsekuZeleznicniTrate?: number;
  TypPlochyZeleznice?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SouhrnnaPlochaZeleznicnichDrahPlochaAttrs {
  TypUsekuZeleznicniTrate?: number;
  TypPlochyZeleznice?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SpalovnaBodAttrs {
  SpravceTi?: number;
  Kapacita?: number;
  SpravceTiSz?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SpalovnaPlochaAttrs {
  SpravceTINazev?: string;
  SpravceTi?: number;
  Kapacita?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  StavObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface SpecialniDrahaDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SpecialniDrahaPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface StaniceElektrickeSiteBodAttrs {
  SpravceTi?: number;
  MaximalniNapetovaHladina?: number;
  MaximalniProvozniNapeti?: number;
  ProvozniNapeti?: string;
  TypStaniceElektrickeSite?: number;
  DruhStaniceElektrickeSite?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface StaniceElektrickeSitePlochaAttrs {
  MaximalniNapetovaHladina?: number;
  MaximalniProvozniNapeti?: number;
  ProvozniNapeti?: string;
  TypStaniceElektrickeSite?: number;
  DruhStaniceElektrickeSite?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface StavbaProZpevneniPovrchuDefinicniBodAttrs {
  PopisStavbyProZpevneniPovr?: string;
  TypStavbyProZpevneniPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface StavbaProZpevneniPovrchuPlochaAttrs {
  PopisStavbyProZpevneniPovr?: string;
  TypStavbyProZpevneniPovrch?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface StavebneUpraveneKorytoDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface StavebneUpraveneKorytoPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface StavebneUpravenyVjezdNaPozemekAttrs {
  PrujezdnaSirka?: number;
  PrujezdnaVyska?: number;
  HraniceJinehoObjektu?: boolean;
  PopisVjezdu?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SterkovaPrehrazkaDefinicniBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface SterkovaPrehrazkaPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface StojanNabijeniVydejniStojanAttrs {
  TypNabijecihoVydejnihoMedia?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  UmisteniObjektu?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface StudnaNaVerejnemProstranstviAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface StupenBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface StupenDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface StupenPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SuchaNadrzDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SuchaNadrzPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SvodidloAttrs {
  TypSvodidla?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TechnickyKanalAttrs {
  TypTechnickehoKanalu?: number;
  PopisKabelovoduPotrubniChra?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTINazev?: string;
  StavObjektu?: number;
  Obsazenost?: number;
  SpravceTiSz?: number;
  TypChranenehoPrvku?: number;
  TypZakresuKabelovoduChranic?: number;
  UmisteniKabelovoduChranicky?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TeplovodKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface TeplovodKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface TeplovodMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypTechnologickehoObjektuTeplovodniSite?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface TeplovodMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypTechnologickehoObjektuTeplovodniSite?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface TerasaDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TerasaPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TerenniHranaAttrs {
  TypTerenniHrany?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TerminalKombinovaneDopravyMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface TerminalKombinovaneDopravyMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface TramvajovaDrahaDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TramvajovaDrahaPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TrasaProtikorozniOchranyAttrs {
  PopisProtikorozniOchrany?: string;
  SpravceTi?: number;
  TypPKO?: number;
  TypInzenyrskeSitePKO?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaElektrickeSiteAttrs {
  TypTrasyElektrickeSite?: number;
  IzolaceVenkovnihoVedeni?: number;
  MaximalniNapetovaHladina?: number;
  StavTrasySiteTI?: number;
  SpravceTi?: number;
  MaximalniProvozniNapeti?: number;
  ProvozniNapeti?: string;
  KonsolidacniText?: string;
  PopisTrasyElektrickeSite?: string;
  PocetVedeniVTrase?: number;
  VedeniSiteVJineStavbe?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  UmisteniTrasyElektrickeSite?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaKanalizacniPripojkyAttrs {
  UceloveZarazeniStokoveSite?: number;
  Material?: string;
  DruhStokoveSite?: number;
  Dimenze?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface TrasaMistniElektrickeSiteAttrs {
  StavTrasySiteTI?: number;
  TypTrasyMistniElektrickeSite?: number;
  KonsolidacniText?: string;
  SpravceTINazev?: string;
  VedeniSiteVJineStavbe?: number;
  SpravceTi?: number;
  SpravceTiSz?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  UmisteniTrasyElektrickeSite?: number;
  ZdrojDatTI?: number;
}

export interface TrasaOdbernehoElektrickehoZarizeniAttrs {
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface TrasaOdbernehoPlynovehoZarizeniAttrs {
  Dimenze?: number;
  TlakovaHladinaPlynovodniSite?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface TrasaPlynovodniPripojkyAttrs {
  PrvekM20ZKonsolidace?: number;
  StavTrasySiteTI?: number;
  VedeniSiteVJineStavbe?: number;
  TlakovaHladinaPlynovodniSite?: number;
  Dimenze?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface TrasaPlynovodniSiteAttrs {
  StavTrasySiteTI?: number;
  TypMediaPlynovodniSite?: number;
  TlakovaHladinaPlynovodniSite?: number;
  SpravceTi?: number;
  Dimenze?: number;
  KonsolidacniText?: string;
  VedeniSiteVJineStavbe?: number;
  PopisTrasyPlynovodniSite?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  UmisteniTrasyPlynovodniSite?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaPotrubniPostyAttrs {
  KonsolidacniText?: string;
  Dimenze?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaRadiovehoSmerovehoSpojeAttrs {
  KonsolidacniText?: string;
  SpravceTINazev?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaSiteEKAttrs {
  StavTrasySiteTI?: number;
  MaterialTrasySiteEK?: number;
  PopisTrasySiteEk?: string;
  ZpusobOchranyVedeniSiteEK?: number;
  UmisteniTrasySiteEk?: number;
  SpravceTINazev?: string;
  PrehledKabeluVTrasePocetX?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  VyuzitiTrasySiteEk?: number;
  VedeniSiteVJineStavbe?: number;
  PocetVedeniVTrase?: number;
  DelkaUsekuTrasyZavesKabelu?: number;
  DruhTrasySiteEk?: number;
  SpravceTiSz?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaSiteProduktovoduAttrs {
  StavTrasySiteTI?: number;
  SpravceTINazev?: string;
  SpravceTi?: number;
  PopisTrasyProduktovodu?: string;
  Dimenze?: number;
  KonsolidacniText?: string;
  VedeniSiteVJineStavbe?: number;
  SpravceTiSz?: number;
  UmisteniTrasyProduktovodu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaStokoveSiteAttrs {
  TypTrasyStokoveSite?: number;
  DruhStokoveSite?: number;
  UceloveZarazeniStokoveSite?: number;
  StavTrasySiteTI?: number;
  Dimenze?: number;
  Material?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  ICME?: string;
  VedeniSiteVJineStavbe?: number;
  PopisTrasyKanalizacniSite?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  UmisteniTrasyKanalizacniSit?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaTeplovodniSiteAttrs {
  Dimenze?: number;
  KonsolidacniText?: string;
  StavTrasySiteTI?: number;
  TypTrasyTeplovodniSite?: number;
  TypTeplovodniSite?: number;
  VedeniSiteVJineStavbe?: number;
  PopisTrasyTeplovodniSite?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  UmisteniTeplovodniSite?: number;
  UmisteniTrasyTeplovodSite?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaVodovodniPripojkyAttrs {
  Material?: string;
  Dimenze?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface TrasaVodovodniSiteAttrs {
  TypTrasyVodovodniSite?: number;
  SpravceTi?: number;
  TypMediaVodovodniSite?: number;
  SpravceTINazev?: string;
  Dimenze?: number;
  Material?: string;
  StavTrasySiteTI?: number;
  KonsolidacniText?: string;
  VedeniSiteVJineStavbe?: number;
  ICME?: string;
  PopisTrasyVodovodniSite?: string;
  SpravceTiSz?: number;
  UmisteniTrasyVodovodniSite?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface UdrzovanaPlochaZeleneDefinicniBodAttrs {
  TypUdrzovaneZelene?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface UdrzovanaPlochaZelenePlochaAttrs {
  TypUdrzovaneZelene?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface UlozneMistoTezebnihoOdpaduDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface UlozneMistoTezebnihoOdpaduPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface VegetacniMisaDefinicniBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface VegetacniMisaPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface VisutaLanovaDrahaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface VnitrniCleneniBudovStavebAttrs {
  TypHraniceVnitrniCleneniBu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface VnitrniCleneniDopravniPlochyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface VodniCastPristavuBodAttrs {
  OznaceniObjektu?: string;
  TypPristavu?: number;
  OchrannaFunkce?: boolean;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface VodniCastPristavuPlochaAttrs {
  OznaceniObjektu?: string;
  TypPristavu?: number;
  OchrannaFunkce?: boolean;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface VodniDopravaKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface VodniDopravaKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface VodniDopravaMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface VodniDopravaMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface VodniTokDefinicniBodAttrs {
  PopisVodnihoToku?: string;
  TypVodnihoToku?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface VodniTokPlochaAttrs {
  PopisVodnihoToku?: string;
  KonsolidacniText?: string;
  TypVodnihoToku?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface VodovodKoridorZameruLinieAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface VodovodKoridorZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface VodovodMistoZameruBodAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuVodovodniSiteZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
}

export interface VodovodMistoZameruPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  TypObjektuVodovodniSiteZameru?: number;
  CisStaOb?: string;
  NazStaOb?: string;
}

export interface VrtAttrs {
  TypVrtu?: number;
  PopisVrtu?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface VyrobnaElektrinyNad50kWBodAttrs {
  SpravceTi?: number;
  TypVyrobnyElektriny?: number;
  InstalovanyVykon?: string;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface VyrobnaElektrinyNad50kWPlochaAttrs {
  TypVyrobnyElektriny?: number;
  InstalovanyVykon?: string;
  SpravceTINazev?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  StavObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface VyskovyBodNaTerenuAttrs {
  VyskaNaTerenu?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  CisloBodu?: string;
  Natoceni?: number;
}

export interface VytahVChodnikuAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface VzletovaPristavaciDrahaAttrs {
  TypPovrchuVzletovePristavaciDrahy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZabradliAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZahradaDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZahradaPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZahradniBazenDefinicniBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZahradniBazenPlochaAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZarizeniProtikorozniOchranyBodAttrs {
  SpravceTi?: number;
  TypBodovehoZarizeniProtikor?: number;
  TypInzenyrskeSitePKO?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ZarizeniProtikorozniOchranyPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  TypInzenyrskeSitePKO?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ZarizeniElektrickeSiteAttrs {
  SpravceTi?: number;
  TypZarizeniElektrickeSite?: number;
  SpravceTINazev?: string;
  KonsolidacniText?: string;
  PopisZarizeniElektrickeSite?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  UmisteniObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ZarizeniKanalizacniPripojkyBodAttrs {
  TypZarizeniKanalizacniPripojky?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface ZarizeniKanalizacniPripojkyDefinicniBodAttrs {
  TypZarizeniKanalizacniPripojky?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface ZarizeniKanalizacniPripojkyPlochaAttrs {
  TypZarizeniKanalizacniPripojky?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface ZarizeniProLeteckyProvozAttrs {
  OznaceniObjektu?: string;
  TypZarizeniProLeteckyProvoz?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZarizeniPlynovodniSiteAttrs {
  TypZarizeniPlynovodniSite?: number;
  UmisteniObjektu?: number;
  SpravceTINazev?: string;
  KonsolidacniText?: string;
  StavObjektu?: number;
  PopisZarizeniPlynovodniSite?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ZarizeniPotrubniPostyAttrs {
  SpravceTi?: number;
  TypZarizeniPotrubniPosty?: number;
  SpravceTINazev?: string;
  KonsolidacniText?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ZarizeniPrivadeceAttrs {
  TypZarizeniPrivadece?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ZarizeniSiteEKAttrs {
  TypZarizeniSiteEK?: number;
  KonsolidacniText?: string;
  VyuzitiZarizeniEk?: number;
  UmisteniObjektu?: number;
  StavObjektu?: number;
  PopisZarizeniSiteEk?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  DruhTrasySiteEk?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ZarizeniSiteProduktovoduBodAttrs {
  TypZarizeniSiteProduktovodu?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  PopisZarizeniProduktovodu?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  UmisteniObjektu?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ZarizeniSiteProduktovoduPlochaAttrs {
  PrvekM20ZKonsolidace?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  UmisteniObjektu?: number;
  StavObjektu?: number;
  TypZarizeniSiteProduktovodu?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  PopisZarizeniProduktovodu?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ZarizeniTeplovodniSiteAttrs {
  TypZarizeniTeplovodniSite?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  PopisZarizeniTeplovodniSite?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  UmisteniObjektu?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ZarizeniVodovodniPripojkyBodAttrs {
  TypZarizeniVodovodniPripojky?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface ZarizeniVodovodniPripojkyDefinicniBodAttrs {
  TypZarizeniVodovodniPripojky?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface ZarizeniVodovodniPripojkyPlochaAttrs {
  TypZarizeniVodovodniPripojky?: number;
  SynchronizaceDatDoISDTMKraju?: number;
}

export interface ZastreseniDefinicniBodAttrs {
  TypZastreseni?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZastreseniPlochaAttrs {
  TypZastreseni?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZatrubnenyVodniTokAttrs {
  Dimenze?: number;
  PrvekM20ZKonsolidace?: number;
  Material?: string;
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  ZdrojDatTI?: number;
}

export interface ZedDefinicniBodAttrs {
  TypZdi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
  VyskaOperneZdi?: string;
  PopisOperneZdi?: string;
}

export interface ZedLinieAttrs {
  HraniceJinehoObjektu?: boolean;
  TypZdi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZedPlochaAttrs {
  TypZdi?: number;
  PopisOperneZdi?: string;
  KonsolidacniText?: string;
  VyskaOperneZdi?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZeleznicniPrejezdAttrs {
  PopisPrejezdu?: string;
  TypPrejezdu?: number;
  EvidencniKilometraz?: string;
  NerozlisenaKilometraz?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZemedelskaPlochaDefinicniBodAttrs {
  TypZemedelskePlochy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZemedelskaPlochaPlochaAttrs {
  TypZemedelskePlochy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SynchronizaceDatDoISDTMKraju?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface BalizaAttrs {
  SpravceTiSz?: number;
  KonsolidacniText?: string;
  TypBalizy?: number;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StavObjektu?: number;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
}

export interface BrzdaAttrs {
  TypBrzdy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface BudovaOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ChybaVDatechAttrs {
  PopisChyby?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface CidloSnimacPrepinacObecnyMimoKolejeAttrs {
  SpravceTi?: number;
  StavObjektu?: number;
  SpravceTiSz?: number;
  PopisCidlaSnimacePrepinace?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface CidloSnimacPrepinacObecnyVKolejiAttrs {
  SpravceTi?: number;
  SpravceTiSz?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
}

export interface DetektorVolnostiPrejezduAttrs {
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface DiagnostickySystemDetektorCPMASDEKAttrs {
  SpravceTiSz?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PopisDiagnostickehoSystemu?: string;
  SpravceTi?: number;
  StavObjektu?: number;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface DiagnostickySystemHranaAttrs {
  SpravceTiSz?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  PopisDiagnostickehoSystemu?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StavObjektu?: number;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface DnoSachtyKolektoruAttrs {
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  PrvekM20ZKonsolidace?: number;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
  UzitiSachty?: number;
}

export interface DopravniStavbaNeboPlochaOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface DopravniZnackaObjektAttrs {
  TypDopravniZnackyObjektu?: number;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  UmisteniObjektu?: number;
  Natoceni?: number;
}

export interface DrhlikAttrs {
  TypDrhliku?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface DvereVProtihlukoveSteneCloneAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface ElektroMagnetickyZamekAttrs {
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  UmisteniObjektu?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
}

export interface HranaProtihlukoveStenyClonyOstatniKresbaAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface HranaZumpySeptikuAttrs {
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface HrizAttrs {
  DelkaMostuVMetrech?: number;
  HmotnostNaNapravuVTunach?: number;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface InformacniTabuleElektronickaLinieAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface InformacniTabuleNeelektronickeBodAttrs {
  KonsolidacniText?: string;
  ZpusobPorizeniZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface InformacniTabuleNeelektronickeLinieAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface IzolovanaKolejniceAttrs {
  TypIzolovaneKolejnice?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface IzolovaneKolejovePoleAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface IzolovanyStykAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface JednotlivyStromAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface JerabAttrs {
  ZpusobPorizeniZPS?: number;
  PopisPojizdnehoJerabu?: string;
  KonsolidacniText?: string;
  NosnostProMaximalniDelkuVy?: number;
  MaximalniDelkaVylozniku?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  TypJerabu?: number;
  KonstrukceJerabu?: number;
}

export interface KabelovyVstupVystupDoSachtyKolektoruAttrs {
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  PrvekM20ZKonsolidace?: number;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface KDZAttrs {
  KonsolidacniText?: string;
  TypDilatace?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface KDZZacatekPohybliveCastiAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface KolejnicePojizdnehoJerabuAttrs {
  TypJerabu?: number;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface KolejnicovyMaznikAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface BodKolejnicovehoPasuAttrs {
  TypBoduKolejnicovehoPasu?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface KonecKDZAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface KonecKolejovehoObvoduAttrs {
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTi?: number;
  PopisKonceKolejovehoObvodu?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface KozlikovyJerabAttrs {
  PopisNosnostVTunach?: string;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  ZpusobPorizeniZPS?: number;
}

export interface BodKrizovatkyAttrs {
  CisloKolejoveKrizovatky?: string;
  KonsolidacniText?: string;
  TypBoduKrizovatky?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface LicSloupuStozaruPodperyLampyAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface MagnetickaZnackaAttrs {
  SpravceTiSz?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  StavObjektu?: number;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
}

export interface MagnetickeInformacniBodyAttrs {
  SpravceTiSz?: number;
  KonsolidacniText?: string;
  StavObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTi?: number;
  PopisMagnetickychInformacnic?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface MechanickaZavoraSamostatnyZavorovyStojanAttrs {
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface MelioracniPrikopZlabOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface MericKategorieHmotnostiAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface MeznikAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface MostOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniZPS?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface MostniSachtaAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface NadzemniKanalizaceMerenaObvodemAttrs {
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface NameznikKoncovnikAttrs {
  TypNameznikuKoncovniku?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface NastupisteNastupniPlochaAttrs {
  DelkaNastupiste?: number;
  TypDelkyNastupiste?: number;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface NastupisteOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface NavestHraniceIzolovanehoUsekuAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface NavestHraniceProvozovateleDrahyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface NavestRychlostnikPredvestnikAttrs {
  UmisteniNavestidlaTabulky?: number;
  RychlostObsahNavesti?: string;
  TypNavestiRychlostnikuPredv?: number;
  Poradi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface NavestidloMechanickeAttrs {
  TypMechanickehoNavestidla?: number;
  PopisMechanickehoNavestidla?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  UmisteniNavestidlaTabulky?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface NavestidloSvetelneAttrs {
  TypSvetelnehoNavestidla?: number;
  StavObjektu?: number;
  PopisSvetelnehoNavestidla?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  UmisteniNavestidlaTabulky?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface NavestidloTabulkaAttrs {
  PopisNavestidlaTabulka?: string;
  UmisteniNavestidlaTabulky?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
  TypNavestidlaTabulka?: number;
}

export interface ObrysniceAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface OvladaniZabezpecovacihoZarizeniAttrs {
  PopisOvladaniZabezpecovaciho?: string;
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  TypOvladaniZabezpecovacihoZ?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface OznacnikAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface PatkaSoklOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface PlosinaProOsobyImobilniAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface PodchodOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniZPS?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface PodperneZarizeniSZAttrs {
  TypPodpernehoZarizeniSZNeboJehoPrislusenstvi?: number;
  PrvekM20ZKonsolidace?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  OznaceniPodpernehoZarizeniSZNeboJehoPrislusenstvi?: string;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface PohonMechanickychZavorAttrs {
  TypPohonuMechanickychZavor?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface PortalTuneluGalerieOstatniKresbaAttrs {
  ZpusobPorizeniZPS?: number;
  CisloPortalu?: string;
  EvidencniKilometraz?: string;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  NerozlisenaKilometraz?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface PotrubniObjektNeurcenyAttrs {
  SpravceTi?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  UmisteniObjektu?: number;
}

export interface PrazcoveKotvyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface PredmetMalehoRozsahuAttrs {
  PopisPredmetuMalehoRozsahu?: string;
  TypPredmetuMalehoRozsahu?: number;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface PrestavnikZavornikAttrs {
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
}

export interface PresuvnaAttrs {
  ZpusobPorizeniZPS?: number;
  HmotnostNaNapravuVTunach?: number;
  DelkaMostuVMetrech?: number;
  KonsolidacniText?: string;
  TypPresuvny?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface PrikopSeZpevnenymDnemAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface PritokNeboOdtokPotrubiDoSachtyAttrs {
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  PrvekM20ZKonsolidace?: number;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ProhlidkovaCisticiNeboOdkalovaciJamaHranaAttrs {
  PopisProhlidCisticiNeboOdkalJamy?: string;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniZPS?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface PropustekOstatniKresbaAttrs {
  ZpusobPorizeniZPS?: number;
  EvidencniKilometraz?: string;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  NerozlisenaKilometraz?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface PruzkumnaSachticeAttrs {
  ZpusobPorizeniZPS?: number;
  PopisPruzkumneSachtice?: string;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface RampaOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface RevizniSachtaTuneloveStokyAttrs {
  CisloSachty?: string;
  PopisSachty?: string;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface RevizniSachtaTuneloveStokyHranaAttrs {
  PopisSachty?: string;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  CisloSachty?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface SchodisteAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface SklepBodAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SklepLinieAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface SklepTextAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface SnimacPocitaceNapravAttrs {
  SpravceTiSz?: number;
  KonsolidacniText?: string;
  SpravceTi?: number;
  StavObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
}

export interface SnimacPolohyJazykuAttrs {
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
}

export interface SondaAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface SouvislyPorostOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface SpecialniBodAttrs {
  TypSpecialnihoBodu?: number;
  PopisSpecialnihoBodu?: string;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface SpojkaNaHDPTrubceAttrs {
  SpravceTiSz?: number;
  StavObjektu?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  PrvekM20ZKonsolidace?: number;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface SrafovaniSkloniteTerenniPlochyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface StanicnikAttrs {
  PopisDruhehoKilometrickehoU?: string;
  PopisStaniceni?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
  TypStanicniku?: number;
}

export interface StavbaProZpevneniPovrchuOstatniKresbaAttrs {
  PopisZajisteniSkalOchranna?: string;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface StojanNaVozoveZarazkyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface SvarAttrs {
  PrvekM20ZKonsolidace?: number;
  KonsolidacniText?: string;
  PopisSvaru?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  Natoceni?: number;
  TypSvaru?: number;
}

export interface TocniceAttrs {
  HmotnostNaNapravuVTunach?: number;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  DelkaMostuVMetrech?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface TrasaDratovoduAttrs {
  SpravceTiSz?: number;
  StavObjektu?: number;
  TypDratovodu?: number;
  SpravceTi?: number;
  PopisTrasyDratovodu?: string;
  KonsolidacniText?: string;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
}

export interface TrasaNeurceneKabeloveSiteAttrs {
  PopisTrasyNeurcenehKabeloveSite?: string;
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  UmisteniTrasyNeurKabSite?: number;
}

export interface TrasaNeurcenehoTrubkovehoVedeniAttrs {
  Material?: string;
  SpravceTi?: number;
  StavObjektu?: number;
  PopisTrasyNeurcenehoTrubkov?: string;
  SpravceTiSz?: number;
  Dimenze?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatTI?: number;
  UmisteniTrasyNeurTrubVed?: number;
}

export interface TrasaTrakcnihoVedeniAttrs {
  MaximalniNapetovaHladina?: number;
  MaximalniProvozniNapeti?: number;
  PopisTrakcnihoVedeni?: string;
  ProvozniNapeti?: string;
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface TunelovaStokaAttrs {
  KonsolidacniText?: string;
  ZpusobPorizeniZPS?: number;
  PopisTuneloveStoky?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface TunelovaTroubaOstatniKresbaAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface TunelovyPasAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface UhelnikAttrs {
  TypUhelniku?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface UstiStolyNeboUklonneJamyVstupDoPodzProstoruAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface VjezdNeboVstupDoBudovyAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface VodniTokAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface VratekNaPosunAttrs {
  DruhZarizeniVratku?: number;
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface VrcholSvaznehoPahrbkuAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface BodVyhybkyAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  TypBoduVyhybky?: number;
}

export interface VyklenekVTuneluBodAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface VyklenekVTuneluHranaAttrs {
  KonsolidacniText?: string;
  ZpusobPorizeniZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface VykolejkaAttrs {
  TypVykolejky?: number;
  NavestTelesoVykolejky?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface VystrazneZarizeniNaNastupistiAttrs {
  SpravceTiSz?: number;
  SpravceTi?: number;
  StavObjektu?: number;
  TypVystraznehoZarizeniNaNa?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  Natoceni?: number;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface VystraznikPZSAttrs {
  TypVystrazniku?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  SpravceTiSz?: number;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface VystraznyKrizProPrejezdAttrs {
  TypVystraznehoKrizeProPrej?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface VytahAttrs {
  KonsolidacniText?: string;
  TypVytahu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ZabradliHorniHranaAttrs {
  TridaPresnostiVyska?: number;
  TridaPresnostiPoloha?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ZacatekKonecElektrizovanehoUsekuTratiAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface ZacatekJazykaVyhybkyAttrs {
  CisloVyhybky?: string;
  KonsolidacniText?: string;
  PolohaStavecihoZarizeni?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface ZajisteniSkalKotevniLanoAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface ZajisteniSkalZemniKotvaSkalniTrnAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface ZajistovaciZnackaAttrs {
  PopisZajistovaciZnacky?: string;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface ZarazedloBodAttrs {
  ZpusobPorizeniZPS?: number;
  TypZarazedla?: number;
  PopisZarazedla?: string;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface ZarazedloAttrs {
  ZpusobPorizeniZPS?: number;
  PopisZarazedla?: string;
  TypZarazedla?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

export interface ZarazkovaBrzdaAttrs {
  TypZarazkoveBrzdy?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZdrojDatDI?: number;
  Natoceni?: number;
}

export interface ZarizeniDratovoduAttrs {
  PopisZarizeniDratovodu?: string;
  SpravceTi?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  UmisteniObjektu?: number;
  TypZarizeniDratovodu?: number;
  KonsolidacniText?: string;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  ZdrojDatTI?: number;
}

export interface ZarizeniNeurceneKabeloveSiteAttrs {
  SpravceTi?: number;
  SpravceTiSz?: number;
  StavObjektu?: number;
  TypZarizeniNeurceneKabeloveSite?: number;
  UmisteniObjektu?: number;
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  PrvekM20ZKonsolidace?: number;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  Natoceni?: number;
}

export interface ZarizeniNeurcenehoTrubkovehoVedeniAttrs {
  PopisZarizeniNeurcenehoTrub?: string;
  StavObjektu?: number;
  SpravceTiSz?: number;
  SpravceTi?: number;
  TypZarizeniNeurcenehoTrubko?: number;
  VyskovaKotaVstupniSachty?: string;
  KonsolidacniText?: string;
  UmisteniObjektu?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  SpravceTINazev?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface ZarizeniSiteEKSZAttrs {
  PrvekM20ZKonsolidace?: number;
  StavObjektu?: number;
  TypZarizeniSiteEKSZ?: number;
  SpravceTi?: number;
  KonsolidacniText?: string;
  VyuzitiZarizeniEk?: number;
  UmisteniObjektu?: number;
  SpravceTiSz?: number;
  PopisZarizeniSiteEkSZ?: string;
  SpravceTINazev?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  StatusHarmonizaceDatTI?: number;
  ZdrojDatTI?: number;
  DruhTrasySiteEk?: number;
  Natoceni?: number;
}

export interface ZastreseniOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ZdvihaciZarizeniVozovychSkriniAttrs {
  ZpusobPorizeniZPS?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface ZedOstatniKresbaAttrs {
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ZeleznicniPrejezdOstatniKresbaAttrs {
  KonsolidacniText?: string;
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UrovenUmisteniObjektuZPS?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ZmenaUsekoveVlastnostiKolejeAttrs {
  PopisZmenyUsekoveVlastnosti?: string;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ZridloPramenPrirLecivyZdrojAttrs {
  PopisZdroje?: string;
  KonsolidacniText?: string;
  ZpusobPorizeniZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  Natoceni?: number;
}

export interface ZtuzujiciKolejniceAttrs {
  KonsolidacniText?: string;
  CisStaOb?: string;
  NazStaOb?: string;
  ZdrojDatDI?: number;
  PrvekM20ZKonsolidace?: number;
}

export interface ZvlastniPlochaObrysAttrs {
  TypZvlastniPlochy?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ZvlastniPlochaLinieVOseKolejeAttrs {
  ZpusobPorizeniZPS?: number;
  TypZvlastniPlochyLinieVOs?: number;
  KonsolidacniText?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  CisStaOb?: string;
  NazStaOb?: string;
  PrvekM20ZKonsolidace?: number;
}

/** Catalog of all 493 ŽXML 1.4.2.1 entity types, keyed by XML element name */
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
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["PrvekM20ZKonsolidace","TypPodzemnihoZasobnikuPlynu","KonsolidacniText","SpravceTi","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["IDObjektuDrazniStavby","TypOPDrazniStavby","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["TypOPLeteckychZabezpecovacichZarizeni","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["TypOPLetiste","IDObjektuLetiste","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["SpravceTi","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["PrvekM20ZKonsolidace","TypPodzemnihoZasobnikuPlynu","KonsolidacniText","SpravceTi","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["TypOPPozemniKomunikace","IDObjektuSilnicniStavby","CisloETahu","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypOPSiteEK","KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypOPSiteProduktovodu","KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","TypStaniceElektrickeSite","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemDI",
    specificAttrs: ["IDObjektuStavbyProVodniDopravu","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypVyrobnyElektriny","KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["TypOPZarizeniOdpadovehoHospodarstvi","KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TlakovaHladinaPlynovodniSite","KonsolidacniText","TypTechnologickehoObjektuPlynovodniSite","SpravceTi","SpravceTiSz","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TlakovaHladinaPlynovodniSite","TypTechnologickehoObjektuPlynovodniSite","KonsolidacniText","SpravceTi","SpravceTINazev","SpravceTiSz","StavObjektu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","KonsolidacniText","TypTechnologickehoObjektuSiteEK","SpravceTiSz","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTINazev","KonsolidacniText","SpravceTi","TypTechnologickehoObjektuSiteEK","StavObjektu","SpravceTiSz","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["KonsolidacniText","SpravceTiSz","SpravceTi","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["KonsolidacniText","SpravceTiSz","StavObjektu","SpravceTi","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTechnologickehoObjektuTeplovodniSite","KonsolidacniText","SpravceTiSz","SpravceTi","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTechnologickehoObjektuTeplovodniSite","KonsolidacniText","SpravceTiSz","StavObjektu","SpravceTi","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","PopisBudovy","TypBudovy","UcelBudovy","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["UcelBudovy","PopisBudovy","TypBudovy","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","NerozlisenaKilometraz","PopisPropustku","EvidencniKilometraz"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["EvidencniKilometraz","NerozlisenaKilometraz","PopisPropustku","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["OznaceniCyklostezky","PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","OznaceniCyklostezky","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypDopravneVyznamnehoMistaDraze","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","Natoceni","PrvekM20ZKonsolidace","PopisZeleznicniStaniceNebo"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypDopravneVyznamnehoMistaDraze","KonsolidacniText","PopisZeleznicniStaniceNebo","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["CisloUzlu","CislaKrizujicichKomunikaci","KonsolidacniText","TypUzlu","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","Natoceni","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypDrahy","KategorieZeleznicniTrate","TypZeleznicniTrate","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypDrahy","KategorieZeleznicniTrate","TypZeleznicniTrate","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypDrahy","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypDrahy","CisStaOb","NazStaOb"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDrobneKulturniStavby","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypDrobneKulturniStavby","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDrobneKulturniStavby","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","TypDrobneSakralniStavby","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypDrobneSakralniStavby","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","TypDrobneSakralniStavby","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["NazevDoluPopis","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["NazevDoluPopis","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","MaximalniNapetovaHladina","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","MaximalniNapetovaHladina","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuElektrickeSiteZameru","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuElektrickeSiteZameru","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","OznaceniHeliportu","UmisteniHeliportu","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","Natoceni","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniHeliportu","UmisteniHeliportu","OznaceniObjektu","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypHospodarskyNevyuzivanePl","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypHospodarskyNevyuzivanePl","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypDopravniStavbyNeboPlochy","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypOstatniPlochy","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypPrirodnihoPoloprirodnihoObjektu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["DruhSchodiste","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypStavby","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypVodnihoDila","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZdi","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["CisloBodu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypJadernehoZarizeni","KonsolidacniText","SpravceTiSz","SpravceTi","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypJadernehoZarizeni","SpravceTINazev","KonsolidacniText","SpravceTi","SpravceTiSz","StavObjektu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","PopisJezera"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PopisJezera","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["KonsolidacniText","StavObjektu","SpravceTiSz","SpravceTi","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","TypZarizeniOdstranovaniOdpadu","PovoleniNakladaniNebezpecnymOdpadem","Kapacita","SpravceTiSz","KonsolidacniText","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTINazev","SpravceTi","TypZarizeniOdstranovaniOdpadu","PovoleniNakladaniNebezpecnymOdpadem","Kapacita","KonsolidacniText","StavObjektu","SpravceTiSz","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["UmisteniObjektu","SpravceTi","TypJinehoZarizeniStavebTI","KonsolidacniText","StavObjektu","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","PopisJinehoZarizStavebTi","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuStokoveSiteZameru","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuStokoveSiteZameru","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypKolektoru","KonsolidacniText","StavObjektu","SpravceTiSz","SpravceTi","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypLeteckeStavby","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","Natoceni","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypLeteckeStavby","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["DruhLetiste","OznaceniLetiste","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch","TypManipulacniPlochy","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","PopisManipulacniPlochy"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","PopisManipulacniPlochy","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","TypManipulacniPlochy","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","Vazivost","EvidencniKilometraz","NerozlisenaKilometraz","TypVahy","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","Vazivost","EvidencniKilometraz","NerozlisenaKilometraz","TypVahy","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrvekM20ZKonsolidace","TypNadrzeBezVzdouvacihoObjektu","KonsolidacniText","PopisVodniNadrze","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrvekM20ZKonsolidace","TypNadrzeBezVzdouvacihoObjektu","KonsolidacniText","PopisVodniNadrze","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypNadrzeZdrzeSeVzdouvacimObjektem","KonsolidacniText","PopisVodniNadrze","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNadrzeZdrzeSeVzdouvacimObjektem","KonsolidacniText","PopisVodniNadrze","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypNastupiste","PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNastupiste","PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNeidentLiniovyObjekt","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNosiceTechnickehoZarizeni","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","TypObjektuOdvodneniStavby","PopisZarizeniKanalizacniSit","SpravceTi","KonsolidacniText","UmisteniObjektu","StavObjektu","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","Natoceni","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","TypObjektuOdvodneniStavby","PopisZarizeniKanalizacniSit","SpravceTi","KonsolidacniText","UmisteniObjektu","StavObjektu","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","TypObjektuOdvodneniStavby","PopisZarizeniKanalizacniSit","SpravceTi","KonsolidacniText","UmisteniObjektu","StavObjektu","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","ICME","StavObjektu","TypObjektuStokoveSite","PopisZarizeniKanalizacniSit","SpravceTi","KonsolidacniText","UmisteniObjektu","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","Natoceni","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","ICME","StavObjektu","TypObjektuStokoveSite","PopisZarizeniKanalizacniSit","SpravceTi","KonsolidacniText","UmisteniObjektu","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","TypObjektuVodovodniSite","TypMediaVodovodniSite","SpravceTi","PopisZarizeniVodovodniSite","SpravceTINazev","KonsolidacniText","ICME","SpravceTiSz","UmisteniObjektu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","StavObjektu","TypObjektuVodovodniSite","TypMediaVodovodniSite","SpravceTi","PopisZarizeniVodovodniSite","SpravceTINazev","KonsolidacniText","ICME","SpravceTiSz","UmisteniObjektu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypObjektuZarizeniOchranaPredPovodnemi","SpravceTi","KonsolidacniText","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","SpravceTi","KonsolidacniText","TypObjektuZarizeniOchranaPredPovodnemi","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["NerozlisenaKilometraz","OznaceniKomunikaceTrate","PopisMostu","EvidencniKilometraz","TypMostu","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniKomunikace","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["KonsolidacniText","SpravceTiSz","SpravceTi","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTINazev","SpravceTi","KonsolidacniText","StavObjektu","SpravceTiSz","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuOdpadovehoHospodarstviZameru","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuOdpadovehoHospodarstviZameru","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuOdpadovehoHospodarstviZameru","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTINazev","TypInzenyrskeSite","KonsolidacniText","SpravceTiSz","StavObjektu","SpravceTi","TypOrientacnihoSloupkuTi","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["Splitka","PopisKoleje","RokGeodetickehoPorizeni","RozchodKoleji","KonsolidacniText","TypKoleje","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","SpravceDI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["RokVystavby","Material","DruhMelioracnichOpatreni","KonsolidacniText","SpravceTi","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","ZdrojDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PocetJizdnichPruhu","CisloETahu","PrevazujiciPovrch","KategoriePozemniKomunikace","KonsolidacniText","TypUsekuPozemniKomunikace","OznaceniKomunikace","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["DruhDopravyLanoveDrahy","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","TypProtipovodnoveZabrany","SpravceTi","KonsolidacniText","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PopisProtipovodnoveZabrany","ZdrojDatTI"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PocetKoleji","ElektrizaceZeleznicniTrate","KategorieZeleznicniTrate","TypUsekuZeleznicniTrate","TypZeleznicniTrate","OznaceniTrate","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypPatkyDeskyMonolituPilir","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypPatkyDeskyMonolituPilir","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","OznaceniObjektu","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","Natoceni","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","OznaceniObjektu","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["EvidencniKilometraz","TypMostu","OznaceniKomunikaceTrate","PopisMostu","KonsolidacniText","NerozlisenaKilometraz","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","TypMostu","SynchronizaceDatDoISDTMKraju","NerozlisenaKilometraz","PopisMostu","PrvekM20ZKonsolidace","OznaceniKomunikaceTrate","EvidencniKilometraz"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["DruhPlotu","HraniceJinehoObjektu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TlakovaHladinaPlynovodniSite","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TlakovaHladinaPlynovodniSite","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuPlynovodniSiteZameru","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuPlynovodniSiteZameru","CisStaOb","NazStaOb"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypPodpernehoZarizeni","TypSloupu","KonsolidacniText","StavObjektu","CisloTrakcniPodperyKotvyKo","SpravceTi","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloBodu","TridaPresnostiVyska","TridaPresnostiPoloha","ZpusobPorizeniPB_ZPS","UrovenUmisteniObjektuZPS","KonsolidacniText","Od","Datum","Osoba","Organizace","Poznamka","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["EvidencniCisloTunelu","EvidencniKilometraz","CisloPortalu","KonsolidacniText","NerozlisenaKilometraz","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["CisloPortalu","EvidencniCisloTunelu","EvidencniKilometraz","KonsolidacniText","NerozlisenaKilometraz","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","SpravceTINazev","TypPovrchovehoZnakuTI","KonsolidacniText","StavObjektu","SpravceTiSz","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","VyskovaKotaVstupniSachty","PopisPovrchovehoZnakuTi","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","OznaceniObjektu","TypPristavu","OchrannaFunkce","CisStaOb","NazStaOb","ZdrojDatDI","Natoceni","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","OznaceniObjektu","TypPristavu","OchrannaFunkce","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrevazujiciPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","TypPrikopuNasepuZarezuDopr","PrvekM20ZKonsolidace","PopisPrikopuNasepuZarezuDo"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PopisPrikopuNasepuZarezuDo","KonsolidacniText","TypPrikopuNasepuZarezuDopr","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
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
    specificAttrs: ["Dimenze","Material","TypPrivadece","KonsolidacniText","SpravceTi","SpravceTiSz","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","SpravceTi","KonsolidacniText","StavObjektu","TypPrivadece","Dimenze","Material","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["HraniceJinehoObjektu","TypProtihlukoveSteny","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypProtipovodnoveZabrany","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","PopisProtipovodnoveZabrany"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypProtipovodnoveZabrany","HraniceJinehoObjektu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","TypProtipovodnoveZabrany","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","PopisProtipovodnoveZabrany"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","TypPodchodu","PopisPodchodu","PrvekM20ZKonsolidace","NerozlisenaKilometraz","EvidencniKilometraz"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypPodchodu","EvidencniKilometraz","NerozlisenaKilometraz","PopisPodchodu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrevazujiciPovrch","KategoriePozemniKomunikace","KonsolidacniText","TypPozemniKomunikace","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KategoriePozemniKomunikace","PrevazujiciPovrch","KonsolidacniText","TypPozemniKomunikace","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypTunelu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","NerozlisenaKilometraz","PopisTunelu","PrvekM20ZKonsolidace","EvidencniKilometraz","EvidencniCisloTunelu"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["EvidencniKilometraz","NerozlisenaKilometraz","TypTunelu","EvidencniCisloTunelu","KonsolidacniText","PopisTunelu","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuPasemTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["KonsolidacniText","StavObjektu","SpravceTiSz","SpravceTi","SpravceTINazev","TypJineTechnologickeStavby","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","PopisPrubehuJineTStavby"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["EvidencniKilometraz","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Prubeh"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypTechnologickeKonstrukce","HraniceJinehoObjektu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["RelatVyskaRampyKTemKolej","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","MaterialRampy"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["RelatVyskaRampyKTemKolej","MaterialRampy","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["DruhSchodiste","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","TypSchodiste","Konstrukce"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypSchodiste","DruhSchodiste","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Konstrukce"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["KonsolidacniText","SpravceTi","SpravceTINazev","UmisteniObjektu","TypSdilenehoObjektuTI","SpravceTiSz","StavObjektu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","PopisSdilenehoObjektuTI","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuSilnicniDopravyZameru","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuSilnicniDopravyZameru","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","StavSkladkyOdpadu","ZpusobRekultivace","DatumRekultivace","TypOdpadu","Kapacita","KonsolidacniText","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","DatumRekultivace","Kapacita","StavSkladkyOdpadu","TypOdpadu","ZpusobRekultivace","KonsolidacniText","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","NazevSledovaneVodniCesty","ZarazeniSledovaneVodniCesty","TridaDopravneVyznamneVodniCesty","TypSledovaneVodniCesty","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["NazevSledovaneVodniCesty","OznaceniObjektu","KonsolidacniText","TypSledovaneVodniCesty","ZarazeniSledovaneVodniCesty","TridaDopravneVyznamneVodniCesty","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypSloupuTechnologickeKonst","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypUsekuZeleznicniTrate","TypPlochyZeleznice","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypUsekuZeleznicniTrate","TypPlochyZeleznice","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","Kapacita","SpravceTiSz","KonsolidacniText","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTINazev","SpravceTi","Kapacita","KonsolidacniText","SpravceTiSz","StavObjektu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","TypStaniceElektrickeSite","DruhStaniceElektrickeSite","KonsolidacniText","SpravceTiSz","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","TypStaniceElektrickeSite","DruhStaniceElektrickeSite","KonsolidacniText","SpravceTi","SpravceTiSz","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PopisStavbyProZpevneniPovr","TypStavbyProZpevneniPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PopisStavbyProZpevneniPovr","TypStavbyProZpevneniPovrch","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrujezdnaSirka","PrujezdnaVyska","HraniceJinehoObjektu","PopisVjezdu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypNabijecihoVydejnihoMedia","KonsolidacniText","CisStaOb","NazStaOb","UmisteniObjektu","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","Natoceni","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypSvodidla","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTechnickehoKanalu","PopisKabelovoduPotrubniChra","SpravceTi","KonsolidacniText","SpravceTINazev","StavObjektu","Obsazenost","SpravceTiSz","TypChranenehoPrvku","TypZakresuKabelovoduChranic","UmisteniKabelovoduChranicky","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypTechnologickehoObjektuTeplovodniSite","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypTechnologickehoObjektuTeplovodniSite","CisStaOb","NazStaOb"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypTerenniHrany","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PopisProtikorozniOchrany","SpravceTi","TypPKO","TypInzenyrskeSitePKO","KonsolidacniText","StavObjektu","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTrasyElektrickeSite","IzolaceVenkovnihoVedeni","MaximalniNapetovaHladina","StavTrasySiteTI","SpravceTi","MaximalniProvozniNapeti","ProvozniNapeti","KonsolidacniText","PopisTrasyElektrickeSite","PocetVedeniVTrase","VedeniSiteVJineStavbe","SpravceTiSz","SpravceTINazev","UmisteniTrasyElektrickeSite","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["UceloveZarazeniStokoveSite","Material","DruhStokoveSite","Dimenze","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","TypTrasyMistniElektrickeSite","KonsolidacniText","SpravceTINazev","VedeniSiteVJineStavbe","SpravceTi","SpravceTiSz","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","UmisteniTrasyElektrickeSite","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["Dimenze","TlakovaHladinaPlynovodniSite","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","StavTrasySiteTI","VedeniSiteVJineStavbe","TlakovaHladinaPlynovodniSite","Dimenze","SpravceTi","KonsolidacniText","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","TypMediaPlynovodniSite","TlakovaHladinaPlynovodniSite","SpravceTi","Dimenze","KonsolidacniText","VedeniSiteVJineStavbe","PopisTrasyPlynovodniSite","SpravceTiSz","SpravceTINazev","UmisteniTrasyPlynovodniSite","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["KonsolidacniText","Dimenze","SpravceTiSz","StavObjektu","SpravceTi","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["KonsolidacniText","SpravceTINazev","SpravceTi","SpravceTiSz","StavObjektu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","MaterialTrasySiteEK","PopisTrasySiteEk","ZpusobOchranyVedeniSiteEK","UmisteniTrasySiteEk","SpravceTINazev","PrehledKabeluVTrasePocetX","SpravceTi","KonsolidacniText","VyuzitiTrasySiteEk","VedeniSiteVJineStavbe","PocetVedeniVTrase","DelkaUsekuTrasyZavesKabelu","DruhTrasySiteEk","SpravceTiSz","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavTrasySiteTI","SpravceTINazev","SpravceTi","PopisTrasyProduktovodu","Dimenze","KonsolidacniText","VedeniSiteVJineStavbe","SpravceTiSz","UmisteniTrasyProduktovodu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTrasyStokoveSite","DruhStokoveSite","UceloveZarazeniStokoveSite","StavTrasySiteTI","Dimenze","Material","SpravceTi","KonsolidacniText","ICME","VedeniSiteVJineStavbe","PopisTrasyKanalizacniSite","SpravceTiSz","SpravceTINazev","UmisteniTrasyKanalizacniSit","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Dimenze","KonsolidacniText","StavTrasySiteTI","TypTrasyTeplovodniSite","TypTeplovodniSite","VedeniSiteVJineStavbe","PopisTrasyTeplovodniSite","SpravceTi","SpravceTiSz","SpravceTINazev","UmisteniTeplovodniSite","UmisteniTrasyTeplovodSite","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["Material","Dimenze","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypTrasyVodovodniSite","SpravceTi","TypMediaVodovodniSite","SpravceTINazev","Dimenze","Material","StavTrasySiteTI","KonsolidacniText","VedeniSiteVJineStavbe","ICME","PopisTrasyVodovodniSite","SpravceTiSz","UmisteniTrasyVodovodniSite","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypUdrzovaneZelene","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypUdrzovaneZelene","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypHraniceVnitrniCleneniBu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","Natoceni","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypPristavu","OchrannaFunkce","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["PopisVodnihoToku","TypVodnihoToku","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["PopisVodnihoToku","KonsolidacniText","TypVodnihoToku","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","CisStaOb","NazStaOb"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuVodovodniSiteZameru","CisStaOb","NazStaOb","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZameru",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","TypObjektuVodovodniSiteZameru","CisStaOb","NazStaOb"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypVrtu","PopisVrtu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","TypVyrobnyElektriny","InstalovanyVykon","KonsolidacniText","SpravceTiSz","StavObjektu","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","Natoceni","ZdrojDatTI","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypVyrobnyElektriny","InstalovanyVykon","SpravceTINazev","SpravceTi","KonsolidacniText","SpravceTiSz","StavObjektu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["VyskaNaTerenu","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","CisloBodu","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","Natoceni"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypPovrchuVzletovePristavaciDrahy","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","TypBodovehoZarizeniProtikor","TypInzenyrskeSitePKO","KonsolidacniText","StavObjektu","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","SpravceTi","KonsolidacniText","StavObjektu","TypInzenyrskeSitePKO","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","TypZarizeniElektrickeSite","SpravceTINazev","KonsolidacniText","PopisZarizeniElektrickeSite","StavObjektu","SpravceTiSz","UmisteniObjektu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniKanalizacniPripojky","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniKanalizacniPripojky","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniKanalizacniPripojky","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["OznaceniObjektu","TypZarizeniProLeteckyProvoz","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","Natoceni","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniPlynovodniSite","UmisteniObjektu","SpravceTINazev","KonsolidacniText","StavObjektu","PopisZarizeniPlynovodniSite","SpravceTi","SpravceTiSz","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","TypZarizeniPotrubniPosty","SpravceTINazev","KonsolidacniText","StavObjektu","SpravceTiSz","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
    geomType: "point",
    geomOptional: true,
    hasOblastKI: true,
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
    specificAttrs: ["TypZarizeniPrivadece","KonsolidacniText","SpravceTi","StavObjektu","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniSiteEK","KonsolidacniText","VyuzitiZarizeniEk","UmisteniObjektu","StavObjektu","PopisZarizeniSiteEk","SpravceTi","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","DruhTrasySiteEk","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniSiteProduktovodu","KonsolidacniText","StavObjektu","PopisZarizeniProduktovodu","SpravceTi","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","UmisteniObjektu","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","SpravceTi","KonsolidacniText","UmisteniObjektu","StavObjektu","TypZarizeniSiteProduktovodu","SpravceTiSz","SpravceTINazev","PopisZarizeniProduktovodu","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypZarizeniTeplovodniSite","KonsolidacniText","StavObjektu","PopisZarizeniTeplovodniSite","SpravceTi","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","UmisteniObjektu","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniVodovodniPripojky","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniVodovodniPripojky","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS_TI",
    specificAttrs: ["TypZarizeniVodovodniPripojky","SynchronizaceDatDoISDTMKraju"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypZastreseni","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZastreseni","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Dimenze","PrvekM20ZKonsolidace","Material","SpravceTi","KonsolidacniText","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","SynchronizaceDatDoISDTMKraju","ZdrojDatTI"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypZdi","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace","VyskaOperneZdi","PopisOperneZdi"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["HraniceJinehoObjektu","TypZdi","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZdi","PopisOperneZdi","KonsolidacniText","VyskaOperneZdi","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PopisPrejezdu","TypPrejezdu","EvidencniKilometraz","NerozlisenaKilometraz","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDefinicnichBodu",
    specificAttrs: ["TypZemedelskePlochy","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["TypZemedelskePlochy","KonsolidacniText","CisStaOb","NazStaOb","SynchronizaceDatDoISDTMKraju","PrvekM20ZKonsolidace"],
    geomType: "surface+multiCurve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Baliza": {
    elementName: "Baliza",
    nazev: "Balíza (do 1,0 m délky)",
    codeBase: "9990000447",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","KonsolidacniText","TypBalizy","SpravceTi","CisStaOb","NazStaOb","StavObjektu","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","Natoceni","ZdrojDatTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "Brzda": {
    elementName: "Brzda",
    nazev: "Brzda",
    codeBase: "9990000461",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Brzdy",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypBrzdy","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["PopisChyby","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "CidloSnimacPrepinacObecnyMimoKoleje": {
    elementName: "CidloSnimacPrepinacObecnyMimoKoleje",
    nazev: "Čidlo, snímač, přepínač obecný, mimo koleje",
    codeBase: "9990000469",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","StavObjektu","SpravceTiSz","PopisCidlaSnimacePrepinace","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "CidloSnimacPrepinacObecnyVKoleji": {
    elementName: "CidloSnimacPrepinacObecnyVKoleji",
    nazev: "Čidlo, snímač, přepínač obecný, v koleji",
    codeBase: "9990000444",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","SpravceTiSz","KonsolidacniText","StavObjektu","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","Natoceni","ZdrojDatTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "DetektorVolnostiPrejezdu": {
    elementName: "DetektorVolnostiPrejezdu",
    nazev: "Detektor volnosti přejezdu (bez rozlišení principu)",
    codeBase: "9990000483",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","StavObjektu","SpravceTi","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "DiagnostickySystemDetektorCPMASDEK": {
    elementName: "DiagnostickySystemDetektorCPMASDEK",
    nazev: "Diagnostický systém (detektor CPM - ASDEK)-v ose koleje",
    codeBase: "9990000449",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","KonsolidacniText","CisStaOb","NazStaOb","PopisDiagnostickehoSystemu","SpravceTi","StavObjektu","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatTI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "DiagnostickySystemHrana": {
    elementName: "DiagnostickySystemHrana",
    nazev: "Diagnostický systém - hrana (např. kontrolní brána - měř.obvodem)",
    codeBase: "9990000448",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","SpravceTi","KonsolidacniText","PopisDiagnostickehoSystemu","CisStaOb","NazStaOb","StavObjektu","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatTI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "DnoSachtyKolektoru": {
    elementName: "DnoSachtyKolektoru",
    nazev: "Dno šachty (kolektoru)",
    codeBase: "9990000555",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","SpravceTi","StavObjektu","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","PrvekM20ZKonsolidace","StatusHarmonizaceDatTI","ZdrojDatTI","Natoceni","UzitiSachty"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["TypDopravniZnackyObjektu","ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","UmisteniObjektu","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "Drhlik": {
    elementName: "Drhlik",
    nazev: "Drhlík (kolík čistícího přítlaku)",
    codeBase: "9990000494",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypDrhliku","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ElektroMagnetickyZamek": {
    elementName: "ElektroMagnetickyZamek",
    nazev: "Elektromagnetický zámek",
    codeBase: "9990000465",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","SpravceTi","StavObjektu","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","UmisteniObjektu","Natoceni","ZdrojDatTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "HranaZumpySeptiku": {
    elementName: "HranaZumpySeptiku",
    nazev: "Hrana žumpy, septiku",
    codeBase: "9990000547",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","SpravceTi","StavObjektu","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatTI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["DelkaMostuVMetrech","HmotnostNaNapravuVTunach","ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","ZpusobPorizeniZPS","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "IzolovanaKolejnice": {
    elementName: "IzolovanaKolejnice",
    nazev: "Izolovaná kolejnice",
    codeBase: "9990000460",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Izolované části",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypIzolovaneKolejnice","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "IzolovaneKolejovePole": {
    elementName: "IzolovaneKolejovePole",
    nazev: "Izolované kolejové pole",
    codeBase: "9990000459",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Izolované části",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "IzolovanyStyk": {
    elementName: "IzolovanyStyk",
    nazev: "Izolovaný styk",
    codeBase: "9990000452",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Izolované části",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","PopisPojizdnehoJerabu","KonsolidacniText","NosnostProMaximalniDelkuVy","MaximalniDelkaVylozniku","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace","TypJerabu","KonstrukceJerabu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "KabelovyVstupVystupDoSachtyKolektoru": {
    elementName: "KabelovyVstupVystupDoSachtyKolektoru",
    nazev: "Kabelový vstup/výstup do šachty(kolektoru)",
    codeBase: "9990000556",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","StavObjektu","SpravceTi","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","PrvekM20ZKonsolidace","StatusHarmonizaceDatTI","ZdrojDatTI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "KDZ": {
    elementName: "KDZ",
    nazev: "KDZ",
    codeBase: "9990000453",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "KDZ",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","TypDilatace","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "KDZZacatekPohybliveCasti": {
    elementName: "KDZZacatekPohybliveCasti",
    nazev: "KDZ - začátek pohyblivé části",
    codeBase: "9990000454",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "KDZ",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["TypJerabu","ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "KolejnicovyMaznik": {
    elementName: "KolejnicovyMaznik",
    nazev: "Kolejnicový mazník",
    codeBase: "9990000442",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["TypBoduKolejnicovehoPasu","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "KonecKDZ": {
    elementName: "KonecKDZ",
    nazev: "Konec KDZ",
    codeBase: "9990000455",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "KDZ",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "KonecKolejovehoObvodu": {
    elementName: "KonecKolejovehoObvodu",
    nazev: "Konec kolejového obvodu - napájecí či přijímačový",
    codeBase: "9990000468",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["StavObjektu","SpravceTiSz","SpravceTi","PopisKonceKolejovehoObvodu","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatTI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["PopisNosnostVTunach","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "BodKrizovatky": {
    elementName: "BodKrizovatky",
    nazev: "Bod křižovatky",
    codeBase: "9990000441",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Výhybky a křižovatky",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["CisloKolejoveKrizovatky","KonsolidacniText","TypBoduKrizovatky","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "MagnetickaZnacka": {
    elementName: "MagnetickaZnacka",
    nazev: "Magnetická značka",
    codeBase: "9990000445",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","KonsolidacniText","SpravceTi","CisStaOb","NazStaOb","StavObjektu","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","Natoceni","ZdrojDatTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "MagnetickeInformacniBody": {
    elementName: "MagnetickeInformacniBody",
    nazev: "Magnetické informační body (MIB)",
    codeBase: "9990000446",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","KonsolidacniText","StavObjektu","CisStaOb","NazStaOb","SpravceTi","PopisMagnetickychInformacnic","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatTI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "MechanickaZavoraSamostatnyZavorovyStojan": {
    elementName: "MechanickaZavoraSamostatnyZavorovyStojan",
    nazev: "Mechanická závora, samostatný závorový stojan",
    codeBase: "9990000477",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Přejezdy",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","KonsolidacniText","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "MericKategorieHmotnosti": {
    elementName: "MericKategorieHmotnosti",
    nazev: "Měřič kategorie hmotnosti",
    codeBase: "9990000450",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniZPS","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "NadzemniKanalizaceMerenaObvodem": {
    elementName: "NadzemniKanalizaceMerenaObvodem",
    nazev: "Nadzemní kanalizace (např. dešťová) měřená obvodem",
    codeBase: "9990000548",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","StavObjektu","SpravceTi","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "NameznikKoncovnik": {
    elementName: "NameznikKoncovnik",
    nazev: "Námezník / koncovník",
    codeBase: "9990000491",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypNameznikuKoncovniku","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["DelkaNastupiste","TypDelkyNastupiste","ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "NavestHraniceIzolovanehoUseku": {
    elementName: "NavestHraniceIzolovanehoUseku",
    nazev: "Návěst hranice izolovaného úseku",
    codeBase: "9990000492",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "NavestHraniceProvozovateleDrahy": {
    elementName: "NavestHraniceProvozovateleDrahy",
    nazev: "Návěst hranice provozovatele dráhy",
    codeBase: "9990000493",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "NavestRychlostnikPredvestnik": {
    elementName: "NavestRychlostnikPredvestnik",
    nazev: "Návěst (rychlostník, předvěstník)",
    codeBase: "9990000484",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["UmisteniNavestidlaTabulky","RychlostObsahNavesti","TypNavestiRychlostnikuPredv","Poradi","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "NavestidloMechanicke": {
    elementName: "NavestidloMechanicke",
    nazev: "Návěstidlo mechanické",
    codeBase: "9990000486",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypMechanickehoNavestidla","PopisMechanickehoNavestidla","SpravceTi","SpravceTiSz","StavObjektu","UmisteniNavestidlaTabulky","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "NavestidloSvetelne": {
    elementName: "NavestidloSvetelne",
    nazev: "Návěstidlo světelné",
    codeBase: "9990000485",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypSvetelnehoNavestidla","StavObjektu","PopisSvetelnehoNavestidla","SpravceTi","SpravceTiSz","UmisteniNavestidlaTabulky","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "NavestidloTabulka": {
    elementName: "NavestidloTabulka",
    nazev: "Návěstidlo tabulka",
    codeBase: "9990000487",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PopisNavestidlaTabulka","UmisteniNavestidlaTabulky","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni","TypNavestidlaTabulka"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "OvladaniZabezpecovacihoZarizeni": {
    elementName: "OvladaniZabezpecovacihoZarizeni",
    nazev: "Ovládání zabezpečovacího zařízení",
    codeBase: "9990000495",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Ovládání zabezpečovacího zařízení",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PopisOvladaniZabezpecovaciho","SpravceTiSz","SpravceTi","StavObjektu","TypOvladaniZabezpecovacihoZ","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "Oznacnik": {
    elementName: "Oznacnik",
    nazev: "Označník (Posun zakázán)",
    codeBase: "9990000488",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","ZpusobPorizeniZPS","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "PodperneZarizeniSZ": {
    elementName: "PodperneZarizeniSZ",
    nazev: "Podpěrné zařízení SŽ nebo jeho příslušenství",
    codeBase: "9990000586",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypPodpernehoZarizeniSZNeboJehoPrislusenstvi","PrvekM20ZKonsolidace","StavObjektu","SpravceTi","KonsolidacniText","SpravceTiSz","OznaceniPodpernehoZarizeniSZNeboJehoPrislusenstvi","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","ZdrojDatTI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "PohonMechanickychZavor": {
    elementName: "PohonMechanickychZavor",
    nazev: "Pohon mechanických závor",
    codeBase: "9990000479",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Přejezdy",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypPohonuMechanickychZavor","SpravceTi","KonsolidacniText","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","CisloPortalu","EvidencniKilometraz","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","NerozlisenaKilometraz","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "PotrubniObjektNeurceny": {
    elementName: "PotrubniObjektNeurceny",
    nazev: "Potrubní objekt neurčený",
    codeBase: "9990000553",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubí",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","SpravceTiSz","StavObjektu","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatTI","UmisteniObjektu"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "PrazcoveKotvy": {
    elementName: "PrazcoveKotvy",
    nazev: "Pražcové kotvy",
    codeBase: "9990000458",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["PopisPredmetuMalehoRozsahu","TypPredmetuMalehoRozsahu","ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "PrestavnikZavornik": {
    elementName: "PrestavnikZavornik",
    nazev: "Přestavník,závorník",
    codeBase: "9990000466",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","SpravceTi","StavObjektu","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","Natoceni","ZdrojDatTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","HmotnostNaNapravuVTunach","DelkaMostuVMetrech","KonsolidacniText","TypPresuvny","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "PritokNeboOdtokPotrubiDoSachty": {
    elementName: "PritokNeboOdtokPotrubiDoSachty",
    nazev: "Přítok nebo odtok potrubí do šachty",
    codeBase: "9990000557",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubí",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","StavObjektu","SpravceTi","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","PrvekM20ZKonsolidace","StatusHarmonizaceDatTI","ZdrojDatTI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["PopisProhlidCisticiNeboOdkalJamy","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniZPS","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","EvidencniKilometraz","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","NerozlisenaKilometraz","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","PopisPruzkumneSachtice","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["CisloSachty","PopisSachty","ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["PopisSachty","ZpusobPorizeniZPS","KonsolidacniText","CisloSachty","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "SklepBod": {
    elementName: "SklepBod",
    nazev: "Sklep - bod",
    codeBase: "9990000582",
    codeSuffix: "01",
    kategorieObjektu: "Konsolidace dat",
    skupinaObjektu: "Sklep",
    obsahovaCast: "SKLEP" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","Natoceni","PrvekM20ZKonsolidace"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "SklepLinie": {
    elementName: "SklepLinie",
    nazev: "Sklep - linie",
    codeBase: "9990000583",
    codeSuffix: "02",
    kategorieObjektu: "Konsolidace dat",
    skupinaObjektu: "Sklep",
    obsahovaCast: "SKLEP" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "SklepText": {
    elementName: "SklepText",
    nazev: "Sklep - text",
    codeBase: "9990000584",
    codeSuffix: "01",
    kategorieObjektu: "Konsolidace dat",
    skupinaObjektu: "Sklep",
    obsahovaCast: "SKLEP" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuZPS",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","Natoceni","PrvekM20ZKonsolidace"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "SnimacPocitaceNaprav": {
    elementName: "SnimacPocitaceNaprav",
    nazev: "Snímač počítače náprav",
    codeBase: "9990000443",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","KonsolidacniText","SpravceTi","StavObjektu","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","Natoceni","ZdrojDatTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "SnimacPolohyJazyku": {
    elementName: "SnimacPolohyJazyku",
    nazev: "Snímač polohy jazyků",
    codeBase: "9990000467",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zabezpečovací zařízení umístěné v kolejišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","SpravceTi","StavObjektu","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","Natoceni","ZdrojDatTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["TypSpecialnihoBodu","PopisSpecialnihoBodu","ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "SpojkaNaHDPTrubce": {
    elementName: "SpojkaNaHDPTrubce",
    nazev: "Spojka na HDP trubce - spojka chráničky",
    codeBase: "9990000554",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","StavObjektu","SpravceTi","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","PrvekM20ZKonsolidace","StatusHarmonizaceDatTI","ZdrojDatTI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "Stanicnik": {
    elementName: "Stanicnik",
    nazev: "Staničník",
    codeBase: "9990000489",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Návěstidla",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PopisDruhehoKilometrickehoU","PopisStaniceni","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni","TypStanicniku"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["PopisZajisteniSkalOchranna","ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "StojanNaVozoveZarazky": {
    elementName: "StojanNaVozoveZarazky",
    nazev: "Stojan na vozové zarážky",
    codeBase: "9990000470",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "Svar": {
    elementName: "Svar",
    nazev: "Svar",
    codeBase: "9990000576",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Místa na trati",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PrvekM20ZKonsolidace","KonsolidacniText","PopisSvaru","CisStaOb","NazStaOb","ZdrojDatDI","Natoceni","TypSvaru"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["HmotnostNaNapravuVTunach","ZpusobPorizeniZPS","KonsolidacniText","DelkaMostuVMetrech","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "TrasaDratovodu": {
    elementName: "TrasaDratovodu",
    nazev: "Trasa drátovodu",
    codeBase: "9990000150",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Drátovod",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","StavObjektu","TypDratovodu","SpravceTi","PopisTrasyDratovodu","KonsolidacniText","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatTI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "TrasaNeurceneKabeloveSite": {
    elementName: "TrasaNeurceneKabeloveSite",
    nazev: "Trasa neurčené kabelové sítě",
    codeBase: "9990000579",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kabel",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PopisTrasyNeurcenehKabeloveSite","SpravceTiSz","SpravceTi","StavObjektu","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","SpravceTINazev","StatusHarmonizaceDatTI","ZdrojDatTI","UmisteniTrasyNeurKabSite"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "TrasaNeurcenehoTrubkovehoVedeni": {
    elementName: "TrasaNeurcenehoTrubkovehoVedeni",
    nazev: "Trasa neurčeného trubkového vedení",
    codeBase: "9990000551",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubí",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["Material","SpravceTi","StavObjektu","PopisTrasyNeurcenehoTrubkov","SpravceTiSz","Dimenze","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","ZdrojDatTI","UmisteniTrasyNeurTrubVed"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "TrasaTrakcnihoVedeni": {
    elementName: "TrasaTrakcnihoVedeni",
    nazev: "Trasa trakčního vedení",
    codeBase: "9990000496",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Trakční vedení",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["MaximalniNapetovaHladina","MaximalniProvozniNapeti","PopisTrakcnihoVedeni","ProvozniNapeti","SpravceTiSz","SpravceTi","StavObjektu","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","ZpusobPorizeniZPS","PopisTuneloveStoky","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "Uhelnik": {
    elementName: "Uhelnik",
    nazev: "Úhelník",
    codeBase: "9990000456",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypUhelniku","KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["DruhZarizeniVratku","ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "VrcholSvaznehoPahrbku": {
    elementName: "VrcholSvaznehoPahrbku",
    nazev: "Vrchol svážného pahrbku",
    codeBase: "9990000463",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Místa na trati",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "BodVyhybky": {
    elementName: "BodVyhybky",
    nazev: "Bod výhybky",
    codeBase: "9990000440",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Výhybky a křižovatky",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni","TypBoduVyhybky"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","ZpusobPorizeniZPS","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "Vykolejka": {
    elementName: "Vykolejka",
    nazev: "Výkolejka",
    codeBase: "9990000464",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Výkolejky",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypVykolejky","NavestTelesoVykolejky","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "VystrazneZarizeniNaNastupisti": {
    elementName: "VystrazneZarizeniNaNastupisti",
    nazev: "Výstražné zařízení na nástupišti",
    codeBase: "9990000503",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Výstražné zařízení na nástupišti",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTiSz","SpravceTi","StavObjektu","TypVystraznehoZarizeniNaNa","KonsolidacniText","CisStaOb","NazStaOb","Natoceni","SpravceTINazev","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "VystraznikPZS": {
    elementName: "VystraznikPZS",
    nazev: "Výstražník PZS",
    codeBase: "9990000478",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Přejezdy",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["TypVystrazniku","SpravceTi","KonsolidacniText","SpravceTiSz","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "VystraznyKrizProPrejezd": {
    elementName: "VystraznyKrizProPrejezd",
    nazev: "Výstražný kříž pro přejezd",
    codeBase: "9990000481",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Přejezdy",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypVystraznehoKrizeProPrej","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TypVytahu","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["TridaPresnostiVyska","TridaPresnostiPoloha","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ZacatekKonecElektrizovanehoUsekuTrati": {
    elementName: "ZacatekKonecElektrizovanehoUsekuTrati",
    nazev: "Začátek, konec elektrizovaného úseku trati",
    codeBase: "9990000451",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ZacatekJazykaVyhybky": {
    elementName: "ZacatekJazykaVyhybky",
    nazev: "Začátek jazyka výhybky",
    codeBase: "9990000587",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Výhybky a křižovatky",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["CisloVyhybky","KonsolidacniText","PolohaStavecihoZarizeni","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ZajistovaciZnacka": {
    elementName: "ZajistovaciZnacka",
    nazev: "Zajišťovací značka",
    codeBase: "9990000490",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Místa na trati",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["PopisZajistovaciZnacky","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","TypZarazedla","PopisZarazedla","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","PopisZarazedla","TypZarazedla","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ZarazkovaBrzda": {
    elementName: "ZarazkovaBrzda",
    nazev: "Zarážková brzda",
    codeBase: "9990000462",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Brzdy",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["TypZarazkoveBrzdy","KonsolidacniText","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZdrojDatDI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ZarizeniDratovodu": {
    elementName: "ZarizeniDratovodu",
    nazev: "Zařízení drátovodů (bodové)",
    codeBase: "9990000151",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Drátovod",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PopisZarizeniDratovodu","SpravceTi","SpravceTiSz","StavObjektu","UmisteniObjektu","TypZarizeniDratovodu","KonsolidacniText","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","PrvekM20ZKonsolidace","Natoceni","ZdrojDatTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ZarizeniNeurceneKabeloveSite": {
    elementName: "ZarizeniNeurceneKabeloveSite",
    nazev: "Zařízení neurčené kabelové sítě (bodové)",
    codeBase: "9990000580",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kabel",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["SpravceTi","SpravceTiSz","StavObjektu","TypZarizeniNeurceneKabeloveSite","UmisteniObjektu","KonsolidacniText","CisStaOb","NazStaOb","SpravceTINazev","PrvekM20ZKonsolidace","StatusHarmonizaceDatTI","ZdrojDatTI","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ZarizeniNeurcenehoTrubkovehoVedeni": {
    elementName: "ZarizeniNeurcenehoTrubkovehoVedeni",
    nazev: "Zařízení neurčeného trubkového vedení (bodové)",
    codeBase: "9990000552",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubí",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PopisZarizeniNeurcenehoTrub","StavObjektu","SpravceTiSz","SpravceTi","TypZarizeniNeurcenehoTrubko","VyskovaKotaVstupniSachty","KonsolidacniText","UmisteniObjektu","CisStaOb","NazStaOb","SpravceTINazev","StatusHarmonizaceDatTI","ZdrojDatTI","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ZarizeniSiteEKSZ": {
    elementName: "ZarizeniSiteEKSZ",
    nazev: "Zařízení sítě EK SŽ",
    codeBase: "9990000585",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "ZDT" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuTI",
    specificAttrs: ["PrvekM20ZKonsolidace","StavObjektu","TypZarizeniSiteEKSZ","SpravceTi","KonsolidacniText","VyuzitiZarizeniEk","UmisteniObjektu","SpravceTiSz","PopisZarizeniSiteEkSZ","SpravceTINazev","CisStaOb","NazStaOb","StatusHarmonizaceDatTI","ZdrojDatTI","DruhTrasySiteEk","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["KonsolidacniText","IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","TridaPresnostiPoloha","TridaPresnostiVyska","UrovenUmisteniObjektuZPS","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["PopisZmenyUsekoveVlastnosti","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["PopisZdroje","KonsolidacniText","ZpusobPorizeniZPS","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","Natoceni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
  "ZtuzujiciKolejnice": {
    elementName: "ZtuzujiciKolejnice",
    nazev: "Ztužující kolejnice",
    codeBase: "9990000457",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení svršku",
    obsahovaCast: "ZDD" as 'ZPS' | 'TI' | 'DI' | 'ZDT' | 'ZDD' | 'H3D' | 'ODSZ' | 'SKLEP' | '',
    sharedAttrGroup: "SpolecneAtributyObjektuDI",
    specificAttrs: ["KonsolidacniText","CisStaOb","NazStaOb","ZdrojDatDI","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["TypZvlastniPlochy","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
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
    specificAttrs: ["ZpusobPorizeniZPS","TypZvlastniPlochyLinieVOs","KonsolidacniText","TridaPresnostiPoloha","TridaPresnostiVyska","CisStaOb","NazStaOb","PrvekM20ZKonsolidace"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "zxml",
  },
};

/** Map of element names to their specific attribute interface types */
export type EntityAttrsMap = {
  "BPPlynovodniSite": BPPlynovodniSiteAttrs;
  "BPPodzemnihoZasobnikuPlynu": BPPodzemnihoZasobnikuPlynuAttrs;
  "BPZarizeniPKO": BPZarizeniPKOAttrs;
  "OPDrazniStavby": OPDrazniStavbyAttrs;
  "OPElektrickeSite": OPElektrickeSiteAttrs;
  "OPJadernehoZarizeni": OPJadernehoZarizeniAttrs;
  "OPKolektoruKabelovodu": OPKolektoruKabelovoduAttrs;
  "OPLeteckychZabezpecovacichZarizeni": OPLeteckychZabezpecovacichZarizeniAttrs;
  "OPLetiste": OPLetisteAttrs;
  "OPObjektuKanalizace": OPObjektuKanalizaceAttrs;
  "OPObjektuVodovodu": OPObjektuVodovoduAttrs;
  "OPPlynovodniSite": OPPlynovodniSiteAttrs;
  "OPPodzemnihoZasobnikuPlynu": OPPodzemnihoZasobnikuPlynuAttrs;
  "OPPozemniKomunikace": OPPozemniKomunikaceAttrs;
  "OPSiteEK": OPSiteEKAttrs;
  "OPSiteProduktovodu": OPSiteProduktovoduAttrs;
  "OPStaniceElektrickeSite": OPStaniceElektrickeSiteAttrs;
  "OPStavbyProVodniDopravu": OPStavbyProVodniDopravuAttrs;
  "OPTeplovodniSite": OPTeplovodniSiteAttrs;
  "OPVodnihoDilaIAIIKategorieHlediskaTBD": OPVodnihoDilaIAIIKategorieHlediskaTBDAttrs;
  "OPVyrobnyElektriny": OPVyrobnyElektrinyAttrs;
  "OPZarizeniPKO": OPZarizeniPKOAttrs;
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
  "CyklistickaDopravaKoridorZameruLinie": CyklistickaDopravaKoridorZameruLinieAttrs;
  "CyklistickaDopravaKoridorZameruPlocha": CyklistickaDopravaKoridorZameruPlochaAttrs;
  "CyklistickaDopravaMistoZameruBod": CyklistickaDopravaMistoZameruBodAttrs;
  "CyklistickaDopravaMistoZameruPlocha": CyklistickaDopravaMistoZameruPlochaAttrs;
  "CyklostezkaDefinicniBod": CyklostezkaDefinicniBodAttrs;
  "CyklostezkaPlocha": CyklostezkaPlochaAttrs;
  "DeliciPasDefinicniBod": DeliciPasDefinicniBodAttrs;
  "DeliciPasPlocha": DeliciPasPlochaAttrs;
  "DopravneVyznamneMistoDrazeBod": DopravneVyznamneMistoDrazeBodAttrs;
  "DopravneVyznamneMistoDrazePlocha": DopravneVyznamneMistoDrazePlochaAttrs;
  "DopravniOstruvekDefinicniBod": DopravniOstruvekDefinicniBodAttrs;
  "DopravniOstruvekPlocha": DopravniOstruvekPlochaAttrs;
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
  "DvurNadvoriDefinicniBod": DvurNadvoriDefinicniBodAttrs;
  "DvurNadvoriPlocha": DvurNadvoriPlochaAttrs;
  "ElektrickaSitKoridorZameruLinie": ElektrickaSitKoridorZameruLinieAttrs;
  "ElektrickaSitKoridorZameruPlocha": ElektrickaSitKoridorZameruPlochaAttrs;
  "ElektrickaSitMistoZameruBod": ElektrickaSitMistoZameruBodAttrs;
  "ElektrickaSitMistoZameruPlocha": ElektrickaSitMistoZameruPlochaAttrs;
  "ElektronickaKomunikaceKoridorZameruLinie": ElektronickaKomunikaceKoridorZameruLinieAttrs;
  "ElektronickaKomunikaceKoridorZameruPlocha": ElektronickaKomunikaceKoridorZameruPlochaAttrs;
  "ElektronickaKomunikaceMistoZameruBod": ElektronickaKomunikaceMistoZameruBodAttrs;
  "ElektronickaKomunikaceMistoZameruPlocha": ElektronickaKomunikaceMistoZameruPlochaAttrs;
  "HeliportBod": HeliportBodAttrs;
  "HeliportPlocha": HeliportPlochaAttrs;
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
  "HrazDefinicniBod": HrazDefinicniBodAttrs;
  "HrazPlocha": HrazPlochaAttrs;
  "HrbitovDefinicniBod": HrbitovDefinicniBodAttrs;
  "HrbitovPlocha": HrbitovPlochaAttrs;
  "HristeDefinicniBod": HristeDefinicniBodAttrs;
  "HristePlocha": HristePlochaAttrs;
  "IdentickyBod": IdentickyBodAttrs;
  "JaderneZarizeniBod": JaderneZarizeniBodAttrs;
  "JaderneZarizeniPlocha": JaderneZarizeniPlochaAttrs;
  "JezDefinicniBod": JezDefinicniBodAttrs;
  "JezPlocha": JezPlochaAttrs;
  "JezeroDefinicniBod": JezeroDefinicniBodAttrs;
  "JezeroPlocha": JezeroPlochaAttrs;
  "JinaTechnologickaStavbaTI": JinaTechnologickaStavbaTIAttrs;
  "JineDulniDiloStavbaDefinicniBod": JineDulniDiloStavbaDefinicniBodAttrs;
  "JineDulniDiloStavbaPlocha": JineDulniDiloStavbaPlochaAttrs;
  "JineZarizeniOdstranovaniVyuzivaniSberOdpaduBod": JineZarizeniOdstranovaniVyuzivaniSberOdpaduBodAttrs;
  "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha": JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlochaAttrs;
  "JineZarizeniStavebTI": JineZarizeniStavebTIAttrs;
  "KanalizaceKoridorZameruLinie": KanalizaceKoridorZameruLinieAttrs;
  "KanalizaceKoridorZameruPlocha": KanalizaceKoridorZameruPlochaAttrs;
  "KanalizaceMistoZameruBod": KanalizaceMistoZameruBodAttrs;
  "KanalizaceMistoZameruPlocha": KanalizaceMistoZameruPlochaAttrs;
  "Kolektor": KolektorAttrs;
  "KominDefinicniBod": KominDefinicniBodAttrs;
  "KominPlocha": KominPlochaAttrs;
  "LesDefinicniBod": LesDefinicniBodAttrs;
  "LesPlocha": LesPlochaAttrs;
  "LeteckaDopravaKoridorZameruLinie": LeteckaDopravaKoridorZameruLinieAttrs;
  "LeteckaDopravaKoridorZameruPlocha": LeteckaDopravaKoridorZameruPlochaAttrs;
  "LeteckaDopravaMistoZameruBod": LeteckaDopravaMistoZameruBodAttrs;
  "LeteckaDopravaMistoZameruPlocha": LeteckaDopravaMistoZameruPlochaAttrs;
  "LeteckaStavbaBod": LeteckaStavbaBodAttrs;
  "LeteckaStavbaPlocha": LeteckaStavbaPlochaAttrs;
  "Letiste": LetisteAttrs;
  "ManipulacniPlochaDefinicniBod": ManipulacniPlochaDefinicniBodAttrs;
  "ManipulacniPlochaPlocha": ManipulacniPlochaPlochaAttrs;
  "MelioracniPrikopZlabDefinicniBod": MelioracniPrikopZlabDefinicniBodAttrs;
  "MelioracniPrikopZlabPlocha": MelioracniPrikopZlabPlochaAttrs;
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
  "ObjektOdvodneniStavbyBod": ObjektOdvodneniStavbyBodAttrs;
  "ObjektOdvodneniStavbyLinie": ObjektOdvodneniStavbyLinieAttrs;
  "ObjektOdvodneniStavbyPlocha": ObjektOdvodneniStavbyPlochaAttrs;
  "ObjektStokoveSiteBod": ObjektStokoveSiteBodAttrs;
  "ObjektStokoveSitePlocha": ObjektStokoveSitePlochaAttrs;
  "ObjektVodovodniSiteBod": ObjektVodovodniSiteBodAttrs;
  "ObjektVodovodniSitePlocha": ObjektVodovodniSitePlochaAttrs;
  "ObjektZarizeniOchranaPredPovodnemiBod": ObjektZarizeniOchranaPredPovodnemiBodAttrs;
  "ObjektZarizeniOchranaPredPovodnemiLinie": ObjektZarizeniOchranaPredPovodnemiLinieAttrs;
  "ObvodDrahy": ObvodDrahyAttrs;
  "ObvodMostu": ObvodMostuAttrs;
  "ObvodPozemniKomunikace": ObvodPozemniKomunikaceAttrs;
  "OchrannaSachtaVrtu": OchrannaSachtaVrtuAttrs;
  "OdkalisteBod": OdkalisteBodAttrs;
  "OdkalistePlocha": OdkalistePlochaAttrs;
  "OdpadoveHospodarstviZamerBod": OdpadoveHospodarstviZamerBodAttrs;
  "OdpadoveHospodarstviZamerLinie": OdpadoveHospodarstviZamerLinieAttrs;
  "OdpadoveHospodarstviZamerPlocha": OdpadoveHospodarstviZamerPlochaAttrs;
  "OrientacniSloupekTI": OrientacniSloupekTIAttrs;
  "OsaKolejePozemniLanoveDrahy": OsaKolejePozemniLanoveDrahyAttrs;
  "OsaKolejeSpecialniDrahy": OsaKolejeSpecialniDrahyAttrs;
  "OsaKolejeTramvajoveDrahy": OsaKolejeTramvajoveDrahyAttrs;
  "OsaKolejeZeleznicniTrate": OsaKolejeZeleznicniTrateAttrs;
  "OsaMelioracnihoPrikopuZlabuDrenu": OsaMelioracnihoPrikopuZlabuDrenuAttrs;
  "OsaPozemniKomunikace": OsaPozemniKomunikaceAttrs;
  "OsaPozemniLanoveDrahy": OsaPozemniLanoveDrahyAttrs;
  "OsaProtipovodnoveZabrany": OsaProtipovodnoveZabranyAttrs;
  "OsaSpecialniDrahy": OsaSpecialniDrahyAttrs;
  "OsaTramvajoveDrahy": OsaTramvajoveDrahyAttrs;
  "OsaZeleznicniTrate": OsaZeleznicniTrateAttrs;
  "OstatniZastresenaStavbaDefinicniBod": OstatniZastresenaStavbaDefinicniBodAttrs;
  "OstatniZastresenaStavbaPlocha": OstatniZastresenaStavbaPlochaAttrs;
  "ParkovisteOdstavnaPlochaDefinicniBod": ParkovisteOdstavnaPlochaDefinicniBodAttrs;
  "ParkovisteOdstavnaPlochaPlocha": ParkovisteOdstavnaPlochaPlochaAttrs;
  "PatkaDeskaMonolitPilirDefinicniBod": PatkaDeskaMonolitPilirDefinicniBodAttrs;
  "PatkaDeskaMonolitPilirPlocha": PatkaDeskaMonolitPilirPlochaAttrs;
  "PlavebniKomoraBod": PlavebniKomoraBodAttrs;
  "PlavebniKomoraPlocha": PlavebniKomoraPlochaAttrs;
  "PlochaMostniKonstrukceDefinicniBod": PlochaMostniKonstrukceDefinicniBodAttrs;
  "PlochaMostniKonstrukcePlocha": PlochaMostniKonstrukcePlochaAttrs;
  "PlochaRekultivaceDefinicniBod": PlochaRekultivaceDefinicniBodAttrs;
  "PlochaRekultivacePlocha": PlochaRekultivacePlochaAttrs;
  "Plot": PlotAttrs;
  "PlynovodKoridorZameruLinie": PlynovodKoridorZameruLinieAttrs;
  "PlynovodKoridorZameruPlocha": PlynovodKoridorZameruPlochaAttrs;
  "PlynovodMistoZameruBod": PlynovodMistoZameruBodAttrs;
  "PlynovodMistoZameruPlocha": PlynovodMistoZameruPlochaAttrs;
  "PodezdivkaDefinicniBod": PodezdivkaDefinicniBodAttrs;
  "PodezdivkaPlocha": PodezdivkaPlochaAttrs;
  "PodperneZarizeni": PodperneZarizeniAttrs;
  "PodrobnyBodZPS": PodrobnyBodZPSAttrs;
  "PodzemniObjektZPSDefinicniBod": PodzemniObjektZPSDefinicniBodAttrs;
  "PodzemniObjektZPSPlocha": PodzemniObjektZPSPlochaAttrs;
  "PortalPodchoduDefinicniBod": PortalPodchoduDefinicniBodAttrs;
  "PortalPodchoduPlocha": PortalPodchoduPlochaAttrs;
  "PortalTuneluDefinicniBod": PortalTuneluDefinicniBodAttrs;
  "PortalTuneluPlocha": PortalTuneluPlochaAttrs;
  "PovrchovyZnakTI": PovrchovyZnakTIAttrs;
  "PozemniCastPristavuBod": PozemniCastPristavuBodAttrs;
  "PozemniCastPristavuPlocha": PozemniCastPristavuPlochaAttrs;
  "PozemniLanovaDrahaDefinicniBod": PozemniLanovaDrahaDefinicniBodAttrs;
  "PozemniLanovaDrahaPlocha": PozemniLanovaDrahaPlochaAttrs;
  "PridruzenaPlochaPozemniKomunikaceDefinicniBod": PridruzenaPlochaPozemniKomunikaceDefinicniBodAttrs;
  "PridruzenaPlochaPozemniKomunikacePlocha": PridruzenaPlochaPozemniKomunikacePlochaAttrs;
  "PrikopNasepZarezDopravniStavbyDefinicniBod": PrikopNasepZarezDopravniStavbyDefinicniBodAttrs;
  "PrikopNasepZarezDopravniStavbyPlocha": PrikopNasepZarezDopravniStavbyPlochaAttrs;
  "PrivadecNahonOdpadLinie": PrivadecNahonOdpadLinieAttrs;
  "PrivadecNahonOdpadPlocha": PrivadecNahonOdpadPlochaAttrs;
  "PrivadecPovrchovychVodKoridorZameruLinie": PrivadecPovrchovychVodKoridorZameruLinieAttrs;
  "PrivadecPovrchovychVodKoridorZameruPlocha": PrivadecPovrchovychVodKoridorZameruPlochaAttrs;
  "ProduktovodKoridorZameruLinie": ProduktovodKoridorZameruLinieAttrs;
  "ProduktovodKoridorZameruPlocha": ProduktovodKoridorZameruPlochaAttrs;
  "ProduktovodMistoZameruBod": ProduktovodMistoZameruBodAttrs;
  "ProduktovodMistoZameruPlocha": ProduktovodMistoZameruPlochaAttrs;
  "ProtihlukovaStena": ProtihlukovaStenaAttrs;
  "ProtipovodnovaZabranaDefinicniBod": ProtipovodnovaZabranaDefinicniBodAttrs;
  "ProtipovodnovaZabranaLinie": ProtipovodnovaZabranaLinieAttrs;
  "ProtipovodnovaZabranaPlocha": ProtipovodnovaZabranaPlochaAttrs;
  "ProtipovodnoveOpatreniKoridorZameruLinie": ProtipovodnoveOpatreniKoridorZameruLinieAttrs;
  "ProtipovodnoveOpatreniKoridorZameruPlocha": ProtipovodnoveOpatreniKoridorZameruPlochaAttrs;
  "ProvozniPlochaPodchoduDefinicniBod": ProvozniPlochaPodchoduDefinicniBodAttrs;
  "ProvozniPlochaPodchoduPlocha": ProvozniPlochaPodchoduPlochaAttrs;
  "ProvozniPlochaPozemniKomunikaceDefinicniBod": ProvozniPlochaPozemniKomunikaceDefinicniBodAttrs;
  "ProvozniPlochaPozemniKomunikacePlocha": ProvozniPlochaPozemniKomunikacePlochaAttrs;
  "ProvozniPlochaTuneluDefinicniBod": ProvozniPlochaTuneluDefinicniBodAttrs;
  "ProvozniPlochaTuneluPlocha": ProvozniPlochaTuneluPlochaAttrs;
  "ProvozniProstorElektrickeSite": ProvozniProstorElektrickeSiteAttrs;
  "PrubehJineTechnologickeStavbyTI": PrubehJineTechnologickeStavbyTIAttrs;
  "PrubehPropustku": PrubehPropustkuAttrs;
  "PrubehTechnologickeKonstrukce": PrubehTechnologickeKonstrukceAttrs;
  "RampaDefinicniBod": RampaDefinicniBodAttrs;
  "RampaPlocha": RampaPlochaAttrs;
  "SchodisteDefinicniBod": SchodisteDefinicniBodAttrs;
  "SchodistePlocha": SchodistePlochaAttrs;
  "SdilenaStavbaTIKoridorZameruLinie": SdilenaStavbaTIKoridorZameruLinieAttrs;
  "SdilenaStavbaTIKoridorZameruPlocha": SdilenaStavbaTIKoridorZameruPlochaAttrs;
  "SdilenyObjektTI": SdilenyObjektTIAttrs;
  "SilnicniDopravaKoridorZameruLinie": SilnicniDopravaKoridorZameruLinieAttrs;
  "SilnicniDopravaKoridorZameruPlocha": SilnicniDopravaKoridorZameruPlochaAttrs;
  "SilnicniDopravaMistoZameruBod": SilnicniDopravaMistoZameruBodAttrs;
  "SilnicniDopravaMistoZameruPlocha": SilnicniDopravaMistoZameruPlochaAttrs;
  "SkladkaOdpaduBod": SkladkaOdpaduBodAttrs;
  "SkladkaOdpaduPlocha": SkladkaOdpaduPlochaAttrs;
  "SklenikDefinicniBod": SklenikDefinicniBodAttrs;
  "SklenikPlocha": SklenikPlochaAttrs;
  "SledovanaVodniCestaLinie": SledovanaVodniCestaLinieAttrs;
  "SledovanaVodniCestaPlocha": SledovanaVodniCestaPlochaAttrs;
  "SloupTechnologickeKonstrukce": SloupTechnologickeKonstrukceAttrs;
  "SouhrnnaPlochaZeleznicnichDrahDefinicniBod": SouhrnnaPlochaZeleznicnichDrahDefinicniBodAttrs;
  "SouhrnnaPlochaZeleznicnichDrahPlocha": SouhrnnaPlochaZeleznicnichDrahPlochaAttrs;
  "SpalovnaBod": SpalovnaBodAttrs;
  "SpalovnaPlocha": SpalovnaPlochaAttrs;
  "SpecialniDrahaDefinicniBod": SpecialniDrahaDefinicniBodAttrs;
  "SpecialniDrahaPlocha": SpecialniDrahaPlochaAttrs;
  "StaniceElektrickeSiteBod": StaniceElektrickeSiteBodAttrs;
  "StaniceElektrickeSitePlocha": StaniceElektrickeSitePlochaAttrs;
  "StavbaProZpevneniPovrchuDefinicniBod": StavbaProZpevneniPovrchuDefinicniBodAttrs;
  "StavbaProZpevneniPovrchuPlocha": StavbaProZpevneniPovrchuPlochaAttrs;
  "StavebneUpraveneKorytoDefinicniBod": StavebneUpraveneKorytoDefinicniBodAttrs;
  "StavebneUpraveneKorytoPlocha": StavebneUpraveneKorytoPlochaAttrs;
  "StavebneUpravenyVjezdNaPozemek": StavebneUpravenyVjezdNaPozemekAttrs;
  "SterkovaPrehrazkaDefinicniBod": SterkovaPrehrazkaDefinicniBodAttrs;
  "SterkovaPrehrazkaPlocha": SterkovaPrehrazkaPlochaAttrs;
  "StojanNabijeniVydejniStojan": StojanNabijeniVydejniStojanAttrs;
  "StudnaNaVerejnemProstranstvi": StudnaNaVerejnemProstranstviAttrs;
  "StupenBod": StupenBodAttrs;
  "StupenDefinicniBod": StupenDefinicniBodAttrs;
  "StupenPlocha": StupenPlochaAttrs;
  "SuchaNadrzDefinicniBod": SuchaNadrzDefinicniBodAttrs;
  "SuchaNadrzPlocha": SuchaNadrzPlochaAttrs;
  "Svodidlo": SvodidloAttrs;
  "TechnickyKanal": TechnickyKanalAttrs;
  "TeplovodKoridorZameruLinie": TeplovodKoridorZameruLinieAttrs;
  "TeplovodKoridorZameruPlocha": TeplovodKoridorZameruPlochaAttrs;
  "TeplovodMistoZameruBod": TeplovodMistoZameruBodAttrs;
  "TeplovodMistoZameruPlocha": TeplovodMistoZameruPlochaAttrs;
  "TerasaDefinicniBod": TerasaDefinicniBodAttrs;
  "TerasaPlocha": TerasaPlochaAttrs;
  "TerenniHrana": TerenniHranaAttrs;
  "TerminalKombinovaneDopravyMistoZameruBod": TerminalKombinovaneDopravyMistoZameruBodAttrs;
  "TerminalKombinovaneDopravyMistoZameruPlocha": TerminalKombinovaneDopravyMistoZameruPlochaAttrs;
  "TramvajovaDrahaDefinicniBod": TramvajovaDrahaDefinicniBodAttrs;
  "TramvajovaDrahaPlocha": TramvajovaDrahaPlochaAttrs;
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
  "TrasaVodovodniPripojky": TrasaVodovodniPripojkyAttrs;
  "TrasaVodovodniSite": TrasaVodovodniSiteAttrs;
  "UdrzovanaPlochaZeleneDefinicniBod": UdrzovanaPlochaZeleneDefinicniBodAttrs;
  "UdrzovanaPlochaZelenePlocha": UdrzovanaPlochaZelenePlochaAttrs;
  "UlozneMistoTezebnihoOdpaduDefinicniBod": UlozneMistoTezebnihoOdpaduDefinicniBodAttrs;
  "UlozneMistoTezebnihoOdpaduPlocha": UlozneMistoTezebnihoOdpaduPlochaAttrs;
  "VegetacniMisaDefinicniBod": VegetacniMisaDefinicniBodAttrs;
  "VegetacniMisaPlocha": VegetacniMisaPlochaAttrs;
  "VisutaLanovaDraha": VisutaLanovaDrahaAttrs;
  "VnitrniCleneniBudovStaveb": VnitrniCleneniBudovStavebAttrs;
  "VnitrniCleneniDopravniPlochy": VnitrniCleneniDopravniPlochyAttrs;
  "VodniCastPristavuBod": VodniCastPristavuBodAttrs;
  "VodniCastPristavuPlocha": VodniCastPristavuPlochaAttrs;
  "VodniDopravaKoridorZameruLinie": VodniDopravaKoridorZameruLinieAttrs;
  "VodniDopravaKoridorZameruPlocha": VodniDopravaKoridorZameruPlochaAttrs;
  "VodniDopravaMistoZameruBod": VodniDopravaMistoZameruBodAttrs;
  "VodniDopravaMistoZameruPlocha": VodniDopravaMistoZameruPlochaAttrs;
  "VodniTokDefinicniBod": VodniTokDefinicniBodAttrs;
  "VodniTokPlocha": VodniTokPlochaAttrs;
  "VodovodKoridorZameruLinie": VodovodKoridorZameruLinieAttrs;
  "VodovodKoridorZameruPlocha": VodovodKoridorZameruPlochaAttrs;
  "VodovodMistoZameruBod": VodovodMistoZameruBodAttrs;
  "VodovodMistoZameruPlocha": VodovodMistoZameruPlochaAttrs;
  "Vrt": VrtAttrs;
  "VyrobnaElektrinyNad50kWBod": VyrobnaElektrinyNad50kWBodAttrs;
  "VyrobnaElektrinyNad50kWPlocha": VyrobnaElektrinyNad50kWPlochaAttrs;
  "VyskovyBodNaTerenu": VyskovyBodNaTerenuAttrs;
  "VytahVChodniku": VytahVChodnikuAttrs;
  "VzletovaPristavaciDraha": VzletovaPristavaciDrahaAttrs;
  "Zabradli": ZabradliAttrs;
  "ZahradaDefinicniBod": ZahradaDefinicniBodAttrs;
  "ZahradaPlocha": ZahradaPlochaAttrs;
  "ZahradniBazenDefinicniBod": ZahradniBazenDefinicniBodAttrs;
  "ZahradniBazenPlocha": ZahradniBazenPlochaAttrs;
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
  "BudovaOstatniKresba": BudovaOstatniKresbaAttrs;
  "ChybaVDatech": ChybaVDatechAttrs;
  "CidloSnimacPrepinacObecnyMimoKoleje": CidloSnimacPrepinacObecnyMimoKolejeAttrs;
  "CidloSnimacPrepinacObecnyVKoleji": CidloSnimacPrepinacObecnyVKolejiAttrs;
  "DetektorVolnostiPrejezdu": DetektorVolnostiPrejezduAttrs;
  "DiagnostickySystemDetektorCPMASDEK": DiagnostickySystemDetektorCPMASDEKAttrs;
  "DiagnostickySystemHrana": DiagnostickySystemHranaAttrs;
  "DnoSachtyKolektoru": DnoSachtyKolektoruAttrs;
  "DopravniStavbaNeboPlochaOstatniKresba": DopravniStavbaNeboPlochaOstatniKresbaAttrs;
  "DopravniZnackaObjekt": DopravniZnackaObjektAttrs;
  "Drhlik": DrhlikAttrs;
  "DvereVProtihlukoveSteneClone": DvereVProtihlukoveSteneCloneAttrs;
  "ElektroMagnetickyZamek": ElektroMagnetickyZamekAttrs;
  "HranaProtihlukoveStenyClonyOstatniKresba": HranaProtihlukoveStenyClonyOstatniKresbaAttrs;
  "HranaZumpySeptiku": HranaZumpySeptikuAttrs;
  "Hriz": HrizAttrs;
  "InformacniTabuleElektronickaLinie": InformacniTabuleElektronickaLinieAttrs;
  "InformacniTabuleNeelektronickeBod": InformacniTabuleNeelektronickeBodAttrs;
  "InformacniTabuleNeelektronickeLinie": InformacniTabuleNeelektronickeLinieAttrs;
  "IzolovanaKolejnice": IzolovanaKolejniceAttrs;
  "IzolovaneKolejovePole": IzolovaneKolejovePoleAttrs;
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
  "MelioracniPrikopZlabOstatniKresba": MelioracniPrikopZlabOstatniKresbaAttrs;
  "MericKategorieHmotnosti": MericKategorieHmotnostiAttrs;
  "Meznik": MeznikAttrs;
  "MostOstatniKresba": MostOstatniKresbaAttrs;
  "MostniSachta": MostniSachtaAttrs;
  "NadzemniKanalizaceMerenaObvodem": NadzemniKanalizaceMerenaObvodemAttrs;
  "NameznikKoncovnik": NameznikKoncovnikAttrs;
  "NastupisteNastupniPlocha": NastupisteNastupniPlochaAttrs;
  "NastupisteOstatniKresba": NastupisteOstatniKresbaAttrs;
  "NavestHraniceIzolovanehoUseku": NavestHraniceIzolovanehoUsekuAttrs;
  "NavestHraniceProvozovateleDrahy": NavestHraniceProvozovateleDrahyAttrs;
  "NavestRychlostnikPredvestnik": NavestRychlostnikPredvestnikAttrs;
  "NavestidloMechanicke": NavestidloMechanickeAttrs;
  "NavestidloSvetelne": NavestidloSvetelneAttrs;
  "NavestidloTabulka": NavestidloTabulkaAttrs;
  "Obrysnice": ObrysniceAttrs;
  "OvladaniZabezpecovacihoZarizeni": OvladaniZabezpecovacihoZarizeniAttrs;
  "Oznacnik": OznacnikAttrs;
  "PatkaSoklOstatniKresba": PatkaSoklOstatniKresbaAttrs;
  "PlosinaProOsobyImobilni": PlosinaProOsobyImobilniAttrs;
  "PodchodOstatniKresba": PodchodOstatniKresbaAttrs;
  "PodperneZarizeniSZ": PodperneZarizeniSZAttrs;
  "PohonMechanickychZavor": PohonMechanickychZavorAttrs;
  "PortalTuneluGalerieOstatniKresba": PortalTuneluGalerieOstatniKresbaAttrs;
  "PotrubniObjektNeurceny": PotrubniObjektNeurcenyAttrs;
  "PrazcoveKotvy": PrazcoveKotvyAttrs;
  "PredmetMalehoRozsahu": PredmetMalehoRozsahuAttrs;
  "PrestavnikZavornik": PrestavnikZavornikAttrs;
  "Presuvna": PresuvnaAttrs;
  "PrikopSeZpevnenymDnem": PrikopSeZpevnenymDnemAttrs;
  "PritokNeboOdtokPotrubiDoSachty": PritokNeboOdtokPotrubiDoSachtyAttrs;
  "ProhlidkovaCisticiNeboOdkalovaciJamaHrana": ProhlidkovaCisticiNeboOdkalovaciJamaHranaAttrs;
  "PropustekOstatniKresba": PropustekOstatniKresbaAttrs;
  "PruzkumnaSachtice": PruzkumnaSachticeAttrs;
  "RampaOstatniKresba": RampaOstatniKresbaAttrs;
  "RevizniSachtaTuneloveStoky": RevizniSachtaTuneloveStokyAttrs;
  "RevizniSachtaTuneloveStokyHrana": RevizniSachtaTuneloveStokyHranaAttrs;
  "Schodiste": SchodisteAttrs;
  "SklepBod": SklepBodAttrs;
  "SklepLinie": SklepLinieAttrs;
  "SklepText": SklepTextAttrs;
  "SnimacPocitaceNaprav": SnimacPocitaceNapravAttrs;
  "SnimacPolohyJazyku": SnimacPolohyJazykuAttrs;
  "Sonda": SondaAttrs;
  "SouvislyPorostOstatniKresba": SouvislyPorostOstatniKresbaAttrs;
  "SpecialniBod": SpecialniBodAttrs;
  "SpojkaNaHDPTrubce": SpojkaNaHDPTrubceAttrs;
  "SrafovaniSkloniteTerenniPlochy": SrafovaniSkloniteTerenniPlochyAttrs;
  "Stanicnik": StanicnikAttrs;
  "StavbaProZpevneniPovrchuOstatniKresba": StavbaProZpevneniPovrchuOstatniKresbaAttrs;
  "StojanNaVozoveZarazky": StojanNaVozoveZarazkyAttrs;
  "Svar": SvarAttrs;
  "Tocnice": TocniceAttrs;
  "TrasaDratovodu": TrasaDratovoduAttrs;
  "TrasaNeurceneKabeloveSite": TrasaNeurceneKabeloveSiteAttrs;
  "TrasaNeurcenehoTrubkovehoVedeni": TrasaNeurcenehoTrubkovehoVedeniAttrs;
  "TrasaTrakcnihoVedeni": TrasaTrakcnihoVedeniAttrs;
  "TunelovaStoka": TunelovaStokaAttrs;
  "TunelovaTroubaOstatniKresba": TunelovaTroubaOstatniKresbaAttrs;
  "TunelovyPas": TunelovyPasAttrs;
  "Uhelnik": UhelnikAttrs;
  "UstiStolyNeboUklonneJamyVstupDoPodzProstoru": UstiStolyNeboUklonneJamyVstupDoPodzProstoruAttrs;
  "VjezdNeboVstupDoBudovy": VjezdNeboVstupDoBudovyAttrs;
  "VodniTok": VodniTokAttrs;
  "VratekNaPosun": VratekNaPosunAttrs;
  "VrcholSvaznehoPahrbku": VrcholSvaznehoPahrbkuAttrs;
  "BodVyhybky": BodVyhybkyAttrs;
  "VyklenekVTuneluBod": VyklenekVTuneluBodAttrs;
  "VyklenekVTuneluHrana": VyklenekVTuneluHranaAttrs;
  "Vykolejka": VykolejkaAttrs;
  "VystrazneZarizeniNaNastupisti": VystrazneZarizeniNaNastupistiAttrs;
  "VystraznikPZS": VystraznikPZSAttrs;
  "VystraznyKrizProPrejezd": VystraznyKrizProPrejezdAttrs;
  "Vytah": VytahAttrs;
  "ZabradliHorniHrana": ZabradliHorniHranaAttrs;
  "ZacatekKonecElektrizovanehoUsekuTrati": ZacatekKonecElektrizovanehoUsekuTratiAttrs;
  "ZacatekJazykaVyhybky": ZacatekJazykaVyhybkyAttrs;
  "ZajisteniSkalKotevniLano": ZajisteniSkalKotevniLanoAttrs;
  "ZajisteniSkalZemniKotvaSkalniTrn": ZajisteniSkalZemniKotvaSkalniTrnAttrs;
  "ZajistovaciZnacka": ZajistovaciZnackaAttrs;
  "ZarazedloBod": ZarazedloBodAttrs;
  "Zarazedlo": ZarazedloAttrs;
  "ZarazkovaBrzda": ZarazkovaBrzdaAttrs;
  "ZarizeniDratovodu": ZarizeniDratovoduAttrs;
  "ZarizeniNeurceneKabeloveSite": ZarizeniNeurceneKabeloveSiteAttrs;
  "ZarizeniNeurcenehoTrubkovehoVedeni": ZarizeniNeurcenehoTrubkovehoVedeniAttrs;
  "ZarizeniSiteEKSZ": ZarizeniSiteEKSZAttrs;
  "ZastreseniOstatniKresba": ZastreseniOstatniKresbaAttrs;
  "ZdvihaciZarizeniVozovychSkrini": ZdvihaciZarizeniVozovychSkriniAttrs;
  "ZedOstatniKresba": ZedOstatniKresbaAttrs;
  "ZeleznicniPrejezdOstatniKresba": ZeleznicniPrejezdOstatniKresbaAttrs;
  "ZmenaUsekoveVlastnostiKoleje": ZmenaUsekoveVlastnostiKolejeAttrs;
  "ZridloPramenPrirLecivyZdroj": ZridloPramenPrirLecivyZdrojAttrs;
  "ZtuzujiciKolejnice": ZtuzujiciKolejniceAttrs;
  "ZvlastniPlochaObrys": ZvlastniPlochaObrysAttrs;
  "ZvlastniPlochaLinieVOseKoleje": ZvlastniPlochaLinieVOseKolejeAttrs;
};
