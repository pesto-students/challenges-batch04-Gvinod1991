function map(obj, callbackFunction) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      return callbackFunction([key, map(value, callbackFunction)]);
    }
    return callbackFunction([key, value]);
  }));
}
function filter(obj, callbackFunction) {
  return Object.fromEntries(Object.entries(obj).filter(
    ([key, value]) => callbackFunction([key, value]),
  ));
}
function invert(obj) {
  return Object.fromEntries(Object.entries(obj).map(
    ([key, value]) => {
      if (typeof value !== 'object') {
        return [value, key];
      }
      return [key, value];
    },
  ));
}
function merge(...args) {
  return Object.fromEntries(args.map((obj) => Object.entries(obj).flat()));
}
function all(obj, callbackFunction) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => acc && callbackFunction(key, value), true,
  );
}
function some(obj, callbackFunction) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => acc || callbackFunction(key, value), true,
  );
}
export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
