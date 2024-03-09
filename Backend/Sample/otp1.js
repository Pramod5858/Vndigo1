import { config } from "dotenv";
config({
    path: "./Data/1.env"
})
import otps from "../Model/otps.js";
import nodemailer from "nodemailer";


export const otp1 = async (otp, email) => {
    try {
        const findsetemail = await otps.create({ email: email, otp: otp });

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASS,
            }
        });

        var mailoptions = {
            from: "youremail@gmail.com",
            to: email,
            subject: "Sendong otp to verify",
            text: "This is your: " + otp
        };

        transporter.sendMail(mailoptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        return true
    } catch (error) {
        console.log(error);
    }
}