// 1009. Complement of base 10 integer

function bitwiseComplement(n) {
  if (n === 0) {
    return 1;
  }
  let num = n;
  let mask = 0;

  while (num !== 0) {
    mask = (mask << 1) | 1;
    num = num >> 1;
  }
  return ~n & mask;
}

console.log(bitwiseComplement(5));
