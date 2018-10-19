import React from 'react'
import styled from 'styled-components'

const Section = ({ children, style }) => {
  return (
  <section style={{...style}}>
    <Container>
      {children} 
    </Container>    
  </section>
)}

export default Section;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 960px;
  margin: auto;
  position: relative;
  min-height: 660px;
  position: relative;
`;
