
const readlineSync = require('readline-sync');

const sum = (num1, num2) => num1 + num2;

const num1 = readlineSync.questionInt('Please enter your first number: ');
const num2 = readlineSync.questionInt('Please enter your second number: ');

console.log(sum(num1, num2));

// console.log('Welcome!');

// const name = readlineSync.question('May I have your name? ');

// console.log(`Hello, ${name}!`);