const express = require("express");
const https=require("https");   


const app = express();


//get method
app.get("/",function(req,res)
{
    const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&contains=debugging"        
    https.get=(url,function(response)                                                         
    {
        console.log(response,statusCode);                                                               
    })
    res.send("server  running");
});





app.listen(3000,function()
{
    console.log("server is running on port 3000");

});