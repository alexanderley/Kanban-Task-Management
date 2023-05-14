import React from "react";

import Modal from "../modals/Modal";
import AddNewTaskModalContent from "../modals/AddNewTaskModalContent";

import "./AddNewTaskForm.scss";

export default function AddNewTaskForm() {
  return (
    <Modal>
      <AddNewTaskModalContent />
    </Modal>
  );
}
