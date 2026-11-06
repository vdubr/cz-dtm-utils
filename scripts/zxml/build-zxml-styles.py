#!/usr/bin/env python3
"""
Generátor symbologie ŽXML (DTMŽ, Správa železnic) z oficiálních stylů SLD.

Vstupy (v repozitáři):
  - jvf_parser/docs/zxml-1.5.1.6/sld/sz-styles.json  styly SLD objektů SŽ z exportu
    LDM (`istem_export_LDM_*.sqlite`, výtah `scripts/zxml/extract-sld.py`)
  - jvf_parser/docs/zxml-1.5.1.6/ldm/attribute-map.csv  kódy hodnot LDM ↔ ŽXML
  - jvf_parser/docs/zxml-1.5.1.6/ldm/ldm-objects.csv    objekty LDM (SŽ bez SLD)

Výstupy:
  - jvf_parser/src/zxml-1.5.1.6/generated/styles.ts a (shodný)
    jvf_parser/src/zxml-1.4.2.1/generated/styles.ts — ZXML_STYLES jen pro objekty
    SŽ (`999…`); objekty JVF kreslí viewer i CAD Katalogem DTM ČR (ISTEM je
    kreslí stejnými značkami a barvami)
  - jvf_parser/docs/zxml-1.5.1.6/sld/SVG/<id>.svg — značky normalizované pro CAD
    (jen <path>, transformace rozpuštěné, width/height v 0,01 mm papíru)
  - jvf_viewer/public/symboly/zxml/<id>_<barva>.svg — tytéž značky pro viewer
    (rámec souměrný kolem vkládacího bodu) a nahled/<id>_<barva>.svg — náhled
    oříznutý na kresbu (legenda znaků, panely)

Převod SLD → `ObjectStyle`:
  - pravidla pro podrobné měřítko (`TARGET_SCALE`; když žádné nepokrývá, ta
    s nejmenším MinScaleDenominator),
  - pravidlo bez filtru → `base`; filtr s jednou rovností → `rules`
    (atribut = XML element, hodnota = kód v ŽXML); složený filtr (And, Or,
    NotEqualTo) → `cases` (první shoda),
  - LineSymbolizer → barva, tloušťka, čárkování (mm papíru jako Katalog DTM ČR);
    druhá čára se vzorem příček (plot, úhelník) → `ticksMm`; souběžné čáry
    (PerpendicularOffset), značky v linii (GraphicStroke) a značky na koncích
    linie se nepřebírají,
  - PointSymbolizer → značka (inline SVG nebo WellKnownName), výška
    `Size / SIZE_PER_MM` mm, natočení `fixedRotation(<atribut>)` → `rotationAttr`,
  - PolygonSymbolizer → výplň a obrys; TextSymbolizer se nepřebírá.
Barva vzhledu se značkou = převažující barva značky (SVG nese vlastní barvy).

Spuštění z rootu repa (Python s balíkem svgelements):
    python3 scripts/zxml/build-zxml-styles.py
"""
import hashlib
import io
import json
import math
import re
import shutil
import sys
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from itertools import product
from pathlib import Path

from svgelements import SVG, Path as SvgPath, Shape

sys.path.insert(0, str(Path(__file__).resolve().parent))
from zxml_common import ATTR_MAP, DOCS, LDM_OBJECTS, ROOT, read_csv  # noqa: E402

SLD_JSON = DOCS / 'sld' / 'sz-styles.json'
OUT_SVG_DOCS = DOCS / 'sld' / 'SVG'
OUT_SVG = ROOT / 'jvf_viewer/public/symboly/zxml'
OUT_TS = [ROOT / 'jvf_parser/src/zxml-1.5.1.6/generated/styles.ts',
          ROOT / 'jvf_parser/src/zxml-1.4.2.1/generated/styles.ts']
