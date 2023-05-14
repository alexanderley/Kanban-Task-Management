import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Boards.scss";

import EmptyBoard from "./EmptyBoard";
import NewColumnField from "./NewColumnField";

import { BoardContext } from "./context/BoardContext";
import { ModalContext } from "./context/ModalContext";
import EditTaskForm from "./UI/forms/EditTaskForm";
import AddNewColumnForm from "./UI/forms/AddNewColumn.Form";
import Board from "./Board";

export default function Boards() {
  const { activeBoard, boards } = useContext(BoardContext);
  const {
    editTaskFormIsVisible,
    addNewColumnFormIsVisible,
    setAddColumnsFormIsVisible,
  } = useContext(ModalContext);

  // load the steps for the first element of the array initaly
  let initialSteps = [];
  if (boards.length > 0) {
    initialSteps = boards[0].steps;
  }

  // finds the right step for the right id
  const activeBoardSteps =
    boards.find((board) => board.id === activeBoard)?.steps || initialSteps;

  return (
    <div className="boards">
      {boards.length !== 0
        ? activeBoardSteps.map((step, index) => (
            <Board step={step} index={index} key={step.id} />
          ))
        : ""}
      <NewColumnField onClick={() => setAddColumnsFormIsVisible(true)} />
      {boards.length === 0 ? <EmptyBoard /> : ""}
      {editTaskFormIsVisible ? <EditTaskForm /> : ""}
      {addNewColumnFormIsVisible ? <AddNewColumnForm /> : ""}
    </div>
  );
}
