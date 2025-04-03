function reduceTransform(arr, fn, init) {
    return arr.reduce(fn, init);
}
console.log(reduceTransform([1, 2, 3], (acc, val) => acc + val, 0));
