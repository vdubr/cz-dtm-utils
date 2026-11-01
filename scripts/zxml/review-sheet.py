#!/usr/bin/env python3
"""
Kontrolní přehled vektorizace značek MOZeK (HTML pro kontrolu očima).

Tabulka 1: bodové značky — zdrojový PNG vedle vektorizovaného SVG, příznaky
(lowIou, oddSize, antialiased…), shoda IoU, měřítko a použití (objekt,
atribut = hodnota, strana fotokatalogu).
Tabulka 2: vzory linií — zdrojový PNG vedle čáry SVG se `stroke-dasharray`
podle změřeného dashMm (ve stejném měřítku px/mm), příznaky značek/souběhu.

Spuštění z rootu repa:
    python3 scripts/zxml/review-sheet.py [--out /tmp/zxml-review/index.html] [--px-per-mm 5.5]
"""
import argparse
import base64
import html
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from zxml_common import KNIHOVNY, LINE_PATTERNS, MANIFEST, MOZEK, load_json  # noqa: E402

CSS = """
body{font:13px/1.4 system-ui,sans-serif;margin:16px;background:#fafafa;color:#222}
table{border-collapse:collapse;margin-bottom:32px}
td,th{border:1px solid #ccc;padding:4px 6px;vertical-align:top;background:#fff}
th{background:#eee;position:sticky;top:0}
.img{max-width:300px;max-height:130px}
.flag{display:inline-block;padding:0 4px;margin:1px;border-radius:3px;background:#ddd;font-size:11px}
.flag.lowIou,.flag.lineOnPoint,.flag.photoLike{background:#f8b4b4}
.uses{font-size:11px;max-width:520px}
code{font-size:11px}
"""


def png_tag(path: Path, cls: str = 'img') -> str:
    data = base64.b64encode(path.read_bytes()).decode()
    return f'<img class="{cls}" src="data:image/png;base64,{data}">'


def flags_html(flags) -> str:
    return ''.join(f'<span class="flag {f}">{f}</span>' for f in flags)


def uses_html(uses) -> str:
    out = []
    for u in uses[:8]:
        ctx = (f'{html.escape(u["attrName"] or "")} = {u["valueCode"]}: {html.escape(u["valueName"] or "")}'
               if u['context'] == 'value' else u['context'])
        out.append(f'<code>{u["codeBase"]}-{u["suffix"]}</code> {html.escape(u["objectName"])} '
                   f'[{u["origin"]}-{u["obsahovaCast"]}] — {ctx} (str. {u["page"]}, var. {u["variant"]})')
    if len(uses) > 8:
        out.append(f'… a dalších {len(uses) - 8}')
    return '<br>'.join(out)


def main() -> None:
    ap = argparse.ArgumentParser(description='HTML přehled vektorizace značek MOZeK')
    ap.add_argument('--out', default='/tmp/zxml-review/index.html')
    ap.add_argument('--px-per-mm', type=float, default=5.5)
    args = ap.parse_args()
    manifest = load_json(MANIFEST)
    patterns = load_json(LINE_PATTERNS) if LINE_PATTERNS.exists() else {}
    syms = manifest['symbols']

    points = sorted(((k, s) for k, s in syms.items() if s['kind'] == 'point'),
                    key=lambda kv: (kv[1].get('iou', 2), kv[0]))
    rows = []
    for sid, s in points:
        src = png_tag(MOZEK / s['png']) if s['png'] else '<i>(fotografie / bez PNG)</i>'
        svg = ''
        if s.get('svg'):
            svg = (KNIHOVNY / s['svg']).read_text(encoding='utf-8')
            svg = re.sub(r'<title>.*?</title>', '', svg)
            svg = re.sub(r'\swidth="[\d.]+"\s+height="[\d.]+"', ' height="120" style="max-width:300px"', svg, count=1)
        rows.append(
            f'<tr><td><code>{sid}</code><br>{s["width"]}×{s["height"]}<br>{flags_html(s["flags"])}'
            f'<br>IoU {s.get("iou", "–")}<br>K {s.get("scale", "–")}, tah {s.get("strokePx", "–")} px</td>'
            f'<td>{src}</td><td>{svg}</td><td class="uses">{uses_html(s["uses"])}</td></tr>')

    lines = sorted(((k, s) for k, s in syms.items() if s['kind'] == 'line'), key=lambda kv: kv[0])
    lrows = []
    for sid, s in lines:
        lp = patterns.get(sid, {})
        w = s['width']
        dash = lp.get('dashMm')
        da = (f' stroke-dasharray="{" ".join(f"{v * args.px_per_mm:.1f}" for v in dash)}"' if dash else '')
        sw = 2 if lp.get('widthMm') == 0.5 else 1
        line_svg = (f'<svg width="{w}" height="20" viewBox="0 0 {w} 20" style="max-width:600px">'
                    f'<line x1="0" y1="10" x2="{w}" y2="10" stroke="#000" stroke-width="{sw}"{da}/></svg>')
        src = png_tag(MOZEK / s['png'], 'img" style="max-width:600px') if s['png'] else ''
        lrows.append(
            f'<tr><td><code>{sid}</code><br>{s["width"]}×{s["height"]}<br>{flags_html(s["flags"])}<br>'
            f'dashMm {dash}<br>widthMm {lp.get("widthMm")}<br>'
            f'{flags_html([f for f in ("markers", "parallel") if lp.get(f)])}</td>'
            f'<td>{src}<br>{line_svg}</td><td class="uses">{uses_html(s["uses"])}</td></tr>')

    review = ''.join(f'<li>str. {r["page"]}: <code>{r["symbol"]}</code> — {html.escape(r["issue"])}</li>'
                     for r in manifest.get('review', []))
    doc = (f'<!doctype html><html lang="cs"><head><meta charset="utf-8"><title>Značky MOZeK — kontrola</title>'
           f'<style>{CSS}</style></head><body>'
           f'<h1>Značky MOZeK — kontrola vektorizace</h1>'
           f'<p>Zdroj: {html.escape(manifest.get("source", ""))}. Bodových značek {len(points)}, '
           f'vzorů linií {len(lines)}. Řazeno podle IoU (nejhorší nahoře).</p>'
           f'<h2>K revizi</h2><ul>{review}</ul>'
           f'<h2>Bodové značky</h2><table><tr><th>id</th><th>PNG (zdroj)</th><th>SVG</th><th>použití</th></tr>'
           f'{"".join(rows)}</table>'
           f'<h2>Vzory linií</h2><p>Čára SVG: čárkování dashMm × {args.px_per_mm} px/mm '
           f'(stejné měřítko jako vzorek).</p>'
           f'<table><tr><th>id</th><th>PNG / SVG</th><th>použití</th></tr>{"".join(lrows)}</table>'
           f'</body></html>')
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(doc, encoding='utf-8')
    print(f'{len(points)} značek, {len(lines)} linií → {out} ({out.stat().st_size // 1024} kB)')


if __name__ == '__main__':
    main()
