function isFactorChain(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] % arr[i] !== 0) return false;
    }
    return true;
}
console.log(isFactorChain([2, 4, 8, 16]));
