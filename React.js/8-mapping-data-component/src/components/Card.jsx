import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
        <Avatar />
      </div>
      <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
export default Card;
