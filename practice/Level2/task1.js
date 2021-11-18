// Perform addition, subtraction, multiplication, and division 
// by taking input using the prompt() function and show all the
//  results by concatenating it with a string like: sum is ... , product is

let number1 = prompt("Enter first number");
let number2 = prompt("Enter second number");
let a = parseInt(number1);
let b = parseInt(number2); 
let sum = a+b;
let diff = a-b;
let mul = a*b;
let div = a/b;
console.log("Sum is"+" "+ sum);
console.log("Difference is"+" "+ diff);
console.log("Multiplication is"+" "+ mul);
console.log("Division is"+" "+ div);