import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import "./RemovableInputfield.scss";
import { ReactComponent as IconCross } from "../../img/icon-cross.svg";

import { BoardContext } from "../context/BoardContext";

export default function RemovableInputField(props) {
  const { boards } = useContext(BoardContext);

  return (
    <div key={uuidv4} className="newInputContainer">
      <input
        required
        type="text"
        name="subtask"
        onChange={props.onChange}
        value={props.value}
      />
      <IconCross onClick={props.onCrossClick} />
    </div>
  );
}
