function toTitleCase(str) {
    return str
        .toLowerCase()                 // Ensure the entire string is in lowercase first
        .split(' ')                    // Split the string into words
        .map(word =>                   // Map through each word
            word.charAt(0).toUpperCase() + word.slice(1) // Capitalize first letter
        )
        .join(' ');                    // Join the words back into a string
}

// Sample Input/Output
console.log(toTitleCase("hello world"));         // Output: "Hello World"
console.log(toTitleCase("CODECHEF is fun"));     // Output: "Codechef Is Fun"
console.log(toTitleCase("jAvAsCrIpT roCks"));    // Output: "Javascript Rocks"
