import React from "react";

import "./NewColumnField.scss";

export default function NewColumnField(props) {
  return (
    <div onClick={props.onClick} className="newColumnContainer">
      <h1>+New Column</h1>
    </div>
  );
}
