const { encode, decode } = require('./exercise3');

describe('Exercicio 3', () => {
  it('Testa se enconde e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5.', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Testa se 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u.', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Testa se as demais letras não são convertidos para cada caso;', () => {
    expect(encode('nome')).toBe('n4m2');
  });
  it('Testa se as demais letras não são convertidos para cada caso;', () => {
    expect(encode('casa')).toBe('c1s1');
  });
  it('Testa se as demais letras não são convertidos para cada caso;', () => {
    expect(encode('bola')).toBe('b4l1');
  });
  it('Testa se as demais números não são convertidos para cada caso;', () => {
    expect(decode('n4m2')).toEqual('nome');
  });
  it('Testa se as demais números não são convertidos para cada caso;', () => {
    expect(decode('c1s1')).toEqual('casa');
  });
  it('Testa se as demais números não são convertidos para cada caso;', () => {
    expect(decode('b4l1')).toEqual('bola');
  });
  it('Checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('tryber').length).toEqual(6);
    expect(decode('tryber').length).toEqual(6);
  });
});