function undefinedToNull(obj) {
    return JSON.parse(JSON.stringify(obj, (key, value) => value === undefined ? null : value));
}
console.log(undefinedToNull({ a: 1, b: undefined, c: 3 }));
