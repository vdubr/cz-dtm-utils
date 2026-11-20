# Zadání: Rozpoznat vracejícího se uživatele (cookies / úložiště)

> Trvalá specifikace. Úkoly k odbavení jsou v [`TASKS.md`](./TASKS.md).
> Odbavuje skill `/make-tasks`. Resume dokončených úkolů → `../finished/`.
> **Před implementací upřesnit s uživatelem otázky v sekci „Otevřené otázky“**
> (týkají se souhlasu a právního rámce — nerozhodovat samostatně).

## Kontext

Zadání od autora (2026-11-20):
> „přidej do todo: pomocí cookies identifikovat vracejícího se uživatele“

Viewer dnes měří záměrně **bez cookies a bez úložiště** — každé načtení stránky
je nový anonymní návštěvník. Přehled používání `/analytics` proto pracuje
s „přístupem“ = jedno načtení stránky a **nedokáže říct, kolik je skutečných
uživatelů, kdo se vrací a jak často**. Cíl: rozpoznat opakované návštěvy téhož
prohlížeče a ukázat je v `/analytics` (noví vs. vracející se, počet návštěv
na uživatele, přístupy jednoho uživatele pohromadě).

## Ověřený předpoklad (load-bearing)

- **Inicializace PostHogu** — `jvf_viewer/src/analytics.ts:189–211`:
  `persistence: 'memory'` (`:192`) a `person_profiles: 'never'` (`:193`)
  s komentářem „Bez cookies a localStorage — žádná souhlasová lišta“ (`:191`).
  Hlavičkový komentář souboru to slibuje také (`analytics.ts:5–7`). Měření běží
  jen v produkčním buildu na hostech `VITE_POSTHOG_HOSTS`
  (`shouldEnableAnalytics`, `analytics.ts:91`, volání `:172`).
- **`distinct_id` = přístup.** S `persistence: 'memory'` dostane každé načtení
  stránky nové `distinct_id`; `/analytics` na tom staví:
  `jvf_viewer/src/analytics-page/sync.ts:4` („Přístup = jeden `distinct_id`“),
  sloučení podle `distinct_id` `sync.ts:136`, popis v UI
  `analytics-page/main.ts:43`.
- **Texty pro uživatele slibují „bez cookies“:**
  - info modal „Měření používání“ — `jvf_viewer/src/ui/infoModal.ts:497–515`
    („Měření nepoužívá cookies ani úložiště prohlížeče (každé otevření stránky
    je nový anonymní návštěvník)“, `:511–512`),
  - `README.md:242–244` (Usage analytics → Privacy: „no cookies and no browser
    storage … hence no consent banner“).
- **Původní rozhodnutí o měření** — zadání `../logovani-uzivatelskeho-pruchodu/`
  (README `R1 Soukromí: … cookieless`, `:70`; otázka souhlasu `:83`). Tohle
  zadání ho vědomě mění → nutné nové rozhodnutí o souhlasu.
- **Souhlasová lišta ve vieweru neexistuje** (žádný kód pro consent v
  `jvf_viewer/src`).
- **posthog-js** (`jvf_viewer/package.json`, `^1.445`) umí:
  `persistence: 'localStorage+cookie' | 'localStorage' | 'cookie'`,
  `opt_out_capturing_by_default` + `opt_in_capturing()` / `opt_out_capturing()`
  (souhlas), a novější **cookieless režim** (`cookieless_mode`, hash na serveru
  z IP + UA + denní sůl → unikátní uživatel **v rámci dne** bez úložiště).
  Konkrétní volby a jejich chování ověřit v dokumentaci PostHogu před
  implementací (MCP `docs-search`), ne z paměti.

## Architektonické rozhodnutí

- **R1 — Identifikátor jen anonymní.** Náhodné ID prohlížeče (posthog
  `distinct_id` v úložišti), žádné `identify()`, žádné osobní údaje, žádné
  person properties. `person_profiles` zůstává `'never'` (nebo
  `'identified_only'`, které bez `identify()` profily nezakládá).
- **R2 — Souhlas podle odpovědi uživatele (viz otázky).** Výchozí návrh:
  persistentní ID jen **se souhlasem** (lišta / volba v O aplikaci); bez souhlasu
  měření beze změny (`persistence: 'memory'`). Nerozhodovat samostatně.
