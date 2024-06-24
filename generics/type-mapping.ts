interface Product1 {
  name: string;
  price: number;
}

// type mapping is doing by keyof operator and index signature

type ReadOnly<T> = {
  // Keyof operator
  // index signature
  readonly [Property in keyof T]: T[Property];
};

let product: ReadOnly<Product1> = {
  name: "a",
  price: 1,
};

// product.name= "a" // error : Cannot assign to 'name' because it is a read-only property
