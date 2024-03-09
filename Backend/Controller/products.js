import express from "express";
import { asynError } from "../errorHandlermiddleware/error.js";
import products from "../Model/products.js";
import ErrorHandler from "../Utils/error.js";
import users from "../Model/users.js";

export const getallproductslist = asynError(async (req, res, next) => {

    let getlist = await products.find();

    console.log(getlist);
    res.status(200).send({ success: true, getlist });

})

export const deletetheproduct = asynError(async (req, res, next) => {
    console.log(req.params.id);

    let delproduct = await products.deleteOne({ _id: req.params.id })

    console.log(delproduct);
    res.status(200).send({ success: true, delproduct })

})

export const addnewproduct = asynError(async (req, res, next) => {
    const { name, price, quantity, category, description } = req.body

    if (!name || !price || !quantity || !category || !description) {
        return next(new ErrorHandler("It should not be blank", 400))
    }

    let email = req.emailID;

    let findDetails3 = await users.findOne({ email })

    let addnewproduct = await new products({
        userId: findDetails3._id,
        name: name,
        price: price,
        quantity: quantity,
        category: category,
        description: description
    })

    addnewproduct.save();

    console.log(addnewproduct);
    res.status(200).send({ success: true, addnewproduct })

})

export const getproductdetails = asynError(async (req, res, next) => {
    try {
        const getDetailproduct = await products.findOne({ _id: req.params.id })
        res.status(200).send({ success: true, getDetailproduct })

    } catch (error) {
        console.log(error.message);
    }
})

export const putproductdetails = asynError(async (req, res, next) => {
    try {
        console.log(req.body);
        console.log(req.params.id);

        let updateproduct = await products.updateOne({ _id: req.params.id }, { $set: req.body })

        res.status(200).send({ success: true, updateproduct })

    } catch (error) {
        console.log(error.message);
    }
})

export const getallproductslistuser = asynError(async (req, res, next) => {
    const findDetails12 = await products.find();

    console.log(findDetails12);
    res.status(200).send({ success: true, findDetails12 });
})