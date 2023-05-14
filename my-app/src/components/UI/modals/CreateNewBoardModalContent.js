import "./CreateNewModalContent.scss";

import ButtonSecondaryViolet from "../ButtonSecondaryViolet";
import { v4 as uuidv4 } from "uuid";

import AdjustableInputFieldSection from "../AdjustableInputFieldSection";
import { useContext, useEffect, useState } from "react";

import { ModalContext } from "../../context/ModalContext";
import { BoardContext } from "../../context/BoardContext";

export default function CreateNewBoardModalContent() {
  const { boards, setBoards, setActiveBoard } = useContext(BoardContext);
  const { setCreateNewBoardFormIsVisible } = useContext(ModalContext);

  const [boardName, setBoardName] = useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const columnsWithTasks = boardColumns.map((column) => {
      return {
        ...column,
        tasks: [],
      };
    });

    const newBoard = {
      id: uuidv4(),
      name: boardName,
      steps: columnsWithTasks,
    };

    setBoards((prevBoards) => [...prevBoards, newBoard]);
    setActiveBoard(newBoard.id);
    setCreateNewBoardFormIsVisible(false);
  };

  return (
    <div className="createNewBoardModalContainer">
      <h2>Add New Board</h2>
      <form onSubmit={handleSubmit}>
        <label>Board Name</label>
        <input
          required
          placeholder="e.g Webdesign"
          value={boardName}
          onChange={handleChange}
          name="boardName"
        ></input>
        <label>Board Columns</label>
        <AdjustableInputFieldSection
          value={boardColumns}
          name="boardColoumns"
          setBoardColumns={setBoardColumns}
        />
        <ButtonSecondaryViolet type="submit">Create Task</ButtonSecondaryViolet>
      </form>
    </div>
  );
}
