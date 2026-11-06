import type { JvfVectorLayer } from '../map/jvfLayers.js';
import { LAYER_COLORS, resolveRepresentativeStyle } from '../map/jvfLayers.js';
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

/**
 * Symbol řádku vrstvy — společný náhled se stejným stylem jako legenda
 * a Přehled prvků (`buildStyleSwatch` nad `resolveRepresentativeStyle`).
 */
function buildSymbolEl(layer: JvfVectorLayer): HTMLElement {
  const ot = layer.objektovyTyp;
  return buildStyleSwatch(resolveRepresentativeStyle(ot), swatchKindForObjektovyTyp(ot));
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

let subscribed = false;

export function renderLayerPanel(layers: JvfVectorLayer[]): void {
  if (!subscribed) {
    subscribed = true;
    subscribeLayerVisibility(syncLayerPanel);
    subscribeFeatureFilter(syncLayerPanel);
  }
  const container = document.getElementById('jvf-layers-list')!;
  container.innerHTML = '';

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
    groupName.textContent = obsahovaCast;
    groupHeader.appendChild(groupName);
    groupEl.appendChild(groupHeader);

    for (const layer of groupLayers) {
      const item = document.createElement('div');
      const layerKey = resolveLayerKey(layer.objektovyTyp);
      item.className = 'layer-item active';
      item.dataset['layerKey'] = layerKey;
      item.title = `Kliknutím zapnout/vypnout vrstvu „${layer.objektovyTyp.nazev || layer.objektovyTyp.elementName}“`;

      const symbolEl = buildSymbolEl(layer);

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
      metaEl.textContent = `${layer.objektovyTyp.skupinaObjektu || layer.objektovyTyp.kategorieObjektu} · ${obsahovaCast}`;
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
}
