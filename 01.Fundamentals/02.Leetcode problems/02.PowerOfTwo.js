// 231. Power of Two

//more efficient than second one
// function powerOfTwo(n) {
//   return n > 0 && (n & (n - 1)) === 0;
// }

function powerOfTwo(n) {
  while (n !== 0) {
    let lastBit = n & 1;
    n = n >> 1;
    if (lastBit === 1 && n !== 0) {
      return false;
    }
  }
  return true;
}

console.log(powerOfTwo(1));
console.log(powerOfTwo(16));
console.log(powerOfTwo(15));
console.log(powerOfTwo(18));
console.log(powerOfTwo(10));
console.log(powerOfTwo(8));
