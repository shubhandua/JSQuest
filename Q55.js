function canReadWords(knownAlphabets, words) {
    const knownSet = new Set(knownAlphabets);

    return words.map(word => {
        for (let char of word) {
            if (!knownSet.has(char)) {
                return "NO";
            }
        }
        return "YES";
    });
}

// Example Usage
const knownAlphabets = "abcdefghij".split("");
const words = ["abc", "def", "xyz", "ghi"];

const results = canReadWords(knownAlphabets, words);
results.forEach(result => console.log(result));
