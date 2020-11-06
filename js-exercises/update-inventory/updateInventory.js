function updateInventory(...args) {
  const currentInventory = args[0];
  const newInventory = args[1];
  let updatedInventory = [];
  newInventory.map(([value, key]) => {
    let notFound = true;
    currentInventory.map(([value1, key1]) => {
      if (key1 === key) {
        value1 += value;
        notFound = false;
        updatedInventory.push([value1, key1]);
      }
      return [value1, key1];
    });
    if (notFound) {
      updatedInventory.push([value, key]);
    }
    return [value, key];
  });
  currentInventory.map(([value, key]) => {
    let notFound = true;
    updatedInventory.map(([value1, key1]) => {
      if (key1 === key) {
        notFound = false;
      }
      return [value1, key1];
    });
    if (notFound) {
      updatedInventory.push([value, key]);
    }
    return [value, key];
  });
  updatedInventory = updatedInventory.sort(([value1, key1],
   [value2, key2]) => key1 < key2 ? -1 : 1);
   
  return updatedInventory;
}

export {
  updateInventory,
};
