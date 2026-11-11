// Auto-generated from UDM 2.1.1 XSD — DO NOT EDIT
// Run: npx tsx scripts/generate-types.ts <version>

import type { Geometry, GmlPolygon, CommonAttributes } from '../types.js';

export type GeomKind = 'point' | 'curve' | 'surface' | 'surface+multiCurve';

export interface EntityMeta {
  elementName: string;
  nazev: string;
  codeBase: string;
  codeSuffix: string;
  kategorieObjektu: string;
  skupinaObjektu: string;
  obsahovaCast: 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '';
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

export interface BodovyPrvekNaBudoveAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypBodovehoPrvkunaBudove?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface BPPlynovodniSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  TlakovaHladinaPlynovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface BPPodzemnihoZasobnikuPlynuAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  TypPodzemnihoZasobnikuPlynu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface BPZarizeniPKOAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface BudovaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  KonstrukceBudovy?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface BudovaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  KonstrukceBudovy?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface CeloPropustkuDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  StaniceniPropustku?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface CeloPropustkuPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface ChodnikDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ChodnikPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface CyklistickaDopravaKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface CyklistickaDopravaKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface CyklistickaDopravaMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface CyklistickaDopravaMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface CyklistickaDopravaPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface CyklostezkaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  OznaceniCyklostezky?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface CyklostezkaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  OznaceniCyklostezky?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface DeliciPasDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface DeliciPasPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface DoplnekKatastruAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypHraniceKatastru?: number;
  Upresneni?: string;
  ZpusobPorizeniZPS?: number;
}

export interface DopravneVyznamneMistoDrazeBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  TypDopravneVyznamnehoMistaDraze?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface DopravneVyznamneMistoDrazePlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  TypDopravneVyznamnehoMistaDraze?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface DopravniOstruvekDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface DopravniOstruvekPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface DopravniUzelSilnicniSiteAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  CisloUzlu?: string;
  CislaKrizujicichKomunikaci?: string;
  TypUzlu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface DopravniZarizeniBodAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevDZ?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypDopravnihoZarizeniBod?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface DopravniZarizeniLinieAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypDopravnihoZarizeniLinie?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface DrazniDopravaKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypDrahy?: number;
  KategorieZeleznicniTrate?: number;
  TypZeleznicniTrate?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface DrazniDopravaKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypDrahy?: number;
  KategorieZeleznicniTrate?: number;
  TypZeleznicniTrate?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface DrazniDopravaMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypDrahy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface DrazniDopravaMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypDrahy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface DrazniDopravaPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypDrahy?: number;
  KategorieZeleznicniTrate?: number;
  TypZeleznicniTrate?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface DrobnaKulturniStavbaBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypDrobneKulturniStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface DrobnaKulturniStavbaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypDrobneKulturniStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface DrobnaKulturniStavbaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypDrobneKulturniStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface DrobnaSakralniStavbaBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypDrobneSakralniStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface DrobnaSakralniStavbaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypDrobneSakralniStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface DrobnaSakralniStavbaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypDrobneSakralniStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface DulLomDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface DulLomPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface DulniObjektAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypDulnihoObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface DvurNadvoriDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface DvurNadvoriPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface ElektrickaSitKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  MaximalniNapetovaHladina?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ElektrickaSitKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  MaximalniNapetovaHladina?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ElektrickaSitMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuElektrickeSiteZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ElektrickaSitMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuElektrickeSiteZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ElektrickaSitPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuElektrickeSitePS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ElektronickaKomunikaceKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ElektronickaKomunikaceKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ElektronickaKomunikaceMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ElektronickaKomunikaceMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ElektronickaKomunikacePSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface GeodetickyBodAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  StabilizaceBodu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypGeodetickehoBodu?: number;
  Upresneni?: string;
  ZpusobPorizeniZPS?: number;
}

export interface HeliportBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  OznaceniHeliportu?: string;
  UmisteniHeliportu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface HeliportPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  OznaceniHeliportu?: string;
  UmisteniHeliportu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface HorniHranaObrubyLinieAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HospodarskyNevyuzivanaPlochaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HospodarskyNevyuzivanaPlochaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface HraniceBudovyAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialUDM?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoBudovy?: boolean;
  VstupDoDTM?: boolean;
}

export interface HraniceDopravniStavbyPlochyAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypDopravniStavbyNeboPlochy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  TypHraniceDSP?: number;
  TypLinieCleneniDopravniPlochy?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HraniceOstatniPlochyAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypOstatniPlochy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HranicePodzemnihoObjektuZPSAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HranicePrirodnihoPoloprirodnihoObjektuAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypPrirodnihoPoloprirodnihoObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HraniceSchodisteAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DruhSchodiste?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HraniceStavbyAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HraniceUdrzovaneZeleneAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HraniceVodnihoDilaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypVodnihoDila?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HraniceZarizeniKanalizacniPripojkyAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  StavObjektu?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HraniceZarizeniVodovodniPripojkyAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  StavObjektu?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HraniceZdiAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypZdi?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialUDM?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HrazDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HrazPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface HrbitovDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HrbitovPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface HristeDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface HristePlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface HroboveMistoAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  HraniceJinehoObjektu?: number;
  IDExterni?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  StavHrobovehoMista?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypHrobovehoMista?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface HydrantVodovodniSiteBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  ICME?: string;
  StavObjektu?: number;
  TypHydrantuVodovodniSite?: number;
  TypMediaVodovodniSite?: number;
  DimenzeHydrantuVodovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface IdentickyBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  CisloBodu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Kody?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface InformacniATelematickeZarizeniAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypITS?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface JaderneZarizeniBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypJadernehoZarizeni?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JaderneZarizeniPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypJadernehoZarizeni?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JezDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface JezPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface JezeroDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface JezeroPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface JinaStavbaDIPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JinaStavbaTIPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JinaTechnologickaStavbaTIAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JinaTechnologickaStavbaTIPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JineDulniDiloStavbaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface JineDulniDiloStavbaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface JineZarizeniOdstranovaniVyuzivaniSberOdpaduBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniOdstranovaniOdpadu?: number;
  PovoleniNakladaniNebezpecnymOdpadem?: number;
  Kapacita?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniOdstranovaniOdpadu?: number;
  PovoleniNakladaniNebezpecnymOdpadem?: number;
  Kapacita?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JineZarizeniStavebTIAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypJinehoZarizeniStavebTI?: number;
  UmisteniObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JineZarizeniStavebTILinieAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypJinehoZarizeniStavebTI?: number;
  UmisteniObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface JineZarizeniStavebTIPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypJinehoZarizeniStavebTI?: number;
  UmisteniObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface KanalizaceKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface KanalizaceKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface KanalizaceMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuStokoveSiteZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface KanalizaceMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuStokoveSiteZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface KanalizacePSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuStokoveSitePS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface KatastrDleVFKLinieAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypKatastralniHranice?: number;
  Upresneni?: string;
  ZpusobPorizeniZPS?: number;
}

export interface KerAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDExterni?: string;
  Natoceni?: number;
  Okrasny?: boolean;
  Opadavy?: boolean;
  Prilohy?: string;
  PrumerKorunyCm?: number;
  RozsirenyDruhKere?: string;
  Soliterni?: boolean;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Trnity?: boolean;
  Tvarovany?: boolean;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  VyskaDrevinyCm?: number;
  ZakladniDruhKere?: number;
  ZakladniRozdeleniKeru?: number;
  ZpusobPorizeniZPS?: number;
}

export interface KolektorAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  VedeniSiteVJineStavbe?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  TypKolektoru?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface KolektorPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  VedeniSiteVJineStavbe?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  TypKolektoru?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface KominDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface KominPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface KomunalniATridenyOdpadAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HraniceJinehoObjektu?: number;
  IDExterni?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface LesDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  DruhLesa?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Typlesa?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface LesPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  DruhLesa?: number;
  SpravceZPS?: string;
  Typlesa?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface LeteckaDopravaKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface LeteckaDopravaKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface LeteckaDopravaMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface LeteckaDopravaMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface LeteckaDopravaPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface LeteckaStavbaBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  TypLeteckeStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface LeteckaStavbaPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  TypLeteckeStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface LetisteAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DruhLetiste?: number;
  ICAOKodLetiste?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface LiniovyPrvekZeleneAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  DruhLinioveZelene?: string;
  IDExterni?: string;
  Prilohy?: string;
  SirkaPrvkuM?: number;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Trnitost?: boolean;
  Tvarovany?: boolean;
  TypLiniovehoPrvkuZelene?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  VyskaLiniovehoPrvkuZeleneM?: number;
  ZakladniRozdeleniZelene?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ManipulacniPlochaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ManipulacniPlochaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface MelioracniPrikopZlabDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface MelioracniPrikopZlabPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface MelioracniSachtaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  FunkcniStavObjektu?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface MobiliarAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  MaterialUDM?: number;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypMobiliare?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface MostniVahaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface MostniVahaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface NadrzBezVzdouvacihoObjektuDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypNadrzeBezVzdouvacihoObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface NadrzBezVzdouvacihoObjektuPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypNadrzeBezVzdouvacihoObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface NadrzZdrzSeVzdouvacimObjektemDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypNadrzeZdrzeSeVzdouvacimObjektem?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface NadrzZdrzSeVzdouvacimObjektemPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypNadrzeZdrzeSeVzdouvacimObjektem?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface NajezdDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface NajezdPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface NastupisteDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface NastupistePlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface NazvyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  TypNazvu?: number;
  Upresneni?: string;
}

export interface NeidentifikovanyObjektAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface NeviditelnaHraniceAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypNeviditelneHranice?: number;
  Upresneni?: string;
  ZpusobPorizeniZPS?: number;
}

export interface NosicTechnickehoZarizeniAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypNosiceTechnickehoZarizeni?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
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
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniTI?: number;
}

export interface ObecnePoznamkyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  TypPoznamky?: number;
  Upresneni?: string;
}

export interface ObjektZeleznicniDopravyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypObjektuZeleznicniDopravy?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface ObjektLanoveDopravyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypObjektuLanoveDopravy?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface ObjektNadRamecDTMEKAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  RozsirenyTypObjektuElektronickeKomunikace?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektNadRamecDTMElektrickeVedeniAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  RozsirenyTypObjektuElektrickehoVedeni?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektNadRamecDTMStokovesiteAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  RozsirenyTypObjektuStokoveSite?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektNadRamecDTMKolektoryAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  RozsirenyTypObjektuKolektoru?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektNadRamecDTMPlynovodyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  RozsirenyTypObjektuPlynovodu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektNadRamecDTMProduktovodyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  RozsirenyTypObjektuProduktovodu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektNadRamecDTMTeplovodyAttrs {
  DatumKontroly?: string;
  DatumVystavby?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  RozsirenyTypObjektuTeplovodu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektNadRamecDTMVodovodyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  RozsirenyTypObjektuVodovodu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektNadRamecDTMZarizeniStavebAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektOdvodneniStavbyBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypObjektuOdvodneniStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObjektOdvodneniStavbyLinieAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypObjektuOdvodneniStavby?: number;
  DatumKontroly?: string;
  Dimenze?: number;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObjektOdvodneniStavbyPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypObjektuOdvodneniStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObjektStokoveSiteBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  ICME?: string;
  TypObjektuStokoveSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObjektStokoveSitePlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  ICME?: string;
  StavObjektu?: number;
  TypObjektuStokoveSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObjektTramvajoveDopravyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypObjektuTramvajoveDopravy?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface ObjektTrolejbusoveDopravyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypObjektuTrolejbusoveDopravy?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface ObjektVodovodniSiteBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  ICME?: string;
  StavObjektu?: number;
  TypObjektuVodovodniSite?: number;
  TypMediaVodovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObjektVodovodniSitePlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  ICME?: string;
  StavObjektu?: number;
  TypObjektuVodovodniSite?: number;
  TypMediaVodovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObjektZabezpeceniAPOAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypObjektuZabezpeceni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObjektZarizeniOchranaPredPovodnemiBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  TypObjektuZarizeniOchranaPredPovodnemi?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObjektZarizeniOchranaPredPovodnemiLinieAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  TypObjektuZarizeniOchranaPredPovodnemi?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObvodDrahyAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObvodMostuAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  TypMostu?: number;
  OznaceniKomunikaceTrate?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  OznaceniMostu?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObvodObjektuTIAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypInzenyrskeSite?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface ObvodPozemniKomunikaceAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniKomunikace?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ObvodTuneluAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniTunelu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OchrannaSachtaVrtuAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface OdkalisteBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OdkalistePlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OdpadoveHospodarstviPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuOdpadovehoHospodarstviPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OdpadoveHospodarstviZamerBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuOdpadovehoHospodarstviZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OdpadoveHospodarstviZamerLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuOdpadovehoHospodarstviZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OdpadoveHospodarstviZamerPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuOdpadovehoHospodarstviZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OdpocivkaAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Nazev?: string;
  OznaceniKomunikaceTrate?: string;
  PrevazujiciPovrch?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface OPDalniceProReklamniZarizeniAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  IDObjektuSilnicniStavby?: string;
  CisloETahu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  TypOPPozemniKomunikace?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPDrazniStavbyAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  IDObjektuDrazniStavby?: string;
  TypOPDrazniStavby?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPElektrickeSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  MaximalniNapetovaHladina?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPJadernehoZarizeniAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPKolektoruKabelovoduAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPLeteckychZabezpecovacichZarizeniAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  TypOPLeteckychZabezpecovacichZarizeni?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPLetisteAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  IDObjektuLetiste?: string;
  TypOPLetiste?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPObjektuKanalizaceAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPObjektuVodovoduAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPPlynovodniSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  TlakovaHladinaPlynovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPPodzemnihoZasobnikuPlynuAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  TypPodzemnihoZasobnikuPlynu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPPozemniKomunikaceAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  IDObjektuSilnicniStavby?: string;
  CisloETahu?: string;
  TypOPPozemniKomunikace?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPSiteEKAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  TypOPSiteEK?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPSiteProduktovoduAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  TypOPSiteProduktovodu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPStaniceElektrickeSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  TypStaniceElektrickeSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPStavbyProVodniDopravuAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  IDObjektuStavbyProVodniDopravu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPTeplovodniSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPVodnihoDilaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  KategorieVodnihoDilaZHlediskaTBD?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPVyrobnyElektrinyAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  TypVyrobnyElektriny?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPZarizeniOdpadovehoHospodarstviAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  TypOPZarizeniOdpadovehoHospodarstvi?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OPZarizeniPKOAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OrientacniSloupekTIAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypInzenyrskeSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaJizdnihoPruhuAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface OsaKolejePozemniLanoveDrahyAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaKolejeSpecialniDrahyAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaKolejeTramvajoveDrahyAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaKolejeZeleznicniTrateAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  RokGeodetickehoPorizeni?: number;
  RozchodKoleji?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaMelioracnihoPrikopuZlabuDrenuAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DruhMelioracnichOpatreni?: number;
  RokVystavby?: number;
  Material?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaPozemniKomunikaceAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  PrevazujiciPovrch?: number;
  KategoriePozemniKomunikace?: number;
  CisloETahu?: string;
  TypUsekuPozemniKomunikace?: number;
  PocetJizdnichPruhu?: number;
  OznaceniKomunikace?: string;
  DatumKontroly?: string;
  DelkaKomunikaceM?: number;
  DoplnkovyPopis?: string;
  FunkceKomunikace?: number;
  FunkcniStavObjektu?: number;
  Prilohy?: string;
  SirkaKomunikaceM?: number;
  TypDopravniStavbyNeboPlochy?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaPozemniLanoveDrahyAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DruhDopravyLanoveDrahy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaProtipovodnoveZabranyAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  TypProtipovodnoveZabrany?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaSpecialniDrahyAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaStavbyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface OsaTramvajoveDrahyAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OsaZeleznicniTrateAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  TypUsekuZeleznicniTrate?: number;
  KategorieZeleznicniTrate?: number;
  TypZeleznicniTrate?: number;
  OznaceniTrate?: string;
  PocetKoleji?: number;
  ElektrizaceZeleznicniTrate?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface OstatniMapoveZnackyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  OstatniMapoveZnacky?: number;
  Prilohy?: string;
  Upresneni?: string;
}

export interface OstatniZastresenaStavbaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface OstatniZastresenaStavbaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface OznacnikZastavkyHromadneDopravyBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  UmisteniOznacniku?: number;
  DruhHromadneDopravy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ParkovisteOdstavnaPlochaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  OmezeniParkoviste?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ParkovisteOdstavnaPlochaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  OmezeniParkoviste?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PatkaDeskaMonolitPilirDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PatkaDeskaMonolitPilirPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PlavebniKomoraBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PlavebniKomoraPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PlochaMostniKonstrukceDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  PrujezdnaVyska?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PlochaMostniKonstrukcePlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  PrujezdnaVyska?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PlochaRekultivaceDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PlochaRekultivacePlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PlotAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DruhPlotu?: number;
  HraniceJinehoObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  TypBranky?: number;
  TypPlotuVDoprave?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  VyskaCm?: number;
}

export interface PlynovodKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TlakovaHladinaPlynovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PlynovodKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TlakovaHladinaPlynovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PlynovodMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuPlynovodniSiteZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PlynovodMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuPlynovodniSiteZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PlynovodPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuPlynovodniSitePS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PodezdivkaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PodezdivkaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PodperneZarizeniAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypPodpernehoZarizeni?: number;
  TypSloupu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialUDM?: number;
  Natoceni?: number;
  Prilohy?: string;
  TypUkotveni?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PodrobnyBodCisloAttrs {
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
}

export interface PodrobnyBodDIAttrs {
  CisloBodu?: string;
  Prilohy?: string;
  StabilizaceBodu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  ZpusobPorizeniPB_DI?: number;
}

export interface PodrobnyBodKodAttrs {
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Upresneni?: string;
}

export interface PodrobnyBodTIAttrs {
  CisloBodu?: string;
  Prilohy?: string;
  StabilizaceBodu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypPodrobnehoBoduTI?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  ZpusobPorizeniPB_TI?: number;
}

export interface PodrobnyBodVyskaAttrs {
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Upresneni?: string;
}

export interface PodrobnyBodZPSAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniPB_ZPS?: number;
  CisloBodu?: string;
  DatumKontroly?: string;
  Prilohy?: string;
  StabilizaceBodu?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PodrobnyBodZPSNadRamecDTMAttrs {
  CisloBodu?: string;
  Prilohy?: string;
  StabilizaceBodu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniPB_ZPS?: number;
}

export interface PodzemniObjektZPSDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PodzemniObjektZPSPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PopisyDIAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  VlastnikDITI?: string;
}

