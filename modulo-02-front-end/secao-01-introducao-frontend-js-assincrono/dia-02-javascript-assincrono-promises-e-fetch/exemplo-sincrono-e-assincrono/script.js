const firstNumber = 9;
const secondNumber = 3;
let thirdNumber = firstNumber + secondNumber;
console.log(thirdNumber);//12

setTimeout(() => {
  thirdNumber = firstNumber - secondNumber;
  console.log(thirdNumber);//6
}, 1000);

console.log(thirdNumber); //12

// no console ele exibe a linha 4, 11 e depois de 1 seg ele exibe a linha 8!

// Outro exemplo:

console.log("Log 1"); //Log 1

setTimeout(() => console.log("Async log"), 1000); // Async log

console.log("Log 2"); //Log 2
console.log("Log 3"); //Log 3

// no console ele exibe a linha 17, 21, 22 e depois de 1 seg a linha 19!