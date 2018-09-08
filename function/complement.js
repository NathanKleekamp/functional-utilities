const complement = fn => (...args) => !fn.apply(null, args);

module.exports = {
  complement,
};
