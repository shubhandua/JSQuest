function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    let left = arr.slice(1).filter(x => x < pivot);
    let right = arr.slice(1).filter(x => x >= pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([5, 3, 8, 4, 2, 7, 1, 6]));
