/**
 * Vercel serverless proxy pro ČÚZK DMR5G (Digitální model reliéfu 5. generace).
 *
 * Prohlížeč nemůže přímo volat ags.cuzk.cz kvůli CORS. Tento edge endpoint
 * přeposílá požadavek a přidá `Access-Control-Allow-Origin: *`.
 *
 * Query parametry:
 *   - bbox:  "minX,minY,maxX,maxY" v EPSG:5514 (S-JTSK Křovák EastNorth)
 *   - size:  "W,H" v pixelech
 *
 * Vrací TIFF s F32 výškami v metrech (NoData = -9999).
 */
export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const bbox = url.searchParams.get('bbox');
  const size = url.searchParams.get('size');

  if (!bbox || !size) {
    return new Response('Missing bbox/size query params', {
      status: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }

  // Základní validace formátu (4 čísla oddělené čárkou)
  const bboxParts = bbox.split(',').map(Number);
  const sizeParts = size.split(',').map(Number);
  if (
    bboxParts.length !== 4 || bboxParts.some((n) => !Number.isFinite(n)) ||
    sizeParts.length !== 2 || sizeParts.some((n) => !Number.isFinite(n) || n <= 0 || n > 2048)
  ) {
    return new Response('Invalid bbox or size', {
      status: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }

  const params = new URLSearchParams({
    bbox,
    size,
    bboxSR: '5514',
    imageSR: '5514',
    format: 'tiff',
    pixelType: 'F32',
    f: 'image',
    interpolation: 'RSP_BilinearInterpolation',
    noData: '-9999',
  });
  const upstream = `https://ags.cuzk.cz/arcgis/rest/services/3D/dmr5g/ImageServer/exportImage?${params.toString()}`;

  try {
    const resp = await fetch(upstream);
    if (!resp.ok) {
      return new Response(`Upstream error: ${resp.status}`, {
        status: 502,
        headers: { 'Access-Control-Allow-Origin': '*' },
      });
    }
    return new Response(resp.body, {
      status: 200,
      headers: {
        'Content-Type': 'image/tiff',
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    return new Response(`Fetch failed: ${(err as Error).message}`, {
      status: 502,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
}
