function curry(fn) {
  if (typeof fn !== 'function') {
    throw new Error(`Expected function but got ${typeof fn}`);
  }
  return function func(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      const argsToPass = args.concat(args2);
      return func.apply(this, argsToPass);
    };
  };
}

export {
  curry,
};
