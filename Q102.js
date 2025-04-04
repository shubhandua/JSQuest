function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache.has(key)) cache.set(key, fn(...args));
        return cache.get(key);
    };
}
const sum = memoize((a, b) => a + b);
console.log(sum(1, 2));
console.log(sum(1, 2));
