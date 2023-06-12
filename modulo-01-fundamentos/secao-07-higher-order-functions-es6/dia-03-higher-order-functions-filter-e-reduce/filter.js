// filter sempre retorna um array

const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];
const names = dados.filter((item) => typeof item === 'string');
const phones = dados.filter((item) => typeof item !== 'string');
console.log(names); // [ 'Luca', 'Ana', 'Marlete' ]
console.log(phones);// [ 91234567, 92345678, 93456789 ]



const listaNumeros = [10, 20, 30, 40];
// Armazena o resultado em uma nova variável maiorVinte
let maiorVinte = listaNumeros.filter((item) => {
  // retorne apenas os elementos que são maiores do que vinte
  return item > 20;
});

console.log(maiorVinte);

const arr = ['Ana', 'Pedro', 'Giovana'];
const filtered = arr.filter((element) => element === 'Ana');
console.log(filtered);
// arr.filter((element, index, array) => console.log('Elemento:', element, 'Indice:', index, 'Array:', array));
// Elemento: Ana Indice: 0 Array: [ 'Ana', 'Pedro', 'Giovana' ]
// Elemento: Pedro Indice: 1 Array: [ 'Ana', 'Pedro', 'Giovana' ]
// Elemento: Giovana Indice: 2 Array: [ 'Ana', 'Pedro', 'Giovana' ]

const notasEstudantes = [
  {
    nome: 'Ana',
    nota: 100
  },
  {
    nome: 'Bia',
    nota: 60
  },
  {
    nome: 'Paulo',
    nota: 100
  },
  {
    nome: 'Cris',
    nota: 100
  },
  {
    nome: 'Luiz',
    nota: 30
  },
];

const estudantesAprovados = notasEstudantes.filter((pessoa) => pessoa.nota >= 80);
console.log(estudantesAprovados);

const estudantesReprovados = notasEstudantes.filter((pessoa) => !(pessoa.nota >= 80));
console.log(estudantesReprovados);