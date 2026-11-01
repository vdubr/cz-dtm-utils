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
export declare const ENTITY_CATALOG: Record<string, EntityMeta>;
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
//# sourceMappingURL=entities.d.ts.map