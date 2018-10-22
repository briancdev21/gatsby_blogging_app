import styled from 'styled-components';
import React from 'react';

const RectButton = ({ link, children }) => {
  return (
    <Container href={link}>
      {children}
    </Container>
  )
}

export default RectButton;

const Container = styled.a`
  width: 300px;
  height: 300px;
  background: #F5F5F5;
  color: #1e22aa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
