"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("sum", 2);
console.log(pair);
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
// pass on the generic type parameter
class CompressibleStore extends Store {
    compress() { }
}
// Restrict the generic type parameter
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
// fix the generic type parameter
class ProductStore extends Store {
}
