function snailTraversal(matrix) {
    let result = [];
    while (matrix.length) {
        result.push(...matrix.shift());
        matrix.forEach(row => result.push(row.pop()));
        matrix.reverse().forEach(row => row.reverse());
    }
    return result;
}
console.log(snailTraversal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