export interface PopisySmeruAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  TypSmeru?: number;
  Upresneni?: string;
}

export interface PopisyTIAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  TypInzenyrskeSite?: number;
  Upresneni?: string;
  VlastnikDITI?: string;
}

export interface PopisyZPSAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDPopisovanehoObjektu?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
}

export interface PortalPodchoduDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  PodchoziVyskaCm?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PortalPodchoduPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  PodchoziVyskaCm?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PortalTuneluDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  PrujezdnaVyska?: number;
  SpravceZPS?: string;
  StaniceniPortalu?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PortalTuneluPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  PrujezdnaVyska?: number;
  SpravceZPS?: string;
  StaniceniPortalu?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PovrchovyZnakTIAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypPovrchovehoZnakuTI?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialUDM?: number;
  Natoceni?: number;
  Prilohy?: string;
  TypInzenyrskeSite?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PozemniCastPristavuBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  TypPristavu?: number;
  OchrannaFunkce?: boolean;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PozemniCastPristavuPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  TypPristavu?: number;
  OchrannaFunkce?: boolean;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PozemniLanovaDrahaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PozemniLanovaDrahaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PridruzenaPlochaPozemniKomunikaceDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PridruzenaPlochaPozemniKomunikacePlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PrikopNasepZarezDopravniStavbyDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  TypHranyDs?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PrikopNasepZarezDopravniStavbyPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  TypHranyDs?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface PrivadecNahonOdpadLinieAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypPrivadece?: number;
  Dimenze?: number;
  Material?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PrivadecNahonOdpadPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypPrivadece?: number;
  Dimenze?: number;
  Material?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PrivadecPovrchovychVodKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PrivadecPovrchovychVodKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PrivadecPovrchovychVodPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ProduktovodKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ProduktovodKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ProduktovodMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ProduktovodMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ProduktovodPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PromenneDoprZnackyAZarizeniProvoznichInformaciAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypZPIPDZ?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface ProtihlukovaStenaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  HraniceJinehoObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialUDM?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  VyskaCm?: number;
}

export interface ProtipovodnovaZabranaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypProtipovodnoveZabrany?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ProtipovodnovaZabranaLinieAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypProtipovodnoveZabrany?: number;
  HraniceJinehoObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ProtipovodnovaZabranaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypProtipovodnoveZabrany?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface ProtipovodnoveOpatreniPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ProtipovodnoveOpatreniZamerLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ProtipovodnoveOpatreniZamerPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ProvozniPlochaPodchoduDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  PodchoziVyskaCm?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ProvozniPlochaPodchoduPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  PodchoziVyskaCm?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface ProvozniPlochaPozemniKomunikaceDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypPozemniKomunikace?: number;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  KategoriePozemniKomunikace?: number;
  OznaceniFunkce?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  TypProvozniPlochyPK?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ProvozniPlochaPozemniKomunikacePlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypPozemniKomunikace?: number;
  PrevazujiciPovrch?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  KategoriePozemniKomunikace?: number;
  OznaceniFunkce?: string;
  SpravceZPS?: string;
  TypProvozniPlochyPK?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface ProvozniPlochaTuneluDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypTunelu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  PrujezdnaVyska?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ProvozniPlochaTuneluPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypTunelu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  PrujezdnaVyska?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface ProvozniProstorElektrickeSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  TridaPresnostiPoloha?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  ICS?: string;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PrubehJineTechnologickeStavbyTIAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypPrubehuJineTechnologickeStavbyTI?: number;
  VedeniSiteVJineStavbe?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface PrubehPropustkuAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  Dimenze?: number;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface PrubehTechnologickeKonstrukceAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HraniceJinehoObjektu?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface RampaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialUDM?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface RampaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface RozestavenaPlochaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface RozestavenaPlochaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface SchodisteDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DruhSchodiste?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface SchodistePlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DruhSchodiste?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface SchodyStupneAttrs {
  DatumKontroly?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface SdilenaStavbaTIKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SdilenaStavbaTIKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SdilenaStavbaTIPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SdilenyObjektTIAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypSdilenehoObjektuTI?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  UmisteniObjektu?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SDZTypAVystrazneAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZA?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypAVystrazneZelezniceAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZAZ?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypBZakazoveAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZB?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypCPrikazoveAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZC?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypEDodatkoveAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZE?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypIJInformativniJineAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZIJ?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypIPInformativniProvozniAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZIP?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypIPPInformativniProvozniParkovisteAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZIPP?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypISNInformativniSmeroveNavestiAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZISN?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypISInformativniSmeroveOstatniAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZIS?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypISSInformativniSmeroveSmerovkyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZISS?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypIZInformativniZonoveAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZIZ?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SDZTypPPrednostiAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  KonstrukceDZZ?: number;
  Natoceni?: number;
  NazevSDZP?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypUkotveni?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SilnicniDopravaKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuSilnicniDopravyZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SilnicniDopravaKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuSilnicniDopravyZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SilnicniDopravaMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SilnicniDopravaMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SilnicniDopravaPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuSilnicniDopravyPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SkladkaOdpaduBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavSkladkyOdpadu?: number;
  ZpusobRekultivace?: string;
  DatumRekultivace?: string;
  TypOdpadu?: number;
  Kapacita?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SkladkaOdpaduPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavSkladkyOdpadu?: number;
  ZpusobRekultivace?: string;
  DatumRekultivace?: string;
  TypOdpadu?: number;
  Kapacita?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SklenikDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface SklenikPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface SledovanaVodniCestaLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  NazevSledovaneVodniCesty?: string;
  ZarazeniSledovaneVodniCesty?: number;
  TridaDopravneVyznamneVodniCesty?: number;
  TypSledovaneVodniCesty?: number;
  OznaceniObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SledovanaVodniCestaPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  NazevSledovaneVodniCesty?: string;
  ZarazeniSledovaneVodniCesty?: number;
  TridaDopravneVyznamneVodniCesty?: number;
  TypSledovaneVodniCesty?: number;
  OznaceniObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SloupTechnologickeKonstrukceAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface SouhrnnaPlochaZeleznicnichDrahDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypUsekuZeleznicniTrate?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface SouhrnnaPlochaZeleznicnichDrahPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypUsekuZeleznicniTrate?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface SpalovnaBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  Kapacita?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SpalovnaPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  Kapacita?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface SpecialniDrahaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface SpecialniDrahaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface SrafyAttrs {
  DoplnkovyPopis?: string;
  Upresneni?: string;
}

export interface StaniceElektrickeSiteBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  MaximalniNapetovaHladina?: number;
  MaximalniProvozniNapeti?: number;
  ProvozniNapeti?: string;
  TypStaniceElektrickeSite?: number;
  DruhStaniceElektrickeSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface StaniceElektrickeSitePlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  MaximalniNapetovaHladina?: number;
  MaximalniProvozniNapeti?: number;
  ProvozniNapeti?: string;
  TypStaniceElektrickeSite?: number;
  DruhStaniceElektrickeSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface StaniceniAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypStaniceni?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface StavbaProPesiPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface StavbaProZpevneniPovrchuDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface StavbaProZpevneniPovrchuPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  DruhStavbyProZpevneniPovrchu?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface StavebneUpraveneKorytoDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface StavebneUpraveneKorytoPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface StavebneUpravenyVjezdNaPozemekAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  PrujezdnaSirka?: number;
  PrujezdnaVyska?: number;
  HraniceJinehoObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface SterkovaPrehrazkaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface SterkovaPrehrazkaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface StojanNabijeniVydejniStojanAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypNabijecihoVydejnihoMedia?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface StromAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDExterni?: string;
  Natoceni?: number;
  Okrasny?: boolean;
  Opadavy?: boolean;
  PocetKmenu?: number;
  Prilohy?: string;
  PrumerKmeneCm?: number;
  PrumerKorunyM?: string;
  RozsirenyDruhStromu?: string;
  SpravceZPS?: string;
  StavStromu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Tvarovany?: boolean;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  VyskaStromuM?: string;
  ZakladniDruhStromu?: number;
  ZakladniRozdeleniStromu?: number;
  ZpusobPorizeniZPS?: number;
}

export interface StudnaNaVerejnemProstranstviAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  FunkcniStavObjektu?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface StupenBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface StupenDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface StupenPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface SuchaNadrzDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface SuchaNadrzPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface SvetelneAkustickeSignalyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  Natoceni?: number;
  NazevSAS?: number;
  Poradi?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypSAS?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface SvetelneMistoAttrs {
  DatumKontroly?: string;
  DelkaVyloznikuM?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  Natoceni?: number;
  PocetRamenVylozniku?: number;
  PocetSvitidel?: number;
  Prikon?: number;
  Prilohy?: string;
  SlavnostniSvitidlo?: boolean;
  StavObjektu?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypPredradniku?: number;
  TypSvetelnehoZdroje?: number;
  TypSvitidla?: number;
  TypVylozniku?: number;
  UmisteniObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VazbaNaRozvadec?: string;
  VlastnikDITI?: string;
  VstupDoDTM?: boolean;
  VyskaSvitidlaM?: string;
  ZpusobPorizeniTI?: number;
}

export interface SvodidloAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypSvodidla?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialSvodidla?: number;
  NabehSvodidla?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  TypSvodidlaUpresneni?: number;
  UmisteniSvodidla?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  VyskaCm?: number;
}

export interface TechnickyKanalAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypTechnickehoKanalu?: number;
  VedeniSiteVJineStavbe?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TechnologickyPortalLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  TypTechnologickeKonstrukce?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TechnologickyPortalPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  TypTechnologickeKonstrukce?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TeplovodKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TeplovodKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TeplovodMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypTechnologickehoObjektuTeplovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TeplovodMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypTechnologickehoObjektuTeplovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TeplovodPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuTeplovodniSitePS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TerasaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface TerasaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface TerenniHranaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypTerenniHrany?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface TerminalKombinovaneDopravyMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TerminalKombinovaneDopravyMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TerminalKombinovaneDopravyPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TechnologickyObjektPlynovodniSiteBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TlakovaHladinaPlynovodniSite?: number;
  TypTechnologickehoObjektuPlynovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  UmisteniObjektu?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TechnologickyObjektPlynovodniSitePlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TlakovaHladinaPlynovodniSite?: number;
  TypTechnologickehoObjektuPlynovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TechnologickyObjektSiteEKBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypTechnologickehoObjektuSiteEK?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  UmisteniObjektu?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TechnologickyObjektSiteEKPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypTechnologickehoObjektuSiteEK?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TechnologickyObjektSiteProduktovoduBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TechnologickyObjektSiteProduktovoduPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
}

export interface TechnologickyObjektTeplovodniSiteBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypTechnologickehoObjektuTeplovodniSite?: number;
  DatumKontroly?: string;
  DatumVystavby?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TechnologickyObjektTeplovodniSitePlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypTechnologickehoObjektuTeplovodniSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TramvajovaDrahaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface TramvajovaDrahaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface TrasaElektrickeSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavTrasySiteTI?: number;
  PocetVedeniVTrase?: number;
  VedeniSiteVJineStavbe?: number;
  TypTrasyElektrickeSite?: number;
  MaximalniNapetovaHladina?: number;
  MaximalniProvozniNapeti?: number;
  ProvozniNapeti?: string;
  IzolaceVenkovnihoVedeni?: number;
  DruhElektrickehoProudu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  NapojovaciMisto?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaKanalizacniPripojkyAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  ICS?: string;
  StavObjektu?: number;
  UceloveZarazeniStokoveSite?: number;
  DruhStokoveSite?: number;
  Dimenze?: number;
  Material?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaKynetyAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  HloubkaPodTerenemCm?: number;
  IDExterni?: string;
  PocetPrvkuVTrase?: number;
  Prilohy?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypKynety?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuTI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniTI?: number;
}

export interface TrasaMistniElektrickeSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavTrasySiteTI?: number;
  VedeniSiteVJineStavbe?: number;
  TypTrasyMistniElektrickeSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  VazbaNaRozvadec?: string;
  Vlastnik?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaOdbernehoElektrickehoZarizeniAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  ICS?: string;
  StavObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaOdbernehoPlynovehoZarizeniAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  ICS?: string;
  StavObjektu?: number;
  TlakovaHladinaPlynovodniSite?: number;
  Dimenze?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaProtikorozniOchranyAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypPKO?: number;
  TypInzenyrskeSitePKO?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TrasaPlynovodniPripojkyAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavTrasySiteTI?: number;
  VedeniSiteVJineStavbe?: number;
  TlakovaHladinaPlynovodniSite?: number;
  Dimenze?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaPlynovodniSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavTrasySiteTI?: number;
  VedeniSiteVJineStavbe?: number;
  TlakovaHladinaPlynovodniSite?: number;
  Dimenze?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  NapojovaciMisto?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaPotrubniPostyAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  Dimenze?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  NapojovaciMisto?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaRadiovehoSmerovehoSpojeAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TrasaSiteEKAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavTrasySiteTI?: number;
  PocetVedeniVTrase?: number;
  VedeniSiteVJineStavbe?: number;
  MaterialTrasySiteEK?: number;
  ZpusobOchranyVedeniSiteEK?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  NapojovaciMisto?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaSiteProduktovoduAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavTrasySiteTI?: number;
  VedeniSiteVJineStavbe?: number;
  Dimenze?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  NapojovaciMisto?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TrasaStokoveSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  ICME?: string;
  StavTrasySiteTI?: number;
  VedeniSiteVJineStavbe?: number;
  TypTrasyStokoveSite?: number;
  UceloveZarazeniStokoveSite?: number;
  DruhStokoveSite?: number;
  Dimenze?: number;
  Material?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  NapojovaciMisto?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaTeplovodniSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavTrasySiteTI?: number;
  VedeniSiteVJineStavbe?: number;
  TypTrasyTeplovodniSite?: number;
  TypTeplovodniSite?: number;
  Dimenze?: number;
  DatumKontroly?: string;
  DatumVystavby?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  MaterialTeplovodu?: number;
  NapojovaciMisto?: string;
  Prilohy?: string;
  TypRozvoduTeplovodniSite?: number;
  Ulozeniteplovodu?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TrasaTrakcnihoTrolejovehoVedeniAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavTrasySiteTI?: number;
  ProvozniNapeti?: string;
  DruhElektrickehoProuduTrakcnihoVedeni?: number;
  TypDrahy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface TrasaVodovodniPripojkyAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  ICS?: string;
  StavObjektu?: number;
  Dimenze?: number;
  Material?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrasaVodovodniSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  ICME?: string;
  StavTrasySiteTI?: number;
  VedeniSiteVJineStavbe?: number;
  TypTrasyVodovodniSite?: number;
  TypMediaVodovodniSite?: number;
  Dimenze?: number;
  Material?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  NapojovaciMisto?: string;
  Prilohy?: string;
  TypVodovodnihoRadu?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VodiciPrvek?: boolean;
  VstupDoDTM?: boolean;
}

export interface TrojuhelnikyAttrs {
  DoplnkovyPopis?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  ZpusobPorizeniZPS?: number;
}

export interface UdrzovanaPlochaZeleneDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypUdrzovaneZelene?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  DruhUdrzovaneZelene?: number;
  Prilohy?: string;
  Sklonitost?: number;
  SpravceZPS?: string;
  TypZelene?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZakladniRozdeleniZelene?: number;
}

export interface UdrzovanaPlochaZelenePlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypUdrzovaneZelene?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  DruhUdrzovaneZelene?: number;
  PrumernaVyskaM?: number;
  Sklonitost?: number;
  SpravceZPS?: string;
  TypZelene?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZakladniRozdeleniZelene?: number;
  ZpusobPorizeniZPS?: number;
}

export interface UlozneMistoTezebnihoOdpaduDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface UlozneMistoTezebnihoOdpaduPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface UnikovyVychodAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  SirkaCm?: number;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface VegetacniMisaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface VegetacniMisaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface VerejneProstranstviPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VisutaLanovaDrahaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface VnitrniCleneniBudovStavebAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  TypLinieCleneniBudovAStaveb?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface VnitrniCleneniDopravniPlochyAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  TypLinieCleneniDopravniPlochy?: number;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface VodniCastPristavuBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  TypPristavu?: number;
  OchrannaFunkce?: boolean;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodniCastPristavuPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  TypPristavu?: number;
  OchrannaFunkce?: boolean;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodniDopravaKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodniDopravaKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodniDopravaMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodniDopravaMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodniDopravaPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodniTokDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface VodniTokLinieAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  HraniceJinehoObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface VodniTokPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface VodohospodarskeStavbyNadRamecDTMAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDExterni?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypVodohospodarskehoObjektu?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface VodorovneDopravniZnaceniBodAttrs {
  Barva?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  Natoceni?: number;
  NazevVDZ?: number;
  Prilohy?: string;
  SirkaCm?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface VodorovneDopravniZnaceniLinieAttrs {
  Barva?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  NazevVDZLinieAPlocha?: number;
  Prilohy?: string;
  SirkaCm?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypLiniovehoVDZ?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface VodorovneDopravniZnaceniPlochaAttrs {
  Barva?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  EvidencniCisloObjektu?: string;
  IDExterni?: string;
  NazevVDZLinieAPlocha?: number;
  SirkaCm?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuDI?: number;
  VlastnikDITI?: string;
  ZpusobPorizeniDI?: number;
}

export interface VodovodKoridorZameruLinieAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodovodKoridorZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodovodMistoZameruBodAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuVodovodniSiteZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodovodMistoZameruPlochaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuVodovodniSiteZameru?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VodovodPSAttrs {
  UrovenUmisteniObjektuPSPI?: number;
  IDExterni?: string;
  EvidencniCisloObjektu?: string;
  TypObjektuVodovodniSitePS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  IDProvozovatele?: string;
  IDSpravce?: string;
  IDVlastnika?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VrstevniceAttrs {
  DoplnkovyPopis?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  TypVrstevnice?: number;
  Upresneni?: string;
  ZpusobPorizeniZPS?: number;
}

export interface VrstevnicePopisAttrs {
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Upresneni?: string;
}

export interface VrtAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypVrtu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface VyrobnaElektrinyNad100kWBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypVyrobnyElektriny?: number;
  InstalovanyVykon?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VyrobnaElektrinyNad100kWPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypVyrobnyElektriny?: number;
  InstalovanyVykon?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface VyskovyBodNaTerenuAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  VyskaNaTerenu?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface VytahVChodnikuAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface VzletovaPristavaciDrahaAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  TypPovrchuVzletovePristavaciDrahy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZabradliAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  VyskaCm?: number;
}

export interface ZahradaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ZahradaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface ZahradniBazenDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ZahradniBazenPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface ZajmovaPlochaAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
}

export interface ZakladaniASanaceAttrs {
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  DruhZakladaniASanace?: number;
  EvidencniCisloObjektu?: string;
  FunkcniStavObjektu?: number;
  IDExterni?: string;
  MaterialUDM?: number;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  Upresneni?: string;
  UrovenUmisteniObjektuZPS?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ZarizeniElektrickeSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniElektrickeSite?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  UmisteniObjektu?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniKanalizacniPripojkyBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniKanalizacniPripojky?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniKanalizacniPripojkyDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniKanalizacniPripojky?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniKanalizacniPripojkyPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniKanalizacniPripojky?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniTI?: number;
}

export interface ZarizeniProLeteckyProvozAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  OznaceniObjektu?: string;
  TypZarizeniProLeteckyProvoz?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniProtikorozniOchranyBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypInzenyrskeSitePKO?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  UmisteniObjektu?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniProtikorozniOchranyPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypInzenyrskeSitePKO?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniPlynovodniSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniPlynovodniSite?: number;
  UmisteniObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniPotrubniPostyAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniPotrubniPosty?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniPrivadeceAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniPrivadece?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniSiteEKAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniSiteEK?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  UmisteniObjektu?: number;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniSiteProduktovoduBodAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniSiteProduktovodu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniSiteProduktovoduPlochaAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniSiteProduktovodu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniTeplovodniSiteAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniTeplovodniSite?: number;
  DatumKontroly?: string;
  DatumVystavby?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniVodovodniPripojkyBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniVodovodniPripojky?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Natoceni?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniVodovodniPripojkyDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniVodovodniPripojky?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ZarizeniVodovodniPripojkyPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  StavObjektu?: number;
  TypZarizeniVodovodniPripojky?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniTI?: number;
}

