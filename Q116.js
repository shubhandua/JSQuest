function findNaNIndexes(arr) {
    return arr.map((val, i) => Number.isNaN(val) ? i : -1).filter(i => i !== -1);
}
console.log(findNaNIndexes([2, NaN, 4, NaN, 5]));
