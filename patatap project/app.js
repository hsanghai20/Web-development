var express= require("express");
var PORT   = process.env.PORT || 3000;

var app= express();

app.set("view engine","ejs");

app.use(express.static(__dirname+ "/public"));

app.get("/",function(req,res){
    res.render("patatap");
})

app.listen(PORT,function(){
    console.log("server started");
})
