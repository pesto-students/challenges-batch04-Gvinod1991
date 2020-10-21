function sumFibs(num) {
  let fib1 = 1; // 1st Fibonacci number
  let fib2 = 1; // 2nd Fibonacci number
  let fibNumSum = 0;
  let oddFibNumSum = 0;
  for (let i = 1; i <= num; i += 1) {
    if (i === 1) {
      oddFibNumSum += fib1;
    } else if (i === 2) {
      oddFibNumSum += fib2;
    } else {
      fibNumSum = fib1 + fib2;
      fib1 = fib2;
      fib2 = fibNumSum;
      if (fibNumSum % 2 !== 0 && fibNumSum <= num) {
        oddFibNumSum += fibNumSum;
      }
    }
  }
  return oddFibNumSum;
}

function cacheFunction(fun) {
  const cache = [];
  const memorizer = function (n) {
    /* Important it checks for n exist in cache or not
      other wise last test case failing */
    if (n in cache) {
      return cache[n];
    }
    const result = fun(n);
    cache[n] = result;
    return result;
  };
  return memorizer;
}
export { sumFibs, cacheFunction };
