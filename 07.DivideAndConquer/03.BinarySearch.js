function BinarySearch(arr, first, last, n) {
  let mid = Math.floor((first + last) / 2);

  while (first <= last) {
    if (arr[mid] === n) {
      return mid;
    } else if (n < arr[mid]) {
      return BinarySearch(arr, first, mid - 1, n);
    } else {
      return BinarySearch(arr, mid + 1, last, n);
    }
  }
  return -1;
}

let arr = [3, 7, 9, 10, 13, 34, 65, 76, 84, 92];
let first = 0;
let last = arr.length - 1;
let n = 84;
let result = BinarySearch(arr, first, last, n);
if (result !== -1) {
  console.log(`The number ${n} is found at index: ${result}`);
} else {
  console.log(`The number ${n} is not found in the array.`);
}
