let Project = require("../model/project.model");

let DisplayAllProject = (req,res)=> {
    Project.find({},(err,doc)=> {
        if(!err){
            res.json(doc);
        }
    })
}


module.exports={DisplayAllProject}