// Method 1: Using reduce()
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
      const groupKey = obj[key];
      acc[groupKey] = acc[groupKey] || [];
      acc[groupKey].push(obj);
      return acc;
    }, {});
  }
  
  // Example usage:
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
  ];
  
  console.log(groupBy(people, "age"));
  /*
  Output:
  {
    "25": [ { name: "Alice", age: 25 }, { name: "Charlie", age: 25 } ],
    "30": [ { name: "Bob", age: 30 }, { name: "David", age: 30 } ]
  }
  */
  
  // Method 2: Using Map for better performance
  function groupByMap(arr, key) {
    return arr.reduce((map, obj) => {
      const groupKey = obj[key];
      if (!map.has(groupKey)) {
        map.set(groupKey, []);
      }
      map.get(groupKey).push(obj);
      return map;
    }, new Map());
  }
  
  // Example usage:
  const groupedMap = groupByMap(people, "age");
  console.log(Object.fromEntries(groupedMap)); // Convert Map to object for display
  
  /*
  Same output as before but uses Map internally.
  */
  
  // Method 3: Grouping an array of values
  function groupByValue(arr, fn) {
    return arr.reduce((acc, val) => {
      const groupKey = fn(val);
      acc[groupKey] = acc[groupKey] || [];
      acc[groupKey].push(val);
      return acc;
    }, {});
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(groupByValue(numbers, (n) => (n % 2 === 0 ? "even" : "odd")));
  
  /*
  Output:
  {
    "odd": [1, 3, 5, 7, 9],
    "even": [2, 4, 6, 8, 10]
  }
  */
  