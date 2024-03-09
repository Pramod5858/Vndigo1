import mongoose, {Schema} from 'mongoose';

//const mongoose = require('mongoose');

//const Schema = mongoose.Schema;

const locationSchema = new mongoose.Schema({  
    locid:{
       
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true
    }
})

//module.exports = mongoose.model('locations', locationSchema, 'locations');

const locations = mongoose.model("locations", locationSchema);

export default locations;
