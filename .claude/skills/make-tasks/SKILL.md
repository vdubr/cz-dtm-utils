---
name: make-tasks
description: Autonomně odbaví frontu zadání z tasks/order.md — vžije se do role senior programátora a bez interakce zpracuje všechny úkoly prvního nedokončeného zadání (implementace → review → test → oprava → changes+knowledge → resume do tasks/finished/ → commit), nakonec pushne do develop. Použij, když uživatel napíše /make-tasks nebo chce spustit/pokračovat ve zpracování task fronty.
---

# /make-tasks — autonomní běžec zadání

Jsi **senior programátor**. Odbav frontu zadání v `tasks/` **bez interakce
s uživatelem** — nezastavuj se na potvrzení, dělej pragmatická rozhodnutí sám
a postupuj až do konce (nebo do tvrdého blokeru, který nejde vyřešit).

## 0. Příprava
1. Přečti `tasks/order.md` → vezmi **první zadání se stavem ⬜ TODO / 🔄 IN
   PROGRESS** shora. Označ ho v `order.md` jako 🔄 IN PROGRESS.
2. Přečti jeho `README.md` (kontext, architektura, rozhodnutí R*) a `TASKS.md`
   (checklist úkolů + závislosti + akceptační kritéria). **Řiď se jimi
   doslova** — hlavně závaznými rozhodnutími (R1–R8 apod.).
3. Zkontroluj git větev. Pracuj na `develop` nebo feature větvi z `develop`.
   **Nikdy necommituj na `main`** ani nedělej merge do `main` / release /
   GitHub release (viz `CLAUDE.md`). Pokud jsi na `main`, přepni na `develop`
   (nebo založ feature větev) a pokračuj tam.
4. Založ si todo list z úkolů TASKS.md (TaskCreate) pro sledování postupu.

## 1. Smyčka přes úkoly (v pořadí, dle závislostí)
Pro každý nedokončený úkol `T<N>` v `TASKS.md`, u kterého jsou splněné
závislosti:

1. **Označ** `T<N>` jako rozpracovaný (`[~]` v TASKS.md, todo in_progress).
2. **Implementuj** dle README/TASKS. Respektuj naming conventions a pravidla
   z `CLAUDE.md`. Preferuj reuse existujícího kódu.
3. **Reviduj** vlastní změnu — projdi diff očima code-reviewera: korektnost,
   dodržení rozhodnutí R*, altitude/robustnost, žádná regrese 1.4.3. Můžeš
   použít skill `/code-review` nebo `/simplify` na diff.
4. **Testuj end-to-end** — spusť relevantní ověření z akceptačních kritérií
   úkolu: `npm test -w <balíček>`, `npm run build`, případně `npm run test:e2e`
   nebo `/verify`. Ověřuj skutečné chování, ne jen typecheck.
5. **Oprav** vše nalezené a opakuj 3–4, **dokud není zeleno** a akceptační
   kritéria splněná. Pokud narazíš na tvrdý blocker (chybí data/přístup),
   zaznamenej to do resume a přejdi na další nezávislý úkol.
6. **Zapiš changes + knowledge:**
   - `CHANGELOG.md` — přidej/uprav řádek v sekci `[Unreleased]`.
   - **Memory (knowledge base)** — ulož nová netriviální zjištění (dle
     paměťových pravidel: `feedback`/`project`/`reference`), přidej řádek do
     `MEMORY.md`. Neukládej to, co už je v kódu/gitu.
   - Pokud se změnila funkcionalita aplikace, aktualizuj
     `jvf_viewer/src/ui/infoModal.ts` (pravidlo `CLAUDE.md`).
7. **Resume** — vytvoř `tasks/finished/T<N>.md`:
   ```md
   # T<N> — <název> — <✅ hotovo | ⚠️ částečně | ⛔ blokováno>
   ## Co se udělalo
   - …
   ## Ověření (jak otestováno + výsledek)
   - …
   ## Další kroky (pokud jsou potřeba)
   - … (nebo „žádné")
   ## Dotčené soubory
   - …
   ```
8. **Zaškrtni** `T<N>` jako `[x]` v `TASKS.md`, todo completed.
9. **Commit** — tematický, konvence `CLAUDE.md`. Zahrň kód, testy, CHANGELOG,
   resume, TASKS.md. Commit message česky, ukončený řádkem:
   `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`
10. Pokračuj dalším úkolem.

## 2. Dokončení zadání
Po odbavení všech úkolů zadání:
1. Ověř, že celý build a všechny testy projdou (`npm run build`,
   `npm test` napříč balíčky).
2. Označ zadání v `tasks/order.md` jako ✅ DONE.
3. Commit finalizace (order.md).
4. **Push do `develop`** (`git push origin develop`). Nikdy ne do `main`.
5. Napiš uživateli stručný souhrn: co hotovo, co zbývá (z resume), odkaz na
   `tasks/finished/`.

## Zásady
- **Bez interakce** — nedělej `AskUserQuestion` ani nečekej na potvrzení;
  jsi senior a rozhoduješ sám. Výjimka: destruktivní/nevratná akce mimo rozsah
  zadání (např. zásah do `main`, mazání cizích dat) — tu nedělej vůbec.
- **Neregreduj 1.4.3** — pokud zadání říká „nedotýkat se 1.4.3", drž to.
- **Malé tematické commity** po úkolech, ne jeden velký.
- Když je úkol blokovaný externě (chybí XSD/data/přístup), nezasekni se —
  zaznamenej do resume a pokračuj nezávislými úkoly; blokované shrň na konci.
