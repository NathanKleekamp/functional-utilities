const { test } = require('tape');
const {
  isZero,
  isNotZero,
} = require('..');

test('isZero', (t) => {
  t.true(isZero(0), 'zero is zero');
  t.false(isZero('0'), 'string zero is not zero');
  t.false(isZero([]), 'an array is not zero');
  t.false(isZero({}), 'an object is not zero');
  t.false(isZero(), 'undefined param is not zero');
  t.false(isZero(undefined), 'undefined param is not zero');
  t.false(isZero(null), 'null param is not zero');
  t.false(isZero(false), 'a Boolean is not zero');
  t.end();
});

test('isNotZero', (t) => {
  t.false(isNotZero(0), 'zero is zero');
  t.true(isNotZero('0'), 'string zero is not zero');
  t.true(isNotZero([]), 'an array is not zero');
  t.true(isNotZero({}), 'an object is not zero');
  t.true(isNotZero(), 'undefined param is not zero');
  t.true(isNotZero(undefined), 'undefined param is not zero');
  t.true(isNotZero(null), 'null param is not zero');
  t.true(isNotZero(false), 'a Boolean is not zero');
  t.end();
});
