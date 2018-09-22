const {
  rest,
  first,
  last,
} = require('./array');
const {
  isNumber,
  isNotNumber,
  isEven,
  isOdd,
  isZero,
  isNotZero,
} = require('./number');
const {
  complement,
  compose,
  identity,
} = require('./function');
const {
  hasKey,
} = require('./object');

module.exports = {
  isNumber,
  isNotNumber,
  isEven,
  isOdd,
  isZero,
  isNotZero,
  rest,
  first,
  last,
  complement,
  compose,
  identity,
  hasKey,
};
