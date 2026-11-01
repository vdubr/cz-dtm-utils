#!/usr/bin/env python3
"""
Vektorizace bodových značek fotokatalogu MOZeK (binární PNG → SVG).

Vlastní tracer v numpy (bez potrace/scipy):

  1. Rozdělení inkoustu B na vyplněné části a tenké čáry:
       I = B & N4(B)          (pixel, jehož 4 sousedé jsou také inkoust),
       malé komponenty I se zahodí (styky čar), F = dilate(I) & B,
       tenké T = B & ~F; drobné izolované skvrny T jdou do F.
  2. Vyplněné části: obrys po hranách pixelů (středy hran), Douglas–Peucker
     0,6 px, vše v jedné cestě s `fill-rule="evenodd"`; kružnice (disky,
     mezikruží) se rozpoznají a zapíšou jako <circle> / oblouky.
  3. Tenké čáry: ztenčení (Zhang–Suen) → graf středových pixelů bez
     „schodových" diagonál (diagonála jen tam, kde nevede 4-cesta) →
     řetězce mezi uzly (konce, shluky křižovatek) a cykly → Douglas–Peucker
     0,75 px → <line> / <circle> (tah) / <path>; navazující kolineární
     řetězce (odchylka < 3°) se v křižovatce spojí, kolineární vrcholy zruší.
  4. Tah 0,13 mm papíru (zdrojová čára 2 px → 0,26 mm; u antialiasovaných
     obrázků až od změřené šířky 2,5 px).
  Vyplněná část musí mít tloušťku aspoň 5 px (přežije dvojí erozi) — tlustší
  čáry z antialiasingu tak zůstanou čarami.

Master SVG (jvf_parser/docs/zxml-1.5.1.6/knihovny/SVG/<id>.svg):
  - viewBox = pixelový rámec obrázku (střed rámce = vkládací bod),
  - width/height = viewBox × K, kde K = 100 · SYMBOL_HEIGHT_MM / 109
    (1 jednotka SVG = 0,01 mm papíru, konvence vieweru jako u UDM —
    viz SVG_SCALE v scripts/udm/build-udm-styles.py); 109 px je výška
    inkoustu značky ve standardním rámečku 190×120 px,
  - nestandardní rámečky: inkoust vyšší než 109 px se zmenší na 109 px,
    drobný (< 18 px) se zvětší na 18 px; jinak stejné měřítko,
  - ruční úpravy velikosti: scripts/zxml/size-overrides.json
    ({"sz-xxxxxxxx": výška inkoustu v mm}),
  - jediný barevný literál `#000000` (viewer přebarvuje).

QA: SVG se zpět rastruje (MuPDF) v pixelovém rámci (tah = změřená
šířka zdrojové čáry) a porovná se zdrojem — shoda s tolerancí 1 px (podíl
pixelů každé masky v 1px okolí druhé, F-míra; posun o 1 px se netrestá).
IoU < 0,85 → příznak `lowIou` v manifestu.

Spuštění z rootu repa:
    python3 scripts/zxml/vectorize.py [--height-mm 3.0] [--no-qa]
(QA vyžaduje PyMuPDF; náhledy pro kontrolu očima lze rastrovat i ImageMagickem.)
"""
import argparse
import math
import shutil
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))

SYMBOL_HEIGHT_MM = 3.0
DP_FILL = 0.6
DP_LINE = 0.75
COLLINEAR_DEG = 3.0
MIN_INTERIOR = 5        # min. plocha komponenty „vnitřku" vyplněné části [px]
SPECK = 6               # tenká komponenta do této plochy → vyplněná skvrna
STROKE_MM = 0.13
STROKE_THICK_MM = 0.26
STD_INK_PX = 109
STD_INK_W_PX = 173
MIN_INK_PX = 18
IOU_MIN = 0.85
BLACK = '#000000'


# --------------------------------------------------------------------------
# Morfologie a komponenty
# --------------------------------------------------------------------------

def shift(b: np.ndarray, dy: int, dx: int) -> np.ndarray:
    """b posunuté o (dy, dx) — out[y, x] = b[y + dy, x + dx], mimo obraz False."""
    h, w = b.shape
    p = np.pad(b, 1)
    return p[1 + dy:1 + dy + h, 1 + dx:1 + dx + w]


