import React from 'react'
import styled from 'styled-components'

const SectionContainer = ({ children, style, alignItems }) => {
  return (
    <Container alignItems={alignItems} style={{...style}}>
      {children}
    </Container>
)}

export default SectionContainer;

const Container = styled.div`
  display: flex;
  align-items: ${props => props.alignItems ? props.alignItems : 'flex-start'};
  width: 960px;
  margin: auto;
  position: relative;
  min-height: 660px;
  position: relative;
`;
