# Zadání: Lepší logování uživatelského průchodu

Poznámka uživatele (2026-11-04): *„přidat lepší logování uživatelského
průchodu — jaké používá funkce, jak dlouho pracuje s aplikací"*.

Zaevidovaná poznámka — před implementací potvrdit s uživatelem otevřené
otázky (hlavně nástroj a soukromí).

## Kontext — současný stav

- Viewer má **Vercel Web Analytics + Speed Insights**
  (`jvf_viewer/src/main.ts:201–204`, `injectAnalytics()` /
  `injectSpeedInsights()`, balíčky `@vercel/analytics`,
  `@vercel/speed-insights` v `jvf_viewer/package.json:22–23`). Měří jen
  zobrazení stránek a Core Web Vitals; cookieless, aktivní jen na Vercel hostu.
- Nemeří se **použití funkcí** (nahrání souboru, ukázky, režim JVF/UDM/JŽM,
  kontrola topologie, Přehled prvků, 3D, měření, překryvy DTM/KN, vlastník
  parcely, export do CAD, legenda…) ani **délka práce** s aplikací.
- Soubory uživatele se zpracovávají **lokálně v prohlížeči** a nic se
  neodesílá — to je slib v info modalu (`ui/infoModal.ts`, „Co to je").

## Návrh směru (k potvrzení)

- **Události funkcí** přes `track(name, props)` z `@vercel/analytics`
  (custom events — vyžadují tarif Vercel Pro) nebo jiný cookieless nástroj
  (Plausible, Umami — self-hosted). Jeden modul `src/analytics.ts`
  s typovaným výčtem událostí, volání z míst, kde se funkce spouští; bez
  analytiky (dev, localhost, chyba) je to no-op.
- **Délka práce**: událost konce relace s délkou aktivní práce (čas
  s viditelnou stránkou — `visibilitychange`, odeslání přes
  `navigator.sendBeacon` / `pagehide`), případně počet akcí za relaci.
- **Vlastnosti událostí jen agregované a bez obsahu dat** — režim, verze
  JVF, velikostní třída souboru (např. `<1 MB`), počet projektů; nikdy
  názvy souborů, souřadnice, ID prvků, atributy ani vlastníky parcel.
- Přehled (dashboard) ve zvoleném nástroji; případně týdenní souhrn.

## Rozhodnutí (závazná)

- **R1 Soukromí:** žádná data ze souborů ani osobní údaje, cookieless, bez
  identifikace uživatele napříč relacemi. Info modal doplnit o odstavec,
  co se měří a co ne (CLAUDE.md pravidlo).
- **R2** Měření nesmí zpomalit ani rozbít aplikaci (chyba měření = tichý
  no-op), v dev a v e2e vypnuté.
- **R3** Seznam událostí na jednom místě (typovaný), aby šel snadno
  přehlédnout a doplnit.

## Otevřené otázky (potvrdit před T1)

1. Nástroj: Vercel custom events (placený tarif Pro), nebo Plausible /
   Umami (vlastní hosting / předplatné)?
2. Které funkce sledovat (návrh seznamu v T1) a jak podrobně?
3. Je potřeba souhlas uživatele (banner), nebo stačí cookieless měření
   s informací v info modalu?

## Verifikace

- Unit testy modulu (no-op bez analytiky, filtrování vlastností), e2e:
  měření v testech vypnuté, aplikace beze změny chování; ruční ověření
  událostí ve zvoleném nástroji na preview nasazení.
