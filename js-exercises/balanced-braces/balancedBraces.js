function balancedBraces(str) {
  if (typeof str !== 'string') {
    throw new Error(`Expected input type String,but got the ${typeof str} `);
  }
  const openBraces = ['{', '(', '['];
  const closeBraces = ['}', ')', ']'];
  const charStack = [];
  for (const char of str) {
    if (openBraces.includes(char)) {
      charStack.push(char);
    }
    if (closeBraces.includes(char)) {
      const poppedChar = charStack.pop();
      const indexOfChar = closeBraces.indexOf(char);
      const indexOfPoppedChar = openBraces.indexOf(poppedChar);
      if (indexOfChar !== indexOfPoppedChar) {
        return false;
      }
    }
  }
  if (charStack.length === 0) {
    return true;
  }
  return false;
}

export {
  balancedBraces,
};
