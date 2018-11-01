import styled from 'styled-components'
import React from 'react'

import { icDownArrow } from '../images'

const BlogLoadMoreBtn = ({ moreLoadHander }) => {
  return (
    <Container onClick={moreLoadHander}>
      <span>Load more</span>
      <Img src={icDownArrow} />
    </Container>
  )
}

const Container = styled.div`
  display: inline-block;
  color: #013EBF;
  background-color: #fff;
  padding: 10px 40px 10px 30px;
  font-size: 14px;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
  height: 40px;
  font-weight: 500;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0px 0px 3px 0px rgba(0,0,0,0.24);
`

const Img = styled.img`
  position: absolute;
  top: 18px;
  right: 13px;
  width: 7px;
  height: 4px;
`

export default BlogLoadMoreBtn
