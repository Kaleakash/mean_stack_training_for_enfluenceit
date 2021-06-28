let obj = require("readline-sync");
let id = obj.questionInt('Enter the id')
let name = obj.question("Enter the name")
let salary = obj.questionFloat("Enter the salary")

console.log("Id is "+id);
console.log("Name is "+name);
console.log("Salary is "+salary)