function BinarySearch(arr, i, j, n) {
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] > n) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return -1;
}

let arr = [3, 7, 9, 10, 13, 34, 65, 76, 84, 92];
let i = 0;
let j = arr.length - 1;
let n = 84;
let result = BinarySearch(arr, i, j, n);

// Check if the element was found
if (result !== -1) {
  console.log(`The number ${n} is found at index: ${result}`);
} else {
  console.log(`The number ${n} is not found in the array.`);
}
