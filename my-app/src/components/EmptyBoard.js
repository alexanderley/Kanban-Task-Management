import React, { useContext } from "react";

import "./EmptyBoard.scss";
import ButtonPrimaryL from "./UI/ButtonPrimaryL";

import { ModalContext } from "./context/ModalContext";

export default function EmptyBoard() {
  const { setCreateNewBoardFormIsVisible } = useContext(ModalContext);
  return (
    <div className="emptyBoardContent">
      <h2 style={{ color: "var(--medium-grey)" }}>
        This board is empty. Create a new column to get started.
      </h2>
      <ButtonPrimaryL onClick={() => setCreateNewBoardFormIsVisible(true)}>
        + Create New Board
      </ButtonPrimaryL>
    </div>
  );
}
