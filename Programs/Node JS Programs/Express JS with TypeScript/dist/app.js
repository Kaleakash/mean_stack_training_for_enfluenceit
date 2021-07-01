"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var employee_service_1 = require("./employee.service");
var app = express_1.default();
app.use(body_parser_1.default.json()); // enable json data from body part 
var emp1 = { id: 100, name: "Raju", salary: 12000 };
var emp2 = { id: 101, name: "Ramesh", salary: 150000 };
var emp3 = { id: 102, name: "Rajesh", salary: 180000 };
var emp4 = { id: 103, name: "Raj", salary: 210000 };
var employees = [emp1, emp2, emp3, emp4];
// let names:Array<string>=["A","B","C"];
// let names1:string[]=["A","B","C"];
app.get("/", function (req, res) {
    res.send("Welcome to Express");
});
app.get("/emp", function (req, res) {
    res.json(emp1);
});
app.get("/employees", function (req, res) {
    res.json(employees);
});
app.post("/checkUser", function (req, res) {
    var login = req.body; //key name userName and password 
    var result = employee_service_1.checkDetails(login);
    res.send(result);
});
app.listen(9090, function () { return console.log("Server running on port number 9090"); });
