import type { JvfDtm } from 'jvf-dtm-types';
import { type DxfVersion } from './dxf/document.js';
export interface ExportDxfOptions {
    /** Verze DXF: `R2013` (true color, UTF-8; výchozí) nebo `R2000` (ACI, pro starší CAD). */
    version?: DxfVersion;
    /** Zahrnout mazané záznamy (Del) na hladiny `…_DEL` (výchozí `false`). */
    includeDeleted?: boolean;
    /** Zapsat geometrii ve 2D (výška 0) místo 3D (výchozí `false`). */
    flatten2D?: boolean;
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