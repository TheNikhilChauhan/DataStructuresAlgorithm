class Product {
  // name;
  // price;
  // discount;
  // desc;
  //if we have written a constructor we don't need to write these keys inside the class

  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    // return 10  // primitive -> no effect

    // return { x: 10 };
    //constructor only returns object

    // return this; //if you don't return anything, it is equal to saying return this.

    //this -> refers to the brand new object created using new keyword
  }
}

// syntax to create an object
const obj = new Product("Bag", 300, "A cool bag");
console.log(obj);
