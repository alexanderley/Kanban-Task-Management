import React, { useContext, useState } from "react";
import { BoardContext } from "../../context/BoardContext";
import { ModalContext } from "../../context/ModalContext";
import { v4 as uuidv4 } from "uuid";

import "./EditBoardModalContent.scss";
import AdjustableInputFieldSection from "../AdjustableInputFieldSection";

import ButtonSecondaryViolet from "../ButtonSecondaryViolet";

export default function EditBoardModalContent() {
  const { boards, setBoards, activeBoard, activeBoardIndex } =
    useContext(BoardContext);
  const { setEditBoardFormIsVisible } = useContext(ModalContext);

  const steps = boards[activeBoardIndex].steps;

  const [boardName, setBoardName] = useState(boards[activeBoardIndex].name);
  const [boardColumns, setBoardColumns] = useState([]);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    switch (fieldName) {
      case "boardName":
        setBoardName(fieldValue);
        break;
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const updatedBoards = [...boards];
  //   const updatedBoard = { ...updatedBoards[activeBoardIndex] };

  //   // Update Board name
  //   if (boardName !== "") {
  //     updatedBoard.name = boardName;
  //   }

  //   // Update Board steps
  //   if (boardColumns.length > 0) {
  //     // If the boardColumns state variable has items, update each step's name property
  //     const updatedSteps = updatedBoard.steps.map((step, index) => {
  //       // Make a copy of each step object using the spread operator
  //       // and update its name property with the name of the corresponding boardColumn
  //       return { ...step, name: boardColumns[index].name };
  //     });

  //     // Replace the board's steps array with the updatedSteps array
  //     updatedBoard.steps = updatedSteps;
  //   }

  //   // Replace the original board object at the activeBoardIndex with the updatedBoard object
  //   updatedBoards[activeBoardIndex] = updatedBoard;

  //   // Call setBoards function to update the boards state variable with the updatedBoards array
  //   setBoards(updatedBoards);
  //   setEditBoardFormIsVisible(false);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBoards = [...boards];
    const updatedBoard = { ...updatedBoards[activeBoardIndex] };

    // Update Board name
    if (boardName !== "") {
      updatedBoard.name = boardName;
    }

    // Update Board steps
    if (boardColumns.length > 0) {
      const updatedSteps = boardColumns.map((column, index) => {
        // If the step already exists, update its name
        if (index < updatedBoard.steps.length) {
          return { ...updatedBoard.steps[index], name: column.name };
        } else {
          // If the step doesn't exist, create a new one
          return { id: uuidv4(), name: column.name, tasks: [] };
        }
      });

      // Replace the board's steps array with the updatedSteps array
      updatedBoard.steps = updatedSteps;
    }

    // Replace the original board object at the activeBoardIndex with the updatedBoard object
    updatedBoards[activeBoardIndex] = updatedBoard;

    // Call setBoards function to update the boards state variable with the updatedBoards array
    setBoards(updatedBoards);
    setEditBoardFormIsVisible(false);
  };

  return (
    <div className="editBoardModalContainer">
      <h2>Edit Board</h2>
      <form className="editBoardForm" onSubmit={handleSubmit}>
        <label>{boards[activeBoardIndex].name}</label>
        <input
          placeholder="Edit the Board"
          value={boardName}
          onChange={handleChange}
          name="boardName"
        ></input>
        <label>Columns</label>
        <AdjustableInputFieldSection
          setBoardColumns={setBoardColumns}
          steps={steps}
        />
        <ButtonSecondaryViolet type="submit">Edit Board</ButtonSecondaryViolet>
      </form>
    </div>
  );
}
