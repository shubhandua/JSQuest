// Sample data
const array1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  
  const array2 = [
    { id: 1, age: 30 },
    { id: 2, age: 25 }
  ];
  
  // Method 1: Using map() and find() (Simpler for small data)
  const joined1 = array1.map(obj1 => ({
    ...obj1,
    ...array2.find(obj2 => obj2.id === obj1.id)
  }));
  console.log(joined1);
  /* Output:
  [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 }
  ]
  */
  
  // Method 2: Using reduce() for larger data (Efficient)
  function joinArraysById(arr1, arr2) {
    const map = arr2.reduce((acc, obj) => {
      acc[obj.id] = obj;
      return acc;
    }, {});
  
    return arr1.map(obj => ({
      ...obj,
      ...map[obj.id]  // Merge objects based on `id`
    }));
  }
  
  console.log(joinArraysById(array1, array2));
  
  /* Same Output:
  [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 }
  ]
  */
  
  // Method 3: Using a combination of filter() and map() (Alternative)
  const joined3 = array1.map(obj1 => ({
    ...obj1,
    ...array2.filter(obj2 => obj2.id === obj1.id)[0]
  }));
  console.log(joined3);
  