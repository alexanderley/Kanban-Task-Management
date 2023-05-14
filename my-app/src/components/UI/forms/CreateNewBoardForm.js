import React from "react";

import Modal from "../modals/Modal";
import CreateNewBoardModalContent from "../modals/CreateNewBoardModalContent";

export default function CreateNewBoardForm() {
  return (
    <Modal>
      <CreateNewBoardModalContent />
    </Modal>
  );
}
