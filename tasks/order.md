# Fronta zadání (task specs)

Pořadí zpracování zadání. Skill **`/make-tasks`** bere první nedokončené
zadání shora, vžije se do role senior programátora a **bez interakce** odbaví
všechny jeho úkoly (viz `TASKS.md` daného zadání). Po každém úkolu reviduje,
testuje, opraví, zapíše changes + knowledge, uloží resume do `finished/` a
commitne. Po dokončení celého zadání pushne do `develop`.

## Pořadí

| # | Zadání | Stav | Spec |
|---|--------|------|------|
| 1 | **jvf version** — podpora JVF DTM 1.5.0.1 souběžně s 1.4.3 (parser + topologie + viewer) | ⬜ TODO | [`jvf version/README.md`](./jvf%20version/README.md) · [úkoly](./jvf%20version/TASKS.md) |

## Legenda stavů
- ⬜ **TODO** — nezačato
- 🔄 **IN PROGRESS** — rozpracováno (běží některý úkol)
- ✅ **DONE** — všechny úkoly odbaveny, resume v `finished/`, pushnuto do `develop`

## Jak přidat nové zadání
1. Vytvoř `tasks/<název zadání>/README.md` (specifikace + kontext + rozhodnutí).
2. Vytvoř `tasks/<název zadání>/TASKS.md` (checklist úkolů s akceptačními kritérii).
3. Přidej řádek do tabulky **Pořadí** výše (na správné místo dle priority).
