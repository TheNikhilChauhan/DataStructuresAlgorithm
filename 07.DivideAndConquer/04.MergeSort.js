function merge(left, right) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  //compare
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  //now we will apply the remaining left and right side elements into the sorted array
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }
  return sortedArray;
}

function MergeSort(arr, i, j) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let leftSort = MergeSort(arr.slice(0, mid));
    let rightSort = MergeSort(arr.slice(mid));
    let sorted = merge(leftSort, rightSort);
    return sorted;
  }
}

let arr = [10, 56, 32, 3, 11, 95, 61, 5];
let i = 0;
let j = arr.length - 1;

let sortedArray = MergeSort(arr, i, j);
console.log(`The array before sort is: ${arr}`);
console.log(`The array after merge sort is: ${sortedArray}`);
