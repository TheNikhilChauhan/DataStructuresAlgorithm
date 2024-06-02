// Factorial of a Number

const factorialOfNum = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = i * result;
  }
  return result;
};

console.log(factorialOfNum(5));
console.log(factorialOfNum(15));
