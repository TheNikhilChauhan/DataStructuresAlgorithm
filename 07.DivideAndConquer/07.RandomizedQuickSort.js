// Swap function to interchange elements
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function randomizedPartition(arr, low, high) {
  // Step 1: Randomly select a pivot index between low and high
  let pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;

  // Step 2: Swap the pivot with the last element
  swap(arr, pivotIndex, high);

  // Proceed with normal partitioning
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

// Randomized Quick Sort function
function randomizedQuickSort(arr, low, high) {
  if (low < high) {
    // Partition the array and get pivot index
    let pi = randomizedPartition(arr, low, high);

    // Recursively sort elements before and after partition
    randomizedQuickSort(arr, low, pi - 1);
    randomizedQuickSort(arr, pi + 1, high);
  }
}

let arr = [10, 7, 8, 9, 1, 5];
console.log("Array before sorting:", arr);

randomizedQuickSort(arr, 0, arr.length - 1);

console.log("Array after Randomized Quick Sort:", arr);
