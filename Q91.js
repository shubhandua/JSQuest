function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}
const throttled = throttle(() => console.log("Throttled Call"), 1000);
setInterval(throttled, 200);