BLACK = '#000000'
BASE_WIDTH = 0.25
# Měřítko, pro které se vybírají pravidla SLD (podrobné zobrazení vieweru).
TARGET_SCALE = 400
# `Size` značky v SLD je zobrazovací velikost portálu, ne mm: u objektů JVF
# odpovídá značkám Katalogu DTM ČR v poměru ~1,53 (medián 48 párů, např.
# Size 4 ↔ 2,62 mm) — výška značky v mm papíru = Size / SIZE_PER_MM.
SIZE_PER_MM = 1.53
# Vzor příček (shodně s Katalogem, katalog/resolve.ts isTickPattern).
MAX_TICK_MM = 0.5

stats: Counter = Counter()


def warn(msg: str) -> None:
    print(f'  WARN: {msg}', file=sys.stderr)


def local(tag: str) -> str:
    return tag.split('}')[-1]


def child(el, name: str):
    return next((c for c in el if local(c.tag) == name), None)


def children(el, name: str) -> list:
    return [c for c in el if local(c.tag) == name]


def svg_params(el) -> dict[str, str]:
    """SvgParameter / CssParameter elementu Stroke / Fill."""
    if el is None:
        return {}
    return {p.get('name'): (p.text or '').strip() for p in el
            if local(p.tag) in ('SvgParameter', 'CssParameter')}


def norm_hex(c: str | None) -> str | None:
    c = (c or '').strip().lower()
    if re.fullmatch(r'#[0-9a-f]{3}', c):
        c = '#' + ''.join(ch * 2 for ch in c[1:])
    return c if re.fullmatch(r'#[0-9a-f]{6}', c) else None


def nums(s: str) -> list[float]:
    return [float(v) for v in re.split(r'[\s,]+', s.strip()) if v]


def is_ticks(dash: list[float] | None) -> bool:
    if not dash or len(dash) < 2:
        return False
    return max(dash[0::2]) < MAX_TICK_MM and min(dash[1::2]) >= 10 * MAX_TICK_MM


# --- filtry -------------------------------------------------------------------------


def parse_filter(el) -> list[list[tuple[str, str, str]]] | None:
    """Filtr SLD → disjunkce konjunkcí [(atribut KOD, 'eq'|'ne', hodnota)], None = nepodporovaný."""
    tag = local(el.tag)
    if tag in ('PropertyIsEqualTo', 'PropertyIsNotEqualTo'):
        prop, lit = child(el, 'PropertyName'), child(el, 'Literal')
        if prop is None or lit is None:
            return None
        op = 'eq' if tag == 'PropertyIsEqualTo' else 'ne'
        return [[((prop.text or '').strip(), op, (lit.text or '').strip())]]
    if tag in ('And', 'Or'):
        parts = [parse_filter(c) for c in el]
        if any(p is None for p in parts):
            return None
        if tag == 'Or':
            return [conj for p in parts for conj in p]
        return [sum(combo, []) for combo in product(*parts)]
    return None


# --- značky -------------------------------------------------------------------------


def fmt(v: float, dec: int) -> str:
    s = f'{v:.{dec}f}'.rstrip('0').rstrip('.')
    return '0' if s in ('-0', '') else s


def paint(c) -> str | None:
    """Barva svgelements → '#rrggbb', None = žádná / průhledná."""
    if c is None or c.value is None or c.alpha == 0:
        return None
    return c.hexrgb.lower()


Box = tuple[float, float, float, float]


