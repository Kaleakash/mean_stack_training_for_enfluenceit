"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// to map our json data. 
class Product {
    constructor(pid, pname, price) {
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }
}
exports.Product = Product;
