function invertObject(obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
console.log(invertObject({ a: 1, b: 2, c: 3 }));
