import 'ol/ol.css';
import { inject as injectAnalytics } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { initAnalytics, track, trackViewMode } from './analytics.js';
import { type JvfDtm, type ObjektovyTyp } from 'jvf-parser';
import { runAllChecks } from 'jvf-topology';
import { markDialectObjekty } from './map/dialectStyle.js';
import { appModeDef, getAppMode, onAppModeChange } from './state/appMode.js';
import { setActiveVersion } from './state/activeVersion.js';
import { setupAppModeSwitch } from './ui/appModeSwitch.js';
import { setupMapCard } from './ui/mapCard.js';
import { createOlMap } from './map/olMap.js';
import { createZmLayer, createOrtofotoLayer, setupBaseLayerSwitcher } from './map/cuzk.js';
import { setupOverlayLayers } from './map/overlayLayers.js';
import { setupOverlayPanel, setOverlayLoading } from './ui/overlayPanel.js';
import { getOverlayStates } from './state/overlays.js';
import {
  buildJvfLayers,
  addJvfLayersToMap,
  isJvfHaloLayer,
  removeJvfLayersFromMap,
  isJvfFeatureDisplayed,
  type JvfVectorLayer,
} from './map/jvfLayers.js';
import { setupFileUpload } from './ui/fileUpload.js';
import { openExportCadDialog } from './ui/exportCad.js';
import { setupDragAndDrop } from './ui/dragDrop.js';
import { renderLayerPanel } from './ui/layerPanel.js';
import { renderProjectsPanel } from './ui/projectsPanel.js';
import { setup3dToggle, getIs3dActive, reloadThreeSceneData, onViewModeChange } from './ui/toggle3d.js';
import { initErrorPanel, showErrors, hideErrors, isPanelVisible } from './ui/errorPanel.js';
import {
  initFeaturesPanel,
  showFeatures,
  hideFeatures,
  isFeaturesPanelVisible,
  selectFeatureInPanel,
} from './ui/featuresPanel.js';
import { initHighlightLayer, highlightFeature, clearHighlight } from './map/highlight.js';
import {
  setupMeasure,
  isMeasureActive,
  refreshMeasureSnap,
  getMeasurePoints,
  onMeasureActiveChange,
} from './map/measure.js';
import { installQuickClick, isQuickClick } from './viewer3d/quickClick.js';
import { setupParcelQuery, isParcelQueryActive } from './map/parcelQuery.js';
import { getParcel3dRingCount } from './viewer3d/parcel3d.js';
import { setupInfoModal } from './ui/infoModal.js';
import { setupLegendModal } from './ui/legendModal.js';
import { setupSymbolLegendModal } from './ui/symbolLegendModal.js';
import { showErrorProtocol } from './ui/errorProtocolModal.js';
import {
  setupChangesetToggle,
  updateChangesetToggleVisibility,
} from './ui/changesetToggle.js';
import { resetFeatureFilter, subscribeFeatureFilter } from './state/featureFilter.js';
import { subscribeChangesetToggle } from './state/changesetToggle.js';
import {
  isLayerVisible,
  resetLayerVisibility,
  subscribeLayerVisibility,
} from './state/layerVisibility.js';
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
  setThreeLayerVisible,
  resetThreeLayerVisibility,
  clearThreeHighlight,
  highlightThreeFeature,
  pickFeatureFromClient,
  zoomToThreeExtent,
  sjtskToScene,
  projectSceneToClient,
  getLineSymbol3dCount,
  getScene3dStats,
} from './viewer3d/threeScene.js';
import { isEmpty, extend } from 'ol/extent.js';
import type { Extent } from 'ol/extent.js';
import { createEmpty } from 'ol/extent.js';

