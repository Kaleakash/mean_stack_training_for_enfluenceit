let mongoose = require("mongoose");


let TrainerSchema = mongoose.Schema({
    _id:Number,
    tname:String,
    tech:String
});

//let TrainerModel = mongoose.model("",TrainerSchema,"Trainer");
let TrainerModel = mongoose.model("Trainer",TrainerSchema);

module.exports = TrainerModel;