def normalize_svg(svg_text: str) -> tuple[str, float, float, Counter, Box] | None:
    """Inline SVG → (tělo z <path> v souřadnicích viewBoxu od 0, šířka, výška, barvy,
    obálka kresby i s tahy [x0, y0, x1, y1])."""
    root = ET.fromstring(svg_text)
    vb = root.get('viewBox')
    if vb:
        x0, y0, vw, vh = nums(vb)
    else:
        x0, y0 = 0.0, 0.0
        vw = float(re.sub(r'[a-z%]+$', '', root.get('width', '0')))
        vh = float(re.sub(r'[a-z%]+$', '', root.get('height', '0')))
    if vw <= 0 or vh <= 0:
        return None
    # Rámec = viewBox v uživatelských jednotkách (bez přepočtu na px), počátek 0.
    root.set('viewBox', f'{x0} {y0} {vw} {vh}')
    root.set('width', str(vw))
    root.set('height', str(vh))
    root.attrib.pop('preserveAspectRatio', None)
    doc = SVG.parse(io.StringIO(ET.tostring(root, encoding='unicode')), reify=True)
    dec = max(1, 4 - math.floor(math.log10(max(vw, vh))))
    colors: Counter = Counter()
    out = []
    box = [math.inf, math.inf, -math.inf, -math.inf]
    for el in doc.elements():
        if not isinstance(el, Shape):
            continue
        path = SvgPath(el)
        path.reify()
        if len(path) == 0:
            continue
        fill, stroke = paint(el.fill), paint(el.stroke)
        if not fill and not stroke:
            continue
        d = re.sub(r'-?\d+(?:\.\d+)?(?:e-?\d+)?', lambda m: fmt(float(m.group(0)), dec), path.d())
        attrs = [f'd="{d}"', f'fill="{fill or "none"}"']
        if stroke:
            sw = getattr(el, 'implicit_stroke_width', None) or el.stroke_width or 1.0
            attrs += [f'stroke="{stroke}"', f'stroke-width="{fmt(sw, dec + 1)}"',
                      'stroke-linecap="round"', 'stroke-linejoin="round"']
        out.append(f'<path {" ".join(attrs)}/>')
        # Bílé prvky (masky, neviditelné rámečky — i mimo viewBox, kde je
        # zdroj ořízne) do obálky kresby nepatří.
        visible = {c for c in (fill, stroke) if c and c != '#ffffff'}
        bb = el.bbox(with_stroke=bool(stroke)) if visible else None
        if bb:
            box = [min(box[0], bb[0]), min(box[1], bb[1]), max(box[2], bb[2]), max(box[3], bb[3])]
        for c in (fill, stroke):
            if c and c != '#ffffff':
                colors[c] += 1
    if not out:
        return None
    if box[0] > box[2]:
        box = [0.0, 0.0, vw, vh]
    return ''.join(out), vw, vh, colors, (box[0], box[1], box[2], box[3])


MARK_SHAPES = {
    'circle': 'M95 50A45 45 0 1 1 5 50A45 45 0 1 1 95 50Z',
    'square': 'M5 5L95 5L95 95L5 95Z',
    'triangle': 'M50 5L95 92L5 92Z',
}


def mark_svg(mark) -> tuple[str, float, float, Counter, Box]:
    """WellKnownName (circle, square, triangle) → tělo SVG ve viewBoxu 100×100."""
    wkn_el = child(mark, 'WellKnownName')
    wkn = (wkn_el.text or '').strip().lower() if wkn_el is not None else 'square'
    if wkn not in MARK_SHAPES:
        warn(f'WellKnownName {wkn} → čtverec')
        wkn = 'square'
    fill = norm_hex(svg_params(child(mark, 'Fill')).get('fill', '#808080')) if child(mark, 'Fill') is not None else None
    sp = svg_params(child(mark, 'Stroke'))
    stroke = norm_hex(sp.get('stroke', BLACK)) if child(mark, 'Stroke') is not None else None
    attrs = [f'd="{MARK_SHAPES[wkn]}"', f'fill="{fill or "none"}"']
    if stroke:
        attrs += [f'stroke="{stroke}"', 'stroke-width="6"']
    colors = Counter(c for c in (fill, stroke) if c and c != '#ffffff')
    return f'<path {" ".join(attrs)}/>', 100.0, 100.0, colors, (2.0, 2.0, 98.0, 98.0)


symbols: dict[str, str] = {}   # id → normalizované SVG (rozměry v 0,01 mm)
previews: dict[str, str] = {}  # id → náhled oříznutý na kresbu


