const mongoose = require("mongoose"); //Import the mongoose module

// User creditnals of the MongoDb Atlas
let user = 'mongodb+srv://sippy:sippy123@fullstack.nuev0j6.mongodb.net/?retryWrites=true&w=majority'

 // Set up default mongoose connection
 mongoose.connect(user, {useNewUrlParser: true, useUnifiedTopology: true});
// Then connect to a local MongoDB instance using the mongoose.connect()
// function We pass the useNewUrlParser: true, etc. to mongoose.connect() to avoid the DeprecationWarning..

const db = mongoose.connection; //Get the default connection

// 
 
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection for successful connection 
db.once('open', function () {
    console.log("Database has been conected")
})

 