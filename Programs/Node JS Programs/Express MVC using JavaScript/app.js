// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let ProjectRouter = require("./router/project.router")

//Database URL 
let url = "mongodb://localhost:27017/mydb123"

// create the express reference 
let app = express();

//middleware 
app.use(bodyParser.json());

// connect the data 
mongoose.connect(url);

// connection 
mongoose.connection;

// middleware : http://localhost:9090/api/project/* for get, post, put and delete 
app.use("/api/project",ProjectRouter);


app.listen(9090,()=>console.log("Server is running on port number 9090"));