def symbol_of(graphic) -> tuple[str, str] | None:
    """Graphic → (id značky, převažující barva)."""
    size_el = child(graphic, 'Size')
    try:
        size = float(size_el.text) if size_el is not None else 6.0
    except (TypeError, ValueError):
        warn(f'Size „{size_el.text}" není číslo — 6')
        size = 6.0
    body = None
    eg, mark = child(graphic, 'ExternalGraphic'), child(graphic, 'Mark')
    if eg is not None:
        inline = child(eg, 'InlineContent')
        svg_el = next((c for c in inline if local(c.tag) == 'svg'), None) if inline is not None else None
        if svg_el is None:
            stats['externalGraphicBezSvg'] += 1
            return None
        body = normalize_svg(ET.tostring(svg_el, encoding='unicode'))
    elif mark is not None:
        body = mark_svg(mark)
        stats['mark'] += 1
    if body is None:
        stats['prázdnáZnačka'] += 1
        return None
    paths, vw, vh, colors, (bx0, by0, bx1, by1) = body
    # Rámec: viewBox SLD (vkládací bod = jeho střed), souměrně rozšířený o kresbu,
    # která přesahuje (tahy na okraji viewBoxu by se jinak ořízly napůl).
    cx, cy = vw / 2, vh / 2
    hw = max(cx, cx - bx0, bx1 - cx)
    hh = max(cy, cy - by0, by1 - cy)
    k = size / SIZE_PER_MM * 100 / vh   # jednotek 0,01 mm na jednotku viewBoxu
    dec = max(1, 4 - math.floor(math.log10(max(vw, vh))))
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{fmt(2 * hw * k, 1)}" height="{fmt(2 * hh * k, 1)}" '
           f'viewBox="{fmt(cx - hw, dec)} {fmt(cy - hh, dec)} {fmt(2 * hw, dec)} {fmt(2 * hh, dec)}">{paths}</svg>\n')
    # Náhled (legenda, panely) oříznutý na kresbu — značky SŽ s dokresleným
    # stožárem mají kresbu jen v horní polovině rámce kolem vkládacího bodu.
    pad = 0.04 * max(bx1 - bx0, by1 - by0)
    pw, ph = bx1 - bx0 + 2 * pad, by1 - by0 + 2 * pad
    preview = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{fmt(pw * k, 1)}" height="{fmt(ph * k, 1)}" '
               f'viewBox="{fmt(bx0 - pad, dec)} {fmt(by0 - pad, dec)} {fmt(pw, dec)} {fmt(ph, dec)}">{paths}</svg>\n')
    sid = 'sz-' + hashlib.sha1(svg.encode()).hexdigest()[:8]
    symbols[sid] = svg
    previews[sid] = preview
    return sid, (colors.most_common(1)[0][0] if colors else BLACK)


# --- symbolizéry → vzhled -----------------------------------------------------------


def stroke_app(stroke) -> dict:
    p = svg_params(stroke)
    app: dict = {}
    c = norm_hex(p.get('stroke'))
    if c:
        app['color'] = c
    if p.get('stroke-width'):
        app['widthMm'] = round(float(p['stroke-width']), 3)
    if p.get('stroke-dasharray'):
        dash = [round(v, 3) for v in nums(p['stroke-dasharray'])]
        if len(dash) % 2:
            dash = dash * 2
        app['dashMm'] = dash
    return app


