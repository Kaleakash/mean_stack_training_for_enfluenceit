let fs = require("fs");
let emp = {id:103,name:"Mahesh",salary:20000};
let empString = JSON.stringify(emp);
fs.writeFile("emp.json",empString,{flag:"a+"},function(err){
    if(!err){
        console.log("Stored data")
    }else {
        console.log(err)
    }
})