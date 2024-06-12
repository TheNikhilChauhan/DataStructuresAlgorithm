class Product {
  //no need of let, const, var
  name;
  price;
  discount;
  desc;

  display() {
    // no need of function keyword
  }

  buy() {}
}

// syntax to create an object
const obj = new Product();

//'this' keyword: except one case, this always refers to the calling site/context
// exception is arrow functions
//Example

const iphone = {
  name: "Iphone",
  category: "Electronics",
  price: 1000,
  rating: 4.8,
  dispaly: () => {
    console.log(this);
  },
};

const macbook = {
  name: "macbook",
  category: "Electronics",
  price: 1000,
  rating: 4.8,
  dispaly: function () {
    console.log(this);
  },
};

macbook.dispaly(); // here in normal function
// 'this' will point to the call site i.e. object

iphone.dispaly(); // here in arrow function
// 'this' will not point to the call site hence return empty.
