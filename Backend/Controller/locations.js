import express from "express";
//const express = require("express");

import locations from "../Model/locations.js";
import { asynError } from "../errorHandlermiddleware/error.js";

export const getLocations = asynError(async (req, res, next) => {
    locations.find()
        .then(response => {
            res.status(200).json({
                message: "Locations fetched successfully", locations: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

})

export const postlocations = asynError(async (req, res, next) => {
    // try {
    const { locid, location } = req.body;

    const userObj = await new locations({

        locid: locid,
        location: location
    });
    userObj.save()
        .then(response => {
            res.status(200).send({
                message: "Saved successfully",
                details: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
    // } catch (error) {
    //     console.log(error);
    // }

})



