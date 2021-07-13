let express  = require("express");
let router = express.Router();
let Student = require("../controller/student.controller");

router.get("/findAll",Student.findAll)





module.exports=router;