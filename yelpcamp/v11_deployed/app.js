var express             = require("express"),
    app                 = express(),
    bodyparser          = require("body-parser"),
    mongoose            = require("mongoose"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    Campground          = require("./models/campground"),
    methodOverride      = require("method-override"),
    Comment             = require("./models/comment"),
    flash               = require("connect-flash"),
    seedDB              = require("./seeds"),
    User                = require("./models/user"),
    commentRoutes       = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index"),
    PORT                = process.env.PORT || 3000;
//seedDB();
//mongoose.connect("mongodb://localhost/yelp_camp",{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect("mongodb+srv://harsh123:harsh123@yelpcamp-k8nrv.mongodb.net/yelpcamp?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true});
// by this we set our default url as localhost and set key and value in database so that we can use that database in heroku app
var url= process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true});
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine","ejs");
mongoose.set('useFindAndModify', false);
// dir name refers to the directry we are presently in........
app.use(express.static(__dirname+ "/public"));

// passport config
app.use(require("express-session")({
    secret: "Welcome to Yelpcamp World",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//==============END============
// for the error message we use flash here we use flash to use it
app.use(flash());
// this code will help to pass currentUser in all the ejs file
// this is used when we want that a particular file can be used anywhere
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})
//for update and destroy campgrounds
app.use(methodOverride("_method"));
// say our app to use those routes.......
// to reduce the duplication as always campgrounds always come we reduce it from everywhere
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use(indexRoutes);

app.listen(PORT,function(){
    console.log("Yelp Camp Has Started!");
})