// 75. Sort Colors without using sort method

/* function sortColors(nums) {
  let zeros = 0;
  let ones = 0;
  let twos = 0;
  for (let num of nums) {
    if (num === 0) zeros++;
    else if (num === 1) ones++;
    else twos++;
  }

  let index = 0;

  while (zeros > 0) {
    nums[index] = 0;
    index++;
    zeros--;
  }
  while (ones > 0) {
    nums[index] = 1;
    index++;
    ones--;
  }
  while (twos > 0) {
    nums[index] = 2;
    index++;
    twos--;
  }

  return nums;
} */

//more optimized using pointers

function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid < high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
