function diffArray(...args) {
  const firstArray = args[0] && Array.isArray(args[0]) ? args[0] : false;
  const secondArray = args[1] && Array.isArray(args[1]) ? args[1] : false;
  if (firstArray && secondArray) {
    // filtering the first Array of element which are not in second array
    const filterFirstArray = firstArray.filter((element) => !secondArray.includes(element));
    // filtering the first Array of element which are not in second array
    const filterSecondArray = secondArray.filter((element) => !firstArray.includes(element));
    // Concatenating after filtering
    return filterFirstArray.concat(filterSecondArray);
  }
  return false;
}

export {
  diffArray,
};
