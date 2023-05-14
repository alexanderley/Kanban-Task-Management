import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

import { ModalContext } from "../../context/ModalContext";

export default function Modal(props) {
  const {
    setAddNewTaskFormIsVisible,
    setCreateNewBoardFormIsVisible,
    setAddColumnsFormIsVisible,
    setDeleteBoardFormIsVisible,
    setEditBoardFormIsVisible,
    setEditTaskFormIsVisible,
  } = useContext(ModalContext);

  const handleModalClose = () => {
    setAddNewTaskFormIsVisible(false);
    setCreateNewBoardFormIsVisible(false);
    setAddColumnsFormIsVisible(false);
    setDeleteBoardFormIsVisible(false);
    setEditBoardFormIsVisible(false);
    setEditTaskFormIsVisible(false);
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modalContent">{props.children}</div>
      <div className="modalBackground" onClick={handleModalClose}></div>
    </div>,
    document.body
  );
}