export interface ZastreseniDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ZastreseniPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

export interface ZatrubnenyVodniTokAttrs {
  IDVlastnika?: string;
  IDProvozovateleZeZakona?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuTI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniTI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  Dimenze?: number;
  Material?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  HloubkaUlozeniCm?: number;
  Prilohy?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZedDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypZdi?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialUDM?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  VyskaZdiCm?: number;
}

export interface ZedLinieAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  ZpusobPorizeniZPS?: number;
  TypZdi?: number;
  HraniceJinehoObjektu?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialUDM?: number;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  VyskaZdiCm?: number;
}

export interface ZedPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypZdi?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  MaterialUDM?: number;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  VyskaZdiCm?: number;
  ZpusobPorizeniZPS?: number;
}

export interface ZeleznicniPrejezdAttrs {
  IDVlastnika?: string;
  IDSpravce?: string;
  IDProvozovatele?: string;
  IDExterni?: string;
  NeuplnaData?: boolean;
  UrovenUmisteniObjektuDI?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ZpusobPorizeniDI?: number;
  EvidencniCisloObjektu?: string;
  ICS?: string;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Upresneni?: string;
  Vlastnik?: string;
  VstupDoDTM?: boolean;
}

export interface ZemedelskaPlochaDefinicniBodAttrs {
  UrovenUmisteniObjektuZPS?: number;
  ICS?: string;
  TypZemedelskePlochy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  Prilohy?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
}

export interface ZemedelskaPlochaPlochaAttrs {
  UrovenUmisteniObjektuZPS?: number;
  TridaPresnostiPoloha?: number;
  TridaPresnostiVyska?: number;
  ICS?: string;
  TypZemedelskePlochy?: number;
  DatumKontroly?: string;
  DoplnkovyPopis?: string;
  SpravceZPS?: string;
  Upresneni?: string;
  VstupDoDTM?: boolean;
  ZpusobPorizeniZPS?: number;
}

