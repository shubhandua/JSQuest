function wordleSolution(correctWord, guessWord) {
    let result = "";

    for (let i = 0; i < correctWord.length; i++) {
        if (correctWord[i] === guessWord[i]) {
            result += 'G'; 
        } else if (correctWord.includes(guessWord[i])) {
            result += 'Y'; 
        } else {
            result += 'B'; 
        }
    }

    return result;
}


const correctWord = "APPLE"; 
const guessWord = "ALERT";   
console.log(wordleSolution(correctWord, guessWord));
