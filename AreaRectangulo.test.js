const area = require('./AreaRectangulo');

test('eL area del rectangulo es de 96', () => {
  expect(area(12, 8)).toBe(96);
})