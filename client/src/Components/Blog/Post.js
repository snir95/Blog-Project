import React from "react";
import styled from "styled-components";

export const CustomCard = ({ children }) => {
  return <Card>{children}</Card>;
};

const Card = styled.div`
  align-self: stretch;
  padding: 4px;
  margin: 10px;
  min-height: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background: white;
  width: 25%;
`;
