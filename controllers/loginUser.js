const bcrypt = require('bcrypt');
const User = require('../models/userAuthentication');

module.exports.logIn = function  (req, res)  {
    const {email, password} = req.body;
    User.findOne({username: username}, (err, user) => {
        if (err) {
            console.log("Error found")
            console.log(err);
            res.redirect('/');
        } else if (!user) {
            console.log('User not found');
            res.redirect('/');
        } else {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same) { // if the password is correct
                    console.log('Correct password '); 
                    res.render('/pages/G2');
                }  else {
                    res.redirect('/');
                    console.log('Incorrect password');
                }
            })
        }
    })

}