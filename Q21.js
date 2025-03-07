function compose(...funcs) {
    return function (value) {
        return funcs.reduceRight((acc, fn) => fn(acc), value);
    };
}

// Example functions
const add2 = x => x + 2;
const multiply3 = x => x * 3;
const square = x => x * x;

// Compose functions
const composedFunction = compose(square, multiply3, add2);

console.log(composedFunction(5)); // Output: 121  -> ((5 + 2) * 3)² = 121
