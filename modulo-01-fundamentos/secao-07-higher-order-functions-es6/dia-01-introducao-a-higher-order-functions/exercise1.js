const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui
const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);
};

emailListInData.forEach((item) => {
  enviarEmail(item);
});