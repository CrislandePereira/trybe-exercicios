const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// passa funçao call back dentro do sort: a, b
inventory.sort((a, b) => a - b);
console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// troca a operação para b - a = maior para menor
inventory.sort((a, b) => b - a);
console.log(inventory); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
people.sort((personA, personB) => personB.age - personA.age);

console.log(people);