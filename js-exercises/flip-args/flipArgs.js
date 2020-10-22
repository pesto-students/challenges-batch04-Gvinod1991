function flipArgs(fun) {
  return function (...args) {
    if (args.length > 0) {
      return fun(...args.reverse());
    }
    return null;
  };
}
export {
  flipArgs,
};
