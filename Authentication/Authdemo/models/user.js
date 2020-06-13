var mongoose=  require("mongoose"),
    passportLocalMongoose= require("passport-local-mongoose");

var UserSchema= new mongoose.Schema({
    username: String,
    password: String
})

// this line will add all methods of passport local mongoose in our schema so that we can use it
UserSchema.plugin(passportLocalMongoose);
module.exports= mongoose.model("User",UserSchema);