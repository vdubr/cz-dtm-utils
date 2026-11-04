# Zadání: UX redesign panelů a ovládání vieweru

Poznámky uživatele (2026-11-04) k dalšímu vývoji rozhraní `jvf_viewer`:

1. **redesign tabulky, rozbalování kategorií**
2. **rozdělení levého panelu na vrstvy a data**
3. **lépe rozdělit JVF / UDM / JŽM**
4. **minimalizovat některé prvky jako toggly, slider**

Jde o zaevidované poznámky — rozsah a podoba se před implementací upřesní
s uživatelem (viz **Otevřené otázky**). Zadání se NEspouští automaticky bez
potvrzení návrhu.

## Kontext — současný stav (ověřeno v kódu, větev `feat/redesign-m3`)

- **Levý panel** `#layer-panel` (`jvf_viewer/index.html:113`) je jeden svislý
  sloupec sekcí `.panel-section`: Podkladové mapy (segmentový přepínač +
  posuvník sytosti `#basemap-opacity`, `:117–126`), překryvy DTM ČR a Katastr
  (`#overlay-dtm`, `#overlay-kn`, `:131–132`, vlastní přepínač + posuvník
  sytosti + rozbalovací výběr vrstev), Projekty (`#projects-section`, `:133`),
  JVF vrstvy (`.panel-section-jvf`, `:141`), pod nimi přepínače changesetu
  (`#toggle-highlight-zapis`, `#toggle-show-inserted/updated/deleted`,
  `:156–168`) a 3D přepínače (`#toggle-svg-symbols`, `#toggle-terrain`,
  `:174–178`). Podklady/překryvy (mapa) a data (projekty, vrstvy JVF, změny)
  jsou promíchané v jednom scrollu.
- **Tabulka „Přehled prvků"** — `jvf_viewer/src/ui/featuresPanel.ts`
  (853 ř.): chipy filtrů (obsahová část, úroveň, projekt — `renderLevelChips`
  `:127`, `renderProjectChips` `:165`, `renderContentFilterChips` `:622`),
  souhrn `renderSummary` `:203`, skupiny podle objektového typu s hlavičkou ve
  stylu legendy (`.feature-group-header.legend-item`, `:488`, sticky, oko
  viditelnosti), rozbalování skupin a detail záznamu (atributy
  `renderAttributes` `:339`) přímo v seznamu.
- **Režimy JVF / UDM / JŽM** — registr `APP_MODES`
  (`jvf_viewer/src/state/appMode.ts:44`), přepínač v hlavičce; prvky se
  skrývají atributem `data-mode="…"` (`ui/appModeSwitch.ts:37`
  `applyAppModeToUi`): ukázky v nabídce nahrání (`index.html:86–95`),
  Legenda znaků (`:147`, `udm jzm`); Export do CAD je ve všech režimech.
  Kromě ukázek a pár tlačítek vypadají režimy stejně.
- **Přepínače a posuvníky** — `.m3-switch` (M3 switch, plná šířka řádku)
  a `.m3-slider`; v panelu jich je ~8 přepínačů a 3 posuvníky sytosti
  (podklad, DTM, KN), každý na vlastním řádku.

## Návrh směru (k potvrzení)

- **A — Tabulka:** kompaktnější řádky, jasnější rozbalování kategorií
  (chevron, „rozbalit / sbalit vše", zapamatovat rozbalení při filtrování),
  detail záznamu vizuálně oddělený (karta / boční detail místo vložených
  řádků), počty a I/U/D odznaky zarovnané do sloupců.
- **B — Levý panel:** dvě záložky (M3 tabs / segmentový přepínač nahoře
  panelu) **„Vrstvy"** (podkladové mapy, překryvy DTM ČR a KN, 3D volby) a
  **„Data"** (projekty, JVF vrstvy, zvýraznění změn). Volba záložky jen
  v paměti / `localStorage` (per-viewer pohodlí).
- **C — Režimy:** každý režim s vlastní identitou — barevný akcent / štítek
  režimu v hlavičce, popis režimu (co umí, jaká data) při přepnutí nebo
  v prázdném stavu, skrytí nerelevantních voleb (např. zvýraznění změn
  v UDM/JŽM, kde jsou data celá nová), ukázky jen aktivního režimu (už je).
- **D — Minimalizace ovládání:** přepínače změn I/U/D jako kompaktní chipy
  (jeden řádek), posuvníky sytosti jako malá ikona se rozbalovacím
  posuvníkem (popover) nebo zúžené inline, 3D volby do menu / ikonových
  tlačítek v liště 3D ovládání.

## Otevřené otázky (potvrdit s uživatelem před T1)

1. Tabulka: detail záznamu v seznamu (jako dnes), nebo samostatná karta /
   boční panel? Kterou kategorii rozbalit výchozí?
2. Levý panel: záložky („Vrstvy" / „Data"), nebo dva sbalitelné bloky nad
   sebou? Kam patří přepínače zvýraznění změn a 3D volby?
3. Režimy: stačí vizuální odlišení (akcent, štítek, popis), nebo i jiné
   rozložení / sada funkcí na režim?
4. Minimalizace: které konkrétní prvky (všechny posuvníky sytosti? přepínače
   I/U/D?) a jakou formou (chipy, ikonová tlačítka, popover)?

## Rozhodnutí (závazná pro implementaci)

- **R1** Žádná změna chování dat ani stylů — jen rozložení a forma ovládání.
  Všechny stávající funkce zůstanou dostupné (e2e testy musí projít, při
  změně selektorů upravit testy, ne vypouštět kontroly).
- **R2** Material Design 3, stávající tokeny (`src/app-m3.css`), světlý
  i tmavý motiv, mobil (výsuvný panel) musí dál fungovat.
- **R3** Info modal (`ui/infoModal.ts`) a `CHANGELOG.md` `[Unreleased]`
  aktualizovat (pravidlo CLAUDE.md).

## Verifikace end-to-end

- `npx tsc --noEmit`, `npx eslint`, `npx vite build`, celé e2e
  (`jvf_viewer`, `npx playwright test`).
- Snímky obrazovky (Playwright) před / po pro každý úkol: světlý i tmavý
  motiv, desktop 1300×850 a mobil 390×844, režimy JVF / UDM / JŽM
  s ukázkovými daty.
