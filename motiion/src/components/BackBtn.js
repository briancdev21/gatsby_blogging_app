import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { icArrowBlack } from '../images'
import FlexContainer from './FlexContainer'

const BackBtn = ({ url, title }) => {
  return (
    <FlexContainer justifyContent="flex-start" style={{ padding: 0 }}>
      <Img src={icArrowBlack} alt="back" />Back to
      <Link to={url} style={{ textDecoration: 'none', padding: '0 6px', color: '#013EBF' }}>{title}</Link>
    </FlexContainer>
  )
}

export default BackBtn

const Img = styled.img`
  margin: 0;
  margin-right: 10px;
  width: 6px;
  height: 13px;
`
