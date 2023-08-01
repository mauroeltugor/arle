const potencia = require('./potencia');

test('el resultado es de 24', () => {
  expect(potencia(2, 3)).toBe(8);
})