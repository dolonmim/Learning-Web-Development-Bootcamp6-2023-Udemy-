import React from "react";
import Card from "./Card";
import contact from "../contact";

function App() {
  return (
    <div>
      <h1 className="heading">My Contact</h1>
      <Card 
      name="Beyonces"
      img="https://www.pexels.com/photo/woman-posing-for-photo-shoot-1391498/"
      tel="01556688"
      email="ghshgd@gmail.com"


      name={contact[0].name}
      img={contact[0].name}
      tel={contact[0].name}
      email={contact[0].name}


      name={contact[1].name}
      img={contact[1].name}
      tel={contact[1].name}
      email={contact[1].name}


      name={contact[2].name}
      img={contact[2].name}
      tel={contact[2].name}
      email={contact[2].name}



      />                                
    </div>
  );
}

export default App;
