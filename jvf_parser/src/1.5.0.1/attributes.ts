/**
 * Parsování `AtributyObjektu` pro JVF DTM 1.5.0.1.
 *
 * Shodné s 1.4.3 (data-driven flatten), navíc sdílená skupina
 * **`SpolecneAtributyObjektuPSPI`** (změna #4/#6). Low-level helpery se
 * reusují z 1.4.3 (`xml-helpers.ts`); 1.4.3 `attributes.ts` se nemění (R1).
 */
import type { CommonAttributes } from './types.js';
import { extractText, extractAttributeValue } from '../1.4.3/xml-helpers.js';

/** Sdílené atributové skupiny 1.5.0.1 (1.4.3 sada + PSPI). */
const SHARED_BLOCK_NAMES = [
  'SpolecneAtributyObjektuZPS',
  'SpolecneAtributyObjektuDefinicnichBodu',
  'SpolecneAtributyObjektuTI',
  'SpolecneAtributyObjektuPasemTI',
  'SpolecneAtributyObjektuZPS_TI',
  'SpolecneAtributyObjektuDI',
  'SpolecneAtributyObjektuPasemDI',
  'SpolecneAtributyObjektuZameru',
  'SpolecneAtributyObjektuPSPI',
] as const;

function parseCommonAttributes(savoEl: unknown): CommonAttributes {
  const common: CommonAttributes = {};
  if (savoEl == null || typeof savoEl !== 'object') return common;
  const obj = savoEl as Record<string, unknown>;

  const set = (key: keyof CommonAttributes, raw: unknown): void => {
    const v = extractText(raw);
    if (v != null) common[key] = v;
  };

  set('id', obj['ID']);
  set('idZmeny', obj['IDZmeny']);
  set('idEditora', obj['IDEditora']);
  set('popisObjektu', obj['PopisObjektu']);
  set('datumVkladu', obj['DatumVkladu']);
  set('vkladOsoba', obj['VkladOsoba']);
  set('datumZmeny', obj['DatumZmeny']);
  set('zmenaOsoba', obj['ZmenaOsoba']);

  return common;
}

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
      target[key] = null;
    }
  }
}

export function parseAtributyObjektu1501(atributyEl: unknown): {
  commonAttributes: CommonAttributes;
  attributes: Record<string, string | number | boolean | null>;
} {
  const commonAttributes: CommonAttributes = {};
  const attributes: Record<string, string | number | boolean | null> = {};

  if (atributyEl == null || typeof atributyEl !== 'object') {
    return { commonAttributes, attributes };
  }

  const obj = atributyEl as Record<string, unknown>;

  Object.assign(commonAttributes, parseCommonAttributes(obj['SpolecneAtributyVsechObjektu']));

  for (const blockKey of SHARED_BLOCK_NAMES) {
    const block = obj[blockKey];
    if (block != null && typeof block === 'object') {
      flattenSharedBlock(block as Record<string, unknown>, attributes);
    }
  }

  const skipKeys = new Set<string>(['SpolecneAtributyVsechObjektu', ...SHARED_BLOCK_NAMES]);
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('@_')) continue;
    if (skipKeys.has(key)) continue;
    const extracted = extractAttributeValue(val);
    if (extracted !== null) {
      attributes[key] = extracted;
    } else if (val != null && typeof val === 'object') {
      attributes[key] = null;
    }
  }

  return { commonAttributes, attributes };
}
