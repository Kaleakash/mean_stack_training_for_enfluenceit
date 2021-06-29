let express = require("express");
let app = express();
let bodyParser = require("body-parser");

// adding as a middleware. may be user-defined or pre-defined module. 
app.use(bodyParser.urlencoded({extended:true})) // enable body part data and access the property as a key 

app.get("/",(req,res)=> {
    //console.log(__dirname)
    //res.send(__dirname);
    res.sendFile(__dirname+"/index.html");
})

app.get("/loginGet",(req,res)=> {
    res.sendFile(__dirname+"/loginGetMethod.html")
})

app.get("/loginPost",(req,res)=> {
    res.sendFile(__dirname+"/loginPostMethod.html")
})

app.get("/checkLogin",(req,res)=> {
    let user = req.query.user;
    let pass = req.query.pass;
    if(user== "Raj" && pass=="123"){
            res.send("Successfully Login!")
    }else {
            res.send("Failure try once again");
    }
})

app.post("/checkLogin",(req,res)=> {
    let user = req.body.user;
    let pass = req.body.pass;
    if(user=="Raj" && pass=="123"){
        res.send("Successfully Login")
    }else { 
        res.send("Failure try once again");
    }
})


app.listen(9090,()=>console.log("Server running on port number 9090"));