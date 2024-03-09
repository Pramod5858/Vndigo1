import mongoose, {Schema} from "mongoose";

//const Schema = mongoose.Schema;

const feedbackformSchema = new mongoose.Schema({
    firstname: {type:String, required: true},
    lastname: {type: String, required: true},
    phone: {type: Number, required: true},
    feedback: {type: String, required: true}
})

//module.exports = mongoose.model("feedbackform", feedbackformSchema, "feedbackform")

const feedbackform = mongoose.model("feedbackform", feedbackformSchema);

export default feedbackform;
// {
//     "id": "cafe",
//     "firstname": "Lg",
//     "lastname": "lg",
//     "phone": "77788878945",
//     "feedback": "well done"
//   }


