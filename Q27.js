function isObjectEmptyKeys(obj) {
    return Object.keys(obj).length === 0;
  }
  
  function isObjectEmptyEntries(obj) {
    return Object.entries(obj).length === 0;
  }
  
  function isObjectEmptyJSON(obj) {
    return JSON.stringify(obj) === "{}";
  }
  
  function isObjectEmptyLoop(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  
  // Test cases
  const emptyObj = {};
  const nonEmptyObj = { key: "value" };
  
  console.log(isObjectEmptyKeys(emptyObj)); // true
  console.log(isObjectEmptyKeys(nonEmptyObj)); // false
  
  console.log(isObjectEmptyEntries(emptyObj)); // true
  console.log(isObjectEmptyEntries(nonEmptyObj)); // false
  
  console.log(isObjectEmptyJSON(emptyObj)); // true
  console.log(isObjectEmptyJSON(nonEmptyObj)); // false
  
  console.log(isObjectEmptyLoop(emptyObj)); // true
  console.log(isObjectEmptyLoop(nonEmptyObj)); // false
  