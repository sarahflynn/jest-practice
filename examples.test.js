const { data, strs } = require('./examples');

test('object', () => {
  expect(data).toEqual({
    one: 1,
    two: 2
  })
});

test('object assignment', () => {
  data.three = 3;
  expect(data).toEqual({
    one: 1,
    two: 2,
    three: 3
  })
});

test('there is no I in team', () => {
  expect(strs[0]).not.toMatch(/I/);
});

test('there is stop in Christoph', () => {
  expect(strs[1]).toMatch(/stop/);
});