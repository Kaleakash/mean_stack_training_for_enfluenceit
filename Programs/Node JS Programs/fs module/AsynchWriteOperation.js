let fs = require("fs");
let message = "Welcome to Aynch fs module example";
fs.writeFile("demo2.txt",message,(err)=> {
    if(!err){
        console.log("Data stored successfully...")
    }
});
console.log("Normal Statement1");
console.log("Normal Statement2");
console.log("Normal Statement3");