def erode4(b: np.ndarray) -> np.ndarray:
    return b & shift(b, -1, 0) & shift(b, 1, 0) & shift(b, 0, -1) & shift(b, 0, 1)


def dilate8(b: np.ndarray) -> np.ndarray:
    out = b.copy()
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            out |= shift(b, dy, dx)
    return out


def label(b: np.ndarray, conn: int = 8) -> tuple[np.ndarray, int]:
    """Označení komponent (BFS)."""
    h, w = b.shape
    lab = np.zeros((h, w), dtype=np.int32)
    nbrs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    if conn == 8:
        nbrs += [(-1, -1), (-1, 1), (1, -1), (1, 1)]
    n = 0
    for y0, x0 in zip(*np.nonzero(b)):
        if lab[y0, x0]:
            continue
        n += 1
        lab[y0, x0] = n
        stack = [(y0, x0)]
        while stack:
            y, x = stack.pop()
            for dy, dx in nbrs:
                yy, xx = y + dy, x + dx
                if 0 <= yy < h and 0 <= xx < w and b[yy, xx] and not lab[yy, xx]:
                    lab[yy, xx] = n
                    stack.append((yy, xx))
    return lab, n


def split_filled(b: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    """Inkoust → (vyplněné části F, tenké čáry T)."""
    inner = erode4(b)
    lab, n = label(inner)
    if n:
        sizes = np.bincount(lab.ravel())
        keep = sizes >= MIN_INTERIOR
        # vyplněná část musí přežít i druhou erozi (≥ 5 px tloušťky) — jinak
        # jde o ztluštělou čáru (antialiasing, styky čar), ne o plochu
        deep = np.zeros_like(keep)
        deep[np.unique(lab[erode4(inner)])] = True
        keep &= deep
        keep[0] = False
        inner = keep[lab]
    filled = dilate8(inner) & b
    thin = b & ~filled
    lab, n = label(thin)
    if n:
        sizes = np.bincount(lab.ravel())
        speck = (sizes <= SPECK)
        speck[0] = False
        # skvrna je jen samostatná komponenta celého inkoustu (tečka), ne
        # zbytek čáry navazující na vyplněnou část
        whole, _ = label(b)
        for i in np.nonzero(speck)[0]:
            comp = lab == i
            if (whole[comp][0] == whole) .sum() != comp.sum():
                speck[i] = False
        spk = speck[lab]
        filled |= spk
        thin &= ~spk
    return filled, thin


def zhang_suen(b: np.ndarray) -> np.ndarray:
    img = b.astype(np.uint8)
    while True:
        changed = False
        for step in (0, 1):
            p = [shift(img, dy, dx) for dy, dx in
                 ((-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1))]
            p2, p3, p4, p5, p6, p7, p8, p9 = p
            nb = sum(x.astype(np.int32) for x in p)
            seq = p + [p2]
            a = sum(((seq[i] == 0) & (seq[i + 1] == 1)).astype(np.int32) for i in range(8))
            if step == 0:
                c = (p2 * p4 * p6 == 0) & (p4 * p6 * p8 == 0)
            else:
                c = (p2 * p4 * p8 == 0) & (p2 * p6 * p8 == 0)
            m = (img == 1) & (nb >= 2) & (nb <= 6) & (a == 1) & c
            if m.any():
                img[m] = 0
                changed = True
        if not changed:
            return img.astype(bool)


# --------------------------------------------------------------------------
# Geometrie
# --------------------------------------------------------------------------

def dp(points: list[tuple[float, float]], tol: float) -> list[tuple[float, float]]:
    """Douglas–Peucker pro otevřenou lomenou čáru (iterativně)."""
    if len(points) < 3:
        return list(points)
    pts = np.asarray(points, dtype=float)
    keep = np.zeros(len(pts), dtype=bool)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        i, j = stack.pop()
        if j <= i + 1:
            continue
        a, b = pts[i], pts[j]
        seg = pts[i + 1:j]
        d = b - a
        ln = math.hypot(*d)
        if ln < 1e-9:
            dist = np.hypot(*(seg - a).T)
        else:
            dist = np.abs(d[0] * (seg[:, 1] - a[1]) - d[1] * (seg[:, 0] - a[0])) / ln
        k = int(np.argmax(dist))
        if dist[k] > tol:
            keep[i + 1 + k] = True
            stack += [(i, i + 1 + k), (i + 1 + k, j)]
    return [(float(p[0]), float(p[1])) for p in pts[keep]]


def smooth(pts: list, closed: bool = False) -> list:
    """
    Středy spojnic sousedních pixelů — zmenší „schody" 4-souvislé čáry na
    polovinu (jinak DP nechává rohy schodů). Krajní body otevřené čáry zůstávají.
    """
    if len(pts) < 3:
        return list(pts)
    if closed:
        n = len(pts)
        return [((pts[i][0] + pts[(i + 1) % n][0]) / 2, (pts[i][1] + pts[(i + 1) % n][1]) / 2)
                for i in range(n)]
    mids = [((a[0] + b[0]) / 2, (a[1] + b[1]) / 2) for a, b in zip(pts, pts[1:])]
    return [pts[0]] + mids + [pts[-1]]


def dp_closed(points: list[tuple[float, float]], tol: float) -> list[tuple[float, float]]:
    """DP pro uzavřený prstenec (bez opakování prvního bodu na konci)."""
    if len(points) < 4:
        return list(points)
    pts = np.asarray(points, dtype=float)
    far = int(np.argmax(np.hypot(*(pts - pts[0]).T)))
    a = dp([tuple(p) for p in pts[:far + 1]], tol)
    b = dp([tuple(p) for p in np.vstack([pts[far:], pts[:1]])], tol)
    return a[:-1] + b[:-1]


def trim_hooks(pts: list, max_len: float = 2.5, max_deg: float = 30.0) -> list:
    """Zruší krátký zalomený konec otevřené čáry (artefakt ztenčení na konci tahu)."""
    pts = list(pts)
    for _ in range(2):
        if len(pts) >= 3:
            a, b, c = pts[-3], pts[-2], pts[-1]
            if (math.dist(b, c) <= max_len
                    and angle_between((b[0] - a[0], b[1] - a[1]), (c[0] - b[0], c[1] - b[1])) < max_deg):
                del pts[-2]
        pts.reverse()
    return pts


def angle_between(u, v) -> float:
    nu, nv = math.hypot(*u), math.hypot(*v)
    if nu < 1e-9 or nv < 1e-9:
        return 0.0
    c = max(-1.0, min(1.0, (u[0] * v[0] + u[1] * v[1]) / (nu * nv)))
    return math.degrees(math.acos(c))


def merge_collinear(pts: list, closed: bool = False, deg: float = COLLINEAR_DEG) -> list:
    """Zruší vrcholy, kde se směr mění o méně než `deg`."""
    pts = list(pts)
    changed = True
    while changed and len(pts) > (3 if closed else 2):
        changed = False
        n = len(pts)
        rng = range(n) if closed else range(1, n - 1)
        for i in rng:
            a, b, c = pts[i - 1], pts[i], pts[(i + 1) % n]
            if angle_between((b[0] - a[0], b[1] - a[1]), (c[0] - b[0], c[1] - b[1])) < deg:
                del pts[i]
                changed = True
                break
    return pts


def fit_circle(pts) -> tuple[float, float, float, float, float] | None:
    """Kružnice nejmenších čtverců (Kåsa) → (cx, cy, r, střední a max. odchylka)."""
    p = np.asarray(pts, dtype=float)
    if len(p) < 8:
        return None
    x, y = p[:, 0], p[:, 1]
    a = np.column_stack([x, y, np.ones_like(x)])
    bb = x * x + y * y
    try:
        sol, *_ = np.linalg.lstsq(a, bb, rcond=None)
    except np.linalg.LinAlgError:
        return None
    cx, cy = sol[0] / 2, sol[1] / 2
    r2 = sol[2] + cx * cx + cy * cy
    if r2 <= 0:
        return None
    r = math.sqrt(r2)
    res = np.abs(np.hypot(x - cx, y - cy) - r)
    # body musí kružnici obíhat celou (úhlové pokrytí)
    ang = np.sort(np.arctan2(y - cy, x - cx))
    gaps = np.diff(np.concatenate([ang, ang[:1] + 2 * math.pi]))
    if gaps.max() > math.radians(60):
        return None
    return cx, cy, r, float(res.mean()), float(res.max())


def is_circle(pts, mean_tol: float, max_tol: float, min_r: float = 2.0):
    fc = fit_circle(pts)
    if fc and fc[2] >= min_r and fc[3] <= mean_tol and fc[4] <= max_tol:
        return fc[:3]
    return None


# --------------------------------------------------------------------------
# Obrysy vyplněných částí
# --------------------------------------------------------------------------

def trace_rings(f: np.ndarray) -> list[list[tuple[float, float]]]:
    """Obrysy masky po hranách pixelů → prstence (vrcholy = středy hran)."""
    h, w = f.shape
    out_edges: dict[tuple[int, int], list[tuple[int, int]]] = {}

    def add(a, b):
        out_edges.setdefault(a, []).append(b)

    ys, xs = np.nonzero(f)
    up, down = shift(f, -1, 0), shift(f, 1, 0)
    left, right = shift(f, 0, -1), shift(f, 0, 1)
    for y, x in zip(ys.tolist(), xs.tolist()):
        if not up[y, x]:
            add((x, y), (x + 1, y))
        if not right[y, x]:
            add((x + 1, y), (x + 1, y + 1))
        if not down[y, x]:
            add((x + 1, y + 1), (x, y + 1))
        if not left[y, x]:
            add((x, y + 1), (x, y))
    rings = []
    while out_edges:
        start = next(iter(out_edges))
        ring = []
        prev = None
        cur = start
        while True:
            nxts = out_edges.get(cur)
            if not nxts:
                break
            if len(nxts) == 1 or prev is None:
                nxt = nxts.pop(0)
            else:
                # sedlo: zahnout vpravo (ve směru hodin v obrazových souřadnicích)
                din = (cur[0] - prev[0], cur[1] - prev[1])
                right_turn = (-din[1], din[0])
                pick = next((i for i, n in enumerate(nxts)
                             if (n[0] - cur[0], n[1] - cur[1]) == right_turn), 0)
                nxt = nxts.pop(pick)
            if not nxts:
                del out_edges[cur]
            ring.append(((cur[0] + nxt[0]) / 2, (cur[1] + nxt[1]) / 2))
            prev, cur = cur, nxt
            if cur == start:
                break
        if len(ring) >= 3:
            rings.append(ring)
    return rings


# --------------------------------------------------------------------------
# Středové čáry tenkých částí
# --------------------------------------------------------------------------

def skeleton_graph(s: np.ndarray) -> dict[tuple[int, int], list[tuple[int, int]]]:
    """Graf středových pixelů; diagonála jen tam, kde nevede 4-cesta."""
    h, w = s.shape
    adj: dict[tuple[int, int], list[tuple[int, int]]] = {}
    for y, x in zip(*np.nonzero(s)):
        y, x = int(y), int(x)
        nb = []
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            yy, xx = y + dy, x + dx
            if 0 <= yy < h and 0 <= xx < w and s[yy, xx]:
                nb.append((yy, xx))
        for dy, dx in ((-1, -1), (-1, 1), (1, -1), (1, 1)):
            yy, xx = y + dy, x + dx
            if 0 <= yy < h and 0 <= xx < w and s[yy, xx] and not s[y + dy, x] and not s[y, x + dx]:
                nb.append((yy, xx))
        adj[(y, x)] = nb
    return adj


def trace_chains(s: np.ndarray):
    """
    Středová čára → (řetězce, cykly). Řetězec = (body, uzel_začátku, uzel_konce),
    uzel = id shluku křižovatky / konce; body v souřadnicích středů pixelů.
    """
    adj = skeleton_graph(s)
    deg = {p: len(n) for p, n in adj.items()}
    node_px = {p for p, d in deg.items() if d != 2}
    # shluky sousedních uzlových pixelů (křižovatky) → jeden uzel
    cluster: dict[tuple[int, int], int] = {}
    centers: dict[int, tuple[float, float]] = {}
    cid = 0
    for p in node_px:
        if p in cluster:
            continue
        cid += 1
        stack, members = [p], []
        cluster[p] = cid
        while stack:
            q = stack.pop()
            members.append(q)
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    r = (q[0] + dy, q[1] + dx)
                    if r in node_px and r not in cluster and deg[r] >= 3 and deg[q] >= 3:
                        cluster[r] = cid
                        stack.append(r)
        centers[cid] = (sum(m[1] for m in members) / len(members) + 0.5,
                        sum(m[0] for m in members) / len(members) + 0.5)

    def pt(p):
        return (p[1] + 0.5, p[0] + 0.5)

    visited: set[frozenset] = set()
    chains = []
    for p in node_px:
        for q in adj[p]:
            e = frozenset((p, q))
            if e in visited or cluster.get(q) == cluster[p]:
                continue
            visited.add(e)
            path = [p, q]
            prev, cur = p, q
            while cur not in node_px:
                nxt = [r for r in adj[cur] if r != prev and frozenset((cur, r)) not in visited]
                if not nxt:
                    break
                visited.add(frozenset((cur, nxt[0])))
                prev, cur = cur, nxt[0]
                path.append(cur)
            a, b = cluster[p], cluster.get(cur)
            pts = [centers[a]] + [pt(x) for x in path[1:-1]] + [centers[b] if b else pt(cur)]
            chains.append((pts, a, b))
    # cykly bez uzlů
    loops = []
    seen = set()
    for p, d in deg.items():
        if d != 2 or p in seen or p in node_px:
            continue
        if any(frozenset((p, q)) in visited for q in adj[p]):
            continue
        ring = [p]
        seen.add(p)
        prev, cur = p, adj[p][0]
        while cur != p and cur not in seen:
            ring.append(cur)
            seen.add(cur)
            nxt = [r for r in adj[cur] if r != prev]
            if not nxt:
                break
            prev, cur = cur, nxt[0]
        for i in range(len(ring)):
            visited.add(frozenset((ring[i - 1], ring[i])))
        if len(ring) >= 4:
            loops.append([pt(x) for x in ring])
    return chains, loops, centers


def join_collinear(chains, centers, deg: float = COLLINEAR_DEG):
    """Spojí řetězce, které v křižovatce pokračují rovně (odchylka < deg)."""
    chains = [list(c) for c in chains]
    while True:
        ends: dict[int, list[tuple[int, int]]] = {}
        for i, (pts, a, b) in enumerate(chains):
            if a == b and a is not None:
                continue
            if a is not None:
                ends.setdefault(a, []).append((i, 0))
            if b is not None:
                ends.setdefault(b, []).append((i, 1))
        best = None
        for node, lst in ends.items():
            if len(lst) < 2:
                continue
            for x in range(len(lst)):
                for y in range(x + 1, len(lst)):
                    (i, ei), (j, ej) = lst[x], lst[y]
                    if i == j:
                        continue

                    def direction(k, e):
                        pts = chains[k][0]
                        if e == 1:
                            pts = pts[::-1]
                        far = pts[min(len(pts) - 1, 1)]
                        return (far[0] - pts[0][0], far[1] - pts[0][1])
                    ang = 180 - angle_between(direction(i, ei), direction(j, ej))
                    if ang < deg and (best is None or ang < best[0]):
                        best = (ang, i, ei, j, ej)
        if best is None:
            return chains
        _, i, ei, j, ej = best
        pi, ai, bi = chains[i]
        pj, aj, bj = chains[j]
        if ei == 0:
            pi, ai, bi = pi[::-1], bi, ai
        if ej == 1:
            pj, aj, bj = pj[::-1], bj, aj
        merged = [pi + pj[1:], ai, bj]
        chains = [c for k, c in enumerate(chains) if k not in (i, j)] + [merged]


# --------------------------------------------------------------------------
# Vektorizace jedné značky
# --------------------------------------------------------------------------

def fmt(v: float) -> str:
    s = f'{v:.2f}'.rstrip('0').rstrip('.')
    return '0' if s in ('-0', '') else s


def vectorize(ink: np.ndarray) -> dict:
    """
    Binární maska → {'filled': [prstence|('circle', cx, cy, r)], 'thin': [prvky],
    'strokePx': změřená šířka tenkých čar}. Prvky tenkých čar:
    ('line', pts) / ('path', pts, closed) / ('circle', cx, cy, r).
    """
    filled, thin = split_filled(ink)
    rings = trace_rings(filled)
    fill_items = []
    for ring in rings:
        c = is_circle(ring, 0.35, 0.8, 2.0)
        if c:
            fill_items.append(('circle', *c))
        else:
            simp = merge_collinear(dp_closed(ring, DP_FILL), closed=True)
            if len(simp) >= 3:
                fill_items.append(('ring', simp))
    skel = zhang_suen(thin)
    stroke_px = float(thin.sum()) / max(1, int(skel.sum())) if skel.any() else 1.0
    chains, loops, centers = trace_chains(skel)
    items = []
    open_chains = []
    for pts, a, b in chains:
        if a is not None and a == b and len(pts) >= 8:
            loops.append(pts[:-1])
        else:
            open_chains.append((dp(smooth(pts), DP_LINE), a, b))
    for pts, a, b in join_collinear(open_chains, centers):
        pts = trim_hooks(merge_collinear(dp(pts, DP_LINE)))
        if len(pts) == 2:
            items.append(('line', pts))
        elif len(pts) > 2:
            items.append(('path', pts, False))
    for ring in loops:
        c = is_circle(ring, 0.45, 1.0, 2.0)
        if c:
            items.append(('circle', *c))
        else:
            simp = merge_collinear(dp_closed(smooth(ring, closed=True), DP_LINE), closed=True)
            if len(simp) >= 3:
                items.append(('path', simp, True))
    return {'filled': fill_items, 'thin': items, 'strokePx': stroke_px}


def path_d(pts, closed: bool) -> str:
    d = 'M' + ' L'.join(f'{fmt(x)} {fmt(y)}' for x, y in pts)
    return d + (' Z' if closed else '')


def circle_d(cx, cy, r) -> str:
    """Kružnice jako dva oblouky (pro evenodd v jedné cestě)."""
    return (f'M{fmt(cx - r)} {fmt(cy)} A{fmt(r)} {fmt(r)} 0 1 0 {fmt(cx + r)} {fmt(cy)} '
            f'A{fmt(r)} {fmt(r)} 0 1 0 {fmt(cx - r)} {fmt(cy)} Z')


def to_svg(vec: dict, w: int, h: int, scale: float, stroke_units: float, title: str = '') -> str:
    """
    SVG v pixelovém rámci (viewBox) o velikosti rámec × scale jednotek.
    `stroke_units` = šířka tahu ve viewBox jednotkách (px).
    """
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w * scale:.3f}" height="{h * scale:.3f}" '
           f'viewBox="0 0 {w} {h}">']
    if title:
        out.append(f'<title>{title}</title>')
    if vec['thin']:
        out.append(f'<g fill="none" stroke="{BLACK}" stroke-width="{fmt(stroke_units)}" '
                   'stroke-linecap="round" stroke-linejoin="round">')
        for it in vec['thin']:
            if it[0] == 'line':
                (x1, y1), (x2, y2) = it[1]
                out.append(f'<line x1="{fmt(x1)}" y1="{fmt(y1)}" x2="{fmt(x2)}" y2="{fmt(y2)}"/>')
            elif it[0] == 'circle':
                out.append(f'<circle cx="{fmt(it[1])}" cy="{fmt(it[2])}" r="{fmt(it[3])}"/>')
            else:
                out.append(f'<path d="{path_d(it[1], it[2])}"/>')
        out.append('</g>')
    fills = vec['filled']
    if len(fills) == 1 and fills[0][0] == 'circle':
        _, cx, cy, r = fills[0]
        out.append(f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(r)}" fill="{BLACK}" stroke="none"/>')
    elif fills:
        d = ' '.join(circle_d(*it[1:]) if it[0] == 'circle' else path_d(it[1], True) for it in fills)
        out.append(f'<path d="{d}" fill="{BLACK}" fill-rule="evenodd" stroke="none"/>')
    out.append('</svg>')
    return '\n'.join(out) + '\n'


