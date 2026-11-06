import { describe, it, expect } from 'vitest';
import { endConnectors, offsetPolyline, pointsAlongLine } from '../../src/index.js';

describe('lineGeometry — souběžné čáry a body podél linie', () => {
  it('odsazení kladně vlevo ve směru linie, výška se přenáší', () => {
    const off = offsetPolyline([[0, 0, 5], [10, 0, 6]], 2);
    expect(off).toEqual([[0, 2, 5], [10, 2, 6]]);
    expect(offsetPolyline([[0, 0], [10, 0]], -2)).toEqual([[0, -2], [10, -2]]);
  });

  it('zlom s pokosem — vrchol posunutý po ose úhlu, ve vzdálenosti d od obou úseků', () => {
    const off = offsetPolyline([[0, 0], [10, 0], [10, 10]], 1);
    const corner = off[1]!;
    expect(corner[0]).toBeCloseTo(9);
    expect(corner[1]).toBeCloseTo(1);
  });

  it('body v rozestupu od začátku s úhlem úseku', () => {
    const pts = pointsAlongLine([[0, 0], [10, 0], [10, 10]], 2, 5);
    expect(pts.map((p) => [p.x, p.y])).toEqual([[2, 0], [7, 0], [10, 2], [10, 7]]);
    expect(pts[0]!.angle).toBeCloseTo(0);
    expect(pts[2]!.angle).toBeCloseTo(Math.PI / 2);
  });

  it('spojky konců osy se souběžnou čarou', () => {
    const axis = [[0, 0], [10, 0]];
    expect(endConnectors(axis, offsetPolyline(axis, 1))).toEqual([
      [[0, 0], [0, 1]],
      [[10, 0], [10, 1]],
    ]);
  });
});
