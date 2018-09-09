const compose = (...fns) => {
  if (!fns.length) return;
  return fns.reduce((xs, x) => (...args) => xs(x.apply(null, args)));
}

module.exports = {
  compose,
};
