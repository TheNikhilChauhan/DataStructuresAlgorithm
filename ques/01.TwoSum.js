/* 1.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

function twoSum(arr, target) {
  let hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (hashMap.has(diff)) {
      return [i, hashMap.get(diff)];
    } else {
      hashMap.set(arr[i], i);
    }
  }
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
