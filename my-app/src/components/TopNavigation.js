import React, { useContext, useState } from "react";

import ButtonPrimaryL from "./UI/ButtonPrimaryL";

import "./TopNavigation.scss";

import { ReactComponent as IconDots } from "../img/icon-vertical-ellipsis.svg";

import logoDark from "../img/logo-dark.svg";
import logoLight from "../img/logo-light.svg";
import logoMobile from "../img/logo-mobile.svg";

import { ThemeContext } from "./context/ThemeContext";
import { BoardContext } from "./context/BoardContext";
import { ModalContext } from "./context/ModalContext";
import AddNewTaskForm from "./UI/forms/AddNewTaskForm";
import DeleteBoardForm from "./UI/forms/DeleteBoardForm";
import EditBoardForm from "./UI/forms/EditBoardForm";

export default function TopNavigation() {
  const { isLightTheme } = useContext(ThemeContext);
  const { activeBoard, boards } = useContext(BoardContext);
  const {
    addNewTaskFormIsVisible,
    setAddNewTaskFormIsVisible,
    deleteBoardFormIsVisible,
    setDeleteBoardFormIsVisible,
    editBoardFormIsVisible,
    setEditBoardFormIsVisible,
  } = useContext(ModalContext);

  const [dropDownIsVisibile, setDropDownIsVisibile] = useState(false);

  const handleAddNewTask = () => {
    setAddNewTaskFormIsVisible(true);
  };

  const activeBoardName = boards.find(
    (board) => board.id === activeBoard
  )?.name;

  return (
    <nav>
      <div className="logoContainer">
        <picture>
          <source srcSet={logoMobile} media="(max-width: 768px)" />
          {isLightTheme ? (
            <img src={logoDark} alt="this is the logo" />
          ) : (
            <img src={logoLight} alt="this is the logo" />
          )}
        </picture>
      </div>
      <div className="addNewTaskContainer">
        <h1>{activeBoardName ? activeBoardName : ""}</h1>
        {boards.length !== 0 ? (
          <div className="addNewTaskButtonContainer">
            <ButtonPrimaryL onClick={handleAddNewTask}>
              + Add New Task
            </ButtonPrimaryL>
            <div
              className="dotContainer"
              onClick={() => setDropDownIsVisibile((prevState) => !prevState)}
            >
              <IconDots />
              {dropDownIsVisibile ? (
                <div className="editBoardDropDownMenu">
                  <span
                    className="headingL"
                    onClick={() => setEditBoardFormIsVisible(true)}
                  >
                    Edit Board
                  </span>
                  <span
                    className="headingL deleteBoard"
                    onClick={() => setDeleteBoardFormIsVisible(true)}
                  >
                    Delete Board
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {addNewTaskFormIsVisible ? <AddNewTaskForm /> : ""}
      {deleteBoardFormIsVisible ? <DeleteBoardForm /> : ""}
      {editBoardFormIsVisible ? <EditBoardForm /> : ""}
    </nav>
  );
}
