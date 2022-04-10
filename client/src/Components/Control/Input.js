import React from "react";
import styled from "styled-components";

export const CustomInput = ({
  required,
  defaultValue,
  readOnly,
  onChangeInput,
  value,
}) => {
  return readOnly ? (
    <ReadOnlyInput>{defaultValue}</ReadOnlyInput>
  ) : (
    <Input
      required={required}
      defaultValue={defaultValue}
      value={value}
      readOnly={readOnly}
      onChange={(ev) => {
        onChangeInput(ev.target.value);
      }}
    />
  );
};
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em auto;
  border: none;
  border-radius: 5px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
const ReadOnlyInput = styled.div`
  padding: 0.5em 30px;
  margin: 0.5em auto;
  border: none;
  border-radius: 5px;
  display: block;
  background-color: lightgrey;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
