---
name: make-task
description: Založí aktuální rozpracovaný záměr/plán z konverzace jako nové zadání do fronty tasks/ (vytvoří tasks/<slug>/README.md + TASKS.md dle vzoru, přidá řádek do order.md, doplní pointer do MEMORY.md). NEimplementuje — jen eviduje pro pozdější /make-tasks. Použij, když uživatel napíše /make-task nebo „udělej z toho task" / „zaeviduj to jako task" / „dej to do fronty".
---

# /make-task — založ zadání do fronty

Vezmi **aktuální rozpracovaný záměr** z konverzace (diskuze, plán, nález bugu,
zpětná vazba autora) a **zaeviduj ho jako nové zadání** do `tasks/` dle
konvence popsané v `tasks/order.md` (sekce „Jak přidat nové zadání").

**Tento skill NEimplementuje** — jen vytvoří kvalitní specifikaci, kterou pak
autonomně odbaví `/make-tasks`. Cílem je, aby budoucí běžec měl vše potřebné
a nemusel nic dohledávat.

## Vstup

Zdroj zadání je to, co se právě řešilo v konverzaci. Pokud existuje plán ve
`~/.claude/plans/*.md` k tomuto tématu, vyjdi z něj. Když je záměr nejasný nebo
prázdný, zeptej se jednou, čeho se task týká — jinak nezdržuj otázkami.

## Postup

1. **Prozkoumej kód** (pokud už není prozkoumaný v konverzaci). Zadání musí stát
   na **ověřených faktech s `file:line` odkazy**, ne na dohadech. Aktivně hledej
   existující funkce/utility k reuse — vzor viz sekce „Ověřený předpoklad" u
   stávajících zadání.

2. **Odvoď `slug` a název.**
   - `slug` = **kebab-case, bez mezer a diakritiky** (např.
     `klik-v-mape-otevre-panel`). Bez mezer kvůli odkazům v `order.md`.
   - Lidský název = krátká věta do nadpisů a tabulky `Pořadí`.

3. **Vytvoř `tasks/<slug>/README.md`** — trvalá specifikace. Drž formát vzoru
   `tasks/pripnuta-hlavicka-kategorie/README.md`:
   - Nadpis `# Zadání: …` + úvodní blockquote (odkaz na `TASKS.md`, zmínka že
     odbavuje `/make-tasks`, resume → `../finished/`).
   - **## Kontext** — proč to děláme; klidně cituj zpětnou vazbu autora.
   - **## Ověřený předpoklad (load-bearing)** — konkrétní `file:line` fakta,
     existující kód k reuse, co je hotové a co chybí.
   - **## Architektonické rozhodnutí** — očíslovaná rozhodnutí **R1, R2, …**
     (co se dělá a proč; co je mimo scope; co je volitelné). `/make-tasks` se
     jimi řídí doslova.
   - **## Implementace** — konkrétní soubory a úpravy (odkazy `file:line`),
     reuse existujících funkcí.
   - **## Verifikace (end-to-end)** — jak ověřit skutečné chování (build, testy,
     `npm run dev` + vzorek, `mcp__claude-in-chrome__*` / `/run`). Ne jen
     typecheck.
   - Pokud se mění funkcionalita vieweru, **připomeň v zadání** aktualizaci
     `jvf_viewer/src/ui/infoModal.ts` a řádek do `CHANGELOG.md` `[Unreleased]`
     (pravidla `CLAUDE.md`) — typicky jako samostatný úkol T(poslední).

4. **Vytvoř `tasks/<slug>/TASKS.md`** — checklist dle vzoru:
   - Úvod (odbavuje `/make-tasks` v pořadí; po úkolu: zaškrtnout, resume do
     `../finished/T<N>.md`, commit) + legenda `[ ]/[~]/[x]`.
   - Úkoly **T1, T2, …** — každý s odkazy na sekce README/rozhodnutí,
     **Závislosti** a **Akceptace** (měřitelné kritérium). Volitelné úkoly
     označ „(volitelné)" a „lze přeskočit".
   - **## Poznámky pro `/make-tasks`** — scope, co je mimo scope, na co si dát
     pozor, připomínka commit/resume workflow.

5. **Přidej řádek do `tasks/order.md`** do tabulky **Pořadí**:
   - Defaultně na **konec** se stavem `⬜ TODO` (ledaže uživatel řekl prioritu).
   - Formát řádku dle stávajících: `| N | **<slug>** — <popis> | ⬜ TODO |`
     `[README](./<slug>/README.md) · [úkoly](./<slug>/TASKS.md) |`.
   - Slug je bez mezer → odkazy není třeba URL-enkódovat.

6. **Doplň pointer do `MEMORY.md`** — do řádku memory
   `task-queue-make-tasks.md` přidej název nového zadání do seznamu známých
   zadání (drž jednu řádku, neduplikuj). Pokud tam seznam není, jen ověř, že
   pointer na task frontu existuje.

7. **Shrň uživateli** stručně: název + `slug`, pozici ve frontě, cestu k README
   a TASKS, a že se implementace spustí přes `/make-tasks`. **Necommituj**,
   pokud o to uživatel výslovně nepožádá (evidence do fronty je jen příprava).

## Zásady

- **Kvalita specifikace > rychlost.** README má být tak dobré, aby `/make-tasks`
  nemusel nic domýšlet. Načerpej `file:line` fakta z reálného kódu.
- **Neimplementuj** — žádné změny v `jvf_*` balíčcích. Píšeš jen do `tasks/`
  a `MEMORY.md`.
- **Minimum interakce** — rozhoduj sám (slug, priorita = konec fronty). Ptej se
  jen když je téma zadání opravdu nejasné nebo když uživatel prioritu zmínil.
- Respektuj naming/pravidla `CLAUDE.md` (česky doména, slovesa EN; info modal
  a changelog jako povinné kroky, když se mění funkcionalita).
