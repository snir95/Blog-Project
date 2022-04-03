import React from 'react'
import styled from 'styled-components'

const bgOps =  {
  View:"yellow",
  Edit:"cyan",
  Delete:"red",
  Save:"lightgreen",
  Close:"lightgrey"
}

export const CustomButton = ({buttonName , onClick }) => {
  return (
    <Button onClick={onClick}  bgc={bgOps[buttonName]}>
      {buttonName}
    </Button>
  )
}
export const CustomButtonRow = ({children}) => {
  return (
    <ButtonRow >
      {children}
    </ButtonRow>
  )
}

const ButtonRow = styled.div`
  display:flex;
  justify-content:center;
`
const Button = styled.button`
  margin: 0 5px;
  background-color: ${({bgc})=> bgc || 'lightblue'} ;
  border: solid rgba(0,0,0,.125);
  border-radius: 15px;
`