import React, { useContext, useState } from "react";

import "./Checkbox.scss";

// import CustomCheckbox from "../../img/icon-check.svg";
import { BoardContext } from "../context/BoardContext";
import { TaskContext } from "../context/TaskContext";

export default function Checkbox(props) {
  const { boards, activeBoardIndex, setBoards } = useContext(BoardContext);
  const { activeTask } = useContext(TaskContext);

  const handleClick = () => {
    const updatedBoards = [...boards]; // Create a shallow copy of the boards array

    const activeBoard = updatedBoards[activeBoardIndex];
    const activeStep = activeBoard.steps[activeTask.stepIndex];
    const activeTaskItem = activeStep.tasks[activeTask.index];
    const subtask = activeTaskItem.subtasks[props.index];

    // Toggle the 'done' property of the subtask
    subtask.done = !subtask.done;

    console.log(props.done);

    setBoards(updatedBoards); // Update the state with the updated boards array
  };

  return (
    <div className="checkboxContainer" onClick={handleClick}>
      <label className="container">
        <input type="checkbox" checked={props.done} onChange={props.onChange} />
        <span className="checkmark"></span>
      </label>
      <span className={`bodyM ${props.done ? "checkedTask" : ""}`}>
        {props.name}
      </span>
    </div>
  );
}
