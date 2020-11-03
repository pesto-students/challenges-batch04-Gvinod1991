const deepCopyObject = (objToCopy, copyDescriptor) => {
  if (objToCopy === null || typeof (objToCopy) !== 'object') {
    return objToCopy;
  }
  const copiedObject = {};
  for (const key in objToCopy) {
    if (typeof (objToCopy[key]) === 'object' && objToCopy[key] !== null) {
      copiedObject[key] = deepCopyObject(objToCopy[key]);
    } else {
      copiedObject[key] = objToCopy[key];
      // Coping the descriptor
      if (copyDescriptor) {
        const descriptorOfProperty = Object.getOwnPropertyDescriptors(objToCopy, key);
        Object.defineProperty(copiedObject, key, descriptorOfProperty);
      }
    }
  }
  return copiedObject;
};

export { deepCopyObject };
