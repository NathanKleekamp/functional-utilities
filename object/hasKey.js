const { isZero } = require('..');

const hasKey = dotNotation => obj => {
  const checkForKey = ([first, ...last] = [], object) => {
    if (isZero(last.length)) {
      return Object.prototype.hasOwnProperty.call(object, first);
    }
    return checkForKey(last, object[first]);
  };

  return checkForKey(dotNotation.split('.'), obj);
};

module.exports = {
  hasKey,
};
