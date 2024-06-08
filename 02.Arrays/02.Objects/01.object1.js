let x = { name: "Chandler", age: 27 };
let y = {
  name: "Ross",
  age: 27,
  marks: 56,
};

//access any value using the key
//NOTE: from key you can access value but not vice versa

console.log(x["name"]);
console.log(y.name);

//Objects are mutable
y.name = "Joey";
console.log(y.name);

//Add or remove key- value pairs

//if marks key is present then it will update it otherwise it will add it
x.marks = 98;
x["company"] = "Google";

console.log(x);

//delete

delete x.marks;
console.log(x);
