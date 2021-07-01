"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
/*export interface Employee {
    id:number,
    name:string,
    salary:number
}*/
//model class. this class or interface is use to map the json data. 
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    return Employee;
}());
exports.Employee = Employee;
