import { Request,Response } from "express";
//import bcrypt from 'bcrypt';
const User = require("./userModel");

const bcrypt = require("bcrypt"); // this module is use to store your password in encode format. 
const jwt = require("jsonwebtoken"); //this module is use to generate the token.    

let registerNewUser = async (req:Request, res:Response) => {
    try {
        let user = new User({
            email: req.body.email
        })
        user.password = hashPassword(req.body.password);
        let createdUser = await user.save();
        res.status(200).json({
            msg: "New user created",
            data: createdUser
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

let loginUser = async (req:Request, res:Response) => {
    const login = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        let user = await User.findOne({
            email: login.email
        });
        if (!user) {
            res.status(400).json({
                type: "Not Found",
                msg: "Wrong Login Details"
            })
        }
        let match = compareUserPassword(login.password, user.password);
        if (match) {
            let token = generateJwtToken({
                user
            }, "secret", {
                //expiresIn: 604800
                expiresIn:10000
            })
            if (token) {
                res.status(200).json({
                    success: true,
                    token: token,
                    userCredentials: user
                })
            }
        } else {
            res.status(400).json({
                type: "Not Found",
                msg: "Wrong Login Details"
            })
        }
    } catch (err) {
        res.status(500).json({
            type: "Something Went Wrong",
            msg: err
        })
    }
}

let hashPassword =  (password:any) => {             // this function is use to convert our password in encript format. 
     return bcrypt.hashSync(password, 10);          
}
let compareUserPassword = (inputtedPassword:any, hashedPassword:any) => {
    return bcrypt.compare(inputtedPassword, hashedPassword)
}
let generateJwtToken = (payload:any, secret:any, expires:any) => {
    return jwt.sign(payload, secret, expires)
}


module.exports= {registerNewUser,loginUser}