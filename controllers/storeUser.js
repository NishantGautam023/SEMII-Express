
const User = require('../models/userAuthentication');
const path = require('path');

module.exports.storeUser = function(req, res) {
    User.create(req.body, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            res.redirect("/");
        }
    })
  }
  