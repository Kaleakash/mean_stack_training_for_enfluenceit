import express,{Request,Response} from 'express';
import bodyParser from 'body-parser';

import {ProductService} from './product.service';
import { Product } from './product.model';

let pservice = new ProductService();



let app = express();

app.use(bodyParser.json())      // enable the json data. 

app.get("/",(req:Request,res:Response)=> {
    res.send("Welcome to REST API Using Express with typeScript");
})

app.get("/getAllProductDetails",(req:Request,res:Response)=> {
    res.json(pservice.getAllProductDeails());
})


app.get("/findProductById/:pid",(req:Request,res:Response)=> {
    let pid:number  = eval(req.params.pid);
    res.json(pservice.getProductById(pid));
})

app.post("/storeProductDetails",(req:Request,res:Response)=> {
    let product:Product = req.body;     // must verify 
    res.send(pservice.storeProductDetails(product));
})

app.delete("/deleteProductById/:pid",(req:Request,res:Response)=> {
    let pid:number  = eval(req.params.pid);
    res.send(pservice.deleteProductById(pid));
})


app.put("/updateProductPrice",(req:Request,res:Response)=> {
    let product:Product = req.body;     // must verify 
    res.send(pservice.updateProductPrice(product));
})
app.listen(9090,()=>console.log("Server running on port number 9090"));