def symbol_scale(w: int, h: int, bbox, height_mm: float, override_mm: float | None = None) -> float:
    """Jednotky SVG (0,01 mm) na pixel zdroje."""
    k = 100 * height_mm / STD_INK_PX
    if bbox is None:
        return k
    iw, ih = bbox[2] - bbox[0], bbox[3] - bbox[1]
    if override_mm:
        return 100 * override_mm / max(ih, 1)
    if (w, h) == (190, 120):
        return k
    s = max(ih, iw * STD_INK_PX / STD_INK_W_PX)
    if s > STD_INK_PX:
        return k * STD_INK_PX / s
    if s < MIN_INK_PX:
        return k * MIN_INK_PX / max(s, 1)
    return k


# --------------------------------------------------------------------------
# QA
# --------------------------------------------------------------------------

def rasterize(svg: str, w: int, h: int) -> np.ndarray:
    """
    SVG → binární maska w×h (1 jednotka = 1 px) přes MuPDF (PyMuPDF).
    Vestavěný SVG renderer ImageMagicku (MSVG) nekreslí tahy cest/kružnic
    s `fill="none"` ani zděděné atributy skupiny — pro QA nepoužitelný.
    """
    import pymupdf
    doc = pymupdf.open(stream=svg.encode('utf-8'), filetype='svg')
    page = doc[0]
    zoom = w / page.rect.width
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), colorspace=pymupdf.csGRAY, alpha=False)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width)
    out = np.zeros((h, w), dtype=bool)
    hh, ww = min(h, pix.height), min(w, pix.width)
    out[:hh, :ww] = img[:hh, :ww] < 128
    return out


