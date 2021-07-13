import ProjectModel from '../model/projects.model'
import {Request,Response} from 'express';

export let getAllProjectDetail = (req:Request,res:Response)=> {
    ProjectModel.find({},(err:any,doc:any)=>{
           if(!err){
               res.send(doc);
           }else {
               throw err;           // throw the error to view.
           }
    })
}

export let getProjectDetailsById = (req:Request,res:Response)=> {
    let updatedId = eval(req.params.id);
    ProjectModel.find({_id:updatedId},(err:any,doc:any)=>{
           if(!err){
               res.json(doc);
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


export let projectNumberOfEmployeeUpdate = (req:Request,res:Response)=> {
    let project = req.body;
    let numberOfEmp = project.numberOfEmp;
    let pid = eval(req.params.pid);
    ProjectModel.findByIdAndUpdate({_id:pid},{$set:{numberOfEmp:numberOfEmp}},{new:true},(err:any,doc:any)=> {
        if(!err){
                res.send(doc);
        }
    })
}

export let deleteProjectById = (req:Request,res:Response)=> {
    let pid = eval(req.params.pid);
    ProjectModel.deleteOne({_id:pid},(err:any)=> {
        if(!err){
                res.send("Deleted successfully");
        }
    })
}




