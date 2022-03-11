const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function (req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  var firstName = req.body.fName;
   var lastName = req.body.lName;
   var email = req.body.email;

   var data = {
       members: [
           {
           email_address : email,
           status : "subscribed",
           merge_fields: {
               fNAME : firstName,
               lNAME : lastName
           }
        }
       ]
   };
  var jsonData = JSON.stringify(data);

   console.log(firstName , lastName , email);
   
});
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
const request = https.request(url, options , function(response){


if (response.statusCode === 200)
{
    res.send("Successfully Subscribed!");
}
else{
    res.send("There was some error with signing up, please try again!");
}
response.on("data", function(data){
    console.log(JSON.parse(data));
});

});