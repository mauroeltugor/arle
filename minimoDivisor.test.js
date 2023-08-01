const minimoDiv = require('./minimoDivisor');

test('el resultado es de 8', () => {
  expect(minimoDiv(10, 8)).toBe(4);
})