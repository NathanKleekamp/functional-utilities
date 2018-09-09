const { test } = require('tape');
const { identity } = require('../index');

test('Identity returns what it was passed', t => {
  const testObj = { foo: 'bar' }
  const testArr = [1];
  t.equal(identity(testObj), testObj, 'Identity will return the same object');
  t.equal(identity(testArr), testArr, 'Identity will return the same array');
  t.equal(identity(identity), identity, 'Identity will return the sam fn');
  t.equal(identity(undefined), undefined, 'Identity will return passed undefined');
  t.equal(identity(null), null, 'Identity will return passed null');
  t.end();
});
