const { test } = require('tape');
const { isNotNumber } = require('../index');

test('isNotNumber returns appropriate boolean value', t => {
  t.equal(isNotNumber(0), false, '0 is a number');
  t.equal(isNotNumber(1.0), false, '1.0 is a number');
  t.equal(isNotNumber(Infinity), false, 'Infinity is a number');
  t.equal(isNotNumber('0'), true, 'A string is not a number');
  t.equal(isNotNumber([]), true, 'An array is not a number');
  t.equal(isNotNumber({}), true, 'An object is not a number');
  t.equal(isNotNumber(true), true, 'true is not a number');
  t.equal(isNotNumber(), true, 'No arguments returns false');
  t.equal(isNotNumber(null), true, 'null is not a number');
  t.end();
});
