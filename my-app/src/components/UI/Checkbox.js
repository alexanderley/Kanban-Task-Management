import React, { useContext, useState } from "react";

import "./Checkbox.scss";

// import CustomCheckbox from "../../img/icon-check.svg";
import { BoardContext } from "../context/BoardContext";

export default function Checkbox(props) {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  const { boards, activeBoardIndex, setBoards } = useContext(BoardContext);

  // const checkbox = boards[activeBoardIndex].

  // if()

  const handleClick = () => {
    setCheckboxIsChecked((prevState) => !prevState);
  };

  return (
    <div className="checkboxContainer" onClick={handleClick}>
      <label className="container">
        <input
          type="checkbox"
          checked={checkboxIsChecked}
          // onChange={handleClick}
          onChange={props.onChange}
        />
        <span className="checkmark"></span>
      </label>
      <span className={`bodyM ${checkboxIsChecked ? "checkedTask" : ""}`}>
        {props.name}
      </span>
    </div>
  );
}
