const { test } = require('tape');
const { hasKey } = require('./hasKey');

test('hasKey returns true if the "dot" notated key exists in the object', (t) => {
  const object = {
    address: {
      city: 'arlington',
    },
  };
  const dotNotation = 'address.city';
  const result = hasKey(dotNotation)(object);
  t.equals(result, true, 'hasKey found the key');
  t.end();
});

test('hasKey returns false if the "dot" notated key does not exist in the object', (t) => {
  const object = {
    address: {
      city: 'arlington',
    },
  };
  const dotNotation = 'address.street';
  const result = hasKey(dotNotation)(object);
  t.equals(result, false, 'hasKey did not find the key');
  t.end();
});

test('hasKey checks for a key on a non-nested object', (t) => {
  const object = {
    foo: 'foo',
    bar: 'bar',
  };
  t.equals(hasKey('foo')(object), true, 'hasKey found the key');
  t.equals(hasKey('baz')(object), false, 'hasKey did not find the key');
  t.end();
});

test('hasKey works with an object that has an "undefined" value', (t) => {
  const object = {
    address: {
      city: 'arlington',
      zip: undefined,
    },
  };
  t.equals(hasKey('address.zip')(object), true, 'hasKey found key with undefined value');
  t.end();
});
