import React from "react";
import ReactDOM from "react-dom";
import * as cal from "./calculator";

ReactDOM.render(
  <div>
    <li>{cal.add(2, 3)}</li>
    <li>{cal.sub(5, 3)}</li>
    <li>{cal.mul(5, 10)}</li>
    <li>{cal.div(30, 5)}</li>
  </div>,
  document.getElementById("root")
);
