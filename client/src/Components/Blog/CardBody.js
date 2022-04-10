import React from "react";
import styled from "styled-components";

export const CustomCardBody = ({ description }) => {
  return <CardBody>{description}</CardBody>;
};
const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  overflow-y: scroll;
  max-width: 100%;
  min-height: 200px;
  max-height: 200px;
  overflow-wrap: anywhere;
`;
