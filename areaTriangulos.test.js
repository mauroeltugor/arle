const area = require('./areaTriangulo');

test('eL area del triangulo es de 48 ', () => {
  expect(area(12, 8)).toBe(48);
})