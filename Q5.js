class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    // Retrieve a value from the cache
    get(key) {
        if (!this.cache.has(key)) {
            return -1; // Key not found
        }
        const value = this.cache.get(key);
        // Move the accessed item to the end to mark it as recently used
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    // Insert or update a value in the cache
    put(key, value) {
        if (this.cache.has(key)) {
            // Remove the existing item
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // Remove the least recently used (LRU) item
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey);
        }
        // Insert the new item
        this.cache.set(key, value);
    }
}

// Example usage:
const cache = new LRUCache(2);
cache.put(1, 'A');
cache.put(2, 'B');
console.log(cache.get(1)); // Output: 'A'
cache.put(3, 'C'); // Evicts key 2
console.log(cache.get(2)); // Output: -1 (not found)
cache.put(4, 'D'); // Evicts key 1
console.log(cache.get(1)); // Output: -1 (not found)
console.log(cache.get(3)); // Output: 'C'
console.log(cache.get(4)); // Output: 'D'
