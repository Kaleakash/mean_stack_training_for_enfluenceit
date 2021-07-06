let mongoClient = require("mongodb").MongoClient;

let url ="mongodb://localhost:27017";

mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=> {

    if(!err){
        var db = client.db("mydb123");      // connected the database. 
        db.collection("Emp").updateMany({name:"Raju"},{$set:{age:21}},(e,result)=> {    
                if(!e){
                        if(result.modifiedCount>0){
                                console.log("Record updated successfully")
                        }else {
                                console.log("Record didn't update")
                        }
                }else {
                    console.log("Error generated...")
                }
             client.close();   
        })
        
    }
    
})