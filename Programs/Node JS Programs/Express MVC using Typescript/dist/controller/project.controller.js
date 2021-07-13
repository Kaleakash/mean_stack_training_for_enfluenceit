"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProjectById = exports.projectNumberOfEmployeeUpdate = exports.storeProjectDetails = exports.getProjectDetailsById = exports.getAllProjectDetail = void 0;
var projects_model_1 = __importDefault(require("../model/projects.model"));
var getAllProjectDetail = function (req, res) {
    projects_model_1.default.find({}, function (err, doc) {
        if (!err) {
            res.send(doc);
        }
        else {
            throw err; // throw the error to view.
        }
    });
};
exports.getAllProjectDetail = getAllProjectDetail;
var getProjectDetailsById = function (req, res) {
    var updatedId = eval(req.params.id);
    projects_model_1.default.find({ _id: updatedId }, function (err, doc) {
        if (!err) {
            res.json(doc);
        }
        else {
            res.send(err);
        }
    });
};
exports.getProjectDetailsById = getProjectDetailsById;
var storeProjectDetails = function (req, res) {
    var project = req.body;
    var p1 = new projects_model_1.default(project); // created reference using json body with Interface verification 
    p1.save(function (err) {
        if (!err) {
            res.send("Inserted successfully");
        }
        else {
            res.send(err);
        }
    });
};
exports.storeProjectDetails = storeProjectDetails;
var projectNumberOfEmployeeUpdate = function (req, res) {
    var project = req.body;
    var numberOfEmp = project.numberOfEmp;
    var pid = eval(req.params.pid);
    projects_model_1.default.findByIdAndUpdate({ _id: pid }, { $set: { numberOfEmp: numberOfEmp } }, { new: true }, function (err, doc) {
        if (!err) {
            res.send(doc);
        }
    });
};
exports.projectNumberOfEmployeeUpdate = projectNumberOfEmployeeUpdate;
var deleteProjectById = function (req, res) {
    var pid = eval(req.params.pid);
    projects_model_1.default.deleteOne({ _id: pid }, function (err) {
        if (!err) {
            res.send("Deleted successfully");
        }
    });
};
exports.deleteProjectById = deleteProjectById;
