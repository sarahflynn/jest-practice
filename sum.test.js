const sum = require('./sum');

test('sums 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('<, >, = for sum of 2 + 2', () => {
  expect(sum(2, 2)).toBeLessThan(6);
  expect(sum(2, 2)).toBeGreaterThan(3);
});

test('adding floating point nums', () => {
  expect(sum(.1, .2)).toBeCloseTo(.3);
});