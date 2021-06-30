import express,{Request,Response} from 'express';

let app = express();

app.get("/",(req:Request,res:Response)=> {
    res.send("Welcome to Express")
})

app.listen(9090,()=>console.log("Server running on port number 9090"));