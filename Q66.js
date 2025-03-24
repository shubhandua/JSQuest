function countMatchingObjects(objects, key, value) {
    if (!Array.isArray(objects)) {
        throw new Error("Invalid input: Expected an array of objects.");
    }

    let count = 0;
    for (let obj of objects) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            count++;
        }
    }

    return {
        totalObjects: objects.length,
        matchingObjects: count,
        percentageMatch: ((count / objects.length) * 100).toFixed(2) + "%",
        describe: function() {
            return `Out of ${this.totalObjects} objects, ${this.matchingObjects} matched the criteria (${key}: ${value}). That’s about ${this.percentageMatch} of them!`;
        }
    };
}

// Example usage
const data = [
    { type: "car", color: "red" },
    { type: "bike", color: "blue" },
    { type: "car", color: "red" },
    { type: "truck", color: "red" },
    { type: "car", color: "black" }
];

const result = countMatchingObjects(data, "color", "red");
console.log(result.describe());
