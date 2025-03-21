function wildcardMatching(testCases) {
    testCases.forEach(([str1, str2]) => {
        if (str1.length !== str2.length) {
            console.log("No");
            return;
        }

        let match = true;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== '?' && str2[i] !== '?' && str1[i] !== str2[i]) {
                match = false;
                break;
            }
        }

        console.log(match ? "Yes" : "No");
    });
}

const testCases = [
    ["a?c", "abc"],
    ["??", "ab"],
    ["code?", "codeX"],
    ["chef", "ch?f"],
    ["wild?", "wildo"],
    ["abc", "def"]
];

wildcardMatching(testCases);
