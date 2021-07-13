let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let Trainer = require("./router/trainer.router")
let Student = require("./router/student.router");

let url = "mongodb://localhost:27017/relationship";
let app = express();

let options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
app.use(bodyParser.json())

app.use("/api/trainer",Trainer);
app.use("/api/student",Student)

mongoose.connect(url,options).then(res=>console.log("Connected successfully")).catch(e=>console.log("Error generated"))

app.listen(9999,console.log("Server is running on port number 9999"))