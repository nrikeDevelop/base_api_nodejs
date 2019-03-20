
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var port = 3001

//METHODS
function success(res,state ,msg,json_data = null){
    return res.status(200).send({
        success: state,
        message: msg,
        json_data
      });  
}

function error(res, msg){
    return res.send({
        message: msg
      });  
}

//LISTEN REQUESTS
app.listen(port, () => {
 console.log("Server running on port: "+port);
});

//SIMPLE GET 
app.get("/base_get", (req, res, next) => {
    //do something

    //send data
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

//SIMPLE POST
app.post('/base_post', (req, res) => {

    if(!req.body.data) {
        error(res,"Not found data");
    }else{
        /*
        var json_data = {
            name: "Bob",
            email_data:{
                nick:"bobby",
                password:"pass_boby"
            }
        }
        success(res,true,"post correctly",json_data) ;
        */
       success(res,true,"post correctly") ;
    }
});