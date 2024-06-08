// Given an array of strings, print all the unique strings in the array.

let str = ["abc", "hello", "c", "d", "abc", "c", "d"];
let obj = {};
for (const element of str) {
  if (!obj[element]) {
    obj[element] = true;
  }
}

for (const key in obj) {
  console.log(key);
}
