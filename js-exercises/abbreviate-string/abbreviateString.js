import { isString } from './util';

function abbreviateString(str) {
  // Throwing error as invalid string
  if (!isString(str)) throw new Error('Invalid string passed!');
  const splittedStr = str.split(' ');
  const lastWordAbbreviated = splittedStr[splittedStr.length - 1].charAt(0).toUpperCase();
  const abbreviateStr = `${splittedStr[0]} ${lastWordAbbreviated}.`;
  return abbreviateStr;
}

export { abbreviateString };