/** Catalog of all 470 UDM 2.1.1 entity types, keyed by XML element name */
export const ENTITY_CATALOG: Record<string, EntityMeta> = {
  "BodovyPrvekNaBudove": {
    elementName: "BodovyPrvekNaBudove",
    nazev: "bodový prvek na budově",
    codeBase: "9400001054",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Pasporty",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","IDExterni","Natoceni","Prilohy","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","TypBodovehoPrvkunaBudove","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "BPPlynovodniSite": {
    elementName: "BPPlynovodniSite",
    nazev: "bezpečnostní pásmo plynovodní sítě",
    codeBase: "0100000290",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","TlakovaHladinaPlynovodniSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "BPPodzemnihoZasobnikuPlynu": {
    elementName: "BPPodzemnihoZasobnikuPlynu",
    nazev: "bezpečnostní pásmo podzemního zásobníku plynu",
    codeBase: "0100000369",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","TypPodzemnihoZasobnikuPlynu","DatumKontroly","DoplnkovyPopis","Upresneni","UrovenUmisteniObjektuTI","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "BPZarizeniPKO": {
    elementName: "BPZarizeniPKO",
    nazev: "bezpečnostní pásmo zařízení PKO",
    codeBase: "0100000291",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "BudovaDefinicniBod": {
    elementName: "BudovaDefinicniBod",
    nazev: "budova",
    codeBase: "0100000001",
    codeSuffix: "04",
    kategorieObjektu: "Budovy",
    skupinaObjektu: "Objekt budovy",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","KonstrukceBudovy","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","KonstrukceBudovy","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","StaniceniPropustku","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklistickaDopravaKoridorZameruLinie": {
    elementName: "CyklistickaDopravaKoridorZameruLinie",
    nazev: "cyklistická doprava - koridor záměru",
    codeBase: "0100000347",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklistickaDopravaKoridorZameruPlocha": {
    elementName: "CyklistickaDopravaKoridorZameruPlocha",
    nazev: "cyklistická doprava - koridor záměru",
    codeBase: "0100000347",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklistickaDopravaMistoZameruBod": {
    elementName: "CyklistickaDopravaMistoZameruBod",
    nazev: "cyklistická doprava - místo záměru",
    codeBase: "0100000348",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklistickaDopravaMistoZameruPlocha": {
    elementName: "CyklistickaDopravaMistoZameruPlocha",
    nazev: "cyklistická doprava - místo záměru",
    codeBase: "0100000348",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "CyklistickaDopravaPS": {
    elementName: "CyklistickaDopravaPS",
    nazev: "cyklistická doprava - plánovaná stavba",
    codeBase: "0200000006",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","PrevazujiciPovrch","OznaceniCyklostezky","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","PrevazujiciPovrch","OznaceniCyklostezky","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DoplnekKatastru": {
    elementName: "DoplnekKatastru",
    nazev: "doplněk katastru",
    codeBase: "9400001026",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Katastr",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypHraniceKatastru","Upresneni","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "DopravneVyznamneMistoDrazeBod": {
    elementName: "DopravneVyznamneMistoDrazeBod",
    nazev: "dopravně významné místo na dráze",
    codeBase: "0100000040",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","TypDopravneVyznamnehoMistaDraze","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","TypDopravneVyznamnehoMistaDraze","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","CisloUzlu","CislaKrizujicichKomunikaci","TypUzlu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DopravniZarizeniBod": {
    elementName: "DopravniZarizeniBod",
    nazev: "dopravní zařízení",
    codeBase: "9400001001",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Silniční zařízení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevDZ","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypDopravnihoZarizeniBod","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "DopravniZarizeniLinie": {
    elementName: "DopravniZarizeniLinie",
    nazev: "dopravní zařízení",
    codeBase: "9400001001",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Silniční zařízení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypDopravnihoZarizeniLinie","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "DrazniDopravaKoridorZameruLinie": {
    elementName: "DrazniDopravaKoridorZameruLinie",
    nazev: "drážní doprava - koridor záměru",
    codeBase: "0100000341",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypDrahy","KategorieZeleznicniTrate","TypZeleznicniTrate","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrazniDopravaKoridorZameruPlocha": {
    elementName: "DrazniDopravaKoridorZameruPlocha",
    nazev: "drážní doprava - koridor záměru",
    codeBase: "0100000341",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypDrahy","KategorieZeleznicniTrate","TypZeleznicniTrate","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrazniDopravaMistoZameruBod": {
    elementName: "DrazniDopravaMistoZameruBod",
    nazev: "drážní doprava - místo záměru",
    codeBase: "0100000342",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypDrahy","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrazniDopravaMistoZameruPlocha": {
    elementName: "DrazniDopravaMistoZameruPlocha",
    nazev: "drážní doprava - místo záměru",
    codeBase: "0100000342",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypDrahy","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DrazniDopravaPS": {
    elementName: "DrazniDopravaPS",
    nazev: "drážní doprava - plánovaná stavba",
    codeBase: "0200000002",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","TypDrahy","KategorieZeleznicniTrate","TypZeleznicniTrate","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypDrobneKulturniStavby","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypDrobneKulturniStavby","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypDrobneKulturniStavby","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypDrobneSakralniStavby","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypDrobneSakralniStavby","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypDrobneSakralniStavby","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "DulniObjekt": {
    elementName: "DulniObjekt",
    nazev: "důlní objekt",
    codeBase: "9400001055",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "ZPS Ostatní stavby",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","IDExterni","Natoceni","Prilohy","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","TypDulnihoObjektu","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "DvurNadvoriDefinicniBod": {
    elementName: "DvurNadvoriDefinicniBod",
    nazev: "dvůr, nádvoří",
    codeBase: "0100000189",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektrickaSitKoridorZameruLinie": {
    elementName: "ElektrickaSitKoridorZameruLinie",
    nazev: "elektrická síť - koridor záměru",
    codeBase: "0100000350",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","MaximalniNapetovaHladina","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektrickaSitKoridorZameruPlocha": {
    elementName: "ElektrickaSitKoridorZameruPlocha",
    nazev: "elektrická síť - koridor záměru",
    codeBase: "0100000350",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","MaximalniNapetovaHladina","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektrickaSitMistoZameruBod": {
    elementName: "ElektrickaSitMistoZameruBod",
    nazev: "elektrická síť - místo záměru",
    codeBase: "0100000351",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuElektrickeSiteZameru","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektrickaSitMistoZameruPlocha": {
    elementName: "ElektrickaSitMistoZameruPlocha",
    nazev: "elektrická síť - místo záměru",
    codeBase: "0100000351",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuElektrickeSiteZameru","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektrickaSitPS": {
    elementName: "ElektrickaSitPS",
    nazev: "elektrická síť - plánovaná stavba",
    codeBase: "0200000008",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","TypObjektuElektrickeSitePS","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektronickaKomunikaceKoridorZameruLinie": {
    elementName: "ElektronickaKomunikaceKoridorZameruLinie",
    nazev: "elektronická komunikace - koridor záměru",
    codeBase: "0100000352",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektronickaKomunikaceKoridorZameruPlocha": {
    elementName: "ElektronickaKomunikaceKoridorZameruPlocha",
    nazev: "elektronická komunikace - koridor záměru",
    codeBase: "0100000352",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektronickaKomunikaceMistoZameruBod": {
    elementName: "ElektronickaKomunikaceMistoZameruBod",
    nazev: "elektronická komunikace - místo záměru",
    codeBase: "0100000353",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektronickaKomunikaceMistoZameruPlocha": {
    elementName: "ElektronickaKomunikaceMistoZameruPlocha",
    nazev: "elektronická komunikace - místo záměru",
    codeBase: "0100000353",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ElektronickaKomunikacePS": {
    elementName: "ElektronickaKomunikacePS",
    nazev: "elektronická komunikace - plánovaná stavba",
    codeBase: "0200000009",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "GeodetickyBod": {
    elementName: "GeodetickyBod",
    nazev: "geodetické body",
    codeBase: "9400001027",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Geodetické prvky",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","StabilizaceBodu","TridaPresnostiPoloha","TridaPresnostiVyska","TypGeodetickehoBodu","Upresneni","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "HeliportBod": {
    elementName: "HeliportBod",
    nazev: "heliport",
    codeBase: "0100000048",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Letecká doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","OznaceniHeliportu","UmisteniHeliportu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","OznaceniHeliportu","UmisteniHeliportu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HorniHranaObrubyLinie": {
    elementName: "HorniHranaObrubyLinie",
    nazev: "horní hrana obruby",
    codeBase: "0100000380",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "curve",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","MaterialUDM","Prilohy","SpravceZPS","Upresneni","VstupDoBudovy","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypDopravniStavbyNeboPlochy","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","TypHraniceDSP","TypLinieCleneniDopravniPlochy","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypOstatniPlochy","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypPrirodnihoPoloprirodnihoObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DruhSchodiste","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypStavby","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypVodnihoDila","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","StavObjektu","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","StavObjektu","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypZdi","DatumKontroly","DoplnkovyPopis","MaterialUDM","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "HroboveMisto": {
    elementName: "HroboveMisto",
    nazev: "hrobové místo",
    codeBase: "9400001056",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Pasporty",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","HraniceJinehoObjektu","IDExterni","Prilohy","SpravceZPS","StavHrobovehoMista","TridaPresnostiPoloha","TridaPresnostiVyska","TypHrobovehoMista","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "HydrantVodovodniSiteBod": {
    elementName: "HydrantVodovodniSiteBod",
    nazev: "hydrant vodovodní sítě",
    codeBase: "0100000387",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","ICME","StavObjektu","TypHydrantuVodovodniSite","TypMediaVodovodniSite","DimenzeHydrantuVodovodniSite","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","CisloBodu","DatumKontroly","DoplnkovyPopis","Kody","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "InformacniATelematickeZarizeni": {
    elementName: "InformacniATelematickeZarizeni",
    nazev: "informační a telematické zařízení",
    codeBase: "9400001002",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Silniční zařízení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","Natoceni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypITS","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "JaderneZarizeniBod": {
    elementName: "JaderneZarizeniBod",
    nazev: "jaderné zařízení",
    codeBase: "0100000104",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypJadernehoZarizeni","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JaderneZarizeniPlocha": {
    elementName: "JaderneZarizeniPlocha",
    nazev: "jaderné zařízení",
    codeBase: "0100000104",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypJadernehoZarizeni","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JezDefinicniBod": {
    elementName: "JezDefinicniBod",
    nazev: "jez",
    codeBase: "0100000332",
    codeSuffix: "04",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Vzdouvací stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JinaStavbaDIPS": {
    elementName: "JinaStavbaDIPS",
    nazev: "jiná stavba DI - plánovaná stavba",
    codeBase: "0200000020",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JinaStavbaTIPS": {
    elementName: "JinaStavbaTIPS",
    nazev: "jiná stavba TI - plánovaná stavba",
    codeBase: "0200000021",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JinaTechnologickaStavbaTIPlocha": {
    elementName: "JinaTechnologickaStavbaTIPlocha",
    nazev: "jiná technologická stavba TI",
    codeBase: "0100000096",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JineDulniDiloStavbaDefinicniBod": {
    elementName: "JineDulniDiloStavbaDefinicniBod",
    nazev: "jiné důlní dílo, důlní stavba",
    codeBase: "0100000146",
    codeSuffix: "04",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Důlní dílo, důlní stavba",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniOdstranovaniOdpadu","PovoleniNakladaniNebezpecnymOdpadem","Kapacita","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha": {
    elementName: "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha",
    nazev: "jiné zařízení na odstraňování, využívání nebo sběr odpadů",
    codeBase: "0100000150",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniOdstranovaniOdpadu","PovoleniNakladaniNebezpecnymOdpadem","Kapacita","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JineZarizeniStavebTI": {
    elementName: "JineZarizeniStavebTI",
    nazev: "jiné zařízení staveb TI",
    codeBase: "0100000139",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypJinehoZarizeniStavebTI","UmisteniObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JineZarizeniStavebTILinie": {
    elementName: "JineZarizeniStavebTILinie",
    nazev: "jiné zařízení staveb TI",
    codeBase: "0100000139",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypJinehoZarizeniStavebTI","UmisteniObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "JineZarizeniStavebTIPlocha": {
    elementName: "JineZarizeniStavebTIPlocha",
    nazev: "jiné zařízení staveb TI",
    codeBase: "0100000139",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypJinehoZarizeniStavebTI","UmisteniObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KanalizaceKoridorZameruLinie": {
    elementName: "KanalizaceKoridorZameruLinie",
    nazev: "kanalizace - koridor záměru",
    codeBase: "0100000358",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KanalizaceKoridorZameruPlocha": {
    elementName: "KanalizaceKoridorZameruPlocha",
    nazev: "kanalizace - koridor záměru",
    codeBase: "0100000358",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KanalizaceMistoZameruBod": {
    elementName: "KanalizaceMistoZameruBod",
    nazev: "kanalizace - místo záměru",
    codeBase: "0100000359",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuStokoveSiteZameru","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KanalizaceMistoZameruPlocha": {
    elementName: "KanalizaceMistoZameruPlocha",
    nazev: "kanalizace - místo záměru",
    codeBase: "0100000359",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuStokoveSiteZameru","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KanalizacePS": {
    elementName: "KanalizacePS",
    nazev: "kanalizace - plánovaná stavba",
    codeBase: "0200000012",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","TypObjektuStokoveSitePS","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KatastrDleVFKLinie": {
    elementName: "KatastrDleVFKLinie",
    nazev: "katastr dle VFK",
    codeBase: "9400001028",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Katastr",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypKatastralniHranice","Upresneni","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "Ker": {
    elementName: "Ker",
    nazev: "keř",
    codeBase: "9400001057",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Zeleň",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","IDExterni","Natoceni","Okrasny","Opadavy","Prilohy","PrumerKorunyCm","RozsirenyDruhKere","Soliterni","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","Trnity","Tvarovany","Upresneni","UrovenUmisteniObjektuZPS","VyskaDrevinyCm","ZakladniDruhKere","ZakladniRozdeleniKeru","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "Kolektor": {
    elementName: "Kolektor",
    nazev: "kolektor",
    codeBase: "0100000091",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","VedeniSiteVJineStavbe","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","TypKolektoru","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KolektorPlocha": {
    elementName: "KolektorPlocha",
    nazev: "kolektor",
    codeBase: "0100000091",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","VedeniSiteVJineStavbe","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","TypKolektoru","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KominDefinicniBod": {
    elementName: "KominDefinicniBod",
    nazev: "komín",
    codeBase: "0100000177",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "KomunalniATridenyOdpad": {
    elementName: "KomunalniATridenyOdpad",
    nazev: "komunální a tříděný odpad",
    codeBase: "9400001058",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Pasporty",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","HraniceJinehoObjektu","IDExterni","Prilohy","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "LesDefinicniBod": {
    elementName: "LesDefinicniBod",
    nazev: "les",
    codeBase: "0100000211",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Hospodářská plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","DruhLesa","Prilohy","SpravceZPS","Typlesa","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","DruhLesa","SpravceZPS","Typlesa","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaDopravaKoridorZameruLinie": {
    elementName: "LeteckaDopravaKoridorZameruLinie",
    nazev: "letecká doprava - koridor záměru",
    codeBase: "0100000345",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaDopravaKoridorZameruPlocha": {
    elementName: "LeteckaDopravaKoridorZameruPlocha",
    nazev: "letecká doprava - koridor záměru",
    codeBase: "0100000345",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaDopravaMistoZameruBod": {
    elementName: "LeteckaDopravaMistoZameruBod",
    nazev: "letecká doprava - místo záměru",
    codeBase: "0100000346",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaDopravaMistoZameruPlocha": {
    elementName: "LeteckaDopravaMistoZameruPlocha",
    nazev: "letecká doprava - místo záměru",
    codeBase: "0100000346",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LeteckaDopravaPS": {
    elementName: "LeteckaDopravaPS",
    nazev: "letecká doprava - plánovaná stavba",
    codeBase: "0200000004",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","TypLeteckeStavby","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","TypLeteckeStavby","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DruhLetiste","ICAOKodLetiste","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "LiniovyPrvekZelene": {
    elementName: "LiniovyPrvekZelene",
    nazev: "liniový prvek zeleně",
    codeBase: "9400001059",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Zeleň",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","DruhLinioveZelene","IDExterni","Prilohy","SirkaPrvkuM","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","Trnitost","Tvarovany","TypLiniovehoPrvkuZelene","Upresneni","UrovenUmisteniObjektuZPS","VyskaLiniovehoPrvkuZeleneM","ZakladniRozdeleniZelene","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ManipulacniPlochaDefinicniBod": {
    elementName: "ManipulacniPlochaDefinicniBod",
    nazev: "manipulační plocha",
    codeBase: "0100000055",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","FunkcniStavObjektu","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Mobiliar": {
    elementName: "Mobiliar",
    nazev: "mobiliář",
    codeBase: "9400001060",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Pasporty",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","MaterialUDM","Natoceni","Prilohy","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","TypMobiliare","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "MostniVahaDefinicniBod": {
    elementName: "MostniVahaDefinicniBod",
    nazev: "mostní váha",
    codeBase: "0100000070",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypNadrzeBezVzdouvacihoObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypNadrzeBezVzdouvacihoObjektu","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypNadrzeZdrzeSeVzdouvacimObjektem","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypNadrzeZdrzeSeVzdouvacimObjektem","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Nazvy": {
    elementName: "Nazvy",
    nazev: "názvy",
    codeBase: "9400001029",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Popisy a názvy",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","Natoceni","TypNazvu","Upresneni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "NeidentifikovanyObjekt": {
    elementName: "NeidentifikovanyObjekt",
    nazev: "neidentifikovaný objekt",
    codeBase: "0100000202",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Doplňkové zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "NeviditelnaHranice": {
    elementName: "NeviditelnaHranice",
    nazev: "neviditelné hranice",
    codeBase: "9400001030",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Ostatní hranice",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypNeviditelneHranice","Upresneni","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "NosicTechnickehoZarizeni": {
    elementName: "NosicTechnickehoZarizeni",
    nazev: "nosič technického zařízení",
    codeBase: "0100000201",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Zařízení staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypNosiceTechnickehoZarizeni","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "O6": {
    elementName: "O6",
    nazev: "o6",
    codeBase: "0100000372",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","UrovenUmisteniObjektuTI","Vlastnik","VstupDoDTM","ZpusobPorizeniTI"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObecnePoznamky": {
    elementName: "ObecnePoznamky",
    nazev: "obecné poznámky",
    codeBase: "9400001031",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Popisy a názvy",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","TypPoznamky","Upresneni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektZeleznicniDopravy": {
    elementName: "ObjektZeleznicniDopravy",
    nazev: "objekt železniční dopravy",
    codeBase: "9400001003",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Zařízení kolejové dopravy",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypObjektuZeleznicniDopravy","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektLanoveDopravy": {
    elementName: "ObjektLanoveDopravy",
    nazev: "objekt lanove dopravy",
    codeBase: "9400001074",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Zařízení trolejove a lanove dopravy",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","TridaPresnostiPoloha","TridaPresnostiVyska","TypObjektuLanoveDopravy","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektNadRamecDTMEK": {
    elementName: "ObjektNadRamecDTMEK",
    nazev: "objekt nad rámec DTM - EK",
    codeBase: "9400001040",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Elektronické komunikace",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","RozsirenyTypObjektuElektronickeKomunikace","TridaPresnostiPoloha","TridaPresnostiVyska","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektNadRamecDTMElektrickeVedeni": {
    elementName: "ObjektNadRamecDTMElektrickeVedeni",
    nazev: "objekt nad rámec DTM - elektrické vedení",
    codeBase: "9400001041",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Elektrické vedení",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","RozsirenyTypObjektuElektrickehoVedeni","TridaPresnostiPoloha","TridaPresnostiVyska","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektNadRamecDTMStokovesite": {
    elementName: "ObjektNadRamecDTMStokovesite",
    nazev: "objekt nad rámec DTM - stoková síť",
    codeBase: "9400001042",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Kanalizace",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","RozsirenyTypObjektuStokoveSite","TridaPresnostiPoloha","TridaPresnostiVyska","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektNadRamecDTMKolektory": {
    elementName: "ObjektNadRamecDTMKolektory",
    nazev: "objekt nad rámec DTM - kolektory",
    codeBase: "9400001043",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Sdílené stavby a objekty",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","RozsirenyTypObjektuKolektoru","TridaPresnostiPoloha","TridaPresnostiVyska","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektNadRamecDTMPlynovody": {
    elementName: "ObjektNadRamecDTMPlynovody",
    nazev: "objekt nad rámec DTM - plynovody",
    codeBase: "9400001044",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Plynovod",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","RozsirenyTypObjektuPlynovodu","TridaPresnostiPoloha","TridaPresnostiVyska","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektNadRamecDTMProduktovody": {
    elementName: "ObjektNadRamecDTMProduktovody",
    nazev: "objekt nad rámec DTM - produktovody",
    codeBase: "9400001045",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Produktovod",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","RozsirenyTypObjektuProduktovodu","TridaPresnostiPoloha","TridaPresnostiVyska","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektNadRamecDTMTeplovody": {
    elementName: "ObjektNadRamecDTMTeplovody",
    nazev: "objekt nad rámec DTM - teplovody",
    codeBase: "9400001046",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Teplovod",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DatumVystavby","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","RozsirenyTypObjektuTeplovodu","TridaPresnostiPoloha","TridaPresnostiVyska","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektNadRamecDTMVodovody": {
    elementName: "ObjektNadRamecDTMVodovody",
    nazev: "objekt nad rámec DTM - vodovody",
    codeBase: "9400001047",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Vodovod",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","RozsirenyTypObjektuVodovodu","TridaPresnostiPoloha","TridaPresnostiVyska","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektNadRamecDTMZarizeniStaveb": {
    elementName: "ObjektNadRamecDTMZarizeniStaveb",
    nazev: "objekt nad rámec DTM - zařízení staveb",
    codeBase: "9400001048",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Sdílené stavby a objekty",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektOdvodneniStavbyBod": {
    elementName: "ObjektOdvodneniStavbyBod",
    nazev: "objekt odvodnění stavby",
    codeBase: "0100000329",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypObjektuOdvodneniStavby","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObjektOdvodneniStavbyLinie": {
    elementName: "ObjektOdvodneniStavbyLinie",
    nazev: "objekt odvodnění stavby",
    codeBase: "0100000329",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypObjektuOdvodneniStavby","DatumKontroly","Dimenze","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObjektOdvodneniStavbyPlocha": {
    elementName: "ObjektOdvodneniStavbyPlocha",
    nazev: "objekt odvodnění stavby",
    codeBase: "0100000329",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypObjektuOdvodneniStavby","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObjektStokoveSiteBod": {
    elementName: "ObjektStokoveSiteBod",
    nazev: "objekt stokové sítě",
    codeBase: "0100000337",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","ICME","TypObjektuStokoveSite","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObjektStokoveSitePlocha": {
    elementName: "ObjektStokoveSitePlocha",
    nazev: "objekt stokové sítě",
    codeBase: "0100000337",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","ICME","StavObjektu","TypObjektuStokoveSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObjektTramvajoveDopravy": {
    elementName: "ObjektTramvajoveDopravy",
    nazev: "objekt tramvajové dopravy",
    codeBase: "9400001072",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Zařízení kolejové dopravy",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","TridaPresnostiPoloha","TridaPresnostiVyska","TypObjektuTramvajoveDopravy","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektTrolejbusoveDopravy": {
    elementName: "ObjektTrolejbusoveDopravy",
    nazev: "objekt trolejbusové dopravy",
    codeBase: "9400001073",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Zařízení trolejove a lanove dopravy",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","TridaPresnostiPoloha","TridaPresnostiVyska","TypObjektuTrolejbusoveDopravy","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektVodovodniSiteBod": {
    elementName: "ObjektVodovodniSiteBod",
    nazev: "objekt vodovodní sítě",
    codeBase: "0100000336",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","ICME","StavObjektu","TypObjektuVodovodniSite","TypMediaVodovodniSite","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObjektVodovodniSitePlocha": {
    elementName: "ObjektVodovodniSitePlocha",
    nazev: "objekt vodovodní sítě",
    codeBase: "0100000336",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","ICME","StavObjektu","TypObjektuVodovodniSite","TypMediaVodovodniSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObjektZabezpeceniAPO": {
    elementName: "ObjektZabezpeceniAPO",
    nazev: "objekt zabezpečení a požární ochrany",
    codeBase: "9400001049",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Zabezpečení a požární ochrana",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypObjektuZabezpeceni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObjektZarizeniOchranaPredPovodnemiBod": {
    elementName: "ObjektZarizeniOchranaPredPovodnemiBod",
    nazev: "objekt nebo zařízení k ochraně před povodněmi",
    codeBase: "0100000089",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","TypObjektuZarizeniOchranaPredPovodnemi","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObjektZarizeniOchranaPredPovodnemiLinie": {
    elementName: "ObjektZarizeniOchranaPredPovodnemiLinie",
    nazev: "objekt nebo zařízení k ochraně před povodněmi",
    codeBase: "0100000089",
    codeSuffix: "02",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Stavba, objekt a zařízení k ochraně před povodněmi",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","TypObjektuZarizeniOchranaPredPovodnemi","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObvodDrahy": {
    elementName: "ObvodDrahy",
    nazev: "obvod dráhy",
    codeBase: "0100000019",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","TypMostu","OznaceniKomunikaceTrate","DatumKontroly","DoplnkovyPopis","OznaceniMostu","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObvodObjektuTI": {
    elementName: "ObvodObjektuTI",
    nazev: "obvod objektu TI",
    codeBase: "9400001050",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "TI Obvody",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypInzenyrskeSite","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ObvodPozemniKomunikace": {
    elementName: "ObvodPozemniKomunikace",
    nazev: "obvod pozemní komunikace",
    codeBase: "0100000003",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniKomunikace","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ObvodTunelu": {
    elementName: "ObvodTunelu",
    nazev: "obvod tunelu",
    codeBase: "0100000379",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniTunelu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OdkalistePlocha": {
    elementName: "OdkalistePlocha",
    nazev: "odkaliště",
    codeBase: "0100000151",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OdpadoveHospodarstviPS": {
    elementName: "OdpadoveHospodarstviPS",
    nazev: "odpadové hospodářství - plánovaná stavba",
    codeBase: "0200000015",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","TypObjektuOdpadovehoHospodarstviPS","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OdpadoveHospodarstviZamerBod": {
    elementName: "OdpadoveHospodarstviZamerBod",
    nazev: "odpadové hospodářství - záměr",
    codeBase: "0100000364",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuOdpadovehoHospodarstviZameru","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuOdpadovehoHospodarstviZameru","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuOdpadovehoHospodarstviZameru","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Odpocivka": {
    elementName: "Odpocivka",
    nazev: "odpočívka",
    codeBase: "9400001004",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Silniční zařízení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Nazev","OznaceniKomunikaceTrate","PrevazujiciPovrch","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "OPDalniceProReklamniZarizeni": {
    elementName: "OPDalniceProReklamniZarizeni",
    nazev: "ochranné pásmo dálnice pro reklamní zařízení",
    codeBase: "0100000388",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniDI","EvidencniCisloObjektu","IDObjektuSilnicniStavby","CisloETahu","DatumKontroly","DoplnkovyPopis","TypOPPozemniKomunikace","Upresneni","UrovenUmisteniObjektuDI","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPDrazniStavby": {
    elementName: "OPDrazniStavby",
    nazev: "ochranné pásmo drážní stavby",
    codeBase: "0100000295",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniDI","EvidencniCisloObjektu","IDObjektuDrazniStavby","TypOPDrazniStavby","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","MaximalniNapetovaHladina","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPJadernehoZarizeni": {
    elementName: "OPJadernehoZarizeni",
    nazev: "ochranné pásmo jaderného zařízení",
    codeBase: "0100000288",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPKolektoruKabelovodu": {
    elementName: "OPKolektoruKabelovodu",
    nazev: "ochranné pásmo kolektoru, kabelovodu",
    codeBase: "0100000287",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPLeteckychZabezpecovacichZarizeni": {
    elementName: "OPLeteckychZabezpecovacichZarizeni",
    nazev: "ochranné pásmo leteckých zabezpečovacích zařízení",
    codeBase: "0100000297",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniDI","EvidencniCisloObjektu","TypOPLeteckychZabezpecovacichZarizeni","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniDI","EvidencniCisloObjektu","IDObjektuLetiste","TypOPLetiste","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPObjektuVodovodu": {
    elementName: "OPObjektuVodovodu",
    nazev: "ochranné pásmo objektu vodovodu",
    codeBase: "0100000279",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPPlynovodniSite": {
    elementName: "OPPlynovodniSite",
    nazev: "ochranné pásmo plynovodní sítě",
    codeBase: "0100000283",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","TlakovaHladinaPlynovodniSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPPodzemnihoZasobnikuPlynu": {
    elementName: "OPPodzemnihoZasobnikuPlynu",
    nazev: "ochranné pásmo podzemního zásobníku plynu",
    codeBase: "0100000368",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","TypPodzemnihoZasobnikuPlynu","DatumKontroly","DoplnkovyPopis","Upresneni","UrovenUmisteniObjektuTI","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPPozemniKomunikace": {
    elementName: "OPPozemniKomunikace",
    nazev: "ochranné pásmo pozemní komunikace",
    codeBase: "0100000294",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniDI","EvidencniCisloObjektu","IDObjektuSilnicniStavby","CisloETahu","TypOPPozemniKomunikace","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","TypOPSiteEK","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPSiteProduktovodu": {
    elementName: "OPSiteProduktovodu",
    nazev: "ochranné pásmo sítě produktovodu",
    codeBase: "0100000284",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","TypOPSiteProduktovodu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPStaniceElektrickeSite": {
    elementName: "OPStaniceElektrickeSite",
    nazev: "ochranné pásmo stanice elektrické sítě",
    codeBase: "0100000317",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","TypStaniceElektrickeSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPStavbyProVodniDopravu": {
    elementName: "OPStavbyProVodniDopravu",
    nazev: "ochranné pásmo stavby pro vodní dopravu",
    codeBase: "0100000298",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniDI","EvidencniCisloObjektu","IDObjektuStavbyProVodniDopravu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPVodnihoDila": {
    elementName: "OPVodnihoDila",
    nazev: "ochranné pásmo vodního díla",
    codeBase: "0100000293",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","KategorieVodnihoDilaZHlediskaTBD","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPVyrobnyElektriny": {
    elementName: "OPVyrobnyElektriny",
    nazev: "ochranné pásmo výrobny elektřiny",
    codeBase: "0100000282",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","TypVyrobnyElektriny","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPZarizeniOdpadovehoHospodarstvi": {
    elementName: "OPZarizeniOdpadovehoHospodarstvi",
    nazev: "ochranné pásmo zařízení odpadového hospodářství",
    codeBase: "0100000292",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","TypOPZarizeniOdpadovehoHospodarstvi","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OPZarizeniPKO": {
    elementName: "OPZarizeniPKO",
    nazev: "ochranné pásmo zařízení PKO",
    codeBase: "0100000289",
    codeSuffix: "03",
    kategorieObjektu: "Ochranná a bezpečnostní pásma",
    skupinaObjektu: "Ochranné a bezpečnostní pásmo",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypInzenyrskeSite","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaJizdnihoPruhu": {
    elementName: "OsaJizdnihoPruhu",
    nazev: "osa jízdního pruhu",
    codeBase: "9400001005",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Osy",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "OsaKolejePozemniLanoveDrahy": {
    elementName: "OsaKolejePozemniLanoveDrahy",
    nazev: "osa koleje pozemní lanové dráhy",
    codeBase: "0100000031",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","RokGeodetickehoPorizeni","RozchodKoleji","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","DruhMelioracnichOpatreni","RokVystavby","Material","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaPozemniKomunikace": {
    elementName: "OsaPozemniKomunikace",
    nazev: "osa pozemní komunikace",
    codeBase: "0100000004",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Silniční doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","PrevazujiciPovrch","KategoriePozemniKomunikace","CisloETahu","TypUsekuPozemniKomunikace","PocetJizdnichPruhu","OznaceniKomunikace","DatumKontroly","DelkaKomunikaceM","DoplnkovyPopis","FunkceKomunikace","FunkcniStavObjektu","Prilohy","SirkaKomunikaceM","TypDopravniStavbyNeboPlochy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DruhDopravyLanoveDrahy","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","TypProtipovodnoveZabrany","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaSpecialniDrahy": {
    elementName: "OsaSpecialniDrahy",
    nazev: "osa speciální dráhy",
    codeBase: "0100000037",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OsaStavby": {
    elementName: "OsaStavby",
    nazev: "osa stavby",
    codeBase: "9400001006",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Osy",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "OsaTramvajoveDrahy": {
    elementName: "OsaTramvajoveDrahy",
    nazev: "osa tramvajové dráhy",
    codeBase: "0100000026",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","TypUsekuZeleznicniTrate","KategorieZeleznicniTrate","TypZeleznicniTrate","OznaceniTrate","PocetKoleji","ElektrizaceZeleznicniTrate","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OstatniMapoveZnacky": {
    elementName: "OstatniMapoveZnacky",
    nazev: "ostatní mapové značky",
    codeBase: "9400001062",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Doplněk",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","Natoceni","OstatniMapoveZnacky","Prilohy","Upresneni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "OstatniZastresenaStavbaDefinicniBod": {
    elementName: "OstatniZastresenaStavbaDefinicniBod",
    nazev: "ostatní zastřešená stavba",
    codeBase: "0100000314",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "OznacnikZastavkyHromadneDopravyBod": {
    elementName: "OznacnikZastavkyHromadneDopravyBod",
    nazev: "označník zastávky hromadné dopravy",
    codeBase: "0100000374",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","UmisteniOznacniku","DruhHromadneDopravy","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","OmezeniParkoviste","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","OmezeniParkoviste","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","PrujezdnaVyska","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","PrujezdnaVyska","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DruhPlotu","HraniceJinehoObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","TypBranky","TypPlotuVDoprave","Upresneni","VstupDoDTM","VyskaCm"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlynovodKoridorZameruLinie": {
    elementName: "PlynovodKoridorZameruLinie",
    nazev: "plynovod - koridor záměru",
    codeBase: "0100000354",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TlakovaHladinaPlynovodniSite","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlynovodKoridorZameruPlocha": {
    elementName: "PlynovodKoridorZameruPlocha",
    nazev: "plynovod - koridor záměru",
    codeBase: "0100000354",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TlakovaHladinaPlynovodniSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlynovodMistoZameruBod": {
    elementName: "PlynovodMistoZameruBod",
    nazev: "plynovod - místo záměru",
    codeBase: "0100000355",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuPlynovodniSiteZameru","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlynovodMistoZameruPlocha": {
    elementName: "PlynovodMistoZameruPlocha",
    nazev: "plynovod - místo záměru",
    codeBase: "0100000355",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuPlynovodniSiteZameru","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PlynovodPS": {
    elementName: "PlynovodPS",
    nazev: "plynovod - plánovaná stavba",
    codeBase: "0200000010",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","TypObjektuPlynovodniSitePS","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypPodpernehoZarizeni","TypSloupu","DatumKontroly","DoplnkovyPopis","MaterialUDM","Natoceni","Prilohy","TypUkotveni","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PodrobnyBodCislo": {
    elementName: "PodrobnyBodCislo",
    nazev: "podrobný bod - číslo",
    codeBase: "9400001032",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Popisy a názvy",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DoplnkovyPopis","Natoceni","Prilohy","Upresneni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PodrobnyBodDI": {
    elementName: "PodrobnyBodDI",
    nazev: "podrobný geodetický bod DI",
    codeBase: "9400001069",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Geodetické prvky",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloBodu","Prilohy","StabilizaceBodu","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuDI","ZpusobPorizeniPB_DI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PodrobnyBodKod": {
    elementName: "PodrobnyBodKod",
    nazev: "podrobný bod - kód",
    codeBase: "9400001033",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Popisy a názvy",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DoplnkovyPopis","Natoceni","Upresneni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PodrobnyBodTI": {
    elementName: "PodrobnyBodTI",
    nazev: "podrobný geodetický bod TI",
    codeBase: "9400001070",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "Geodetické prvky",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloBodu","Prilohy","StabilizaceBodu","TridaPresnostiPoloha","TridaPresnostiVyska","TypPodrobnehoBoduTI","Upresneni","UrovenUmisteniObjektuTI","ZpusobPorizeniPB_TI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PodrobnyBodVyska": {
    elementName: "PodrobnyBodVyska",
    nazev: "podrobný bod - výška",
    codeBase: "9400001034",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Popisy a názvy",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DoplnkovyPopis","Natoceni","Upresneni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PodrobnyBodZPS": {
    elementName: "PodrobnyBodZPS",
    nazev: "podrobný bod ZPS",
    codeBase: "0100000218",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Podrobný bod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniPB_ZPS","CisloBodu","DatumKontroly","Prilohy","StabilizaceBodu","Upresneni","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PodrobnyBodZPSNadRamecDTM": {
    elementName: "PodrobnyBodZPSNadRamecDTM",
    nazev: "podrobný geodetický bod ZPS nad rámec DTM",
    codeBase: "9400001071",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Geodetické prvky",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["CisloBodu","Prilohy","StabilizaceBodu","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniPB_ZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PodzemniObjektZPSDefinicniBod": {
    elementName: "PodzemniObjektZPSDefinicniBod",
    nazev: "podzemní objekt ZPS",
    codeBase: "0100000197",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PopisyDI": {
    elementName: "PopisyDI",
    nazev: "popisy DI",
    codeBase: "9400001007",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Popisy a názvy",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","Upresneni","VlastnikDITI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PopisySmeru": {
    elementName: "PopisySmeru",
    nazev: "popisy směrů",
    codeBase: "9400001035",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Popisy a názvy",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","Natoceni","TypSmeru","Upresneni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PopisyTI": {
    elementName: "PopisyTI",
    nazev: "popisy TI",
    codeBase: "9400001051",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "Popisy a názvy",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","TypInzenyrskeSite","Upresneni","VlastnikDITI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PopisyZPS": {
    elementName: "PopisyZPS",
    nazev: "popisy ZPS",
    codeBase: "9400001063",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Popisy a názvy",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","IDPopisovanehoObjektu","Natoceni","Prilohy","Upresneni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "PortalPodchoduDefinicniBod": {
    elementName: "PortalPodchoduDefinicniBod",
    nazev: "portál podchodu",
    codeBase: "0100000064",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","PodchoziVyskaCm","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","PodchoziVyskaCm","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","PrujezdnaVyska","SpravceZPS","StaniceniPortalu","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","PrujezdnaVyska","SpravceZPS","StaniceniPortalu","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypPovrchovehoZnakuTI","DatumKontroly","DoplnkovyPopis","MaterialUDM","Natoceni","Prilohy","TypInzenyrskeSite","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PozemniCastPristavuBod": {
    elementName: "PozemniCastPristavuBod",
    nazev: "pozemní část přístavu",
    codeBase: "0100000325",
    codeSuffix: "01",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Vodní doprava",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","TypPristavu","OchrannaFunkce","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","TypPristavu","OchrannaFunkce","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","TypHranyDs","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","TypHranyDs","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypPrivadece","Dimenze","Material","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrivadecNahonOdpadPlocha": {
    elementName: "PrivadecNahonOdpadPlocha",
    nazev: "přivaděč, náhon, odpad",
    codeBase: "0100000118",
    codeSuffix: "03",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Přivaděč povrchových vod, náhon, odpad",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypPrivadece","Dimenze","Material","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrivadecPovrchovychVodKoridorZameruLinie": {
    elementName: "PrivadecPovrchovychVodKoridorZameruLinie",
    nazev: "přivaděč povrchových vod - koridor záměru",
    codeBase: "0100000366",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrivadecPovrchovychVodPS": {
    elementName: "PrivadecPovrchovychVodPS",
    nazev: "přivaděč povrchových vod - plánovaná stavba",
    codeBase: "0200000017",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProduktovodKoridorZameruLinie": {
    elementName: "ProduktovodKoridorZameruLinie",
    nazev: "produktovod - koridor záměru",
    codeBase: "0100000360",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProduktovodKoridorZameruPlocha": {
    elementName: "ProduktovodKoridorZameruPlocha",
    nazev: "produktovod - koridor záměru",
    codeBase: "0100000360",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProduktovodMistoZameruBod": {
    elementName: "ProduktovodMistoZameruBod",
    nazev: "produktovod - místo záměru",
    codeBase: "0100000361",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProduktovodMistoZameruPlocha": {
    elementName: "ProduktovodMistoZameruPlocha",
    nazev: "produktovod - místo záměru",
    codeBase: "0100000361",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProduktovodPS": {
    elementName: "ProduktovodPS",
    nazev: "produktovod - plánovaná stavba",
    codeBase: "0200000013",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PromenneDoprZnackyAZarizeniProvoznichInformaci": {
    elementName: "PromenneDoprZnackyAZarizeniProvoznichInformaci",
    nazev: "proměnné dopr. značky a zařízení provozních informací",
    codeBase: "9400001008",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Silniční zařízení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypZPIPDZ","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ProtihlukovaStena": {
    elementName: "ProtihlukovaStena",
    nazev: "protihluková stěna",
    codeBase: "0100000319",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","HraniceJinehoObjektu","DatumKontroly","DoplnkovyPopis","MaterialUDM","Prilohy","SpravceZPS","Upresneni","VstupDoDTM","VyskaCm"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypProtipovodnoveZabrany","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypProtipovodnoveZabrany","HraniceJinehoObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypProtipovodnoveZabrany","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProtipovodnoveOpatreniPS": {
    elementName: "ProtipovodnoveOpatreniPS",
    nazev: "protipovodňové a ostatní opatření v krajině - plánovaná stavba",
    codeBase: "0200000016",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProtipovodnoveOpatreniZamerLinie": {
    elementName: "ProtipovodnoveOpatreniZamerLinie",
    nazev: "protipovodňové a ostatní opatření v krajině - záměr",
    codeBase: "0100000365",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ProtipovodnoveOpatreniZamerPlocha": {
    elementName: "ProtipovodnoveOpatreniZamerPlocha",
    nazev: "protipovodňové a ostatní opatření v krajině - záměr",
    codeBase: "0100000365",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","PodchoziVyskaCm","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","PodchoziVyskaCm","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypPozemniKomunikace","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","KategoriePozemniKomunikace","OznaceniFunkce","Prilohy","SpravceZPS","TypProvozniPlochyPK","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypPozemniKomunikace","PrevazujiciPovrch","DatumKontroly","DoplnkovyPopis","KategoriePozemniKomunikace","OznaceniFunkce","SpravceZPS","TypProvozniPlochyPK","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypTunelu","DatumKontroly","DoplnkovyPopis","Prilohy","PrujezdnaVyska","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypTunelu","DatumKontroly","DoplnkovyPopis","PrujezdnaVyska","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","TridaPresnostiPoloha","ZpusobPorizeniTI","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","ICS","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuTI","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrubehJineTechnologickeStavbyTI": {
    elementName: "PrubehJineTechnologickeStavbyTI",
    nazev: "průběh jiné technologické stavby TI",
    codeBase: "0100000097",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Sdílená stavba / objekt technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypPrubehuJineTechnologickeStavbyTI","VedeniSiteVJineStavbe","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrubehPropustku": {
    elementName: "PrubehPropustku",
    nazev: "průběh propustku",
    codeBase: "0100000195",
    codeSuffix: "02",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","Dimenze","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "PrubehTechnologickeKonstrukce": {
    elementName: "PrubehTechnologickeKonstrukce",
    nazev: "průběh technologické konstrukce",
    codeBase: "9400001064",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "ZPS Ostatní stavby",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","HraniceJinehoObjektu","Prilohy","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "RampaDefinicniBod": {
    elementName: "RampaDefinicniBod",
    nazev: "rampa",
    codeBase: "0100000173",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","MaterialUDM","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "RozestavenaPlochaDefinicniBod": {
    elementName: "RozestavenaPlochaDefinicniBod",
    nazev: "rozestavěná plocha",
    codeBase: "0100000381",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "RozestavenaPlochaPlocha": {
    elementName: "RozestavenaPlochaPlocha",
    nazev: "rozestavěná plocha",
    codeBase: "0100000381",
    codeSuffix: "03",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DruhSchodiste","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DruhSchodiste","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SchodyStupne": {
    elementName: "SchodyStupne",
    nazev: "schody (stupně)",
    codeBase: "9400001065",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "ZPS Ostatní stavby",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","Prilohy","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SdilenaStavbaTIKoridorZameruLinie": {
    elementName: "SdilenaStavbaTIKoridorZameruLinie",
    nazev: "sdílená stavba TI - koridor záměru",
    codeBase: "0100000367",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SdilenaStavbaTIPS": {
    elementName: "SdilenaStavbaTIPS",
    nazev: "sdílená stavba TI - plánovaná stavba",
    codeBase: "0200000018",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypSdilenehoObjektuTI","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","UmisteniObjektu","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SDZTypAVystrazne": {
    elementName: "SDZTypAVystrazne",
    nazev: "SDZ - typ A - výstražné",
    codeBase: "9400001009",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZA","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypAVystrazneZeleznice": {
    elementName: "SDZTypAVystrazneZeleznice",
    nazev: "SDZ - typ A-Z - výstražné-železnice",
    codeBase: "9400001010",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZAZ","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypBZakazove": {
    elementName: "SDZTypBZakazove",
    nazev: "SDZ - typ B - zákazové",
    codeBase: "9400001021",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZB","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypCPrikazove": {
    elementName: "SDZTypCPrikazove",
    nazev: "SDZ - typ C - příkazové",
    codeBase: "9400001011",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZC","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypEDodatkove": {
    elementName: "SDZTypEDodatkove",
    nazev: "SDZ - typ E - dodatkové tabule",
    codeBase: "9400001012",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZE","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypIJInformativniJine": {
    elementName: "SDZTypIJInformativniJine",
    nazev: "SDZ - typ IJ - informativní jiné",
    codeBase: "9400001013",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZIJ","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypIPInformativniProvozni": {
    elementName: "SDZTypIPInformativniProvozni",
    nazev: "SDZ - typ IP - informativní provozní",
    codeBase: "9400001014",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZIP","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypIPPInformativniProvozniParkoviste": {
    elementName: "SDZTypIPPInformativniProvozniParkoviste",
    nazev: "SDZ - typ IP-P - informativní provozní-parkoviště",
    codeBase: "9400001015",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZIPP","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypISNInformativniSmeroveNavesti": {
    elementName: "SDZTypISNInformativniSmeroveNavesti",
    nazev: "SDZ - typ IS-N - informativní směrové-návěsti",
    codeBase: "9400001016",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZISN","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypISInformativniSmeroveOstatni": {
    elementName: "SDZTypISInformativniSmeroveOstatni",
    nazev: "SDZ - typ IS - informativní směrové-ostatní",
    codeBase: "9400001017",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZIS","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypISSInformativniSmeroveSmerovky": {
    elementName: "SDZTypISSInformativniSmeroveSmerovky",
    nazev: "SDZ - typ IS-S - informativní směrové-směrovky",
    codeBase: "9400001018",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZISS","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypIZInformativniZonove": {
    elementName: "SDZTypIZInformativniZonove",
    nazev: "SDZ - typ IZ - informativní zónové",
    codeBase: "9400001019",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZIZ","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SDZTypPPrednosti": {
    elementName: "SDZTypPPrednosti",
    nazev: "SDZ - typ P - přednosti",
    codeBase: "9400001020",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","KonstrukceDZZ","Natoceni","NazevSDZP","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypUkotveni","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SilnicniDopravaKoridorZameruLinie": {
    elementName: "SilnicniDopravaKoridorZameruLinie",
    nazev: "silniční doprava - koridor záměru",
    codeBase: "0100000339",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuSilnicniDopravyZameru","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SilnicniDopravaKoridorZameruPlocha": {
    elementName: "SilnicniDopravaKoridorZameruPlocha",
    nazev: "silniční doprava - koridor záměru",
    codeBase: "0100000339",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuSilnicniDopravyZameru","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SilnicniDopravaMistoZameruBod": {
    elementName: "SilnicniDopravaMistoZameruBod",
    nazev: "silniční doprava - místo záměru",
    codeBase: "0100000340",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SilnicniDopravaMistoZameruPlocha": {
    elementName: "SilnicniDopravaMistoZameruPlocha",
    nazev: "silniční doprava - místo záměru",
    codeBase: "0100000340",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SilnicniDopravaPS": {
    elementName: "SilnicniDopravaPS",
    nazev: "silniční doprava - plánovaná stavba",
    codeBase: "0200000001",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","TypObjektuSilnicniDopravyPS","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavSkladkyOdpadu","ZpusobRekultivace","DatumRekultivace","TypOdpadu","Kapacita","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SkladkaOdpaduPlocha": {
    elementName: "SkladkaOdpaduPlocha",
    nazev: "skládka odpadu",
    codeBase: "0100000148",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavSkladkyOdpadu","ZpusobRekultivace","DatumRekultivace","TypOdpadu","Kapacita","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SklenikDefinicniBod": {
    elementName: "SklenikDefinicniBod",
    nazev: "skleník",
    codeBase: "0100000179",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","NazevSledovaneVodniCesty","ZarazeniSledovaneVodniCesty","TridaDopravneVyznamneVodniCesty","TypSledovaneVodniCesty","OznaceniObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","NazevSledovaneVodniCesty","ZarazeniSledovaneVodniCesty","TridaDopravneVyznamneVodniCesty","TypSledovaneVodniCesty","OznaceniObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypUsekuZeleznicniTrate","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypUsekuZeleznicniTrate","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","Kapacita","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SpalovnaPlocha": {
    elementName: "SpalovnaPlocha",
    nazev: "spalovna",
    codeBase: "0100000149",
    codeSuffix: "03",
    kategorieObjektu: "Stavby pro průmyslové účely a hospodářství",
    skupinaObjektu: "Odpadové hospodářství",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","Kapacita","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SpecialniDrahaDefinicniBod": {
    elementName: "SpecialniDrahaDefinicniBod",
    nazev: "speciální dráha",
    codeBase: "0100000035",
    codeSuffix: "04",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Drážní doprava",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Srafy": {
    elementName: "Srafy",
    nazev: "šrafy",
    codeBase: "9400001036",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Výškopis",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DoplnkovyPopis","Upresneni"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "StaniceElektrickeSiteBod": {
    elementName: "StaniceElektrickeSiteBod",
    nazev: "stanice elektrické sítě",
    codeBase: "0100000103",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","TypStaniceElektrickeSite","DruhStaniceElektrickeSite","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StaniceElektrickeSitePlocha": {
    elementName: "StaniceElektrickeSitePlocha",
    nazev: "stanice elektrické sítě",
    codeBase: "0100000103",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","TypStaniceElektrickeSite","DruhStaniceElektrickeSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Staniceni": {
    elementName: "Staniceni",
    nazev: "staničení",
    codeBase: "9400001022",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Staničení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypStaniceni","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "StavbaProPesiPS": {
    elementName: "StavbaProPesiPS",
    nazev: "stavba pro pěší - plánovaná stavba",
    codeBase: "0200000005",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "StavbaProZpevneniPovrchuDefinicniBod": {
    elementName: "StavbaProZpevneniPovrchuDefinicniBod",
    nazev: "stavba pro zpevnění povrchu",
    codeBase: "0100000187",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","DruhStavbyProZpevneniPovrchu","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","PrujezdnaSirka","PrujezdnaVyska","HraniceJinehoObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypNabijecihoVydejnihoMedia","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Strom": {
    elementName: "Strom",
    nazev: "strom",
    codeBase: "9400001066",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Zeleň",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","IDExterni","Natoceni","Okrasny","Opadavy","PocetKmenu","Prilohy","PrumerKmeneCm","PrumerKorunyM","RozsirenyDruhStromu","SpravceZPS","StavStromu","TridaPresnostiPoloha","TridaPresnostiVyska","Tvarovany","Upresneni","UrovenUmisteniObjektuZPS","VyskaStromuM","ZakladniDruhStromu","ZakladniRozdeleniStromu","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "StudnaNaVerejnemProstranstvi": {
    elementName: "StudnaNaVerejnemProstranstvi",
    nazev: "studna na veřejném prostranství",
    codeBase: "0100000084",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","FunkcniStavObjektu","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "SvetelneAkustickeSignaly": {
    elementName: "SvetelneAkustickeSignaly",
    nazev: "světelné a akustické signály",
    codeBase: "9400001023",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Svislé dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","Natoceni","NazevSAS","Poradi","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypSAS","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "SvetelneMisto": {
    elementName: "SvetelneMisto",
    nazev: "světelné místo",
    codeBase: "9400001052",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "Pasporty",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DelkaVyloznikuM","DoplnkovyPopis","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","Natoceni","PocetRamenVylozniku","PocetSvitidel","Prikon","Prilohy","SlavnostniSvitidlo","StavObjektu","TridaPresnostiPoloha","TridaPresnostiVyska","TypPredradniku","TypSvetelnehoZdroje","TypSvitidla","TypVylozniku","UmisteniObjektu","Upresneni","UrovenUmisteniObjektuTI","VazbaNaRozvadec","VlastnikDITI","VstupDoDTM","VyskaSvitidlaM","ZpusobPorizeniTI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "Svodidlo": {
    elementName: "Svodidlo",
    nazev: "svodidlo",
    codeBase: "0100000318",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Zařízení dopravních staveb",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypSvodidla","DatumKontroly","DoplnkovyPopis","MaterialSvodidla","NabehSvodidla","Prilohy","SpravceZPS","TypSvodidlaUpresneni","UmisteniSvodidla","Upresneni","VstupDoDTM","VyskaCm"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypTechnickehoKanalu","VedeniSiteVJineStavbe","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyPortalLinie": {
    elementName: "TechnologickyPortalLinie",
    nazev: "technologický portál",
    codeBase: "0100000373",
    codeSuffix: "02",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","TypTechnologickeKonstrukce","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyPortalPlocha": {
    elementName: "TechnologickyPortalPlocha",
    nazev: "technologický portál",
    codeBase: "0100000373",
    codeSuffix: "03",
    kategorieObjektu: "Dopravní stavby",
    skupinaObjektu: "Dopravní stavba společná pro více skupin",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DatumKontroly","DoplnkovyPopis","TypTechnologickeKonstrukce","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TeplovodKoridorZameruLinie": {
    elementName: "TeplovodKoridorZameruLinie",
    nazev: "teplovod - koridor záměru",
    codeBase: "0100000362",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TeplovodKoridorZameruPlocha": {
    elementName: "TeplovodKoridorZameruPlocha",
    nazev: "teplovod - koridor záměru",
    codeBase: "0100000362",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TeplovodMistoZameruBod": {
    elementName: "TeplovodMistoZameruBod",
    nazev: "teplovod - místo záměru",
    codeBase: "0100000363",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypTechnologickehoObjektuTeplovodniSite","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TeplovodMistoZameruPlocha": {
    elementName: "TeplovodMistoZameruPlocha",
    nazev: "teplovod - místo záměru",
    codeBase: "0100000363",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypTechnologickehoObjektuTeplovodniSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TeplovodPS": {
    elementName: "TeplovodPS",
    nazev: "teplovod - plánovaná stavba",
    codeBase: "0200000014",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","TypObjektuTeplovodniSitePS","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypTerenniHrany","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TerminalKombinovaneDopravyMistoZameruBod": {
    elementName: "TerminalKombinovaneDopravyMistoZameruBod",
    nazev: "terminál kombinované dopravy - místo záměru",
    codeBase: "0100000349",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TerminalKombinovaneDopravyMistoZameruPlocha": {
    elementName: "TerminalKombinovaneDopravyMistoZameruPlocha",
    nazev: "terminál kombinované dopravy - místo záměru",
    codeBase: "0100000349",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TerminalKombinovaneDopravyPS": {
    elementName: "TerminalKombinovaneDopravyPS",
    nazev: "terminál kombinované dopravy - plánovaná stavba",
    codeBase: "0200000007",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyObjektPlynovodniSiteBod": {
    elementName: "TechnologickyObjektPlynovodniSiteBod",
    nazev: "technologický objekt plynovodní sítě",
    codeBase: "0100000112",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TlakovaHladinaPlynovodniSite","TypTechnologickehoObjektuPlynovodniSite","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","UmisteniObjektu","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyObjektPlynovodniSitePlocha": {
    elementName: "TechnologickyObjektPlynovodniSitePlocha",
    nazev: "technologický objekt plynovodní sítě",
    codeBase: "0100000112",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TlakovaHladinaPlynovodniSite","TypTechnologickehoObjektuPlynovodniSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyObjektSiteEKBod": {
    elementName: "TechnologickyObjektSiteEKBod",
    nazev: "technologický objekt sítě EK",
    codeBase: "0100000108",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypTechnologickehoObjektuSiteEK","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","UmisteniObjektu","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyObjektSiteEKPlocha": {
    elementName: "TechnologickyObjektSiteEKPlocha",
    nazev: "technologický objekt sítě EK",
    codeBase: "0100000108",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypTechnologickehoObjektuSiteEK","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyObjektSiteProduktovoduBod": {
    elementName: "TechnologickyObjektSiteProduktovoduBod",
    nazev: "technologický objekt sítě produktovodu",
    codeBase: "0100000129",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyObjektSiteProduktovoduPlocha": {
    elementName: "TechnologickyObjektSiteProduktovoduPlocha",
    nazev: "technologický objekt sítě produktovodu",
    codeBase: "0100000129",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyObjektTeplovodniSiteBod": {
    elementName: "TechnologickyObjektTeplovodniSiteBod",
    nazev: "technologický objekt teplovodní sítě",
    codeBase: "0100000132",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypTechnologickehoObjektuTeplovodniSite","DatumKontroly","DatumVystavby","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TechnologickyObjektTeplovodniSitePlocha": {
    elementName: "TechnologickyObjektTeplovodniSitePlocha",
    nazev: "technologický objekt teplovodní sítě",
    codeBase: "0100000132",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypTechnologickehoObjektuTeplovodniSite","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaElektrickeSite": {
    elementName: "TrasaElektrickeSite",
    nazev: "trasa elektrické sítě",
    codeBase: "0100000098",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavTrasySiteTI","PocetVedeniVTrase","VedeniSiteVJineStavbe","TypTrasyElektrickeSite","MaximalniNapetovaHladina","MaximalniProvozniNapeti","ProvozniNapeti","IzolaceVenkovnihoVedeni","DruhElektrickehoProudu","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","NapojovaciMisto","Prilohy","Upresneni","Vlastnik","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaKanalizacniPripojky": {
    elementName: "TrasaKanalizacniPripojky",
    nazev: "trasa kanalizační přípojky",
    codeBase: "0100000122",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","ICS","StavObjektu","UceloveZarazeniStokoveSite","DruhStokoveSite","Dimenze","Material","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaKynety": {
    elementName: "TrasaKynety",
    nazev: "trasa kynety",
    codeBase: "9400001053",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - TI",
    skupinaObjektu: "Osy",
    obsahovaCast: "TIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","HloubkaPodTerenemCm","IDExterni","PocetPrvkuVTrase","Prilohy","TridaPresnostiPoloha","TridaPresnostiVyska","TypKynety","Upresneni","UrovenUmisteniObjektuTI","VlastnikDITI","ZpusobPorizeniTI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "TrasaMistniElektrickeSite": {
    elementName: "TrasaMistniElektrickeSite",
    nazev: "trasa místní elektrické sítě",
    codeBase: "0100000099",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavTrasySiteTI","VedeniSiteVJineStavbe","TypTrasyMistniElektrickeSite","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","VazbaNaRozvadec","Vlastnik","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaOdbernehoElektrickehoZarizeni": {
    elementName: "TrasaOdbernehoElektrickehoZarizeni",
    nazev: "trasa odběrného elektrického zařízení",
    codeBase: "0100000100",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","ICS","StavObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VodiciPrvek","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","ICS","StavObjektu","TlakovaHladinaPlynovodniSite","Dimenze","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypPKO","TypInzenyrskeSitePKO","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavTrasySiteTI","VedeniSiteVJineStavbe","TlakovaHladinaPlynovodniSite","Dimenze","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaPlynovodniSite": {
    elementName: "TrasaPlynovodniSite",
    nazev: "trasa plynovodní sítě",
    codeBase: "0100000109",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Plynovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavTrasySiteTI","VedeniSiteVJineStavbe","TlakovaHladinaPlynovodniSite","Dimenze","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","NapojovaciMisto","Prilohy","Upresneni","Vlastnik","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaPotrubniPosty": {
    elementName: "TrasaPotrubniPosty",
    nazev: "trasa potrubní pošty",
    codeBase: "0100000133",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubní pošta",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","Dimenze","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","NapojovaciMisto","Prilohy","Upresneni","Vlastnik","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaRadiovehoSmerovehoSpoje": {
    elementName: "TrasaRadiovehoSmerovehoSpoje",
    nazev: "trasa rádiového směrového spoje",
    codeBase: "0100000106",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaSiteEK": {
    elementName: "TrasaSiteEK",
    nazev: "trasa sítě EK",
    codeBase: "0100000105",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavTrasySiteTI","PocetVedeniVTrase","VedeniSiteVJineStavbe","MaterialTrasySiteEK","ZpusobOchranyVedeniSiteEK","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","NapojovaciMisto","Prilohy","Upresneni","Vlastnik","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaSiteProduktovodu": {
    elementName: "TrasaSiteProduktovodu",
    nazev: "trasa sítě produktovodu",
    codeBase: "0100000127",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavTrasySiteTI","VedeniSiteVJineStavbe","Dimenze","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","NapojovaciMisto","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaStokoveSite": {
    elementName: "TrasaStokoveSite",
    nazev: "trasa stokové sítě",
    codeBase: "0100000121",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","ICME","StavTrasySiteTI","VedeniSiteVJineStavbe","TypTrasyStokoveSite","UceloveZarazeniStokoveSite","DruhStokoveSite","Dimenze","Material","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","NapojovaciMisto","Prilohy","Upresneni","Vlastnik","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaTeplovodniSite": {
    elementName: "TrasaTeplovodniSite",
    nazev: "trasa teplovodní sítě",
    codeBase: "0100000130",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavTrasySiteTI","VedeniSiteVJineStavbe","TypTrasyTeplovodniSite","TypTeplovodniSite","Dimenze","DatumKontroly","DatumVystavby","DoplnkovyPopis","HloubkaUlozeniCm","MaterialTeplovodu","NapojovaciMisto","Prilohy","TypRozvoduTeplovodniSite","Ulozeniteplovodu","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaTrakcnihoTrolejovehoVedeni": {
    elementName: "TrasaTrakcnihoTrolejovehoVedeni",
    nazev: "trasa trakčního trolejového vedení",
    codeBase: "0100000382",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavTrasySiteTI","ProvozniNapeti","DruhElektrickehoProuduTrakcnihoVedeni","TypDrahy","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "TrasaVodovodniPripojky": {
    elementName: "TrasaVodovodniPripojky",
    nazev: "trasa vodovodní přípojky",
    codeBase: "0100000114",
    codeSuffix: "02",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","ICS","StavObjektu","Dimenze","Material","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VodiciPrvek","VstupDoDTM"],
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","ICME","StavTrasySiteTI","VedeniSiteVJineStavbe","TypTrasyVodovodniSite","TypMediaVodovodniSite","Dimenze","Material","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","NapojovaciMisto","Prilohy","TypVodovodnihoRadu","Upresneni","Vlastnik","VodiciPrvek","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Trojuhelniky": {
    elementName: "Trojuhelniky",
    nazev: "trojúhelníková síť",
    codeBase: "9400001037",
    codeSuffix: "03",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Výškopis",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DoplnkovyPopis","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "UdrzovanaPlochaZeleneDefinicniBod": {
    elementName: "UdrzovanaPlochaZeleneDefinicniBod",
    nazev: "udržovaná plocha zeleně",
    codeBase: "0100000215",
    codeSuffix: "04",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Udržovaná zeleň",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypUdrzovaneZelene","DatumKontroly","DoplnkovyPopis","DruhUdrzovaneZelene","Prilohy","Sklonitost","SpravceZPS","TypZelene","Upresneni","VstupDoDTM","ZakladniRozdeleniZelene"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypUdrzovaneZelene","DatumKontroly","DoplnkovyPopis","DruhUdrzovaneZelene","PrumernaVyskaM","Sklonitost","SpravceZPS","TypZelene","Upresneni","VstupDoDTM","ZakladniRozdeleniZelene","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "UnikovyVychod": {
    elementName: "UnikovyVychod",
    nazev: "únikový východ",
    codeBase: "9400001067",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "Pasporty",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","IDExterni","Natoceni","Prilohy","SirkaCm","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "VegetacniMisaDefinicniBod": {
    elementName: "VegetacniMisaDefinicniBod",
    nazev: "vegetační mísa",
    codeBase: "0100000338",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VerejneProstranstviPS": {
    elementName: "VerejneProstranstviPS",
    nazev: "veřejné prostranství - plánovaná stavba",
    codeBase: "0200000019",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","TypLinieCleneniBudovAStaveb","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","TypLinieCleneniDopravniPlochy","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","TypPristavu","OchrannaFunkce","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","TypPristavu","OchrannaFunkce","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniDopravaKoridorZameruLinie": {
    elementName: "VodniDopravaKoridorZameruLinie",
    nazev: "vodní doprava - koridor záměru",
    codeBase: "0100000343",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniDopravaKoridorZameruPlocha": {
    elementName: "VodniDopravaKoridorZameruPlocha",
    nazev: "vodní doprava - koridor záměru",
    codeBase: "0100000343",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniDopravaMistoZameruBod": {
    elementName: "VodniDopravaMistoZameruBod",
    nazev: "vodní doprava - místo záměru",
    codeBase: "0100000344",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniDopravaMistoZameruPlocha": {
    elementName: "VodniDopravaMistoZameruPlocha",
    nazev: "vodní doprava - místo záměru",
    codeBase: "0100000344",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniDopravaPS": {
    elementName: "VodniDopravaPS",
    nazev: "vodní doprava - plánovaná stavba",
    codeBase: "0200000003",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodniTokLinie": {
    elementName: "VodniTokLinie",
    nazev: "vodní tok",
    codeBase: "0100000203",
    codeSuffix: "02",
    kategorieObjektu: "Vodstvo, vegetace a terén",
    skupinaObjektu: "Přírodní vodní plocha",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","HraniceJinehoObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "curve",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodohospodarskeStavbyNadRamecDTM": {
    elementName: "VodohospodarskeStavbyNadRamecDTM",
    nazev: "vodohospodářské stavby nad rámec DTM",
    codeBase: "9400001068",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "ZPS Ostatní stavby",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","IDExterni","Natoceni","Prilohy","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","TypVodohospodarskehoObjektu","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "VodorovneDopravniZnaceniBod": {
    elementName: "VodorovneDopravniZnaceniBod",
    nazev: "vodorovné dopravní značení",
    codeBase: "9400001024",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Vodorovné dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Barva","DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","Natoceni","NazevVDZ","Prilohy","SirkaCm","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "VodorovneDopravniZnaceniLinie": {
    elementName: "VodorovneDopravniZnaceniLinie",
    nazev: "vodorovné dopravní značení",
    codeBase: "9400001024",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Vodorovné dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Barva","DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","NazevVDZLinieAPlocha","Prilohy","SirkaCm","TridaPresnostiPoloha","TridaPresnostiVyska","TypLiniovehoVDZ","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "VodorovneDopravniZnaceniPlocha": {
    elementName: "VodorovneDopravniZnaceniPlocha",
    nazev: "vodorovné dopravní značení",
    codeBase: "9400001024",
    codeSuffix: "03",
    kategorieObjektu: "Objekt UDM - DI",
    skupinaObjektu: "Vodorovné dopravní značení",
    obsahovaCast: "DIUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["Barva","DatumKontroly","DoplnkovyPopis","EvidencniCisloObjektu","IDExterni","NazevVDZLinieAPlocha","SirkaCm","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuDI","VlastnikDITI","ZpusobPorizeniDI"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "VodovodKoridorZameruLinie": {
    elementName: "VodovodKoridorZameruLinie",
    nazev: "vodovod - koridor záměru",
    codeBase: "0100000356",
    codeSuffix: "02",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodovodKoridorZameruPlocha": {
    elementName: "VodovodKoridorZameruPlocha",
    nazev: "vodovod - koridor záměru",
    codeBase: "0100000356",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodovodMistoZameruBod": {
    elementName: "VodovodMistoZameruBod",
    nazev: "vodovod - místo záměru",
    codeBase: "0100000357",
    codeSuffix: "01",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuVodovodniSiteZameru","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodovodMistoZameruPlocha": {
    elementName: "VodovodMistoZameruPlocha",
    nazev: "vodovod - místo záměru",
    codeBase: "0100000357",
    codeSuffix: "03",
    kategorieObjektu: "Záměry na provedení změn dopravní a technické infrastruktury",
    skupinaObjektu: "Záměr na provedení změn dopravní a technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","EvidencniCisloObjektu","TypObjektuVodovodniSiteZameru","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VodovodPS": {
    elementName: "VodovodPS",
    nazev: "vodovod - plánovaná stavba",
    codeBase: "0200000011",
    codeSuffix: "03",
    kategorieObjektu: "Plánované stavební práce infrastruktury",
    skupinaObjektu: "Plánovaná stavební práce infrastruktury",
    obsahovaCast: "PSPI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuPSPI","IDExterni","EvidencniCisloObjektu","TypObjektuVodovodniSitePS","DatumKontroly","DoplnkovyPopis","IDProvozovatele","IDSpravce","IDVlastnika","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "Vrstevnice": {
    elementName: "Vrstevnice",
    nazev: "vrstevnice",
    codeBase: "9400001038",
    codeSuffix: "02",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Výškopis",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DoplnkovyPopis","TridaPresnostiPoloha","TridaPresnostiVyska","TypVrstevnice","Upresneni","ZpusobPorizeniZPS"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "VrstevnicePopis": {
    elementName: "VrstevnicePopis",
    nazev: "vrstevnice - popis",
    codeBase: "9400001038",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Výškopis",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DoplnkovyPopis","Natoceni","Upresneni"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "Vrt": {
    elementName: "Vrt",
    nazev: "vrt",
    codeBase: "0100000191",
    codeSuffix: "01",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypVrtu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VyrobnaElektrinyNad100kWBod": {
    elementName: "VyrobnaElektrinyNad100kWBod",
    nazev: "výrobna elektřiny nad 100 kW",
    codeBase: "0100000102",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypVyrobnyElektriny","InstalovanyVykon","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VyrobnaElektrinyNad100kWPlocha": {
    elementName: "VyrobnaElektrinyNad100kWPlocha",
    nazev: "výrobna elektřiny nad 100 kW",
    codeBase: "0100000102",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypVyrobnyElektriny","InstalovanyVykon","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "VyskovyBodNaTerenu": {
    elementName: "VyskovyBodNaTerenu",
    nazev: "výškový bod na terénu",
    codeBase: "0100000219",
    codeSuffix: "01",
    kategorieObjektu: "Geodetické prvky",
    skupinaObjektu: "Podrobný bod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","VyskaNaTerenu","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","TypPovrchuVzletovePristavaciDrahy","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM","VyskaCm"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZajmovaPlocha": {
    elementName: "ZajmovaPlocha",
    nazev: "zájmová (pomocná) plocha",
    codeBase: "9400001039",
    codeSuffix: "03",
    kategorieObjektu: "Objekt UDM - ostatní",
    skupinaObjektu: "Zpracovatel",
    obsahovaCast: "OST" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","Upresneni"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ZakladaniASanace": {
    elementName: "ZakladaniASanace",
    nazev: "zakládání a sanace",
    codeBase: "9400001075",
    codeSuffix: "01",
    kategorieObjektu: "Objekt UDM - ZPS",
    skupinaObjektu: "ZPS Ostatní stavby",
    obsahovaCast: "ZPSUDM" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["DatumKontroly","DoplnkovyPopis","DruhZakladaniASanace","EvidencniCisloObjektu","FunkcniStavObjektu","IDExterni","MaterialUDM","Natoceni","Prilohy","SpravceZPS","TridaPresnostiPoloha","TridaPresnostiVyska","Upresneni","UrovenUmisteniObjektuZPS","ZpusobPorizeniZPS"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
    origin: "udm",
  },
  "ZarizeniElektrickeSite": {
    elementName: "ZarizeniElektrickeSite",
    nazev: "zařízení elektrické sítě",
    codeBase: "0100000101",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektrické vedení",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniElektrickeSite","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","UmisteniObjektu","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniKanalizacniPripojkyBod": {
    elementName: "ZarizeniKanalizacniPripojkyBod",
    nazev: "zařízení kanalizační přípojky",
    codeBase: "0100000124",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Kanalizace",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","ICS","StavObjektu","TypZarizeniKanalizacniPripojky","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","StavObjektu","TypZarizeniKanalizacniPripojky","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","StavObjektu","TypZarizeniKanalizacniPripojky","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniTI"],
    geomType: "surface",
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","OznaceniObjektu","TypZarizeniProLeteckyProvoz","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypInzenyrskeSitePKO","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","UmisteniObjektu","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniProtikorozniOchranyPlocha": {
    elementName: "ZarizeniProtikorozniOchranyPlocha",
    nazev: "zařízení protikorozní ochrany",
    codeBase: "0100000138",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Zařízení staveb technické infrastruktury",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypInzenyrskeSitePKO","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniPlynovodniSite","UmisteniObjektu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniPotrubniPosty": {
    elementName: "ZarizeniPotrubniPosty",
    nazev: "zařízení potrubní pošty",
    codeBase: "0100000134",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Potrubní pošta",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniPotrubniPosty","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniPrivadece": {
    elementName: "ZarizeniPrivadece",
    nazev: "zařízení přivaděče",
    codeBase: "0100000119",
    codeSuffix: "01",
    kategorieObjektu: "Vodní díla",
    skupinaObjektu: "Přivaděč povrchových vod, náhon, odpad",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniPrivadece","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniSiteEK": {
    elementName: "ZarizeniSiteEK",
    nazev: "zařízení sítě EK",
    codeBase: "0100000107",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Elektronická komunikace",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniSiteEK","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","UmisteniObjektu","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniSiteProduktovoduBod": {
    elementName: "ZarizeniSiteProduktovoduBod",
    nazev: "zařízení sítě produktovodu",
    codeBase: "0100000128",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniSiteProduktovodu","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniSiteProduktovoduPlocha": {
    elementName: "ZarizeniSiteProduktovoduPlocha",
    nazev: "zařízení sítě produktovodu",
    codeBase: "0100000128",
    codeSuffix: "03",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Produktovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniSiteProduktovodu","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniTeplovodniSite": {
    elementName: "ZarizeniTeplovodniSite",
    nazev: "zařízení teplovodní sítě",
    codeBase: "0100000131",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Teplovod",
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","StavObjektu","TypZarizeniTeplovodniSite","DatumKontroly","DatumVystavby","DoplnkovyPopis","Natoceni","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "point",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZarizeniVodovodniPripojkyBod": {
    elementName: "ZarizeniVodovodniPripojkyBod",
    nazev: "zařízení vodovodní přípojky",
    codeBase: "0100000116",
    codeSuffix: "01",
    kategorieObjektu: "Stavby technické infrastruktury",
    skupinaObjektu: "Vodovod",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","ICS","StavObjektu","TypZarizeniVodovodniPripojky","DatumKontroly","DoplnkovyPopis","Natoceni","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","StavObjektu","TypZarizeniVodovodniPripojky","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","StavObjektu","TypZarizeniVodovodniPripojky","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniTI"],
    geomType: "surface",
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "TI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDProvozovateleZeZakona","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuTI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniTI","EvidencniCisloObjektu","ICS","Dimenze","Material","DatumKontroly","DoplnkovyPopis","HloubkaUlozeniCm","Prilohy","Upresneni","Vlastnik","VstupDoDTM"],
    geomType: "curve",
    geomOptional: false,
    hasOblastKI: false,
  },
  "ZedDefinicniBod": {
    elementName: "ZedDefinicniBod",
    nazev: "zeď",
    codeBase: "0100000168",
    codeSuffix: "04",
    kategorieObjektu: "Součásti a příslušenství staveb",
    skupinaObjektu: "Stavba společná pro více skupin",
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypZdi","DatumKontroly","DoplnkovyPopis","MaterialUDM","Prilohy","SpravceZPS","Upresneni","VstupDoDTM","VyskaZdiCm"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","ZpusobPorizeniZPS","TypZdi","HraniceJinehoObjektu","DatumKontroly","DoplnkovyPopis","MaterialUDM","Prilohy","SpravceZPS","Upresneni","VstupDoDTM","VyskaZdiCm"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypZdi","DatumKontroly","DoplnkovyPopis","MaterialUDM","SpravceZPS","Upresneni","VstupDoDTM","VyskaZdiCm","ZpusobPorizeniZPS"],
    geomType: "surface",
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
    obsahovaCast: "DI" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["IDVlastnika","IDSpravce","IDProvozovatele","IDExterni","NeuplnaData","UrovenUmisteniObjektuDI","TridaPresnostiPoloha","TridaPresnostiVyska","ZpusobPorizeniDI","EvidencniCisloObjektu","ICS","DatumKontroly","DoplnkovyPopis","Upresneni","Vlastnik","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","ICS","TypZemedelskePlochy","DatumKontroly","DoplnkovyPopis","Prilohy","SpravceZPS","Upresneni","VstupDoDTM"],
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
    obsahovaCast: "ZPS" as 'ZPS' | 'TI' | 'DI' | 'PSPI' | 'ZPSUDM' | 'DIUDM' | 'TIUDM' | 'OST' | '',
    sharedAttrGroup: null,
    specificAttrs: ["UrovenUmisteniObjektuZPS","TridaPresnostiPoloha","TridaPresnostiVyska","ICS","TypZemedelskePlochy","DatumKontroly","DoplnkovyPopis","SpravceZPS","Upresneni","VstupDoDTM","ZpusobPorizeniZPS"],
    geomType: "surface",
    geomOptional: false,
    hasOblastKI: false,
  },
};

/** Map of element names to their specific attribute interface types */
export type EntityAttrsMap = {
  "BodovyPrvekNaBudove": BodovyPrvekNaBudoveAttrs;
  "BPPlynovodniSite": BPPlynovodniSiteAttrs;
  "BPPodzemnihoZasobnikuPlynu": BPPodzemnihoZasobnikuPlynuAttrs;
  "BPZarizeniPKO": BPZarizeniPKOAttrs;
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
  "CyklistickaDopravaPS": CyklistickaDopravaPSAttrs;
  "CyklostezkaDefinicniBod": CyklostezkaDefinicniBodAttrs;
  "CyklostezkaPlocha": CyklostezkaPlochaAttrs;
  "DeliciPasDefinicniBod": DeliciPasDefinicniBodAttrs;
  "DeliciPasPlocha": DeliciPasPlochaAttrs;
  "DoplnekKatastru": DoplnekKatastruAttrs;
  "DopravneVyznamneMistoDrazeBod": DopravneVyznamneMistoDrazeBodAttrs;
  "DopravneVyznamneMistoDrazePlocha": DopravneVyznamneMistoDrazePlochaAttrs;
  "DopravniOstruvekDefinicniBod": DopravniOstruvekDefinicniBodAttrs;
  "DopravniOstruvekPlocha": DopravniOstruvekPlochaAttrs;
  "DopravniUzelSilnicniSite": DopravniUzelSilnicniSiteAttrs;
  "DopravniZarizeniBod": DopravniZarizeniBodAttrs;
  "DopravniZarizeniLinie": DopravniZarizeniLinieAttrs;
  "DrazniDopravaKoridorZameruLinie": DrazniDopravaKoridorZameruLinieAttrs;
  "DrazniDopravaKoridorZameruPlocha": DrazniDopravaKoridorZameruPlochaAttrs;
  "DrazniDopravaMistoZameruBod": DrazniDopravaMistoZameruBodAttrs;
  "DrazniDopravaMistoZameruPlocha": DrazniDopravaMistoZameruPlochaAttrs;
  "DrazniDopravaPS": DrazniDopravaPSAttrs;
  "DrobnaKulturniStavbaBod": DrobnaKulturniStavbaBodAttrs;
  "DrobnaKulturniStavbaDefinicniBod": DrobnaKulturniStavbaDefinicniBodAttrs;
  "DrobnaKulturniStavbaPlocha": DrobnaKulturniStavbaPlochaAttrs;
  "DrobnaSakralniStavbaBod": DrobnaSakralniStavbaBodAttrs;
  "DrobnaSakralniStavbaDefinicniBod": DrobnaSakralniStavbaDefinicniBodAttrs;
  "DrobnaSakralniStavbaPlocha": DrobnaSakralniStavbaPlochaAttrs;
  "DulLomDefinicniBod": DulLomDefinicniBodAttrs;
  "DulLomPlocha": DulLomPlochaAttrs;
  "DulniObjekt": DulniObjektAttrs;
  "DvurNadvoriDefinicniBod": DvurNadvoriDefinicniBodAttrs;
  "DvurNadvoriPlocha": DvurNadvoriPlochaAttrs;
  "ElektrickaSitKoridorZameruLinie": ElektrickaSitKoridorZameruLinieAttrs;
  "ElektrickaSitKoridorZameruPlocha": ElektrickaSitKoridorZameruPlochaAttrs;
  "ElektrickaSitMistoZameruBod": ElektrickaSitMistoZameruBodAttrs;
  "ElektrickaSitMistoZameruPlocha": ElektrickaSitMistoZameruPlochaAttrs;
  "ElektrickaSitPS": ElektrickaSitPSAttrs;
  "ElektronickaKomunikaceKoridorZameruLinie": ElektronickaKomunikaceKoridorZameruLinieAttrs;
  "ElektronickaKomunikaceKoridorZameruPlocha": ElektronickaKomunikaceKoridorZameruPlochaAttrs;
  "ElektronickaKomunikaceMistoZameruBod": ElektronickaKomunikaceMistoZameruBodAttrs;
  "ElektronickaKomunikaceMistoZameruPlocha": ElektronickaKomunikaceMistoZameruPlochaAttrs;
  "ElektronickaKomunikacePS": ElektronickaKomunikacePSAttrs;
  "GeodetickyBod": GeodetickyBodAttrs;
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
  "HrazDefinicniBod": HrazDefinicniBodAttrs;
  "HrazPlocha": HrazPlochaAttrs;
  "HrbitovDefinicniBod": HrbitovDefinicniBodAttrs;
  "HrbitovPlocha": HrbitovPlochaAttrs;
  "HristeDefinicniBod": HristeDefinicniBodAttrs;
  "HristePlocha": HristePlochaAttrs;
  "HroboveMisto": HroboveMistoAttrs;
  "HydrantVodovodniSiteBod": HydrantVodovodniSiteBodAttrs;
  "IdentickyBod": IdentickyBodAttrs;
  "InformacniATelematickeZarizeni": InformacniATelematickeZarizeniAttrs;
  "JaderneZarizeniBod": JaderneZarizeniBodAttrs;
  "JaderneZarizeniPlocha": JaderneZarizeniPlochaAttrs;
  "JezDefinicniBod": JezDefinicniBodAttrs;
  "JezPlocha": JezPlochaAttrs;
  "JezeroDefinicniBod": JezeroDefinicniBodAttrs;
  "JezeroPlocha": JezeroPlochaAttrs;
  "JinaStavbaDIPS": JinaStavbaDIPSAttrs;
  "JinaStavbaTIPS": JinaStavbaTIPSAttrs;
  "JinaTechnologickaStavbaTI": JinaTechnologickaStavbaTIAttrs;
  "JinaTechnologickaStavbaTIPlocha": JinaTechnologickaStavbaTIPlochaAttrs;
  "JineDulniDiloStavbaDefinicniBod": JineDulniDiloStavbaDefinicniBodAttrs;
  "JineDulniDiloStavbaPlocha": JineDulniDiloStavbaPlochaAttrs;
  "JineZarizeniOdstranovaniVyuzivaniSberOdpaduBod": JineZarizeniOdstranovaniVyuzivaniSberOdpaduBodAttrs;
  "JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlocha": JineZarizeniOdstranovaniVyuzivaniSberOdpaduPlochaAttrs;
  "JineZarizeniStavebTI": JineZarizeniStavebTIAttrs;
  "JineZarizeniStavebTILinie": JineZarizeniStavebTILinieAttrs;
  "JineZarizeniStavebTIPlocha": JineZarizeniStavebTIPlochaAttrs;
  "KanalizaceKoridorZameruLinie": KanalizaceKoridorZameruLinieAttrs;
  "KanalizaceKoridorZameruPlocha": KanalizaceKoridorZameruPlochaAttrs;
  "KanalizaceMistoZameruBod": KanalizaceMistoZameruBodAttrs;
  "KanalizaceMistoZameruPlocha": KanalizaceMistoZameruPlochaAttrs;
  "KanalizacePS": KanalizacePSAttrs;
  "KatastrDleVFKLinie": KatastrDleVFKLinieAttrs;
  "Ker": KerAttrs;
  "Kolektor": KolektorAttrs;
  "KolektorPlocha": KolektorPlochaAttrs;
  "KominDefinicniBod": KominDefinicniBodAttrs;
  "KominPlocha": KominPlochaAttrs;
  "KomunalniATridenyOdpad": KomunalniATridenyOdpadAttrs;
  "LesDefinicniBod": LesDefinicniBodAttrs;
  "LesPlocha": LesPlochaAttrs;
  "LeteckaDopravaKoridorZameruLinie": LeteckaDopravaKoridorZameruLinieAttrs;
  "LeteckaDopravaKoridorZameruPlocha": LeteckaDopravaKoridorZameruPlochaAttrs;
  "LeteckaDopravaMistoZameruBod": LeteckaDopravaMistoZameruBodAttrs;
  "LeteckaDopravaMistoZameruPlocha": LeteckaDopravaMistoZameruPlochaAttrs;
  "LeteckaDopravaPS": LeteckaDopravaPSAttrs;
  "LeteckaStavbaBod": LeteckaStavbaBodAttrs;
  "LeteckaStavbaPlocha": LeteckaStavbaPlochaAttrs;
  "Letiste": LetisteAttrs;
  "LiniovyPrvekZelene": LiniovyPrvekZeleneAttrs;
  "ManipulacniPlochaDefinicniBod": ManipulacniPlochaDefinicniBodAttrs;
  "ManipulacniPlochaPlocha": ManipulacniPlochaPlochaAttrs;
  "MelioracniPrikopZlabDefinicniBod": MelioracniPrikopZlabDefinicniBodAttrs;
  "MelioracniPrikopZlabPlocha": MelioracniPrikopZlabPlochaAttrs;
  "MelioracniSachta": MelioracniSachtaAttrs;
  "Mobiliar": MobiliarAttrs;
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
  "Nazvy": NazvyAttrs;
  "NeidentifikovanyObjekt": NeidentifikovanyObjektAttrs;
  "NeviditelnaHranice": NeviditelnaHraniceAttrs;
  "NosicTechnickehoZarizeni": NosicTechnickehoZarizeniAttrs;
  "O6": O6Attrs;
  "ObecnePoznamky": ObecnePoznamkyAttrs;
  "ObjektZeleznicniDopravy": ObjektZeleznicniDopravyAttrs;
  "ObjektLanoveDopravy": ObjektLanoveDopravyAttrs;
  "ObjektNadRamecDTMEK": ObjektNadRamecDTMEKAttrs;
  "ObjektNadRamecDTMElektrickeVedeni": ObjektNadRamecDTMElektrickeVedeniAttrs;
  "ObjektNadRamecDTMStokovesite": ObjektNadRamecDTMStokovesiteAttrs;
  "ObjektNadRamecDTMKolektory": ObjektNadRamecDTMKolektoryAttrs;
  "ObjektNadRamecDTMPlynovody": ObjektNadRamecDTMPlynovodyAttrs;
  "ObjektNadRamecDTMProduktovody": ObjektNadRamecDTMProduktovodyAttrs;
  "ObjektNadRamecDTMTeplovody": ObjektNadRamecDTMTeplovodyAttrs;
  "ObjektNadRamecDTMVodovody": ObjektNadRamecDTMVodovodyAttrs;
  "ObjektNadRamecDTMZarizeniStaveb": ObjektNadRamecDTMZarizeniStavebAttrs;
  "ObjektOdvodneniStavbyBod": ObjektOdvodneniStavbyBodAttrs;
  "ObjektOdvodneniStavbyLinie": ObjektOdvodneniStavbyLinieAttrs;
  "ObjektOdvodneniStavbyPlocha": ObjektOdvodneniStavbyPlochaAttrs;
  "ObjektStokoveSiteBod": ObjektStokoveSiteBodAttrs;
  "ObjektStokoveSitePlocha": ObjektStokoveSitePlochaAttrs;
  "ObjektTramvajoveDopravy": ObjektTramvajoveDopravyAttrs;
  "ObjektTrolejbusoveDopravy": ObjektTrolejbusoveDopravyAttrs;
  "ObjektVodovodniSiteBod": ObjektVodovodniSiteBodAttrs;
  "ObjektVodovodniSitePlocha": ObjektVodovodniSitePlochaAttrs;
  "ObjektZabezpeceniAPO": ObjektZabezpeceniAPOAttrs;
  "ObjektZarizeniOchranaPredPovodnemiBod": ObjektZarizeniOchranaPredPovodnemiBodAttrs;
  "ObjektZarizeniOchranaPredPovodnemiLinie": ObjektZarizeniOchranaPredPovodnemiLinieAttrs;
  "ObvodDrahy": ObvodDrahyAttrs;
  "ObvodMostu": ObvodMostuAttrs;
  "ObvodObjektuTI": ObvodObjektuTIAttrs;
  "ObvodPozemniKomunikace": ObvodPozemniKomunikaceAttrs;
  "ObvodTunelu": ObvodTuneluAttrs;
  "OchrannaSachtaVrtu": OchrannaSachtaVrtuAttrs;
  "OdkalisteBod": OdkalisteBodAttrs;
  "OdkalistePlocha": OdkalistePlochaAttrs;
  "OdpadoveHospodarstviPS": OdpadoveHospodarstviPSAttrs;
  "OdpadoveHospodarstviZamerBod": OdpadoveHospodarstviZamerBodAttrs;
  "OdpadoveHospodarstviZamerLinie": OdpadoveHospodarstviZamerLinieAttrs;
  "OdpadoveHospodarstviZamerPlocha": OdpadoveHospodarstviZamerPlochaAttrs;
  "Odpocivka": OdpocivkaAttrs;
  "OPDalniceProReklamniZarizeni": OPDalniceProReklamniZarizeniAttrs;
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
  "OPVodnihoDila": OPVodnihoDilaAttrs;
  "OPVyrobnyElektriny": OPVyrobnyElektrinyAttrs;
  "OPZarizeniOdpadovehoHospodarstvi": OPZarizeniOdpadovehoHospodarstviAttrs;
  "OPZarizeniPKO": OPZarizeniPKOAttrs;
  "OrientacniSloupekTI": OrientacniSloupekTIAttrs;
  "OsaJizdnihoPruhu": OsaJizdnihoPruhuAttrs;
  "OsaKolejePozemniLanoveDrahy": OsaKolejePozemniLanoveDrahyAttrs;
  "OsaKolejeSpecialniDrahy": OsaKolejeSpecialniDrahyAttrs;
  "OsaKolejeTramvajoveDrahy": OsaKolejeTramvajoveDrahyAttrs;
  "OsaKolejeZeleznicniTrate": OsaKolejeZeleznicniTrateAttrs;
  "OsaMelioracnihoPrikopuZlabuDrenu": OsaMelioracnihoPrikopuZlabuDrenuAttrs;
  "OsaPozemniKomunikace": OsaPozemniKomunikaceAttrs;
  "OsaPozemniLanoveDrahy": OsaPozemniLanoveDrahyAttrs;
  "OsaProtipovodnoveZabrany": OsaProtipovodnoveZabranyAttrs;
  "OsaSpecialniDrahy": OsaSpecialniDrahyAttrs;
  "OsaStavby": OsaStavbyAttrs;
  "OsaTramvajoveDrahy": OsaTramvajoveDrahyAttrs;
  "OsaZeleznicniTrate": OsaZeleznicniTrateAttrs;
  "OstatniMapoveZnacky": OstatniMapoveZnackyAttrs;
  "OstatniZastresenaStavbaDefinicniBod": OstatniZastresenaStavbaDefinicniBodAttrs;
  "OstatniZastresenaStavbaPlocha": OstatniZastresenaStavbaPlochaAttrs;
  "OznacnikZastavkyHromadneDopravyBod": OznacnikZastavkyHromadneDopravyBodAttrs;
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
  "PlynovodPS": PlynovodPSAttrs;
  "PodezdivkaDefinicniBod": PodezdivkaDefinicniBodAttrs;
  "PodezdivkaPlocha": PodezdivkaPlochaAttrs;
  "PodperneZarizeni": PodperneZarizeniAttrs;
  "PodrobnyBodCislo": PodrobnyBodCisloAttrs;
  "PodrobnyBodDI": PodrobnyBodDIAttrs;
  "PodrobnyBodKod": PodrobnyBodKodAttrs;
  "PodrobnyBodTI": PodrobnyBodTIAttrs;
  "PodrobnyBodVyska": PodrobnyBodVyskaAttrs;
  "PodrobnyBodZPS": PodrobnyBodZPSAttrs;
  "PodrobnyBodZPSNadRamecDTM": PodrobnyBodZPSNadRamecDTMAttrs;
  "PodzemniObjektZPSDefinicniBod": PodzemniObjektZPSDefinicniBodAttrs;
  "PodzemniObjektZPSPlocha": PodzemniObjektZPSPlochaAttrs;
  "PopisyDI": PopisyDIAttrs;
  "PopisySmeru": PopisySmeruAttrs;
  "PopisyTI": PopisyTIAttrs;
  "PopisyZPS": PopisyZPSAttrs;
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
  "PrivadecPovrchovychVodPS": PrivadecPovrchovychVodPSAttrs;
  "ProduktovodKoridorZameruLinie": ProduktovodKoridorZameruLinieAttrs;
  "ProduktovodKoridorZameruPlocha": ProduktovodKoridorZameruPlochaAttrs;
  "ProduktovodMistoZameruBod": ProduktovodMistoZameruBodAttrs;
  "ProduktovodMistoZameruPlocha": ProduktovodMistoZameruPlochaAttrs;
  "ProduktovodPS": ProduktovodPSAttrs;
  "PromenneDoprZnackyAZarizeniProvoznichInformaci": PromenneDoprZnackyAZarizeniProvoznichInformaciAttrs;
  "ProtihlukovaStena": ProtihlukovaStenaAttrs;
  "ProtipovodnovaZabranaDefinicniBod": ProtipovodnovaZabranaDefinicniBodAttrs;
  "ProtipovodnovaZabranaLinie": ProtipovodnovaZabranaLinieAttrs;
  "ProtipovodnovaZabranaPlocha": ProtipovodnovaZabranaPlochaAttrs;
  "ProtipovodnoveOpatreniPS": ProtipovodnoveOpatreniPSAttrs;
  "ProtipovodnoveOpatreniZamerLinie": ProtipovodnoveOpatreniZamerLinieAttrs;
  "ProtipovodnoveOpatreniZamerPlocha": ProtipovodnoveOpatreniZamerPlochaAttrs;
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
  "RozestavenaPlochaDefinicniBod": RozestavenaPlochaDefinicniBodAttrs;
  "RozestavenaPlochaPlocha": RozestavenaPlochaPlochaAttrs;
  "SchodisteDefinicniBod": SchodisteDefinicniBodAttrs;
  "SchodistePlocha": SchodistePlochaAttrs;
  "SchodyStupne": SchodyStupneAttrs;
  "SdilenaStavbaTIKoridorZameruLinie": SdilenaStavbaTIKoridorZameruLinieAttrs;
  "SdilenaStavbaTIKoridorZameruPlocha": SdilenaStavbaTIKoridorZameruPlochaAttrs;
  "SdilenaStavbaTIPS": SdilenaStavbaTIPSAttrs;
  "SdilenyObjektTI": SdilenyObjektTIAttrs;
  "SDZTypAVystrazne": SDZTypAVystrazneAttrs;
  "SDZTypAVystrazneZeleznice": SDZTypAVystrazneZelezniceAttrs;
  "SDZTypBZakazove": SDZTypBZakazoveAttrs;
  "SDZTypCPrikazove": SDZTypCPrikazoveAttrs;
  "SDZTypEDodatkove": SDZTypEDodatkoveAttrs;
  "SDZTypIJInformativniJine": SDZTypIJInformativniJineAttrs;
  "SDZTypIPInformativniProvozni": SDZTypIPInformativniProvozniAttrs;
  "SDZTypIPPInformativniProvozniParkoviste": SDZTypIPPInformativniProvozniParkovisteAttrs;
  "SDZTypISNInformativniSmeroveNavesti": SDZTypISNInformativniSmeroveNavestiAttrs;
  "SDZTypISInformativniSmeroveOstatni": SDZTypISInformativniSmeroveOstatniAttrs;
  "SDZTypISSInformativniSmeroveSmerovky": SDZTypISSInformativniSmeroveSmerovkyAttrs;
  "SDZTypIZInformativniZonove": SDZTypIZInformativniZonoveAttrs;
  "SDZTypPPrednosti": SDZTypPPrednostiAttrs;
  "SilnicniDopravaKoridorZameruLinie": SilnicniDopravaKoridorZameruLinieAttrs;
  "SilnicniDopravaKoridorZameruPlocha": SilnicniDopravaKoridorZameruPlochaAttrs;
  "SilnicniDopravaMistoZameruBod": SilnicniDopravaMistoZameruBodAttrs;
  "SilnicniDopravaMistoZameruPlocha": SilnicniDopravaMistoZameruPlochaAttrs;
  "SilnicniDopravaPS": SilnicniDopravaPSAttrs;
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
  "Srafy": SrafyAttrs;
  "StaniceElektrickeSiteBod": StaniceElektrickeSiteBodAttrs;
  "StaniceElektrickeSitePlocha": StaniceElektrickeSitePlochaAttrs;
  "Staniceni": StaniceniAttrs;
  "StavbaProPesiPS": StavbaProPesiPSAttrs;
  "StavbaProZpevneniPovrchuDefinicniBod": StavbaProZpevneniPovrchuDefinicniBodAttrs;
  "StavbaProZpevneniPovrchuPlocha": StavbaProZpevneniPovrchuPlochaAttrs;
  "StavebneUpraveneKorytoDefinicniBod": StavebneUpraveneKorytoDefinicniBodAttrs;
  "StavebneUpraveneKorytoPlocha": StavebneUpraveneKorytoPlochaAttrs;
  "StavebneUpravenyVjezdNaPozemek": StavebneUpravenyVjezdNaPozemekAttrs;
  "SterkovaPrehrazkaDefinicniBod": SterkovaPrehrazkaDefinicniBodAttrs;
  "SterkovaPrehrazkaPlocha": SterkovaPrehrazkaPlochaAttrs;
  "StojanNabijeniVydejniStojan": StojanNabijeniVydejniStojanAttrs;
  "Strom": StromAttrs;
  "StudnaNaVerejnemProstranstvi": StudnaNaVerejnemProstranstviAttrs;
  "StupenBod": StupenBodAttrs;
  "StupenDefinicniBod": StupenDefinicniBodAttrs;
  "StupenPlocha": StupenPlochaAttrs;
  "SuchaNadrzDefinicniBod": SuchaNadrzDefinicniBodAttrs;
  "SuchaNadrzPlocha": SuchaNadrzPlochaAttrs;
  "SvetelneAkustickeSignaly": SvetelneAkustickeSignalyAttrs;
  "SvetelneMisto": SvetelneMistoAttrs;
  "Svodidlo": SvodidloAttrs;
  "TechnickyKanal": TechnickyKanalAttrs;
  "TechnologickyPortalLinie": TechnologickyPortalLinieAttrs;
  "TechnologickyPortalPlocha": TechnologickyPortalPlochaAttrs;
  "TeplovodKoridorZameruLinie": TeplovodKoridorZameruLinieAttrs;
  "TeplovodKoridorZameruPlocha": TeplovodKoridorZameruPlochaAttrs;
  "TeplovodMistoZameruBod": TeplovodMistoZameruBodAttrs;
  "TeplovodMistoZameruPlocha": TeplovodMistoZameruPlochaAttrs;
  "TeplovodPS": TeplovodPSAttrs;
  "TerasaDefinicniBod": TerasaDefinicniBodAttrs;
  "TerasaPlocha": TerasaPlochaAttrs;
  "TerenniHrana": TerenniHranaAttrs;
  "TerminalKombinovaneDopravyMistoZameruBod": TerminalKombinovaneDopravyMistoZameruBodAttrs;
  "TerminalKombinovaneDopravyMistoZameruPlocha": TerminalKombinovaneDopravyMistoZameruPlochaAttrs;
  "TerminalKombinovaneDopravyPS": TerminalKombinovaneDopravyPSAttrs;
  "TechnologickyObjektPlynovodniSiteBod": TechnologickyObjektPlynovodniSiteBodAttrs;
  "TechnologickyObjektPlynovodniSitePlocha": TechnologickyObjektPlynovodniSitePlochaAttrs;
  "TechnologickyObjektSiteEKBod": TechnologickyObjektSiteEKBodAttrs;
  "TechnologickyObjektSiteEKPlocha": TechnologickyObjektSiteEKPlochaAttrs;
  "TechnologickyObjektSiteProduktovoduBod": TechnologickyObjektSiteProduktovoduBodAttrs;
  "TechnologickyObjektSiteProduktovoduPlocha": TechnologickyObjektSiteProduktovoduPlochaAttrs;
  "TechnologickyObjektTeplovodniSiteBod": TechnologickyObjektTeplovodniSiteBodAttrs;
  "TechnologickyObjektTeplovodniSitePlocha": TechnologickyObjektTeplovodniSitePlochaAttrs;
  "TramvajovaDrahaDefinicniBod": TramvajovaDrahaDefinicniBodAttrs;
  "TramvajovaDrahaPlocha": TramvajovaDrahaPlochaAttrs;
  "TrasaElektrickeSite": TrasaElektrickeSiteAttrs;
  "TrasaKanalizacniPripojky": TrasaKanalizacniPripojkyAttrs;
  "TrasaKynety": TrasaKynetyAttrs;
  "TrasaMistniElektrickeSite": TrasaMistniElektrickeSiteAttrs;
  "TrasaOdbernehoElektrickehoZarizeni": TrasaOdbernehoElektrickehoZarizeniAttrs;
  "TrasaOdbernehoPlynovehoZarizeni": TrasaOdbernehoPlynovehoZarizeniAttrs;
  "TrasaProtikorozniOchrany": TrasaProtikorozniOchranyAttrs;
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
  "Trojuhelniky": TrojuhelnikyAttrs;
  "UdrzovanaPlochaZeleneDefinicniBod": UdrzovanaPlochaZeleneDefinicniBodAttrs;
  "UdrzovanaPlochaZelenePlocha": UdrzovanaPlochaZelenePlochaAttrs;
  "UlozneMistoTezebnihoOdpaduDefinicniBod": UlozneMistoTezebnihoOdpaduDefinicniBodAttrs;
  "UlozneMistoTezebnihoOdpaduPlocha": UlozneMistoTezebnihoOdpaduPlochaAttrs;
  "UnikovyVychod": UnikovyVychodAttrs;
  "VegetacniMisaDefinicniBod": VegetacniMisaDefinicniBodAttrs;
  "VegetacniMisaPlocha": VegetacniMisaPlochaAttrs;
  "VerejneProstranstviPS": VerejneProstranstviPSAttrs;
  "VisutaLanovaDraha": VisutaLanovaDrahaAttrs;
  "VnitrniCleneniBudovStaveb": VnitrniCleneniBudovStavebAttrs;
  "VnitrniCleneniDopravniPlochy": VnitrniCleneniDopravniPlochyAttrs;
  "VodniCastPristavuBod": VodniCastPristavuBodAttrs;
  "VodniCastPristavuPlocha": VodniCastPristavuPlochaAttrs;
  "VodniDopravaKoridorZameruLinie": VodniDopravaKoridorZameruLinieAttrs;
  "VodniDopravaKoridorZameruPlocha": VodniDopravaKoridorZameruPlochaAttrs;
  "VodniDopravaMistoZameruBod": VodniDopravaMistoZameruBodAttrs;
  "VodniDopravaMistoZameruPlocha": VodniDopravaMistoZameruPlochaAttrs;
  "VodniDopravaPS": VodniDopravaPSAttrs;
  "VodniTokDefinicniBod": VodniTokDefinicniBodAttrs;
  "VodniTokLinie": VodniTokLinieAttrs;
  "VodniTokPlocha": VodniTokPlochaAttrs;
  "VodohospodarskeStavbyNadRamecDTM": VodohospodarskeStavbyNadRamecDTMAttrs;
  "VodorovneDopravniZnaceniBod": VodorovneDopravniZnaceniBodAttrs;
  "VodorovneDopravniZnaceniLinie": VodorovneDopravniZnaceniLinieAttrs;
  "VodorovneDopravniZnaceniPlocha": VodorovneDopravniZnaceniPlochaAttrs;
  "VodovodKoridorZameruLinie": VodovodKoridorZameruLinieAttrs;
  "VodovodKoridorZameruPlocha": VodovodKoridorZameruPlochaAttrs;
  "VodovodMistoZameruBod": VodovodMistoZameruBodAttrs;
  "VodovodMistoZameruPlocha": VodovodMistoZameruPlochaAttrs;
  "VodovodPS": VodovodPSAttrs;
  "Vrstevnice": VrstevniceAttrs;
  "VrstevnicePopis": VrstevnicePopisAttrs;
  "Vrt": VrtAttrs;
  "VyrobnaElektrinyNad100kWBod": VyrobnaElektrinyNad100kWBodAttrs;
  "VyrobnaElektrinyNad100kWPlocha": VyrobnaElektrinyNad100kWPlochaAttrs;
  "VyskovyBodNaTerenu": VyskovyBodNaTerenuAttrs;
  "VytahVChodniku": VytahVChodnikuAttrs;
  "VzletovaPristavaciDraha": VzletovaPristavaciDrahaAttrs;
  "Zabradli": ZabradliAttrs;
  "ZahradaDefinicniBod": ZahradaDefinicniBodAttrs;
  "ZahradaPlocha": ZahradaPlochaAttrs;
  "ZahradniBazenDefinicniBod": ZahradniBazenDefinicniBodAttrs;
  "ZahradniBazenPlocha": ZahradniBazenPlochaAttrs;
  "ZajmovaPlocha": ZajmovaPlochaAttrs;
  "ZakladaniASanace": ZakladaniASanaceAttrs;
  "ZarizeniElektrickeSite": ZarizeniElektrickeSiteAttrs;
  "ZarizeniKanalizacniPripojkyBod": ZarizeniKanalizacniPripojkyBodAttrs;
  "ZarizeniKanalizacniPripojkyDefinicniBod": ZarizeniKanalizacniPripojkyDefinicniBodAttrs;
  "ZarizeniKanalizacniPripojkyPlocha": ZarizeniKanalizacniPripojkyPlochaAttrs;
  "ZarizeniProLeteckyProvoz": ZarizeniProLeteckyProvozAttrs;
  "ZarizeniProtikorozniOchranyBod": ZarizeniProtikorozniOchranyBodAttrs;
  "ZarizeniProtikorozniOchranyPlocha": ZarizeniProtikorozniOchranyPlochaAttrs;
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
};
