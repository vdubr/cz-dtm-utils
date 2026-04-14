import type { CommonAttributes } from './types.js';
import { extractText, extractAttributeValue } from './xml-helpers.js';

/**
 * Extract CommonAttributes from `SpolecneAtributyVsechObjektu`.
 */
function parseCommonAttributes(savoEl: unknown): CommonAttributes {
  const common: CommonAttributes = {};
  if (savoEl == null || typeof savoEl !== 'object') return common;

  const obj = savoEl as Record<string, unknown>;

  const id = extractText(obj['ID']);
  if (id != null) common.id = id;

  const idZmeny = extractText(obj['IDZmeny']);
  if (idZmeny != null) common.idZmeny = idZmeny;

  const idEditora = extractText(obj['IDEditora']);
  if (idEditora != null) common.idEditora = idEditora;

  const popis = extractText(obj['PopisObjektu']);
  if (popis != null) common.popisObjektu = popis;

  const datumVkladu = extractText(obj['DatumVkladu']);
  if (datumVkladu != null) common.datumVkladu = datumVkladu;

  const vkladOsoba = extractText(obj['VkladOsoba']);
  if (vkladOsoba != null) common.vkladOsoba = vkladOsoba;

  const datumZmeny = extractText(obj['DatumZmeny']);
  if (datumZmeny != null) common.datumZmeny = datumZmeny;

  const zmenaOsoba = extractText(obj['ZmenaOsoba']);
  if (zmenaOsoba != null) common.zmenaOsoba = zmenaOsoba;

  return common;
}

/**
 * Flatten a shared attributes block (SpolecneAtributyObjektuTI/DI/ZPS) into the target.
 * Elements in these blocks are plain key-value pairs without xmlns wrappers on them individually.
 */
function flattenSharedBlock(
  block: Record<string, unknown>,
  target: Record<string, string | number | boolean | null>
): void {
  for (const [key, val] of Object.entries(block)) {
    if (key.startsWith('@_')) continue;
    const extracted = extractAttributeValue(val);
    if (extracted !== null) {
      target[key] = extracted;
    } else if (val != null && typeof val === 'object') {
      // Could be an empty element
      target[key] = null;
    }
  }
}

/**
 * Parse an `AtributyObjektu` element:
 *   - Extract `commonAttributes` from SpolecneAtributyVsechObjektu
 *   - Flatten shared sub-blocks and direct children into `attributes`
 */
export function parseAtributyObjektu(atributyEl: unknown): {
  commonAttributes: CommonAttributes;
  attributes: Record<string, string | number | boolean | null>;
} {
  const commonAttributes: CommonAttributes = {};
  const attributes: Record<string, string | number | boolean | null> = {};

  if (atributyEl == null || typeof atributyEl !== 'object') {
    return { commonAttributes, attributes };
  }

  const obj = atributyEl as Record<string, unknown>;

  // Extract common identity attributes
  const savo = obj['SpolecneAtributyVsechObjektu'];
  Object.assign(commonAttributes, parseCommonAttributes(savo));

  // Flatten all shared attribute blocks
  const sharedBlockNames = [
    'SpolecneAtributyObjektuZPS',
    'SpolecneAtributyObjektuDefinicnichBodu',
    'SpolecneAtributyObjektuTI',
    'SpolecneAtributyObjektuPasemTI',
    'SpolecneAtributyObjektuZPS_TI',
    'SpolecneAtributyObjektuDI',
    'SpolecneAtributyObjektuPasemDI',
    'SpolecneAtributyObjektuZameru',
  ];
  for (const blockKey of sharedBlockNames) {
    const block = obj[blockKey];
    if (block != null && typeof block === 'object') {
      flattenSharedBlock(block as Record<string, unknown>, attributes);
    }
  }

  // Flatten direct child elements (skip structural blocks)
  const skipKeys = new Set([
    'SpolecneAtributyVsechObjektu',
    ...sharedBlockNames,
  ]);

  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('@_')) continue;
    if (skipKeys.has(key)) continue;

    // Direct child elements have xmlns wrapper: {#text: val, @_xmlns: "atr"}
    const extracted = extractAttributeValue(val);
    if (extracted !== null) {
      attributes[key] = extracted;
    } else if (val != null && typeof val === 'object') {
      // Empty element (e.g. <CisloBodu xmlns="atr"/>)
      attributes[key] = null;
    }
  }

  return { commonAttributes, attributes };
}
