function groupBy(arr, fn) {
    return arr.reduce((res, item) => {
        const key = fn(item);
        (res[key] ||= []).push(item);
        return res;
    }, {});
}
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));

