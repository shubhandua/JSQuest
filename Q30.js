// 1. Sorting Numbers
const numbers = [5, 3, 8, 1, 2];
console.log([...numbers].sort((a, b) => a - b)); // Ascending: [1, 2, 3, 5, 8]
console.log([...numbers].sort((a, b) => b - a)); // Descending: [8, 5, 3, 2, 1]

// 2. Sorting Strings
const fruits = ["banana", "apple", "cherry", "orange"];
console.log([...fruits].sort());                // Ascending: ["apple", "banana", "cherry", "orange"]
console.log([...fruits].sort((a, b) => b.localeCompare(a))); // Descending

// 3. Sorting Objects by Key
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];
console.log([...users].sort((a, b) => a.age - b.age));  // By age (ascending)
console.log([...users].sort((a, b) => a.name.localeCompare(b.name))); // By name

// 4. Sorting Dates
const dates = [
  new Date("2025-03-01"),
  new Date("2024-01-01"),
  new Date("2023-12-31")
];
console.log([...dates].sort((a, b) => a - b)); // Ascending
console.log([...dates].sort((a, b) => b - a)); // Descending

// 5. Custom Sort with Conditions
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];
console.log([...products].sort((a, b) => a.price - b.price || a.name.localeCompare(b.name)));
