function chefAndFeedback(testCases) {
    testCases.forEach(feedback => {
        if (feedback.includes("010") || feedback.includes("101")) {
            console.log("Good");
        } else {
            console.log("Bad");
        }
    });
}

const testCases = [
    "001",
    "101",
    "11111",
    "010101"
];

chefAndFeedback(testCases);
