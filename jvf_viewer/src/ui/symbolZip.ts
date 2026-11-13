/**
 * Znaky dialektu aktivní verze (UDM: knihovna znaků ČKZ, ŽXML: znaky SŽ ze
 * stylů SLD datového modelu DTMŽ) jako SVG v balíku ZIP se seznamem
 * `znaky.csv` — akce „Stáhnout SVG (ZIP)" v Legendě DTM (ui/legendModal.ts).
 */
import { dialectOf, getEntityCatalog, getExtensionTable, getStyleTable, type Appearance, type StyleTable } from 'jvf-parser';
import { listStyleVariants } from '../map/dialectStyle.js';
import { downloadBlob } from '../util/download.js';
import { createZip, type ZipEntry } from '../util/zip.js';

const SVG_BASE = `${import.meta.env.BASE_URL}symboly/`;

interface SymbolEntry {
  symbol: string;
  color: string;
  /** Cesta k SVG relativně k `public/symboly/`. */
  path: string;
  objectName: string;
  elementName: string;
  code: string;
  /** Atribut a hodnota číselníku, které znak určují (u základního znaku chybí). */
  attr?: string;
  value?: string;
  valueLabel?: string;
}

function hex(color: string): string {
  return color.replace('#', '').toLowerCase();
}

/** Seznam znaků dialektu dané verze (pořadí: objekt, pak hodnoty číselníku). */
function collectSymbols(version: string): SymbolEntry[] {
  const dialect = dialectOf(version);
  const styles = getStyleTable(version);
  if (!dialect || !styles) return [];
  const byCode = new Map<string, { nazev: string; elementName: string }>(
    Object.values(getEntityCatalog(version)).map((m) => [`${m.codeBase}-${m.codeSuffix}`, m])
  );
  const out: SymbolEntry[] = [];
  const add = (code: string, symbol: string, color: string, extra: Partial<SymbolEntry>): void => {
    const meta = byCode.get(code);
    out.push({
      symbol,
      color,
      path: `${dialect.id}/${symbol}_${hex(color)}.svg`,
      objectName: meta?.nazev ?? code,
      elementName: meta?.elementName ?? code,
      code,
      ...extra,
    });
  };
  // Bodová značka a značka opakovaná podél linie (ŽXML).
  const push = (code: string, app: Appearance, extra: Partial<SymbolEntry> = {}): void => {
    if (app.symbol) add(code, app.symbol, app.color ?? '#000000', extra);
    if (app.lineSymbol) {
      const label = extra.valueLabel ?? (extra.value ? `${extra.attr} = ${extra.value}` : 'základní znak');
      add(code, app.lineSymbol.symbol, app.lineSymbol.color, { ...extra, valueLabel: `${label} (značka v linii)` });
    }
  };
  // Varianty stejným výčtem jako Legenda DTM; ŽXML: objekty JVF s rozšířením
  // číselníků SŽ — jen položky rozšíření (bez základu, neslučují se s ním).
  const tables: [StyleTable, boolean][] = [
    [styles, true],
    [getExtensionTable(version) ?? {}, false],
  ];
  for (const [table, isStyle] of tables) {
    for (const [code, style] of Object.entries(table)) {
      if (isStyle) push(code, style.base);
      for (const v of listStyleVariants(style, version, isStyle)) {
        push(code, v.app, { attr: v.attr, value: v.value, ...(v.label ? { valueLabel: v.label } : {}) });
      }
    }
  }
  out.sort(
    (a, b) =>
      a.objectName.localeCompare(b.objectName, 'cs') ||
      (a.valueLabel ?? '').localeCompare(b.valueLabel ?? '', 'cs')
  );
  return out;
}

/** Bezpečný název souboru / složky (zachová diakritiku). */
function safe(s: string): string {
  return s.replace(/[\\/:*?"<>|]+/g, '_').replace(/\s+/g, ' ').trim().slice(0, 80) || 'znak';
}

function csvCell(s: string | undefined): string {
  const v = s ?? '';
  return /[;"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

/** ZIP se znaky: `<objekt>/<hodnota>__<symbol>.svg` + `znaky.csv`. */
async function buildSymbolZip(entries: readonly SymbolEntry[]): Promise<Uint8Array<ArrayBuffer>> {
  const files: ZipEntry[] = [];
  const csv = ['soubor;symbol;objekt;element;kod;atribut;hodnota;popisek;barva'];
  const cache = new Map<string, string>();
  for (const e of entries) {
    let svg = cache.get(e.path);
    if (svg === undefined) {
      const res = await fetch(SVG_BASE + e.path);
      if (!res.ok) continue;
      svg = await res.text();
      cache.set(e.path, svg);
    }
    const label = e.valueLabel ?? e.value ?? 'základní';
    const name = `${safe(e.objectName)}/${safe(label)}__${e.symbol}.svg`;
    files.push({ name, data: svg });
    csv.push(
      [name, e.symbol, e.objectName, e.elementName, e.code, e.attr, e.value, e.valueLabel, e.color]
        .map(csvCell)
        .join(';')
    );
  }
  // BOM, ať Excel pozná UTF-8.
  files.unshift({ name: 'znaky.csv', data: '﻿' + csv.join('\r\n') + '\r\n' });
  return createZip(files);
}

/** Seznam znaků je statický (styly dialektu) — jednou na verzi. */
const symbolCache = new Map<string, SymbolEntry[]>();

/** Stáhne znaky dialektu dané verze jako `znaky-<verze>.zip`. */
export async function downloadSymbolZip(version: string): Promise<void> {
  let entries = symbolCache.get(version);
  if (!entries) {
    entries = collectSymbols(version);
    symbolCache.set(version, entries);
  }
  if (entries.length === 0) return;
  downloadBlob(await buildSymbolZip(entries), 'application/zip', `znaky-${version}.zip`);
}
