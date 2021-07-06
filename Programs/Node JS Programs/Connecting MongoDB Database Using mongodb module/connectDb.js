//load the module as well as created the refrence of that module. 
let mongoClient = require("mongodb").MongoClient;

let url="mongodb://localhost:27017"

mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=> {
    if(!err){
        console.log("Database connected successfully....")
    }
    client.close();
})