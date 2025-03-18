// World Chess Championship - CodeChef Solution
function chessChampion(t, matches) {
    let results = [];

    for (let i = 0; i < t; i++) {
        const matchResult = matches[i].split('');
        let carlsenPoints = 0;
        let opponentPoints = 0;

        for (let result of matchResult) {
            if (result === 'C') carlsenPoints += 2;
            else if (result === 'N') opponentPoints += 2;
            else { // Draw condition 'D'
                carlsenPoints += 1;
                opponentPoints += 1;
            }
        }

        if (carlsenPoints > opponentPoints) results.push("CARLSEN");
        else if (carlsenPoints < opponentPoints) results.push("NIKHIL");
        else results.push("DRAW");
    }

    return results;
}

// Sample Input
const t = 3;
const matches = [
    "CDCDCD",
    "CCCCCC",
    "NNNNNN"
];

// Output
console.log(chessChampion(t, matches));