import express from "express";

import { getLocations, postlocations } from "../Controller/locations.js";
// const locationController = require("../Controller/locations.js");

//import {getSignup} from "../";
//const signupController = require("../Controller/users.js");

import { postfeedbackform, getfeedback } from "../Controller/feedbackform.js";
//const feedbackformController = require("../Controller/feedbackform.js");

import { getallproductslist, deletetheproduct, addnewproduct, getproductdetails, putproductdetails, getallproductslistuser } from "../Controller/products.js";

import { signup, userotpverify, login } from "../Controller/users.js";
import { isAdmin, verifytoken } from "../MiddleWare.js/verifytoken.js";

const route = express.Router();

route.get("/locations", getLocations);//working

route.post("/postlocations", postlocations);

route.post("/feedbackform", postfeedbackform);
// route.get("/signup", getSignup);

route.get("/getfeedback", getfeedback);//working

route.post("/signup", signup)//working

route.post("/login", login)//working

route.post("/userotpverify", userotpverify)//working

route.get("/getallproductslist", verifytoken, isAdmin, getallproductslist)//working

route.delete("/products/:id", verifytoken, isAdmin, deletetheproduct)//working

route.post("/addnewproduct", verifytoken, isAdmin, addnewproduct)//working

route.get("/getproduct/:id", verifytoken, isAdmin, getproductdetails)//working

route.put("/putproductdetails/:id", verifytoken, isAdmin, putproductdetails)//working

route.get("/getallproductslistuser", getallproductslistuser)//working

export default route;
//module.exports = route;