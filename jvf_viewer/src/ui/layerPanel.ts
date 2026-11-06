import type { DataStyle, JvfVectorLayer } from '../map/jvfLayers.js';
import { LAYER_COLORS, resolveDataStyle } from '../map/jvfLayers.js';
import { resolveLayerKey } from '../state/projects.js';
import {
  isLayerVisible,
  subscribeLayerVisibility,
  toggleLayerVisible,
} from '../state/layerVisibility.js';
import { isContentPartVisible, subscribeFeatureFilter } from '../state/featureFilter.js';
import { contentPartTitle } from '../state/contentParts.js';
import { appModeDef, getAppMode } from '../state/appMode.js';
import { buildStyleSwatch, swatchKindForObjektovyTyp } from './symbolSwatch.js';

/** Tooltip s použitými variantami značky („nástěnná konzola 3×, …"). */
function variantsNote({ variants }: DataStyle): string {
  return variants.length > 0 ? `\nZnačka podle typu: ${variants.map((v) => `${v.value} ${v.count}×`).join(', ')}` : '';
}

/**
 * Promítne společný stav do panelu: viditelnost vrstev (`state/layerVisibility`
 * — mění ji i ikona oka v Přehledu prvků) a filtr obsahové části z Přehledu
 * prvků (skupiny odfiltrovaných částí se ztlumí).
 */
function syncLayerPanel(): void {
  const container = document.getElementById('jvf-layers-list');
  if (!container) return;
  container.querySelectorAll<HTMLElement>('.layer-item[data-layer-key]').forEach((item) => {
    const visible = isLayerVisible(item.dataset['layerKey'] ?? '');
    item.classList.toggle('active', visible);
    item.classList.toggle('inactive', !visible);
    item.setAttribute('aria-pressed', String(visible));
  });
  container.querySelectorAll<HTMLElement>('.layer-group[data-part]').forEach((group) => {
    const part = group.dataset['part'] ?? '';
    const shown = isContentPartVisible(part);
    group.classList.toggle('filtered-out', !shown);
    group.title = shown
      ? ''
      : `${contentPartTitle(part)} je skrytá filtrem obsahové části v Přehledu prvků`;
  });
}

