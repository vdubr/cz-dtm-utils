#!/usr/bin/env python3
"""
Testy traceru značek (scripts/zxml/vectorize.py) na syntetických bitmapách.

Spuštění z rootu repa:  python3 -m unittest scripts/zxml/test_vectorize.py
(vyžaduje numpy)
"""
import math
import sys
import unittest
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
import vectorize as v  # noqa: E402


def canvas(h=60, w=80):
    return np.zeros((h, w), dtype=bool)


def disk(b, cx, cy, r):
    yy, xx = np.mgrid[:b.shape[0], :b.shape[1]]
    b |= (xx + 0.5 - cx) ** 2 + (yy + 0.5 - cy) ** 2 <= r * r
    return b


def ring_1px(b, cx, cy, r):
    for t in np.linspace(0, 2 * math.pi, 2000):
        b[int(cy + r * math.sin(t)), int(cx + r * math.cos(t))] = True
    return b


class TestPrimitives(unittest.TestCase):
    def test_dp_straight(self):
        pts = [(x, 0.3 * ((x % 2) - 0.5)) for x in range(20)]
        self.assertEqual(len(v.dp(pts, 0.75)), 2)

    def test_merge_collinear(self):
        self.assertEqual(v.merge_collinear([(0, 0), (10, 0.1), (20, 0)]), [(0, 0), (20, 0)])
        self.assertEqual(len(v.merge_collinear([(0, 0), (10, 0), (10, 10)])), 3)

    def test_fit_circle(self):
        pts = [(10 + 5 * math.cos(t), 20 + 5 * math.sin(t)) for t in np.linspace(0, 6.2, 30)]
        cx, cy, r = v.is_circle(pts, 0.1, 0.1)
        self.assertAlmostEqual(cx, 10, places=3)
        self.assertAlmostEqual(r, 5, places=3)
        # půlkruh není kružnice
        half = [(5 * math.cos(t), 5 * math.sin(t)) for t in np.linspace(0, 3.1, 30)]
        self.assertIsNone(v.is_circle(half, 0.1, 0.1))


