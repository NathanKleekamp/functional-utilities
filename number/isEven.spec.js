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

test('isEven returns false if a non-Number is passed', t => {
  t.equal(isEven('0'), false, 'A string value is not even');
  t.equal(isEven([]), false, 'A array is not even');
  t.equal(isEven({}), false, 'An object is not even');
  t.equal(isEven(true), false, 'True is not even');
  t.equal(isEven(), false, 'Empty call to isEven returns false');
  t.equal(isEven(null), false, 'null is not even');
  t.equal(isEven(NaN), false, 'NaN is not even');
  t.equal(isEven(Infinity), false, 'Infinity is not even');
  t.end();
});
