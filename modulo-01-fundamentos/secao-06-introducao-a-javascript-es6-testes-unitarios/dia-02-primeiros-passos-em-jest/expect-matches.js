expect(5).toBe('5'); // testa igualdade estrita entre o valor passado para expect e seu argumento.

// acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:
test('Igualdade de array e object', () => { 
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});

// tipos primitivos (Ex. number, string, boolean, etc) -> Nos tipos primitivos, a atribuição ocorre por valor, ou seja, uma cópia do valor original, pois eles são imutáveis:

let gemeoUm = 'Cabelo comprido';
let gemeoDois = gemeoUm;

gemeoUm = 'Careca';

console.log(gemeoUm); // Careca
console.log(gemeoDois); // Cabelo comprido

// objetos (Ex. Objetos, Funções, Arrays, etc.) -> têm atribuição por referência, ou seja, a cada vez que você cria um novo objeto, cria-se um novo espaço na memória para ele. Eles são mutáveis:

let myName = { firstName: 'Pedro' };
let identity = myName;

myName.firstName = 'Carol';

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol