function dnaStorage(str) {
    let result = "";

    for (let i = 0; i < str.length; i += 2) {
        const pair = str.substring(i, i + 2);
        switch (pair) {
            case '00':
                result += 'A';
                break;
            case '01':
                result += 'T';
                break;
            case '10':
                result += 'C';
                break;
            case '11':
                result += 'G';
                break;
        }
    }

    return result;
}

// Example usage
const input = "0100110011"; // Sample input string
console.log(dnaStorage(input));
