export const sum = (...numbers) =>
  numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

