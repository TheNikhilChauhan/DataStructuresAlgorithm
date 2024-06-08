// Given an array which only contains 0 and 1.
// the data is shuffled randomly.
//write a function that can rearrange the data such that all the 0s are present before 1.

//DNF Algorithm: Dutch National Flag Algo by Edsger Dijkstra
/* This algorithm is commonly used to solve problems where an array needs to be partitioned into three parts based on a pivot or set of pivots.

In this specific case, we are only dealing with two values (0s and 1s), but the algorithm can be extended to three values (for example, 0s, 1s, and 2s). */

function sortArray(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] === 0) {
      start++;
    } else if (nums[end] === 1) {
      end--;
    } else {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  return nums;
}

let nums = [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1];
console.log(sortArray(nums));
