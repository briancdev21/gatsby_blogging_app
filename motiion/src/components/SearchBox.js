import styled from 'styled-components'
import React from 'react'

import { icSearch } from '../images'

const SearchBox = ({ placeholder }) => {
  return (
    <Container>
      <Input placeholder={placeholder} />
      <Img src={icSearch} />
    </Container>
  )
}

const Input = styled.input`
  height: 60px;
  width: 540px;
  border: 1px solid #979797;
  border-radius: 3px;
  background-color: #FFFFFF;
  font-size: 20px;
  color: #000000AA;
  padding: 6px 60px 6px 25px;

  @media (max-width: 600px) {
    display: none;
  }
`

const Container = styled.div`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;

  @media (max-width: 600px) {
    width: 38px;
    height: 38px;
  }
`

const Img = styled.img`
  position: absolute;
  top: 13px;
  right: 15px;
  width: 30px;
  cursor: pointer;

  @media (max-width: 600px) {
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    margin: 0;
  }
`

export default SearchBox
