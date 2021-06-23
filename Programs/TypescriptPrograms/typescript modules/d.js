"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fun3 = exports.fun1 = void 0;
function fun1() {
    console.log("fun1 non default export");
}
exports.fun1 = fun1;
function fun2() {
    console.log("fun2 is default export ");
}
exports.default = fun2;
function fun3() {
    console.log("fun3 is default export");
}
exports.fun3 = fun3;
