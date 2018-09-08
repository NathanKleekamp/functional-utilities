const isNumber = num => {
  const isNumType = typeof num === 'number';
  if (isNumType && isNaN(num)) return false;
  return isNumType;
};

module.exports = {
  isNumber,
};
