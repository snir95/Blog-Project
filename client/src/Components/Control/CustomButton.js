import React from "react";
import styled from "styled-components";

const bgOps = {
  View: "#FFCD00",
  Edit: "#33B8FA",
  Delete: "#FA5633",
  Save: "#42BE03",
  Close: "#7E807D",
};

const CustomButton = ({ disabled, buttonName, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick} bgc={bgOps[buttonName]}>
      {buttonName}
    </Button>
  );
};

export default CustomButton;

const Button = styled.button`
  margin: 0 5px;
  background-color: ${({ bgc }) => bgc || "#2E86C1"};
  border: solid rgba(0, 0, 0, 0.125);
  border-radius: 15px;
  padding: 3px 7px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
