const { test } = require('tape');
const { complement } = require('../index');

test('Complement creates an inverse of the boolean-returning function passed to it', t => {
  const isEqual = (x, y) => x === y;
  const isNotEqual = complement(isEqual);
  t.equal(isNotEqual(1, 0), true, '1 !== 0');
  t.equal(isNotEqual(0, 0), false, '0 === 0');
  t.equal(isNotEqual(NaN, NaN), true, 'NaN !== NaN');
  t.end();
});

test('Complement throws a TypeError when nothing is passed to it', t => {
  t.throws(complement(), /TypeError/, 'empty param to complement throws a TypeError');
  t.end();
});
