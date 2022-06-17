// console.log("Assignment 1");

const express = require("express");
// const format = require("date-format")

// Requring the Database before the express has been fired. 

const db = require("./config/mongoose")

const app = express();
const path = require("path")
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'assets')));
const PORT = process.env.PORT || 4000;





// Home Page 
app.get("/", (req,res) => {

    // res.sendFile(path.resolve(__dirname,'public/htmls/index.html'))
    // res.sendFile('htmls/index.html', {root: 'public'});

    // res.status(200).send("<h1>Welcome to the Home Page</h1>")

    res.render('pages/index')


})


// G1 route
app.get("/g1", (req,res) => {
    // res.status(200).send(`<h1>Get Ready for your G exam ${format.asString("dd:MM:yyyy", new Date())}  </h1>`)
    res.render('pages/G1')

   
})


// G2 route

app.get("/G2", (req,res) => {
    // res.status(200).send("<h1>Get Ready for your G2 exam</h1>")
    res.render('pages/G2')

})

// Dashboard Route

app.get("/dashboard", (req,res) => {
    // res.status(200).send("<h1>Welcome to the Dashboard </h1>")
    res.render('pages/dashboard')

})

// G Route

app.get("/G", (req,res) => {
    // res.status(200).send("<h1>Welcome to the Dashboard </h1>")
    res.render('pages/G')

})




// Login Route

app.get("/login", (req,res) => {
    // res.status(200).send("<h1>Welcome to the Login Page </h1>")
    res.render('pages/login')

} )



app.get("/signup", (req,res) => {
    res.render('pages/signup')
})




// Handle 404
app.get("/:token", (req,res) => {
    console.log(req.params.token)
    res.status(404).send(`<h1>OOPS You have come to the Wrong page!!!!</h1>`)
} )

app.listen(PORT, () => {
    console.log(`Server is running at  ${PORT}`)
})