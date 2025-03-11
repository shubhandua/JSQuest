const nestedArray = [1, [2, [3, [4, 5]]]];

// 1. Using .flat() (Best for Simple Cases)
const flat1 = nestedArray.flat(Infinity);
console.log("Flat Method:", flat1); // [1, 2, 3, 4, 5]

// 2. Using Recursion
function flattenRecursive(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenRecursive(val)) : acc.concat(val), []);
}
console.log("Recursion:", flattenRecursive(nestedArray)); // [1, 2, 3, 4, 5]

// 3. Using JSON Hack (Works for Numbers Only)
const flat3 = JSON.parse("[" + JSON.stringify(nestedArray).replace(/\[|\]/g, "") + "]");
console.log("JSON Trick:", flat3); // [1, 2, 3, 4, 5]

// 4. Using Stack (Efficient for Deeply Nested Data)
function flattenStack(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  return result.reverse(); // Reverse to correct the order
}
console.log("Stack Method:", flattenStack(nestedArray)); // [1, 2, 3, 4, 5]
