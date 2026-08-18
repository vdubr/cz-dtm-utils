import type { JvfVectorLayer } from '../map/jvfLayers.js';
import { LAYER_COLORS, resolveStyle } from '../map/jvfLayers.js';
import { getProject, isMultiProject } from '../state/projects.js';

const SVG_BASE = './symboly/';

/** Build the 20×16 symbol element for a layer row. */
function buildSymbolEl(layer: JvfVectorLayer): HTMLElement {
  const ot = layer.objektovyTyp;
  const geomType = ot.zaznamy[0]?.geometrie[0]?.type ?? 'Point';
  const s = resolveStyle(ot);

  if (geomType === 'Point') {
    if (s.pointSvg) {
      const img = document.createElement('img');
      img.src = SVG_BASE + s.pointSvg;
      img.width = 16;
      img.height = 16;
      img.className = 'layer-symbol-img';
      return img;
    }
    // Fallback: filled circle
    const span = document.createElement('span');
    span.className = 'layer-symbol-dot';
    span.style.background = s.strokeColor;
    return span;
  }

  if (geomType === 'Polygon' || geomType === 'MultiCurve') {
    // Show polygon as small filled square with border
    if (geomType === 'Polygon') {
      const span = document.createElement('span');
      span.className = 'layer-symbol-polygon';
      // Strip alpha suffix for border color
      const stroke = s.strokeColor.length > 7 ? s.strokeColor.slice(0, 7) : s.strokeColor;
      const fill = s.fillColor.length > 7 ? s.fillColor.slice(0, 7) : s.fillColor;
      span.style.background = fill;
      span.style.borderColor = stroke;
      return span;
    }
    // MultiCurve / LineString — horizontal line swatch
    const span = document.createElement('span');
    span.className = 'layer-symbol-line';
    const stroke = s.strokeColor.length > 7 ? s.strokeColor.slice(0, 7) : s.strokeColor;
    span.style.background = stroke;
    return span;
  }

  // LineString fallback
  const span = document.createElement('span');
  span.className = 'layer-symbol-line';
  const stroke = s.strokeColor.length > 7 ? s.strokeColor.slice(0, 7) : s.strokeColor;
  span.style.background = stroke;
  return span;
}

export interface LayerPanelCallbacks {
  /**
   * Volá se po přepnutí viditelnosti vrstvy. Předává celou vrstvu —
   * volající si z ní odvodí klíč pro 3D scénu (`resolveLayerKey`,
   * při více projektech kvalifikovaný projektem).
   */
  onVisibilityChange?: (layer: JvfVectorLayer, visible: boolean) => void;
}

export function renderLayerPanel(layers: JvfVectorLayer[], callbacks: LayerPanelCallbacks = {}): void {
  const container = document.getElementById('jvf-layers-list')!;
  container.innerHTML = '';

  if (layers.length === 0) {
    container.innerHTML = '<div class="empty-hint">Nahrajte JVF soubor</div>';
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

    const groupHeader = document.createElement('div');
    groupHeader.className = 'layer-group-header';
    const groupColor = LAYER_COLORS[obsahovaCast] ?? '#90a4ae';
    const groupDot = document.createElement('span');
    groupDot.className = 'layer-group-dot';
    groupDot.style.background = groupColor;
    const groupName = document.createElement('span');
    groupName.className = 'layer-group-name';
    groupName.textContent = obsahovaCast;
    groupHeader.appendChild(groupDot);
    groupHeader.appendChild(groupName);
    groupEl.appendChild(groupHeader);

    for (const layer of groupLayers) {
      const item = document.createElement('div');
      item.className = 'layer-item active';
      item.title = `Kliknutím zapnout/vypnout vrstvu „${layer.objektovyTyp.nazev || layer.objektovyTyp.elementName}“`;

      const symbolEl = buildSymbolEl(layer);

      const leftEl = document.createElement('div');
      leftEl.className = 'layer-item-left';
      leftEl.appendChild(symbolEl);

      // Při více projektech: barevná tečka projektu pro odlišení stejných
      // objektových typů z různých souborů.
      if (isMultiProject() && layer.projectId) {
        const project = getProject(layer.projectId);
        if (project) {
          const projectDot = document.createElement('span');
          projectDot.className = 'project-dot';
          projectDot.style.background = project.color;
          projectDot.title = `Projekt: ${project.nazev}`;
          leftEl.appendChild(projectDot);
        }
      }

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

      item.addEventListener('click', () => {
        const visible = layer.olLayer.getVisible();
        const newVisible = !visible;
        layer.olLayer.setVisible(newVisible);
        item.classList.toggle('active', newVisible);
        item.classList.toggle('inactive', !newVisible);
        callbacks.onVisibilityChange?.(layer, newVisible);
      });

      groupEl.appendChild(item);
    }

    container.appendChild(groupEl);
  }
}
