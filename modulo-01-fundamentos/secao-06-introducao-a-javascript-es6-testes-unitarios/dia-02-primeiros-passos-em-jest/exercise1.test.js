const myRemove = require('./exercise1');

describe('Exercicio 1', () => {
  it('Verifica se a chamada retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se a chamada não retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  });
  it('Verifica se a chamada retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
