var randomNumber1=Math.floor(Math.random()*6+1); 

var randomDiceImage="dice" + randomNumber1 + ".png"; 

var randomImageSource="images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource); 



var randomNumber2 = Math.floor(Math.random()*6+1); 

var randomDiceImage2="images/dice" + randomNumber1 + ".png"; 

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource2); 


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="player 1 wins"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="player 2 wins"
}
else (randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw"
}