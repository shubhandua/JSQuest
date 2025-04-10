function countArrays(arr) {
    return arr.filter(item => Array.isArray(item)).length;
}
console.log(countArrays([1, [2], 3, [4, 5], 'text', [], {}]));
