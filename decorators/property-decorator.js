"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MinLength(length) {
    return function (target, propertyName) {
        let value;
        let descriptor = {
            // returning value
            get() {
                return value;
            },
            // validating string
            set(newValue) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} length should be length of ${length}`);
                }
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor); // set property name and value
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
const u1 = new User("123");
console.log(u1.password);
