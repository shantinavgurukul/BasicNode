var express = require("express");
var router = express.Router();

router.get ('/hello',function(req,res){
    res.send("Hey Shanti")

});

router.post('/pass',function(req,res){
    res.send("Hey postman, how are you")

})
module.exports = router;
