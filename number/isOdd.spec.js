const { test } = require('tape');
const { isOdd } = require('../index');

test('isOdd returns appropriate boolean value when a number is passed', t => {
  t.equal(isOdd(1), true, '1 is odd');
  t.equal(isOdd(100), false, '100 is even');
  t.equal(isOdd(0), false, '0 is even');
  t.equal(isOdd(-0), false, '-0 is even');
  t.equal(isOdd(-1), true, '-1 is odd');
  t.equal(isOdd(-2), false, '-2 is even');
  t.equal(isOdd(10.0), false, '10.0 is even');
  t.equal(isOdd(-10.0), false, '-10.0 is even');
  t.equal(isOdd(10.1), true, '10.1 is not even');
  t.equal(isOdd(-10.1), true, '-10.1 is not even');
  t.end()
});

