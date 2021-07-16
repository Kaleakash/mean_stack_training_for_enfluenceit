import express from 'express';
import mongoose from 'mongoose';
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const userRoutes = require("./userRoute"); //bring in our user routes
const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/angular-myauth", {
        useUnifiedTopology: true,
        useNewUrlParser: true
});
mongoose.connection;
const app = express();
app.use(cors()); 
app.use(bodyParser.json());
app.use("/user", userRoutes);   // http://localhost:4000/user
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});