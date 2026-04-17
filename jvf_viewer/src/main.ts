import 'ol/ol.css';
import type { JvfDtm, ObjektovyTyp } from 'jvf-parser';
import { runAllChecks } from 'jvf-parser';
import { createOlMap } from './map/olMap.js';
import { createZmLayer, createOrtofotoLayer, setupBaseLayerSwitcher } from './map/cuzk.js';
import {
  buildJvfLayers,
  addJvfLayersToMap,
  removeJvfLayersFromMap,
  type JvfVectorLayer,
} from './map/jvfLayers.js';
import { setupFileUpload } from './ui/fileUpload.js';
import { renderLayerPanel } from './ui/layerPanel.js';
import { setup3dToggle, getIs3dActive } from './ui/toggle3d.js';
import { showValidationModal } from './ui/validationModal.js';
import { resetThreeCamera, setThreeLayerVisible } from './viewer3d/threeScene.js';
import { isEmpty } from 'ol/extent.js';
import type { Extent } from 'ol/extent.js';
import { createEmpty } from 'ol/extent.js';

// Current state
let currentJvfLayers: JvfVectorLayer[] = [];
let currentObjekty: ObjektovyTyp[] = [];
let currentExtent: Extent = createEmpty();
let currentDtm: JvfDtm | null = null;

// Build info
const buildInfoEl = document.getElementById('build-info');
if (buildInfoEl) {
  const dt = new Date(__BUILD_TIME__);
  const formatted = dt.toLocaleString('cs-CZ', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
  });
  buildInfoEl.textContent = `${__COMMIT_HASH__} · ${formatted}`;
}

// Initialize map
const olMap = createOlMap('map-container');

// Add CUZK base layers
const zmLayer = createZmLayer();
const ortofotoLayer = createOrtofotoLayer();
setupBaseLayerSwitcher(olMap, zmLayer, ortofotoLayer);

// Setup 3D toggle — getObjekty returns current loaded data
setup3dToggle(olMap, () => currentObjekty);

// Setup zoom-to-data button
const btnZoom = document.getElementById('btn-zoom') as HTMLButtonElement;
btnZoom.addEventListener('click', () => {
  if (getIs3dActive()) {
    resetThreeCamera();
  } else if (!isEmpty(currentExtent)) {
    olMap.getView().fit(currentExtent, {
      padding: [40, 40, 40, 40],
      maxZoom: 18,
      duration: 600,
    });
  }
});

// Setup validate button
const btnValidate = document.getElementById('btn-validate') as HTMLButtonElement;
btnValidate.addEventListener('click', () => {
  if (!currentDtm) return;
  const errors = runAllChecks(currentDtm);
  showValidationModal(errors);
});

// Setup file upload
setupFileUpload((data: JvfDtm) => {
  onJvfLoaded(data);
});

function onJvfLoaded(data: JvfDtm): void {
  // Remove previous JVF layers
  removeJvfLayersFromMap(olMap, currentJvfLayers);

  // Build new layers
  const { layers, extent } = buildJvfLayers(data.objekty);

  currentJvfLayers = layers;
  currentObjekty = data.objekty;
  currentExtent = extent;
  currentDtm = data;

  // Add to map
  addJvfLayersToMap(olMap, layers);

  // Render layer panel
  renderLayerPanel(layers, {
    onVisibilityChange: (elementName, visible) => {
      setThreeLayerVisible(elementName, visible);
    },
  });

  // Enable zoom + validate buttons now that data is loaded
  btnZoom.disabled = false;
  btnZoom.removeAttribute('title');
  btnValidate.disabled = false;
  btnValidate.removeAttribute('title');

  // Fit map to loaded data extent
  if (!isEmpty(extent)) {
    olMap.getView().fit(extent, {
      padding: [40, 40, 40, 40],
      maxZoom: 18,
      duration: 600,
    });
  }
}
