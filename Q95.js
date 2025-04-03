function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}
const debounced = debounce(() => console.log("Debounced Call"), 1000);
debounced();
debounced();
setTimeout(debounced, 1100);
