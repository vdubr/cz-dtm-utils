# Úkoly: Přišpendlená (sticky) hlavička kategorie v „Přehled prvků"

Odbavuje `/make-tasks` v pořadí (respektuje závislosti). Detaily v
[`README.md`](./README.md) (sekce A–B, rozhodnutí R1–R4). Po dokončení úkolu:
zaškrtnout zde, resume do `../finished/T<N>.md`, commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [x] **T1 — Sticky hlavička (CSS)** — README §A, R1/R2/R4
  - `jvf_viewer/src/style.css`, blok `.feature-group-header` (kolem `:2086`):
    přidat `position: sticky; top: 0; z-index: 2;`. Nic dalšího neměnit —
    pozadí `#1c2128` a `border-bottom` už existují; `:first-child { border-top:none }`
    (`:2099`) zůstává. Žádná změna v `featuresPanel.ts` ani `index.html`.
  - **Závislosti:** žádné. **Akceptace:** `npm run build` zelený; ve vieweru
    (`ukazka_ZPS.xml`, rozbalený `podrobný bod ZPS` = 893) při scrollu drží
    hlavička nahoře; doscrollování další kategorie ji vytlačí a přišpendlí novou;
    pozadí neprůhledné (řádky pod ní neprosvítají); klik na přišpendlenou
    hlavičku ji stále sbalí.

- [x] **T2 — Info modal + changelog** — README §B (CLAUDE.md pravidlo!)
  - `jvf_viewer/src/ui/infoModal.ts`: zkontrolovat popis panelu „Přehled prvků"
    v `INFO_CONTENT_HTML` a případně doplnit zmínku o přišpendlené hlavičce
    kategorie při scrollování.
  - `CHANGELOG.md` `[Unreleased]` → `Změněno` (nebo `Přidáno`).
  - **Závislosti:** T1. **Akceptace:** info modal odpovídá skutečnému stavu;
    `CHANGELOG.md` má řádek v `[Unreleased]`.

- [ ] **(volitelné) T3 — Stín přišpendlené hlavičky** — README §R3
  - IntersectionObserver (sentinel nad každou hlavičkou, nebo `top:-1px` +
    `IntersectionObserver` s `threshold:1`) přidá `.stuck` třídu, když je
    hlavička přišpendlená; CSS `.feature-group-header.stuck { box-shadow: 0 2px 4px #0006 }`.
  - **Lze přeskočit** — MVP je čistě CSS (R1). Dělat jen pokud zbývá kapacita.
  - **Závislosti:** T1. **Akceptace:** stín se objeví jen když hlavička drží
    nahoře, jinak ne; build zelený.

---

## Poznámky pro `/make-tasks`
- **Scope = jen hlavičky kategorií** (`.feature-group-header`). Řádky
  `.feature-row` ani rozbalený detail `.feature-detail` sticky nejsou (R4).
- **Mimo scope:** virtualizace 893 řádků je *pre-existing* problém, v tomto
  zadání se neřeší.
- T1 je jednořádková CSS změna — hlavní hodnota je v ověření chování ve vieweru
  (build sám nic nedokáže). Prověřit reálně přes `mcp__claude-in-chrome__*`
  nebo `/run`.
- Po každém úkolu: review → build/test → oprava → CHANGELOG + memory → resume do
  `../finished/T<N>.md` → commit (konvence CLAUDE.md). Nikdy nezasahovat do `main`.
