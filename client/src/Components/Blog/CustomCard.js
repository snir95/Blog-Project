import React from "react";
import styled from "styled-components";

const CustomCard = ({ title, description, children }) => {
  return (
    <Card>
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
  border: 1px solid rgba(0, 0, 0, 0.125);
  background: white;
  width: 25%;
`;
const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  overflow-y: scroll;
  max-width: 100%;
  min-height: 200px;
  max-height: 200px;
  overflow-wrap: anywhere;
`;
const CardHead = styled.div`
  align-text: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  color: black;
  background-color: rgba(0, 0, 0, 0.09);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  height: fit-content;
`;
