# jvf-cad

Export JVF DTM / **UDM** (Univerzální datový model ČKZ) / **ŽXML** (data DTMŽ
Správy železnic) do **AutoCAD DXF**.

Vzhled se volí podle verze souboru (`dtm.verze`): ŽXML → znaky SŽ
vektorizované z fotokatalogu MOZeK (bloky `SZ_<id>`, natočení podle
atributu `Natoceni`), UDM i čisté JVF DTM → vzhled UDM (bloky `UDM_<kód>`).
Jinou tabulku vzhledu lze předat volbou `styles`.

```ts
import { parseJvfDtm } from 'jvf-parser';
import { exportDxf } from 'jvf-cad';

const { dxf } = exportDxf(parseJvfDtm(xml), { version: 'R2013' });
```

## Co výkres obsahuje

- **Hladiny** podle objektových typů (`ZPS_HraniceBudovy`, `ZPSUDM_Strom`, …;
  mazané záznamy `…_DEL` jen s `includeDeleted`), barva / tloušťka / typ čáry
  hladiny dle vzhledu UDM; vzhled podle hodnot číselníků jako přepis entity.
- **Linie** → LWPOLYLINE (konstantní výška) nebo 3D POLYLINE, **plochy** →
  uzavřené obvody (UDM plochy nevyplňuje), **body** → bloky symbolů z knihovny
  ČKZ (barva ByBlock, natočení `Natoceni`) nebo POINT.
- **Popisy a názvy** (PopisyZPS/DI/TI, Nazvy, ObecnePoznamky, PopisySmeru,
  čísla/kódy/výšky bodů, popisy vrstevnic) → TEXT s `PopisObjektu`, výška dle
  UDM kap. 15.2 (3–12 m při 1:500), styl „UDM" (Arial Narrow).
- **XDATA** aplikace `UDM` na každé entitě: objektový typ, kód, ID, druh
  záznamu a atributy `Název=kód (popisek)` (v AutoCADu příkaz `XDLIST`).
- Souřadnice **EPSG:5514** (záporné, metry), jednotky výkresu metry.

## Verze DXF

| `version` | AutoCAD | Barvy | Texty |
|---|---|---|---|
| `R2013` (výchozí) | AC1027 | true color | UTF-8 |
| `R2000` | AC1015 | nejbližší ACI | `\U+XXXX`, ANSI_1250 |

R2000 je pro starší CAD programy. **DWG** se neexportuje — DXF otevřete
v AutoCADu a uložte jako DWG (zápis DWG v prohlížeči by vyžadoval GPL
knihovnu LibreDWG, viz rozhodnutí v historii projektu).

## Omezení

- **Typy čar** mají čárkování změřené z vektorového vzorníku ČKZ
  (`scripts/udm/line-patterns.json`, mm papíru při 1:500 = m × 2). Vložené
  značky (ploty, sítě TI, alej) se nekreslí — kompletní složené styly jsou jen
  v binárním `Vzory_linii_UDM.rsc` (MicroStation).
- Barvy UDM (navržené pro tmavé pozadí) jsou upravené pro světlý podklad
  (bílá → černá, světlé odstíny ztmavené) — stejně jako ve vieweru.

## Generovaná data

- `src/generated/templates.ts` — prázdné výkresy (kostra pro AutoCAD) z ezdxf:
  `python scripts/cad/build-dxf-templates.py` (vyžaduje `pip install ezdxf`).
- `src/generated/symbols.ts` — geometrie symbolů UDM z knihovny ČKZ:
  `python3 scripts/udm/build-udm-cad-symbols.py`.
