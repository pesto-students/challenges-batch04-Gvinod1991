function debounce(fn, timeInMs) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), timeInMs);
  };
}

export { debounce };
