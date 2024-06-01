// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

let arr = [2, 3, 12, 7, 8, 9, 10];

const filterEvenNumbers = () => arr.filter((num) => num % 2 === 0);

console.log(filterEvenNumbers(arr));
