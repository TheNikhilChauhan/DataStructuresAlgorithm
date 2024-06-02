// Find factorial of a number using recursion

const factorial = (n) => {
  if (n === 1) return 1;
  let result = n * factorial(n - 1);

  return result;
};

console.log(factorial(6));
console.log(factorial(5));
