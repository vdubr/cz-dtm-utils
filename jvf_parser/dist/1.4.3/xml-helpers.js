/**
 * Extract text content from a parsed element value.
 *
 * fast-xml-parser represents elements like `<Foo xmlns="bar">text</Foo>` as:
 *   { "#text": "text", "@_xmlns": "bar" }
 *
 * But elements without xmlns are represented as plain primitives.
 * This helper handles both cases.
 */
export function extractText(val) {
    if (val == null)
        return null;
    if (typeof val === 'string')
        return val;
    if (typeof val === 'number')
        return String(val);
    if (typeof val === 'boolean')
        return String(val);
    if (typeof val === 'object') {
        const obj = val;
        const textNode = obj['#text'];
        if (textNode != null) {
            if (typeof textNode === 'string')
                return textNode;
            if (typeof textNode === 'number')
                return String(textNode);
            if (typeof textNode === 'boolean')
                return String(textNode);
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
export function extractAttributeValue(val) {
    if (val == null)
        return null;
    if (typeof val === 'string')
        return val;
    if (typeof val === 'number')
        return val;
    if (typeof val === 'boolean')
        return val;
    if (typeof val === 'object') {
        const obj = val;
        const textNode = obj['#text'];
        if (textNode != null) {
            if (typeof textNode === 'string')
                return textNode;
            if (typeof textNode === 'number')
                return textNode;
            if (typeof textNode === 'boolean')
                return textNode;
        }
        return null;
    }
    return null;
}
//# sourceMappingURL=xml-helpers.js.map