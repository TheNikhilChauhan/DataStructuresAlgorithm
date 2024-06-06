// 1.Two sum

function twoSum(num, target) {
  num = num.sort((a, b) => a - b);

  let start = 0;
  let end = num.length - 1;

  while (start < end) {
    const sum = num[start] + num[end];

    if (sum === target) {
      return [num[start], num[end]];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
}

let num = [2, 7, 11, 15];
console.log(twoSum(num, 9));
