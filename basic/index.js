"use strict";
let sales = 123456789;
let numbers = [1, 2, 3];
//Tuples
let user = [1, "Mosh"];
//Enum
// or specify each value like this
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
//Objects
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => { },
};
//Functions
function calculateTax(income) {
    return income * 0.2;
}
// union types
const kgToLbs = (weight) => {
    //narrowing type
    if (typeof weight === "number") {
        return weight * 2;
    }
    else {
        return +weight * 3;
    }
};
let textBox = {
    drag: () => { },
    resize: () => { },
};
// type null
let ab = null;
// type assertions
let phone = document.getElementById("phone"); // this is one way
let phone2 = document.getElementById("phone"); // this is second way
// type unknown
function render(document) {
    //narrowing
    if (typeof document === "string") {
        document.toLowerCase();
    }
    //  document.fly() // give error because it's type is unknown
}
// type never
function processEvents() {
    // This function never returns because
    // it has an infinite loop.
    while (true) { }
}
processEvents();
console.log("hello");
