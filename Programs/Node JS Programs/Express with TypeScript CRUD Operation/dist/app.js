"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const product_service_1 = require("./product.service");
let pservice = new product_service_1.ProductService();
let app = express_1.default();
app.use(body_parser_1.default.json()); // enable the json data. 
app.get("/", (req, res) => {
    res.send("Welcome to REST API Using Express with typeScript");
});
app.get("/getAllProductDetails", (req, res) => {
    res.json(pservice.getAllProductDeails());
});
app.get("/findProductById/:pid", (req, res) => {
    let pid = eval(req.params.pid);
    res.json(pservice.getProductById(pid));
});
app.post("/storeProductDetails", (req, res) => {
    let product = req.body; // must verify 
    res.send(pservice.storeProductDetails(product));
});
app.delete("/deleteProductById/:pid", (req, res) => {
    let pid = eval(req.params.pid);
    res.send(pservice.deleteProductById(pid));
});
app.put("/updateProductPrice", (req, res) => {
    let product = req.body; // must verify 
    res.send(pservice.updateProductPrice(product));
});
app.listen(9090, () => console.log("Server running on port number 9090"));
