const array = [
  [1, 2, 3, 4],
  ["1", "2", "3", "4"],
  ["random", "extra", "array"],
  ["second", "random", "extra", "array"],
];

const [numbers, strings, ...rest] = array;

console.log(numbers);
console.log(strings);
console.log(rest);
