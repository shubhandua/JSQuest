function deepObjectFilter(obj, predicate) {
    if (Array.isArray(obj)) return obj.map(v => deepObjectFilter(v, predicate)).filter(v => v !== undefined);
    if (obj && typeof obj === "object") {
        return Object.fromEntries(Object.entries(obj)
            .map(([k, v]) => [k, deepObjectFilter(v, predicate)])
            .filter(([_, v]) => predicate(v)));
    }
    return predicate(obj) ? obj : undefined;
}
console.log(deepObjectFilter({ a: 1, b: { c: 2, d: 3 }, e: 4 }, v => v !== 2));
