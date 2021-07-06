let mongoClient = require("mongodb").MongoClient;

let url ="mongodb://localhost:27017";

mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=> {

    if(!err){
        var db = client.db("mydb123");      // connected the database. 
        //db.collection("Emp").deleteOne({_id:101},(e,result)=> {
            db.collection("Emp").deleteMany({age:{$gt:25}},(e,result)=> {    
                if(!e){
                    if(result.deletedCount>0){
                        console.log("Record deleted successfully");
                    }else {
                        console.log("Record not present");
                    }
                }else {
                    console.log("Error generated...")
                }
             client.close();   
        })
        
    }
    
})