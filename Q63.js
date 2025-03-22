// 1. Matching Specific String
const pattern1 = /^hackerrank$/;
console.log(pattern1.test("hackerrank")); 

// 2. Matching Anything But a Newline
const pattern2 = /^.+$/; 
console.log(pattern2.test("HackerRank"));   

// 3. Matching Digits & Non-Digit Characters
const pattern3 = /\d\D\d\D\d\D/;
console.log(pattern3.test("1a2b3c")); 
