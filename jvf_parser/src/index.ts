// Nejdřív celé veřejné API 1.4.3 (doménové typy, ENTITY_CATALOG=1.4.3 pro
// zpětnou kompatibilitu, enumy, sdílené atributy, registr verzí)…
export * from './1.4.3/index.js';

// …a poté verzní router, jehož `parseJvfDtm` (dispatch dle verze, R3/R4)
// přebíjí stejnojmenný export z 1.4.3 (explicitní re-export uvedený jako
// poslední má v použitém bundleru přednost před `export *`).
export {
  parseJvfDtm,
  getEntityCatalog,
  resolveDtmVersion,
  detectVersionString,
  sniffVersionByStructure,
  isErrorProtocolXml,
} from './router.js';
