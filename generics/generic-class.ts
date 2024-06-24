class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, number>("sum", 2);
console.log(pair);

// extending generic classes

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

// pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restrict the generic type parameter
class SearchableStore<T extends {name: string}> extends Store<T>{
  find(name:string):T | undefined {
    return this._objects.find(obj => obj.name === name)
  }
}

// fix the generic type parameter
class ProductStore extends Store<Product>{}