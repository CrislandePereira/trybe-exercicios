const { encode, decode } = require('./exercise3');

describe('Exercicio 3', () => {
  it('Testa se enconde e decode são funções', () => {
    expect(typeof encode).toBe('function');
  });
});