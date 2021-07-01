import express,{Request,Response} from 'express';
import bodyParser from 'body-parser';
import {Employee} from './EmployeeType';
import {checkDetails} from './employee.service';
import {Login} from './Login.model';
let app = express();

app.use(bodyParser.json());         // enable json data from body part 

let emp1:Employee = {id:100,name:"Raju",salary:12000};
let emp2:Employee = {id:101,name:"Ramesh",salary:150000};
let emp3:Employee = {id:102,name:"Rajesh",salary:180000};
let emp4:Employee = {id:103,name:"Raj",salary:210000};

let employees:Array<Employee>=[emp1,emp2,emp3,emp4];

// let names:Array<string>=["A","B","C"];
// let names1:string[]=["A","B","C"];
app.get("/",(req:Request,res:Response)=> {
    res.send("Welcome to Express")
})

app.get("/emp",(req:Request,res:Response)=> {
    res.json(emp1);
})

app.get("/employees",(req:Request,res:Response)=> {
    res.json(employees);
})

app.post("/checkUser",(req:Request,res:Response)=> {
            let login:Login = req.body;             //key name userName and password 
            let result:string = checkDetails(login)
            res.send(result);
})

app.listen(9090,()=>console.log("Server running on port number 9090"));