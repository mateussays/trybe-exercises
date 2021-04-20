function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('Testes da função sum', () => {

  test('Teste se é uma função', () => {
    expect(typeof sum).toBe('function');
  });

  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });

  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  })

});