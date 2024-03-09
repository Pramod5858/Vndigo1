import mongoose, { Schema } from "mongoose";
import users from "./users.js";

const Getthelist = new mongoose.Schema({
   userId: {
      type: Schema.Types.ObjectId, ref: users, required: true
   },
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   quantity: {
      type: Number,
      required: true
   },
   category: {
      type: String,
      required: true,
   },
   description: {
      type: String
   }
})

const products = mongoose.model("products", Getthelist)

export default products;