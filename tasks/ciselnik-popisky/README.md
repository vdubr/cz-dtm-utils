# Zadání: Textové popisky číselníkových atributů v panelu prvku

> Trvalá specifikace. Úkoly k odbavení jsou v [`TASKS.md`](./TASKS.md).
> Odbavuje skill `/make-tasks`. Resume dokončených úkolů → `../finished/`.

## Kontext

Zpětná vazba od autora:
> „atributy jsou kódované, šlo by navázat dle přílohy, aby to bylo doplňováno textem"

V pravém panelu „Přehled prvků" (`jvf_viewer/src/ui/featuresPanel.ts`) se u vybraného
prvku vypisují atributy jako holé dvojice *název : hodnota*. U číselníkových atributů
je hodnota jen **číselný kód** (`KategoriePozemniKomunikace: 2`, `PrevazujiciPovrch: 1`,
`UrovenUmisteniObjektuZPS: 0`), který uživateli nic neříká. Vykresluje to `buildKVTable`
řádkem `tdV.textContent = String(v)` (`featuresPanel.ts:390`).

„Příloha" = číselník DTM specifikace. Autor ji dodal jako Excel
[`reference/dtm_objekty_jvf_dtm.xlsx`](./reference/dtm_objekty_jvf_dtm.xlsx)
(listy `SpolecneAtributy / ZPS / TI / DI`, sloupce *NÁZEV OBJEKTU · ATRIBUT ·
HODNOTA ČÍSELNÍKU · KOD ČÍSELNÍKU*) — čitelné mapování **objekt → atribut →
kód → text**. Slouží k **ověření pokrytí** vygenerované tabulky (křížová
kontrola, viz T2); **zdrojem pravdy zůstává XSD** (rozhodnutí A1), ne tento
Excel. Každý kódovaný atribut má v
`jvf_parser/docs/1.4.3/xsd/common/atributy.xsd` inline `xs:enumeration` + český popisek
v `xs:documentation` (1428 hodnot, všechny s popiskem). Mapování kód → text tedy jako
**data existuje**, jen není zapojené pro runtime překlad:
- `jvf_parser/src/1.4.3/generated/enums.ts` (121 číselníků) nese český popisek **jen
  v komentářích** — runtime dává `SLUG → kód`, ne `kód → text`.
- Generátor `jvf_parser/scripts/generate-types.ts` už má v `EnumDef` vše potřebné
  (`e.name`, `v.value`, `v.doc`).

**Výsledek:** v panelu detailu prvku se u číselníkových atributů zobrazí vedle kódu
i český popisek z číselníku DTM. Formát: **`kód — text`** (např. `2 — dálnice II. třídy`)
— zachovává původní kód pro kontrolu proti JVF a odpovídá formulaci „doplňováno textem".

## Ověřený předpoklad (load-bearing)

Parser běží s `removeNSPrefix: true` (`jvf_parser/src/1.4.3/xml-helpers.ts:39`), takže
klíče v `ZaznamObjektu.attributes` jsou lokální názvy bez prefixu
(`KategoriePozemniKomunikace`, ne `atr:...`), vzniklé přímo z názvu XML elementu
v `parseAtributyObjektu`/`flattenSharedBlock` (`attributes.ts:48,106`). Ty se **1:1
shodují** s `e.name` číselníku z XSD (číselníky jsou inline v `<xs:element name="…">`,
objekty na ně odkazují přes `ref`). Lookup `ENUM_LABELS[názevAtributu]?.[String(kód)]`
je tedy přímočarý. Kdyby předpoklad neplatil, lookup by tiše vracel `undefined` a
nepřeložilo by se nic — proto úkol T2 pokrytí **měří**, nespoléhá se na něj.

## Architektonické rozhodnutí

**Princip: build-time generovaná lookup tabulka (single source of truth z XSD),
graceful degradation, oddělení vrstev.**

- **A1 — Single source of truth.** Runtime tabulku `kód → text` **generovat** z XSD
  spolu se stávajícími `enums.ts`, ne psát ručně. Žádný runtime fetch XSD, žádné CORS,
  vždy v syncu s deployem (stejný princip jako build-time propagace changelogu).
