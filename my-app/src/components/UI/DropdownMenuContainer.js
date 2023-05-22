import React from "react";

import "./DropdownMenuContainer.scss";

export default function DropdownMenuContainer(props) {
  return (
    <div className={`dropdownMenu ${props.className}`}>{props.children}</div>
  );
}
