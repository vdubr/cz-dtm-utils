# ŽXML 1.5.1.6 — datový model DTMŽ 1.5.0.2 V23 (Správa železnic)

ŽXML je výměnný formát dat **Digitální technické mapy železnice (DTMŽ)**
Správy železnic. Od 1. 7. 2024 SŽ přijímá geodetickou dokumentaci výhradně
v ŽXML. Verze **1.5.1.6** platí od **23. 11. 2026** a stojí na
**JVF DTM 1.5.0.2** (ČÚZK).

Zdroj: <https://www.spravazeleznic.cz/stavby-zakazky/podklady-pro-zhotovitele/digitalne-technicka-mapa-zeleznice-technicke-standardy/datovy-model-dtmz>
— balík `Datovy_model_DTMZ_1502_20261123_v23` (54 MB). Stránky SŽ odmítají
výchozí User-Agent (HTTP 403), stahujte prohlížečem nebo `curl -A 'Mozilla/5.0 …'`.

## Obsah adresáře

| Cesta | Co to je |
|---|---|
| `xsd/` | XSD šablony ŽXML 1.5.1.6 (`zxml_1_5_1_6_V23` ze zipu SŽ) — `common/` (vč. `atributy_sz.xsd`), `objekty/` (372 objektů JVF), `objekty_sz/` (141 objektů SŽ), `index/index_data.xsd` (kořen pro validaci), `ext/` (GML) |
| `spec/` | Definice kontrol IS DTMŽ (`DTMZ_kontroly_20261123.xlsx`) a release notes LDM |
| `sld/` | Symbologie SŽ — styly SLD z exportu LDM DTMŽ, normalizované značky — viz `sld/README.md` |
| `ldm/` | Výtah z LDM DTMŽ (objekty, atributy a kódy hodnot LDM ↔ ŽXML) |

Do repa **nejsou** převzaty soubory ze zipu `SZ/` (SQLite export IS DTMŽ,
Oracle DMP, `SZ_LDM_1.5.0.2_V23.xlsx`, ~50 MB) — LDM xlsx je vstupem
skriptu `scripts/zxml/ldm-attributes.py` (stáhnout ze zdroje výše).

## Rozdíly proti JVF DTM 1.5.0.2

- Hlavička navíc `cmn:VerzeZXML` (podle ní parser dialekt pozná) a volitelná
  sekce `cmn:StaniceniData` (staničení objektů: TUDU, km, typ, platnost) →
  `JvfDtm.ext.staniceni`.
- `objtyp:Data` = nejdřív objekty JVF (`ObjektJVFDTM`), pak objekty SŽ
  (`ObjektSZ`) — v instanci jsou objekty SŽ přímo pod `Data`.
- Objekty SŽ: `ObjektovyKod` 100xxx, `code_base 9990000xxx`, obsahové části
  **ZDT** (ŽD technická infrastruktura), **ZDD** (ŽD dopravní infrastruktura),
  **H3D** (hrany 3D k ZPS), **ODSZ** (ostatní data SŽ), **SKLEP** (data ze
  starších dokumentací). Do DTM krajů se nepředávají.
- Každý objekt (i JVF) má navíc sdílenou skupinu atributů SŽ
  `SpolecneAtributyObjektu{ZPS,DI,TI,…,ZDT,ZDD,H3D,ODSZ,SKLEP}SZ`
  (`atrsz:` — správce TI SŽ, zdroj dat, status harmonizace, …); parser
  ji zploští do `attributes`.
- Druhy záznamů `ZaznamObjektuIns/Upd/Del/RefN/RefV` (bez přeshraničních `Pe*`).
- Chybí 21 objektů ochranných pásem `*_PS-plocha` z JVF.

## Regenerace

```bash
npm run generate:zxml1516 -w jvf-parser      # katalog, číselníky, sdílené skupiny
python3 scripts/zxml/samplegen.py            # ukázky samples/zxml-1.5.1.6/
xmllint --noout --schema jvf_parser/docs/zxml-1.5.1.6/xsd/index/index_data.xsd \
  jvf_parser/samples/zxml-1.5.1.6/*.xml
```

Ukázky v `samples/zxml-1.5.1.6/` jsou **smyšlená data** (oficiální ukázka
pro 1.5.1.6 není); `zxml_nadrazi.xml` je schematické nádraží v místě
žst. Řevnice.
