function toDecimal(n) {
  let result = 0;
  let index = 0;

  while (n !== 0) {
    let lastDigit = n & 1;
    if (lastDigit === 1) {
      result = result + Math.pow(2, index);
    }
    index = index + 1;

    n = n >> 1;
  }
  //   console.log(index);
  return result;
}

console.log(toDecimal("1010"));
