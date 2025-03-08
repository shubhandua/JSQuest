function cancellableTimeout(ms) {
    let timeoutId;
    const promise = new Promise((resolve, reject) => {
        timeoutId = setTimeout(resolve, ms);
    });
    return { 
        promise, 
        cancel: () => clearTimeout(timeoutId) 
    };
}

// Example usage:
const timeout = cancellableTimeout(5000);
timeout.promise.then(() => console.log("Timeout completed"));

// Cancel the timeout before it completes
setTimeout(() => {
    timeout.cancel();
    console.log("Timeout cancelled");
}, 3000);