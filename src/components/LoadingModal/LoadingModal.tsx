"use client";

import { Modal, ModalOverlay, Spinner } from "@chakra-ui/react";

const LoadingModal = () => {
  return (
    <Modal isOpen onClose={() => {}}>
      <ModalOverlay
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner size={"xl"} />
      </ModalOverlay>
    </Modal>
  );
};

export default LoadingModal;
