const mongoose = require("mongoose");
const validator = require("validator");

const authenticationSchema = new mongoose.Schema({
    uuserName: {
        type: String,
        required: [true, "Please provide a  userName"],
        maxlength: [50, "UserName cannot be more than 25 characters"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        validate: [validator.isEmail, "Please provide a valid email"],
        unique: true, // This will make sure that the email is unique and will not allow the same email to be used twice
    },
    password: { 
        type: String,
        required: [true, "Please provide a password"],
        minlength: [8, "Password must be at least 8 characters long"],
        select: false, // This will not show the password in the response   
    },
    role: {
        type: String,
        default: "examiner", // This will make sure that the default role is examiner
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    createdAt: {
        type: Date,
        default: Date.now, // This will make sure that the default date is the current date
        
    }
})





module.exports = mongoose.model("authentication", authenticationSchema);