import { labelForAttribute, type JvfDtm } from 'jvf-parser';
import { getProjects } from './projects.js';
import { ATTR_EMPTY, attrValueKey } from './featureFilter.js';

/**
 * Index atributů načtených dat pro filtr podle hodnoty atributu (Přehled
 * prvků): které atributy se v záznamech vyskytují, jaké mají hodnoty a
 * kolik záznamů na hodnotu připadá.
 *
 * Počítá se líně (až při otevření výběru atributu) a drží v mezipaměti,
 * dokud se nezmění načtené projekty.
 */

/** Jedna hodnota atributu ve výběru. */
export interface AttributeValueInfo {
  /** Klíč hodnoty pro filtr (`attrValueKey`; `ATTR_EMPTY` = bez hodnoty). */
  key: string;
  /** Počet záznamů s touto hodnotou. */
  count: number;
  /** Popisek hodnoty — název z párového atributu nebo z číselníku. */
  label?: string;
}

/** Atribut nabízený ve filtru. */
export interface AttributeInfo {
  name: string;
  /** Lidský název předvolby (např. „Stavba (PS/SO)“), jinak `undefined`. */
  title?: string;
  /** Předvolba — nabízí se na začátku seznamu. */
  preset: boolean;
  /** Hodnoty seřazené přirozeně podle textu, „bez hodnoty“ na konci. */
  values: AttributeValueInfo[];
}

/**
 * Předvolby filtru. `labelAttr` = atribut s názvem hodnoty (u stavby SŽ
 * číslo `CisStaOb` → název `NazStaOb`).
 */
const ATTRIBUTE_PRESETS: readonly { name: string; title: string; labelAttr?: string }[] = [
  { name: 'CisStaOb', title: 'Stavba (PS/SO)', labelAttr: 'NazStaOb' },
];

/**
 * Atribut s víc různými hodnotami se nenabízí (identifikátory, souřadnice,
 * data) — výběr z tisíců unikátních hodnot filtr nepotřebuje.
 */
const MAX_DISTINCT_VALUES = 1000;

/** Identifikátory (`ID`, `IDZakazky`…) se nenabízejí. */
const ID_ATTRIBUTE = /^ID(?:[A-Z]|$)/;

/** Hodnoty, které název nenesou (u párového atributu se přeskočí). */
const EMPTY_LABELS = new Set(['', 'n/a', 'N/A']);

interface Acc {
  counts: Map<string, number>;
  /** První surová hodnota pro klíč — pro popisek z číselníku. */
  raw: Map<string, unknown>;
  /** Párový název: klíč → (název → počet). */
  names?: Map<string, Map<string, number>>;
  version: string;
}

let cache: { dtms: readonly JvfDtm[]; index: AttributeInfo[] } | null = null;

const collator = new Intl.Collator('cs', { numeric: true, sensitivity: 'base' });

/** Index atributů všech načtených projektů (z mezipaměti, je-li aktuální). */
export function getAttributeIndex(): AttributeInfo[] {
  const dtms = getProjects().map((p) => p.dtm);
  if (cache && cache.dtms.length === dtms.length && cache.dtms.every((d, i) => d === dtms[i])) return cache.index;
  const index = buildAttributeIndex(dtms);
  cache = { dtms, index };
  return index;
}

/** Sestaví index atributů z dat (bez mezipaměti). */
export function buildAttributeIndex(dtms: readonly JvfDtm[]): AttributeInfo[] {
  const presets = new Map(ATTRIBUTE_PRESETS.map((p) => [p.name, p]));
  const acc = new Map<string, Acc>();
  for (const dtm of dtms) {
    for (const ot of dtm.objekty) {
      for (const z of ot.zaznamy) {
        const attrs = z.attributes ?? {};
        for (const [name, value] of Object.entries(attrs)) {
          if (ID_ATTRIBUTE.test(name)) continue;
          let a = acc.get(name);
          if (!a) {
            a = { counts: new Map(), raw: new Map(), version: dtm.verze };
            if (presets.get(name)?.labelAttr) a.names = new Map();
            acc.set(name, a);
          }
          const key = attrValueKey(value);
          a.counts.set(key, (a.counts.get(key) ?? 0) + 1);
          if (!a.raw.has(key)) a.raw.set(key, value);
          const labelAttr = presets.get(name)?.labelAttr;
          if (a.names && labelAttr) {
            const label = attrValueKey(attrs[labelAttr]);
            if (!EMPTY_LABELS.has(label)) {
              const m = a.names.get(key) ?? new Map<string, number>();
              m.set(label, (m.get(label) ?? 0) + 1);
              a.names.set(key, m);
            }
          }
        }
      }
    }
  }

  const out: AttributeInfo[] = [];
  for (const [name, a] of acc) {
    const preset = presets.get(name);
    if (!preset && (a.counts.size < 2 || a.counts.size > MAX_DISTINCT_VALUES)) continue;
    const values: AttributeValueInfo[] = [];
    for (const [key, count] of a.counts) {
      let label: string | undefined;
      const names = a.names?.get(key);
      if (names) label = [...names].sort((x, y) => y[1] - x[1])[0]?.[0];
      else if (key !== ATTR_EMPTY) label = labelForAttribute(name, a.raw.get(key), a.version);
      values.push({ key, count, label });
    }
    values.sort((x, y) =>
      x.key === ATTR_EMPTY ? 1 : y.key === ATTR_EMPTY ? -1 : collator.compare(x.key, y.key));
    out.push({ name, title: preset?.title, preset: !!preset, values });
  }
  out.sort((x, y) => (x.preset !== y.preset ? (x.preset ? -1 : 1) : collator.compare(x.name, y.name)));
  return out;
}

/** Popisek hodnoty do seznamu: „PS 02-01-71 — ŽST HÝSKOV, ETCS“, prázdná = „bez hodnoty“. */
export function formatAttributeValue(v: AttributeValueInfo): string {
  if (v.key === ATTR_EMPTY) return 'bez hodnoty';
  return v.label && v.label !== v.key ? `${v.key} — ${v.label}` : v.key;
}

/** Popisek atributu: „Stavba (PS/SO) · CisStaOb“, jinak název atributu. */
export function formatAttributeName(a: Pick<AttributeInfo, 'name' | 'title'>): string {
  return a.title ? `${a.title} · ${a.name}` : a.name;
}
