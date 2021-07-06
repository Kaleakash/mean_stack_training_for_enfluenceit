var obj = require("mongoose");
let url = "mongodb://localhost:27017/mydb123";

let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,options).then(res=>console.log("Connected")).catch(e=>console.log(e));       // connecting to database. 

var db = obj.connection;

db.once("open",()=>{
    // create the Schema 
    let ProjectSchema = obj.Schema({
        _id:Number,
        typeOfTech:String,
        numberOfEmp:Number
    });

    // using schema we have to create the Model 
    //let Project = obj.model("Project",ProjectSchema);
    let Project = obj.model("",ProjectSchema,"Projects");
    // create the model reference. 
    let p1 = new Project({_id:100,typeOfTech:"Java",numberOfEmp:12});
    let p2 = new Project({_id:101,typeOfTech:"Python",numberOfEmp:15});
    let p3 = new Project({_id:102,typeOfTech:"Angular",numberOfEmp:18});

    Project.insertMany([p1,p2,p3],(err,result)=> {
        if(!err){
            console.log(result);
        }else {
            console.log("Error generated");
        }
        obj.disconnect();      
    })
})