const limitFunctionCallCount = (cb, n) => {
  let functionCallCount = 0;
  return function (...args) {
    if (functionCallCount < n) {
      functionCallCount += 1;
      /* Applying the array of args here */
      return cb(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
