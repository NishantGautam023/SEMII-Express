const mongoose = require("mongoose") // Require Mongoose
const {schema} = mongoose;   

// Schema Definition 

const userDetailsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    License_No: String,
    Age: Number,
    car_details: {
        make: String,
        model: String,
        year: Number,
        platNo: String
    },
    
});

const userModel = mongoose.model("userModel", userDetailsSchema);
module.exports = userModel;
