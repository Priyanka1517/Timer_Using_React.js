import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
let time = new Date().toLocaleTimeString();
console.log(time);

ReactDOM.render(<App 
   time = {time}
/>, document.getElementById("root"));