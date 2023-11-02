import React, { useState } from "react";

function App(props) {

  setInterval(update,1000);
  const [initial , updatedTime] = useState(props.time);

  function update(){
    const newTime = new Date().toLocaleTimeString();
    updatedTime(newTime);
  }

  return (
    <div className="container">
      <h1>{initial}</h1>
      <button onClick = {update}>Get Time</button>
    </div>
  );
}

export default App;
