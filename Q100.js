function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) return fn(...args);
        return (...next) => curried(...args, ...next);
    };
}
const curriedAdd = curry((a, b, c) => a + b + c);
console.log(curriedAdd(1)(2)(3));
