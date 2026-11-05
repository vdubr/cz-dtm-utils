# Úkoly: UX redesign panelů a ovládání vieweru

Odbavuje `/make-tasks` v pořadí (respektuje závislosti). Detaily v
[`README.md`](./README.md) (sekce A–D, rozhodnutí R1–R3). **Před T1 potvrdit
s uživatelem otevřené otázky z README** — jde o poznámky, ne hotovou
specifikaci. Po dokončení úkolu: zaškrtnout zde, resume do
`../finished/T<N>.md`, commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [ ] **T1 — Redesign tabulky „Přehled prvků", rozbalování kategorií** — README §A
  - `jvf_viewer/src/ui/featuresPanel.ts` (`renderRowsContent` `:444`,
    hlavička skupiny `:488`, detail `renderAttributes` `:339`), styly v
    `src/app-m3.css` / `src/style.css`.
  - Jasné rozbalování kategorií (chevron, rozbalit / sbalit vše, zachovat
    rozbalení při filtrování), kompaktní řádky, oddělený detail záznamu.
  - **Závislosti:** potvrzené otázky 1. **Akceptace:** výběr prvku klikem
    v mapě dál rozbalí kategorii a odscrolluje na řádek (≤ 0,3 s); filtry,
    oko kategorie a sticky hlavička fungují; e2e zelené.

- [ ] **T2 — Rozdělení levého panelu na „Vrstvy" a „Data"** — README §B
  - `jvf_viewer/index.html` (`#layer-panel` `:113–178`), `src/app-m3.css`,
    případně nový `ui/panelTabs.ts`.
  - „Vrstvy": podkladové mapy, překryvy DTM ČR a KN, 3D volby; „Data":
    projekty, JVF vrstvy, zvýraznění změn. Volba záložky v `localStorage`
    (v try/catch).
  - **Závislosti:** potvrzené otázky 2. **Akceptace:** po načtení dat se
    přepne na „Data"; mobilní výsuvný panel funguje; layout test e2e
    (panel vrstev) upravený a zelený.

- [x] **T3 — Výraznější rozlišení režimů JVF / UDM / JŽM** — README §C
  - Hotovo 2026-11-05 (varianta B + C z návrhu): nástroje na `/`, `/udm`,
    `/jzm`, spouštěč v hlavičce (mobil: spodní panel z panelu vrstev),
    barevné schéma každého nástroje (`app-themes.css`; UDM zelená, JŽM
    oranžová SŽ).
  - `state/appMode.ts` (`APP_MODES` `:44`), `ui/appModeSwitch.ts`
    (`applyAppModeToUi` `:37`), hlavička v `index.html`, tokeny akcentu
    v `src/app-m3.css`.
  - Akcent / štítek režimu, popis režimu (prázdný stav / při přepnutí),
    skrytí nerelevantních voleb přes `data-mode`.
  - **Závislosti:** potvrzené otázky 3. **Akceptace:** `?mode=udm|jzm` dál
    funguje; přepnutí režimu s načtenými daty se ptá jako dnes; e2e zelené.

- [ ] **T4 — Minimalizace přepínačů a posuvníků** — README §D
  - Přepínače změn I/U/D (`index.html:156–168`, `ui/changesetToggle.ts`),
    posuvníky sytosti (`#basemap-opacity`, `{dtm,kn}-opacity` v
    `ui/overlayPanel.ts`), 3D volby (`:174–178`, `ui/toggle3d.ts`).
  - Kompaktní forma (chipy, ikonová tlačítka, popover se posuvníkem) —
    dle potvrzené otázky 4. ID ovládacích prvků zachovat, nebo upravit
    selektory v e2e.
  - **Závislosti:** T2 (umístění prvků). **Akceptace:** všechny volby
    dostupné a ovladatelné klávesnicí (a11y: `aria-label`, focus);
    e2e zelené.

- [ ] **T5 — Info modal + changelog** — README R3
  - `ui/infoModal.ts` (popis panelu, tabulky, režimů, ovládání),
    `CHANGELOG.md` `[Unreleased]` → `Změněno`.
  - **Závislosti:** T1–T4. **Akceptace:** info modal odpovídá stavu.

---

## Poznámky pro `/make-tasks`

- Zadání vzniklo z krátkých poznámek uživatele — **nezačínat bez potvrzení
  návrhu** (otevřené otázky v README). Pokud běží autonomně, zastavit se
  před T1 a vyžádat si rozhodnutí.
- Nesahat na styly prvků (Katalog / UDM / ŽXML) ani na data — R1.
- Ověřovat snímky obrazovky v obou motivech a na mobilu.
