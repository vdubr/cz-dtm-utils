/**
 * Extract text content from a parsed element value.
 *
 * fast-xml-parser represents elements like `<Foo xmlns="bar">text</Foo>` as:
 *   { "#text": "text", "@_xmlns": "bar" }
 *
 * But elements without xmlns are represented as plain primitives.
 * This helper handles both cases.
 */
export declare function extractText(val: unknown): string | null;
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
export declare function pickChild(obj: Record<string, unknown>, keys: readonly string[]): Record<string, unknown> | undefined;
export declare function extractAttributeValue(val: unknown): string | number | boolean | null;
//# sourceMappingURL=xml-helpers.d.ts.map