import React, { useContext, useState, useEffect } from "react";
import ButtonSecondary from "../ButtonSecondary";

import "./AddNewTaskModalContent.scss";
import ButtonSecondaryViolet from "../ButtonSecondaryViolet";
import { BoardContext } from "../../context/BoardContext";
import { ModalContext } from "../../context/ModalContext";

import RemovableInputField from "../RemovableInputField";
import AdjustableInputFieldSection from "../AdjustableInputFieldSection";

export default function AddNewTaskModalContent() {
  const { boards, setBoards, activeBoard } = useContext(BoardContext);
  const { setAddNewTaskFormIsVisible } = useContext(ModalContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtask, setSubtask] = useState("");

  const [stepTitle, setStepTitle] = useState(
    boards.find((board) => board.id === activeBoard).steps[0].name
  );

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    switch (fieldName) {
      case "title":
        setTitle(fieldValue);
        break;
      case "description":
        setDescription(fieldValue);
        break;
      case "subtask":
        setSubtask(fieldValue);
        break;
      case "stepTitle":
        setStepTitle(fieldValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // find the index of the "Todo" step in the active board
    const indexOfActiveBoard = boards.findIndex(
      (board) => board.id === activeBoard
    );

    const todoStepIndex = boards[indexOfActiveBoard].steps.findIndex(
      (step) => step.name === stepTitle
    );

    const newTask = {
      id: boards[indexOfActiveBoard].steps[todoStepIndex].tasks.length + 1, // set the
      name: title,
      description: description,
      subtasks: subtask,
    };

    const updatedSteps = [...boards[indexOfActiveBoard].steps];

    updatedSteps[todoStepIndex] = {
      ...updatedSteps[todoStepIndex],
      tasks: updatedSteps[todoStepIndex].tasks.concat(newTask),
    };

    // create a new array of boards, where the active board has its "steps" array updated
    const updatedBoards = boards.map((board, index) => {
      if (index === indexOfActiveBoard) {
        return { ...board, steps: updatedSteps };
      } else {
        return board;
      }
    });

    // set the state with the updated array of boards
    setBoards(updatedBoards);
    setAddNewTaskFormIsVisible(false);
  };

  return (
    <div className="addNewTaskModalContainer">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          value={title}
          type="text"
          name="title"
          placeholder="e.g Take a coffee break"
          onChange={handleChange}
          required
        ></input>
        <label>Description</label>
        <input
          value={description}
          type="text"
          name="description"
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
          onChange={handleChange}
        ></input>
        <label>Subtasks</label>
        <AdjustableInputFieldSection setBoardColumns={setSubtask} />
        <label>Status</label>
        <select onChange={handleChange} name="stepTitle">
          {boards
            .find((board) => board.id === activeBoard)
            .steps.map((step, index) => (
              <option key={index} value={step.name}>
                {step.name}
              </option>
            ))}
        </select>
        <ButtonSecondaryViolet type="submit">Create Task</ButtonSecondaryViolet>
      </form>
    </div>
  );
}
