function circularArrayValues(arr, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(arr[i % arr.length]);
    }
    return result;
}
console.log(circularArrayValues([1, 2, 3, 4], 10));
