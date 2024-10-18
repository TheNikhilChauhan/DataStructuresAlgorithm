//Selection sort using Recursion

function selectionSort(arr, n, index) {
  if (index === n - 1) {
    return;
  }

  let minIndex = index;

  for (let i = index + 1; i < n; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  [arr[minIndex], arr[index]] = [arr[index], arr[minIndex]];

  selectionSort(arr, n, index + 1);
}

let arr = [64, 25, 12, 22, 11];
let n = arr.length;
let index = 0;
selectionSort(arr, n, index);
console.log("Recursive Selection Sort: ", arr);
