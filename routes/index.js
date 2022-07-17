const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const g1PageController = require("../controllers/g1PageController");
const g2PageController = require("../controllers/g2PageController");
const dashboardPageController = require("../controllers/dashboardPageController");
const gPageController = require("../controllers/gTestPageController");
const loginPageController = require("../controllers/userSignInController");
const signupPageController = require("../controllers/userSignUpController");
const storeUserController = require("../controllers/storeUser");
const redirectIfAuthenticated = require("../middleware/redirectIfAuthenticated");



// // User Sign IN 
// const logInUserController = require("../controllers/loginUser");
// router.get("/login", logInUserController.Userlogin); 

// Ensure Router is working
console.log("ROuter is working");

// Home Page
router.get("/", homeController.home);
router.get("/g1", g1PageController.g1Page);
router.get("/g2", g2PageController.g2Page);
router.get("/dashboard", dashboardPageController.dashboardPage);
router.get("/g", gPageController.gTestPage);
router.get("/login", redirectIfAuthenticated, loginPageController.SignInPage);
router.get("/signup", signupPageController.SignUpPage);
router.get("/users/register", storeUserController.storeUser);





// Sign In route

// router.post("/users/login",logInUserController.Userlogin); // this is the post route for the login page



// This will be available for the app.js file
module.exports = router;