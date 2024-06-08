/* 
    arrays are also custom objects in JS
    index of the element in the key and the element itself is the value
    ["abc", 'def', 'ghi'] -> {0: 'abc', 1: 'def', 3:'ghi'}
*/

/*
 * 1.Map function
 */

function square(n) {
  return n * n;
}

function cube(x) {
  return x * x * x;
}

function isEvenOrOdd(n) {
  if ((n & 1) === 0) {
    return "Even";
  } else return "Odd";
}

const nums = [1, 2, 3, 4, 5];
const result = nums.map(square);
console.log(result);

const resultCube = nums.map(cube);
console.log(resultCube);

const resultEvenOdd = nums.map(isEvenOrOdd);
console.log(resultEvenOdd);

const newArr = [9, 8, 7, 6, 5];
/*
 * if the function that we are passing in map takes two arguments then first argument will be accessing the actual value
 * second argument will be accessing index of that value
 */

function print(element, index) {
  return `Element at index ${index} is ${element}`;
}

/*
 * here map is looping over every element and then passing element, index in the function print
 */
const result2 = newArr.map(print);
console.log(result2);

// ******  making custom mapper *****

function customMapper(arr, fun) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fun(arr[i], i));
  }
  return result;
}

const value = customMapper(newArr, print);
console.log(value);
