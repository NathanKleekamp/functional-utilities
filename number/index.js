const { complement } = require('../function/complement');
const { isNumber } = require('./isNumber');
const { isEven } = require('./isEven');

const isNotNumber = complement(isNumber);
const isOdd = complement(isEven);

module.exports = {
  isNumber,
  isNotNumber,
  isEven,
  isOdd,
};
