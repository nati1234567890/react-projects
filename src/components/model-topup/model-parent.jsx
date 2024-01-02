import React, { useState } from "react";
import Model from "./model";
import "./model.css";
function ModelParent() {
  const [modelPopUp, setModelPopUp] = useState(false);
  function handleToggle() {
    setModelPopUp(!modelPopUp);
  }
  function onClose() {
    setModelPopUp(false);
  }
  return (
    <div>
      <button onClick={handleToggle}>Open Model Popup</button>
      {modelPopUp && <Model onClose={onClose} body={<div>customised body</div>} />}
    </div>
  );
}

export default ModelParent;
