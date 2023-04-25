// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// cria uma nova variável para armazenar os itens adicionados:
const newItems = [...items, 'Boné'];
console.log(newItems); //[ 'Camiseta', 'Carregador', 'Chinelo', 'Boné' ]

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

// Utilizando spread em objetos

const product = {
  id: 1,
  name: 'Camiseta',
};

// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: '23'}

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800

// PARA FIXAR:

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Morango', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Nutella', 'Ninho', 'Leite Condensado'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const finalResult = [...specialFruit, ...additionalItens];
  return finalResult;
};

console.log(fruitSalad(specialFruit, additionalItens));