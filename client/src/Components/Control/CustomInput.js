import React from "react";
import styled from "styled-components";

const CustomInput = ({
  required,
  defaultValue,
  readOnly,
  onChangeInput,
  value,
  type,
}) => {
  return readOnly ? (
    <ReadOnlyInput>{defaultValue}</ReadOnlyInput>
  ) : (
    <Input
      type={type}
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

export default CustomInput;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em auto;
  border: none;
  border-radius: 5px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 50%;
`;
const ReadOnlyInput = styled.div`
  padding: 0.5em 30px;
  width: 50%;
  margin: 0.5em auto;
  border: none;
  border-radius: 5px;
  display: block;
  background-color: lightgrey;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
