const multiplicacion = require('./multiplicacion');

test('10x10 es igual a 100', () => {
  expect(multiplicacion(10, 10)).toBe(100);
});