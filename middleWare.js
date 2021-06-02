var express = require('express')
var app = express()

const checkUrl = function(req,res,next){
    console.log("current router is",req.originalUrl)
    next()

}
 app.use(checkUrl)
 app.get('/home',function(req,res){
     res.send("this is home page")
 })

 app.get('/login',function(req,res){
     res.send("this is login page")
 })
 app.get('/end',function(req,res){
     res.send("thsi is end page")

 })
 app.listen(4500)