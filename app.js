var express = require("express"),
app = express()
app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("home")
})

app.get("/app",function(req,res){
    res.render("app")
})
app.listen(process.env.PORT,process.env.IP)