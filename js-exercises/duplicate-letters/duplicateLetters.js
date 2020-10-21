function duplicateLetters(...args) {
  const str = args[0];
  const repeated = {};
  for (let i = 0; i < str.length; i += 1) {
    const letter = str.charAt(i);
    if (letter in repeated) {
      repeated[letter] += 1;
    } else {
      repeated[letter] = 1;
    }
  }
  return Math.max(...Object.values(repeated)) > 1 ? Math.max(...Object.values(repeated)) : false;
}

export {
  duplicateLetters,
};
