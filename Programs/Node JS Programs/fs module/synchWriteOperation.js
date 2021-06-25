// load the module 
let fs = require("fs");
var message = "Welcome Again";
var res = fs.writeFileSync("demo1.txt",message,{flag:"a+"});
console.log(res)
console.log("Data stored...")
console.log("1st statement")
console.log("2nd statement")