// Current state — odvozený stav z kolekce projektů (state/projects.ts).
// Zdrojem pravdy je kolekce projektů; tyto proměnné se přepočítávají
// v `rebuildAll()` po každé změně (přidání / odebrání projektu).
let currentJvfLayers: JvfVectorLayer[] = [];
let currentObjekty: ObjektovyTyp[] = [];
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
// Jen vývojový server: přístup k mapě a vrstvám pro e2e testy (klik na
// konkrétní prvek). Do produkčního buildu se nedostane.
if (import.meta.env.DEV) {
  (window as unknown as Record<string, unknown>)['__jvfDebug'] = {
    olMap,
    getJvfLayers: () => currentJvfLayers,
    pick3d: (x: number, y: number) => pickFeatureFromClient(x, y),
    measurePoints: () => getMeasurePoints(),
    parcel3dRings: () => getParcel3dRingCount(),
    lineSymbols3d: () => getLineSymbol3dCount(),
    scene3dStats: () => getScene3dStats(),
    project3d: (x: number, y: number, z: number) => {
      const v = sjtskToScene(x, y, z);
      return v ? projectSceneToClient(v) : null;
    },
  };
}
initHighlightLayer(olMap);
initErrorPanel(olMap, () => currentJvfLayers, {
  onHide: () => btnValidate.classList.remove('active'),
});
initFeaturesPanel(olMap, () => currentJvfLayers, {
  onHide: () => btnFeatures.classList.remove('active'),
});

// Viditelnost vrstev (panel vrstev, oko u kategorie v Přehledu prvků) →
// 2D vrstvy a 3D scéna. Klíč vrstvy je při více projektech kvalifikovaný
// projektem, takže skrytí typu v jednom projektu neskryje ostatní.
subscribeLayerVisibility(() => {
  for (const layer of currentJvfLayers) {
    const key = resolveLayerKey(layer.objektovyTyp);
    const visible = isLayerVisible(key);
    if (layer.olLayer.getVisible() !== visible) layer.olLayer.setVisible(visible);
    setThreeLayerVisible(key, visible);
  }
  refreshMeasureSnap(); // přichytávat jen k viditelným vrstvám
});

// Měření vzdálenosti a plochy (tlačítko s pravítkem v mapě). Body se
// přichytávají k právě kresleným prvkům JVF (viditelná vrstva + filtr prvků
// + changeset přepínače) — po každé změně těchto stavů se obnoví.
setupMeasure(olMap, () =>
  currentJvfLayers
    .filter((l) => l.olLayer.getVisible())
    .flatMap((l) => l.olLayer.getSource()?.getFeatures() ?? [])
    .filter(isJvfFeatureDisplayed),
  (elementName) => currentObjekty.find((ot) => ot.elementName === elementName)?.nazev || undefined,
);
// Dotaz na vlastníka parcely (tlačítko jen se zapnutým katastrem).
setupParcelQuery(olMap);
subscribeFeatureFilter(refreshMeasureSnap);
subscribeChangesetToggle(refreshMeasureSnap);

// Add CUZK base layers
const zmLayer = createZmLayer();
const ortofotoLayer = createOrtofotoLayer();
setupBaseLayerSwitcher(olMap, zmLayer, ortofotoLayer);
// Překryvné vrstvy ČÚZK (DTM ČR, katastr) — nad podkladem, pod daty JVF.
for (const overlay of getOverlayStates()) {
  setupOverlayLayers(olMap, overlay, (loading) => setOverlayLoading(overlay.def.id, loading));
  setupOverlayPanel(overlay);
}

// DTM ČR a Katastr nemovitostí = karty nad mapou (jako „Podkladová mapa");
// tlačítko má aktivní barvu textu, když je některá vrstva překryvu zobrazená.
for (const overlay of getOverlayStates()) {
  const id = overlay.def.id;
  setupMapCard(`btn-${id}-menu`, `${id}-card`);
  const btn = document.getElementById(`btn-${id}-menu`);
  const syncBtn = (): void => {
    btn?.classList.toggle('is-on', overlay.isActive());
  };
  overlay.subscribe(syncBtn);
  syncBtn();
}

// Setup 3D toggle — getObjekty returns current loaded data (union všech projektů)
setup3dToggle(olMap, () => currentObjekty);

