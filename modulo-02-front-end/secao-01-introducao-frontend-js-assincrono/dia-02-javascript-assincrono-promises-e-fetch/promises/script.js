// Promise é um objeto usado para processamento assíncrono. Um Promise (de “promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca.
// Uma promise pode ter três estados:
// pending (pendente): é o estado inicial dela, ou seja, ela ainda está aguardando o término da execução do código assíncrono;
// fulfilled (realizada): quando a operação assíncrona foi realizada com sucesso. Também é comum dizer que quando a promise está nesse estado ela está resolvida;
// rejected (rejeitada): quando a operação assíncrona termina com algum erro.

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

resolvedPromise().then((response) => {
  console.log(`ResolvedPromise: O número gerado é ${response}.`);
});

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

rejectedPromise().then((response) => {
  console.log(`O número gerado é ${response}.`);
})
  .catch((error) => {
    console.log(`RejectPromise: ${error.message}`);
  });

// Promise com condiçao
const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        // resolvida
        resolve(randomNumber);
      } else {
        // reject
        reject(new Error(`O número ${randomNumber} não é válido! Somente números pares são válidos!`))
      }
    }, 1000);
  });

randomPromise()
  .then(response => {
    console.log(`Promise Resolvida: O número gerado é ${response}`)
  })
  .catch(error => {
    console.log(`Promise Rejeitada: ${erro.message} `);
  });