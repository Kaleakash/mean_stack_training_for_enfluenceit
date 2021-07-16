"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 4000;
var userRoutes = require("./userRoute"); //bring in our user routes
var cors = require("cors");
mongoose_1.default.connect("mongodb://localhost:27017/angular-myauth", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose_1.default.connection;
var app = express_1.default();
app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRoutes); // http://localhost:4000/user
app.listen(PORT, function () {
    console.log("App is running on " + PORT);
});
