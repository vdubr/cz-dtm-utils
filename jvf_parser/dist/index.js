// Nejdřív celé veřejné API 1.4.3 (doménové typy, ENTITY_CATALOG=1.4.3 pro
// zpětnou kompatibilitu, enumy, sdílené atributy, registr verzí)…
export * from './1.4.3/index.js';
// …a poté verzní router, jehož `parseJvfDtm` (dispatch dle verze, R3/R4)
// přebíjí stejnojmenný export z 1.4.3 (explicitní re-export uvedený jako
// poslední má v použitém bundleru přednost před `export *`).
export { parseJvfDtm, getEntityCatalog, getEnumLabels, getBooleanAttrs, labelForAttribute, resolveDtmVersion, resolveDialectVersion, resolveUdmVersion, detectVersionString, sniffVersionByStructure, isErrorProtocolXml, } from './router.js';
// Registr dialektů (UDM, ŽXML) — detekce a parsování.
export { PARSER_DIALECTS, getParserDialect } from './dialects/registry.js';
export { parseStaniceniData } from './dialects/zxml.js';
// UDM (Univerzální datový model ČKZ) — přímý vstup bez routeru.
export { parseUdm, detectUdmVersionString } from './udm-2.1.1/parser.js';
// Vzhled objektů dialektů (barvy, tloušťky, vzory linií, symboly, natočení)
// — viewer i export do CAD.
export { getStyleTable, getObjectStyle, resolveAppearance, resolveRepresentativeAppearance, resolveRotationDeg, } from './styles/resolve.js';
// Katalog kartografických symbolů DTM ČR (ČÚZK) — vzhled čistého JVF DTM
// podle typu geometrie a hodnot atributů (viewer i export do CAD).
export { SYMBOLOGY as KATALOG_SYMBOLOGY, FALLBACK_COLORS as KATALOG_FALLBACK_COLORS, DEFAULT_COLOR as KATALOG_DEFAULT_COLOR, } from './katalog/symbology.js';
export { VARIANT_ATTR as KATALOG_VARIANT_ATTR } from './katalog/variantAttrMap.js';
export { getKatalogSymbology, katalogGeomOf, parseKatalogLineStyle, resolveKatalogLook, resolveKatalogRepresentativeLook, } from './katalog/resolve.js';
export { katalogSymbolId, resolveKatalogAppearance, resolveKatalogRepresentativeAppearance, } from './katalog/appearance.js';
export { ZXML_STYLES } from './zxml-1.5.1.6/generated/styles.js';
export { UDM_STYLES, getUdmStyle, resolveUdmAppearance, resolveUdmRepresentativeAppearance, } from './udm-2.1.1/styles.js';
// Protokol chyb (ServisJVFDTM/ProtokolChyb) — samostatný artefakt (R5).
export { parseErrorProtocol } from './1.5.0.1/error-protocol.js';
//# sourceMappingURL=index.js.map