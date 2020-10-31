// You can change the `args`
function bind(fn, ...rest) {
  const obj = rest[0] && typeof rest[0] === 'object' ? rest[0] : false;
  if (typeof fn !== 'function') {
    throw new Error(`Expected function but got the ${typeof fn[0]}`);
  }
  if (!obj) {
    throw new Error(`Expected object but got the ${typeof rest[1]}`);
  }
  // Getting the remaining arguments from bind
  const remainingArgs = rest.slice(1, rest.length);

  return function (...args) {
    // Concat remaining argument from bind to current function arguments
    const argsToPass = remainingArgs.concat(args);
    return fn.apply(obj, argsToPass);
  };
}

module.exports = { bind };
