// Write a program that will take a number and print a right triangle attempting to use all numbers
// from 1 to that number. Submit solution in a file on email response.
// Sample outputs:
// Enter number: 10
// Output:
// 7 8 9 10
// 4 5 6
// 2 3
// 1

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter a valid number :: ', (input) => {
  const number = parseInt(input);
  // Check if input is a number or not
  if (number) {
    let count = 1;
    let result = []; // used to store result as array of arrays

    // Run the outer loop till `count + i < number` - to make perfect right trangle and
    // prevent cases where number in pattern exceeds the input number
    // e.g for input 12 we need to print number only up to 10 to make perfect right trangle
    for (let i = 0; count + i <= number; i++) {
      let temp = [];
      for (let j = 0; j < i + 1; j++) {
        temp.push(count++);
      }
      result.push(temp);
    }

    // Print the stored result in the reverse order
    console.log('Output ::');
    result.reverse().forEach(e => console.log(e.join("   ")));
  } else {
    console.log('Input is not a number!');
  }
  readline.close();
});
