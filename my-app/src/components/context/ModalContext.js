import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  // const [modalIsVisible, setModalIsVisible] = useState(false);
  const [addNewTaskFormIsVisible, setAddNewTaskFormIsVisible] = useState(false);

  const [addNewColumnFormIsVisible, setAddColumnsFormIsVisible] =
    useState(false);

  const [createNewBoardFormIsVisible, setCreateNewBoardFormIsVisible] =
    useState(false);

  const [deleteBoardFormIsVisible, setDeleteBoardFormIsVisible] =
    useState(false);

  const [editBoardFormIsVisible, setEditBoardFormIsVisible] = useState(false);

  const [editTaskFormIsVisible, setEditTaskFormIsVisible] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        addNewTaskFormIsVisible,
        setAddNewTaskFormIsVisible,
        addNewColumnFormIsVisible,
        setAddColumnsFormIsVisible,
        createNewBoardFormIsVisible,
        setCreateNewBoardFormIsVisible,
        deleteBoardFormIsVisible,
        setDeleteBoardFormIsVisible,
        editBoardFormIsVisible,
        setEditBoardFormIsVisible,
        editTaskFormIsVisible,
        setEditTaskFormIsVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
