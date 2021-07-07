let Project = require("../model/project.model");

let displayAllProject = (req,res)=> {
    Project.find({},(err,doc)=> {
        if(!err){
            res.json(doc);
        }
    })
}

let getProductById= (req,res)=> {
    Project.find({_id:req.params.pid},(err,doc)=> {
        if(!err){
                res.send(doc);
        }else {
               res.send(err); 
        }
    });
}
let storeProductDetails = (req,res)=> {
    let product = req.body;
    Project.insertMany(product,(err,result)=> {
            if(!err){
                    res.send(result);
            }else {
                    res.send(err);
            }
    })
}
let updateProductPrice = (req,res)=> {
    let product = req.body;
    let newNumberOfEmp = product.numberOfEmp;
    Project.updateOne({_id:req.params.pid},{$set:{numberOfEmp:newNumberOfEmp}},(err,result)=> {
            if(!err){
                res.send(result);
            }else {
                res.send(err);
            }
    })
}

let deleteProjectInfo = (req,res)=> {
    Project.deleteOne({_id:req.params.pid},(err,result)=> {
        if(!err){
            res.send(result);
        }else {
            res.send(err);
        }
    })
}

module.exports={displayAllProject,getProductById,storeProductDetails,updateProductPrice,deleteProjectInfo}