const { test } = require('tape');
const { first } = require('../index');

test('First returns an empty array when passed an empty array', (t) => {
  const testArray = [];
  t.deepEqual(first(testArray), [], 'return empty array');
  t.end();
});

test('First is noop when passed a single-item array', (t) => {
  const testArray = [1];
  const expected = [1];
  t.deepEqual(first(testArray), expected, 'returns the passed array');
  t.end();
});

test('First returns an array with only the first item', (t) => {
  const testArray = [1, 2, 3, 4, 5];
  const expected = [1];
  t.deepEqual(first(testArray), expected, 'returns the first item in the array');
  t.end();
});
