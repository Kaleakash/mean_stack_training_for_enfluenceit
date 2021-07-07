import ProjectModel from '../model/projects.model'
import {Request,Response} from 'express';

export let getAllProjectDetail = (req:Request,res:Response)=> {
    ProjectModel.find({},(err:any,doc:any)=>{
           if(!err){
               res.send(doc);
           }else {
               res.send(err);
           }
    })
}

export let getProjectDetailsById = (req:Request,res:Response)=> {
    let updatedId = eval(req.params.id);
    ProjectModel.find({_id:updatedId},(err:any,doc:any)=>{
           if(!err){
               res.send(doc);
           }else {
               res.send(err);
           }
    })
}

export let storeProjectDetails = (req:Request,res:Response)=> {
    let project = req.body;
    let p1 = new ProjectModel(project); // created reference using json body with Interface verification 
    
    p1.save((err:any)=> {
        if(!err){
            res.send("Inserted successfully")
        }else {
            res.send(err);
        }
    })
}

