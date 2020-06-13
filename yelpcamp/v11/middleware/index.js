// all the middle ware goes in
var Campground = require("../models/campground");
var Comment    = require("../models/comment");
middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req,res,next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id,function(err,foundCampground){
            if(err){
                req.flash("error","Campgrounds not found");
                res.redirect("back");
            }else{
                // does user own this campground?
                // foundCampground.author.id is not a string it is a object
                // and req.user._id is a string althogh they print same
                if(foundCampground.author.id.equals(req.user._id))
                {   // then we run the code and allow him to edit
                    next(); 
                }
                else{
                    // if not we redirect
                    // means we redirect where the user is previously is
                    req.flash("error","You don't have permission to do that");
                    res.redirect("back");
                }
            }
        })
    }else{
        // if not we redirect somewhere
        req.flash("error","You need to logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.checkCommentsOwnership = function(req,res,next){
    if(req.isAuthenticated()){
       Comment.findById(req.params.comment_id,function(err,foundComment){
           if(err){
               req.flash("error","Comment not found");
               res.redirect("back");
           }else{
               if(foundComment.author.id.equals(req.user._id)){
                   next();
               }
               else{
                   req.flash("error","You don't have permission to do that");
                   res.redirect("back");
               }
           }
       })
    }
    else{
        req.flash("error","You need to logged in to do that");
        res.redirect("back");
    }
}


middlewareObj.isLoggedIn= function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","You must to be logged in to do that");
    res.redirect("/login");
}
module.exports= middlewareObj;