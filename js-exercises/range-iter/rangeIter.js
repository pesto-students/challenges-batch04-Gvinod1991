function validator(lb, ub) {
  if (!lb) {
    throw new TypeError('undefined is not a number');
  }
  if (!ub) {
    throw new TypeError('undefined is not a number');
  }
  if (typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }
  if (typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
}

function* rangeIter(lb, ub) {
  if (lb > ub) {
    return [];
  }
  while (lb <= ub) {
    yield lb;
    lb += 1;
  }
}

function withValidator(fn, validator) {
  return (...args) => {
    validator(...args);
    return fn(...args);
  };
}
const rangeIterWithValidator = withValidator(rangeIter, validator);
export { rangeIterWithValidator as rangeIter };
