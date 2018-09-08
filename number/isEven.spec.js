const { test } = require('tape');
const { isEven } = require('../index');

test('isEven returns appropriate boolean value when a number is passed', t => {
  t.equal(isEven(1), false, '1 is not even');
  t.equal(isEven(100), true, '100 is even');
  t.equal(isEven(0), true, '0 is even');
  t.equal(isEven(-0), true, '-0 is even');
  t.equal(isEven(-1), false, '-1 is not even');
  t.equal(isEven(-2), true, '-2 is even');
  t.equal(isEven(10.0), true, '10.0 is even');
  t.equal(isEven(-10.0), true, '-10.0 is even');
  t.equal(isEven(10.1), false, '10.1 is not even');
  t.equal(isEven(-10.1), false, '-10.1 is not even');
  t.end();
});

