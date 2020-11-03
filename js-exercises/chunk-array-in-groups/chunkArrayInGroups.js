function chunkArrayInGroups(array, chunkSize) {
  if (!Array.isArray(array)) {
    throw new Error(`Expected first argument to be Array but got ${array}`);
  }
  if (typeof chunkSize !== 'number') {
    throw new Error(`Expected 2nd argument to be number but got ${typeof chunkSize}`);
  }
  const chunkedArray = [];
  let i = 0;
  const loopLength = array.length;
  while (i < loopLength) {
    chunkedArray.push(array.slice(i, i += chunkSize));
  }
  return chunkedArray;
}

export {
  chunkArrayInGroups,
};
