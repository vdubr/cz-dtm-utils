# Úkoly — připomínky 2026-11-06

Specifikace a zjištění k položkám P1–P20 viz [README](./README.md).
Stav: ✅ hotovo (připraveno 2026-11-06 na `feat/redesign-m3`) · ⬜ TODO ·
❓ čeká na upřesnění uživatelem.

## Hotovo (lehké položky)

- [x] **T1 — Lehké úpravy UI** (P4, P5, P6, P11, P16, P14 část „radiusy")
  - Kompaktní řádek vrstvy (36 px, menší písmo), skupina bez opakované
    zkratky části (`app-m3.css` `.layer-item`, `ui/layerPanel.ts`).
  - Hlavička obsahové části „ZPS Základní prostorová situace" v panelu
    vrstev a Legendě DTM (`.part-title`, `contentPartTitle`).
  - Legendy: stálá výška `min(85vh, 900px)`, viditelný posuvník
    (webkit 12 px, Firefox `scrollbar-color`).
  - Tmavý motiv: `.basemap-bar`, `.basemap-card`, měření — plocha
    `surface-container-high` + obrys.
  - Přehled prvků: hlavičky skupin ploché, bez rámečku a zaoblení.
- [x] **T2 — Hledání ve vrstvách** (P1) — `#layer-search`, `applyLayerSearch`
  (`ui/layerPanel.ts`), e2e „vrstvy: hledání zúží seznam…".
- [x] **T3 — Přidat / nahradit projekt, ochrana duplicity** (P7) —
  `chooseAddMode` (`ui/fileUpload.ts`), dávka z výběru / drag & drop se ptá
  jen jednou (`ui/dragDrop.ts`), nahrazení až po úspěšném načtení; e2e
  „stejný soubor podruhé…", „další soubor: dotaz Přidat / Nahradit".
- [x] **T4 — P18** ikony SŽ ze SLD (už ne vektorizace z PNG) — jen ověřeno.

## TODO

- [ ] **T5 — Jedna legenda pro všechny aplikace, se všemi geometriemi** (P2, P3) — rozhodnuto 2026-11-09 („1 typ").
  - Legenda znaků → legenda stylů UDM / ŽXML: dlaždice `buildGeometryIcon`
    pro body, linie (čárkování, souběžné čáry, značky podél linie) i plochy,
    varianty podle `rules` / `cases` s popisky číselníků.
  - Jedno tlačítko „Legenda" v každé aplikaci (obsah podle režimu), stažení
    SVG (ZIP) jako akce legendy dialektu.
  - Akceptace: v JŽM legenda ukáže brzdu, izolovanou kolejnici, plot SŽ…;
    e2e: v UDM i JŽM legenda obsahuje dlaždici linie a plochy.
- [ ] **T6 — Více stylů ve vrstvě: mini legenda po kliku na znak** (P15).
  - Klik na znak řádku vrstvy (ne na řádek — ten přepíná viditelnost) →
    popover s dlaždicemi všech vzhledů vrstvy v datech (`DataStyle.variants`
    + pro dialekty `rules` / `cases`) a počty záznamů.
  - Akceptace: podpěrné zařízení s více typy ukáže všechny; Escape / klik
    mimo zavře.
- [ ] **T7 — Změny v datech: méně přepínačů, jasné popisky** (P12, P13;
  navazuje na #6 D).
  - Místo 4 přepínačů blok „Změny v datech": chipy **Nové n · Editované n ·
    Mazané n** (skrýt / zobrazit, barva = barva změny) + přepínač
    „Obarvit podle změny" s nápovědou; umístění nad seznamem vrstev nebo
    v Přehledu prvků (potvrdit).
  - Akceptace: e2e changesetu (zobrazení / skrytí typů) beze změny chování.
- [ ] **T8 — Průhlednost terénu ve 3D** (P10).
  - Ovládání: rozbalovací šipka u „Terén" s posuvníkem „Sytost terénu"
    (jako karta podkladu); `setTerrainOpacity` nastaví `opacity` +
    `transparent` + `depthWrite=false` všem materiálům terénu (hypsometrie,
    podklad, detail — i nově vytvořeným při přiblížení, `terrain.ts`).
  - Akceptace: při 50 % jsou vidět data pod terénem (podzemní sítě).
- [ ] **T9 — Panel nástrojů 3D v jednotném stylu** (P9).
  - Lišta `#nav3d-toolbar` jako tlačítka nad mapou (skupiny, hover přes celé
    tlačítko, aktivní stav barvou písma), seskupení pohyb · zoom · rotace ·
    převýšení, tooltipy s klávesami.
- [ ] **T10 — Přehled prvků: ikony** (P14 zbytek) — ❓ které ikony (u akcí,
  u typu záznamu R/I/U/D, v hlavičce?).
- [ ] **T11 — Textové zkratky u teček** (P19 a).
  - Převzít `TextSymbolizer` ze SLD (Katalog JVF i SŽ: „vdj.", „ČOV",
    „skl.", „spal.", „let. st." …) → `Appearance.label`; kreslit u bodu ve 2D
    (OL Text), 3D (sprite textu) a CAD (TEXT).
  - Akceptace: vodojem / ČOV / skládka mají v mapě zkratku jako v ISTEM.
- [ ] **T12 — Body SŽ bez hodnoty s vlastní značkou** (P19 b) — u 26 objektů
  SŽ se značkou jen pro vybrané hodnoty použít pro jinou / chybějící hodnotu
  značku hodnoty „nezjištěno / neurčeno", existuje-li (`build-zxml-styles.py`).

## Čeká na upřesnění (❓)

- **P17** číselníky — popisky jsou u všech hodnot JVF / UDM / ŽXML; co chybí?
- **P20** tisk — výřez mapy (PNG / PDF), mapový list v měřítku s legendou,
  nebo tabulka Přehledu prvků?

## Poznámky pro /make-tasks
- Úkoly T5–T12 jsou nezávislé (T10 až po upřesnění P14).
- Každá změna UI: info modal (`ui/infoModal.ts`), `CHANGELOG.md`
  [Unreleased], snímky Playwrightem ve světlém i tmavém motivu, e2e.
