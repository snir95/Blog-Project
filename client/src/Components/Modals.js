import React from "react";
import styled from "styled-components";
import { CustomButton } from "./Control/Button";

export const CustomModal = ({ show, children, header }) => {
  return (
    <Modal show={show}>
      <ModalMiddle>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalMiddle>
    </Modal>
  );
};
export const CustomModalFooter = ({ date, children, onClose }) => {
  return (
    <ModalFooter>
      <p>{date}</p>
      {children}
      <CustomButton buttonName="Close" onClick={onClose}></CustomButton>
    </ModalFooter>
  );
};
export const CustomInput = ({
  required,
  defaultValue,
  readOnly,
  onChangeInput,
  value,
}) => {
  return readOnly ? (
    <ReadOnlyInput>{defaultValue}</ReadOnlyInput>
  ) : (
    <Input
      required={required}
      defaultValue={defaultValue}
      value={value}
      readOnly={readOnly}
      onChange={(ev) => {
        onChangeInput(ev.target.value);
      }}
    />
  );
};
const Modal = styled.div`
  text-align: center;
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
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
const ModalFooter = styled.div`
  height: fit-content;
  padding: 1rem 1rem;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em auto;
  border: none;
  border-radius: 5px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
const ReadOnlyInput = styled.div`
  padding: 0.5em 30px;
  margin: 0.5em auto;
  border: none;
  border-radius: 5px;
  display: block;
  background-color: lightgrey;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
