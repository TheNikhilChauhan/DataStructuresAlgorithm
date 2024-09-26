function findPowerOfElement(a, n) {
  // if n >= 1
  if (n === 1) {
    return a;
  }

  // if n is smaller than 0
  if (n < 0) {
    return 1 / findPowerOfElement(a, -n);
  } else {
    let mid = Math.floor(n / 2);
    let ans = findPowerOfElement(a, mid);
    let result = ans * ans;

    if (n % 2 === 0) {
      return result;
    } else {
      return result * a;
    }
  }
}

let a = 2;
let n = -7;
let result = findPowerOfElement(a, n);
console.log(`The power of ${a} times ${n} is: ${result}`);
