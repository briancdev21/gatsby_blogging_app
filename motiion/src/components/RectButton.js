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
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0px 1px 12px 1px rgba(0,0,0,0.24);
  border-radius: 3px;
`
