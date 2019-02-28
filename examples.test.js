const { 
  data, 
  strs, 
  shoppingList,
  compileAndroidCode
} = require('./examples');

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

test('shopping list contains celery', () => {
  expect(shoppingList).toContain('celery');
});

test('shopping list equals', () => {
  expect(shoppingList).toEqual([
    'cookies',
    'paper towels',
    'celery'
  ]);
});

test('compiling android function throws error', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
})