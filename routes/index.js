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

// Ensure Router is working
console.log("ROuter is working");

// Home Page
router.get("/", homeController.home);
router.get("/g1", g1PageController.g1Page);
router.get("/g2", g2PageController.g2Page);
router.get("/dashboard", dashboardPageController.dashboardPage);
router.get("/g", gPageController.gTestPage);
router.get("/login", loginPageController.SignInPage);
router.get("/signup", signupPageController.SignUpPage);
router.get("/users/register", storeUserController.storeUser);



// This will be available for the app.js file
module.exports = router;