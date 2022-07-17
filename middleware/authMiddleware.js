const Login = require("../models/userAuthentication");

module.exports = (req, res, next) => {
  Login.findOne({ usernam: req.session.Id }, (error, login) => {
    if (error || !login) {
      return res.redirect("/login");
    } else {
      next();
    }
  });

  // next();
};
