import React from "react";
import styled from "styled-components";
import { CustomButton } from "../Button";

export const CustomModalFooter = ({ date, children, onClose }) => {
  return (
    <ModalFooter>
      <p>{date}</p>
      {children}
      <CustomButton buttonName="Close" onClick={onClose}></CustomButton>
    </ModalFooter>
  );
};
const ModalFooter = styled.div`
  height: fit-content;
  padding: 1rem 1rem;
`;
