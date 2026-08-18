# Zadání: Přišpendlená (sticky) hlavička kategorie v „Přehled prvků"

> Trvalá specifikace. Úkoly k odbavení jsou v [`TASKS.md`](./TASKS.md).
> Odbavuje skill `/make-tasks`. Resume dokončených úkolů → `../finished/`.

## Kontext

Zpětná vazba od autora:
> „když jsem v přehledu prvků, tak jsou prvky po kategoriích, pokud jich je
> v kategorii hodně, tak nevím v jaké jsem. nech fixed kategorii vždy nahoře."

V pravém panelu „Přehled prvků" (`jvf_viewer/src/ui/featuresPanel.ts`) jsou
prvky (`ZaznamObjektu`) seskupené po kategoriích (`ObjektovyTyp`). Každá skupina
má hlavičku `.feature-group-header` (název + `elementName` + počet) a pod ní
seznam řádků `.feature-row`. Když má kategorie hodně záznamů (např. `podrobný
bod ZPS` má 893 položek), při scrollování dlouhým seznamem hlavička kategorie
zmizí z dohledu a **uživatel neví, ve které kategorii se právě nachází**.

**Výsledek:** hlavička aktuální kategorie zůstane **přišpendlená nahoře** scroll
kontejneru, dokud se scrolluje uvnitř dané kategorie; jakmile doscrolluje další
kategorie, její hlavička předchozí vytlačí (klasické stohující se sekční
hlavičky).

## Ověřený předpoklad (load-bearing)

- Scroll kontejner je `#features-list` (`.features-list { flex:1; overflow-y:auto }`,
  `jvf_viewer/src/style.css:2066`). Rodič `#features-panel` má `overflow:hidden`
  + `display:flex; flex-direction:column`, takže scrolluje **jen** `#features-list`.
- Hlavičky `.feature-group-header` i řádky `.feature-row` (+ `.feature-detail`)
  se vykreslují jako **ploché sourozence přímo v `#features-list`** — žádný
  obalový wrapper per skupina (`featuresPanel.ts:436–531`, `list.appendChild(...)`).
  Proto `position: sticky; top:0` na hlavičce dá přesně chtěné chování **bez
  jakékoli změny DOM nebo `renderRows()`**. Kdyby hlavičky byly zanořené ve
  wrapperech, sticky by se chovalo per-wrapper — zde to platí globálně přes celý
  seznam.
- Hlavička už má **neprůhledné pozadí** `background:#1c2128` + `border-bottom`
  (`style.css:2086–2098`) → sticky nepotřebuje nové barvy, jen pozicování.
- V repu **už existuje identický vzor**: `.legend-cast-header`
  (`position:sticky; top:-16px; background:#0d1117; z-index:1`, `style.css:1766–1777`)
  a `.validation-table thead` (`position:sticky; top:0; background:#161b22; z-index:1`,
  `style.css:1387`). Řešení bude s nimi konzistentní.
- Toolbar (filtry Vše/ZPS/… + hledání) je sourozenec `#features-list` **mimo**
  scroll kontejner (`index.html:242–256`) → je už dnes trvale viditelný. Sticky
  se týká **jen hlaviček kategorií**, `top:0` = horní hrana scrollovaného seznamu.
- Seznam **není virtualizovaný** — rozbalená kategorie vykreslí všechny řádky do
  DOM (`featuresPanel.ts:399,480–531`). Sticky je na to bez vlivu; případná
  virtualizace 893 řádků je *samostatný, pre-existing* problém mimo scope.

## Architektonické rozhodnutí

- **R1 — Čistě CSS řešení.** Přidat na `.feature-group-header`:
  `position: sticky; top: 0; z-index: 2;`. Žádný JS, žádná virtualizace, žádná
  změna `renderRows()` ani markupu. Nejmenší možná plocha změny.
- **R2 — Vizuál dle in-repo vzoru.** Využít stávající neprůhledné pozadí
  `#1c2128` a `border-bottom`. `z-index: 2` staví hlavičku nad `.feature-row`
  (nepozicované) i nad hover stavy. Konzistentní s `.legend-cast-header` /
  `.validation-table thead`.
- **R3 — Volitelný polish (default OFF).** Jemný stín pod *přišpendlenou*
  hlavičkou (lepší oddělení od scrollovaného obsahu) vyžaduje JS
  (IntersectionObserver + `.stuck` třída se `box-shadow`). Do MVP se nedělá;
  viz volitelný úkol T3 — lze přeskočit.
- **R4 — Rozsah = jen hlavičky kategorií.** Rozbalený detail záznamu
  (`.feature-detail`) ani řádky sticky nejsou. Sbalené skupiny (jen po sobě
  jdoucí hlavičky bez řádků) fungují automaticky (hlavičky se stohují).

## Implementace

### A. CSS (`jvf_viewer/src/style.css`)
Jediná změna — blok `.feature-group-header` (kolem `style.css:2086`):

```css
.feature-group-header {
  position: sticky;   /* přišpendlení při scrollu v .features-list */
  top: 0;
  z-index: 2;         /* nad .feature-row (nepozicované) i hover stavy */
  /* pozadí #1c2128 + border-bottom už existují → neprůhledné, nutné pro sticky */
  display: flex;
  align-items: center;
  ...
}
```

Pozn.: `.feature-group-header:first-child { border-top:none }` (`style.css:2099`)
zůstává beze změny. Žádná změna v `featuresPanel.ts` ani `index.html`.

### B. Info modal + changelog
- `jvf_viewer/src/ui/infoModal.ts` (**CLAUDE.md pravidlo!**): zkontrolovat popis
  panelu „Přehled prvků" v `INFO_CONTENT_HTML` a případně doplnit zmínku, že
  hlavička kategorie zůstává přišpendlená při scrollování.
- `CHANGELOG.md` `[Unreleased]` → `Změněno` (nebo `Přidáno`).

## Verifikace (end-to-end)
1. Build: `npm run build` (root i `jvf_viewer`) prochází bez chyb.
2. Viewer smoke: `npm run dev -w jvf-viewer`, nahrát `jvf_parser/samples/1.4.3/ukazka_ZPS.xml`,
   otevřít „Přehled prvků", rozbalit `podrobný bod ZPS` (893) a scrollovat:
   - hlavička kategorie drží přišpendlená nahoře scroll kontejneru;
   - doscrollování další kategorie předchozí hlavičku vytlačí a novou přišpendlí;
   - pozadí přišpendlené hlavičky je neprůhledné (řádky pod ní neprosvítají);
   - klik na přišpendlenou hlavičku kategorii stále sbalí.
3. Ověřit přes `mcp__claude-in-chrome__*` (navigace na dev server, screenshot
   scrollnutého stavu) nebo skillem `/run`.
