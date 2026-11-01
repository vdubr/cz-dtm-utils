#!/usr/bin/env python3
"""
Generátor symbologie UDM 2.1.1 (Univerzální datový model ČKZ).

Vstupy (balík ČKZ „UDM 2.1.1", uložený v jvf_parser/docs/udm-2.1.1/):
  - spec/Struktura UDM 2.1.1.xlsx
      listy `objekty` (vzhled objektu), `ciselniky` (vzhled položek číselníků),
      `atributy` (který atribut objektu používá který číselník)
  - knihovny/SVG — SVG symboly z balíku (Knihovny/SVG)

Výstupy:
  - jvf_parser/src/udm-2.1.1/generated/styles.ts — UDM_STYLES:
    `<code_base>-<suffix>` → základní vzhled + pravidla podle hodnot atributů
    (číselníků); sdílí viewer i export do CAD
  - jvf_viewer/public/symboly/udm/<symbol>_<barva>.svg — symboly přebarvené
    barvou objektu / položky a přeškálované na konvenci vieweru

Vzhled v UDM (Popis struktury UDM 2.1.1, kap. 15):
  - barva / tloušťka / vzor linie / symbol — na úrovni objektu, nebo název
    číselníku, jehož položky vzhled určují (každá složka samostatně),
  - tloušťky: Pomocná 0,065 m, Základní 0,125 m, Tučná 0,35 m při 1:500
    → 0,13 / 0,25 / 0,7 mm na papíře,
  - barvy jsou navržené pro TMAVÉ pozadí; pro světlý podklad vieweru se bílá
    mapuje na černou a světlé odstíny se ztmaví (kap. 15.3 to doporučuje),
  - SVG symboly jsou v papírových px (96 dpi) — 1 px = 0,2646 mm; viewer
    počítá s konvencí ČÚZK 1 SVG-px = 0,01 mm → škálování ×26,458.

**Vzory linií** (čárkování základní čáry) jsou ZMĚŘENÉ z vektorového vzorníku
ČKZ (`knihovny/Vzory_symbolu_a_stylu_UDM.pdf`, list 4) skriptem
`extract-line-patterns.py` → `line-patterns.json` (mm papíru při 1:500).
Vložené značky (ploty, sítě TI, alej, kynety) se nekreslí — přesné definice
celých stylů jsou jen v binárním MicroStation `Vzory_linii_UDM.rsc`.

Spuštění z rootu repa (volitelně jiná cesta k adresáři SVG symbolů):
    python3 scripts/udm/build-udm-styles.py [<Knihovny/SVG>]
"""
import html
import json
import re
import shutil
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
XLSX = ROOT / 'jvf_parser/docs/udm-2.1.1/spec/Struktura UDM 2.1.1.xlsx'
SVG_DIR = ROOT / 'jvf_parser/docs/udm-2.1.1/knihovny/SVG'
OUT_TS = ROOT / 'jvf_parser/src/udm-2.1.1/generated/styles.ts'
OUT_SVG = ROOT / 'jvf_viewer/public/symboly/udm'
SVG_PREFIX = 'Knihovna symbolu_UDM 2_'

WIDTH_MM = {'Pomocná': 0.13, 'Základní': 0.25, 'Tučná': 0.7}
# 1 papírový px (96 dpi) = 25,4/96 mm; viewer: 1 SVG-px = 0,01 mm.
SVG_SCALE = (25.4 / 96) / 0.01
LIST_RE = re.compile(r'^(ckz|c|ost)_')
HEX_RE = re.compile(r'^#[0-9A-Fa-f]{6}$')
BLACK = '#000000'

# Čárkování (mm papíru při 1:500) změřené ze vzorníku ČKZ — viz docstring.
LINE_PATTERNS = Path(__file__).resolve().parent / 'line-patterns.json'
DASH_MM: dict[str, list[float] | None] = {
    name: v['dashMm'] for name, v in json.loads(LINE_PATTERNS.read_text(encoding='utf-8')).items()
}


