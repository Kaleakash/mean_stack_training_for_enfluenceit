import  mongoose, { Document, Model, Schema }  from "mongoose";

interface Project extends Document{
    _id:Number;
    typeOfTech:string;
    numberOfEmp:Number;
}

let ProjectSchema:Schema = new Schema({
    _id:{type:Number,required:true},
    typeOfTech:{type:String,required:true},
    numberOfEmp:{type:Number,required:true}
})

let ProjectModel  = mongoose.model<Project>("",ProjectSchema,"Projects")
export default ProjectModel;

