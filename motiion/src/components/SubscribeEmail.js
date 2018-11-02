import React, { Component } from 'react'
import styled from 'styled-components'

import RoundBtn from './RoundBtn'
import { FlexContainer } from '../layouts/header/components'

class SubscribeEmail extends Component {
  render () {
    return (
      <Container>
        <FlexContainer justifyContent="space-between"
          className="container"
        >
          <SearchInput placeholder="Enter email" />
          <RoundBtn
            className="subscribe_btn" size={16} color={'#fff'} bgColor={'#013ebf'}
          >
          Subscribe
          </RoundBtn>
        </FlexContainer>
      </Container>
    )
  }
}

export default SubscribeEmail

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 6px;

  @media (max-width: 600px) {
    & .container {
      flex-direction: column;
    }
    & input {
      width: 100%;
    }
    & .subscribe_btn {
      width: 100%;
      margin: 0 10px;
    }
  }
`

const SearchInput = styled.input`
  border: none;
  color: #000;
  font-size: 20px;
  letter-spacing: 0.3px;
  height: 48px;
  padding: 0 20px;
  flex: 1;
  margin-right: 10px;
`
