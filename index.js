// console.log("Assignment 1");

const { Router } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;


// Home Page 
app.get("/", (req,res) => {
    res.status(200).send("<h1>Welcome to the Home Page</h1>")
})


// G route
app.get("/G", (req,res) => {
    res.status(200).send("<h1>Get Ready for your G exam</h1>")
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





app.listen(PORT, () => {
    console.log(`Server is running at  ${PORT}`)
})