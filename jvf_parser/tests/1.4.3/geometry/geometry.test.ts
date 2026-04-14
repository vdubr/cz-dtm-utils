import { describe, expect, it } from 'vitest';
import {
  parseCoordinates,
  parseLineString,
  parseMultiCurve,
  parsePoint,
  parsePolygon,
} from '../../../src/1.4.3/geometry-primitives.js';

describe('parseCoordinates', () => {
  it('parses a single 3D point from pos string', () => {
    const coords = parseCoordinates('-520813.83 -1164286.00 267.94');
    expect(coords).toEqual([-520813.83, -1164286.0, 267.94]);
  });

  it('parses a posList with multiple 3D points', () => {
    const coords = parseCoordinates(
      '-671658.08 -1115513.19 323.25 -671603.82 -1115482.85 323.14'
    );
    expect(coords).toHaveLength(6);
    expect(coords[0]).toBe(-671658.08);
    expect(coords[1]).toBe(-1115513.19);
    expect(coords[2]).toBe(323.25);
    expect(coords[3]).toBe(-671603.82);
  });

  it('returns empty array for empty string', () => {
    expect(parseCoordinates('')).toEqual([]);
  });

  it('returns empty array for null', () => {
    expect(parseCoordinates(null)).toEqual([]);
  });

  it('returns empty array for undefined', () => {
    expect(parseCoordinates(undefined)).toEqual([]);
  });

  it('handles extra whitespace gracefully', () => {
    const coords = parseCoordinates('  1.0   2.0   3.0  ');
    expect(coords).toEqual([1.0, 2.0, 3.0]);
  });

  it('parses 2D coordinates (no Z)', () => {
    const coords = parseCoordinates('-671705.06 -1115394.41 -671691.13 -1115388.11');
    expect(coords).toHaveLength(4);
    expect(coords[0]).toBe(-671705.06);
    expect(coords[1]).toBe(-1115394.41);
  });
});

describe('parsePoint', () => {
  it('extracts id, srsName, srsDimension, and coordinates', () => {
    const el = {
      '@_gml:id': 'ID72000330010094405_01',
      '@_srsDimension': 3,
      '@_srsName': 'EPSG:5514',
      pos: '-520813.83 -1164286.00 267.94',
    };
    const point = parsePoint(el);
    expect(point.id).toBe('ID72000330010094405_01');
    expect(point.srsName).toBe('EPSG:5514');
    expect(point.srsDimension).toBe(3);
    expect(point.coordinates).toEqual([-520813.83, -1164286.0, 267.94]);
  });
});

describe('parseLineString', () => {
  it('parses a LineString with gml:id', () => {
    const el = {
      '@_gml:id': 'ID3_02',
      '@_srsDimension': 3,
      '@_srsName': 'EPSG:5514',
      posList: '-671658.08 -1115513.19 323.25 -671603.82 -1115482.85 323.14',
    };
    const ls = parseLineString(el);
    expect(ls.id).toBe('ID3_02');
    expect(ls.srsName).toBe('EPSG:5514');
    expect(ls.srsDimension).toBe(3);
    expect(ls.coordinates).toHaveLength(6);
    expect(ls.coordinates[0]).toBe(-671658.08);
  });

  it('handles gml:posList prefix', () => {
    const el = {
      '@_gml:id': 'ID3_02',
      '@_srsDimension': '3',
      '@_srsName': 'EPSG:5514',
      'gml:posList': '-526203.34 -1149337.49 253.76 -526203.3 -1149333.46 253.83',
    };
    const ls = parseLineString(el);
    expect(ls.coordinates).toHaveLength(6);
    expect(ls.coordinates[0]).toBe(-526203.34);
  });
});

describe('parsePolygon', () => {
  it('parses a Polygon with exterior ring', () => {
    const el = {
      '@_gml:id': 'ID2_06',
      '@_srsDimension': 2,
      '@_srsName': 'EPSG:5514',
      exterior: {
        LinearRing: {
          posList: '-671705.06 -1115394.41 -671691.13 -1115388.11 -671705.06 -1115394.41',
        },
      },
    };
    const polygon = parsePolygon(el);
    expect(polygon.id).toBe('ID2_06');
    expect(polygon.srsName).toBe('EPSG:5514');
    expect(polygon.srsDimension).toBe(2);
    expect(polygon.exterior).toHaveLength(6);
    expect(polygon.exterior[0]).toBe(-671705.06);
    expect(polygon.interiors).toEqual([]);
  });
});

describe('parseMultiCurve', () => {
  it('parses a MultiCurve with one curveMember', () => {
    const el = {
      '@_gml:id': 'ID72003010000458529_05',
      '@_srsDimension': 3,
      '@_srsName': 'EPSG:5514',
      curveMember: [
        {
          LineString: {
            posList: '-520819.39 -1164244.00 274.54 -520819.80 -1164248.90 274.50',
          },
        },
      ],
    };
    const mc = parseMultiCurve(el);
    expect(mc.id).toBe('ID72003010000458529_05');
    expect(mc.srsName).toBe('EPSG:5514');
    expect(mc.srsDimension).toBe(3);
    expect(mc.curves).toHaveLength(1);
    expect(mc.curves[0]?.coordinates).toHaveLength(6);
    expect(mc.curves[0]?.coordinates[0]).toBe(-520819.39);
  });

  it('parses a MultiCurve with multiple curveMembers', () => {
    const el = {
      '@_gml:id': 'mc01',
      '@_srsDimension': 3,
      '@_srsName': 'EPSG:5514',
      curveMember: [
        { LineString: { posList: '1.0 2.0 3.0' } },
        { LineString: { posList: '4.0 5.0 6.0 7.0 8.0 9.0' } },
      ],
    };
    const mc = parseMultiCurve(el);
    expect(mc.curves).toHaveLength(2);
    expect(mc.curves[1]?.coordinates).toHaveLength(6);
  });
});
