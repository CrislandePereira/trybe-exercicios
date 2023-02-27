// Exercício 01
let a = 9;
let b = 7;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercício 02

const num1 = 13;
const num2 = 21;
const num3 = 37;

if (num1 > num2) {
  console.log("O número " + num1 + " é maior que o número " + num2);
} else {
  console.log("O número " + num2 + " é maior que o número " + num1);
}

if (num1 > num2 && num1 > num3) {
  console.log("O maior número dos 3 valores é " + num1 + " num1.");
} else if (num2 > num1 && num2 > num3) {
  console.log("O maior número dos 3 valores é " + num2 + " num2.");
} else {
  console.log("O maior número dos 3 valores é " + num3 + " num3.");
}

if (num1 > 0) {
  console.log("Positive!");
} else if (num1 < 0) {
  console.log("Negative!");
} else {
  console.log("Zero!");
}

// Exercicio Triangulo
let x = 37;
let y = 73;
let z = 70;

let somaTriangulo = x + y + z;
let positivo = x > 0 && y > 0 && z > 0;

if (positivo) {
  if (somaTriangulo === 180) {
    console.log("True");
  } else {
    console.log("False");
  }
} else {
  console.log("Angulos informados são inválidos!");
}
