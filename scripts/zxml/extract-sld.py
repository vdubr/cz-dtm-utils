#!/usr/bin/env python3
"""
Výtah symbologie SŽ (SLD) z exportu logického datového modelu DTMŽ.

Zdroj: `istem_export_LDM_<verze>.sqlite` z balíku „Datový model DTMŽ" (web SŽ,
viz jvf_parser/docs/zxml-1.5.1.6/knihovny/README.md). Tabulka `CS_OBJEKT_DTM`
nese u každého objektu styl OGC SLD (`SLD_STYLE`, FeatureTypeStyle), jímž
objekty kreslí portál ISTEM — barvy, čárkování, značky jako inline SVG,
pravidla podle hodnot atributů (`PropertyName` = `CS_ATR_OBJEKT_DTM.KOD`,
`Literal` = kód hodnoty číselníku).

Ukládají se jen platné objekty SŽ (`999…`) — objekty JVF má ISTEM shodné
s Katalogem DTM ČR, viewer je kreslí Katalogem.

Výstup: jvf_parser/docs/zxml-1.5.1.6/sld/sz-styles.json
  {source, objects: {"<codeBase>-<suffix>": {name, element, part, sld}},
   attributes: {"<KOD>": {xmlLeaf, name, dataType}}}

Spuštění z rootu repa:
    python3 scripts/zxml/extract-sld.py <cesta>/istem_export_LDM_1502_V23.sqlite
"""
import json
import re
import sqlite3
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from zxml_common import DOCS  # noqa: E402

OUT = DOCS / 'sld' / 'sz-styles.json'


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    db = sqlite3.connect(f'file:{src}?mode=ro', uri=True)
    objects: dict[str, dict] = {}
    props: set[str] = set()
    for code, geom, name, element, part, sld in db.execute(
            "SELECT OBJEKT_KOD_NAZEV, GEOM_KOD, TYP, XML_ELEMENT_NAME, OBSAHOVA_CAST, SLD_STYLE "
            "FROM CS_OBJEKT_DTM WHERE OBJEKT_KOD_NAZEV LIKE '999%' "
            "AND PLATNOST_DO LIKE '3000%' AND SLD_STYLE <> '' ORDER BY OBJEKT_KOD_NAZEV, GEOM_KOD"):
        key = f'{code}-{geom:02d}'
        if key in objects:
            sys.exit(f'duplicitní objekt {key}')
        objects[key] = {'name': name, 'element': element, 'part': part, 'sld': sld}
        props.update(re.findall(r'<PropertyName>(\d+)</PropertyName>', sld))
    attributes: dict[str, dict] = {}
    for kod, leaf, name, dtype in db.execute(
            f"SELECT KOD, XML_ELEMENT_NAME, ATRIBUT_NAZEV, DATA_TYPE FROM CS_ATR_OBJEKT_DTM "
            f"WHERE KOD IN ({','.join(sorted(props)) or 'NULL'})"):
        attributes[str(kod)] = {'xmlLeaf': (leaf or '').lstrip('/'), 'name': name, 'dataType': dtype}
    missing = props - set(attributes)
    if missing:
        print(f'  WARN: atributy v SLD bez záznamu v CS_ATR_OBJEKT_DTM: {sorted(missing)}', file=sys.stderr)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({'source': src.name, 'objects': objects,
                               'attributes': dict(sorted(attributes.items(), key=lambda kv: int(kv[0])))},
                              ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    print(f'{len(objects)} objektů SŽ se SLD, {len(attributes)} atributů → {OUT.relative_to(DOCS.parents[2])}')


if __name__ == '__main__':
    main()
