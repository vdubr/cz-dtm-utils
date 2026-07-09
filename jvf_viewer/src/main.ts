import 'ol/ol.css';
import { inject as injectAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import type { JvfDtm, ObjektovyTyp } from 'jvf-parser';
import { runAllChecks } from 'jvf-topology';
import { createOlMap } from './map/olMap.js';
import { createZmLayer, createOrtofotoLayer, setupBaseLayerSwitcher } from './map/cuzk.js';
import {
  buildJvfLayers,
  addJvfLayersToMap,
  removeJvfLayersFromMap,
  type JvfVectorLayer,
} from './map/jvfLayers.js';
import { setupFileUpload } from './ui/fileUpload.js';
import { setupDragAndDrop } from './ui/dragDrop.js';
import { renderLayerPanel } from './ui/layerPanel.js';
import { renderProjectsPanel } from './ui/projectsPanel.js';
import { setup3dToggle, getIs3dActive, reloadThreeSceneData } from './ui/toggle3d.js';
import { initErrorPanel, showErrors, hideErrors, isPanelVisible } from './ui/errorPanel.js';
import {
  initFeaturesPanel,
  showFeatures,
  hideFeatures,
  isFeaturesPanelVisible,
  selectFeatureInPanel,
} from './ui/featuresPanel.js';
import { initHighlightLayer, highlightFeature, clearHighlight } from './map/highlight.js';
import { setupInfoModal } from './ui/infoModal.js';
import { setupLegendModal } from './ui/legendModal.js';
import { setupVersionSelect } from './ui/versionSelect.js';
import {
  setupChangesetToggle,
  updateChangesetToggleVisibility,
} from './ui/changesetToggle.js';
import { resetFeatureFilter } from './state/featureFilter.js';
import {
  addProject,
  clearProjects,
  getProjectCount,
  getProjects,
  isMultiProject,
  MAX_PROJECTS,
  removeProject,
  resolveLayerKey,
} from './state/projects.js';
import {
  resetThreeCamera,
  setThreeLayerVisible,
  resetThreeLayerVisibility,
  clearThreeHighlight,
  highlightThreeFeature,
  pickFeatureFromClient,
  zoomToThreeExtent,
} from './viewer3d/threeScene.js';
import { isEmpty, extend } from 'ol/extent.js';
import type { Extent } from 'ol/extent.js';
import { createEmpty } from 'ol/extent.js';

// Current state — odvozený stav z kolekce projektů (state/projects.ts).
// Zdrojem pravdy je kolekce projektů; tyto proměnné se přepočítávají
// v `rebuildAll()` po každé změně (přidání / odebrání projektu).
let currentJvfLayers: JvfVectorLayer[] = [];
let currentObjekty: ObjektovyTyp[] = [];
let currentExtent: Extent = createEmpty();
// Extenty jednotlivých projektů (S-JTSK) pro zoom kliknutím v sekci Projekty.
const projectExtents = new Map<string, Extent>();

/** Přiblíží pohled (2D i 3D podle aktivního zobrazení) na extent projektu. */
function zoomToProjectExtent(projectId: string): void {
  const extent = projectExtents.get(projectId);
  if (!extent || isEmpty(extent)) return;
  if (getIs3dActive()) {
    zoomToThreeExtent(extent[0]!, extent[1]!, extent[2]!, extent[3]!);
  } else {
    olMap.getView().fit(extent, {
      padding: [40, 40, 40, 40],
      maxZoom: 18,
      duration: 600,
    });
  }
}

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
initHighlightLayer(olMap);
initErrorPanel(olMap, () => currentJvfLayers, {
  onHide: () => btnValidate.classList.remove('active'),
});
initFeaturesPanel(olMap, () => currentJvfLayers, {
  onHide: () => btnFeatures.classList.remove('active'),
});

// Add CUZK base layers
const zmLayer = createZmLayer();
const ortofotoLayer = createOrtofotoLayer();
setupBaseLayerSwitcher(olMap, zmLayer, ortofotoLayer);

// Setup 3D toggle — getObjekty returns current loaded data (union všech projektů)
setup3dToggle(olMap, () => currentObjekty);

// Setup info modal (footer)
setupInfoModal();
setupLegendModal();

// Wiring checkboxů „Zobrazit nové / editované / mazané" — sekce se zobrazí
// jen pro JVF obsahující záznamy se `ZapisObjektu` ∈ {i, u, d} (changeset
// nebo nově vytvořený soubor).
setupChangesetToggle(() => currentJvfLayers);

// Vercel Web Analytics + Speed Insights — pageviews a Core Web Vitals.
// Cookieless, GDPR-compliant; aktivní jen na produkčním Vercel hostu (auto-detect).
injectAnalytics();
injectSpeedInsights();

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

// Setup validate button — toggle panel. Validace běží **per projekt**
// (každý JVF soubor je samostatná dávka pro IS DMVS; meziprojektové
// kontroly by hlásily false positives na sdílených hranicích navazujících
// projektů). Nálezy všech projektů se slijí do jednoho panelu; při více
// projektech se `objectId` prefixuje `{projectId}:`, aby zoom na objekt
// našel správný prvek a nález nesl provenienci.
const btnValidate = document.getElementById('btn-validate') as HTMLButtonElement;
btnValidate.addEventListener('click', () => {
  if (isPanelVisible()) {
    hideErrors();
  } else {
    const projects = getProjects();
    if (projects.length === 0) return;
    // Mutual exclusion — pokud je otevřený features panel, zavři ho.
    if (isFeaturesPanelVisible()) hideFeatures();
    const multi = isMultiProject();
    const errors = projects.flatMap((p) =>
      runAllChecks(p.dtm).map((e) =>
        multi && e.objectId ? { ...e, objectId: `${p.id}:${e.objectId}` } : e,
      ),
    );
    showErrors(errors);
    btnValidate.classList.add('active');
  }
});

// Setup features button — toggle „Přehled prvků" panel
const btnFeatures = document.getElementById('btn-features') as HTMLButtonElement;
btnFeatures.addEventListener('click', () => {
  if (isFeaturesPanelVisible()) {
    hideFeatures();
  } else {
    if (getProjectCount() === 0) return;
    // Mutual exclusion — pokud je otevřený error panel, zavři ho.
    if (isPanelVisible()) hideErrors();
    showFeatures(currentObjekty);
    btnFeatures.classList.add('active');
  }
});

// Setup file upload — každý vybraný soubor se přidá jako nový projekt
setupFileUpload((data: JvfDtm, fileName: string) => {
  onJvfLoaded(data, fileName);
});

// Setup drag & drop — přetažení JVF souborů kamkoli nad okno aplikace
// PŘIDÁ projekty stejnou cestou jako file input (nenahrazuje načtené).
setupDragAndDrop((data: JvfDtm, fileName: string) => {
  onJvfLoaded(data, fileName);
});

// Setup version selector — pokud uživatel přepne verzi a má nahraná data,
// confirm modal vyzve ke ztrátě dat. Po potvrzení se odeberou všechny
// projekty (všechny prošly validací proti staré aktivní verzi).
setupVersionSelect({
  hasData: () => getProjectCount() > 0,
  onClearData: () => {
    clearProjects();
    rebuildAll();
  },
});

/**
 * Přepočítá odvozený stav vieweru z aktuální kolekce projektů — jediné
 * místo, kde se z projektů staví 2D vrstvy, union extent, panely a 3D
 * scéna. Volá se po každém přidání / odebrání projektu (i posledního —
 * prázdná kolekce vrací viewer do prázdného stavu).
 *
 * @param opts.fitView Po rebuildů přiblížit pohled na union extent
 *                     všech projektů (používá se po přidání projektu).
 */
function rebuildAll(opts: { fitView?: boolean } = {}): void {
  // 1. Odklidit předchozí stav — vrstvy, highlighty, per-data přepínače.
  removeJvfLayersFromMap(olMap, currentJvfLayers);
  clearHighlight();
  clearThreeHighlight();
  resetThreeLayerVisibility();
  // Filtr prvků (úrovně + projekty) — filtr z předchozích dat nemá
  // ovlivňovat nová data.
  resetFeatureFilter();

  // 2. Postavit vrstvy per projekt; extent = union přes všechny projekty.
  const projects = getProjects();
  const allLayers: JvfVectorLayer[] = [];
  const totalExtent = createEmpty();
  const allObjekty: ObjektovyTyp[] = [];
  projectExtents.clear();
  for (const project of projects) {
    const { layers, extent } = buildJvfLayers(project.dtm.objekty);
    allLayers.push(...layers);
    if (!isEmpty(extent)) {
      extend(totalExtent, extent);
      projectExtents.set(project.id, extent);
    }
    allObjekty.push(...project.dtm.objekty);
  }

  currentJvfLayers = allLayers;
  currentObjekty = allObjekty;
  currentExtent = totalExtent;

  addJvfLayersToMap(olMap, allLayers);

  // 3. UI panely.
  renderProjectsPanel({
    onRemove: (projectId) => {
      removeProject(projectId);
      rebuildAll();
    },
    onZoom: (projectId) => {
      zoomToProjectExtent(projectId);
    },
  });
  renderLayerPanel(allLayers, {
    onVisibilityChange: (layer, visible) => {
      // Klíč vrstvy pro 3D — při více projektech kvalifikovaný projektem,
      // aby skrytí vrstvy jednoho projektu neskrylo stejný typ v ostatních.
      setThreeLayerVisible(resolveLayerKey(layer.objektovyTyp), visible);
    },
  });

  // Changeset sekce: sjednocení typů zápisu (i/u/d) přes všechny projekty.
  updateChangesetToggleVisibility(projects.map((p) => p.dtm));

  // 4. Tlačítka v hlavičce.
  const hasData = projects.length > 0;
  btnZoom.disabled = !hasData;
  btnZoom.title = hasData
    ? 'Přiblížit pohled na rozsah načtených JVF dat'
    : 'Nejprve nahrajte JVF soubor';
  btnValidate.disabled = !hasData;
  btnValidate.title = hasData
    ? 'Spustit topologickou validaci dat a zobrazit panel s nálezy'
    : 'Nejprve nahrajte JVF soubor';
  btnFeatures.disabled = !hasData;
  btnFeatures.title = hasData
    ? 'Zobrazit přehled všech načtených objektů (klik na řádek = zoom + atributy)'
    : 'Nejprve nahrajte JVF soubor';

  // 5. Otevřené panely: validace se musí spustit znovu nad novými daty →
  // zavřít; Přehled prvků překreslit (nebo zavřít, když nezbyla data).
  if (isPanelVisible()) hideErrors();
  if (isFeaturesPanelVisible()) {
    if (hasData) showFeatures(currentObjekty);
    else hideFeatures();
  }

  // 6. 3D scéna — rebuild s union dat (terén se stáhne pro union bbox).
  if (getIs3dActive()) {
    reloadThreeSceneData(allObjekty);
  }

  // 7. Volitelně přiblížit na union extent všech projektů.
  if (opts.fitView && !isEmpty(totalExtent)) {
    olMap.getView().fit(totalExtent, {
      padding: [40, 40, 40, 40],
      maxZoom: 18,
      duration: 600,
    });
  }
}

/**
 * Zpracování naparsovaného JVF souboru — přidá ho jako nový projekt
 * ke stávajícím (do limitu `MAX_PROJECTS`) a přestaví viewer.
 */
function onJvfLoaded(data: JvfDtm, fileName: string): void {
  const project = addProject(fileName, data);
  if (!project) {
    alert(
      `Je načteno maximum ${MAX_PROJECTS} projektů. ` +
      `Pro přidání souboru „${fileName}" nejprve některý projekt odeberte ` +
      `(sekce Projekty v levém panelu).`
    );
    return;
  }
  rebuildAll({ fitView: true });
}

// ── Map → panel: klik na 2D / 3D vybere prvek v otevřeném "Přehledu prvků" ──
// 2D: OL singleclick → forEachFeatureAtPixel hledá první feature s jvfElementName.
olMap.on('singleclick', (evt) => {
  if (!isFeaturesPanelVisible()) return;
  let picked: { elementName: string; objectId: string } | null = null;
  olMap.forEachFeatureAtPixel(
    evt.pixel,
    (feat) => {
      const elementName = feat.get('jvfElementName');
      const objectId = feat.get('jvfObjectId');
      if (typeof elementName === 'string' && typeof objectId === 'string' && objectId) {
        picked = { elementName, objectId };
        return true; // stop iteration
      }
      return false;
    },
    { hitTolerance: 4 },
  );
  if (!picked) return;
  const { elementName, objectId } = picked;
  // Highlight v mapě (bez zoomu — uživatel už klikl, neztrácet kontext)
  const feature = (() => {
    for (const { olLayer } of currentJvfLayers) {
      const src = olLayer.getSource();
      if (!src) continue;
      const f = src.getFeatures().find(
        (x) => x.get('jvfElementName') === elementName && x.get('jvfObjectId') === objectId,
      );
      if (f) return f;
    }
    return null;
  })();
  if (feature) highlightFeature(feature);
  selectFeatureInPanel(elementName, objectId);
});

// 3D: canvas click → raycaster → najde elementName + objectId přes pickFeatureFromClient.
const threeCanvas = document.getElementById('three-canvas') as HTMLCanvasElement | null;
threeCanvas?.addEventListener('click', (e) => {
  if (!getIs3dActive()) return;
  if (!isFeaturesPanelVisible()) return;
  const picked = pickFeatureFromClient(e.clientX, e.clientY);
  if (!picked) return;
  highlightThreeFeature(picked.elementName, picked.objectId);
  selectFeatureInPanel(picked.elementName, picked.objectId);
});
