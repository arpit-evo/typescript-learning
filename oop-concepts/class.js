"use strict";
class Account {
    // constructor function for initialize variables for first time and it always return instance of class
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    // method
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0) {
            throw new Error("");
        }
        this._balance = value;
    }
}
// create object
const account = new Account(1, "arpit", 10);
console.log(account.balance);
