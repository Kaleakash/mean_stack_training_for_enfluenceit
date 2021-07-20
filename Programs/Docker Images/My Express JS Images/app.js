//let express = require("express");
//let app = express();

let app = require("express")();
let portNumber = 9999;


app.get("/:user",(req,res)=> {
    let name = req.params.user;
    res.send("Welcome to Node JS with Docker user "+name);
})


app.listen(portNumber,()=>console.log(`Server running on port number ${portNumber}`));