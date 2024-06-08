let x = {
  name: "Ross",
  company: "Google",
  salary: 500000,
  age: 27,
  city: "Noida",
  team: "Azure storage",
  designation: "Software Engineer",
};

// loop over an object

for (const entry of Object.entries(x)) {
  console.log(entry);
}

//there is one more way using for..in loop
//for in loop actually helps us loop over keys
for (const key in x) {
  console.log(key, x[key]);
}
