let express = require("express");
let route = express.Router();       //creating router reference. 
let ProjectController = require("../controller/project.controller");

// we map sub path as well as http methods. 

route.get("/getAllProjectDetails",ProjectController.displayAllProject);
route.get("/getProjectById/:pid",ProjectController.getProductById);
route.post("/storeProjectDetails",ProjectController.storeProductDetails);
route.put("/updateProductPrice/:pid",ProjectController.updateProductPrice);
route.delete("/deleteProduct/:pid",ProjectController.deleteProjectInfo);



module.exports=route;