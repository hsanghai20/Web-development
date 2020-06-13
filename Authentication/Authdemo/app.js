var express                  = require("express"),
    mongoose                 = require("mongoose"),
    passport                 = require("passport"),
    bodyParser               = require("body-parser"),
    LocalStrategy            = require("passport-local"),
    passportLocalMongoose    = require("passport-local-mongoose"),
    User                     = require("./models/user");

var app = express();
mongoose.connect("mongodb://localhost/auth_demo_app",{useNewUrlParser: true,useUnifiedTopology: true});
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
// for the passport to use in our app we have to write two methods
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// we tell the passport to use what is already defined by the user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// this line will say passport to use authentication so that we use the inbuild function
passport.use(new LocalStrategy(User.authenticate()));

//==========================
// ROUTES 
//=======================

app.get("/",function(req,res){
    res.render("home");
})
// by adding the middle ware we say only when user is loged in then come to this page
app.get("/secret",isLoggedIn,function(req,res){
    res.render("secret");
})

// Auth routes

// SHOW ROUTE the signup form
app.get("/register",function(req,res){
    res.render("register");
})

// POST ROUTE to create a user and save to database signup form
app.post("/register",function(req,res){
    // by this we create a new user and then register it to a database but not saving password 
    // as we dont want that anyone can see the password so we put it outside it convert to a hash code
    User.register(new User({username: req.body.username}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        // it  will log the user in and take care of everything and serialize the user ...
        // local means we use local strategy we can also use google and facebook and so on..
        passport.authenticate("local")(req,res,function(){
            res.redirect("/secret");
        })
    })
})

// LOGIN ROUTES

// render login form Show route
app.get("/login",function(req,res){
    res.render("login");
})

// POST route login logic
// middleware will help to take username and password and compare with the database
// and then if it present then redirect to secret else redirect to login page
app.post("/login",passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect: "/login"
}));

//LOGOUT ROUTE
app.get("/logout",function(req,res){
    req.logOut();
    res.redirect("/");
})
// this function act as a middleware for secret page to render only when user is logged in
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login");
}
app.listen(3000,function(){
    console.log("server started");
})