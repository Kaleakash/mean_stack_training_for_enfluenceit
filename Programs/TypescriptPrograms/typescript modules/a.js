"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dis = exports.a = exports.display1 = void 0;
function display1() {
    console.log("dis1 function part of a module (a.ts)");
}
exports.display1 = display1;
exports.a = 10;
function dis() {
    console.log("dis function part of a module");
}
exports.dis = dis;
