import React from "react";
import styled from "styled-components";

export const CustomCardHead = ({ title }) => {
  return <CardHead>{title}:</CardHead>;
};
const CardHead = styled.div`
  align-text: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  color: black;
  background-color: rgba(0, 0, 0, 0.09);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  height: fit-content;
`;
