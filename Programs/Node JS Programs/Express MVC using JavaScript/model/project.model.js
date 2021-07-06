let mongoose = require("mongoose");


let ProjectSchema = mongoose.Schema({
    _id:Number,
    typeOfTech:String,
    numberOfEmp:Number
});

let ProductModel = mongoose.model("",ProjectSchema,"Projects");

module.exports=ProductModel;