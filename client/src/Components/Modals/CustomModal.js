import React from "react";
import styled from "styled-components";

const CustomModal = ({ children, header }) => {
  return (
    <Modal>
      <ModalMiddle>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalMiddle>
    </Modal>
  );
};

export default CustomModal;

const Modal = styled.div`
  text-align: center;
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
`;
const ModalMiddle = styled.div`
  margin: auto;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 15%;
  max-height: fit-content;
  background: white;
  color: black;
`;
const ModalHeader = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  height: fit-content;
  padding: 1rem 1rem;
`;
const ModalBody = styled.div`
  align-text: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  height: fit-content;
  flex: 1 1 auto;
  padding: 1rem 1rem;
  min-height: 200px;
  max-height: fit-content;
`;
