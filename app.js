const express = require("express");
var bodyParser = require('body-parser') 
const db = require("./config/mongoose")
// Start using the Schema
const UserModel = require("./models/userDetails")
const AuthenticationModel = require("./models/userAuthentication")
const homeRoute = require("./routes/index")


const app = express();
app.use(express.json());

const loginUserController = require('./controllers/loginUser');

const path = require("path");
const { ppid } = require("process");
const authentication = require("./models/userAuthentication");

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 4000;



const expressSession = require('express-session')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')

app.use(expressSession({
    secret: "sippy The Dog",
    resave: true,
    saveUninitialized: true,
}))


// app.post('/users/login', redirectIfAuthenticated, loginUserController)



app.use(homeRoute);







  

// Handling Post request
app.post("/pages/G", async (req,res) => {
    await UserModel.create(req.body)
    console.log(req.body)
   res.render("pages/G")
})

// Displaying list of USers
app.get("pages/index", async(req,res) => {
    const usermodels = await UserModel.find({})
    console.log(usermodels)
    res.render("pages/G", {
        usermodels: usermodels
        

    })
   
})



// Handle 404
app.get("/:token", (req,res) => {
    console.log(req.params.token)
    res.status(404).send(`<h1>OOPS You have come to the Wrong page!!!!</h1>`)
} )

app.listen(PORT, () => {
    console.log(`Server is running at  ${PORT}`)
})


