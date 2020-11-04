/**
 * Helper function to get binary number
 * when decimal number is passed
*/
function getBinaryNumber(number) {
  let binaryNumber = [];
  while (number > 0) {
    binaryNumber.push(number % 2);
    number = Math.floor(number / 2);
  }
  binaryNumber = Number(binaryNumber.reverse().join(''));
  return binaryNumber;
}

function accessorProperties() {
  const obj = {
    get number() {
      return this._number;
    },
    set number(value) {
      if (typeof value !== 'number') {
        throw new Error(`Expected value to be number but got the ${typeof value}`);
      }
      this._number = getBinaryNumber(value);
    },
  };
  return obj;
}

export {
  accessorProperties,
};