def rule_app(rule, key: str, attrs: dict) -> dict:
    """Symbolizéry jednoho pravidla → Appearance."""
    geom = key.split('-')[1]
    app: dict = {}
    main = None
    for ls in children(rule, 'LineSymbolizer'):
        if child(ls, 'PerpendicularOffset') is not None:
            stats['souběžnáČára'] += 1
            continue
        stroke = child(ls, 'Stroke')
        if stroke is None:
            continue
        if child(stroke, 'GraphicStroke') is not None:
            stats['graphicStroke'] += 1
            continue
        a = stroke_app(stroke)
        if main is None and not is_ticks(a.get('dashMm')):
            main = a
        elif is_ticks(a.get('dashMm')) and 'ticksMm' not in app:
            app['ticksMm'] = a['dashMm']
        else:
            stats['dalšíČára'] += 1
    if main:
        app.update(main)
    for ps in children(rule, 'PolygonSymbolizer'):
        fill = svg_params(child(ps, 'Fill'))
        fc = norm_hex(fill.get('fill'))
        if fc and float(fill.get('fill-opacity') or 1) > 0.15:
            app['fill'] = fc
        for k, v in stroke_app(child(ps, 'Stroke')).items() if child(ps, 'Stroke') is not None else []:
            app.setdefault(k, v)
    for ps in children(rule, 'PointSymbolizer'):
        if child(ps, 'Geometry') is not None:
            stats['značkaNaKoncíchLinie'] += 1
            continue
        if geom == '02':
            stats['bodováZnačkaNaLinii'] += 1
            continue
        graphic = child(ps, 'Graphic')
        sym = symbol_of(graphic) if graphic is not None else None
        if not sym:
            continue
        if 'symbol' in app:
            stats['dalšíZnačka'] += 1
            continue
        app['symbol'], app['color'] = sym
        rot = child(graphic, 'Rotation')
        prop = rot.find('.//PropertyName') if rot is not None else None
        if prop is not None and (prop.text or '').strip() in attrs:
            app['rotationAttr'] = attrs[prop.text.strip()]['xmlLeaf']
    if children(rule, 'TextSymbolizer'):
        stats['text'] += 1
    return app


def scale_range(rule) -> tuple[float, float]:
    mn, mx = child(rule, 'MinScaleDenominator'), child(rule, 'MaxScaleDenominator')
    return (float(mn.text) if mn is not None else 0.0, float(mx.text) if mx is not None else math.inf)


