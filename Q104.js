function makeImmutable(obj) {
    if (obj && typeof obj === 'object') {
        Object.freeze(obj);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) makeImmutable(obj[key]);
        }
    }
    return obj;
}
const frozen = makeImmutable({ a: 1, b: { c: 2 } });
frozen.b.c = 10;
console.log(frozen);
