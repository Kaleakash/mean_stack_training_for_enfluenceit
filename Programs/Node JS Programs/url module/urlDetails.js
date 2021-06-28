let url = require("url");
let urlDetails = "http://localhost:9090?name=Ravi&salary=12000";
console.log(urlDetails);
let obj = url.parse(urlDetails,true);    // conveting string to url reference. 
                        //2nd parameter true then obj.query consider as object not string 
console.log(obj)
console.log(obj.protocol)
console.log(obj.host)
console.log(obj.hostname)
console.log(obj.path)
console.log(obj.query)      // string format consider. 
console.log(obj.query.name)
console.log(obj.query.salary)