// Setup info modal (footer)
setupInfoModal();
setupLegendModal();
setupSymbolLegendModal();

// Wiring checkboxů „Zobrazit nové / editované / mazané" — sekce se zobrazí
// jen pro JVF obsahující záznamy se `ZapisObjektu` ∈ {i, u, d} (changeset
// nebo nově vytvořený soubor).
setupChangesetToggle(() => currentJvfLayers);

// Režim aplikace (JVF / UDM / JŽM): verze pro legendu a číselníky podle
// režimu; přepnutí režimu zavře načtené projekty (potvrzení řeší appModeSwitch).
setActiveVersion(appModeDef(getAppMode()).defaultVersion);
setupAppModeSwitch();
onAppModeChange((mode) => {
  track('mode_change', { mode });
  clearProjects();
  setActiveVersion(appModeDef(mode).defaultVersion);
  rebuildAll();
});

// Vercel Web Analytics + Speed Insights — pageviews a Core Web Vitals.
// Cookieless, GDPR-compliant; aktivní jen na produkčním Vercel hostu (auto-detect).
injectAnalytics();
injectSpeedInsights();
// Měření používání funkcí a času v aplikaci (PostHog EU, bez cookies) —
// jen produkce s klíčem VITE_POSTHOG_KEY, viz analytics.ts.
initAnalytics();
onViewModeChange(trackViewMode);
document.querySelector('.linkedin-link')?.addEventListener('click', () => track('linkedin_click', {}));
onMeasureActiveChange((on) => {
  if (on) track('measure', { view: getIs3dActive() ? '3d' : '2d' });
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
    track('topology_check', {
      mode: getAppMode(),
      result: errors.some((e) => e.severity === 'error') ? 'errors' : errors.length > 0 ? 'warnings' : 'ok',
    });
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
    track('features_panel', { via: 'button' });
  }
});

// Zavírací tlačítko v hlavičce bočního panelu = stejné přepnutí jako tlačítko
// v horní liště (`data-close-for` = id tlačítka).
document.querySelectorAll<HTMLButtonElement>('.sheet-close-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset['closeFor'] ?? '')?.click();
  });
});

// Navigation drawer na úzkém displeji — tlačítko menu, scrim, Escape.
const drawerBtn = document.getElementById('btn-drawer') as HTMLButtonElement | null;
const drawerScrim = document.getElementById('drawer-scrim');
function setDrawerOpen(open: boolean): void {
  document.body.classList.toggle('drawer-open', open);
  drawerBtn?.setAttribute('aria-expanded', String(open));
  if (drawerScrim) drawerScrim.hidden = !open;
}
drawerBtn?.addEventListener('click', () => setDrawerOpen(!document.body.classList.contains('drawer-open')));
drawerScrim?.addEventListener('click', () => setDrawerOpen(false));
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && document.body.classList.contains('drawer-open')) setDrawerOpen(false);
});

// Export do CAD (AutoCAD DXF ve vzhledu dialektu) — dialog + stažení souboru.
const btnExportCad = document.getElementById('btn-export-cad') as HTMLButtonElement;
btnExportCad.addEventListener('click', () => {
  void openExportCadDialog(getProjects());
});

// Setup file upload — každý vybraný soubor se přidá jako nový projekt.
// Soubor s protokolem chyb (ServisJVFDTM) se místo mapy zobrazí jako report.
setupFileUpload(
  (data: JvfDtm, fileName: string) => onJvfLoaded(data, fileName),
  (proto, fileName) => showErrorProtocol(proto, fileName),
);