def iou_tolerant(a: np.ndarray, b: np.ndarray) -> float:
    """
    Shoda masek s tolerancí 1 px: podíl pixelů každé masky, které leží v 1px
    okolí druhé (F-míra přesnosti a úplnosti). Posun o 1 px → 1,0.
    """
    if not a.any() and not b.any():
        return 1.0
    if not a.any() or not b.any():
        return 0.0
    p = (a & dilate8(b)).sum() / a.sum()
    r = (b & dilate8(a)).sum() / b.sum()
    return float(2 * p * r / (p + r)) if p + r else 0.0


# --------------------------------------------------------------------------
# CLI
# --------------------------------------------------------------------------

def main() -> None:
    from PIL import Image
    from zxml_common import MANIFEST, MOZEK, ROOT, SCRIPTS, SVG_DIR, load_json, write_json

    ap = argparse.ArgumentParser(description='Vektorizace značek MOZeK → SVG')
    ap.add_argument('--height-mm', type=float, default=SYMBOL_HEIGHT_MM,
                    help='výška inkoustu standardní značky na papíře [mm]')
    ap.add_argument('--no-qa', action='store_true')
    args = ap.parse_args()

    manifest = load_json(MANIFEST)
    overrides_path = SCRIPTS / 'size-overrides.json'
    overrides = load_json(overrides_path) if overrides_path.exists() else {}
    if SVG_DIR.exists():
        shutil.rmtree(SVG_DIR)
    SVG_DIR.mkdir(parents=True)
    done, low = 0, []
    for sid, sym in manifest['symbols'].items():
        sym['flags'] = [f for f in sym['flags'] if f != 'lowIou']
        for k in ('svg', 'iou', 'scale', 'strokePx'):
            sym.pop(k, None)
        if sym['kind'] != 'point' or not sym['png']:
            continue
        ink = ~np.asarray(Image.open(MOZEK / sym['png']).convert('1'))
        h, w = ink.shape
        vec = vectorize(ink)
        scale = symbol_scale(w, h, sym['inkBbox'], args.height_mm, overrides.get(sid))
        # u antialiasovaných obrázků vychází 1px čára změřená jako ~2 px → vyšší práh
        thick_px = 2.5 if 'antialiased' in sym['flags'] else 1.5
        stroke_mm = STROKE_THICK_MM if vec['strokePx'] >= thick_px else STROKE_MM
        svg = to_svg(vec, w, h, scale, 100 * stroke_mm / scale, sid)
        (SVG_DIR / f'{sid}.svg').write_text(svg, encoding='utf-8')
        sym['svg'] = f'SVG/{sid}.svg'
        sym['scale'] = round(scale, 4)
        sym['strokePx'] = round(vec['strokePx'], 2)
        done += 1
        if not args.no_qa:
            qa_svg = to_svg(vec, w, h, 1.0, max(1.0, round(vec['strokePx'])))
            iou = iou_tolerant(rasterize(qa_svg, w, h), ink)
            sym['iou'] = round(iou, 3)
            if iou < IOU_MIN:
                sym['flags'] = sorted(set(sym['flags']) | {'lowIou'})
                low.append((sid, round(iou, 3)))
    write_json(MANIFEST, manifest)
    size = sum(f.stat().st_size for f in SVG_DIR.iterdir())
    print(f'{done} značek → {SVG_DIR.relative_to(ROOT)} ({size // 1024} kB), výška {args.height_mm} mm, '
          f'IoU < {IOU_MIN}: {len(low)} {low[:20]}')


if __name__ == '__main__':
    main()
