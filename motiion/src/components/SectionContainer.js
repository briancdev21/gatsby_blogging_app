import React from 'react'
import styled from 'styled-components'

const SectionContainer = ({ children, style, alignItems, column }) => {
  return (
    <Container alignItems={alignItems} style={{ ...style }} column={column}>
      {children}
    </Container>
  )
}

export default SectionContainer

const Container = styled.div`
  display: ${ props => props.column ? 'block' : 'flex' };
  align-items: ${ props => props.alignItems ? props.alignItems : 'flex-start' };
  width: 960px;
  margin: auto;
  position: relative;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-flow: column;
    justify-content: center;
    padding: 10px;
  }
`
