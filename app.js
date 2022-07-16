const express = require("express");
var bodyParser = require('body-parser') 
const db = require("./config/mongoose")
// Start using the Schema
const UserModel = require("./models/userDetails")
const AuthenticationModel = require("./models/authentication")

const app = express();


const path = require("path");
const { ppid } = require("process");
const authentication = require("./models/authentication");

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 4000;




app.use("/",require("./routes/index"))
app.use("/g1",require("./routes/index"))
app.use("/g2",require("./routes/index"))
app.use("/dashboard",require("./routes/index"))
app.use("/G",require("./routes/index"))
app.use("/login",require("./routes/index"))
app.use("/signup",require("./routes/index"))
app.use("/users/register",require("./routes/index"))



// In signup.ejs page, we have route as /users/register which is listening to the post request.
app.post("/users/register",  async (req, res) => {
    await AuthenticationModel.create(req.body, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            res.redirect("/");
        }
    })
  }  ) 



  

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

// Handling Post request for SignUp
app.post("/pages/login", async (req,res) => {
    await authentication.create(req.body)
    console.log(req.body)
   res.render("pages/login")
})


// Handle 404
app.get("/:token", (req,res) => {
    console.log(req.params.token)
    res.status(404).send(`<h1>OOPS You have come to the Wrong page!!!!</h1>`)
} )

app.listen(PORT, () => {
    console.log(`Server is running at  ${PORT}`)
})


