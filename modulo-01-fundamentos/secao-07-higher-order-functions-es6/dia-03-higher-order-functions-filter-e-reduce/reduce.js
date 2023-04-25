// Diferente das outras HOFs, o reduce recebe dois parâmetros: o primeiro é uma callback, e o segundo parâmetro é um valor inicial (que é opcional).
// o reduce, que é responsável por passar por cada um dos valores do array, reduzindo o array a um único valor, que nesse caso é o valor total.

const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`acc:`, acc); // acumulador - acc
  console.log(`curr:`, curr); // valorAtual - curr
  console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0); // 0 é o valor inicial


const numbers = [1, 32, 44, 2, 3];

const totalSum = numbers.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o de curr é ${curr}`);

  return acc + curr;
}, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

console.log(`valor final do acc é ${totalSum}`);
// por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.


// Organizando para simplificar
// Veja também que, ao invés de passar a lógica direto dentro da callback do reduce, você pode criar uma função externa e chamá-la como sendo o parâmetro callback:

const number = [1, 32, 44, 2, 3];

const sumNumbers = (acc, curr) => acc + curr;

const totalSumNumber = number.reduce(sumNumbers, 30);

console.log(totalSumNumber); //112



const numeros = [50, 85, -30, 3, 15];
const bigger = numeros.reduce((bigger, number) => {
  return bigger > number ? bigger : number
});
console.log(bigger); // 85