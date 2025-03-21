function convertStringToNumber(testCases) {
    testCases.forEach(str => {
        let num = 0, isNegative = false, startIndex = 0;

        if (str[0] === '-') {
            isNegative = true;
            startIndex = 1;
        }

        for (let i = startIndex; i < str.length; i++) {
            let digit = str.charCodeAt(i) - '0'.charCodeAt(0);
            num = num * 10 + digit;
        }

        if (isNegative) {
            num = -num;
        }

        console.log(num);
    });
}

const testCases = [
    "123",
    "045",
    "-789",
    "0",
    "56789",
    "-00042"
];

convertStringToNumber(testCases);
