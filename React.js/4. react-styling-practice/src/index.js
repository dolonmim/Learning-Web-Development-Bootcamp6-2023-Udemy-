import React from "react";
import ReactDOM from "react-dom";

const date= new Date();
const currentTime=date.getHours();

let greetings;
const customStyle={
  color:"" 
}

if(currentTime>12)
{
  greetings="Good Morning";
  customStyle.color="red";
}
else if(currentTime>18)
{
  greetings="Good Evening";
  customStyle.color="green";
}
else{
  greetings="Good Night";
  customStyle.color="blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>{greetings}</h1>
  </div>,
  document.getElementById("root")
);
