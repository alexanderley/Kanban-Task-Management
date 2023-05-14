import React, { useContext } from "react";

import "./EditTaskModalContent.scss";

import { BoardContext } from "../../context/BoardContext";
import Checkbox from "../Checkbox";
import { TaskContext } from "../../context/TaskContext";

export default function EditTaskFormModalContent() {
  const { boards, activeBoard } = useContext(BoardContext);
  const { activeTask } = useContext(TaskContext);
  const handleChange = () => {};

  const handleCheckboxChange = () => {
    console.log('EditTaskModalContent');
  };

  return (
    <>
      <h2>{activeTask.name}</h2>
      <p className="bodyL">{activeTask.description}</p>
      <h3>{`Subtasks (2 of ${activeTask.subtasks.length})`}</h3>
      <form className="editTaskForm">
        <div className="checkBoxesContainer">
          {activeTask.subtasks.map((subtask, index) => (
            <Checkbox
            key={index}
              type="checkbox"
              // id="checkboxField"
              name={subtask.name ? subtask.name : ""}
              done={subtask.done ? subtask.done : ""}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
        <label>Current Status</label>
        <select onChange={handleChange} name="stepTitle">
          {boards
            .find((board) => board.id === activeBoard)
            .steps.map((step, index) => (
              <option key={index} value={step.name}>
                {step.name}
              </option>
            ))}
        </select>
      </form>
    </>
  );
}
