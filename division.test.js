const division = require('./division');

test('la divicion tiene un resultado de 4', () => {
  expect(division(4, 0)).toBe(4);
})