# JVF DTM 1.5.0.2

Opravná verze JVF DTM 1.5.0.1 — ČÚZK zveřejnil **9. 9. 2026**, produkční
nasazení IS DMVS **18. 11. 2026** (přechodové období 12.–18. 11. 2026).
Verze 1.5.0.1 do produkce nasazena nebyla.

Zdroj: <https://cuzk.gov.cz/DMVS/JVF-DTM/Budouci-verze.aspx> — `JVF_DTM_1502.zip`
(převzaty `xsd/` a `model/`; HTML dokumentace `doc/` vynechána),
přehled změn `JVF_DTM_1502_PrehledZmen_Priloha1.pdf`.

## Změny proti 1.5.0.1 (struktura beze změny)

1. `TypDopravniStavbyNeboPlochy` — oprava popisku položky 14 („příkop, násep, zářez dopravní stavby").
2. Kanalizace – místo záměru (bod): odstraněny duplicitní kontexty `RefNIns/RefNUpd/RefNDel` (jen YAML).
3. `TridaPresnostiVyska` — `nillable="true"`; v `SpolecneAtributyObjektuTI/DI` (Ins) povinná.
4. `IDObjektu` / `IDObjektuZPS` v `servis.xsd` volitelné.
5. `nillable` doplněno u `TypMostu`, `TypPovrchuVzletovePristavaciDrahy`, `TypMediaVodovodniSite`, odebráno u `TypObjektuOdpadovehoHospodarstviZameru/PS`.
6. O6: nový atribut `IDRDTI`, volitelné `IDVlastnika`, `IDProvozovateleZeZakona`, `IDSpravce`, `IDProvozovatele`, `NeuplnaData`, `EvidencniCisloObjektu`.

Parser je sdílený s 1.5.0.1 (`src/1.5.0.1/`), vlastní je jen generovaný katalog
a číselníky (`src/1.5.0.2/generated/`, `npm run generate:1502 -w jvf-parser`).
