# Fronta zadání (task specs)

Pořadí zpracování zadání. Skill **`/make-tasks`** bere první nedokončené
zadání shora, vžije se do role senior programátora a **bez interakce** odbaví
všechny jeho úkoly (viz `TASKS.md` daného zadání). Po každém úkolu reviduje,
testuje, opraví, zapíše changes + knowledge, uloží resume do `finished/` a
commitne. Po dokončení celého zadání pushne do `develop`.

## Pořadí

| # | Zadání | Stav | Spec |
|---|--------|------|------|
| 1 | **jvf version** — podpora JVF DTM 1.5.0.1 souběžně s 1.4.3 (parser + topologie + viewer) | ✅ DONE | [`jvf version/README.md`](./jvf%20version/README.md) · [úkoly](./jvf%20version/TASKS.md) |
| 2 | **ciselnik-popisky** — textové popisky číselníkových atributů v panelu prvku (kód → význam dle číselníku DTM) | ✅ DONE | [`ciselnik-popisky/README.md`](./ciselnik-popisky/README.md) · [úkoly](./ciselnik-popisky/TASKS.md) |
| 3 | **pripnuta-hlavicka-kategorie** — přišpendlená (sticky) hlavička kategorie v panelu „Přehled prvků" při scrollování | ✅ DONE | [`pripnuta-hlavicka-kategorie/README.md`](./pripnuta-hlavicka-kategorie/README.md) · [úkoly](./pripnuta-hlavicka-kategorie/TASKS.md) |
| 4 | **klik-v-mape-otevre-panel** — klik na prvek v mapě (2D i 3D) automaticky otevře „Přehled prvků" a prvek vybere (dnes funguje jen při už otevřeném panelu) | ✅ DONE | [`klik-v-mape-otevre-panel/README.md`](./klik-v-mape-otevre-panel/README.md) · [úkoly](./klik-v-mape-otevre-panel/TASKS.md) |
| 5 | **barvy-siti-legenda** — soulad barev sítí v legendě/panelu s mapou (reprezentativní barva z variant), oprava 27 poškozených výplní (RGB→fillColor), audit vs. Katalog DTM (kanalizace vs. teplovod) | ✅ DONE | [README](./barvy-siti-legenda/README.md) · [úkoly](./barvy-siti-legenda/TASKS.md) |

## Legenda stavů
- ⬜ **TODO** — nezačato
- 🔄 **IN PROGRESS** — rozpracováno (běží některý úkol)
- ✅ **DONE** — všechny úkoly odbaveny, resume v `finished/`, pushnuto do `develop`

## Jak přidat nové zadání
1. Vytvoř `tasks/<název zadání>/README.md` (specifikace + kontext + rozhodnutí).
2. Vytvoř `tasks/<název zadání>/TASKS.md` (checklist úkolů s akceptačními kritérii).
3. Přidej řádek do tabulky **Pořadí** výše (na správné místo dle priority).
