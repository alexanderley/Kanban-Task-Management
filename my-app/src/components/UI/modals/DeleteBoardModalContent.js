import React, { useContext } from "react";
import ButtonDestructive from "../ButtonDestructive";
import ButtonSecondary from "../ButtonSecondary";

import { BoardContext } from "../../context/BoardContext";
import { ModalContext } from "../../context/ModalContext";

export default function DeleteBoardModalContent() {
  const { boards, setBoards, activeBoard, setActiveBoard } =
    useContext(BoardContext);

  const { setDeleteBoardFormIsVisible } = useContext(ModalContext);

  const handleDelete = () => {
    const activeBoardIndex = boards.findIndex(
      (board) => board.id === activeBoard
    );

    if (boards.length > 1) {
      let nextBoardIndex;
      if (activeBoardIndex === boards.length - 1) {
        // if the active board is the last board in the array, set the previous board as active
        nextBoardIndex = activeBoardIndex - 1;
      } else {
        // otherwise, set the next board as active
        nextBoardIndex = activeBoardIndex + 1;
      }
      setActiveBoard(boards[nextBoardIndex].id);
    } else {
      setActiveBoard(null);
    }
    const boardIDToDelete = activeBoard;
    const updatedBoards = boards.filter(
      (board) => board.id !== boardIDToDelete
    );
    setBoards(updatedBoards);
    setDeleteBoardFormIsVisible(false);
  };

  return (
    <>
      <h2 style={{ color: "var(--red)", marginBottom: "30px" }}>
        Delete this board?
      </h2>
      <p className="bodyL">
        Are you sure you want to delete the ‘Platform Launch’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        {" "}
        <ButtonDestructive onClick={handleDelete}>Delete</ButtonDestructive>
        <ButtonSecondary onClick={() => setDeleteBoardFormIsVisible(false)}>
          Cancel
        </ButtonSecondary>
      </div>
    </>
  );
}