/** Text pro hledání bez rozlišení velikosti písmen a diakritiky. */
function normalizeSearch(s: string): string {
  return s.toLocaleLowerCase('cs').normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

/**
 * Filtr seznamu vrstev podle pole „Hledat vrstvu" — jen zúží seznam
 * (viditelnost vrstev v mapě nemění); skupina bez shody se skryje.
 */
function applyLayerSearch(): void {
  const container = document.getElementById('jvf-layers-list');
  const input = document.getElementById('layer-search') as HTMLInputElement | null;
  if (!container || !input) return;
  const q = normalizeSearch(input.value.trim());
  let shown = 0;
  container.querySelectorAll<HTMLElement>('.layer-group').forEach((group) => {
    let groupShown = 0;
    group.querySelectorAll<HTMLElement>('.layer-item').forEach((item) => {
      const match = !q || (item.dataset['search'] ?? '').includes(q);
      item.hidden = !match;
      if (match) groupShown++;
    });
    group.hidden = groupShown === 0;
    shown += groupShown;
  });
  let empty = container.querySelector<HTMLElement>('.layer-search-empty');
  if (shown === 0 && q) {
    if (!empty) {
      empty = document.createElement('p');
      empty.className = 'empty-hint layer-search-empty';
      empty.textContent = 'Žádná vrstva neodpovídá hledání.';
      container.appendChild(empty);
    }
  } else {
    empty?.remove();
  }
}

let subscribed = false;

export function renderLayerPanel(layers: JvfVectorLayer[]): void {
  if (!subscribed) {
    subscribed = true;
    subscribeLayerVisibility(syncLayerPanel);
    subscribeFeatureFilter(syncLayerPanel);
    document.getElementById('layer-search')?.addEventListener('input', applyLayerSearch);
  }
  const container = document.getElementById('jvf-layers-list')!;
  container.innerHTML = '';
  const search = document.getElementById('layer-search') as HTMLInputElement | null;
  if (search) search.hidden = layers.length === 0;

  // Bez dat vodotisk „Přetáhněte data ve formátu …" uprostřed panelu;
  // ikona je tlačítko nahrání (data-upload-trigger → ui/fileUpload.ts).
  if (layers.length === 0) {
    const format = appModeDef(getAppMode()).dataFormat;
    container.innerHTML = `
      <div class="empty-hint panel-empty-hint">
        <button type="button" class="panel-empty-upload" data-upload-trigger title="Nahrát soubor z disku" aria-label="Nahrát soubor z disku">
          <span class="material-symbols-outlined" aria-hidden="true">upload_file</span>
        </button>
        <span>Přetáhněte data ve formátu <span data-app-format>${format}</span></span>
      </div>`;
    return;
  }

  // Group by obsahovaCast
  const groups = new Map<string, JvfVectorLayer[]>();
  for (const layer of layers) {
    const key = layer.objektovyTyp.obsahovaCast;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(layer);
  }

  for (const [obsahovaCast, groupLayers] of groups) {
    const groupEl = document.createElement('div');
    groupEl.className = 'layer-group';
    groupEl.dataset['part'] = obsahovaCast;

    const groupHeader = document.createElement('div');
    groupHeader.className = 'layer-group-header';
    // Obsahová část = název tlustě podtržený barvou části (app-m3.css .part-underline).
    const groupName = document.createElement('span');
    groupName.className = 'layer-group-name part-underline';
    groupName.style.setProperty('--part-color', LAYER_COLORS[obsahovaCast] ?? '#90a4ae');
    // Zkratka + celý název části („DI · Dopravní infrastruktura").
    const partTitle = document.createElement('span');
    partTitle.className = 'part-title';
    partTitle.textContent = contentPartTitle(obsahovaCast);
    groupName.append(obsahovaCast, partTitle);
    groupHeader.appendChild(groupName);
    groupEl.appendChild(groupHeader);

    for (const layer of groupLayers) {
      const item = document.createElement('div');
      const layerKey = resolveLayerKey(layer.objektovyTyp);
      item.className = 'layer-item active';
      item.dataset['layerKey'] = layerKey;
      const ot = layer.objektovyTyp;
      item.dataset['search'] = normalizeSearch(
        [ot.nazev, ot.elementName, `${ot.codeBase}${ot.codeSuffix}`, ot.skupinaObjektu, ot.kategorieObjektu, obsahovaCast, contentPartTitle(obsahovaCast)].join(' '),
      );
      // Symbol řádku — stejný náhled jako Přehled prvků (`buildStyleSwatch`
      // nad `resolveDataStyle`: u variant podle atributu nejčastější v datech).
      const dataStyle = resolveDataStyle(layer.objektovyTyp);
      item.title = `Kliknutím zapnout/vypnout vrstvu „${layer.objektovyTyp.nazev || layer.objektovyTyp.elementName}“${variantsNote(dataStyle)}`;

      const symbolEl = buildStyleSwatch(dataStyle.style, swatchKindForObjektovyTyp(layer.objektovyTyp));

      const leftEl = document.createElement('div');
      leftEl.className = 'layer-item-left';
      const symbolBox = document.createElement('span');
      symbolBox.className = 'layer-symbol-box';
      symbolBox.appendChild(symbolEl);
      leftEl.appendChild(symbolBox);

      const infoEl = document.createElement('div');
      infoEl.className = 'layer-item-info';
      const nameEl = document.createElement('span');
      nameEl.className = 'layer-name';
      nameEl.textContent = layer.objektovyTyp.nazev || layer.objektovyTyp.elementName;
      const metaEl = document.createElement('span');
      metaEl.className = 'layer-meta';
      metaEl.textContent = layer.objektovyTyp.skupinaObjektu || layer.objektovyTyp.kategorieObjektu;
      infoEl.appendChild(nameEl);
      infoEl.appendChild(metaEl);
      leftEl.appendChild(infoEl);

      const countEl = document.createElement('span');
      countEl.className = 'layer-count';
      countEl.textContent = String(layer.featureCount);

      item.appendChild(leftEl);
      item.appendChild(countEl);

      // Viditelnost je společný stav — 2D, 3D, panel i Přehled prvků se
      // srovnají přes posluchače (main.ts, syncLayerPanel, featuresPanel).
      item.addEventListener('click', () => toggleLayerVisible(layerKey));

      groupEl.appendChild(item);
    }

    container.appendChild(groupEl);
  }
  syncLayerPanel();
  applyLayerSearch();
}
