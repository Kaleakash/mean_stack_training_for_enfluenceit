let mongoClient = require("mongodb").MongoClient;

let url ="mongodb://localhost:27017";

let emp = {_id:"108",name:"Ravi",age:"28"};

mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=> {

    if(!err){
        var db = client.db("mydb123");      // connected the database. 
        db.collection("Emp127").insertOne(emp,(e,result)=> {
                if(!e){
                    if(result.insertedCount>0){
                        console.log("Record inserted succesfully")
                    }
                }else {
                    console.log("Error generated...")
                }
             client.close();   
        })
        
    }
    
})