let express  = require("express");
let router = express.Router();
let Trainer = require("../controller/trainer.controller.js");

router.get("/init",Trainer.getInitTrainerAndStudent)





module.exports=router;