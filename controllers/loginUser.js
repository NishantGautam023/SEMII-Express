const bcrypt = require('bcrypt')
const User = require('../models/userAuthentication');

module.exports = (req,res) =>{
    const { username,password } = req.body
    
    
    User.findOne({username: username},function(error,user){        
        if(user){
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same){
                    req.session.userId = user._id
                    console.log("Working this is ")
                    res.redirect('/')
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