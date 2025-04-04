function jsonStringify(obj) {
    if (obj === null) return 'null';
    if (typeof obj === 'string') return `"${obj}"`;
    if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
    if (Array.isArray(obj)) return `[${obj.map(jsonStringify).join(',')}]`;
    if (typeof obj === 'object') {
        return `{${Object.entries(obj)
            .map(([k, v]) => `"${k}":${jsonStringify(v)}`)
            .join(',')}}`;
    }
}
console.log(jsonStringify({ a: 1, b: 'test', c: [2, 3] }));