// Setup drag & drop — přetažení JVF souborů kamkoli nad okno aplikace
// PŘIDÁ projekty stejnou cestou jako file input (nenahrazuje načtené).
setupDragAndDrop(
  (data: JvfDtm, fileName: string) => onJvfLoaded(data, fileName),
  (proto, fileName) => showErrorProtocol(proto, fileName),
);

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
  // Viditelnost vrstev (panel vrstev / oko v Přehledu prvků) — nová data
  // začínají se všemi vrstvami viditelnými.
  resetLayerVisibility();
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
    // Soubor dialektu (UDM, ŽXML) → objekty kreslit symbologií dialektu
    // (2D, 3D, panely) podle verze projektu.
    markDialectObjekty(project.dtm.objekty, project.dtm.verze);
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

  addJvfLayersToMap(olMap, allLayers);
  refreshMeasureSnap(); // nové vrstvy → nové zdroje přichytávání

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
  renderLayerPanel(allLayers);

  // Changeset sekce: sjednocení typů zápisu (i/u/d) přes všechny projekty.
  updateChangesetToggleVisibility(projects.map((p) => p.dtm));

  // 4. Tlačítka v hlavičce.
  const hasData = projects.length > 0;
  btnValidate.disabled = !hasData;
  btnValidate.title = hasData
    ? 'Spustit topologickou validaci dat a zobrazit panel s nálezy'
    : 'Nejprve nahrajte JVF soubor';
  btnFeatures.disabled = !hasData;
  btnFeatures.title = hasData
    ? 'Zobrazit přehled všech načtených objektů (klik na řádek = zoom + atributy)'
    : 'Nejprve nahrajte JVF soubor';
  btnExportCad.disabled = !hasData;
  btnExportCad.title = hasData
    ? `Exportovat projekt do AutoCADu (DXF) ve vzhledu ${appModeDef(getAppMode()).label} — hladiny, symboly, texty, atributy`
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

// ── Map → panel: klik na prvek v mapě (2D / 3D) vybere prvek v „Přehledu prvků" ──
// Je-li panel zavřený, klik na prvek ho automaticky otevře (sjednocená otevírací
// logika s tlačítkem btn-features — DRY, R1).
function ensureFeaturesPanelOpen(): void {
  if (isFeaturesPanelVisible()) return;
  if (isPanelVisible()) hideErrors(); // mutual exclusion s error panelem
  showFeatures(currentObjekty);
  btnFeatures.classList.add('active');
  track('features_panel', { via: 'map_click' });
}

// 2D: OL singleclick → forEachFeatureAtPixel hledá první feature s jvfElementName.
olMap.on('singleclick', (evt) => {
  // Během měření / dotazu na parcelu klik patří nástroji — prvky nevybírat.
  if (isMeasureActive() || isParcelQueryActive()) return;
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
    // Lemy changeset záznamů nejsou klikatelné (jinak by lem sousedního
    // prvku přebil klik na malý prvek při oddálení).
    { hitTolerance: 4, layerFilter: (layer) => !isJvfHaloLayer(layer) },
  );
  if (!picked) return;
  const { elementName, objectId } = picked;
  // Jen typ objektu z katalogu — ne ID ani atributy prvku.
  track('map_feature_click', { view: '2d', type: elementName });
  ensureFeaturesPanelOpen(); // otevřít panel, pokud byl zavřený (R2/R3)
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
// Ve 3D je klik jen krátké stisknutí (do 200 ms) bez tažení — otáčení
// a posun scény nesmí vybírat prvky (viewer3d/quickClick.ts).
if (threeCanvas) installQuickClick(threeCanvas);
threeCanvas?.addEventListener('click', (e) => {
  if (!getIs3dActive()) return;
  if (!isQuickClick(e)) return;
  // Během měření / dotazu na parcelu klik patří nástroji — prvky nevybírat.
  if (isMeasureActive() || isParcelQueryActive()) return;
  const picked = pickFeatureFromClient(e.clientX, e.clientY);
  if (!picked) return;
  track('map_feature_click', { view: '3d', type: picked.elementName });
  ensureFeaturesPanelOpen(); // otevřít panel, pokud byl zavřený (R2/R3)
  highlightThreeFeature(picked.elementName, picked.objectId);
  selectFeatureInPanel(picked.elementName, picked.objectId);
});
