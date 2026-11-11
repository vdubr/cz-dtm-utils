# ŽXML 1.4.2.1 — datový model DTMŽ 1.4.2.1b (Správa železnic)

Výměnný formát dat DTMŽ platný od **1. 2. 2025** do přechodu na ŽXML 1.5.1.6
(23. 11. 2026). Stojí na **JVF DTM 1.4.3**: jeden element `ZaznamObjektu`
s `cmn:ZapisObjektu`, geometrie přes `gml:*Property`.

Zdroj: SŽ, `Datovy_model_DTMZ_1421_20250701_Hotfix04_DatoveTypy.zip`
(vnořený `ZXML_LDM_1_4_2_1b.zip`) na
<https://www.spravazeleznic.cz/stavby-zakazky/podklady-pro-zhotovitele/digitalne-technicka-mapa-zeleznice-technicke-standardy/datovy-model-dtmz>.

- `xsd/` — `common/` (vč. `atributy_sz.xsd`), `objekty/` (357 objektů JVF),
  `objekty_sz/` (136 objektů SŽ), `index/index_data.xsd`, `ext/`.
- Oficiální ukázka SŽ `xml/zxml-prvky-sz.xml` je v
  `jvf_parser/samples/zxml-1.4.2.1/` (validní proti XSD).

Rozdíly proti JVF 1.4.3: hlavička `cmn:VerzeZXML`, objekty SŽ (`999…`,
obsahové části ZDT/ZDD/H3D/ODSZ/SKLEP), atributy SŽ `atrsz:*` jako přímí
potomci `AtributyObjektu`. Některé číselníky jsou v `atributy.xsd`
i `atributy_sz.xsd` (např. `ZpusobPorizeniZPS` s kódy JVF i SŽ) — generátor
je sloučí sjednocením hodnot.

Regenerace: `npm run generate:zxml1421 -w jvf-parser`.
