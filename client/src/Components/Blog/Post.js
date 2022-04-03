import React from 'react'
import styled from 'styled-components'

export const CustomCardContainer = ({children}) => {
  return(
    <CardContainer>
      {children}  
    </CardContainer>
  )
}
export const CustomCard = ({children}) => {
  return(
    <Card>
      {children}  
    </Card>
  )
}
export const CustomCardHead = ({title}) => {
  return(
    <CardHead>{title}:</CardHead>
  )
}
export const CustomCardBody = ({description}) => {
  return(
    <CardBody>{description}</CardBody>
  )
}
export const CustomCardFooter = ({date, children}) => {
  return(
    <CardFooter>  
      <p>{date}</p>   
      {children}
    </CardFooter>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled.div`
  align-self: stretch;
  padding: 4px;
  margin:  10px;
  min-height:fit-content;
  border:1px solid rgba(0,0,0,.125);
  width:25%;
  
`
const CardHead = styled.div`
  align-text:center;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  color:black;
  background-color: rgba(0,0,0,.09);
  border-bottom: 1px solid rgba(0,0,0,.125);
  height:fit-content;
`

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  overflow:scroll;
  min-height:200px;

`
const CardFooter = styled.div`
  padding: 0.5rem 1rem;
  background-color: rgba(0,0,0,.09);
  border-top: 1px solid rgba(0,0,0,.125);
  height:fit-content;
  `
  