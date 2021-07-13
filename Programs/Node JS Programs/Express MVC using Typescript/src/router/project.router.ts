import express from 'express';
import * as ProjectController from '../controller/project.controller';
export let router = express.Router();

router.get("/getAppProjectDetails",ProjectController.getAllProjectDetail);
router.get("/getProjectById/:pid",ProjectController.getProjectDetailsById);
router.post("/storeProjectDetails",ProjectController.storeProjectDetails);
router.put("/updateProjectInfo/:pid",ProjectController.projectNumberOfEmployeeUpdate);
router.delete("/deleteProjectInfo/:pid",ProjectController.deleteProjectById);