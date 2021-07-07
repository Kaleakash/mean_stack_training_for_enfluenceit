import express,{Application} from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {router as ProjectRouter} from './router/project.router';

let app:Application = express();
let portNumber = 9090 || process.env.PORT;

let url = "mongodb://localhost:27017/mydb123";

app.use(bodyParser.json());

let option = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(url,option).
then(con=>console.log("DB Connected successfully")).
catch(err=>console.log(err))

mongoose.connection;

app.use("/api/project",ProjectRouter);



app.listen(portNumber,()=>console.log(`Server running on port number ${portNumber}`));