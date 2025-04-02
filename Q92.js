function chunkArray(arr, size) {
    let res = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));
