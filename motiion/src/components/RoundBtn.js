import styled from 'styled-components'
import React from 'react'

const RoundBtn = ({ link, children, bgColor, color, size, target, style }) => {
  return (
    <Container style={style} href={link} target={target} bgColor={bgColor} color={color} size={size}>
      {children}
    </Container>
  )
}

const Container = styled.a`
  background-color: ${ props => props.bgColor };
  color: ${ props => props.color ? props.color : '#FFFFFF' };
  font-family: 'Roboto';
  font-size: ${ props => props.size }px;
  letter-spacing: 0.83px;
  line-height: 1em;
  text-align: center;
  padding: 1em 2.5em;
  border-radius: 5px;
  font-weight: 400;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
`

export default RoundBtn
