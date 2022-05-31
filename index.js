// console.log("Assignment 1");

const express = require("express");
// const format = require("date-format")
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


// G route
app.get("/g", (req,res) => {
    // res.status(200).send(`<h1>Get Ready for your G exam ${format.asString("dd:MM:yyyy", new Date())}  </h1>`)
    res.render('pages/team')

   
})


// G2 route

app.get("/G2", (req,res) => {
    // res.status(200).send("<h1>Get Ready for your G2 exam</h1>")
    res.render('pages/services')

})

// Dashboard Route

app.get("/dashboard", (req,res) => {
    // res.status(200).send("<h1>Welcome to the Dashboard </h1>")
    res.render('pages/projects')

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