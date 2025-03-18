// Chef and Chocolates - CodeChef Solution
function chefAndChocolates(t, testCases) {
    let results = [];

    for (let i = 0; i < t; i++) {
        const [n, m] = testCases[i];
        const totalChocolates = n * 5 + m * 7;
        results.push(totalChocolates);
    }

    return results;
}

// Sample Input
const t = 3;
const testCases = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// Output
console.log(chefAndChocolates(t, testCases));
