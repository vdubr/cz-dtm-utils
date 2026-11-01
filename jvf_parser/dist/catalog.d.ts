/**
 * Obecný tvar položky katalogu entit — společný pro všechny verze JVF DTM
 * i dialekty. Generované `EntityMeta` jednotlivých verzí jsou jeho
 * zúženími (union `obsahovaCast`), takže je lze přiřadit sem.
 */
export type GeomKind = 'point' | 'curve' | 'surface' | 'surface+multiCurve';
export interface EntityMeta {
    elementName: string;
    nazev: string;
    codeBase: string;
    codeSuffix: string;
    kategorieObjektu: string;
    skupinaObjektu: string;
    /** Obsahová část (JVF: ZPS/TI/DI/PSPI, UDM: …UDM/OST, ŽXML: ZDT/ZDD/H3D/ODSZ/SKLEP). */
    obsahovaCast: string;
    sharedAttrGroup: string | null;
    specificAttrs: readonly string[];
    geomType: GeomKind;
    geomOptional: boolean;
    hasOblastKI: boolean;
    /** Dialekt, ze kterého objekt pochází (`udm`, `zxml`); u objektů JVF DTM chybí. */
    origin?: string;
    /** Kód objektu v datovém modelu dialektu (ŽXML `ObjektovyKod`, např. `100447`). */
    objektovyKod?: string;
    /** Sdílená skupina atributů dialektu (ŽXML `SpolecneAtributyObjektu…SZ`). */
    dialectAttrGroup?: string;
}
export type EntityCatalog = Readonly<Record<string, EntityMeta>>;
//# sourceMappingURL=catalog.d.ts.map