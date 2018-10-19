import React from 'react'
import styled from 'styled-components'

const Section = ({ children }) => {
  return (
  <Wrapper>
    <Container>
      {children} 
    </Container>    
  </Wrapper>
)}

export default Section;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 960px;
  margin: auto;
  position: relative;
  height: 100%;
`;

const Wrapper = styled.section`
  width: 100%;
  height: 660px;
`;
