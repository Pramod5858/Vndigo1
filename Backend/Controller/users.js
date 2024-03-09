
import users from "../Model/users.js";
//const Signup = require("../Model/users.js");
import ErrorHandler from "../Utils/error.js";
import bcrypt from "bcrypt";
import { asynError } from "../errorHandlermiddleware/error.js"
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { otpGenerator } from "../Sample/otpGenerator.js";
import { otp1 } from "../Sample/otp1.js";
import otps from "../Model/otps.js";

export const getSignup = asynError(async (req, res, next) => {

    users.find()
        .then(response => {
            res.status(200).json({
                message: "details signup fetched successfully",

                sigup: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

})

export const signup = asynError(async (req, res, next) => {
    const { role, name, email, password } = req.body;

    const findemail = await users.findOne({ email: email });

    if (findemail) {
        return next(new ErrorHandler("Allready email is registered, please try with new email_ID", 400))
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashpassword = await bcrypt.hash(password, salt);

    const useradd = await users.create({

        name: name,
        email: email,
        password: hashpassword,
        role

    })

    const otp = otpGenerator(6);

    const sendOtp = otp1(otp, email);

    console.log(useradd);
    res.status(200).send({ success: true, useradd });
})


export const userotpverify = asynError(async (req, res, next) => {
    console.log(req.body);
    const { otpss, email } = req.body;

    let findotps = await otps.findOne({ email })

    if (findotps.email !== req.body.email) {
        return next(new ErrorHandler("Email not found", 400))
    }

    if (findotps.otp !== otpss) {
        return next(new ErrorHandler("Enter OTP is not correct", 400))
    }

    let findsetotps = await users.updateOne({
        email: email
    }, { $set: { verified: true } })

    console.log(findsetotps);

    res.status(200).send({ success: true, findsetotps })
})


export const login = asynError(async (req, res, next) => {
    const { email, password } = req.body;

    const findemail = await users.findOne({ email: email })

    if (!findemail) {
        return next(new ErrorHandler("No email found, you need to first signup then do login", 400))
    }

    let checkpassword = await bcrypt.compare(password, findemail.password);

    if (!checkpassword) {
        return next(new ErrorHandler("password not match", 400))
    }

    let data = {
        user: {
            id: findemail.id,
            name: findemail.name,
            email: findemail.email,
            role: findemail.role
        }
    }

    let token = Jwt.sign(data, process.env.PRIVATEKEY, { expiresIn: "15d" })

    console.log(data);
    console.log("done this");

    res.status(200).cookie("token", token, { ...cookieOptions, expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), }).send({ success: true, data, token, role: data.user.role })
})

export const cookieOptions = {
    secure: process.env.NODE_ENV === "Development" ? false : true,
    httpOnly: process.env.NODE_ENV === "Development" ? false : true,
    sameSite: process.env.NODE_ENV === "Development" ? false : "none",
}