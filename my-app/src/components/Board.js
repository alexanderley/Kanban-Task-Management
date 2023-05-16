// import React, { useContext, useEffect } from "react";

// import "./Board.scss";
// // import styles from "./Board.module.scss"; // Import the CSS module

// import { ModalContext } from "./context/ModalContext";
// import { TaskContext } from "./context/TaskContext";
// import { BoardContext } from "./context/BoardContext";

// export default function Board(props) {
//   const { boards, activeBoardIndex } = useContext(BoardContext);
//   const { setEditTaskFormIsVisible, editTaskFormIsVisible } =
//     useContext(ModalContext);
//   const { activeTask, setActiveTask } = useContext(TaskContext);

//   const handleTaskClick = (step, taskIndex) => {
//     setEditTaskFormIsVisible(true);

//     // console.log("This is the board", boards);

//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     const tasksIndex = step.tasks.findIndex(
//       (element) => element.name === step.tasks[taskIndex].name
//     );

//     const stepIndex = boards[activeBoardIndex].steps.findIndex(
//       (step) => step.id === activeTask.stepId
//     );

//     // console.log("this is the step index", stepIndex);
//     console.log("taskindex", tasksIndex);

//     setActiveTask((prevActiveTask) => ({
//       ...prevActiveTask,
//       stepName: step.name,
//       stepId: step.id,
//       stepIndex: stepIndex,
//       index: taskIndex,
//       id: step.tasks[taskIndex].id,
//       name: step.tasks[taskIndex].name,
//       description: step.tasks[taskIndex].description,
//       subtasks: step.tasks[taskIndex].subtasks,
//     }));

//     // console.log("Key: ", props.key);
//   };

//   return (
//     <div className="board" key={`board-${props.step.name}`}>
//       <div className="boardTitleContainer">
//         <div className={`taskDot taskDotColor${props.index + 1}`}></div>
//         <span className="headingS taskTitle">{`${props.step.name} (${props.step.tasks.length})`}</span>
//       </div>
//       <div
//         className={`tasksContainer ${
//           props.step.tasks.length === 0 ? "dashedBorder" : ""
//         }`}
//       >
//         {props.step.tasks.map((task, taskIndex) => (
//           <div
//             className="taskContainer"
//             key={`task-${props.step.name}-${task.name}-${taskIndex}`}
//           >
//             <div
//               className="task"
//               onClick={() => handleTaskClick(props.step, taskIndex)}
//             >
//               <span className="headingM">{task.name}</span> <br />
//               <span className="bodyM subTask">
//                 {task.subtasks && Array.isArray(task.subtasks)
//                   ? task.subtasks.filter((subtask) => subtask.done === true)
//                       .length
//                   : 0}{" "}
//                 of {task.subtasks?.length} subtasks
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useContext, useEffect, useState } from "react";

import "./Board.scss";

import { ModalContext } from "./context/ModalContext";
import { TaskContext } from "./context/TaskContext";
import { BoardContext } from "./context/BoardContext";

export default function Board(props) {
  const { boards, activeBoardIndex } = useContext(BoardContext);
  const { setEditTaskFormIsVisible, editTaskFormIsVisible } =
    useContext(ModalContext);
  const { activeTask, setActiveTask } = useContext(TaskContext);

  const [tasksIndex, setTasksIndex] = useState(-1);

  const handleTaskClick = (step, taskIndex) => {
    setEditTaskFormIsVisible(true);
    setTasksIndex(
      step.tasks.findIndex(
        (element) => element.name === step.tasks[taskIndex].name
      )
    );
  };

  useEffect(() => {
    if (tasksIndex !== -1) {
      const stepIndex = boards[activeBoardIndex].steps.findIndex(
        (step) => step.id === activeTask.stepId
      );

      setActiveTask((prevActiveTask) => ({
        ...prevActiveTask,
        stepName: props.step.name,
        stepId: props.step.id,
        stepIndex: stepIndex,
        index: tasksIndex,
        id: props.step.tasks[tasksIndex].id,
        name: props.step.tasks[tasksIndex].name,
        description: props.step.tasks[tasksIndex].description,
        subtasks: props.step.tasks[tasksIndex].subtasks,
      }));
    }
  }, [
    tasksIndex,
    setActiveTask,
    activeBoardIndex,
    boards,
    activeTask.stepId,
    props.step.id,
  ]);

  return (
    <div className="board" key={`board-${props.step.name}`}>
      <div className="boardTitleContainer">
        <div className={`taskDot taskDotColor${props.index + 1}`}></div>
        <span className="headingS taskTitle">{`${props.step.name} (${props.step.tasks.length})`}</span>
      </div>
      <div
        className={`tasksContainer ${
          props.step.tasks.length === 0 ? "dashedBorder" : ""
        }`}
      >
        {props.step.tasks.map((task, taskIndex) => (
          <div
            className="taskContainer"
            key={`task-${props.step.name}-${task.name}-${taskIndex}`}
          >
            <div
              className="task"
              onClick={() => handleTaskClick(props.step, taskIndex)}
            >
              <span className="headingM">{task.name}</span> <br />
              <span className="bodyM subTask">
                {task.subtasks && Array.isArray(task.subtasks)
                  ? task.subtasks.filter((subtask) => subtask.done === true)
                      .length
                  : 0}{" "}
                of {task.subtasks?.length} subtasks
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
