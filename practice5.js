// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

const isPalindrom = (str) => str === str.split("").reverse().join("");

console.log(isPalindrom("WOW"));
