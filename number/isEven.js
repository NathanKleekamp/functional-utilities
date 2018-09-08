const { isNumber } = require('./isNumber');

const isEven = num => {
  return isNumber(num) && num % 2 === 0;
};

module.exports = {
  isEven,
};

