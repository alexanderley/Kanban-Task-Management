import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./ModalNavigation.scss";

import { ModalContext } from "../../context/ModalContext";

export default function ModalNavigation(props) {
  const { dropDownModalIsVisible, setDropDownModalIsVisible } =
    useContext(ModalContext);
  const handleModalClose = () => {
    setDropDownModalIsVisible(false);
  };

  return ReactDOM.createPortal(
    <div className="modalNavigation">
      <div className="modalNavigationContent">{props.children}</div>
      <div className="modalBackground" onClick={handleModalClose}></div>
    </div>,
    document.body
  );
}
