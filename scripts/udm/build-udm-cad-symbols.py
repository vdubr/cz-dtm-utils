#!/usr/bin/env python3
"""
Generátor geometrie symbolů UDM pro export do CAD (balíček jvf-cad).

Vstup: knihovna symbolů ČKZ jvf_parser/docs/udm-2.1.1/knihovny/SVG (SVG v
papírových px při 96 dpi, měřítko 1:500) a seznam symbolů použitých v
jvf_parser/src/udm-2.1.1/generated/styles.ts.

Výstup: jvf_cad/src/generated/symbols.ts — UDM_CAD_SYMBOLS: kód symbolu →
primitiva v METRECH, vkládací bod = střed symbolu, osa Y nahoru:
  ['p', closed, fill, [x, y, bulge, …]]   polylinie (oblouky jako bulge)
  ['c', x, y, r, fill]                    kružnice
  ['e', x, y, rx, ry, rotDeg]             elipsa (rx podél natočené osy X)
  ['t', x, y, výška, rotDeg, text, italic] text, zarovnaný na střed

Knihovna používá jen polyline/polygon/line/circle/ellipse/path (M/L/A/Z)/text
bez vnořených transformací (kromě rotate u elipsy a translate/rotate u textu).
Výplň jen černá (#000000) — bílá (2 výskyty) je pozadí a vynechá se.

Spuštění z rootu repa:  python3 scripts/udm/build-udm-cad-symbols.py
"""
import json
import math
import re
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SVG_DIR = ROOT / 'jvf_parser/docs/udm-2.1.1/knihovny/SVG'
STYLES = ROOT / 'jvf_parser/src/udm-2.1.1/generated/styles.ts'
OUT = ROOT / 'jvf_cad/src/generated/symbols.ts'
PREFIX = 'Knihovna symbolu_UDM 2_'
NS = '{http://www.w3.org/2000/svg}'
# 1 px (96 dpi) = 25,4/96 mm papíru; 1 mm papíru = 0,5 m při 1:500.
K = 25.4 / 96 * 0.5
# Výška písmen (DXF TEXT = výška verzálek) ≈ 0,7 × velikost fontu.
CAP_HEIGHT = 0.7


def r4(v: float) -> float:
    return round(v, 4)


def style_of(el) -> dict[str, str]:
    st = {}
    for part in (el.get('style') or '').split(';'):
        if ':' in part:
            k, v = part.split(':', 1)
            st[k.strip()] = v.strip()
    return st


def is_fill(el) -> bool:
    return style_of(el).get('fill', 'none').lower() == '#000000'


def invisible(el) -> bool:
    return style_of(el).get('stroke-opacity') == '0'


def parse_points(s: str) -> list[tuple[float, float]]:
    nums = [float(n) for n in re.findall(r'-?[\d.]+(?:e-?\d+)?', s)]
    return list(zip(nums[0::2], nums[1::2]))


def arc_bulge(p1, p2, rx, ry, large, sweep) -> float:
    """SVG oblouk (kruhový) → DXF bulge v souřadnicích s osou Y nahoru."""
    r = (rx + ry) / 2
    d = math.dist(p1, p2)
    if d == 0:
        return 0.0
    r = max(r, d / 2)
    theta = 2 * math.asin(min(1.0, d / (2 * r)))
    if large:
        theta = 2 * math.pi - theta
    # sweep=1 = kladný úhel v SVG (osa Y dolů) → po převrácení Y proti směru
    # hodinových ručiček → kladný bulge.
    return math.tan(theta / 4) * (1 if sweep else -1)


def parse_path(d: str):
    """Absolutní M/L/A/Z → seznam (vrcholy [(x, y, bulge)], closed)."""
    tokens = re.findall(r'[MLAZmlaz]|-?[\d.]+(?:e-?\d+)?', d)
    subpaths, cur, closed, i, cmd = [], [], False, 0, None
    while i < len(tokens):
        t = tokens[i]
        if t.isalpha():
            cmd = t.upper()
            i += 1
            if cmd == 'Z':
                closed = True
                subpaths.append((cur, closed))
                cur, closed = [], False
            continue
        if cmd == 'M':
            if cur:
                subpaths.append((cur, closed))
            cur, closed = [[float(tokens[i]), float(tokens[i + 1]), 0.0]], False
            i += 2
            cmd = 'L'
        elif cmd == 'L':
            cur.append([float(tokens[i]), float(tokens[i + 1]), 0.0])
            i += 2
        elif cmd == 'A':
            rx, ry, _rot, large, sweep, x, y = (float(v) for v in tokens[i:i + 7])
            p1 = (cur[-1][0], cur[-1][1])
            cur[-1][2] = arc_bulge(p1, (x, y), rx, ry, int(large), int(sweep))
            cur.append([x, y, 0.0])
            i += 7
        else:
            i += 1
    if cur:
        subpaths.append((cur, closed))
    return subpaths


