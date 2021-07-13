
let Trainer = require("../model/trainer.model");
let Student = require("../model/student.model");

//Initialize the Trainer and Student Details  
let getInitTrainerAndStudent = (req,res)=> {
       let t1 =  new Trainer({_id:1,tname:"Raj",tech:"Java"})
       let t2 =  new Trainer({_id:2,tname:"Ravi",tech:".net"})
       let t3 =  new Trainer({_id:3,tname:"Ramesh",tech:"Python"})

       let s1 = new Student({_id:100,sname:"Seeta",age:21,tsid:t1._id});
       let s2 = new Student({_id:101,sname:"Reeta",age:22,tsid:t1._id});
       let s3 = new Student({_id:102,sname:"Veeta",age:23,tsid:t2._id});
       let s4 = new Student({_id:103,sname:"Keeta",age:24,tsid:t2._id});
       let s5 = new Student({_id:104,sname:"Meeta",age:25,tsid:t2._id});
       let s6 = new Student({_id:105,sname:"Leeta",age:26,tsid:t3._id});

        Trainer.insertMany([t1,t2,t3,],(err,result)=> {
            if(!err){
                console.log("Record insert successfully in trainer");
            }
        })

        Student.insertMany([s1,s2,s3,s4,s5,s6],(err,result)=> {
            if(!err){
                console.log("Record inserted successfuly in student "+result)
            }else {
                console.log(err)
            }
        })    
        res.send("Relationship created successfully...")

}

let getProductById = (req,res)=> {
    
    let pid = req.params.pid;       //passing id through path param 
    
    ProductModel.find({_id:pid},(err,data)=> {
        if(!err){
            res.json(data);         // return array 
            //res.json(data[0])     // return only one object 
        }
    })
}

let storeProductDetails = (req,res)=> {
   
    let product = new ProductModel({
        _id:req.body.pid,
        pname:req.body.pname,
        price:req.body.price
    });

    product.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Record didn't store ");
        }
    })

}

let deleteProductById= (req,res)=> {
    let pid = req.params.pid;
    ProductModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Record deleted successfully")
                }else {
                    res.send("Record not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let updateProductPrice= (req,res)=> {
    let pid = req.body.pid;
    let updatedPrice = req.body.price;
    ProductModel.updateMany({_id:pid},{$set:{price:updatedPrice}},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Record updated succesfully")
            }else {
                    res.send("Record is not available");
            }
        }else {
            res.send("Error generated "+err);
        }
    })

}

module.exports={getInitTrainerAndStudent}