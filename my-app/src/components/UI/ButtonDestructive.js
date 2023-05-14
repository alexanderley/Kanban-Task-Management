import React from "react";

import "./ButtonDestructive.scss";

export default function ButtonDestructive(props) {
  return (
    <button
      className="buttonSeconary buttonDestructive"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
