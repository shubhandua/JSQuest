function customInterval(callback, delay, times) {
    let count = 0;
    let interval = setInterval(() => {
        callback();
        if (++count === times) clearInterval(interval);
    }, delay);
}
customInterval(() => console.log("Hello"), 1000, 5);
