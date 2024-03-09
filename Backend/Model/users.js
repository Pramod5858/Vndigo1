import mongoose, {Schema} from "mongoose";

//const mongoose = require("mongoose");

//const Schema = mongoose.Schema;

const SignupDetails= new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    verified:{
        type: Boolean, default:false
    },
    role:{
        type:String, enum:["admin","user"], default:"users"
       
    }
})

//module.exports = mongoose.model('users', SignupDetails, "users");
const users = mongoose.model("users",SignupDetails);

export default users;
// {
//     "id": "afc0",
//     "role": "admin",
//     "name": "temp1",
//     "email": "temp1@gmail.com",
//     "password": "temp"
//   }