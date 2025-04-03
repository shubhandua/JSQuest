function flattenDeep(arr) {
    return arr.flat(Infinity);
}
console.log(flattenDeep([1, [2, [3, [4, 5]]]]));
