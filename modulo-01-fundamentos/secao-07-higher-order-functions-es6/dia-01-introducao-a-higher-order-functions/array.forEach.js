const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, index) => {
  pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});

console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element) => console.log(element * 2));

// Você também pode separar a callback do forEach em uma outra função:
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiply = (element) => {
  console.log(element * 2);
}

numbers.forEach(multiply);

// Exemplo do video

let listaPessoasAprovadas = [
  'ada@example.com',
  'marie@example.com',
  'margaret@example.com',
  'alan@example.com'
];

const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);
};

listaPessoasAprovadas.forEach((item, posicao, array) => {
  enviarEmail(item);
  console.log(`Sua posição é a de: ${posicao}`);
  console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
});