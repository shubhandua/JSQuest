function blobbyVolleyScores(moves) {
    let scoreA = 0;
    let scoreB = 0;
    let currentServer = 'A';

    for (let move of moves) {
        if (move === 'A') {
            if (currentServer === 'A') {
                scoreA++;
            } else {
                currentServer = 'A';
            }
        } else if (move === 'B') {
            if (currentServer === 'B') {
                scoreB++;
            } else {
                currentServer = 'B';
            }
        }
    }

    return `${scoreA} ${scoreB}`;
}

// Sample Input
const input = "ABABABBA";
console.log(blobbyVolleyScores(input)); // Output: 2 3
