let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.json());

let employees =[
    {id:100,name:"Balaji",salary:14000}
]
app.get("/simpleMessage",(req,res)=> {
        res.send("Welcome to REST API");
})
let emp = {id:100,name:"Ravi",age:21};

app.get("/emp",(req,res)=> {
    res.json(emp);
})

app.post("/storeEmp",(req,res)=> {
    let emp = req.body;
    let result = employees.find(e=>e.id==emp.id);
    if(result==undefined){
        employees.push(emp);
        res.send("Record stored")
    }else {
        res.send("Id must be unique");
    }
})




app.listen(9090,()=>console.log("running on port number 9090"));

module.exports=app
