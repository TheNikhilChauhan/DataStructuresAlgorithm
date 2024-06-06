// traversing array

/* let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */

let arr = [1, 2, 3, 4, 5, 6];
let target = 5;
let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (target === arr[i]) {
//     found = true;
//     console.log("Target number is found and is at index ", i);
//     break;
//   } else {
//     console.log("Target not found in this array.");
//   }
// }

// insert

let arr2 = [1, 2, 3, 4, 5, 6];
function insertArr(arr, index, num) {
  // arr2.splice(index, 0, num);
  // console.log(arr2);

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      newArr.push(num);
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(insertArr(arr2, 3, 12));
