/**
 * Extract text content from a parsed element value.
 *
 * fast-xml-parser represents elements like `<Foo xmlns="bar">text</Foo>` as:
 *   { "#text": "text", "@_xmlns": "bar" }
 *
 * But elements without xmlns are represented as plain primitives.
 * This helper handles both cases.
 */
export function extractText(val: unknown): string | null {
  if (val == null) return null;
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return String(val);
  if (typeof val === 'boolean') return String(val);
  if (typeof val === 'object') {
    const obj = val as Record<string, unknown>;
    const textNode = obj['#text'];
    if (textNode != null) {
      if (typeof textNode === 'string') return textNode;
      if (typeof textNode === 'number') return String(textNode);
      if (typeof textNode === 'boolean') return String(textNode);
    }
    // empty object (empty element)
    return null;
  }
  return null;
}

/**
 * Extract a primitive attribute value from a parsed element value.
 * Handles the `{#text: ..., @_xmlns: ...}` wrapper form.
 */
/**
 * Pick the first present child among `keys` from a parsed element object.
 *
 * Historically GML elements were looked up under both the plain name
 * (`Polygon`) and the namespace-prefixed variant (`gml:Polygon`), because
 * `fast-xml-parser` can be configured either way. Since `createParser()` sets
 * `removeNSPrefix: true`, the prefixed variant never actually occurs at
 * runtime — callers still pass both forms defensively, so this helper keeps
 * that behaviour in one place instead of duplicating the loop everywhere.
 */
export function pickChild(
  obj: Record<string, unknown>,
  keys: readonly string[]
): Record<string, unknown> | undefined {
  for (const key of keys) {
    const val = obj[key];
    if (val != null && typeof val === 'object') {
      return val as Record<string, unknown>;
    }
  }
  return undefined;
}

export function extractAttributeValue(val: unknown): string | number | boolean | null {
  if (val == null) return null;
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return val;
  if (typeof val === 'boolean') return val;
  if (typeof val === 'object') {
    const obj = val as Record<string, unknown>;
    const textNode = obj['#text'];
    if (textNode != null) {
      if (typeof textNode === 'string') return textNode;
      if (typeof textNode === 'number') return textNode;
      if (typeof textNode === 'boolean') return textNode;
    }
    return null;
  }
  return null;
}
