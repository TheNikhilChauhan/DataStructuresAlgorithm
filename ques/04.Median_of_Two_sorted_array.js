/* 4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
 
Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2. */

function medianOfTwoArray(arr1, arr2) {
  if (arr1.length > arr2.length) [arr1, arr2] = [arr2, arr1];

  let x = arr1.length;
  let y = arr2.length;
  let low = 0;
  let high = x;

  //Binary search

  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = Math.floor((x + y + 1) / 2) - mid1;

    let left1 = mid1 === 0 ? -Infinity : arr1[mid1 - 1]; //1
    let right1 = mid1 === x ? Infinity : arr1[mid1]; //3

    let left2 = mid2 === 0 ? -Infinity : arr2[mid2 - 1]; //2
    let right2 = mid2 === y ? Infinity : arr2[mid2]; //infinity

    //median
    if (left1 <= right2 && left2 <= right1) {
      return (x + y) % 2 === 0
        ? (Math.max(left1, left2) + Math.min(right1, right2)) / 2
        : Math.max(left1, left2);
    } else if (left1 > right2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
  return 0;
}

let nums1 = [1, 4];
let nums2 = [3, 7];

console.log(medianOfTwoArray(nums1, nums2));
