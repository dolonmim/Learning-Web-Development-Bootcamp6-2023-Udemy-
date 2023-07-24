//love calculator
var firstName=prompt("Enter the first name: ");
var secondName=prompt("Enter the second name: ");

var firstRandom = Math.random(firstName) *100;
var secondRandom = Math.random(secondName) *100;

var name = firstRandom + secondRandom;
var name= Math.floor(name) + 1;

alert("Your Lovescore is " + name + "%");




//if-else
var firstName=prompt("Enter the first name: ");
var secondName=prompt("Enter the second name: ");

var firstRandom = Math.random(firstName) *100;
var secondRandom = Math.random(secondName) *100;

var name = firstRandom + secondRandom;
var name= Math.floor(name) + 1;

if(name===100){
    alert("Your Lovescore is more then 100%" );
}
else{
    alert("Your Lovescore is " + name + "%");
}




//Leap year
var year=prompt("Enter the year: ");

if(year%4==0)
{
    if(year%100==0)
    {
        if(year%400==0)
        {
           console.log("Its a leap year"); 
        }
        else{
            console.log("Its not a leap year");
        }
    }
    else
    {
        console.log("Its a leap year");
    }
}
else{
    console.log("Its not a leap year");
}