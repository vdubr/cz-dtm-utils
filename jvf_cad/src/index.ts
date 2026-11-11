/**
 * jvf-cad — export JVF DTM, UDM (Univerzální datový model ČKZ) a ŽXML do
 * AutoCAD DXF.
 *
 * `exportDxf(dtm)` vyrobí výkres ve vzhledu datového modelu — JVF DTM podle
 * Katalogu DTM ČR, UDM podle knihovny ČKZ, ŽXML se znaky SŽ (hladiny, barvy,
 * tloušťky, typy čar, symboly jako bloky, výplně ploch Katalogu, popisy jako
 * texty) s atributy objektů v XDATA aplikace „UDM". Souřadnice EPSG:5514
 * (metry), měřítko 1:500.
 */
export { exportDxf } from './export.js';
export type { ExportDxfOptions, ExportDxfResult } from './export.js';
export type { DxfVersion } from './dxf/document.js';
export type { CadSymbolPrimitive } from './symbols.js';
