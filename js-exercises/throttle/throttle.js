function throttle(fn, timeInMs) {
  let callFunctionFlag = true;
  let timeout;
  return (...args) => {
    if (callFunctionFlag) {
      fn.apply(this, args);
      callFunctionFlag = false;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callFunctionFlag = true;
    }, timeInMs);
  };
}
export { throttle };
