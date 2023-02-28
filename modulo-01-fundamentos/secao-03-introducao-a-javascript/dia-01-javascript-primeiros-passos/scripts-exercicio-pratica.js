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

// Exercicio Xadrez
let piece = "Pawn";

switch (piece) {
  case "Queen":
    console.log(
      "Move in any direction - vertical, horizontal and diagonals (as many spaces as you want)."
    );
    break;
  case "King":
    console.log(
      "Move in any direction - vertical, horizontal and diagonals (just one space)."
    );
    break;
  case "Bishop":
    console.log("It moves diagonally, as many squares as you want.");
    break;
  case "Tower":
    console.log(
      "Move in a straight line, both vertically and horizontally, as many squares as you like."
    );
    break;
  case "Horse":
    console.log(
      "You can move two squares horizontally and one square vertically, or two squares vertically and one square horizontally, in L."
    );
    break;
  case "Pawn":
    console.log(
      "You always move one space forward, except on the first move, when you can move two spaces."
    );
    break;
  default:
    console.log("Error: Piece invalid!");
}

// Exercicio Notas

let score = 91;

if (score < 0 || score > 100) {
  console.log("Nota Inválida!");
} else if (score >= 90) {
  console.log("Score A");
} else if (score >= 80) {
  console.log("Score B");
} else if (score >= 70) {
  console.log("Score C");
} else if (score >= 60) {
  console.log("Score D");
} else if (score >= 50) {
  console.log("Score E");
} else if (score < 50) {
  console.log("Score F");
}

// Exercicios Par

const value1 = 9;
const value2 = 10;
const value3 = 15;

if (value1 % 2 == 0 || value2 % 2 == 0 || value3 % 2 == 0) {
  console.log("true");
} else {
  console.log("false");
}

if (value1 % 2 == 1 || value2 % 2 == 1 || value3 % 2 == 1) {
  console.log("true");
} else {
  console.log("false");
}

// Exercicio Custo e Lucro

if (value1 >= 0 && value3 >= 0) {
  let totalCost = value1 * 1.2;
  let totalLucro = value3 - totalCost;
  console.log("O lucro é R$" + totalLucro);
} else {
  console.log("Erro, valores inválidos!");
}

// Exercicio INSS

let aliquotINSS;
let aliquotIR;
let grossSalary = 2000.0;
if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}
let baseSalary = grossSalary - aliquotINSS;
if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = baseSalary * 0.075 - 142.8;
} else if (baseSalary <= 3751.05) {
  aliquotIR = baseSalary * 0.15 - 354.8;
} else if (baseSalary <= 4664.68) {
  aliquotIR = baseSalary * 0.225 - 636.13;
} else {
  aliquotIR = baseSalary * 0.275 - 869.36;
}
console.log("Salário: R$" + (baseSalary - aliquotIR) + ",00");
