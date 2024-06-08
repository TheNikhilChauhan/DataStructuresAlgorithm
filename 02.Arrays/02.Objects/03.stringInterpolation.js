// String interpolation: " `` or backticks "

let name = "Joey";
let company = "Amazon";

/*
console.log(name, "works in", company);

// instead of just printing, we want to store it also

let str = name + " works in " + company;
console.log(str); */

// Interpolated strings means we can embed expressions directly inside the stirng which will be evaluated during runtime.

let str = `${name} works in ${company}`;
console.log(str);

let example = `Interpolated ex: ${3 + 2 - 9}`;
console.log(example);
