const mongoose = require("mongoose") // Require Mongoose
const {schema} = mongoose;   

// Schema Definition 

const userDetailsSchema = mongoose.Schema({
    firstName:{
        type: String
        // required: [true, "Firstname is required"]
    },
    lastName: {
        type:String
        // required: [true, "LastName is required"]
    },
    License_No: {
        type: String
        // required: [true, "License Number  is required"]
    },
    Age: {
        type: Number
        // required: [true, "Age   is required"]
    },

    car_details: {
        make: String,
        model: String,
        year: Date,
        platNo: String
    },
    
});

const userModel = mongoose.model("userModel", userDetailsSchema);
module.exports = userModel;
