let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let StudentSchema = mongoose.Schema({
    _id:Number,
    sname:String,
    age:Number,
    tsid:{type:Number,ref:"trainers"}
});

//let StudentModel = mongoose.model("",StudentSchema,"Students");
let StudentModel = mongoose.model("Student",StudentSchema)

module.exports = StudentModel;