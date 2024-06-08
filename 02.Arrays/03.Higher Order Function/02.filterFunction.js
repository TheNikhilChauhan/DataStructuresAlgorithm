/*
 * 2.Filter function
 * it is also a higher order function
 */

function oddEven(x) {
  return x % 2 === 0;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = arr.filter(oddEven);
console.log(result);
