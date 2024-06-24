"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tax_1 = __importDefault(require("./tax"));
let am = (0, tax_1.default)(20);
console.log(am);
