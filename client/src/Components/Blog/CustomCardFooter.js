import React from "react";
import styled from "styled-components";

const CustomCardFooter = ({ date, children }) => {
  return (
    <CardFooter>
      <p>{date}</p>
      {children}
    </CardFooter>
  );
};

export default CustomCardFooter;
const CardFooter = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.09);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  height: fit-content;
`;
