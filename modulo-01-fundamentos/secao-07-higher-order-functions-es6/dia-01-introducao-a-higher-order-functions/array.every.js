const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade.toLowerCase() === 'Aprovado'); // false

console.log(verifyGrades);

// Então o every executa a callback para cada um dos itens do array e verifica se todos eles possuem o texto 'Aprovado';