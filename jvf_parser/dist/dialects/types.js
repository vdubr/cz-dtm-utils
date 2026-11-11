/** Přečte textový obsah elementu hlavičky (bez plného parsování XML). */
export function detectHeaderElement(xml, element) {
    const re = new RegExp(`<(?:[A-Za-z0-9_]+:)?${element}>\\s*([^<\\s]+)`);
    const m = xml.match(re);
    return m?.[1]?.trim() ?? null;
}
//# sourceMappingURL=types.js.map