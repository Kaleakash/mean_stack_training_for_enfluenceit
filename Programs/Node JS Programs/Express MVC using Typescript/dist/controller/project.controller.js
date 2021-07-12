"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeProjectDetails = exports.getProjectDetailsById = exports.getAllProjectDetail = void 0;
var projects_model_1 = __importDefault(require("../model/projects.model"));
var getAllProjectDetail = function (req, res) {
    projects_model_1.default.find({}, function (err, doc) {
        if (!err) {
            res.send(doc);
        }
        else {
            res.send(err);
        }
    });
};
exports.getAllProjectDetail = getAllProjectDetail;
var getProjectDetailsById = function (req, res) {
    var updatedId = eval(req.params.id);
    projects_model_1.default.find({ _id: updatedId }, function (err, doc) {
        if (!err) {
            res.send(doc);
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
