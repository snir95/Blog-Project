import React from "react";
import styled from "styled-components";

const CustomButtonRow = ({ children }) => {
  return <ButtonRow>{children}</ButtonRow>;
};

export default CustomButtonRow;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;
