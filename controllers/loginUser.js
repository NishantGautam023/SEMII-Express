const bcrypt = require('bcrypt')
const User = require('../models/userAuthentication');
const alert = require("alert");

module.exports = (req,res) =>{
   
    
    
    User.findOne({username: req.body.username},function(error,user){        
        if(user){
            bcrypt.compare(req.body.password, user.password, (error,same)=>{
                if(same){
                    req.session._Id = user.username;
                    // req.session.userType = user.role
                    console.log("Working this is ")
                    res.redirect('/dashbaord')
                }
                else{
                    console.log("Not working")
                    res.redirect('login')
                }
            })
        }
        else{
            console.log("/login::",user)
            res.redirect('/G2')
        }
    })
}