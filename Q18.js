// Adding a custom last() method to the Array prototype
Object.defineProperty(Array.prototype, "last", {
    get: function () {
      return this.length > 0 ? this[this.length - 1] : undefined;
    }
  });
  
  // Example usage:
  const numbers = [10, 20, 30, 40];
  console.log(numbers.last); // Output: 40
  
  const emptyArray = [];
  console.log(emptyArray.last); // Output: undefined
  