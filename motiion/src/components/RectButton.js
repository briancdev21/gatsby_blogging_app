import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

const RectButton = ({ link, children }) => {
  return (
    <Container to={link}>
      {children}
    </Container>
  )
}

export default RectButton

const Container = styled(Link)`
  width: 300px;
  height: 300px;
  background: #fff;
  color: #1e22aa;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), inset 0px 0px 3px 0px rgba(0,0,0,0.24);
  border-radius: 6px;
  margin: 15px;
  text-decoration: none;

  &:hover {
    box-shadow: 0 4px 28px 14px rgba(0,0,0,0.12), 0px 1px 12px 1px rgba(0,0,0,0.24);
  }

  @media (max-width: 900px) {
    margin: 20px 15px;
    width: calc(100vw - 50px);
    height: calc(100vw - 50px);
    max-width: 350px;
    max-height: 350px;
  }
`
