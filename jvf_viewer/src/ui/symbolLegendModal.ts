/**
 * Legenda znaků — všechny symboly dialektu aktivní verze (UDM: knihovna
 * znaků ČKZ, ŽXML: znaky SŽ ze stylů SLD datového modelu DTMŽ) po objektech
 * a hodnotách číselníků. Znaky lze stáhnout jako SVG v balíku (ZIP) se
 * seznamem `znaky.csv`.
 *
 * Tlačítko je v panelu vrstev vedle „Legendy DTM" a je vidět jen v režimech
 * dialektů (`data-mode="udm jzm"`).
 */
import {
  dialectOf,
  formatVersionLabel,
  getEntityCatalog,
  getStyleTable,
  labelForAttribute,
  type Appearance,
} from 'jvf-parser';
import { getActiveVersion, onActiveVersionChange } from '../state/activeVersion.js';
import { createZip, type ZipEntry } from '../util/zip.js';
import { symbolPreviewUrl } from './symbolSwatch.js';

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
  const push = (code: string, app: Appearance, extra: Partial<SymbolEntry> = {}): void => {
    if (!app.symbol) return;
    const meta = byCode.get(code);
    const color = app.color ?? '#000000';
    out.push({
      symbol: app.symbol,
      color,
      path: `${dialect.id}/${app.symbol}_${hex(color)}.svg`,
      objectName: meta?.nazev ?? code,
      elementName: meta?.elementName ?? code,
      code,
      ...extra,
    });
  };
  for (const [code, style] of Object.entries(styles)) {
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

function download(bytes: Uint8Array<ArrayBuffer>, fileName: string): void {
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

function render(body: HTMLElement, entries: readonly SymbolEntry[], filter: string): void {
  const q = filter.trim().toLocaleLowerCase('cs');
  const shown = q
    ? entries.filter((e) =>
        [e.objectName, e.elementName, e.code, e.valueLabel, e.value, e.symbol]
          .some((s) => s?.toLocaleLowerCase('cs').includes(q))
      )
    : entries;
  body.replaceChildren();
  if (shown.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty-hint';
    empty.textContent = entries.length === 0 ? 'Aktivní datový model nemá vlastní znaky.' : 'Nic nenalezeno.';
    body.appendChild(empty);
    return;
  }
  const grid = document.createElement('div');
  grid.className = 'symbol-legend-grid';
  for (const e of shown) {
    const card = document.createElement('figure');
    card.className = 'symbol-legend-item';
    card.title = `${e.elementName} · kód ${e.code}${e.attr ? ` · ${e.attr}=${e.value}` : ''} · znak ${e.symbol}`;
    const img = document.createElement('img');
    img.src = symbolPreviewUrl(e.path);
    img.alt = e.symbol;
    img.loading = 'lazy';
    const cap = document.createElement('figcaption');
    const name = document.createElement('span');
    name.className = 'legend-name';
    name.textContent = e.objectName;
    const meta = document.createElement('span');
    meta.className = 'legend-meta';
    meta.textContent = e.valueLabel ?? (e.value ? `${e.attr} = ${e.value}` : 'základní znak');
    cap.append(name, meta);
    card.append(img, cap);
    grid.appendChild(card);
  }
  body.appendChild(grid);
}

export function setupSymbolLegendModal(): void {
  const btn = document.getElementById('btn-symbol-legend');
  const modal = document.getElementById('symbol-legend-modal');
  const closeBtn = document.getElementById('symbol-legend-modal-close');
  const body = document.getElementById('symbol-legend-modal-body');
  const title = document.getElementById('symbol-legend-modal-title');
  const search = document.getElementById('symbol-legend-modal-search') as HTMLInputElement | null;
  const dl = document.getElementById('symbol-legend-download') as HTMLButtonElement | null;
  if (!btn || !modal || !closeBtn || !body || !title || !dl) {
    console.warn('[symbolLegendModal] chybí některý DOM prvek');
    return;
  }

  let entries: SymbolEntry[] | null = null;
  onActiveVersionChange(() => {
    entries = null;
  });

  const open = (): void => {
    const version = getActiveVersion();
    entries ??= collectSymbols(version);
    title.textContent = `Legenda znaků — ${formatVersionLabel(version)}`;
    dl.disabled = entries.length === 0;
    dl.textContent = `Stáhnout SVG (ZIP, ${entries.length})`;
    render(body, entries, search?.value ?? '');
    modal.style.display = 'flex';
  };
  const close = (): void => {
    modal.style.display = 'none';
  };

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (ev) => {
    if (ev.target === modal) close();
  });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && modal.style.display !== 'none') close();
  });
  search?.addEventListener('input', () => render(body, entries ?? [], search.value));
  dl.addEventListener('click', () => {
    void (async () => {
      const version = getActiveVersion();
      const list = entries ?? collectSymbols(version);
      dl.disabled = true;
      const label = dl.textContent;
      dl.textContent = 'Připravuji…';
      try {
        const zip = await buildSymbolZip(list);
        download(zip, `znaky-${version}.zip`);
      } finally {
        dl.disabled = false;
        dl.textContent = label;
      }
    })();
  });
}
