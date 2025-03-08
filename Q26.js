function cancellableInterval(callback, interval) {
    let intervalId = setInterval(callback, interval);
    return {
        cancel: () => clearInterval(intervalId)
    };
}

// Example usage:
const interval = cancellableInterval(() => console.log("Interval running"), 1000);

// Cancel the interval after 5 seconds
setTimeout(() => {
    interval.cancel();
    console.log("Interval cancelled");
}, 5000);