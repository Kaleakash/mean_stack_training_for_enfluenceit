//load the express module 
let express = require("express");
// reference of this module 
let app = express();


app.get("/",(req,res)=> {
    res.send("Welcome to Simple Express Module")
})

app.get("/aboutUs",(req,res)=> {
    res.send("About Us Details")
})

app.get("/contactUs",(req,res)=> {
    res.send("Contact Us Details")
})

app.get("/login",(req,res)=> {
    res.send("Login Details")
})



app.listen(9090,()=>console.log("Server running on port number 9090"));