- **R3 — `/analytics` rozlišuje přístup a uživatele.** Přístup zůstává jedno
  načtení stránky; nově se seskupuje podle ID uživatele. Protože se `distinct_id`
  stane trvalým, je potřeba **nový klíč přístupu**: `$session_id` (posthog
  ho posílá i s persistencí) nebo vlastní vlastnost `visit_id` u každé události
  (nové UUID při načtení stránky). Přednost má řešení, které funguje stejně pro
  stará data (bez úložiště: `distinct_id` = přístup) i nová.
- **R4 — Zpětná kompatibilita dat.** Stará data (do nasazení) nemají trvalé ID —
  v `/analytics` se počítají jako „neznámý / jednorázový“ uživatel, ne jako noví.
- **R5 — Texty.** Info modal, README (Usage analytics), hlavička `analytics.ts`
  a CHANGELOG musí přesně odpovídat novému chování (CLAUDE.md pravidlo).
- **Mimo scope:** sledování napříč weby, reklamní ID, fingerprinting, propojení
  s identitou (e-mail, účet).

## Otevřené otázky (upřesnit před implementací)

1. **Souhlas:** souhlasová lišta (opt-in, ePrivacy) vs. bez lišty s odkazem na
   oprávněný zájem, vs. **cookieless režim PostHogu** (vracející se jen v rámci
   dne, bez úložiště a bez lišty)?
2. **Doba platnosti** ID (např. 12 měsíců) a kde ho uložit (cookie vs.
   localStorage — cookie se posílá i na subdomény, localStorage ne).
3. **Co ukazovat v `/analytics`:** noví vs. vracející se po dnech, počet návštěv
   na uživatele, karta uživatele se všemi jeho přístupy, filtr „jen vracející se“?
4. Má volba souhlasu jít později změnit (odkaz v O aplikaci / patičce)?

## Implementace (podle odpovědí)

- **Viewer** — `jvf_viewer/src/analytics.ts`:
  - volba persistence dle R2 (`:192`); se souhlasem `opt_out_capturing_by_default`
    + `opt_in_capturing()` po souhlasu, případně jen přepnutí persistence;
  - klíč přístupu dle R3 (např. `register({ visit_id })` při startu, ať ho mají
    všechny události), aktualizovat komentáře `:5–7`, `:191`.
  - (pokud lišta) nová malá komponenta `jvf_viewer/src/ui/consentBar.ts` ve
    stylu M3 (`app-m3.css`), volba uložená v `localStorage`.
- **`/analytics`** — `jvf_viewer/src/analytics-page/`:
  - `sync.ts`: do řádku `pv` / do dotazu přidat ID uživatele a klíč přístupu,
    seskupovat přístupy podle klíče přístupu (ne `distinct_id`); zvednout verzi
    úložiště (`StoredData.version`, `store.ts` — staré verze se smažou a stáhnou
    znovu, vzor v3 → v4);
  - `app.ts`: statistiky „uživatelů“ / „vracejících se“, případně filtr
    „Noví / Vracející se“ ve stylu přepínačů `#typ`, `#tool` (zaškrtávací,
    nic = vše), karta přístupu s odkazem na další přístupy téhož uživatele.
- **Texty** — `infoModal.ts:497–515`, `README.md:225–250`, CHANGELOG `[Unreleased]`.

## Verifikace (end-to-end)

- `npm run typecheck`, `npm run build`, `npx eslint jvf_viewer/src`.
- Viewer v produkčním režimu lokálně (`VITE_RELEASE_BUILD=1`, host v
  `VITE_POSTHOG_HOSTS` dočasně `localhost` jen pro test, **neposílat do
  produkčního projektu** — použít testovací projekt PostHogu nebo zachytit
  požadavky v Playwrightu): dvě načtení stránky ve stejném prohlížeči mají
  stejné ID uživatele a různý klíč přístupu; v anonymním okně nové ID.
- Bez souhlasu (pokud R2 = opt-in): žádná cookie ani klíč `ph_*` v
  `localStorage`, chování jako dnes.
- `/analytics`: stará data se zobrazí beze změny, nová data seskupená podle
  uživatele; podstrčená odpověď API (vzor testů z vývoje `/analytics`:
  `page.route('https://eu.posthog.com/api/**')`).
- Info modal a README odpovídají skutečnosti.
