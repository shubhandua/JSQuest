// Method 1: Using slice (Most Common)
function chunkArraySlice(arr, size) {
    if (size <= 0) return []; // Handle invalid chunk size
  
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  
  // Method 2: Using reduce
  function chunkArrayReduce(arr, size) {
    return arr.reduce((acc, _, i) => 
      (i % size === 0 ? acc.push(arr.slice(i, i + size)) : acc, acc), []);
  }
  
  // Method 3: Using while and splice (Modifies original array)
  function chunkArraySplice(arr, size) {
    let result = [];
    while (arr.length) {
      result.push(arr.splice(0, size));
    }
    return result;
  }
  
  // Test cases
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  
  console.log(chunkArraySlice([...array], 3));  // Output: [ [1, 2, 3], [4, 5, 6], [7, 8] ]
  console.log(chunkArrayReduce([...array], 3)); // Output: [ [1, 2, 3], [4, 5, 6], [7, 8] ]
  console.log(chunkArraySplice([...array], 3)); // Output: [ [1, 2, 3], [4, 5, 6], [7, 8] ]

  