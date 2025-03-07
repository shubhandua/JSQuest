function once(fn) {
    let called = false;
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        console.log("Function can only be called once!");
    };
}

// Example usage:
const sayHello = once(() => console.log("Hello!"));

sayHello(); // Output: Hello!
sayHello(); // Output: Function can only be called once!
