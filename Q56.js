function isLapindrome(str) {
    const mid = Math.floor(str.length / 2);
    const left = str.slice(0, mid);
    const right = str.length % 2 === 0 ? str.slice(mid) : str.slice(mid + 1);

    const sortedLeft = [...left].sort().join("");
    const sortedRight = [...right].sort().join("");

    return sortedLeft === sortedRight ? "YES" : "NO";
}

// Example Usage
const testStrings = ["gaga", "abccab", "rotor", "xyzxy", "abbaab", "ababc"];
testStrings.forEach(str => {
    console.log(`String: ${str} -> Lapindrome: ${isLapindrome(str)}`);
});
