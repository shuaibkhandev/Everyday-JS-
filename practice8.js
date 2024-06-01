// Understand Concept of Recursion

// function countDown(num) {
// //   debugger;
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
// }

// function countDown(num) {
//   debugger;
//   if (num == 0) {
//     return;
//   }
//   console.log(num);
//   countDown(num - 1);
// }
// countDown(10);

// find factorial

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));
