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
} = require('./number');

const { complement } = require('./function');

module.exports = {
  // Number
  isNumber,
  isNotNumber,
  isEven,
  isOdd,

  // Array
  rest,
  first,
  last,

  // Function
  complement,
};
