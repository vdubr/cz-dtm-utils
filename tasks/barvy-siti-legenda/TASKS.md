# Úkoly: Barvy sítí a soulad legendy se zobrazením

Odbavuje `/make-tasks` v pořadí (respektuje závislosti). Detaily v
[`README.md`](./README.md) (sekce A–D, rozhodnutí R1–R5). Po dokončení úkolu:
zaškrtnout zde, resume do `../finished/T<N>.md`, commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [x] **T1 — Reprezentativní barva v legendě a panelu** — README §A, R1
  - `jvf_viewer/src/map/jvfLayers.ts`: přidat export
    `resolveRepresentativeStyle(ot)` — když base symbology nemá `fillColor`
    ani `strokeColor`, ale má `variants[]`, vzít barvu z první varianty s
    barvou; jinak stejné jako `resolveStyle`. Fallback na
    `FALLBACK_COLORS[obsahovaCast]` až když barvu nemá ani jedna varianta.
  - `jvf_viewer/src/ui/legendModal.ts:49`: `resolveStyle(ot)` →
    `resolveRepresentativeStyle(ot)`.
  - `jvf_viewer/src/ui/layerPanel.ts:11`: `resolveStyle(ot)` →
    `resolveRepresentativeStyle(ot)`.
  - **Závislosti:** žádné. **Akceptace:** `npm run build` zelený; v legendě má
    trasa elektrické sítě červený swatch (`#e60000`, shoda s mapou), plyn
    zelený, voda modrý, kanalizace hnědý, teplovod oranžový — už ne jednotná
    `#ff9800`. Objekty s barvou v base beze změny.

- [x] **T2 — Oprava 27 poškozených `strokeWidth` (RGB → fillColor)** — README §B, R2
  - `jvf_viewer/src/map/symbology.ts`: každý `strokeWidth: DDDDDDDD.0`
    (7+ číslic, výskyty viz README/„Root cause B") převést na
    `fillColor: '#rrggbb'` z RGB tripletu a `strokeWidth` nastavit rozumně
    (vynechat → default, nebo katalogové mm). Rozklad tripletu ověřit
    (každá složka ≤ 255).
  - **Závislosti:** žádné. **Akceptace:** `grep -nE "strokeWidth: [0-9]{7,}"
    jvf_viewer/src/map/symbology.ts` nic nevrátí; build zelený; dotčené
    objekty (příkop, manipulační plocha, nádrž, …) mají v mapě světlou výplň
    a tenký obrys.

- [x] **T3 — Audit barev sítí vs. Katalog DTM + pokrytí** — README §C, R3/R4
  - Ověřit barvy hlavních sítí (elektro/plyn/voda/kanalizace/teplovod/
    produktovod/EK) proti oficiálnímu značkovému klíči DTM ČR; nesoulad
    srovnat na katalog. **Normativní barvy neměnit kvůli optice** bez pokynu.
  - Vypsat objektové typy bez jakékoli barvy (base i varianty) → fallback-only.
  - **Závislosti:** T1 (aby audit reflektoval reprezentativní barvy).
    **Akceptace:** v resume `../finished/T3.md` je seznam ověřených/opravených
    barev a seznam typů bez barvy; případné opravy = jen srovnání na katalog.

- [ ] **T4 — Info modal + changelog** — README §D (CLAUDE.md pravidlo!)
  - `jvf_viewer/src/ui/infoModal.ts`: zkontrolovat sekci „Legenda DTM"
    (kolem `:105`) — po T1 „reprezentativní barvy" sedí; případně upřesnit.
  - `CHANGELOG.md` `[Unreleased]` → `Opraveno` (soulad barev sítí v
    legendě/panelu s mapou; oprava poškozených výplní).
  - **Závislosti:** T1–T3. **Akceptace:** info modal odpovídá stavu;
    `CHANGELOG.md` má řádek v `[Unreleased]`.

---

## Poznámky pro `/make-tasks`
- **Scope:** viewer symbologie/legenda/panel. T1 je jádro (řeší „většina sítí
  stejná barva" i „legenda nesedí s mapou"). T2 je čistá datová oprava. T3 je
  audit (dg. výstup > plošné přepisy).
- **Mimo scope:** svévolná změna normativních barev ČÚZK (kanalizace/teplovod
  a spol.) — jen srovnání na katalog. Případný render-only rozlišovač je
  odchylka od standardu → jen na explicitní pokyn uživatele (R3).
- Hlavní hodnota je vizuální — build sám nic nedokáže. Ověřit reálně přes
  `mcp__claude-in-chrome__*` (screenshot legendy i mapy) nebo `/run`.
- Katalog atributů/číselníků (uživatelův `dtm_objekty_jvf_dtm.xlsx`, listy
  ZPS/TI/DI) mapuje kód→význam atributů — **není zdroj barev**; barvy jsou v
  Katalogu **kartografických symbolů** DTM ČR. Pro tento task slouží nanejvýš
  k ověření názvů objektů/atributů.
- Po každém úkolu: review → build/test → oprava → CHANGELOG + memory → resume
  do `../finished/T<N>.md` → commit (konvence CLAUDE.md). Nikdy nezasahovat do
  `main`.
