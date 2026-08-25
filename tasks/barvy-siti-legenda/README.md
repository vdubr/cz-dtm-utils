# Zadání: Barvy sítí a soulad legendy se zobrazením

> Trvalá specifikace. Úkoly k odbavení jsou v [`TASKS.md`](./TASKS.md).
> Odbavuje skill `/make-tasks`. Resume dokončených úkolů → `../finished/`.

## Kontext

Zpětná vazba od uživatele (kontrola stylů — „zkontroluj styly, zda nám něco
nechybí?"):
> - Většina sítí má stejnou barvu.
> - Ne všude sedí barva legendy se zobrazením (příklad: elektrická síť).
> - Trochu jsme bojovali opticky s rozlišením mezi kanalizací a teplovodem,
>   kterých se naše akce nejvíc týkala.

Jde o **audit + opravu** symbologie sítí ve vieweru: (A) legenda a vrstvový
panel ukazují u mnoha sítí stejnou obecnou barvu a nesouhlasí s tím, jak se
prvek reálně vykreslí v mapě; (B) v datech symbologie je sada objektů s
poškozenou barvou; (C) kanalizace vs. teplovod opticky splývají.

## Ověřený předpoklad (load-bearing)

### Root cause A — legenda/panel používají base-only `resolveStyle`
- Legenda (`jvf_viewer/src/ui/legendModal.ts:49`, `buildLegendSwatch` →
  `resolveStyle(ot)`) i vrstvový panel (`jvf_viewer/src/ui/layerPanel.ts:11`,
  `buildSymbolEl` → `resolveStyle(ot)`) berou styl z **base symbology bez
  variant**.
- `resolveStyle(ot)` (`jvf_viewer/src/map/jvfLayers.ts:239`) volá
  `mergeSymbologyWithVariant(sym, undefined)` — tj. barvu čte jen z top-level
  polí `ObjectSymbology`. Když base nemá `fillColor`/`strokeColor`,
  `buildResolvedStyle` (`jvfLayers.ts:214`) spadne na
  `FALLBACK_COLORS[obsahovaCast]` (`jvfLayers.ts:218`).
- **Většina tras sítí nese barvu jen ve variantách, base je bez barvy.**
  Příklady (base bez `fillColor`, barva jen ve `variants[]`):
  - `0100000098` trasa elektrické sítě — varianty `#e60000` (červená),
    `symbology.ts:844`
  - `0100000109` trasa plynovodní sítě — varianty `#4ce600` (zelená),
    `symbology.ts:1115`
  - `100000113` trasa vodovodní sítě — varianty `#005ce6` (modrá),
    `symbology.ts:3803`
  - `100000121` trasa stokové sítě — varianty `#915904` (hnědá),
    `symbology.ts:3840`
  - `100000130` trasa teplovodní sítě — varianty `#ff7d00` (oranžová),
    `symbology.ts:4023`
- `FALLBACK_COLORS.TI = '#ff9800'` (`symbology.ts:4299–4305`),
  `DEFAULT_COLOR = '#90a4ae'` (`symbology.ts:4307`).
- **Důsledek:** v legendě i v panelu se **všechny tyto TI sítě zobrazí stejně
  oranžově** (`#ff9800`) → „většina sítí má stejnou barvu". A protože mapa
  kreslí variantu (`resolveStyleForZaznam`, `jvfLayers.ts:252`, používá ji
  `buildJvfLayers` na `:360`), legenda **nesouhlasí s mapou** — u elektro je
  legenda oranžová `#ff9800`, ale linie v mapě je červená `#e60000`. Přesně
  reprodukuje připomínku „elektrická síť".

### Root cause B — poškozené `strokeWidth` = zaparsované RGB
- **27 objektů** má `strokeWidth` typu `245245245.0`, `230246255.0`,
  `222214204.0`, `255255255.0`, … — což jsou **slepené RGB triplety**
  (245,245,245 = `#f5f5f5`; 230,246,255 = `#e6f6ff`). Extrakce omylem uložila
  barvu výplně do `strokeWidth` a objekt tak **přišel o `fillColor`**.
  Výskyty: `symbology.ts:500, 516, 585, 593, 1675, 1683, 1691, 1699, 1797,
  1859, 1882, 1998, 2040, 2048, 2202, 2208, 2214, 2220, 2226, 2236, 2244,
  2252, 2265, 2276, 2668, 2724, 2801` (`grep -nE "strokeWidth: [0-9]{7,}"`).
  Např. `0100000051` příkop/násep (`:500`), `0100000055` manipulační plocha
  (`:516`), `0100000070` mostní váha (`:585`), `0100000072` nádrž (`:593`).
- `mmToPx` (`jvfLayers.ts:125`) z takového čísla dá enormní tloušťku obrysu.
- Generující skript `extract_symbology.py` (zmíněn v hlavičce `symbology.ts:3`)
  **v repu NENÍ** (`jvf_parser/scripts/` obsahuje jen `generate-types.ts`) →
  oprava se dělá **přímo v `symbology.ts`**.

### Issue C — kanalizace vs. teplovod
- Kanalizace/stoková síť: `#915904` (hnědá) — `symbology.ts:1372` (přípojka),
  `:3849` (stoková síť). Teplovod: `#ff7d00` (oranžová) — `:1513` (zařízení),
  `:1539` (tech. objekt), `:4031` (trasa). Hnědá vs. oranžová při tenké lince
  (`strokeWidth 0.13–0.35 mm` → ~1–2 px) na podkladu opticky splývají.
- **Barvy jsou z Katalogu kartografických symbolů DTM ČR (značkový klíč
  ČÚZK)** — viz hlavička `symbology.ts:1–3` a info modal
  (`infoModal.ts:62`). Jsou tedy **normativní**, nemění se svévolně.

### Kde se stejná fallback logika opakuje
- Header legendy (`legendModal.ts:164`) i skupinová barva vrstev berou
  `LAYER_COLORS[cast]` = `FALLBACK_COLORS` (re-export `jvfLayers.ts:39`) —
  obsahová část má **jednu** barvu, což je záměr pro hlavičku skupiny, ne pro
  jednotlivý typ.
- `threeScene.ts` používá `resolveStyle` také (viz komentář `jvfLayers.ts:237`)
  — reprezentativní barva by se propsala i do 3D swatchů, pokud je odtud brána.

## Architektonické rozhodnutí

- **R1 — Reprezentativní barva z variant pro base-only kontexty.** Přidat do
  `jvfLayers.ts` helper `resolveRepresentativeStyle(ot)` (nebo rozšířit
  `resolveStyle`), který když base nemá `fillColor`/`strokeColor`, vezme
  **barvu z první varianty, která ji má** (`sym.variants.find(v => v.fillColor
  ?? v.strokeColor)`), a teprve když ani varianty barvu nemají, spadne na
  `FALLBACK_COLORS[obsahovaCast]`. Použít ho v **legendě**
  (`legendModal.ts:49`) a **vrstvovém panelu** (`layerPanel.ts:11`). Čistě
  viewer, **žádná změna generovaných dat**. Chování pro objekty s barvou v
  base zůstává beze změny.
- **R2 — Oprava 27 poškozených `strokeWidth`.** Každou hodnotu
  `strokeWidth: DDDDDDDDD.0` (7+ číslic) převést zpět na `fillColor:
  '#rrggbb'` z RGB tripletu a `strokeWidth` nastavit na rozumnou hodnotu
  (vynechat → default `1.5 px`, nebo katalogové `0.13`/`0.25` mm dle typu
  geometrie). Datová oprava přímo v `symbology.ts`. Ověřit každý triplet
  (3×3 číslice = 9 znaků; kratší triplety jako `#f5f5f5` mají vodicí nulu —
  pozor na `255249239` = 9, ale i hodnoty <100 v kanálu). Bezpečně: rozdělit
  na 3 dvojice/trojice tak, aby složky ≤ 255.
- **R3 — Kanalizace/teplovod: ověřit vůči katalogu, barvy neměnit svévolně.**
  Úkol je **audit**: ověřit, že `#915904` a `#ff7d00` (a další barvy sítí)
  odpovídají oficiálnímu značkovému klíči DTM ČR; nesoulad reportovat a
  srovnat na katalog. **Změna normativní barvy kvůli optice je mimo default
  scope** — vyžaduje explicitní pokyn (je to odchylka od ČÚZK). Reálné
  zlepšení čitelnosti kanalizace↔teplovod přináší už R1 (v legendě/panelu
  budou hnědá a oranžová konečně vidět odděleně místo jednotné `#ff9800`).
- **R4 — Audit pokrytí barev (diagnostika).** Projít `SYMBOLOGY` a vypsat
  objektové typy, které **nemají barvu ani v base, ani ve variantách** →
  renderují se `FALLBACK_COLORS`/`DEFAULT_COLOR`. Výstup je seznam v resume
  (co doplnit), ne nutně plošná oprava — část katalogových položek barvu
  legitimně nemá.
- **R5 — Info modal + changelog (CLAUDE.md).** Sekce „Legenda DTM" v
  `infoModal.ts` (`:105–106`) tvrdí „reprezentativními symboly a barvami" —
  po R1 to bude konečně pravda; zkontrolovat text. Řádek do `CHANGELOG.md`
  `[Unreleased]` → `Opraveno`.

## Implementace

### A. Reprezentativní barva (`jvf_viewer/src/map/jvfLayers.ts`) — R1
- Nový export `resolveRepresentativeStyle(ot: ObjektovyTyp): ResolvedStyle`.
  Když `getSymbology(ot.codeBase)` má `variants` a base nemá `fillColor` ani
  `strokeColor`, najít první variantu s barvou a předat ji do
  `mergeSymbologyWithVariant(sym, repVariant)`. Jinak = dnešní `resolveStyle`.
- `legendModal.ts:49`: `resolveStyle(ot)` → `resolveRepresentativeStyle(ot)`.
- `layerPanel.ts:11`: `resolveStyle(ot)` → `resolveRepresentativeStyle(ot)`.
- (volitelné) zvážit tentýž helper jako lepší base fallback ve
  `resolveStyleForZaznam` pro záznamy, jejichž varianta se nenamapovala.

### B. Oprava poškozených barev (`jvf_viewer/src/map/symbology.ts`) — R2
- 27 řádků `strokeWidth: <RGB>.0` → `fillColor` + rozumný `strokeWidth`.
  Provést skriptem/manuálně, ověřit buildem a vizuálně (objekty jako příkop,
  manipulační plocha, nádrž musí mít světlou výplň, ne monstrózní obrys).

### C. Audit (R3, R4)
- Ověřit barvy hlavních sítí vůči Katalogu DTM ČR (elektro/plyn/voda/
  kanalizace/teplovod/produktovod/EK). Nesoulad → srovnat na katalog.
- Vypsat typy bez jakékoli barvy (fallback-only). Zapsat do resume.

### D. Info modal + changelog — R5
- `infoModal.ts`: zkontrolovat sekci „Legenda DTM" (`:105`).
- `CHANGELOG.md` `[Unreleased]` → `Opraveno` (barvy sítí v legendě/panelu,
  poškozené výplně).

## Verifikace (end-to-end)
1. Build: `npm run build` (root i `jvf_viewer`) bez chyb.
2. Viewer smoke: `npm run dev -w jvf-viewer`, nahrát vzorek s TI sítěmi
   (`jvf_parser/samples/1.4.3/ukazka_*.xml`; ideálně soubor s trasami el./
   plyn/voda/kanalizace/teplo). Otevřít **Legendu DTM** i **vrstvový panel**:
   - trasa elektrické sítě má v legendě **červený** swatch (ne oranžový) a
     shoduje se s linií v mapě;
   - plyn = zelená, voda = modrá, kanalizace = hnědá, teplovod = oranžová —
     v legendě navzájem odlišné (ne jednotné `#ff9800`);
   - kanalizace a teplovod jdou v legendě od sebe rozeznat.
3. Objekty z R2 (příkop, manipulační plocha, nádrž, …) mají v mapě normální
   světlou výplň a tenký obrys (žádná obří čára).
4. Ověřit vizuálně přes `mcp__claude-in-chrome__*` (screenshot legendy + mapy)
   nebo skillem `/run`.
