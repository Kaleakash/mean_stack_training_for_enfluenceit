"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = require("./a");
const b_1 = require("./b");
const obj = __importStar(require("./c"));
const d_1 = __importStar(require("./d"));
a_1.display1();
b_1.display2();
console.log(a_1.a);
let emp1 = new b_1.Employee();
emp1.dis();
console.log();
a_1.dis();
b_1.dis();
obj.info1();
obj.info2();
obj.info3();
d_1.fun1();
d_1.default();
d_1.fun3();