def dash_for(pattern: str) -> list[float] | None:
    if pattern in DASH_MM:
        return DASH_MM[pattern]
    print(f'  WARN: vzor linie {pattern} není ve vzorníku → plná', file=sys.stderr)
    return None


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
    """UDM barva → barva pro světlý podklad (bílá → černá, světlé ztmavit)."""
    c = hex_.upper()
    if c == '#FFFFFF':
        return BLACK
    r, g, b = (int(c[i:i + 2], 16) for i in (1, 3, 5))
    if (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.6:
        r, g, b = (round(x * 0.65) for x in (r, g, b))
    return f'#{r:02x}{g:02x}{b:02x}'


def ended(row: dict[str, str]) -> bool:
    return row.get('Verze UDM', '').startswith('končí')


def appearance(row: dict[str, str]) -> tuple[dict, dict[str, str]]:
    """
    Řádek (objekt / položka číselníku) → (pevný vzhled, {složka: název číselníku}).
    Složky: color, widthMm, dashMm, symbol.
    """
    fixed: dict = {}
    lists: dict[str, str] = {}
    barva, tl, vzor, sym = (row.get(k, '') for k in ('Barva', 'Tloušťka', 'Vzor linie', 'Symbol'))
    if HEX_RE.match(barva):
        fixed['color'] = color(barva)
    elif LIST_RE.match(barva):
        lists['color'] = barva
    if tl in WIDTH_MM:
        fixed['widthMm'] = WIDTH_MM[tl]
    elif LIST_RE.match(tl):
        lists['widthMm'] = tl
    if vzor and vzor != 'x':
        if LIST_RE.match(vzor):
            lists['dashMm'] = vzor
        else:
            d = dash_for(vzor)
            if d:
                fixed['dashMm'] = d
    if sym and sym != 'x':
        if LIST_RE.match(sym):
            lists['symbol'] = sym
        else:
            fixed['symbol'] = sym
    return fixed, lists


def main(svg_dir: Path) -> None:
    s = read_sheets(XLSX)
    items: dict[str, dict[str, dict]] = {}  # číselník → ID položky → pevný vzhled
    for r in s['ciselniky']:
        if ended(r):
            continue
        fixed, _ = appearance(r)
        items.setdefault(r.get('Čiselnik', ''), {})[r.get('ID', '')] = fixed

    list_attr: dict[tuple[str, str, str], str] = {}
    for r in s['atributy']:
        key = (r.get('Kód', ''), r.get('Sufix', ''), r.get('Název číselníku', ''))
        list_attr.setdefault(key, r.get('Název atributu', ''))

    styles: dict[str, dict] = {}
    combos: set[tuple[str, str]] = set()  # (symbol, barva) pro SVG
    unresolved = 0
    for r in s['objekty']:
        code, sufix = r.get('Kód', ''), r.get('Sufix', '')
        if not code or ended(r):
            continue
        # xlsx drží kódy DTM jako čísla (bez úvodní nuly) → doplnit na 10 číslic.
        key = f'{code.zfill(10)}-{int(sufix):02d}'
        if key in styles:
            continue
        base, lists = appearance(r)
        # číselník → atribut objektu; pravidla seskupená podle atributu
        rules: dict[str, dict[str, dict]] = {}
        for aspect, lst in lists.items():
            # Definiční body mají vzhled v číselníku `…_db`, atribut ale
            # odkazuje na číselník bez přípony (stejné kódy položek).
            attr = list_attr.get((code, sufix, lst)) or list_attr.get(
                (code, sufix, lst.removesuffix('_db'))
            )
            if lst not in items and lst.endswith('_db') and lst.removesuffix('_db') in items:
                # Číselník def. bodu bez vlastních položek → položky základního
                # číselníku se symbolem def. bodu (AAAA-1-CCC → AAAA-4-CCC).
                items[lst] = {
                    item_id: {
                        **app,
                        **({'symbol': re.sub(r'^(\d{4})-1-', r'\1-4-', app['symbol'])}
                           if 'symbol' in app else {}),
                    }
                    for item_id, app in items[lst.removesuffix('_db')].items()
                }
            if not attr or lst not in items:
                unresolved += 1
                print(f'  WARN: {key} {aspect}: číselník {lst} '
                      f'{"bez atributu" if not attr else "bez položek"}', file=sys.stderr)
                continue
            for item_id, app in items[lst].items():
                if aspect in app:
                    rules.setdefault(attr, {}).setdefault(item_id, {})[aspect] = app[aspect]
        entry: dict = {'base': base}
        if rules:
            entry['rules'] = [{'attr': a, 'values': v} for a, v in sorted(rules.items())]
        styles[key] = entry

        # Kombinace symbol × barva, které se mohou v mapě objevit.
        symbols = {base['symbol']} if 'symbol' in base else set()
        colors = {base.get('color', BLACK), BLACK}
        for rule in entry.get('rules', []):
            for app in rule['values'].values():
                if 'symbol' in app:
                    symbols.add(app['symbol'])
                if 'color' in app:
                    colors.add(app['color'])
        combos.update((sym, c) for sym in symbols for c in colors)

    # --- SVG symboly ---------------------------------------------------------
    if OUT_SVG.exists():
        shutil.rmtree(OUT_SVG)
    OUT_SVG.mkdir(parents=True)
    missing = set()
    for sym, c in sorted(combos):
        src = svg_dir / f'{SVG_PREFIX}{sym}.svg'
        if not src.exists():
            missing.add(sym)
            continue
        svg = src.read_text(encoding='utf-8')
        m = re.search(r'<svg\b[^>]*\bwidth="([\d.]+)"[^>]*\bheight="([\d.]+)"', svg)
        if m:
            w, h = float(m.group(1)), float(m.group(2))
            svg = re.sub(
                r'(<svg\b[^>]*?)\bwidth="[\d.]+"\s+height="[\d.]+"',
                rf'\1width="{w * SVG_SCALE:.3f}" height="{h * SVG_SCALE:.3f}" viewBox="0 0 {w} {h}"',
                svg, count=1,
            )
        svg = re.sub(r'#000000\b', c, svg, flags=re.I)
        (OUT_SVG / f'{sym}_{c[1:]}.svg').write_text(svg, encoding='utf-8')

    # --- TS ------------------------------------------------------------------
    lines = [
        '// Auto-generated from „Struktura UDM 2.1.1.xlsx" + knihovna symbolů (ČKZ) — DO NOT EDIT',
        '// Regenerate: python3 scripts/udm/build-udm-styles.py',
        '//',
        '// Symbologie UDM pro všechny objekty (DTM i 94…), klíč `<code_base>-<suffix>`.',
        '// Barvy upravené pro světlý podklad; čárkování změřené ze vzorníku ČKZ (line-patterns.json).',
        '',
        '/** Vzhled objektu nebo položky číselníku dle UDM. */',
        'export interface UdmAppearance {',
        '  color?: string;',
        '  /** Tloušťka čáry v mm (papír, 1:500). */',
        '  widthMm?: number;',
        '  /** Čárkování v mm (papír, 1:500) dle vzorníku UDM (bez vložených značek). */',
        '  dashMm?: number[];',
        '  /** Kód symbolu `AAAA-B[-CCC]` (SVG v public/symboly/udm/). */',
        '  symbol?: string;',
        '}',
        '',
        '/** Vzhled podle hodnoty atributu (číselníku): `values[kód] → vzhled`. */',
        'export interface UdmAttrRule {',
        '  attr: string;',
        '  values: Record<string, UdmAppearance>;',
        '}',
        '',
        'export interface UdmObjectStyle {',
        '  base: UdmAppearance;',
        '  rules?: UdmAttrRule[];',
        '}',
        '',
        'export const UDM_STYLES: Record<string, UdmObjectStyle> = {',
    ]
    for key, entry in styles.items():
        lines.append(f'  {json.dumps(key)}: {json.dumps(entry, ensure_ascii=False, separators=(",", ":"))},')
    lines += ['};', '']
    OUT_TS.write_text('\n'.join(lines), encoding='utf-8')

    with_rules = sum(1 for e in styles.values() if 'rules' in e)
    print(f'{len(styles)} objektů ({with_rules} s pravidly podle číselníku), '
          f'{len(combos) - len(missing)} SVG, nevyřešených vazeb číselník→atribut: {unresolved}, '
          f'chybějících symbolů: {len(missing)} {sorted(missing)[:10]}')


if __name__ == '__main__':
    main(Path(sys.argv[1]) if len(sys.argv) > 1 else SVG_DIR)
