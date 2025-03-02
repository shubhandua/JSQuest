function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    };
  }
  function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const memoizedFibonacci = memoize(fibonacci);
  
  console.log(memoizedFibonacci(10)); // Output: 55
  console.log(memoizedFibonacci(50)); // Output: 12586269025
    