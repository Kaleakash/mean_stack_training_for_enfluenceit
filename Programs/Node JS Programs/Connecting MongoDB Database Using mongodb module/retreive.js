let mongoClient = require("mongodb").MongoClient;

let url ="mongodb://localhost:27017";

mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=> {

    if(!err){
        var db = client.db("mydb123");      // connected the database. 
        //var cursor = db.collection("Employee").find();
        var cursor = db.collection("Employee").find({_id:{$gt:103}});
        //console.log(cursor)
        
        cursor.forEach((doc)=> {
            //console.log(doc);
            console.log("id "+doc._id+" name is "+doc.name);
            client.close();
        })
       
    }
    
})