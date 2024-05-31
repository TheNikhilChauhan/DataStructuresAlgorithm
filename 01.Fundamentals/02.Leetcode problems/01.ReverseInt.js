//7. reverse an integer

function reverseNumber(n) {
  let result = 0;
  let isNegative = n < 0;
  n = Math.abs(n);

  while (n > 0) {
    let lastDigit = n % 10;

    //Check for 32-bit signed int
    if (result < -(2 ** 31) / 10 || result > (2 ** 31 - 1) / 10) {
      return 0;
    }
    result = result * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  if (isNegative) {
    result = -result;
  }

  return result;
}

console.log(reverseNumber(123));
console.log(reverseNumber(15342373429));
console.log(reverseNumber(-123));
