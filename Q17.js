async function fetchData(url) {
    try {
        let response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error; // Re-throw to propagate to caller
    }
}

async function processUserData(userId) {
    try {
        const user = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`);
        console.log("User Data:", user);
        
        const posts = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        console.log("User Posts:", posts);

        return { user, posts };
    } catch (error) {
        console.error("Error processing user data:", error.message);
    }
}

// Global error handler
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error.message);
    process.exit(1); // Exit process in case of a critical error
});

// Example usage
processUserData(1).catch(err => console.error("Unhandled error:", err.message));
