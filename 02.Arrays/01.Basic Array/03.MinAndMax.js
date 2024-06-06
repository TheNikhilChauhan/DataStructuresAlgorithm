// Minimum and maximum element in an array

function max(arr) {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

function min(arr) {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  return result;
}

let arr = [3, 6, 2, 6, 4, 8, 1, 4];
console.log(max(arr));
console.log(min(arr));