- **A2 — Oddělení vrstev.** Data `ENUM_LABELS` + helper `labelForAttribute` patří do
  **parseru** (`jvf-parser`, doménová znalost číselníku, znovupoužitelné). Formátovací
  řetězec `"kód — text"` zůstává ve **vieweru** (prezentace). Parser říká *co kód
  znamená*, viewer *jak to vypadá*.
- **A3 — Graceful degradation.** Neznámý atribut/kód (chybí v číselníku) → `undefined`
  → zobrazí se holý kód, nikdy chyba. Boolean/textové/identifikátorové atributy
  zůstanou beze změny.
- **A4 — Robustní escaping.** Klíče i hodnoty generovaného souboru psát přes
  `JSON.stringify(...)`, NIKOLI ručními apostrofy — české popisky mohou obsahovat
  apostrof/uvozovku/backslash a ruční `'${…}'` by rozbil TS.
- **A5 — Selektivní překlad.** V `buildKVTable` překlad zapnout **jen** pro sekci
  „Atributy objektu", NE pro „Společné atributy" (identifikátory, data) — vyloučí
  náhodnou kolizi názvů místo spoléhání na náhodu.
- **A6 — Verzní neutralita.** Pokud už existuje větev jiné verze (např. `1.5.0.1` po
  zadání „jvf version"), generátor vytvoří `enum-labels.ts` pro **každou** verzi
  (parametrizace `OUT_DIR`/`XSD_DIR` verzí). Toto zadání se váže na aktuálně existující
  verze v repu.

## Implementace

### A. Generátor (`jvf_parser/scripts/generate-types.ts`)
- Nová funkce `generateEnumLabelsFile(enums: EnumDef[]): string` po vzoru
  `generateEnumsFile` (ř. 378–402). Výstup:
  ```ts
  export const ENUM_LABELS: Record<string, Record<string, string>> = {
    UrovenUmisteniObjektuZPS: { "-3": "3. úroveň pod povrchem (nejníže)", "0": "na povrchu", ... },
    KategoriePozemniKomunikace: { "1": "dálnice I. třídy", "2": "dálnice II. třídy", ... },
  };
  ```
  Vnější klíč = `e.name`, vnitřní klíč = `v.value` (string kód jako v XSD, včetně `-3`),
  hodnota = `v.doc`. Escaping přes `JSON.stringify` (A4). Kolize `e.name` → `warn`.
- Zaregistrovat zápis `src/1.4.3/generated/enum-labels.ts` do stejného místa, kde se
  zapisuje `enums.ts`.

### B. Veřejné API (`jvf_parser/src/1.4.3/index.ts`)
- Re-export `ENUM_LABELS` + helper:
  ```ts
  export function labelForAttribute(attrName: string, value: unknown): string | undefined {
    return ENUM_LABELS[attrName]?.[String(value)];
  }
  ```

### C. Viewer (`jvf_viewer/src/ui/featuresPanel.ts`)
- `buildKVTable(entries, opts?)` rozšířit o flag `translate: boolean` (default `false`).
- Volání pro „Atributy objektu" (`:339`) → `translate: true`; „Společné atributy"
  (`:328`) → beze změny (A5).
- Při `translate` a existujícím popisku: `tdV.textContent = String(v) + ' — ' + label`;
  jinak `String(v)`.

### D. Info modal + changelog
- `jvf_viewer/src/ui/infoModal.ts` (**CLAUDE.md pravidlo!**): do `INFO_CONTENT_HTML`
  doplnit, že panel detailu prvku u číselníkových atributů zobrazuje i český popisek.
- `CHANGELOG.md` `[Unreleased]` → `Přidáno`.

## Verifikace (end-to-end)
- Generátor: `npm run generate -w jvf-parser` vytvoří `enum-labels.ts`;
  `ENUM_LABELS.KategoriePozemniKomunikace['2'] === 'dálnice II. třídy'`.
- Parser: `npm test -w jvf-parser` — unit (`labelForAttribute`) + invariant
  (`ENUM_LABELS ↔ enums.ts`) + měření pokrytí nad `samples/1.4.3/*.xml`.
- Build: `npm run build`.
- Viewer smoke: `npm run dev -w jvf-viewer`, nahrát `ukazka_ZPS.xml`, kliknout na
  komunikaci/plochu → panel ukazuje `2 — dálnice II. třídy`; nekódované atributy holé.
