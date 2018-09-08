const { test } = require('tape');
const { isNumber } = require('../index');

test('isNumber returns appropriate boolean value', t => {
  t.equal(isNumber(0), true, '0 is a number');
  t.equal(isNumber(1.0), true, '1.0 is a number');
  t.equal(isNumber(Infinity), true, 'Infinity is a number');
  t.equal(isNumber('0'), false, 'A string is not a number');
  t.equal(isNumber([]), false, 'An array is not a number');
  t.equal(isNumber({}), false, 'An object is not a number');
  t.equal(isNumber(true), false, 'true is not a number');
  t.equal(isNumber(), false, 'No arguments returns false');
  t.equal(isNumber(null), false, 'null is not a number');
  t.end();
});
