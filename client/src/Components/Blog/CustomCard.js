import React from "react";
import styled from "styled-components";

const CustomCard = ({ title, description, bgColor, children }) => {
  return (
    <Card bgColor={bgColor}>
      <CardHead>{title}</CardHead>
      <CardBody>{description}</CardBody>
      {children}
    </Card>
  );
};

export default CustomCard;
const Card = styled.div`
  align-self: stretch;
  padding: 4px;
  margin: 10px;
  min-height: fit-content;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background-color: ${({ bgColor }) => bgColor || "lightgrey"};
  width: 15%;
`;
const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  overflow-y: scroll;
  max-width: 100%;
  min-height: 200px;
  max-height: 200px;
  overflow-wrap: anywhere;
  background-color: lightgrey;
  opacity: 0.6;
`;
const CardHead = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  color: black;
  background-color: rgba(0, 0, 0, 0.09);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  height: fit-content;
  border-radius-top-left: 10px;
`;
