import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

const RoundBtn = ({ className, link, children, bgcolor, color, size, target, style }) => {
  return (
    <Container className={className} style={style} to={link} target={target} bgcolor={bgcolor} color={color} size={size}>
      {children}
    </Container>
  )
}

const Container = styled(Link)`
  background-color: ${ props => props.bgcolor };
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
