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
export declare const ENTITY_CATALOG: Record<string, EntityMeta>;
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
//# sourceMappingURL=entities.d.ts.map