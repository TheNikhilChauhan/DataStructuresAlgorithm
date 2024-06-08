// Reduce function

const arr = [1, 2, 3, 4, 5];
function sum(prevResult, currResult) {
  console.log(prevResult, currResult);
  return prevResult + currResult;
}

const result = arr.reduce(sum);
console.log(result);

// console.log(arr.reduce((acc, prevValue) => acc * prevValue));

function addPrices(prevResult, currResult) {
  let newPrice = prevResult.price + currResult.price;
  return { price: newPrice };
}

let cart = [
  { price: 100000, name: "Iphone" },
  { price: 500, name: "backcover" },
  { price: 300, name: "tempered glass" },
];

const totalPrice = cart.reduce(addPrices);
console.log(totalPrice, totalPrice.price);
