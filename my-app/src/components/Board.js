import React, { useContext, useState } from "react";
import "./Board.scss";
import { ModalContext } from "./context/ModalContext";
import { TaskContext } from "./context/TaskContext";
import { BoardContext } from "./context/BoardContext";

export default function Board(props) {
  const { boards, activeBoardIndex } = useContext(BoardContext);
  const { setEditTaskFormIsVisible, editTaskFormIsVisible } =
    useContext(ModalContext);
  const { activeTask, setActiveTask } = useContext(TaskContext);

  const handleTaskClick = (step, taskIndex) => {
    console.log("step", step);
    console.log("taskIndex", taskIndex);

    setEditTaskFormIsVisible(true);
    const activeStepId = activeTask.stepId;

    const stepIndex = boards[activeBoardIndex].steps.findIndex(
      (stepper) => stepper.id === activeStepId
    );

    setActiveTask((prevActiveTask) => {
      return {
        ...prevActiveTask,
        stepName: step.name,
        stepId: step.id,
        stepIndex: stepIndex,
        index: taskIndex,
        id: step.tasks[taskIndex].id,
        name: step.tasks[taskIndex].name,
        description: step.tasks[taskIndex].description,
        subtasks: step.tasks[taskIndex].subtasks,
      };
    });
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
