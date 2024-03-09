

import Feedbackform from "../Model/feedbackform.js";
//const Feedbackform = require("../Model/feedbackform.js");
import {asynError} from "../errorHandlermiddleware/error.js";

export const getfeedback = asynError(async(req, res, next)=>{
    Feedbackform.find()
    .then(response => {
        res.status(200).json({
            message:"successfully fetched",
            locations:response
        })
    } )
    .catch(err=>{
        res.status(500).json({error:err})
    })
})

export const postfeedbackform = asynError(async (req, res, next)=>{
    // console.log(req.body);
     const { firstname, lastname, phone, feedback } = req.body


    const useradd = await Feedbackform.create({
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        feedback: feedback

    })

    console.log(useradd);
    res.status(200).send({success: true, useradd})


    
 

}) 



   // const addfeedbackform = await new Feedbackform({
        
    // let addfeedbackform = new Feedbackform(req.body);

    // let result = await addfeedbackform.save();
    
    // res.send({result});

    // })

    // addfeedbackform.save()
    // res.status(200).json({
    //              message: "User details saved",
    //              addfeedbackform
    //          })

    // .then(response=>{
    //     console.log(addfeedbackform);
    //     res.status(200).json({
    //         message: "User details saved",
    //         details: response
    //     })
    // })
    // .catch(err=>{
    //     res.status(500).json({error:err})
    // })

// {
//     "id": "cafe",
//     "firstname": "Lg",
//     "lastname": "lg",
//     "phone": "77788878945",
//     "feedback": "well done"
//   }



