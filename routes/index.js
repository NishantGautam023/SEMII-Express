const express = require("express");
const router = express.Router();



const homeController = require("../controllers/homeController");
const g1PageController = require("../controllers/g1PageController");
const g2PageController = require("../controllers/g2PageController");
const dashboardPageController = require("../controllers/dashboardPageController");
const gPageController = require("../controllers/gTestPageController");

// Middlewares
const redirectIfAuthenticated = require("../middleware/redirectIfAuthenticated");


console.log("ROuter is working");

// NewUser.js is same as userSignUpController.js
const newUserController = require("../controllers/userSignUpController");
router.get("/signup", newUserController.SignUpPage);


const storeUserController = require("../controllers/storeUser");
router.post("/users/register", storeUserController.storeUser); // same as the form of sign up


// login.js is same as userSignInController.js
const loginController = require("../controllers/userSignInController");
router.get("/login", loginController.SignInPage);


const loginUserController = require("../controllers/loginUser");
router.post("/users/login", loginUserController.logInUser);





// Home Page Routes
router.get("/", homeController.home);
router.get("/g1", g1PageController.g1Page);
router.get("/g2", g2PageController.g2Page);
router.get("/dashboard", dashboardPageController.dashboardPage);
router.get("/g", gPageController.gTestPage);









// This will be available for the app.js file
module.exports = router;