// check if the number is prime

const isPrimeNumber = (n) => {
  for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
      return "It is not a prime number";
    }
  }
  return "It is a prime number";
};

console.log(isPrimeNumber(8));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(15));
console.log(isPrimeNumber(17));
