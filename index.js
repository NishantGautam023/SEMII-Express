// console.log("Assignment 1");

const express = require("express");
// const format = require("date-format")
const app = express();
app.set("view engine", "ejs")
// app.use(express.static("public"))
const PORT = process.env.PORT || 4000;
// const path = require("path")ls


const user = {
    firstName: 'Nishant',
    lastName: 'Gautam',
}


// Home Page 
app.get("/", (req,res) => {

    // res.sendFile(path.resolve(__dirname,'public/htmls/index.html'))
    // res.sendFile('htmls/index.html', {root: 'public'});

    // res.status(200).send("<h1>Welcome to the Home Page</h1>")

    res.render('pages/index', {
        user: user
    })


})


// G route
app.get("/G", (req,res) => {
    res.status(200).send(`<h1>Get Ready for your G exam ${format.asString("dd:MM:yyyy", new Date())}  </h1>`)
   
})


// G2 route

app.get("/G2", (req,res) => {
    res.status(200).send("<h1>Get Ready for your G2 exam</h1>")
})

// Dashboard Route

app.get("/dashboard", (req,res) => {
    res.status(200).send("<h1>Welcome to the Dashboard </h1>")
})

// Login Route

app.get("/login", (req,res) => {
    res.status(200).send("<h1>Welcome to the Login Page </h1>")
} )


// Handle 404
app.get("/:token", (req,res) => {
    console.log(req.params.token)
    res.status(404).send(`<h1>OOPS You have come to the Wrong page!!!!</h1>`)
} )

app.listen(PORT, () => {
    console.log(`Server is running at  ${PORT}`)
})