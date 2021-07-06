let express = require("express");
let route = express.Router();       //creating router reference. 
let ProjectController = require("../controller/project.controller");

// we map sub path as well as http methods. 

route.get("/getAllProjectDetails",ProjectController.DisplayAllProject)




module.exports=route;