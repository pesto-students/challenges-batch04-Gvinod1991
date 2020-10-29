const sumEvenArgs = (...args) => args.reduce((accumulator, current) => {
  if (current % 2 === 0) {
    return accumulator + current;
  }
  return accumulator;
},
0);
export { sumEvenArgs };