def main() -> None:
    data = json.loads(SLD_JSON.read_text(encoding='utf-8'))
    attrs = data['attributes']
    # (atribut KOD, kód hodnoty LDM) → kód hodnoty v ŽXML
    value_xml = {(r['attrCode'], r['valueCode']): r['valueXml'] for r in read_csv(ATTR_MAP) if r['valueCode']}

    def cond(prop: str, val: str) -> tuple[str, str] | None:
        a = attrs.get(prop)
        if not a or not a['xmlLeaf']:
            return None
        return a['xmlLeaf'], value_xml.get((prop, val), val)

    styles: dict[str, dict] = {}
    for key, obj in data['objects'].items():
        rules = ET.fromstring(obj['sld']).findall('.//Rule')
        chosen = [r for r in rules if scale_range(r)[0] <= TARGET_SCALE < scale_range(r)[1]]
        if not chosen and rules:
            lo = min(scale_range(r)[0] for r in rules)
            chosen = [r for r in rules if scale_range(r)[0] == lo]
            stats['pravidlaMimoMěřítko'] += 1
        base: dict = {}
        by_attr: dict[str, dict[str, dict]] = defaultdict(dict)
        cases: list[dict] = []
        for rule in chosen:
            app = rule_app(rule, key, attrs)
            if not app:
                continue
            flt = child(rule, 'Filter')
            if flt is None or child(rule, 'ElseFilter') is not None:
                for k, v in app.items():
                    base.setdefault(k, v)
                continue
            dnf = parse_filter(next(iter(flt)))
            if dnf is None:
                warn(f'{key}: nepodporovaný filtr {ET.tostring(flt, encoding="unicode")[:120]}')
                stats['nepodporovanýFiltr'] += 1
                continue
            for conj in dnf:
                when: dict[str, str] = {}
                unless: dict[str, str] = {}
                resolved = [cond(prop, val) for prop, _op, val in conj]
                if any(c is None for c in resolved):
                    warn(f'{key}: filtr na neznámý atribut {conj}')
                    stats['neznámýAtribut'] += 1
                    continue
                for (_prop, op, _val), (leaf, val) in zip(conj, resolved):
                    (when if op == 'eq' else unless)[leaf] = val
                if len(when) == 1 and not unless:
                    (a, v), = when.items()
                    by_attr[a].setdefault(v, app)
                else:
                    case: dict = {'when': when}
                    if unless:
                        case['unless'] = unless
                    case['app'] = app
                    cases.append(case)
        if not base and (by_attr or cases):
            # Vzhled bez filtru chybí → základ z první položky (legenda, hladina v CAD).
            first = next(iter(next(iter(by_attr.values())).values())) if by_attr else cases[0]['app']
            base = {k: v for k, v in first.items() if k in ('color', 'widthMm', 'dashMm', 'fill')}
        base.setdefault('color', BLACK)
        base.setdefault('widthMm', BASE_WIDTH)
        style: dict = {'base': base}
        if by_attr:
            style['rules'] = [{'attr': a, 'values': dict(sorted(v.items(), key=lambda kv: (len(kv[0]), kv[0])))}
                              for a, v in sorted(by_attr.items())]
        if cases:
            style['cases'] = cases
        styles[key] = style

    # Objekty SŽ z LDM bez SLD — černá čára.
    for o in read_csv(LDM_OBJECTS):
        key = f'{o["codeBase"]}-{o["suffix"]}'
        if o['codeBase'].startswith('999') and key not in styles:
            styles[key] = {'base': {'color': BLACK, 'widthMm': BASE_WIDTH}}
            stats['bezSLD'] += 1

    # --- SVG ------------------------------------------------------------------------
    used: set[tuple[str, str]] = set()
    for st in styles.values():
        apps = [st['base']] + [a for r in st.get('rules', []) for a in r['values'].values()] \
            + [c['app'] for c in st.get('cases', [])]
        used.update((a['symbol'], a['color']) for a in apps if 'symbol' in a)
    for d in (OUT_SVG, OUT_SVG_DOCS):
        if d.exists():
            shutil.rmtree(d)
        d.mkdir(parents=True)
    for sid in sorted({s for s, _ in used}):
        (OUT_SVG_DOCS / f'{sid}.svg').write_text(symbols[sid], encoding='utf-8')
    (OUT_SVG / 'nahled').mkdir()
    for sid, color in sorted(used):
        (OUT_SVG / f'{sid}_{color[1:]}.svg').write_text(symbols[sid], encoding='utf-8')
        (OUT_SVG / 'nahled' / f'{sid}_{color[1:]}.svg').write_text(previews[sid], encoding='utf-8')

    # --- TS ---------------------------------------------------------------------------
    lines = [
        '// Generováno skriptem scripts/zxml/build-zxml-styles.py — NEEDITOVAT ručně.',
        f'// Zdroj: styly SLD objektů SŽ z exportu LDM DTMŽ ({data["source"]},',
        '// jvf_parser/docs/zxml-1.5.1.6/sld). Jen objekty SŽ (`999…`) — objekty JVF se kreslí',
        '// Katalogem DTM ČR. Klíč `<codeBase>-<suffix>` (01 Bod, 02 Linie, 03 Plocha); pravidla',
        '// podle XML elementu v AtributyObjektu a kódu hodnoty číselníku v ŽXML.',
        '',
        "import type { ObjectStyle } from '../../styles/types.js';",
        '',
        'export const ZXML_STYLES: Record<string, ObjectStyle> = {',
    ]
    for key in sorted(styles):
        lines.append(f'  {json.dumps(key)}: {json.dumps(styles[key], ensure_ascii=False, separators=(",", ":"))},')
    lines += ['};', '']
    for out in OUT_TS:
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text('\n'.join(lines), encoding='utf-8')

    n_rules = sum(len(s.get('rules', [])) for s in styles.values())
    n_cases = sum(len(s.get('cases', [])) for s in styles.values())
    print(f'{len(styles)} objektů SŽ, {n_rules} pravidel podle atributu, {n_cases} složených pravidel, '
          f'{len({s for s, _ in used})} značek ({len(used)} SVG → {OUT_SVG.relative_to(ROOT)})')
    print(f'statistika: {dict(sorted(stats.items()))}')
    print('→ ' + ', '.join(str(p.relative_to(ROOT)) for p in OUT_TS))


if __name__ == '__main__':
    main()
