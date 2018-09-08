const { test } = require('tape');
const { last } = require('../index');

test('Last returns the last item in the array', t => {
  const testArray = [1, 2, 3, 4, 5];
  const expected = [5];
  t.deepEqual(last(testArray), expected, 'last retrieved the last item');
  t.end();
});

test('Last is noop when passed a single-item array', t => {
  const testArray = [1];
  const expected = [1];
  t.deepEqual(last(testArray), expected, 'returns the passed array');
  t.end();
});

test('Last returns an array when no params passed', t => {
  t.deepEqual(last(), [], 'an empty array was returned');
  t.end();
});
