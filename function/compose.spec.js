const { test } = require('tape');
const {
  compose,
  isEven,
  isNumber,
} = require('../index');

const increment = x => x + 1;
const multiplyByTen = x => x * 10;

test('Compose takes any number of functions', t => {
  t.equal(compose(), undefined, 'compose without params returns undefined');
  t.equal(compose(increment)(1), 2, 'compose accepts 1 function');
  t.equal(compose(increment, increment)(1), 3, 'compose takes 2 functions');
  t.equal(compose(increment, increment, increment, increment, increment)(1), 6, 'compose takes 2 functions');
  t.end();
});

test('Composed functions are called in right-to-left order', t => {
  // 20 * (1 + 1)
  const testFns = compose(multiplyByTen, increment);
  const result = testFns(1);
  const expected = 20
  t.equal(result, expected, 'Functions were evaluated from right-to-left');
  t.end();
});

test('Composed functions take any number of arguments', t => {
  const testFn = compose((...args) => args);
  t.deepEqual(testFn(), [], 'Composed functions can handle no args');
  t.deepEqual(testFn('one'), ['one'], 'Composed functions can handle 1 arg');
  t.deepEqual(testFn('one', 'two'), ['one', 'two'], 'Composed functions can handle 2 args');
  t.deepEqual(testFn('one', 'two', 'three', 'four', 'five', 'six'), ['one', 'two', 'three', 'four', 'five', 'six'],
    'Composed functions can handle 6 args');
  t.end();
});

