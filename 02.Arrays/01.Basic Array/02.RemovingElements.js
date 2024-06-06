// Remove an element from an index

let arr = [2, 3, 6, 1, 3, 7, 8];
function removeAt(index) {
  if (arr.length <= index) console.log("Enter a valid index");

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return arr;
}

console.log(removeAt(3));
console.log(removeAt(0));
console.log(removeAt(60));
