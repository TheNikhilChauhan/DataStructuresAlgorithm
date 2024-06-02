// Adding numbers using factorial

const addNums = (n) => {
  if (n === 1) return 1;
  let result = n + addNums(n - 1);

  return result;
};

console.log(addNums(5));
console.log(addNums(10));