class TestVectorize(unittest.TestCase):
    def test_horizontal_hairline(self):
        b = canvas()
        b[30, 10:70] = True
        vec = v.vectorize(b)
        self.assertEqual(vec['filled'], [])
        self.assertEqual(len(vec['thin']), 1)
        kind, pts = vec['thin'][0]
        self.assertEqual(kind, 'line')
        xs = sorted(p[0] for p in pts)
        self.assertAlmostEqual(xs[0], 10.5, delta=0.6)
        self.assertAlmostEqual(xs[1], 69.5, delta=0.6)
        self.assertAlmostEqual(vec['strokePx'], 1.0, delta=0.1)

    def test_two_px_line_is_thin(self):
        b = canvas()
        b[30:32, 10:70] = True
        vec = v.vectorize(b)
        self.assertEqual(vec['filled'], [])
        self.assertEqual([it[0] for it in vec['thin']], ['line'])
        self.assertGreater(vec['strokePx'], 1.6)

    def test_staircase_diagonal_is_one_line(self):
        b = canvas()
        for i in range(40):
            b[10 + i // 3, 10 + i] = True        # sklon 1:3, schody
            if i % 3 == 2:
                b[10 + i // 3 + 1, 10 + i] = True  # 4-souvislé schody
        vec = v.vectorize(b)
        self.assertEqual(len(vec['thin']), 1)
        self.assertEqual(vec['thin'][0][0], 'line')

    def test_filled_square(self):
        b = canvas()
        b[10:30, 20:40] = True
        vec = v.vectorize(b)
        self.assertEqual(vec['thin'], [])
        self.assertEqual(len(vec['filled']), 1)
        kind, ring = vec['filled'][0]
        self.assertEqual(kind, 'ring')
        self.assertEqual(len(ring), 4)

    def test_filled_square_with_hole(self):
        b = canvas()
        b[10:40, 20:50] = True
        b[18:32, 28:42] = False
        vec = v.vectorize(b)
        self.assertEqual(len(vec['filled']), 2)
        svg = v.to_svg(vec, 80, 60, 1.0, 1.0)
        self.assertIn('fill-rule="evenodd"', svg)

    def test_filled_disk(self):
        b = disk(canvas(), 40, 30, 10)
        vec = v.vectorize(b)
        self.assertEqual(len(vec['filled']), 1)
        self.assertEqual(vec['filled'][0][0], 'circle')
        self.assertAlmostEqual(vec['filled'][0][3], 10, delta=0.8)
        self.assertIn('<circle', v.to_svg(vec, 80, 60, 1.0, 1.0))

    def test_hairline_circle(self):
        b = ring_1px(canvas(), 40, 30, 15)
        vec = v.vectorize(b)
        self.assertEqual(vec['filled'], [])
        self.assertEqual(len(vec['thin']), 1)
        kind, cx, cy, r = vec['thin'][0]
        self.assertEqual(kind, 'circle')
        self.assertAlmostEqual(cx, 40, delta=1)
        self.assertAlmostEqual(r, 15, delta=1)

    def test_cross_joins_collinear_arms(self):
        b = canvas()
        b[30, 10:70] = True
        b[5:55, 40] = True
        vec = v.vectorize(b)
        self.assertEqual(sorted(it[0] for it in vec['thin']), ['line', 'line'])

    def test_t_junction(self):
        b = canvas()
        b[10, 10:70] = True
        b[10:50, 40] = True
        vec = v.vectorize(b)
        self.assertEqual(sorted(it[0] for it in vec['thin']), ['line', 'line'])

    def test_rectangle_outline_is_closed_path(self):
        b = canvas()
        b[10, 10:60] = b[40, 10:60] = True
        b[10:41, 10] = b[10:41, 59] = True
        vec = v.vectorize(b)
        self.assertEqual(len(vec['thin']), 1)
        kind, pts, closed = vec['thin'][0]
        self.assertEqual((kind, closed, len(pts)), ('path', True, 4))

    def test_line_with_filled_square(self):
        b = canvas()
        b[30, 5:50] = True
        b[25:36, 50:61] = True
        vec = v.vectorize(b)
        self.assertEqual(len(vec['filled']), 1)
        self.assertEqual([it[0] for it in vec['thin']], ['line'])

    def test_isolated_dot_is_filled(self):
        b = canvas()
        b[30:32, 40:42] = True
        vec = v.vectorize(b)
        self.assertEqual(vec['thin'], [])
        self.assertEqual(len(vec['filled']), 1)

    def test_svg_only_black_literal(self):
        b = canvas()
        b[30, 10:70] = True
        b[10:20, 10:20] = True
        svg = v.to_svg(v.vectorize(b), 80, 60, 2.0, 1.5, 'x')
        self.assertIn('viewBox="0 0 80 60"', svg)
        self.assertIn('width="160.000"', svg)
        colours = set(__import__('re').findall(r'#[0-9a-fA-F]{3,6}', svg))
        self.assertEqual(colours, {'#000000'})

    def test_iou_tolerant(self):
        a = canvas()
        a[30, 10:70] = True
        b = canvas()
        b[31, 10:70] = True
        self.assertGreater(v.iou_tolerant(a, b), 0.6)
        self.assertEqual(v.iou_tolerant(a, a), 1.0)


class TestScale(unittest.TestCase):
    def test_standard_frame(self):
        k = v.symbol_scale(190, 120, [10, 5, 100, 114], 3.0)
        self.assertAlmostEqual(k * 109, 300, places=6)  # 109 px inkoustu = 3 mm = 300 jednotek

    def test_odd_frame_large_ink_is_normalised(self):
        k = v.symbol_scale(133, 189, [0, 0, 64, 176], 3.0)
        self.assertAlmostEqual(k * 176, 300, places=6)

    def test_tiny_ink_is_enlarged(self):
        k = v.symbol_scale(24, 24, [11, 11, 13, 13], 3.0)
        self.assertAlmostEqual(k * 2, 100 * 3.0 / 109 * 18, places=6)

    def test_override(self):
        self.assertAlmostEqual(v.symbol_scale(190, 120, [0, 0, 50, 100], 3.0, 2.0) * 100, 200)


if __name__ == '__main__':
    unittest.main()
