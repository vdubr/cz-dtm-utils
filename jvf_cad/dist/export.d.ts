/**
 * Export JVF DTM a dialektů do DXF ve vzhledu datového modelu: čisté JVF DTM
 * → Katalog kartografických symbolů DTM ČR (ČÚZK, stejně jako viewer),
 * UDM → vzhled UDM (knihovna ČKZ), ŽXML → symbologie SŽ (fotokatalog MOZeK).
 *
 * - hladina = obsahová část + objektový typ (`ZPS_HraniceBudovy`, mazané
 *   záznamy `…_DEL`), barva / tloušťka / typ čáry hladiny = vzhled objektu;
 *   vzhled podle hodnot číselníků se zapisuje jako přepis na entitě,
 * - linie → LWPOLYLINE (konstantní výška) / 3D POLYLINE, plochy → uzavřené
 *   obvody, u Katalogu DTM ČR navíc plná výplň (HATCH pod obrysy; UDM a ŽXML
 *   plochy nevyplňují), body → blok symbolu / POINT,
 *   popisy a názvy → TEXT s `PopisObjektu`,
 * - XDATA aplikace „UDM": objektový typ, kód, ID, druh záznamu a atributy
 *   (`Název=kód (popisek)`).
 *
 * Souřadnice beze změny (EPSG:5514, metry), měřítko symbolů a textů 1:500.
 */
import { type StyleTable } from 'jvf-parser';
import type { JvfDtm } from 'jvf-dtm-types';
import { type DxfVersion } from './dxf/document.js';
export interface ExportDxfOptions {
    /** Verze DXF: `R2013` (true color, UTF-8; výchozí) nebo `R2000` (ACI, pro starší CAD). */
    version?: DxfVersion;
    /** Zahrnout mazané záznamy (Del) na hladiny `…_DEL` (výchozí `false`). */
    includeDeleted?: boolean;
    /** Zapsat geometrii ve 2D (výška 0) místo 3D (výchozí `false`). */
    flatten2D?: boolean;
    /**
     * Tabulka vzhledu (výchozí podle `dtm.verze`: dialekt → jeho styly,
     * čisté JVF DTM → Katalog DTM ČR).
     */
    styles?: StyleTable;
    /** Vyplnit plochy, které mají ve vzhledu výplň (Katalog DTM ČR; výchozí `true`). */
    fillAreas?: boolean;
}
/** Statistika exportu (pro UI / testy). */
export interface ExportDxfResult {
    dxf: string;
    layers: number;
    entities: number;
    blocks: number;
    skipped: number;
}
export declare function exportDxf(dtm: JvfDtm, options?: ExportDxfOptions): ExportDxfResult;
//# sourceMappingURL=export.d.ts.map