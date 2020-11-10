const allPromises = promisesArgs => {
  if (typeof promisesArgs === 'undefined' || promisesArgs === null) {
    throw new Error(`Expected argument to be defined or not null but got ${typeof promisesArgs}`);
  }
  if (typeof promisesArgs[Symbol.iterator] !== 'function') {
    throw new Error(`Expected argument to be iterable but got ${typeof promisesArgs}`);
  }

  return new Promise((resolve, reject) => {
    const results = [];
    let completedResolves = 0;
    promisesArgs = Array.prototype.slice.call(promisesArgs);
    promisesArgs.map((value, i) => {
      Promise.resolve(value).then((result) => {
        results[i] = result;
        completedResolves += 1;
        if (completedResolves === promisesArgs.length) {
          resolve(results);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  });
};

export { allPromises };
