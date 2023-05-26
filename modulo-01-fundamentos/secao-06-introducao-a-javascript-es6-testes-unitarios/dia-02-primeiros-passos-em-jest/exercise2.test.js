const myFizzBuzz = require('./exercise2');

describe('Exercicio 2', () => {
  it('Execute a função, sendo um número divisível por 3 e 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Execute a função, sendo um número divisível por 3, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Execute a função, sendo um número divisível por 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Execute a função, sendo um número não divisível por 3 ou 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(1)).toBe(1);
  });
  it('Execute a função, sendo um parâmetro que não é um número, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz('ola')).toBe(false);
  });
});