let fs = require("fs");
fs.readFile("emp.json",function(err,result){
    if(!err){
        var empInfo = JSON.parse(result.toString());
        console.log(empInfo.id);
        console.log(empInfo.name);
        console.log(empInfo.salary);
        //console.log(result.toString())
    }
})