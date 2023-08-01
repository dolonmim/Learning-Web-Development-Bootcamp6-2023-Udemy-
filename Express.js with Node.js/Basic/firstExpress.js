const express = require('express');
const app = express();


//get method
app.get("/",function(request,response)
{
    response.send("hello");
});



//to go to contact page
app.get("/contact",function(req,res)
{
    res.send("contact me at :gfgtgtgt@gmail.com");
});




//to go to about page
app.get("/about",function(req,res)
{
    res.send("This is Mim");
});



//to go to hobby page
app.get("/hobby",function(req,res)
{
    res.send("<ul><li>travell</li><li>code</li><li>music</li></ul>");
});




app.listen(3000,function()
{
    console.log("server is running on port 3000");

});

