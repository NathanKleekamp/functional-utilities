const { rest } = require('./array');
const { first } = require('./array');

const { isNumber } = require('./number');
const { isEven } = require('./number');

module.exports = {
  // Number
  isNumber,
  isEven,

  // Array
  rest,
  first,
};
