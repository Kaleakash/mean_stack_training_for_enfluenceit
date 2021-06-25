let fs = require("fs");
fs.readFile("index.html",function(e,result){
    if(!e){
        console.log(result.toString());
    }
})
console.log("Normal Statement")