//variable
// var a=3;
// var b =8;
// var c=a;
// a=b;
// b=c;
// console.log("a is " +a);
// console.log("b is " +b);

// //concatenation
// var message="Hello!";
// var name="Mim";
// console.log(message + " "+ name);

//length
// var name2=prompt("Enter your name");
// var count=name2.length;
// console.log(count);


//slicing
// var text=prompt("Enter your text");
// var slice=text.slice(0,2);
// console.log(slice);

//uppercase
// var name="mim";
// name.toUpperCase();
// name.toLowerCase();




//mim to Mim
var name=prompt("Enter Your name");
var space=name.slice(0,1);
var upper=space.toUpperCase();

var space2=name.slice(1,name.length);
var lower=space2.toLowerCase();

var show="Hello " + upper + lower;
console.log(show);



//function
function getMilk()
{
  console.log("text");
  console.log('text')
  console.log('text')
}
getMilk();





//function parameter and arguments
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  
  var numberofbottles=Math.floor(money/1.5);
  console.log("Buy" + numberofbottles + "Bottles of milk");
  
  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(5);

