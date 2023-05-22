// import React, { useContext, useState, useEffect } from "react";

// import "./Checkbox.scss";

// // import CustomCheckbox from "../../img/icon-check.svg";
// import { BoardContext } from "../context/BoardContext";
// import { TaskContext } from "../context/TaskContext";

// export default function Checkbox(props) {
//   const { boards, activeBoardIndex, setBoards } = useContext(BoardContext);
//   const { activeTask } = useContext(TaskContext);

//   // const handleClick = () => {
//   //   const updatedBoards = [...boards]; // Create a shallow copy of the boards array

//   //   const activeBoard = updatedBoards[activeBoardIndex];
//   //   const activeStep = activeBoard.steps[activeTask.stepIndex];
//   //   console.log("Checkbox.js", activeStep.tasks);
//   //   const activeTaskItem = activeStep.tasks[activeTask.index];
//   //   const subtask = activeTaskItem.subtasks[props.index];

//   //   // Toggle the 'done' property of the subtask
//   //   subtask.done = !subtask.done;

//   //   console.log(props.done);

//   //   setBoards(updatedBoards); // Update the state with the updated boards array
//   // };
//   const handleClick = () => {
//     // const updatedBoards = [...boards]; // Create a shallow copy of the boards array
//     // const activeBoard = boards[activeBoardIndex];
//     // const activeStep = activeBoard.steps[activeTask.stepIndex];
//     // console.log("Checkbox.js", activeStep.tasks);
//     // const activeTaskItem = activeStep.tasks[activeTask.index];
//     // const subtask = activeTaskItem.subtasks[props.index];
//     // // Toggle the 'done' property of the subtask
//     // subtask.done = !subtask.done;
//     // console.log(props.done);
//     // setBoards(boards); // Update the state with the updated boards array

//     const updatedBoards = [...boards];

//   };

//   return (
//     <div className="checkboxContainer" onClick={handleClick}>
//       <label className="container">
//         <input type="checkbox" checked={props.done} onChange={props.onChange} />
//         <span className="checkmark"></span>
//       </label>
//       <span className={`bodyM ${props.done ? "checkedTask" : ""}`}>
//         {props.name}
//       </span>
//     </div>
//   );
// }

import React, { useContext } from "react";

import "./Checkbox.scss";

// import CustomCheckbox from "../../img/icon-check.svg";
import { BoardContext } from "../context/BoardContext";
import { TaskContext } from "../context/TaskContext";

export default function Checkbox(props) {
  const { boards, activeBoardIndex, setBoards } = useContext(BoardContext);
  const { activeTask } = useContext(TaskContext);

  // const handleClick = () => {
  //   const updatedBoards = [...boards]; // Create a copy of the boards array
  //   const activeBoard = updatedBoards[activeBoardIndex];
  //   console.log("activeBoard", activeBoard);
  //   const activeTaskIndex = activeBoard.steps
  //     .flatMap((step) => step.tasks)
  //     .findIndex((task) => task.id === activeTask.id);
  //   console.log("activeTaskIndex", activeTaskIndex);
  //   const activeSubtaskIndex = activeBoard.steps
  //     .flatMap((step) => step.tasks[activeTaskIndex].subtasks)
  //     .findIndex((subtask) => subtask.id === props.id);

  //   // Toggle the "done" state of the subtask
  //   updatedBoards[activeBoardIndex].steps.flatMap((step) => step.tasks)[
  //     activeTaskIndex
  //   ].subtasks[activeSubtaskIndex].done = !props.done;

  //   setBoards(updatedBoards); // Update the boards state with the modified copy
  // };

  const handleClick = () => {
    const updatedBoards = [...boards]; // Create a copy of the boards array
    const activeBoard = updatedBoards[activeBoardIndex];
    console.log("activeBoard", activeBoard);
    // activeBoard {id: 123234, name: 'Marketing Plan ', steps: Array(3)}
    console.log("activTask", activeTask);
    // const activeStepIndex = activeTask.findIndex(
    //   (stepId) => stepId === activeTask.stepId
    // );
    // console.log("activeStepIndex", activeStepIndex);
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
