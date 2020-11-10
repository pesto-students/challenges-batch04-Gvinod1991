import { allPromises } from '../all-promises/allPromises';

const allSettled = function (promises) {
  if (typeof promises === 'undefined' || promises === null) {
    throw new Error(`Expected argument to be defined or not null but got ${typeof promisesArgs}`);
  }
  if (typeof promises[Symbol.iterator] !== 'function') {
    throw new Error(`Expected argument to be iterable but got ${typeof promisesArgs}`);
  }
  promises = Array.prototype.slice.call(promises);
  return allPromises(promises.map((promise) => {
    return Promise.resolve(promise).then((value) => {
      return { status: 'fulfilled', value };
    }).catch((reason) => {
      return { status: 'rejected', reason };
    });
  }));
};

export { allSettled };
