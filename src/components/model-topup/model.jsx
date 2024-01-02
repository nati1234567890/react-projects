import React from "react";
import "./model.css";
function Model({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Model"} className="model">
      <div className="model-content">
        <div className="header">
          <span onClick={onClose} className="close-icon">
            &times;
          </span>
          <h2>{header ? header : "header"}</h2>
        </div>
        <div className="body">{body ? body : <div> This is our Body</div>}</div>
        <div className="footer">
          {footer ? footer : <div> This is our footer</div>}
        </div>
      </div>
    </div>
  );
}

export default Model;
