const { test } = require('tape');
const { rest } = require('../index');

test('Rest returns an empty array when passed an empty array', t => {
  const testArray = [];
  t.deepEqual(rest(testArray), [], 'return empty array');
  t.end();
});

test('Rest returns an empty array when passed an array with one item', t => {
  const testArray = [1];
  t.deepEqual(rest(testArray), [], 'return empty array');
  t.end();
});

test('Rest returns an array without the first item', t => {
  const testArray = [1, 2, 3, 4, 5];
  const expected = [2, 3, 4, 5];
  t.deepEqual(rest(testArray), expected, 'returns correct output');
  t.end();
});

