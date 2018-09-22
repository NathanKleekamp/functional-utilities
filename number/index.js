const { complement } = require('../function/complement');
const { isNumber } = require('./isNumber');
const { isEven } = require('./isEven');
const { isZero } = require('./isZero');

const isNotNumber = complement(isNumber);
const isOdd = complement(isEven);
const isNotZero = complement(isZero);

module.exports = {
  isNumber,
  isNotNumber,
  isEven,
  isOdd,
  isZero,
  isNotZero,
};
