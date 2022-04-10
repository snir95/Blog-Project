import React from "react";
import styled from "styled-components";
import CustomButton from "../Control/CustomButton";

const CustomModalFooter = ({ date, children, onClose }) => {
  return (
    <ModalFooter>
      <p>{date}</p>
      {children}
      <CustomButton buttonName="Close" onClick={onClose}></CustomButton>
    </ModalFooter>
  );
};

export default CustomModalFooter;

const ModalFooter = styled.div`
  height: fit-content;
  padding: 1rem 1rem;
`;
