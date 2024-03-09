import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./Routes/index.js"
// const routes = require("./Routes/index.js");
import { errorMiddleware } from "./errorHandlermiddleware/error.js";
import cookieParser from "cookie-parser";

config({
    path: "./Data/1.env"
})
const port = process.env.PORT || '3000';
const hostname = "localhost";
//const dburl = "mongodb+srv://Yndigo01:wMQaZP9he4jAEyI0@cluster0.sa2moyh.mongodb.net/Yndigo?retryWrites=true&w=majority";


// project name= "Yndigo";
// username-Yndigo01  
// password- "wMQaZP9he4jAEyI0"
// Database Name- "Yndigo"
// collection name- "users"

export const app = express();

app.use(cors(
    {
        credentials: true,
        origin: ["http://localhost:3000"],
        methods: ["Get", "POST", "PUT", "DELETE"]

    }
))

app.use(express.json());
app.use(cookieParser());
app.use("/", route);
app.use(errorMiddleware);

mongoose.connect(process.env.DBURL_DB, { useNewUrlParser: true })

    .then(res => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running at hostname ${hostname}:port ${port}, in ${process.env.NODE_ENV} MODE`);
        })
    })
    .catch(err => console.log(err));

