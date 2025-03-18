// Chef and Happy String - CodeChef Solution
function chefAndHappyString(t, strings) {
    let results = [];

    for (let i = 0; i < t; i++) {
        const s = strings[i];
        if (s.includes('aaa') || s.includes('bbb')) {
            results.push("NO");
        } else {
            results.push("YES");
        }
    }

    return results;
}

// Sample Input
const t = 3;
const strings = [
    "ababab",
    "aaabbb",
    "abcabc"
];

// Output
console.log(chefAndHappyString(t, strings));
