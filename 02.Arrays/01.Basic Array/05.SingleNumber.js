// single number : num which is coming once in an array

//TC: O(n), SC: O(1)
function singleNumber(arr) {
  let target = 0;
  for (let element of arr) {
    target ^= element;
  }
  return target;
}
console.log(singleNumber([4, 1, 2, 4, 3, 5, 2, 1, 3]));

//XOR in target
//4 ^ 1 ^ 2 ^ 4 ^ 3 ^ 5 ^ 2 ^ 1 ^ 3 = ?

//= (4 ^ 4) ^ (1 ^ 1) ^ (2 ^ 2) ^ (3 ^ 3) ^ 5
// = 0 ^ 0 ^ 0 ^ 0 ^ 5
// = 5
