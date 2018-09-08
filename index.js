const {
  rest,
  first,
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

  // Function
  complement,
};
