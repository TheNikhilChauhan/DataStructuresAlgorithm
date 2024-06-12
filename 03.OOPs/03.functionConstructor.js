function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.description = d;
  //   return this;
}
//this refers to the global this

const obj = new Product("Bag", 300, "cool new bag");
console.log(obj);

// Earlier when class concept was not introduced in Js, function was used to mimic the class functionality.
