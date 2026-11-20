# Úkoly: Rozpoznat vracejícího se uživatele (cookies / úložiště)

Odbavuje `/make-tasks` v pořadí (respektuje závislosti). Detaily v
[`README.md`](./README.md) (rozhodnutí R1–R5, otevřené otázky). Po dokončení
úkolu: zaškrtnout zde, resume do `../finished/T<N>.md`, commit.

Stav: `[ ]` TODO · `[~]` rozpracováno · `[x]` hotovo.

---

- [ ] **T1 — Upřesnit s uživatelem** — README „Otevřené otázky“ 1–4
  - Zeptat se na souhlas (lišta / oprávněný zájem / cookieless režim PostHogu),
    dobu platnosti ID, úložiště a co ukazovat v `/analytics`. Ověřit volby
    posthog-js v dokumentaci PostHogu (MCP `docs-search`). Odpovědi zapsat do
    README jako doplněná rozhodnutí R2/R3.
  - **Závislosti:** žádné. **Akceptace:** README má rozhodnuté R2 a R3, otázky
    zodpovězené. **Bez toho nepokračovat.**

- [ ] **T2 — Viewer: trvalé anonymní ID + klíč přístupu** — README R1–R3, „Implementace / Viewer“
  - `jvf_viewer/src/analytics.ts:189–211`: persistence dle R2, klíč přístupu
    (`visit_id` / `$session_id`) u všech událostí, bez `identify()`.
  - **Závislosti:** T1. **Akceptace:** dvě načtení ve stejném prohlížeči → stejné
    ID uživatele, různý klíč přístupu; anonymní okno → nové ID; bez souhlasu
    (je-li opt-in) žádná cookie / `ph_*` v úložišti. Ověřeno zachycením požadavků,
    ne v produkčním projektu.

- [ ] **T3 — Souhlasová lišta** (jen pokud T1 rozhodne opt-in) — README R2
  - `jvf_viewer/src/ui/consentBar.ts` (M3 styl), volba v `localStorage`, možnost
    změnit volbu později (O aplikaci / patička).
  - **Závislosti:** T1, T2. **Akceptace:** lišta se ukáže jen jednou, „Odmítnout“
    = měření jako dnes, „Povolit“ = trvalé ID; volbu jde změnit.

- [ ] **T4 — `/analytics`: přístupy podle klíče přístupu + uživatelé** — README R3, R4
  - `analytics-page/sync.ts`: stahovat ID uživatele a klíč přístupu, seskupovat
    přístupy podle klíče přístupu; staré záznamy (bez ID) beze změny; nová verze
    úložiště (`store.ts`).
  - `analytics-page/app.ts`: statistiky uživatelů / vracejících se, filtr
    „Noví / Vracející se“ (zaškrtávací jako `#typ`, nic = vše, řídí i graf),
    v kartě přístupu odkaz na další přístupy téhož uživatele.
  - **Závislosti:** T2. **Akceptace:** na podstrčených datech (stejné ID ve dvou
    přístupech) se ukáže 1 vracející se uživatel se 2 přístupy; stará data se
    zobrazí jako dnes; typecheck, lint, build zelené.

- [ ] **T5 — Texty: info modal, README, CHANGELOG** — README R5 (CLAUDE.md pravidlo!)
  - `jvf_viewer/src/ui/infoModal.ts:497–515` („Měření používání“ — přestat
    slibovat „bez cookies“, popsat nové chování a souhlas), `README.md:242–244`,
    hlavička `analytics.ts:5–7`, `CHANGELOG.md` `[Unreleased]` → Změněno.
  - **Závislosti:** T2 (a T3, pokud se dělá). **Akceptace:** všechny texty
    odpovídají skutečnému chování; CHANGELOG má řádek v `[Unreleased]`.

---

## Poznámky pro `/make-tasks`

- **T1 je povinná interakce s uživatelem** — právní rámec (souhlas, ePrivacy)
  nerozhodovat samostatně. Dokud není T1 hotové, zadání je blokované.
- Neposílat testovací události do produkčního projektu PostHogu (Default
  project 335266) — zkreslily by `/analytics`.
- Žádné osobní údaje ani `identify()` (R1); fingerprinting je mimo scope.
- Po každém úkolu: zaškrtnout, resume do `../finished/T<N>.md`, commit.
  Nemergovat do `main` (release jen na pokyn uživatele).
