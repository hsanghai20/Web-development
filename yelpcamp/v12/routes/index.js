var express= require("express");
var router = express.Router(); 
var passport   = require("passport");
var User       = require("../models/user");

// root route
router.get("/",function(req,res){
    res.render("landing");
})
//=================
// AUTH ROUTE
//=================

//show register form
router.get("/register",function(req,res){
     res.render("login-signup");
 })

//post register route
router.post("/register",function(req,res){
    var newUser= new User({username: req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            // err came from passport;
            req.flash("error",err.message);
            res.render("login-signup");
        }
        else{
            passport.authenticate("local")(req,res, function(){
                req.flash("success","Welcome to YelpCamp!Nice to meet you " + user.username);
                res.redirect("/campgrounds");
            })
        }
    })
})

//Login Route
// show the login form
router.get("/login",function(req,res){
    // either by passing the variable message we can access the flash message
    res.render("login-signup");
})
//middleware
router.post("/login",passport.authenticate("local",{
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}),function(req,res){
});

// LOGOUT ROUTE
router.get("/logout",function(req,res){
    req.logOut();
    req.flash("success","Logged you out!");
    res.redirect("/campgrounds");
})


module.exports = router;