function deepClone(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj; // Handle primitives

    if (hash.has(obj)) return hash.get(obj); // Handle circular references

    let clone = Array.isArray(obj) ? [] : {}; // Create a new instance of the same type
    hash.set(obj, clone); // Store reference in WeakMap

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key], hash); // Recursively clone properties
        }
    }

    return clone;
}

// Example Usage
const circularObj = { a: 1 };
circularObj.self = circularObj; // Creating a circular reference

const clonedObj = deepClone(circularObj);
console.log(clonedObj); // { a: 1, self: [Circular] }
console.log(clonedObj.self === clonedObj); // true (Correctly maintains circular reference)
