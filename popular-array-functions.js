export const numbers = [10, 20, 30, 33, 4, 5, 555, 54, 3, 2, 1, 11, 1];

export const maxValue = numbers.reduce((previous, current) => {
  if (previous > current) return previous;
  return current;
}, 0);
