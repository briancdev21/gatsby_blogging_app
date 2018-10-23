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
`

const Container = styled.div`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
`

const Img = styled.img`
  position: absolute;
  top: 13px;
  right: 15px;
  width: 30px;
`

export default SearchBox;
