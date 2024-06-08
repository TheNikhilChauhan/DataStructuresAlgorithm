// looping on objects

let x = {
  name: "Ross",
  company: "Google",
  salary: 500000,
  age: 27,
  city: "Noida",
  team: "Azure storage",
  designation: "Software Engineer",
};

let keysOfX = Object.keys(x);
console.log(keysOfX); //It will return an array of keys

let valueOfX = Object.values(x);
console.log(valueOfX); //it will return an array of values of x

let entriesOfX = Object.entries(x);
console.log(entriesOfX); //it will return an array of arrays of the key value.
