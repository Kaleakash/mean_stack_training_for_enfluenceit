import express from 'express';
import * as ProjectController from '../controller/project.controller';
export let router = express.Router();

router.get("/getAppProjectDetails",ProjectController.getAllProjectDetail);