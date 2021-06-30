//load the module 
let express = require("express");
let bodyParser = require("body-parser");
let port=9090

let app = express();

//middleware 

app.use(bodyParser.json());     //enable the from body part of request. 


class Employee {
    constructor(id,name,salary){
        this.id = id;
        this.name=name;
        this.salary = salary;
    }
}
let emp1 = new Employee(101,"Raju",14000);
let emp = {id:100,name:"Ramesh",salary:12000};          //not json it object literal 
let employees = [
    {id:1,"name":"Ravi",age:21},
    {id:2,"name":"Ramesh",age:22},
    {id:3,"name":"Rajesh",age:23},
    {id:4,"name":"Raju",age:24},
]

//Get Methods 
//http://localhost:9090/sayHello            : return text or html
app.get("/sayHello",(req,res)=> {
    res.send("Welcome to REST API Call");
})

//return json data 
//http://localhost:9090/sayJson
app.get("/sayJson",(req,res)=> {
   // res.json("Hello");
    res.json({"msg":"Welcome to Rest API"});
})

// only one emp details  
//http://localhost:9090/empJson
app.get("/empJson",(req,res)=> {
    res.json(emp1);
})

// more than one employee details 
//http://localhost:9090/employees
app.get("/employees",(req,res)=> {
    res.json(employees);
})

//passing data through query param concept. Single value 
//http://localhost:9090/queryParamSingleValue?name=Raju
app.get("/queryParamSingleValue",(req,res)=> {
        let name = req.query.name;
        res.send("Welcome user "+name); 
})

//passing data through query param concept. multiple value 
//http://localhost:9090/queryParamMultipleValue?name=Raju&pass=123
app.get("/queryParamMultipleValue",(req,res)=> {
    let name = req.query.name;
    let pass = req.query.pass;
    if(name=="Raju" && pass=="123"){
            res.send("Successsfully Done")
    } else {
            res.send("Failure ")
    }
})

// pass param with single value 
//http://localhost:9090/pathParamSingleValule/100
app.get("/pathParamSingleValule/:id",(req,res)=> {
        let empId= req.params.id;
        res.send("Your id is "+empId);
})

// pass param with multiple value 
//http://localhost:9090/pathMultipleValue/1/Raju/12000
app.get("/pathMultipleValue/:id/:name/:salary",(req,res)=> {
    console.log(req.params)
    let empId= req.params.id;
    let name = req.params.name;
    let salary = req.params.salary;
    salary = eval(salary)+5000;
    res.send(`Your id is ${empId} your name is ${name} and salary ${salary}`);
})


//calling post method 
// http://localhost:9090/postMethod 
app.post("/postMethod",(req,res)=> {
    console.log("Post method called.")
    res.send("Post Method ")
})

// calling post method with passing the data in json format.
// http://localhost:9090/empStoreDetails
app.post("/empStoreDetails",(req,res)=> {
        let employee = req.body;
        console.log(employee)
        //res.send("Post method with employee details");
        res.json(employee);
})

// id,name,salary,desg base upon the desg update the salary 
/*
if desg = Manager           5000 bonus 
if desg  Programmer         3000 bonus 
if desg   Test              15000 bonus 
no bonus in json format. 

*/

// put methods 
// http://localhost:9090/putMethod 
app.put("/putMethod",(req,res)=> {
        console.log("put method")
        res.send("Put method called..");
})

// put methods 
// http://localhost:9090/updateSalary       using id we can update salary 
app.put("/updateSalary",(req,res)=> {       
    let employee = req.body;
    employee.salary= employee.salary+25000;
    res.send(employee);
})

//delete method 
// http://localhost:9090/deleteMethod
app.delete("/deleteMethod",(req,res)=> {
    console.log("delete method")
    res.send("delete method called..");
})


//delete using id property
//http://localhost:9090/deleteInfo/100
app.delete("/deleteInfo/:id",(req,res)=> {
    let empId = req.params.id;
    res.send("delete method called.."+empId);
})

app.listen(port,()=>console.log(`Server running on port number ${port}`));
