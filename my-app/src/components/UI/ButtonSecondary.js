import React from "react";

import "./ButtonSecondary.scss";

export default function ButtonSecondary(props) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="buttonSeconary"
    >
      {props.children}
    </button>
  );
}
