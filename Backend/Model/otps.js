import mongoose from "mongoose";

const SchemaOtp = new mongoose.Schema({
    email: {type: String, required:true},
    otp: {type: String, required:true, unique:true}
},{
    timestamps:true
})

SchemaOtp.index({createdAt:1}, {expireAfterSeconds:300})

const otps = mongoose.model("otp", SchemaOtp)

export default otps
