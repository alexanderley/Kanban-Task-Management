import React, { useContext, useState, useEffect } from "react";

import ButtonPrimaryL from "./UI/ButtonPrimaryL";

import "./TopNavigation.scss";

import { ReactComponent as IconDots } from "../img/icon-vertical-ellipsis.svg";
import { ReactComponent as IconArrow } from "../img/icon-chevron-up.svg";

import logoDark from "../img/logo-dark.svg";
import logoLight from "../img/logo-light.svg";
import logoMobile from "../img/logo-mobile.svg";

import { ThemeContext } from "./context/ThemeContext";
import { BoardContext } from "./context/BoardContext";
import { ModalContext } from "./context/ModalContext";
import { ViewportContext } from "./context/ViewportContext";
import AddNewTaskForm from "./UI/forms/AddNewTaskForm";
import DeleteBoardForm from "./UI/forms/DeleteBoardForm";
import EditBoardForm from "./UI/forms/EditBoardForm";
import ButtonPrimaryMobile from "./UI/ButtonPrimaryMobile";
// import DropdownMenuContainer from "./UI/DropdownMenu";
import DropdownMenuContainer from "./UI/DropdownMenuContainer";
import BoardsSelection from "./BoardsSelection";

import ThemeChanger from "./ThemeChanger";

import ModalNavigation from "./UI/modals/ModalNavigation";
import Modal from "./UI/modals/Modal";

export default function TopNavigation() {
  const { viewportWidth, viewportBreakpoint } = useContext(ViewportContext);
  const { dropDownModalIsVisible, setDropDownModalIsVisible } =
    useContext(ModalContext);

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

  // Drop down visibility
  const [dropdownEditIsVisibile, setDropdownEditIsVisibile] = useState(false);
  // const [dropdownBoardsIsVisibile, setDropdownBoardsIsVisibile] =
  //   useState(false);

  const handleAddNewTask = () => {
    setAddNewTaskFormIsVisible(true);
  };

  const handleDropDownClick = () => {
    setDropDownModalIsVisible(true);
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
        {viewportWidth > viewportBreakpoint ? (
          <h1>{activeBoardName ? activeBoardName : ""}</h1>
        ) : (
          <div
            className="headlineDropDownMenuContainer"
            onClick={handleDropDownClick}
          >
            <h1>{activeBoardName ? activeBoardName : ""}</h1>
            <IconArrow />
            {dropDownModalIsVisible ? (
              <ModalNavigation className="dropDownmodal">
                <BoardsSelection />
                <ThemeChanger />
              </ModalNavigation>
            ) : (
              ""
            )}
          </div>
        )}
        {boards.length !== 0 ? (
          <div className="addNewTaskButtonContainer">
            <span>{viewportWidth}</span>
            {viewportWidth > viewportBreakpoint ? (
              <ButtonPrimaryL onClick={handleAddNewTask}>
                + Add New Task
              </ButtonPrimaryL>
            ) : (
              <ButtonPrimaryMobile onClick={handleAddNewTask} />
            )}
            <div
              className="dotContainer"
              onClick={() =>
                setDropdownEditIsVisibile((prevState) => !prevState)
              }
            >
              <IconDots />
              {dropdownEditIsVisibile ? (
                <DropdownMenuContainer className="dropdownEditContainer">
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
                </DropdownMenuContainer>
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
