import React, { useContext } from "react";

import { ReactComponent as IconBoard } from "../img/icon-board.svg";
// import { v4 as uuidv4 } from "uuid";

import { BoardContext } from "./context/BoardContext";
import { ModalContext } from "./context/ModalContext";

import CreateNewBoardForm from "./UI/forms/CreateNewBoardForm";

import "./BoardsSelection.scss";

export default function BoardsSelection() {
  const { activeBoard, setActiveBoard, boards } = useContext(BoardContext);
  const { createNewBoardFormIsVisible, setCreateNewBoardFormIsVisible } =
    useContext(ModalContext);

  const handleBoardClick = (id) => {
    setActiveBoard(id);
  };

  const handleCreateNewBoard = () => {
    setCreateNewBoardFormIsVisible((prevState) => !prevState);
    console.log(createNewBoardFormIsVisible);
  };

  return (
    <div className="boardsSelectionContainer">
      <h4>All Boards({boards.length})</h4>
      {boards.map((board, index) => (
        <div
          key={index}
          className={`boardSelectorContainer boardHover ${
            activeBoard === board.id ? "boardActive" : ""
          }`}
          id={board.id}
          onClick={() => handleBoardClick(board.id)}
        >
          <IconBoard className="iconBoard" />
          <span className="headingM">{board.name}</span>
        </div>
      ))}
      <div className="boardSelectorContainer boardCreateNew">
        <IconBoard className="iconBoard purpleIconBoard" />
        <span
          className="headingM createNewBoardButton"
          onClick={handleCreateNewBoard}
        >
          + Create New Board
        </span>
      </div>
      {createNewBoardFormIsVisible ? <CreateNewBoardForm /> : ""}
    </div>
  );
}
