const express = require('express');
const https=require("https");   //new


const app = express();


//get method
app.get("/",function(req,res)
{
    const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&contains=debugging"        //new
    https.get=(url,function(response)                                                         //new
    {
        console.log(response);                                                                //new
    })
    res.send("server is running");
});





app.listen(3000,function()
{
    console.log("server is running on port 3000");

});