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
export declare function extractAttributeValue(val: unknown): string | number | boolean | null;
//# sourceMappingURL=xml-helpers.d.ts.map