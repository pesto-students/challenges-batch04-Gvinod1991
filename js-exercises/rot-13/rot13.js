import { isString } from './util';

function rot13(encodedStr) {
  if (!isString(encodedStr)) return null;
  const rotateBy = 13;
  let decodedStr = '';

  for (const char of encodedStr) {
    if (char.match(/[A-Z]/)) {
      let asciCode = char.charCodeAt(0);
      asciCode -= 65;
      asciCode = (asciCode + rotateBy) % 26;
      asciCode += 65;
      decodedStr += String.fromCharCode(asciCode);
    } else {
      decodedStr += char;
    }
  }
  return decodedStr;
}

export {
  rot13,
};
