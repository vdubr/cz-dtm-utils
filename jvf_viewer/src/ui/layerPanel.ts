import type { JvfVectorLayer } from '../map/jvfLayers.js';
import { LAYER_COLORS } from '../map/jvfLayers.js';

export function renderLayerPanel(layers: JvfVectorLayer[]): void {
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
    groupHeader.innerHTML = `
      <span class="layer-group-dot" style="background:${groupColor}"></span>
      <span class="layer-group-name">${obsahovaCast}</span>
    `;
    groupEl.appendChild(groupHeader);

    for (const layer of groupLayers) {
      const item = document.createElement('div');
      item.className = 'layer-item active';

      const color = LAYER_COLORS[layer.objektovyTyp.obsahovaCast] ?? '#90a4ae';
      const geomType = layer.objektovyTyp.zaznamy[0]?.geometrie[0]?.type ?? 'Point';
      const dotSymbol = geomType === 'Point' ? '●' : geomType === 'Polygon' ? '◼' : '━';

      item.innerHTML = `
        <div class="layer-item-left">
          <span class="layer-dot" style="color:${color}">${dotSymbol}</span>
          <div class="layer-item-info">
            <span class="layer-name">${layer.objektovyTyp.nazev || layer.objektovyTyp.elementName}</span>
            <span class="layer-meta">${layer.objektovyTyp.skupinaObjektu || layer.objektovyTyp.kategorieObjektu} &middot; ${obsahovaCast}</span>
          </div>
        </div>
        <span class="layer-count">${layer.featureCount}</span>
      `;

      item.addEventListener('click', () => {
        const visible = layer.olLayer.getVisible();
        layer.olLayer.setVisible(!visible);
        item.classList.toggle('active', !visible);
        item.classList.toggle('inactive', visible);
      });

      groupEl.appendChild(item);
    }

    container.appendChild(groupEl);
  }
}
