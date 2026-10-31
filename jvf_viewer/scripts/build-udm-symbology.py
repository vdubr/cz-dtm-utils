#!/usr/bin/env python3
"""
Generátor jvf_viewer/src/map/udmSymbology.ts ze „Struktura UDM 2.1.1.xlsx".

Vzhledy objektů UDM nad rámec DTM (code_base 94…) — barva a tloušťka čáry —
dle oficiální tabulky ČKZ (listy `objekty`, `atributy`, `ciselniky`).
Barva je buď HEX přímo u objektu, nebo název číselníku (`ckz_*`/`c_*`) —
pak se barva bere z položek číselníku a generují se varianty podle hodnoty
atributu, který číselník používá (UDM_VARIANT_ATTR, stejný tvar jako
variantAttrMap.ts).

UDM barvy jsou navržené pro tmavé pozadí — bílá (#FFFFFF) se proto mapuje
na černou a světlé odstíny se ztmaví (Popis struktury UDM 2.1.1, kap. 15.3).

Jen standardní knihovna (xlsx = zip + XML). Spuštění z rootu repa:
    python3 jvf_viewer/scripts/build-udm-symbology.py
"""
import html
import json
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
XLSX = ROOT / 'jvf_parser/docs/udm-2.1.1/spec/Struktura UDM 2.1.1.xlsx'
OUT = ROOT / 'jvf_viewer/src/map/udmSymbology.ts'

# Tloušťky UDM (m při 1:500) → mm na mapě (stejná škála jako SYMBOLOGY DTM).
WIDTH_MM = {'Pomocná': 0.13, 'Základní': 0.25, 'Tučná': 0.5}
HEX_RE = re.compile(r'^#[0-9A-Fa-f]{6}$')


def read_sheets(path: Path) -> dict[str, list[dict[str, str]]]:
    """Listy xlsx → seznam řádků {hlavička: hodnota} (hlavička = 2. řádek)."""
    with zipfile.ZipFile(path) as z:
        shared = [
            html.unescape(re.sub(r'<[^>]+>', '', si))
            for si in re.findall(r'<si>(.*?)</si>', z.read('xl/sharedStrings.xml').decode(), re.S)
        ]
        names = re.findall(r'<sheet [^>]*name="([^"]+)"', z.read('xl/workbook.xml').decode())
        sheets: dict[str, list[dict[str, str]]] = {}
        for i, name in enumerate(names, 1):
            xml = z.read(f'xl/worksheets/sheet{i}.xml').decode()
            rows = []
            for row in re.findall(r'<row [^>]*>(.*?)</row>', xml, re.S):
                cells: dict[str, str] = {}
                for attrs, body in re.findall(r'<c ([^>]*?)(?:/>|>(.*?)</c>)', row, re.S):
                    ref = re.search(r'r="([A-Z]+)\d+"', attrs)
                    v = re.search(r'<v>(.*?)</v>', body or '')
                    if not ref or not v:
                        continue
                    cells[ref.group(1)] = shared[int(v.group(1))] if 't="s"' in attrs else v.group(1)
                rows.append(cells)
            header = rows[1] if len(rows) > 1 else {}
            sheets[name] = [
                {header[col]: val.strip() for col, val in r.items() if col in header}
                for r in rows[2:]
            ]
        return sheets


def color(hex_: str) -> str:
    """
    UDM barva → barva pro světlý mapový podklad: bílá → černá, světlé odstíny
    (relativní jas > 0,6) ztmavené na 65 % — UDM to pro bílý podklad
    doporučuje (kap. 15.3), jinak jsou např. #00FFFF / #FFFF00 nečitelné.
    """
    c = hex_.upper()
    if c == '#FFFFFF':
        return '#000000'
    r, g, b = (int(c[i:i + 2], 16) for i in (1, 3, 5))
    if (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6:
        r, g, b = (round(x * 0.65) for x in (r, g, b))
    return f'#{r:02x}{g:02x}{b:02x}'


def colors(hex_: str) -> dict[str, str]:
    """
    UDM neřeší vzhled ploch, jen obvodové linie (kap. 15.1) → barva jde do
    `strokeColor` (obrys / linie / bod), výplň je jen průsvitný nádech.
    """
    c = color(hex_)
    return {'strokeColor': c, 'fillColor': c + '33'}


def ended(row: dict[str, str]) -> bool:
    return row.get('Verze UDM', '').startswith('končí')


def main() -> None:
    s = read_sheets(XLSX)
    lists: dict[str, list[dict[str, str]]] = {}
    for r in s['ciselniky']:
        if not ended(r):
            lists.setdefault(r.get('Čiselnik', ''), []).append(r)

    # (kód, sufix, název číselníku) → název atributu
    list_attr: dict[tuple[str, str, str], str] = {}
    for r in s['atributy']:
        key = (r.get('Kód', ''), r.get('Sufix', ''), r.get('Název číselníku', ''))
        list_attr.setdefault(key, r.get('Název atributu', ''))

    symbology: dict[str, dict] = {}
    variant_attr: dict[str, dict] = {}
    for r in s['objekty']:
        code = r.get('Kód', '')
        if not code.startswith('94') or ended(r) or code in symbology:
            continue
        sufix = r.get('Sufix', '')
        entry: dict = {
            'code': code,
            'objectType': r.get('Alias objektu', ''),
            'containsPart': r.get('Obsahová část', ''),
            'geometryType': r.get('Typ prvku', ''),
        }
        width = WIDTH_MM.get(r.get('Tloušťka', ''))
        if width is not None:
            entry['strokeWidth'] = width
        barva = r.get('Barva', '')
        if HEX_RE.match(barva):
            entry.update(colors(barva))
        elif barva in lists:
            attr = list_attr.get((code, sufix, barva))
            variants, index = [], {}
            for item in lists[barva]:
                if not HEX_RE.match(item.get('Barva', '')):
                    continue
                index[item.get('ID', '')] = len(variants)
                variants.append({
                    'attrKey': attr,
                    'attrValue': item.get('Položka číselníku', ''),
                    **colors(item['Barva']),
                })
            if variants:
                entry['variants'] = variants
                if attr:
                    variant_attr[code] = {'attrName': attr, 'valueToVariantIndex': index}
        symbology[code] = entry

    lines = [
        '// Auto-generated from „Struktura UDM 2.1.1.xlsx" (ČKZ) — DO NOT EDIT',
        '// Regenerate: python3 jvf_viewer/scripts/build-udm-symbology.py',
        '//',
        '// Vzhled objektů UDM nad rámec DTM (code_base 94…). Barvy UDM jsou',
        '// navržené pro tmavé pozadí — bílá → černá, světlé odstíny ztmavené.',
        '',
        "import type { ObjectSymbology } from './symbology.js';",
        "import type { VariantAttrMapEntry } from './variantAttrMap.js';",
        '',
        'export const UDM_SYMBOLOGY: Record<string, ObjectSymbology> = '
        + json.dumps(symbology, ensure_ascii=False, indent=2) + ';',
        '',
        'export const UDM_VARIANT_ATTR: Record<string, VariantAttrMapEntry> = '
        + json.dumps(variant_attr, ensure_ascii=False, indent=2) + ';',
        '',
    ]
    OUT.write_text('\n'.join(lines), encoding='utf-8')
    with_variants = sum(1 for e in symbology.values() if 'variants' in e)
    print(f'{len(symbology)} objektů UDM ({with_variants} s variantami, '
          f'{len(variant_attr)} s mapou atributu) → {OUT.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
