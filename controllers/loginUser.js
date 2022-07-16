const bcrypt = require('bcrypt');
const User = require('../models/userAuthentication');

module.exports.Userlogin = function(req, res) {
    const {username, password} = req.body;
    User.findOne({username: username}, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            if (!user) {
                console.log("username not found")
                res.redirect("/");
            } else {
                bcrypt.compare(password, user.password, function(err, result) {
                    if (result) {
                        conosole.log("password matched with database")
                        res.redirect("/dashboard");
                    } else {
                        console.log("password not matched with database")
                        res.redirect("/");
                    }
                })
            }
        }
    })
}