"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// parameter of function varies for diff decorators based on it use
function Component(constructor) {
    console.log("decorator is executed");
    // constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertIntoDOM = () => {
        console.log("inserting the component in the DOM.");
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
