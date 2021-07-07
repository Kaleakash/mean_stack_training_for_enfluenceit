"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjectDetail = void 0;
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
