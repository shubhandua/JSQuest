function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Fetching from cache:", key);
            return cache.get(key);
        }
        console.log("Computing result for:", key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Example function to memoize
const factorial = memoize(n => (n <= 1 ? 1 : n * factorial(n - 1)));

// Example usage
console.log(factorial(5)); // Computes and caches result
console.log(factorial(5)); // Fetches from cache
console.log(factorial(6)); // Computes and caches new result
