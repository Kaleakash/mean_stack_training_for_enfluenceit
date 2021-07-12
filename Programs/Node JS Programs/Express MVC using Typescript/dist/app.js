"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var project_router_1 = require("./router/project.router");
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var portNumber = 9090 || process.env.PORT;
var url = "mongodb://localhost:27017/mydb123";
app.use(body_parser_1.default.json());
app.use(cors_1.default()); // Enable CORS Orogin Policy 
var option = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
mongoose_1.default.connect(url, option).
    then(function (con) { return console.log("DB Connected successfully"); }).
    catch(function (err) { return console.log(err); });
mongoose_1.default.connection;
app.use("/api/project", project_router_1.router);
app.listen(portNumber, function () { return console.log("Server running on port number " + portNumber); });
