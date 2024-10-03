// Quick sort algorithm: here we choose any element as pivot (usually first or last or middle)

function QuickSort(arr) {
  //base case
  if (arr.length <= 1) {
    return arr;
  }

  //selecting pivot
  let pivot = arr[arr.length - 1];

  let leftArray = [];
  let rightArray = [];

  //partition the array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      // left array stores element less than pivot
      leftArray.push(arr[i]);
    } else {
      // right array stores element larger than pivot
      rightArray.push(arr[i]);
    }
  }
  return [...QuickSort(leftArray), pivot, ...QuickSort(rightArray)];
}

let arr = [20, 10, 5, 0, 50, 89, 34, 47];
console.log("Before sorting: ", arr);

let sortedArray = QuickSort(arr);
console.log("After sorted: ", sortedArray);
