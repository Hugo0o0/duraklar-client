"use client";

import { Modal, ModalOverlay, Spinner } from "@chakra-ui/react";

const ProgressBar = () => {
  return (
    <Modal onClose={() => {}} isOpen>
      <ModalOverlay display={"grid"} placeItems={"center"}>
        <Spinner color="white" size="lg" />
      </ModalOverlay>
    </Modal>
  );
};

export default ProgressBar;
