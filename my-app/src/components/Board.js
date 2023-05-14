import React, { useContext } from "react";

import "./Board.scss";
// import styles from "./Board.module.scss"; // Import the CSS module

import { ModalContext } from "./context/ModalContext";
import { TaskContext } from "./context/TaskContext";
import { BoardContext } from "./context/BoardContext";

export default function Board(props) {
  const { boards } = useContext(BoardContext);
  const { setEditTaskFormIsVisible, editTaskFormIsVisible } =
    useContext(ModalContext);
  const { setActiveTask } = useContext(TaskContext);

  const handleTaskClick = (step, taskIndex) => {
    setEditTaskFormIsVisible(true);

    console.log("This is the board", boards);

    // const stepIndex = boards.steps.findIndex(
    //   (element) => element.name === "Todo"
    // );

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const tasksIndex = step.tasks.findIndex(
      (element) => element.name === step.tasks[taskIndex].name
    );

    console.log(tasksIndex);

    setActiveTask({
      stepName: step.name,
      stepId: step.id,
      index: taskIndex,
      id: step.tasks[taskIndex].id,
      name: step.tasks[taskIndex].name,
      description: step.tasks[taskIndex].description,
      subtasks: step.tasks[taskIndex].subtasks,
    });

    // console.log("Key: ", props.key);
  };

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
