class Product {
  #name; //private
  #price;

  constructor(n, p, d) {
    this.#name = n;
    this.#price = p;
    this.description = d;
  }

  //In JS there is a keyword for getters and setters and we can access them like properties.

  set Name(n) {
    if (typeof n !== "string") {
      console.log("Invalid input type");
      return;
    }
    this.#name = n;
  }

  set Price(p) {
    if (p < 0) {
      console.log("Enter valid price");
      return;
    }
    this.#price = p;
  }
  get Name() {
    return this.#name;
  }

  display() {
    console.log(this.#name, this.#price, this.description);
  }
}

const obj = new Product("Bag", 100, "a cool bag");
obj.display();
obj.Name = "Iphone";
console.log(obj.Name);
