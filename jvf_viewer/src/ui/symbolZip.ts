/**
 * Znaky dialektu aktivní verze (UDM: knihovna znaků ČKZ, ŽXML: znaky SŽ ze
 * stylů SLD datového modelu DTMŽ) jako SVG v balíku ZIP se seznamem
 * `znaky.csv` — akce „Stáhnout SVG (ZIP)" v Legendě DTM (ui/legendModal.ts).
 */
import {
  dialectOf,
  getEntityCatalog,
  getExtensionTable,
  getStyleTable,
  labelForAttribute,
  type Appearance,
} from 'jvf-parser';
import { createZip, type ZipEntry } from '../util/zip.js';

const SVG_BASE = `${import.meta.env.BASE_URL}symboly/`;

export interface SymbolEntry {
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
export function collectSymbols(version: string): SymbolEntry[] {
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
  // ŽXML: objekty JVF s rozšířením číselníků SŽ — jen položky rozšíření (bez základu).
  const extensions = getExtensionTable(version) ?? {};
  for (const [code, style] of [...Object.entries(styles), ...Object.entries(extensions)]) {
    push(code, style.base);
    for (const rule of style.rules ?? []) {
      for (const [value, app] of Object.entries(rule.values)) {
        const merged = { ...style.base, ...app };
        const label = labelForAttribute(rule.attr, value, version);
        push(code, merged, { attr: rule.attr, value, ...(label ? { valueLabel: label } : {}) });
      }
    }
    // Složená pravidla (ŽXML: kombinace hodnot více atributů) — popisky spojené „ · ".
    for (const c of style.cases ?? []) {
      const when = Object.entries(c.when);
      const labels = when.map(([attr, value]) => labelForAttribute(attr, value, version) ?? value);
      push(code, { ...style.base, ...c.app }, {
        attr: when.map(([attr]) => attr).join(' + '),
        value: when.map(([, value]) => value).join(' + '),
        valueLabel: labels.join(' · '),
      });
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
export async function buildSymbolZip(entries: readonly SymbolEntry[]): Promise<Uint8Array<ArrayBuffer>> {
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

function downloadBytes(bytes: Uint8Array<ArrayBuffer>, fileName: string): void {
  const blob = new Blob([bytes], { type: 'application/zip' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Stáhne znaky dialektu dané verze jako `znaky-<verze>.zip`; vrací počet znaků. */
export async function downloadSymbolZip(version: string): Promise<number> {
  const entries = collectSymbols(version);
  if (entries.length === 0) return 0;
  downloadBytes(await buildSymbolZip(entries), `znaky-${version}.zip`);
  return entries.length;
}