def convert(svg_path: Path) -> list:
    root = ET.parse(svg_path).getroot()
    w, h = float(root.get('width')), float(root.get('height'))

    def X(x: float) -> float:
        return r4((x - w / 2) * K)

    def Y(y: float) -> float:
        return r4((h / 2 - y) * K)

    prims = []
    for el in root.iter():
        tag = el.tag.replace(NS, '')
        if tag in ('polygon', 'polyline') and not invisible(el):
            pts = parse_points(el.get('points', ''))
            flat = [v for x, y in pts for v in (X(x), Y(y), 0)]
            prims.append(['p', 1 if tag == 'polygon' else 0, 1 if is_fill(el) else 0, flat])
        elif tag == 'line':
            x1, y1, x2, y2 = (float(el.get(a)) for a in ('x1', 'y1', 'x2', 'y2'))
            prims.append(['p', 0, 0, [X(x1), Y(y1), 0, X(x2), Y(y2), 0]])
        elif tag == 'circle':
            prims.append(['c', X(float(el.get('cx'))), Y(float(el.get('cy'))),
                          r4(float(el.get('r')) * K), 1 if is_fill(el) else 0])
        elif tag == 'ellipse':
            rot = 0.0
            m = re.search(r'rotate\(\s*(-?[\d.]+)', el.get('transform', ''))
            if m:
                rot = -float(m.group(1))
            prims.append(['e', X(float(el.get('cx'))), Y(float(el.get('cy'))),
                          r4(float(el.get('rx')) * K), r4(float(el.get('ry')) * K), r4(rot)])
        elif tag == 'path':
            for verts, closed in parse_path(el.get('d', '')):
                flat = [v for x, y, b in verts for v in (X(x), Y(y), r4(b))]
                prims.append(['p', 1 if closed else 0, 1 if is_fill(el) else 0, flat])
        elif tag == 'text':
            x, y = float(el.get('x', 0)), float(el.get('y', 0))
            tr = el.get('transform', '')
            ang = 0.0
            m = re.search(r'rotate\(\s*(-?[\d.]+)', tr)
            if m:
                ang = float(m.group(1))
                a = math.radians(ang)
                x, y = x * math.cos(a) - y * math.sin(a), x * math.sin(a) + y * math.cos(a)
            m = re.search(r'translate\(\s*(-?[\d.]+)[ ,]+(-?[\d.]+)', tr)
            if m:
                x, y = x + float(m.group(1)), y + float(m.group(2))
            size = float(el.get('font-size', '10'))
            prims.append(['t', X(x), Y(y), r4(size * K * CAP_HEIGHT), r4(-ang), ''.join(el.itertext()),
                          1 if el.get('font-style') == 'italic' else 0])
    return prims


def main() -> None:
    used = sorted(set(re.findall(r'"symbol":"([^"]+)"', STYLES.read_text(encoding='utf-8'))))
    symbols, missing = {}, []
    for code in used:
        f = SVG_DIR / f'{PREFIX}{code}.svg'
        if not f.exists():
            missing.append(code)
            continue
        symbols[code] = convert(f)
    lines = [
        '// Auto-generated by scripts/udm/build-udm-cad-symbols.py — DO NOT EDIT',
        '//',
        '// Geometrie symbolů UDM (knihovna ČKZ) pro bloky v CAD: metry, střed =',
        '// vkládací bod, osa Y nahoru. Viz typ CadSymbolPrimitive v ../symbols.ts.',
        '',
        "import type { CadSymbolPrimitive } from '../symbols.js';",
        '',
        'export const UDM_CAD_SYMBOLS: Record<string, CadSymbolPrimitive[]> = {',
    ]
    for code, prims in symbols.items():
        lines.append(f'  {json.dumps(code)}: {json.dumps(prims, ensure_ascii=False, separators=(",", ":"))},')
    lines += ['};', '']
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text('\n'.join(lines), encoding='utf-8')
    print(f'{len(symbols)} symbolů → {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} kB), chybí: {missing}')


if __name__ == '__main__':
    main()
