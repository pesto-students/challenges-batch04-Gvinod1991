function removeFalsyValues(array) {
  if (Array.isArray(array)) {
    /* As !falsyValue is always true
      So here truthy values are filtered out
    */
    return array.filter((item) => item);
  }
  return 'Invalid or empty array';
}

export {
  removeFalsyValues,
};
