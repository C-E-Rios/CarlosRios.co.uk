var express = require('express');
var nodemailer = require("nodemailer");
var cors = require('cors');
var bodyParser  = require('body-parser');
var app = express();

var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'hello@carlosrios.co.uk',
        pass: 'cgomezrios1'    
    }
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

/*------------------Routing ------------------------*/

app.get('/',function(req,res){
    res.sendfile('./dist/index.html');
});
app.post('/send',function(req,res){
    console.log(req.body);
    var params = req.body;
    var mailOptions={
        to : params.to,
        subject : params.title,
        text : params.mail
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.status(500).send("error");
        }else{
            console.log("Success!");
            res.end("sent");
        }
    });
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});