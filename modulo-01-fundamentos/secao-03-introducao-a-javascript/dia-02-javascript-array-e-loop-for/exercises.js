let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let eachValue = 0; eachValue < numbers.length; eachValue += 1) {
  console.log(numbers[eachValue]);
}

let sum = 0;

for (let sumNumber = 0; sumNumber < numbers.length; sumNumber += 1) {
  sum += numbers[sumNumber];
}
console.log("A soma é: " + sum);

let media = sum / numbers.length;
if (media > 20) {
  console.log("A média é um valor maior que 20.");
} else {
  console.log("A média é um valor menor que 20.");
}

let highestNumber = numbers[0];
let smallestNumber = numbers[0];
for (let eachNumber = 1; eachNumber < numbers.length; eachNumber += 1) {
  if (numbers[eachNumber] > highestNumber) {
    highestNumber = numbers[eachNumber];
  } else if (numbers[eachNumber] < smallestNumber) {
    smallestNumber = numbers[eachNumber];
  }
}
console.log("O maior número é: " + highestNumber);
console.log("O menor número é: " + smallestNumber);

let impar = 0;
for (let numImpar = 0; numImpar < numbers.length; numImpar += 1) {
  if (numbers[numImpar] % 2 !== 0) {
    impar += 1;
  }
}

if (impar === 0) {
  console.log("Nenhum número impar encontrado!");
} else {
  console.log("Total de nº impares encontrados: " + impar);
}

let counter = [];
for (let value = 1; value <= 25; value += 1) {
  counter.push(value);
}
console.log(counter);

let fatorial = 1;

for (let valueFatorial = 10; valueFatorial > 0; valueFatorial -= 1) {
  fatorial *= valueFatorial;
}

console.log("O fatorial de 10 é: " + fatorial);

let word = "tryber";
let reverseWord = "";

for (let reversing = 0; reversing < word.length; reversing += 1) {
  reverseWord += word[word.length - 1 - reversing];
}

console.log("A palavra " + word + " invertida é: " + reverseWord);

let array = ["java", "javascript", "python", "html", "css"];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log("A maior palavra é: " + biggestWord);
console.log("A menor palavra é: " + smallestWord);
