import React from 'react';
import styled from 'styled-components';

import { icArrowBlack } from '../images';
import FlexContainer from './FlexContainer';

const BackBtn = ({ url, title }) => {
  return (
    <FlexContainer justifyContent="flex-start">
      <Img src={icArrowBlack} alt="back" />Back to
      <a href={url} style={{ textDecoration: 'none', padding: '0 10px', color: '#1e22aa' }}>{title}</a>
    </FlexContainer>
  )
}

export default BackBtn;

const Img = styled.img`
  margin: 0;
  margin-right: 10px;
  width: 6px;
  height: 13px;
`
