
const mongoose = require("mongoose") // Require Mongoose
const {schema} = mongoose;   
const bcrypt = require('bcrypt');

// Schema Definition 

const userDetailsSchema = mongoose.Schema({
    firstName:{
        type: String,
         required: [true, "Firstname is required"]
    },
    lastName: {
        type:String,
        required: [true, "LastName is required"]
    },
    License_No: {
        type: String,
        required: [true, "License Number  is required"]
    },
    Age: {
        type: Number,
        required: [true, "Age   is required"]
    },

    car_details: {
        make: String,
        model: String,
        year: Number,
        platNo: String
    },
    
});

// 1)  Encrypt the License Number before saving
userDetailsSchema.pre("save", async function (next) {
    const user = this;
    bcrypt.hash(user.License_No, 10, async function (err, hash) {
        if (err) {
            return next(err);
        }
        user.License_No = hash;
        console.log(`Encrypted License is ${user.License_No}`)
        next();
    })
})



const userModel = mongoose.model("userModel", userDetailsSchema);
module.exports = userModel;
