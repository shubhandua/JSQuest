function checkPANValidity(pan) {
    const panFormat = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return panFormat.test(pan) ? "YES" : "NO";
}

const testPANs = ["ABCDE1234F", "A1CDE1234Z", "ABCDE12345", "1234ABCDEZ"];

testPANs.forEach(pan => {
    console.log(checkPANValidity(pan));
});
