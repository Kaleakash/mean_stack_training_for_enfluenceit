let express = require("express");
let app = express();

// this code is use to to load static angular build files.
app.use(express.static(process.cwd()))


app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

app.get("/say",(req,res)=> {
    res.send("Welcome to Express JS application")
})





app.listen(9999,()=>console.log("Server running on port number 9999"));