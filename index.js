const { rest } = require('./array');
const { first } = require('./array');

const { isNumber } = require('./number');
const { isEven } = require('./number');

const { complement } = require('./function');

module.exports = {
  // Number
  isNumber,
  isEven,

  // Array
  rest,
  first,

  // Function
  complement,
};
