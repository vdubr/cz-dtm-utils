#!/usr/bin/env python3
"""
Geometrie značek vložených do linií (Katalog DTM ČR, `*_l_*.svg`) pro náhledy
ve vieweru: poměr stran a úroveň čáry, na kterou má značka navazovat.

Tloušťka vystupující čáry slouží k tomu, aby úseky linie vedle značky měly
stejnou tloušťku jako čára ve značce.

Úroveň čáry = y bodu s největším x mezi tahy (stroke) — tam čára opouští
značku vpravo (blesk elektrického vedení na 106/187, zub plynovodu nahoře
na 6/162, šipka vodovodu uprostřed). Značky bez tahu (text „S I", puntík
zábradlí, vyplněné tvary) a vzory s víc čarami končícími vpravo sedí na
čáře středem.

Spuštění (z kořene repozitáře):
    python3 scripts/viewer/build-line-symbols.py
→ jvf_viewer/src/ui/lineSymbols.generated.ts
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SYMBOLY = ROOT / 'jvf_viewer' / 'public' / 'symboly'
OUT = ROOT / 'jvf_viewer' / 'src' / 'ui' / 'lineSymbols.generated.ts'

NUM = re.compile(r'-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?')
CMD = re.compile(r'([MmLlHhVvAaZz])([^MmLlHhVvAaZz]*)')


def path_points(d: str) -> list[tuple[float, float]]:
    """Body cesty (koncové body úseků) — příkazy M L H V A Z."""
    pts: list[tuple[float, float]] = []
    x = y = sx = sy = 0.0
    for cmd, args in CMD.findall(d):
        n = [float(v) for v in NUM.findall(args)]
        rel = cmd.islower()
        c = cmd.upper()
        if c == 'Z':
            x, y = sx, sy
            continue
        step = {'M': 2, 'L': 2, 'H': 1, 'V': 1, 'A': 7}[c]
        for i in range(0, len(n) - step + 1, step):
            a = n[i:i + step]
            if c in ('M', 'L'):
                x, y = (x + a[0], y + a[1]) if rel else (a[0], a[1])
                if c == 'M' and i == 0:
                    sx, sy = x, y
            elif c == 'H':
                x = x + a[0] if rel else a[0]
            elif c == 'V':
                y = y + a[0] if rel else a[0]
            else:  # A: rx ry rot large sweep x y
                x, y = (x + a[5], y + a[6]) if rel else (a[5], a[6])
            pts.append((x, y))
            if c == 'M':
                c = 'L'  # další dvojice po M jsou L
    return pts


def metrics(svg: str) -> tuple[float, float, float]:
    """Poměr stran, úroveň čáry a tloušťka vystupující čáry (obojí / výška)."""
    vb = re.search(r'viewBox="([^"]+)"', svg)
    _, _, w, h = (float(v) for v in vb.group(1).split())
    pts: list[tuple[float, float, float]] = []  # x, y, tloušťka tahu
    for tag in re.findall(r'<path\b[^>]*>', svg):
        if 'stroke=' in tag and 'fill="none"' in tag:
            d = re.search(r'\sd="([^"]+)"', tag)
            sw = re.search(r'stroke-width="([\d.]+)"', tag)
            if d:
                width = float(sw.group(1)) if sw else 1.0
                pts += [(x, y, width) for x, y in path_points(d.group(1))]
    if not pts:
        return w / h, 0.5, 0.0
    right = max(p[0] for p in pts)
    ends = [p for p in pts if right - p[0] < 1]
    # Víc čar končících vpravo (dvojitá linie kanálu, kolejiště, obdélník
    # potrubní pošty) = vzor celé čáry, ne značka v mezeře → střed.
    if len({round(p[1], 1) for p in ends}) != 1:
        return w / h, 0.5, max(p[2] for p in ends) / h
    return w / h, ends[0][1] / h, max(p[2] for p in ends) / h


def main() -> None:
    rows = []
    for f in sorted(SYMBOLY.glob('*_l_*.svg')):
        aspect, baseline, stroke = metrics(f.read_text(encoding='utf-8'))
        rows.append(f"  '{f.name}': {{ aspect: {aspect:.3f}, baseline: {baseline:.3f}, stroke: {stroke:.3f} }},")
    OUT.write_text(
        '// Generováno skriptem scripts/viewer/build-line-symbols.py — neupravovat ručně.\n'
        '//\n'
        '// Značky vložené do linií (Katalog DTM ČR, *_l_*.svg): poměr stran (šířka /\n'
        '// výška), úroveň čáry, na kterou značka navazuje (0 = horní okraj, 1 = dolní),\n'
        '// a tloušťka této čáry vůči výšce značky (0 = značka bez vlastní čáry).\n\n'
        'export interface LineSymbolMetrics {\n'
        '  aspect: number;\n'
        '  baseline: number;\n'
        '  stroke: number;\n'
        '}\n\n'
        'export const LINE_SYMBOLS: Readonly<Record<string, LineSymbolMetrics>> = {\n'
        + '\n'.join(rows)
        + '\n};\n',
        encoding='utf-8',
    )
    print(f'{len(rows)} značek → {OUT.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
