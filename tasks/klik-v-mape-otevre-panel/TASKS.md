# Úkoly: Klik na prvek v mapě automaticky otevře „Přehled prvků"

Odbavuje `/make-tasks` v pořadí (respektuje závislosti). Detaily v
[`README.md`](./README.md) (sekce A–B, rozhodnutí R1–R4). Po dokončení úkolu:
zaškrtnout zde, resume do `../finished/T<N>.md`, commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [x] **T1 — Auto-open panelu klikem (main.ts)** — README §A, R1/R2/R3/R4
  - `jvf_viewer/src/main.ts`: přidat helper `ensureFeaturesPanelOpen()`
    (~`:298`, dle R1 — reuse `hideErrors`/`isPanelVisible`/`showFeatures`/
    `currentObjekty`/`btnFeatures`). V **2D** handleru odstranit rané
    `if (!isFeaturesPanelVisible()) return;` (`:301`) a po `if (!picked) return;`
    (`:316`) volat `ensureFeaturesPanelOpen()` před `selectFeatureInPanel` (`:331`).
    V **3D** handleru ponechat `getIs3dActive` guard (`:337`), odstranit gate
    `:338`, po `if (!picked) return;` (`:340`) volat `ensureFeaturesPanelOpen()`
    před `selectFeatureInPanel` (`:342`). Highlight (`:330`, `:341`) beze změny.
    **Nedotýkat se `featuresPanel.ts`** (R4).
  - **Závislosti:** žádné.
  - **Akceptace:** `npm run build` zelený; ve vieweru (`ukazka_ZPS.xml`)
    se **zavřeným** panelem klik na prvek (2D i 3D) panel otevře, zaktivní
    tlačítko, prvek vybere/rozbalí/odscrolluje a zvýrazní v mapě (bez zoomu);
    klik do prázdna se zavřeným panelem nic neudělá; regrese s otevřeným panelem
    (klik na prvek, klik na řádek = zoom, toggle, Escape) funguje jako dřív.

- [x] **T2 — Info modal + changelog** — README §B (pravidlo `CLAUDE.md`!)
  - `jvf_viewer/src/ui/infoModal.ts`, sekce „Přehled prvků" (`:145-147`):
    doplnit, že je-li panel zavřený, klik na prvek v mapě ho automaticky otevře
    a prvek vybere.
  - `CHANGELOG.md` `[Unreleased]` → `Změněno`: řádek o auto-otevření panelu
    klikem do mapy (2D i 3D).
  - **Závislosti:** T1.
  - **Akceptace:** info modal odpovídá skutečnému stavu; `CHANGELOG.md` má řádek
    v `[Unreleased]`.

---

## Poznámky pro `/make-tasks`
- **Scope = jen `main.ts`** (+ info modal a changelog). Picking i
  `selectFeatureInPanel` už existují a fungují — nepřepisovat je.
- **R2 je load-bearing:** panel otevřít **jen po úspěšném picku**, ne při každém
  kliknutí do mapy — jinak klik do prázdna otravně otevírá panel.
- **Nesahat na 3D guard** `if (!getIs3dActive()) return;` (`:337`) — odstranit se
  má jen panel-gate `:338`.
- Hlavní hodnota je v **ověření chování ve vieweru** (build sám UX nedokáže).
  Prověřit reálně přes `mcp__claude-in-chrome__*` nebo `/run`.
- Po každém úkolu: review → build/test → oprava → CHANGELOG + memory → resume do
  `../finished/T<N>.md` → commit (konvence `CLAUDE.md`). Nikdy nezasahovat do
  `main`.
