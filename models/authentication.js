const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');

const authenticationSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please provide a  userName"],
        maxlength: [50, "UserName cannot be more than 25 characters"],
        unique: [true, "UserName already exists"]
    },
   
    password: { 
        type: String,
        required: [true, "Please provide a password"],
        minlength: [8, "Password must be at least 8 characters long"],
        select: false, // This will not show the password in the response  
    
    },
    role: {
        type: String,
        default: "Driver", // This will make sure that the default role is examiner
    },
    // forgotPasswordToken: String,
    // forgotPasswordExpiry: Date,
    createdAt: {
        type: Date,
        default: Date.now, // This will make sure that the default date is the current date

    }
})


// Encypt the password before saving
authenticationSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10);
        console.log(`Encrypted Password is ${user.password}`)
    }
    next();

})

// validate the password
authenticationSchema.methods.isPasswordValidated = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
}

module.exports = mongoose.model("authentication", authenticationSchema);