const mongoose = require("mongoose"); //Import the mongoose module
let mongoDB = "mongodb://localhost/sample_data_db" // Set up default mongoose connection
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// Then connect to a local MongoDB instance using the mongoose.connect() function We pass the useNewUrlParser: true, etc. to mongoose.connect() to avoid the DeprecationWarning..

const db = mongoose.connection; //Get the default connection

 
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

