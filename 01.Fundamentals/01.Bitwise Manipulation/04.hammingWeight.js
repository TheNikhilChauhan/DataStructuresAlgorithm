// leetcode: count the number of 1 bits

function hammingWeight(num) {
  let result = 0;

  while (num != 0) {
    let lastBit = num & 1;
    if (lastBit === 1) {
      result++;
    }
    num = num >> 1;
  }

  return result;
}

console.log(hammingWeight(10));
