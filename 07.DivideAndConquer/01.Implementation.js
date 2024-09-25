//implementation of divide and conquer to find max and minimum in an array

function divideAndConquer(arr, low, high) {
  // if there is only one element
  if (high === low) {
    return { min: arr[low], max: arr[low] };
  }

  //if there are two elements
  if (high === low + 1) {
    return {
      min: Math.min(arr[low], arr[high]),
      max: Math.max(arr[low], arr[high]),
    };
  }

  //divide array into two halves
  let mid = Math.floor((low + high) / 2);

  //find min and max in both halves
  let leftResult = divideAndConquer(arr, low, mid);
  let rightResult = divideAndConquer(arr, mid + 1, high);

  //conquer: combine results
  return {
    min: Math.min(leftResult.min, rightResult.min),
    max: Math.max(rightResult.max, leftResult.max),
  };
}

let arr = [2, 8, 1, 42, 9, 54, 10, 30, 7];
let low = 0;
let high = arr.length - 1;
const result = divideAndConquer(arr, low, high);
console.log(`Minimum value is: ${result.min}`);
console.log(`Maximum value is: ${result.max}`);
