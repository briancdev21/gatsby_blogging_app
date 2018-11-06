import React, { Component } from 'react'
import styled from 'styled-components'

import { FlexContainer } from '../layouts/header/components'

class SubscribeEmail extends Component {
  render () {
    return (
      <Container id="mc_embed_signup">
        <form
          action="https://surge.us19.list-manage.com/subscribe/post?u=07b625dd610f01afa3c86d49c&amp;id=209c6872c3"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <FlexContainer justifyContent="space-between"
            className="container"
            id="mc_embed_signup_scroll"
          >
            <SearchInput
              placeholder="Enter email"
              type="email"
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              defaultValue=""
              required
            />
            <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
              <input type="text" name="b_07b625dd610f01afa3c86d49c_209c6872c3" tabIndex="-1" defaultValue="" />
            </div>
            <SubscribeBtn
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button subscribe_btn"
            />
          </FlexContainer>
        </form>
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

const SubscribeBtn = styled.input`
  color: #fff;
  background-color: #013ebf;
  font-family: 'Roboto';
  letter-spacing: 0.83px;
  font-size: 16px;
  line-height: 1em;
  text-align: center;
  padding: 1em 2.5em;
  border-radius: 5px;
  font-weight: 400;
  display: inline-block;
  cursor: pointer;
`
