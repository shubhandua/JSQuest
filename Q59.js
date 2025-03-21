function typingLetter(testCases) {
    testCases.forEach(input => {
        let seen = {}, count = 0;

        for (let i = 0; i < input.length; i++) {
            if (!seen[input[i]]) {
                seen[input[i]] = true;
                count++;
            }
        }

        console.log(count);
    });
}

const testCases = [
    "hello",
    "aaaa",
    "codechef",
    "abcabc",
    "programming",
    "mississippi"
];

typingLetter(testCases);
