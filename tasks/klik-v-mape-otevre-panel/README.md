# Zadání: Klik na prvek v mapě automaticky otevře „Přehled prvků"

> Trvalá specifikace. Úkoly k odbavení jsou v [`TASKS.md`](./TASKS.md).
> Odbavuje skill `/make-tasks`. Resume dokončených úkolů → `../finished/`.

## Kontext

Zpětná vazba od autora:
> „v této verzi nejsou prvky v map. poli klikatelné (get feature info se
> zobrazením v přehledu prvků)."

Prošetřením se ukázalo, že to **není bug, ale UX past**. Picking logika už
v aplikaci **existuje a funguje** (2D i 3D), ale oba map-click handlery
(`jvf_viewer/src/main.ts:298-343`) začínají závorou
`if (!isFeaturesPanelVisible()) return;` (2D `:301`, 3D `:338`). Když má
uživatel panel „Přehled prvků" **zavřený** (běžný výchozí stav), klik do mapy
neudělá **vůbec nic** → funkce působí jako mrtvá.

**Výsledek:** klik na prvek v mapě (2D i 3D) panel „Přehled prvků"
**automaticky otevře** (pokud byl zavřený) a rovnou v něm daný prvek vybere,
rozbalí jeho atributy a odscrolluje na něj. Klik do prázdna (nic nezasaženo)
i nadále nedělá nic.

## Ověřený předpoklad (load-bearing)

- **Picking běží nezávisle na panelu.** 2D: `olMap.on('singleclick', …)` →
  `forEachFeatureAtPixel` s `hitTolerance: 4` (`main.ts:303-315`), výsledek
  `if (!picked) return;` (`:316`). 3D: `pickFeatureFromClient(clientX, clientY)`
  raycaster (`main.ts:339`), `if (!picked) return;` (`:340`). Obojí je hotové;
  jediné, co brání funkci při zavřeném panelu, jsou rané závory `:301` a `:338`.
- **`selectFeatureInPanel` má vlastní gate.** `featuresPanel.ts:583`:
  `if (!isFeaturesPanelVisible()) return;`. Proto se **musí volat až po**
  otevření panelu — jinak by no-op.
- **Otevírací logika už existuje** u tlačítka `btn-features`
  (`main.ts:152-162`): mutual exclusion s error panelem
  (`if (isPanelVisible()) hideErrors();`, `:158`), `showFeatures(currentObjekty)`
  (`:159`) a `btnFeatures.classList.add('active')` (`:160`). Znovupoužít, ne
  psát znovu.
- **Vše je v module-scope a v dosahu handlerů:** `currentObjekty`
  (`main.ts:62`), `btnFeatures` (`main.ts:151`), importy `showFeatures` /
  `hideFeatures` / `isFeaturesPanelVisible` (`main.ts:22-24`), `hideErrors` /
  `isPanelVisible` (error panel), `selectFeatureInPanel`. Handlery jsou v souboru
  až za nimi (`:298+`), takže je vidí.
- **Highlight je oddělený od panelu** a má zůstat: 2D `highlightFeature(feature)`
  (`main.ts:330`, záměrně bez zoomu — neztrácet kontext), 3D
  `highlightThreeFeature(elementName, objectId)` (`main.ts:341`).
- **`onHide` callback** panelu (`main.ts:99`) při zavření odškrtne
  `btnFeatures` (`.active`), takže konzistence tlačítka je zajištěná v obou
  směrech.
- **3D guard zůstává:** `if (!getIs3dActive()) return;` (`main.ts:337`) —
  odstranit se má **jen** panel-gate `:338`, ne 3D guard.

## Architektonické rozhodnutí

- **R1 — Helper `ensureFeaturesPanelOpen()` (DRY).** Přidat malý helper, který
  sjednotí otevírací logiku s tlačítkem `btn-features`:
  ```ts
  function ensureFeaturesPanelOpen(): void {
    if (isFeaturesPanelVisible()) return;
    if (isPanelVisible()) hideErrors();   // mutual exclusion s error panelem
    showFeatures(currentObjekty);
    btnFeatures.classList.add('active');
  }
  ```
  Umístit těsně před map-click handlery (~`main.ts:298`).
- **R2 — Otevírat jen po úspěšném picku.** Rané závory `:301` a `:338`
  odstranit. Panel se otevře **až** když `picked` není null — klik do prázdné
  plochy se zavřeným panelem tedy nic neudělá (žádné otravné otevírání).
- **R3 — Pořadí a highlight beze změny.** V obou handlerech po `if (!picked)
  return;` volat `ensureFeaturesPanelOpen()` **před** `selectFeatureInPanel(…)`.
  Highlight (`highlightFeature` / `highlightThreeFeature`) zůstává. Dvojí
  `renderRows` (v `showFeatures` a pak v `selectFeatureInPanel`) je zanedbatelné.
- **R4 — Nedotýkat se `featuresPanel.ts`.** `selectFeatureInPanel` funguje
  správně, jakmile je panel otevřen; jeho vnitřní gate (`:583`) zůstává.
  Změna je čistě v `main.ts` (+ info modal a changelog).

## Implementace

### A. `jvf_viewer/src/main.ts` — jádro
1. Přidat helper `ensureFeaturesPanelOpen()` (R1) před handlery (~`:298`).
2. **2D handler (`:300-332`):** odstranit `:301`; po `if (!picked) return;`
   (`:316`) doplnit `ensureFeaturesPanelOpen();` před `selectFeatureInPanel(…)`
   (`:331`). Highlight `:330` beze změny.
3. **3D handler (`:336-343`):** ponechat `:337` (`getIs3dActive`), odstranit
   `:338`; po `if (!picked) return;` (`:340`) doplnit `ensureFeaturesPanelOpen();`
   před `selectFeatureInPanel(…)` (`:342`). Highlight `:341` beze změny.

### B. Info modal + changelog (pravidlo `CLAUDE.md`)
- `jvf_viewer/src/ui/infoModal.ts`, sekce „Přehled prvků" (`:145-147`) dnes
  říká jen „klik na prvek v mapě se synchronně promítne do panelu". Doplnit, že
  **je-li panel zavřený, klik na prvek ho automaticky otevře** a prvek vybere.
- `CHANGELOG.md` `[Unreleased]` → `Změněno`: řádek o auto-otevření panelu klikem
  do mapy (2D i 3D).

## Verifikace (end-to-end)
1. Build: `npm run build` (root i `jvf_viewer`) prochází bez chyb.
2. Viewer smoke: `npm run dev -w jvf-viewer`, nahrát
   `jvf_parser/samples/1.4.3/ukazka_ZPS.xml`.
   - **Se zavřeným panelem** klik na prvek ve 2D → panel „Přehled prvků" se
     otevře, tlačítko v hlavičce zaktivní, kliknutý řádek je vybraný, rozbalený,
     odscrollovaný; prvek v mapě zvýrazněný (bez zoomu).
   - Klik do prázdné plochy (mimo prvek) se zavřeným panelem → nic se neděje.
   - Přepnout do 3D, se zavřeným panelem klik na prvek → stejné chování.
   - **Regrese** s otevřeným panelem: klik na prvek funguje jako dřív; klik na
     řádek zoomuje; toggle tlačítkem otevírá/zavírá; Escape zavírá.
3. Ověřit reálné chování přes `mcp__claude-in-chrome__*` (navigace na dev
   server, klik do mapy, screenshot) nebo skillem `/run` — build sám UX chování
   neověří.
