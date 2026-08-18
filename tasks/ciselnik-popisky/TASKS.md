# Úkoly: Textové popisky číselníkových atributů

Odbavuje `/make-tasks` v pořadí (respektuje závislosti). Detaily v
[`README.md`](./README.md) (sekce A–D, rozhodnutí A1–A6). Po dokončení úkolu:
zaškrtnout zde, resume do `../finished/T<N>.md`, commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [x] **T1 — Generátor: `ENUM_LABELS`** — README §A, A1/A4/A6
  - `scripts/generate-types.ts`: `generateEnumLabelsFile(enums)` → zapsat
    `src/1.4.3/generated/enum-labels.ts` (`ENUM_LABELS: Record<string, Record<string, string>>`).
  - Klíče i hodnoty přes `JSON.stringify` (A4). Kolize `e.name` → `warn`.
    Pokud existuje větev jiné verze, generovat i pro ni (A6).
  - **Závislosti:** žádné. **Akceptace:** `npm run generate -w jvf-parser`
    vytvoří soubor; `ENUM_LABELS.KategoriePozemniKomunikace['2'] === 'dálnice II. třídy'`,
    `ENUM_LABELS.UrovenUmisteniObjektuZPS['-3']` obsahuje „nejníže"; `npm run build` zelený.

- [x] **T2 — Veřejné API + testy** — README §B, A2/A3
  - `src/1.4.3/index.ts`: re-export `ENUM_LABELS` + helper
    `labelForAttribute(attrName, value): string | undefined`.
  - Unit test: `labelForAttribute('KategoriePozemniKomunikace', 2) === 'dálnice II. třídy'`,
    `('UrovenUmisteniObjektuZPS', 0) === 'na povrchu'`, neznámý atribut/kód → `undefined`,
    number i string kód shodně (`(x, 2) === (x, '2')`).
  - Invariant test: pro každý enum v `enums.ts` má `ENUM_LABELS` klíč a každá hodnota
    má neprázdný label; počet klíčů ≈ počet enumů.
  - Měření pokrytí: naparsovat `samples/1.4.3/*.xml`, vypsat kolik atributů se přeloží
    a **které ne**. `UrovenUmisteniObjektuZPS`, `TridaPresnostiPoloha`,
    `KategoriePozemniKomunikace`, `PrevazujiciPovrch` MUSÍ být přeložené.
  - **Závislosti:** T1. **Akceptace:** `npm test -w jvf-parser` zelené; klíčové atributy
    přeložené; pokud ne, revidovat předpoklad shody názvů (README „load-bearing").

- [x] **T3 — Viewer: render s překladem** — README §C, A5
  - `featuresPanel.ts`: `buildKVTable(entries, opts?)` + flag `translate` (default `false`).
    Zapnout jen pro „Atributy objektu" (`:339`), NE pro „Společné atributy" (`:328`).
  - Při `translate` a existujícím popisku: `String(v) + ' — ' + label`, jinak `String(v)`.
    Import `labelForAttribute` z `jvf-parser`.
  - **Závislosti:** T2. **Akceptace:** smoke test (`npm run dev -w jvf-viewer`, nahrát
    `ukazka_ZPS.xml`, klik na prvek) — u `KategoriePozemniKomunikace` je `2 — dálnice II. třídy`;
    „Společné atributy" beze změny; nekódované atributy holé; `npm run build` zelený.

- [x] **T4 — Info modal + changelog** — README §D (CLAUDE.md pravidlo!)
  - `infoModal.ts`: do `INFO_CONTENT_HTML` doplnit zmínku o popiskách číselníkových atributů.
  - `CHANGELOG.md` `[Unreleased]` → `Přidáno`.
  - **Závislosti:** T3. **Akceptace:** info modal odpovídá skutečnému stavu; `CHANGELOG.md`
    má řádek v `[Unreleased]`.

---

## Poznámky pro `/make-tasks`
- Zvolený formát `kód — text` je záměr; změna na `text (kód)` / `jen text` je jednořádková
  úprava v `buildKVTable`.
- Boolean atributy (`NeuplnaData` apod.) nejsou číselníky → zůstanou `true/false` (mimo scope).
- Po každém úkolu: review → test → oprava → CHANGELOG + memory → resume do
  `../finished/T<N>.md` → commit (konvence CLAUDE.md). Nikdy nezasahovat do `main`.
