import jwt from "jsonwebtoken";

import { asynError } from "../errorHandlermiddleware/error.js";
import users from "../Model/users.js";
import ErrorHandler from "../Utils/error.js";

export const verifytoken = asynError(async (req, res, next) => {

    console.log("you are at verify token");
    console.log("1");
    let token = req.headers["authorization"] || req.body.token || req.query.token;
    // const {token}  = req.cookies;

    if (!token) {
        console.log("1234");
        return next(new ErrorHandler("not loggin ate", 401))
    }
        token = token.split(" ")[1];

    jwt.verify(token, process.env.PRIVATEKEY, (err, decoded) => {
        if (err) {
            res.status(401).send({ result: "Please check tken or check if any edited to it" })
        }
        else {
            console.log("123");
            //console.log(decoded);
            const emailID = decoded.user.email;
            req.emailID = emailID;
            next();
        }
    })
})

export const isAdmin = asynError(async(req, res, next)=>{
    try {
        console.log("12");
        console.log("you are at verify/isadmin");
        let email = req.emailID;
        let findDetails = await users.findOne({email})

        if(findDetails.role !=="admin") return next(new ErrorHandler("Only admin is allowed", 401))

        console.log(findDetails);
        next()

    } catch (error) {
        console.log(error);
        res.send(error.message)
    }
})