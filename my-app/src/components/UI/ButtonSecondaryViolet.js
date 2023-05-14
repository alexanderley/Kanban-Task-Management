import React, { Children } from "react";

import "./ButtonSecondaryViolet.scss";

export default function ButtonSecondaryViolet(props) {
  return <button className="buttonSecondaryViolet">{props.children}</button>;
}
