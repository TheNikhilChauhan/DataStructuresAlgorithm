// reverse an array

// not good when its comes to TC and SC
// Time complexity is: O(n) and Space complexity is: O(n)

/* function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
} */

function reverseArray(arr, start, end) {
  while (end > start) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    end--;
    start++;
  }

  return arr;
}

let arr = [3, 6, 2, 6, 4, 8, 1, 4];
console.log(reverseArray(arr, 0, arr.length - 1));
